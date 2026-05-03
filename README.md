# Olive - Holistic Food Scanner Frontend

A modern, responsive React application that helps users make informed food choices through intelligent barcode scanning and ingredient analysis.

## 🌟 Features

- **Smart Barcode Scanning**: Instant analysis of food products via barcode scanning
- **Ingredient Intelligence**: Comprehensive breakdown of ingredients with health insights
- **Personalized Recommendations**: Tailored suggestions based on dietary preferences and restrictions
- **Family Health Focus**: Proactive filtering of harmful additives and controversial ingredients
- **Visual Product Analysis**: Interactive product comparison and nutritional scoring
- **Responsive Design**: Optimized for mobile, tablet, and desktop experiences

## 🚀 Tech Stack

- **Framework**: React 18 with modern hooks and patterns
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Custom SVG components with Lucide React fallbacks
- **State Management**: React hooks for local state management
- **Code Quality**: ESLint with comprehensive rules and error boundaries

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (buttons, icons, etc.)
│   ├── cards/          # Card components
│   ├── nav/            # Navigation components
│   ├── hero/           # Hero section components
│   ├── media/           # Media and animation components
│   └── how-it-works/  # Feature demonstration components
├── sections/           # Page sections
├── pages/              # Main page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── styles/             # Global styles and design tokens
├── data/               # Static data and content
└── assets/             # Static assets (images, icons)
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Color Tokens**: Consistent color palette with CSS custom properties
- **Typography**: Nueu font family with standardized sizes and weights
- **Spacing**: Semantic spacing scale for consistent layouts
- **Components**: Standardized component patterns and props
- **Responsive**: Mobile-first responsive design approach

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📱 Key Components

### Navigation
- **DesktopNavbar**: Responsive desktop navigation with dropdown menus
- **MobileNavbar**: Mobile-optimized navigation with hamburger menu

### Core Features
- **HeroSection**: Landing hero with product carousel
- **BenefitsSection**: Health benefits showcase with interactive elements
- **HowItWorksSection**: Step-by-step feature demonstration
- **PricingCard**: Subscription plan display with call-to-action

### Interactive Elements
- **RollingScore**: Animated score display for product ratings
- **MarqueePills**: Scrolling ingredient tags
- **ErrorBoundary**: Robust error handling with fallback UI

## 🎯 Performance Features

- **Optimized Builds**: Tree-shaking and code splitting
- **Image Optimization**: WebP format with responsive loading
- **Animation Performance**: Hardware-accelerated animations
- **Bundle Analysis**: Optimized bundle sizes and loading strategies

## 🔧 Code Standards

This project follows clean coding practices:

- **Component Standards**: Consistent structure and prop patterns
- **Design Tokens**: Centralized styling with CSS custom properties
- **Error Handling**: Comprehensive error boundaries and fallbacks
- **Accessibility**: Semantic HTML and ARIA compliance
- **Performance**: Optimized re-renders and lazy loading

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari on iOS 14+

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [Demo URL]
- **API Documentation**: [API Docs URL]
- **Design System**: [Component Standards](./src/docs/COMPONENT_STANDARDS.md)

---

Built with ❤️ for healthier food choices and informed decisions.
