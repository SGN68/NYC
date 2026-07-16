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

## Mise à jour v5 — hôtel, transports, budget, météo, mode Jour J, édition simplifiée

Dans ton dépôt GitHub : **Add file → Upload files**, glisse `index.html` et `sw.js`
(icônes et manifeste inchangés) → *Commit changes*.

Ce qui change :
- **The Renwick Hotel** est maintenant un point fixe sur toutes les cartes (icône 🏨).
  Chaque jour part de l'hôtel et y revient, avec un mode de trajet suggéré
  (à pied / métro / Uber-taxi) et une durée estimée — à vol d'oiseau, pas un vrai
  calcul d'itinéraire MTA, c'est indiqué dans le texte.
- **Double tracé sur la carte du jour** : un trait clair relie l'hôtel et l'itinéraire
  principal (musées, incontournables, food, parcs) ; un trait violet pointillé relie
  chaque magasin et spot photo au point le plus proche de cet itinéraire. Légende en
  bas à gauche de la carte.
- **Météo réelle** par jour (Open-Meteo, gratuit) à côté du lever/coucher de soleil —
  n'apparaît qu'à l'approche du voyage (fenêtre de prévision ~16 jours).
- **Budget** : champ optionnel par lieu, total automatique affiché en haut de chaque jour.
- **Mode Jour J** : bouton qui estompe les lieux déjà cochés pour se concentrer sur
  ce qu'il reste à faire.
- **Édition par crayon** : les noms et notes des lieux ne sont plus des champs toujours
  actifs — un tap sur le ✎ ouvre l'édition, un tap ailleurs la referme. Plus de clavier
  qui surgit par erreur en sélectionnant un lieu.
- **Boutons agrandis** partout (zones tactiles ≥ 40-44px) pour un usage au pouce plus
  confortable sur iPhone.

⚠️ Après la mise à jour, ouvre l'app en wifi une première fois pour que le service
worker recharge la nouvelle version en cache.
