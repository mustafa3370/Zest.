var ProductNameInput = document.getElementById("ProductName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDescription");
var UpdateBtn = document.getElementById("UpDateBtn");
var AddBtn = document.getElementById("AddBtn");
var indexUpdate = 0;
var productContainer = [];
if (localStorage.getItem("products") != null) {
  productContainer = JSON.parse(localStorage.getItem("products"));
  disPlayData();
}

function addProduct() {
  var product = {
    name: ProductNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescriptionInput.value,
  };
  productContainer.push(product);
  localStorage.setItem("products", JSON.stringify(productContainer));
  disPlayData();
  ClearForm();
}

function disPlayData() {
  var cartona = "";
  for (var i = 0; i < productContainer.length; i++) {
    cartona += `
        <tr>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td>
          <button class="btn btn-outline-warning btn-sm"onclick="SetData(${i})">Update</button>
          <button class="btn btn-outline-danger btn-sm" onclick="DeleteProduct(${i})">Delete</button>
        </td>
       </tr>
        `;
  }
  document.getElementById("tableData").innerHTML = cartona;
}
function ClearForm() {
  ProductNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescriptionInput.value = "";
}
function DeleteProduct(elementNumber) {
  productContainer.splice(elementNumber, 1);
  localStorage.setItem("products", JSON.stringify(productContainer));
  disPlayData();
}
function SetData(index) {
  indexUpdate = index;
  var curentProduct = productContainer[index];
  ProductNameInput.value = curentProduct.name;
  productPriceInput.value = curentProduct.price;
  productCategoryInput.value = curentProduct.category;
  productDescriptionInput.value = curentProduct.desc;

  UpdateBtn.classList.remove("d-none");
  AddBtn.classList.add("d-none");
}
function UpDateProduct() {
  var product = {
    name: ProductNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescriptionInput.value,
  };
  productContainer.splice(indexUpdate, 1, product);
  localStorage.setItem("products", JSON.stringify(productContainer));
  disPlayData();
  ClearForm();
  UpdateBtn.classList.add("d-none");
  AddBtn.classList.remove("d-none");
}
