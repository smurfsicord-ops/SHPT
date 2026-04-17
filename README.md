# 🌿 Octipa — Shopify Theme

Thème Shopify OS 2.0 inspiré d'[Octipa](https://octipa.com/), conçu pour une marque de soins naturels premium.

## ✨ Fonctionnalités

- **Online Store 2.0** — sections glisser-déposer dans l'éditeur Shopify
- **9 sections configurables** : Hero, Avantages, Collection, Guide absorption, Packs, Témoignages, FAQ, Blog, CTA
- **Panier tiroir** + **menu mobile** animés
- **FAQ accordéon**, scroll reveal, galerie produit avec miniatures
- **Design responsive** — mobile first
- **Palette rose poudré + or** — élégante et naturelle
- Typo : Cormorant Garamond (titres) + DM Sans (corps)

## 📂 Structure

```
├── assets/          # CSS, JS, images
│   ├── base.css     # Design tokens (couleurs, typo, espacements)
│   ├── theme.css    # Styles de tous les composants
│   └── theme.js     # Interactions (cart drawer, FAQ, scroll reveal…)
├── config/          # Paramètres du thème
├── layout/          # theme.liquid (layout principal)
├── locales/         # Traductions (fr)
├── sections/        # 10 sections (header, footer + 9 home)
├── snippets/        # cart-drawer, mobile-nav
└── templates/       # index, product, collection, page, cart
```

## 🚀 Installation sur Shopify

### Option 1 — Upload ZIP (recommandé)

1. Télécharger le repo : **Code → Download ZIP**
2. Aller dans **Shopify Admin → Online Store → Themes**
3. Cliquer **Add theme → Upload zip file**
4. Sélectionner le ZIP téléchargé
5. Cliquer **Customize** pour personnaliser

### Option 2 — Shopify CLI (développeurs)

```bash
npm install -g @shopify/cli @shopify/theme
shopify theme push --store=votre-boutique.myshopify.com
```

## ⚙️ Configuration initiale

Après installation :

1. **Navigation** — Créer un menu `main-menu` dans *Online Store → Navigation*
2. **Images** — Uploader vos photos dans chaque section via l'éditeur
3. **Produits** — Remplir les blocs dans "Collection vedette"
4. **Footer** — Ajouter vos liens réseaux sociaux

## 🎨 Sections disponibles

| Section | Description |
|---|---|
| `header` | Navigation sticky + panier + menu mobile |
| `hero` | Hero split image/texte avec stats |
| `features-bar` | Barre 4 avantages (livraison, naturel, garantie…) |
| `featured-collection` | Grille produits avec badges |
| `absorption-guide` | Guide de choix produit avec niveaux |
| `packs` | Packs "Everyday" avec économies |
| `testimonials` | Grille 6 avis clients |
| `faq` | Accordéon questions/réponses |
| `featured-blog` | 3 articles du journal |
| `cta-banner` | Bannière appel à l'action |
| `footer` | Footer 4 colonnes + réseaux sociaux |

## 🛠 Développement local avec Shopify CLI

```bash
git clone https://github.com/VOTRE-USER/octipa-theme.git
cd octipa-theme
shopify theme dev --store=votre-boutique.myshopify.com
```

## 📄 Licence

MIT
