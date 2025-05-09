let products = [
    { id: 1, name: "Laptop Gaming", price: 25000000, description: "Laptop gaming mạnh mẽ với card đồ họa RTX 4060." },
    { id: 2, name: "Bàn phím cơ", price: 1500000, description: "Bàn phím cơ RGB với switch Gateron." },
    { id: 3, name: "Chuột gaming", price: 900000, description: "Chuột gaming không dây siêu nhẹ." },
    { id: 4, name: "Tai nghe Bluetooth", price: 1200000, description: "Tai nghe Bluetooth chống ồn." },
    { id:5, name:"Đèn học LED", price: 500000, description: "Đèn học LED với nhiều chế độ sáng." },
    { id: 6, name: "USB 3.0", price: 300000, description: "USB 3.0 tốc độ cao." },
];
let productList = document.getElementById("productList");
let productDetail = document.getElementById("product-detail");
products.forEach(product => {
    let li = document.createElement("li");
    li.textContent = product.name;
    li.classList.add("product-item");
    li.addEventListener("click", () => {
        productDetail.innerHTML = `<h3>${product.name}</h3>
                                  <p>Giá: ${product.price.toLocaleString()} VND</p>
                                  <p>${product.description}</p>`;
    });
    productList.appendChild(li);
});
