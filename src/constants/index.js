import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python3,
  django,
  fastapi,
  mysql,
  postgresql,
  bootstrap,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  github_logo,
  supabase,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,          
  web_development, 
  back_end,
  pyshop,
  omdena,
  sowphie,
  exploreai,
  gd,
  kbc,
  omdena_logo,
  sowphie_logo,
  streamlit_logo,
  zedaxis,
  jupyter,
  linto,
  edward,        
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web_development,
  },
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Backend Developer",
    icon: back_end,
  },
  {
    title: "Continuous Learner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python3,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "Jupyter Notebook",
    icon: jupyter,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github_logo,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Gamma Delta East Africa Ltd.",
    icon: gd,
    iconBg: "#383E56",
    date: "April 2017 - October 2017",
    points: [
      "Influenced in design and revision of electrical drawings using Auto-CAD that enabled sound drawings for site work.",
      "Influenced in the preparation of Bill of Quantities, Estimates and Load Analysis which aided in resource allocation during budgeting.",
      "Suggested and oversaw the design of a Lightening Protection System in a hospital building in Mathare which aided in ensuring future occurrences of lightening did not have an adverse effect on the building.",
    ],
  },
  {
    title: "Lead Graduate Engineer, Electrical Department",
    company_name: "ZedAxis Architecture and Design",
    icon: zedaxis,
    iconBg: "#383E56",
    date: "February 2018 - July 2019",
    points: [
      "Designed all electrical schematic drawings for our various client needs and specifications with the aim of drafting a schematic plan for contractors as well as offering a bill of quantities for cost estimates for site work.",
      "Strategized with consultants from other professions in Architecture, Landscape Architecture, Interior Design, Structural Engineering and Mechanical across various typologies of projects with the aim of delivering sound designs based on client needs thus delivering the intended consequences on site.",
      "Conducted electrical load analysis that would form as advisory to clients on choosing different backup power options such as generators or solar energy systems.",
    ],
  },
  {
    title: "Assistant Project Manager",
    company_name: "ZedAxis Architecture and Design",
    icon: zedaxis,
    iconBg: "#383E56",
    date: "February 2021 - April 2021",
    points: [
      "Executed all directives from the lead Project Manager to ensure daily deliverables were met on site.",
      "Managed all technicians and subcontractors on site on behalf of the lead Project Manager which allowed him to engage more effectively on a one-on-one basis with the client without distraction from daily operations.",
      "Managed all material inventory on a daily and weekly basis which enabled planning of purchasing and delivering necessary materials on site as when needed.",
      " Prepared weekly reports on progress and work schedules for all technicians on site with the aim of keeping the client apprised.",
    ],
  },
  {
    title: "Technician in Technical Department",
    company_name: "Kenya Broadcasting Corporation (KBC).",
    icon: kbc,
    iconBg: "#383E56",
    date: "November 2022 - April 2023",
    points: [
      "Strategized with the radio department to provide DSTV connection to all vernacular radio stations within KBC for radio presenters to commentate on the FIFA World Cup 2022.",
      "Performed all active maintenance of all radio equipment that ensured the proper running of all radio equipment and broadcast apparatus.",
      "Monitored radio signals from the Control Apparatus Room and responded to any hiccups raised by presenters that ensuring broadcast signals remained on air.",
    ],
  },
  {
    title: "Career Break",
    company_name: "ExploreAI Academy",
    icon: exploreai,
    iconBg: "#E6DEDD",
    date: "May 2023 - August 2024",
    points: [
      "Took time to pursue studies in Data Science offered by ExploreAI Academy.",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company_name: "Omdena",
    icon: omdena_logo,
    iconBg: "#383E56",
    date: "August 2024 - October 2024",
    points: [
      "Was a key contributor as a Junior ML Engineer for the entire data cycle phase of the 'Impact of Climate Change on Maize Agricultural Yield in Kenya' project (Nakuru chapter).",
      "Collaborated with a core team of 10 data professionals ranging from recent graduates to PhD statisticians in data collection, processing, and analysis.",
      "Conducted climate change analysis and yield analysis across 47 counties in Kenya.",
      "Contributed to descriptive analysis documentation.",
    ],
  },
  {
    title: "Back-end Developer",
    company_name: "Sowphie",
    icon: sowphie_logo,
    iconBg: "#E6DEDD",
    date: "April 2025 - January 2026",
    points: [
      "Collaborated with a team of 3 developers in designing the back-end logic and APIs (estimate of about 140 endpoints) for the bookkeeping feature of the Sowphie app, using prompt engineering and FastAPI as a framework.",
      "Part of a two-person team effort in designing the database architecture of the Sowphie app deployed on Supabase.",
      "Collaborated with a team of 3 developers, responsible for API testing.",
      "Responsible for cleaning and organizing the back-end code base into relevant files (routers, models, service (business logic) and schema files).",
      "Responsible for all API documentation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Collins on the 'Impact of Climate Change on Maize Agricultural Yield in Kenya' project. He demonstrated strong data analysis skills and consistently stepped up to take on critical tasks, showcasing his proactive approach and dedication. Collins’ commitment to delivering accurate and insightful analyses greatly contributed to our success.",
    name: "Linto N S",
    designation: "AI & ML Engineer",
    company: "Citi",
    image: linto,
  },
  {
    testimonial:
      "Mr. Ikiara is a dedicated team player, who thrives in lifelong learning. He is very methodical in his approach to tasks and is an excellent critical thinker. One of the strengths I have particularly enjoyed is his analytical input from a managerial perspective. Additionally, his boldness in tackling something new is admirable, with an unwavering commitment to learn and deliver. He is quite an asset.",
    name: "Edward Njiru",
    designation: "Co-founder | UXer",
    company: "Sowphie",
    image: edward,
  },
];

const projects = [
  {
    name: "Sowphie",
    description:
      "Sowphie is the product I built working as part of the backend team. The key feature within the Sowphie app outlines the bookkeeping microservice of the farm management application, designed specifically for commercial farmers to efficiently manage and track their agricultural operations. Click the link to go to the official website.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: sowphie,
    source_code_link: "https://sowphie.io/",
    source_code_icon: sowphie_logo,  
    icon_bg: "#3B4A1F",
  },
  {
    name: "Impact of Climate Change on Maize Yield in Kenya",
    description:
      "Web Application built as a collaborative Machine Learning project I did with other collaborators, investigating the impact of climate change on maize yield in Kenya, using time-series analysis. Click the link to test out the application.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "jupyter notebooks",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: omdena,
    source_code_link: "https://omdena-maize-agricultural-yield-in-kenya.streamlit.app/",
    source_code_icon: streamlit_logo, 
    icon_bg: "#FF4B4B",
  },
  {
    name: "PyShop",
    description:
      "A simple E-commerce website I built using Python, Bootstrap and the Django framework, for displaying available fruit produce and their prices",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: pyshop,
    source_code_link: "https://github.com/",
    source_code_icon: github,         
    icon_bg: "#000000",
  },
];

export { services, technologies, experiences, testimonials, projects };
