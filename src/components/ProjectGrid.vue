<template>
  <div class="grid grid-cols-4 gap-5 pt-9">
    <ProjectItem v-for="project in Projects" :project="project" :key="project.id" />
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