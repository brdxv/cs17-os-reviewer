buildLesson({
  id: 'l3',
  number: 3,
  title: 'Generations of Operating Systems & Components of a Simple PC',
  subtitle: 'OS generations, direct input, batch systems, spooling, multiprogramming, timesharing, fourth-generation OS, PC controllers, storage, disk anatomy, and memory protection',
  sourceLabel: 'CS 17 Lesson 3',
  sourceNotes: [
    'Lesson 3 was re-audited in slide order from Slides 3 to 35 using both the PDF text and the rendered slide visuals. Image-only diagrams and tables were read directly so their labels are represented in the reviewer.',
    'Slide 4 presents Next Generation as “???” followed by two questions. The reviewer preserves those statements as questions and does not treat them as confirmed characteristics of a defined generation.',
    'Slide 17 contains an image-only email-system diagram. The reviewer includes its visible POP, SMTP, mail-client, network, mail-server, local-storage, mail-spool, incoming-email, and outgoing-email labels without adding outside networking details.',
    'Slide 21 is an image-only Swapping vs. Switching comparison table. Its definitions, purposes, speed difference, behavior, and examples are included directly from the table.',
    'Slide 24 is a visual collage with no explanatory labels. The reviewer keeps only the visibly supported categories such as command-line/desktop interfaces, smartphones, and a tablet instead of guessing exact product versions.',
    'Slides 30, 31, and 33 contain study-heavy diagrams for the storage pyramid, disk anatomy, and memory organization. Their visible labels, hierarchy, and address markers are included as visual-derived review content.',
    'Slide 33 visually marks Base at 0x23000 and Limit at 0x27fff. Slides 34 and 35 separately define Base as a starting physical address and Limit as the size or maximum range. The reviewer preserves both source presentations without silently reconciling them.'
  ],
  concepts: [
    {
      id: 'l3_gen1', order: 301, term: 'First Generation: 1945 – 1955', aliases: ['First Generation', '1945-1955'], source: 'Slide 3',
      definition: 'Vacuum Tubes; Plug Boards',
      points: ['Vacuum Tubes', 'Plug Boards'],
      identPrompt: 'Which operating-system generation is dated 1945–1955 and is associated with Vacuum Tubes and Plug Boards?'
    },
    {
      id: 'l3_gen2', order: 302, term: 'Second Generation: 1955 – 1965', aliases: ['Second Generation', '1955-1965'], source: 'Slide 3',
      definition: 'Transistors; Batch Systems',
      points: ['Transistors', 'Batch Systems'],
      identPrompt: 'Which operating-system generation is dated 1955–1965 and is associated with Transistors and Batch Systems?'
    },
    {
      id: 'l3_gen3', order: 303, term: 'Third Generation: 1965 – 1980', aliases: ['Third Generation', '1965-1980'], source: 'Slide 3',
      definition: 'Integrated Circuits; Multiprogramming',
      points: ['Integrated Circuits', 'Multiprogramming'],
      identPrompt: 'Which operating-system generation is dated 1965–1980 and is associated with Integrated Circuits and Multiprogramming?'
    },
    {
      id: 'l3_gen4', order: 401, term: 'Fourth Generation: 1980 – Present', aliases: ['Fourth Generation', '1980-Present'], source: 'Slide 4',
      definition: 'Large Scale Integration; Personal Computers; GUI Interface; Multitasking.',
      points: ['Large Scale Integration', 'Personal Computers', 'GUI Interface', 'Multitasking'],
      identPrompt: 'Which operating-system generation is dated 1980–Present and is associated with Large Scale Integration, Personal Computers, GUI Interface, and Multitasking?'
    },
    {
      id: 'l3_nextgen', order: 402, term: 'Next Generation: ???', aliases: ['Next Generation'], source: 'Slide 4',
      definition: 'Systems Connected By High-speed Networks? Wide Area Resource Management?',
      points: ['Systems Connected By High-speed Networks?', 'Wide Area Resource Management?'],
      identPrompt: 'What generation heading is followed by the questions “Systems Connected By High-speed Networks?” and “Wide Area Resource Management?”'
    },
    {
      id: 'l3_direct_input', order: 501, term: 'Direct Input', source: 'Slide 5',
      definition: 'Run one job at a time.',
      points: ['Run one job at a time', 'Enter it into the computer (might require rewiring!)', 'Run it', 'Record the results', 'Problem: lots of wasted computer time!', 'Computer was idle during first and last steps', 'Computers were very expensive!', 'Goal: make better use of an expensive commodity: computer time'],
      identPrompt: 'What First Generation method ran one job at a time and could require entering the job into the computer by rewiring?'
    },
    {
      id: 'l3_direct_problem', order: 502, term: 'Problem: Lots of Wasted Computer Time!', aliases: ['Lots of Wasted Computer Time', 'Wasted Computer Time'], source: 'Slide 5',
      definition: 'The problem identified for First Generation Direct Input.',
      points: ['Computer was idle during first and last steps', 'Computers were very expensive!'],
      identPrompt: 'What problem did the PPT identify with First Generation Direct Input because the computer was idle during the first and last steps?'
    },
    {
      id: 'l3_direct_goal', order: 503, term: 'Goal: Make Better Use of an Expensive Commodity: Computer Time', aliases: ['Make Better Use of Computer Time', 'Better Use of Computer Time'], source: 'Slide 5',
      definition: 'Goal: make better use of an expensive commodity: computer time.',
      identPrompt: 'What was the stated goal of First Generation Direct Input after noting that computers were very expensive and often idle?'
    },
    {
      id: 'l3_batch_systems', order: 601, term: 'Batch Operating Systems', aliases: ['Batch Systems', 'Batch Operating System'], source: 'Slide 6',
      definition: 'Jobs were collected and executed in batches without user interaction.',
      identPrompt: 'What Second Generation operating-system approach collected and executed jobs in batches without user interaction?'
    },
    {
      id: 'l3_ibm1401', order: 801, term: 'IBM 1401', source: 'Slide 8',
      definition: 'A second-generation transistorized mainframe computer, introduced in 1959.',
      points: ['Second-generation', 'Transistorized mainframe computer', 'Introduced in 1959'],
      identPrompt: 'Which second-generation transistorized mainframe computer was introduced in 1959?'
    },
    {
      id: 'l3_ibm7094', order: 802, term: 'IBM 7094', source: 'Slide 8',
      definition: 'A second-generation mainframe computer, introduced in 1962, designed mainly for scientific and engineering calculations.',
      points: ['Second-generation mainframe computer', 'Introduced in 1962', 'Designed mainly for scientific and engineering calculations'],
      identPrompt: 'Which second-generation mainframe computer was introduced in 1962 and designed mainly for scientific and engineering calculations?'
    },
    {
      id: 'l3_spooling', order: 1101, term: 'SPOOLING', aliases: ['Spooling', 'Simultaneous Peripheral Operations On-line', 'Simultaneous Peripheral Operations Online'], source: 'Slide 11',
      definition: 'SPOOLING stands for Simultaneous Peripheral Operations On-line.',
      points: ['Temporarily stores data or jobs in a buffer', 'The buffer is usually on a disk', 'A slow peripheral device can process them later', 'The CPU continues doing other work'],
      identPrompt: 'What operating-system technique stands for Simultaneous Peripheral Operations On-line?'
    },
    {
      id: 'l3_buffer', order: 1301, term: 'Buffer', source: 'Slide 13',
      definition: 'A buffer is a temporary storage area in memory used to hold data while it is being transferred from one device or program to another.',
      identPrompt: 'What is a temporary storage area in memory used to hold data while it is being transferred from one device or program to another?'
    },
    {
      id: 'l3_spool_disk', order: 1501, term: 'Disk Storage', source: 'Slide 15 table',
      definition: 'Read/write requests can be placed in a queue and processed in an organized order.',
      identPrompt: 'Which device/system in the spooling table uses a queue so read/write requests can be processed in an organized order?'
    },
    {
      id: 'l3_spool_network', order: 1502, term: 'Network Devices', source: 'Slide 15 table',
      definition: 'Data packets may be temporarily queued before being transmitted.',
      identPrompt: 'Which device/system in the spooling table may temporarily queue data packets before transmission?'
    },
    {
      id: 'l3_spool_email', order: 1503, term: 'Email Systems', source: 'Slide 15 table',
      definition: 'Outgoing emails are placed in a queue before being sent to their destinations.',
      identPrompt: 'Which system in the spooling table places outgoing emails in a queue before sending them to their destinations?'
    },
    {
      id: 'l3_spool_plotter', order: 1504, term: 'Plotters', source: 'Slide 15 table',
      definition: 'Multiple drawing/printing jobs can be queued before the plotter processes them.',
      identPrompt: 'Which device in the spooling table can queue multiple drawing or printing jobs before processing them?'
    },
    {
      id: 'l3_spool_fax', order: 1505, term: 'Fax Machines', source: 'Slide 15 table',
      definition: 'Documents can be queued before being transmitted.',
      identPrompt: 'Which device in the spooling table can queue documents before they are transmitted?'
    },
    {
      id: 'l3_spool_tape', order: 1506, term: 'Tape Drives', source: 'Slide 15 table',
      definition: 'Data can be queued before being written to or read from the tape.',
      identPrompt: 'Which device in the spooling table can queue data before it is written to or read from the medium?'
    },
    {
      id: 'l3_spool_av', order: 1507, term: 'Audio/Video Systems', aliases: ['Audio Video Systems'], source: 'Slide 15 table',
      definition: 'Data can be queued temporarily to maintain continuous playback or processing.',
      identPrompt: 'Which systems in the spooling table can temporarily queue data to maintain continuous playback or processing?'
    },
    {
      id: 'l3_multiprogramming', order: 1801, term: 'Multiprogramming', source: 'Slide 18',
      definition: 'Multiple jobs in memory.',
      points: ['Protected from one another', 'Operating system protected from each job as well', 'Resources (time, hardware) split between jobs', 'Still not interactive', 'User submits job', 'Computer runs it', 'User gets results minutes (hours, days) later'],
      visual: {src: LESSON3_VISUALS.multiprogramming, side: 'answer', alt: 'Multiprogramming memory partitions with Operating system, Job 1, Job 2, and Job 3', caption: 'Slide 18 visual reconstruction'},
      identPrompt: 'What Third Generation approach keeps multiple jobs in memory, protects them from one another, and splits resources between jobs?'
    },
    {
      id: 'l3_timesharing', order: 1901, term: 'Timesharing', aliases: ['Time Sharing', 'Time-Sharing'], source: 'Slide 19',
      definition: 'Multiprogramming allowed several jobs to be active at one time.',
      points: ['Initially used for batch systems', 'Cheaper hardware terminals -> interactive use', 'Computer use got much cheaper and easier', 'No more “priesthood”', 'Quick turnaround meant quick fixes for problems'],
      identPrompt: 'What topic describes the move from multiprogramming toward interactive use through cheaper hardware terminals and quick turnaround?'
    },
    {
      id: 'l3_unix_multiuser', order: 2001, term: 'UNIX on Multi-user Systems', aliases: ['UNIX', 'UNIX Multi-user Systems'], source: 'Slide 20',
      definition: 'A classic real-world example of timesharing.',
      points: ['Several users could be connected to the same computer through terminals', 'User A → running a program', 'User B → editing a file', 'User C → compiling a program', 'User D → running calculations', 'The operating system rapidly switches the CPU between their tasks'],
      identPrompt: 'What classic system is given as the real-world example of timesharing with several users connected through terminals?'
    },
    {
      id: 'l3_swapping', order: 2101, term: 'Swapping', source: 'Slide 21 visual table',
      definition: 'Moving a process between main memory (RAM) and secondary storage (disk).',
      points: ['Involves RAM and disk', 'Used to manage memory when RAM is limited', 'A process may be temporarily removed from RAM and placed on disk', 'Generally slower because disk storage is involved', 'Example: Process A is moved from RAM to disk to free memory for Process B'],
      visual: {src: LESSON3_VISUALS.swappingSwitching, side: 'answer', alt: 'Swapping versus Switching comparison', caption: 'Slide 21 image-only comparison table reconstructed for offline review'},
      identPrompt: 'What term means moving a process between main memory (RAM) and secondary storage (disk)?'
    },
    {
      id: 'l3_switching', order: 2102, term: 'Switching', source: 'Slide 21 visual table',
      definition: 'Changing the CPU from executing one process/thread to another.',
      points: ['Primarily involves the CPU and process context', 'Used to allow multiple processes to share the CPU', 'The current process is paused and another process is given CPU time', 'Generally much faster because it mainly involves CPU state/context', 'Example: CPU stops Process A and starts executing Process B'],
      identPrompt: 'What term means changing the CPU from executing one process/thread to another?'
    },
    {
      id: 'l3_fourth_os_definition', order: 2201, term: 'Fourth Generation of Operating Systems', aliases: ['Fourth Generation OS'], source: 'Slide 22',
      definition: 'The Fourth Generation of Operating Systems refers to operating systems that developed with the rise of microprocessors and personal computers, beginning around the 1980s and continuing to the present.',
      points: ['Developed with the rise of microprocessors and personal computers', 'Beginning around the 1980s', 'Continuing to the present'],
      identPrompt: 'What operating-system generation is defined on Slide 22 as developing with the rise of microprocessors and personal computers, beginning around the 1980s and continuing to the present?'
    },
    {
      id: 'l3_pc_characteristic', order: 2301, term: 'Personal Computers (PCs)', aliases: ['Personal Computers', 'PCs'], source: 'Slide 23',
      definition: 'Operating systems became available for individual users rather than only large mainframe computers.',
      identPrompt: 'Which Fourth Generation characteristic made operating systems available for individual users rather than only large mainframe computers?'
    },
    {
      id: 'l3_gui_characteristic', order: 2302, term: 'Graphical User Interface (GUI)', aliases: ['GUI', 'Graphical User Interface'], source: 'Slide 23',
      definition: 'Users could interact using windows, icons, menus, and a mouse.',
      identPrompt: 'Which Fourth Generation characteristic lets users interact using windows, icons, menus, and a mouse?'
    },
    {
      id: 'l3_multitasking_characteristic', order: 2303, term: 'Multitasking', source: 'Slide 23',
      definition: 'Several programs could run apparently at the same time.',
      identPrompt: 'Which Fourth Generation characteristic means several programs could run apparently at the same time?'
    },
    {
      id: 'l3_networking_characteristic', order: 2304, term: 'Networking', source: 'Slide 23',
      definition: 'Computers could communicate and share resources over networks.',
      identPrompt: 'Which Fourth Generation characteristic allowed computers to communicate and share resources over networks?'
    },
    {
      id: 'l3_interaction_characteristic', order: 2305, term: 'Improved User Interaction', source: 'Slide 23',
      definition: 'Operating systems became easier for ordinary users to operate.',
      identPrompt: 'Which Fourth Generation characteristic means operating systems became easier for ordinary users to operate?'
    },
    {
      id: 'l3_mobile_characteristic', order: 2306, term: 'Portable and Mobile Computing', source: 'Slide 23',
      definition: 'Operating systems expanded to laptops, tablets, and smartphones.',
      points: ['Laptops', 'Tablets', 'Smartphones'],
      identPrompt: 'Which Fourth Generation characteristic describes operating systems expanding to laptops, tablets, and smartphones?'
    },
    {
      id: 'l3_hardware_support_characteristic', order: 2307, term: 'Greater Hardware Support', source: 'Slide 23',
      definition: 'OS could manage increasingly powerful processors, memory, storage, and peripherals.',
      points: ['Processors', 'Memory', 'Storage', 'Peripherals'],
      identPrompt: 'Which Fourth Generation characteristic means the OS could manage increasingly powerful processors, memory, storage, and peripherals?'
    },
    {
      id: 'l3_peripheral_controllers', order: 2701, term: 'Peripheral Controllers', source: 'Slide 27',
      definition: "The four components shown in the image are peripheral controllers responsible for managing communication between the computer's CPU/system bus and specific hardware devices.",
      points: ['Video Controller', 'Hard Drive Controller', 'USB Controller', 'Network Controller'],
      identPrompt: "What are the four components called that manage communication between the computer's CPU/system bus and specific hardware devices?"
    },
    {
      id: 'l3_video_controller', order: 2801, term: 'Video Controller', source: 'Slide 28',
      definition: 'Primary Role: Controls the display output.',
      points: ['Translates digital data from the system into visual signals that a monitor, TV, or screen can display', 'Manages screen resolution', 'Manages refresh rates', 'Manages pixel color data'],
      identPrompt: 'Which controller has the primary role of controlling the display output?'
    },
    {
      id: 'l3_hdd_controller', order: 2802, term: 'Hard Drive Controller', source: 'Slide 28',
      definition: 'Primary Role: Controls storage data transfer.',
      points: ["Acts as the bridge between the computer's processor and hard storage devices", 'Interprets read and write commands', 'Manages data formatting', 'Ensures data is saved or retrieved accurately from the storage disk'],
      identPrompt: 'Which controller has the primary role of controlling storage data transfer?'
    },
    {
      id: 'l3_usb_controller', order: 2901, term: 'USB Controller', source: 'Slide 29',
      definition: 'Primary Role: Controls external peripheral connections.',
      points: ['Manages the Universal Serial Bus (USB) ports', 'Handles data traffic', 'Handles power delivery', 'Handles communication protocols', 'Connected-device examples: mice, keyboards, flash drives, external microphones'],
      identPrompt: 'Which controller has the primary role of controlling external peripheral connections?'
    },
    {
      id: 'l3_network_controller', order: 2902, term: 'Network Controller', aliases: ['Network Interface Controller', 'NIC'], source: 'Slide 29',
      definition: 'Primary Role: Controls data communication over networks.',
      points: ['Also known as a Network Interface Controller (NIC)', 'Allows the computer to interact with other devices over a local network (LAN) or the internet', 'Formats data packets into electrical, radio, or optical signals', 'Signals can be sent over Ethernet cables or Wi-Fi'],
      identPrompt: 'Which controller, also known as a Network Interface Controller (NIC), controls data communication over networks?'
    },
    {
      id: 'l3_cpu_registers', order: 3001, term: 'CPU Registers', source: 'Slide 30 visual',
      definition: 'Tiny Capacity; Highly Expensive; Extremely Fast.',
      points: ['Processor level', 'Tiny Capacity', 'Highly Expensive', 'Extremely Fast'],
      visual: {src: LESSON3_VISUALS.storagePyramid, side: 'answer', alt: 'Storage pyramid showing CPU Registers, cache, Main Memory, and Permanent Storage', caption: 'Slide 30 storage-pyramid reconstruction'},
      identPrompt: 'Which storage-pyramid level has tiny capacity, is highly expensive, and is extremely fast?'
    },
    {
      id: 'l3_sram', order: 3002, term: 'Static Random-Access Memory (SRAM)', aliases: ['SRAM', 'Static Random Access Memory'], source: 'Slide 30 visual',
      definition: 'The storage-pyramid diagram associates SRAM with the L1, L2, and L3 cache level.',
      identPrompt: 'Which memory technology is associated with the L1, L2, and L3 cache level in the storage pyramid?'
    },
    {
      id: 'l3_cache', order: 3003, term: 'L1 / L2 / L3 Cache', aliases: ['Cache', 'L1 L2 L3 Cache', 'L1 cache L2 cache L3 cache'], source: 'Slide 30 visual',
      definition: 'Low Capacity; Expensive; Faster.',
      points: ['L1 cache', 'L2 cache', 'L3 cache', 'Static Random-Access Memory (SRAM)'],
      identPrompt: 'Which storage-pyramid level contains L1, L2, and L3 and is described as low capacity, expensive, and faster?'
    },
    {
      id: 'l3_dram', order: 3004, term: 'Dynamic Random-Access Memory (DRAM)', aliases: ['DRAM', 'Dynamic Random Access Memory'], source: 'Slide 30 visual',
      definition: 'The storage-pyramid diagram associates DRAM with Main Memory.',
      identPrompt: 'Which memory technology is associated with Main Memory in the storage pyramid?'
    },
    {
      id: 'l3_main_memory', order: 3005, term: 'Main Memory', aliases: ['RAM', 'Main Memory (DRAM)'], source: 'Slide 30 visual',
      definition: 'Medium Capacity; Medium Price; Fast.',
      points: ['Dynamic Random-Access Memory (DRAM)', 'Medium Capacity', 'Medium Price', 'Fast'],
      identPrompt: 'Which storage-pyramid level is shown as medium capacity, medium price, and fast?'
    },
    {
      id: 'l3_permanent_storage', order: 3006, term: 'Permanent Storage', aliases: ['HDD/SSD', 'HDD and SSD'], source: 'Slide 30 visual',
      definition: 'Huge Capacity; Cheap; Slow.',
      points: ['Hard Disk Drives (HDD)', 'Solid State Drives (SSD)', 'Huge Capacity', 'Cheap', 'Slow'],
      identPrompt: 'Which storage-pyramid level has huge capacity, is cheap, and is slow relative to the upper levels?'
    },
    {
      id: 'l3_platter', order: 3201, term: 'Platter', source: 'Slide 32 table',
      definition: 'A circular magnetic disk where data is stored.',
      points: ['Think of it as the disk itself where information is recorded', 'A hard drive may have several platters'],
      identPrompt: 'What hard-disk part is a circular magnetic disk where data is stored?'
    },
    {
      id: 'l3_surface', order: 3202, term: 'Surface', source: 'Slide 32 table',
      definition: 'One side of a platter that can store data.',
      points: ['Each platter can have two surfaces', 'Each surface can contain tracks'],
      identPrompt: 'What hard-disk part is one side of a platter that can store data?'
    },
    {
      id: 'l3_track', order: 3203, term: 'Track', source: 'Slide 32 table',
      definition: 'A circular path on the surface of a platter where data is stored.',
      points: ['Think of tracks like the circular lines on a CD'],
      identPrompt: 'What hard-disk part is a circular path on the surface of a platter where data is stored?'
    },
    {
      id: 'l3_sector', order: 3204, term: 'Sector', source: 'Slide 32 table',
      definition: 'A small portion of a track used to store a specific amount of data.',
      points: ['A track is divided into smaller sections called sectors'],
      identPrompt: 'What hard-disk part is a small portion of a track used to store a specific amount of data?'
    },
    {
      id: 'l3_block_sector', order: 3205, term: 'Block/Sector', aliases: ['Block Sector'], source: 'Slide 32 table',
      definition: 'A unit or location where data is stored and accessed.',
      points: ['The diagram uses Block/Sector to identify the individual sections of a track'],
      identPrompt: 'What term in the disk-anatomy table means a unit or location where data is stored and accessed?'
    },
    {
      id: 'l3_cylinder', order: 3206, term: 'Cylinder', source: 'Slide 32 table',
      definition: 'A group of tracks at the same position on all surfaces of all platters.',
      points: ['Imagine drawing a vertical cylinder through the same track position on every platter'],
      identPrompt: 'What hard-disk term means a group of tracks at the same position on all surfaces of all platters?'
    },
    {
      id: 'l3_head', order: 3207, term: 'Head', source: 'Slide 32 table',
      definition: 'The component that reads data from and writes data to a disk surface.',
      points: ['It is like the reader/writer of the hard disk'],
      identPrompt: 'What hard-disk component reads data from and writes data to a disk surface?'
    },
    {
      id: 'l3_spindle', order: 3208, term: 'Spindle', source: 'Slide 32 table',
      definition: 'The central shaft that rotates the platters.',
      points: ['It makes the platters spin so the desired data can reach the head'],
      identPrompt: 'What hard-disk part is the central shaft that rotates the platters?'
    },
    {
      id: 'l3_memory_org', order: 3301, term: 'Simple Memory Organization', source: 'Slide 33',
      definition: "The computer's main memory (RAM) is divided into areas.",
      points: ['Operating System – occupies a portion of memory and remains available to manage the computer', 'User program and data – memory used by applications/programs and the data they are working with', 'There are two user programs in memory'],
      visual: {src: LESSON3_VISUALS.memoryOrganization, side: 'answer', alt: 'Simple memory organization with Operating System, two User program and data areas, Base and Limit labels', caption: 'Slide 33 visual reconstruction'},
      identPrompt: 'What memory topic shows that the computer’s main memory (RAM) is divided into areas for the Operating System and User program and data?'
    },
    {
      id: 'l3_os_memory_area', order: 3302, term: 'Operating System Memory Area', aliases: ['Operating System'], source: 'Slide 33',
      definition: 'Occupies a portion of memory and remains available to manage the computer.',
      identPrompt: 'Which area in the Simple Memory Organization slide occupies a portion of memory and remains available to manage the computer?'
    },
    {
      id: 'l3_user_memory_area', order: 3303, term: 'User Program and Data', source: 'Slide 33',
      definition: 'Memory used by applications/programs and the data they are working with.',
      points: ['The slide shows two user programs in memory'],
      identPrompt: 'Which memory area is used by applications/programs and the data they are working with?'
    },
    {
      id: 'l3_base_limit_purpose', order: 3401, term: 'Base and Limit Registers', source: 'Slide 34',
      definition: 'Registers used to protect memory and control which part of RAM a program/process is allowed to access.',
      points: ['Used in RAM memory management', 'Protect memory', 'Control which part of RAM a program/process is allowed to access'],
      identPrompt: 'Which pair of registers is used in RAM memory management to protect memory and control which part of RAM a program/process is allowed to access?'
    },
    {
      id: 'l3_base', order: 3402, term: 'Base Register', aliases: ['Base'], source: 'Slide 34',
      definition: 'The Base register contains the starting physical address of the memory area assigned to a process.',
      points: ['Think of it as the starting point', 'Example: Base = 10,000', 'The process starts using RAM at address 10,000'],
      identPrompt: 'Which RAM memory-management register contains the starting physical address of the memory area assigned to a process?'
    },
    {
      id: 'l3_limit', order: 3501, term: 'Limit Register', aliases: ['Limit'], source: 'Slide 35',
      definition: 'The Limit register contains the size or maximum range of memory that the process is allowed to use.',
      points: ['Think of it as the boundary', 'Example: Base = 10,000', 'Limit = 5,000', 'The process can access memory from 10,000 up to 14,999', 'The process is allowed to use 5,000 memory locations'],
      identPrompt: 'Which RAM memory-management register contains the size or maximum range of memory that the process is allowed to use?'
    },
    {
      id: 'l3_base_limit_range', order: 3502, term: '10,000 up to 14,999', aliases: ['10000 to 14999', '10,000 to 14,999', '10000 up to 14999'], source: 'Slide 35 example',
      definition: 'With Base = 10,000 and Limit = 5,000, this is the memory range the process can access.',
      points: ['Base = 10,000', 'Limit = 5,000', '5,000 memory locations'],
      identPrompt: 'According to the PPT example, what memory range can a process access when Base = 10,000 and Limit = 5,000?'
    }
  ],
  groups: [
    {
      id: 'l3_generations', order: 304, title: 'Generations of Operating System', source: 'Slides 3–4',
      prompt: 'Enumerate the four operating-system generations and their year ranges as presented in the PPT.',
      answers: ['First Generation: 1945 – 1955', 'Second Generation: 1955 – 1965', 'Third Generation: 1965 – 1980', 'Fourth Generation: 1980 – Present'],
      distractors: ['Next Generation: ???'],
      visual: {src: LESSON3_VISUALS.generations, side: 'answer', alt: 'Operating-system generation timeline', caption: 'Slides 3–4 reconstruction'},
      concepts: ['l3_gen1', 'l3_gen2', 'l3_gen3', 'l3_gen4']
    },
    {
      id: 'l3_first_gen_markers', order: 305, title: 'First Generation markers', source: 'Slide 3',
      flashcard: false, identification: false,
      prompt: 'Enumerate the two items listed under First Generation: 1945–1955.',
      answers: ['Vacuum Tubes', 'Plug Boards'],
      distractors: ['Transistors', 'Integrated Circuits'],
      concepts: ['l3_gen1']
    },
    {
      id: 'l3_second_gen_markers', order: 306, title: 'Second Generation markers', source: 'Slide 3',
      flashcard: false, identification: false,
      prompt: 'Enumerate the two items listed under Second Generation: 1955–1965.',
      answers: ['Transistors', 'Batch Systems'],
      distractors: ['Vacuum Tubes', 'Multiprogramming'],
      concepts: ['l3_gen2']
    },
    {
      id: 'l3_third_gen_markers', order: 307, title: 'Third Generation markers', source: 'Slide 3',
      flashcard: false, identification: false,
      prompt: 'Enumerate the two items listed under Third Generation: 1965–1980.',
      answers: ['Integrated Circuits', 'Multiprogramming'],
      distractors: ['Plug Boards', 'Batch Systems'],
      concepts: ['l3_gen3', 'l3_multiprogramming']
    },
    {
      id: 'l3_fourth_gen_markers', order: 403, title: 'Fourth Generation markers', source: 'Slide 4',
      flashcard: false, identification: false,
      prompt: 'Enumerate the four items listed directly under Fourth Generation: 1980–Present.',
      answers: ['Large Scale Integration', 'Personal Computers', 'GUI Interface', 'Multitasking'],
      distractors: ['Vacuum Tubes', 'Batch Systems', 'Plug Boards'],
      concepts: ['l3_gen4']
    },
    {
      id: 'l3_nextgen_questions', order: 404, title: 'Next Generation questions', source: 'Slide 4',
      flashcard: false, identification: false,
      prompt: 'Enumerate the two questions listed under Next Generation: ???.',
      answers: ['Systems Connected By High-speed Networks?', 'Wide Area Resource Management?'],
      distractors: ['Large Scale Integration', 'Vacuum Tubes'],
      concepts: ['l3_nextgen']
    },
    {
      id: 'l3_direct_steps', order: 504, title: 'First Generation: Direct Input workflow', source: 'Slide 5',
      flashcard: false, identification: false,
      prompt: 'Enumerate the Direct Input workflow steps listed before the problem and goal.',
      answers: ['Run one job at a time', 'Enter it into the computer (might require rewiring!)', 'Run it', 'Record the results'],
      distractors: ['Read cards onto input tape', 'Put input tape on 7094'],
      concepts: ['l3_direct_input']
    },
    {
      id: 'l3_direct_problem_goal', order: 505, title: 'Direct Input problem, reasons, and goal', source: 'Slide 5',
      flashcard: false, identification: false,
      prompt: 'Enumerate the problem, supporting reasons, and goal stated for First Generation Direct Input.',
      answers: ['Problem: lots of wasted computer time!', 'Computer was idle during first and last steps', 'Computers were very expensive!', 'Goal: make better use of an expensive commodity: computer time'],
      distractors: ['Several jobs active at one time', 'Cheaper hardware terminals'],
      concepts: ['l3_direct_input', 'l3_direct_problem', 'l3_direct_goal']
    },
    {
      id: 'l3_batch_workflow', order: 701, title: 'Second Generation batch workflow', source: 'Slide 7',
      prompt: 'Enumerate the five steps in the IBM 1401/7094 batch workflow shown in the PPT.',
      answers: ['Bring cards to 1401', 'Read cards onto input tape', 'Put input tape on 7094', 'Perform the computation, writing results to output tape', 'Put output tape on 1401, which prints output'],
      distractors: ['Run one job at a time', 'Computer reads jobs from disk'],
      visual: {src: LESSON3_VISUALS.batchWorkflow, side: 'answer', alt: 'IBM 1401 and IBM 7094 batch workflow', caption: 'Slide 7 workflow and image labels reconstructed'},
      concepts: ['l3_batch_systems', 'l3_ibm1401', 'l3_ibm7094']
    },
    {
      id: 'l3_batch_visual_labels', order: 702, title: 'Batch System diagram labels', source: 'Slide 7 visual',
      prompt: 'Enumerate the main labels shown in the Second Generation batch-system diagram.',
      answers: ['Card reader', 'Tape drive', '1401', 'Input tape', '7094', 'System tape', 'Output tape', 'Printer'],
      distractors: ['Spool', 'Secondary Storage', 'Network controller'],
      identification: false,
      concepts: ['l3_batch_systems', 'l3_ibm1401', 'l3_ibm7094']
    },
    {
      id: 'l3_significance', order: 901, title: 'Why the First and Second Generations are significant', source: 'Slide 9',
      prompt: 'Enumerate the key First- versus Second-Generation significance statements in the PPT.',
      answers: ['First-generation computers used vacuum tubes', 'First-generation computers generally had no operating system', 'Transistors replaced vacuum tubes in second-generation computers such as the IBM 1401 and 7094', 'Early batch operating systems began to appear'],
      distractors: ['Integrated Circuits', 'Large Scale Integration'],
      concepts: ['l3_gen1', 'l3_gen2', 'l3_ibm1401', 'l3_ibm7094', 'l3_batch_systems']
    },
    {
      id: 'l3_spooling_media', order: 1001, title: 'Spooling: batch media evolution', source: 'Slide 10',
      prompt: 'Enumerate the two statements comparing original and later batch-system storage media.',
      answers: ['Original batch systems used tape drives', 'Later batch systems used disks for buffering'],
      distractors: ['Multiple jobs in memory', 'Cheaper hardware terminals -> interactive use'],
      concepts: ['l3_spooling', 'l3_buffer']
    },
    {
      id: 'l3_spooling_disk_workflow', order: 1002, title: 'Spooling disk workflow', source: 'Slide 10',
      prompt: 'Enumerate the four disk-based Spooling workflow statements listed in the PPT.',
      answers: ['Operator read cards onto disk attached to the computer', 'Computer read jobs from disk', 'Computer wrote job results to disk', 'Operator directed that job results be printed from disk'],
      distractors: ['User submits job', 'The operating system rapidly switches the CPU between their tasks'],
      concepts: ['l3_spooling']
    },
    {
      id: 'l3_spooling_benefits_limits', order: 1003, title: 'Spooling benefits and limitation', source: 'Slide 10',
      prompt: 'Enumerate the Spooling capability, benefit, and limitation statements listed in the PPT.',
      answers: ['Disks enabled simultaneous peripheral operation on-line (spooling)', 'Computer overlapped I/O of one job with execution of another', 'Better utilization of the expensive CPU', 'Still only one job active at any given time'],
      distractors: ['Still not interactive', 'Multiple jobs in memory'],
      concepts: ['l3_spooling']
    },
    {
      id: 'l3_printer_spooling', order: 1201, title: 'Printer Spooling example', source: 'Slide 12',
      prompt: 'Enumerate the printer example steps used to explain Spooling.',
      answers: ['You send a document to the printer', 'The computer places the print job in a queue/buffer on the disk', 'Your computer does not have to wait for the printer to finish', 'The printer processes the queued documents one by one', 'A print queue is a common example of spooling'],
      distractors: ['User submits job', 'Computer runs it'],
      concepts: ['l3_spooling', 'l3_buffer']
    },
    {
      id: 'l3_spooling_diagram', order: 1401, title: 'Spooling Diagram Components', source: 'Slide 14 visual',
      prompt: 'Enumerate the five main labels shown in the Spooling diagram.',
      answers: ['CPU', 'Input Device', 'Output Device', 'Spool', 'Secondary Storage'],
      distractors: ['Main Memory', 'Network Controller', 'Limit Register'],
      visual: {src: LESSON3_VISUALS.spooling, side: 'answer', alt: 'Spooling diagram with CPU, input device, output device, Spool, and Secondary Storage', caption: 'Slide 14 visual reconstruction'},
      concepts: ['l3_spooling', 'l3_buffer']
    },
    {
      id: 'l3_spooling_diagram_examples', order: 1402, title: 'Spooling Diagram Device Examples', source: 'Slide 14 visual',
      prompt: 'Enumerate the input- and output-device examples shown in the Spooling diagram.',
      answers: ['Input Device – Ex: card reader', 'Output Device – Ex: Printer'],
      distractors: ['User A → running a program', 'CPU Registers'],
      concepts: ['l3_spooling']
    },
    {
      id: 'l3_spooling_examples', order: 1508, title: 'Other Operations That Use Spooling', source: 'Slide 15 table',
      prompt: 'Enumerate the seven Device / System entries listed under Other Operations That Use Spooling.',
      answers: ['Disk storage', 'Network devices', 'Email systems', 'Plotters', 'Fax machines', 'Tape drives', 'Audio/video systems'],
      distractors: ['CPU Registers', 'Base Register', 'Video Controller'],
      concepts: ['l3_spooling', 'l3_spool_disk', 'l3_spool_network', 'l3_spool_email', 'l3_spool_plotter', 'l3_spool_fax', 'l3_spool_tape', 'l3_spool_av']
    },
    {
      id: 'l3_email_queue', order: 1601, title: 'Email System Spooling example', source: 'Slide 16',
      prompt: 'Enumerate the main statements in the Email System example.',
      answers: ['When you send 10 emails at once, your computer does not necessarily transmit all of them simultaneously', 'It can place them in an outgoing queue', 'Email 1 → email 2 → email 3 → email 4 → ...', 'The email system processes the queued messages as the network and mail server become available'],
      distractors: ['Still only one job active at any given time', 'The printer processes the queued documents one by one'],
      concepts: ['l3_spooling', 'l3_spool_email']
    },
    {
      id: 'l3_email_visual_components', order: 1701, title: 'Email System Diagram Components', source: 'Slide 17 visual',
      prompt: 'Enumerate the major system components visible in the Slide 17 email-system diagram.',
      answers: ["Person A's PC", "Person B's PC", 'Mail client', "A's local storage", 'network', "A's mail Server (SMTP or POP)", 'Mail spool with storage for Person A'],
      distractors: ['Video controller', 'Spindle', 'CPU Registers'],
      visual: {src: LESSON3_VISUALS.emailSystem, side: 'answer', alt: 'Email system diagram with POP and SMTP clients, network, mail server, local storage, and mail spool', caption: 'Slide 17 image-only diagram reconstructed from visible labels'},
      concepts: ['l3_spooling', 'l3_spool_email']
    },
    {
      id: 'l3_email_visual_links', order: 1702, title: 'Email System Diagram Link and Flow Labels', source: 'Slide 17 visual',
      prompt: 'Enumerate the protocol/link and mail-flow labels visible in the Slide 17 email-system diagram.',
      answers: ['Running POP Client', 'POP Link', 'SMTP Link', 'Email sent via SMTP', 'Outgoing email', 'Incoming email'],
      distractors: ['Input tape', 'Output tape', 'A print queue is a common example of spooling'],
      concepts: ['l3_spooling', 'l3_spool_email']
    },
    {
      id: 'l3_multiprogramming_facts', order: 1802, title: 'Third Generation: Multiprogramming characteristics', source: 'Slide 18',
      flashcard: false, identification: false,
      prompt: 'Enumerate the main Multiprogramming characteristics listed in the PPT.',
      answers: ['Multiple jobs in memory', 'Protected from one another', 'Operating system protected from each job as well', 'Resources (time, hardware) split between jobs', 'Still not interactive'],
      distractors: ['Cheaper hardware terminals -> interactive use', 'Only one job active at any given time'],
      concepts: ['l3_multiprogramming']
    },
    {
      id: 'l3_multiprogramming_noninteractive', order: 1803, title: 'Multiprogramming user-to-results sequence', source: 'Slide 18',
      flashcard: false, identification: false,
      prompt: 'Enumerate the three statements showing why the Multiprogramming system was still not interactive.',
      answers: ['User submits job', 'Computer runs it', 'User gets results minutes (hours, days) later'],
      distractors: ['Cheaper hardware terminals -> interactive use', 'Quick turnaround meant quick fixes for problems'],
      concepts: ['l3_multiprogramming']
    },
    {
      id: 'l3_multiprogramming_layout', order: 1804, title: 'Multiprogramming Memory Partitions', source: 'Slide 18 visual',
      prompt: 'Enumerate the four labeled blocks shown in the Multiprogramming memory-partition diagram.',
      answers: ['Operating system', 'Job 1', 'Job 2', 'Job 3'],
      distractors: ['Spool', 'Printer', 'Network controller'],
      concepts: ['l3_multiprogramming']
    },
    {
      id: 'l3_timesharing_facts', order: 1902, title: 'Timesharing', source: 'Slide 19',
      flashcard: false, identification: false,
      prompt: 'Enumerate the Timesharing statements listed in the PPT.',
      answers: ['Multiprogramming allowed several jobs to be active at one time', 'Initially used for batch systems', 'Cheaper hardware terminals -> interactive use', 'Computer use got much cheaper and easier', 'No more “priesthood”', 'Quick turnaround meant quick fixes for problems'],
      distractors: ['Still not interactive', 'Only one job active at any given time'],
      concepts: ['l3_timesharing']
    },
    {
      id: 'l3_unix_users', order: 2002, title: 'UNIX Multi-user Example', source: 'Slide 20',
      flashcard: false, identification: false,
      prompt: 'Enumerate the four user activities in the UNIX multi-user example.',
      answers: ['User A → running a program', 'User B → editing a file', 'User C → compiling a program', 'User D → running calculations'],
      distractors: ['Email 1 → email 2 → email 3 → email 4 → ...', 'Computer read jobs from disk'],
      concepts: ['l3_timesharing', 'l3_unix_multiuser']
    },
    {
      id: 'l3_unix_timesharing_summary', order: 2003, title: 'UNIX Timesharing behavior', source: 'Slide 20',
      flashcard: false, identification: false,
      prompt: 'Enumerate the two statements that explain how the UNIX multi-user example works.',
      answers: ['Several users could be connected to the same computer through terminals', 'The operating system rapidly switches the CPU between their tasks'],
      distractors: ['Computer was idle during first and last steps', 'Still only one job active at any given time'],
      concepts: ['l3_timesharing', 'l3_unix_multiuser']
    },
    {
      id: 'l3_swapping_facts', order: 2103, title: 'Swapping characteristics', source: 'Slide 21 visual table',
      flashcard: false, identification: false,
      prompt: 'Enumerate the Swapping characteristics shown in the comparison table.',
      answers: ['Moving a process between main memory (RAM) and secondary storage (disk)', 'Involves RAM and disk', 'Used to manage memory when RAM is limited', 'A process may be temporarily removed from RAM and placed on disk', 'Generally slower because disk storage is involved'],
      distractors: ['Primarily involves the CPU and process context', 'Used to allow multiple processes to share the CPU'],
      concepts: ['l3_swapping']
    },
    {
      id: 'l3_switching_facts', order: 2104, title: 'Switching characteristics', source: 'Slide 21 visual table',
      flashcard: false, identification: false,
      prompt: 'Enumerate the Switching characteristics shown in the comparison table.',
      answers: ['Changing the CPU from executing one process/thread to another', 'Primarily involves the CPU and process context', 'Used to allow multiple processes to share the CPU', 'The current process is paused and another process is given CPU time', 'Generally much faster because it mainly involves CPU state/context'],
      distractors: ['Involves RAM and disk', 'Used to manage memory when RAM is limited'],
      concepts: ['l3_switching']
    },
    {
      id: 'l3_swap_switch_examples', order: 2105, title: 'Swapping vs Switching examples', source: 'Slide 21 visual table',
      flashcard: false, identification: false,
      prompt: 'Enumerate the two examples shown in the Swapping vs Switching comparison table.',
      answers: ['Swapping: Process A is moved from RAM to disk to free memory for Process B', 'Switching: CPU stops Process A and starts executing Process B'],
      distractors: ['User A → running a program', 'Computer read jobs from disk'],
      concepts: ['l3_swapping', 'l3_switching']
    },
    {
      id: 'l3_fourth_characteristics', order: 2308, title: 'Fourth Generation Main Characteristics', source: 'Slide 23',
      prompt: 'Enumerate the seven Main Characteristics of Fourth Generation OS listed in the PPT.',
      answers: ['Personal computers (pcs)', 'Graphical user interface (gui)', 'Multitasking', 'Networking', 'Improved user interaction', 'Portable and mobile computing', 'Greater hardware support'],
      distractors: ['Vacuum Tubes', 'Plug Boards', 'Direct Input'],
      concepts: ['l3_gen4', 'l3_pc_characteristic', 'l3_gui_characteristic', 'l3_multitasking_characteristic', 'l3_networking_characteristic', 'l3_interaction_characteristic', 'l3_mobile_characteristic', 'l3_hardware_support_characteristic']
    },
    {
      id: 'l3_gui_elements', order: 2309, title: 'GUI interaction elements', source: 'Slide 23',
      flashcard: false, identification: false,
      prompt: 'Enumerate the four interaction elements listed for Graphical User Interface (GUI).',
      answers: ['Windows', 'Icons', 'Menus', 'Mouse'],
      distractors: ['Plug Boards', 'Tape drives', 'Spindle'],
      concepts: ['l3_gui_characteristic']
    },
    {
      id: 'l3_mobile_devices', order: 2310, title: 'Portable and Mobile Computing devices', source: 'Slide 23',
      flashcard: false, identification: false,
      prompt: 'Enumerate the three device categories named under Portable and Mobile Computing.',
      answers: ['Laptops', 'Tablets', 'Smartphones'],
      distractors: ['Vacuum tubes', 'Tape drives', 'Plotters'],
      concepts: ['l3_mobile_characteristic']
    },
    {
      id: 'l3_hardware_support_items', order: 2311, title: 'Greater Hardware Support resources', source: 'Slide 23',
      flashcard: false, identification: false,
      prompt: 'Enumerate the four hardware/resource categories named under Greater Hardware Support.',
      answers: ['Processors', 'Memory', 'Storage', 'Peripherals'],
      distractors: ['No more “priesthood”', 'Input tape', 'Mail spool with storage for Person A'],
      concepts: ['l3_hardware_support_characteristic']
    },
    {
      id: 'l3_fourth_visual_examples', order: 2401, title: 'Fourth Generation OS Visual Examples', source: 'Slide 24 visual',
      cardDefinition: 'The image-only slide visually shows the move from computer interfaces to personal and mobile devices.',
      answers: ['Command-line computer screen', 'Graphical desktop interface', 'Modern desktop computer', 'Smartphones', 'Tablet'],
      distractors: [],
      identification: false,
      enumeration: false,
      multiple: false,
      visual: {src: LESSON3_VISUALS.fourthGenVisual, side: 'answer', alt: 'Fourth-generation visual examples including command-line and graphical desktop interfaces, smartphones, and a tablet', caption: 'Slide 24 visual categories only; exact product versions are not inferred'},
      concepts: ['l3_gen4', 'l3_mobile_characteristic', 'l3_gui_characteristic']
    },
    {
      id: 'l3_simple_pc_internal', order: 2601, title: 'Components of a Simple PC', source: 'Slide 26 visual',
      prompt: 'Enumerate the six labeled internal components shown inside the Simple PC diagram.',
      answers: ['CPU', 'Memory', 'Video controller', 'Hard drive controller', 'USB controller', 'Network controller'],
      distractors: ['Base Register', 'Limit Register', 'Spindle'],
      visual: {src: LESSON3_VISUALS.simplePC, side: 'answer', alt: 'Simple PC diagram with CPU, Memory, four peripheral controllers, and external devices', caption: 'Slide 26 visual reconstruction'},
      concepts: ['l3_peripheral_controllers', 'l3_video_controller', 'l3_hdd_controller', 'l3_usb_controller', 'l3_network_controller']
    },
    {
      id: 'l3_simple_pc_controllers', order: 2602, title: 'Four Controllers in the Simple PC', source: 'Slide 26 visual',
      flashcard: false, identification: false,
      prompt: 'Enumerate the four controllers shown in the Components of a Simple PC diagram.',
      answers: ['Video controller', 'Hard drive controller', 'USB controller', 'Network controller'],
      distractors: ['Base Register', 'Limit Register', 'Spindle'],
      concepts: ['l3_peripheral_controllers', 'l3_video_controller', 'l3_hdd_controller', 'l3_usb_controller', 'l3_network_controller']
    },
    {
      id: 'l3_simple_pc_external_links', order: 2603, title: 'Simple PC controller-to-device associations', source: 'Slide 26 visual',
      prompt: 'Enumerate the controller-to-device/outside-world associations visibly shown in the Simple PC diagram.',
      answers: ['Video controller → display/monitor', 'Hard drive controller → hard drive', 'USB controller → keyboard and mouse', 'Network controller → outside world'],
      distractors: ['Base → 0x23000', 'Limit → 0x27fff'],
      concepts: ['l3_video_controller', 'l3_hdd_controller', 'l3_usb_controller', 'l3_network_controller']
    },
    {
      id: 'l3_usb_examples', order: 2903, title: 'USB Controller connected-device examples', source: 'Slide 29',
      flashcard: false, identification: false,
      prompt: 'Enumerate the four connected-device examples listed for the USB Controller.',
      answers: ['Mice', 'Keyboards', 'Flash drives', 'External microphones'],
      distractors: ['Hard disk platters', 'Network packets', 'CPU registers'],
      concepts: ['l3_usb_controller']
    },
    {
      id: 'l3_network_signal_types', order: 2904, title: 'Network Controller signal types', source: 'Slide 29',
      flashcard: false, identification: false,
      prompt: 'Enumerate the three signal types into which the Network Controller can format data packets.',
      answers: ['Electrical', 'Radio', 'Optical'],
      distractors: ['Screen resolution', 'Refresh rates', 'Pixel color data'],
      concepts: ['l3_network_controller']
    },
    {
      id: 'l3_network_scope_links', order: 2905, title: 'Network Controller network and link examples', source: 'Slide 29',
      flashcard: false, identification: false,
      prompt: 'Enumerate the network scopes and transmission links named in the Network Controller description.',
      answers: ['Local network (LAN)', 'Internet', 'Ethernet cables', 'Wi-Fi'],
      distractors: ['Printer queue', 'Plug board', 'Spindle'],
      concepts: ['l3_network_controller']
    },
    {
      id: 'l3_storage_pyramid', order: 3007, title: 'Storage Pyramid', source: 'Slide 30 visual',
      prompt: 'Enumerate the four main storage-pyramid levels from top to bottom.',
      answers: ['CPU Registers', 'L1 cache / L2 cache / L3 cache', 'Main Memory', 'Permanent Storage'],
      distractors: ['Network Controller', 'Spindle', 'Operating System'],
      visual: {src: LESSON3_VISUALS.storagePyramid, side: 'answer', alt: 'Storage pyramid hierarchy', caption: 'Slide 30 visual reconstruction'},
      concepts: ['l3_cpu_registers', 'l3_cache', 'l3_main_memory', 'l3_permanent_storage']
    },
    {
      id: 'l3_storage_technologies', order: 3008, title: 'Storage Pyramid technology mapping', source: 'Slide 30 visual',
      prompt: 'Enumerate the memory/storage technology mappings shown in the Storage Pyramid.',
      answers: ['Processor → CPU Registers', 'Static Random-Access Memory (SRAM) → L1/L2/L3 cache', 'Dynamic Random-Access Memory (DRAM) → Main Memory', 'Hard Disk Drives (HDD) / Solid State Drives (SSD) → Permanent Storage'],
      distractors: ['Video controller → display/monitor', 'USB controller → keyboard and mouse'],
      concepts: ['l3_cpu_registers', 'l3_sram', 'l3_cache', 'l3_dram', 'l3_main_memory', 'l3_permanent_storage']
    },
    {
      id: 'l3_storage_characteristics', order: 3009, title: 'Storage Pyramid capacity, price, and speed', source: 'Slide 30 visual',
      prompt: 'Enumerate the capacity/price/speed descriptions for the four Storage Pyramid levels.',
      answers: ['CPU Registers → Tiny Capacity; Highly Expensive; Extremely Fast', 'Cache → Low Capacity; Expensive; Faster', 'Main Memory → Medium Capacity; Medium Price; Fast', 'Permanent Storage → Huge Capacity; Cheap; Slow'],
      distractors: ['Primary Role: Controls data communication over networks', 'A circular magnetic disk where data is stored'],
      concepts: ['l3_cpu_registers', 'l3_cache', 'l3_main_memory', 'l3_permanent_storage']
    },
    {
      id: 'l3_disk_anatomy', order: 3101, title: 'Anatomy of a Disk', source: 'Slides 31–32',
      prompt: 'Enumerate the eight disk-anatomy terms listed in the lesson table.',
      answers: ['Platter', 'Surface', 'Track', 'Sector', 'Block/Sector', 'Cylinder', 'Head', 'Spindle'],
      distractors: ['Cache', 'Limit Register', 'Network Controller'],
      visual: {src: LESSON3_VISUALS.diskAnatomy, side: 'answer', alt: 'Disk anatomy diagram with Track, Block/Sector, Cylinder, Surface, Spindle, Platter, and Head', caption: 'Slide 31 image-only diagram plus Slide 32 term list'},
      concepts: ['l3_platter', 'l3_surface', 'l3_track', 'l3_sector', 'l3_block_sector', 'l3_cylinder', 'l3_head', 'l3_spindle']
    },
    {
      id: 'l3_disk_visual_labels', order: 3102, title: 'Disk Anatomy diagram labels', source: 'Slide 31 visual',
      flashcard: false,
      prompt: 'Enumerate the seven labels visible directly in the Anatomy of a Disk diagram.',
      answers: ['Track', 'Block/Sector', 'Cylinder', 'Surface', 'Spindle', 'Platter', 'Head'],
      distractors: ['Limit', 'Cache', 'USB Controller'],
      identification: false,
      concepts: ['l3_track', 'l3_block_sector', 'l3_cylinder', 'l3_surface', 'l3_spindle', 'l3_platter', 'l3_head']
    },
    {
      id: 'l3_memory_areas', order: 3304, title: 'Simple Memory Organization areas', source: 'Slide 33',
      flashcard: false, identification: false,
      prompt: 'Enumerate the two memory-area labels described in the Simple Memory Organization slide.',
      answers: ['Operating System', 'User program and data'],
      distractors: ['Permanent Storage', 'Network Controller', 'Spool'],
      concepts: ['l3_memory_org', 'l3_os_memory_area', 'l3_user_memory_area']
    },
    {
      id: 'l3_memory_visual_addresses', order: 3305, title: 'Base and Limit labels in the Slide 33 memory diagram', source: 'Slide 33 visual',
      prompt: 'Enumerate the two Base/Limit address labels visibly marked beside the user-program partition in the Slide 33 memory diagram.',
      answers: ['Base → 0x23000', 'Limit → 0x27fff'],
      distractors: ['Base = 10,000', 'Limit = 5,000'],
      concepts: ['l3_memory_org', 'l3_base', 'l3_limit']
    },
    {
      id: 'l3_base_limit', order: 3403, title: 'Base and Limit Registers', source: 'Slides 34–35',
      flashcard: false, identification: false,
      prompt: 'Enumerate the two registers used to protect memory and control which part of RAM a program/process is allowed to access.',
      answers: ['Base Register', 'Limit Register'],
      distractors: ['Program Counter', 'Spindle', 'Network Controller'],
      concepts: ['l3_base_limit_purpose', 'l3_base', 'l3_limit']
    },
    {
      id: 'l3_base_example', order: 3404, title: 'Base Register example', source: 'Slide 34',
      flashcard: false, identification: false,
      prompt: 'Enumerate the two statements in the Base Register example.',
      answers: ['Base = 10,000', 'The process starts using RAM at address 10,000'],
      distractors: ['Limit = 5,000', 'The process can access memory from 10,000 up to 14,999'],
      concepts: ['l3_base']
    },
    {
      id: 'l3_limit_example', order: 3503, title: 'Limit Register example', source: 'Slide 35',
      flashcard: false, identification: false,
      prompt: 'Enumerate the key values/results in the Limit Register example.',
      answers: ['Base = 10,000', 'Limit = 5,000', 'The process can access memory from 10,000 up to 14,999', 'The process is allowed to use 5,000 memory locations'],
      distractors: ['Base → 0x23000', 'Limit → 0x27fff'],
      concepts: ['l3_limit', 'l3_base_limit_range']
    }
  ]
});
