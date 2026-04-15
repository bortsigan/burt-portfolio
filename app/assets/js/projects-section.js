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
    technologies: ["PHP", "Laravel", "Vue.js", "MySQL"],
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
    technologies: ["PHP", "jQuery", "MySQL", "HTML5"],
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
      { label: "Impact", value: "Streamlined workflows" }
    ],
    technologies: ["PHP", "Laravel", "MySQL"],
    role: "PHP Developer",
    highlights: [
      "Built an attendance system teachers could actually use and trust",
      "Created an assignment interface where students could submit work and teachers could grade it",
      "Added real-time notifications so nobody missed important class announcements",
      "Made sure the whole thing worked in both Japanese and English"
    ]
  }
];
