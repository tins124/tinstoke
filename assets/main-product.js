function updateProductQuantity(e, id) {

    console.log(e)
    var data = {
        updates: {
            [id]: Number(e.value)
        }
    };
    axios.post('/cart/update.js', data)
        .then((result) => {
            return result.data.total_price
        })
        .then((value) => {
            var totalPrice = document.querySelectorAll('.cart-total')

            totalPrice.forEach(total => {
                total.innerHTML = 'Total price: ' + `<span class='money'>${Shopify.formatMoney(value)}</span>`
            })
        })
        .catch((err) => {
            console.error(err)
        });
}