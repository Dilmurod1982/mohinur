import { getData } from "./request.js";

const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

const productId = getQueryParam("id");
if (productId) {
  getData(`https://dummyjson.com/products/${productId}`)
    .then((product) => {
      if (product) {
        updateProductDetailsUI(product);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const updateProductDetailsUI = (product) => {
  const sectionTemplate = document.getElementById("section-teamplate");
  const sectionContent = sectionTemplate.content.cloneNode(true);

  const productImg = sectionContent.querySelector(".section-content-img");
  const productTitle = sectionContent.querySelector(
    ".section-content-right-bottom-title"
  );
  const oldPrice = sectionContent.querySelector(
    ".section-content-right-bottom-oldprice"
  );
  const newPrice = sectionContent.querySelector(
    ".section-content-right-bottom-newprice"
  );
  const discount = sectionContent.querySelector(
    ".section-content-right-top-discount"
  );

  productImg.src = product.thumbnail;
  productTitle.textContent = product.title;
  oldPrice.textContent = `Rp ${product.price}`;
  newPrice.textContent = `Rp ${
    (product.price / 100) * (100 - product.discountPercentage)
  }`;
  discount.textContent = `Disc${Math.round(product.discountPercentage)}%`;

  document.getElementById("section").appendChild(sectionContent);
};
