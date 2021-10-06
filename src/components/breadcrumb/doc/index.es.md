## Breadcrumb

Muestra la localización de la página actual, haciendo más fácil el poder ir a la página anterior.

### Uso básico


:::demo En `el-breadcrumb`, cada `el-breadcrumb-item` es un tag que representa cada nivel empezando desde la homepage. Este componente tiene un atributo `String` llamado `separator`, el mismo determina el carácter separador. Lx valor por defecto es '/'.

```html
<lx-breadcrumb separator="/">
  <lx-breadcrumb-item :to="{ path: '/' }">homepage</lx-breadcrumb-item>
  <lx-breadcrumb-item><a href="/">promotion management</a></lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion list</lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion detail</lx-breadcrumb-item>
</lx-breadcrumb>
```
:::

### Icono separador

:::demo Setee `separator-class` para que utilice `iconfont` como separador，el mismo va a cubrir `separator`

```html
<lx-breadcrumb separator-class="el-icon-arrow-right">
  <lx-breadcrumb-item :to="{ path: '/' }">homepage</lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion management</lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion list</lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion detail</lx-breadcrumb-item>
</lx-breadcrumb>
```
:::

### Breadcrumb atributos
| Atributo        | Descripción                            | Tipo   | Valores aceptados | Por defecto |
| --------------- | -------------------------------------- | ------ | ----------------- | ----------- |
| separator       | carácter separador                     | string | —                 | /           |
| separator-class | nombre de la clase del icono separador | string | —                 | -           |

### Breadcrumb Item atributos
| Atributo | Descripción                              | Tipo          | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | ------------- | ----------------- | ----------- |
| to       | ruta del link, lo mismo que `to` de `vue-router` | string/object | —                 | —           |
| replace  | si `true`,  la navegación no dejara una entrada en la historia | boolean       | —                 | false       |





