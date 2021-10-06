## NavMenu

Menu qui fournit un système de navigation à votre site.

### Barre du haut

La barre du haut peut être utilisée pour différents scénarios.

:::demo Par défaut le menu est vertical, mais vous pouvez le passer en horizontal en réglant l'attribut `mode` sur 'horizontal'. De plus, vous pouvez utiliser le composant sub-menu pour créer un second niveau niveau de menu. Le menu utilises `background-color`, `text-color` et `active-text-color` pour personnaliser les couleurs.
```html
<lx-menu :default-active="activeIndex" class="lx-menu-demo" mode="horizontal" @select="handleSelect">
  <lx-menu-item index="1">Centre de traitement</lx-menu-item>
  <lx-sub-menu index="2">
    <template #title>Lieu de travail</template>
    <lx-menu-item index="2-1">item un</lx-menu-item>
    <lx-menu-item index="2-2">item deux</lx-menu-item>
    <lx-menu-item index="2-3">item trois</lx-menu-item>
    <lx-sub-menu index="2-4">
      <template #title>item quatre</template>
      <lx-menu-item index="2-4-1">item un</lx-menu-item>
      <lx-menu-item index="2-4-2">item deux</lx-menu-item>
      <lx-menu-item index="2-4-3">item trois</lx-menu-item>
    </lx-sub-menu>
  </lx-sub-menu>
  <lx-menu-item index="3" disabled>Infos</lx-menu-item>
  <lx-menu-item index="4">Commandes</lx-menu-item>
</lx-menu>
<div class="line"></div>
<lx-menu
  :default-active="activeIndex2"
  class="lx-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <lx-menu-item index="1">Centre de traitement</lx-menu-item>
  <lx-sub-menu index="2">
    <template #title>Lieu de travail</template>
    <lx-menu-item index="2-1">item un</lx-menu-item>
    <lx-menu-item index="2-2">item deux</lx-menu-item>
    <lx-menu-item index="2-3">item trois</lx-menu-item>
    <lx-sub-menu index="2-4">
      <template #title>item quatre</template>
      <lx-menu-item index="2-4-1">item un</lx-menu-item>
      <lx-menu-item index="2-4-2">item deux</lx-menu-item>
      <lx-menu-item index="2-4-3">item trois</lx-menu-item>
    </lx-sub-menu>
  </lx-sub-menu>
  <lx-menu-item index="3" disabled>Info</lx-menu-item>
  <lx-menu-item index="4">Commandes</lx-menu-item>
</lx-menu>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const activeIndex = ref('1');
      const activeIndex2 = ref('1');
      const handleSelect = (key, keyPath) => {
        console.log(key, keyPath);
      };
      return {
        activeIndex,
        activeIndex2,
        handleSelect,
      };
    },
  });

</setup>
-->
```
:::

### Barre latérale

Menu vertical avec sous-menus.

:::demo Vous pouvez utiliser le composant lx-menu-item-group pour créer un groupe dans le menu dont le nom sera déterminé par celui de la propriété title ou d'un slot.
```html
<lx-row class="tac">
  <lx-col :span="12">
    <h5>Couleurs par défaut</h5>
    <lx-menu
      default-active="2"
      class="lx-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <lx-sub-menu index="1">
        <template #title>
          <i class="lx-icon-location"></i>
          <span>Navigateur Un</span>
        </template>
        <lx-menu-item-group title="Group Un">
          <lx-menu-item index="1-1">item un</lx-menu-item>
          <lx-menu-item index="1-2">item un</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="Group Deux">
          <lx-menu-item index="1-3">item trois</lx-menu-item>
        </lx-menu-item-group>
        <lx-sub-menu index="1-4">
          <template #title>item quatre</template>
          <lx-menu-item index="1-4-1">item un</lx-menu-item>
        </lx-sub-menu>
      </lx-sub-menu>
      <lx-menu-item index="2">
        <i class="lx-icon-menu"></i>
        <span>Navigateur Deux</span>
      </lx-menu-item>
      <lx-menu-item index="3" disabled>
        <i class="lx-icon-document"></i>
        <span>Navigateur Trois</span>
      </lx-menu-item>
      <lx-menu-item index="4">
        <i class="lx-icon-setting"></i>
        <span>Navigateur Quatre</span>
      </lx-menu-item>
    </lx-menu>
  </lx-col>
  <lx-col :span="12">
    <h5>Couleurs personnalisées</h5>
    <lx-menu
      default-active="2"
      class="lx-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <lx-sub-menu index="1">
        <template #title>
          <i class="lx-icon-location"></i>
          <span>Navigateur Un</span>
        </template>
        <lx-menu-item-group title="Group Un">
          <lx-menu-item index="1-1">item un</lx-menu-item>
          <lx-menu-item index="1-2">item un</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="Group Deux">
          <lx-menu-item index="1-3">item trois</lx-menu-item>
        </lx-menu-item-group>
        <lx-sub-menu index="1-4">
          <template #title>item quatre</template>
          <lx-menu-item index="1-4-1">item un</lx-menu-item>
        </lx-sub-menu>
      </lx-sub-menu>
      <lx-menu-item index="2">
        <i class="lx-icon-menu"></i>
        <span>Navigateur Deux</span>
      </lx-menu-item>
      <lx-menu-item index="3" disabled>
        <i class="lx-icon-document"></i>
        <span>Navigateur Trois</span>
      </lx-menu-item>
      <lx-menu-item index="4">
        <i class="lx-icon-setting"></i>
        <span>Navigateur Quatre</span>
      </lx-menu-item>
    </lx-menu>
  </lx-col>
</lx-row>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const handleOpen = (key, keyPath) => {
        console.log(key, keyPath);
      };
      const handleClose = (key, keyPath) => {
        console.log(key, keyPath);
      };
      return {
        handleOpen,
        handleClose,
      };
    },
  });

</setup>
-->
```
:::

### Menu réduit

Le menu vertical peut être réduit.

:::demo
```html
<lx-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <lx-radio-button :label="false">Agrandir</lx-radio-button>
  <lx-radio-button :label="true">Réduire</lx-radio-button>
</lx-radio-group>
<lx-menu default-active="2" class="lx-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <lx-sub-menu index="1">
    <template #title>
      <i class="lx-icon-location"></i>
      <span>Navigateur Un</span>
    </template>
    <lx-menu-item-group>
      <template #title><span>Group Un</span></template>
      <lx-menu-item index="1-1">item un</lx-menu-item>
      <lx-menu-item index="1-2">item deux</lx-menu-item>
    </lx-menu-item-group>
    <lx-menu-item-group title="Group Deux">
      <lx-menu-item index="1-3">item trois</lx-menu-item>
    </lx-menu-item-group>
    <lx-sub-menu index="1-4">
      <template #title><span>item quatre</span></template>
      <lx-menu-item index="1-4-1">item un</lx-menu-item>
    </lx-sub-menu>
  </lx-sub-menu>
  <lx-menu-item index="2">
    <i class="lx-icon-menu"></i>
    <template #title>Navigator Deux</template>
  </lx-menu-item>
  <lx-menu-item index="3" disabled>
    <i class="lx-icon-document"></i>
    <template #title>Navigator Trois</template>
  </lx-menu-item>
  <lx-menu-item index="4">
    <i class="lx-icon-setting"></i>
    <template #title>Navigator Quatre</template>
  </lx-menu-item>
</lx-menu>

<style>
  .lx-menu-vertical-demo:not(.lx-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const isCollapse = ref(true);
      const handleOpen = (key, keyPath) => {
        console.log(key, keyPath);
      };
      const handleClose = (key, keyPath) => {
        console.log(key, keyPath);
      };
      return {
        isCollapse,
        handleOpen,
        handleClose,
      };
    },
  });

</setup>
-->
```
:::

### Attributs du menu

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | Mode d'affichage du menu.   | string  |   horizontal / vertical   | vertical |
| collapse  | Si le menu peut être réduit, uniquement disponible en mode vertical. | boolean  |   —   | false |
| background-color  | Couleur de fond du menu (format hexadécimal). | string |   —   | #ffffff |
| text-color  | Couleur du texte du menu (format hexadécimal) | string |   —   | #303133 |
| active-text-color  | Couleur du texte de l'item actif (format hexadécimal). | string |   —   | #409EFF |
| default-active | Index du menu actif. | string    | — | — |
| default-openeds | Liste contenant les index les sous-menus actifs.  | Array    | — | — |
| unique-opened  | Si un seul sous-menu peut être actif.  | boolean   | — | false   |
| menu-trigger | Comment les sous-menu sont déclenchés, uniquement en mode horizontal. | string    | hover / click | hover |
| router  | Si le mode `vue-router` est activé. Si `true`, l'index sera utilisé comme 'path' pour activer la route. | boolean   | — | false   |
| collapse-transition  | Si la transition de réduction doit être activée. | boolean   | — | true   |

### Méthodes du menu

| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| open  | Ouvre un sous-menu spécifique. | index: index du sous-menu à ouvrir |
| close  | Ferme un sous-menu spécifique. | index: index du sous-menu à fermer |

### Évènements du menu

| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| select  | Fonction de callback pour quand le menu est activé. | index: index du menu activé, indexPath: index path du menu activé, item : l'élément de menu sélectionné, routeResult : le résultat retourné par `vue-router` si `router` est activé.  |
| open  | Fonction de callback pour quand le sous-menu s'agrandit. | index: index of expanded sous-menu, indexPath: index path du sous-menu |
| close  | Fonction de callback pour quand le sous-menu se réduit. | index: index of collapsed sous-menu, indexPath: index path du sous-menu |

### Évènements des items du menu

| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| click  | Fonction de callback pour quand le menu-item est cliqué. | el: instance du menu-item.  |

### Attributs du sous-menu

| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------- |---------- |-------------  |-------- |
| index     | Identificateur unique. | string  | — | — |
| popper-class | Classe du menu popup. | string | — | — |
| show-timeout | Délai avant de montrer un sous-menu. | number | — | 300 |
| hide-timeout | Délai avant de cacher un sous-menu. | number | — | 300 |
| disabled | Si le sous-menu est désactivé. | boolean | — | false |
| popper-append-to-body | S'il faut ajouter un menu popup au body. Si le positionnement du body n'est pas bon, vous pouvez essayer de régler cette propriété. | boolean | - | Sous-menus de niveau 1: true / autres sous-menus: false |

### Attributs des items du menu

| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------- |---------- |-------------  |-------- |
| index     | Identificateur unique. | string/null  | — | null |
| route     | Objet Vue Router. | object | — | — |
| disabled | Si l'item est désactivé. | boolean | — | false |

### Attributs des groupes

| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------- |---------- |-------------  |-------- |
| title     | Titre du groupe. | string  | — | — |
