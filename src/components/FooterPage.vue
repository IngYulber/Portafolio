<template>
    <footer class="footer py-3">
    <div class="container">
      <p class="small mb-0 text-light">
        &copy; {{year}} Created With <i class="ti-heart text-danger"></i> By
        <a href="https://github.com/yulbex" target="_blank"
          ><span class="text-danger" title="Repo"> {{USERNAME_GITHUB}}</span></a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
name:"FooterPage",

data(){
  return {
    year : new Date().getFullYear(),
    USERNAME_GITHUB: process.env.VUE_APP_USERNAME_GITHUB,
  }
}
}
</script>

<style>

</style>