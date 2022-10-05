/*Vue.component('app-good',{
	template: `
		<div class="good" v-for="good in goods">
			<img class="pic" src="../img/pic1.png" alt="pic">
			<div class="good-content">
				<h2>
					«{{ good.title }}»<br>
					{{ good.author }}
				</h2>
				<div class="buy-block">
					<div class="price-block">
						<div class="price-bad price-one">
							2&nbsp;000&nbsp;000&nbsp;$
						</div>
						<div class="price-good price-one">
							1&nbsp;000&nbsp;000&nbsp;$
						</div>
					</div>
					<button class="buy-btn">Купить</button>
				</div>
			</div>
		</div>
	`,
	data() {
		return {
			goods: [
				{id: 1, title: 'Рождение Венеры', author: 'Сандро Боттичелли', price_good: 1000000, price_bad: 2000000, is_sold: false},
				{id: 2, title: 'Тайная вечеря', author: 'Леонардо да Винчи', price_good: 3000000, is_sold: false},
				{id: 3, title: 'Сотворение Адама', author: 'Микеланджело', price_good: 5000000, price_bad: 6000000, is_sold: false},
				{id: 4, title: 'Урок анатомии', author: 'Рембрандт', is_sold: false}
			]
		}
	}
});*/

let app = new Vue({
	el: '#app',
	data: {
		is_active: false,
		items: [
			{id: 1, img: '../img/pic1.png', title: 'Рождение Венеры', author: 'Сандро Боттичелли', price_good: 1000000, price_bad: 2000000, is_sold: false},
			{id: 2, img: '../img/pic2.png', title: 'Тайная вечеря', author: 'Леонардо да Винчи', price_good: 3000000, price_bad: null, is_sold: false},
			{id: 3, img: '../img/pic3.png', title: 'Сотворение Адама', author: 'Микеланджело', price_good: 5000000, price_bad: 6000000, is_sold: false},
			{id: 4, img: '../img/pic4.png', title: 'Урок анатомии', author: 'Рембрандт', price_good: null, price_bad: null, is_sold: true}
		]
	},
	methods: {
		toggle_mobile_menu: function(){
			this.is_active = !this.is_active;
		}
	}
});