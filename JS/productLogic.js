fetch(
  `https://striveschool-api.herokuapp.com/api/product/${localStorage.getItem(
    "idProdotto"
  )}`,
  {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGIzMzhhZDEyOTAwMTU4NzZiYzMiLCJpYXQiOjE3MzE2NjA1OTUsImV4cCI6MTczMjg3MDE5NX0.ccCT6cgYx8NXS5OCNd5ziRxjHXIpQOtrRawHAIDl_I0",
    },
  }
)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((product) => {
    console.log("Prodotto", product);

    const divImmagine = document.getElementById("divImg");

    divImmagine.innerHTML = `<img src="${product.imageUrl}" class="card-img-top img-fluid" alt="${product.name}" style = "width: 700px;">`;

    const divInformazioni = document.getElementById("divContenuto");

    divInformazioni.innerHTML = `<h2 class="h2 d-flex justify-content-center mt-2">Nome Prodotto: <strong>${product.name}</strong></h2>
        <p class="card-text d-flex justify-content-center">${product.description}</p>
        <div class="row row-cols-2 justify-content-center">
        <p class="card-text d-flex justify-content-end fs-3">Brand: ${product.brand}</p>
        <p class="card-text d-flex justify-content-start fs-3">Price: <strong>${product.price}</strong>$</p>
        <a href="#" class="btn btn-warning fs-2 fw-bolder mt-3" id="idBuy_${product._id}">Buy</a>
        </div>
        

    `;

    for (let i = 0; i < buttonsBuy.length; i++) {
      buttonsBuy[i].addEventListener("click", function (event) {
        event.defaultPrevented;
        let posizioneTratto = event.target.id.indexOf("_");
        let idProdotto = event.target.id.slice(posizioneTratto + 1);
        localStorage.setItem("idProdotto", idProdotto);
        console.log(localStorage.getItem("idProdotto"));
      });
    }
  });

const buttonsBuy = document.getElementsByClassName("btn-info");
