class cardPokemon extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        const pokemon = document.createElement('li');
        const numero = document.createElement('span');
        const nome = document.createElement('span');
        const detalhe = document.createElement('div');
        const tipos = document.createElement('ol');
        const imagem = document.createElement('img');

        const tipoPrincipal = this.getAttribute('tipoPrincipal');
        const types = JSON.parse(this.getAttribute('tipos'));
        const numeroPokemon = this.getAttribute('numero');

        numero.textContent = `#${numeroPokemon}`;
        nome.textContent = this.getAttribute('nome');
        imagem.src = this.getAttribute('imagem');
        imagem.alt = this.getAttribute('alt');
        
        types.forEach( e => {
            const tipo = document.createElement('li');
            tipo.textContent = e.type.name;
            tipo.setAttribute('class', `type ${e.type.name}`);
            tipos.appendChild(tipo)
            tipos.setAttribute('class', `type${numeroPokemon}`);
        })

        detalhe.appendChild(tipos);
        detalhe.appendChild(imagem);
        pokemon.appendChild(numero);
        pokemon.appendChild(nome);
        pokemon.appendChild(detalhe);
        
        detalhe.setAttribute('class', 'detail');
        numero.setAttribute('class', 'number');
        nome.setAttribute('class', 'name');
        pokemon.setAttribute('class', `pokemon ${tipoPrincipal}`)

        return pokemon;
    }

    style(){
        const style = document.createElement('style');
        style.textContent = `
        .pokemon {
            display: flex;
            flex-direction: column;
            margin: .5rem;
            padding: 1rem;
            border-radius: 1rem;
        }
        
        .pokemon .number {
            color: #000;
            opacity: .3;
            text-align: right;
            font-size: .625rem;
        }
        
        .pokemon .name {
            color: #fff;
            margin-bottom: .25rem;
        }
        
        .pokemon .detail {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
        
        .pokemon .detail ol[class^='type'] {
            padding: 0;
            margin: 0;
            list-style: none;
        }
        
        .pokemon .detail ol[class^='type'] .type {
            color: #fff;
            padding: .25rem .5rem;
            margin: .25rem 0;
            font-size: .625rem;
            border-radius: 1rem;
        }
        .normal {
            background-color: #a6a877;
        }
        
        .grass {
            background-color: #77c850;
        }
        
        .fire {
            background-color: #ee7f30;
        }
        
        .water {
            background-color: #678fee;
        }
        
        .electric {
            background-color: #f7cf2e;
        }
        
        .ice {
            background-color: #98d5d7;
        }
        
        .ground {
            background-color: #dfbf69;
        }
        
        .flying {
            background-color: #a98ff0;
        }
        
        .poison {
            background-color: #a040a0;
        }
        
        .fighting {
            background-color: #bf3029;
        }
        
        .psychic {
            background-color: #f65687;
        }
        
        .dark {
            background-color: #725847;
        }
        
        .rock {
            background-color: #b8a137;
        }
        
        .bug {
            background-color: #a8b720;
        }
        
        .ghost {
            background-color: #6e5896;
        }
        
        .steel {
            background-color: #b9b7cf;
        }
        
        .dragon {
            background-color: #6f38f6;
        }
        
        .fairy {
            background-color: #f9aec7;
        }
        
        .pokemon .detail img {
            max-width: 100%;
            height: 70px;
        }
        `
        return style;
    }
}

customElements.define('card-pokemon',cardPokemon)