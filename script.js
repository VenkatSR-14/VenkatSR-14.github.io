fetch('config.json')
    .then(response => response.json())
    .then(data => {
        // Set profile image
        document.getElementById('profile-image').src = data.image;

        // Set name and title
        document.getElementById('name').textContent = data.name;
        document.getElementById('title').textContent = data.title;

        // Set about section
        document.getElementById('about-text').textContent = data.about;

        // Populate projects
        const projectList = document.getElementById('project-list');
        data.projects.forEach(project => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${project.url}" target="_blank">${project.name}</a>: ${project.description}`;
            projectList.appendChild(listItem);
        });

        // Set resume link
        document.getElementById('resume-link').href = data.resume;

        // Populate contact section
        const contactList = document.getElementById('contact-list');
        for (const [key, value] of Object.entries(data.contact)) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${value}" target="_blank">${key}</a>`;
            contactList.appendChild(listItem);
        }
    })
    .catch(error => console.error('Error loading config:', error));
