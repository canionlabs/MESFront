<template>
  <div class="auth-layout">
    <div class="nav d-lg-none">
      <router-link class="navbar-brand" to="/">
        <span class="navbar-white-text">CanionLabs</span> MES
      </router-link>
    </div>
    <div class="main row">
      <div class="auth-content col-lg-6 col-12">
        <router-view></router-view>
      </div>
      <div class="auth-wallpaper col-6 d-none d-lg-flex">
        <div class="oblique"></div>
        <img id="logo" src="/static/img/vertical_para_bgs_escuros.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthLayout'
  }
</script>

<style lang="scss">
  @import '../../sass/variables';
  @import '~bootstrap/scss/mixins/breakpoints';
  @import "~bootstrap/scss/functions";
  @import '~bootstrap/scss/variables';
  .auth-layout {
    height: 100vh;
    margin: 0;
    .nav {
      display: flex;
      align-items: center;
      justify-content: center;
      height: $top-mobile-nav-height;
      background-color: $top-nav-bg;
      .i-vuestic {
        height: $auth-mobile-nav-ivuestic-h;
        width: 100%;
      }
      .navbar-white-text {
        color: $white;
        font-weight: 300;
      }
    }
    .main {
      margin: 0;
      height: 100%;
      .auth-content {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
      }
      .auth-wallpaper {
        background-color: $top-nav-bg;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        #logo {
          z-index: 2;
          width: 70%;
        }
        .oblique {
          position: absolute;
          background-color: $auth-wallpaper-oblique-line;
          left: calc(50% - 27%/2);
          transform: rotate(15deg);
          width: 27%;
          height: 115%;
        }
      }
    }

    @include media-breakpoint-down(md) {
      .main {
        height: $auth-mobile-main-h;
        .auth-content {
          align-items: flex-start;
          padding-top: $auth-content-padding-t;
        }
      }
    }
  }
</style>
