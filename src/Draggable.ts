import {HANDLER_CLASS, DRAGGABLE_CLASS} from 'legato-dnd'
import Vue from 'vue'

export default Vue.extend({
    name: 'Draggable',
    props: {
        handler: {type: Boolean, default: true},
    },
    render(h) {
        const cls = [DRAGGABLE_CLASS]
        if (this.handler) {
            cls.push(HANDLER_CLASS)
        }
        const defaultSlot = this.$scopedSlots.default
        return h('div', {
            class: cls,
        }, defaultSlot ? defaultSlot() : undefined)
    },
})
