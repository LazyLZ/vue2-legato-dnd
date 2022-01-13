import {HANDLER_CLASS} from 'legato-dnd'
import Vue from 'vue'

export default Vue.extend({
    name: 'Handler',
    render (h) {
        return h('div', {
            class: [HANDLER_CLASS]
        }, this.$scopedSlots.default())
    }
})
