<template>
    <div class="input-group">
        <div :class="fileClass" :style="styled">
            <input class="custom-file-input"
                   type="file"
                   ref="fileInput"
                   :id="id"
                   :name="name"
                   @input="handleFileChange"
                   :disabled="isDisabled">
            <label class="custom-file-label" :for="id">{{placeholder}}</label>
        </div>
        <div v-if="appendText" class="input-group-append">
            <span class="input-group-text">{{title}}</span>
        </div>
    </div>
</template>

<script>
    import bsCustomFileInput from 'admin-lte/plugins/bs-custom-file-input/bs-custom-file-input.min.js'
    import Emitter from '@/mixins/emitter-mixin';

    export default {
        name: "VaInputFile",
        mixins: [ Emitter ],
        inject: {
            rootForm: {
                default: ''
            },
            rootFormGroup: {
                default: ''
            }
        },
        props: {
            fileClass:  { type: String, default: 'custom-file' },

            styled: { type: String, default: ''},

            id: { type: String, default: null },

            appendText: { type: Boolean, default: false },

            placeholder: { type: String, default: 'Choose file...' },

            isDisabled: { type: Boolean, default: false },

            title: { type: String, default: 'Upload' },

            name: { type: String, default: null },

            color: { type: String, default: ' success' },
        },
        data() {
            return {
                inputGroup: null,
            }
        },
        mounted() {
               $(function () {
                    bsCustomFileInput.init()
                });
        },
        methods: {
            isGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.componentName !== 'VaFormGroup') {
                        parent = parent.$parent;
                    } else {
                        this.inputGroup = parent;
                        return true;
                    }
                }
                return false;
            },
            handleFileChange(event) {
                var files = event.target.files || event.dataTransfer.files;
                if (!files.length)
                    return;
                this.createFile(files[0]);
            },
            createFile(file) {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    const docs = {
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        path: file.webkitRelativePath,
                        lastModifiedDate: file.lastModifiedDate,
                        base64: reader.result
                    };
                    //console.log(docs);
                    this.$emit('change', docs);
                    this.isGroup && this.dispatch('VaInputGroup', 'input-group-change', docs);
                };
            }
        },
        beforeDestroy () {
                $(function () {
                    bsCustomFileInput.destroy()
                });
        }
    }
</script>

