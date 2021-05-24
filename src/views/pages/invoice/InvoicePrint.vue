<template>
        <!--Invoice -->
        <div class="invoice p-3 mb-3" id="invoice" v-loading.fullscreen.lock="loading" element-loading-text="Efforts to generate PDF">
            <!-- title row -->
            <div class="row">
                <div class="col-12">
                    <h2 class="page-header">
                        <i class="fas fa-globe"></i> AdminLTE, Inc.
                        <small class="float-right">Date: 2/10/2014</small>
                    </h2>
                </div>
                <!-- /.col -->
            </div>
            <!-- info row -->
            <div class="row invoice-info">
                <div class="col-sm-4 invoice-col">
                    From
                    <address>
                        <strong>Admin, Inc.</strong><br>
                        795 Folsom Ave, Suite 600<br>
                        San Francisco, CA 94107<br>
                        Phone: (804) 123-5432<br>
                        Email: info@almasaeedstudio.com
                    </address>
                </div>
                <!-- /.col -->
                <div class="col-sm-4 invoice-col">
                    To
                    <address>
                        <strong>John Doe</strong><br>
                        795 Folsom Ave, Suite 600<br>
                        San Francisco, CA 94107<br>
                        Phone: (555) 539-1037<br>
                        Email: john.doe@example.com
                    </address>
                </div>
                <!-- /.col -->
                <div class="col-sm-4 invoice-col">
                    <b>Invoice #007612</b><br>
                    <br>
                    <b>Order ID:</b> 4F3S8J<br>
                    <b>Payment Due:</b> 2/22/2014<br>
                    <b>Account:</b> 968-34567
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->

            <!-- Table row -->
            <div class="row">
                <div class="col-12 table-responsive">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>Qty</th>
                            <th>Product</th>
                            <th>Serial #</th>
                            <th>Description</th>
                            <th>Subtotal</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Call of Duty</td>
                            <td>455-981-221</td>
                            <td>El snort testosterone trophy driving gloves handsome</td>
                            <td>$64.50</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Need for Speed IV</td>
                            <td>247-925-726</td>
                            <td>Wes Anderson umami biodiesel</td>
                            <td>$50.00</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Monsters DVD</td>
                            <td>735-845-642</td>
                            <td>Terry Richardson helvetica tousled street art master</td>
                            <td>$10.70</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Grown Ups Blue Ray</td>
                            <td>422-568-642</td>
                            <td>Tousled lomo letterpress</td>
                            <td>$25.99</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->

            <div class="row">
                <!-- description column -->
                <div class="col-6">
                    <p class="lead">Description:</p>

                    <p class="text-muted well well-sm shadow-none" style="margin-top: 10px;">
                        Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr
                        jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                    </p>
                </div>
                <!-- /.col -->
                <div class="col-6">
                    <p class="lead">Amount Due 2/22/2014</p>

                    <div class="table-responsive">
                        <table class="table">
                            <tr>
                                <th style="width:50%">Subtotal:</th>
                                <td>$250.30</td>
                            </tr>
                            <tr>
                                <th>Tax (9.3%)</th>
                                <td>$10.34</td>
                            </tr>
                            <tr>
                                <th>Shipping:</th>
                                <td>$5.80</td>
                            </tr>
                            <tr>
                                <th>Total:</th>
                                <td>$265.24</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <!-- /.col -->
            </div>

            <div class="row">
                <div class="col-6">
                    <p class="overline" >legible signature of the buyer.</p>
                </div>
                <div class="col-6">
                   <p class="overline">legible signature of the seller.</p>
                </div>
            </div>
        </div>
</template>

<script>
    import html2pdf from 'html2pdf.js'

    export default {
        name: "invoicePrint",
        props: {
            doPrint: { type: Boolean, default: false  },

            doPdf: { type: Boolean, default: false  },

            fileName: { type: String, default: 'invoice' },

            data: { type: Object }
        },
        data () {
            return {
                loading: false,
            }
        },
        watch: {
            doPrint(val) {
                if (!val) return;
                   this.printSection()
                   this.$emit('print-over')
            },
            doPdf(val) {
                if (!val) return;
                   this.printPdf()
                   this.$emit('pdf-over')
            }
        },
        methods: {
            printSection() {
                const modal = document.getElementById('invoice');
                const cloned = modal.cloneNode(true)
                let section = document.getElementById("print")

                if (!section) {
                    section  = document.createElement("div")
                    section.id = "print"
                    document.body.appendChild(section)
                }
                section.innerHTML = "";
                section.appendChild(cloned);
                this.$nextTick(() => {
                    window.print()
                })
            },
            async createCanvas() {
                const content = document.getElementById('invoice').innerHTML;
                const opt = {
                    margin: 0.5,      // [vMargin, hMargin], or [top, left, bottom, right]
                    filename: `${this.fileName}.pdf`,
                    image:  { type: 'jpeg', quality: 0.98 },
                    html2canvas: {  scale: 2, scrollX: 0, scrollY: 0,  letterRendering: true },
                    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'p' }
                };
                return { content: content, options: opt }
            },
            async printPdf() {
                this.loading = true
                let { options, content } = await this.createCanvas()

                setTimeout(() => {
                    //html2pdf().set(options).from(content).save();  //short

                    html2pdf().set(options).from(content).toPdf().get('pdf').then( (pdfObj) => {

                        let pdfPages = pdfObj.internal.pages;
                        let totalPages = pdfObj.internal.getNumberOfPages();
                        //let headerImg = '/static/img/icons/vue2-adminlte-logo-64x64.png';
                        for (let i = 1; i < pdfPages.length; i++) {
                            pdfObj.setPage(i);
                            pdfObj.setFontSize(9);
                            pdfObj.setTextColor(150);
                            pdfObj.text('This is ' + options.filename, (pdfObj.internal.pageSize.getWidth()/2.40), (pdfObj.internal.pageSize.getHeight()-0.3));
                            pdfObj.text('Page ' + i + ' of ' + totalPages, (pdfObj.internal.pageSize.getWidth()/2.25), (pdfObj.internal.pageSize.getHeight()-0.1));

                            //pdfObj.addImage(headerImg, 0, 0, 0 , 0);
                        }}).save();
                    this.loading = false
                }, 5000)
            }
        }
    }
</script>

<style lang="scss">
    #invoice {
        outline: red solid 1px;
        page-break-inside: avoid;
    }
    .overline {
        text-decoration: overline;
        padding: 30px 40px 20px
    }
    @media screen {
        #print {
            display: none;
        }
    }

    @media print {
        body * {
            visibility:hidden;
        }
        #print, #print * {
            visibility:visible;
        }
        #print {
            position:absolute;
            left:0;
            top:0;
            margin: 0;
            padding: 0;
            overflow: visible!important;
        }
    }
</style>