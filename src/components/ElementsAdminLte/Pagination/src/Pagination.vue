<template>
    <div>
      <div v-if="isBtnPagination" class="btn-group"  :class="[align]">
         <button v-if="isPrevNext"
                 type="button"
                 class="btn btn-outline-primary"
                 @click="prevPage"
                 v-html="prev">
         </button>

         <button v-for="page in pages"
                 type="button"
                 class="btn"
                 :class="isBtnActive(page)"
                 @click="loadPage(page)">
             {{page}}
         </button>

         <button v-if="isPrevNext"
                 type="button"
                 class="btn btn-outline-primary"
                 @click="nextPage"
                 v-html="next">
         </button>
      </div>

      <div v-else>
        <ul class="pagination" :class="[ pagination, align ]">
           <li v-if="isPrevNext" class="page-item">
               <a class="page-link"
                  href="javascript:void(0);"
                  @click="prevPage"
                  v-html="prev">
               </a>
           </li>
           <li  v-for="page in pages"
                class="page-item"
                :class="{'active': isPageActive(page)}">
                <a class="page-link"
                   href="javascript:void(0);"
                   @click="loadPage(page)">
                    {{page}}
                </a>
           </li>
           <li v-if="isPrevNext" class="page-item">
                <a class="page-link "
                   href="javascript:void(0);"
                   @click="nextPage"
                   v-html="next">
                </a>
           </li>
        </ul>
      </div>

   </div>
</template>

<script>
    export default {
        name: "VaPagination",
        data() {
            return {
                currentPage: 1
            }
        },
        props: {
            prev: { type: String,  default:'&laquo;' },

            next: { type: String, default:'&raquo;' },

            isPrevNext:  { type: Boolean, default: true },

            theme: { type: String, default: 'primary' },

            btnTheme: {  type: String, default: 'info' },

            data: { type: Array, required: true },

            pageSize:{ type: Number, required: false, default: 4 },

            isBtnPagination: { type: Boolean, default: true },

            align: { type: String, default: '' },

            isPagination: { type: Boolean, default: true },
        },
        computed: {
            pagination () {
                return this.isPagination ? 'pagination-sm m-0': 'justify-content-center m-0'
            },
            pages() {
                // how many pages to do we have?
                let p = [];
                let totalPages = Math.ceil(this.data.length / this.pageSize);
                //console.log('totalPages: ',totalPages);
                for(let i=0; i < totalPages; i++) p.push(i+1);
                return p;
            }
        },
        methods: {
            nextPage() {
                if ( this.currentPage < this.data.length ) {
                    this.currentPage++;
                    //console.log(this.currentPage);
                    this.$emit('new-page', this.currentPage)
                }
            },
            prevPage() {
                if( this.currentPage > 1 ) this.currentPage--;
                //console.log(this.currentPage);
                this.$emit('new-page', this.currentPage)

            },
            loadPage(page) {
                this.currentPage = page;
                this.$emit('new-page', this.currentPage)
            },
            isPageActive(page) {
                return this.currentPage === page
            },
            isBtnActive(page) {
                let active = this.isPageActive(page);
                return active ? `btn-${this.btnTheme} active` : `btn-outline-${this.btnTheme} btn-sm`
            }
        }
    }

</script>

<style>

</style>