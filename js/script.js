$(document).ready(function() {
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 200) { // เมื่อ scroll ไปยังพิกัดที่กำหนด
            $('.image').attr('src', '/img/kirito.jpg'); // เปลี่ยนรูปภาพไปยังรูปใหม่
        } else {
            $('.image').attr('src', '/img/black.jpg'); // เปลี่ยนรูปภาพกลับไปยังรูปเริ่มต้น
        }
    });
});
