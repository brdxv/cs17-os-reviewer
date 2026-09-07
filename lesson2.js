buildLesson({
  id: 'l2',
  number: 2,
  title: 'Roles of Operating Systems in Computing',
  subtitle: 'Importance of OS, functions of OS, key responsibilities, examples, visual diagrams, and types of operating systems',
  sourceLabel: 'CS 17 Lesson 2',
  sourceNotes: [
    'Lesson 2 was re-audited in slide order from Slides 3 to 33 using both the PDF text and the rendered slide visuals. Diagram labels that add meaningful study content are included in the reviewer.',
    'Slide 13 is titled User Interface Management, but its body repeats the Device Management description and device image from Slide 11. The reviewer records the mismatch and uses the unique User Interface Management responsibilities and example from Slide 14 instead of inventing a replacement definition.',
    'Slide 18 is titled Security and Protection Management, but its listed responsibilities and Wi-Fi example are Network Management content immediately following Slide 17. The reviewer keeps the exact listed wording under Network Management.',
    'Slide 24 ends its example at "when a storage device develops" and does not provide the rest of the sentence. The reviewer does not invent the missing text.',
    'Slide 32 text names Android and iOS, while the slide image also visibly shows HarmonyOS. HarmonyOS is included only as a visual-derived Mobile OS example.',
    'The Slide 11 device image was visually checked. It shows the OS connected to device icons, but the icons are not text-labeled, so the reviewer does not invent device names from them.',
    'The Slide 19 performance dashboard and Slide 21 Job Accounting screenshot were also visually checked. Only lesson-relevant readable information is used, rather than turning unrelated interface details into extra exam items.',
    'Visual study images in the reviewer are simplified offline reconstructions of the source diagrams so the important labels can be reviewed without external assets.'
  ],

  concepts: [
    {
      id: 'l2_process', order: 501, term: 'Process Management', source: 'Slide 5',
      definition: 'Process management is the function of an operating system that creates, schedules, executes, and terminates processes while ensuring efficient CPU utilization.',
      visual: { src: LESSON2_VISUALS.processStates, side: 'description', alt: 'Process state diagram showing Start, Ready, Running, Wait, and Terminated', caption: 'Slide 5 visual reconstruction' },
      identPrompt: 'Which operating-system function creates, schedules, executes, and terminates processes while ensuring efficient CPU utilization?'
    },
    {
      id: 'l2_process_example', order: 602, term: 'Process Management', source: 'Slide 6 example', concepts: ['l2_process'],
      definition: 'When a user opens Chrome, Spotify, and Microsoft word simultaneously, the operating system allocates CPU time to each process to ensure smooth execution.',
      identPrompt: 'Which OS function is demonstrated when Chrome, Spotify, and Microsoft word run simultaneously and the operating system allocates CPU time to each process?'
    },

    {
      id: 'l2_memory', order: 701, term: 'Memory Management', source: 'Slide 7',
      definition: 'Memory management controls all the allocation and release of memory resources, ensuring programs have the memory they need while avoiding resource conflicts and inefficiencies.',
      visual: { src: LESSON2_VISUALS.memory, side: 'description', alt: 'Memory Management visual showing Allocation, Memory Protection, and Virtual Memory', caption: 'Slide 7 visual reconstruction' },
      identPrompt: 'Which operating-system function controls the allocation and release of memory resources while ensuring programs have the memory they need?'
    },
    {
      id: 'l2_memory_example', order: 802, term: 'Memory Management', source: 'Slide 8 example', concepts: ['l2_memory'],
      definition: 'When several applications run simultaneously, the operating system regulates RAM usage to maintain performance and reduce the risk of system slowdowns or crashes.',
      identPrompt: 'Which OS function is demonstrated when the operating system regulates RAM usage while several applications run simultaneously?'
    },

    {
      id: 'l2_files', order: 901, term: 'File System Management', source: 'Slide 9',
      definition: 'File system management organizes, stores, retrieves, and secures files and directories on storage devices.',
      visual: { src: LESSON2_VISUALS.fileHierarchy, side: 'description', alt: 'File hierarchy with Root Directory, directories, subdirectory, and files', caption: 'Slide 9 visual reconstruction' },
      identPrompt: 'Which operating-system function organizes, stores, retrieves, and secures files and directories on storage devices?'
    },
    {
      id: 'l2_files_example', order: 1002, term: 'File System Management', source: 'Slide 10 example', concepts: ['l2_files'],
      definition: 'When saving a PDF document, the operating system determines where it is stored and how it can be accessed later.',
      identPrompt: 'Which OS function is demonstrated when saving a PDF and the operating system determines where it is stored and how it can be accessed later?'
    },

    {
      id: 'l2_device', order: 1101, term: 'Device Management', source: 'Slide 11',
      definition: 'Device management enables communication between hardware devices and software applications through device drivers and resource allocation mechanisms.',
      identPrompt: 'Which operating-system function enables communication between hardware devices and software applications through device drivers and resource allocation mechanisms?'
    },
    {
      id: 'l2_device_example', order: 1202, term: 'Device Management', source: 'Slide 12 example', concepts: ['l2_device'],
      definition: 'When printing a document, the operating system communicates with the printer driver to complete the task.',
      identPrompt: 'Which OS function is demonstrated when the operating system communicates with a printer driver to print a document?'
    },

    {
      id: 'l2_ui', order: 1401, term: 'User Interface Management', source: 'Slide 14',
      definition: 'GUI support; CLI support; Menu-driven interfaces; Natural Language Interface; Touch-based interaction.',
      identPrompt: 'Which operating-system function includes GUI support, CLI support, menu-driven interfaces, Natural Language Interface, and touch-based interaction?'
    },
    {
      id: 'l2_ui_example', order: 1403, term: 'User Interface Management', source: 'Slide 14 example', concepts: ['l2_ui'],
      definition: 'Windows features a graphical user interface (GUI) that enables users to interact with the system through icons, menus, and on-screen windows.',
      identPrompt: 'Which OS function is demonstrated by Windows letting users interact through icons, menus, and on-screen windows?'
    },

    {
      id: 'l2_security', order: 1501, term: 'Security and Protection Management', source: 'Slide 15',
      definition: 'Security and protection functions safeguard data, applications, and system resources against unauthorized access and cyber threats.',
      visual: { src: LESSON2_VISUALS.security, side: 'description', alt: 'Security visual with User Authentication, Access Control, Security Against Attacks, and Resource Protection', caption: 'Slide 15 visual reconstruction' },
      identPrompt: 'Which operating-system function safeguards data, applications, and system resources against unauthorized access and cyber threats?'
    },
    {
      id: 'l2_security_example', order: 1602, term: 'Security and Protection Management', source: 'Slide 16 example', concepts: ['l2_security'],
      definition: 'Password-protected user accounts prevent unauthorized access to sensitive information.',
      identPrompt: 'Which OS function is demonstrated by password-protected user accounts that prevent unauthorized access to sensitive information?'
    },

    {
      id: 'l2_network', order: 1701, term: 'Network Management', source: 'Slide 17',
      definition: 'Network management enables communication between computers and devices connected through local or global networks.',
      visual: { src: LESSON2_VISUALS.network, side: 'description', alt: 'Network diagram with Agent computers, Server Software, Video Data Store, and Administrator panel', caption: 'Slide 17 visual reconstruction' },
      identPrompt: 'Which operating-system function enables communication between computers and devices connected through local or global networks?'
    },
    {
      id: 'l2_network_example', order: 1802, term: 'Network Management', source: 'Slide 18 example', concepts: ['l2_network'],
      definition: 'The operating system manages Wi-Fi connectivity and internet access for users.',
      identPrompt: 'Which OS function is demonstrated when the operating system manages Wi-Fi connectivity and internet access for users?'
    },

    {
      id: 'l2_performance', order: 1901, term: 'Control over System Performance', source: 'Slide 19',
      definition: 'This function monitors and optimizes system resources to maintain stable and efficient performance.',
      visual: { src: LESSON2_VISUALS.performance, side: 'description', alt: 'Performance monitoring dashboard based on the Lesson 2 performance topic', caption: 'Slides 19 to 20 visual study reconstruction' },
      identPrompt: 'Which operating-system function monitors and optimizes system resources to maintain stable and efficient performance?'
    },
    {
      id: 'l2_performance_example', order: 2002, term: 'Control over System Performance', source: 'Slide 20 example', concepts: ['l2_performance'],
      definition: 'The Task Manager in Windows helps monitor CPU and memory usage.',
      identPrompt: 'Which OS function is demonstrated by Windows Task Manager helping monitor CPU and memory usage?'
    },

    {
      id: 'l2_accounting', order: 2101, term: 'Job Accounting', source: 'Slide 21',
      definition: 'Job accounting tracks resource usage by applications, users, and processes for performance analysis and resource planning.',
      visual: { src: LESSON2_VISUALS.accounting, side: 'answer', alt: 'Job Accounting interface with Account ID and Account ID List', caption: 'Slide 21 visual reconstruction' },
      identPrompt: 'Which operating-system function tracks resource usage by applications, users, and processes for performance analysis and resource planning?'
    },
    {
      id: 'l2_accounting_example', order: 2202, term: 'Job Accounting', source: 'Slide 22 example', concepts: ['l2_accounting'],
      definition: 'Cloud platforms monitor resource consumption to calculate customer usage costs.',
      identPrompt: 'Which OS function is demonstrated when cloud platforms monitor resource consumption to calculate customer usage costs?'
    },

    {
      id: 'l2_errors', order: 2301, term: 'Error Detection and Handling', aliases: ['Error Detection & Handling'], source: 'Slide 23',
      definition: 'Error detection and handling identify system faults and take corrective actions to maintain system reliability.',
      visual: { src: LESSON2_VISUALS.errors, side: 'description', alt: 'Error funnel showing System error, I/O error, and Others errors', caption: 'Slide 23 visual reconstruction' },
      identPrompt: 'Which operating-system function identifies system faults and takes corrective actions to maintain system reliability?'
    },

    {
      id: 'l2_coord', order: 2501, term: 'Coordination Between Software and Users', aliases: ['Coordination b/w software and users', 'Co-ordination between software and users'], source: 'Slide 25',
      definition: 'The operating system acts as an intermediary between users and software applications, ensuring smooth communication and resource sharing.',
      visual: { src: LESSON2_VISUALS.coordination, side: 'description', alt: 'System User to applications to Operating System to Hardware flow', caption: 'Slide 25 visual reconstruction' },
      identPrompt: 'Which operating-system function acts as an intermediary between users and software applications, ensuring smooth communication and resource sharing?'
    },
    {
      id: 'l2_coord_example', order: 2602, term: 'Coordination Between Software and Users', aliases: ['Coordination b/w software and users'], source: 'Slide 26 example', concepts: ['l2_coord'],
      definition: 'When a user launches a web browser, the operating system allocates memory, CPU resources, and device access required to run the application.',
      identPrompt: 'Which OS function is demonstrated when launching a web browser causes the operating system to allocate memory, CPU resources, and device access?'
    },

    {
      id: 'l2_batch', order: 2801, term: 'Batch OS', aliases: ['Batch Operating System'], source: 'Slide 28',
      definition: 'Processes similar jobs in groups without user interaction during execution (e.g., payroll processing).',
      visual: { src: LESSON2_VISUALS.batch, side: 'description', alt: 'Batch flow with users, Job A, Job B, Operator, Batch 1, Batch 2, and Computer', caption: 'Slide 28 visual reconstruction' },
      identPrompt: 'Which type of operating system processes similar jobs in groups without user interaction during execution?'
    },
    {
      id: 'l2_rtos', order: 2901, term: 'Real-Time OS (RTOS)', aliases: ['RTOS', 'Real-Time OS', 'Real Time OS'], source: 'Slide 29',
      definition: 'Responds to input instantly with strict timing limits, used for critical machinery like medical devices or air traffic control.',
      visual: { src: LESSON2_VISUALS.rtos, side: 'description', alt: 'RTOS visual with Task scheduling, Resource management, and Device drivers', caption: 'Slide 29 visual reconstruction' },
      identPrompt: 'Which type of operating system responds to input instantly with strict timing limits and is used for critical machinery like medical devices or air traffic control?'
    },
    {
      id: 'l2_distributed', order: 3001, term: 'Distributed OS', aliases: ['Distributed Operating System'], source: 'Slide 30',
      definition: 'Connects independent computers over a network to work together as a single system (e.g., cloud storage systems).',
      visual: { src: LESSON2_VISUALS.distributed, side: 'description', alt: 'Distributed system diagram with Tier 1 Client and Tier 2 to Tier 4 server and database roles', caption: 'Slide 30 visual reconstruction' },
      identPrompt: 'Which type of operating system connects independent computers over a network to work together as a single system?'
    },
    {
      id: 'l2_network_os', order: 3101, term: 'Network OS', aliases: ['Network Operating System'], source: 'Slide 31',
      definition: 'Runs on a server to manage data, security, and user access across a local network.',
      visual: { src: LESSON2_VISUALS.networkOS, side: 'answer', alt: 'Network Operating System visual with Authentication, Resource Sharing, Security Policies, and Monitoring', caption: 'Slide 31 visual reconstruction' },
      identPrompt: 'Which type of operating system runs on a server to manage data, security, and user access across a local network?'
    },
    {
      id: 'l2_mobile_os', order: 3201, term: 'Mobile OS', aliases: ['Mobile Operating System'], source: 'Slide 32',
      definition: 'Designed specifically for small, touch-screen portable devices (e.g., Android, iOS).',
      visual: { src: LESSON2_VISUALS.mobile, side: 'description', alt: 'Mobile OS visual showing Android, HarmonyOS, and iOS', caption: 'Slide 32 visual reconstruction' },
      identPrompt: 'Which type of operating system is designed specifically for small, touch-screen portable devices such as Android and iOS devices?'
    },
    {
      id: 'l2_timesharing_os', order: 3301, term: 'Time-Sharing / Multitasking OS', aliases: ['Time-Sharing OS', 'Time Sharing OS', 'Multitasking OS'], source: 'Slide 33',
      definition: 'Allows multiple users or tasks to share CPU time by switching between them very quickly (e.g., Microsoft Windows, macOS).',
      visual: { src: LESSON2_VISUALS.timesharing, side: 'description', alt: 'CPU in the center with User 1 to User 6, User 5 marked Ready State and User 2 marked Active State', caption: 'Slide 33 visual reconstruction' },
      identPrompt: 'Which type of operating system allows multiple users or tasks to share CPU time by switching between them very quickly?'
    }
  ],

  groups: [
    {
      id: 'l2_importance', order: 301, title: 'Importance of OS in Computing', source: 'Slide 3',
      prompt: 'Enumerate the three reasons for the Importance of OS in Computing listed in the PPT.',
      answers: ['Ensures system stability', 'Facilitates hardware compatibility', 'Enhances user productivity'],
      distractors: ['Billing support', 'Device synchronization'],
      concepts: ['l2_process', 'l2_memory', 'l2_files']
    },
    {
      id: 'l2_functions', order: 401, title: 'Functions of Operating System', source: 'Slide 4 visual',
      prompt: 'Enumerate the eleven Functions of Operating System shown in the Slide 4 diagram.',
      answers: [
        'Process Management',
        'Memory Management',
        'File System Management',
        'Device Management',
        'User Interface',
        'Security and Protection',
        'Network Management',
        'Job Accounting',
        'Error Detecting aids',
        'Co-ordination between software and users',
        'Control over system performance'
      ],
      distractors: ['Batch OS', 'Real-Time OS'],
      visual: { src: LESSON2_VISUALS.functions, side: 'answer', alt: 'Functions of Operating System diagram', caption: 'Slide 4 visual reconstruction' },
      concepts: ['l2_process', 'l2_memory', 'l2_files', 'l2_device', 'l2_ui', 'l2_security', 'l2_network', 'l2_accounting', 'l2_errors', 'l2_coord', 'l2_performance']
    },

    {
      id: 'l2_process_states', order: 511, title: 'Process States', source: 'Slide 5 visual', identification: false,
      prompt: 'Enumerate the five process states shown in the Slide 5 diagram.',
      answers: ['Start', 'Ready', 'Running', 'Wait', 'Terminated'],
      distractors: ['Active State', 'Ready State'],
      cardDefinition: 'The Slide 5 diagram shows five named process states.',
      visual: { src: LESSON2_VISUALS.processStates, side: 'description', alt: 'Process state diagram', caption: 'Slide 5 visual reconstruction' },
      concepts: ['l2_process']
    },
    {
      id: 'l2_process_transitions', order: 512, title: 'Process State Transitions', source: 'Slide 5 visual', identification: false,
      prompt: 'Enumerate the state transitions shown by arrows in the Slide 5 process diagram.',
      answers: [
        ['Start → Ready', 'Start to Ready'],
        ['Ready → Running', 'Ready to Running'],
        ['Running → Ready', 'Running to Ready'],
        ['Running → Wait', 'Running to Wait'],
        ['Wait → Ready', 'Wait to Ready'],
        ['Running → Terminated', 'Running to Terminated']
      ],
      distractors: ['Start → Running', 'Wait → Terminated'],
      cardDefinition: 'The arrows in the process-state diagram show how a process moves between states.',
      visual: { src: LESSON2_VISUALS.processStates, side: 'description', alt: 'Process state transition diagram', caption: 'Slide 5 visual reconstruction' },
      concepts: ['l2_process']
    },
    {
      id: 'l2_process_resp', order: 601, title: 'Process Management key responsibilities', source: 'Slide 6',
      prompt: 'Enumerate the key responsibilities of Process Management listed in the PPT.',
      answers: [
        'Process creation',
        'Process scheduling',
        'Process synchronization',
        'Process termination',
        'Process synchronization and communication',
        'Process states and control'
      ],
      distractors: ['Memory allocation', 'Device allocation'],
      concepts: ['l2_process']
    },

    {
      id: 'l2_memory_visual', order: 711, title: 'Memory Management Visual Sequence', source: 'Slide 7 visual', identification: false,
      prompt: 'Enumerate the three labels shown from left to right in the Slide 7 Memory Management visual.',
      answers: ['Allocation', 'Memory Protection', 'Virtual Memory'],
      distractors: ['Memory deallocation', 'Address mapping'],
      cardDefinition: 'The Slide 7 visual presents three Memory Management labels in sequence.',
      visual: { src: LESSON2_VISUALS.memory, side: 'description', alt: 'Allocation to Memory Protection to Virtual Memory', caption: 'Slide 7 visual reconstruction' },
      concepts: ['l2_memory']
    },
    {
      id: 'l2_memory_resp', order: 801, title: 'Memory Management key responsibilities', source: 'Slide 8',
      prompt: 'Enumerate the key responsibilities of Memory Management listed in the PPT.',
      answers: [
        'Memory allocation',
        'Memory deallocation',
        'Address mapping',
        'Virtual memory management',
        'Memory protection',
        'Paging and swapping'
      ],
      distractors: ['File organization', 'Resource tracking'],
      concepts: ['l2_memory']
    },

    {
      id: 'l2_file_root', order: 911, title: 'Root Directory Branches', source: 'Slide 9 visual', identification: false,
      prompt: 'Enumerate the three directories directly below Root Directory in the Slide 9 hierarchy.',
      answers: ['Directory 1', 'Directory 2', 'Directory 3'],
      distractors: ['Sub Directory', 'FILE 4'],
      cardDefinition: 'The Root Directory branches into three directories in the slide visual.',
      visual: { src: LESSON2_VISUALS.fileHierarchy, side: 'description', alt: 'File hierarchy diagram', caption: 'Slide 9 visual reconstruction' },
      concepts: ['l2_files']
    },
    {
      id: 'l2_file_directory2', order: 912, title: 'Directory 2 Contents in the Visual', source: 'Slide 9 visual', identification: false,
      prompt: 'Enumerate the three items shown directly below Directory 2 in the Slide 9 hierarchy.',
      answers: ['FILE 1', 'Sub Directory', 'FILE 2'],
      distractors: ['FILE 3', 'Directory 1'],
      cardDefinition: 'Directory 2 connects to three items in the Slide 9 hierarchy.',
      visual: { src: LESSON2_VISUALS.fileHierarchy, side: 'description', alt: 'File hierarchy diagram', caption: 'Slide 9 visual reconstruction' },
      concepts: ['l2_files']
    },
    {
      id: 'l2_file_subdir', order: 913, title: 'Sub Directory Contents in the Visual', source: 'Slide 9 visual', identification: false,
      prompt: 'Enumerate the two files shown directly below Sub Directory in the Slide 9 hierarchy.',
      answers: ['FILE 3', 'FILE 4'],
      distractors: ['FILE 1', 'FILE 2'],
      cardDefinition: 'The Sub Directory connects to two files in the Slide 9 hierarchy.',
      visual: { src: LESSON2_VISUALS.fileHierarchy, side: 'description', alt: 'File hierarchy diagram', caption: 'Slide 9 visual reconstruction' },
      concepts: ['l2_files']
    },
    {
      id: 'l2_file_resp', order: 1001, title: 'File System Management key responsibilities', source: 'Slide 10',
      prompt: 'Enumerate the key responsibilities of File System Management listed in the PPT.',
      answers: [
        'File organization',
        'File creation and deletion',
        'Directory management',
        'File access permissions',
        'Metadata management',
        'File system integrity and recovery'
      ],
      distractors: ['Network configuration', 'CPU monitoring'],
      concepts: ['l2_files']
    },

    {
      id: 'l2_device_resp', order: 1201, title: 'Device Management key responsibilities', source: 'Slide 12',
      prompt: 'Enumerate the key responsibilities of Device Management listed in the PPT.',
      answers: ['Device driver management', 'Device allocation', 'Device Configuration', 'Input/output management', 'Device synchronization'],
      distractors: ['Data encryption', 'Capacity planning'],
      concepts: ['l2_device']
    },

    {
      id: 'l2_ui_resp', order: 1402, title: 'User Interface Management key responsibilities', source: 'Slide 14',
      prompt: 'Enumerate the key responsibilities of User Interface Management listed in the PPT.',
      answers: ['GUI support', 'CLI support', 'Menu-driven interfaces', 'Natural Language Interface', 'Touch-based interaction'],
      distractors: ['Device allocation', 'Network monitoring'],
      concepts: ['l2_ui']
    },

    {
      id: 'l2_security_visual', order: 1510, title: 'Security and Protection Visual Labels', source: 'Slide 15 visual', identification: false,
      prompt: 'Enumerate the four labels shown in the Slide 15 Security and Protection visual.',
      answers: ['User Authentication', 'Access Control', 'Security Against Attacks', 'Resource Protection'],
      distractors: ['Usage reporting', 'Network configuration'],
      cardDefinition: 'The Slide 15 visual shows four security and protection areas.',
      visual: { src: LESSON2_VISUALS.security, side: 'description', alt: 'Security and Protection visual labels', caption: 'Slide 15 visual reconstruction' },
      concepts: ['l2_security']
    },
    {
      id: 'l2_security_resp', order: 1601, title: 'Security and Protection Management key responsibilities', source: 'Slide 16',
      prompt: 'Enumerate the key responsibilities of Security and Protection Management listed in the PPT.',
      answers: ['User authentication', 'Access control', 'Data encryption', 'Malware protection', 'Firewalls and Intrusion Detection Systems'],
      distractors: ['Directory management', 'Usage reporting'],
      concepts: ['l2_security']
    },

    {
      id: 'l2_network_visual', order: 1710, title: 'Network Management Visual Labels', source: 'Slide 17 visual', identification: false,
      prompt: 'Enumerate the unique text labels shown in the Slide 17 Network Management diagram.',
      answers: ['Agent', 'Server Software', 'Video Data Store', 'Administrator panel'],
      distractors: ['Account ID', 'Resource Protection'],
      cardDefinition: 'The Slide 17 diagram shows Agent computers around Server Software and a Video Data Store, with an Administrator panel.',
      visual: { src: LESSON2_VISUALS.network, side: 'description', alt: 'Network Management diagram labels', caption: 'Slide 17 visual reconstruction' },
      concepts: ['l2_network']
    },
    {
      id: 'l2_network_resp', order: 1801, title: 'Network Management key responsibilities', source: 'Slide 18',
      prompt: 'Enumerate the Network Management responsibilities listed on Slide 18.',
      answers: ['Network monitoring', 'Network configuration', 'Network troubleshooting', 'Performance optimization'],
      distractors: ['Data encryption', 'File creation and deletion'],
      concepts: ['l2_network']
    },

    {
      id: 'l2_performance_resp', order: 2001, title: 'Control over System Performance key responsibilities', source: 'Slide 20',
      prompt: 'Enumerate the key responsibilities of Control over System Performance listed in the PPT.',
      answers: ['CPU monitoring', 'Memory usage tracking', 'Performance optimization', 'Resource balancing'],
      distractors: ['Network configuration', 'Billing support'],
      visual: { src: LESSON2_VISUALS.performance, side: 'answer', alt: 'Performance monitoring visual', caption: 'Slides 19 to 20 visual study reconstruction' },
      concepts: ['l2_performance']
    },

    {
      id: 'l2_accounting_resp', order: 2201, title: 'Job Accounting key responsibilities', source: 'Slide 22',
      prompt: 'Enumerate the key responsibilities of Job Accounting listed in the PPT.',
      answers: ['Resource tracking', 'Usage reporting', 'Billing support', 'Capacity planning'],
      distractors: ['Memory protection', 'Device Configuration'],
      visual: { src: LESSON2_VISUALS.accounting, side: 'answer', alt: 'Job Accounting interface visual', caption: 'Slide 21 visual reconstruction' },
      concepts: ['l2_accounting']
    },

    {
      id: 'l2_error_visual', order: 2310, title: 'Error Types Shown in the Visual', source: 'Slide 23 visual', identification: false,
      prompt: 'Enumerate the three error labels shown in the Slide 23 Error Detection and Handling visual.',
      answers: ['System error', 'I/O error', 'Others errors'],
      distractors: ['Memory error', 'Network error'],
      cardDefinition: 'The Slide 23 funnel visual contains three named error groups.',
      visual: { src: LESSON2_VISUALS.errors, side: 'description', alt: 'Error funnel with three error groups', caption: 'Slide 23 visual reconstruction' },
      concepts: ['l2_errors']
    },
    {
      id: 'l2_error_resp', order: 2401, title: 'Error Detection & Handling key responsibilities', source: 'Slide 24',
      prompt: 'Enumerate the key responsibilities of Error Detection & Handling listed in the PPT.',
      answers: ['Detect hardware errors', 'Detect software faults', 'Generate error logs', 'Recover from failures'],
      distractors: ['Process creation', 'User authentication'],
      concepts: ['l2_errors']
    },

    {
      id: 'l2_coord_visual', order: 2510, title: 'Coordination Flow Labels', source: 'Slide 25 visual', identification: false,
      prompt: 'Enumerate the text labels and named software/OS examples visible in the Slide 25 coordination diagram.',
      answers: ['System User', 'Word', 'Gmail', 'Excel', 'Netflix', 'Operating System', 'Windows', 'Linux', 'Mac OS', 'Hardware'],
      distractors: ['Android', 'HarmonyOS'],
      cardDefinition: 'The visual moves from System User through software and the Operating System toward Hardware.',
      visual: { src: LESSON2_VISUALS.coordination, side: 'description', alt: 'Coordination flow from System User to applications to Operating System to Hardware', caption: 'Slide 25 visual reconstruction' },
      concepts: ['l2_coord']
    },
    {
      id: 'l2_coord_resp', order: 2601, title: 'Coordination b/w software and users key responsibilities', source: 'Slide 26',
      prompt: 'Enumerate the key responsibilities of Coordination b/w software and users listed in the PPT.',
      answers: ['Software execution', 'User interaction', 'Resource coordination', 'Application support'],
      distractors: ['Resource tracking', 'Network troubleshooting'],
      concepts: ['l2_coord']
    },

    {
      id: 'l2_os_types', order: 2701, title: 'Types of Operating Systems', source: 'Slides 27 to 33',
      prompt: 'Enumerate the six Types of Operating Systems presented in Lesson 2.',
      answers: ['Batch OS', 'Real-Time OS (RTOS)', 'Distributed OS', 'Network OS', 'Mobile OS', 'Time-Sharing / Multitasking OS'],
      distractors: ['Process Management', 'Memory Management'],
      concepts: ['l2_batch', 'l2_rtos', 'l2_distributed', 'l2_network_os', 'l2_mobile_os', 'l2_timesharing_os']
    },

    {
      id: 'l2_batch_visual', order: 2810, title: 'Batch OS Visual Flow', source: 'Slide 28 visual', identification: false,
      prompt: 'Enumerate the unique labels shown in the Slide 28 Batch OS visual flow.',
      answers: ['User 1', 'User 2', 'User 3', 'Job A', 'Job B', 'Operator', 'Batch 1', 'Batch 2', 'Computer'],
      distractors: ['Agent', 'Account ID'],
      cardDefinition: 'The visual shows user jobs being collected by an Operator, grouped into Batch 1 or Batch 2, and sent to the Computer.',
      visual: { src: LESSON2_VISUALS.batch, side: 'description', alt: 'Batch OS visual flow', caption: 'Slide 28 visual reconstruction' },
      concepts: ['l2_batch']
    },
    {
      id: 'l2_rtos_visual', order: 2910, title: 'RTOS Visual Labels', source: 'Slide 29 visual', identification: false,
      prompt: 'Enumerate the main labeled areas shown in the Slide 29 RTOS visual.',
      answers: ['Task scheduling', 'Task 1', 'Resource management', 'File 1', 'Read/Write', 'Device drivers'],
      distractors: ['Billing support', 'Directory management'],
      cardDefinition: 'The RTOS visual connects task scheduling, resource management, and device drivers around the central device.',
      visual: { src: LESSON2_VISUALS.rtos, side: 'description', alt: 'RTOS visual labels', caption: 'Slide 29 visual reconstruction' },
      concepts: ['l2_rtos']
    },
    {
      id: 'l2_distributed_visual', order: 3010, title: 'Distributed OS Visual Roles', source: 'Slide 30 visual', identification: false,
      prompt: 'Enumerate the unique tier and role labels shown in the Slide 30 Distributed OS diagram.',
      answers: ['Tier 1 Client', 'Tier 2 Database', 'Tier 2 Application Server', 'Tier 3 Database', 'Tier 3 Web Server', 'Tier 4 Database'],
      distractors: ['Administrator panel', 'Account ID List'],
      cardDefinition: 'The visual shows a Tier 1 Client connected to several database and server roles from Tier 2 through Tier 4.',
      visual: { src: LESSON2_VISUALS.distributed, side: 'description', alt: 'Distributed OS tier diagram', caption: 'Slide 30 visual reconstruction' },
      concepts: ['l2_distributed']
    },
    {
      id: 'l2_network_os_visual', order: 3110, title: 'Network OS Visual Labels', source: 'Slide 31 visual', identification: false,
      prompt: 'Enumerate the four labeled areas connected to the Network Operating System in the Slide 31 visual.',
      answers: ['Authentication', 'Security Policies', 'Resource Sharing', 'Monitoring'],
      distractors: ['Capacity planning', 'Touch-based interaction'],
      cardDefinition: 'Four named areas surround the Network Operating System in the slide visual.',
      visual: { src: LESSON2_VISUALS.networkOS, side: 'answer', alt: 'Network Operating System visual labels', caption: 'Slide 31 visual reconstruction' },
      concepts: ['l2_network_os']
    },
    {
      id: 'l2_mobile_visual', order: 3210, title: 'Mobile OS Examples in the Slide 32 Visual', source: 'Slide 32 visual', identification: false,
      prompt: 'Enumerate the three mobile operating systems visibly shown in the Slide 32 image.',
      answers: ['Android', 'HarmonyOS', 'iOS'],
      distractors: ['Windows', 'Linux'],
      cardDefinition: 'The Slide 32 image visibly compares three mobile operating systems.',
      visual: { src: LESSON2_VISUALS.mobile, side: 'description', alt: 'Android, HarmonyOS, and iOS', caption: 'Slide 32 visual reconstruction' },
      concepts: ['l2_mobile_os']
    },
    {
      id: 'l2_timesharing_visual', order: 3310, title: 'Time-Sharing / Multitasking OS Visual States', source: 'Slide 33 visual', identification: false,
      prompt: 'Enumerate the two user-state labels shown in the Slide 33 Time-Sharing / Multitasking OS diagram.',
      answers: [['User 5 = Ready State', 'User 5 Ready State'], ['User 2 = Active State', 'User 2 Active State']],
      distractors: ['User 1 = Ready State', 'User 6 = Active State'],
      cardDefinition: 'The visual places CPU at the center of Users 1 to 6. User 5 is labeled Ready State and User 2 is labeled Active State.',
      visual: { src: LESSON2_VISUALS.timesharing, side: 'description', alt: 'CPU with six users, User 5 Ready State and User 2 Active State', caption: 'Slide 33 visual reconstruction' },
      concepts: ['l2_timesharing_os']
    }
  ]
});
