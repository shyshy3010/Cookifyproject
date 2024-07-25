const connection = require('../database'); // Assurez-vous que le chemin est correct

const login = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    const query = 'SELECT * FROM tbl_102_users WHERE username = ?';

    connection.query(query, [username], (err, results) => {
        if (err) {
            console.error('Error querying user:', err);
            return res.status(500).send('Server error');
        }

        if (results.length === 0) {
            return res.status(401).send('Invalid username or password');
        }

        const user = results[0];
        if (password !== user.password) { // Comparaison simple sans hashage
            return res.status(401).send('Invalid username or password');
        }

        // Rediriger en fonction de la permission de l'utilisateur
        if (user.permission === 1) {
            return res.redirect('chefhome.html');
        } else {
            return res.redirect('index.html');
        }
    });
};

module.exports = {
    login
};
