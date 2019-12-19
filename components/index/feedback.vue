<template>
  <div class="section col-12">
    <div class="section-header">Обратная связь</div>
    <div class="section-body">
      <div class="section-body-sector col-sm-12 col-md-10">
        <div class="section-body-sector-item col-sm-4" v-for="message in messages">
          <div class="section-body-sector-item-cell">
            <div class="section-body-sector-item-cell-header">
              <img src="default_avatar.png">
            </div>
            <div class="section-body-sector-item-cell-body">
              <div class="feed">Оценка {{message.feed}}</div>
              <div class="answer" :class="{'active': message.answer}">{{message.answer ? 'Отвеченно' : 'Без ответа'}}</div>
              <!-- <div>{{message.mes}}</div> -->
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
      <div class="change col-md-2" @click="$router.push('/feedback')">Ещё +3</div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        messages: [
          {
            ava: '',
            type: 1,
            feed: 5,
            answer: false,
            mes: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
          },
          {
            ava: '',
            type: 2,
            feed: 4,
            answer: true,
            mes: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
          },
          {
            ava: '',
            type: 3,
            feed: 8,
            answer: false,
            mes: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
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
