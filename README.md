# 🌟 Tuba Jabeen - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my journey as a Computer Science graduate and Web Developer.

![Portfolio Preview](https://via.placeholder.com/800x400/ec4899/ffffff?text=Portfolio+Preview)

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.vercel.app) <!-- Replace with your actual URL -->

## ✨ Features

- **🎨 Modern Design** - Beautiful gradient themes with smooth animations
- **🌙 Dark/Light Mode** - Toggle between themes with smooth transitions
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Fast Performance** - Built with Next.js for optimal loading speeds
- **🎯 SEO Optimized** - Proper meta tags and semantic HTML structure
- **🔄 Smooth Animations** - Professional hover effects and transitions
- **📧 Contact Integration** - Direct email and social media links
- **🎭 Interactive UI** - Engaging user experience with modern components

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework for production
- **[React 18](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit
- **[Radix UI](https://www.radix-ui.com/)** - Low-level UI primitives
- **[Class Variance Authority](https://cva.style/)** - Creating variant APIs

## 📁 Project Structure

\`\`\`
portfolio-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind CSS
│   ├── layout.js           # Root layout component
│   └── page.js             # Main portfolio page
├── components/
│   └── ui/
│       ├── badge.jsx       # Badge component
│       ├── button.jsx      # Button component
│       └── card.jsx        # Card component
├── lib/
│   └── utils.js            # Utility functions
├── public/                 # Static assets
├── jsconfig.json          # JavaScript configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md              # Project documentation
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 🎨 Customization

### Personal Information

Update your personal details in \`app/page.js\`:

\`\`\`javascript
// Update these sections with your information
const projects = [
  // Add your projects here
]

const skills = {
  technical: ["Your", "Skills", "Here"],
  tools: ["Your", "Tools", "Here"],
  soft: ["Your", "Soft", "Skills", "Here"]
}

const experience = [
  // Add your experience here
]
\`\`\`

### Colors and Styling

Modify the color scheme in \`tailwind.config.js\`:

\`\`\`javascript
// Customize your color palette
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
\`\`\`

### Images

Replace placeholder images:
1. Add your profile photo to \`public/\` folder
2. Update image paths in \`app/page.js\`
3. Add project screenshots to showcase your work

## 📱 Sections

- **🏠 Hero** - Introduction with profile image and call-to-action
- **👨‍💻 About** - Education, achievements, skills, and extracurriculars
- **💼 Experience** - Current internship and work experience
- **🚀 Projects** - Featured projects with technologies used
- **📞 Contact** - Multiple ways to get in touch

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy with one click!

### Deploy to Netlify

1. Build the project: \`npm run build\`
2. Upload the \`out\` folder to Netlify
3. Configure custom domain (optional)

### Deploy to GitHub Pages

1. Install gh-pages: \`npm install --save-dev gh-pages\`
2. Add to package.json:
   \`\`\`json
   "scripts": {
     "deploy": "gh-pages -d out"
   }
   \`\`\`
3. Run: \`npm run build && npm run deploy\`

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Excellent ratings
- **Mobile Optimized**: Responsive design for all devices
- **Fast Loading**: Optimized images and code splitting

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio-website/issues).

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About Me

I'm Tuba Jabeen, a fresh Computer Science graduate from COMSATS University Islamabad, Attock, with a passion for web development and creating innovative digital solutions.

- **🎓 Education**: Bachelor of Science in Computer Science (CGPA: 3.54/4.00)
- **💼 Current Role**: Self-employed
- **🌟 Interests**: Web Development, UI/UX Design
- **📍 Location**: Attock, Pakistan

## 📞 Contact

- **📧 Email**: [tubajabeen105@gmail.com](mailto:tubajabeen105@gmail.com)
- **💼 LinkedIn**: [tuba-jabeen-21993a223](https://www.linkedin.com/in/tuba-jabeen-21993a223)
- **📱 Phone**: 0334-5605064

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Vercel](https://vercel.com/) for seamless deployment
- [Radix UI](https://www.radix-ui.com/) for accessible UI components

---

⭐ **If you found this project helpful, please give it a star!** ⭐

Made with ❤️ by [Tuba Jabeen](https://github.com/yourusername)
