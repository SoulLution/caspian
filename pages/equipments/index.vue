<template>
  <div class="body col-12">
    <div class="section col-12">
      <div class="section-header">Оборудование</div>
      <div class="section-body offers-body">
        <div class="offers-body-handler">
          <div class="offers-body-handler-hand" @click="type = 0" :class="{'active': type === 0}">
            Установленное
            <div class="hr"></div>
          </div>
          <div class="offers-body-handler-hand" @click="type = 1" :class="{'active': type === 1}">
            Заказать
            <div class="hr"></div>
          </div>
        </div>


        <div class="offers-body-items">
          <div class=" col-sm-6 col-md-4 col-lg-3" v-for="(equip, i) in equipments[type]">
            <div class="offers-body-items-item">
              <div class="offers-body-items-item-title">{{equip.title}}</div>


              <div class="offers-body-items-item-ava">
                <img src="default_avatar.png">
              </div>

              <div class="offers-body-items-item-times">
                
                <div class="offers-body-items-item-times-time" v-if="equip.height">Высота {{equip.height}}см</div>
                <div class="offers-body-items-item-times-time" v-if="equip.width">Ширина {{equip.width}}см</div>
                <div class="offers-body-items-item-times-time" v-if="equip.shelfes">Полок {{equip.shelfes}}шт</div>

                <div class="offers-body-items-item-times-time" v-if="equip.created">Установлен {{$getNormalDate(equip.created, true)}}</div>

                <div class="offers-body-items-item-times-time cancel" v-if="equip.dismantling">
                  Демонтаж {{$getNormalDate(equip.dismantling, true)}}
                </div>
                <div class="offers-body-items-item-times-time" v-else-if="equip.service">
                  Обслуживание {{$getNormalDate(equip.service, true)}}
                </div>

                <div class="offers-body-items-item-times-time" v-if="equip.series">Серийный номер {{equip.series}}</div>
                <div class="offers-body-items-item-times-time" v-if="equip.inventory">Инвентарный номер {{equip.inventory}}</div>

              </div>

              <a :href="equip.manufacturer" target="_blank" class="offers-body-items-item-feed" v-if="equip.manufacturer">
                Сайт производителя
              </a>

              <router-link :to="{ name: 'feedback', params: { id: equip.id }}" class="offers-body-items-item-feed">
                {{equip.claim ? 'Обратная связь' : 'Обратная связь'}}
              </router-link>

              <div class="offers-body-items-item-but" v-if="!equip.dismantling">
                <div class="button" :class="{'err': type === 0}" @click="equipFunc(equip.id)">
                  <div class="button-bg"></div>
                  <div class="button-title">{{type === 0 ? 'Демонтаж' : 'Заказать'}}</div>
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
        equipments: [
          [
            {
              id: 1,
              avatar: '',
              title: 'Холодильный шкаф A-2',
              inventory: 1454332,
              series: 'A-2',
              manufacturer: 'https://google.com',
              created: new Date().setDate(new Date().getDate() - 30),
              service: new Date().setDate(new Date().getDate()),
              claim: false,
              dismantling: null,
            },
            {
              id: 2,
              avatar: '',
              title: 'Холодильный шкаф B-2',
              inventory: 1454333,
              series: 'B-2',
              manufacturer: '',
              created: new Date().setDate(new Date().getDate() - 30),
              service: new Date().setDate(new Date().getDate()),
              claim: true,
              dismantling: null,
            },
            {
              id: 3,
              avatar: '',
              title: 'Холодильный шкаф B-2',
              inventory: 1454334,
              series: 'B-2',
              manufacturer: '',
              created: new Date().setDate(new Date().getDate() - 30),
              service: new Date().setDate(new Date().getDate()),
              claim: true,
              dismantling: new Date().setDate(new Date().getDate() + 15),
            },
          ],
          [
            {
              id: 1,
              avatar: '',
              title: 'Холодильный шкаф A-2',
              manufacturer: 'https://google.com',
              shelfes: 7,
              height: 150,
              width: 130,
            },
            {
              id: 2,
              avatar: '',
              title: 'Холодильный шкаф B-2',
              manufacturer: '',
              shelfes: 10,
              height: 200,
              width: 130,
            },

          ],
        ],
      }
    },
    mounted(){

    },
    methods:{
      equipFunc(id){
        if(this.type === 1){
          this.$router.push('equipments/' + id)
        }else{

        }
      }
    }
  }
</script>
<style lang="scss" scoped>

  @import '@/assets/main.scss';

  .offers-body-items-item-feed{
    position: relative;
    margin-top: 0;
  }
  .offers-body-items-item-but{
    bottom: 0;
    position: sticky;
  }

  ::-webkit-scrollbar-thumb {
    background: $grey_border;
  }
</style>
