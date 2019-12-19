<template>
  <div class="body col-12">
  	<div class="section">
	  	<div class="section-header">
		  	{{$route.params.id == 1 ? 'Холодильный шкаф A-2' : 'Холодильный шкаф B-2'}}
		  </div>
  		<div class="section-body stock_id col-12">


  			<div class="stock_id-stats col-sm-12">

	  			<div class="stock_id-stats-table">
		  			<div class="stock_id-stats-table-row" v-for="char in characters" v-if="char.value">
			  			<div class="stock_id-stats-table-row-title">{{char.title}}</div>
			  			<div class="stock_id-stats-table-row-value" v-if="!char.id">{{char.value}}</div>
			  			<router-link :to="'/stocks/'+ char.id" class="stock_id-stats-table-row-value" v-else>{{char.value}}</router-link>
		  			</div>
	  			</div>

	  			<div class="stock_id-stats-footer">
	  				<div class="button" v-if="false">
              <div class="button-bg"></div>
              <div class="button-title">Учавствовать</div>
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
      	title: '',
      	characters: [],
      }
    },
    mounted(){
    	let first, second, threed, fourth
    	if(this.$route.params.id == 2){
    		this.title = 'Новогодняя акция'
    		first  = {title: 'Описание', value: `${this.title} проходит с ${this.$getNormalDate(new Date().setDate(new Date().getDate() - 30))} по ${this.$getNormalDate(new Date().setDate(new Date().getDate() + 30))} во время проведения акции скидка на всю продукцию 99.99%`}
    		second = {title: 'Правила', value: 'Данная акция является безусловной'}
    		threed = {title: 'Отчёт об исполнении', value: ''}
    		fourth = {title: 'Несовместимые акции', value: 'Другая новогодняя акция', id: 3}
    	}else if(this.$route.params.id == 3){
    		this.title = 'Другая новогодняя акция'
    		first  = {title: 'Описание', value: `${this.title} проходит с ${this.$getNormalDate(new Date().setDate(new Date().getDate() - 30))} по ${this.$getNormalDate(new Date().setDate(new Date().getDate() + 30))} во время проведения акции скидка на всю продукцию 0.99%`}
    		second = {title: 'Правила', value: 'Для участия в акции нужно быть подписанным на нашу Telegram рассылку. Это можно сделать со страницы Контакты.'}
    		threed = {title: 'Отчёт об исполнении', value: ''}
    		fourth = {title: 'Несовместимые акции', value: 'Новогодняя акция', id: 2}
    	}else{
    		this.title = 'Длинная акция'
    		first  = {title: 'Описание', value: `Бесплатная доставка на период с ${this.$getNormalDate(new Date().setDate(new Date().getDate() - 10))} по ${this.$getNormalDate(new Date().setDate(new Date().getDate() + 80))} `}
    		second = {title: 'Правила', value: 'Данная акция является безусловной'}
    		threed = {title: 'Отчёт об исполнении', value: ''}
    		fourth = {title: ''}
    	}
    	this.characters.push(first)
    	this.characters.push(second)
    	this.characters.push(threed)
    	this.characters.push(fourth)
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

	.stock_id{
		align-items: flex-start;
		&-avatar{

			&-galery{
				flex-direction: row;
				width: 100%;
				align-items: center;
				margin: 0.5rem 0;
				&>img{
					max-width: calc(32.335% - (4rem / 3));
					margin: 0 0.5%;
				}
				&>svg{
					font-size: 2rem;
					color: $blue;
					cursor: pointer;

					&:hover{
						color: $blue_light
					}
				}
			}
			&>img{
				border: 1px solid $grey_border;
			}
		}
		&-stats{
			padding: 1rem 0;
			flex-direction: column;
			justify-content: space-between;
			
			&-table{
				font-size: 1.25rem;

				&-value{
					margin: 1rem 0.5rem;
					&>div{
						color: $orange;
						width: auto;
						margin-left: 0.5rem;
					}
				}
  			&-row{
  				flex-direction: row;
  				&-title{
						color: $blue;
						border-bottom: 1px solid $blue;
  				}
	  			&-value{
	  				padding: 0.5rem;
	  			}
	  		}
			}
			&-footer{
				max-width: 575px;
			}
		}
	}

</style>
