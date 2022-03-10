<template>
  <div class="project-page">
    <img
        v-shared-element:[`thumbnail-${Id}`]
        class="hero"
        :src="Project.thumbnailImg.url || 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.unfe.org%2Fwp-content%2Fuploads%2F2019%2F04%2FSM-placeholder.png&imgrefurl=https%3A%2F%2Fwww.unfe.org%2Fes%2Fjusticeprotection%2Fsm-placeholder-2%2F&tbnid=dTlEDU1qMCZNeM&vet=12ahUKEwjrhPqyk7v2AhWcSbgEHVbDAwgQMygCegUIARCiAQ..i&docid=WuPKqbtyhgOsOM&w=1201&h=601&q=image%20placeholder&ved=2ahUKEwjrhPqyk7v2AhWcSbgEHVbDAwgQMygCegUIARCiAQ'"
        alt=""
      />
          {{ Project }}
  </div>
</template>
<script>
import gql from 'graphql-tag'
export default {
  apollo:{
    // project: {
    //   query: gql`
    //     query GET_PROJECT($id:ID!){
    //       project(where:{
    //         id:$id
    //       }){
    //         id
    //         title
    //         shortDescription
    //         description{
    //           html
    //         }
    //         type
    //         projectStatus
    //         thumbnailImg{
    //           url
    //         }
    //         projectStack{
    //           ...on Technology{
    //             title
    //           }
    //         }
    //       }
    //     }
    //   `,
    //   variables() {
    //     return {
    //       id: this.Id
    //     }
    //   }
    // },
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
  computed:{
    Id(){
      return this.$route.params.id
    },
    Project(){
      const project = this.projects.find(p => p.id == this.Id)
      return project
    }
  }
}
</script>
<style lang="scss" scoped>
.project-page{
  .hero{
    width: 100vw;
    height: 70vh;
    object-fit: cover;
  }
}
</style>