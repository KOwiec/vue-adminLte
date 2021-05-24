/**
 * Enable Bootstrap tooltips using Vue directive
 * @author Vitim.us
 * @see https://gist.github.com/victornpb/020d393f2f5b866437d13d49a4695b47
 * @example
 *   <button v-tooltip="foo">Hover me</button>
 *   <button v-tooltip.click="bar">Click me</button>
 *   <button v-tooltip.html="baz">Html</button>
 *   <button v-tooltip:top="foo">Top</button>
 *   <button v-tooltip:left="foo">Left</button>
 *   <button v-tooltip:right="foo">Right</button>
 *   <button v-tooltip:bottom="foo">Bottom</button>
 *   <button v-tooltip:auto="foo">Auto</button>
 *   <button v-tooltip:auto.html="clock" @click="clock = Date.now()">Updating</button>
 *   <button v-tooltip:auto.html.live="clock" @click="clock = Date.now()">Updating Live</button>
 */

export default {
        bind(el, binding) {
            let trigger ='';
            if (binding.modifiers.focus || binding.modifiers.hover || binding.modifiers.click) {
                const t = [];
                if (binding.modifiers.focus) t.push('focus');
                if (binding.modifiers.hover) t.push('hover');
                if (binding.modifiers.click) t.push('click');
                trigger = t.join(' ');
            }
            $(el).tooltip({
                title: binding.value,
                placement: binding.arg,
                trigger: trigger,
                html: binding.modifiers.html
            });
        },
        update(el, binding) {
            const $el = $(el);
            $el.attr('title', binding.value).tooltip('dispose');

            const data = $el.data('bs.tooltip');
            if (binding.modifiers.live) { // update live without flickering (but it doesn't reposition)
                if (data.$tip) {
                    if (data.options.html) data.$tip.find('.tooltip-inner').html(binding.value);
                    else data.$tip.find('.tooltip-inner').text(binding.value);
                }
            } else {
                if (data.inState.hover || data.inState.focus || data.inState.click) $el.tooltip('show');
            }
        },
        unbind(el, binding) {
            $(el).tooltip('destroy');
        },
}