<template>
  <div class="err404-container">
     <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>404 Error Page</h1>
          </div>
        </div>
     </div>

     <div class="error-page">
         <h2 class="headline text-warning"> 404</h2>

         <div class="error-content">
           <h3><i class="fa fa-warning text-warning"></i> Oops! Page not found.</h3>

           <p>
             {{ message }}
             Meanwhile, you may <a :href="linkDocs" target="_blank">check documentation</a> or return to home page
           </p>
           <img src="@/assets/errors/arrow2.png" alt="404">
           <br/><br/>
           <a href="#" class="return-home">
             Back to home
           </a>
         </div>
     </div>
  </div>
</template>

<script>

    export default {
        name: "Page404",
        data() {
            return {
                linkDocs: 'https://adminlte.io/docs/3.0/index.html',
            }
        },
        computed: {
            message() {
                return 'We could not find the page you were looking for.'
            }
        }
    }

</script>

<style lang="scss" scoped>
    $gray-200: #e9ecef;
    $gray-300: #dee2e6;

  .err404-container {
    width: 800px;
    max-width: 100%;
    margin: 100px auto;
    .return-home {
      display: block;
      float: left;
      width: 110px;
      height: 36px;
      background: #1482f0;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

</style>