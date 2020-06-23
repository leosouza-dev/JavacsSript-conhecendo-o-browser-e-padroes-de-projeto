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

        // converter a string em um array e passar para variavel data
        let data = new Date(this._inputData.value.split('-'))
        // let data = new Date(this._inputData.value.replace(/-/g, ',')); opcao usando regex

        let negociacao = new Negociacao(
            data, // passando a data convertida
            this._inputQuantidade.value, 
            this._inputValor.value
        );

        console.log(negociacao);

        // todo - add negociacao em uma lista
    }
}