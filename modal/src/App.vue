<template>
  <div id="app">
    <header class="header">
      <div class="btn">
        <button class="btn_log_in" @click="modalLogin = !modalLogin">
          Log In
        </button>
      </div>
      <div class="btn">
        <button class="btn_sign_up" @click="modalSignUp = !modalSignUp">
          Sign Up
        </button>
      </div>
    </header>

    <modalLogin
    v-show="modalLogin"
    @close="close"
    @openSignUpModal="openSignUpModal"
    />

    <modalSignUp
    v-show="modalSignUp"
    @close="close"
    @openLoginModal="openLoginModal"
    
    />
  </div>
</template>

<script>
import modalLogin from '@/components/ModalLogin.vue'
import modalSignUp from '@/components/ModalSignUp.vue'

export default {
  name: 'App',
  components: {
    modalLogin, modalSignUp
  },
  data () {
    return {
      modalLogin: false,
      modalSignUp: false,
      
    }
  },
  methods: {
        openSignUpModal(){
          this.modalLogin=false,
          this.modalSignUp=true
        },
        openLoginModal(){
          this.modalSignUp=false,
          this.modalLogin=true
        },
        close(){
          this.modalSignUp=false,
          this.modalLogin=false
        }
      }
}
</script>

<style lang="scss">
  .header {
    padding: 20px 15px;
    background: #f2f2f2;
    display: flex;

    .btn {
      margin: 0 15px;

      button {
        position: relative;
        border: none;
        outline: none;
        background: transparent;
        cursor: pointer;
        font-size: 20px;
        padding-left: 25px;

        &::before {
          content: '';
          display: block;
          position: absolute;
          top: 2px;
          left: 0;
          width: 20px;
          height: 20px;
          background-size: contain;
          background-position: center;

        }

        &.btn_log_in::before {
          background-image: url(./assets/images/login.svg);
        }

        &.btn_sign_up::before {
          background-image: url(./assets/images/user.svg);
        }

        &:hover {
          color: #7272ff;
        }
      }
    }
  }

  
</style>
