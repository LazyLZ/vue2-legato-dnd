import {HANDLER_CLASS, DRAGGABLE_CLASS} from 'legato-dnd'
import Vue from 'vue'
export default Vue.extend({
    name: 'Draggable',
    render (h) {
        return h('div', {
            class: [DRAGGABLE_CLASS, HANDLER_CLASS]
        }, this.$scopedSlots.default())
    }
})
