const elementosUsuarios = document.querySelector("#elementosCohorte")

window.addEventListener("load", () => {

    const token = localStorage.getItem('token');

    fetch('http://localhost:8080/api/usuario/all',{
        headers: {
            'Content-type': 'application/json',
            'Authorization': token
        }
    }).then(resp => resp.json()).then(datos => {

        console.log(datos);
        datos.forEach( usuario => {

        const templateTitulo =  `
                                <div class="col mb-4">
                                    <div class="card">
                                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7448038e-8dd5-433e-92fb-3f02e3f0c817/deb9il3-e016b57a-c702-4b9c-a047-f09ba80b1724.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc0NDgwMzhlLThkZDUtNDMzZS05MmZiLTNmMDJlM2YwYzgxN1wvZGViOWlsMy1lMDE2YjU3YS1jNzAyLTRiOWMtYTA0Ny1mMDliYTgwYjE3MjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qWT4WwyVa4QU5nXyIZ7y7cEbfjwGwVxfTtaDC_PJa5c" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title text-center">${usuario.nombre + " " + usuario.apellido}</h5>
                                            <p class="card-text text-center">${usuario.correo}</p>
                                        </div>
                                    </div>
                                </div>
                                    `;

        elementosUsuarios.innerHTML += templateTitulo;

        });

    })
    .catch((error) => {
        console.error(error);
    })

})