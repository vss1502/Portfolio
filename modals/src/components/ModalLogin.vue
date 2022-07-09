<template>
    <modal 
      title="Authorization" 
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
            <input v-model="password" type="password"
            :class =" {error: $v.password.$error} "
            @change = "$v.password.$touch()"
            >
          </div>
            
            
            <button class="btn btnPrimary btn_modal-login">Submit</button>
        </form>

        <div class="modal_footer">
          <a href="#" @click="openSignUpModal()">I need account</a>
        </div>
        
      </div>
    </modal>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import modal from "@/components/UI/Modal.vue";
export default {
    components: {
        modal
    },
    data(){
      return {
        email: '',
        password: ''
      }
    },
    validations: {
      email: {
      required,
      email
      },
      password: {
        required
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
          this.$v.$reset();
          this.$emit('close');
        }
      },
      openSignUpModal(){
        this.$emit('openSignUpModal');
      },
      resetForm(){
        this.email = "";
        this.password = "";
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

.btn_modal-login {
  margin-bottom: 30px;
}

.modal_footer {
  a {
    color: #000
  }
}


</style>