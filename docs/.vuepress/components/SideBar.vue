// docs/.vuepress/theme/components/SideBar.vue
<template>
  <div>
    SideBar {{$site.title}}
    <SubNav />
    <NavBar/>
    <FooterBar/>
  </div>
</template>
<script>
import FooterBar from './FooterBar'
import NavBar from './NavBar'
import SubNav from './SubNav'
export default {
  name: 'SideBar',
  components: {
    FooterBar,
    NavBar,
    SubNav
  }
}
</script>
