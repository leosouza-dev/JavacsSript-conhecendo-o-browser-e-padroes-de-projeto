class NegociacaoController{

    constructor(){

        // acessa o dom uma unica vez
        // antes estavamos acessando sempre que clicava no botão
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    
    adiciona(event){
        event.preventDefault();

        let negociacao = new Negociacao(
            this._inputData.value, // erro por vem como string, temos que converter para date
            this._inputQuantidade.value, 
            this._inputValor.value
        );

        console.log(negociacao);

        // add negociacao em uma lista
    }
}