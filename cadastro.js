let nome = document.querySelector('#nome');
let LabelNome = document.querySelector('#LabelNome');
var validNome = false;

let usuario = document.querySelector('#usuario');
var LabelUsuario = document.querySelector('#LabelUsuario');
var validUsuario= false;

let telefone = document.querySelector('#telefone');
var LabelTelefone = document.querySelector('#LabelTelefone');
var validTelefone = false;

let senha = document.querySelector('#senha');
var LabelSenha = document.querySelector('#LabelSenha');
var validSenha = false;

let ConfirmarSenha = document.querySelector('#ConfirmarSenha');
var LabelConfirmarSenha = document.querySelector('#LabelConfirmarSenha');
var validConfirmarSenha = false;

let msgError = document.querySelector('#msgError');
let msgSucess = document.querySelector('#msgSucess');


nome.addEventListener('keyup', ()=>{
    
    if(nome.value.length <= 3){
        LabelNome.setAttribute('style', 'color: red')
        LabelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres '
        nome.setAttribute('style', 'border-color:red; ')
        validNome = false;
        
    }else{
        LabelNome.setAttribute('style', 'color: green;')
        LabelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green; ')        
        validNome = true;
    }
})

usuario.addEventListener('keyup' , () =>{
    
    if(usuario.value.length <= 4){
        LabelUsuario.setAttribute('style', 'color: red;')
        LabelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres '
        usuario.setAttribute('style', 'border-color:red; ')
        validUsuario = false;
        
    }else{
        LabelUsuario.setAttribute('style', 'color: green;')
        LabelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color:green; ')        
        validUsuario = true;
    }
})

telefone.addEventListener('keyup' , () =>{
    
    if(telefone.value.length <= 10 ){
        LabelTelefone.setAttribute('style', 'color: red;')
        LabelTelefone.innerHTML = 'Telefone inválido!'
        telefone.setAttribute('style', 'border-color:red; ')
        validTelefone = false;
        
    }else{
        LabelTelefone.setAttribute('style', 'color: green;')
        LabelTelefone.innerHTML = 'Telefone'
        telefone.setAttribute('style', 'border-color: green; ')        
        validTelefone = true;
    }
})

senha.addEventListener('keyup' , () =>{
    
    if(senha.value.length <= 4 ){
        LabelSenha.setAttribute('style', 'color: red')
        LabelSenha.innerHTML = 'A senha deve conter no mínimo 5 números '
        senha.setAttribute('style', 'border-color:red; ')
        validSenha = false;
        
    }else{
        LabelSenha.setAttribute('style', 'color: green;')
        LabelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green; ')        
        validSenha = true;
    }
})

ConfirmarSenha.addEventListener('keyup' , () =>{
    
    if(senha.value != ConfirmarSenha.value ){
        LabelConfirmarSenha.setAttribute('style', 'color: red;')
        LabelConfirmarSenha.innerHTML = 'Confirmar senha *As senhas não conferem'
        ConfirmarSenha.setAttribute('style', 'border-color:red; ')
        validConfirmarSenha = false;
        
    }else{
        LabelConfirmarSenha.setAttribute('style', 'color: green;')
        LabelConfirmarSenha.innerHTML = 'Confirmar senha'
        ConfirmarSenha.setAttribute('style', 'border-color: green; ')        
        validConfirmarSenha = true;
    }
})



function cadastrar(){
    if(validNome && validUsuario && validTelefone && validSenha && validConfirmarSenha){
        
        let Lista_Users = JSON.parse(localStorage.getItem('Lista_Users') || '[]')
        
        Lista_Users.push(
            
            {
                usuario: usuario.value,
                senha: senha.value             
            }
        )
        
        localStorage.setItem('Lista_Users', JSON.stringify(Lista_Users))
        
        setTimeout(() =>{
        
            window.location.href ='https://alexandre-feliciano.github.io/Login/'
        
        }, 3000)

        msgSucess.setAttribute('style', 'display: block')
        msgSucess.innerHTML = ' <strong>Cadastrando usuário...</strong>'

        msgError.setAttribute('style', 'display:none')
        msgError.innerHTML = ''
    }else{
        
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = ' <strong>Preencha todos os campos!</strong>'
        
        msgSucess.setAttribute('style', 'display:none')
        msgSucess.innerHTML = ''
    }

}