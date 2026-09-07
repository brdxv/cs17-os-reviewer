buildLesson({
  id: 'l1',
  number: 1,
  title: 'Intro to Operating Systems',
  subtitle: 'Operating-system basics, computer-system structure, interrupts, I/O structure, and computer startup',
  sourceLabel: 'CS 17 Lesson 1',
  sourceNotes: [
    'Lesson 1 was re-audited slide-by-slide against CS-17-LESSON-1(2).pdf. Slide text, emphasized terms, and visual labels are treated as the source authority.',
    'Visual information was checked again. The abstract component diagram on Slide 7, computer-system organization diagram on Slide 12, interrupt timeline on Slide 17, and interrupt-driven I/O cycle on Slide 23 now have offline visual reconstructions in the reviewer.',
    'The Slide 17 graph also visibly labels the repeated event sequence I/O request, transfer done, interrupt signaled, and interrupt handled. Slides 18-19 provide the detailed descriptions for those events.',
    'Slide 22 contains an embedded/video screenshot under How CPU Handles Interrupts but no additional readable lesson statements in the PDF, so the reviewer does not invent content from that video.'
  ],
  concepts: [
    {
      id: 'l1_os', order: 401, term: 'Operating System', aliases: ['OS'], source: 'Slide 4',
      definition: 'A program that acts as an intermediary between a user of a computer and the computer hardware.',
      identPrompt: 'What program acts as an intermediary between a user of a computer and the computer hardware?'
    },
    {
      id: 'l1_kernel', order: 501, term: 'Kernel', source: 'Slide 5',
      definition: 'The one program running at all times on the computer is the kernel, part of the operating system.',
      identPrompt: 'What is the one program running at all times on the computer and is part of the operating system?'
    },
    {
      id: 'l1_system_program', order: 502, term: 'System Program', source: 'Slide 5',
      definition: 'A system program ships with the operating system, but is not part of the kernel.',
      identPrompt: 'What type of program ships with the operating system but is not part of the kernel?'
    },
    {
      id: 'l1_middleware', order: 503, term: 'Middleware', source: 'Slide 5',
      definition: 'Middleware is a set of software frameworks that provide additional services to application developers such as databases, multimedia, graphics.',
      identPrompt: 'What set of software frameworks provides additional services to application developers such as databases, multimedia, and graphics?'
    },
    {
      id: 'l1_hardware', order: 601, term: 'Hardware', source: 'Slide 6',
      definition: 'Hardware provides basic computing resources.',
      identPrompt: 'Which computer-system component provides basic computing resources?'
    },
    {
      id: 'l1_os_structure_role', order: 601.5, term: 'Operating System', aliases: ['OS'], source: 'Slide 6',
      definition: 'Controls And Coordinates Use Of Hardware Among Various Applications And Users.',
      visual: { src: LESSON1_VISUALS.abstractView, side: 'answer', alt: 'Abstract component view showing the operating system between application programs and computer hardware', caption: 'Slide 7 visual reinforcement' },
      identPrompt: 'Which computer-system component controls and coordinates use of hardware among various applications and users?'
    },
    {
      id: 'l1_app_programs', order: 602, term: 'Application Programs', aliases: ['Application Program'], source: 'Slide 6',
      definition: 'Application Programs define the ways in which the system resources are used to solve the computing problems of the users.',
      identPrompt: 'Which computer-system component defines the ways in which system resources are used to solve the computing problems of users?'
    },
    {
      id: 'l1_users', order: 603, term: 'Users', source: 'Slide 6',
      definition: 'Users include people, machines, and other computers.',
      identPrompt: 'Which computer-system component includes people, machines, and other computers?'
    },
    {
      id: 'l1_ease_of_use', order: 801, term: 'Ease of Use', source: 'Slide 8 (bold text)',
      definition: 'Users want convenience, ease of use and good performance.',
      identPrompt: 'What user priority appears between convenience and good performance on Slide 8?'
    },
    {
      id: 'l1_good_performance', order: 802, term: 'Good Performance', source: 'Slide 8 (bold text)',
      definition: 'Users want convenience, ease of use and good performance.',
      identPrompt: 'What performance-related user priority is listed with convenience and ease of use on Slide 8?'
    },
    {
      id: 'l1_resource_utilization', order: 803, term: 'Resource Utilization', source: 'Slide 8 (bold text)',
      definition: 'Users want convenience, ease of use and good performance and do not care about resource utilization.',
      identPrompt: 'What do users not care about according to the PPT statement about convenience, ease of use, and good performance?'
    },
    {
      id: 'l1_shared_computer_terms', order: 804, term: 'Mainframe or Minicomputer', aliases: ['Mainframe', 'Minicomputer'], source: 'Slide 8 (bold text)',
      definition: 'But shared computer such as mainframe or minicomputer must keep all users happy.',
      identPrompt: 'Which shared computer examples are stated to have to keep all users happy?'
    },
    {
      id: 'l1_resource_control', order: 806, term: 'Resource Allocator and Control Program', source: 'Slide 8 (bold text)',
      definition: 'Operating system is a resource allocator and control program making efficient use of HW and managing execution of user programs.',
      identPrompt: 'What two roles describe the operating system when it makes efficient use of HW and manages execution of user programs?'
    },
    {
      id: 'l1_mobile_devices', order: 901, term: 'Mobile Devices', source: 'Slide 9',
      definition: 'Mobile devices like smartphones and tables are resource poor, optimized for usability and battery life.',
      identPrompt: 'Which devices are described as resource poor and optimized for usability and battery life?'
    },
    {
      id: 'l1_embedded', order: 904, term: 'Embedded Computers', source: 'Slide 9',
      definition: 'Some computers have little or no user interface, such as embedded computers in devices and automobiles.',
      identPrompt: 'What computers are described as having little or no user interface, such as those in devices and automobiles?'
    },
    {
      id: 'l1_common_bus', order: 1201, term: 'Common Bus', aliases: ['Bus'], source: 'Slide 12',
      definition: 'One or more CPUs and device controllers connect through common bus providing access to shared memory.',
      identPrompt: 'Through what do one or more CPUs and device controllers connect to provide access to shared memory?'
    },
    {
      id: 'l1_shared_memory', order: 1202, term: 'Shared Memory', source: 'Slide 12',
      definition: 'One or more CPUs and device controllers connect through common bus providing access to shared memory.',
      identPrompt: 'What memory is accessed by one or more CPUs and device controllers through the common bus?'
    },
    {
      id: 'l1_system_bus', order: 1202.5, term: 'System Bus', source: 'Slide 12 diagram (visual scan)',
      definition: 'The diagram labels the connection shared by the CPU, disk controller, USB controller, graphics adapter, and memory as the system bus.',
      visual: { src: LESSON1_VISUALS.computerOrganization, side: 'answer', alt: 'Computer system organization showing CPU and device controllers connected through the system bus to memory', caption: 'Slide 12 visual reconstruction' },
      identPrompt: 'What is the shared connection labeled beneath the CPU and device controllers in the Slide 12 diagram?'
    },
    {
      id: 'l1_disk_controller', order: 1203, term: 'Disk Controller', source: 'Slide 12 diagram (visual scan)',
      definition: 'The computer-system organization diagram shows disks connected through a disk controller to the system bus.',
      visual: { src: LESSON1_VISUALS.computerOrganization, side: 'answer', alt: 'Computer system organization diagram with disks connected to the disk controller', caption: 'Slide 12 visual reconstruction' },
      identPrompt: 'Which controller in the Slide 12 diagram connects the disks to the system bus?'
    },
    {
      id: 'l1_usb_controller', order: 1204, term: 'USB Controller', source: 'Slide 12 diagram (visual scan)',
      definition: 'The computer-system organization diagram shows the mouse, keyboard, and printer connected through a USB controller to the system bus.',
      visual: { src: LESSON1_VISUALS.computerOrganization, side: 'answer', alt: 'Computer system organization diagram with mouse, keyboard, and printer connected to the USB controller', caption: 'Slide 12 visual reconstruction' },
      identPrompt: 'Which controller in the Slide 12 diagram connects the mouse, keyboard, and printer to the system bus?'
    },
    {
      id: 'l1_graphics_adapter', order: 1205, term: 'Graphics Adapter', source: 'Slide 12 diagram (visual scan)',
      definition: 'The computer-system organization diagram shows the monitor connected through a graphics adapter to the system bus.',
      visual: { src: LESSON1_VISUALS.computerOrganization, side: 'answer', alt: 'Computer system organization diagram with the monitor connected to the graphics adapter', caption: 'Slide 12 visual reconstruction' },
      identPrompt: 'Which component in the Slide 12 diagram connects the monitor to the system bus?'
    },
    {
      id: 'l1_device_controller', order: 1301, term: 'Device Controller', source: 'Slide 13',
      definition: 'Each device controller is in charge of a particular device type.',
      identPrompt: 'What component is in charge of a particular device type?'
    },
    {
      id: 'l1_local_buffer', order: 1302, term: 'Local Buffer', source: 'Slide 13',
      definition: 'Each device controller has a local buffer.',
      identPrompt: 'What does each device controller have?'
    },
    {
      id: 'l1_device_driver', order: 1303, term: 'Device Driver', source: 'Slide 13',
      definition: 'Each device controller type has an operating system device driver to manage it.',
      identPrompt: 'What operating-system component manages each device controller type?'
    },
    {
      id: 'l1_interrupt', order: 1401, term: 'Interrupt', source: 'Slide 14',
      definition: 'An interrupt is a signal sent to the CPU that temporarily stops the execution of the current program so the operating system can respond to an event that requires immediate attention. After handling the event, the CPU resumes executing the program from where it was interrupted.',
      identPrompt: 'What signal temporarily stops the current program so the operating system can respond to an event requiring immediate attention?'
    },
    {
      id: 'l1_isr', order: 1501, term: 'Interrupt Service Routine', aliases: ['ISR'], source: 'Slide 15',
      definition: 'Interrupt transfers control to the interrupt service routine generally, through the interrupt vector.',
      identPrompt: 'To what routine does an interrupt transfer control?'
    },
    {
      id: 'l1_interrupt_vector', order: 1502, term: 'Interrupt Vector', source: 'Slide 15',
      definition: 'The interrupt vector contains the addresses of all the service routines.',
      identPrompt: 'What contains the addresses of all the service routines?'
    },
    {
      id: 'l1_trap', order: 1503, term: 'Trap or Exception', aliases: ['Trap', 'Exception'], source: 'Slide 15',
      definition: 'A trap or exception is a software-generated interrupt caused either by an error or a user request.',
      identPrompt: 'What software-generated interrupt is caused either by an error or a user request?'
    },
    {
      id: 'l1_interrupt_driven', order: 1504, term: 'Interrupt Driven', source: 'Slide 15',
      definition: 'An operating system is interrupt driven.',
      identPrompt: 'How is an operating system described in the final statement under Common Functions of Interrupts?'
    },
    {
      id: 'l1_io_request', order: 1801, term: 'I/O Request', source: 'Slide 18',
      definition: 'I/O request: the program requests an I/O operation such as reading a file or receiving keyboard input.',
      points: ['The I/O device starts transferring data.', 'The CPU does not wait; it continues running the user program.'],
      identPrompt: 'What step occurs when the program requests an I/O operation such as reading a file or receiving keyboard input?'
    },
    {
      id: 'l1_transfer_progress', order: 1802, term: 'Transfer in Progress', source: 'Slide 18',
      definition: 'Transfer in progress: while the device is busy transferring data, the CPU is still executing other instructions.',
      points: ['This allows both the CPU and the I/O device to work at the same time, improving efficiency.'],
      identPrompt: 'What step occurs while the device is busy transferring data and the CPU is still executing other instructions?'
    },
    {
      id: 'l1_transfer_done', order: 1803, term: 'Transfer Done', source: 'Slide 18',
      definition: 'Transfer done: the I/O device finishes the transfer.',
      identPrompt: 'What step occurs when the I/O device finishes the transfer?'
    },
    {
      id: 'l1_interrupt_signaled', order: 1901, term: 'Interrupt Signaled', source: 'Slide 19',
      definition: 'Interrupt signaled: the device sends an interrupt to notify the CPU that the I/O operation is complete.',
      identPrompt: 'What step occurs when the device sends an interrupt to notify the CPU that the I/O operation is complete?'
    },
    {
      id: 'l1_interrupt_handled', order: 1902, term: 'Interrupt Handled', source: 'Slide 19',
      definition: 'Interrupt handled: the CPU briefly pauses the user program and executes the interrupt service routine (ISR) to process the completed I/O.',
      points: ['Once finished, the CPU immediately resumes the user program.'],
      identPrompt: 'What step occurs when the CPU briefly pauses the user program and executes the ISR to process the completed I/O?'
    },
    {
      id: 'l1_process_repeats', order: 1903, term: 'The Process Repeats', aliases: ['Process Repeats'], source: 'Slide 19',
      definition: 'The process repeats: another I/O request is made, and the same cycle happens again.',
      identPrompt: 'What final step occurs when another I/O request is made and the same cycle happens again?'
    },
    {
      id: 'l1_polling', order: 2001, term: 'Polling', source: 'Slide 20',
      definition: 'Polling is where the CPU repeatedly checks if the device is finished.',
      identPrompt: 'What method repeatedly checks whether the device is finished?'
    },
    {
      id: 'l1_registers', order: 2101, term: 'Registers', source: 'Slide 21',
      definition: 'The operating system preserves the state of the CPU by storing the registers and the program counter.',
      identPrompt: 'What CPU information, together with the program counter, is stored to preserve the state of the CPU?'
    },
    {
      id: 'l1_program_counter', order: 2102, term: 'Program Counter', source: 'Slide 21',
      definition: 'The operating system preserves the state of the CPU by storing the registers and the program counter.',
      identPrompt: 'What is stored together with the registers to preserve the state of the CPU?'
    },
    {
      id: 'l1_io_controller', order: 2301, term: 'I/O Controller', source: 'Slide 23 diagram (visual scan)',
      definition: 'In the interrupt-driven I/O cycle, the I/O controller initiates I/O.',
      visual: { src: LESSON1_VISUALS.interruptDrivenIO, side: 'answer', alt: 'Interrupt-driven I/O cycle showing the CPU and I/O controller actions', caption: 'Slide 23 visual reconstruction' },
      identPrompt: 'What controller initiates I/O in the Slide 23 interrupt-driven I/O cycle?'
    },
    {
      id: 'l1_interrupt_handler', order: 2302, term: 'Interrupt Handler', source: 'Slide 23 diagram (visual scan)',
      definition: 'The interrupt handler processes data and returns from interrupt.',
      visual: { src: LESSON1_VISUALS.interruptDrivenIO, side: 'answer', alt: 'Interrupt-driven I/O cycle showing the interrupt handler step', caption: 'Slide 23 visual reconstruction' },
      identPrompt: 'What processes data and returns from interrupt in the Slide 23 diagram?'
    },
    {
      id: 'l1_wait_instruction', order: 2501, term: 'Wait Instruction', source: 'Slide 25',
      definition: 'Wait instruction idles the CPU until the next interrupt.',
      identPrompt: 'What instruction idles the CPU until the next interrupt?'
    },
    {
      id: 'l1_wait_loop', order: 2502, term: 'Wait Loop', source: 'Slide 25',
      definition: 'Wait loop (contention for memory access).',
      identPrompt: 'What term is paired with contention for memory access?'
    },
    {
      id: 'l1_system_call', order: 2503, term: 'System Call', source: 'Slide 25',
      definition: 'System call is a request to the OS to allow user to wait for I/O completion.',
      identPrompt: 'What request to the OS allows a user to wait for I/O completion?'
    },
    {
      id: 'l1_device_status', order: 2504, term: 'Device-Status Table', aliases: ['Device Status Table'], source: 'Slide 25',
      definition: 'Device-status table contains entry for each I/O device indicating its type, address, and state.',
      identPrompt: 'What table contains an entry for each I/O device indicating its type, address, and state?'
    },
    {
      id: 'l1_bootstrap', order: 2601, term: 'Bootstrap Program', source: 'Slide 26',
      definition: 'Bootstrap program is loaded at power-up or reboot.',
      identPrompt: 'What program is loaded at power-up or reboot?'
    },
    {
      id: 'l1_rom', order: 2602, term: 'ROM', source: 'Slide 26',
      definition: 'The bootstrap program is typically stored in ROM or EPROM, generally known as firmware.',
      identPrompt: 'What storage type, together with EPROM, typically stores the bootstrap program?'
    },
    {
      id: 'l1_eprom', order: 2603, term: 'EPROM', source: 'Slide 26',
      definition: 'The bootstrap program is typically stored in ROM or EPROM, generally known as firmware.',
      identPrompt: 'What storage type, together with ROM, typically stores the bootstrap program?'
    },
    {
      id: 'l1_firmware', order: 2604, term: 'Firmware', source: 'Slide 26',
      definition: 'The bootstrap program is typically stored in ROM or EPROM, generally known as firmware.',
      identPrompt: 'What is the bootstrap program generally known as when stored in ROM or EPROM?'
    }
  ],
  groups: [
    {
      id: 'l1_objectives', order: 301, title: 'Objectives', cardTerm: 'Lesson 1 Objectives', source: 'Slide 3',
      prompt: 'Enumerate the five Lesson 1 objectives presented in the PPT.',
      answers: [
        'Describe The General Organization Of A Computer System And The Role Of Interrupts',
        'Describe The Components In A Modern, Multiprocessor Computer System',
        'Illustrate The Transition From User Mode To Kernel Mode',
        'Discuss How Operating Systems Are Used In Various Computing Environments',
        'Provide Examples Of Free And Open-source Operating Systems'
      ],
      distractors: ['Use the computer hardware in an efficient manner'],
      concepts: ['l1_os']
    },
    {
      id: 'l1_os_goals', order: 402, title: 'Operating System Goals', cardTerm: 'Operating System Goals', source: 'Slide 4',
      prompt: 'Enumerate the three Operating System Goals listed in the PPT.',
      answers: [
        'Execute user programs and make solving user problems easier',
        'Make the computer system convenient to use',
        'Use the computer hardware in an efficient manner'
      ],
      distractors: ['Run primarily without user intervention', 'Provide basic computing resources'],
      concepts: ['l1_os']
    },
    {
      id: 'l1_system_structure', order: 604, title: 'Computer System Can Be Divided Into Four Components', cardTerm: '4 Components of Computer System Structure', source: 'Slide 6',
      prompt: 'Enumerate the four components into which a computer system can be divided.',
      answers: ['Hardware', 'Operating System', 'Application Programs', 'Users'],
      distractors: ['Middleware', 'Interrupt Vector'],
      visual: { src: LESSON1_VISUALS.abstractView, side: 'answer', alt: 'Four-layer abstract view with user, application programs, operating system, and computer hardware', caption: 'Slide 7 visual reinforcement of the four computer-system components' },
      concepts: ['l1_hardware', 'l1_os', 'l1_app_programs', 'l1_users']
    },
    {
      id: 'l1_hardware_resources', order: 605, title: 'Hardware Basic Computing Resources', cardTerm: 'Hardware Basic Computing Resources', source: 'Slide 6',
      prompt: 'Enumerate the basic computing resources listed under Hardware.',
      answers: ['CPU', 'Memory', 'I/O Devices'],
      distractors: ['Web Browsers', 'Database Systems'],
      concepts: ['l1_hardware']
    },
    {
      id: 'l1_application_examples', order: 606, title: 'Application Program Examples', cardTerm: 'Application Program Examples', source: 'Slide 6',
      prompt: 'Enumerate the Application Program examples listed in the PPT.',
      answers: ['Word Processors', 'Compilers', 'Web Browsers', 'Database Systems', 'Video Games'],
      distractors: ['CPU', 'I/O Devices'],
      concepts: ['l1_app_programs']
    },
    {
      id: 'l1_user_examples', order: 607, title: 'Users', cardTerm: 'User Examples', source: 'Slide 6',
      prompt: 'Enumerate the three examples listed under Users.',
      answers: ['People', 'Machines', 'Other Computers'],
      distractors: ['Compilers', 'Memory'],
      concepts: ['l1_users']
    },
    {
      id: 'l1_abstract_view', order: 701, title: 'Abstract View Of Components Of Computer', cardTerm: 'Abstract View Of Components Of Computer', source: 'Slide 7 diagram (visual scan)',
      prompt: 'Enumerate the four layers shown in the abstract view of computer components from top to bottom.',
      answers: [
        'User',
        'Application programs (compilers, web browsers, development kits, etc.)',
        'Operating system',
        'Computer hardware (CPU, memory, I/O devices, etc.)'
      ],
      distractors: ['Interrupt vector', 'Device-status table'],
      cardDefinition: 'Use the diagram to identify this PPT topic, then recall the four layers from top to bottom.',
      cardPoints: [],
      visual: { src: LESSON1_VISUALS.abstractView, side: 'description', alt: 'Abstract view showing user above application programs, operating system, and computer hardware', caption: 'Slide 7 visual reconstruction' },
      concepts: ['l1_users', 'l1_app_programs', 'l1_os', 'l1_hardware']
    },
    {
      id: 'l1_user_priorities', order: 801, title: 'What Users Want', cardTerm: 'What Users Want', source: 'Slide 8',
      prompt: 'Enumerate what users want according to Slide 8.',
      answers: ['Convenience', 'Ease of use', 'Good performance'],
      distractors: ['Resource utilization', 'Program control'],
      concepts: ['l1_ease_of_use', 'l1_good_performance', 'l1_resource_utilization']
    },
    {
      id: 'l1_shared_computers', order: 804, title: 'Shared Computer Examples', cardTerm: 'Shared Computer Examples', source: 'Slide 8',
      prompt: 'Enumerate the shared computer examples listed in Slide 8.',
      answers: ['Mainframe', 'Minicomputer'],
      distractors: ['Workstations', 'Servers'],
      concepts: ['l1_shared_computer_terms']
    },
    {
      id: 'l1_os_roles', order: 806, title: 'Operating System Roles', cardTerm: 'Operating System Roles', source: 'Slide 8',
      prompt: 'Enumerate the two roles used to describe the operating system on Slide 8.',
      answers: ['Resource allocator', 'Control program'],
      distractors: ['System program', 'Middleware'],
      concepts: ['l1_os', 'l1_resource_control']
    },
    {
      id: 'l1_dedicated_shared', order: 808, title: 'Dedicated Systems and Shared Resources', cardTerm: 'Dedicated Systems and Shared Resources', source: 'Slide 8',
      prompt: 'Which two bold system terms are used in the statement about dedicated systems and shared resources?',
      answers: ['Workstations', 'Servers'],
      distractors: ['Mainframe', 'Minicomputer'],
      concepts: ['l1_os']
    },
    {
      id: 'l1_mobile_interfaces', order: 902, title: 'Mobile User Interfaces', cardTerm: 'Mobile User Interfaces', source: 'Slide 9',
      prompt: 'Enumerate the mobile user interfaces listed in the PPT.',
      answers: ['Touch screens', 'Voice recognition'],
      distractors: ['Wait loop', 'Device-status table'],
      concepts: ['l1_mobile_devices']
    },
    {
      id: 'l1_embedded_characteristics', order: 905, title: 'Embedded Computer Characteristics', cardTerm: 'Embedded Computer Characteristics', source: 'Slide 9',
      prompt: 'Enumerate the characteristics stated for embedded computers.',
      answers: ['Little or no user interface', 'Run primarily without user intervention'],
      distractors: ['Optimized for touch screens', 'Must keep all users happy'],
      concepts: ['l1_embedded']
    },
    {
      id: 'l1_os_roles_examples', order: 1001, title: 'Term OS Covers Many Roles', cardTerm: 'Systems In Which OS Is Present', source: 'Slide 10',
      prompt: 'Enumerate the examples listed to show that the term OS covers many roles.',
      answers: ['Toasters', 'Ships', 'Spacecraft', 'Game machines', 'TVs', 'Industrial control systems'],
      distractors: ['Interrupt vector', 'Program counter'],
      concepts: ['l1_os']
    },
    {
      id: 'l1_os_origin', order: 1002, title: 'Why Operating Systems Emerged', cardTerm: 'Why Operating Systems Emerged', source: 'Slide 10',
      prompt: 'Enumerate the key ideas in the PPT statement about how operating systems were born.',
      answers: [
        'Fixed use computers for military became more general purpose',
        'Needed resource management and program control'
      ],
      distractors: ['Mobile devices became resource poor'],
      concepts: ['l1_os']
    },
    {
      id: 'l1_system_organization', order: 1200, title: 'Computer-System Operation', cardTerm: 'Computer System Organization', source: 'Slide 12',
      prompt: 'Enumerate the two Computer-System Operation points listed on Slide 12.',
      answers: [
        'One or more CPUs, device controllers connect through common bus providing access to shared memory',
        'Concurrent execution of CPUs and devices competing for memory cycles'
      ],
      distractors: ['At most one I/O request is outstanding at a time'],
      visual: { src: LESSON1_VISUALS.computerOrganization, side: 'answer', alt: 'Computer system organization showing CPU, disk controller, USB controller, graphics adapter, system bus, and memory', caption: 'Slide 12 visual reconstruction' },
      concepts: ['l1_common_bus', 'l1_shared_memory', 'l1_system_bus', 'l1_device_controller']
    },
    {
      id: 'l1_controller_diagram', order: 1206, title: 'Device Controller Diagram', cardTerm: 'Device Controller Diagram Mappings', source: 'Slide 12 diagram (visual scan)',
      prompt: 'Enumerate the device-to-controller mappings shown in the Slide 12 diagram.',
      answers: [
        'Disks - Disk controller',
        'Mouse - USB controller',
        'Keyboard - USB controller',
        'Printer - USB controller',
        'Monitor - Graphics adapter'
      ],
      distractors: ['Monitor - Disk controller', 'Disks - Graphics adapter'],
      cardDefinition: 'Use the diagram to identify the device-to-controller mappings shown on Slide 12.',
      cardPoints: [],
      visual: { src: LESSON1_VISUALS.computerOrganization, side: 'description', alt: 'Device-controller mappings for disks, mouse, keyboard, printer, and monitor', caption: 'Slide 12 visual reconstruction' },
      concepts: ['l1_system_bus', 'l1_disk_controller', 'l1_usb_controller', 'l1_graphics_adapter']
    },
    {
      id: 'l1_system_operation', order: 1304, title: 'Computer-System Operation', cardTerm: 'Computer-System Operation', source: 'Slide 13',
      prompt: 'Enumerate the Computer-System Operation statements listed on Slide 13.',
      answers: [
        'I/O devices and the CPU can execute concurrently',
        'Each device controller is in charge of a particular device type',
        'Each device controller has a local buffer',
        'Each device controller type has an operating system device driver to manage it',
        'CPU moves data from/to main memory to/from local buffers',
        'I/O is from the device to local buffer of controller',
        'Device controller informs CPU that it has finished its operation by causing an interrupt'
      ],
      distractors: ['The CPU repeatedly checks if the device is finished'],
      concepts: ['l1_device_controller', 'l1_local_buffer', 'l1_device_driver', 'l1_interrupt']
    },
    {
      id: 'l1_interrupt_functions', order: 1505, title: 'Common Functions Of Interrupts', cardTerm: 'Common Functions Of Interrupts', source: 'Slide 15',
      prompt: 'Enumerate the Common Functions of Interrupts statements listed in the PPT.',
      answers: [
        'Interrupt transfers control to the interrupt service routine generally, through the interrupt vector, which contains the addresses of all the service routines',
        'Interrupt architecture must save the address of the interrupted instruction',
        'A trap or exception is a software-generated interrupt caused either by an error or a user request',
        'An operating system is interrupt driven'
      ],
      distractors: ['Wait instruction idles the CPU until the next interrupt'],
      concepts: ['l1_isr', 'l1_interrupt_vector', 'l1_trap', 'l1_interrupt_driven']
    },
    {
      id: 'l1_interrupt_examples', order: 1601, title: 'Common Examples Of Interrupts', cardTerm: 'Common Examples Of Interrupts', source: 'Slide 16',
      prompt: 'Enumerate the five Common Examples Of Interrupts listed in the PPT.',
      answers: [
        'Keyboard key is pressed',
        'Mouse is moved or clicked',
        'Disk read/write operation is completed',
        'Network packet arrives',
        "A timer signals that a process's time slice has expired"
      ],
      distractors: ['A user launches a web browser'],
      concepts: ['l1_interrupt']
    },
    {
      id: 'l1_interrupt_timeline', order: 1701, title: 'Interrupt Timeline', cardTerm: 'Interrupt Timeline', source: 'Slide 17 graph (visual scan)',
      prompt: 'Enumerate the four High/Low meanings shown in the Interrupt Timeline.',
      answers: [
        'Top line (CPU): High = CPU is executing the user program',
        'Top line (CPU): Low = CPU is processing an I/O interrupt',
        'Bottom line (I/O device): High = I/O device is idle',
        'Bottom line (I/O device): Low = I/O device is transferring data'
      ],
      distractors: ['Top line (CPU): Low = CPU is idle'],
      cardDefinition: 'Use the two timelines and their event markers to identify this graph. The repeated markers are I/O request, transfer done, interrupt signaled, and interrupt handled.',
      cardPoints: [],
      visual: { src: LESSON1_VISUALS.interruptTimeline, side: 'description', alt: 'Interrupt timeline showing CPU user-program and interrupt-processing states against I/O device idle and transferring states', caption: 'Slide 17 visual reconstruction' },
      concepts: ['l1_interrupt']
    },
    {
      id: 'l1_io_timeline_steps', order: 1800, title: 'I/O And Interrupt Sequence', cardTerm: 'I/O And Interrupt Sequence', source: 'Slides 18-19',
      prompt: 'Enumerate the six labeled steps in the I/O and interrupt sequence.',
      answers: ['I/O request', 'Transfer in progress', 'Transfer done', 'Interrupt signaled', 'Interrupt handled', 'The process repeats'],
      distractors: ['Process terminated'],
      concepts: ['l1_io_request', 'l1_transfer_progress', 'l1_transfer_done', 'l1_interrupt_signaled', 'l1_interrupt_handled', 'l1_process_repeats']
    },
    {
      id: 'l1_interrupt_key_points', order: 2002, title: 'Key Points', cardTerm: 'Interrupt Key Points', source: 'Slide 20',
      prompt: 'Enumerate the key points listed about CPU, I/O, interrupts, and polling.',
      answers: [
        'The CPU and I/O device work in parallel',
        'The CPU does not waste time waiting for the I/O operation to finish',
        'The interrupt tells the CPU only when the device needs attention',
        'Polling is where the CPU repeatedly checks if the device is finished'
      ],
      distractors: ['The CPU must wait for every I/O operation to finish'],
      concepts: ['l1_interrupt', 'l1_polling']
    },
    {
      id: 'l1_interrupt_handling_group', order: 2103, title: 'Interrupt Handling', cardTerm: 'Interrupt Handling', source: 'Slide 21',
      prompt: 'Enumerate the Interrupt Handling statements listed in the PPT.',
      answers: [
        'The operating system preserves the state of the CPU by storing the registers and the program counter',
        'Determines which type of interrupt has occurred',
        'Separate segments of code determine what action should be taken for each type of interrupt'
      ],
      distractors: ['The CPU repeatedly checks if the device is finished'],
      concepts: ['l1_registers', 'l1_program_counter', 'l1_interrupt']
    },
    {
      id: 'l1_interrupt_driven_io', order: 2303, title: 'Interrupt-Drive I/O Cycle', cardTerm: 'Interrupt-Drive I/O Cycle', aliases: ['Interrupt-Driven I/O Cycle'], source: 'Slide 23 diagram (visual scan)',
      prompt: 'Enumerate the labeled actions in the Interrupt-Drive I/O Cycle diagram.',
      answers: [
        'Device driver initiates I/O',
        'I/O controller initiates I/O',
        'CPU executing checks for interrupts between instructions',
        'Input ready, output complete, or error generates interrupt signal',
        'CPU receiving interrupt, transfers control to interrupt handler',
        'Interrupt handler processes data, returns from interrupt',
        'CPU resumes processing of interrupted task'
      ],
      distractors: ['CPU stops permanently after the interrupt'],
      cardDefinition: 'Use the CPU and I/O-controller flow to identify this cycle and recall the numbered actions.',
      cardPoints: [],
      visual: { src: LESSON1_VISUALS.interruptDrivenIO, side: 'description', alt: 'Interrupt-driven I/O cycle with numbered CPU and I/O controller actions', caption: 'Slide 23 visual reconstruction' },
      concepts: ['l1_device_driver', 'l1_io_controller', 'l1_interrupt_handler', 'l1_interrupt']
    },
    {
      id: 'l1_io_methods', order: 2401, title: 'Two Methods For Handling I/O', cardTerm: 'Two Methods For Handling I/O', source: 'Slide 24',
      prompt: 'Enumerate the two methods for handling I/O listed in the PPT.',
      answers: [
        'After I/O starts, control returns to user program only upon I/O completion',
        'After I/O starts, control returns to user program without waiting for I/O completion'
      ],
      distractors: ['After I/O starts, the CPU always shuts down'],
      concepts: ['l1_wait_instruction', 'l1_system_call']
    },
    {
      id: 'l1_io_waiting', order: 2505, title: 'After I/O Starts, Control Returns Only Upon I/O Completion', cardTerm: 'After I/O Starts, Control Returns To User Program Only Upon I/O Completion', source: 'Slide 25',
      prompt: 'Enumerate the statements listed for the method where control returns to the user program only upon I/O completion.',
      answers: [
        'Wait instruction idles the CPU until the next interrupt',
        'Wait loop (contention for memory access)',
        'At most one I/O request is outstanding at a time, no simultaneous I/O processing'
      ],
      distractors: ['Device-status table contains entry for each I/O device indicating its type, address, and state'],
      concepts: ['l1_wait_instruction', 'l1_wait_loop']
    },
    {
      id: 'l1_io_without_waiting', order: 2506, title: 'After I/O Starts, Control Returns Without Waiting For I/O Completion', cardTerm: 'After I/O Starts, Control Returns To User Program Without Waiting For I/O Completion', source: 'Slide 25',
      prompt: 'Enumerate the statements listed for the method where control returns to the user program without waiting for I/O completion.',
      answers: [
        'System call - request to the OS to allow user to wait for I/O completion',
        'Device-status table contains entry for each I/O device indicating its type, address, and state',
        'OS indexes into I/O device table to determine device status and to modify table entry to include interrupt'
      ],
      distractors: ['Wait instruction idles the CPU until the next interrupt'],
      concepts: ['l1_system_call', 'l1_device_status', 'l1_interrupt']
    },
    {
      id: 'l1_bootstrap_actions', order: 2605, title: 'Computer Startup', cardTerm: 'Computer Startup', source: 'Slide 26',
      prompt: 'Enumerate the Computer Startup statements listed in the PPT.',
      answers: [
        'Bootstrap program is loaded at power-up or reboot',
        'Typically stored in ROM or EPROM, generally known as firmware',
        'Initializes all aspects of system',
        'Loads operating system kernel and starts execution'
      ],
      distractors: ['The CPU repeatedly checks if the device is finished'],
      concepts: ['l1_bootstrap', 'l1_rom', 'l1_eprom', 'l1_firmware', 'l1_kernel']
    }
  ]
});
