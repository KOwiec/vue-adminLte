<template>
    <transition name="fade" mode="out-in">
      <div class="social-auth-links text-center mb-3">
          <p>{{ $t('socialLinks.pTag') }}</p>
          <a href="javascript:void(0);"  @click="facebookHandleClick('facebook')" class="btn btn-block btn-primary">
              <i class="fab fa-facebook mr-2"></i> {{ $t('socialLinks.facebook') }}
          </a>
          <a href="javascript:void(0);"  @click="googleHandleClick('googlePlus')" class="btn btn-block btn-danger">
              <i class="fab fa-google-plus mr-2"></i> {{ $t('socialLinks.googlePlus') }}
          </a>
      </div>
    </transition>
</template>

<script>
    export default {
        name: "socialAuthLinks",
        methods: {
            facebookHandleClick(val) {
                alert('OK ' +val)
                // todo
            },
            googleHandleClick(val) {
                alert('OK ' +val)
                // todo
            }
        }
    }
</script>

<style scoped>

</style>