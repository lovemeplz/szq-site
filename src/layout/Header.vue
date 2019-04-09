<template>
  <header class='site-header' role='header'>
    <div class='header-inner'>
      <img :src='logoImg' alt='logo' class='logo-img'>
      <nav class='navigation' role='navigation'>
        <router-link to="/"  class='nav-item'>首页</router-link>
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

<style lang='scss'>
  .site-header{
    position: relative;
    z-index: 10;
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;
    box-shadow: 0 1px 3px #1a1a1a1a;
    background-clip: content-box;
    .header-inner{
      display: flex;
      width: 1000px;
      height: 52px;
      padding: 0 16px;
      margin: 0 auto;
      align-items: center;
      .logo-img{
        width: 40px;
        cursor: pointer;
      }
      .navigation{
        display: flex;
        justify-content: space-between;
        height: 30px;
        margin: 0 18px 0 27px;
        color: #999999;
        .nav-item{
          padding: 0 15px;
          font-size: 15px;
          line-height: 30px;
          color: #8590A6;
          cursor: pointer;
          &:hover{
            color: #175199;
          }
        }
      }
    }
  }
</style>
