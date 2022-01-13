import {HANDLER_CLASS} from 'legato-dnd'
import Vue from 'vue'

export default Vue.extend({
    name: 'Handler',
    render (h) {
        const defaultSlot = this.$scopedSlots.default
        return h('span', {
            class: [HANDLER_CLASS]
        }, defaultSlot ? defaultSlot() : undefined)
    }
})
