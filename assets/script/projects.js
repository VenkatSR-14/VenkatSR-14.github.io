const ProjectsData = [
  {
    name: "CodeQuest",
    logo: "https://cdn-icons-png.flaticon.com/128/2917/2917995.png",
    description:
      "A cutting-edge platform empowering developers to enhance their coding skills through problem-solving and real-time code evaluation. Built with Java, Microservices, PostgreSQL, React.js, and TailwindCSS.",
    link: "#", // Replace with the actual link when available
  },
  {
    name: "Real-Time Online Multiplayer Chess Game",
    logo: "https://cdn-icons-png.flaticon.com/128/3076/3076767.png",
    description:
      "A distributed online chess game featuring real-time synchronization and scalability. Built using React, Node.js, Socket.io, and Redis.",
    link: "#", // Replace with the actual link when available
  },
  {
    name: "CodeSage",
    logo: "https://cdn-icons-png.flaticon.com/128/3059/3059995.png",
    description:
      "A platform for learning, practicing, and evaluating coding skills with real-time problem solving and machine learning insights.",
    link: "#", // Replace with the actual link when available
  },
];

const ProjectsDataHTML = ProjectsData.map(
  (item) => `
           <div class="projects-card">
            <div>
              <img loading="lazy" src="${item.logo}" alt="${item.name}">
              <h3>${item.name}</h3>
            </div>
            <div>
              <p>${item.description}</p>
              <a href="${item.link}" title="${item.name}" target="_blank">View</a>
            </div>
          </div>
      `
).join("");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML =
    ProjectsDataHTML;
});
