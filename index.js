const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  res.send({
    products: [
      {
        id: 1,
        name: "abc초코",
        price: 4000,
        imgSrc: "https://img.danawa.com/prod_img/500000/776/563/img/3563776_1.jpg?shrink=330:*&_v=20170202162018",
      },
      {
        id: 2,
        name: "쿠크다스",
        price: 5000,
        imgSrc: "https://img.danawa.com/prod_img/500000/693/997/img/6997693_1.jpg?shrink=330:*&_v=20190123165143",
      },
    ],
  });
});
app.post("/products", (req, res) => {
  res.send("상품이 등록되었습니다.");
});
app.post("/login", (req, res) => {
  res.send("로그인해주세요.");
});

app.listen(port, () => {
  console.log("서버가 실행되었습니다!");
});
