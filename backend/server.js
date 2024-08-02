require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const loginRoutes = require('./routers/loginRoutes');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/login', loginRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'login.html'));
});

const PORT = process.env.PORT || 3162;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
