## Result

Used to give feedback on the result of user's operation or access exception.

### Basic usage

:::demo

```html
<lx-row>
  <lx-col :sm="12" :lg="6">
    <lx-result icon="success" title="Success Tip" subTitle="Please follow the instructions">
      <template #extra>
        <lx-button type="primary" size="medium">Back</lx-button>
      </template>
    </lx-result>
  </lx-col>
  <lx-col :sm="12" :lg="6">
    <lx-result icon="warning" title="Warning Tip" subTitle="Please follow the instructions">
      <template #extra>
        <lx-button type="primary" size="medium">Back</lx-button>
      </template>
    </lx-result>
  </lx-col>
  <lx-col :sm="12" :lg="6">
    <lx-result icon="error" title="Error Tip" subTitle="Please follow the instructions">
      <template #extra>
        <lx-button type="primary" size="medium">Back</lx-button>
      </template>
    </lx-result>
  </lx-col>
  <lx-col :sm="12" :lg="6">
    <lx-result icon="info" title="Info Tip" subTitle="Please follow the instructions">
      <template #extra>
        <lx-button type="primary" size="medium">Back</lx-button>
      </template>
    </lx-result>
  </lx-col>
</lx-row>
```

:::

### Customized content

:::demo

```html
<lx-result title="404" subTitle="Sorry, request error">
  <template #icon>
    <lx-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></lx-image>
  </template>
  <template #extra>
    <lx-button type="primary" size="medium">Back</lx-button>
  </template>
</lx-result>
```

:::

### Result Attributes

| Attribute     | Description    | Type            | Accepted Values      | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| title          | title         | string  |          —             |    —     |
| sub-title    | sub title  | string | — |    —  |
| icon  | icon type    | string  |    success / warning / info / error  |  info |

### Result Slots

| Name | Description |
|------|--------|
| icon | custom icon  |
| title | custom title     |
| subTitle | custom sub title     |
| extra | custom  extra area    |
