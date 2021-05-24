<template>
    <div class="card" :id="id">
        <div class="card-header">
            <h3 class="card-title">{{title}}</h3>
            <div v-if="pages.length > 1" class="card-tools">
                <div v-if="isFooterPagination" class="text-right">
                   <p>Showing {{currentPage}} from {{pages.length}} pages</p>
                </div>
                <div v-else>
                    <ul class="pagination pagination-sm m-0 float-right">
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);" @click="prevPage" v-html="prev"></a>
                        </li>
                        <li  v-for="page in pages" :key="page.id"
                             class="page-item"
                             :class="{'active': isPageActive(page)}">
                            <a class="page-link" href="javascript:void(0);" @click="loadPage(page)">{{page}}</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);" @click="nextPage" v-html="next"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body" :class="this.theme !=='bordered' ? 'p-0': ''">
            <!-- table -->
            <table class="table" :class="tableStyle">
                <thead>
                  <tr>
                     <th v-for="header in headers" :key="header.text" style="cursor: pointer;" :style="getWidth(header.width)"
                        @click="sort(header.value)">
                         {{ header.text }}
                     </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in getData">
                     <td v-for="field in headers" :key="field.value.id" v-if="item[field.value].html" v-html="item[field.value].html">
                     <td v-else> {{ item[field.value] }} </td>
                  </tr>
                </tbody>
            </table>
            <!-- /.table-->
            <div v-if="isDebug" :class="[theme !== 'bordered' ?'text-center': '']">
                debug: <small>sort = {{currentSort}}, dir = {{currentSortDir}}, page = {{currentPage}}</small>
            </div>
        </div>
        <!-- /.card-body -->
        <div v-if="pages.length > 1" class="card-footer clearfix">
              <div  v-if="isFooterPagination" class="btn-group float-right">
                 <button type="button" class="btn btn-outline-primary" @click="prevPage" v-html="prev"></button>
                 <button  v-for="page in pages" :key="page.id"
                          type="button"
                          @click="loadPage(page)"
                          class="btn"
                          :class="isBtnActive(page)">
                     {{page}}
                 </button>
                 <button type="button" class="btn btn-outline-primary" @click="nextPage" v-html="next"></button>
              </div>
              <div v-else class=" text-center">
                   <p>Showing {{currentPage}} from {{pages.length}} pages</p>
              </div>
        </div>
    </div>
    <!-- /.card -->
</template>

<script>

    export default {
        name: "VaSimpleTable",

        data() {
            return {
                currentSort: 'id',
                currentSortDir: 'asc',
                currentPage: 1,
                currentFilter: '',
            }
        },
        props: {
            id: { type: String },

            prev: { type: String, default: 'Previous' },    // '&laquo;'

            next: {  type: String, default: 'Next' },        // '&raquo;'

            title: { type: String, default: '' },

            theme: {  type: String, default: '' },

            btnTheme: {  type: String, default: 'info' },

            isDebug: { type: Boolean, default: true },

            headers:{ type: Array, required: true },

            data: { type: Array, required: true },

            width: { type: String, default: '' },

            sorted: { type: Boolean, default: true },

            pageSize:{ type: Number, required: false, default: 4 },

            isFooterPagination: { type: Boolean, default: true },
        },
        computed: {
            getData() {
                return this.sorted ? this.sortedData : this.data
            },
            // error: infinite update loop in a component render function - todo
            sortedData() {
                // sort data
                return this.data.sort((a,b) => {
                    let modifier = 1;
                    if(this.currentSortDir === 'desc') modifier = -1;
                    // for html in table
                    if( a[this.currentSort].html ) {
                        if( a[this.currentSort].value < b[this.currentSort].value ) return -1 * modifier;
                        if( a[this.currentSort].value > b[this.currentSort].value ) return 1 * modifier;
                        return 0;
                    }
                    if( a[this.currentSort] < b[this.currentSort] ) return -1 * modifier;
                    if( a[this.currentSort] > b[this.currentSort] ) return 1 * modifier;
                    return 0;
                // pagination sorted data
                }).filter((row, index) => {
                    let start = (this.currentPage-1)*this.pageSize;
                    let end = this.currentPage*this.pageSize;
                    if(index >= start && index < end) return true;
                });
            },
            pages() {
                // how many pages to do we have?
                let p = [];
                let totalPages = Math.ceil(this.data.length / this.pageSize);
                //console.log('totalPages',totalPages);
                for(let i=0; i < totalPages; i++) p.push(i+1);
                return p;
            },
            tableStyle() {
                switch (this.theme) {
                    case 'bordered':
                        return `table-${this.theme}` ;
                    case 'condensed':
                        return `table-sm`;
                    case 'striped':
                        return `table-${this.theme}` ;
                    default:
                        return ''
                }
            },

        },
        methods: {
            sort(s) {
                //if s == current sort, reverse
                if(s === this.currentSort) {
                    this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
                }
                this.currentSort = s;
            },
            nextPage() {
                if((this.currentPage*this.pageSize) < this.data.length) this.currentPage++;
            },
            prevPage() {
                 if(this.currentPage > 1) this.currentPage--;
            },
            loadPage(n) {
                this.currentPage = n;
            },
            isPageActive(n) {
                return this.currentPage === n
            },
            isBtnActive(n) {
                let active = this.isPageActive(n);
                return active ? `btn-${this.btnTheme} active` : `btn-outline-${this.btnTheme} btn-sm`
            },
            getWidth(width) {
                if (width !== '') {
                    return `width: ${width}`
                }
                return ''
            },
        }
    }
</script>

<style>

</style>