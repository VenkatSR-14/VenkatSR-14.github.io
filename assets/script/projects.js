const ProjectsData = [
  {
    name: "CodeQuest",
    logo: "https://img.icons8.com/?size=100&id=EflQ9G9aeEKX&format=png&color=000000",
    description:
      "A cutting-edge platform empowering developers to enhance their coding skills through problem-solving and real-time code evaluation. Built with Java, Microservices, PostgreSQL, React.js, and TailwindCSS.",
    link: "https://github.com/VenkatSR-14/CodeQuest", // Replace with the actual link when available
  },
  {
    name: "Real-Time Online Multiplayer Chess Game",
    logo: "https://img.icons8.com/?size=100&id=36032&format=png&color=000000",
    description:
      "A distributed online chess game featuring real-time synchronization and scalability. Built using React, .NET Core, Socket.io, and Redis.",
    link: "https://github.com/VenkatSR-14/Online-Multiplayer-Chess-Game", // Replace with the actual link when available
  },
  {
    name: "CodeSage",
    logo: "https://img.icons8.com/?size=100&id=Yb9JrzoPrVF4&format=png&color=000000",
    description:
      "A platform that provides automated code reviews and optimization suggestions using personalized fine tuned LLMs and GPT",
    link: "https://github.com/VenkatSR-14/Codesage", // Replace with the actual link when available
  },
  {
    name: "Video-to-Mp3 Converter",
    logo: "https://img.icons8.com/?size=100&id=E4pQFsDiWJli&format=png&color=000000",
    description:
      "A platform built using the microservices architecture to convert a video to MP3 format",
    link: "https://github.com/VenkatSR-14/python-microservices-app", // Replace with the actual link when available
  },
  {
    name: "Vist Github for More",
    logo: "https://img.icons8.com/?size=100&id=43227&format=png&color=000000",
    description:
      "Check out my Deep learning, Machine learning projects which I did for learning model architectures!",
    link: "https://github.com/VenkatSR-14?tab=repositories", // Replace with the actual link when available
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
