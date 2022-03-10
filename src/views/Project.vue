<template>
  <div class="project-page">
    <img
        v-shared-element:[`thumbnail-${Id}`]
        class="hero"
        :src="Project.thumbnail"
        alt=""
      />
  </div>
</template>
<script>
export default {
  computed:{
    Id(){
      return this.$route.params.id
    },
    Project(){
      const project = this.$store.state.projects.find(p => p.id == this.Id)
      return project
    }
  }
}
</script>
<style lang="scss" scoped>
.project-page{
  .hero{
    width: 100vw;
    height: 60vh;
    object-fit: cover;
  }
}
</style>