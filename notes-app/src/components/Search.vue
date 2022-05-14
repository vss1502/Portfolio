<template>
    <div class="search">
        <input type="text" :placeholder="placeholder" v-model="search" class="search-input">
    </div>
    

   
</template>

<script>
export default {
    data(){
        return {
            search: this.value
        }
    },
    props: {
        placeholder: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
    watch: {
        search(val) {
            this.$emit('search', val)
        }
    }
    
}
</script>

<style lang="scss" scoped>
.search {
    margin-left: auto;
    margin-right: 20px;
}
.search-input {
    width: 200px;
    height: 30px;
    padding: 3px 10px;
    border-radius: 5px;
    border: none;
    outline: none;

}
</style>