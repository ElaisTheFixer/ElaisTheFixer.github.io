<script setup>
    import { ref } from 'vue'
    import LockStep1 from '../components/LockStep1.vue'
    import LockStep2 from '../components/LockStep2.vue'

    const step1 = ref(true)
    const step2 = ref(false)
</script>

<template>
     <LockStep1 :show="step1" @continue="step1 = false; step2 = true;" />
     <LockStep2 :show="step2" />
</template>