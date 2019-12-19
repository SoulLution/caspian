<template>
  <div class="section col-12">
    <div class="section-header">Контакты</div>
    <div class="section-body">
      <div class="ava">
        <img src="default_avatar.png">
        <div class="ava-target">
          <div class="name">Торговый представитель</div>
          <div class="about">Визит супервайзера {{$getNormalDate(new Date(), true) + ' ' + $getTime(new Date)}}</div>
          <div class="about">Визит экспедитора {{$getNormalDate(new Date().setDate(new Date().getDate() + 1), true) + ' ' + $getTime(new Date)}}</div>
        </div>
      </div>
      <div class="change" @click="$router.push('/contacts')">Подробнее</div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {

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
