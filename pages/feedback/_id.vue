<template>
  <div class="body col-12">


    <div class="section col-12">
      <div class="section-header" style="justify-content: flex-start;">
        <div class="section-header-ava" v-if="feedback.ava"><img :src="feedback.ava"></div>
          {{feedback.title}}
        <div  v-if="feedback.start">началась {{$getNormalDate(feedback.start, true)}}</div>
        <div  v-if="feedback.install">установлен {{$getNormalDate(feedback.install, true)}}</div>
        <div  v-if="feedback.created">доставка {{$getNormalDate(feedback.created, true)}}</div>
      </div>
      <div class="section-body feedback-body">

        <div class="feedback-body-feed">
          Оценить: 
          <fai :icon="[(i <= star_index ? 'fas' : 'far' ), (i === star_index && !star_index_type ? 'star-half-alt' : 'star')]" @mousemove="(e) => checkStar(e, i)" v-for="i in 10" />
        </div>

        <div class="feedback-body-chat">

          <div class="feedback-body-chat-row" :class="{'reverse': message.answer}" v-for="message in feedback.messages">
            <div class="feedback-body-chat-row-time">{{$getNormalDate(message.created, true) + ' ' + $getTime(message.created)}}</div>
            <div class="feedback-body-chat-row-message" :class="{'reverse': message.answer}" >
              <div class="feedback-body-chat-row-message-title">{{message.title}}</div>
              <div class="feedback-body-chat-row-message-file" v-if="message.file"><img :src="message.file"></div>
            </div>
          </div>
          
        </div>

        <div class="feedback-body-actions">
          <fai :icon="['fas', 'paperclip']" />
          <textarea class="feedback-body-actions-write" placeholder="Напишите сообщение"></textarea>
          <fai :icon="['fas', 'paper-plane']" />
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
        id: 0,
        star_index: 0,
        star_index_type: 0,
        feedback: {}
      }
    },
    mounted(){
      let id = this.$route.params.id.split('-')
      if(id.length === 2 && id[1])
        this.getFeed(id[0], id[1])
      else
        this.$router.push({name: 'feedback'})
    },
    methods:{
      checkStar(e, index){
        let width = e.target.clientWidth
        let offset = e.offsetX
        this.star_index = index

        if(offset < width / 2)
          this.star_index_type = 0
        else
          this.star_index_type = 1

      },
      getFeed(type, id){
        this.id = id

        switch(type){
          case 'stock': {
            this.$set(this.feedback, 'title', 'Новогодняя акция')
            this.$set(this.feedback, 'start', new Date().setDate(new Date().getDate() - 30))
          }; break
          case 'product': {
            this.$set(this.feedback, 'title', 'Продукт 1')
            this.$set(this.feedback, 'sku', '')

          }; break
          case 'equip': {
            this.$set(this.feedback, 'title', 'Холодильный шкаф A-2')
            this.$set(this.feedback, 'install', new Date().setDate(new Date().getDate() - 30))

          }; break
          case 'offer': {
            this.$set(this.feedback, 'title', 'Заказ 1')
            this.$set(this.feedback, 'created', new Date().setDate(new Date().getDate() - 15))

          }; break
          case 'contact': {
            this.$set(this.feedback, 'title', 'Фамилия имя супервайзера')
            this.$set(this.feedback, 'ava', '/default_avatar.png')

          }; break
        }

        this.$set(this.feedback, 'messages', [])
        for(let i = 0; i < 2; i++)
          this.feedback.messages.push({
            title: i === 0 ? 'Тут что-то не работает' : 'Нет всё работает',
            file: i === 0 ? '/default_avatar.png' : '',
            answer: i === 0 ? false : true,
            created: new Date()
          })

      }
    }
  }
</script>
<style lang="scss" scoped>

  @import '@/assets/main.scss';

  .feedback-body{

    flex-direction: column;
    align-items: flex-start;

    &-feed{
      font-size: 1.25rem;
      margin: 0 0.25rem;
      color: $blue;
      align-items: center;
      &>svg{
        margin: 0 0.25rem;
        cursor: pointer;
      }
    }
    &>div{
      width: 100% !important;
    }
    &-chat{
      background-color: $white;
      border: 1px solid $grey_border;
      border-radius: 5px;
      box-shadow: 0.5px 1px 15px 0px rgba(0, 0, 0, 0.15);
      margin: 10px 0;
      height: 70vh;
      overflow-y: scroll;
      align-items: flex-start;

      &-row{
        padding: 5px 5px;
        justify-content: flex-end;
        height: auto;
        align-items: flex-end;
        flex-direction: row;
        &.reverse{
          flex-direction: row-reverse;
          justify-content: flex-end;
        }
        &-time{
          width: auto;
          color: $grey_border;
          margin: 0.1rem 0.5rem;
        }
        &-message{
          width: auto;
          max-width: 80%;
          background-color: $bg_main;
          border-radius: 8px 8px 0 8px;
          overflow: hidden;
          padding: 5px;
          height: auto;
          justify-content: flex-end;
          &.reverse{
            background-color: $blue;
            color: $white;
            border-radius: 8px 8px 8px 0;

          }
          &-title{

          }
          &-file{
            width: auto;
            height: auto;
            &>img{
              max-height: 35vh;
              // height: 100%;
              width: auto;
            }
          }
        }
      }
    }
    &-actions{
      flex-wrap: nowrap;
      align-items: center;
      
      &-write{
        width: 100%;
        resize: none;
      }
      &>svg{
        justify-content: center;
        font-size: 2.5rem;
        padding: 0.5rem;
        margin-left: 0.5rem;
        border-radius: 50%;
        background-color: $blue;
        color: $white;
        cursor: pointer;  
        &:hover{
          color: $bg_grey;
        }
        &:first-child{
          margin-left: unset;
          margin-right: 0.5rem;
          background-color: transparent;
          color: $grey_border;

          &:hover{
            color: $grey_font;
          }
        }
      }
    }
  }

::-webkit-scrollbar-thumb {
  background: $grey_border;
}
</style>
