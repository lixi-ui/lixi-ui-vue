## Link

Texto con hipervinculo

### Básico

Texto con hipervinculo básico
:::demo

```html
<div>
  <lx-link href="https://element.eleme.io" target="_blank">default</lx-link>
  <lx-link type="primary">primary</lx-link>
  <lx-link type="success">success</lx-link>
  <lx-link type="warning">warning</lx-link>
  <lx-link type="danger">danger</lx-link>
  <lx-link type="info">info</lx-link>
</div>
```

:::

### Deshabilitar

Deshabilita el hipervinculo
:::demo

```html
<div>
  <lx-link disabled>default</lx-link>
  <lx-link type="primary" disabled>primary</lx-link>
  <lx-link type="success" disabled>success</lx-link>
  <lx-link type="warning" disabled>warning</lx-link>
  <lx-link type="danger" disabled>danger</lx-link>
  <lx-link type="info" disabled>info</lx-link>
</div>
```

:::

### Subrayado

Subrayado del hipervinculo
:::demo

```html
<div>
  <lx-link :underline="false">Without Underline</lx-link>
  <lx-link>With Underline</lx-link>
</div>
```

:::

### Icono

Hipervinculo con icono
:::demo

```html
<div>
  <lx-link icon="lx-icon-edit">Edit</lx-link>
  <lx-link>Check<i class="lx-icon-view lx-icon--right"></i> </lx-link>
</div>
```

:::

### Atributos

| Atributo  | Descripción                                          | Tipo    | Opciones                                    | Por defecto |
| --------- | ---------------------------------------------------- | ------- | ------------------------------------------- | ----------- |
| type      | tipo                                                 | string  | primary / success / warning / danger / info | default     |
| underline | si el hipervinculo estara subrayado                  | boolean | —                                           | true        |
| disabled  | si el componente esta deshabilitado                  | boolean | —                                           | false       |
| href      | lo mismo que el valor nativo del hipervinculo `href` | string  | —                                           | -           |
| icon      | nombre de clase del icono                            | string  | —                                           | -           |
