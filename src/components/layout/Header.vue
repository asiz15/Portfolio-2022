<template>
  <header class="w-full py-5" style="position: fixed; top: 0; background: #16161A;">
    <div class="w-5/6 mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <div class="avatar rounded-full mr-5">
        <img src="https://avatars.githubusercontent.com/u/13662081?v=4" alt="">
      </div>
      <h1 class="text-white font-bold text-md">ASIZ</h1>
      </div>
      <nav class="flex justify-self-end text-white">
        <ul class="flex">
          <li class="hover:text-purple-600 hover:font-bold cursor-pointer hover:underline"><b>01</b> Me</li>
          <li class="hover:text-purple-600 hover:font-bold cursor-pointer hover:underline"><b>02</b>Projects</li>
          <li class="hover:text-purple-600 hover:font-bold cursor-pointer hover:underline"><b>03</b>Blog</li>
          <li class="hover:text-purple-600 hover:font-bold cursor-pointer hover:underline"><b>04</b>Contact</li>
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