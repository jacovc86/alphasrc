angular.module('starter')
.service('Menu',function() {
	this.dishes = {
		deals: [
			{
				name: 'סטייק הבית',
				price: 41,
				image: '../img/deal1.jpg'
			},
			{
				name: 'סושי בצבעים',
				price: 39,
				image: '../img/deal2.jpg'
			},
			{
				name: 'טריפולטאי אותנטי',
				price: 40,
				image: '../img/deal3.jpg'
			}
		],
		pizzas: [
			{
				name: 'פיצה איטליאנו',
				price: 25,
				image: '../img/pizza1.jpg'
			},
			{
				name: 'הוט פיצה',
				price: 39,
				image: '../img/pizza2.jpg'
			},
			{
				name: 'פיצת אהבה',
				price: 40,
				image: '../img/pizza3.jpg'
			}
		],
		salad: [
			{
				name: 'סלט ביתי',
				price: 29,
				image: '../img/salad1.jpg'
			},
			{
				name: 'סלט יווני',
				price: 30,
				image: '../img/salad2.jpg'
			},
			{
				name: 'סלט בריאות',
				price: 32,
				image: '../img/salad3.jpg'
			}
		],
		pasta: [

		],
		yemen: [

		],
		baked: [

		],
		treats: [

		],
		deserts: [

		],
		drinks: [

		]

	}
});