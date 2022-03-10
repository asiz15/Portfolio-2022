<template>
  <div
    class="
      shadow-md
      rounded-lg
      max-w-sm
      dark:bg-gray-800 dark:border-gray-700
      bg-gray-800
      text-white
      shadow-2xl
    "
  >
    <router-link :to="{ name: 'Project', params: { id: project.id }}">
      <div style="height: 180px">
        <img
        v-shared-element:[`thumbnail-${project.id}`]
        class="rounded-t-lg"
        :src="project.thumbnailImg.url || 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.unfe.org%2Fwp-content%2Fuploads%2F2019%2F04%2FSM-placeholder.png&imgrefurl=https%3A%2F%2Fwww.unfe.org%2Fes%2Fjusticeprotection%2Fsm-placeholder-2%2F&tbnid=dTlEDU1qMCZNeM&vet=12ahUKEwjrhPqyk7v2AhWcSbgEHVbDAwgQMygCegUIARCiAQ..i&docid=WuPKqbtyhgOsOM&w=1201&h=601&q=image%20placeholder&ved=2ahUKEwjrhPqyk7v2AhWcSbgEHVbDAwgQMygCegUIARCiAQ'"
        alt=""
        style='height: 100%; width: 100%; object-fit: cover'
      />
      </div>
    </router-link>
    <div class="p-5">
      <a href="#">
        <h5
          class="
            text-white
            font-bold
            text-2xl
            tracking-tight
            mb-2
            dark:text-white
          "
        >
          {{ project.title }}
        </h5>
      </a>
      <p class="font-normal text-gray-300 mb-3 dark:text-gray-400">
        {{ project.shortDescription }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
