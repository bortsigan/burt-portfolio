export const projects = [
  {
    title: "WSU Student/Teacher/Community Manager System",
    company: "Shakewell Agency",
    description: "Full-featured platform for managing student records, teacher coordination, and community engagement.",
    metrics: [
      { label: "Performance", value: "Query optimization" },
      { label: "Users", value: "2,000+ active" },
      { label: "Impact", value: "Automated workflows" }
    ],
    technologies: ["PHP 8", "Laravel", "Vue.js", "MySQL", "Nova"],
    role: "Backend Developer",
    highlights: [
      "Built the API structure and set up microservices so different parts could work independently",
      "Created endpoints that third-party apps could hook into, making the system extensible",
      "Added automated emails and notifications so admins and teachers got real-time updates",
      "Kept the codebase clean and fixed bugs as they came up"
    ]
  },
  {
    title: "Midden Sydney & Hayst Market - Nova API Integration",
    company: "Shakewell Agency",
    description: "Applied Laravel Nova for API management and admin panel on marketing campaign websites.",
    metrics: [
      { label: "Sites", value: "2 live sites" },
      { label: "API Endpoints", value: "Dynamic content" },
      { label: "Admin Panel", value: "Easy management" }
    ],
    link: "https://www.middensydney.com.au/",
    link2: "https://www.haystmarket.com.au/",
    technologies: ["Laravel", "Nova", "PHP 8", "Vue.js"],
    role: "Backend Developer",
    highlights: [
      "Set up Laravel Nova as admin interface for content management",
      "Designed and implemented RESTful APIs for both sites",
      "Created custom resources and filters in Nova",
      "Deployed infrastructure for high-traffic marketing campaigns"
    ]
  },
  {
    title: "Shipping Integration Platform",
    company: "MacShip",
    description: "Real-time data sync between clients and shipping partners via API.",
    metrics: [
      { label: "API Reliability", value: "99.9% uptime" },
      { label: "Response Time", value: "<2 seconds" },
      { label: "Impact", value: "Reduced manual work" }
    ],
    technologies: ["Laravel", "Vue.js", "Docker", "AWS"],
    role: "Laravel Developer",
    highlights: [
      "Built APIs that could handle thousands of shipping requests per day without breaking",
      "Set up background jobs so heavy processing didn't slow down the user experience",
      "Created a tracking dashboard so users could see shipment status in real-time",
      "Automated deployments with Docker so updates were fast and reliable"
    ]
  },
  {
    title: "Dental Clinic Booking & Management System",
    company: "BBO Co. LTD",
    description: "Clinic management system connecting patients with dental providers.",
    metrics: [
      { label: "Monthly Bookings", value: "500-800" },
      { label: "Clinics", value: "3-4 locations" },
      { label: "Impact", value: "Reduced scheduling errors" }
    ],
    technologies: ["Laravel", "Vue.js", "MySQL"],
    role: "PHP/Full-Stack Developer",
    highlights: [
      "Built the booking system so patients could schedule appointments without calling or emailing",
      "Added reminders so people didn't forget appointments and clinics didn't waste chair time",
      "Refactored messy code to make it way easier to find and fix bugs",
      "Created an admin dashboard that even non-technical staff could use to manage appointments"
    ]
  },
  {
    title: "Online ESL Learning Platform",
    company: "Forty Degrees Celsius",
    description: "Interactive language learning platform serving students and teachers.",
    metrics: [
      { label: "Maintained For", value: "4+ years" },
      { label: "Features", value: "20+ lesson types" },
      { label: "Impact", value: "Active user base" }
    ],
    technologies: ["CakePHP", "jQuery", "MySQL", "HTML5", "NodeJS", "SocketIO", "WebRTC"],
    role: "PHP Developer",
    highlights: [
      "Built interactive lessons where students could actually practice and get immediate feedback",
      "Fixed slow database queries that were making pages feel sluggish",
      "Created a progress tracking system so teachers could see how students were doing",
      "Added features teachers and students asked for to make it more useful"
    ]
  },
  {
    title: "Classroom Management System",
    company: "BBO Co. LTD",
    description: "Platform designed for Japanese students and educators for online classroom management.",
    metrics: [
      { label: "Classes", value: "50+ active" },
      { label: "Users", value: "1,000+ teachers/students" },
      { label: "Impact", value: "Simpler workflows" }
    ],
    technologies: ["Laravel", "MySQL"],
    role: "PHP Developer",
    highlights: [
      "Built an attendance system teachers could actually use and trust",
      "Created an assignment interface where students could submit work and teachers could grade it",
      "Added real-time notifications so nobody missed important class announcements",
      "Made sure the whole thing worked in both Japanese and English"
    ]
  },
  {
    title: "In-House Ecommerce Platform",
    company: "BBO Co. LTD",
    description: "Inventory management and sales tracking system for internal ecommerce operations.",
    metrics: [
      { label: "SKUs", value: "500+" },
      { label: "Transactions", value: "Daily tracking" },
      { label: "Impact", value: "Better stock control" }
    ],
    technologies: ["Laravel", "MySQL", "Vue.js"],
    role: "PHP/Full-Stack Developer",
    highlights: [
      "Built inventory system that tracked stock levels and prevented overselling",
      "Created a sales dashboard showing real-time revenue and trends",
      "Automated low-stock alerts so products never unexpectedly ran out",
      "Made order processing and fulfillment quicker and easier"
    ]
  },
  {
    title: "Web Scraping Solutions",
    company: "BBO Co. LTD",
    description: "Data extraction and automation tools built with PuppeteerJS for various business needs.",
    metrics: [
      { label: "Data Points", value: "Automated collection" },
      { label: "Reliability", value: "Error handling & retries" },
      { label: "Impact", value: "Time saved on manual work" }
    ],
    technologies: ["PuppeteerJS", "JavaScript", "Data Processing"],
    role: "PHP Developer",
    highlights: [
      "Built automated scrapers that collected data without manual intervention",
      "Implemented robust error handling to keep scrapers running consistently",
      "Created scheduled jobs that ran on a regular basis to keep data fresh",
      "Delivered data in formats that the team could easily use"
    ]
  },
  {
    title: "Chatbot Backend & Features",
    company: "Link365 Global Solutions",
    description: "Backend development and feature implementation for a conversational chatbot application.",
    metrics: [
      { label: "Features", value: "Multiple integrations" },
      { label: "Reliability", value: "24/7 availability" },
      { label: "Impact", value: "Improved response times" }
    ],
    technologies: ["Symfony 4", "PHP", "APIs", "MongoDB", "ReactJS"],
    role: "Symfony Developer",
    highlights: [
      "Developed backend services that powered the chatbot's core functionality",
      "Created APIs for integrating with external services",
      "Optimized query performance for real-time conversational responses",
      "Implemented logging and monitoring for consistent uptime"
    ]
  },
  {
    title: "Independent Scraping & Automation Project",
    company: "Link365 Global Solutions",
    description: "Solo-led initiative to build a comprehensive scraping and data automation solution from scratch.",
    metrics: [
      { label: "Scope", value: "Full project ownership" },
      { label: "Complexity", value: "Multi-stage pipeline" },
      { label: "Impact", value: "Demonstrated autonomy" }
    ],
    technologies: ["Symfony 4", "PuppeteerJS", "Data Processing", "MongoDB"],
    role: "Symfony Developer",
    highlights: [
      "Conceptualized and designed the entire project architecture independently",
      "Built scraping pipelines that handled complex data extraction workflows",
      "Implemented data validation and transformation without supervision",
      "Deployed and maintained the solution in production with minimal guidance"
    ]
  }
];
