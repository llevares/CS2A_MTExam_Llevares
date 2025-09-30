function initCartFeature() {
  const cartButtons= document.querySelectorAll(".add-to-cart");

  cartButtons.forEach(button => {
    button.addEventListener("click", () => {
      let itemName= button.getAttribute("data-product");

      alert(itemName + " successfully added to cart ");
      console.log("Item added:", itemName);
    });
  });
}

function initContactForm() {
  const contactForm= document.querySelector("#contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      alert("Salamat sa iyong message! ✅\nWe will reply soon.");
      
      contactForm.reset();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initCartFeature();
  initContactForm();
});