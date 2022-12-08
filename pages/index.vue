<template>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    if(this.$store.state.token.role) {
      this.$router.push('/home');
    }
  }
}
</script>