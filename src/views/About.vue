<template>
  <div class="about  grid grid-cols-4 container mx-auto grid gap-4 pt-9">
    <ProjectItem v-for="project in Projects" :key="project.id" :project="project"/>
  </div>
</template>
<script>
import ProjectItem from '../components/ProjectItem.vue'
export default {
  components: {
    ProjectItem
  },
  computed: {
    Projects(){
      return this.$store.state.projects || []
    }
  }
}
</script>
