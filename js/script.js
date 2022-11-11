Vue.component('app-good',{
	props: ['title', 'author', 'img_href', 'price_good', 'price_bad', 'is_sold'],
	template: `
		<div class="good" :class="{ 'sold-in-auction': is_sold }">
			<img class="pic" v-bind:src=img_href alt="pic">
			<div class="good-content">
				<h2>
					«{{ title }}»<br>
					{{ author }}
				</h2>
				<div class="buy-block" v-show="!is_sold">
					<div class="price-block">
						<div class="price-bad price-one" v-show="price_bad != null">
							{{ price_bad }} $
						</div>
						<div class="price-good price-one" v-show="price_good != null">
							{{ price_good }} $
						</div>
					</div>
					<button class="buy-btn">Купить</button>
				</div>
				<div class="buy-block" v-show="is_sold">
					Продана на аукционе
				</div>
			</div>
		</div>
	`
});

let app = new Vue({
	el: '#app',
	data() {
		return {
			is_mobile_menu_active: false,
			items: [
				{id: 1, title: 'Рождение Венеры', author: 'Сандро Боттичелли', img_href: '../img/pic1.png', price_good: 1000000, price_bad: 2000000, is_sold: false},
				{id: 2, title: 'Тайная вечеря', author: 'Леонардо да Винчи', img_href: '../img/pic2.png', price_good: 3000000, is_sold: false},
				{id: 3, title: 'Сотворение Адама', author: 'Микеланджело', img_href: '../img/pic3.png', price_good: 5000000, price_bad: 6000000, is_sold: false},
				{id: 4, title: 'Урок анатомии', author: 'Рембрандт', img_href: '../img/pic4.png', is_sold: true}
			],
			query: ''
		}
	},
	methods: {
		toggle_mobile_menu: function(){
			this.is_mobile_menu_active = !this.is_mobile_menu_active;
		}
	},
	computed: {
		queryItems: function(){
			console.log(this.query);
			return this.items.filter((item) => item.title.toLowerCase().indexOf(this.query.toLowerCase()) !== -1);
		}
	}
});