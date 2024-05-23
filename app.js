// importing constants from data.js
import { cartItems, cartInfoImgSrc, deleteBtnCart, variables } from "./data.js";

// Destructuring the properties
const { title, price } = cartItems;

// Cart items count
let {
  cart,
  currentNoItems,
  formatedPrice,
  cartInfo,
  cartBox,
  addCartBtn,
  addToCartBtn,
  decBtn,
  incBtn,
  noOfItems,
  cartImgNo,
  thumbnailImages,
  popupThumbnailImg,
  sliderImgContainer,
  sliderImages,
  nextImgBtn,
  prevImgBtn,
  imageSlideItem,
  mobileMenu,
  openMenuBtn,
  closeMenuBtn,
  closeBtn,
  imgSlide1,
  imgSlide2,
  imgSlide3,
  imgSlide4,
  currentImgIndex
} = variables;

// menu bar

openMenuBtn.addEventListener('click', handleMenu)

function handleMenu() {
  mobileMenu.classList.add('active')
}

closeMenuBtn.addEventListener('click', closeMenu)

function closeMenu() {
  mobileMenu.classList.remove('active')

}

incBtn.addEventListener("click", (e) => {
  currentNoItems++;
  cartImgNo.style.display = "block";
  cartImgNo.innerHTML = currentNoItems;
  noOfItems.innerHTML = currentNoItems;
  cartInfoData();
});

decBtn.addEventListener("click", (e) => {
  if (currentNoItems > 0) {
    currentNoItems--;
    cartNoItems();
    cartInfoData();
  }
  if (currentNoItems === 0) {
    removeCart();
  }
});

addToCartBtn.addEventListener("click", addToCart);

function addToCart() {
  currentNoItems++;
  cartImgNo.style.display = "block";
  cartNoItems();
  // cart.push(title, formatedPrice) // this is for multiple product addition
  cartInfoData();
}

// deep dom (Element creation)
function cartInfoData() {
  cartInfo.innerHTML = "";
  if (currentNoItems === 0) {
    removeCart();
    return;
  }
  // ----Containers---- //
  //   heading, image , and price container
  let cartInfoItems = document.createElement("div");
  cartInfoItems.classList.add("cart__info-item");

  //   checkout button container
  let cartInfoBtnContainer = document.createElement("div");
  cartInfoBtnContainer.classList.add("cart__info-btn");

  //   heading, and price container
  let cartH3PriceWrapper = document.createElement("div");
  cartH3PriceWrapper.classList.add("cart_info-item-wrapper");

  // ----cart items---- //
  //img
  let cartInfoImg = document.createElement("img");
  cartInfoImg.src = cartInfoImgSrc;
  cartInfoImg.classList.add("cart__img");

  //heading
  let cartInfoH3 = document.createElement("h3");
  cartInfoH3.innerHTML = title;

  let deleteBtn = document.createElement("img");
  deleteBtn.src = deleteBtnCart;
  deleteBtn.classList.add("delete_btn");

  deleteBtn.addEventListener("click", removeCart);
  //price
  let cartInfoP = document.createElement("p");
  //price logic
  cartInfoP.innerHTML = `$${formatedPrice} x ${currentNoItems} <b>${(
    formatedPrice * currentNoItems
  ).toFixed(2)}</b> `;

  let checkoutBtn = document.createElement("button");
  checkoutBtn.classList.add("checkout_btn");

  checkoutBtn.innerHTML = "Checkout";

  //   Appending the childeren
  cartH3PriceWrapper.appendChild(cartInfoH3);
  cartH3PriceWrapper.appendChild(cartInfoP);
  cartInfoBtnContainer.appendChild(checkoutBtn);
  cartInfoItems.appendChild(cartInfoImg);
  cartInfoItems.appendChild(cartH3PriceWrapper);
  cartInfoItems.appendChild(deleteBtn);

  cartInfo.appendChild(cartInfoItems);
  cartInfo.appendChild(cartInfoBtnContainer);
}

// Button to show the cart box
addCartBtn.addEventListener("click", showCart);

// Function to show cart Box
function showCart() {
  cartBox.classList.toggle("active");
}

// Function to remove the all items from the cart
function removeCart() {
  cartImgNo.style.display = "none";
  currentNoItems = 0;
  noOfItems.innerHTML = 0;
  cartInfo.innerHTML = "Your cart is empty";
  return;
}

// Function to update cart items count
function cartNoItems() {
  noOfItems.innerHTML = currentNoItems;
  cartImgNo.innerHTML = currentNoItems;
}


// Images Functionality logic

let imagesSlider = [imgSlide1, imgSlide2, imgSlide3, imgSlide4]


function thumbnailImgFun(thumbImg) {
  thumbImg.forEach((img, index) => {
    img.addEventListener("click", (e) => {
      // Remove active class from all images
      thumbImg.forEach((image) => image.classList.remove("active"));
      currentImgIndex = index
      // Add active class to the clicked image
      img.classList.add("active");
  
      sliderImgContainer.style.display = "flex"
      createImg(imagesSlider[currentImgIndex])
      
      popupThumbnailImg.forEach((popupImg, popupIndex) => {
        if (popupIndex === currentImgIndex) {
          popupImg.classList.add("active");
        } else {
          popupImg.classList.remove("active");
        }
      });
    });
  });
}

// For Main images
thumbnailImgFun(thumbnailImages)

// For Pop Up images
thumbnailImgFun(popupThumbnailImg)


function createImg() {
  imageSlideItem.src = imagesSlider[currentImgIndex];
}

console.log(imageSlideItem)
nextImgBtn.addEventListener('click', e => {
  e.preventDefault()
  currentImgIndex++;
  if (currentImgIndex >= imagesSlider.length) {
     currentImgIndex = 0;
  }
  createImg(imagesSlider[currentImgIndex])
  thumbnailIndexChange(thumbnailImages)
  thumbnailIndexChange(popupThumbnailImg)
})

prevImgBtn.addEventListener('click', e => {
  e.preventDefault()
  currentImgIndex--;
  if (currentImgIndex < 0) {
    currentImgIndex = imagesSlider.length - 1;
  }
  createImg(imagesSlider[currentImgIndex])
  thumbnailIndexChange(thumbnailImages)
  thumbnailIndexChange(popupThumbnailImg)
})


function thumbnailIndexChange(thumbImg) {
  thumbImg.forEach((img) => {
    img.classList.remove('active')
  })
  thumbImg[currentImgIndex].classList.add('active')
}


closeBtn.addEventListener('click', closePopUp)

function closePopUp() {
  sliderImgContainer.style.display = "none"
  if (currentImgIndex !== 0) {
    thumbnailImages[currentImgIndex].classList.remove('active')
  } 

    currentImgIndex = 0;
    thumbnailImages[currentImgIndex].classList.add('active')

}

if (window.innerWidth <= 700) {
  sliderImgContainer.style.display = "flex";
  createImg(imagesSlider[currentImgIndex]);
}

createImg(imagesSlider[currentImgIndex])