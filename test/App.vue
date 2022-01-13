<template>
    <Playground/>
</template>
<script>
import Vue from 'vue'
import Playground from './views/BasePlayground.vue'
// import Playground from './views/DropPlayground.vue'
// import Playground from './views/PerformanceTest.vue'
export default Vue.extend({
    components: { Playground }
})

</script>
