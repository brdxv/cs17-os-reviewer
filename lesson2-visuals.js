// Offline visual study reconstructions based only on the diagrams/screenshots in the uploaded Lesson 2 PDF.
// These are intentionally simplified so the reviewer can use the visual information without external assets.
const LESSON2_VISUALS = (() => {
  const wrap = (body, width = 760, height = 360) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" rx="22" fill="#f8fafc"/>
      <style>
        text{font-family:Arial,sans-serif;fill:#172033}.t{font-size:22px;font-weight:700}.s{font-size:17px}.xs{font-size:14px}.box{fill:#fff;stroke:#8aa0b8;stroke-width:2}.node{fill:#e8f0ff;stroke:#4d6ea8;stroke-width:2}.accent{fill:#e9f8ef;stroke:#31845b;stroke-width:2}.line{stroke:#4f6175;stroke-width:3;fill:none}.arrow{stroke:#4f6175;stroke-width:3;fill:none;marker-end:url(#a)}</style>
      <defs><marker id="a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#4f6175"/></marker></defs>
      ${body}
    </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  return {
    functions: wrap(`
      <circle cx="380" cy="180" r="68" class="accent"/><text x="380" y="188" text-anchor="middle" class="t">OS</text>
      <g class="s">
        <rect x="35" y="25" width="235" height="42" rx="9" class="box"/><text x="152" y="52" text-anchor="middle">Process Management</text>
        <rect x="35" y="82" width="235" height="42" rx="9" class="box"/><text x="152" y="109" text-anchor="middle">Memory Management</text>
        <rect x="35" y="139" width="235" height="42" rx="9" class="box"/><text x="152" y="166" text-anchor="middle">File System Management</text>
        <rect x="35" y="196" width="235" height="42" rx="9" class="box"/><text x="152" y="223" text-anchor="middle">Device Management</text>
        <rect x="35" y="253" width="235" height="42" rx="9" class="box"/><text x="152" y="280" text-anchor="middle">User Interface</text>
        <rect x="490" y="25" width="235" height="42" rx="9" class="box"/><text x="607" y="52" text-anchor="middle">Security and Protection</text>
        <rect x="490" y="82" width="235" height="42" rx="9" class="box"/><text x="607" y="109" text-anchor="middle">Network Management</text>
        <rect x="490" y="139" width="235" height="42" rx="9" class="box"/><text x="607" y="166" text-anchor="middle">Job Accounting</text>
        <rect x="490" y="196" width="235" height="42" rx="9" class="box"/><text x="607" y="223" text-anchor="middle">Error Detecting aids</text>
        <rect x="490" y="253" width="235" height="52" rx="9" class="box"/><text x="607" y="275" text-anchor="middle">Co-ordination between</text><text x="607" y="296" text-anchor="middle">software and users</text>
        <rect x="265" y="310" width="230" height="38" rx="9" class="box"/><text x="380" y="335" text-anchor="middle">Control over system performance</text>
      </g>
      <path d="M270 46 L325 135 M270 103 L315 150 M270 160 L310 170 M270 217 L315 205 M270 274 L327 224" class="line"/>
      <path d="M490 46 L435 135 M490 103 L445 150 M490 160 L450 170 M490 217 L445 205 M490 279 L430 225 M380 310 L380 248" class="line"/>
    `),

    processStates: wrap(`
      <g class="t">
        <ellipse cx="90" cy="150" rx="65" ry="38" class="node"/><text x="90" y="158" text-anchor="middle">Start</text>
        <ellipse cx="245" cy="150" rx="70" ry="38" class="node"/><text x="245" y="158" text-anchor="middle">Ready</text>
        <ellipse cx="425" cy="150" rx="76" ry="38" class="node"/><text x="425" y="158" text-anchor="middle">Running</text>
        <ellipse cx="645" cy="150" rx="82" ry="38" class="node"/><text x="645" y="158" text-anchor="middle">Terminated</text>
        <ellipse cx="335" cy="285" rx="70" ry="38" class="node"/><text x="335" y="293" text-anchor="middle">Wait</text>
      </g>
      <path d="M155 150 L173 150" class="arrow"/><path d="M315 143 L347 143" class="arrow"/><path d="M349 164 L317 164" class="arrow"/>
      <path d="M501 150 L560 150" class="arrow"/><path d="M405 184 L355 247" class="arrow"/><path d="M306 250 L267 188" class="arrow"/>
    `),

    memory: wrap(`
      <rect x="55" y="95" width="180" height="150" rx="28" class="node"/><text x="145" y="180" text-anchor="middle" class="t">Allocation</text>
      <rect x="290" y="95" width="180" height="150" rx="28" class="accent"/><text x="380" y="165" text-anchor="middle" class="t">Memory</text><text x="380" y="193" text-anchor="middle" class="t">Protection</text>
      <rect x="525" y="95" width="180" height="150" rx="28" class="node"/><text x="615" y="165" text-anchor="middle" class="t">Virtual</text><text x="615" y="193" text-anchor="middle" class="t">Memory</text>
      <path d="M235 170 L285 170" class="arrow"/><path d="M470 170 L520 170" class="arrow"/>
    `),

    fileHierarchy: wrap(`
      <g class="s">
        <rect x="290" y="20" width="180" height="46" rx="8" class="accent"/><text x="380" y="49" text-anchor="middle">Root Directory</text>
        <rect x="55" y="105" width="165" height="42" rx="8" class="box"/><text x="137" y="132" text-anchor="middle">Directory 1</text>
        <rect x="298" y="105" width="165" height="42" rx="8" class="box"/><text x="380" y="132" text-anchor="middle">Directory 2</text>
        <rect x="540" y="105" width="165" height="42" rx="8" class="box"/><text x="622" y="132" text-anchor="middle">Directory 3</text>
        <rect x="80" y="205" width="135" height="40" rx="20" class="node"/><text x="147" y="231" text-anchor="middle">FILE 1</text>
        <rect x="300" y="205" width="160" height="40" rx="8" class="box"/><text x="380" y="231" text-anchor="middle">Sub Directory</text>
        <rect x="545" y="205" width="135" height="40" rx="20" class="node"/><text x="612" y="231" text-anchor="middle">FILE 2</text>
        <rect x="250" y="305" width="135" height="38" rx="19" class="node"/><text x="317" y="330" text-anchor="middle">FILE 3</text>
        <rect x="405" y="305" width="135" height="38" rx="19" class="node"/><text x="472" y="330" text-anchor="middle">FILE 4</text>
      </g>
      <path d="M380 66 L380 84 L137 84 L137 102 M380 84 L380 102 M380 84 L622 84 L622 102" class="line"/>
      <path d="M380 147 L380 176 L147 176 L147 202 M380 176 L380 202 M380 176 L612 176 L612 202" class="line"/>
      <path d="M380 245 L380 278 L317 278 L317 302 M380 278 L472 278 L472 302" class="line"/>
    `),

    security: wrap(`
      <g class="t">
        <rect x="55" y="50" width="280" height="100" rx="14" class="box"/><text x="195" y="93" text-anchor="middle">User</text><text x="195" y="120" text-anchor="middle">Authentication</text>
        <rect x="425" y="50" width="280" height="100" rx="14" class="box"/><text x="565" y="106" text-anchor="middle">Access Control</text>
        <rect x="55" y="210" width="280" height="100" rx="14" class="box"/><text x="195" y="253" text-anchor="middle">Resource</text><text x="195" y="280" text-anchor="middle">Protection</text>
        <rect x="425" y="210" width="280" height="100" rx="14" class="box"/><text x="565" y="253" text-anchor="middle">Security Against</text><text x="565" y="280" text-anchor="middle">Attacks</text>
      </g>
      <circle cx="380" cy="180" r="58" class="accent"/><text x="380" y="188" text-anchor="middle" class="t">01 02</text><text x="380" y="214" text-anchor="middle" class="s">04 03</text>
    `),

    network: wrap(`
      <circle cx="380" cy="180" r="80" class="accent"/><text x="350" y="170" text-anchor="middle" class="s">Server</text><text x="350" y="192" text-anchor="middle" class="s">Software</text><text x="420" y="170" text-anchor="middle" class="xs">Video Data</text><text x="420" y="190" text-anchor="middle" class="xs">Store</text>
      <g class="s"><rect x="40" y="65" width="100" height="45" rx="8" class="node"/><text x="90" y="94" text-anchor="middle">Agent</text><rect x="40" y="250" width="100" height="45" rx="8" class="node"/><text x="90" y="279" text-anchor="middle">Agent</text><rect x="320" y="20" width="120" height="45" rx="8" class="node"/><text x="380" y="49" text-anchor="middle">Agent</text><rect x="620" y="65" width="100" height="45" rx="8" class="node"/><text x="670" y="94" text-anchor="middle">Agent</text><rect x="620" y="250" width="100" height="45" rx="8" class="node"/><text x="670" y="279" text-anchor="middle">Agent</text><rect x="545" y="155" width="175" height="48" rx="8" class="box"/><text x="632" y="185" text-anchor="middle">Administrator panel</text></g>
      <path d="M140 90 L305 145 M140 270 L305 215 M380 65 L380 98 M620 90 L455 145 M620 270 L455 215" class="line"/>
    `),

    performance: wrap(`
      <rect x="35" y="35" width="690" height="290" rx="16" fill="#172033"/>
      <g class="s" fill="#ffffff"><rect x="65" y="70" width="190" height="95" rx="10" fill="#263148"/><text x="160" y="115" text-anchor="middle" fill="#fff">CPU monitoring</text><rect x="285" y="70" width="190" height="95" rx="10" fill="#263148"/><text x="380" y="115" text-anchor="middle" fill="#fff">Memory usage tracking</text><rect x="505" y="70" width="190" height="95" rx="10" fill="#263148"/><text x="600" y="115" text-anchor="middle" fill="#fff">Resource balancing</text><rect x="175" y="200" width="410" height="88" rx="10" fill="#263148"/><text x="380" y="250" text-anchor="middle" fill="#fff">Performance optimization</text></g>
    `),

    accounting: wrap(`
      <rect x="210" y="35" width="340" height="290" rx="16" class="box"/><text x="380" y="76" text-anchor="middle" class="t">Job Accounting</text><line x1="245" y1="105" x2="515" y2="105" class="line"/><text x="255" y="145" class="s">Account ID:</text><rect x="355" y="120" width="150" height="35" rx="6" class="node"/><text x="255" y="200" class="s">Account ID List</text><rect x="255" y="220" width="250" height="65" rx="7" class="node"/>
    `),

    errors: wrap(`
      <path d="M120 55 L640 55 L520 300 L240 300 Z" fill="#f1f5f9" stroke="#6b8bb5" stroke-width="3"/>
      <circle cx="285" cy="145" r="72" class="node"/><text x="285" y="139" text-anchor="middle" class="t">System</text><text x="285" y="167" text-anchor="middle" class="t">error</text>
      <circle cx="470" cy="135" r="72" class="node"/><text x="470" y="129" text-anchor="middle" class="t">I/O</text><text x="470" y="157" text-anchor="middle" class="t">error</text>
      <circle cx="380" cy="245" r="72" class="node"/><text x="380" y="239" text-anchor="middle" class="t">Others</text><text x="380" y="267" text-anchor="middle" class="t">errors</text>
    `),

    coordination: wrap(`
      <g class="s"><rect x="20" y="130" width="115" height="70" rx="12" class="node"/><text x="77" y="172" text-anchor="middle">System User</text><rect x="170" y="80" width="145" height="170" rx="12" class="box"/><text x="242" y="115" text-anchor="middle">Word</text><text x="242" y="150" text-anchor="middle">Gmail</text><text x="242" y="185" text-anchor="middle">Excel</text><text x="242" y="220" text-anchor="middle">Netflix</text><rect x="350" y="80" width="155" height="170" rx="12" class="accent"/><text x="427" y="110" text-anchor="middle">Operating System</text><text x="427" y="150" text-anchor="middle">Windows</text><text x="427" y="185" text-anchor="middle">Linux</text><text x="427" y="220" text-anchor="middle">Mac OS</text><rect x="600" y="130" width="135" height="70" rx="12" class="node"/><text x="667" y="172" text-anchor="middle">Hardware</text></g>
      <path d="M135 165 L165 165 M315 165 L345 165 M505 165 L595 165" class="arrow"/><circle cx="545" cy="165" r="26" fill="#dbe4ee" stroke="#61758b" stroke-width="2"/>
    `),

    batch: wrap(`
      <g class="s"><rect x="25" y="45" width="95" height="40" rx="8" class="node"/><text x="72" y="71" text-anchor="middle">User 1</text><rect x="25" y="110" width="95" height="40" rx="8" class="node"/><text x="72" y="136" text-anchor="middle">User 2</text><rect x="25" y="205" width="95" height="40" rx="8" class="node"/><text x="72" y="231" text-anchor="middle">User 3</text><rect x="145" y="60" width="90" height="38" rx="8" class="box"/><text x="190" y="85" text-anchor="middle">Job A</text><rect x="145" y="125" width="90" height="38" rx="8" class="box"/><text x="190" y="150" text-anchor="middle">Job A</text><rect x="145" y="220" width="90" height="38" rx="8" class="box"/><text x="190" y="245" text-anchor="middle">Job B</text><rect x="290" y="125" width="115" height="70" rx="12" class="accent"/><text x="347" y="167" text-anchor="middle">Operator</text><rect x="455" y="75" width="110" height="48" rx="10" class="node"/><text x="510" y="105" text-anchor="middle">Batch 1</text><rect x="455" y="210" width="110" height="48" rx="10" class="node"/><text x="510" y="240" text-anchor="middle">Batch 2</text><rect x="625" y="125" width="105" height="70" rx="12" class="box"/><text x="677" y="167" text-anchor="middle">Computer</text></g>
      <path d="M120 65 L140 78 M120 130 L140 140 M120 225 L140 235 M235 80 L285 140 M235 145 L285 155 M235 240 L285 180 M405 145 L450 105 M405 175 L450 225 M565 100 L620 145 M565 235 L620 180" class="arrow"/>
    `),

    rtos: wrap(`
      <g class="s"><rect x="40" y="45" width="190" height="90" rx="12" class="box"/><text x="135" y="75" text-anchor="middle">Task scheduling</text><text x="135" y="112" text-anchor="middle">Task 1</text><rect x="40" y="215" width="190" height="105" rx="12" class="box"/><text x="135" y="245" text-anchor="middle">Resource management</text><text x="135" y="277" text-anchor="middle">File 1</text><text x="135" y="305" text-anchor="middle">Read / Write</text><circle cx="380" cy="180" r="62" class="accent"/><rect x="540" y="90" width="175" height="165" rx="12" class="box"/><text x="627" y="125" text-anchor="middle">Device drivers</text><text x="627" y="175" text-anchor="middle">Wi-Fi</text><text x="627" y="215" text-anchor="middle">Bluetooth</text></g><path d="M230 90 L315 145 M230 260 L315 215 M442 180 L535 180" class="line"/>
    `),

    distributed: wrap(`
      <g class="xs"><rect x="40" y="145" width="120" height="65" rx="8" class="node"/><text x="100" y="174" text-anchor="middle">Tier 1</text><text x="100" y="194" text-anchor="middle">Client</text><rect x="280" y="25" width="140" height="65" rx="8" class="box"/><text x="350" y="54" text-anchor="middle">Tier 2</text><text x="350" y="74" text-anchor="middle">Database</text><rect x="260" y="125" width="165" height="70" rx="8" class="box"/><text x="342" y="153" text-anchor="middle">Tier 2</text><text x="342" y="175" text-anchor="middle">Application Server</text><rect x="520" y="125" width="140" height="70" rx="8" class="box"/><text x="590" y="153" text-anchor="middle">Tier 3</text><text x="590" y="175" text-anchor="middle">Database</text><rect x="220" y="255" width="165" height="70" rx="8" class="box"/><text x="302" y="283" text-anchor="middle">Tier 2</text><text x="302" y="305" text-anchor="middle">Application Server</text><rect x="430" y="255" width="145" height="70" rx="8" class="box"/><text x="502" y="283" text-anchor="middle">Tier 3</text><text x="502" y="305" text-anchor="middle">Web Server</text><rect x="610" y="255" width="125" height="70" rx="8" class="box"/><text x="672" y="283" text-anchor="middle">Tier 4</text><text x="672" y="305" text-anchor="middle">Database</text></g><path d="M160 160 L280 70 M160 175 L260 160 M160 190 L220 275 M425 160 L520 160 M385 290 L430 290 M575 290 L610 290" class="line"/>
    `),

    networkOS: wrap(`
      <rect x="260" y="100" width="240" height="160" rx="18" class="accent"/><text x="380" y="165" text-anchor="middle" class="t">NETWORK</text><text x="380" y="195" text-anchor="middle" class="t">OPERATING</text><text x="380" y="225" text-anchor="middle" class="t">SYSTEM</text>
      <g class="s"><rect x="30" y="40" width="180" height="50" rx="9" class="box"/><text x="120" y="72" text-anchor="middle">Authentication</text><rect x="30" y="260" width="180" height="50" rx="9" class="box"/><text x="120" y="292" text-anchor="middle">Resource Sharing</text><rect x="550" y="40" width="180" height="50" rx="9" class="box"/><text x="640" y="72" text-anchor="middle">Security Policies</text><rect x="550" y="260" width="180" height="50" rx="9" class="box"/><text x="640" y="292" text-anchor="middle">Monitoring</text></g><path d="M210 65 L290 110 M210 285 L290 250 M550 65 L470 110 M550 285 L470 250" class="line"/>
    `),

    mobile: wrap(`
      <rect x="55" y="65" width="190" height="230" rx="30" class="node"/><text x="150" y="185" text-anchor="middle" class="t">Android</text><rect x="285" y="65" width="190" height="230" rx="30" class="accent"/><text x="380" y="185" text-anchor="middle" class="t">HarmonyOS</text><rect x="515" y="65" width="190" height="230" rx="30" class="node"/><text x="610" y="185" text-anchor="middle" class="t">iOS</text>
    `),

    timesharing: wrap(`
      <rect x="325" y="130" width="110" height="100" rx="12" class="accent"/><text x="380" y="190" text-anchor="middle" class="t">CPU</text>
      <g class="s"><rect x="80" y="30" width="105" height="42" rx="20" class="node"/><text x="132" y="57" text-anchor="middle">USER 6</text><rect x="575" y="30" width="105" height="42" rx="20" class="node"/><text x="627" y="57" text-anchor="middle">USER 1</text><rect x="590" y="145" width="105" height="42" rx="20" class="node"/><text x="642" y="172" text-anchor="middle">USER 2</text><text x="642" y="210" text-anchor="middle" class="xs">Active State</text><rect x="575" y="285" width="105" height="42" rx="20" class="node"/><text x="627" y="312" text-anchor="middle">USER 3</text><rect x="80" y="285" width="105" height="42" rx="20" class="node"/><text x="132" y="312" text-anchor="middle">USER 4</text><rect x="65" y="145" width="105" height="42" rx="20" class="node"/><text x="117" y="172" text-anchor="middle">USER 5</text><text x="117" y="210" text-anchor="middle" class="xs">Ready State</text></g><path d="M185 60 L330 135 M575 60 L430 135 M590 166 L435 175 M575 300 L430 225 M185 300 L330 225 M170 166 L325 175" class="arrow"/>
    `)
  };
})();
