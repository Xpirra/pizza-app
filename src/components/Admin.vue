<template>
    <h1>Admin</h1>
</template>

<script>

export default {
    data(){
        return {
            name: 'lxy'
        }
    },
    beforeRouteEnter: (to,from,next) => {
        next(vm => {
            alert('Hello' + vm.name);
        });
    }
}
</script>
<style scoped>

</style>

