# New York — installer l'app sur ton iPhone

L'app est une **PWA** : une page web qui, une fois ajoutée à l'écran d'accueil,
se comporte comme une vraie app (icône, plein écran, pas de barre Safari, fonctionne
hors ligne). Pas d'App Store, pas de compte développeur Apple, pas de Xcode.

Une seule contrainte : les fichiers doivent être servis en **HTTPS**. Un fichier ouvert
depuis l'app Fichiers ne suffit pas — iOS refuse d'installer et de sauvegarder.

---

## Mise en ligne — GitHub Pages (gratuit, ~5 min)

1. Sur github.com → **New repository** → nom `nyc` → **Public** → *Create*.
2. **Add file → Upload files** → glisse les 6 fichiers :
   `index.html`, `manifest.webmanifest`, `sw.js`, `icon-180.png`, `icon-192.png`, `icon-512.png`
   → *Commit changes*.
3. **Settings → Pages** → *Source* : `Deploy from a branch` → branche `main`, dossier `/ (root)` → *Save*.
4. Attends 1-2 min. L'adresse s'affiche en haut de la page Settings → Pages :
   `https://TON-PSEUDO.github.io/nyc/`

> Alternative sans GitHub : **Netlify Drop** (app.netlify.com/drop) — tu glisses le dossier
> dans la page, tu as une URL HTTPS immédiatement. Crée un compte gratuit pour garder l'URL.

## Installation sur l'iPhone

1. Ouvre l'adresse **dans Safari** (pas Chrome — sur iOS seul Safari sait installer).
2. Bouton **Partager** (le carré avec la flèche) → **Sur l'écran d'accueil**.
3. Nomme-la *New York* → **Ajouter**.

L'icône apparaît sur l'écran d'accueil. Ouvre-la : plein écran, pastille rouge, pas de Safari.

## Hors ligne

Après la première ouverture avec du réseau, l'app démarre sans connexion.
Tes jours et tes notes sont stockés sur le téléphone.

Les **tuiles de carte** sont mises en cache au fur et à mesure : celles que tu as déjà
regardées restent lisibles hors ligne, les autres non. Avant de partir, ouvre l'onglet
Carte en wifi et balade-toi sur les quartiers que tu vas faire, à plusieurs niveaux de
zoom — ils seront gardés.

## Sauvegarde

Les données vivent dans le navigateur du téléphone. Utilise **Exporter** de temps en
temps pour récupérer un `.txt` (avec les liens Google Maps de chaque spot) — c'est ton
filet de sécurité, et c'est aussi le format le plus pratique à consulter sur place.

⚠️ N'utilise pas *Réglages → Safari → Effacer historique et données* pendant le voyage,
ça vide le stockage de l'app.

## Mettre à jour l'app

Remplace `index.html` dans le dépôt. Le service worker sert le réseau en premier, donc
la nouvelle version arrive à la prochaine ouverture avec du réseau. Si ça coince, incrémente
`nyc-shell-v1` en `nyc-shell-v2` dans `sw.js`.

---

## Mise à jour v3 — design Claude Design + plan satellite

Dans ton dépôt GitHub : **Add file → Upload files**, glisse `index.html`, `sw.js`,
`manifest.webmanifest` et les 3 icônes (elles ont changé de couleur) → *Commit changes*.
L'app se met à jour à la prochaine ouverture avec du réseau.

Ce qui change :
- Le design de Claude Design est appliqué à l'app entière : fond crème, Spectral + Work Sans,
  accent orange #FF5A36, vue Liste (cartes des 8 jours) → vue Détail (plan + feuille).
- Les polices sont embarquées dans `index.html` : rien à télécharger, ça marche hors ligne.
- Le plan est en **imagerie satellite** (Esri World Imagery) avec les noms de rues par-dessus.
  Bouton « Agrandir le plan » pour le passer en grand.
- Les épingles reprennent la forme goutte du design et la palette des 6 couleurs.

⚠️ Le service worker cache maintenant les tuiles satellite (plus lourdes que les anciennes).
Avant de partir, en wifi, balade-toi sur les quartiers que tu vas faire à plusieurs zooms.
