<template>
  <div class="section col-12" :class="{'optionals': optionals}">
    <div class="section-header">
      Акции
      <fai :icon="['fas', 'chevron-up']" @click="optionals = !optionals" />
    </div>
    <div class="section-body">
      <div class="section-body-sector col-sm-12 col-md-10">

        <div class=" col-sm-6 col-md-4 col-lg-3" v-for="(stock, i) in stocks">
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
              <div class="button">
                <div class="button-bg"></div>
                <div class="button-title">Подробнее</div>
              </div>
            </div>



          </div>
        </div>

      </div>
      <div class="change col-md-2" @click="$router.push('/stocks')">Другое</div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        optionals: true,
        stocks: [
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
  
  .section-body-sector{
    align-items: flex-start;
  }
  .section-body-sector>div{
    padding: 5px;
  }
  .offers-body-items-item{
    max-height: 350px;
    height: 100%;
  }
 .offers-body-items-item-title{
  font-weight: bold;
 }
  ::-webkit-scrollbar-thumb {
    background: $grey_border;
  }

</style>
