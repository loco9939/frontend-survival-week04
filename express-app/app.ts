// TODO: Express 를 이용하여 서버를 만들어 주세요.
import cors from 'cors';
import express from 'express';

type Menu = {
  id:string;
  name:string;
  price:number
}

type Restaurant = {
  id:string;
  category:string;
  name:string;
  menu:Menu[];
}

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const restaurants:Restaurant[] = [
  {
    id: '1',
    category: '중식',
    name: '메가반점',
    menu: [
      { id: '1', name: '짜장면', price: 8000 },
      { id: '2', name: '짬뽕', price: 8000 },
      { id: '3', name: '차돌짬뽕', price: 9000 },
      { id: '4', name: '탕수육', price: 14000 },
    ],
  },
  {
    id: '2',
    category: '한식',
    name: '메리김밥',
    menu: [
      { id: '5', name: '김밥', price: 3500 },
      { id: '6', name: '참치김밥', price: 4500 },
      { id: '7', name: '제육김밥', price: 5000 },
      { id: '8', name: '훈제오리김밥', price: 5500 },
    ],
  },
  {
    id: '3',
    category: '일식',
    name: '혹등고래카레',
    menu: [
      { id: '9', name: '기본카레', price: 9000 },
      { id: '10', name: '가라아게카레', price: 14000 },
      { id: '11', name: '소시지카레', price: 13000 },
      { id: '12', name: '돈까스카레', price: 14000 },
      { id: '13', name: '닭가슴살카레', price: 13000 },
    ],
  },
];

export default restaurants;

app.get('/restaurants', (req, res) => {
  res.status(200).send({ restaurants });
});

type Orders = {
  menu:Menu[]
  totalPrice:number
}

app.post('/orders', (req, res) => {
  const { body }:{ body: Orders } = req;
  res.status(201).send({
    id: Date.now().toString(),
    order: body,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
