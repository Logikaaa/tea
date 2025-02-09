
class Card {
    constructor(image, name, price) {
        this.image = image;
        this.name = name;
        this.price = price;
    }

    createCardElement() {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = this.image;
        img.alt = this.name;

        const title = document.createElement("h3");
        title.textContent = this.name;

        const price = document.createElement("p");
        price.textContent = `${this.price} грн`;

        const button = document.createElement("button");
        button.classList.add("cart-button");
        button.innerHTML = "🛒";
        button.addEventListener("click", () => this.addToCart());

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(button);

        return card;
    }

    addToCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ image: this.image, name: this.name, price: this.price });
        localStorage.setItem("cart", JSON.stringify(cart));
        document.getElementById("cart-count").textContent = cart.length;
    }
}





document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    if (!productList) return;
    
    const products = [
        new Card("../images/card.png", "Да Хун Пао пресований 500г", 1500),
        new Card("../images/tcard2.png", "Да Хун Пао 100г", 550),
        new Card("../images/tcard1.png", "Пуер 1960р Сун Пін Цизі", 42500),
        new Card("https://clubpuer.com.ua/content/images/35/900x902l80br0/chai-shen-puer-banzhang-panda-ecological-tea-gold-award-tea-king-cake-orhanichnyi-2004-rik-200h-kytai-16573064721906.webp", "Шен пуер", 999),
        new Card("https://nutsboom.com.ua/content/images/33/480x480l50nn0/shu-puer-chai-chernyi-blynid-69305253320208.jpg", "Шу Пуер 200г пресований", 700),
        new Card("https://teahouse.ua/wp-content/uploads/2024/09/mlinec.png", "Шу Пуер 'імператорський'100г", 660),
        new Card("https://tea-puer.com.ua/image/cache/1%20photo%20card/Smola%20shu%20Puera%20-%20Cha%20Gao%20100%20g/Smola%20shu%20Puera%20-%20Cha%20Gao%20100%20g1-450x450.jpg", "Смола Шу Пуера 100г", 1100),
        new Card("https://360view.3dmodels.org/zoom/Food/Tea_Bag_1000_0001.jpg", "Чайний пакєєєтік", 8)
    ];
    
    productList.innerHTML = ""; 
    products.forEach(product => {
        productList.appendChild(product.createCardElement());
    });
});






document.addEventListener("DOMContentLoaded", () => {
    const dishesList = document.getElementById("dishes-list");
    if (!dishesList) return;
    
    const dishes = [
        new Card("https://clubpuer.com.ua/content/images/2/800x800l80br0/avtentychnyi-isynskyi-chainyk-si-shi-omeliukh-na-hiltsi-sakury-150ml-kytai-87123107668907.webp", " Ісинський Чайник Сі Ші 150мл", 600),
        new Card("https://clubpuer.com.ua/content/images/38/800x800l80br0/chainyk-ruchnoi-roboty-z-isynskoi-hlyny-derevo-dovholittia-vid-maistra-shili-pai-yiren-160ml-82012452536134.webp", "Чайник Ручної Роботи 'Дерево Довголіття' 160мл", 3200),
        new Card("https://kovtok.com.ua/wp-content/uploads/2023/03/pil30-008.jpg", "Піала Ісинська Глина 30мл", 35),
        new Card("https://teahouse.ua/wp-content/uploads/2023/12/0027_20231221_190434.jpg", "Піала Сакура 80мл", 320),
        new Card("https://prosvetlenie.com.ua/ua/wp-content/uploads/2025/01/pialy-1.jpg", "Піали Для Чаю 4шт 40мл", 700),
        new Card("https://svoitovary.com.ua/content/images/10/800x800l80bc0/87927182373138.webp", "Чабань Бамбуковий", 1500),
        new Card("https://teawarrior.ua/images/stories/virtuemart/product/chaban_venge27-19-6-1.jpg", "Чабань Дерево Венге", 2300),
    ];
    
    dishesList.innerHTML = ""; 
    dishes.forEach(dish => {
        dishesList.appendChild(dish.createCardElement());
    });
});