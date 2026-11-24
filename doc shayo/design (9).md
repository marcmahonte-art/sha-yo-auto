# SHA-YO AUTO --- Design System

**Version 1.0 · Site showroom automobile · Ouagadougou, Burkina Faso**

> **Positionnement :** le showroom automobile premium, fiable et
> accessible dans son exigence.\
> **Signatures de marque :** « Qualité, confiance, élégance. » · «
> L'automobile autrement. »

------------------------------------------------------------------------

## 1. Direction artistique

### Intention

Construire une expérience digitale **automobile de luxe, minimale et
corporate**. Le site doit évoquer la qualité des véhicules, le sérieux
des transactions et l'accompagnement client. L'élégance vient de la
photographie, de la typographie, des proportions et des espaces --- pas
d'effets décoratifs superflus.

Le logo fourni constitue la référence de l'identité : - silhouette
automobile classique dans un écusson ; - rouge franc pour le bloc de
marque **SHA-YO** ; - gris charbon pour les contours et le mot **AUTO**
; - contraste fort entre le rouge, le charbon et le blanc.

**Règle de modernisation :** conserver les signes distinctifs du logo et
simplifier leur mise en scène dans l'interface. Ne pas redessiner
arbitrairement le logo ni lui ajouter du doré, des effets métalliques ou
des ombres.

### Trois piliers

1.  **Qualité** --- véhicules présentés avec des visuels nets, des
    informations précises et une fiche détaillée.
2.  **Confiance** --- transparence sur l'état, les caractéristiques, les
    services et le processus de contact.
3.  **Élégance** --- interface sobre, éditoriale, respirante et
    cohérente.

### Mots-clés visuels

`Premium` · `Précis` · `Confiance` · `Automobile` · `Sobre` ·
`Contemporain` · `Africain urbain`

------------------------------------------------------------------------

## 2. Logo et identité

### Logo principal

Utiliser le logo fourni sur fond blanc ou très clair, avec une zone de
protection au minimum égale à la hauteur du mot « AUTO » tout autour du
bloc.

### Variantes recommandées à produire

-   **Logo principal couleur :** version fournie, sur fond blanc.
-   **Version monochrome charbon :** pour les documents sobres et les
    applications à une couleur.
-   **Version blanche :** uniquement sur un fond charbon suffisamment
    uniforme.
-   **Symbole seul :** écusson et véhicule, pour favicon ou avatar, si
    une version vectorielle propre est disponible.

Ces variantes sont des déclinaisons à créer à partir du fichier source,
pas des versions déjà fournies.

### Règles d'utilisation

-   Ne pas étirer, incliner, recadrer ou déformer le logo.
-   Ne pas changer isolément la couleur du véhicule, du contour ou du
    lettrage.
-   Ne pas poser le logo sur une photographie chargée.
-   Ne pas ajouter de contour, de glow, de relief ou d'ombre portée.
-   Préserver une taille lisible ; sur mobile, préférer une version
    simplifiée si elle est officiellement créée.
-   Ne pas recomposer le logo avec une police approchante.

### Fond de marque

Le blanc est le fond de référence. Le charbon peut accueillir des
séquences institutionnelles ou des bandeaux de contraste. Le rouge sert
à signaler la marque et les actions importantes, jamais à colorer de
grandes surfaces sans raison.

------------------------------------------------------------------------

## 3. Palette de couleurs

Les valeurs ci-dessous sont une proposition numérique cohérente avec les
couleurs visibles du logo. Le rouge et le charbon sont des
approximations de prélèvement visuel ; le fichier logo reste la
référence maîtresse.

  -----------------------------------------------------------------------
  Jeton                   Valeur                  Usage
  ----------------------- ----------------------- -----------------------
  `brand-red`             `#D64234`               Accent de marque, CTA
                                                  principal, repères
                                                  actifs

  `brand-red-hover`       `#B93429`               Survol et état pressé
                                                  du rouge

  `charcoal`              `#43423D`               Couleur sombre issue du
                                                  logo, titres
                                                  secondaires, icônes

  `ink`                   `#191919`               Titres et texte
                                                  principal

  `white`                 `#FFFFFF`               Fond principal, cartes

  `surface`               `#F6F5F2`               Fond secondaire chaud
                                                  et discret

  `surface-strong`        `#ECEAE6`               Sections alternées,
                                                  champs

  `border`                `#DEDDD9`               Séparateurs et contours

  `muted`                 `#777570`               Métadonnées et texte
                                                  secondaire

  `success`               `#287A54`               Confirmation uniquement

  `warning`               `#A96B1F`               Attention uniquement

  `danger`                `#B93429`               Erreur et suppression
  -----------------------------------------------------------------------

### Proportions conseillées

-   70--80 % : blanc et surfaces claires ;
-   15--20 % : photographie et charbon ;
-   5--10 % : rouge de marque.

Le rouge doit rester un accent identifiable. **Pas de palette noir-or**
: elle éloignerait le site de l'identité du logo.

### Contrastes

-   Texte courant : `ink` sur `white` ou `surface`.
-   Bouton rouge : texte blanc, vérifier le contraste en taille réelle.
-   Texte secondaire : ne pas utiliser `muted` sur une surface trop
    proche en luminosité.
-   Ne jamais communiquer un état uniquement par la couleur.

------------------------------------------------------------------------

## 4. Typographie

### Familles

**Interface et textes : Manrope** - Titres, navigation, boutons, fiches
techniques et paragraphes. - Style contemporain, géométrique et
lisible. - Graisses : 400, 500, 600, 700, 800.

**Accent éditorial : DM Serif Display** - À réserver à quelques
accroches, citations ou titres de campagne. - Évoque discrètement le
caractère classique du mot « AUTO » dans le logo. - Ne pas l'utiliser
pour les données techniques, les boutons ou les longues lectures.

Alternative si une seule famille est souhaitée : Manrope partout.

### Échelle typographique

  Style       Desktop   Mobile Graisse / interligne
  --------- --------- -------- -------------------------------
  Display       64 px    40 px 700 / 1.05
  H1            52 px    36 px 700 / 1.10
  H2            40 px    30 px 700 / 1.15
  H3            28 px    24 px 600 / 1.2
  H4            20 px    18 px 700 / 1.3
  Lead          20 px    18 px 400 / 1.6
  Body          16 px    16 px 400 / 1.65
  Small         14 px    13 px 500 / 1.5
  Eyebrow       12 px    11 px 700 / 1.4, capitales espacées

### Règles

-   Préférer des titres courts, avec une largeur de ligne maîtrisée.
-   Éviter les paragraphes entièrement en capitales.
-   Utiliser les chiffres tabulaires pour les prix, kilométrages et
    données techniques.
-   Garder une hiérarchie claire : un H1 par page, puis H2 et H3.

------------------------------------------------------------------------

## 5. Mise en page et espacements

### Grille

-   Conteneur maximal : `1280 px`.
-   Largeur de lecture : `680–760 px`.
-   Marges desktop : `48–64 px`.
-   Marges tablette : `32 px`.
-   Marges mobile : `20 px`.
-   Grille desktop : 12 colonnes, gouttière `24 px`.
-   Grille mobile : 4 colonnes, gouttière `16 px`.

### Échelle d'espacement

Basée sur un pas de 4 px :

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 120`

-   Espacement entre éléments liés : 8--16 px.
-   Padding d'une carte : 20--24 px.
-   Espacement entre sections : 80--120 px desktop, 56--72 px mobile.
-   Éviter les blocs trop serrés et les grands espaces sans fonction.

### Rayons et contours

-   Petit : `4 px` --- champs et petits contrôles.
-   Standard : `8 px` --- cartes et boutons.
-   Grand : `12 px` --- grands panneaux ou images encadrées.
-   Contours : `1 px solid border`.
-   Pas de cartes « capsule » systématiques ; réserver les formes très
    arrondies aux badges.

------------------------------------------------------------------------

## 6. Photographie automobile

La photographie est le principal élément émotionnel du showroom.

### Direction photo

-   Véhicules photographiés en haute définition, propres et bien
    éclairés.
-   Angles trois-quarts avant et arrière, profil, intérieur, tableau de
    bord, coffre et détails utiles.
-   Décors architecturaux sobres, routes urbaines propres ou studio
    neutre.
-   Lumière naturelle maîtrisée, couleurs fidèles, reflets contrôlés.
-   Montrer le véhicule réellement proposé à la vente ; éviter les
    photos génériques qui pourraient induire le visiteur en erreur.

### Traitement

-   Colorimétrie réaliste et cohérente.
-   Contraste modéré, noirs détaillés, blancs non brûlés.
-   Pas de filtres orange/teal, de HDR agressif ou de saturation
    excessive.
-   Pas de watermark décoratif ni de texte incrusté sur les photos de
    véhicules.
-   Ne pas masquer les défauts visibles d'un véhicule d'occasion.

### Formats

-   Hero : paysage `16:9` ou `2:1`.
-   Carte véhicule : `4:3` ou `3:2`, ratio identique sur toute la
    grille.
-   Galerie : images paysage, avec possibilité d'agrandir.
-   Utiliser `object-fit: cover` pour les vignettes ; sur les vues de
    détail, permettre de voir le véhicule entier sans coupe gênante.

------------------------------------------------------------------------

## 7. Composants d'interface

### Navigation

-   Header blanc, hauteur indicative `80 px` desktop et `68 px` mobile.
-   Logo à gauche, navigation concise, contact visible à droite.
-   Menu mobile dans un panneau blanc opaque, jamais transparent sur le
    contenu.
-   Header fixe uniquement si cela améliore réellement la navigation ;
    ajouter alors un fond plein et une séparation discrète.

### Boutons

**Primaire** - Fond `brand-red`, texte blanc. - Hauteur minimale
`48 px`, padding horizontal `22 px`, rayon `6–8 px`. - Libellés d'action
: « Voir le véhicule », « Contacter sur WhatsApp », « Demander des
informations ».

**Secondaire** - Fond transparent ou blanc, bordure charbon ou `border`,
texte `ink`. - Même hauteur et même rayon que le primaire.

**Texte** - Pour les actions secondaires non prioritaires : lien
souligné au survol, accompagné d'un chevron si nécessaire.

États obligatoires : repos, survol, focus clavier, actif, désactivé et
chargement.

### Cartes véhicule

Structure conseillée : 1. Photographie principale ; 2. badge de statut
si nécessaire (« Disponible », « Réservé », « Vendu ») ; 3. marque,
modèle et version ; 4. prix clairement hiérarchisé ; 5. année,
kilométrage, carburant et transmission ; 6. action « Découvrir ».

-   Fond blanc, bordure fine, rayon `8 px`.
-   Ombre absente au repos ou presque imperceptible.
-   Au survol : léger déplacement ou changement de bordure, jamais
    d'animation spectaculaire.
-   Toute information inconnue doit être omise ou indiquée comme non
    communiquée, jamais inventée.

### Badges

-   Disponibilité : fond `surface-strong`, texte `ink`.
-   Promotion : rouge uniquement si l'offre est réelle et documentée.
-   Statut vendu : gris neutre.
-   Éviter les badges décoratifs multiples.

### Formulaires

-   Champs de hauteur minimale `48 px`.
-   Libellé visible au-dessus du champ.
-   Bordure `border`, focus `brand-red` avec anneau visible.
-   Messages d'erreur explicites, placés près du champ.
-   Demander uniquement les informations utiles au traitement de la
    demande.

### Filtres showroom

-   Recherche par marque/modèle.
-   Filtres possibles selon les données réellement disponibles : budget,
    année, kilométrage, carburant, transmission et état.
-   Sur mobile, afficher les filtres dans un panneau dédié.
-   Toujours rendre visible le nombre de résultats et permettre de
    réinitialiser les filtres.

### Icônes

-   Icônes linéaires simples, cohérentes, de même épaisseur.
-   Utiliser une seule bibliothèque d'icônes.
-   Taille standard : 18--20 px.
-   Pas d'emojis dans l'interface de production.

------------------------------------------------------------------------

## 8. Principes UX du showroom

### Page d'accueil

1.  **Hero** : photographie forte d'un véhicule, promesse claire et deux
    actions maximum.
2.  **Sélection de véhicules** : quelques véhicules réellement
    disponibles.
3.  **Engagements** : qualité, confiance, accompagnement.
4.  **Services automobiles** : vente, accessoires, transit et
    dédouanement, plaque d'immatriculation et carte grise, entretien et
    conseil.
5.  **Présentation de SHA-YO AUTO** : vision et approche de
    l'entreprise.
6.  **Points de vente** : informations pratiques et accès.
7.  **Contact** : WhatsApp et autres coordonnées confirmées.

### Catalogue

-   Grille régulière et filtres faciles à comprendre.
-   Trier par pertinence, nouveauté ou prix si ces données sont
    disponibles.
-   Distinguer clairement les véhicules neufs et d'occasion.
-   Ne pas afficher un véhicule vendu comme disponible.

### Fiche véhicule

-   Galerie photo généreuse.
-   Nom complet, prix et disponibilité.
-   Informations techniques structurées.
-   Description honnête et détaillée.
-   Actions de contact visibles sur ordinateur et mobile.
-   Véhicules similaires uniquement si les données existent.

### Contact et conversion

-   WhatsApp : `+226 73 36 63 63` (numéro communiqué pour SHA YO AUTO à
    Dassasgo).
-   Préremplir le message WhatsApp avec la référence ou le nom du
    véhicule lorsque possible.
-   Ne jamais afficher un faux avis, une fausse note, un faux compteur
    de stock ou une promesse non confirmée.

------------------------------------------------------------------------

## 9. Ton éditorial

### Voix de marque

Professionnelle, directe, rassurante et élégante. SHA-YO AUTO parle avec
assurance, sans exagération ni superlatifs invérifiables.

### Formulations recommandées

-   « Découvrez notre sélection de véhicules. »
-   « Un accompagnement clair à chaque étape. »
-   « Des solutions automobiles adaptées à vos besoins. »
-   « La qualité, la confiance et l'élégance au cœur de notre
    engagement. »

### À éviter

-   « Les meilleurs véhicules du monde » sans preuve.
-   Les promesses absolues (« zéro défaut », « garantie totale ») non
    documentées.
-   Les textes trop longs, les majuscules partout et les accumulations
    de points d'exclamation.

### Signatures

Utiliser les deux signatures selon leur rôle : - **Signature
institutionnelle :** « Qualité, confiance, élégance. » - **Signature de
campagne / expérience :** « L'automobile autrement. »

Ne pas juxtaposer les deux signatures dans chaque section. Elles doivent
garder leur force.

------------------------------------------------------------------------

## 10. Motion et interactions

-   Transitions courtes : `160–220 ms`.
-   Courbe : `ease-out`.
-   Apparition de contenu discrète, sans retarder l'accès aux
    informations.
-   Zoom photo léger au survol, uniquement dans les cartes.
-   Pas de carrousel automatique pour les véhicules.
-   Respecter `prefers-reduced-motion`.
-   Les contrôles doivent rester utilisables au clavier et au toucher.

------------------------------------------------------------------------

## 11. Responsive

### Desktop --- à partir de 1024 px

-   Grille catalogue de 3 ou 4 colonnes selon la largeur.
-   Hero en deux zones ou photographie plein cadre avec texte bien
    contrasté.
-   Filtres visibles dans une barre ou une colonne latérale.

### Tablette --- 768 à 1023 px

-   Grille de 2 colonnes.
-   Navigation simplifiée si nécessaire.
-   Réduire les espacements sans compresser les contenus.

### Mobile --- jusqu'à 767 px

-   Grille de 1 colonne, ou 2 uniquement si les cartes restent
    parfaitement lisibles.
-   CTA de contact facilement accessible.
-   Galerie tactile, sans commandes minuscules.
-   Titres et prix visibles sans zoom.
-   Pas de débordement horizontal.
-   Zone tactile recommandée : `44 × 44 px` minimum.

------------------------------------------------------------------------

## 12. Accessibilité et qualité

-   Contraste conforme WCAG 2.2 AA autant que possible.
-   Navigation complète au clavier et focus toujours visible.
-   Textes alternatifs descriptifs pour les images utiles.
-   Images décoratives avec alternative vide.
-   Champs avec labels explicites et erreurs compréhensibles.
-   Ne pas transmettre une information uniquement par la couleur.
-   Compression des images, formats modernes et chargement différé sous
    la ligne de flottaison.
-   Préserver la netteté du logo ; utiliser un fichier SVG propre dès
    qu'il sera disponible.
-   Tester les pages sur mobile, réseau lent et écran large.

------------------------------------------------------------------------

## 13. Tokens CSS de référence

``` css
:root {
  /* Brand */
  --color-brand: #D64234;
  --color-brand-hover: #B93429;
  --color-charcoal: #43423D;

  /* Text */
  --color-ink: #191919;
  --color-muted: #777570;
  --color-white: #FFFFFF;

  /* Surfaces */
  --color-surface: #F6F5F2;
  --color-surface-strong: #ECEAE6;
  --color-border: #DEDDD9;

  /* Status */
  --color-success: #287A54;
  --color-warning: #A96B1F;
  --color-danger: #B93429;

  /* Typography */
  --font-sans: "Manrope", sans-serif;
  --font-editorial: "DM Serif Display", Georgia, serif;

  /* Layout */
  --container-max: 1280px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Motion */
  --motion-fast: 160ms ease-out;
  --motion-standard: 200ms ease-out;
}
```

------------------------------------------------------------------------

## 14. À ne pas faire

-   Ne pas transformer le site en interface noire et dorée générique.
-   Ne pas multiplier les dégradés, les ombres, les effets glassmorphism
    ou les bordures épaisses.
-   Ne pas utiliser le rouge comme fond de toutes les sections.
-   Ne pas mélanger plusieurs styles d'icônes ou plusieurs familles
    typographiques sans raison.
-   Ne pas utiliser des photos de stock comme si elles représentaient
    les véhicules en vente.
-   Ne pas inventer les prix, caractéristiques, disponibilités,
    garanties, avis clients ou certifications.
-   Ne pas surcharger les fiches avec des animations ou des informations
    secondaires.
-   Ne pas modifier le logo fourni sans validation.

------------------------------------------------------------------------

## 15. Informations de marque à intégrer

Éléments communiqués pour le projet : - **Nom :** SHA-YO AUTO. -
**Activité :** vente de véhicules neufs, d'occasion et de luxe ;
accessoires et services automobiles. - **Services annoncés :** vente de
véhicules et accessoires, transit et dédouanement, plaque
d'immatriculation et carte grise, entretien et conseil. - **WhatsApp
communiqué :** `+226 73 36 63 63`. - **Signature 1 :** « Qualité,
confiance, élégance. » - **Signature 2 :** « L'automobile autrement. » -
**Présence mentionnée :** Dassasgo, Wemtenga et un parc annoncé à Ouaga
2000.

Les adresses, horaires, numéros secondaires et détails d'ouverture
doivent être vérifiés directement auprès de l'entreprise avant
publication. Les informations de ce document décrivent la direction
visuelle et les contenus communiqués ; elles ne constituent pas une
vérification indépendante des implantations ou des offres.

------------------------------------------------------------------------

## 16. Critère final de cohérence

Chaque écran doit répondre à cette question :

**Est-ce que cette interface inspire immédiatement confiance, met le
véhicule au premier plan et donne envie de contacter SHA-YO AUTO ?**

Si un élément décoratif n'améliore ni la compréhension, ni la confiance,
ni la mise en valeur des véhicules, il doit être retiré.
