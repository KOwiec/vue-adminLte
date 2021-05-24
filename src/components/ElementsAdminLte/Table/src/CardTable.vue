<template>
    <div class="card" :id="id">
        <div class="card-header">
            <h3 class="card-title">{{title}}</h3>
            <div class="input-group input-group-sm float-right" style="width: 180px; padding-left: 30px;">
                <input v-model="currentFilter" type="search" name="table_search" class="form-control float-right" :placeholder="placeholder">
                <div class="input-group-append">
                    <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                </div>
            </div>
            <div v-if="isPagination" :class="pagination">
                <va-pagination
                        :isBtnPagination="false"
                        :isPagination="false"
                        :isPrevNext="false"
                        :data="data"
                        :pageSize="pageSize"
                        @new-page="onPageChange"
                />
            </div>
        </div>

        <div class="card-body table-responsive p-0" :style="getHeight(height)">
            <!-- table -->
            <va-table :theme="theme"
                      :data="data"
                      :headers="headers"
                      :sorted="sorted"
                      :filtered="filteredColumn"
                      :currentFilter="currentFilter"
                      :currentPage="currentPage"
                      :pageSize="pageSize"
                      :pagination="isPagination"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: "VaCardTable",
        data() {
            return {
                currentFilter: '',
                pageSize: 12,
                currentPage: 1,
            }
        },
        props: {
            title: { type: String, default: '' },

            theme: { type: String, default: '' },

            id: { type: String },

            headers:{ type: Array,  required: true },

            data: { type: Array, required: true },

            sorted: { type: Boolean, default: false },

            isPagination: { type: Boolean, default: false },

            filteredColumn: { type: String },

            width: { type: String, default: '' },

            height: { type: String, default: '' },

            alignTools: { type: Boolean, default: false },
        },
        created () {
            if ( this.theme === 'hover') {
                // make hover atr in data
                this.data.forEach((item) => {
                    this.$set(item, 'hover', false)
                });
            }
        },
        computed: {
            placeholder() {
                return this.filteredColumn ? `Search ${this.filteredColumn}` : 'Search'
            },
            pagination() {
                return this.alignTools ? 'card-tools' : ''
            }
        },
        methods: {
           getHeight(height) {
                if (height !== '') {
                    return `height: ${height}px;`
                }
                return ''
            },
            onPageChange(page) {
                this.currentPage = page;
            },
        }
    }
</script>

<style>

</style>