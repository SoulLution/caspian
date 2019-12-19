<template>
  <div class="body col-12">
    <div class="about col-md-9">
      <div class="about-title">Caspian</div>
      <div class="about-body">
        <div class="about-body-info">
          Компания присутствует и успешно развивается на рынке Казахстана с 1964 года.
          В группе Компаний более 300 сотрудников.
          Наша продукция известна и любима во многих регионах Республики Казахстан. 
        </div>
        <div class="about-body-contacts">
          <!-- <div class="about-body-contacts-title col-12">Наши контакты</div> -->
          <!-- <div class="about-body-contacts-contact col-sm-4">
            <img class="about-body-contacts-contact-ava" src="default_avatar.png">
            <div class="about-body-contacts-contact-name">Lorem Ipsum</div>
            <div class="about-body-contacts-contact-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
            <div class="about-body-contacts-contact-phone">8(000)-000-0000</div>
          </div> -->
        </div>
        <div class="about-body-offers">
          <router-link to="/" class="about-body-offers-offer">Контакты</router-link>
          <router-link to="/" class="about-body-offers-offer">Договор оферы</router-link>
        </div>
      </div>
    </div>
    <form class="login col-md-3" @submit.prevent="logOn">
      <div class="login-main">
        <div class="login-main-title">Вход</div>
        <div class="login-main-body">

          <div class="login-main-body-input">
            <label class="login-main-body-input-name" :class="{'active': login}" for="name">E-mail или телефон</label>
            <input class="login-main-body-input-place" :class="{'active': login_focus}" @focus="changeFocus(false)" v-model="login" id="name">
          </div>

          <div class="login-main-body-input">
            <label class="login-main-body-input-name" :class="{'active': password}" for="pass">Пароль</label>
            <input class="login-main-body-input-place" :class="{'active': password_focus}" @focus="changeFocus(true)" v-model="password" id="pass" type="password">
          </div>

        </div>
        <div class="login-main-footer">
          <div class="login-main-footer-submit col-12">
            <label class="login-main-footer-submit-input" for="submit">Войти</label><input type="submit" id="submit">
          </div>
          <div class="login-main-footer-forgot">Забыли пароль?</div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default{
    layout: 'auth',
    data(){
      return {
        login: '',
        password: '',
        login_focus: false,
        password_focus: false
      }
    },
    mounted(){

    },
    methods:{
      changeFocus(pas){
        let focus = true
        if(pas) focus = false

        this.login_focus = focus
        this.password_focus = !focus
      },
      logOn(){
        this.$router.push('/')
      }
    }
  }
</script>
<style lang="scss" scoped>

  @import '@/assets/main.scss';

  .body::before{
    background: unset;
  }

  .about{
    color: $white;
    &-title{
      font-size: 3rem;
      font-weight: bold;
    }
    &-body{
      &-info{
        mix-blend-mode: screen;
        font-size: 1.25rem;
        padding: 0 5rem 0 0;
        animation: drop_side 0.5s ease-in-out 1;
      }
      &-contacts{
        width: 100%;
        &-title{}
        &-contact{
          background-color: $white;
          margin: 0 5px;
          &-ava{
            width: 100%;
          }
          &-name{}
          &-info{}
          &-phone{}
        }
      }
      &-offers{
        flex-direction: row;
        &-offer{
          margin: 0 1rem;
          color: $white;
          width: auto;
          &:hover{
            color: $blue;
          }
        }
      }
    }
  }

  .login{
    display: flex;
    align-items: center;
    height: 100vh;
    &-main{
      border: 1px solid $grey_border;
      border-radius: 0.2rem;
      box-shadow: 0.5px 1px 4px 0px rgba(0,0,0,0.25);
      position: sticky;
      top: 25px;
      padding: 1rem 1.5rem 1.5rem;
      background-color: $white;
      animation: drop_side 1s ease-in-out 1;
      &-title{
        align-items: center;
        justify-content: center;
        color: $blue;
        font-size: 1.2rem;
        font-weight: bold;
      }
      &-body{
        &-input{
          padding-top: 1rem;
          overflow: hidden;
          &-name{
            cursor: pointer;
            position: absolute;
            padding: 0 1rem;
            width: auto;
            transition: 0.1s;
            top: 1rem;
            left: 0;
            height: 1.1rem;
            white-space: nowrap;
            &.active{
              color: $blue;
              background-color: $white;
              top: 0;
              left: 0.5rem;
            }
          }
          &-place{
            cursor: pointer;
            width: 100%;
            border: 1px solid $grey_border;
            outline: none;
            padding: 0.1rem 0.25rem;
            &.active{
              color: $blue;
            }
          }
        }
      }
      &-footer{
        &-submit{
          padding: 1rem;
          align-items: center;
          justify-content: center;

          &>input{
            display: none;
          }
          &-input{
            padding: 0.25rem 1.5rem;
            border: 1px solid $grey_border;
            border-radius: 50px;
            transition: 0.1s;
            background-color: $white; 
            position: relative;
            outline: none;
            cursor: pointer;
            width: auto;
            overflow: hidden;

            &::before{

              content: "";
              z-index: 1;
              position: absolute;
              height: 200%;
              width: 15px;
              left: -50%;
              top: -50%;
              transform: rotate(45deg);
              transition: 0;
              background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
              opacity: 0.8;

            }
            &:hover{
              transform: scale(1.1);
              background-color: $blue;
              color: $white;
              border-color: $white;
              &::before{
                transition: 0.5s;
                left: 115%
              }
            }
          }
        }
        &-forgot{
          cursor: pointer;

          &:hover{
            color: $blue;
          }
        }
      }
    }
  }


  @keyframes drop_side{
    0%{
      opacity: 0;
      transform: translateY(-20%);
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
