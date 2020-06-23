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
        // spread operator - desmembra o array - com isso teremos 3 parametros para obj date
        // nesse caso, precisamos decrementar o mes de 1
        // Para resolver, uso o map - ele percorre meu array e no mes (indice = 1) eu reduzo em 1
        // apos isso, o spread acontece, desemenbrando com o mes convertido
        let data = new Date(...this._inputData.value.split('-').map(function(item, indice) {
            if(indice == 1){
                return item - 1;
            }
            return item;
        }));

        let negociacao = new Negociacao(
            data, // passando a data convertida
            this._inputQuantidade.value, 
            this._inputValor.value
        );

        console.log(negociacao);

        // todo - add negociacao em uma lista
    }
}