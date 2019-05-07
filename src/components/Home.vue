<template>
    <div>
        <h1>Home</h1>
        <button @click="goTo" class="btn btn-success">Click Here</button>
    </div>
</template>

<script>
export default {
    methods:{
        goTo(){
            this.$router.replace('/login');
            // this.$router.go(-1);
       }
    }
}
</script>

