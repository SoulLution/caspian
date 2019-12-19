<template>
  <div class="body col-12">

    <div class="section product col-sm-8" v-for="(item, i) in data">
      <div class="section-header">
        Товар №{{i+1}}
        <label @click="item.delete = !item.delete">
          <fai :icon="['fas', item.delete ? 'redo-alt' : 'trash-alt']"/>
        </label>
      </div>

      <transition name="fade-body">
        <div class="section-body product-body" v-if="!item.delete">
          <div class="product-body">
            <div class="product-body-ava col-sm-2"><img src="default_avatar.png"></div>
            <div class="product-body-counter col-sm-10">
              <div class="product-body-counter-size col-sm-12">
                <fai :class="{'active': item.focus}" :icon="['fas', 'minus']" @click="changeCount(item, -1)"/>
                <input type="number" min="0" v-model="item.count" @focus="item.focus = true" @blur="item.focus = false">
                <fai :class="{'active': item.focus}" :icon="['fas', 'plus']" @click="changeCount(item, 1)"/>
              </div>
              <div class="product-body-counter-price col-sm-12">Цена за еденицу: {{item.price}}тг</div>
            </div>
          </div>
        </div>
      </transition>
    </div>


    <div class="section basket col-sm-4">
      <div class="section-header">Корзина</div>
      <div class="section-body basket-body">
        <div class="basket-body-characters">
          <div class="basket-body-characters-char">
            <div>Сумма:</div>
            <div>{{total}}тг</div>
          </div>
          <div class="basket-body-characters-char">
            <div>Предположительная доставка:</div>
            <div>{{$getNormalDate(new Date().setDate(new Date().getDate() + 5), true)}}</div>
          </div>
        </div>
      </div>
      <div class="section-footer basket-footer">
        <div class="button">
          <div class="button-bg"></div>
          <div class="button-title">Заказать</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var old = [], then;
  export default{
    data(){
      return {
        data: [],
        total: 0
      }
    },
    watch: {
      data: {
        handler: (newData, oldData) => {
          then.total = 0
          for(let i = 0; i < newData.length; i++){
            if(newData[i].delete !== old[i].delete){
              newData[i].count = 0
              then.total += (parseInt(newData[i].count - parseInt(old[i].count))) * parseInt(newData[i].price)
              old[i].count = 0
              old[i].delete = newData[i].delete
            }else if(!newData[i].count) newData[i].count = 0
              else if(newData[i].count !== old[i].count){
              if(isNaN(parseInt(newData[i].count) - parseInt(old[i].count)))
                newData[i].count = old[i].count
              else
              old[i].count = newData[i].count
            }
            then.total += parseInt(newData[i].count) * parseInt(newData[i].price)
          }
        },
        deep: true
      }
    },
    mounted(){
      for(let i = 0; i < 30; i++)
        this.data.push({
          delete: false,
          count: 0,
          price: i+1,
          focus: false
        })
      old = this.$parser(this.data, true)
      then = this
    },
    methods:{
      changeCount(item, index){
        item.count = parseInt(item.count)
        item.count += index
        if(parseInt(item.count) < 0)
          item.count = 0
      }
    }
  }
</script>
<style lang="scss" scoped>

  @import '@/assets/main.scss';

  .section{
    transition: 0s;
    &.product{
      max-width: 65.666667%;
      margin-right: 1%;
    }
    &.basket{
      position: fixed;
      z-index: 1;
      right: 1rem;
      top: 4.5rem;
    }
    .basket-body{
      &-characters{
        &-char{
          flex-direction: row;
          justify-content: space-between;
          &>div{
            width: auto;
          }
        }
      }
    }

    &-header{
      &>label{

        &:hover{
          &>svg{
            color: $blue_light;
          }
        }
        &>svg{
          color: $blue;
        }
        &>.check{
          color: $white !important;
          position: absolute;
          top: 0.25rem;
          left: 0.125rem;
          font-size: 1.5rem;
        }
      }
    }
  }

  .product{
    &-body{
      &-ava{
        padding: 0;
        align-items: center;
        justify-content: center;
        &>img{
          max-height: 100px;
        }
      }
      &-counter{
        align-items: flex-start;
        justify-content: space-between;
        margin: 0.5rem 0;
        padding: 0;

        &-size{
          align-items: center;
          padding: 0;
          &>input{
            max-width: 200px;
            height: 2rem;
            width: calc(100% - 4rem - 4px);
            border: unset;
            border-top: 1px solid $grey_border;
            border-bottom: 1px solid $grey_border;
            outline: none;

            &:focus{
              border-color: $orange;
            }
          }
          &>svg{
            height: 2rem;
            width: 2rem;
            padding: 0.33rem;
            color: $blue;
            cursor: pointer;
            background-color: $white;
            border: 1px solid $grey_border;

            &.active{
              border-color: $orange;
            }
            &:first-child:active{
              color: red;
            }
            &:active{
              border-color: $blue;
              color: green;
            }
          }
        }
        &-price{
          margin: 0 0.5rem;
          padding: 0;
          width: auto;
        }
      }
    }
  }

  .fade-body-enter-active, .fade-body-leave-active {
    transition: 0.3s;
    height: 1rem;
  }
  .fade-body-enter, .fade-body-leave-to{
    transition: 0.3s;
    height: 0;
    padding: 0;
  }


  @media screen and (max-width: 575px){
    .product-body-counter-size>input{
      max-width: 100%;
    }
    .body{
      padding-bottom: 200px;
    }
    .section{
      &.product{
        max-width: 100%;
        margin-right: unset;
      }
      &.basket{
        bottom: 0;
        background-color: $white;
        top: unset;
        left: 0;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        padding: 0.25rem;

        .section-header{
          display: none;
        }
        .section-footer{
          max-width: 30%;
        }
        .basket-body{
          &-characters{
            &-char{
            }
          }
        }
      }
    }
  }
</style>
