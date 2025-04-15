# Venkat SR - Portfolio

A modern, interactive portfolio website showcasing my skills, experience, and projects in both Data Science and Software Development.

## Features

- Modern, responsive design
- Dark/light mode support
- Interactive UI components
- Resume downloads for both Data Science and Software Development roles
- Project showcase section
- Skills and experience highlights
- Contact information

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- React

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

You can customize the portfolio by:

1. Updating personal information in `src/app/page.tsx`
2. Adding or modifying project details in the Projects section
3. Updating skills in the Skills section
4. Changing contact information in the Contact section

## Deployment to GitHub Pages

This portfolio is configured to be deployed to GitHub Pages at `venkatsr-14.github.io`.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Push the code to your GitHub repository:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

3. The GitHub Actions workflow will automatically deploy your site to GitHub Pages.

### Setting Up GitHub Repository

1. Create a new repository on GitHub named `venkatsr-14.github.io`
2. Push this code to that repository
3. Go to repository Settings > Pages
4. Set the source to GitHub Actions

## License

This project is open source and available under the MIT License.
