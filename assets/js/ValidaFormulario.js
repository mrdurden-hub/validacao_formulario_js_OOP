class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.inputs = this.formulario.querySelectorAll('.input');
        this.init();
    }

    init(){
        this.formulario.addEventListener('submit', e => {
            this.handleForm(e);
        })
    }

    handleForm(e) {
        e.preventDefault();
        const camposValidos = this.validaCampos();
        if(camposValidos){
            alert('Formulário enviado.')
            this.formulario.submit();
        }
    }

    validaCampos(){
        let camposValidos = true;

        this.removeErros();

        for(let input of this.inputs){
            if(input.classList.contains('nome')){
                if(!this.validaNome(input)) camposValidos = false;
            }

            if(input.classList.contains('usuario')){
                if(!this.validaUsuario(input)) camposValidos = false;
            }

            if(input.classList.contains('senha')){
                if(!this.validaSenha(input)) camposValidos = false;
            }
        }

        return camposValidos;
    }

    validaNome(input){
        let nomeValido = true;
        const nome = input.value;

        if(nome.length < 3 || nome.length > 12){
            this.exibeErro(input, 'O campo nome precisa ter entre 3 e 12 caracteres.');
            nomeValido = false;
        }

        if(!nome.match(/[a-zA-Z]+$/)){
            this.exibeErro(input, 'O campo nome precisa ter apenas letras.');
            nomeValido = false;
        }

        return nomeValido;
    }

    validaUsuario(input){
        let usuarioValido = true;
        const usuario = input.value;

        if(usuario.length < 5 || usuario.length > 12){
            this.exibeErro(input, 'O campo usuario precisa ter entre 5 e 12 caracteres.');
            usuarioValido = false;
        }

        if(!usuario.match(/[a-zA-Z0-9]+$/)){
            this.exibeErro(input, 'O campo usuário precisa ter apenas letras e números.');
            usuarioValido = false;
        }

        return usuarioValido;
    }

    validaSenha(input){
        let senhaValida = true;
        const senha = input.value;

        if(senha.length < 5 || senha.length > 12){
            this.exibeErro(input, 'O campo senha precisa ter entre 5 e 12 caracteres.')
            senhaValida = false;
        }

        return senhaValida;
    }

    exibeErro(input, erroMsg){
        const div = document.createElement('div');
        div.innerHTML = erroMsg;
        div.classList.add('error_msg');
        input.insertAdjacentElement('afterend', div);
    }

    removeErros(){
        for(let erro of this.formulario.querySelectorAll('.error_msg')){
            erro.remove();
        }
    }
}

const valida = new ValidaFormulario();