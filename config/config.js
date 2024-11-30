import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

export const navigation = {
  name: "Venkat Srinivasa Raghavan",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ],
};

export const intro = {
  title: "Hey, I'm Venkat",
  description: "A Software Developer and Data Scientist creating scalable and impactful solutions.",
  image: profile,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://venkatsr-14.github.io/resume.pdf", // Replace with your actual resume link
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "I am currently pursuing my Master's in Data Science at Northeastern University, Boston. With a strong foundation in scalable system design and software engineering, I have worked on impactful projects during my time at Airbus and through personal initiatives.",
    "Beyond coding, I am passionate about competitive programming, chess, and badminton. I enjoy participating in coding competitions, strategizing in chess, and staying active on the court.",
    "I love learning new technologies, mentoring peers, and exploring creative solutions to complex problems.",
  ],
};

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Software Development",
      description: "I create scalable, efficient systems and web apps using Python, JavaScript, and Java.",
      icons: null,
    },
    {
      title: "Machine Learning",
      description: "I build intelligent systems using frameworks like TensorFlow and PyTorch.",
      icons: null,
    },
    {
      title: "Competitive Programming",
      description: "I solve challenging problems on platforms like LeetCode and Codeforces.",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "CodeSage",
      description: "An AI-powered code review platform helping developers write better code.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/VenkatSR-14/Codesage",
        },
      ],
    },
    {
      title: "CodeQuest",
      description: "An interactive competitive programming platform with real-time analytics.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/VenkatSR-14/CodeQuest",
        },
      ],
    },
    {
      title: "Chess Game",
      description: "A multiplayer chess platform with AI-powered analytics.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/VenkatSR-14/Online-Multiplayer-Chess-Game",
        },
      ],
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description: "Feel free to reach out for collaborations or just a quick chat! You can email me or schedule a meeting below.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:sraghavanvenkat@gmail.com",
      isPrimary: true,
    },
  ],
};

// SEARCH ENGINE 
export const SEO = {
  title: "Venkat Srinivasa Raghavan | Software Developer | Data Scientist | ML Engineer",
  description: "A passionate software developer and data scientist specializing in scalable systems and intelligent solutions.",
  image: profile,
};

export const links = {
  image: profile,
  title: "@venkat_srinivasa",
  description: "Software Developer | Data Scientist | ML Engineer",
  cards: [
    {
      title: "My Website",
      link: "https://venkatsrinivasa.com/", // Replace with your personal website link
    },
    {
      title: "CodeSage on GitHub",
      link: "https://github.com/VenkatSR-14/Codesage",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/venkat-srinivasa-raghavan-36317b123/", // Replace with your LinkedIn profile
    }
  ],
};
