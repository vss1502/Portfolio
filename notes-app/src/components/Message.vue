<template>
        <div v-if="message" class="error">
          <p class="error-message">{{message}}</p>
        </div>    
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.error-message {
    color: red;
}
</style>