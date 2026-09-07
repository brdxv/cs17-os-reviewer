// Offline visual study reconstructions based only on diagrams, tables, and image-only slides in the uploaded Lesson 3 PDF.
// They preserve the study-relevant labels while remaining fully local to the reviewer.
const LESSON3_VISUALS = (() => {
  const wrap = (body, width = 760, height = 360) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" rx="22" fill="#f8fafc"/>
      <style>
        text{font-family:Arial,sans-serif;fill:#172033}.t{font-size:22px;font-weight:700}.s{font-size:17px}.xs{font-size:13px}.xxs{font-size:11px}.box{fill:#fff;stroke:#8aa0b8;stroke-width:2}.node{fill:#e8f0ff;stroke:#4d6ea8;stroke-width:2}.accent{fill:#e9f8ef;stroke:#31845b;stroke-width:2}.warn{fill:#fff4dc;stroke:#b88922;stroke-width:2}.line{stroke:#4f6175;stroke-width:3;fill:none}.dash{stroke:#4f6175;stroke-width:2;fill:none;stroke-dasharray:8 6}.arrow{stroke:#4f6175;stroke-width:3;fill:none;marker-end:url(#a)}</style>
      <defs><marker id="a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#4f6175"/></marker></defs>
      ${body}
    </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  return {
    generations: wrap(`
      <text x="380" y="34" text-anchor="middle" class="t">Generations of Operating System</text>
      <g class="s">
        <rect x="35" y="60" width="690" height="48" rx="10" class="node"/><text x="55" y="90">First Generation: 1945–1955</text><text x="470" y="90">Vacuum Tubes • Plug Boards</text>
        <rect x="35" y="119" width="690" height="48" rx="10" class="box"/><text x="55" y="149">Second Generation: 1955–1965</text><text x="470" y="149">Transistors • Batch Systems</text>
        <rect x="35" y="178" width="690" height="48" rx="10" class="node"/><text x="55" y="208">Third Generation: 1965–1980</text><text x="470" y="208">Integrated Circuits • Multiprogramming</text>
        <rect x="35" y="237" width="690" height="48" rx="10" class="box"/><text x="55" y="267">Fourth Generation: 1980–Present</text><text x="470" y="267">LSI • PCs • GUI • Multitasking</text>
        <rect x="35" y="296" width="690" height="44" rx="10" class="warn"/><text x="55" y="324">Next Generation: ???</text><text x="470" y="324">High-speed networks? • Wide-area resources?</text>
      </g>
    `),

    batchWorkflow: wrap(`
      <text x="380" y="32" text-anchor="middle" class="t">Second Generation Batch Workflow</text>
      <g class="xs">
        <rect x="20" y="90" width="110" height="80" rx="10" class="node"/><text x="75" y="117" text-anchor="middle">Card reader</text><text x="75" y="140" text-anchor="middle">IBM 1401</text><text x="75" y="160" text-anchor="middle">Cards</text>
        <rect x="160" y="90" width="100" height="80" rx="10" class="box"/><text x="210" y="122" text-anchor="middle">Tape drive</text><text x="210" y="148" text-anchor="middle">Input tape</text>
        <rect x="300" y="75" width="150" height="110" rx="12" class="accent"/><text x="375" y="110" text-anchor="middle">IBM 7094</text><text x="375" y="136" text-anchor="middle">System tape</text><text x="375" y="160" text-anchor="middle">Computation</text>
        <rect x="490" y="90" width="100" height="80" rx="10" class="box"/><text x="540" y="122" text-anchor="middle">Output tape</text><text x="540" y="148" text-anchor="middle">Results</text>
        <rect x="625" y="90" width="115" height="80" rx="10" class="node"/><text x="682" y="117" text-anchor="middle">Printer</text><text x="682" y="140" text-anchor="middle">IBM 1401</text><text x="682" y="160" text-anchor="middle">Output</text>
      </g>
      <path d="M130 130 L155 130 M260 130 L295 130 M450 130 L485 130 M590 130 L620 130" class="arrow"/>
      <g class="xs"><text x="75" y="230" text-anchor="middle">Bring cards</text><text x="210" y="230" text-anchor="middle">Read to tape</text><text x="375" y="230" text-anchor="middle">Run job</text><text x="540" y="230" text-anchor="middle">Write results</text><text x="682" y="230" text-anchor="middle">Print output</text></g>
    `),

    spooling: wrap(`
      <text x="380" y="32" text-anchor="middle" class="t">Spooling</text>
      <rect x="300" y="50" width="160" height="70" rx="12" class="accent"/><text x="380" y="93" text-anchor="middle" class="t">CPU</text>
      <rect x="35" y="145" width="185" height="80" rx="12" class="node"/><text x="127" y="178" text-anchor="middle" class="s">INPUT DEVICE</text><text x="127" y="202" text-anchor="middle" class="xs">Ex: card reader</text>
      <rect x="540" y="145" width="185" height="80" rx="12" class="node"/><text x="632" y="178" text-anchor="middle" class="s">OUTPUT DEVICE</text><text x="632" y="202" text-anchor="middle" class="xs">Ex: Printer</text>
      <rect x="285" y="170" width="190" height="155" rx="22" class="box"/><rect x="315" y="196" width="130" height="46" rx="8" class="accent"/><text x="380" y="226" text-anchor="middle" class="s">Spool</text><rect x="315" y="257" width="130" height="48" rx="8" class="node"/><text x="380" y="280" text-anchor="middle" class="xs">Secondary</text><text x="380" y="298" text-anchor="middle" class="xs">Storage</text>
      <path d="M220 185 L280 185 M480 185 L535 185 M380 120 L380 166 M350 170 L350 125 M410 170 L410 125" class="arrow"/>
    `),

    emailSystem: wrap(`
      <text x="380" y="28" text-anchor="middle" class="t">Email System Diagram</text>
      <g class="xs">
        <rect x="25" y="55" width="150" height="90" rx="12" class="node"/><text x="100" y="80" text-anchor="middle">Person A's PC</text><text x="100" y="104" text-anchor="middle">Mail client</text><text x="100" y="126" text-anchor="middle">Running POP Client</text>
        <rect x="40" y="180" width="120" height="65" rx="10" class="box"/><text x="100" y="207" text-anchor="middle">A's local</text><text x="100" y="228" text-anchor="middle">storage</text>
        <rect x="25" y="270" width="150" height="70" rx="12" class="node"/><text x="100" y="297" text-anchor="middle">Person B's PC</text><text x="100" y="320" text-anchor="middle">Mail client</text>
        <rect x="260" y="72" width="130" height="60" rx="12" class="box"/><text x="325" y="108" text-anchor="middle">network</text>
        <rect x="260" y="280" width="130" height="60" rx="12" class="box"/><text x="325" y="316" text-anchor="middle">network</text>
        <rect x="465" y="115" width="145" height="150" rx="14" class="accent"/><text x="537" y="158" text-anchor="middle">A's mail Server</text><text x="537" y="184" text-anchor="middle">(SMTP or POP)</text><text x="537" y="224" text-anchor="middle">Outgoing email</text><text x="537" y="247" text-anchor="middle">Incoming email</text>
        <rect x="640" y="140" width="100" height="110" rx="14" class="box"/><text x="690" y="169" text-anchor="middle">Mail spool</text><text x="690" y="191" text-anchor="middle">with storage</text><text x="690" y="213" text-anchor="middle">for</text><text x="690" y="235" text-anchor="middle">Person A</text>
      </g>
      <path d="M175 100 L255 100" class="line"/><text x="215" y="88" text-anchor="middle" class="xxs">POP Link</text><path d="M390 102 L460 150" class="arrow"/><path d="M460 176 L390 120" class="arrow"/>
      <path d="M175 305 L255 305" class="line"/><text x="215" y="293" text-anchor="middle" class="xxs">SMTP Link</text><text x="215" y="331" text-anchor="middle" class="xxs">Email sent via SMTP</text><path d="M390 310 L480 255" class="arrow"/>
      <path d="M610 190 L635 190" class="arrow"/><path d="M160 208 L175 145" class="line"/>
    `),

    multiprogramming: wrap(`
      <text x="235" y="34" text-anchor="middle" class="t">Third Generation: Multiprogramming</text>
      <g class="s"><text x="35" y="85">Multiple jobs in memory</text><text x="35" y="125">Protected from one another</text><text x="35" y="165">OS protected from each job</text><text x="35" y="205">Time and hardware split between jobs</text><text x="35" y="245">Still not interactive</text></g>
      <text x="560" y="45" text-anchor="middle" class="s">Memory partitions</text>
      <rect x="500" y="65" width="120" height="70" class="node"/><text x="560" y="108" text-anchor="middle" class="t">Job 3</text>
      <rect x="500" y="135" width="120" height="60" class="warn"/><text x="560" y="172" text-anchor="middle" class="t">Job 2</text>
      <rect x="500" y="195" width="120" height="65" class="node"/><text x="560" y="235" text-anchor="middle" class="t">Job 1</text>
      <rect x="500" y="260" width="120" height="85" class="accent"/><text x="560" y="298" text-anchor="middle" class="s">Operating</text><text x="560" y="322" text-anchor="middle" class="s">system</text>
    `),

    swappingSwitching: wrap(`
      <text x="380" y="27" text-anchor="middle" class="t">Swapping vs. Switching in Operating Systems</text>
      <rect x="25" y="50" width="345" height="290" rx="12" class="node"/><rect x="390" y="50" width="345" height="290" rx="12" class="accent"/>
      <text x="197" y="82" text-anchor="middle" class="t">Swapping</text><text x="562" y="82" text-anchor="middle" class="t">Switching</text>
      <g class="xs"><text x="45" y="115">RAM ↔ secondary storage (disk)</text><text x="45" y="146">Involves RAM and disk</text><text x="45" y="177">Manages memory when RAM is limited</text><text x="45" y="208">Process may be placed on disk</text><text x="45" y="239">Generally slower</text><text x="45" y="284">Example: A moved RAM → disk</text><text x="45" y="305">to free memory for B</text>
      <text x="410" y="115">CPU changes process/thread</text><text x="410" y="146">CPU and process context</text><text x="410" y="177">Lets processes share CPU</text><text x="410" y="208">Current process paused</text><text x="410" y="239">Generally much faster</text><text x="410" y="284">Example: CPU stops A</text><text x="410" y="305">and starts executing B</text></g>
    `),

    fourthGenVisual: wrap(`
      <text x="380" y="30" text-anchor="middle" class="t">Fourth Generation OS Visual Examples</text>
      <g class="s">
        <rect x="35" y="60" width="205" height="105" rx="12" fill="#15202b"/><text x="137" y="105" text-anchor="middle" fill="#fff">Command-line</text><text x="137" y="132" text-anchor="middle" fill="#fff">computer screen</text>
        <rect x="277" y="60" width="205" height="105" rx="12" class="node"/><text x="379" y="105" text-anchor="middle">Graphical desktop</text><text x="379" y="132" text-anchor="middle">interface</text>
        <rect x="520" y="60" width="205" height="105" rx="12" class="accent"/><text x="622" y="105" text-anchor="middle">Modern desktop</text><text x="622" y="132" text-anchor="middle">computer</text>
        <rect x="80" y="205" width="150" height="115" rx="24" class="node"/><text x="155" y="270" text-anchor="middle">Smartphone</text>
        <rect x="305" y="205" width="150" height="115" rx="24" class="box"/><text x="380" y="270" text-anchor="middle">Smartphone</text>
        <rect x="530" y="205" width="150" height="115" rx="18" class="accent"/><text x="605" y="270" text-anchor="middle">Tablet</text>
      </g>
    `),

    simplePC: wrap(`
      <text x="380" y="30" text-anchor="middle" class="t">Components of a Simple PC</text>
      <rect x="25" y="130" width="710" height="205" rx="12" class="dash"/>
      <text x="585" y="325" class="xs">Computer internals (inside the “box”)</text><text x="650" y="70" class="xs">Outside world</text>
      <g class="xs">
        <rect x="55" y="155" width="125" height="55" rx="8" class="node"/><text x="117" y="186" text-anchor="middle">Video controller</text>
        <rect x="205" y="155" width="125" height="55" rx="8" class="node"/><text x="267" y="178" text-anchor="middle">Hard drive</text><text x="267" y="197" text-anchor="middle">controller</text>
        <rect x="355" y="155" width="125" height="55" rx="8" class="node"/><text x="417" y="186" text-anchor="middle">USB controller</text>
        <rect x="505" y="155" width="125" height="55" rx="8" class="node"/><text x="567" y="178" text-anchor="middle">Network</text><text x="567" y="197" text-anchor="middle">controller</text>
        <rect x="70" y="265" width="100" height="50" rx="10" class="accent"/><text x="120" y="296" text-anchor="middle">CPU</text>
        <rect x="210" y="265" width="135" height="50" rx="10" class="accent"/><text x="277" y="296" text-anchor="middle">Memory</text>
      </g>
      <path d="M117 210 L117 245 L567 245 L567 210 M267 210 L267 245 M417 210 L417 245 M120 265 L120 245 M277 265 L277 245" class="line"/>
      <g class="xs"><rect x="60" y="55" width="115" height="55" rx="8" class="box"/><text x="117" y="88" text-anchor="middle">Display</text><rect x="215" y="55" width="105" height="55" rx="8" class="box"/><text x="267" y="88" text-anchor="middle">Hard drive</text><rect x="350" y="55" width="135" height="55" rx="8" class="box"/><text x="417" y="80" text-anchor="middle">Keyboard</text><text x="417" y="100" text-anchor="middle">+ Mouse</text></g>
      <path d="M117 110 L117 150 M267 110 L267 150 M417 110 L417 150 M567 150 L640 80" class="arrow"/>
    `),

    storagePyramid: wrap(`
      <text x="380" y="28" text-anchor="middle" class="t">Storage Pyramid</text>
      <polygon points="380,45 325,115 435,115" class="node"/><text x="380" y="82" text-anchor="middle" class="s">CPU</text><text x="380" y="103" text-anchor="middle" class="xs">Registers</text>
      <polygon points="325,120 275,190 485,190 435,120" class="warn"/><text x="380" y="145" text-anchor="middle" class="xs">L1 cache</text><text x="380" y="165" text-anchor="middle" class="xs">L2 cache</text><text x="380" y="184" text-anchor="middle" class="xs">L3 cache</text>
      <polygon points="275,195 220,265 540,265 485,195" class="node"/><text x="380" y="238" text-anchor="middle" class="t">Main Memory</text>
      <polygon points="220,270 160,340 600,340 540,270" fill="#dfe5ec" stroke="#65788d" stroke-width="2"/><text x="380" y="314" text-anchor="middle" class="t">Permanent Storage</text>
      <g class="xs"><text x="25" y="82">Processor</text><text x="25" y="143">SRAM</text><text x="25" y="226">DRAM</text><text x="25" y="296">HDD / SSD</text><text x="580" y="71">Tiny Capacity</text><text x="580" y="89">Highly Expensive</text><text x="580" y="107">Extremely Fast</text><text x="580" y="150">Low Capacity</text><text x="580" y="168">Expensive</text><text x="580" y="186">Faster</text><text x="580" y="226">Medium Capacity</text><text x="580" y="244">Medium Price</text><text x="580" y="262">Fast</text><text x="615" y="296">Huge Capacity</text><text x="615" y="314">Cheap</text><text x="615" y="332">Slow</text></g>
    `),

    diskAnatomy: wrap(`
      <text x="380" y="28" text-anchor="middle" class="t">Anatomy of a Disk</text>
      <circle cx="190" cy="185" r="115" fill="#eaf4ff" stroke="#5d7da5" stroke-width="2"/><circle cx="190" cy="185" r="80" fill="none" stroke="#7a93af" stroke-width="2"/><circle cx="190" cy="185" r="45" fill="none" stroke="#7a93af" stroke-width="2"/><line x1="190" y1="70" x2="190" y2="300" class="line"/><line x1="75" y1="185" x2="305" y2="185" class="line"/>
      <text x="105" y="92" class="s">Track</text><text x="235" y="107" class="xs">Block/Sector</text>
      <g><ellipse cx="505" cy="165" rx="145" ry="38" class="node"/><ellipse cx="505" cy="200" rx="145" ry="38" class="node"/><ellipse cx="505" cy="235" rx="145" ry="38" class="node"/></g>
      <line x1="505" y1="115" x2="505" y2="292" class="line"/><text x="520" y="305" class="s">Spindle</text><text x="640" y="150" class="s">Head</text><line x1="635" y1="155" x2="600" y2="185" class="line"/><text x="365" y="165" class="s">Surface</text><text x="365" y="250" class="s">Platter</text><text x="420" y="125" class="s">Cylinder</text><path d="M450 132 L450 260" class="dash"/>
    `),

    memoryOrganization: wrap(`
      <text x="380" y="28" text-anchor="middle" class="t">Simple Memory Organization</text>
      <text x="92" y="48" class="xs">Address</text>
      <rect x="120" y="55" width="190" height="270" class="box"/>
      <rect x="120" y="255" width="190" height="70" class="accent"/><text x="215" y="294" text-anchor="middle" class="s">Operating system</text>
      <rect x="120" y="165" width="190" height="65" class="node"/><text x="215" y="193" text-anchor="middle" class="s">User program</text><text x="215" y="215" text-anchor="middle" class="s">and data</text>
      <rect x="120" y="75" width="190" height="65" class="node"/><text x="215" y="103" text-anchor="middle" class="s">User program</text><text x="215" y="125" text-anchor="middle" class="s">and data</text>
      <g class="xs"><text x="55" y="326">0</text><text x="42" y="258">0x1dfff</text><text x="42" y="230">0x23000</text><text x="42" y="169">0x27fff</text><text x="42" y="140">0x2b000</text><text x="42" y="78">0x2ffff</text></g>
      <path d="M312 230 L380 230" class="line"/><text x="390" y="235" class="s">Base</text><path d="M312 165 L380 165" class="line"/><text x="390" y="170" class="s">Limit</text>
      <g class="xs"><text x="470" y="100">RAM is divided into areas.</text><text x="470" y="138">OS occupies part of memory.</text><text x="470" y="176">Two user programs are shown.</text><text x="470" y="214">Diagram labels Base at 0x23000</text><text x="470" y="235">and Limit at 0x27fff.</text></g>
    `)
  };
})();
