<template>
  <div class="row">
    <nav :class="{'onScroll': !view.topOfPage}">
      <div class="nav-bar">
        <div class="div-logo">
          <img 
            class="logo" 
            src="../assets/Netflix_Logo_RGB.png"
            @click="$router.push('/');"
          >
        </div>
        <div class="div-avatar">
          <img class="avatar" src="../assets/avatar-1.png" alt="">
        </div>
        
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    }
  },
}
</script>


<style scoped>
  nav{
    background-color: transparent;
    height: 60px;
    position: fixed;
  }

  .logo {
    width: 150px; 
  }

  .avatar {
    width: 50px; 
  }

  .onScroll{
    background-color: black;
  }

  .nav-bar {
    display: flex;
    align-items: center;
  }

  .div-avatar {
    margin-left: auto;
  }
</style>