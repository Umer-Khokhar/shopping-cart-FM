export const cartItems = {
  title: "Fall Limited Edition Sneakers",
  price: 125.0,
};

export const cartInfoImgSrc = "./images/image-product-1-thumbnail.jpg";
export const deleteBtnCart = "./images/icon-delete.svg";

export const variables = {
  currentNoItems: 0,
  cart: [],
  formatedPrice: cartItems.price.toFixed(2),
  incBtn: document.querySelector(".inc"),
  decBtn: document.querySelector(".dec"),
  noOfItems: document.querySelector(".no"),
  addToCartBtn: document.getElementById("addToCartBtn"),
  addCartBtn: document.getElementById("addCart"),
  cartBox: document.querySelector(".cart__box"),
  cartInfo: document.querySelector(".cart__info-container"),
  cartImgNo: document.querySelector(".cart__image span"),

  thumbnailImages: document.querySelectorAll(".thumbnails__images img"),
  popupThumbnailImg: document.querySelectorAll(".thumbnail_img img"),
  sliderImgContainer: document.querySelector(".slider__image"),
  sliderImages: document.querySelector(".slider__image .big_slide_img"),
  imageSlideItem: document.querySelector('.slider__image-item'),
  nextImgBtn: document.querySelector(".right-img"),
  prevImgBtn: document.querySelector(".left-img"),
  closeBtn: document.querySelector(".close__img img"),
  openMenuBtn: document.querySelector('.menu-icon'),
  mobileMenu: document.querySelector('.mobile-menu'),
  closeMenuBtn: document.querySelector('.close-menu'),

  imgSlide1: "./images/image-product-1.jpg",
  imgSlide2: "./images/image-product-2.jpg",
  imgSlide3: "./images/image-product-3.jpg",
  imgSlide4: "./images/image-product-4.jpg",

  currentImgIndex: 0,
};
