<template>
  <div class="home container mx-auto pb-9">
    <Hi />
    <div class="grid grid-cols-2 mt-5">
      <Languages />
      <Libraries />
    </div>
    <div class="grid grid-cols-2">
      <Databases />
      <Tools />
    </div>
    <section class="mt-9 text-left" style="margin-top: 25vh">
      <h4 class="text-3xl text-white">Projects</h4>
      <ProjectGrid />
    </section>
  </div>
</template>

<script>
import Hi from "../components/Hi.vue";
import Languages from "../components/Languages.vue";
import Libraries from "../components/Libraries.vue";
import Tools from "../components/Tools.vue";
import Databases from "../components/Databases.vue";
import ProjectGrid from "../components/ProjectGrid.vue";

export default {
  name: "Home",
  components: {
    Hi,
    Languages,
    Libraries,
    Tools,
    Databases,
    ProjectGrid
  },
};
</script>
