# Anime Review Website

A modern Angular application for reviewing seasonal anime with a beautiful, responsive UI design.

## Features

- 🎌 **Seasonal Anime Listings** - Browse anime by season (Winter, Spring, Summer, Fall)
- ⭐ **User Review System** - Rate and review your favorite anime
- 📱 **Responsive Design** - Optimized for both mobile and desktop
- 🎨 **Modern UI** - Built with Angular Material for a clean, professional look
- 🔍 **Smart Filtering** - Filter anime by season and status
- 💝 **Card-based Layout** - Beautiful anime cards with hover effects

## Technology Stack

- **Framework**: Angular 19
- **Language**: TypeScript
- **Styling**: SCSS + Angular Material
- **State Management**: RxJS Observables
- **Forms**: Angular Reactive Forms
- **Icons**: Material Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BramHogent/anime-review-website.git
cd anime-review-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── anime-list/       # Main anime listing component
│   │   ├── anime-card/       # Individual anime card component
│   │   └── review-form/      # Review submission form
│   ├── interfaces/
│   │   └── anime.interface.ts # TypeScript interfaces
│   ├── services/
│   │   └── anime.service.ts   # Data service with mock data
│   ├── app.component.*       # Root component
│   └── app.config.ts         # App configuration
├── styles.scss               # Global styles and Material theme
└── assets/                   # Static assets
```

## Features in Detail

### Anime Cards
- Display anime title, description, and status
- Star rating system
- Episode count and studio information
- Hover effects and smooth animations

### Review System
- Rate anime from 1-10 stars
- Write detailed reviews
- Form validation
- Review submission handling

### Responsive Design
- Mobile-first approach
- Flexible grid layout
- Optimized for tablets and desktops
- Touch-friendly interface

## Available Scripts

- `ng serve` - Start development server
- `ng build` - Build for production
- `ng test` - Run unit tests
- `ng lint` - Run linting
- `ng e2e` - Run end-to-end tests

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Angular Material team for the excellent UI components
- The anime community for inspiration
- All contributors who help improve this project

## Roadmap

- [ ] User authentication system
- [ ] Advanced search and filtering
- [ ] Anime recommendation engine
- [ ] Social features (follow users, share reviews)
- [ ] Integration with anime databases (MyAnimeList, AniDB)
- [ ] Dark/light theme toggle
- [ ] Progressive Web App (PWA) features

---

Built with ❤️ and Angular
