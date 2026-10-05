function buscaEndereco(valor) {
    // Remove tudo que não for número (ex.: "01001-000" -> "01001000")
    const cep = valor.replace(/\D/g, "");

    if (validaCep(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(resposta => resposta.json())
            .then(json => {
                if (json.erro) {
                    alert("cep invalido");
                    return;
                }

                let logradouro = document.querySelector("#logradouro")
                let bairro = document.querySelector("#bairro")
                let localidade = document.querySelector("#localidade")
                let estado = document.querySelector("#estado")

                logradouro.value = json.logradouro
                bairro.value = json.bairro
                localidade.value = json.localidade
                estado.value = json.estado

                console.log(json)
            })

            .catch(error => alert("cep invalido"));
    }
}

/**
 * Valida se o CEP possui exatamente 8 dígitos numéricos.
 * @param {String} cep
 * @return {Boolean}
 */
function validaCep(cep){
    let regex = /^\d{8}$/;
    return regex.test(cep)
     
}




