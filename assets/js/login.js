const formLogin = document.querySelector('.form-signin');


console.log(formLogin);

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#inputEmail').value;
    const password = document.querySelector('#inputPassword').value;
    console.log(email, password);

    
    fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify( {
            correo: email,
            password: password
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(resp => {
        const token = resp.headers.get('Authorization');
        
        if(token && token.includes('Bearer') && resp.ok) {
            localStorage.setItem('token', token);
            console.log(token);
            url = window.location;
            const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
            location.href = path +  'data.html';
        } else {
            localStorage.removeItem('token');          
        }
    })
    

})