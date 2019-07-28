const baseUrl = "http://fipeapi.appspot.com/api/1/carros";

const listaModelos = document.querySelector("#lista-modelos");

fetch(baseUrl + "/veiculos/21.json")
  .then(data => data.json())
  .then(ArrayData => {
    ArrayData.map(data => {
      let li = document.createElement("li");
      li.innerHTML = data.name;
      listaModelos.appendChild(li);
      console.log(data);
    });
  });
