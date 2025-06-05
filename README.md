# Site Web de la Mairie de Gémenos

Site web communal moderne développé avec React et Vite, présentant les services municipaux, l'agenda local, les actualités et permettant aux citoyens de faire des suggestions.

## 🚀 Fonctionnalités

- **Page d'accueil** avec informations essentielles
- **Services municipaux** avec descriptions détaillées
- **Agriculture locale** et initiatives écologiques
- **Transparence** avec tableaux de dépenses publiques
- **Commerces locaux** pour soutenir l'économie locale
- **Suggestions citoyennes** pour l'amélioration du village
- **Agenda communal** avec calendrier interactif
- **Actualités** avec événements locaux (St-Éloi, Ruralia, lotos, etc.)
- **Design responsive** optimisé mobile et desktop

## 🛠️ Technologies utilisées

- React 19
- React Router pour la navigation
- React Calendar pour l'agenda
- Vite pour le build et développement
- CSS3 avec animations modernes

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/florianEls/GemenosApp.git
cd GemenosApp

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

## 🚀 Déploiement sur GitHub Pages

```bash
# Build et déploiement
npm run deploy
```

Le site sera disponible à : https://florianEls.github.io/GemenosApp

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.jsx      # Navigation et menu mobile
│   ├── Footer.jsx      # Pied de page
│   ├── Hero.jsx        # Section hero
│   └── ...
├── pages/              # Pages principales
│   ├── Accueil.jsx     # Page d'accueil
│   ├── Services.jsx    # Services municipaux
│   ├── Agenda.jsx      # Calendrier des événements
│   ├── Actualites.jsx  # News et actualités
│   └── ...
└── assets/css/         # Styles CSS
```

## 🎨 Fonctionnalités spéciales

### Menu mobile amélioré
- Animations fluides avec cubic-bezier
- Effets visuels (shimmer, gradients)
- Menu burger animé avec rotation

### Page Transparence responsive
- Tableaux adaptatifs sur mobile
- Affichage en cartes sur petits écrans
- Scroll horizontal automatique

### Système de suggestions citoyennes
- Formulaire interactif complet
- Soumission anonyme possible
- Système de vote et filtrage
- Statistiques en temps réel

### Agenda avec calendrier
- Calendrier React interactif
- Vue calendrier et liste
- Filtrage par catégories
- Indicateurs visuels d'événements

## 🏛️ À propos

Ce site a été développé pour moderniser la présence en ligne de la commune de Gémenos, en offrant une interface intuitive et des fonctionnalités pratiques pour les citoyens.

## 📄 Licence

MIT License
