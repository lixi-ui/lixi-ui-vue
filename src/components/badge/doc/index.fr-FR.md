## Badge

Un nombre ou un status affiché par-dessus un bouton ou un icône.

### Usage

Affiche le nombre de nouveaux messages.

:::demo La quantité est définit par `value` qui accepte un `Number` ou un `String`.

```html
<lx-badge :value="12" class="item">
  <lx-button size="small">Commentaires</lx-button>
</lx-badge>
<lx-badge :value="3" class="item">
  <lx-button size="small">Réponses</lx-button>
</lx-badge>
<lx-badge :value="1" class="item" type="primary">
  <lx-button size="small">Commentaires</lx-button>
</lx-badge>
<lx-badge :value="2" class="item" type="warning">
  <lx-button size="small">Réponses</lx-button>
</lx-badge>

<lx-dropdown trigger="click">
  <span class="el-dropdown-link">
    Cliquez<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <template #dropdown>
    <lx-dropdown-menu >
      <lx-dropdown-item class="clearfix">
        Commentaires
        <lx-badge class="mark" :value="12" />
      </lx-dropdown-item>
      <lx-dropdown-item class="clearfix">
        Réponses
        <lx-badge class="mark" :value="3" />
      </lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Valeur maximale

Vous pouvez configurer la valeur maximale.

:::demo La valeur maximale est définit par `max` qui accepte un `Number`. Ceci ne marche qui si `value` est également un `Number`.

```html
<lx-badge :value="200" :max="99" class="item">
  <lx-button size="small">Commentaires</lx-button>
</lx-badge>
<lx-badge :value="100" :max="10" class="item">
  <lx-button size="small">Réponses</lx-button>
</lx-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Configuration

Affiche du texte autre que des nombres.

:::demo Quand `value` est un `String`, il affiche un texte personnalisé.

```html
<lx-badge value="new" class="item">
  <lx-button size="small">Commentaires</lx-button>
</lx-badge>
<lx-badge value="hot" class="item">
  <lx-button size="small">Réponses</lx-button>
</lx-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Point rouge

Utilisez un point rouge pour signaler du contenu devant être remarqué.

:::demo Utilisez l'attribut `is-dot` qui est un `Boolean`.

```html
<lx-badge is-dot class="item">Requète</lx-badge>
<lx-badge is-dot class="item">
  <lx-button class="share-button" icon="el-icon-share" type="primary"></lx-button>
</lx-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributs

| Attribut     | Description     | Type            | Valeurs acceptées       | Défaut |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | Valeur affichée.   | string, number  |          —            |    —    |
| max           |  Valeur maximale, affiche '{max}+' quand elle est dépassée. Ne marche que si `value` est un `Number`.   | number  |         —              |     —    |
| is-dot        | Affiche un point rouge. | boolean   |    —           |  false  |
| hidden        | Cache le badge.    | boolean         |          —            |  false  |
| type          | Type du bouton.     | string          | primary / success / warning / danger / info |   —  |
