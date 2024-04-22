let nome = document.querySelector('#nome');
let LabelNome = document.querySelector('#LabelNome');
let validNome = false;

let usuario = document.querySelector('#usuario');
let validUsuario= false;
let LabelUsuario = document.querySelector('#LabelUsuario');

let telefone = document.querySelector('#telefone');
let LabelTelefone = document.querySelector('#LabelTelefone');
let validTelefone = false;

let senha = document.querySelector('#senha');
let LabelSenha = document.querySelector('#LabelSenha');
let validSenha = false;

let ConfirmarSenha = document.querySelector('#ConfirmarSenha');
let LabelConfirmarSenha = document.querySelector('#LabelConfirmarSenha');
let validConfirmarSenha = false;


nome.addEventListener('keyup', ()=>{
    
    if(nome.value.length <= 3){
        LabelNome.setAttribute('style', 'color: red')
        LabelNome.innerHTML('Nome *Insira no minimo 3 caracteres ')
        nome.setAttribute('style', 'border-color:red; ')
        let validNome = false;
        
    }else{
        LabelNome.setAttribute('style', 'color: green;')
        LabelNome.innerHTML('Nome')
        nome.setAttribute('style', 'border-color:red; ')        
        let validNome = true;
    }
})

usuario.addEventListener('keyup' , () =>{
    
    if(usuario.value.length <= 4){
        LabelUsuario.setAttribute('style', 'color: red')
        LabelUsuario.innerHTML('Nome *Insira no minimo 5 caracteres ')
        LabelUsuario.setAttribute('style', 'border-color:red; ')
        let validUsuario = false;
        
    }else{
        LabelUsuario.setAttribute('style', 'color: green;')
        LabelUsuario.innerHTML('Usuário')
        usuario.setAttribute('style', 'border-color:red; ')        
        let validUsuario = true;
    }
})

telefone.addEventListener('keyup' , () =>{
    
    if(telefone.value.length == 11 ){
        LabelTelefone.setAttribute('style', 'color: red')
        LabelTelefone.innerHTML('Nome *Insira 11 números')
        LabelTelefone.setAttribute('style', 'border-color:red; ')
        let validTelefone = false;
        
    }else{
        LabelTelefone.setAttribute('style', 'color: green;')
        LabelTelefone.innerHTML('Telefone')
        telefone.setAttribute('style', 'border-color:red; ')        
        let validTelefone = true;
    }
})

senha.addEventListener('keyup' , () =>{
    
    if(senha.value.length <= 5 ){
        LabelSenha.setAttribute('style', 'color: red')
        LabelSenha.innerHTML('Nome *Insira 11 números')
        LabelSenha.setAttribute('style', 'border-color:red; ')
        let validSenha = false;
        
    }else{
        LabelSenha.setAttribute('style', 'color: green;')
        LabelSenha.innerHTML('Senha')
        senha.setAttribute('style', 'border-color:red; ')        
        let validSenha = true;
    }
})

Confirmarsenha.addEventListener('keyup' , () =>{
    
    if(senha.value == ConfirmarSenha.value ){
        LabelConfirmarSenha.setAttribute('style', 'color: red')
        LabelConfirmarSenha.innerHTML('Confirmar senha *As senhas não conferem')
        LabelConfirmarSenha.setAttribute('style', 'border-color:red; ')
        let validConfirmarSenha = false;
        
    }else{
        LabelConfirmarSenha.setAttribute('style', 'color: green;')
        LabelConfirmarSenha.innerHTML('Confirmar senha')
        Confirmarsenha.setAttribute('style', 'border-color:red; ')        
        let validConfirmarSenha = true;
    }
})



function cadastrar(){
    if(validNome && validUsuario && validTelefone && validSenha && validConfirmarSenha){
        alert('Aeeee')

    }else{
        alert('Preencha os campos!')
    }

}