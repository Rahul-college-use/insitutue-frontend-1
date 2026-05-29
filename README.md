# LingoSphere Institute - Language Learning Platform

## 🌍 Overview

LingoSphere Institute is a modern, interactive web platform for immersive language learning. Built with **React 19** and **Tailwind CSS**, it provides a seamless experience for learners to discover, enroll, and master global languages through live cohort-based learning.

Founded in 2015, LingoSphere has trained **15,000+ alumni** with a **98.4% exam pass rate** and maintains a **4.9★ Google rating** with 50+ corporate partnerships.

---

## ✨ Key Features

### 🎓 Core Learning Features
- **Live Interactive Classes**: Real-time conversation with native CEFR-certified trainers
- **Micro-Batch Learning**: Maximum 8 students per class for personalized attention
- **Lifetime Recording Access**: Rewatch all classes anytime at your own pace
- **AI-Powered Practice Tools**: 24/7 pronunciation feedback, accent analysis, and personalized exercises
- **Global Certifications**: CEFR-aligned certificates recognized worldwide

### 🌐 Supported Languages
- **English**: Business English, IELTS, Immigration Prep
- **Spanish**: Conversational, B1/B2, DELE Certification
- **German**: A1 to B1, Goethe-Zertifikat, Professional Track
- **Japanese**: N5 to N4, JLPT Preparation

### 🛠️ Platform Capabilities
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging micro-interactions and transitions
- **Filter & Search**: Filter courses by language and proficiency level
- **Live Stats**: Real-time enrollment tracking and course ratings
- **Contact CTA**: 24/7 support with live chat, email, and phone contact
- **Student Testimonials**: Social proof with real learner success stories
- **Expert Profiles**: Detailed trainer bios with certifications and experience
- **FAQ Section**: Comprehensive Q&A for common learner questions

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommended: LTS version)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd forntend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

---

## 📁 Project Structure

```
forntend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx          # Navigation header with mobile menu
│   │   │   └── Footer.jsx          # Footer with links and contact info
│   │   ├── home/
│   │   │   ├── HeroSection.jsx     # Main landing section with CTA
│   │   │   ├── StatsTracker.jsx    # Statistics showcase (15k+ alumni, etc)
│   │   │   ├── About.jsx           # About section with institute highlights
│   │   │   ├── CourseExplorer.jsx  # Course listing with language filter
│   │   │   ├── Instructors.jsx     # Expert trainer profiles
│   │   │   ├── Testimonials.jsx    # Student success stories
│   │   │   ├── BenefitsGrid.jsx    # Features & advantages grid
│   │   │   ├── FAQ.jsx             # Frequently asked questions
│   │   │   └── Contact.jsx         # Contact form & support info
│   │   └── ui/
│   │       ├── Button.jsx          # Reusable button component
│   │       └── Badge.jsx           # Reusable badge component
│   ├── data/
│   │   └── coursesData.js          # Course and language data
│   ├── App.jsx                     # Main application component
│   ├── main.jsx                    # React entry point
│   ├── index.css                   # Global styles & animations
│   └── App.css                     # Legacy styles (deprecated)
├── public/
│   └── favicon.svg                 # Institute logo/favicon
├── index.html                      # HTML entry point
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint rules
├── package.json                    # Dependencies & scripts
└── README.md                       # This file
```

---

## 🎨 Design & Styling

### Color Palette
- **Primary**: Indigo (`#4F46E5`) and Violet (`#7C3AED`)
- **Secondary**: Slate (`#F1F5F9` to `#0F172A`)
- **Success**: Emerald (`#10B981`)
- **Accents**: Amber for ratings, used throughout

### Typography
- **Headings**: Font weight 700-900 (bold to black)
- **Body**: Font weight 400-600 (regular to semibold)
- **Scale**: Responsive from mobile (16px) to desktop (64px)

### Animations
- **Fade In Up**: Smooth entrance from bottom with opacity
- **Slide In**: Left/right directional transitions
- **Bounce Soft**: Gentle pulsing effects for CTAs
- **Card Hover**: Elevation and shadow effects
- All animations respect `prefers-reduced-motion` for accessibility

---

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| React | UI framework | 19.2.6 |
| React DOM | React rendering | 19.2.6 |
| Vite | Build tool & dev server | 8.0.12 |
| Tailwind CSS | Utility-first CSS | Latest |
| Lucide React | Icon library | 1.17.0 |
| ESLint | Code quality | 10.3.0 |

---

## 📱 Responsive Breakpoints

The platform follows Tailwind's mobile-first approach:
- **Mobile**: < 768px (default styling)
- **Tablet**: md (768px) - Enhanced layouts
- **Desktop**: lg (1024px) - Full features

All sections are optimized for every breakpoint.

---

## 🔄 Component Architecture

### Container Components
- **App.jsx**: Root component orchestrating all sections
- Layout: Max-width 7xl (80rem) centered container

### Presentational Components
- **Navbar**: Sticky top navigation with mobile hamburger menu
- **HeroSection**: Lead capture with dynamic CTA
- **StatsTracker**: KPI showcase with gradient background
- **About**: Company information with highlights
- **CourseExplorer**: Filterable course listing
- **Instructors**: Trainer showcase with credentials
- **Testimonials**: Student success stories with ratings
- **BenefitsGrid**: Feature highlights
- **FAQ**: Expandable Q&A sections
- **Contact**: Contact form with multiple contact methods
- **Footer**: Links, social media, address, policies

### UI Components (Reusable)
- **Button**: Supports 4 variants (primary, secondary, outline, ghost)
- **Badge**: Color-coded badges for labels

---

## 🎯 Course Data Structure

Courses are defined in `src/data/coursesData.js`:

```javascript
{
  id: 1,
  title: 'Complete Spanish B1/B2',
  lang: 'Spanish',                    // Filter criteria
  level: 'Intermediate',              // Proficiency level
  duration: '12 Weeks',               // Course length
  students: '1.2k',                   // Enrollment count
  rating: '4.9',                      // Average rating (0-5)
  price: '₹8,990'                     // Course price in INR
}
```

Adding new courses:
1. Add entry to `courses` array in `coursesData.js`
2. Ensure `lang` matches one of the languages in `languages` array
3. Component automatically filters and displays

---

## 🔧 Customization Guide

### Changing Institute Name
Search and replace "LingoSphere" in:
- `src/components/common/Navbar.jsx`
- `src/components/common/Footer.jsx`
- `README.md`
- `index.html` title

### Updating Colors
Edit Tailwind classes (using `from-indigo-600 to-violet-600`):
- Change to your brand colors
- Update gradients in all component files
- Update CSS animations timing if needed

### Adding New Languages
1. Update `languages` array in `coursesData.js`
2. Add new courses with matching language name
3. No component changes needed (automatic filtering)

### Updating Contact Information
Edit `Contact.jsx` section:
- Phone: `+919876543210`
- Email: `hello@lingosphere.com`
- Address: Update location details

### Updating Instructors
Edit the `instructors` array in `Instructors.jsx`:
- Modify existing trainers or add new profiles
- Use emoji avatars or replace with image paths

---

## 🚀 Performance Optimizations

- **Code Splitting**: Vite automatically chunks components
- **CSS Purging**: Tailwind removes unused styles
- **Image Optimization**: Use emoji avatars (no HTTP requests)
- **Lazy Loading**: Components render on scroll
- **Hardware Acceleration**: Transform-based animations

---

## ♿ Accessibility Features

- **ARIA Labels**: Proper navigation labels
- **Semantic HTML**: Correct heading hierarchy
- **Color Contrast**: WCAG AA compliant
- **Focus Indicators**: Ring effects on keyboard navigation
- **Responsive Text**: Scalable font sizes
- **Motion**: Respects `prefers-reduced-motion` setting

---

## 🧪 Testing & Quality

### Linting
```bash
npm run lint
```

### Build Validation
```bash
npm run build
```

Ensure no console errors or warnings before deployment.

---

## 📦 Build Output

Production build generates optimized files in the `dist/` folder:
- Minified JavaScript bundles
- Optimized CSS with purged utilities
- Static assets with hash-based cache busting

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Manual (Any Static Host)
1. Run `npm run build`
2. Upload `dist/` folder contents
3. Configure server to serve `index.html` for all routes

---

## 🐛 Troubleshooting

### Port 5173 Already in Use
```bash
npm run dev -- --port 3000
```

### CSS Not Loading
Ensure `src/index.css` is imported in `main.jsx`

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node version: `node --version` (requires 18+)

### Performance Issues
- Check DevTools Performance tab
- Remove unused components from `App.jsx`
- Implement code splitting with React.lazy()

---

## 📝 Contributing

1. Create feature branch: `git checkout -b feature/YourFeature`
2. Make changes and test: `npm run dev`
3. Lint code: `npm run lint`
4. Commit with clear message
5. Push and create pull request

---

## 📄 License

This project is proprietary software for LingoSphere Institute. All rights reserved.

---

## 📞 Support

- **Email**: hello@lingosphere.com
- **Phone**: +91 9876 543 210
- **Hours**: Mon-Sun, 9 AM - 10 PM IST

---

## 🙏 Credits

- **Framework**: React 19 & Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Hosting**: [Your Hosting Provider]

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Status**: Production Ready ✅

