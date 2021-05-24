<template>
    <!-- Contacts box  -->
    <div class="card card-solid">
        <div class="card-body pb-0">
            <div class="row d-flex align-items-stretch">
                <div v-for="person in paginatedData" :key="person.id" class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                    <contact :item="person"/>
                </div>
            </div>
        </div>
        <!-- /.card-body -->
        <div class="card-footer">
            <nav aria-label="Contacts Page Navigation">
                <va-pagination
                        :isBtnPagination="false"
                        :isPagination="false"
                        :isPrevNext="false"
                        :data="data"
                        :pageSize=12
                        @new-page="onPageChange"
                />
            </nav>
        </div>
        <!-- /.card-footer -->
    </div>
</template>

<script>
    import Contact from '@/components/Widgets/Contact/Contact.vue'

    export default {
        name: "ContactsCard",
        components: { Contact },
        data () {
            return {
                pageSize: 12,
                currentPage: 1,
            }
        },
        props: {
            data: { type: Array, required: true },
        },

        computed: {
            paginatedData(){
                let start = (this.currentPage-1)*this.pageSize;
                let end = this.currentPage*this.pageSize;
                return this.data.slice(start, end)
            },
        },
        methods: {
            onPageChange(page) {
                this.currentPage = page;
            },
        },
    }
</script>

<style scoped>

</style>