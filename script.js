document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            name: "ChessMaster",
            description: "A chess game platform with AI-powered analytics.",
            url: "https://github.com/yourusername/chessmaster"
        },
        {
            name: "CodeQuest",
            description: "A LeetCode-inspired coding platform.",
            url: "https://github.com/yourusername/codequest"
        },
        {
            name: "AI Scribbler",
            description: "An app that generates creative AI-written stories.",
            url: "https://github.com/yourusername/aiscribbler"
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
