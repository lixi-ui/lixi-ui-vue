## Radio

Boutons de sélection entre plusieurs options.

### Usage

Radio ne devrait pas avoir trop d'options. Dans ce cas utilisez plutôt Select.

:::demo Créer un composant Radio est facile, vous avez juste besoin de lier les `v-model` des options. Chacun équivaut à la valeur de `label` du radio correspondant. Le type de `label` est `String`, `Number` ou `Boolean`.
```html
<template>
  <div>
    <lx-radio v-model="radio1" label="1">Option 1</lx-radio>
    <lx-radio v-model="radio1" label="2">Option 2</lx-radio>
  </div>
  <div>
    <lx-radio v-model="radio2" label="1" size="medium">Option 1</lx-radio>
    <lx-radio v-model="radio2" label="2" size="medium">Option 2</lx-radio>
  </div>
  <div>
    <lx-radio v-model="radio3" label="1" size="small">Option 1</lx-radio>
    <lx-radio v-model="radio3" label="2" size="small">Option 2</lx-radio>
  </div>
  <div>
    <lx-radio v-model="radio4" label="1" size="mini">Option 1</lx-radio>
    <lx-radio v-model="radio4" label="2" size="mini">Option 2</lx-radio>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1',
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio1: ref('1'),
        radio2: ref('1'),
        radio3: ref('1'),
        radio4: ref('1'),
      }
    }
  })
</setup>
-->
```
:::

### Désactivé

L'attribut `disabled` désactive le radio.

:::demo Ajoutez simplement l'attribut `disabled` au radio.
```html
<template>
  <lx-radio disabled v-model="radio" label="disabled">Option A</lx-radio>
  <lx-radio disabled v-model="radio" label="selected and disabled">Option B</lx-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: 'selected and disabled'
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio: ref('selected and disabled'),
      }
    }
  })
</setup>
-->
```
:::

### Groupe de boutons radio

Utile pour choisir entre plusieurs groupes d'options mutuellement exclusives.

:::demo Combinez `el-radio-group` avec `el-radio` pour afficher un groupe de radios. Liez une variable au `v-model` de `el-radio-group` et configurez le label dans `el-radio`. Cet élément fournit aussi l'évènement `change` qui a en paramètre la valeur courante.

```html
<lx-radio-group v-model="radio">
  <lx-radio :label="3">Option A</lx-radio>
  <lx-radio :label="6">Option B</lx-radio>
  <lx-radio :label="9">Option C</lx-radio>
</lx-radio-group>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio: ref(3),
      }
    }
  })
</setup>
-->
```
:::

### Style bouton

Des radios affichés comme des boutons standards.

:::demo Changez simplement `el-radio` pour `el-radio-button`. L'attribut `size` permet de régler la taille.
```html
<template>
  <div>
    <lx-radio-group v-model="radio1">
      <lx-radio-button label="New York"></lx-radio-button>
      <lx-radio-button label="Washington"></lx-radio-button>
      <lx-radio-button label="Los Angeles"></lx-radio-button>
      <lx-radio-button label="Chicago"></lx-radio-button>
    </lx-radio-group>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio2" size="medium">
      <lx-radio-button label="New York" ></lx-radio-button>
      <lx-radio-button label="Washington"></lx-radio-button>
      <lx-radio-button label="Los Angeles"></lx-radio-button>
      <lx-radio-button label="Chicago"></lx-radio-button>
    </lx-radio-group>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio3" size="small">
      <lx-radio-button label="New York"></lx-radio-button>
      <lx-radio-button label="Washington" disabled ></lx-radio-button>
      <lx-radio-button label="Los Angeles"></lx-radio-button>
      <lx-radio-button label="Chicago"></lx-radio-button>
    </lx-radio-group>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio4" disabled size="mini">
      <lx-radio-button label="New York"></lx-radio-button>
      <lx-radio-button label="Washington"></lx-radio-button>
      <lx-radio-button label="Los Angeles"></lx-radio-button>
      <lx-radio-button label="Chicago"></lx-radio-button>
    </lx-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York'
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio1: ref('New York'),
        radio2: ref('New York'),
        radio3: ref('New York'),
        radio4: ref('New York'),
      }
    }
  })
</setup>
-->
```
:::

### Avec bordures

:::demo L'attribut `border` ajoute une bordure aux radios.
```html
<template>
  <div>
    <lx-radio v-model="radio1" label="1" border>Option A</lx-radio>
    <lx-radio v-model="radio1" label="2" border>Option B</lx-radio>
  </div>
  <div style="margin-top: 20px">
    <lx-radio v-model="radio2" label="1" border size="medium">Option A</lx-radio>
    <lx-radio v-model="radio2" label="2" border size="medium">Option B</lx-radio>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio3" size="small">
      <lx-radio label="1" border>Option A</lx-radio>
      <lx-radio label="2" border disabled>Option B</lx-radio>
    </lx-radio-group>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio4" size="mini" disabled>
      <lx-radio label="1" border>Option A</lx-radio>
      <lx-radio label="2" border>Option B</lx-radio>
    </lx-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio1: ref('1'),
        radio2: ref('1'),
        radio3: ref('1'),
        radio4: ref('1'),
      }
    }
  })
</setup>
-->
```
:::

### Attributs de Radio

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut |
| ---- | ---- | ---- | ---- | ---- |
| model-value / v-model | La valeur liée. | string / number / boolean | — | — |
| label | La valeur du radio. | string / number / boolean | — | — |
| disabled | Si le radio est désactivé. | boolean | — | false |
| border  | Si une bordure doit être affichée autour du radio. | boolean   | — | false |
| size  | Taille du radio | string  | medium / small / mini | — |
| name | Attribut 'name' natif. | string | — | — |

### Évènements de Radio

| Nom | Description | Paramètres |
| --- | --- | --- |
| change | Se déclenche quand la valeur change. | La valeur du label. |

### Attributs de Radio-group

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut
| ---- | ---- | ---- | ---- | ---- |
| model-value / v-model | La valeur liée. | string / number / boolean | — | — |
| size | Taille des radios. | string | medium / small / mini | —
| disabled  | Si les radios sont désactivés. | boolean   | — | false
| text-color | Couleur du texte quand le bouton est actif. | string | — | #ffffff   |
| fill  | Bordure et couleur de fond quand le bouton est actif. | string | — | #409EFF |

### Évènements de Radio-group

| Nom | Description | Paramètres |
| --- | --- | --- |
| change | Se déclenche quand la valeur change. | La valeur du label. |

### Attributs Radio-button

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut |
| ---- | ---- | ---- | ---- | ---- |
| label | Valeur du radio. | string / number | — | — |
| disabled | Si le radio est désactivé. | boolean | — | false |
| name | Attribut 'name' natif. | string | — | — |
