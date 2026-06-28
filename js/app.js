const carrosIniciais = [
    { id: 1, nome: "Ferrari SF90 Stradale", marca: "Ferrari", ano: 2024, potencia: "1000 cv", velocidade: "340 km/h", motor: "V8 Biturbo Híbrido", descricao: "Um dos supercarros mais avançados da Ferrari, combinando desempenho extremo e tecnologia híbrida.", destaque: true, imagemPrincipal: "img/ferrari-sf90.jpg", fotos: [ { titulo: "Vista frontal", imagem: "img/ferrari-frente.jpg" }, { titulo: "Interior", imagem: "img/ferrari-interior.jpg" }, { titulo: "Motor", imagem: "img/ferrari-motor.jpg" } ] },
    { id: 2, nome: "Lamborghini Aventador", marca: "Lamborghini", ano: 2023, potencia: "770 cv", velocidade: "350 km/h", motor: "V12 Aspirado", descricao: "Ícone da Lamborghini conhecido pelo design agressivo e desempenho impressionante.", destaque: true, imagemPrincipal: "img/lamborghini-aventador.jpg", fotos: [ { titulo: "Vista frontal", imagem: "img/lamborghini-frente.jpg" }, { titulo: "Interior", imagem: "img/lamborghini-interior.jpg" }, { titulo: "Motor", imagem: "img/lamborghini-motor.jpg" } ] },
    { id: 3, nome: "Porsche 911 Turbo S", marca: "Porsche", ano: 2024, potencia: "650 cv", velocidade: "330 km/h", motor: "Boxer 6 Cilindros Biturbo", descricao: "Combina luxo, tecnologia e desempenho em um dos esportivos mais respeitados do mundo.", destaque: false, imagemPrincipal: "img/porsche-911.jpg", fotos: [ { titulo: "Vista frontal", imagem: "img/Porsche-frente.jpeg" }, { titulo: "Interior", imagem: "img/Porsche-interior.jpg" }, { titulo: "Motor", imagem: "img/Porsche-motor.jpg" } ] },
    { id: 4, nome: "McLaren 720S", marca: "McLaren", ano: 2024, potencia: "720 cv", velocidade: "341 km/h", motor: "V8 Biturbo", descricao: "Supercarro britânico extremamente leve e focado em desempenho nas pistas.", destaque: true, imagemPrincipal: "img/mclaren-720s.jpg", fotos: [ { titulo: "Vista frontal", imagem: "img/McLaren-frente.jpg" }, { titulo: "Interior", imagem: "img/McLaren-interior.jpg" }, { titulo: "Motor", imagem: "img/McLaren-motor.jpg" } ] },
    { id: 5, nome: "Bugatti Chiron", marca: "Bugatti", ano: 2024, potencia: "1500 cv", velocidade: "420 km/h", motor: "W16 Quad-Turbo", descricao: "Um dos carros mais rápidos e exclusivos já produzidos na história.", destaque: true, imagemPrincipal: "img/bugatti-chiron.jpeg", fotos: [ { titulo: "Vista frontal", imagem: "img/bugatti-frente.jpg" }, { titulo: "Interior", imagem: "img/bugatti-interior.jpg" }, { titulo: "Motor", imagem: "img/bugatti-motor.jpg" } ] },
    { id: 6, nome: "Nissan GT-R", marca: "Nissan", ano: 2024, potencia: "565 cv", velocidade: "315 km/h", motor: "V6 Biturbo", descricao: "Conhecido como Godzilla, é famoso pela tecnologia e desempenho impressionante.", destaque: false, imagemPrincipal: "img/nissan-gtr.jpg", fotos: [ { titulo: "Vista frontal", imagem: "img/nissan-frente.jpg" }, { titulo: "Interior", imagem: "img/nissan-interior.jpg" }, { titulo: "Motor", imagem: "img/nissan-motor.jpg" } ] },
    { id: 7, nome: "Chevrolet Corvette C8", marca: "Chevrolet", ano: 2024, potencia: "495 cv", velocidade: "312 km/h", motor: "V8 Aspirado", descricao: "Primeiro Corvette com motor central, trazendo desempenho de supercarro.", destaque: false, imagemPrincipal: "img/corvette-c8.jpg", fotos: [ { titulo: "Vista frontal", imagem: "img/chevrolet-frente.jpg" }, { titulo: "Interior", imagem: "img/chevrolet-interior.jpg" }, { titulo: "Motor", imagem: "img/chevrolet-motor.jpg" } ] },
    { id: 8, nome: "Audi R8", marca: "Audi", ano: 2024, potencia: "620 cv", velocidade: "331 km/h", motor: "V10 Aspirado", descricao: "Esportivo de luxo que compartilha tecnologia com a Lamborghini.", destaque: false, imagemPrincipal: "img/audi-r8.jpg", fotos: [ { titulo: "Vista frontal", imagem: "img/audi-frontal.jpg" }, { titulo: "Interior", imagem: "img/audi-interior.jpg" }, { titulo: "Motor", imagem: "img/audi-motor.jpg" } ] }
];


const usuariosIniciais = [
    {
        "id": "187cb7e5-e097-4224-8bc7-b610c855e2b1",
        "login": "admin",
        "senha": "123",
        "nome": "Administrador do Sistema",
        "email": "admin@abc.com",
        "admin": true
    },
    {
        "id": "ec37c83d-4b7f-458d-9e10-3fda7d37cd3e",
        "login": "user",
        "senha": "123",
        "nome": "Usuario Comum",
        "email": "user@abc.com",
        "admin": false
    }
];


function inicializarLocalStorage() {
    if (!localStorage.getItem('carros')) {
        localStorage.setItem('carros', JSON.stringify(carrosIniciais));
    }
    if (!localStorage.getItem('usuarios')) {
        localStorage.setItem('usuarios', JSON.stringify(usuariosIniciais));
    }
}

inicializarLocalStorage();

const carros = JSON.parse(localStorage.getItem('carros'));

function montarSliderDestaques() {
  const areaDestaques = document.getElementById("destaques");

  if (areaDestaques) {
    const carrosDestaque = carros.filter(function(carro) {
      return carro.destaque === true;
    });

    areaDestaques.innerHTML = `
      <h2 class="mb-4">Itens em Destaque</h2>

      <div id="carouselDestaques" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-inner"></div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselDestaques" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselDestaques" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>

      </div>
    `;

    const carouselInner = document.querySelector(".carousel-inner");

    carrosDestaque.forEach(function(carro, indice) {
      carouselInner.innerHTML += `
        <div class="carousel-item ${indice === 0 ? "active" : ""}">

          <a href="detalhes.html?id=${carro.id}">
            <img src="${carro.imagemPrincipal}" class="d-block w-100 imagem-slider" alt="${carro.nome}">
          </a>

          <div class="carousel-caption d-none d-md-block">
            <h5>${carro.nome}</h5>
            <p>${carro.descricao}</p>
          </div>

        </div>
      `;
    });
  }
}

function montarCardsCarros(lista) {

      if (!lista) {
    lista = carros;
  }
  const listaPosts = document.getElementById("lista-posts");

  if (listaPosts) {
    listaPosts.innerHTML = "";

    lista.forEach(function(carro) {
      listaPosts.innerHTML += `
        <article class="col-12 col-md-6">

          <div class="card h-100">

            <a href="detalhes.html?id=${carro.id}">
              <img src="${carro.imagemPrincipal}" class="card-img-top" alt="${carro.nome}">
            </a>

            <div class="card-body">

              <h2 class="card-title">
                <a href="detalhes.html?id=${carro.id}" class="text-decoration-none text-dark">
                  ${carro.nome}
                </a>
              </h2>

              <p class="meta">${carro.marca}</p>

              <p class="card-text">${carro.descricao}</p>

              <a href="detalhes.html?id=${carro.id}" class="btn btn-danger">
                Ver detalhes
              </a>

            </div>

          </div>

        </article>
      `;
    });
  }
}

const campoPesquisa = document.getElementById("campo-pesquisa");

if (campoPesquisa) {
  campoPesquisa.addEventListener("input", function() {

    const textoPesquisa = campoPesquisa.value.toLowerCase();

    const resultadoPesquisa = carros.filter(function(carro) {
      return (
        carro.nome.toLowerCase().includes(textoPesquisa) ||
        carro.marca.toLowerCase().includes(textoPesquisa) ||
        carro.motor.toLowerCase().includes(textoPesquisa) ||
        String(carro.ano).includes(textoPesquisa)
      );
    });

    montarCardsCarros(resultadoPesquisa);

  });
}

const marcasFiltro = document.querySelectorAll(".marca-filtro");

marcasFiltro.forEach(function(marcaItem) {

  marcaItem.addEventListener("click", function() {

    const marcaClicada = marcaItem.dataset.marca;

    if (marcaClicada === "Todos") {

      montarCardsCarros(carros);

      return;
    }

    const carrosFiltrados = carros.filter(function(carro) {
      return carro.marca === marcaClicada;
    });

    montarCardsCarros(carrosFiltrados);

  });

});

function mostrarDetalhes() {
  const detalhesPost = document.getElementById("detalhes-post");

  if (detalhesPost) {
    const parametros = new URLSearchParams(window.location.search);
    const id = Number(parametros.get("id"));

    const carro = carros.find(function(item) {
      return item.id === id;
    });

    if (carro) {
      detalhesPost.innerHTML = `
        <div class="card p-4">

          <img src="${carro.imagemPrincipal}" class="img-fluid rounded mb-4 img-detalhe" alt="${carro.nome}">

          <h1>${carro.nome}</h1>

          <p>${carro.descricao}</p>

          <ul class="list-group mt-3">
            <li class="list-group-item"><strong>Marca:</strong> ${carro.marca}</li>
            <li class="list-group-item"><strong>Ano:</strong> ${carro.ano}</li>
            <li class="list-group-item"><strong>Potência:</strong> ${carro.potencia}</li>
            <li class="list-group-item"><strong>Velocidade máxima:</strong> ${carro.velocidade}</li>
            <li class="list-group-item"><strong>Motor:</strong> ${carro.motor}</li>
          </ul>

          <h2 class="mt-4">Galeria de Fotos</h2>

          <div class="row mt-3">

            ${carro.fotos.map(function(foto) {
              return `
                <div class="col-12 col-md-4 mb-3">
                  <div class="card h-100">
                    <img src="${foto.imagem}" class="card-img-top" alt="${foto.titulo}">
                    <div class="card-body">
                      <h5 class="card-title">${foto.titulo}</h5>
                    </div>
                  </div>
                </div>
              `;
            }).join("")}

          </div>

          <a href="index.html" class="btn btn-danger mt-4">
            Voltar
          </a>

        </div>
      `;
    }
  }
}

montarSliderDestaques();
montarCardsCarros();
mostrarDetalhes();