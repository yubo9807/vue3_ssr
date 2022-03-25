<template>
  <div>home</div>
  {{$store.state.count}}

  {{ label }}
</template>

<script>
import { ref, defineExpose } from 'vue';
import { api_getNoteLabel } from '../../api/note';
export default {

  setup() {

    const label = ref([1,2,3,7])
    // api_getNoteLabel().then(res => {
    //   label.value = res.data
    // })

    return {
      label
    }
  }
}
</script>

<style>

</style>