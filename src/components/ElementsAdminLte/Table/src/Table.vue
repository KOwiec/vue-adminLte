<template>
    <table class="table" :class="[ tableStyle, text ]" :id="id">
        <thead v-if="isHeader">
            <tr>
               <th v-for="header in headers" :key="header.text"
                       style="cursor: pointer;"
                       :style="getWidth"
                       @click="sort(header.value)">
                   {{ header.text }}
               </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in getData" :key="item.id"
                :class="{ hover: item.hover }"
                @mouseover="item.hover = true"
                @mouseleave="item.hover = false">

               <td v-for="field in headers" :key="field.value"
                      v-if="item[field.value].html" v-html="item[field.value].html">
               <td v-else-if="item[field.value].dynamic">
                   <dynamic-html :html="item[field.value].dynamic"/>
               </td>
               <td v-else>
                   {{ item[field.value] }}
               </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import DynamicHtml from '@/components/Dynamic/dynamic-html.vue'

    export default {
        name: "VaTable",
        components: { DynamicHtml},
        props: {
            id: { type: String },

            headers:{ type: Array, required: true },

            data: { type: Array, required: true },

            isHeader: { type: Boolean, default: true },

            theme: {  type: String, default: '' },

            text: { type: String, default: 'text-center' },

            sorted: { type: Boolean, default: false },

            pagination: { type: Boolean, default: false },

            currentFilter: { type: String, default: '' },

            filtered: { type: String, default: '' },

            pageSize:{ type: Number, required: false, default: 4 },

            currentPage:{ type: Number },

            width: { type: String, default: '' },

        },
        data() {
            return {
                currentSort: 'id',
                currentSortDir: 'asc',
                currentData: null
            }
        },
        computed: {
            getData() {
                this.filteredData(this.filtered)
                if(this.pagination) {
                    return this.sorted ? this.paginatedData(this.sortedData) : this.paginatedData(this.currentData)
                } else {
                    return this.sorted ? this.sortedData : this.currentData
                }
            },

            sortedData() {

                // sort data
                return this.currentData.sort((a,b) => {
                    let modifier = 1;
                    if(this.currentSortDir === 'desc') modifier = -1;
                    if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                    if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                    return 0;
                })
            },

            tableStyle() {
                switch (this.theme) {
                    case 'bordered':
                        return `table-${this.theme}` ;
                    case 'condensed':
                        return `table-sm`;
                    case 'striped':
                        return `table-${this.theme}` ;
                    case 'hover':
                        return `table-${this.theme} text-nowrap` ;
                    case 'fixed':
                        return `table-head-${this.theme} text-nowrap`;
                    default:
                        return ''
                }
            },
            getWidth () {
                if (this.width) {
                    return `width: ${this.width}`
                }
                return ''
            },
        },
        methods: {
            sort(s) {
                if (!this.sorted) return;
                // if s == current sort, reverse
                if(s === this.currentSort) {
                    this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
                }
                this.currentSort = s;
            },
            paginatedData(data){
                let start = (this.currentPage-1)*this.pageSize;
                let end = this.currentPage*this.pageSize;
                return data.slice(start, end)
            },
            filteredData(filtered) {
                let filter = this.currentFilter.toLowerCase();
                // search user - for table/simple-table
                if(filtered === 'user') {
                    this.currentData = this.data.filter((row,index) => {
                        return (this.currentFilter === '' || this.data[index].user.toLowerCase().indexOf(filter) >= 0)
                    });
                    // search name - for api/api-faker-2
                } else if(filtered === 'name') {
                    this.currentData = this.data.filter((row,index) => {
                        return (this.currentFilter === '' || this.data[index].name.toLowerCase().indexOf(filter) >= 0)
                    });
                } else {
                    this.currentData = this.data
                }
            },
        }
    }
</script>

<style>
    tr.hover {
        background: #ededed;
    }
</style>