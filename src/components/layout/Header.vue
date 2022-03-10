<template>
  <header class="w-full pt-9">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <div class="avatar rounded-full mr-5">
        <img src="https://avatars.githubusercontent.com/u/13662081?v=4" alt="">
      </div>
      <h1 class="text-white font-bold text-md">ASIZ</h1>
      </div>
      <nav class="flex justify-self-end text-white">
        <ul class="flex">
          <li><b>01</b> Me</li>
          <li><b>02</b>Projects</li>
          <li><b>03</b>Blog</li>
          <li><b>04</b>Contact</li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.avatar{
  width: 50px;
  overflow: hidden;
  img{
    max-width: 100%;
    object-fit: cover;
  }
}
nav{
  ul{
    li{
      margin-left: 2em;
      b{
        margin-right: .5em;
      }
    }
  }
}
</style>