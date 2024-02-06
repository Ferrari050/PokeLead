const checkbox = document.getElementById('checkboxModoNoturno');
const elementToChange = document.getElementById('mainContent');
const body = document.querySelector('body');
const header = document.querySelector('header');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        elementToChange.classList.add('paginaModoNoturno');
        body.classList.add('bodyModoNoturno');
        header.classList.add('headerModoNoturno');
    } else {
        elementToChange.classList.remove('paginaModoNoturno');
        body.classList.remove('bodyModoNoturno');
        header.classList.remove('headerModoNoturno');
    }
});

/*<ul class="vantagem">
                    <div class="tituloUl">
                        <p>Vantagens :</p>
                    </div>
                    <button class="botaoTipo fogo">Fogo</button>
                    <button class="botaoTipo normal">Normal</button>
                    <button class="botaoTipo agua">Água</button>
                    <button class="botaoTipo grama">Grama</button>
                    <button class="botaoTipo voador">Voador</button>
                    <button class="botaoTipo lutador">Lutador</button>
                    <button class="botaoTipo veneno">Veneno</button>
                    <button class="botaoTipo eletrico">Elétrico</button>
                </ul>
                <ul class="desvantagem">
                    <div class="tituloUl">
                        <p>Desvantagens :</p>
                    </div>
                    <button class="botaoTipo terra">Terra</button>
                    <button class="botaoTipo pedra">Pedra</button>
                    <button class="botaoTipo psiquico">Psíquico</button>
                    <button class="botaoTipo gelo">Gelo</button>
                    <button class="botaoTipo inseto">Inseto</button>
                    <button class="botaoTipo fantasma">Fantasma</button>
                    <button class="botaoTipo ferro">Ferro</button>
                    <button class="botaoTipo dragao">Dragão</button>
                    <button class="botaoTipo sombrio">Sombrio</button>
                    <button class="botaoTipo fada">Fada</button>
                </ul>*/