// Highlighting of the nav items  in the sidebar on click
const activepage = window.location;
const  highlight = document.querySelectorAll('.sel');
console.log(highlight);
highlight.forEach(item=>{

        if (activepage.href.includes(item)){
            item.style.color='#ffffff';
        }else{
            item.style.color='white';
        }
        
});

// // javascript for the cart page
// const product = [
//     {
//         id: 0,
//         image: '/images/chick.jpeg',
//         title: 'Day One chicks',
//         price: 2500,
//     },
//     {
//         id: 1,
//         image: '/images/chick.jpeg',
//         title: 'eggs',
//         price: 1200,
//     },
//     {
//         id: 2,
//         image: '/images/chick.jpeg',
//         title: 'feeds',
//         price: 220000,
//     },
//     {
//         id: 3,
//         image: '/images/chick.jpeg',
//         title: 'cans',
//         price: 2200,
//     }
// ];
// const categories = [...new Set(product.map((item)=>
//     {return item}))]
//     let i=0;
// document.getElementById('root').innerHTML = categories.map((item)=>
// {
//     var {image, title, price} = item;
//     return(
//         `<div class='box'>
//             <div class='img-box'>
//                 <img class='images' src=${image}></img>
//             </div>
//         <div class='bottom'>
//         <p>${title}</p>
//         <h2 class="info1">$ ${price}.00</h2>`+
//         "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>"+
//         `</div>
//         </div>`
//     )
// }).join('')

// // ======JS for the delete section in the cart page =======
// var cart =[];
// function addtocart(a){
//     cart.push({...categories[a]});
//     displaycart();
// }

// function displaycart(a){
//     let j = 0;
//     if(cart.length==0){
//         document.getElementById('cartItem').innerHTML = "Your cart is empty";
//     }
//     else{
//         document.getElementById('cartItem').innerHTML = cart.map((items)=>
//         {
//             var {image, title, price} = items;
//             return(
//                 `<div class='cart-item'>
//                 <div class='row-img>
//                     <img class='rowimg' src=${image}>
//                 </div>
//                 <p style='font-size:12px;'>${title}</p>
//                 <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
//                 "<i class='fa-solid fa-trash' onclinc='delElement("+ (j++) +")'></i></div>"
//             );
//         }).join('');
//     }
// }