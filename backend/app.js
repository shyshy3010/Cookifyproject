
const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


const homeRoutes = require('./routes/homeRoutes');
const recipesRoutes = require('./routes/recipesRoutes');
const myrecipesRoutes = require('./routes/myrecipesRoutes');
const pantryRoutes = require('./routes/pantryRoutes');

app.use('/api', recipesRoutes);
app.use('/api', homeRoutes);
app.use('/api', myrecipesRoutes);
app.use('/api', pantryRoutes);
app.use('/api/pantry', pantryRoutes);


module.exports = app;
