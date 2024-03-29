
document.addEventListener("DOMContentLoaded", function() {
    // เลือกทุกปุ่มเพิ่มจำนวนสินค้าและกำหนดการทำงานเมื่อคลิก
    document.querySelectorAll('.cart-item .increase-button').forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.parentElement.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice(); // เรียกใช้ฟังก์ชันเพื่ออัปเดตราคารวม
        });
    });

    // เลือกทุกปุ่มลดจำนวนสินค้าและกำหนดการทำงานเมื่อคลิก
    document.querySelectorAll('.cart-item .decrease-button').forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.parentElement.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice(); // เรียกใช้ฟังก์ชันเพื่ออัปเดตราคารวม
            }
        });
    });
});

// ฟังก์ชันสำหรับอัปเดตราคารวม
function updateTotalPrice() {
    const prices = document.querySelectorAll('.cart-item .price');
    let totalPrice = 0;
    prices.forEach(price => {
        const quantity = parseInt(price.parentElement.querySelector('.quantity').textContent);
        const priceValue = parseFloat(price.textContent.replace('฿', '').replace(',', ''));
        totalPrice += quantity * priceValue;
    });
    document.querySelector('.total-price').textContent = '฿' + totalPrice.toFixed(2);
}

