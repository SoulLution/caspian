<template>
  <div class="body col-12">
    <profile />
    <contacts />
    <feedback />
    <production />
    <offers />
    <equipments />
    <stocks />
  </div>
</template>

<script>
  import Profile from '@/components/index/profile.vue'
  import Contacts from '@/components/index/contacts.vue'
  import Equipments from '@/components/index/equipments.vue'
  import Feedback from '@/components/index/feedback.vue'
  import Offers from '@/components/index/offers.vue'
  import Production from '@/components/index/production.vue'
  import Stocks from '@/components/index/stocks.vue'

  export default {
    components: { Profile, Contacts, Equipments, Feedback, Offers, Production, Stocks },
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
