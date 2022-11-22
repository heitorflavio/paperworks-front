
<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="@/assets/so_a_caixaLOGO_DA_OCS.png" alt="Ranek" class="img" />
      </router-link>
    </nav>
  </header>
</template>
  
  <script>
export default {
  name: "TheHeader",
};
</script>
  
  <style scoped>
.img {
  width: 80px;
  height: 60px;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

</style>
  
