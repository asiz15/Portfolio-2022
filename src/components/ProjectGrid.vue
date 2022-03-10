<template>
  <div class="grid grid-cols-3 gap-5 pt-9">
    <ProjectItem v-for="project in projects" :project="project" :key="project.id" />
  </div>
</template>
<script>
import ProjectItem from '../components/ProjectItem.vue'
import gql from 'graphql-tag'

export default {
  apollo:{
    projects: gql`
      query GET_PROJECTS{
        projects{
          id
          title
          shortDescription
          description{
            html
          }
          thumbnailImg{
            url
          }
        }
      }
      `
  },
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