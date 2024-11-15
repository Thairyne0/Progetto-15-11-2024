document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("inputTitle");
  const urlImage = document.getElementById("urlImage");
  const descrizione = document.getElementById("inputDescrizione");
  const prezzo = document.getElementById("priceInput");
  const marca = document.getElementById("brandName");

  const data = {
    name: nome.value,
    description: descrizione.value,
    brand: marca.value,
    imageUrl: urlImage.value,
    price: Number(prezzo.value),
  };

  console.log(data);

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST", // Metodo di richiesta
    headers: {
      "Content-Type": "application/json", // Impostiamo il tipo di contenuto come JSON
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGIzMzhhZDEyOTAwMTU4NzZiYzMiLCJpYXQiOjE3MzE2NjA1OTUsImV4cCI6MTczMjg3MDE5NX0.ccCT6cgYx8NXS5OCNd5ziRxjHXIpQOtrRawHAIDl_I0",
    },
    body: JSON.stringify(data), // Convertiamo l'oggetto JavaScript in una stringa JSON
  })
    .then((response) => response.json()) // Risposta in formato JSON
    .then(
      (data) => console.log(data),
      (nome.value = ""),
      (marca.value = ""),
      (prezzo.value = ""),
      (descrizione.value = ""),
      (urlImage.value = "")
    )
    .catch((error) => console.error("Errore:", error));
});
