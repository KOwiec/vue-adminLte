<template>
    <section class="content">
        <content-header
                title="API Example 2"
                subTitle="(json-server)">
        </content-header>
       <div class="content">
           <div class="container-fluid">
               <va-callout type="info"
                           title="Note!"
                           icon="fa fa-info">
                    <div slot="calloutText" class="attachment-block">
                        Instructions for how we use JSON Server:
                        <ul>
                            <li>if script name 'dev' or 'start' in package.json is running, stop it (Ctr+c) </li>
                            <li>in package.json is script name 'start-both' for this example. In terminal write 'npm run start-both'</li>
                            <li>It will open a instance for each command and process - start http://localhost:8080 and http://localhost:3000</li>
                            <li>now we have access by webpack-dev-server to our data in JSON server (see: BACKEND-fake/faker-server/db.json)</li>
                            <li>see: config/index.js - proxyTable in dev property</li>
                        </ul>
                    </div>
                   <div slot="calloutText">
                       <div class="attachment-block">
                           Documentation:
                           <a href="https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/index.html" target="_blank" class="text-success">Faker</a> - AND -
                           <a href="https://github.com/typicode/json-server" target="_blank" class="text-success"> JSON Server </a> - AND -
                           <a href="http://vuejs-templates.github.io/webpack/proxy.html" target="_blank" class="text-success"> API Proxy</a>
                       </div>
                   </div>
               </va-callout>

               <card-table v-loading="peopleLoading"
                           element-loading-text="Loading..."
                           element-loading-spinner="el-icon-loading"
                           element-loading-background="rgba(0, 0, 0, 0.3)"
                           title="Faker People Table"
                           theme="fixed"
                           height="400"
                          :sorted="true"
                          :isPagination="true"
                          filteredColumn="name"
                          :headers="headers"
                          :data="people">
               </card-table>
               <br/>
               <card-table v-loading="productsLoading"
                           element-loading-text="Loading..."
                           element-loading-spinner="el-icon-loading"
                           element-loading-background="rgba(0, 0, 0, 0.3)"
                           title="Faker Products Table"
                           theme="fixed"
                           height="400"
                           :sorted="true"
                           :isPagination="true"
                           filteredColumn="name"
                           :headers="headers2"
                           :data="products">
               </card-table>
           </div>
           <br/>
       </div>
    </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import CardTable from '@/components/ElementsAdminLte/Table/src/CardTable.vue'
    import config from '@/global'
    import axios from 'axios'


    const baseURL =  config.FAKER_BASE_URL + config.PEOPLE_PREFIX
    const baseURL2 =  config.FAKER_BASE_URL + config.PRODUCT_PREFIX

    export default {
        name: "APIFaker",
        components: { ContentHeader, CardTable },
        data () {
            return {
                headers: [
                    {text: 'Name', value: 'name'},
                    {text: 'Email', value: 'email'},
                    {text: 'Phone', value: 'phone'},
                    {text: 'Department', value: 'department'},
                ],
                headers2: [
                    {text:'ID', value:'id'},
                    {text:'Name', value:'name'},
                    {text:'Color', value:'color'},
                    {text:'Department', value:'department'},
                    {text:'Price', value:'price'},
                    {text:'Adjective', value:'adjective'},
                    {text:'Material', value:'material'},
                    {text:'Product', value:'product'}
                ],
                peopleLoading: true,
                productsLoading: true,
                people: [],
                products: []
            }
        },
        created () {
            this.getAllPeople(baseURL);
            this.getAllProducts(baseURL2)
        },
        methods: {
            getAllProducts(url) {
               axios.get(url)
                    .then((response) => {
                        this.products = response.data;
                        this.productsLoading = false
                    })
                    .catch((error) => console.log(error))
            },
            getAllPeople(url) {
                fetch(url)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.people = data;
                        this.peopleLoading = false
                    });
            }
        }
    }
</script>
