const cart = () =>{
    const cart8tn = document.querySelector(".button-cart");
    const cart = document.getElementById("modal-cart");
    const closeBtn = cart.querySelector(".modal-close");
    cart8tn.addEventListener("click", function(){
        cart.style.display = 'flex';
    })
    closeBtn.addEventListener("click",() => {
        cart.style.display = "";
    })
}