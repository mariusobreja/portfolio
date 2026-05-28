export const siteData = {
  name: 'Marius Obreja',
  title: 'Software Engineer',
  tagline: 'I build things for the web.',
  subtitle:
    'Software Engineer with 5+ years of experience across the full stack — from pixel-perfect React UIs and canvas rendering with Pixi.js, to Node.js services, AI integrations, and cloud deployments.',
  languages: 'English · Romanian · Spanish',
  location: 'London / Northampton, UK',
  email: 'marius.obreja9@gmail.com',
  phone: '07543 183 017',
  linkedin: 'https://linkedin.com/in/mariusobreja',
  github: 'https://github.com/',
  availability: 'Open to opportunities',

  about: [
    "I'm a Software Engineer with a strong frontend foundation and genuine full-stack exposure — comfortable across React, Node.js, canvas rendering, backend services, and AI integrations. I take full ownership of features from technical spike through to production release.",
    "I've pioneered AI integrations that became defining product capabilities, led technical interviews, and collaborated closely with Product Owners and QA teams in cross-functional squads of 20+. I ramp up quickly on new technologies and care deeply about clean, maintainable code.",
    'Before engineering, I spent five years as Managing Director of a recruitment firm — giving me an unusual edge in communication, stakeholder management, and commercial thinking that feeds directly into how I approach product work.',
  ],

  highlights: [
    {
      title: 'Frontend & Canvas',
      body: 'Deep experience in React, TypeScript, and Pixi.js — building rich, performant interfaces including interactive canvas layers.',
    },
    {
      title: 'AI Integration',
      body: 'Pioneered the first OpenAI API integration at StructureFlow, designing scripts and the user-facing interface — a feature that became central to the product.',
    },
    {
      title: 'Full Ownership',
      body: "End-to-end delivery of 10+ features across backend, frontend, QA, and release — not just a ticket-taker, but a technical driver.",
    },
    {
      title: 'Leadership Background',
      body: 'Five years as MD before engineering — brings commercial depth, people skills, and strategic thinking to every team.',
    },
  ],

  skillGroups: [
    {
      label: 'Frontend',
      skills: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Angular', 'Pixi.js', 'Fluent UI'],
    },
    {
      label: 'Backend',
      skills: ['Node.js', 'Express', 'Koa', 'REST APIs', 'OpenAI API', 'Auth0', 'Stripe'],
    },
    {
      label: 'Data & Cloud',
      skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Sequelize', 'AWS', 'Netlify', 'Vercel'],
    },
    {
      label: 'Process & Tools',
      skills: ['Git', 'Agile', 'Scrum', 'TDD', 'Figma', 'Jest', 'Technical Interviews'],
    },
  ],

  experience: [
    {
      role: 'Frontend Developer (React.js)',
      company: 'StructureFlow',
      location: 'London',
      period: 'Jun 2022 – Jun 2026 · 4 yrs',
      bullets: [
        'Worked in a cross-functional engineering team of 20, contributing primarily to the frontend and canvas layer using Pixi.js, Fluent UI, and TypeScript.',
        'Took full ownership of 10+ features end-to-end — from technical spike through to production release.',
        "Pioneered the company's first OpenAI API integration, designing the underlying scripts and building the user-facing interface — a feature that became a transformative product capability.",
        'Participated in the technical interviewing process for new engineering hires.',
        'Collaborated closely with Product Owners and QA, sometimes hands-on, to ensure quality delivery.',
      ],
      stack: 'React.js, TypeScript, Pixi.js, Fluent UI, Node.js, OpenAI API',
      dimmed: false,
    },
    {
      role: 'Software Developer',
      company: 'BYP Network',
      location: 'London',
      period: 'Oct 2021 – May 2022 · 8 mos',
      bullets: [
        'Part of a team of 4 responsible for design, development, deployment, and maintenance of internal software.',
        'Led the migration of no-code applications into fully in-house solutions, improving reliability and scalability.',
        'Built a third-party tracker from scratch, taking full ownership post-deployment including QA and iterative improvements based on stakeholder feedback.',
        'Wrote clean, reusable, testable code following TDD principles within an agile workflow.',
      ],
      stack: 'JavaScript, Node.js, MongoDB, AWS, GitHub',
      dimmed: false,
    },
    {
      role: 'Software Engineer',
      company: 'Adventour',
      location: 'London',
      period: '2021',
      bullets: [
        'Contributed to Adventour, a React Native app reimagining how people explore new places.',
        'Responsible for back-end architecture including database and server structure, in-app algorithms, and API integration.',
        'Implemented authentication, registration, and checkout functionality on the frontend.',
      ],
      stack: 'TypeScript, Node.js, React Native, Redux, PostgreSQL, Sequelize, Stripe, Auth0, Expo, Express, Heroku',
      dimmed: false,
    },
    {
      role: 'Software Engineer',
      company: 'Movie Mapper',
      location: 'London',
      period: '2020 – 2021 · 1 yr',
      bullets: [
        'Joined a 2-person team working on legacy code for a web app for discovering and pinning famous movie locations.',
        'Analysed the existing codebase, planned and implemented a full test suite across frontend and backend.',
        'Refactored the frontend progressively from Ruby through JavaScript to TypeScript, significantly improving reliability and maintainability.',
      ],
      stack: 'TypeScript, React Native, Express, Jest',
      dimmed: false,
    },
    {
      role: 'Managing Director',
      company: 'Made Recruitment',
      location: 'Northampton',
      period: '2015 – 2020 · 5 yrs',
      bullets: [
        'Oversaw end-to-end operations across two offices, leading on client relationships, new business development, and long-term strategic planning.',
        'Recruited, developed, and retained a team of consultants, sales staff, and an operations director.',
      ],
      stack: '',
      dimmed: true,
    },
  ],

  projects: [
    {
      num: '01',
      title: 'StructureFlow — OpenAI Integration',
      desc: "Pioneered the company's first AI feature — designed the underlying OpenAI API scripts and built the full user-facing interface. The feature became a defining capability of the product.",
      tech: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Pixi.js'],
      github: '',
      demo: '',
    },
    {
      num: '02',
      title: 'Players Bazaar',
      desc: 'Full-stack e-commerce web app facilitating the purchase of football players. Built the complete frontend and backend including user registration, login, player search, and secure Stripe checkout.',
      tech: ['React', 'Node.js', 'Stripe', 'Auth0', 'MongoDB', 'Netlify'],
      github: 'https://github.com/',
      demo: 'https://playersbazaar.netlify.app',
    },
    {
      num: '03',
      title: 'Adventour',
      desc: 'React Native mobile app reimagining how people explore new places. Responsible for back-end architecture, in-app algorithms, API integration, authentication, and Stripe checkout.',
      tech: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Auth0', 'Expo'],
      github: 'https://github.com/',
      demo: '',
    },
  ],
}
