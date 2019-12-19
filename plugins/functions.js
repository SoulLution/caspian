let getTime = date => {
	let time = new Date(date);
	return checkTime(time.getHours()) + ':' + checkTime(time.getMinutes()); 
}

let getMonthName = month => {
	switch(month)
  {
    case 0:   return 'январь';
    case 1:   return 'февраль';
    case 2:   return 'март';
    case 3:   return 'апрель';
    case 4:   return 'май';
    case 5:   return 'июнь';
    case 6:   return 'июль';
    case 7:   return 'август';
    case 8:   return 'сентябрь';
    case 9:   return 'октябрь';
    case 10:   return 'ноябрь';
    case 11:   return 'декабрь';
  }
}

let getMonthNameR = month => {
	switch(month)
  {
    case 0:   return 'января';
    case 1:   return 'февраля';
    case 2:   return 'марта';
    case 3:   return 'апреля';
    case 4:   return 'мая';
    case 5:   return 'июня';
    case 6:   return 'июля';
    case 7:   return 'августа';
    case 8:   return 'сентября';
    case 9:   return 'октября';
    case 10:   return 'ноября';
    case 11:   return 'декабря';
  }
}

let getNormalDate = date => {
	let time = new Date(date);
	let now = new Date();
	if(time.setHours(0,0,0,0) === now.setHours(0,0,0,0)) 												return 'Сегодня'
	else if(time.setHours(0,0,0,0) === (now.setHours(0,0,0,0) - 24*60*60*1000))	return 'Вчера'
	else if(time.setHours(0,0,0,0) === (now.setHours(0,0,0,0) + 24*60*60*1000))	return 'Завтра'
	else
	return checkTime(time.getDate()) + ' ' + getMonthNameR(time.getMonth()) + (now.getFullYear() !== time.getFullYear() ? ' ' + time.getFullYear() : ''); 
}

let checkTime = time => {
	return time >= 10 ? time : '0' + time;
}

let parser = (data, mas) => {
    let end
    if(mas)
      end = JSON.parse(JSON.stringify(data))
    else
      end = JSON.stringify(JSON.parse(data))
    return end
}
export default{
install(Vue, options){
		Vue.prototype.$getTime = getTime;
		Vue.prototype.$getNormalDate = getNormalDate;
        Vue.prototype.$parser = parser;
	}
}