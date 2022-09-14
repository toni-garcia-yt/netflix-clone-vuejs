<template>
    <div>
        <div class="overlay">
            <div class="popup">
                <a class="close" @click="$emit('close')">&times;</a>

                
                <video autoplay muted loop id="myVideo">
                    <source src="../assets/casa-de-papel.mp4" type="video/mp4">
                </video>

                <div class="popup-content">
                    <span class="match-score">
                        90% recommended
                    </span>
                    <h3 class="title">{{movie.title}}</h3>
                    <p>{{movie.overview}}</p>

                    <br>
                </div>
     
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    movie: null
  },
  beforeMount() {
  },
  methods: {
  },
}
</script>


<style scoped>
    .match-score {
        color: #46d369;
        white-space: unset;
    }

    .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        transition: opacity 500ms;
        visibility: visible;
        opacity: 1;
        overflow-y: scroll;
    }
    
    .overlay::-webkit-scrollbar {
        display: none;
    }

    .popup {
        margin: 70px auto;
        background-color: #141414;
        border-radius: 5px;
        width: 60%;
        position: relative;
        transition: all 2s ease-in-out;
    }
    
    .popup .close {
        position: absolute;
        top: 20px;
        right: 30px;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
        color: white;
        cursor: pointer;
        z-index:2;
    }

    .popup-content {
        margin-left: 35px;
        margin-top: 15px;
        color: white;
    }

    .popup-content p{
        color: white;
    }

    @media screen and (max-width: 900px){
        .popup{
            width: 95%;
        }

    }

    #myVideo {
        width: 100%;
    }
</style>