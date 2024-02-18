//url params for post specific page
function getSpecificProductId() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  return params.get("id");
}

const id = getSpecificProductId();

//fetch men med id så vi får den spesifiserte itemen vi ser etter
async function getSpecificProduct(id) {
  const url = `http://localhost:3001/api/products?id=${id}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    //bruker find() for å itterere over arrayet for å returnere det første elementet i arrayet som passer id'en vi ser etter
    const specificProduct = data.find((product) => product.id === parseInt(id));
    if (specificProduct) {
      displaySingleProduct(specificProduct);
    } else {
      console.error("product not found");
    }
  } catch (error) {
    console.error(error);
  }
}
//invoker funksjonen så den kjører
getSpecificProduct(id);

//funksjon for å displaye dataen vi får fra id specific data
function displaySingleProduct(data) {
  console.log(data);
  const specificProduct = document.querySelector(".specific-product");
  specificProduct.innerHTML = `
    <div>
      <h1>Id: ${data.id}</h1>
      <h1>Name: ${data.name}. This item is a: ${data.description}</h1>
      <h1>price: ${data.price} kr</h1>

    </div>
  `;
}
