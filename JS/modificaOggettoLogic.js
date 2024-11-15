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

    const nomeProdottoInput = document.getElementById("inputTitle");
    const urlImageProdottoInput = document.getElementById("urlImage");
    const descrizioneProdottoInput =
      document.getElementById("inputDescrizione");
    const prezzoProdottoInput = document.getElementById("priceInput");
    const brandNameProdottoInput = document.getElementById("brandName");

    nomeProdottoInput.setAttribute("placeholder", product.name);
    urlImageProdottoInput.setAttribute("placeholder", product.imageUrl);
    descrizioneProdottoInput.setAttribute("placeholder", product.description);
    prezzoProdottoInput.setAttribute("placeholder", product.price);
    brandNameProdottoInput.setAttribute("placeholder", product.brand);

    const form = document.getElementById("myform");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (nomeProdottoInput.value === "") {
        nomeProdottoInput.value = product.name;
      }
      if (descrizioneProdottoInput.value === "") {
        descrizioneProdottoInput.value = product.description;
      }
      if (brandNameProdottoInput.value === "") {
        brandNameProdottoInput.value = product.brand;
      }
      if (urlImageProdottoInput.value === "") {
        urlImageProdottoInput.value = product.imageUrl;
      }
      if (prezzoProdottoInput.value === "") {
        prezzoProdottoInput.value = product.price;
      }

      const updatedData = {
        name: nomeProdottoInput.value,
        description: descrizioneProdottoInput.value,
        brand: brandNameProdottoInput.value,
        imageUrl: urlImageProdottoInput.value,
        price: prezzoProdottoInput.value,
      };

      fetch(
        `https://striveschool-api.herokuapp.com/api/product/${localStorage.getItem(
          "idProdotto"
        )}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGIzMzhhZDEyOTAwMTU4NzZiYzMiLCJpYXQiOjE3MzE2NjA1OTUsImV4cCI6MTczMjg3MDE5NX0.ccCT6cgYx8NXS5OCNd5ziRxjHXIpQOtrRawHAIDl_I0",
          },
          body: JSON.stringify(updatedData),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("errore nella richiesta: " + response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Dato aggiornato con successo: ", data);
          window.location.href = "/home.html";
        })
        .catch((error) => {
          console.error("errore nell'aggiornamento: ", error);
        });
    });
  });
