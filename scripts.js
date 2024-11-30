document.addEventListener("DOMContentLoaded", () => {
    fetch("config.json")
        .then((response) => response.json())
        .then((data) => {
            // Load Profile
            document.getElementById("profile-pic").src = data.profile.image;
            document.getElementById("profile-name").textContent = data.profile.name;
            document.getElementById("profile-title").textContent = data.profile.title;

            // About Section
            document.getElementById("about-intro").textContent = data.profile.about.intro;
            const aboutSections = data.profile.about.sections.map(section => `<p>${section}</p>`).join("");
            document.getElementById("about-sections").innerHTML = aboutSections;

            // Skills Section
            const skillsList = document.getElementById("skills-list");
            data.skills.forEach(skill => {
                const listItem = document.createElement("li");
                listItem.textContent = skill;
                skillsList.appendChild(listItem);
            });

            // Achievements Section
            const achievementsList = document.getElementById("achievements-list");
            data.achievements.forEach(achievement => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<span>${achievement.icon}</span> ${achievement.text}`;
                achievementsList.appendChild(listItem);
            });

            // Projects Section
            const projectList = document.getElementById("projects-list");
            data.projects.forEach(project => {
                const projectDiv = document.createElement("div");
                projectDiv.className = "project";
                projectDiv.innerHTML = `
                    <img src="${project.image}" alt="${project.name}">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="${project.url}" target="_blank" class="btn">View Project</a>
                `;
                projectList.appendChild(projectDiv);
            });
        })
        .catch((error) => console.error("Error loading config.json:", error));
});
