## Bouton

Bouton communément utilisé.

### Usage

:::demo Utilisez `type`, `plain`, `round` et `circle` pour définir le style du bouton.

```html
<lx-row>
  <lx-button>Défaut</lx-button>
  <lx-button type="primary">Primary</lx-button>
  <lx-button type="success">Success</lx-button>
  <lx-button type="info">Info</lx-button>
  <lx-button type="warning">Warning</lx-button>
  <lx-button type="danger">Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button plain>Plein</lx-button>
  <lx-button type="primary" plain>Primary</lx-button>
  <lx-button type="success" plain>Success</lx-button>
  <lx-button type="info" plain>Info</lx-button>
  <lx-button type="warning" plain>Warning</lx-button>
  <lx-button type="danger" plain>Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button round>Arrondi</lx-button>
  <lx-button type="primary" round>Primary</lx-button>
  <lx-button type="success" round>Success</lx-button>
  <lx-button type="info" round>Info</lx-button>
  <lx-button type="warning" round>Warning</lx-button>
  <lx-button type="danger" round>Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button icon="lx-icon-search" circle></lx-button>
  <lx-button type="primary" icon="lx-icon-edit" circle></lx-button>
  <lx-button type="success" icon="lx-icon-check" circle></lx-button>
  <lx-button type="info" icon="lx-icon-message" circle></lx-button>
  <lx-button type="warning" icon="lx-icon-star-off" circle></lx-button>
  <lx-button type="danger" icon="lx-icon-delete" circle></lx-button>
</lx-row>
```

:::

### Bouton désactivé

L'attribut `disabled` détermine si le bouton est désactivé.

:::demo Utilisez l'attribut `disabled` pour déterminer si un bouton est désactivé ou non. Il accepte un `Boolean`.

```html
<lx-row>
  <lx-button disabled>Défaut</lx-button>
  <lx-button type="primary" disabled>Principal</lx-button>
  <lx-button type="success" disabled>Succès</lx-button>
  <lx-button type="info" disabled>Info</lx-button>
  <lx-button type="warning" disabled>Attention</lx-button>
  <lx-button type="danger" disabled>Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button plain disabled>Plein</lx-button>
  <lx-button type="primary" plain disabled>Principal</lx-button>
  <lx-button type="success" plain disabled>Succès</lx-button>
  <lx-button type="info" plain disabled>Info</lx-button>
  <lx-button type="warning" plain disabled>Attention</lx-button>
  <lx-button type="danger" plain disabled>Danger</lx-button>
</lx-row>
```

:::

### Bouton texte

Bouton sans bordure ni fond.

:::demo

```html
<lx-button type="text">Bouton texte</lx-button>
<lx-button type="text" disabled>Bouton texte</lx-button>
```

:::

### Icône

Utilisez des icônes pour ajouter plus de sens aux boutons. Vous pouvez utiliser uniquement l'icône pour économiser de l'espace, ou bien l'utiliser avec du texte.

:::demo Utilisez l'attribut `icon` pour ajouter une icône. Vous pourrez trouver la liste des icônes dans le composant Icon d'Lxement. Ajouter des icônes sur le coté droit du texte est possible grâce à la balise `<i>`. Des icônes personnalisées peuvent également être utilisées.

```html
<lx-button type="primary" icon="lx-icon-edit"></lx-button>
<lx-button type="primary" icon="lx-icon-share"></lx-button>
<lx-button type="primary" icon="lx-icon-delete"></lx-button>
<lx-button type="primary" icon="lx-icon-search">Recherche</lx-button>
<lx-button type="primary"
  >Upload<i class="lx-icon-upload lx-icon-right"></i
></lx-button>
```

:::

### Groupes de boutons

Affiche un groupe de bouton. Peut être utilisé pour grouper un ensemble d'opérations similaires.

:::demo Utilisez la balise `<lx-button-group>` pour grouper vos boutons.

```html
<lx-button-group>
  <lx-button type="primary" icon="lx-icon-arrow-left"
    >Page précédente</lx-button
  >
  <lx-button type="primary"
    >Page suivante<i class="lx-icon-arrow-right lx-icon-right"></i
  ></lx-button>
</lx-button-group>
<lx-button-group>
  <lx-button type="primary" icon="lx-icon-edit"></lx-button>
  <lx-button type="primary" icon="lx-icon-share"></lx-button>
  <lx-button type="primary" icon="lx-icon-delete"></lx-button>
</lx-button-group>
```

:::

### Bouton en chargement

Cliquez sur le bouton pour charger des données et il affichera un état de chargement.

:::demo Configurez l'attribut `loading` à `true` pour afficher un état de chargement.

```html
<lx-button type="primary" :loading="true">Chargement</lx-button>
```

:::

### Tailles

En plus de la taille par défaut, le composant Button fournit trois tailles supplémentaires pour différents scénarios.

:::demo Utilisez l'attribut `size` pour choisir d'autres tailles parmi `medium`, `small` ou `mini`.

```html
<lx-row>
  <lx-button>Défaut</lx-button>
  <lx-button size="medium">Medium</lx-button>
  <lx-button size="small">Small</lx-button>
  <lx-button size="mini">Mini</lx-button>
</lx-row>
<lx-row>
  <lx-button round>Défaut</lx-button>
  <lx-button size="medium" round>Medium</lx-button>
  <lx-button size="small" round>Small</lx-button>
  <lx-button size="mini" round>Mini</lx-button>
</lx-row>
<lx-row>
  <lx-button icon="lx-icon-search" circle></lx-button>
  <lx-button icon="lx-icon-search" size="medium" circle></lx-button>
  <lx-button icon="lx-icon-search" size="small" circle></lx-button>
  <lx-button icon="lx-icon-search" size="mini" circle></lx-button>
</lx-row>
```

:::

### Button Attributs

| Attribut    | Description                                    | Type    | Valeurs acceptées                                  | Défaut |
| ----------- | ---------------------------------------------- | ------- | -------------------------------------------------- | ------ |
| size        | Taille du bouton.                              | string  | medium / small / mini                              | —      |
| type        | Type du bouton.                                | string  | primary / success / warning / danger / info / text | —      |
| plain       | Détermine si le bouton est plein.              | boolean | —                                                  | false  |
| round       | Détermine si le bouton est arrondi.            | boolean | —                                                  | false  |
| circle      | Détermine si le bouton est un cercle.          | boolean | —                                                  | false  |
| loading     | Détermine si l'état de chargement est affiché. | boolean | —                                                  | false  |
| disabled    | Désactive le bouton                            | boolean | —                                                  | false  |
| icon        | Classe de l'icône.                             | string  | —                                                  | —      |
| autofocus   | Identique à l'attribut natif `autofocus`       | boolean | —                                                  | false  |
| native-type | Identique à l'attribut natif `type`            | string  | button / submit / reset                            | button |

### Button-Group Attributes

| Attribute | Description                                      | Type   | Accepted Values       | Default |
| --------- | ------------------------------------------------ | ------ | --------------------- | ------- |
| size      | control the size of buttons in this button-group | string | medium / small / mini | —       |

### Button-Group Slots

| Name    | Description                    |
| ------- | ------------------------------ |
| default | customize button group content |
