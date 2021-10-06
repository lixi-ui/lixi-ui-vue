## Link

Un hyperlien textuel.

### Usage basique

Lien texte basique.

:::demo

```html
<div>
  <lx-link href="https://element.eleme.io" target="_blank">défaut</lx-link>
  <lx-link type="primary">primaire</lx-link>
  <lx-link type="success">succès</lx-link>
  <lx-link type="warning">avertissement</lx-link>
  <lx-link type="danger">danger</lx-link>
  <lx-link type="info">info</lx-link>
</div>
```

:::

### Désactivé

Lien désactivé.

:::demo

```html
<div>
  <lx-link disabled>défaut</lx-link>
  <lx-link type="primary" disabled>primaire</lx-link>
  <lx-link type="success" disabled>succès</lx-link>
  <lx-link type="warning" disabled>avertissement</lx-link>
  <lx-link type="danger" disabled>danger</lx-link>
  <lx-link type="info" disabled>info</lx-link>
</div>
```

:::

### Souligné

Lien souligné.

:::demo

```html
<div>
  <lx-link :underline="false">non souligné</lx-link>
  <lx-link>Souligné</lx-link>
</div>
```

:::

### Icône

Lien avec icône.

:::demo

```html
<div>
  <lx-link icon="el-icon-edit">Éditer</lx-link>
  <lx-link>Vérifier<i class="el-icon-view el-icon--right"></i> </lx-link>
</div>
```

:::

### Attributs

| Attribut  | Description                     | Type    | Options                                     | Défaut  |
| --------- | ------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | Type du lien.                   | string  | primary / success / warning / danger / info | défaut  |
| underline | Si le composant est souligné.   | boolean | —                                           | true    |
| disabled  | Si le composant est désactivé.  | boolean | —                                           | false   |
| href      | Identique au `href` natif.      | string  | —                                           | -       |
| icon      | Nom de classe de l'icône.       | string  | —                                           | -       |
