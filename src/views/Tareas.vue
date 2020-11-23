<template>
    <div>
        <div>
            <router-link to="/">
                Home
            </router-link>
            {{$route.params.id}}
        </div>
        <p>asdasdasdasdasd</p>
    </div>
</template>


<script>
export default{
    created() {
        console.log('Params: ', this.$route.params);
    }
}
</script>



<style>

</style>