const url = "http://localhost:3001/api/products";

//fetch av data fra APIet for å få ut alle produkter
async function getProducts() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    //invoker displayProducts her for å få hentet data inn på linje 16
    displayProducts(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
//invoker getProducts funksjonen så den blir "aktivert"
getProducts();

//funksjon for å displaye ALLE produkter som blir hentet ut av getProducts
function displayProducts(data) {
  //henter ut table-1 div fra index.html
  const tableOne = document.querySelector(".table-1");
  //lager en UL så jeg kan appende en li element til ul (dette gjør at vi genererer ett li item for hver eneste item i APIet)
  const ul = document.createElement("ul");
  console.log(data);
  //looper igjennom hvert eneste element vi får ut i data
  data.forEach((product) => {
    //lager button og li element som skal bli appendet til ul
    const btn = document.createElement("button");
    const li = document.createElement("li");

    //legger inn det jeg vil vi skal se i li og linker btn til post-specific page
    li.textContent = `${product.name}: ${product.price} kr`;
    btn.innerHTML = `
    <a href="post-specific-page.html?id=${product.id}" class="btn">View item</a>
    `;
    // appender li og btn til ul
    ul.appendChild(li);
    ul.appendChild(btn);
  });
  //appender ul til table-1 diven i index.html
  tableOne.appendChild(ul);
}

displayProducts();
