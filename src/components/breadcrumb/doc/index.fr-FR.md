## Breadcrumb

Affiche le chemin de la page actuelle, afin de pouvoir naviguer plus facilement.

### Usage


:::demo Dans `lx-breadcrumb`, chaque `lx-breadcrumb-item` est un tag représentant chaque niveau depuis la page d'accueil. Ce Composant possède un attribut de type `String` appelé `separator` qui détermine le séparateur. Sa valeur par défaut est '/'.

```html
<lx-breadcrumb separator="/">
  <lx-breadcrumb-item :to="{ path: '/' }">Accueil</lx-breadcrumb-item>
  <lx-breadcrumb-item><a href="/">Gestion promotions</a></lx-breadcrumb-item>
  <lx-breadcrumb-item>Liste promotions</lx-breadcrumb-item>
  <lx-breadcrumb-item>Détail promotion</lx-breadcrumb-item>
</lx-breadcrumb>
```
:::

### Icône de séparation

:::demo Configurez `separator-class` pour utiliser `iconfont` en tant que séparateur. Cela remplacera `separator`.

```html
<lx-breadcrumb separator-class="lx-icon-arrow-right">
  <lx-breadcrumb-item :to="{ path: '/' }">Accueil</lx-breadcrumb-item>
  <lx-breadcrumb-item>Gestion promotions</lx-breadcrumb-item>
  <lx-breadcrumb-item>Liste promotions</lx-breadcrumb-item>
  <lx-breadcrumb-item>Détail promotion</lx-breadcrumb-item>
</lx-breadcrumb>
```
:::

### Attributs de Breadcrumb
| Attributs      | Description          | Type      | Valeurs acceptées            | Défaut|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | Caractère de séparation | string | — | / |
| separator-class | Classe de l'icône de séparation | string | — | - |

### Attributs de Breadcrumb Item
| Attributs      | Description          | Type      | Valeurs acceptées            | Défaut|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | Route cible du lien, identique au `to` de `vue-router`. | string/object | — | — |
| replace | Si `true`, la navigation ne laissera pas d'historique. | boolean | — | false |
