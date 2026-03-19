export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: number;
  title: string;
  category: string;
  categorySlug: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  durationWeeks: number;
  price_usd: number;
  description: string;
  outcomes: string[];
  modules: CourseModule[];
  isAvailable: boolean;
}

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    category: "Technology",
    categorySlug: "technology",
    level: "Beginner",
    durationWeeks: 4,
    price_usd: 2,
    description:
      "Build responsive websites using HTML, CSS, and JavaScript from scratch. This course takes you from zero to launching your first website, covering modern standards and mobile-first design.",
    outcomes: [
      "Build and publish a complete website from scratch",
      "Write clean HTML, CSS, and JavaScript code",
      "Create mobile-responsive layouts with Flexbox and Grid",
      "Use forms, buttons, and interactive elements",
      "Understand how the internet and browsers work",
      "Host a website for free using GitHub Pages",
    ],
    modules: [
      {
        title: "How the Internet Works",
        topics: [
          "What is the internet?",
          "How browsers load websites",
          "Understanding domain names and hosting",
          "Introduction to web standards",
        ],
      },
      {
        title: "HTML Foundations",
        topics: [
          "HTML structure and syntax",
          "Headings, paragraphs, and lists",
          "Links, images, and media",
          "Forms and input elements",
        ],
      },
      {
        title: "CSS Styling",
        topics: [
          "Selectors and properties",
          "Colors, fonts, and spacing",
          "Box model and layout",
          "Responsive design with media queries",
        ],
      },
      {
        title: "CSS Layout Techniques",
        topics: [
          "Flexbox for alignment",
          "CSS Grid for page structure",
          "Mobile-first approach",
          "Common layout patterns",
        ],
      },
      {
        title: "JavaScript Basics",
        topics: [
          "Variables and data types",
          "Functions and control flow",
          "DOM manipulation",
          "Handling events",
        ],
      },
      {
        title: "Building Interactive Pages",
        topics: [
          "Adding interactivity with JS",
          "Form validation",
          "Simple animations",
          "Debugging basics",
        ],
      },
      {
        title: "Real Project: Build a Business Website",
        topics: [
          "Planning your site structure",
          "Building header, hero, services, footer",
          "Adding a contact form",
          "Mobile testing",
        ],
      },
      {
        title: "Publishing Your Website",
        topics: [
          "Introduction to GitHub",
          "Deploying with GitHub Pages",
          "Custom domain basics",
          "Website maintenance tips",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 2,
    title: "Python Programming Basics",
    category: "Technology",
    categorySlug: "technology",
    level: "Beginner",
    durationWeeks: 4,
    price_usd: 2,
    description:
      "Learn Python programming from the ground up. Python is one of the most in-demand skills for data analysis, automation, and software development.",
    outcomes: [
      "Write Python scripts to automate everyday tasks",
      "Understand variables, loops, functions, and logic",
      "Read and write data from files and spreadsheets",
      "Build simple programs and command-line tools",
      "Use Python libraries like Pandas for data work",
      "Prepare for data science and automation careers",
    ],
    modules: [
      {
        title: "Introduction to Python",
        topics: [
          "What is Python and why learn it?",
          "Installing Python and a code editor",
          "Your first Python script",
          "Running Python on mobile devices",
        ],
      },
      {
        title: "Variables and Data Types",
        topics: [
          "Numbers, strings, and booleans",
          "Lists, tuples, and dictionaries",
          "Type conversion",
          "User input and print output",
        ],
      },
      {
        title: "Control Flow",
        topics: [
          "If/else statements",
          "For and while loops",
          "Nested conditions",
          "Break and continue",
        ],
      },
      {
        title: "Functions and Modules",
        topics: [
          "Defining and calling functions",
          "Parameters and return values",
          "Importing Python modules",
          "Building reusable code",
        ],
      },
      {
        title: "Working with Files",
        topics: [
          "Reading text and CSV files",
          "Writing output to files",
          "Error handling with try/except",
          "Working with paths",
        ],
      },
      {
        title: "Data with Pandas",
        topics: [
          "Introduction to Pandas library",
          "Loading spreadsheet data",
          "Filtering and sorting data",
          "Generating summaries",
        ],
      },
      {
        title: "Automation Projects",
        topics: [
          "Automating repetitive file tasks",
          "Sending automated reports",
          "Web scraping basics",
          "Scheduling scripts",
        ],
      },
      {
        title: "Final Project",
        topics: [
          "Build a personal budget tracker",
          "Process and summarize CSV data",
          "Present findings as a report",
          "Code review and best practices",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 3,
    title: "Data Analysis with Excel",
    category: "Technology",
    categorySlug: "technology",
    level: "Beginner",
    durationWeeks: 3,
    price_usd: 1,
    description:
      "Master Microsoft Excel for business data analysis, reporting, and decision-making. Used in virtually every office and business across Africa.",
    outcomes: [
      "Organise and clean large datasets efficiently",
      "Use formulas and functions for calculations",
      "Create professional charts and dashboards",
      "Build PivotTables and PivotCharts",
      "Analyse sales, financial, and operational data",
      "Present findings to managers and clients",
    ],
    modules: [
      {
        title: "Excel Fundamentals",
        topics: [
          "Spreadsheet structure and navigation",
          "Entering and formatting data",
          "Cell references and ranges",
          "Printing and saving files",
        ],
      },
      {
        title: "Core Formulas",
        topics: [
          "SUM, AVERAGE, MIN, MAX",
          "IF and nested IF statements",
          "VLOOKUP and HLOOKUP",
          "COUNT, COUNTA, COUNTIF",
        ],
      },
      {
        title: "Data Cleaning",
        topics: [
          "Removing duplicates",
          "Using TRIM and CLEAN",
          "Splitting and merging columns",
          "Data validation rules",
        ],
      },
      {
        title: "Charts and Visualisation",
        topics: [
          "Bar, line, and pie charts",
          "Formatting chart elements",
          "Sparklines for quick trends",
          "Choosing the right chart type",
        ],
      },
      {
        title: "PivotTables",
        topics: [
          "Creating a PivotTable",
          "Grouping and filtering data",
          "Calculated fields",
          "PivotCharts",
        ],
      },
      {
        title: "Dashboard Building",
        topics: [
          "Planning a dashboard layout",
          "Dynamic charts and slicers",
          "Conditional formatting",
          "Sharing and protecting workbooks",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 4,
    title: "Introduction to Cybersecurity",
    category: "Technology",
    categorySlug: "technology",
    level: "Beginner",
    durationWeeks: 3,
    price_usd: 2,
    description:
      "Understand the fundamentals of cybersecurity and learn how to protect yourself, your business, and your clients from online threats.",
    outcomes: [
      "Identify common cyber threats and attacks",
      "Secure personal and business accounts",
      "Understand how data breaches happen",
      "Set up basic security systems and firewalls",
      "Respond to and report security incidents",
      "Follow best practices for password and data safety",
    ],
    modules: [
      {
        title: "Introduction to Cybersecurity",
        topics: [
          "What is cybersecurity?",
          "Types of cyber threats in Africa",
          "Real-world attack examples",
          "Career opportunities in cybersecurity",
        ],
      },
      {
        title: "Protecting Your Accounts",
        topics: [
          "Strong passwords and password managers",
          "Two-factor authentication",
          "Phishing and social engineering",
          "Securing email and social media",
        ],
      },
      {
        title: "Network Security Basics",
        topics: [
          "How networks work",
          "Wi-Fi security and VPNs",
          "Firewalls and antivirus tools",
          "Safe browsing habits",
        ],
      },
      {
        title: "Data Protection",
        topics: [
          "Why data matters",
          "Encryption fundamentals",
          "Backup and recovery",
          "Data privacy laws in Africa",
        ],
      },
      {
        title: "Business Security",
        topics: [
          "Securing a small business",
          "Employee security training",
          "Handling a data breach",
          "Security policies and procedures",
        ],
      },
      {
        title: "Final Assessment",
        topics: [
          "Cybersecurity checklist review",
          "Practical security audit",
          "Report writing",
          "Exam preparation",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 5,
    title: "Small Business Startup",
    category: "Business",
    categorySlug: "business",
    level: "Beginner",
    durationWeeks: 3,
    price_usd: 1,
    description:
      "Learn how to start, register, and grow a profitable small business from idea to launch. Covers business planning, legal registration, marketing, and cash flow.",
    outcomes: [
      "Validate and develop your business idea",
      "Write a simple but effective business plan",
      "Register your business legally",
      "Set up basic accounting and record-keeping",
      "Market your business with a limited budget",
      "Manage growth and reinvest profits",
    ],
    modules: [
      {
        title: "Finding Your Business Idea",
        topics: [
          "Identifying market gaps in Africa",
          "Testing your business idea",
          "Competition analysis",
          "Choosing the right business model",
        ],
      },
      {
        title: "Business Planning",
        topics: [
          "Business plan structure",
          "Setting SMART goals",
          "Financial projections basics",
          "Risk assessment",
        ],
      },
      {
        title: "Legal Setup and Registration",
        topics: [
          "Business structures (sole trader, LLC)",
          "Registration process by country",
          "Tax obligations",
          "Licences and permits",
        ],
      },
      {
        title: "Funding Your Business",
        topics: [
          "Self-funding strategies",
          "Microfinance and local loans",
          "Grants for African entrepreneurs",
          "Investor pitch basics",
        ],
      },
      {
        title: "Marketing and Sales",
        topics: [
          "Understanding your target customer",
          "Low-cost marketing strategies",
          "Social media for small business",
          "Building customer loyalty",
        ],
      },
      {
        title: "Managing Operations",
        topics: [
          "Daily operations checklist",
          "Cash flow management",
          "Hiring first employees",
          "Scaling and growth planning",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 6,
    title: "Import & Export Trade Basics",
    category: "Business",
    categorySlug: "business",
    level: "Beginner",
    durationWeeks: 3,
    price_usd: 1,
    description:
      "Understand international trade and learn how to start an import/export business. Africa is full of trading opportunities — this course shows you how to navigate cross-border trade.",
    outcomes: [
      "Understand how international trade works",
      "Find profitable products to import or export",
      "Navigate customs, duties, and documentation",
      "Work with freight forwarders and logistics companies",
      "Price goods for profit and negotiate with suppliers",
      "Start a trading business with limited capital",
    ],
    modules: [
      {
        title: "Introduction to Trade",
        topics: [
          "How global trade works",
          "African trade blocs (AfCFTA, ECOWAS, EAC)",
          "Import vs. export business models",
          "Trade opportunities in Africa",
        ],
      },
      {
        title: "Finding Products and Suppliers",
        topics: [
          "Product research methods",
          "Finding suppliers online (Alibaba, TradeKey)",
          "Local sourcing opportunities",
          "Evaluating supplier reliability",
        ],
      },
      {
        title: "Trade Documentation",
        topics: [
          "Commercial invoice and packing list",
          "Certificate of origin",
          "Bill of lading and airway bill",
          "Import permits and health certificates",
        ],
      },
      {
        title: "Customs and Duties",
        topics: [
          "How customs clearance works",
          "Calculating import duties",
          "Working with customs brokers",
          "Avoiding common customs mistakes",
        ],
      },
      {
        title: "Shipping and Logistics",
        topics: [
          "Sea, air, and road freight options",
          "Working with freight forwarders",
          "Incoterms explained",
          "Shipping costs and timelines",
        ],
      },
      {
        title: "Starting Your Trade Business",
        topics: [
          "Registering a trading company",
          "Opening a business bank account",
          "Getting trade financing",
          "Building your first trade deal",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 7,
    title: "Sales & Negotiation Skills",
    category: "Business",
    categorySlug: "business",
    level: "Beginner",
    durationWeeks: 2,
    price_usd: 1,
    description:
      "Master the art of selling and negotiating deals in any business context. These skills will increase your income and close more deals — from market stalls to corporate sales.",
    outcomes: [
      "Understand what makes a great salesperson",
      "Use proven techniques to close sales",
      "Handle objections and difficult customers",
      "Negotiate prices and contract terms confidently",
      "Build long-term client relationships",
      "Apply sales strategies to African business contexts",
    ],
    modules: [
      {
        title: "Sales Fundamentals",
        topics: [
          "The sales process end-to-end",
          "Understanding buyer psychology",
          "Building trust quickly",
          "Different types of sales environments",
        ],
      },
      {
        title: "Finding and Qualifying Leads",
        topics: [
          "Where to find customers",
          "How to qualify a prospect",
          "Cold calling and cold outreach",
          "Referral strategies",
        ],
      },
      {
        title: "Presenting and Pitching",
        topics: [
          "Structuring a sales pitch",
          "Demonstrating value",
          "Storytelling in sales",
          "Pitching via phone and WhatsApp",
        ],
      },
      {
        title: "Handling Objections",
        topics: [
          "Common objections and responses",
          "The price objection",
          'The "I need to think about it" objection',
          "Turning no into yes",
        ],
      },
      {
        title: "Negotiation Techniques",
        topics: [
          "Preparation and BATNA",
          "Anchoring and concession strategies",
          "Win-win negotiation",
          "Closing techniques",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 8,
    title: "Social Media Marketing",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    level: "Beginner",
    durationWeeks: 3,
    price_usd: 1,
    description:
      "Grow any business using Facebook, Instagram, TikTok, and WhatsApp marketing. Learn to create content, run paid ads, and build an audience that turns followers into customers.",
    outcomes: [
      "Build and grow professional social media pages",
      "Create engaging content that attracts followers",
      "Run Facebook and Instagram paid ads profitably",
      "Use WhatsApp Business for customer management",
      "Analyse social media metrics and improve performance",
      "Manage social media for clients as a paid service",
    ],
    modules: [
      {
        title: "Social Media Landscape",
        topics: [
          "Which platforms work for which businesses",
          "Understanding the African social media audience",
          "Building a content strategy",
          "Creating platform-specific profiles",
        ],
      },
      {
        title: "Content Creation",
        topics: [
          "Writing captions that convert",
          "Creating graphics with Canva",
          "Video content for TikTok and Reels",
          "Content calendar planning",
        ],
      },
      {
        title: "Building an Audience",
        topics: [
          "Organic growth tactics",
          "Hashtag strategy",
          "Collaborations and influencer outreach",
          "Community engagement",
        ],
      },
      {
        title: "Paid Advertising",
        topics: [
          "Facebook and Instagram Ads basics",
          "Creating your first ad campaign",
          "Targeting the right audience",
          "Budget management and ROI",
        ],
      },
      {
        title: "WhatsApp Business",
        topics: [
          "Setting up WhatsApp Business",
          "Broadcast lists and catalogues",
          "Customer support on WhatsApp",
          "WhatsApp Ads integration",
        ],
      },
      {
        title: "Analytics and Reporting",
        topics: [
          "Reading insights and metrics",
          "Tracking conversions",
          "A/B testing content",
          "Monthly performance reporting",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 9,
    title: "Freelancing Online",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    level: "Beginner",
    durationWeeks: 2,
    price_usd: 1,
    description:
      "Earn income online by offering your skills on Upwork, Fiverr, and other platforms. Learn how to find clients, deliver great work, and grow your freelance income from anywhere in Africa.",
    outcomes: [
      "Set up a professional profile on Upwork and Fiverr",
      "Identify marketable skills and price your services",
      "Win your first client and deliver successfully",
      "Write proposals and respond to job postings",
      "Manage payments and client relationships",
      "Scale your freelance income over time",
    ],
    modules: [
      {
        title: "Introduction to Freelancing",
        topics: [
          "What is freelancing and why it works in Africa",
          "Top freelancing platforms compared",
          "High-demand skills in the global market",
          "Setting income goals",
        ],
      },
      {
        title: "Setting Up Your Profile",
        topics: [
          "Choosing a niche and service",
          "Writing a compelling profile bio",
          "Portfolio building from scratch",
          "Pricing your services",
        ],
      },
      {
        title: "Finding and Winning Clients",
        topics: [
          "Writing winning proposals",
          "Applying to job postings",
          "Gig creation for Fiverr",
          "Follow-up strategies",
        ],
      },
      {
        title: "Delivering and Growing",
        topics: [
          "Client communication best practices",
          "Meeting deadlines",
          "Getting 5-star reviews",
          "Upselling and retainer clients",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 10,
    title: "E-commerce Business",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    level: "Beginner",
    durationWeeks: 3,
    price_usd: 2,
    description:
      "Launch and run a profitable online store selling products across Africa and globally. Learn to set up a store, find products, handle payments, and market to customers on a tight budget.",
    outcomes: [
      "Launch an online store on Shopify or Jumia",
      "Find products to sell using dropshipping or local sourcing",
      "Accept mobile money and card payments",
      "Drive traffic with social media and search",
      "Handle orders, delivery, and returns",
      "Scale to a full-time e-commerce business",
    ],
    modules: [
      {
        title: "E-commerce Business Models",
        topics: [
          "Dropshipping vs. own inventory",
          "Selling on marketplaces vs. own store",
          "African e-commerce platforms overview",
          "Identifying profitable product categories",
        ],
      },
      {
        title: "Setting Up Your Store",
        topics: [
          "Creating a Shopify or WooCommerce store",
          "Product listings and photography tips",
          "Shipping zones and delivery options",
          "Store policies and customer trust",
        ],
      },
      {
        title: "Payments and Logistics",
        topics: [
          "Mobile money integration (M-Pesa, MTN)",
          "Card payment gateways",
          "Packaging and fulfilment",
          "Delivery partners in Africa",
        ],
      },
      {
        title: "Marketing Your Store",
        topics: [
          "Social media advertising for e-commerce",
          "Email marketing basics",
          "SEO for product pages",
          "Running promotions and discounts",
        ],
      },
      {
        title: "Operations and Scaling",
        topics: [
          "Inventory management",
          "Customer service systems",
          "Analysing store performance",
          "Expanding to new markets",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 11,
    title: "Solar Panel Installation",
    category: "Skilled Trades",
    categorySlug: "skilled-trades",
    level: "Intermediate",
    durationWeeks: 4,
    price_usd: 2,
    description:
      "Learn to install and maintain solar energy systems for homes and businesses. Solar energy is Africa's fastest growing industry — qualified installers are in high demand.",
    outcomes: [
      "Understand how solar power systems work",
      "Calculate energy needs and size a solar system",
      "Install solar panels, inverters, and batteries safely",
      "Wire and connect a complete off-grid system",
      "Troubleshoot and maintain solar installations",
      "Start a solar installation business",
    ],
    modules: [
      {
        title: "Solar Energy Fundamentals",
        topics: [
          "How solar panels generate electricity",
          "Types of solar systems (off-grid, on-grid, hybrid)",
          "Solar potential across Africa",
          "Industry careers and business opportunities",
        ],
      },
      {
        title: "System Design",
        topics: [
          "Energy consumption assessment",
          "Sizing panels, batteries, and inverters",
          "Reading solar irradiance maps",
          "Creating a system design document",
        ],
      },
      {
        title: "Components and Equipment",
        topics: [
          "Solar panel types and specifications",
          "Charge controllers (PWM vs MPPT)",
          "Battery types (lead-acid, lithium)",
          "Inverter selection and sizing",
        ],
      },
      {
        title: "Installation Procedures",
        topics: [
          "Mounting systems and roof types",
          "Wiring and cable sizing",
          "Electrical connections and safety",
          "Earthing and protection systems",
        ],
      },
      {
        title: "Commissioning and Testing",
        topics: [
          "System start-up procedures",
          "Testing voltage and current",
          "Battery bank commissioning",
          "Client handover and documentation",
        ],
      },
      {
        title: "Maintenance and Troubleshooting",
        topics: [
          "Routine maintenance schedules",
          "Common fault diagnosis",
          "Panel cleaning and inspection",
          "Warranty and replacement procedures",
        ],
      },
      {
        title: "Business Skills for Solar",
        topics: [
          "Quoting and costing a job",
          "Marketing solar services",
          "Sourcing equipment at good prices",
          "Managing a solar installation team",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 12,
    title: "Electrical Maintenance",
    category: "Skilled Trades",
    categorySlug: "skilled-trades",
    level: "Intermediate",
    durationWeeks: 4,
    price_usd: 2,
    description:
      "Understand electrical systems and perform safe maintenance and repairs in homes and commercial buildings. Qualified electricians earn good income and are always in demand.",
    outcomes: [
      "Read and interpret electrical wiring diagrams",
      "Install and repair lighting and power circuits",
      "Work safely with live and de-energised systems",
      "Test and diagnose electrical faults",
      "Install distribution boards and circuit breakers",
      "Pass basic electrical competency assessments",
    ],
    modules: [
      {
        title: "Electrical Safety",
        topics: [
          "Understanding electrical hazards",
          "Lockout/tagout procedures",
          "Personal protective equipment",
          "First aid for electrical accidents",
        ],
      },
      {
        title: "Electrical Theory",
        topics: [
          "Voltage, current, and resistance",
          "Ohm's Law and power calculations",
          "AC vs DC systems",
          "Single-phase and three-phase power",
        ],
      },
      {
        title: "Wiring and Circuits",
        topics: [
          "Cable types and selection",
          "Residential wiring layouts",
          "Ring main and radial circuits",
          "Switch and socket installation",
        ],
      },
      {
        title: "Lighting Systems",
        topics: [
          "Types of lighting (LED, fluorescent, CFL)",
          "Installing light fittings and switches",
          "Dimmer switches and sensors",
          "Emergency lighting",
        ],
      },
      {
        title: "Distribution Boards",
        topics: [
          "How a distribution board works",
          "Circuit breakers and fuses",
          "Installing a DB board",
          "Earth leakage protection",
        ],
      },
      {
        title: "Testing and Fault Finding",
        topics: [
          "Using a multimeter",
          "Insulation resistance testing",
          "Tracing and fixing faults",
          "Test report documentation",
        ],
      },
      {
        title: "Commercial Electrical Work",
        topics: [
          "Industrial wiring basics",
          "Three-phase motor connections",
          "Conduit installation",
          "Compliance and certification",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 13,
    title: "Plumbing Fundamentals",
    category: "Skilled Trades",
    categorySlug: "skilled-trades",
    level: "Beginner",
    durationWeeks: 4,
    price_usd: 2,
    description:
      "Learn plumbing installation, repairs, and water system management for residential and commercial buildings. A skilled plumber is always in demand.",
    outcomes: [
      "Understand how water supply and drainage systems work",
      "Install and repair taps, pipes, and fittings",
      "Read plumbing drawings and plans",
      "Fix common problems like leaks and blocked drains",
      "Install sanitary ware (toilets, basins, geysers)",
      "Quote and complete basic plumbing jobs",
    ],
    modules: [
      {
        title: "Plumbing Fundamentals",
        topics: [
          "How water supply systems work",
          "Drainage and waste systems",
          "Plumbing materials overview",
          "Tools of the trade",
        ],
      },
      {
        title: "Pipe Work",
        topics: [
          "Pipe types (PVC, copper, CPVC)",
          "Cutting, bending, and joining pipes",
          "Threading and soldering",
          "Pressure testing",
        ],
      },
      {
        title: "Water Supply Installations",
        topics: [
          "Cold water supply systems",
          "Hot water geysers and solar heating",
          "Stop valves and isolation",
          "Water meters and connections",
        ],
      },
      {
        title: "Drainage Systems",
        topics: [
          "Understanding fall and gradient",
          "Installing soil and waste pipes",
          "Traps and vents",
          "Inspection chambers",
        ],
      },
      {
        title: "Sanitary Ware",
        topics: [
          "Installing toilets and cisterns",
          "Basin and sink installation",
          "Shower and bath installation",
          "Sealing and waterproofing",
        ],
      },
      {
        title: "Maintenance and Repairs",
        topics: [
          "Diagnosing leaks and drips",
          "Clearing blocked drains",
          "Repairing burst pipes",
          "Geyser maintenance",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 14,
    title: "Modern Farming Techniques",
    category: "Agriculture",
    categorySlug: "agriculture",
    level: "Beginner",
    durationWeeks: 3,
    price_usd: 1,
    description:
      "Improve crop yields and farm profitability using modern, sustainable farming methods and technology. Designed for smallholder farmers and agricultural workers across Africa.",
    outcomes: [
      "Apply soil testing and soil health management",
      "Use precision irrigation to reduce water waste",
      "Control pests and diseases with minimum chemicals",
      "Improve crop yields using proven techniques",
      "Record farm data for better decision-making",
      "Access markets and sell produce at better prices",
    ],
    modules: [
      {
        title: "Soil Health and Fertility",
        topics: [
          "Soil types and pH testing",
          "Composting and organic matter",
          "Fertiliser management",
          "Preventing soil erosion",
        ],
      },
      {
        title: "Water Management",
        topics: [
          "Drip irrigation installation",
          "Rainwater harvesting",
          "Water scheduling and monitoring",
          "Irrigation for different crops",
        ],
      },
      {
        title: "Crop Production",
        topics: [
          "Seed selection and spacing",
          "Crop rotation and intercropping",
          "Greenhouse farming basics",
          "Record-keeping for crops",
        ],
      },
      {
        title: "Pest and Disease Control",
        topics: [
          "Common pests and diseases in Africa",
          "Integrated pest management",
          "Safe use of pesticides",
          "Biological control methods",
        ],
      },
      {
        title: "Post-Harvest Management",
        topics: [
          "Harvesting at right maturity",
          "Post-harvest losses and solutions",
          "Storage techniques",
          "Grading and packaging for markets",
        ],
      },
      {
        title: "Market Access",
        topics: [
          "Finding buyers for your produce",
          "Cooperatives and farmer groups",
          "Digital market platforms",
          "Understanding contracts and prices",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 15,
    title: "Poultry Farming Business",
    category: "Agriculture",
    categorySlug: "agriculture",
    level: "Beginner",
    durationWeeks: 3,
    price_usd: 1,
    description:
      "Start and manage a profitable poultry farm — broilers or layers — with this practical course. Poultry farming is one of the fastest ways to generate income from agriculture.",
    outcomes: [
      "Set up a poultry house with proper ventilation",
      "Select the right breeds for your market",
      "Manage feeding, watering, and nutrition",
      "Control disease and maintain biosecurity",
      "Track income and expenses for profitability",
      "Market and sell eggs and broilers profitably",
    ],
    modules: [
      {
        title: "Introduction to Poultry Farming",
        topics: [
          "Types of poultry enterprises (broilers, layers, indigenous)",
          "Market opportunities in Africa",
          "Start-up capital requirements",
          "Site selection and housing basics",
        ],
      },
      {
        title: "Housing and Equipment",
        topics: [
          "Poultry house construction basics",
          "Ventilation and lighting requirements",
          "Feeders and drinkers",
          "Brooding equipment for chicks",
        ],
      },
      {
        title: "Flock Management",
        topics: [
          "Buying day-old chicks",
          "Brooding temperature management",
          "Feeding programmes by age",
          "Water quality and biosecurity",
        ],
      },
      {
        title: "Health and Disease Control",
        topics: [
          "Common poultry diseases in Africa",
          "Vaccination programmes",
          "Recognising sick birds",
          "Biosecurity protocols",
        ],
      },
      {
        title: "Financial Management",
        topics: [
          "Cost of production calculation",
          "Break-even analysis",
          "Record-keeping templates",
          "Accessing agricultural loans",
        ],
      },
      {
        title: "Marketing and Sales",
        topics: [
          "Selling to markets, hotels, and restaurants",
          "Egg grading and packaging",
          "Building repeat buyers",
          "Value-added products",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 16,
    title: "Agribusiness Management",
    category: "Agriculture",
    categorySlug: "agriculture",
    level: "Intermediate",
    durationWeeks: 3,
    price_usd: 2,
    description:
      "Learn to manage agricultural enterprises and connect farms to markets. This course bridges farming knowledge and business skills for farmers looking to scale up.",
    outcomes: [
      "Write a business plan for an agricultural venture",
      "Manage farm finances and cash flow",
      "Understand agricultural value chains",
      "Access financing for farm expansion",
      "Negotiate contracts with buyers and suppliers",
      "Build a sustainable agribusiness operation",
    ],
    modules: [
      {
        title: "Agribusiness Overview",
        topics: [
          "What is agribusiness?",
          "Value chains in African agriculture",
          "Opportunities in agro-processing",
          "Key success factors",
        ],
      },
      {
        title: "Business Planning for Farming",
        topics: [
          "Writing an agribusiness plan",
          "Market research for agricultural products",
          "SWOT analysis",
          "Setting financial targets",
        ],
      },
      {
        title: "Farm Financial Management",
        topics: [
          "Farm income and expense tracking",
          "Cash flow planning",
          "Break-even and profitability analysis",
          "Tax considerations for farmers",
        ],
      },
      {
        title: "Supply Chain and Logistics",
        topics: [
          "Understanding agricultural supply chains",
          "Working with processors and wholesalers",
          "Cold chain management",
          "Export opportunities",
        ],
      },
      {
        title: "Financing and Investment",
        topics: [
          "Agricultural loans and grants",
          "Investor pitch for farming",
          "Cooperative financing models",
          "Government support programmes",
        ],
      },
      {
        title: "Scaling and Growth",
        topics: [
          "Moving from subsistence to commercial farming",
          "Hiring and managing farm workers",
          "Technology adoption",
          "Entering export markets",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 17,
    title: "Community Health Worker",
    category: "Healthcare",
    categorySlug: "healthcare",
    level: "Beginner",
    durationWeeks: 4,
    price_usd: 2,
    description:
      "Deliver basic healthcare services and health education in your community. Community health workers are the backbone of African healthcare and can earn income in the health sector.",
    outcomes: [
      "Conduct basic health assessments in the community",
      "Educate community members on disease prevention",
      "Support mothers and children with health information",
      "Recognise and refer emergency cases appropriately",
      "Collect and report community health data",
      "Work effectively with clinics and hospitals",
    ],
    modules: [
      {
        title: "Role of the Community Health Worker",
        topics: [
          "What CHWs do and why they matter",
          "Working within the health system",
          "Community health ethics",
          "Building trust in the community",
        ],
      },
      {
        title: "Communicable Disease Prevention",
        topics: [
          "Malaria prevention and treatment",
          "HIV/AIDS education and testing",
          "Tuberculosis awareness",
          "Waterborne diseases",
        ],
      },
      {
        title: "Maternal and Child Health",
        topics: [
          "Antenatal care basics",
          "Safe delivery and postnatal care",
          "Child immunisation schedules",
          "Malnutrition identification",
        ],
      },
      {
        title: "Non-Communicable Diseases",
        topics: [
          "Diabetes and hypertension basics",
          "Screening and referral",
          "Lifestyle counselling",
          "Mental health awareness",
        ],
      },
      {
        title: "First Aid and Emergency Response",
        topics: [
          "Basic life support",
          "Wound care and bleeding control",
          "Shock management",
          "Referral protocols",
        ],
      },
      {
        title: "Health Data and Reporting",
        topics: [
          "Community health registers",
          "Data collection methods",
          "Monthly reporting forms",
          "Using mobile health tools",
        ],
      },
      {
        title: "Community Outreach",
        topics: [
          "Planning health campaigns",
          "Health talks and demonstrations",
          "Working with traditional leaders",
          "School health programmes",
        ],
      },
    ],
    isAvailable: true,
  },
  {
    id: 18,
    title: "Nursing Assistant Basics",
    category: "Healthcare",
    categorySlug: "healthcare",
    level: "Beginner",
    durationWeeks: 4,
    price_usd: 2,
    description:
      "Learn fundamental nursing care skills to support patients and healthcare teams in hospitals, clinics, and homes. Nursing assistants are in high demand across Africa.",
    outcomes: [
      "Provide safe and compassionate patient care",
      "Assist with personal hygiene and daily activities",
      "Monitor and record vital signs accurately",
      "Understand infection prevention and control",
      "Communicate effectively with patients and nurses",
      "Work in hospital, clinic, and home care settings",
    ],
    modules: [
      {
        title: "Introduction to Nursing Care",
        topics: [
          "Role of the nursing assistant",
          "Healthcare team structure",
          "Patient rights and dignity",
          "Healthcare ethics",
        ],
      },
      {
        title: "Infection Prevention",
        topics: [
          "Hand hygiene and PPE",
          "Standard precautions",
          "Waste disposal",
          "Sterile technique basics",
        ],
      },
      {
        title: "Personal Care Skills",
        topics: [
          "Bed bathing techniques",
          "Oral hygiene",
          "Positioning and pressure ulcer prevention",
          "Mobility and transfer assistance",
        ],
      },
      {
        title: "Vital Signs Monitoring",
        topics: [
          "Measuring temperature, pulse, breathing",
          "Blood pressure recording",
          "Oxygen saturation",
          "Reporting abnormal findings",
        ],
      },
      {
        title: "Patient Nutrition and Feeding",
        topics: [
          "Basic nutritional needs",
          "Assisting with meals",
          "Tube feeding assistance",
          "Fluid balance recording",
        ],
      },
      {
        title: "Common Health Conditions",
        topics: [
          "Wound care basics",
          "Caring for diabetic patients",
          "Elderly care challenges",
          "Mental health care awareness",
        ],
      },
      {
        title: "Communication and Documentation",
        topics: [
          "Patient communication skills",
          "Nurse handover reporting",
          "Writing care notes",
          "Electronic health records basics",
        ],
      },
    ],
    isAvailable: true,
  },
  // COMING SOON
  {
    id: 101,
    title: "AI Programming",
    category: "Technology",
    categorySlug: "technology",
    level: "Advanced",
    durationWeeks: 6,
    price_usd: 3,
    description: "Build intelligent applications using modern AI frameworks.",
    outcomes: [],
    modules: [],
    isAvailable: false,
  },
  {
    id: 102,
    title: "Machine Learning",
    category: "Technology",
    categorySlug: "technology",
    level: "Advanced",
    durationWeeks: 6,
    price_usd: 3,
    description:
      "Learn machine learning algorithms applied to real-world problems.",
    outcomes: [],
    modules: [],
    isAvailable: false,
  },
  {
    id: 103,
    title: "Cloud Computing",
    category: "Technology",
    categorySlug: "technology",
    level: "Intermediate",
    durationWeeks: 5,
    price_usd: 3,
    description: "Master cloud platforms like AWS, Azure, and Google Cloud.",
    outcomes: [],
    modules: [],
    isAvailable: false,
  },
  {
    id: 104,
    title: "Mobile App Development",
    category: "Technology",
    categorySlug: "technology",
    level: "Intermediate",
    durationWeeks: 6,
    price_usd: 3,
    description:
      "Build Android and iOS mobile apps and publish them to app stores.",
    outcomes: [],
    modules: [],
    isAvailable: false,
  },
  {
    id: 105,
    title: "Blockchain Basics",
    category: "Technology",
    categorySlug: "technology",
    level: "Intermediate",
    durationWeeks: 4,
    price_usd: 2,
    description:
      "Understand blockchain technology and decentralised applications.",
    outcomes: [],
    modules: [],
    isAvailable: false,
  },
  {
    id: 106,
    title: "Advanced Accounting",
    category: "Business",
    categorySlug: "business",
    level: "Intermediate",
    durationWeeks: 4,
    price_usd: 2,
    description:
      "Master advanced accounting principles for business financial management.",
    outcomes: [],
    modules: [],
    isAvailable: false,
  },
  {
    id: 107,
    title: "Logistics Management",
    category: "Business",
    categorySlug: "business",
    level: "Intermediate",
    durationWeeks: 4,
    price_usd: 2,
    description:
      "Manage supply chains, transport, and delivery operations efficiently.",
    outcomes: [],
    modules: [],
    isAvailable: false,
  },
  {
    id: 108,
    title: "Supply Chain Management",
    category: "Business",
    categorySlug: "business",
    level: "Intermediate",
    durationWeeks: 4,
    price_usd: 2,
    description: "Optimise end-to-end supply chain processes.",
    outcomes: [],
    modules: [],
    isAvailable: false,
  },
  {
    id: 110,
    title: "Automotive Repair",
    category: "Skilled Trades",
    categorySlug: "skilled-trades",
    level: "Intermediate",
    durationWeeks: 5,
    price_usd: 2,
    description:
      "Diagnose and repair vehicles with hands-on practical training.",
    outcomes: [],
    modules: [],
    isAvailable: false,
  },
  {
    id: 111,
    title: "Construction Management",
    category: "Skilled Trades",
    categorySlug: "skilled-trades",
    level: "Intermediate",
    durationWeeks: 5,
    price_usd: 2,
    description: "Manage construction projects, timelines, and teams.",
    outcomes: [],
    modules: [],
    isAvailable: false,
  },
  {
    id: 112,
    title: "Welding",
    category: "Skilled Trades",
    categorySlug: "skilled-trades",
    level: "Beginner",
    durationWeeks: 4,
    price_usd: 2,
    description:
      "Master welding techniques for metal fabrication and construction.",
    outcomes: [],
    modules: [],
    isAvailable: false,
  },
  {
    id: 114,
    title: "Medical Coding",
    category: "Healthcare",
    categorySlug: "healthcare",
    level: "Intermediate",
    durationWeeks: 5,
    price_usd: 2,
    description:
      "Learn medical billing and coding for healthcare administration.",
    outcomes: [],
    modules: [],
    isAvailable: false,
  },
  {
    id: 115,
    title: "Pharmacy Assistant",
    category: "Healthcare",
    categorySlug: "healthcare",
    level: "Beginner",
    durationWeeks: 4,
    price_usd: 2,
    description:
      "Support pharmacists in dispensing medications and advising patients.",
    outcomes: [],
    modules: [],
    isAvailable: false,
  },
];

export const CATEGORIES = [
  {
    name: "Technology",
    slug: "technology",
    icon: "💻",
    description: "Web, Python, data, cybersecurity and more",
  },
  {
    name: "Business",
    slug: "business",
    icon: "📊",
    description: "Entrepreneurship, trade, and business skills",
  },
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    icon: "📱",
    description: "Social media, e-commerce, and freelancing",
  },
  {
    name: "Skilled Trades",
    slug: "skilled-trades",
    icon: "🔧",
    description: "Solar, electrical, plumbing, and more",
  },
  {
    name: "Agriculture",
    slug: "agriculture",
    icon: "🌱",
    description: "Modern farming and agribusiness",
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: "🏥",
    description: "Community health and nursing skills",
  },
];
