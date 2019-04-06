<template>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  async asyncData({route}) {
    const response = await axios.get(`/item/${route.params.id}.json`)
    return { item : response.data }
  }
}
</script>
