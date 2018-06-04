let monthlyIncome,
	time, 
	name,
	price;

function start() {
		
	while(isNaN(monthlyIncome) || monthlyIncome == '' || monthlyIncome == null) {
		monthlyIncome = prompt("Ваш бюджет на месяц?", '');
	}
	
	name = prompt("Название вашего магазина?", '').toUpperCase();
	time = 21;
}
// start();


let mainList = {
	budget: monthlyIncome,
	name: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: 	function chooseGoods() {
		for (let i = 0; i < 3; i++){

			let a = prompt('Какой тип товаров будем продавать?', '');
			
			if((typeof(a)) === 'string'  &&  (typeof(a)) != null && a != '' && a.length < 50) {
				console.log('все верно!');
				mainList.shopGoods[i] = a;
			} 	else {
					i = i - 1;
				}
		}
	},
	workTime: 	function workTime(time) {
		if (time < 0) {
			console.log('токаого не может быть ')
		} else if(time > 8 && time < 20) {
			console.log('время работать!');
			mainList.open = true;
			}  else if (time < 24) {
				console.log('уже слишком поздно!');
				} else {
					console.log('в сутках только 24 часа)');
					}
	},
	dayBudget: function countMoney() {
		alert("Ежедневный бюджет" + monthlyIncome/30);
	},
	makeDiscounts: function countDiscount(price) {		
		while(isNaN(price) || price == '' || price == null) {
			price = prompt("цена со скидкой", '');
		}
		if (mainList.discount == true) {	
			price = price * 0.8
			console.log(price);
		} else {console.log(price)}
	},
	hireEmployers: function employers(){
		for (let i = 1; i <= 4; i++){
			let name = prompt('Имя сотрудника', '');
				if((typeof(name)) === 'string'  &&  (typeof(name)) != null && name != '' && isNaN(name)) {
					console.log('все верно!');
					mainList.shopGoods[i] = i + name;
				} else {
					i = i - 1
					}
		}
	},
	chooseShopItems: function  chooseShopItems() {
		let items = prompt("Перечислите через запятую товары", "");

		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt(" Подождите, ещё ", ""));
		mainList.shopItems.sort();
	}
};

console.log(mainList)