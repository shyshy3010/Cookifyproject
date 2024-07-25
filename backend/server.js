const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const loginRoutes = require('.backend/routers/loginRoutes'); 
const RecipesChefRoutes = require('.backend/routers/RecipesChefRoutes'); 

const app = express();
const PORT = 3021;


app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/api', loginRoutes);

app.use('/api', RecipesChefRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
