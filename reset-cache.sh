#!/bin/bash
# Script pour nettoyer le cache et redémarrer l'application

echo "Arrêt des serveurs en cours..."
kill $(lsof -t -i:5173) 2>/dev/null
kill $(lsof -t -i:5174) 2>/dev/null

echo "Suppression des fichiers de build..."
rm -rf dist
rm -rf node_modules/.vite

echo "Reconstruction de l'application..."
npm run build

echo "Redémarrage du serveur de développement..."
npm run dev

echo "Terminé ! Veuillez ouvrir http://localhost:5173 ou http://localhost:5174 dans une nouvelle fenêtre de navigation."
