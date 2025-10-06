let currentDay = 0;
let currentWeek = 0;
let currentSubgroup = 0;
let currentDate = new Date();

let schedule = [
	{
		nameOfDay: 'Понедельник',
		dateOfDay: '-',
		scheduleOfDay: [
			{
				name: '-',
				type: '-',
				teacher: '-',
				cabinet: 'Ауд. -',
				time: '8:00-9:40',
				weeks: ' ',
			},
			{
				name: 'Иностранный язык',
				type: 'ПЗ',
				teacher: 'Игнатьева Е.М./Старовойтова А.Г.',
				cabinet: 'Ауд. 214/Ауд. 312',
				time: '9:55-11:35',
				weeks: ' ',
			},
			{
				name: 'Дискретная математика и математическая логистика',
				type: 'ЛК',
				teacher: 'Шкробот И.О.',
				cabinet: 'Ауд. 244',
				time: '12:15-13:55',
				weeks: ' ',
			},
			{
				name: 'Физическая культура',
				type: '-',
				teacher: 'Байко О.М.',
				cabinet: 'Ауд. -',
				time: '14:10-15:50',
				weeks: ' ',
			},
			{
				name: 'Дискретная математика и математическая логистика',
				type: 'ПЗ',
				teacher: 'Шкробот И.О.',
				cabinet: 'Ауд. 218',
				time: '16:20-18:00',
				weeks: ' ',
			},
		],
	},
	{
		nameOfDay: 'Вторник',
		dateOfDay: '-',
		scheduleOfDay: [
			{
				name: 'История белорусской государственности',
				type: 'ПЗ',
				teacher: 'Спартак А.А.',
				cabinet: 'Ауд. 218',
				time: '8:00',
				weeks: '2/4',
			},
			{
				name: 'Английский язык (технический перевод)',
				type: 'ПЗ (Ф)',
				teacher: 'Старовойтова А.Г.',
				cabinet: 'Ауд. 104',
				time: '9:55',
				weeks: ' ',
			},
			{
				name: 'Математический анализ',
				type: 'ЛК',
				teacher: 'Черняк Ж.А.',
				cabinet: 'Ауд. 244',
				time: '12:15',
				weeks: ' ',
			},
			{
				name: 'Математический анализ',
				type: 'ПЗ',
				teacher: 'Черняк Ж.А.',
				cabinet: 'Ауд. 244',
				time: '14:10',
				weeks: ' ',
			},
			{
				name: '-',
				type: '-',
				teacher: '-',
				cabinet: 'Ауд. -',
				time: '16:20',
				weeks: ' ',
			},
		],
	},
	{
		nameOfDay: 'Среда',
		dateOfDay: '-',
		scheduleOfDay: [
			{
				name: 'ОиМП',
				type: 'ЛБ',
				teacher: 'Старый',
				cabinet: 'Ауд. 212',
				time: '8:00',
				weeks: '1/3/2/4',
			},
			{
				name: 'ОиМП',
				type: 'ЛБ',
				teacher: 'Старый',
				cabinet: 'Ауд. 212',
				time: '9:55',
				weeks: '1/3/2/4',
			},
			{
				name: 'Иностранный язык',
				type: 'ПЗ',
				teacher: 'Игнатьева Е.М./Старовойтова А.Г.',
				cabinet: 'Ауд. 214/Ауд. 312',
				time: '12:15',
				weeks: ' ',
			},
			{
				name: 'Аналитическая геометрия',
				type: 'ЛК',
				teacher: 'Василевский Г.В.',
				cabinet: 'Ауд. 405',
				time: '14:10',
				weeks: ' ',
			},
			{
				name: '-',
				type: '-',
				teacher: '-',
				cabinet: 'Ауд. -',
				time: '16:20',
				weeks: ' ',
			},
		],
	},
	{
		nameOfDay: 'Четверг',
		dateOfDay: '-',
		scheduleOfDay: [
			{
				name: '-',
				type: '-',
				teacher: '-',
				cabinet: 'Ауд. -',
				time: '8:00',
				weeks: ' ',
			},
			{
				name: 'Аналитическая геометрия',
				type: 'ПЗ',
				teacher: 'Василевский Г.В.',
				cabinet: 'Ауд. 410',
				time: '9:55',
				weeks: ' ',
			},
			{
				name: 'Математический анализ',
				type: 'ЛК',
				teacher: 'Черняк Ж.А.',
				cabinet: 'Ауд. 418',
				time: '12:15',
				weeks: ' ',
			},
			{
				name: 'Математический анализ',
				type: 'ПЗ',
				teacher: 'Черняк Ж.А.',
				cabinet: 'Ауд. 244',
				time: '14:10',
				weeks: ' ',
			},
			{
				name: 'ОиМП',
				type: 'ПЗ',
				teacher: 'Старый',
				cabinet: 'Ауд. 202',
				time: '16:20',
				weeks: '4',
			},
		],
	},
	{
		nameOfDay: 'Пятница',
		dateOfDay: '-',
		scheduleOfDay: [
			{
				name: 'ОиМП',
				type: 'ПЗ/ЛБ',
				teacher: 'Старый',
				cabinet: 'Ауд. 212',
				time: '8:00',
				weeks: ' ',
			},
			{
				name: 'ОиМП',
				type: 'ПЗ/ЛБ',
				teacher: 'Старый',
				cabinet: 'Ауд. 212',
				time: '9:55',
				weeks: ' ',
			},
			{
				name: 'Физическая культура',
				type: '-',
				teacher: 'Байко О.М.',
				cabinet: 'Ауд. -',
				time: '12:15',
				weeks: ' ',
			},
			{
				name: 'История белорусской государственности',
				type: 'ЛК',
				teacher: 'Спартак А.А.',
				cabinet: 'Ауд. 222',
				time: '14:10',
				weeks: ' ',
			},
			{
				name: '-',
				type: '-',
				teacher: '-',
				cabinet: 'Ауд. -',
				time: '16:20',
				weeks: ' ',
			},
		],
	},
	{
		nameOfDay: 'Суббота',
		dateOfDay: '-',
		scheduleOfDay: [
			{
				name: 'Алгебра и теория чисел',
				type: 'ЛК',
				teacher: 'Шкробот И.О.',
				cabinet: 'Ауд. 406',
				time: '8:00',
				weeks: ' ',
			},
			{
				name: 'Алгебра и теория чисел',
				type: 'ПЗ',
				teacher: 'Шкробот И.О.',
				cabinet: 'Ауд. 406',
				time: '9:55',
				weeks: ' ',
			},
			{
				name: '-',
				type: '-',
				teacher: '-',
				cabinet: 'Ауд. -',
				time: '12:15',
				weeks: ' ',
			},
			{
				name: '-',
				type: '-',
				teacher: '-',
				cabinet: 'Ауд. -',
				time: '14:10',
				weeks: ' ',
			},
			{
				name: '-',
				type: '-',
				teacher: '-',
				cabinet: 'Ауд. -',
				time: '16:20',
				weeks: ' ',
			},
		],
	},
];

function chooseCurrentDay(button){
	const currButton = button.target;
	switch(currButton.className){
		case 'monday':
			currentDay = 0;
			break;
		case 'tuesday':
			currentDay = 1;
			break;
		case 'wednesday':
			currentDay = 2;
			break;
		case 'thursday':
			currentDay = 3;
			break;
		case 'friday':
			currentDay = 4;
			break;
		case 'saturday':
			currentDay = 5;
			break;
	}
	showSchedule();
}

function chooseCurrentWeek(event){
	currentWeek = ['first', 'second', 'third', 'fourth'].indexOf(event.target.value);
	localStorage.setItem('weeknumb', event.target.value);
	showSchedule();
}

function chooseCurrentSubgroup(event){
	currentSubgroup = ['first', 'second'].indexOf(event.target.value);
	localStorage.setItem('subgroup', event.target.value);
	showSchedule();
}

function htmlToArray(collection)
{
	const param = [];
	for(let i = 0; i < collection.length; i++)
		param[i] = collection[i];
	return param;
}

function checkSubgroup(item)
{
	if(item.includes('/'))
	{
		let items = item.split('/');
		return items[currentSubgroup];
	} 
	return item;
}

function onThisWeek(weeks)
{
	let res = weeks.split('/');
	if(res.length === 4)
	{
		let subgroupWeeks = currentSubgroup === 0 ? [res[0], res[1]] : [res[2], res[3]];
        if (subgroupWeeks.includes(String(currentWeek + 1))) {
            return true;
		}
		return false;
	}
	else
	{
		return res.includes(String(currentWeek + 1));
	}
}

function editSchedule(array){
	for (let i = 0; i < array.length; i++)
	{
		if(schedule[currentDay].scheduleOfDay[i].weeks === ' ' ||
    	onThisWeek(schedule[currentDay].scheduleOfDay[i].weeks)
		)
		{
			let temp = htmlToArray(array[i].children);
			let desc = temp[0].children;
			desc[0].textContent = schedule[currentDay].scheduleOfDay[i].time;
			desc[1].textContent = schedule[currentDay].scheduleOfDay[i].type;
			let info = temp[1].children;
			info[0].textContent = schedule[currentDay].scheduleOfDay[i].name;
			info[1].children[0].textContent 
				= checkSubgroup(schedule[currentDay].scheduleOfDay[i].cabinet);
			info[1].children[1].textContent 
				= checkSubgroup(schedule[currentDay].scheduleOfDay[i].teacher);
		}
		else{
			let temp = htmlToArray(array[i].children);
			let desc = temp[0].children;
			let info = temp[1].children;
			desc[0].textContent = schedule[currentDay].scheduleOfDay[i].time;
			desc[1].textContent = '-';
			info[0].textContent = '-';
			info[1].children[0].textContent = '-';
			info[1].children[1].textContent = '-';
		}
	}
}

function getValueFromLS(key)
{
	const value = localStorage.getItem(key);
	if(value)
		return value;
	return false;
}

function setCurrentDayToSchedule()
{
	currentSubgroup = ['first', 'second'].indexOf(getValueFromLS('subgroup'));
	currentWeek = ['first', 'second', 'third', 'fourth'].indexOf(getValueFromLS('weeknumb'));
	console.log(document.getElementsByName('subgroup'), ' ', currentWeek);
	currentDay = currentDate.getDay()-1;
	for(let i = 0; i < 6; i++)
	{
		let date = new Date(currentDate.getFullYear(), currentDate.getMonth(),
					currentDate.getDate() - (currentDate.getDay()-1) + i);
		schedule[i].dateOfDay = 
					`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
	}
}

function showSchedule(){
	const dateSchedule = document.getElementById('schedule').children[0].children;
	
	dateSchedule[0].textContent = schedule[currentDay].nameOfDay;
	dateSchedule[1].textContent = schedule[currentDay].dateOfDay;

	const itemSchedule = document.getElementsByClassName('item');
	const parameters = htmlToArray(itemSchedule);

	editSchedule(parameters);
}



setCurrentDayToSchedule();
showSchedule();
