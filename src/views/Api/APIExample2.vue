<template>
    <section class="content">
        <content-header
                title="API Example 2">
        </content-header>
       <div class="content">
           <div class="container-fluid">
               <va-callout type="info"
                           title="Note!"
                           icon="fa fa-info">
                    <div slot="calloutText" class="attachment-block">
                        for this API example we use fetch() method:
                        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" class="text-success"> Using Fetch</a>
                    </div>
                   <div slot="calloutText" class="attachment-block">
                       JSZip is a javascript library for creating, reading and editing .zip files, more:
                       <a href="https://stuk.github.io/jszip/documentation/examples.html" target="_blank" class="text-success"> How to use JSZip</a>
                   </div>
               </va-callout>

               <card-table v-loading="peopleLoading"
                           element-loading-text="Loading..."
                           element-loading-spinner="el-icon-loading"
                           element-loading-background="rgba(0, 0, 0, 0.3)"
                           title="People Table"
                           theme="fixed"
                           height="400"
                          :sorted="true"
                          :isPagination="true"
                          filteredColumn="name"
                          :headers="headers"
                          :data="people">
               </card-table>

               <va-input-group
                       style="width:400px; padding-bottom: 15px;"
                       groupType="input">
                   <va-input v-model="filename" placeholder="Please enter the file name (default 'file')" />
                   <va-button :loading="downloadLoading"
                              slot="slotSuffixButton"
                              name="Export Zip"
                              icon="el-icon-document"
                              theme="info"
                              @btn-click="handleDownload">
                   </va-button>
               </va-input-group>

               <!-- Contacts box  -->
               <contacts-card :data="people"/>

           </div>
           <br/>
       </div>
    </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import CardTable from '@/components/ElementsAdminLte/Table/src/CardTable.vue'
    import ContactsCard from './components/ContactsCard.vue'
    import config from '@/global'

    const baseURL =  config.API_BASE_URL + config.PEOPLE_PREFIX

    export default {
        name: "APIExample2",
        components: { ContentHeader, CardTable, ContactsCard },
        data () {
            return {
                headers: [
                    {text: 'Name', value: 'name'},
                    {text: 'Email', value: 'email'},
                    {text: 'Phone', value: 'phone'},
                    {text: 'Department', value: 'department'},
                ],
                peopleLoading: true,
                downloadLoading: false,
                filename: '',
                people: [],
            }
        },
        /* fetch method */
        created () {
            fetch(baseURL)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.people = data;
                    this.peopleLoading = false
                });
        },
        methods: {
            handleDownload() {
                this.downloadLoading = true
                console.log(this.filename)
                import('@/utils/Export2Zip').then(zip => {
                    const tHeader = [ 'ID','Avatar','Street','Name','City','ZipCode','StateAbbr','Email','Phone','Department','Jobs']
                    const filterVal = ['id','avatar','street','name','city','zipCode','stateAbbr','email','phone','department','jobs']
                    const list = this.people
                    const data = this.formatJson(filterVal, list)
                    zip.export_txt_to_zip(tHeader, data, this.filename, this.filename)
                    this.downloadLoading = false
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            }
        }
    }
</script>
