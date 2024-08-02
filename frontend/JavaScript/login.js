document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (!loginForm) {
        console.error('Element with ID loginForm not found');
        return;
    }

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(loginForm);
        const data = {
            username: formData.get('username'),
            password: formData.get('password')
        };

        console.log('Form data:', data);

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const textResult = await response.text();
            let result;

            try {
                result = JSON.parse(textResult);
            } catch (e) {
                throw new Error('Non-JSON response: ' + textResult);
            }

            console.log('Response result:', result);

            if (result.message === 'Login successful') {
                localStorage.setItem('chefId', result.userId);
                console.log("Stored chefId in localStorage:", result.userId);
                if (result.permission === 1) {
                    window.location.href = "chefpage.html";
                } else {
                    window.location.href = "chefpage.html";
                }
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Erreur de connexion. Veuillez réessayer.');
        }
    });
});
