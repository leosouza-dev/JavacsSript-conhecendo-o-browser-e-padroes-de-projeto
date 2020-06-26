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

        let helper = new DateHelper();
    
        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        // testando
        console.log(negociacao);
        console.log(helper.dataParaTexto(negociacao.data));
        
        // todo - add negociacao em uma lista
    }
}