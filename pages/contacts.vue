<template>
  <div class="body col-12">
  	<div class="col-md-12" style="padding: unset;">
	  	<div class="section" style="padding: 1rem">
		  	<div class="section-header">
			  	Контакты
			  </div>
	  		<div class="section-body contants col-12">

	  			<div class="contants-manager col-sm-9 col-md-12">

		  			<!-- <div class="contants-manager-name">123</div> -->
		  			<div class="contants-manager-contacts">
			  			<div class="contants-manager-contacts-contact">
				  			<div class="contants-manager-contacts-contact-title">Телефон горячей линии:</div>
				  			<a target="_blank" href="tel: +00000000000" class="contants-manager-contacts-contact-content">+00000000000</a>
			  			</div>
		  			</div>
	  				
	  			</div>

	  		</div>
	  	</div>
	  </div>

  	<div class="col-md-4" style="padding: 0 0.25rem" v-for="contact in contacts">
	  	<div class="section" style="padding: 1rem">
		  	<div class="section-header">
			  	{{contact.title}}
			  </div>
	  		<div class="section-body contants col-12">

	  			<div class="contacts-avatar col-sm-3 col-md-12">
	  				<img src="default_avatar.png">
	  			</div>
	  			<div class="contants-manager col-sm-9 col-md-12">

		  			<div class="contants-manager-name">{{contact.fio}}</div>
		  			<div class="contants-manager-contacts">
			  			<div class="contants-manager-contacts-contact">
				  			<div class="contants-manager-contacts-contact-title">Телефон:</div>
				  			<a target="_blank" :href="'tel:' + contact.phone" class="contants-manager-contacts-contact-content">{{contact.phone}}</a>
			  			</div>
		  			</div>
		  			<router-link :to="{ name: 'feedback', params: { id: contact.id }}" class="contants-manager-feed">
	            Обратная связь
	          </router-link>
	  				
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
      	contacts: [
      		{
      			id: 0,
      			title: 'Торговый представитель',
      			fio: 'Имя Фамилия торгового представителя',
      			ava: '',
      			phone: '+00000000000'
      		},
      		{
      			id: 0,
      			title: 'Экспедитор',
      			fio: 'Имя Фамилия экспедитора',
      			ava: '',
      			phone: '+00000000000'
      		},
      		{
      			id: 0,
      			title: 'Супервайзер',
      			fio: 'Имя Фамилия супервайзера',
      			ava: '',
      			phone: '+00000000000'
      		},
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
	
	.section-body{
		flex-wrap: wrap;
	}

	.contants{
		align-items: flex-start;
		&-avatar{
			&>img{
				border: 1px solid $grey_border;
			}
			&>svg{
				position: absolute;
				cursor: pointer;
				bottom: 1px;
				left: 16px;
				padding: 0;
				width: calc(100% - 32px);
				height: 30%;
				max-height: 3rem;
				font-size: 1.5rem;
				color: $white;
				background-color: rgba(0,0,0,0.5);

				&:hover{
					color: $blue;
					background-color: rgba(255,255,255,0.5);
				}
			}
		}
		&-manager{
			align-items: flex-start;
			&-name{
				font-size: 1.25rem;
				color: $blue_light;
			}
			&-contacts{
  			&-contact{
  				flex-direction: row;
  				font-size: 1.25rem;
	  			&-title{
	  				width: auto;
	  				margin-right: 0.5rem;
	  			}
	  			&-content{
	  				width: auto;
	  				&:hover{
	  					text-decoration: underline;
	  				}
	  			}
	  		}
			}
		}
	}

</style>
