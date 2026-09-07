(() => {
  'use strict';

  const STORAGE_KEY = 'cs17_os_reviewer_progress_v2';
  const APP_VERSION = 2;
  const DEFAULT_DELETED_FLASHCARDS = Object.freeze({
    l1: [
      'l1_objectives',
      'l1_user_priorities',
      'l1_mobile_interfaces',
      'l1_embedded_characteristics',
      'l1_shared_memory',
      'l1_controller_diagram',
      'l1_isr',
      'l1_interrupt_functions',
      'l1_interrupt_driven_io',
      'l1_io_waiting',
      'l1_io_without_waiting',
      'l1_rom',
      'l1_eprom',
      'l1_dedicated_shared',
      'l1_os_origin'
    ]
  });
  const content = document.getElementById('content');
  const lessonNav = document.getElementById('lessonNav');
  const modeNav = document.getElementById('modeNav');
  const pageTitle = document.getElementById('pageTitle');
  const lessonEyebrow = document.getElementById('lessonEyebrow');
  const topMastered = document.getElementById('topMastered');
  const topAccuracy = document.getElementById('topAccuracy');
  const calcNav = document.getElementById('calcNav');
  const sidebar = document.getElementById('sidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const menuToggle = document.getElementById('menuToggle');
  const saveLocalSnapshotBtn = document.getElementById('saveLocalSnapshotBtn');
  const restoreLocalSnapshotBtn = document.getElementById('restoreLocalSnapshotBtn');
  const toastEl = document.getElementById('toast');
  const IS_LOCAL_RUNNER = ['127.0.0.1','localhost'].includes(location.hostname) && location.port==='8765';
  let localSnapshotTimer = null;

  const loadedProgress = loadProgress();
  const allowedViews = new Set(['dashboard','flashcards','identification','enumeration','multiple','calculations','mixed']);
  const savedLesson = loadedProgress.ui?.lessonId;
  const savedView = loadedProgress.ui?.view;
  const state = {
    lessonId: savedLesson && LESSONS[savedLesson] ? savedLesson : 'l1',
    view: allowedViews.has(savedView) ? savedView : 'dashboard',
    session: null,
    progress: loadedProgress,
    topicOpen: null,
  };

  function defaultDeletedFlashcards() {
    return Object.fromEntries(Object.entries(DEFAULT_DELETED_FLASHCARDS).map(([lessonId,ids])=>[lessonId,[...ids]]));
  }

  function applyDefaultDeletedFlashcards(deleted) {
    deleted ||= {};
    for (const [lessonId,ids] of Object.entries(DEFAULT_DELETED_FLASHCARDS)) {
      if (!Object.prototype.hasOwnProperty.call(deleted,lessonId)) deleted[lessonId]=[...ids];
    }
    return deleted;
  }

  function emptyProgress() {
    return {
      version: APP_VERSION,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      conceptStats: {},
      questionStats: {},
      sessions: [],
      preferences: { flashcardFront: 'description' },
      ui: { lessonId: 'l1', view: 'dashboard' },
      resume: {},
      deletedFlashcards: defaultDeletedFlashcards(),
    };
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return emptyProgress();
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== APP_VERSION) return emptyProgress();
      parsed.conceptStats ||= {};
      parsed.questionStats ||= {};
      parsed.sessions ||= [];
      parsed.preferences ||= {};
      parsed.ui ||= {lessonId:'l1',view:'dashboard'};
      parsed.resume ||= {};
      parsed.deletedFlashcards=applyDefaultDeletedFlashcards(parsed.deletedFlashcards);
      if (!['description','answer'].includes(parsed.preferences.flashcardFront)) parsed.preferences.flashcardFront='description';
      return parsed;
    } catch {
      return emptyProgress();
    }
  }

  function saveProgress() {
    state.progress.updatedAt = Date.now();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
      scheduleLocalSnapshot();
    } catch {
      toast('Could not save browser progress.');
    }
  }

  function scheduleLocalSnapshot() {
    if (!IS_LOCAL_RUNNER) return;
    clearTimeout(localSnapshotTimer);
    localSnapshotTimer=setTimeout(()=>saveLocalSnapshot(false),300);
  }

  async function saveLocalSnapshot(showToast=true) {
    if (!IS_LOCAL_RUNNER) return false;
    try {
      const response=await fetch('/__progress_snapshot',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(state.progress)
      });
      if (!response.ok) throw new Error('Snapshot save failed');
      const result=await response.json();
      if (showToast) toast(`Saved locally as ${result.file||'local-progress-snapshot.json'}.`);
      return true;
    } catch {
      if (showToast) toast('Could not save the local progress snapshot. Restart start.bat and try again.');
      return false;
    }
  }

  function prepareImportedProgress(parsed) {
    if (!parsed || parsed.version!==APP_VERSION || typeof parsed.conceptStats!=='object' || typeof parsed.questionStats!=='object') throw new Error('Invalid progress');
    parsed.sessions ||= [];
    parsed.preferences ||= {flashcardFront:'description'};
    parsed.ui ||= {lessonId:'l1',view:'dashboard'};
    parsed.resume ||= {};
    parsed.deletedFlashcards=applyDefaultDeletedFlashcards(parsed.deletedFlashcards);
    if (!['description','answer'].includes(parsed.preferences.flashcardFront)) parsed.preferences.flashcardFront='description';
    return parsed;
  }

  function applyImportedProgress(parsed,message) {
    parsed=prepareImportedProgress(parsed);
    state.progress=parsed;
    state.lessonId=parsed.ui.lessonId && LESSONS[parsed.ui.lessonId]?parsed.ui.lessonId:'l1';
    state.view=allowedViews.has(parsed.ui.view)?parsed.ui.view:'dashboard';
    saveProgress();
    state.session=null;
    render();
    toast(message);
  }

  async function restoreLocalSnapshot() {
    if (!IS_LOCAL_RUNNER) return;
    try {
      const response=await fetch('/__progress_snapshot',{cache:'no-store'});
      if (!response.ok) throw new Error('No snapshot');
      const parsed=await response.json();
      applyImportedProgress(parsed,'Local progress snapshot restored.');
    } catch {
      toast('No valid local progress snapshot was found.');
    }
  }

  function esc(value = '') {
    return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }

  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function clamp(v, min = 0, max = 1) { return Math.max(min, Math.min(max, v)); }

  function normalize(s) {
    return String(s ?? '')
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[–—−→]/g, '-')
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9+/#\s-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function compact(s) {
    return normalize(s).replace(/[\s\-_/#+]/g, '');
  }

  function levenshtein(a, b) {
    a = normalize(a); b = normalize(b);
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    const prev = Array.from({length:n+1}, (_,i)=>i);
    for (let i=1;i<=m;i++) {
      const cur=[i];
      for (let j=1;j<=n;j++) {
        const cost=a[i-1]===b[j-1]?0:1;
        cur[j]=Math.min(cur[j-1]+1, prev[j]+1, prev[j-1]+cost);
      }
      for (let j=0;j<=n;j++) prev[j]=cur[j];
    }
    return prev[n];
  }

  function similarity(a,b) {
    const na=normalize(a), nb=normalize(b);
    if (!na && !nb) return 1;
    if (!na || !nb) return 0;
    if (na === nb) return 1;
    const d=levenshtein(na,nb);
    return 1 - d / Math.max(na.length, nb.length);
  }

  function bestAliasScore(value, aliases) {
    const v=normalize(value);
    const vc=compact(value);
    if (!v) return 0;
    let best=0;
    for (const alias of aliases) {
      const a=normalize(alias);
      const ac=compact(alias);
      if (v===a || (vc && vc===ac)) return 1;

      // Typo catcher: ignore capitalization, extra/missing spaces, punctuation,
      // hyphens/slashes, and a small number of genuine typing mistakes.
      const d=levenshtein(vc,ac);
      const len=Math.max(vc.length,ac.length);
      const allowed=len<=4?0:len<=8?1:len<=16?2:3;
      if (d<=allowed) best=Math.max(best,.96);
      else best=Math.max(best, similarity(vc,ac));
    }
    return best;
  }

  function acceptedLabel(group) {
    if (!Array.isArray(group)) return String(group);
    return group[0];
  }

  function lesson() { return LESSONS[state.lessonId]; }

  function allQuestions(l = lesson()) {
    const out=[];
    for (const q of (l.identification || [])) out.push({type:'identification', q});
    for (const q of (l.enumeration || [])) out.push({type:'enumeration', q});
    for (const q of (l.multiple || [])) out.push({type:'multiple', q});
    for (const q of (l.calculations || [])) out.push({type:'calculations', q});
    const typeOrder={identification:0,enumeration:1,multiple:2,calculations:3};
    return out.sort((a,b)=>(a.q.order??999999)-(b.q.order??999999) || typeOrder[a.type]-typeOrder[b.type]);
  }

  function deletedFlashcardSet(lessonId=state.lessonId) {
    return new Set(state.progress.deletedFlashcards?.[lessonId] || []);
  }

  function availableFlashcards(l=lesson()) {
    const deleted=deletedFlashcardSet(l.id);
    return (l.flashcards || l.concepts || []).filter(card=>!deleted.has(card.id));
  }

  function flashcardIsFullyCorrect(card) {
    const qs=state.progress.questionStats[`flashcards:card_${card.id}`];
    return !!qs?.attempts && (qs.lastScore ?? 0) >= .999;
  }

  function remainingFlashcards(l=lesson()) {
    return availableFlashcards(l).filter(card=>!flashcardIsFullyCorrect(card));
  }

  function itemsForMode(mode,l=lesson()) {
    if (mode==='flashcards') return availableFlashcards(l);
    if (mode==='identification') return l.identification || [];
    if (mode==='enumeration') return l.enumeration || [];
    if (mode==='multiple') return l.multiple || [];
    if (mode==='calculations') return l.calculations || [];
    return [];
  }

  // Real progress: every item in the mode is part of the denominator from the start.
  // Only a fully correct latest result counts as correct. Unanswered and incorrect items count as 0.
  function modeOverallStats(mode,l=lesson()) {
    const items=itemsForMode(mode,l);
    const total=items.length;
    let attempted=0, correct=0;
    for (const item of items) {
      const key=mode==='flashcards' ? `flashcards:card_${item.id}` : `${mode}:${item.id}`;
      const qs=state.progress.questionStats[key];
      if (!qs || !qs.attempts) continue;
      attempted++;
      if ((qs.lastScore ?? 0) >= .999) correct++;
    }
    const ratio=total ? correct/total : 0;
    const pct=Math.round(ratio*1000)/10;
    return {mode,total,attempted,correct,ratio,pct};
  }

  function lessonStats(l=lesson()) {
    // Flashcards are the canonical, de-duplicated lesson coverage set.
    // Other modes test the same source catalog in different ways, so they keep separate percentages.
    return modeOverallStats('flashcards',l);
  }

  function flashcardLessonStats(l=lesson()) {
    return modeOverallStats('flashcards',l);
  }

  function overallStatusText(mode,l=lesson()) {
    if (mode==='mixed') {
      const st=lessonStats(l);
      return `Overall reviewer score: ${st.correct}/${st.total} correct (${st.pct}%) · ${st.attempted}/${st.total} attempted`;
    }
    const st=modeOverallStats(mode,l);
    return `Overall ${titleForView(mode)} score: ${st.correct}/${st.total} correct (${st.pct}%) · ${st.attempted}/${st.total} attempted`;
  }

  function recordAttempt(item, score, meta={}) {
    score=clamp(score);
    const q=item.q;
    const key=`${item.type}:${q.id}`;
    const qs=state.progress.questionStats[key] ||= {lessonId:state.lessonId,type:item.type,attempts:0,totalScore:0,lastScore:0,lastAt:0};
    qs.attempts++;
    qs.totalScore += score;
    qs.lastScore=score;
    qs.lastAt=Date.now();

    for (const id of (q.concepts || [])) {
      const cs=state.progress.conceptStats[id] ||= {attempts:0,scores:[],total:0,lastAt:0};
      cs.attempts++;
      cs.total += score;
      cs.scores.push(score);
      if (cs.scores.length>12) cs.scores=cs.scores.slice(-12);
      cs.lastAt=Date.now();
    }
    saveProgress();
    if (state.session) {
      state.session.results.push({type:item.type,id:q.id,prompt:q.prompt || q.term,score,meta,concepts:q.concepts || []});
    }
    updateHeaderStats();
  }

  function recordFlashcard(card, score, label) {
    const item={type:'flashcards',q:{id:`card_${card.id}`,concepts:card.concepts||[card.id],prompt:card.term}};
    recordAttempt(item,score,{rating:label});
  }

  function toast(msg) {
    toastEl.textContent=msg;
    toastEl.classList.add('show');
    clearTimeout(toastEl._t);
    toastEl._t=setTimeout(()=>toastEl.classList.remove('show'),2200);
  }

  function setSidebarOpen(open) {
    const mobile=window.innerWidth<=760;
    const shouldOpen=mobile && !!open;
    sidebar.classList.toggle('open',shouldOpen);
    sidebarBackdrop?.classList.toggle('open',shouldOpen);
    menuToggle?.setAttribute('aria-expanded',String(shouldOpen));
    if (sidebarBackdrop) sidebarBackdrop.tabIndex=shouldOpen?0:-1;
  }

  function closeSidebar() { setSidebarOpen(false); }

  function setView(view) {
    state.view=allowedViews.has(view)?view:'dashboard';
    state.session=null;
    state.progress.ui ||= {};
    state.progress.ui.lessonId=state.lessonId;
    state.progress.ui.view=state.view;
    saveProgress();
    modeNav.querySelectorAll('.mode-button').forEach(btn=>btn.classList.toggle('active',btn.dataset.view===state.view));
    render();
    closeSidebar();
  }

  function setLesson(id) {
    state.lessonId=id;
    state.view='dashboard';
    state.session=null;
    state.topicOpen=null;
    state.progress.ui ||= {};
    state.progress.ui.lessonId=id;
    state.progress.ui.view='dashboard';
    saveProgress();
    renderNav();
    render();
    closeSidebar();
  }

  function renderNav() {
    lessonNav.innerHTML=Object.values(LESSONS).map(l=>{
      const st=lessonStats(l);
      return `<button class="lesson-button ${l.id===state.lessonId?'active':''}" data-lesson="${l.id}">
        <span class="lesson-num">${l.number}</span>
        <span class="lesson-meta"><span class="lesson-name">${esc(l.title)}</span><span class="lesson-progress">${st.correct}/${st.total} correct · ${st.pct}%</span></span>
      </button>`;
    }).join('');
    lessonNav.querySelectorAll('[data-lesson]').forEach(b=>b.addEventListener('click',()=>setLesson(b.dataset.lesson)));
    calcNav.style.display=(lesson().calculations?.length)?'flex':'none';
  }

  function updateHeaderStats() {
    const l=lesson();
    const isMode=['flashcards','identification','enumeration','multiple','calculations'].includes(state.view);
    const st=isMode?modeOverallStats(state.view,l):lessonStats(l);
    lessonEyebrow.textContent=`LESSON ${l.number}`;
    topMastered.textContent=`${st.correct}/${st.total}`;
    topAccuracy.textContent=`${st.pct}%`;
  }

  function render() {
    renderNav();
    updateHeaderStats();
    pageTitle.textContent=titleForView(state.view);
    if (state.view==='dashboard') renderDashboard();
    else if (state.view==='flashcards') startFlashcards();
    else startQuestionMode(state.view);
  }

  function titleForView(v) {
    return ({dashboard:'Dashboard',flashcards:'Flashcards',identification:'Identification',enumeration:'Enumeration',multiple:'Multiple Answer',calculations:'Scheduling Drills',mixed:'Mixed Practice'})[v] || 'Reviewer';
  }

  function renderDashboard() {
    const l=lesson(), st=lessonStats(l);
    const flashcards=availableFlashcards(l);
    const deletedCount=(l.flashcards||l.concepts||[]).length-flashcards.length;
    const modes=[
      ['flashcards','▣','Flashcards','Review every keyword, definition, dedicated PPT list, and included visual item in slide order.',flashcards.length],
      ['identification','⌨','Identification','Type the source-grounded keyword or PPT heading described by the item.',l.identification?.length||0],
      ['enumeration','≡','Enumeration','Recall the exact PPT lists. Answer order does not matter.',l.enumeration?.length||0],
      ['multiple','☑','Multiple Answer','Select every item that belongs to the PPT topic.',l.multiple?.length||0],
      ['mixed','⤨','Mixed Practice','Identification, enumeration, multiple-answer, and calculation items interleaved in PPT order.',allQuestions(l).length]
    ];
    if (l.calculations?.length) modes.splice(4,0,['calculations','∑','Scheduling Drills','Practice AT, BT, CT, TAT, WT, RT and scheduling computations.',l.calculations.length]);

    const notes=(l.sourceNotes||[]).map(n=>`<li>${esc(n)}</li>`).join('');
    const formulaPanel=l.number===4 ? `
      <div class="card quick-sheet">
        <div class="section-title compact"><h3>Scheduling Formula Quick Sheet</h3><p>Directly from Lesson 4</p></div>
        <div class="formula-grid">
          <div><b>TAT</b><span>CT − AT</span></div>
          <div><b>WT</b><span>TAT − BT</span></div>
          <div><b>RT</b><span>First CPU start − AT</span></div>
          <div><b>Average</b><span>Sum of values ÷ number of processes</span></div>
        </div>
      </div>` : '';

    const primaryStats=['flashcards','identification','enumeration','multiple'].map(mode=>modeOverallStats(mode,l));
    const statName={flashcards:'Flashcards',identification:'Identification',enumeration:'Enumeration',multiple:'Multiple Answer'};

    content.innerHTML=`
      <div class="hero">
        <div class="card hero-main">
          <div class="question-kicker">${esc(l.sourceLabel)}</div>
          <h2>${esc(l.title)}</h2>
          <p>${esc(l.subtitle)}</p>
          <div class="hero-actions">
            <button class="button primary" data-go="flashcards">Start / Resume Flashcards</button>
            <button class="button soft" data-go="mixed">Mixed Practice</button>
          </div>
        </div>
        <div class="card hero-side">
          <div class="hero-side-title">Overall reviewer score</div>
          <div class="progress-ring-wrap">
            <div class="progress-ring" style="--pct:${st.pct}%"><strong>${st.pct}%</strong><small>correct overall</small></div>
            <div class="progress-copy">
              <div><b>${st.correct}/${st.total}</b> items correct</div>
              <div><b>${st.attempted}/${st.total}</b> items attempted</div>
              <div><b>${Math.max(0,st.total-st.attempted)}</b> items not attempted</div>
              <div>Unanswered and incorrect items remain part of the denominator.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="cache-note">Progress, current lesson, study mode, and flashcard position are saved in this browser's localStorage. Percentages are based on correct items divided by every available item in the mode or lesson, including unanswered items.</div>

      <div class="stats-grid">
        ${primaryStats.map(x=>`<div class="card stat-card"><div class="stat-label">${esc(statName[x.mode])}</div><div class="stat-value">${x.pct}%</div><div class="stat-note">${x.correct}/${x.total} correct · ${x.attempted}/${x.total} attempted</div></div>`).join('')}
      </div>

      ${formulaPanel}

      <div class="section-title"><div><h3>Study modes</h3><p>All standard modes use the same source-grounded lesson catalog.</p></div></div>
      <div class="mode-grid">
        ${modes.map(([id,icon,name,desc,count])=>{
          const ms=id==='mixed'?null:modeOverallStats(id,l);
          return `<div class="card mode-card" data-go="${id}"><div class="mode-icon">${icon}</div><h4>${esc(name)}</h4><p>${esc(desc)}</p><div class="mode-count">${count} ${id==='flashcards'?'cards':'items'}${ms?` · ${ms.correct}/${ms.total} correct (${ms.pct}%)`:''}</div></div>`;
        }).join('')}
      </div>

      ${notes ? `<div class="section-title"><div><h3>Source notes</h3><p>Important source and visual-scan details.</p></div></div><div class="card source-notes"><ul>${notes}</ul></div>`:''}

      <div class="section-title"><div><h3>Flashcard coverage</h3><p>Every active flashcard item in PPT order. Deleted cards stay removed after refresh.</p></div>${deletedCount?`<button class="button tiny" id="restoreDeletedCardsBtn">Restore ${deletedCount} deleted card${deletedCount===1?'':'s'}</button>`:''}</div>
      <div class="topic-list">
        ${flashcards.map(c=>{
          const qs=state.progress.questionStats[`flashcards:card_${c.id}`];
          const status=!qs?.attempts?{label:'New',cls:'mastery-new'}:(qs.lastScore??0)>=.999?{label:'Correct',cls:'mastery-mastered'}:{label:'Incorrect',cls:'mastery-weak'};
          const preview=c.definition || (c.points||[]).join(' • ');
          return `<div class="topic-row clickable" data-topic="${c.id}"><div><div class="topic-term">${esc(c.term)}</div><div class="topic-source">${esc(c.source||'')}</div>${state.topicOpen===c.id?`<div class="topic-definition">${esc(preview)}</div>`:''}</div><span class="mastery-pill ${status.cls}">${status.label}</span></div>`;
        }).join('')}
      </div>`;

    content.querySelectorAll('[data-go]').forEach(el=>el.addEventListener('click',()=>setView(el.dataset.go)));
    content.querySelectorAll('[data-topic]').forEach(el=>el.addEventListener('click',()=>{state.topicOpen=state.topicOpen===el.dataset.topic?null:el.dataset.topic;renderDashboard();}));
    document.getElementById('restoreDeletedCardsBtn')?.addEventListener('click',restoreDeletedCards);
  }

  function startFlashcards() {
    if (!state.session || state.session.mode!=='flashcards') {
      const allCards=[...availableFlashcards(lesson())].sort((a,b)=>(a.order??0)-(b.order??0));
      const remaining=allCards.filter(card=>!flashcardIsFullyCorrect(card));
      // Once a card's latest result is fully correct, leave it out of the next/resumed
      // round. If every active card is already correct, allow an intentional full review.
      const queue=remaining.length ? remaining : allCards;
      const saved=state.progress.resume?.[state.lessonId]?.flashcards;
      const savedIndex=Number.isInteger(saved?.index)?saved.index:0;
      const legacyCardId=allCards[Math.max(0,Math.min(savedIndex,Math.max(0,allCards.length-1)))]?.id;
      const wantedCardId=saved?.cardId || legacyCardId;
      let resumeIndex=0;
      if (wantedCardId && queue.length) {
        const exactIndex=queue.findIndex(card=>card.id===wantedCardId);
        if (exactIndex>=0) resumeIndex=exactIndex;
        else {
          const targetOrder=allCards.find(card=>card.id===wantedCardId)?.order ?? -Infinity;
          const nextIndex=queue.findIndex(card=>(card.order??0)>=targetOrder);
          resumeIndex=nextIndex>=0?nextIndex:0;
        }
      }
      state.session={
        mode:'flashcards',
        queue,
        index:Math.max(0,Math.min(resumeIndex,Math.max(0,queue.length-1))),
        results:[],
        flipped:false,
        ratings:{},
        startedAt:Date.now()
      };
      state.progress.resume ||= {};
      state.progress.resume[state.lessonId] ||= {};
      state.progress.resume[state.lessonId].flashcards={index:state.session.index,cardId:queue[state.session.index]?.id||null};
      saveProgress();
    }
    state.session.ratings ||= {};
    renderFlashcard();
  }

  function maskAnswerText(c,input) {
    let text=String(input||'');
    const answerForms=[c.term,...(c.aliases||[])]
      .filter(Boolean)
      .map(String)
      .sort((a,b)=>b.length-a.length);

    for (const answer of answerForms) {
      const escaped=answer.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      const startsWord=/^[A-Za-z0-9]/.test(answer);
      const endsWord=/[A-Za-z0-9]$/.test(answer);
      const pattern=`${startsWord?'\\b':''}${escaped}${endsWord?'\\b':''}`;
      text=text.replace(new RegExp(pattern,'gi'),'____________');
    }
    return text;
  }

  function flashVisual(c,kind) {
    const visual=c.visual;
    if (!visual?.src) return '';
    const side=visual.side || 'answer';
    if (side!=='both' && side!==kind) return '';
    const alt=visual.alt || `${c.term} visual`;
    const caption=visual.caption || '';
    return `<figure class="flash-visual"><img src="${esc(visual.src)}" alt="${esc(alt)}" draggable="false" />${caption?`<figcaption>${esc(caption)}</figcaption>`:''}</figure>`;
  }

  function flashDensityClass(c,kind) {
    const visual=c.visual?.src && (c.visual.side==='both' || (c.visual.side||'answer')===kind);
    const points=kind==='description'?(c.points||[]):[];
    const chars=kind==='description'
      ? String(c.definition||'').length + points.reduce((sum,p)=>sum+String(p).length,0)
      : String(c.term||'').length;
    const weight=chars + (points.length*70) + (visual?180:0);
    if (weight>=1050 || points.length>=8) return 'flash-extra-dense';
    if (weight>=650 || points.length>=5) return 'flash-dense';
    return 'flash-standard';
  }

  function flashFace(c, kind, isBack=false) {
    const reveal = kind==='description' ? 'answer' : 'description';
    const visual=flashVisual(c,kind);
    const density=flashDensityClass(c,kind);
    const visualClass=visual?' has-visual':'';
    if (kind==='description') {
      const definition=maskAnswerText(c,c.definition||'');
      const points=(c.points||[]).map(point=>maskAnswerText(c,point));
      return `<div class="flash-face ${isBack?'flash-back':''} flash-description-face ${density}${visualClass}"><div class="flash-label">DESCRIPTION · ${esc(c.source||'')}</div><div class="flash-face-scroll"><div class="flash-face-content">${visual}${definition?`<p class="flash-definition">${esc(definition)}</p>`:''}${points.length?`<ul class="flash-points">${points.map(point=>`<li>${esc(point)}</li>`).join('')}</ul>`:''}</div></div><div class="flash-hint">Tap/click to reveal ${reveal}</div></div>`;
    }
    return `<div class="flash-face ${isBack?'flash-back':''} flash-answer-face ${density}${visualClass}"><div class="flash-label">ANSWER · ${esc(c.source||'')}</div><div class="flash-face-scroll"><div class="flash-face-content"><h2>${esc(c.term)}</h2>${visual}</div></div><div class="flash-hint">Tap/click to reveal ${reveal}</div></div>`;
  }

  function moveFlashcard(delta, animation='') {
    const s=state.session;
    if (!s || s.mode!=='flashcards') return;
    const next=s.index+delta;
    if (next<0) return;
    if (next>=s.queue.length) return finishSession();
    s.index=next;
    s.flipped=false;
    s.entryAnimation=animation || (delta>0?'next':'prev');
    state.progress.resume ||= {};
    state.progress.resume[state.lessonId] ||= {};
    state.progress.resume[state.lessonId].flashcards={index:s.index,cardId:s.queue[s.index]?.id||null};
    saveProgress();
    renderFlashcard();
  }

  function rateFlashcardAndAdvance(concept, score, label, animation='next') {
    const s=state.session;
    if (!s || s.mode!=='flashcards') return;
    if (!s.ratings[concept.id]) {
      s.ratings[concept.id]={score,label};
      recordFlashcard(concept,score,label);
    } else {
      toast(`Already rated: ${s.ratings[concept.id].label}`);
    }
    moveFlashcard(1,animation);
  }

  function renderFlashcard() {
    const s=state.session;
    if (!s || s.index>=s.queue.length) return finishSession();
    const c=s.queue[s.index];
    const flashStats=flashcardLessonStats(lesson());
    const flashStatusClass=flashStats.attempted===0?'mastery-new':flashStats.pct>=100?'mastery-mastered':'mastery-learning';
    const frontMode=state.progress.preferences?.flashcardFront==='answer'?'answer':'description';
    const backMode=frontMode==='description'?'answer':'description';
    const rated=s.ratings[c.id];
    const prevDisabled=s.index===0?'disabled':'';
    const nextLabel=s.index===s.queue.length-1?'Finish':'Next →';
    const entryClass=s.entryAnimation?` flash-enter-${s.entryAnimation}`:'';
    s.entryAnimation='';

    content.innerHTML=`<div class="study-shell">
      ${studyToolbar(s,'Flashcards')}
      <div class="flash-settings">
        <div><b>Show first</b><span>Choose which side appears first. Description is the default.</span></div>
        <div class="segmented-control" role="group" aria-label="Flashcard first side">
          <button class="segment ${frontMode==='description'?'active':''}" data-front-mode="description">Description</button>
          <button class="segment ${frontMode==='answer'?'active':''}" data-front-mode="answer">Answer</button>
        </div>
      </div>

      <div class="flashcard-wrap">
        <div class="flash-swipe-shell${entryClass}" id="flashSwipeShell">
          <div class="swipe-badge swipe-badge-left" id="swipeIncorrect">INCORRECT</div>
          <div class="swipe-badge swipe-badge-right" id="swipeCorrect">CORRECT</div>
          <div class="flashcard ${s.flipped?'flipped':''}" id="flashcard">
            ${flashFace(c,frontMode,false)}
            ${flashFace(c,backMode,true)}
          </div>
        </div>
      </div>

      <div class="flash-nav-row">
        <button class="button" id="prevCardBtn" ${prevDisabled}>← Previous</button>
        <div class="swipe-help"><span>← Swipe left: Incorrect</span><span>Swipe right: Correct →</span></div>
        <button class="button" id="nextCardBtn">${nextLabel}</button>
      </div>

      <div class="rating-row ${rated?'rated-row':''}">
        <button class="rating-button" data-rating="0" ${rated?'disabled':''}>Again<small>Incorrect / didn't know it</small></button>
        <button class="rating-button" data-rating="0.4" ${rated?'disabled':''}>Hard<small>Barely recalled it</small></button>
        <button class="rating-button" data-rating="0.8" ${rated?'disabled':''}>Good<small>Knew the idea</small></button>
        <button class="rating-button" data-rating="1" ${rated?'disabled':''}>Easy<small>Correct / knew it immediately</small></button>
      </div>
      <div class="card card-note flash-status-row"><div><div><b>Overall flashcard score:</b> <span class="mastery-pill ${flashStatusClass}">${flashStats.pct}%</span></div><div class="flash-learning-meta">${flashStats.correct}/${flashStats.total} correct overall · ${flashStats.attempted}/${flashStats.total} attempted</div>${rated?` <span class="flash-rated-note">This card was rated <b>${esc(rated.label)}</b> in this session.</span>`:''}</div><div class="flash-card-actions"><button class="button tiny" id="resetTopicStatusBtn">Reset card status</button><button class="button tiny danger" id="deleteFlashcardBtn">Delete card</button></div></div>
    </div>`;

    bindStudyToolbar();

    content.querySelectorAll('[data-front-mode]').forEach(btn=>btn.addEventListener('click',()=>{
      state.progress.preferences ||= {};
      state.progress.preferences.flashcardFront=btn.dataset.frontMode;
      saveProgress();
      s.flipped=false;
      renderFlashcard();
    }));

    document.getElementById('prevCardBtn').addEventListener('click',()=>moveFlashcard(-1,'prev'));
    document.getElementById('nextCardBtn').addEventListener('click',()=>moveFlashcard(1,'next'));
    document.getElementById('resetTopicStatusBtn').addEventListener('click',()=>resetTopicStatus(c.id));
    document.getElementById('deleteFlashcardBtn').addEventListener('click',()=>deleteFlashcard(c.id));

    content.querySelectorAll('[data-rating]').forEach(btn=>btn.addEventListener('click',()=>{
      if (rated) return;
      const score=Number(btn.dataset.rating);
      const label=btn.firstChild.textContent.trim();
      rateFlashcardAndAdvance(c,score,label);
    }));

    const shell=document.getElementById('flashSwipeShell');
    const card=document.getElementById('flashcard');
    const badLeft=document.getElementById('swipeIncorrect');
    const badRight=document.getElementById('swipeCorrect');
    const entryClasses=['flash-enter-next','flash-enter-prev','flash-enter-after-right','flash-enter-after-left'];
    if (entryClasses.some(cls=>shell.classList.contains(cls))) {
      shell.addEventListener('animationend',()=>{
        shell.classList.remove(...entryClasses);
        shell.style.animation='none';
      },{once:true});
    }
    let startX=0, startY=0, dx=0, dy=0, dragging=false, gesture=null, startedAt=0, pointerType='mouse';

    shell.addEventListener('pointerdown',e=>{
      if (e.button!==undefined && e.button!==0) return;
      shell.classList.remove(...entryClasses);
      shell.style.animation='none';
      dragging=true;
      gesture=null;
      pointerType=e.pointerType||'mouse';
      startX=e.clientX;
      startY=e.clientY;
      dx=0;
      dy=0;
      startedAt=performance.now();
      shell.style.transition='none';
    });

    shell.addEventListener('pointermove',e=>{
      if (!dragging) return;
      dx=e.clientX-startX;
      dy=e.clientY-startY;
      const ax=Math.abs(dx), ay=Math.abs(dy);

      if (!gesture && Math.max(ax,ay)>=7) {
        if (ay>ax*1.15) {
          gesture='vertical';
          shell.style.transition='';
          return;
        }
        if (ax>ay*1.05) {
          gesture='horizontal';
          shell.classList.add('is-dragging');
          shell.setPointerCapture?.(e.pointerId);
        }
      }
      if (gesture!=='horizontal') return;

      e.preventDefault();
      const rotate=dx/34;
      const progress=Math.min(1,ax/125);
      const scale=1-(progress*.014);
      shell.style.transform=`translateX(${dx}px) rotate(${rotate}deg) scale(${scale})`;
      badRight.style.opacity=String(Math.min(1,Math.max(0,dx/82)));
      badLeft.style.opacity=String(Math.min(1,Math.max(0,-dx/82)));
    },{passive:false});

    const endSwipe=e=>{
      if (!dragging) return;
      dragging=false;
      const activeGesture=gesture;
      gesture=null;
      shell.classList.remove('is-dragging');
      try { shell.releasePointerCapture?.(e.pointerId); } catch {}

      if (activeGesture==='vertical') return;

      const elapsed=Math.max(1,performance.now()-startedAt);
      const velocity=Math.abs(dx)/elapsed;
      const touchLike=pointerType==='touch' || pointerType==='pen';
      const threshold=touchLike
        ? Math.min(82,Math.max(48,shell.clientWidth*.12))
        : Math.min(105,Math.max(62,shell.clientWidth*.14));
      const flick=velocity>=.48 && Math.abs(dx)>=28;

      if (activeGesture==='horizontal' && (Math.abs(dx)>=threshold || flick)) {
        const correct=dx>0;
        shell.classList.add(correct?'swipe-accepted-right':'swipe-accepted-left');
        shell.style.transition='transform .3s cubic-bezier(.18,.72,.18,1), opacity .24s ease, filter .24s ease';
        shell.style.transform=`translateX(${correct?'135%':'-135%'}) rotate(${correct?20:-20}deg) scale(.97)`;
        shell.style.opacity='0';
        shell.style.filter='blur(1px)';
        setTimeout(()=>rateFlashcardAndAdvance(c,correct?1:0,correct?'Correct':'Incorrect',correct?'after-right':'after-left'),255);
      } else {
        const isTap=Math.abs(dx)<8 && Math.abs(dy)<8;
        shell.style.transition='transform .26s cubic-bezier(.22,.9,.28,1)';
        shell.style.transform='translateX(0) rotate(0deg) scale(1)';
        badLeft.style.opacity='0';
        badRight.style.opacity='0';
        if (isTap) {
          s.flipped=!s.flipped;
          card.classList.toggle('flipped',s.flipped);
        }
      }
    };
    shell.addEventListener('pointerup',endSwipe);
    shell.addEventListener('pointercancel',endSwipe);
  }

  function startQuestionMode(mode) {
    if (!state.session || state.session.mode!==mode) {
      let queue=[];
      if (mode==='mixed') queue=allQuestions();
      else {
        const key=mode==='calculations'?'calculations':mode;
        queue=(lesson()[key]||[]).map(q=>({type:mode,q})).sort((a,b)=>(a.q.order??0)-(b.q.order??0));
      }
      const saved=state.progress.resume?.[state.lessonId]?.[mode];
      const savedIndex=Number.isInteger(saved?.index)?saved.index:0;
      state.session={mode,queue,index:Math.max(0,Math.min(savedIndex,Math.max(0,queue.length-1))),results:[],answered:false,startedAt:Date.now()};
      state.progress.resume ||= {};
      state.progress.resume[state.lessonId] ||= {};
      state.progress.resume[state.lessonId][mode]={index:state.session.index};
      saveProgress();
    }
    renderQuestion();
  }

  function studyToolbar(s,label) {
    const total=s.queue.length, idx=Math.min(s.index+1,total), pct=total?Math.round((s.index/total)*100):0;
    return `<div class="study-toolbar"><div class="study-progress"><b>${esc(label)}</b><span>${idx} / ${total}</span><div class="progress-track"><div style="width:${pct}%"></div></div></div><div class="study-actions"><span class="source-chip">PPT ORDER</span><button class="button danger" id="endSessionBtn">End session</button></div></div>`;
  }

  function bindStudyToolbar() {
    document.getElementById('endSessionBtn')?.addEventListener('click',finishSession);
  }

  function renderQuestion() {
    const s=state.session;
    if (!s || s.index>=s.queue.length) return finishSession();
    const item=s.queue[s.index];
    const q=item.q;
    s.answered=false;
    const kicker=({identification:'IDENTIFICATION',enumeration:'ENUMERATION',multiple:'MULTIPLE ANSWER',calculations:'SCHEDULING / CALCULATION'})[item.type] || item.type.toUpperCase();
    let answerHtml='';
    if (item.type==='identification') {
      answerHtml=`<input class="answer-input" id="identAnswer" autocomplete="off" placeholder="Type your answer…" />`;
    } else if (item.type==='enumeration') {
      answerHtml=`<div class="enum-grid">${q.answers.map((_,i)=>`<div class="enum-row"><div class="enum-num">${i+1}</div><input class="answer-input enum-input" autocomplete="off" placeholder="Answer ${i+1}" /></div>`).join('')}</div><div class="helper-text">Answer order does not affect grading. Capitalization, extra/missing spaces, punctuation differences, and small typing mistakes are tolerated. Use one answer per box.</div>`;
    } else if (item.type==='multiple') {
      answerHtml=`<div class="option-list">${q.options.map(([label],i)=>`<label class="option" data-opt="${i}"><input type="checkbox" value="${i}" /> <span>${esc(label)}</span></label>`).join('')}</div><div class="helper-text">Select every correct answer. Some items have several correct choices.</div>`;
    } else if (item.type==='calculations') {
      answerHtml=`<div class="calc-input-wrap"><input class="answer-input" id="calcAnswer" inputmode="decimal" autocomplete="off" placeholder="Numeric answer" /><span class="calc-unit">${esc(q.unit||'')}</span></div>`;
    }

    content.innerHTML=`<div class="study-shell">${studyToolbar(s,titleForView(s.mode))}
      <div class="card question-card">
        <div class="question-kicker">${kicker}</div>
        <h2>${esc(q.prompt)}</h2>
        ${answerHtml}
        <span class="source-chip">${esc(lesson().sourceLabel)} · ${esc(q.source||'')}</span>
        <div id="feedbackArea"></div>
        <div class="submit-row"><button class="button" id="dontKnowBtn">I don't know</button><button class="button primary" id="submitAnswerBtn">Check answer</button></div>
      </div>
      <div class="card card-note" id="modeOverallStatus">${esc(overallStatusText(s.mode))}</div>
    </div>`;
    bindStudyToolbar();
    document.getElementById('submitAnswerBtn').addEventListener('click',()=>submitCurrent(false));
    document.getElementById('dontKnowBtn').addEventListener('click',()=>submitCurrent(true));
    document.getElementById('identAnswer')?.addEventListener('keydown',e=>{if(e.key==='Enter')submitCurrent(false);});
    document.getElementById('calcAnswer')?.addEventListener('keydown',e=>{if(e.key==='Enter')submitCurrent(false);});
  }

  function submitCurrent(dontKnow=false) {
    const s=state.session;
    if (!s || s.answered) return;
    const item=s.queue[s.index], q=item.q;
    let score=0, details={};
    if (item.type==='identification') ({score,details}=gradeIdentification(q,dontKnow));
    else if (item.type==='enumeration') ({score,details}=gradeEnumeration(q,dontKnow));
    else if (item.type==='multiple') ({score,details}=gradeMultiple(q,dontKnow));
    else if (item.type==='calculations') ({score,details}=gradeCalculation(q,dontKnow));
    s.answered=true;
    recordAttempt(item,score,details);
    const overallEl=document.getElementById('modeOverallStatus');
    if (overallEl) overallEl.textContent=overallStatusText(s.mode);
    renderFeedback(item,score,details);
  }

  function gradeIdentification(q,dontKnow) {
    const value=dontKnow?'':document.getElementById('identAnswer').value;
    const best=bestAliasScore(value,q.answers);
    let score=0;
    if (!dontKnow) {
      if (best>=.9) score=1;
      else if (best>=.7) score=.5;
    }
    return {score,details:{user:value,best,expected:q.answers[0]}};
  }

  function gradeEnumeration(q,dontKnow) {
    const raw=dontKnow?[]:[...document.querySelectorAll('.enum-input')].flatMap(inp=>inp.value.split(/[;\n]+/)).map(v=>v.trim()).filter(Boolean);
    const expected=q.answers;
    const matchedExpected=new Set(), usedUser=new Set();
    const hits=[];
    for (let ui=0; ui<raw.length; ui++) {
      let best=-1,bestScore=0;
      for (let ei=0; ei<expected.length; ei++) {
        if (matchedExpected.has(ei)) continue;
        const sc=bestAliasScore(raw[ui],expected[ei]);
        if (sc>bestScore){bestScore=sc;best=ei;}
      }
      if (best>=0 && bestScore>=.90) {
        matchedExpected.add(best); usedUser.add(ui); hits.push({user:raw[ui],expected:acceptedLabel(expected[best])});
      }
    }
    const misses=expected.map((g,i)=>matchedExpected.has(i)?null:acceptedLabel(g)).filter(Boolean);
    const extras=raw.filter((_,i)=>!usedUser.has(i));
    let score=expected.length ? matchedExpected.size/expected.length : 0;
    if (extras.length) score=clamp(score - Math.min(.2,extras.length*.03));
    return {score,details:{hits,misses,extras,expectedCount:expected.length}};
  }

  function gradeMultiple(q,dontKnow) {
    const selected=dontKnow?[]:[...document.querySelectorAll('.option input:checked')].map(x=>Number(x.value));
    const correct=q.options.map(([,is],i)=>is?i:null).filter(i=>i!=null);
    const selectedSet=new Set(selected), correctSet=new Set(correct);
    const truePos=selected.filter(i=>correctSet.has(i));
    const falsePos=selected.filter(i=>!correctSet.has(i));
    const missed=correct.filter(i=>!selectedSet.has(i));
    let score=correct.length ? (truePos.length - falsePos.length*.65)/correct.length : 0;
    score=clamp(score);
    if (!falsePos.length && !missed.length) score=1;
    return {score,details:{selected,truePos,falsePos,missed,correct}};
  }

  function gradeCalculation(q,dontKnow) {
    const raw=dontKnow?'':document.getElementById('calcAnswer').value.trim();
    const val=Number(raw);
    const tolerance=q.tolerance ?? .01;
    const ok=!dontKnow && Number.isFinite(val) && Math.abs(val-q.answer)<=tolerance;
    let score=ok?1:0;
    if (!ok && !dontKnow && Number.isFinite(val) && Math.abs(val-q.answer)<=Math.max(.05,Math.abs(q.answer)*.03)) score=.5;
    return {score,details:{user:raw,value:Number.isFinite(val)?val:null,expected:q.answer,unit:q.unit||''}};
  }

  function renderFeedback(item,score,details) {
    const q=item.q;
    const area=document.getElementById('feedbackArea');
    const cls=score>=.99?'good':score>=.45?'partial':'bad';
    const heading=score>=.99?'Correct':score>=.45?'Partially correct':'Needs review';
    let body='';
    if (item.type==='identification') {
      body=`<div class="feedback-answer"><b>Accepted answer:</b> ${esc(q.answers[0])}</div>`;
    } else if (item.type==='enumeration') {
      body=`<div class="enum-results">${details.hits.map(h=>`<div class="enum-hit">✓ ${esc(h.expected)}</div>`).join('')}${details.misses.map(m=>`<div class="enum-miss">Missing: ${esc(m)}</div>`).join('')}${details.extras.map(e=>`<div class="enum-miss">Unmatched: ${esc(e)}</div>`).join('')}</div><div class="feedback-answer"><b>PPT order:</b><ol>${q.answers.map(a=>`<li>${esc(acceptedLabel(a))}</li>`).join('')}</ol></div>`;
    } else if (item.type==='multiple') {
      document.querySelectorAll('.option').forEach((el,i)=>{
        const isCorrect=q.options[i][1], chosen=details.selected.includes(i);
        if (isCorrect && chosen) el.classList.add('correct');
        else if (!isCorrect && chosen) el.classList.add('incorrect');
        else if (isCorrect && !chosen) el.classList.add('missed');
        el.querySelector('input').disabled=true;
      });
      const correctLabels=q.options.filter(x=>x[1]).map(x=>x[0]);
      body=`<div class="feedback-answer"><b>Correct choices:</b> ${correctLabels.map(esc).join('; ')}</div>`;
    } else if (item.type==='calculations') {
      body=`<div class="feedback-answer"><b>Answer:</b> ${esc(q.answer)} ${esc(q.unit||'')}</div>`;
    }
    area.innerHTML=`<div class="feedback ${cls}"><b>${heading} · ${Math.round(score*100)}%</b>${q.explanation?`<div>${esc(q.explanation)}</div>`:''}${body}</div>`;
    document.getElementById('submitAnswerBtn').textContent=sAtEnd()?'Finish':'Next';
    document.getElementById('submitAnswerBtn').onclick=nextQuestion;
    document.getElementById('dontKnowBtn').style.display='none';
    document.querySelectorAll('input').forEach(i=>i.disabled=true);
  }

  function sAtEnd() { return state.session.index>=state.session.queue.length-1; }

  function nextQuestion() {
    const s=state.session;
    s.index++;
    state.progress.resume ||= {};
    state.progress.resume[state.lessonId] ||= {};
    state.progress.resume[state.lessonId][s.mode]={index:s.index};
    saveProgress();
    if (s.index>=s.queue.length) finishSession(); else renderQuestion();
  }

  function finishSession() {
    const s=state.session;
    if (!s) { setView('dashboard'); return; }
    const results=s.results||[];
    const graded=results.filter(r=>r.type!=='flashcards' || r.score!=null);
    const avg=graded.length?graded.reduce((sum,r)=>sum+r.score,0)/graded.length:0;
    const misses=results.filter(r=>r.score<.75).sort((a,b)=>a.score-b.score);
    const elapsed=Math.max(1,Math.round((Date.now()-s.startedAt)/60000));
    state.progress.sessions.push({lessonId:state.lessonId,mode:s.mode,at:Date.now(),items:results.length,score:avg});
    if (state.progress.sessions.length>50) state.progress.sessions=state.progress.sessions.slice(-50);
    state.progress.resume ||= {};
    state.progress.resume[state.lessonId] ||= {};
    const completed=s.mode==='flashcards' ? s.index>=Math.max(0,s.queue.length-1) : s.index>=s.queue.length;
    state.progress.resume[state.lessonId][s.mode]=s.mode==='flashcards'
      ? {index:completed?0:Math.max(0,s.index),cardId:completed?null:(s.queue[Math.max(0,s.index)]?.id||null)}
      : {index:completed?0:Math.max(0,s.index)};
    saveProgress();
    const mode=s.mode;
    state.session=null;

    const overall=mode==='mixed'?null:modeOverallStats(mode,lesson());
    const remainingCount=mode==='flashcards'?remainingFlashcards(lesson()).length:0;
    const retryLabel=mode==='flashcards'
      ? (remainingCount?`Review ${remainingCount} remaining card${remainingCount===1?'':'s'}`:'Review all flashcards')
      : 'Repeat mode';
    content.innerHTML=`<div class="card session-summary">
      <div class="question-kicker">SESSION COMPLETE</div>
      <div class="summary-score">${Math.round(avg*100)}%</div>
      <h2>${esc(titleForView(mode))}</h2>
      <p class="muted-copy">The session score above covers only answers given in this session.${overall?` Your saved overall ${esc(titleForView(mode))} score is ${overall.correct}/${overall.total} correct (${overall.pct}%).`:''}</p>
      <div class="summary-grid">
        <div class="summary-box"><strong>${results.length}</strong><span>items answered this session</span></div>
        <div class="summary-box"><strong>${misses.length}</strong><span>items below 75% this session</span></div>
        <div class="summary-box"><strong>${elapsed} min</strong><span>session time</span></div>
      </div>
      ${misses.length?`<h3>Items to review</h3><div class="review-list">${misses.slice(0,10).map(r=>`<div class="review-item"><div class="review-type">${esc(r.type.toUpperCase())} · ${Math.round(r.score*100)}%</div>${esc(r.prompt)}</div>`).join('')}</div>`:`<div class="feedback good"><b>Strong round.</b> No answered item fell below 75% in this session.</div>`}
      <div class="submit-row"><button class="button" id="backDashBtn">Dashboard</button><button class="button primary" id="retryModeBtn">${esc(retryLabel)}</button></div>
    </div>`;
    updateHeaderStats(); renderNav();
    document.getElementById('backDashBtn').addEventListener('click',()=>setView('dashboard'));
    document.getElementById('retryModeBtn').addEventListener('click',()=>setView(mode));
  }

  async function exportProgress() {
    const filename=`cs17-review-progress-${new Date().toISOString().slice(0,10)}.json`;
    const text=JSON.stringify(state.progress,null,2);

    if ('showSaveFilePicker' in window) {
      try {
        const handle=await window.showSaveFilePicker({
          suggestedName:filename,
          types:[{description:'JSON progress backup',accept:{'application/json':['.json']}}]
        });
        const writable=await handle.createWritable();
        await writable.write(text);
        await writable.close();
        toast(`Saved ${filename}.`);
        return;
      } catch (err) {
        if (err?.name==='AbortError') return;
      }
    }

    const blob=new Blob([text],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;
    a.download=filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    toast(`Downloaded ${filename}.`);
  }


  function importProgress(file) {
    const reader=new FileReader();
    reader.onload=()=>{
      try {
        applyImportedProgress(JSON.parse(reader.result),'Progress imported.');
      } catch {
        toast('That file is not a valid CS17 progress backup.');
      }
    };
    reader.readAsText(file);
  }

  function deleteFlashcard(cardId) {
    state.progress.deletedFlashcards ||= {};
    const deleted=new Set(state.progress.deletedFlashcards[state.lessonId] || []);
    deleted.add(cardId);
    state.progress.deletedFlashcards[state.lessonId]=[...deleted];
    delete state.progress.questionStats[`flashcards:card_${cardId}`];

    if (state.session?.mode==='flashcards') {
      const s=state.session;
      const index=s.queue.findIndex(card=>card.id===cardId);
      if (index>=0) s.queue.splice(index,1);
      delete s.ratings?.[cardId];
      if (s.queue.length) s.index=Math.min(s.index,s.queue.length-1);
      state.progress.resume ||= {};
      state.progress.resume[state.lessonId] ||= {};
      state.progress.resume[state.lessonId].flashcards={index:s.queue.length?s.index:0,cardId:s.queue.length?s.queue[s.index]?.id||null:null};
    }

    saveProgress();
    updateHeaderStats();
    renderNav();
    if (!state.session?.queue?.length) {
      state.session=null;
      state.view='dashboard';
      state.progress.ui ||= {};
      state.progress.ui.view='dashboard';
      saveProgress();
      render();
    } else {
      renderFlashcard();
    }
    toast('Card deleted and saved locally.');
  }

  function restoreDeletedCards() {
    const deleted=state.progress.deletedFlashcards?.[state.lessonId] || [];
    if (!deleted.length) return;
    state.progress.deletedFlashcards[state.lessonId]=[];
    saveProgress();
    state.session=null;
    render();
    toast(`${deleted.length} deleted card${deleted.length===1?'':'s'} restored.`);
  }

  function resetTopicStatus(cardId) {
    delete state.progress.questionStats[`flashcards:card_${cardId}`];
    if (state.session?.mode==='flashcards') delete state.session.ratings?.[cardId];
    saveProgress();
    updateHeaderStats();
    renderNav();
    renderFlashcard();
    toast('Flashcard status reset.');
  }

  function resetLessonStatus() {
    const l=lesson();
    if (!confirm(`Reset learning status for Lesson ${l.number} only? Other lessons and your preferences will be kept.`)) return;

    const conceptIds=new Set(l.concepts.map(c=>c.id));
    for (const id of conceptIds) delete state.progress.conceptStats[id];
    for (const [key,st] of Object.entries(state.progress.questionStats)) {
      if (st.lessonId===l.id) delete state.progress.questionStats[key];
    }
    state.progress.sessions=(state.progress.sessions||[]).filter(s=>s.lessonId!==l.id);
    if (state.progress.resume) delete state.progress.resume[l.id];
    state.progress.ui ||= {};
    state.progress.ui.lessonId=l.id;
    state.progress.ui.view='dashboard';

    saveProgress();
    state.session=null;
    state.view='dashboard';
    render();
    toast(`Lesson ${l.number} learning status reset.`);
  }

  function resetProgress() {
    if (!confirm('Reset all local review scores, attempts, and saved positions? This cannot be undone unless you exported a backup.')) return;
    state.progress=emptyProgress(); saveProgress(); state.session=null; state.view='dashboard'; render(); toast('All progress reset.');
  }

  menuToggle?.setAttribute('aria-expanded','false');
  menuToggle?.addEventListener('click',()=>setSidebarOpen(!sidebar.classList.contains('open')));
  sidebarBackdrop?.addEventListener('click',closeSidebar);
  modeNav.querySelectorAll('[data-view]').forEach(btn=>btn.addEventListener('click',()=>setView(btn.dataset.view)));
  document.getElementById('resetLessonStatusBtn').addEventListener('click',resetLessonStatus);
  document.getElementById('resetProgressBtn').addEventListener('click',resetProgress);
  document.getElementById('exportProgressBtn').addEventListener('click',exportProgress);
  document.getElementById('importProgressBtn').addEventListener('click',()=>document.getElementById('importProgressFile').click());
  document.getElementById('importProgressFile').addEventListener('change',e=>{const f=e.target.files?.[0]; if(f) importProgress(f); e.target.value='';});

  if (IS_LOCAL_RUNNER) {
    saveLocalSnapshotBtn.hidden=false;
    restoreLocalSnapshotBtn.hidden=false;
    saveLocalSnapshotBtn.addEventListener('click',()=>saveLocalSnapshot(true));
    restoreLocalSnapshotBtn.addEventListener('click',restoreLocalSnapshot);
  }

  // Keep the off-canvas menu independent from the reviewer's main scroll area.
  document.addEventListener('keydown',e=>{ if (e.key==='Escape') closeSidebar(); });
  window.addEventListener('resize',()=>{ if (window.innerWidth>760) closeSidebar(); });

  // Keep localhost simple and always load the current project files.
  // Remove older reviewer service workers/caches without touching localStorage progress.
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.getRegistrations()
      .then(registrations => Promise.all(registrations.map(registration => registration.unregister())))
      .catch(()=>{});
  }
  if ('caches' in window) {
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key.startsWith('cs17-os-reviewer-')).map(key => caches.delete(key))))
      .catch(()=>{});
  }

  render();
})();
