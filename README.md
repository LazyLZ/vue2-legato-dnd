# Vue Legato DnD

Vue2 component for [Legato Dnd](https://github.com/LazyLZ/legato-dnd).

See legato-dnd docs for option and event descriptions.

This library is for Vue 2.x, for Vue 3.x please see here: [vue-legato-dnd](https://github.com/LazyLZ/vue-legato-dnd)

## Basic Usage

```vue

<template>
    <DragContainer>
        <Draggable>Item1</Draggable>
        <Draggable>Item1</Draggable>
        <Draggable>Item1</Draggable>
    </DragContainer>
</template>
<script>
import { DragContainer, Draggable } from 'vue-legato-dnd'

export default {
    components: { DragContainer, Draggable }
}
</script>
```

## Bind with Items

```vue

<template>
    <DragContainer
        :items="items"
        @orderChange="onOrderChange"
    >
        <Draggable v-for="t in items" :key="t.name">{t.name}</Draggable>
    </DragContainer>
</template>
<script>
export default {
    data: () => ({
        items: [
            { name: 'Alice' },
            { name: 'Bob' },
            { name: 'Candy' },
        ]
    }),
    methods: {
        onOrderChange ({ order }) {
            this.items = order.map(i => this.items[i])
        }
    }
}
</script>

```
