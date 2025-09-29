# Sanjay S. Agaonkar - Premium Photography Portfolio

A modern, elegant photography portfolio website built with Next.js, featuring smooth animations, premium design, and an immersive user experience.

## 🚀 Features

- **Hero Section**: Full-screen landing with parallax background and elegant typography
- **Gallery**: Masonry grid layout with category filters and lightbox navigation
- **About Section**: Split layout with parallax effects and professional bio
- **Contact Form**: Interactive form with social media integration
- **Smooth Scrolling**: Powered by Lenis for cinematic scroll experience
- **Animations**: Framer Motion for smooth transitions and hover effects
- **Responsive Design**: Optimized for all devices and screen sizes
- **Premium Styling**: Custom color palette with gold, bronze, and champagne accents

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS with custom theme
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Smooth Scrolling**: Lenis
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Typography**: Inter (sans-serif) + Playfair Display (serif)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom theme
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Main page with Lenis integration
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero with parallax background
│   │   ├── GallerySection.tsx   # Gallery with filters and lightbox
│   │   ├── AboutSection.tsx     # About with split layout
│   │   └── ContactSection.tsx   # Contact form and info
│   └── ui/                  # shadcn/ui components
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Design System

### Color Palette
- **Background**: Clean white (#FFFFFF)
- **Foreground**: Deep charcoal (#333333)
- **Primary**: Vibrant Orange (#FF6B35) - matches reference design
- **Secondary**: Light gray (#F5F5F5)
- **Accent**: Darker Orange (#E55A2B)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Monospace**: Geist Mono

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add placeholder images**:
   - Open `generate-placeholders.html` in your browser
   - Download the placeholder images
   - Save them to the `public/gallery/` directory with the correct names

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📸 Adding Your Own Images

1. **Replace placeholder images** in `public/gallery/`:
   - `hero-bg.jpg` - Hero section background (1920x1080)
   - `about-portrait.jpg` - About section portrait (600x800)
   - `nature-*.jpg` - Nature photography (800x1000)
   - `portrait-*.jpg` - Portrait photography (800x1000)
   - `travel-*.jpg` - Travel photography (800x1000)
   - `street-*.jpg` - Street photography (800x1000)

2. **Update gallery data** in `src/components/sections/GallerySection.tsx`:
   - Modify the `galleryData` object with your actual images
   - Update titles, descriptions, and categories

3. **Customize content**:
   - Update bio text in `AboutSection.tsx`
   - Modify contact information in `ContactSection.tsx`
   - Update metadata in `layout.tsx`

## 🎯 Customization

### Colors
Edit the CSS variables in `src/app/globals.css` to customize the color scheme.

### Animations
Modify animation parameters in the Framer Motion components for different effects.

### Layout
Adjust grid layouts and spacing in the TailwindCSS classes.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- WCAG compliant color contrast
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support
- Semantic HTML structure

## 🚀 Deployment

The site is ready for deployment on Vercel, Netlify, or any other Next.js hosting platform.

```bash
npm run build
npm start
```

## 📄 License

This project is created for Sanjay S. Agaonkar's photography portfolio.

---

**Built with ❤️ using Next.js, TailwindCSS, and modern web technologies.**