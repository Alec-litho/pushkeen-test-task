const express = require('express');
const app = express();
const cardRouter = require('./src/routes/card.routes.js');
const { default: cardValidation } = require('./src/middlewares/validateCard.js');
const cors = require("cors");

app.use(cors({
  origin:"https://alec-litho.github.io",
  methods: ["POST","DELETE","GET"],
  credentials: true
}))
app.use(express.json());
app.use('/api', cardRouter);
app.post('/cards', cardValidation, cardRouter.post);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
