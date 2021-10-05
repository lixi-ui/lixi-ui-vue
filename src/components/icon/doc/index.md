### Font Iconos

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'lx-icon-' + name"></i>
      <span class="icon-name">{{'lx-icon-' + name}}</span>
    </span>
  </li>
</ul>


### SVG Icon Atributos
| Attribute      | Description    | Type      | Acceptable Value       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| color    | SVG tag's fill attribute | Pick\<CSSProperties, 'color'\> | - | inherit from color |
| size | SVG icon size, size x size | number | - | inherit from font size |