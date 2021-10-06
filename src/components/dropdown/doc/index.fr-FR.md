## Dropdown
Menu déroulant pour afficher des listes de liens et d'actions possibles.

### Usage
Passez sur le menu avec la souris pour dérouler son contenu.

:::demo L'élément déclencheur est généré par le `slot` par défaut, et le menu déroulant est généré par le `slot` appelé `dropdown`. Par défaut le menu apparaît simplement en passant la souris sur l'élément déclencheur, sans avoir à cliquer.

```html
<lx-dropdown>
  <span class="lx-dropdown-link">
    Menu déroulant<i class="lx-icon-arrow-down lx-icon--right"></i>
  </span>
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item disabled>Action 4</lx-dropdown-item>
      <lx-dropdown-item divided>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
  .lx-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
</style>

```

:::

### Élément déclencheur

Utilisez le bouton pour ouvrir le menu déroulant.

:::demo Utilisez `split-button` pour séparer le déclencheur du reste du bouton, ce dernier devenant la partie gauche et le déclencheur la partie droite.
```html
<lx-dropdown>
  <lx-button type="primary">
    Liste déroulante<i class="lx-icon-arrow-down lx-icon--right"></i>
  </lx-button>
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
      <lx-dropdown-item>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>
<lx-dropdown split-button type="primary" @click="handleClick">
  Liste déroulante
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
      <lx-dropdown-item>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
  .lx-dropdown {
    vertical-align: top;
  }
  .lx-dropdown + .lx-dropdown {
    margin-left: 15px;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const handleClick = () => {
        alert('button click');
      };
      return {
        handleClick,
      };
    },
  });

</setup>
-->
```
:::

### Déclencheur

Vous pouvez choisir de déclencher le menu au moment du clic, ou en passant la souris sur l'élément.

:::demo Utilisez l'attribut `trigger`. Par défaut, il est à `hover`.

```html
<lx-row class="block-col-2">
  <lx-col :span="8">
    <span class="demonstration">En passant la souris</span>
    <lx-dropdown>
      <span class="lx-dropdown-link">
        Liste déroulante<i class="lx-icon-arrow-down lx-icon--right"></i>
      </span>
      <template #dropdown>
        <lx-dropdown-menu>
          <lx-dropdown-item icon="lx-icon-plus">Action 1</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-plus">Action 2</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-plus-outline">Action 3</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-check">Action 4</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-check">Action 5</lx-dropdown-item>
        </lx-dropdown-menu>
      </template>
    </lx-dropdown>
  </lx-col>
  <lx-col :span="8">
    <span class="demonstration">En cliquant</span>
    <lx-dropdown trigger="click">
      <span class="lx-dropdown-link">
        Liste déroulante<i class="lx-icon-arrow-down lx-icon--right"></i>
      </span>
      <template #dropdown>
        <lx-dropdown-menu>
          <lx-dropdown-item icon="lx-icon-plus">Action 1</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-plus">Action 2</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-plus-outline">Action 3</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-check">Action 4</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-check">Action 5</lx-dropdown-item>
        </lx-dropdown-menu>
      </template>
    </lx-dropdown>
  </lx-col>
  <lx-col :span="8">
    <span class="demonstration">Par clic droit</span>
    <lx-dropdown trigger="contextmenu">
      <span class="lx-dropdown-link">
        Liste déroulante<i class="lx-icon-arrow-down lx-icon--right"></i>
      </span>
      <template #dropdown>
        <lx-dropdown-menu>
          <lx-dropdown-item icon="lx-icon-plus">Action 1</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-plus">Action 2</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-plus-outline">Action 3</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-check">Action 4</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-check">Action 5</lx-dropdown-item>
        </lx-dropdown-menu>
      </template>
    </lx-dropdown>
  </lx-col>
</lx-row>

<style>
  .lx-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: var(--lx-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
```
:::

### Fermer le menu

Utilisez l'attribut `hide-on-click` pour déterminer si le menu se ferme après avoir cliqué sur un élément de la liste.

:::demo Par défaut le menu se ferme après avoir cliqué dans la liste. Vous pouvez changer cette option en mettant `hide-on-click` à `false`.
```html
<lx-dropdown :hide-on-click="false">
  <span class="lx-dropdown-link">
    Liste déroulante<i class="lx-icon-arrow-down lx-icon--right"></i>
  </span>
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item disabled>Action 4</lx-dropdown-item>
      <lx-dropdown-item divided>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
  .lx-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
</style>
```
:::

### Évènement command

Cliquer sur un élément du dropdown déclenche un évènement "command".
Le paramètre de cet évènement peut être assigné à chaque élément de la liste.

:::demo
```html
<lx-dropdown @command="handleCommand">
  <span class="lx-dropdown-link">
    Liste déroulante<i class="lx-icon-arrow-down lx-icon--right"></i>
  </span>
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item command="a">Action 1</lx-dropdown-item>
      <lx-dropdown-item command="b">Action 2</lx-dropdown-item>
      <lx-dropdown-item command="c">Action 3</lx-dropdown-item>
      <lx-dropdown-item command="d" disabled>Action 4</lx-dropdown-item>
      <lx-dropdown-item command="e" divided>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
  .lx-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { LxMessage } from 'element-plus';

  export default defineComponent({
    setup() {

      const handleCommand = (command) => {
        LxMessage(`click on item ${command}`);
      };
      return {
        handleCommand,
      };
    },
  });

</setup>
-->
```
:::

### Tailles

En plus de la taille par défaut, le composant Dropdown propose trois autres tailles différentes.

:::demo Utilisez `size` pour déterminer une autre taille parmi `medium`, `small` ou `mini`.

```html
<lx-dropdown split-button type="primary">
  Défaut
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<lx-dropdown size="medium" split-button type="primary">
  Medium
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<lx-dropdown size="small" split-button type="primary">
  Small
  <template #dropdown>
    <lx-dropdown-menu>
    <lx-dropdown-item>Action 1</lx-dropdown-item>
    <lx-dropdown-item>Action 2</lx-dropdown-item>
    <lx-dropdown-item>Action 3</lx-dropdown-item>
    <lx-dropdown-item>Action 4</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<lx-dropdown size="mini" split-button type="primary">
  Mini
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>
```
:::

### Attributs du Dropdown

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type          | Type du bouton, se référer au composant `Button`. Ne marche que si `split-button` est `true`.  | string  |  —   |    —     |
| size          | Taille du menu, marche aussi avec `split button`.  | string  | medium / small / mini  |    —     |
| max-height    | the max height of menu  | string / number  |     —    |    —     |
| split-button | Si le bouton est séparé en deux. | boolean         |     —       | false   |
| disabled     | Désactiver ou non | boolean | — | false |
| placement    | Emplacement du menu déroulant | string | top/top-start/top-end/bottom/bottom-start/bottom-end  | bottom |
| trigger       | Comment déclencher l'ouverture du menu.     | string  |    hover/click/contextmenu  |  hover |
| hide-on-click | Si le menu doit disparaître après avoir cliqué sur un élément.     | boolean          | — | true |
| show-timeout | Délai avant d'afficher le menu (ne marche que si `trigger` est `hover`) | number | — | 250 |
| hide-timeout | Délai avant de cacher le menu (ne marche que si `trigger` est `hover`) | number | — | 150 |
| tabindex     | [tabindex](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/tabindex) de Dropdown | number | — | 0 |

### Dropdown Slots

| Nom | Description |
|------|--------|
| — | Contenu du Dropdown. Note: doit être un élément du DOM valide (ex. `<span>, <button> etc.`) ou `el-component`, pour y attacher un évènement.  |
| dropdown | Contenu du menu du Dropdown, en général un élément `<lx-dropdown-menu>`. |

### Évènements du Dropdown

| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| click | Si `split-button` est `true`, se déclenche quand le bouton de gauche est cliqué. | — |
| command | Se déclenche quand un élément de la liste est cliqué. | L'attribut command de l'élément de la liste. |
| visible-change | Se déclenche quand le menu s'affiche ou disparaît. | `true` quand il apparaît, `false` sinon. |

### Attributs des éléments du menu

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| command       | Le contenu à envoyer au callback de l'évènement `command` du Dropdown. | string/number/object  |          —             |    —     |
| disabled      | Si l'élément est désactivé.  | boolean  |          —             |    false     |
| divided       | Si un diviseur doit être affiché.  | boolean  |          —             |    false     |
| icon          | Classe de l'icône. | string   |  —  |  —  |
