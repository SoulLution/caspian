<template>
  <div class="body col-12">
    <div class="section col-12">
      <div class="section-header">Обратная связь</div>
      <div class="section-body offers-body">


        <div class="offers-body-items">
          <div class=" col-sm-6 col-md-4 col-lg-3" v-for="(feed, i) in feedbacks">
            <div class="offers-body-items-item">
              <div class="offers-body-items-item-title">{{feed.id + ') ' + feed.title}}</div>

              <div class="offers-body-items-item-times">
                <div class="offers-body-items-item-times-time">Начало {{$getNormalDate(feed.created, true)}}</div>

                <div class="offers-body-items-item-times-time" :class="{'successful': feed.answer}">{{feed.answer ? 'Отвеченно' : 'Без ответа'}}</div>

              </div>

              <div class="offers-body-items-item-but">
                <div class="button" @click="goNext(feed.type, feed.type_id)">
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
        feedbacks: [
          {
            id: 1,
            type: 1,
            type_id: 1,
            title: 'Новогодняя акция',
            created: new Date().setDate(new Date().getDate() - 30),
            answer: false
          },
          {
            id: 2,
            type: 2,
            type_id: 1,
            title: 'Продукт 1',
            created: new Date().setDate(new Date().getDate() - 30),
            answer: false
          },
          {
            id: 3,
            type: 3,
            type_id: 1,
            title: 'Холодильный шкаф A-2',
            created: new Date().setDate(new Date().getDate() - 10),
            answer: true
          },
          {
            id: 4,
            type: 4,
            type_id: 1,
            title: 'Заказ 1',
            created: new Date().setDate(new Date().getDate() - 30),
            answer: false
          },
          {
            id: 5,
            type: 5,
            type_id: 1,
            title: 'Фамилия имя супервайзера',
            created: new Date().setDate(new Date().getDate() - 30),
            answer: false
          }
        ],
      }
    },
    mounted(){

    },
    methods:{
      goNext(type, id){
        let end = 'feedback/'

        switch(type){
          case 1: end += 'stock'; break
          case 2: end += 'product'; break
          case 3: end += 'equip'; break
          case 4: end += 'offer'; break
          case 5: end += 'contact'; break
        }
        end += '-' + id
        this.$router.push(end)
      }
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
