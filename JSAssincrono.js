var inputElement = document.querySelector("#cep");

//Funciton para pesquisar cep 
function searchUser(){
    axios.get(`https://viacep.com.br/ws/${inputElement.value}/json/`)
    .then(res =>{
        document.getElementById('rua').value = res.data.logradouro
        document.getElementById('bairro').value = res.data.bairro
        document.getElementById('cidade').value = res.data.localidade
        document.getElementById('estado').value = res.data.uf
    })
    .cath(() => {
        alert(`O cep ${inputElement.value} não existe`)
    })
};
