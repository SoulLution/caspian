<template>
  <div class="section col-12">
    <div class="section-header">Профиль</div>
    <div class="section-body">
      <div class="ava">
        <img src="default_avatar.png">
        <div class="ava-target">
          <div class="name">Торговая точка №1</div>
        </div>
      </div>
      <div class="change" @click="$router.push('/profile')">Изменить</div>
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
