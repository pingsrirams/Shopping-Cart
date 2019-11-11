// document.getElementById("cart-info").addEventListener("click", function(){
// 	const cart = document.getElementById("cart");
// 	cart.classList.toggle("show-cart");
// 	console.log(cart);
// });

(function () {
	const cartInfo = document.getElementById('cart-info');
	const cart = document.getElementById('cart');

	cartInfo.addEventListener('click', function () {
		cart.classList.toggle('show-cart');
	});
})();

// add items to the cart

// (function(){

// const cartBtn = document.querySelectorAll('.store-item-icon');

// cartBtn.forEach(function(btn){
// 	btn.addEventListener('click', function(event){
// 		console.log(event.target);
// 	})
// });






// })();
