const url = "https://api2ca.onrender.com/api/products";
const prescriptionURL = "https://api2ca.onrender.com/api/prescription";
const postURL = "https://api2ca.onrender.com/api/products";

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

async function getPrescription() {
  try {
    const res = await fetch(prescriptionURL);
    const data = await res.json();
    //invoker displayProducts her for å få hentet data inn på linje 16

    displayPrescription(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
//invoker getProducts funksjonen så den blir "aktivert"
getPrescription();

//funksjon for å displaye ALLE produkter som blir hentet ut av getProducts
function displayProducts(data) {
  //henter ut table-1 div fra index.html
  const tableOne = document.querySelector(".table-1");
  //lager en UL så jeg kan appende en li element til ul (dette gjør at vi genererer ett li item for hver eneste item i APIet)
  const ul = document.createElement("ul");
  console.log(data);
  //looper igjennom hvert eneste element vi får ut i data
  data.map((product) => {
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

function createEvenetListensers() {
  const addNewProductDiv = document.querySelector(".add-new-product");
  const addNewProductBtnTableOne = document.querySelector(
    ".add-new-item-table-one"
  );
  const addNewProductBtnTableTwo = document.querySelector(
    ".add-new-item-table-two"
  );

  addNewProductBtnTableOne.addEventListener("click", async (e) => {
    e.preventDefault;

    const response = await addNewProduct();
    console.log(response);
  });

  addNewProductBtnTableTwo.addEventListener("click", async (e) => {
    e.preventDefault;

    const response = await addNewPrescription();
    console.log(response);
  });
}
createEvenetListensers();

async function addNewProduct() {
  const productName = document.querySelector("#product-name");
  const productDesc = document.querySelector("#product-desc");
  const productPrice = document.querySelector("#product-price");
  console.log("heihei");
  console.log(productName.value);

  console.log(productPrice.value);
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name: productName.value,
      description: productDesc.value,
      price: productPrice.value,
    }),
    headers: {
      "content-type": "application/json",
      mode: "no-cors",
    },
  });
  console.log(response);
  const data = await response.json();
  console.log(data, "this is data");
  return await response.data;
}

function displayPrescription(data) {
  //henter ut table-1 div fra index.html
  const tableTwo = document.querySelector(".table-2");
  //lager en UL så jeg kan appende en li element til ul (dette gjør at vi genererer ett li item for hver eneste item i APIet)
  const ul = document.createElement("ul");
  console.log(data);
  //looper igjennom hvert eneste element vi får ut i data
  data.map((prescription) => {
    //lager button og li element som skal bli appendet til ul
    const btn = document.createElement("button");
    const li = document.createElement("li");

    //legger inn det jeg vil vi skal se i li og linker btn til post-specific page
    li.textContent = `${prescription.name}: ${prescription.price} kr`;
    btn.innerHTML = `
    <a href="post-specific-page.html?id=${prescription.id}" class="btn">View item</a>
    `;
    // appender li og btn til ul
    ul.appendChild(li);
    ul.appendChild(btn);
  });
  //appender ul til table-1 diven i index.html
  tableTwo.appendChild(ul);
}

async function addNewPrescription() {
  const prescriptionName = document.querySelector("#prescription-name");
  const prescriptionDesc = document.querySelector("#prescription-desc");
  const prescriptionPrice = document.querySelector("#prescription-price");
  console.log(prescriptionName.value);

  const response = await fetch(prescriptionURL, {
    method: "POST",
    body: JSON.stringify({
      name: prescriptionName.value,
      description: prescriptionDesc.value,
      price: prescriptionPrice.value,
    }),
    headers: {
      "content-type": "application/json",
      mode: "no-cors",
    },
  });
  console.log(response);
  const data = await response.json();
  console.log(data, "this is data");
  return await response.data;
}
