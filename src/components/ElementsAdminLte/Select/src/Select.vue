<template>
    <div>
        <label :for="id">{{title}}</label>
        <select
                :class="selectClass"
                :id="id"
                :name="name"
                :disabled="isDisabled"
                :multiple="isMultiple">
            <option v-for="item in list"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                    @click="handleItemClick(item)">
                {{ item.label }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "VaSelect",
        componentName: 'VaSelect',
        props: {
            selectClass:  { type: String, default: 'form-control' },

            list: { type: Array, default: [] },

            isDisabled: { type: Boolean, default: false },

            isMultiple: { type: Boolean, default: false },

            title: { type: String },

            name: { type: String },

            id: { type: String }
        },
        methods: {
            handleItemClick(item) {
                if (item.value && !item.disabled) {
                    this.$emit('select', item.value);
                }
            },
        },
    }
</script>

