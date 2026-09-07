// Offline visual study reconstructions based only on the diagrams in the uploaded Lesson 1 PDF.
// Labels and relationships follow the source slides. No outside OS content is added.
const LESSON1_VISUALS = (() => {
  const wrap = (body, width = 900, height = 430) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" rx="22" fill="#f8fafc"/>
      <style>
        text{font-family:Arial,sans-serif;fill:#172033}.t{font-size:24px;font-weight:700}.s{font-size:18px}.xs{font-size:15px}.tiny{font-size:13px}.box{fill:#fff;stroke:#61758b;stroke-width:2}.node{fill:#d7efff;stroke:#4d6ea8;stroke-width:2}.muted{fill:#e5e7eb;stroke:#6b7280;stroke-width:2}.line{stroke:#394b5e;stroke-width:3;fill:none}.dash{stroke:#394b5e;stroke-width:2;stroke-dasharray:7 6;fill:none}.arrow{stroke:#394b5e;stroke-width:3;fill:none;marker-end:url(#a)}.green{stroke:#54b948;stroke-width:4;fill:none}</style>
      <defs><marker id="a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#394b5e"/></marker></defs>
      ${body}
    </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  return {
    abstractView: wrap(`
      <rect x="350" y="22" width="200" height="58" class="node"/><text x="450" y="58" text-anchor="middle" class="t">user</text>
      <rect x="120" y="130" width="660" height="86" class="muted"/><text x="450" y="163" text-anchor="middle" class="t">application programs</text><text x="450" y="192" text-anchor="middle" class="s">(compilers, web browsers, development kits, etc.)</text>
      <rect x="120" y="267" width="660" height="70" class="node"/><text x="450" y="311" text-anchor="middle" class="t">operating system</text>
      <rect x="120" y="335" width="660" height="70" class="muted"/><text x="450" y="370" text-anchor="middle" class="t">computer hardware</text><text x="450" y="397" text-anchor="middle" class="s">(CPU, memory, I/O devices, etc.)</text>
      <path d="M450 82 L450 125" class="arrow"/><path d="M450 125 L450 84" class="arrow"/>
      <path d="M260 220 L260 260 M450 220 L450 260 M640 220 L640 260" class="arrow"/><path d="M260 260 L260 220 M450 260 L450 220 M640 260 L640 220" class="arrow"/>
      <path d="M260 322 L260 333 M450 322 L450 333 M640 322 L640 333" class="arrow"/><path d="M260 333 L260 322 M450 333 L450 322 M640 333 L640 322" class="arrow"/>
    `, 900, 430),

    computerOrganization: wrap(`
      <g class="s">
        <rect x="30" y="230" width="105" height="62" class="muted"/><text x="82" y="268" text-anchor="middle">CPU</text>
        <text x="225" y="44" text-anchor="middle">disks</text><ellipse cx="202" cy="74" rx="26" ry="15" class="node"/><ellipse cx="250" cy="74" rx="26" ry="15" class="node"/>
        <rect x="175" y="230" width="120" height="62" class="muted"/><text x="235" y="255" text-anchor="middle">disk</text><text x="235" y="278" text-anchor="middle">controller</text>
        <text x="390" y="44" text-anchor="middle">mouse</text><circle cx="390" cy="80" r="16" class="node"/>
        <text x="505" y="44" text-anchor="middle">keyboard</text><rect x="465" y="68" width="80" height="30" class="node"/>
        <text x="615" y="44" text-anchor="middle">printer</text><rect x="580" y="64" width="70" height="40" class="node"/>
        <rect x="355" y="230" width="300" height="62" class="muted"/><text x="505" y="268" text-anchor="middle">USB controller</text>
        <text x="770" y="44" text-anchor="middle">monitor</text><rect x="738" y="58" width="64" height="52" class="node"/>
        <rect x="714" y="230" width="120" height="62" class="muted"/><text x="774" y="255" text-anchor="middle">graphics</text><text x="774" y="278" text-anchor="middle">adapter</text>
        <text x="455" y="338" text-anchor="middle" class="t">system bus</text>
        <rect x="408" y="365" width="100" height="52" class="node"/><text x="458" y="397" text-anchor="middle">memory</text>
      </g>
      <path d="M82 292 L82 325 L774 325 L774 292 M235 292 L235 325 M505 292 L505 325" class="line"/>
      <path d="M458 325 L458 365" class="line"/>
      <path d="M225 90 L235 230 M390 96 L440 230 M505 98 L505 230 M615 104 L570 230 M770 110 L774 230" class="line"/>
    `, 900, 450),

    interruptTimeline: wrap(`
      <text x="20" y="55" class="s">CPU</text><text x="100" y="55" class="s">user program</text><text x="100" y="102" class="s">I/O interrupt processing</text>
      <text x="20" y="260" class="s">I/O device</text><text x="112" y="245" class="s">idle</text><text x="112" y="292" class="s">transferring</text>
      <line x1="260" y1="35" x2="865" y2="35" stroke="#cbd5e1"/><line x1="260" y1="115" x2="865" y2="115" stroke="#cbd5e1"/><line x1="260" y1="230" x2="865" y2="230" stroke="#cbd5e1"/><line x1="260" y1="310" x2="865" y2="310" stroke="#cbd5e1"/>
      <path d="M280 55 L470 55 L470 103 L500 103 L500 55 L730 55 L730 103 L760 103 L760 55 L850 55" class="green"/>
      <path d="M280 245 L320 245 L320 292 L440 292 L440 245 L605 245 L605 292 L700 292 L700 245 L850 245" class="green"/>
      <g class="tiny">
        <line x1="300" y1="30" x2="300" y2="330" class="line"/><text x="300" y="352" transform="rotate(90 300 352)">I/O request</text>
        <line x1="440" y1="30" x2="440" y2="330" class="line"/><text x="440" y="352" transform="rotate(90 440 352)">transfer done</text>
        <line x1="470" y1="30" x2="470" y2="330" class="line"/><text x="470" y="352" transform="rotate(90 470 352)">interrupt signaled</text>
        <line x1="500" y1="30" x2="500" y2="330" class="line"/><text x="500" y="352" transform="rotate(90 500 352)">interrupt handled</text>
        <line x1="605" y1="30" x2="605" y2="330" class="line"/><text x="605" y="352" transform="rotate(90 605 352)">I/O request</text>
        <line x1="700" y1="30" x2="700" y2="330" class="line"/><text x="700" y="352" transform="rotate(90 700 352)">transfer done</text>
        <line x1="730" y1="30" x2="730" y2="330" class="line"/><text x="730" y="352" transform="rotate(90 730 352)">interrupt signaled</text>
        <line x1="760" y1="30" x2="760" y2="330" class="line"/><text x="760" y="352" transform="rotate(90 760 352)">interrupt handled</text>
      </g>
    `, 900, 430),

    interruptDrivenIO: wrap(`
      <text x="300" y="28" text-anchor="middle" class="t">CPU</text><text x="680" y="28" text-anchor="middle" class="t">I/O controller</text>
      <rect x="105" y="58" width="360" height="72" class="box"/><text x="285" y="102" text-anchor="middle" class="s">device driver initiates I/O</text>
      <rect x="555" y="88" width="290" height="72" class="node"/><text x="700" y="132" text-anchor="middle" class="s">initiates I/O</text>
      <text x="285" y="183" text-anchor="middle" class="s">CPU executing checks for</text><text x="285" y="208" text-anchor="middle" class="s">interrupts between instructions</text>
      <rect x="105" y="230" width="360" height="86" class="muted"/><text x="285" y="265" text-anchor="middle" class="s">CPU receiving interrupt,</text><text x="285" y="290" text-anchor="middle" class="s">transfers control to interrupt handler</text>
      <rect x="555" y="225" width="290" height="96" class="muted"/><text x="700" y="258" text-anchor="middle" class="s">input ready, output</text><text x="700" y="283" text-anchor="middle" class="s">complete, or error</text><text x="700" y="308" text-anchor="middle" class="s">generates interrupt signal</text>
      <rect x="105" y="345" width="360" height="72" class="node"/><text x="285" y="375" text-anchor="middle" class="s">interrupt handler processes data,</text><text x="285" y="400" text-anchor="middle" class="s">returns from interrupt</text>
      <rect x="105" y="445" width="360" height="72" class="box"/><text x="285" y="475" text-anchor="middle" class="s">CPU resumes processing of</text><text x="285" y="500" text-anchor="middle" class="s">interrupted task</text>
      <path d="M465 95 L550 122" class="arrow"/><text x="505" y="96" class="s">2</text>
      <path d="M700 160 L700 220" class="arrow"/><text x="715" y="194" class="s">3</text>
      <path d="M555 273 L470 273" class="arrow"/><text x="512" y="260" class="s">4</text>
      <path d="M285 316 L285 340" class="arrow"/><text x="300" y="336" class="s">5</text>
      <path d="M285 417 L285 440" class="arrow"/><text x="300" y="438" class="s">6</text>
      <path d="M285 130 L285 225" class="dash"/><text x="300" y="150" class="s">1</text>
      <path d="M105 481 L70 481 L70 94 L100 94" class="arrow"/><text x="48" y="286" class="s">7</text>
    `, 900, 550)
  };
})();
