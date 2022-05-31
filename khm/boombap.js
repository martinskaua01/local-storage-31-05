let usuarios = []

const addUsuario = () => {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    usuarios.push([nome, email,senha])
    console.log('users',usuarios)
}let usuarios = []

const addusuario = () => {
      let nome = document.getElementById('nome').value
      let email = document.getElementById('email').value
      let senha = document.getElementById('senha').value

if (localStorage.getItem('usuarios') != null){
usuarios = JSON.paarse(localstorage.getItem)('usuarios')

}

usuarios.push({nome, email, senha})
localStorage.setItem('usuarios' , JSON.stringify(usuarios))
}

const listUsuarios = () => {
    let tbody = Document.getElementById('table-linha')
if (localStorage.getItem('usuaros') != null){
usuarios = JSON.parse(localStorage.getItem('usuarios'))
usuarios.forEach(usuario => {
    console.log(usuario[0], usuario[1])
    tbody.innerHTML += "<tr> <td>"+usuario[0]+"</td> <td>"+usuario[1]+"</td> </tr>"
});

}

    console.log(tbody)
    tbody.innerHTML = "<tr> <td>joao</td> <td>jsilva@gmail.com</td> </tr>"
    tbody.innerHTML += "<tr> <td>pedro</td> <td>pedro@gmail.com</td> </tr>"
}