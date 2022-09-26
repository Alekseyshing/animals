import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMjNkYTkzLTJhN2MtNDBkMS04NTExLTc2Yjc4MDIxZmFmYiIsInJvbGUiOiJDVVNUT01FUiIsImxvZ2luIjoidGVzdF91c2VyIiwiZmlyc3ROYW1lIjoiVGVzdCIsImxhc3ROYW1lIjoiVXNlciIsImlhdCI6MTY2NDE5NDk5MCwiZXhwIjoxNjY0MTk1NTkwfQ.ZT-6oYuCP3KWT6s8fyOdkcuepTBhU0RhQbIgMZ93gn8')
  });
});

app.listen(3000, () => console.log('API is running on http://localhost:3000/login'));
