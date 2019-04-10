<template>
  <div class='home'>
    <Header/>
    <div class="content-box">
      <!-- <div class="main-box">
        <div class='card-item' v-for='item in artList' :key='item.artId'>
          <a class='title'> {{ item.title}}</a>
          <div class='content-body'>
            <img :src="item.img" alt="" class='img' v-if='item.img' > 
            <p class='text'> {{ item.content}} </p>
          </div>
        </div>
      </div> -->
      <div class="sidebar-box">
        <!-- <div class="person">
          <img :src="avatar" alt="" class='img'>
        </div> -->
      </div>
    </div>
    <SideBar/>
    <el-tooltip placement="top" content="返回顶部">
      <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="50" transition-name="fade" />
    </el-tooltip>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'
import SideBar from '@/layout/SideBar.vue'
import BackToTop from '@/components/BackToTop'
import avatar from '@/assets/images/avatar.jpg'
export default {
  name: 'home',
  components: {
    Header,
    SideBar,
    Footer,
    BackToTop
  },
  data() {
    return {
      artList: [
        { artId: 1, title: '零零落落', img: require("@/assets/images/img2.jpg"), content: '在过去两三年的Spring生态圈，最让人兴奋的莫过于Spring Boot框架。或许从命名上就能看出这个框架的设计初衷：快速的启动Spring应用。因而Spring Boot应用本质上就是一个基于Spring框架的应用，它是Spring对“约定优先于配置”理念的最佳实践产物，它能够帮助开发者更快速高效地构建基于Spring生态圈的应用在过去两三年的Spring生态圈，最让人兴奋的莫过于Spring Boot框架。或许从命名上就能看出这个框架的设计初衷：快速的启动Spring应用。因而Spring Boot应用本质上就是一个基于Spring框架的应用，它是Spring对“约定优先于配置”理念的最佳实践产物，它能够帮助开发者更快速高效地构建基于Spring生态圈的应用在过去两三年的Spring生态圈，最让人兴奋的莫过于Spring Boot框架。或许从命名上就能看出这个框架的设计初衷：快速的启动Spring应用。因而Spring Boot应用本质上就是一个基于Spring框架的应用，它是Spring对“约定优先于配置”理念的最佳实践产物，它能够帮助开发者更快速高效地构建基于Spring生态圈的应用' },
        { artId: 2, title: '撒撒打算的', img: require("@/assets/images/img2.jpg"), content: '在过去两三年的Spring生态圈，最让人兴奋的莫过于Spring Boot框架。或许从命名上就能看出这个框架的设计初衷：快速的启动Spring应用。因而Spring Boot应用本质上就是一个基于Spring框架的应用，它是Spring对“约定优先于配置”理念的最佳实践产物，它能够帮助开发者更快速高效地构建基于Spring生态圈的应用在过去两三年的Spring生态圈，最让人兴奋的莫过于Spring Boot框架。或许从命名上就能看出这个框架的设计初衷：快速的启动Spring应用。因而Spring Boot应用本质上就是一个基于Spring框架的应用，它是Spring对“约定优先于配置”理念的最佳实践产物，它能够帮助开发者更快速高效地构建基于Spring生态圈的应用在过去两三年的Spring生态圈，最让人兴奋的莫过于Spring Boot框架。或许从命名上就能看出这个框架的设计初衷：快速的启动Spring应用。因而Spring Boot应用本质上就是一个基于Spring框架的应用，它是Spring对“约定优先于配置”理念的最佳实践产物，它能够帮助开发者更快速高效地构建基于Spring生态圈的应用' }
      ],
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1'// 按钮的背景颜色 The background color of the button
      },
      avatar: avatar
    }
  }
}
</script>

<style lang='scss'>
.home{
  .content-box{
    display: flex;
    align-items: flex-start;
    width: 1000px;
    padding: 0 16px;
    margin: 10px auto;
    .main-box{
      flex-shrink: 0;
      margin-right: 10px;
      margin-bottom: 0;
      width: 694px;
      background: #fff;
      .card-item{
        height: 160px ;
        border-bottom: 1px solid #F0F2F7;
        padding: 20px;
        .title{
          font-size: 18px;
          font-weight: 600;
          font-synthesis: style;
          line-height: 1.6;
          color: #1A1A1A;
          margin: -4px 0;
          cursor: pointer;
          &:hover{
            color: #175199;
          }
        }
        .content-body{
          .img{
            position: relative;
            width: 190px;
            height: 105px;
            margin-top: -2px;
            margin-right: 18px;
            margin-bottom: 4px;
            float: left;
            overflow: hidden;
            background-position: center;
            background-size: cover;
            border-radius: 4px;
          }
          .text{
            line-height: 1.67;
            cursor: pointer;
            overflow: hidden; 
            -webkit-line-clamp: 4; 
            display: -webkit-box; 
            -webkit-box-orient: vertical;
            &:hover{
              color: #646464;
            }
          }
        }
      }
    }
    .sidebar-box{
      flex: 1 1;
      font-size: 14px;
      .person{
        margin-bottom: 10px;
        background: #FFFFFF;
        overflow: hidden;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
        box-sizing: border-box;
        .img{
          width: 100%;
        }
      }
    }
  }
}
</style>
