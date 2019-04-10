<template>
  <div class='app-wrap'>
    <Header/>
    <SideBar/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'
export default {
  name: 'layout',
  components: {
    Header,
    SideBar,
    Footer
  }
}
</script>

<style>

</style>
