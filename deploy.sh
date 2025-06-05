#!/bin/bash

# Script de déploiement pour GitHub Pages
echo "🚀 Déploiement sur GitHub Pages..."

# Nettoyer le build précédent
echo "🧹 Nettoyage du build précédent..."
rm -rf dist

# Builder le projet
echo "🔨 Build du projet..."
npm run build

# Vérifier que le build a réussi
if [ ! -d "dist" ]; then
    echo "❌ Erreur: Le build a échoué"
    exit 1
fi

echo "✅ Build réussi"

# Déployer sur GitHub Pages
echo "📤 Déploiement sur GitHub Pages..."
npx gh-pages -d dist -f

if [ $? -eq 0 ]; then
    echo "✅ Déploiement réussi!"
    echo "🌐 Votre site sera accessible à: https://Nairolf13.github.io/GemenosApp"
    echo "⏰ Le déploiement peut prendre 1-5 minutes pour être visible"
else
    echo "❌ Erreur lors du déploiement"
    exit 1
fi
