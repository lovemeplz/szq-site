<template>
  <header class='site-header' role='header'>
    <div class='header-inner'>
      <img :src='logoImg' alt='logo' class='logo-img'>
      <nav class='navigation' role='navigation'>
        <router-link to="/" exact  class='nav-item'>首页</router-link>
        <router-link to="/tech"  class='nav-item'>技术</router-link>
        <router-link to="/music" class='nav-item'>音乐</router-link>
        <router-link to="/article" class='nav-item'>好文搬运</router-link>
        <router-link to="/whatever" class='nav-item'>随笔</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import logoImg from '@/assets/logo.png'

export default {
  name: 'Header',
  data() {
    return {
      logoImg
    }
  }
}
</script>
