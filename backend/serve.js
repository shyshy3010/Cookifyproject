require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const loginRoutes = require('./routers/loginRoutes');
const recipesChefRoutes = require('./routers/recipesChefRoutes');
const path = require('path');
const fs = require('fs');
const pool = require('./database.js');

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', loginRoutes);
app.use('/api', recipesChefRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'login.html'));
});

const PORT = process.env.PORT || 3163;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
