#!/bin/bash

# Script de déploiement pour GitHub Pages
echo "🚀 Déploiement sur GitHub Pages..."

# Vérifier si on est dans un repo Git
if [ ! -d ".git" ]; then
    echo "❌ Ce n'est pas un repository Git!"
    echo "Initialisez d'abord avec: git init"
    exit 1
fi

# Vérifier si les changements sont commités
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Il y a des changements non commités!"
    echo "Commitez d'abord vos changements avec:"
    echo "git add ."
    echo "git commit -m 'Mise à jour'"
fi

# Build et déploiement
echo "📦 Construction de l'application..."
npm run build

echo "🌐 Déploiement sur GitHub Pages..."
npm run deploy

echo "✅ Déploiement terminé!"
echo "🔗 Votre site sera disponible à:"
echo "https://florianEls.github.io/GemenosApp"
echo ""
echo "Note: Il peut falloir quelques minutes pour que les changements soient visibles."
