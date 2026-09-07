// CS17 reviewer source model.
// Every definition, keyword list, and factual answer below is sourced from the uploaded class slides.
// Questions may be grammar-polished, but canonical answers and study text stay aligned with the PPT.

const LESSONS = {};

function canonicalAnswer(entry) {
  return Array.isArray(entry) ? entry[0] : entry;
}

function makeAnswer(entry) {
  if (Array.isArray(entry)) return entry;
  if (typeof entry === 'string') return [entry];
  return [entry.label, ...(entry.aliases || [])];
}

function buildLesson(config) {
  const lesson = {
    ...config,
    concepts: (config.concepts || []).map((c, index) => ({
      ...c,
      order: c.order ?? ((index + 1) * 10),
      details: c.details || [],
      examples: c.examples || [],
      points: c.points || [],
      aliases: c.aliases || [],
      visual: c.visual || null,
      concepts: c.concepts || [c.id],
    })),
    groups: (config.groups || []).map((g, index) => ({
      ...g,
      order: g.order ?? ((index + 1) * 10),
      answers: (g.answers || []).map(makeAnswer),
      distractors: g.distractors || [],
      aliases: g.aliases || [],
      visual: g.visual || null,
      concepts: g.concepts || [],
    })),
    calculations: config.calculations || [],
  };

  // Flashcards come from the same source catalog as the other study modes.
  // A concept card tests a keyword/definition. A group card tests a PPT heading/list.
  // This keeps important lists, bold keywords, and diagram-derived items from being omitted.
  const conceptCards = lesson.concepts
    .filter(c => c.flashcard !== false)
    .map(c => ({
      id: c.id,
      order: c.order,
      term: c.term,
      aliases: c.aliases,
      definition: c.definition || '',
      points: c.points || [],
      source: c.source,
      visual: c.visual || null,
      concepts: c.concepts || [c.id],
      cardType: 'concept',
    }));

  const groupCards = lesson.groups
    .filter(g => g.flashcard !== false)
    .map(g => ({
      id: g.id,
      order: g.order,
      term: g.cardTerm || g.title,
      aliases: g.aliases || [],
      definition: g.cardDefinition || '',
      points: g.answers.map(canonicalAnswer),
      source: g.source,
      visual: g.visual || null,
      concepts: g.concepts,
      cardType: 'group',
    }));

  lesson.flashcards = [...conceptCards, ...groupCards]
    .sort((a,b)=>(a.order??999999)-(b.order??999999) || a.term.localeCompare(b.term));

  const conceptIdentification = lesson.concepts
    .filter(c => c.identPrompt && c.identification !== false)
    .map(c => ({
      id: `${c.id}_ident`,
      order: c.order,
      prompt: c.identPrompt,
      answers: [c.term, ...c.aliases],
      concepts: c.concepts || [c.id],
      explanation: c.definition || c.points.join(' '),
      source: c.source,
    }));

  const groupIdentification = lesson.groups
    .filter(g => g.identification !== false)
    .map(g => {
      const labels=g.answers.map(canonicalAnswer);
      return {
        id: `${g.id}_ident`,
        order: g.order,
        prompt: g.identPrompt || `Which PPT topic or heading contains these items: ${labels.join('; ')}?`,
        answers: [g.cardTerm || g.title, ...(g.aliases || [])],
        concepts: g.concepts,
        explanation: labels.join('; '),
        source: g.source,
      };
    });

  lesson.identification = [...conceptIdentification, ...groupIdentification]
    .sort((a,b)=>(a.order??999999)-(b.order??999999));

  lesson.enumeration = lesson.groups
    .filter(g => g.enumeration !== false)
    .map(g => ({
      id: `${g.id}_enum`,
      order: g.order,
      prompt: g.prompt,
      answers: g.answers,
      concepts: g.concepts,
      explanation: g.explanation || '',
      source: g.source,
    }));

  lesson.multiple = lesson.groups
    .filter(g => g.multiple !== false)
    .map(g => {
      const correct = g.answers.map(a => [canonicalAnswer(a), true]);
      const incorrect = g.distractors.map(d => [canonicalAnswer(makeAnswer(d)), false]);
      const options = g.options || [...correct, ...incorrect];
      return {
        id: `${g.id}_multi`,
        order: g.order,
        prompt: g.multiplePrompt || `Which items are listed in the PPT under ${g.cardTerm || g.title || 'this topic'}? Select all correct answers.`,
        options,
        concepts: g.concepts,
        explanation: g.explanation || '',
        source: g.source,
      };
    });

  delete lesson.groups;
  LESSONS[lesson.id] = lesson;
  return lesson;
}
