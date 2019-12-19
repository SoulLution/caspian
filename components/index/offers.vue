<template>
  <div class="section col-12" :class="{'optionals': optionals}">
    <div class="section-header">
      Заказы
      <fai :icon="['fas', 'chevron-up']" @click="optionals = !optionals" />
    </div>
    <div class="section-body">
      <div class="section-body-sector col-sm-12 col-md-10">

        <div class=" col-sm-6 col-md-4" v-for="(offer, i) in (type ? false_offers : offers)">
          <div class="offers-body-items-item">
            <div class="offers-body-items-item-title">Заказ {{offer.id}}</div>

            <div class="offers-body-items-item-times">
              <div class="offers-body-items-item-times-time">Заказан {{$getNormalDate(offer.created, true)}}</div>
              <div class="offers-body-items-item-times-time cancel" v-if="!offer.ending">Отменён</div>
              <div class="offers-body-items-item-times-time" :class="{'successful': offer.end}" v-else>
                {{(offer.end ? 'Доставлен' : 'Доставка') + ' ' + $getNormalDate(offer.ending, true)}}
              </div>
            </div>

            <div class="offers-body-items-item-price">Cумма <div>{{10000 * (i+1)}}тг</div></div>

            <div class="offers-body-items-item-table">
              <div class="offers-body-items-item-table-header">
                Список
              </div>
              <div class="offers-body-items-item-table-body">
                <div class="offers-body-items-item-table-body-cell" v-for="product in offer.products">
                  {{product.title}} {{product.count}}шт {{product.price * product.count}}тг
                </div>
              </div>
            </div>

            <router-link  :to="{ name: 'feedback', params: { id: offer.id }}" class="offers-body-items-item-feed">Обратная связь</router-link>

            <div class="offers-body-items-item-but" v-if="offer.end">
              <div class="button">
                <div class="button-bg"></div>
                <div class="button-title">Повторить</div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class="change col-md-2" @click="$router.push('/offers')">Ещё</div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        optionals: true,
        
        offers: [
          {
            id: 1,
            end: false,
            created: new Date().setDate(new Date().getDate() - 5),
            ending: new Date().setDate(new Date().getDate() + 5),
            products: []
          },
          {
            id: 2,
            end: false,
            created: new Date().setDate(new Date().getDate() - 5),
            ending: new Date().setDate(new Date().getDate() + 5),
            products: []
          },
          {
            id: 5,
            end: false,
            created: new Date().setDate(new Date().getDate() - 5),
            ending: new Date().setDate(new Date().getDate() + 5),
            products: []
          }
        ]
      }
    },
    mounted(){
      for(let i = 0; i < this.offers.length; i++)
        for(let j = 0; j <= i; j++)
          this.offers[i].products.push(
            {
              title: 'Продукт ' + (j + 1),
              count: 10,
              price: 1000
            }
          )
    },
    methods:{

    }
  }
</script>
<style lang="scss" scoped>

  @import '@/assets/main.scss';

  .section-body-sector>div{
    padding: 5px;
  }
 .offers-body-items-item-title{
  font-weight: bold;
 }
  ::-webkit-scrollbar-thumb {
    background: $grey_border;
  }
</style>
