<template>
  <div class="header col-12 ">
    <img src="promo.jpg">
  </div>
</template>

<script>
  export default{
    data(){
      return {

      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="scss" scoped>

  @import '@/assets/main.scss';
  
  .header{
    z-index: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;

    &::after{
      content: "";
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      background: linear-gradient(135deg, rgba(0,96,167,0.7) 10%, rgba(227,249,0,0.9) 100%);
    }

    &::before{
      z-index: 1;
      content: "";
      background-color: $white;
      animation: left_side 1s ease-in-out 1;
      mix-blend-mode: hue;
      width: 100vh;
      height: 100vh;
      position: absolute;
      top: 0;
      right: -40vh;
      transform: rotate(45deg);
    }
    &>img{
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  @keyframes left_side{
    0%{
      transform: translateX(100%) rotate(45deg);
    }
    100%{
      transform: translateX(0) rotate(45deg);
    }
  }
</style>
  