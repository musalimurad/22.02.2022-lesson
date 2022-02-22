

// var btnAcc = document.querySelectorAll(".all #acc-btn");
// var txt = document.querySelectorAll(".all #acc-txt");



// for (let i = 0; i < btnAcc.length; i++) {
    
//     btnAcc[i].onclick = function(){
    
//         for (let j = 0; j < txt.length; j++) {
//            txt[j].classList.remove("active")
            
//         }
//        this.nextElementSibling.classList.add("acmaq")
//     }
    
// }

// ===========================================

// let tabBtn = document.querySelectorAll(".buttons #tab-btn");
// let tabP = document.querySelectorAll(".tab-content #tab-txt")


// for (let i = 0; i < tabBtn.length; i++) {
//     tabBtn[i].onclick = function(){
//         for (let x = 0; x < tabP.length; x++) {
//            tabP[x].classList.remove("tab-active")
//             tabBtn[x].classList.remove("btn-active")
//         }
//       let getAttr =  this.getAttribute("data-btn");
//       this.classList.add("btn-active")
//       tabP[getAttr].classList.add("tab-active")
//     }
// }


//  tab end =========================================


let getImg = document.querySelectorAll(".box img");
let setImg = document.querySelector(".box-content img");
let setP = document.querySelector(" .product-content p")
var products = [
   {
        productName: "airbag",
        price: "30azn"
    },
    
    {
        productName: "adidas",
        price: "40azn"
    },
    
    {
        productName: "nike",
        price: "50azn"
    }
]




for (let i = 0; i < getImg.length; i++) {
    
    getImg[i].onclick = function(){
      let getSrc = this.getAttribute("src");
      setImg.setAttribute("src", getSrc);
      setP.innerText = `productName: ${products[i].productName}, productPrice: ${products[i].price}`
    }
}







