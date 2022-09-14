<template>
  <div id="home" class="container-fluid bg-image">
    <div class="row">
      <div class="col">
        <img alt="Netflix" class="logo" src="../assets/Netflix_Logo_RGB.png" width="150"  />
      </div>
    </div>
   
    <div class="row justify-content-center">
      <div id="box-login" class="col-10 col-md-4">
        <form action="">
            <h2>Sign In</h2>
            <input type="email" v-model="email" placeholder="Email or phone number">
            <input type="password" v-model="password" placeholder="Password">
            <input type="submit" value="Sign In" @click="login($event)">
            <p id="first_visit">
                New to Netflix ? <a href="#">Sign up now</a>
            </p>
        </form>
      </div>
     
    </div>
  </div> 
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login(event) {
      if(event){
        event.preventDefault();
      }
      this.$router.push('movies');
    }
  },
}
</script>


<style scoped>
  #home {
    background-image: url('../img/background-black.jpg');
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  #box-login {
    margin-top: 100px;
  }

  form{
      background-color: rgba(0, 0, 0, .75);
      padding: 40px;
      color: white;
  }

  form h2 {
    margin-bottom: 10px;
  }

  #first_visit {
    margin-top: 30px;
    
  }


  
</style>