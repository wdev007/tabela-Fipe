const baseUrl = "http://fipeapi.appspot.com/api/1/carros";

const selectMarca = document.querySelector("#selectMarca");

const listaModelos = document.querySelector("#lista-modelos");

const selectModelo = document.querySelector("#selectModelo");

fetch("http://fipeapi.appspot.com/api/1/carros/marcas.json")
  .then(data => data.json())
  .then(ArrayData => {
    ArrayData.map(data => {
      let option = document.createElement("option");
      option.value = data.id;
      option.innerHTML = data.name;
      selectMarca.appendChild(option);
      console.log(data);
    });
  });

selectMarca.addEventListener("change", event => {
  console.log(selectMarca.value);
  fetch(`${baseUrl}/veiculos/${selectMarca.value}.json`)
    .then(data => data.json())
    .then(ArrayData => {
      selectModelo.innerText = "";
      ArrayData.map(data => {
        let option = document.createElement("option");
        option.innerHTML = data.name;
        selectModelo.appendChild(option);
        console.log(selectModelo);
      });
    });
});
