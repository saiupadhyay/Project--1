document.getElementById('maidSignupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const maidData = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        experience: e.target.experience.value,
        services: e.target.services.value.split(','),
        location: e.target.location.value,
        contact: e.target.contact.value
    };

    try {
        const response = await fetch('http://localhost:5000/api/maids/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(maidData)
        });
        const result = await response.json();
        alert('Maid registered successfully!');
    } catch (error) {
        alert('Error registering maid. Please try again.');
    }
});
