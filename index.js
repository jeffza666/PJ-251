const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended:true}))

app.use(express.static(path.join(__dirname,'public')))

app.set('view engine', 'ejs'); // กำหนดใช้งาน view engine เป็น EJS
app.set('views', path.join(__dirname,'/views')); // กำหนดตำแหน่งของไฟล์เทมเพลต

const port = 3000;

app.get('/', (req, res) => {
    res.render('home'); // ให้ Express ใช้ไฟล์เทมเพลตชื่อ index.ejs ในโฟลเดอร์ views
  });

app.post('/', (req, res) => {
    console.log(req.body)
    res.redirect('/')
  }); 

app.get('/cart', (req, res) => {
    res.render('cart'); // ให้ Express ใช้ไฟล์เทมเพลตชื่อ cart.ejs ในโฟลเดอร์ views
});

app.post('/', (req, res) => {
  res.render('cart'); // ให้ Express ใช้ไฟล์เทมเพลตชื่อ cart.ejs ในโฟลเดอร์ views
});

app.get('/purchase', (req, res) => {
  res.render('purchase'); // ให้ Express ใช้ไฟล์เทมเพลตชื่อ cart.ejs ในโฟลเดอร์ views
});

app.post('/', (req, res) => {
res.render('purchase'); // ให้ Express ใช้ไฟล์เทมเพลตชื่อ cart.ejs ในโฟลเดอร์ views
});

app.get('/information', (req, res) => {
  res.render('information'); // ให้ Express ใช้ไฟล์เทมเพลตชื่อ cart.ejs ในโฟลเดอร์ views
});

app.post('/', (req, res) => {
res.render('information'); // ให้ Express ใช้ไฟล์เทมเพลตชื่อ cart.ejs ในโฟลเดอร์ views
});

app.get('/edit', (req, res) => {
  res.render('edit'); // ให้ Express ใช้ไฟล์เทมเพลตชื่อ cart.ejs ในโฟลเดอร์ views
});

app.post('/', (req, res) => {
res.render('edit'); // ให้ Express ใช้ไฟล์เทมเพลตชื่อ cart.ejs ในโฟลเดอร์ views
});


app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
