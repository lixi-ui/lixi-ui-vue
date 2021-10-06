## Tag

Les tags sont utiles sont marquer certaines données afin d'ajouter des informations et de les retrouver plus facilement.

### Usage

:::demo Utilisez l'attribut `type` pour définir le type de tag. De plus, l'attribut `color` détermine la couleur de fond.

```html
<lx-tag>Tag 1</lx-tag>
<lx-tag type="success">Tag 2</lx-tag>
<lx-tag type="info">Tag 3</lx-tag>
<lx-tag type="warning">Tag 4</lx-tag>
<lx-tag type="danger">Tag 5</lx-tag>
```
:::

### Supprimer des tags

:::demo L'attribut `closable` détermine si un tag est supprimable grâce à un `Boolean`. Par défaut la suppression bénéficie d'un animation de fading. Utilisez `disable-transitions` si vous ne souhaitez pas d'animations en utilisant un `Boolean` à `true`. L'évènement `close` se déclenche quand un tag est supprimé.

```html
<lx-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</lx-tag>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: 'Tag 1', type: '' },
          { name: 'Tag 2', type: 'success' },
          { name: 'Tag 3', type: 'info' },
          { name: 'Tag 4', type: 'warning' },
          { name: 'Tag 5', type: 'danger' }
        ]
      };
    }
  }
</script>
```
:::

### Édition dynamique

Vous pouvez utiliser l'évènement `close` pour ajouter et supprimer des tags dynamiquement.

:::demo
```html
<lx-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</lx-tag>
<lx-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="mini"
  @keyup.enter="handleInputConfirm"
  @blur="handleInputConfirm"
>
</lx-input>
<lx-button v-else class="button-new-tag" size="small" @click="showInput">+ Nouveau Tag</lx-button>

<style>
  .lx-tag + .lx-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>
```
:::

### Tailles

En plus de la taille par défaut, Tag fournit d'autres tailles pour vos composants.

:::demo Utilisez `size` pour choisir une autre taille parmi `medium`, `small` ou `mini`.

```html
<lx-tag>Défaut</lx-tag>
<lx-tag size="medium">Medium</lx-tag>
<lx-tag size="small">Small</lx-tag>
<lx-tag size="mini">Mini</lx-tag>
```
:::

### Theme

Les balises utilisent trois thèmes différents: `dark`, `light` et `plain`

:::demo Utilisez `effect` pour changer. La valeur par défaut est `light`
```html
<div class="tag-group">
  <span class="tag-group__title">Dark</span>
  <lx-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="dark">
    {{ item.label }}
  </lx-tag>
</div>
<div class="tag-group">
  <span class="tag-group__title">Plain</span>
  <lx-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="plain">
    {{ item.label }}
  </lx-tag>
</div>

<script>
  export default {
    data() {
      return {
        items: [
          { type: '', label: 'Tag 1' },
          { type: 'success', label: 'Tag 2' },
          { type: 'info', label: 'Tag 3' },
          { type: 'danger', label: 'Tag 4' },
          { type: 'warning', label: 'Tag 5' }
        ]
      }
    }
  }
</script>
```
:::

### Checkable tag

Sometimes because of the business needs, we might need checkbox like tag, but **button like checkbox** cannot meet our needs, here comes `check-tag`

:::demo basic check-tag usage, the API is rather simple.
```html

<div>
  <lx-check-tag checked style="margin-right: 8px;">Checked</lx-check-tag>
  <lx-check-tag @change="onChange" :checked="checked">Toggle me</lx-check-tag>
</div>

<script>
  export default {
    data() {
      return {
        checked: false,
      }
    },
    methods: {
      onChange(checked) {
        this.checked = checked;
      }
    }
  }
</script>

```
:::


### Attributs

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | Type du tag. | string | success/info/warning/danger | — |
| closable | Si le tag peut être supprimé. | boolean | — | false |
| disable-transitions | Si les animations sont désactivées. | boolean | — | false |
| hit | Si le tag à une bordure mise en valeur. | boolean | — | false |
| color | Couleur de fond du tag. | string | — | — |
| size | Taille du tag. | string | medium / small / mini | — |
| effect | component theme | string | dark / light / plain | light |

### Évènements

| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| click | Se déclenche quand le tag est cliqué. | — |
| close | Se déclenche quand le tag est supprimé. | — |

### CheckTag Attributs
| Attribute      | Description          | Type      | Accepted                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| checked | is checked | boolean | true/false | — |

### CheckTag Évènements
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change | triggers when Check Tag is clicked | checked |