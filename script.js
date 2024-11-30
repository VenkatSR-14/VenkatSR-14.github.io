document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            name: "CodeSage",
            description: "A smart coding assistant powered by AI, helping developers write better code.",
            url: "https://github.com/yourusername/codesage"
        },
        {
            name: "CodeQuest",
            description: "An interactive platform for practicing competitive programming.",
            url: "https://github.com/yourusername/codequest"
        },
        {
            name: "Chess Game",
            description: "A feature-rich chess platform with analytics and AI-powered opponents.",
            url: "https://github.com/yourusername/chessgame"
        }
    ];

    const projectList = document.getElementById('projects-list');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank" class="btn">View Project</a>
        `;
        projectList.appendChild(projectDiv);
    });
});
