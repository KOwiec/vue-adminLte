<template>
    <section class="content">
        <content-header title="API Example 1"/>

        <div class="content">
            <va-callout type="info"
                        title="Note!"
                        icon="fa fa-info">
                <div slot="calloutText">
                    <div class="attachment-block">
                        for this example we use axios & store (see: services/product.service.js).
                    </div>
                </div>
                <div slot="calloutText">
                   <div class="attachment-block">
                       Documentation for jQuery's DataTables :
                      <a href="https://stackoverflow.com/questions/32755853/implementing-vue-js-datatables-properly" target="_blank" class="text-success">Implementation in Vue - DataTables</a>
                   </div>
                </div>
            </va-callout>

            <em v-if="Products.loading">Loading products...</em>
            <span v-if="Products.error" class="text-danger">ERROR: {{Products.error}}</span>
            <va-card v-if="Products.items" title="Products Data Table ">
                <div slot="content">
                    <va-table
                            id="products"
                            :isBorder= true
                            :isStriped= true
                            :headers="headers"
                            :data="Products.items">
                    </va-table>
                </div>
            </va-card>
            <br/>
        </div>
    </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import { mapGetters, mapActions} from 'vuex';

    export default {
        name: "APIExample",
        components: { ContentHeader },
        data () {
            return {
                headers: [
                    {text:'ID', value:'id'},
                    {text:'Name', value:'name'},
                    {text:'Color', value:'color'},
                    {text:'Department', value:'department'},
                    {text:'Price', value:'price'},
                    {text:'Adjective', value:'adjective'},
                    {text:'Material', value:'material'},
                    {text:'Product', value:'product'}
                ],
                dataTable: null
            }
        },
        created () {
            this.getAllProducts();
            //this.getAllProductsSimply()
        },
        beforeUpdate () {
            if (this.dataTable) {
                this.dataTable.destroy()
            }
        },
        updated () {
            this.dataTable = $("#products").DataTable()
        },
        computed: {
            ...mapGetters([ 'Products' ]),
        },
        methods: {
            ...mapActions('products', { getAllProducts: 'getAll', getAllProductsSimply: 'getAllSimply', })
        }
    }
</script>

<style scoped>

</style>