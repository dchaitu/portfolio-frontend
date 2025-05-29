# Modern Portfolio Website

A responsive and modern portfolio website built with React.js, showcasing your skills, projects, and contact information. This portfolio features a clean, professional design with smooth animations and a mobile-first approach.

![Portfolio Preview](./public/portfolio-preview.png)

## Features

- **Responsive Design**: Looks great on all devices
- **Modern UI/UX**: Clean and professional interface
- **Smooth Animations**: Subtle animations for better user experience
- **SEO Optimized**: Proper meta tags and semantic HTML
- **PWA Support**: Works offline and can be installed on devices
- **Fast Performance**: Optimized for fast loading times
- **Contact Form**: Functional contact form with form validation
- **Project Showcase**: Beautiful project cards with links to live demos and code

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons for React projects
- [Font Awesome](https://fontawesome.com/) - Icon toolkit
- [Google Fonts](https://fonts.google.com/) - Free, open-source fonts
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-frontend.git
   cd portfolio-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

### Personal Information

1. **Home Section**: Update `src/components/Home/Home.jsx` with your name, title, and introduction.
2. **About Section**: Modify `src/components/About/About.jsx` with your personal information and bio.
3. **Skills Section**: Update the skills array in `src/components/Skills/Skills.jsx` with your skills and proficiency levels.
4. **Projects Section**: Add your projects to the projects array in `src/components/Projects/Projects.jsx`.
5. **Contact Section**: Update contact information in `src/components/Contact/Contact.jsx`.

### Styling

- Global styles can be found in `src/App.css`
- Each component has its own CSS file for specific styles
- Color scheme can be customized by updating the CSS variables in `:root` in `src/App.css`

### Images

- Replace the placeholder images in the `public` folder with your own images
- Update the image paths in the respective components

## Deployment

### Building for Production

```bash
npm run build
# or
yarn build
```

This will create a `build` folder with the production-ready files.

### Deploying to GitHub Pages

1. Install the `gh-pages` package:
   ```bash
   npm install --save gh-pages
   # or
   yarn add gh-pages
   ```

2. Add the following scripts to your `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
