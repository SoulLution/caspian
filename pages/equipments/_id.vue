<template>
  <div class="body col-12">
  	<div class="section">
	  	<div class="section-header">
		  	{{$route.params.id == 1 ? 'Холодильный шкаф A-2' : 'Холодильный шкаф B-2'}}
		  </div>
  		<div class="section-body equip_id col-12">

  			<div class="equip_id-avatar col-sm-3">
  				<img src="/default_avatar.png">
	  			<div class="equip_id-avatar-galery">
	  				<fai :icon="['fas', 'arrow-left']" />
	  				<img  src="/default_avatar.png" v-for="i in 3">
	  				<fai :icon="['fas', 'arrow-right']" />
	  			</div>
  			</div>

  			<div class="equip_id-stats col-sm-9">

	  			<div class="equip_id-stats-table">
		  			<div class="equip_id-stats-table-row" v-for="char in characters">
			  			<div class="equip_id-stats-table-row-cell">{{char.title}}</div>
			  			<div class="equip_id-stats-table-row-cell">{{char.value}}</div>
		  			</div>
		  			<div class="equip_id-stats-table-value">Цена: <div>{{value}}тг</div></div>
	  			</div>

	  			<div class="equip_id-stats-footer">
	  				<div class="button">
              <div class="button-bg"></div>
              <div class="button-title">Заказать</div>
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
      	characters: [],
      	value: 0,
      }
    },
    mounted(){
    	let first, second, threed
    	this.value = this.$route.params.id ? 10000 : 20000
    	for(let i = 0; i < 3; i++){
	    	if(this.$route.params.id){
	    		first  = {title: 'Высота', value: '150см'}
	    		second = {title: 'Ширина', value: '130см'}
	    		threed = {title: 'Полки', value: '7шт'}
	    	}else{
	    		first  = {title: 'Высота', value: '200см'}
	    		second = {title: 'Ширина', value: '130см'}
	    		threed = {title: 'Полки', value: '10шт'}

	    	}
	    	this.characters.push(first)
	    	this.characters.push(second)
	    	this.characters.push(threed)
	    }
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

	.equip_id{
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
			// min-height: 100%;
			
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
					background-color: $bg_grey;
  				flex-direction: row;
  				border: 1px solid $grey_border;
					border-top: unset;
  				&:first-child{
  					border-top: 1px solid $grey_border;
  				}
	  			&-cell{
	  				width: 50%;
	  				padding: 0.5rem;
	  				&:first-child{
		  				border-right: 1px solid $grey_border;
		  			}

	  			}
	  		}
			}
			&-footer{
				max-width: 575px;
			}
		}
	}

</style>
