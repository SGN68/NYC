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

## Mise à jour v7 — reconstruction complète du programme

Dans ton dépôt GitHub : **Add file → Upload files**, glisse `index.html` et `sw.js`
(icônes et manifeste inchangés) → *Commit changes*.

J'ai entièrement refait l'extraction de ton document (la fois précédente, la mise en
page du tableau Word avait brouillé certains passages) et reconstruit les 8 jours en
suivant ton texte de très près, avec beaucoup plus de détail qu'avant :
- Le parcours précis de Brooklyn Heights (Montague → Remsen → Pierrepont → Promenade →
  Willow St → 24 Middagh → Plymouth Church), Fulton Ferry Landing, le Clock Tower Building,
  Eagle Warehouse, le Brooklyn Flea du samedi.
- Les adresses numérotées de Wall Street et Broadway, regroupées en deux arrêts avec le
  détail dans la note plutôt que dix arrêts séparés.
- Les options de fin de journée à Brooklyn (Carroll Gardens, Red Hook, Prospect Park,
  Brooklyn Botanic Garden, Grand Army Plaza) — ajoutées mais clairement en option.
- La boucle complète de Roosevelt Island, Kitchen Arts & Letters, Ralph Lauren,
  Bloomingdale's dans le bon ordre.
- Le MET en fin de journée à Harlem (terrasse + visite de 3h), la 5e Avenue nord pour finir.

⚠️ Un point reste flou : **« The Lost Time »** à Williamsburg — je n'ai trouvé aucune
source fiable pour cette adresse. Le lieu apparaît dans ton itinéraire (jour Brooklyn)
mais sans repère sur la carte. Dis-moi le nom exact ou le quartier précis si tu l'as.

Après la mise à jour, ouvre l'app en wifi une première fois.
