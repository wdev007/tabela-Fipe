const baseUrl = "http://fipeapi.appspot.com/api/1/carros";
const selectMarca = document.querySelector("#selectMarca");
const listaModelos = document.querySelector("#lista-modelos");
const selectModelo = document.querySelector("#selectModelo");
const selectAno = document.querySelector("#selectAno");

let marca, modelo;

fetch(`${baseUrl}/marcas.json`)
  .then(data => data.json())
  .then(ArrayData => {
    ArrayData.map(data => {
      let option = document.createElement("option");
      option.value = data.id;
      option.innerHTML = data.name;
      selectMarca.appendChild(option);
    });
  });

selectMarca.addEventListener("change", event => {
  marca = selectMarca.value;
  fetch(`${baseUrl}/veiculos/${marca}.json`)
    .then(data => data.json())
    .then(ArrayData => {
      selectModelo.innerText = "";
      ArrayData.map(data => {
        let option = document.createElement("option");
        option.value = data.id;
        option.innerHTML = data.name;
        selectModelo.appendChild(option);
      });
    });
});

selectModelo.addEventListener("change", () => {
  modelo = selectModelo.value;
  fetch(`${baseUrl}/veiculo/${marca}/${modelo}.json`)
    .then(data => data.json())
    .then(ArrayData => {
      selectAno.innerText = "";
      ArrayData.map(data => {
        let option = document.createElement("option");
        option.innerHTML = data.fipe_codigo;
        selectAno.appendChild(option);
      });
    });
});

selectAno.addEventListener("change", () => {
  fetch(`${baseUrl}/veiculo/${selectMarca.value}/4828/2013-1.json`);
});
