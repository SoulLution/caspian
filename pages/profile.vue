<template>
  <div class="body col-12">
  	<div class="section">
	  	<div class="section-header">
		  	Профиль
				<router-link :to="'/login'">Выйти</router-link>
		  </div>
  		<div class="section-body profile col-12">

  			<div class="profile-avatar col-sm-3">
  				<img src="default_avatar.png">
  				<fai :icon="['fas', 'plus']" />
  			</div>

  			<div class="profile-manager col-sm-9">
	  			<div class="profile-manager-name">Имя Фамилия управляющего</div>
	  			<div class="profile-manager-contacts">
		  			<div class="profile-manager-contacts-contact">
			  			<div class="profile-manager-contacts-contact-title">Телефон:</div>
			  			<a target="_blank" href="tel: +00000000000" class="profile-manager-contacts-contact-content">+0(000)0000000</a>
		  			</div>
		  			<div class="profile-manager-contacts-contact">
			  			<div class="profile-manager-contacts-contact-title">Почта:</div>
			  			<a target="_blank" href="mailto: test@mail.ru" class="profile-manager-contacts-contact-content">test@mail.ru</a>
		  			</div>
	  			</div>
  				
  			</div>

  			<div class="profile-exit col-sm-12">
  				<div class="profile-exit-change">
	  				<div class="profile-exit-change-title">Другие точки</div>
	  				<div class="profile-exit-change-body col-12">
	  					<div class="active col-sm-6 col-md-4 col-lg-3"><img src="default_avatar.png"></div>
	  					<div class="col-sm-6 col-md-4 col-lg-3"><img src="default_avatar.png"></div>
	  				</div>
  				</div>

  			</div>

  			<div class="profile-galery col-sm-12">
  				<div class="profile-galery-title col-12">Документы</div>
  				<div class="profile-galery-item col-sm-3" v-for="i in 3">
  					<img src="default_avatar.png">
  				</div>
  				<div class="profile-galery-item col-sm-3">
	  				<div class="profile-galery-item-bg"></div>
  					<fai :icon="['fas', 'plus']" />
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

	.profile{
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
				font-size: 2rem;
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
		&-galery{
			&-title{
				margin: 0.5rem 0;
				color: $blue_light;
				font-weight: bold;
				font-size: 1.5rem;
				border-bottom: 1px solid $blue_light;
			}
			&-item{
				&>img{}
				&>svg{
					z-index: 1;
					height: 100%;
					width: 100%;
					padding: 25%;
					cursor: pointer;
					color: $grey_font;
					transition: background-color 0.2s;
					&:hover{
						background-color: $grey_bg;
						color: $blue;
					}
				}
				&-bg{
					z-index: 0;
					border-radius: 50%;
					position: absolute;
					top: 25%;
					left: 25%;
					height: 50%;
					width: 50%;
				}
			}
		}
		&-exit{
			&-change{
				align-items: flex-start;
				&-title{
					margin: 0.5rem 0;
					color: $blue_light;
					font-weight: bold;
					font-size: 1.5rem;
					border-bottom: 1px solid $blue_light;
					flex-direction: row;
				}
				&-body{
					&>div{
						// max-height: 15.666667%;
						// margin: 0 1% 0 0;
						cursor: pointer;
						border: 2px solid transparent;

						&:hover{
							border-color: $blue;
						}

  					&.active{
  						border-color: $orange;
  					}
					}
				}
			}
		}
	}

</style>
