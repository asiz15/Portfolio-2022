<template>
  <div class="project-page">
    <div class="hero-container">
      <button class="bg-purple-600 text-sm text-white font-bold px-3 py-2 back-btn cursor-pointer" @click="$router.go(-1)">Volver atrás</button>
      <div class="overlay"></div>
      <img
        v-shared-element:[`thumbnail-${Id}`]
        class="hero"
        :src="Project.thumbnailImg.url || 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.unfe.org%2Fwp-content%2Fuploads%2F2019%2F04%2FSM-placeholder.png&imgrefurl=https%3A%2F%2Fwww.unfe.org%2Fes%2Fjusticeprotection%2Fsm-placeholder-2%2F&tbnid=dTlEDU1qMCZNeM&vet=12ahUKEwjrhPqyk7v2AhWcSbgEHVbDAwgQMygCegUIARCiAQ..i&docid=WuPKqbtyhgOsOM&w=1201&h=601&q=image%20placeholder&ved=2ahUKEwjrhPqyk7v2AhWcSbgEHVbDAwgQMygCegUIARCiAQ'"
        alt=""
      />
    </div>
    <div class="text-white text-center text-6xl font-bold mb-2 w-3/6 mx-auto" style="position: relative; z-index: 999; margin-top: 70vh">{{ Project.title }}</div>
    <span class="text-gray-400 text-xl">{{ Project.shortDescription }}</span>
    <section class="py-10 text-white w-5/6 mx-auto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, non voluptatum voluptatem quam eum iure natus nobis optio in consectetur adipisci quod impedit cum nihil ipsum repudiandae quisquam illum aut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatibus provident cumque deserunt tempora autem magnam atque saepe culpa fugiat velit iste aperiam aut, sit ex! Rerum nemo modi ab?
      Quae laudantium, nemo minima culpa, magni error rerum unde recusandae eum, numquam sequi reprehenderit dolore voluptatibus dolor doloremque molestias dolorum in quaerat saepe. Alias odio aspernatur soluta ipsam velit nobis.
      Delectus modi dolorem tempora. Dolores ab harum rem aut. Quae ut quia mollitia accusantium officia, quam iure, maxime natus, quibusdam aspernatur culpa animi tempora totam placeat iste quas perferendis? Iure.
      Explicabo aperiam, iste similique repellat adipisci facere accusamus distinctio nesciunt, dolor quasi quibusdam, quaerat impedit modi voluptate rerum corporis at odit doloribus reiciendis harum iusto magni iure temporibus? Quae, libero!
      Iure ipsa placeat itaque, sapiente nostrum facilis commodi, fuga obcaecati suscipit ab maiores soluta quibusdam quod! Assumenda fuga quos ea omnis, commodi minus saepe voluptates pariatur fugit reprehenderit ut beatae.
      Non at libero recusandae adipisci quibusdam, et suscipit nulla porro dolorem aspernatur consequatur distinctio molestias alias exercitationem quos odit sit mollitia eos. Animi, vel. Est quidem aspernatur repellendus! Eum, explicabo.
      Vitae excepturi vel voluptatum. Possimus accusamus culpa, molestias mollitia qui deserunt voluptas accusantium consequatur aspernatur, amet neque rem? Illum alias odit repudiandae voluptatem esse similique, dignissimos mollitia ea neque natus!
      Recusandae cupiditate deserunt sapiente, libero quis labore tenetur. Suscipit aspernatur accusamus, nostrum saepe eum provident doloremque reiciendis beatae maiores nihil dolorem quos voluptatum voluptatem assumenda perferendis eligendi porro nobis quisquam?
      Enim soluta illum ducimus quod, ad nostrum, et non delectus sapiente, repellat alias placeat nihil rerum. Magnam inventore quae, natus recusandae alias excepturi nisi at distinctio voluptatum nulla, incidunt iusto.
      Dolores aspernatur, cum, doloribus repudiandae in sed autem unde accusantium eligendi eaque ut laudantium atque porro esse enim eos eum eveniet facere voluptatum? Saepe, excepturi. Temporibus architecto pariatur natus error?
    </section>
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
  },
  mounted(){
    window.scrollTo(0,0);
  }
}
</script>
<style lang="scss" scoped>
.project-page{
  .hero-container{
    .back-btn{
      position: fixed;
      top: 20px;
      left: 100px;
      z-index: 999;
    }
    position: absolute;
    top: 0;
     top: 0;
      left: 0;
      right: 0;
      height: 80vh;
    .overlay{
      position: absolute;
      z-index: 997;
      top: 0;
      left: 0;
      right: 0;
      height: 80vh;
      background: rgb(22,22,26);
background: linear-gradient(0deg, rgba(22,22,26,1) 0%, rgba(22,22,26,0.7497373949579832) 28%, rgba(22,22,26,0.6012780112044818) 50%, rgba(22,22,26,0.22032563025210083) 100%);
          }
    .hero{
      width: 100vw;
      height: 80vh;
      object-fit: cover;
      position: relative;
      z-index: 990;
      top: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>