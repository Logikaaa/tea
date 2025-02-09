document.addEventListener("DOMContentLoaded", () => {
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.createElement("p");
    totalPriceElement.id = "total-price";
    totalPriceElement.textContent = "Загальна сума: $0";
    cartList.after(totalPriceElement);
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
        cartList.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;

            const title = document.createElement("h3");
            title.textContent = item.name;

            const price = document.createElement("p");
            price.textContent = `${item.price} грн`;
            total += item.price;

            const removeButton = document.createElement("button");
            removeButton.textContent = "❌";
            removeButton.classList.add("remove-button");
            removeButton.addEventListener("click", () => removeFromCart(index));

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(price);
            card.appendChild(removeButton);

            cartList.appendChild(card);
        });
        totalPriceElement.textContent = `Загальна сума: ${total} грн`;
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    renderCart();
});
