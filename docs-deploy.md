# Options de déploiement GitHub Pages

## Option actuelle : Deploy from gh-pages branch ✅
- ✅ Configuré et fonctionnel
- Source: branch `gh-pages` / `/ (root)`
- Commande: `npm run deploy`
- URL: https://Nairolf13.github.io/GemenosApp

## Option alternative : Deploy from main branch
Si vous souhaitez utiliser la branche main :

### 1. Modifier vite.config.js :
```javascript
build: {
  outDir: 'docs',  // au lieu de 'dist'
  // ...
}
```

### 2. Modifier package.json :
```json
"scripts": {
  "build-docs": "vite build",
  "deploy-docs": "npm run build-docs && git add docs && git commit -m 'Deploy to GitHub Pages' && git push"
}
```

### 3. Configuration GitHub Pages :
- Source: Deploy from a branch
- Branch: `main` / `/docs`

### Avantages de chaque méthode :

**gh-pages branch (actuel) :**
- ✅ Garde la branche main propre
- ✅ Sépare clairement source et build
- ✅ Pas de gros fichiers buildés dans l'historique

**main branch :**
- ✅ Plus simple conceptuellement
- ✅ Tout dans une seule branche
- ❌ Pollue l'historique avec les fichiers buildés
