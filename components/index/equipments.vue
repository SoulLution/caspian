<template>
  <div class="section col-12" :class="{'optionals': optionals}">
    <div class="section-header">
      Оборудование
      <fai :icon="['fas', 'chevron-up']" @click="optionals = !optionals" />
    </div>
    <div class="section-body">
      <div class="section-body-sector col-sm-12 col-md-10">
        <div class="section-body-sector-item col-sm-4" v-for="product in products">
          <div class="section-body-sector-item-cell">
            <div class="section-body-sector-item-cell-header">
              <div class="section-body-sector-item-cell-header-title">{{product.title}}</div>
            </div>
            <div class="section-body-sector-item-cell-body">
              <img :src=" img ? img : 'default_avatar.png'">
            </div>
            <div class="section-body-sector-item-cell-footer">
              <div class="button">
                <div class="button-bg"></div>
                <div class="button-title">Подробнее</div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
      <div class="change" @click="$router.push('/equipments')">Другое</div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        optionals: true,
        products: [
          {
            title: 'Товар 1',
            img: ''
          },
          {
            title: 'Товар 2',
            img: ''
          },
          {
            title: ' Товар 3',
            img: ''
          }
        ]
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
 
</style>
