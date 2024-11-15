fetch(
  `https://striveschool-api.herokuapp.com/api/product?userId=${localStorage.getItem(
    "idUtente"
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
    console.log("Product", product);

    const riga = document.getElementById("riga-prodotti");

    const placeholder = document.getElementById("riga-placeholder");

    placeholder.classList.add("d-none");

    product.forEach((product) => {
      riga.innerHTML += `<div class="card m-2 p-0" style="width: 18rem;">
          <img src="${product.imageUrl}" class="card-img-top img-fluid" alt="${product.name}" style = "width: 350px; height: 200px">
          <div class="card-body d-flex flex-column justify-content-around">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Price: $${product.price}</p>
            <p class="card-text">Description: ${product.description}</p>
            <p class="card-text">Brand: ${product.brand}</p>
            <div>
              <a href="./modificaOggetto.html" class="btn btn-outline-warning" id="idDetails_${product._id}">Modify</a>
            </div>
          </div>
        </div>`;
    });

    for (let i = 0; i < buttonsProduct.length; i++) {
      buttonsProduct[i].addEventListener("click", function (event) {
        event.defaultPrevented;
        let posizioneTratto = event.target.id.indexOf("_");
        let idProdotto = event.target.id.slice(posizioneTratto + 1);
        localStorage.setItem("idProdotto", idProdotto);
        console.log(localStorage.getItem("idProdotto"));
      });
    }

    for (let i = 0; i < buttonsBuy.length; i++) {
      buttonsBuy[i].addEventListener("click", function (event) {
        event.defaultPrevented;
        let posizioneTratto = event.target.id.indexOf("_");
        let idProdotto = event.target.id.slice(posizioneTratto + 1);
        localStorage.setItem("idProdotto", idProdotto);
        console.log(localStorage.getItem("idProdotto"));
      });
    }

    console.log(product[0].userId);

    bottoneModifica.addEventListener("click", function (event) {
      event.defaultPrevented;
      let idUtente = product[0].userId;
      localStorage.setItem("idUtente", idUtente);
      console.log(localStorage.setItem("idUtente"));
    });
  })
  .catch((error) => {
    console.log(error);
  });

const buttonsProduct = document.getElementsByClassName("btn-outline-warning");

const buttonsBuy = document.getElementsByClassName("btn-info");

const bottoneModifica = document.getElementById("modificaProdotti");
