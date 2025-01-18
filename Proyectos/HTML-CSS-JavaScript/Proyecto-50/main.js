window.addEventListener("load", () => {

    let layoutProducts = document.querySelector(".layout__products"); 
    let layoutCart = document.querySelector(".layout__cart");
    let cartProducts = document.querySelector(".cart__products");
    let totalPrice = document.querySelector(".total__price");
    let cartIco = document.querySelector(".cart__ico");
    let cartBtn = document.querySelector(".cart__btn");

    let products = [
        {
        id: 0,
        title: "Camiseta",
        img: "product-1.jpg",
        stock: 5,
        price: 14.99
        },
        {
            id: 1,
            title: "Camara",
            img: "product-2.jpg",
            stock: 7,
            price: 49.99
        },
        {
            id: 2,
            title: "Ordenador Portatil",
            img: "product-3.jpg",
            stock: 8,
            price: 499.99
        },
        {
            id: 3,
            title: "Zapatillas",
            img: "product-4.jpg",
            stock: 3,
            price: 30.99
        },
    ];

    let cart = [];

    function removeCart(id) {
        let cartProduct = findCart(id);

        if(cartProduct.quantity >= 1) {
            cartProduct.quantity--;
        }

        if(cartProduct.quantity <= 0) {
            let index = cart.findIndex(product => product.id === cartProduct.id)
            cart.splice(index, 1);
        }

        if (getTotal() <= 0) {
            cart = [];
            localStorage.removeItem("cart")
            localStorage.clear();
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function getTotal() {
        let total = 0;

        cart.forEach(productCart => {
            let product = findProduct(productCart.id);
            let subtotal = product.price * productCart.quantity

            total += subtotal;
        });

        return total.toFixed();
    };

    function showCart() {
        if (cart.length > 0) {
            layoutCart.classList.remove("layout__cart--hide");
        } else {
            layoutCart.classList.add("layout__cart--hide");
        }

        cartProducts.innerHTML = "";

        cart.forEach(cartProduct => {

            let product = findProduct(cartProduct.id);
            let subtotal = product.price * cartProduct.quantity;

            cartProducts.innerHTML += `
                <article class="cart__item">

                <div class="cart__container-img">
                    <img class="cart__img" src="${product.img}"/>
                </div>

                <div class="cart__content">
                    <h3 class="cart__product-title">${product.title}</h3>

                    <button class="cart__btn-quantity">
                        <i class="btn-quantity__ico-minus fa-solid fa-minus" data-id="${product.id}"></i>

                        <span class="btn-quantity__number">${cartProduct.quantity}</span>

                        <i class="btn-quantity__ico-plus fa-solid fa-plus" data-id="${product.id}"></i>
                    </button>

                    <p class="cart__subtotal">${subtotal}€</p>
                </div>

                </article>
            `;

            let total = getTotal();
            totalPrice.textContent = total + "€";

            let iconsMinus = document.querySelectorAll(".btn-quantity__ico-minus");

            iconsMinus.forEach(ico => {
                ico.addEventListener("click", () => {


                    let productId = ico.getAttribute("data-id");

                    removeCart(productId);

                    showCart();
                });
            });

            let iconsPlus = document.querySelectorAll(".btn-quantity__ico-plus");

            iconsPlus.forEach(ico => {
                ico.addEventListener("click", () => {


                    let productId = ico.getAttribute("data-id");

                    addCart(productId);

                    showCart();
                });
            });
        });
    };

    function loadCart() {
        let myCart = JSON.parse(localStorage.getItem("cart"));

        if (myCart) {
            cart = myCart;
            showCart();
        }

        if(cart.length > 0) {
            layoutCart.classList.remove("layout__cart--hide");
        }
    }

    function addCart(id) {

        let cartProduct = findCart(id);
        let product = findProduct(id);

        if(cartProduct == null) {
            cart.push({
                id: id,
                quantity: 1
            });
        } else {
            cartProduct.quantity++;

            if (cartProduct.quantity > product.stock) {
                alert("Solo tenemos "+product.stock+ " disponibles");
                cartProduct.quantity = product.stock;
            }
        };

        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart);
    }

    function findCart(id) {
        let exists = cart.findIndex(productCart => productCart.id == id);

        if (exists != -1) {
            return cart[exists];
        } else {
            return null;
        }
    };

    function findProduct(id) {
        return products.find(product => product.id == id);
    }

    function showProducts() {
        products.forEach(product => {

            layoutProducts.innerHTML +=`
            <article class="products__product">
                <div class="product__container-img">
                    <img class="product__img" src="${product.img}" />
                </div>

                <div class="product__title">${product.title}</div>
                <div class="product__price">${product.price}</div>
                <button class="product__btn" data-id="${product.id}">Comprar</button>
            </article>
            `;
        });

        let allBtnBuy = document.querySelectorAll(".product__btn");

        allBtnBuy.forEach(btn => {

            btn.addEventListener("click", () => {

                let productId = parseInt(btn.getAttribute("data-id"));

                let product = findProduct(productId);

                if (product.stock > 0) {
                    addCart(productId)
                    showCart();
                }
            });
        });
    }

    cartIco.addEventListener("click", () => {
        layoutCart.classList.toggle("layout__cart--hide");
    });


    cartBtn.addEventListener("click", () => {
        cart = [];
        localStorage.removeItem("cart");
        localStorage.clear();
        layoutCart.classList.toggle("layout__cart--hide");
    });

    showProducts();
    loadCart();
});