<template>
  <div class="header col-12 ">

    <div class="header-main col-12">
      <div class="header-main-back" @click="$router.go(-1)" v-if="$route.params.id"><fai :icon="['fas', 'arrow-left']" /></div>
      <div class="header-main-logo"><div>CASPIAN</div> <div>CABINET</div></div>
      <router-link :to="{name: 'basket'}" class="header-main-basket"><fai :icon="['fas', 'shopping-cart']" /></router-link>
    </div>

    <div class="header-scoped col-12">
      <div class="header-scoped-side" @click="changeSide()">
        <div class="header-scoped-side-burger first" :class="{'active': side}"></div>
        <div class="header-scoped-side-burger second" :class="{'active': side}"></div>
        <div class="header-scoped-side-burger third" :class="{'active': side}"></div>
      </div>
      <div class="header-scoped-bg" v-if="side" @click="changeSide()"></div>
      <div class="header-scoped-body" :class="{'active': side}">

        <div class="header-scoped-body-link" v-for="(link, i) in links">
          
          <div class="link" @click="routerChange(link, i)":key="'link-' + i">{{link.title}}</div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default{
    data(){
      return {
        side: false,
        links: [
          {
            title: 'Главная',
            to: '/'
          },
          {
            title: 'Профиль',
            to: '/profile'
          },
          {
            title: 'Заказы',
            to: '/offers'
          },
          {
            title: 'Акции',
            to: '/stocks'
          },
          {
            title: 'Оборудование',
            to: '/equipments'
          },
          {
            title: 'Контакты',
            to: '/contacts'
          },
          {
            title: 'Выход',
            to: ''
          }
        ]
      }
    },
    mounted(){
      console.log(this.$route.params.id)
    },
    methods:{
      changeSide(){
        this.side = !this.side

        let body = document.body
        if(this.side)
          body.style.overflow = "hidden"
        else
          body.style.overflow = "auto"
      },
      routerChange(link, index){
        if(link.to){
          this.$router.push(link.to)
        }else if(index === this.links.length-1){
          this.$router.push('/login')
        }
        this.changeSide()
      }
    }
  }
</script>
<style lang="scss" scoped>

  @import '@/assets/main.scss';
  
  .header{
      height: 3.5rem;
      background-color: $white;
      padding: 0;
      position: fixed;
      top: 0;
    &-main{
      border-bottom: 1px solid $bg_main;
      height: 100%;
      padding-left: 4.25rem;
      align-items: center;
      flex-direction: row;
      &>div{
        width: auto;
      }
      &-back{
        font-size: 2rem;
        margin-right: 0.5rem;
        color: $blue;
        cursor: pointer;
        &:hover{
          color: $grey_font;
        }
      }
      &-basket{
        position: absolute;
        right: 0.5rem;
        color: $white;
        height: 3rem;
        width: 3rem;
        font-size: 1.5rem;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        border: 2px solid $bg_main;
        &>svg{
          z-index: 1;
        }
        &::after{
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 0;
          background-color: $orange;
          border-radius: 50%;
          transition: 0.3s;
        }
        &:hover{
          &::after{
            background-color: $red;
            transform: rotateY(180deg);
          }
        }
      }
      &-logo{
        width: auto;
        font-size: 1.25rem;
        font-weight: bold;
        flex-direction: row;
        &>div{
          width: auto;
          color: $orange;
          &:first-child{
            color: $blue;
            margin-right: 0.25rem;
          }
        }
        &>img{}
      }
    }
    &-scoped{
      &-side{
        height: 3.5rem;
        width: 3.5rem;
        padding: 1rem 0.5rem;
        position: fixed;
        border-right: 1px solid $grey_bg;
        cursor: pointer;
        left: 0;
        top: 0;
        align-items: center;
        justify-content: center;

        &:hover{
          background-color: $blue;

          .header-scoped-side-burger{
            background-color: $white;
          }
        }
        &-burger{
          width: 90%;
          height: 3px;
          border-radius: 50px;
          background-color: $blue;
          transition: transform 0.3s;
          &.active{
            position: absolute;
            transform: rotate(135deg);
            
            &:first-child{
              transform: rotate(45deg);
            }
          }
        }
      }
      &-bg{
        background-color: $black_bg;
        position: fixed;
        left: 0;
        top: 3.5rem;
        width: 100vw;
        height: calc(100vh - 3.5rem);
      }
      &-body{
        width: 100%;
        max-width: 300px;
        height: 100%;
        background-color: $white;
        border-right: 1px solid $grey_border;
        position: fixed;
        left: -100%;
        transition: 0.3s;
        flex-direction: column;
        
        &.active{
          left: 0;
        }        
        &-link{
          width: auto;
          &>.link{
            padding: 0.5rem 1rem;
            cursor: pointer;
            color: $blue;
            transition: padding 0.3s;

            &:hover{
              background-color: $blue;
              color: $white;
              padding-left: 1.5rem;
            }
          }
        }
      }
    }
  }
</style>
