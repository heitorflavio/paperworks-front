<template>
  <div class="home">
    <Navbar />
   <Homeview />
   
  </div>
</template>

<script>
// @ is an alias to /src
import Homeview from '@/components/HomeComp.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    Homeview,
    Navbar
  }

}
</script>
