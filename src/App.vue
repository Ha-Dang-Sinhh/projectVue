<template>
  <div class="container mx-auto">
    <Nav></Nav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/NavProduct';
import Footer from '@/components/FooterProduct';
export default {
  name: 'App',
  components: {
    Nav,
    Footer,
  },
  methods:{

  }
}
</script>

<style>
#app {
  padding: 0;
  margin:0;
  box-sizing: border-box;
}
</style>
