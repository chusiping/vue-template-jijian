<template>
<div>
    <ul>
        <li v-for="item,index in arr" :key="index">
            {{item}}
        </li>
    </ul>
</div>
</template>

<script>
import show from './show.vue'
export default {
    props:['arr'],
}
</script>

<style>

</style>
