<template>
  <section class="content">
    <!-- Content Header (Page header) -->
    <content-header title="Text Editors"/>

    <!-- Main content -->
    <div class="content">
      <div class="row">
        <div class="col-md-12">

          <va-card theme="info" title="Classic Editor 5" desc=" - Advanced and full of features" WidgetSet="default" :isOutline="true">
            <div slot="content">
              <div class="mb-3">
                <textarea id="editor1" name="editor1" style="width: 100%">
                  This is my textarea to be replaced with CKEditor.
                </textarea>
              </div>
              <p class="text-sm mb-0">Please adhere to the <a href="https://ckeditor.com/ckeditor-5-builds/#classic" target="_blank">CKEditor</a>
                license when using it!</p>
            </div>
          </va-card>

          <va-card theme="info" title="Summernote " desc="- Simple and fast" WidgetSet="default" :isOutline="true">
            <div slot="content">
              <div class="mb-3">
                <textarea class="textarea"
                          style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">
                  Place <em>some</em> <u>text</u> <strong>here</strong>
                </textarea>
              </div>
              <p class="text-sm mb-0">
                Editor <a href="https://summernote.org/getting-started/#get-summernote" target="_blank">Documentation and license
                information.</a>
              </p>
            </div>
          </va-card>

          <va-card theme="info" title="CodeMirror" WidgetSet="default" :isOutline="true">
            <div slot="content">
              <div class="mb-3">
                  <textarea id="codeMirrorDemo" class="p-3">
                     <div class="info-box bg-gradient-info">
                         <span class="info-box-icon"><i class="far fa-bookmark"></i></span>
                         <div class="info-box-content">
                             <span class="info-box-text">Bookmarks</span>
                             <span class="info-box-number">41,410</span>
                             <div class="progress">
                                <div class="progress-bar" style="width: 70%"></div>
                             </div>
                             <span class="progress-description">
                                   70% Increase in 30 Days
                              </span>
                         </div>
                     </div>
                  </textarea>
              </div>
              <p class="text-sm mb-0">
                Editor <a href="https://codemirror.net/" target="_blank">CodeMirror</a> documentation for more examples and information about the plugin.
              </p>
            </div>
          </va-card>

        </div>
        <!-- /.col-->
      </div>
      <!-- ./row -->
    </div>
    <!-- /.content -->
  </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    //Classic Editor
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor'
    // Codemirror
    import CodeMirror from 'codemirror/lib/codemirror.js'
    import 'codemirror/lib/codemirror.css'
    import 'codemirror/mode/css/css.js'
    import 'codemirror/theme/monokai.css'
    import 'codemirror/mode/xml/xml.js'
    import 'codemirror/mode/htmlmixed/htmlmixed.js'

    export default {
        name: "Compose",
        components: { ContentHeader },
        data() {
            return {
                jsonEditor: false
            }
        },

        created () {
            $(function () {
                // Summernote
                $('.textarea').summernote()

                ClassicEditor
                    .create( document.querySelector( '#editor1' ) )
                    .then( editor => {
                        console.log( editor );
                    } )
                    .catch( error => {
                        console.error( error );
                    });
                })

         },
        mounted() {
            this.jsonEditor = CodeMirror.fromTextArea(document.getElementById("codeMirrorDemo"), {
                lineNumbers: true,
                mode: "htmlmixed",
                theme: "monokai"
            })
        }
    }
</script>

<style scoped>

</style>