<template>
  <transition name="modal">
    <div class="modal__wrapper" @click="$emit('close')">
      <div class="modal-content" @click.stop="">
        <div class="modal-header">
          <span class="modal-title">{{title}}</span>
          <span class="button-close" @click="$emit('close')"></span>
        </div>
        <div class="modal-body">
        <slot name="body"> Default</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    
  },
  data () {
    return {}
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted() {
    document.body.addEventListener('keyup', e => {
      if(e.keyCode === 27) this.$emit('close');
    })
   
  },
  computed: {},
  methods: {
  }
}
</script>

<style lang="scss" scoped>
// Animation
.modal-enter {
  opacity: 0
}
.modal-leave-active {
  opacity: 0
}
.modal-enter .modal-content,
.modal-leave-active .modal-content {
  transform: scale(1.2)
}

.modal__wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity .2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00,00,00,.48);
}

.modal-content {
  position: relative;
  max-width: 600px;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all .2s ease;
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;
  @media screen and (min-width: 900px) {
    min-width: 500px;
  }
}
.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
  span {
    font-size: 24px;
  }
  .button-close {
    cursor: pointer;
    position: relative;
    width: 20px;
    height: 20px;
    &::after, &::before{
      content: '';
      display: block;
      position: absolute;
      width: 2px;
      height: 15px;
      background: #000000;
      top: 4px;
      left: 10px;
    }

    &::before{
      transform: rotate(45deg);
    }

    &::after{
      transform: rotate(-45deg);
    }
  }
}
.modal-body {
  text-align: center;
}



</style>
