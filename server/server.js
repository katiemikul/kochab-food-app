const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

const foodRouter = require('./routes/food.route');
const foodCollection = require('./modules/food.collection');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/food', (req, res) => {
    res.sendStatus(200);
})

// app.use('/food', foodRouter);

app.listen(PORT, () => {
    console.log(`up and running on port: ${PORT}`);
});
