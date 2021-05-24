//InputMask - https://github.com/RobinHerbots/Inputmask
import 'admin-lte/plugins/inputmask/jquery.inputmask.min.js'

let Settings = {
    getInputMaskOptions : function(binding) {
        return binding.value;
    },

    getTargetElement : function(sourceEl) {
        if (sourceEl.tagName === 'INPUT') {
            return sourceEl;
        }

        if (sourceEl.dataset['inputmaskTarget']) {
            return sourceEl.querySelector(sourceEl.dataset['inputmaskTarget']);
        }

        return sourceEl.querySelector('input:not([readonly])');
    }
};

export default {
    bind: function (el, binding, vnode) {
        let inputEl = Settings.getTargetElement(el);
        let maskOptions = Settings.getInputMaskOptions(binding);

        if (maskOptions) Inputmask(maskOptions).mask(inputEl);
    },

    unbind: function (el, binding, vnode) {
        let inputEl = Settings.getTargetElement(el);

        if (inputEl && inputEl.inputmask) {
            inputEl.inputmask.remove();
        }
    },

    componentUpdated: function(el, binding){
        let inputEl = Settings.getTargetElement(el);
        let maskOptions = Settings.getInputMaskOptions(binding);

        if (binding.value !== binding.oldValue) {
            if (inputEl.inputmask) {
                inputEl.inputmask.remove();
            }

            Inputmask(maskOptions).mask(inputEl);
        }
    }
}