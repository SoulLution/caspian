<template>
  <div class="body col-12">
    <div class="section col-12">
      <div class="section-header">Акции</div>
      <div class="section-body offers-body">
        <div class="offers-body-handler">
          <div class="offers-body-handler-hand" @click="type = 0" :class="{'active': type === 0}">
            Действующие
            <div class="hr"></div>
          </div>
          <div class="offers-body-handler-hand" @click="type = 1" :class="{'active': type === 1}">
            Предлогаемые
            <div class="hr"></div>
          </div>
          <div class="offers-body-handler-hand" @click="type = 2" :class="{'active': type === 2}">
            Завершённые
            <div class="hr"></div>
          </div>
        </div>


        <div class="offers-body-items">
          <div class=" col-sm-6 col-md-4 col-lg-3" v-for="(stock, i) in stocks[type]">
            <div class="offers-body-items-item">
              <div class="offers-body-items-item-title">{{stock.id + ') ' + stock.title}}</div>

              <div class="offers-body-items-item-times">
                <div class="offers-body-items-item-times-time">Начало {{$getNormalDate(stock.created, true)}}</div>
                <div class="offers-body-items-item-times-time" :class="{'successful': stock.end}">
                  Конец {{$getNormalDate(stock.ending, true)}}
                </div>
                <div class="offers-body-items-item-times-time cancel" v-if="stock.incompatible">Есть несовместимые акции</div>
                <div class="offers-body-items-item-times-time successful" v-if="stock.without">Безусловная акция</div>
              </div>

              <router-link  :to="{ name: 'stocks', params: { id: stock.id }}" class="offers-body-items-item-feed">Обратная связь</router-link>

              <div class="offers-body-items-item-but">
                <div class="button" @click="$router.push('stocks/' + stock.id)">
                  <div class="button-bg"></div>
                  <div class="button-title">Подробнее</div>
                </div>
              </div>



            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        type: 0,
        stocks: [
          [
            {
              id: 2,
              title: 'Новогодняя акция',
              incompatible: true,
              without: true,
              created: new Date().setDate(new Date().getDate() - 30),
              ending: new Date().setDate(new Date().getDate() + 30),
              products: []
            },
            {
              id: 3,
              title: 'Другая новогодняя акция',
              incompatible: true,
              without: false,
              created: new Date().setDate(new Date().getDate() - 30),
              ending: new Date().setDate(new Date().getDate() + 30),
              products: []
            },
            {
              id: 4,
              title: 'Длинная акция',
              incompatible: false,
              without: true,
              created: new Date().setDate(new Date().getDate() - 10),
              ending: new Date().setDate(new Date().getDate() + 80),
              products: []
            },
          ],
        ],
      }
    },
    mounted(){
      for(let k = 0; k < this.stocks.length; k++)
      for(let i = 0; i < this.stocks[k].length; i++)
        for(let j = 0; j <= i; j++)
          this.stocks[k][i].products.push(
            {
              title: 'Продукт ' + (j + 1),
            }
          )
    },
    methods:{

    }
  }
</script>
<style lang="scss" scoped>

  @import '@/assets/main.scss';
 
  .offers-body{
    flex-direction: column;
    align-items: flex-start;
    &-handler{
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 1rem;
      &-hand{
        width: auto;
        cursor: pointer;
        padding: 0 0.5rem;
        margin-right: 0.25rem;
        font-size: 1.25rem;
        border: 1px solid transparent;
        border-bottom: unset;
        color: $grey_font;
        &.active{
          color: $orange !important;
          border-color: $orange !important;
          .hr{
            max-width: 100%;
            background-color: $orange;
          }
        }
        &:hover{
          color: $blue;
          border-color: $blue;
          .hr{
            max-width: 100%;
          }
        }
        &>.hr{
          position: absolute;
          bottom: 0;
          left: 0;
          max-width: 0;
          height: 1px;
          background-color: $blue;
          transition: 0.3s;
        }
      }
    }


    &-items{
      flex-wrap: wrap;
      &>div{
        padding: 5px;
      }
      &-item{
          border: 1px solid $grey_font;
          padding: 0;
          align-items: flex-start;
          justify-content: flex-start;
          margin-bottom: 10px;
          background-color: $white;
          box-shadow: 0.5px 1px 4px 0px rgba(0,0,0,0.25);
          max-height: 350px;
          height: 100%;
          overflow-y: auto;
        &-title{
          position: sticky;
          top: 0;
          z-index: 1;
          background-color: $white;
          height: 1.8rem;
          margin: 1rem;
          padding-bottom: 0.25rem;
          color: $blue;
          border-bottom: 1px solid $blue;
        }
        &-times{
          margin: 1rem;
          margin-top: unset;
          &-time{
            &.successful{
              color: $blue_light;
            }
            &.cancel{
              color: $red;
            }
          }
        }
        &-table{
          margin: 1rem;
          margin-top: unset;
          &-header{
            color: $blue;
            border-bottom: 1px solid $blue;
            margin-bottom: 0.25rem;
          }
          &-body{
            &-cell{
              border-bottom: 1px dashed $grey_border;
            }
          }
        }

        &-price{
          margin: 1rem;
          margin-top: unset;
          &>div{
            margin-left: 0.25rem;
            width: auto;
          }
        }
        &-but{

        }
        &-feed{
          position: sticky;
          bottom: 0;
          background-color: $white;
          justify-content: flex-end;
          margin: 0.5rem; 
        }
      }
    }
  }


::-webkit-scrollbar-thumb {
  background: $grey_border;
}
</style>
