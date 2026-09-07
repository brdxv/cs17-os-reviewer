// Offline visual study reconstructions based only on the uploaded Lesson 4 PDF.
// These diagrams reproduce source-supported relationships and Gantt layouts for local review.
const LESSON4_VISUALS = (() => {
  const wrap = (body, width = 760, height = 360) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" rx="22" fill="#f8fafc"/>
      <style>
        text{font-family:Arial,sans-serif;fill:#172033}.t{font-size:22px;font-weight:700}.s{font-size:17px}.xs{font-size:14px}.box{fill:#fff;stroke:#8aa0b8;stroke-width:2}.node{fill:#e8f0ff;stroke:#4d6ea8;stroke-width:2}.accent{fill:#e9f8ef;stroke:#31845b;stroke-width:2}.warn{fill:#fff4dc;stroke:#b88924;stroke-width:2}.line{stroke:#4f6175;stroke-width:3;fill:none}.arrow{stroke:#4f6175;stroke-width:3;fill:none;marker-end:url(#a)}</style>
      <defs><marker id="a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#4f6175"/></marker></defs>
      ${body}
    </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  const gantt = (segments, labels = []) => {
    const x0 = 55, y = 125, h = 86, total = segments.reduce((s, x) => s + x.duration, 0), w = 650;
    let cursor = x0;
    let body = `<text x="380" y="55" text-anchor="middle" class="t">Gantt Chart</text>`;
    body += `<text x="55" y="100" class="s">${labels.join('   ')}</text>`;
    let elapsed = 0;
    for (const seg of segments) {
      const sw = w * seg.duration / total;
      body += `<rect x="${cursor}" y="${y}" width="${sw}" height="${h}" class="node"/><text x="${cursor + sw/2}" y="${y+50}" text-anchor="middle" class="t">${seg.name}</text><text x="${cursor}" y="${y+h+28}" text-anchor="middle" class="s">${elapsed}</text>`;
      elapsed += seg.duration;
      cursor += sw;
    }
    body += `<text x="${x0+w}" y="${y+h+28}" text-anchor="middle" class="s">${elapsed}</text>`;
    return wrap(body);
  };

  return {
    processLifeCycle: wrap(`
      <text x="380" y="42" text-anchor="middle" class="t">Process Life Cycle</text>
      <g class="s">
        <rect x="35" y="135" width="115" height="62" rx="16" class="node"/><text x="92" y="173" text-anchor="middle">New</text>
        <rect x="185" y="135" width="115" height="62" rx="16" class="node"/><text x="242" y="173" text-anchor="middle">Ready</text>
        <rect x="335" y="135" width="115" height="62" rx="16" class="accent"/><text x="392" y="173" text-anchor="middle">Running</text>
        <rect x="335" y="255" width="140" height="62" rx="16" class="warn"/><text x="405" y="293" text-anchor="middle">Waiting / Blocked</text>
        <rect x="590" y="135" width="135" height="62" rx="16" class="node"/><text x="657" y="173" text-anchor="middle">Terminated</text>
      </g>
      <path d="M150 166 L180 166 M300 154 L330 154 M330 178 L300 178 M450 166 L585 166 M390 200 L402 250 M367 255 L270 200" class="arrow"/>
      <text x="385" y="225" text-anchor="middle" class="xs">I/O or event wait</text>
    `),

    transitions: wrap(`
      <text x="380" y="38" text-anchor="middle" class="t">Typical Process State Transitions</text>
      <g class="s">
        <rect x="40" y="85" width="170" height="48" rx="10" class="node"/><text x="125" y="116" text-anchor="middle">New → Ready</text>
        <rect x="295" y="85" width="170" height="48" rx="10" class="node"/><text x="380" y="116" text-anchor="middle">Ready → Running</text>
        <rect x="550" y="85" width="170" height="48" rx="10" class="node"/><text x="635" y="116" text-anchor="middle">Running → Ready</text>
        <rect x="40" y="220" width="190" height="48" rx="10" class="warn"/><text x="135" y="251" text-anchor="middle">Running → Waiting</text>
        <rect x="285" y="220" width="190" height="48" rx="10" class="warn"/><text x="380" y="251" text-anchor="middle">Waiting → Ready</text>
        <rect x="530" y="220" width="190" height="48" rx="10" class="node"/><text x="625" y="251" text-anchor="middle">Running → Terminated</text>
      </g>
    `),

    pcb: wrap(`
      <text x="380" y="38" text-anchor="middle" class="t">Process Control Block (PCB)</text>
      <rect x="160" y="65" width="440" height="255" rx="18" class="box"/>
      <g class="s">
        <text x="205" y="105">Process ID (PID)</text><text x="205" y="140">Process state</text><text x="205" y="175">Program counter</text><text x="205" y="210">CPU registers</text>
        <text x="405" y="105">Scheduling information</text><text x="405" y="140">Memory-management information</text><text x="405" y="175">I/O/open-file information</text>
      </g>
      <line x1="380" y1="82" x2="380" y2="300" class="line"/>
    `),

    contextSwitch: wrap(`
      <text x="380" y="40" text-anchor="middle" class="t">Context Switching</text>
      <rect x="55" y="120" width="170" height="90" rx="15" class="node"/><text x="140" y="158" text-anchor="middle" class="t">Process A</text><text x="140" y="187" text-anchor="middle" class="s">running</text>
      <rect x="295" y="120" width="170" height="90" rx="15" class="accent"/><text x="380" y="158" text-anchor="middle" class="t">Operating System</text><text x="380" y="187" text-anchor="middle" class="xs">save A, load B</text>
      <rect x="535" y="120" width="170" height="90" rx="15" class="node"/><text x="620" y="158" text-anchor="middle" class="t">Process B</text><text x="620" y="187" text-anchor="middle" class="s">next</text>
      <path d="M225 165 L290 165 M465 165 L530 165" class="arrow"/>
      <text x="380" y="255" text-anchor="middle" class="s">Timer interrupt → CPU changes from one process to another</text>
      <text x="380" y="292" text-anchor="middle" class="xs">Enables multitasking, but adds management overhead</text>
    `),

    schedulingTerms: wrap(`
      <text x="380" y="38" text-anchor="middle" class="t">Key Scheduling Terms</text>
      <g class="s">
        <rect x="45" y="75" width="205" height="60" rx="10" class="node"/><text x="147" y="102" text-anchor="middle">Arrival Time (AT)</text><text x="147" y="124" text-anchor="middle" class="xs">enters ready queue</text>
        <rect x="278" y="75" width="205" height="60" rx="10" class="node"/><text x="380" y="102" text-anchor="middle">Burst Time (BT)</text><text x="380" y="124" text-anchor="middle" class="xs">CPU time required</text>
        <rect x="510" y="75" width="205" height="60" rx="10" class="node"/><text x="612" y="102" text-anchor="middle">Completion Time (CT)</text><text x="612" y="124" text-anchor="middle" class="xs">process finishes</text>
        <rect x="45" y="205" width="205" height="78" rx="10" class="accent"/><text x="147" y="232" text-anchor="middle">Turnaround Time (TAT)</text><text x="147" y="260" text-anchor="middle">CT − AT</text>
        <rect x="278" y="205" width="205" height="78" rx="10" class="accent"/><text x="380" y="232" text-anchor="middle">Waiting Time (WT)</text><text x="380" y="260" text-anchor="middle">TAT − BT</text>
        <rect x="510" y="205" width="205" height="78" rx="10" class="accent"/><text x="612" y="232" text-anchor="middle">Response Time (RT)</text><text x="612" y="260" text-anchor="middle" class="xs">first CPU start − AT</text>
      </g>
    `),

    fcfs: gantt([{name:'P1',duration:5},{name:'P2',duration:3},{name:'P3',duration:2}], ['P1 = 5 ms','P2 = 3 ms','P3 = 2 ms']),
    sjf: gantt([{name:'P2',duration:2},{name:'P3',duration:4},{name:'P1',duration:6}], ['P1 = 6 ms','P2 = 2 ms','P3 = 4 ms']),
    roundRobin: gantt([{name:'P1',duration:2},{name:'P2',duration:2},{name:'P3',duration:2},{name:'P1',duration:2},{name:'P2',duration:2},{name:'P1',duration:1}], ['Quantum = 2 ms']),

    srtf: wrap(`
      <text x="380" y="42" text-anchor="middle" class="t">SRTF Example</text>
      <rect x="55" y="120" width="190" height="82" class="node"/><text x="150" y="157" text-anchor="middle" class="t">P1</text><text x="150" y="184" text-anchor="middle" class="s">0–2 ms</text>
      <rect x="245" y="120" width="285" height="82" class="accent"/><text x="387" y="157" text-anchor="middle" class="t">P2 arrives</text><text x="387" y="184" text-anchor="middle" class="s">3 ms remaining</text>
      <rect x="530" y="120" width="175" height="82" class="warn"/><text x="617" y="157" text-anchor="middle" class="t">P1</text><text x="617" y="184" text-anchor="middle" class="s">6 ms remaining</text>
      <text x="380" y="250" text-anchor="middle" class="s">P2's 3 ms is shorter than P1's 6 ms, so P1 is preempted.</text>
    `),

    priority: wrap(`
      <text x="380" y="42" text-anchor="middle" class="t">Priority Scheduling Example</text>
      <g class="s"><rect x="65" y="100" width="175" height="80" rx="12" class="node"/><text x="152" y="135" text-anchor="middle">P1</text><text x="152" y="161" text-anchor="middle">Priority 3</text><rect x="292" y="100" width="175" height="80" rx="12" class="accent"/><text x="379" y="135" text-anchor="middle">P2</text><text x="379" y="161" text-anchor="middle">Priority 1</text><rect x="520" y="100" width="175" height="80" rx="12" class="node"/><text x="607" y="135" text-anchor="middle">P3</text><text x="607" y="161" text-anchor="middle">Priority 2</text></g>
      <text x="380" y="235" text-anchor="middle" class="t">Order: P2 → P3 → P1</text>
      <text x="380" y="275" text-anchor="middle" class="s">In this example, smaller number = higher priority.</text>
    `),

    mlq: wrap(`
      <text x="380" y="38" text-anchor="middle" class="t">Multilevel Queue Scheduling</text>
      <rect x="80" y="90" width="250" height="90" rx="14" class="accent"/><text x="205" y="125" text-anchor="middle" class="t">Foreground / Interactive</text><text x="205" y="155" text-anchor="middle" class="s">Round Robin</text>
      <rect x="430" y="90" width="250" height="90" rx="14" class="node"/><text x="555" y="125" text-anchor="middle" class="t">Background / Batch</text><text x="555" y="155" text-anchor="middle" class="s">FCFS</text>
      <text x="380" y="245" text-anchor="middle" class="s">Separate queues based on process type or priority</text>
      <text x="380" y="280" text-anchor="middle" class="s">Processes generally remain assigned to their queue</text>
    `),

    mlfq: wrap(`
      <text x="380" y="38" text-anchor="middle" class="t">Multilevel Feedback Queue (MLFQ)</text>
      <rect x="165" y="75" width="430" height="60" rx="12" class="accent"/><text x="380" y="112" text-anchor="middle" class="s">Higher-priority queue: interactive or short processes</text>
      <rect x="165" y="175" width="430" height="60" rx="12" class="node"/><text x="380" y="212" text-anchor="middle" class="s">Lower-priority queue: CPU-bound processes may move here</text>
      <path d="M380 138 L380 170" class="arrow"/>
      <text x="380" y="278" text-anchor="middle" class="s">Repeatedly using the whole time slice may move a process downward.</text>
      <text x="380" y="312" text-anchor="middle" class="xs">Unlike MLQ, processes can move between queues.</text>
    `),

    worked: wrap(`
      <text x="380" y="38" text-anchor="middle" class="t">Worked Scheduling Example</text>
      <text x="380" y="82" text-anchor="middle" class="s">All arrive at time 0: P1 = 5 ms, P2 = 3 ms, P3 = 2 ms</text>
      <rect x="65" y="115" width="290" height="120" rx="14" class="node"/><text x="210" y="150" text-anchor="middle" class="t">FCFS</text><text x="210" y="182" text-anchor="middle" class="s">P1 → P2 → P3</text><text x="210" y="212" text-anchor="middle" class="s">Average WT = 4.33 ms</text>
      <rect x="405" y="115" width="290" height="120" rx="14" class="accent"/><text x="550" y="150" text-anchor="middle" class="t">SJF</text><text x="550" y="182" text-anchor="middle" class="s">P3 → P2 → P1</text><text x="550" y="212" text-anchor="middle" class="s">Average WT = 2.33 ms</text>
      <text x="380" y="285" text-anchor="middle" class="s">Scheduling policy can significantly change performance with the same processes.</text>
    `),

    realWorld: wrap(`
      <text x="380" y="38" text-anchor="middle" class="t">Real-World Example</text>
      <g class="s"><rect x="45" y="88" width="145" height="55" rx="10" class="node"/><text x="117" y="122" text-anchor="middle">Browser</text><rect x="220" y="88" width="145" height="55" rx="10" class="node"/><text x="292" y="122" text-anchor="middle">Music player</text><rect x="395" y="88" width="145" height="55" rx="10" class="node"/><text x="467" y="122" text-anchor="middle">File download</text><rect x="570" y="88" width="145" height="55" rx="10" class="node"/><text x="642" y="122" text-anchor="middle">Word processor</text></g>
      <rect x="280" y="205" width="200" height="75" rx="14" class="accent"/><text x="380" y="250" text-anchor="middle" class="t">Single CPU core</text>
      <path d="M117 143 L320 203 M292 143 L350 203 M467 143 L410 203 M642 143 L440 203" class="arrow"/>
      <text x="380" y="320" text-anchor="middle" class="xs">Scheduling + interrupts + context switching → appearance of simultaneous execution</text>
    `)
  };
})();
