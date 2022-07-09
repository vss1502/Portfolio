<template>
    <modal 
      title="Registration" 
     @close="resetForm"> 

      <div slot="body">
        <form @submit.prevent="onSubmit">
          <div class="form_item" :class =" {errorInput: $v.email.$error} ">
            <label>Email:</label>
            <p class="errorText" v-if="!$v.email.required">Field is required</p>
            <p class="errorText" v-if="!$v.email.email">Email is not correct</p>
            <input v-model="email" 
            :class =" {error: $v.email.$error} "
            @change = "$v.email.$touch()"
            >
          </div>

          <div class="form_item"  :class =" {errorInput: $v.password.$error} ">
            <label>Password:</label>
            <p class="errorText" v-if="!$v.password.required">Field is required</p>
            <p class="errorText" v-if="!$v.password.minLength">Password must have at least 6 simbols</p>
            <input v-model="password" type="password"
            :class =" {error: $v.password.$error} "
            @change = "$v.password.$touch()"
            
            >
          </div>

          <div class="form_item"  :class =" {errorInput: $v.repeatPassword.$error} ">
            <label>Repeat Password:</label>
            <p class="errorText" v-if="!$v.repeatPassword.required">Field is required</p>
            <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords are not the same</p>
            <input v-model="repeatPassword" type="password"
             :class =" {error: $v.repeatPassword.$error} "
            @change = "$v.repeatPassword.$touch()"
            >
          </div>
            
            
            <button class="btn btnPrimary btn_sign_up">Submit</button>
        </form>

        <div class="modal_footer">
          <a href="#" @click="openLoginModal()">I have account</a>
        </div>
        
      </div>
    </modal>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import modal from "@/components/UI/Modal.vue";
export default {
    components: {
        modal
    },
    data(){
      return {
        email: '',
        password: '',
        repeatPassword: ''

      }
    },
    validations: {
      email: {
        required,
        email
      },
       password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs('password')
    }
      
    },
    methods: {
      onSubmit(){
        this.$v.$touch()
        if(!this.$v.$invalid){
          const user = {
            email: this.email,
            password: this.password
          }

          console.log(user);
          this.email = "";
          this.password = "";
          this.repeatPassword = "";
          this.$v.$reset();
          this.$emit('close');
        }
      },
      openLoginModal(){
        this.$emit('openLoginModal');
      },
      resetForm(){
        this.email = "";
        this.password = "";
        this.repeatPassword = "";
        this.$v.$reset();
        this.$emit('close')
      }
    }
}
</script>

<style lang="scss">
.form_item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 12px;
  color: #db1616;
}

.form_item {
  &.errorInput .errorText {
    display: block;
  } 
}

input.error {
  border-color: #db1616;
}

.btn_sign_up {
    margin-bottom: 30px;
}


</style>