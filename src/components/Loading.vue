<template>
  <div class="loading">
    <HalfCircleSpinner
      :animation-duration="1000"
      :size="60"
      color="#ff1d5e"
    />
  </div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners'
export default {
  name: 'loading',
  components: {
    HalfCircleSpinner
  }
}
</script>

<style>

</style>