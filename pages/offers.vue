<template>
  <div class="body col-12">
    <div class="section col-12">
      <div class="section-header">Заказы</div>
      <div class="section-body offers-body">
        <div class="offers-body-handler">
          <div class="offers-body-handler-hand" @click="type = false" :class="{'active': !type}">
            Текущие
            <div class="hr"></div>
          </div>
          <div class="offers-body-handler-hand" @click="type = true" :class="{'active': type}">
            Завершённые
            <div class="hr"></div>
          </div>
        </div>


        <div class="offers-body-items">
          <div class=" col-sm-6 col-md-4 col-lg-3" v-for="(offer, i) in (type ? false_offers : offers)">
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


      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        type: false,
        false_offers: [
          {
            id: 3,
            end: true,
            created: new Date().setDate(new Date().getDate() - 5),
            products: []
          },
          {
            id: 4,
            end: true,
            created: new Date().setDate(new Date().getDate() - 8),
            ending: new Date().setDate(new Date().getDate() - 2),
            products: []
          },
        ],
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
          },
          {
            id: 6,
            end: false,
            created: new Date().setDate(new Date().getDate() - 5),
            ending: new Date().setDate(new Date().getDate() + 5),
            products: []
          },
          {
            id: 7,
            end: false,
            created: new Date().setDate(new Date().getDate() - 5),
            ending: new Date().setDate(new Date().getDate() + 5),
            products: []
          },
          {
            id: 8,
            end: false,
            created: new Date().setDate(new Date().getDate() - 5),
            ending: new Date().setDate(new Date().getDate() + 5),
            products: []
          },
          {
            id: 9,
            end: false,
            created: new Date().setDate(new Date().getDate() - 5),
            ending: new Date().setDate(new Date().getDate() + 5),
            products: []
          },

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

        for(let i = 0; i < this.false_offers.length; i++)
        for(let j = 0; j <= i; j++)
          this.false_offers[i].products.push(
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


::-webkit-scrollbar-thumb {
  background: $grey_border;
}
</style>
