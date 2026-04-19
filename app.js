const { findedProduct, successContainer } = require("./details");

let products = [{
        productName: "Wireless Headphones",
        description: "High quality sound with deep bass",
        longDescription: "Experience immersive audio with these wireless over-ear headphones designed for comfort and clarity. Featuring advanced sound drivers, they deliver rich bass and balanced tones suitable for music, movies, and gaming. The ergonomic design ensures long hours of comfortable use, while the durable build guarantees longevity. Ideal for daily use, travel, and professional environments.",
        category: "Headphone",
        price: 100,
        rating: 4.4,
        review: "[1.2k Reviews]",
        image: "assets/Headphone/head-2.jpg",
        img1 : "https://images.unsplash.com/photo-1722665600826-f054f8fe6f44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRwaG9uZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        img2 : "https://plus.unsplash.com/premium_photo-1679865289918-b21aae5a9559?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        img3 : "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        img4 : "https://plus.unsplash.com/premium_photo-1678066730788-fdc6d64b4679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRwaG9uZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        link: "./Productdetailspage.html",
        id: 1
    },

    {
        productName: "Bluetooth Earbuds",
        description: "Compact design with clear audio output",
        longDescription: "These true wireless earbuds offer a seamless listening experience with crystal-clear sound and reliable Bluetooth connectivity. Designed for portability, they fit comfortably in your ears and are perfect for workouts, travel, and daily use. With long battery life and quick charging support, they ensure uninterrupted entertainment throughout your day.",
        category: "Headphone",
        price: 150,
        rating: 4.1,
        review: "[1.5k Reviews]",
        image: "assets/Headphone/head-3.jpg",
        img1: "https://plus.unsplash.com/premium_photo-1680346529370-c940bd7536ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
        img2: "https://images.unsplash.com/photo-1624978960894-bed9218acd39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRwaG9uZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        img3: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        img4: "https://images.unsplash.com/photo-1598200085759-6eebadf8a499?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHBob25lJTIwaW1hZ2VzfGVufDB8fDB8fHww",
        link: "./Productdetailspage.html",
        id: 2
    },

    {
        productName: "Studio Headphones",
        description: "Balanced sound clarity for studio listening",
        longDescription: "Designed for audio professionals and enthusiasts, these premium studio headphones provide exceptional sound accuracy and clarity. They reproduce every detail with precision, making them ideal for mixing, editing, and critical listening. The padded ear cushions and adjustable headband ensure maximum comfort during extended sessions, while the sturdy construction enhances durability.",
        category: "Headphone",
        price: 200,
        rating: 4.2,
        review: "[2.2k Reviews]",
        image: "assets/Headphone/head-1.jpg",
        img1: "https://images.unsplash.com/photo-1745789888294-2267ea208aac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRwaG9uZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        img2: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lJTIwaW1hZ2VzfGVufDB8fDB8fHww",
        img3: "https://plus.unsplash.com/premium_photo-1678059395714-9ffb52f44649?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
        img4: "https://plus.unsplash.com/premium_photo-1677158265072-5d15db9e23b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
        link: "./Productdetailspage.html",
        id: 3
    },

    {
        productName: "Beats Wireless Headphones",
        description: "Stylish design with powerful bass performance",
        longDescription: "These Beats-style wireless headphones combine aesthetics with performance, delivering powerful bass and dynamic sound output. Designed for modern users, they feature a sleek look that complements your style. The wireless functionality allows freedom of movement, while the cushioned ear cups provide all-day comfort. Perfect for music lovers who value both design and performance.",
        category: "Headphone",
        price: 250,
        rating: 4.3,
        review: "[2.4k Reviews]",
        image: "assets/Headphone/head-4.jpg",
        img1: "https://media.istockphoto.com/id/2199837202/photo/headphones-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=aqXM28d668-CGHt96kGKEiuKk9HtSh99594dkGNvLC8=",
        img2: "https://images.unsplash.com/photo-1631586552668-b31039d4921d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
        img3: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        img4: "https://images.unsplash.com/photo-1565876480410-91009978e5b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
        link: "./Productdetailspage.html",
        id: 4
    },

    {
        productName: "Mobile Holder Stand",
        description: "Stable grip for hands free usage",
        longDescription: "This adjustable mobile phone holder stand offers a stable and secure grip for your device, making it ideal for watching videos, video calls, or browsing. Its flexible design allows you to set the perfect viewing angle, while the sturdy base ensures your phone stays in place. Compact and portable, it is suitable for both home and office use.",
        category: "Phone Holder",
        price: 300,
        rating: 4.3,
        review: "[3.1k Reviews]",
        image: "assets/Phoneholder/phoneholder.jpg",
        img1: "https://images.unsplash.com/photo-1692764449235-6c46b86ec252?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBob2xkZXJ8ZW58MHx8MHx8fDA%3D",
        img2: "https://images.unsplash.com/photo-1622926491422-f5a3b10f87d4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3: "https://media.istockphoto.com/id/1134887668/photo/motor-bike-smart-phone-holder-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=wA6uKgKFpbWi-pGvniXmhMjIsmm5_Xr9noxpenw_hvQ=",
        img4: "https://media.istockphoto.com/id/2209351714/photo/riding-a-motorcycle-and-using-mobile-navigation-on-a-winding-mountain-road.webp?a=1&b=1&s=612x612&w=0&k=20&c=D0azYr9b0efRo47Eo9-cUfHxHq8iqw1QXFt2ulShKb0=",
        link: "./Productdetailspage.html",
        id: 5
    },

    {
        productName: "Soundcore Speaker",
        description: "Portable speaker with rich sound output",
        longDescription: "The Anker Soundcore portable speaker delivers impressive audio quality with deep bass and clear highs in a compact design. Built for portability, it is perfect for outdoor gatherings, travel, and home use. With long battery life and durable construction, it ensures uninterrupted playback and reliability. Enjoy seamless connectivity and powerful performance wherever you go.",
        category: "Speaker",
        price: 500,
        rating: 4.4,
        review: "[4.4k Reviews]",
        image: "assets/Speaker/speaker.jpg",
        img1: "https://media.istockphoto.com/id/1476735667/photo/wireless-bluetooth-speaker.jpg?s=2048x2048&w=is&k=20&c=DHduCkFUoVl7siDTwv5EgZ8IroExtfeoXF2MNHTP2vM=",
        img2: "https://media.istockphoto.com/id/1358654061/photo/voice-controlled-smart-speaker.jpg?s=2048x2048&w=is&k=20&c=zch9KjDXJbNd7H_GN-mNQ5Pc0IOL-GdgkjsY5gJWlZo=",
        img3: "https://media.istockphoto.com/id/2262129368/photo/smart-speaker-device-in-living-room-smart-home.jpg?s=2048x2048&w=is&k=20&c=meJ4xYb7eNvtq4_Up-Hy_gAMWO_VBr05NjRRnArMufY=",
        img4: "https://media.istockphoto.com/id/1341487611/photo/intelligent-assistant-smart-speaker-device.jpg?s=2048x2048&w=is&k=20&c=UrANIT-J0YOU7aj4djA60fe30rWov1tJcvpJ4zk4w5M=",
        link: "./Productdetailspage.html",
        id: 6
    },

    {
        productName: "Security CCTV Camera",
        description: "Reliable surveillance with high definition recording",
        longDescription: "Ensure safety and security with this HD CCTV camera designed for continuous monitoring. It captures clear video footage with high resolution, making it easier to identify details. Suitable for homes, offices, and commercial spaces, it provides reliable surveillance day and night. Its durable build and easy installation make it a practical choice for long-term security solutions.",
        category: "Camera",
        price: 700,
        rating: 4.4,
        review: "[4.2k Reviews]",
        image: "assets/Camera/camera.jpg",
        img1: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img2: "https://plus.unsplash.com/premium_photo-1663134149019-284682ece04c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img4: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "./Productdetailspage.html",
        id: 7
    },

    {
        productName: "Wireless IP Camera",
        description: "Remote monitoring with smart connectivity features",
        longDescription: "This wireless smart IP camera allows you to monitor your space remotely using your smartphone or computer. It offers real-time video streaming, motion detection alerts, and night vision capabilities. Designed for convenience, it connects easily to your network and provides reliable performance. Ideal for home security, it ensures peace of mind wherever you are.",
        category: "Camera",
        price: 850,
        rating: 4.2,
        review: "[4.3k Reviews]",
        image: "assets/Camera/cctv.jpg",
        img1: "https://images.unsplash.com/photo-1549109926-58f039549485?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img2: "https://images.unsplash.com/photo-1726127461372-547b9ffa4236?q=80&w=972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3: "https://images.unsplash.com/photo-1695805126692-b356a24f077b?q=80&w=2133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img4: "https://images.unsplash.com/photo-1730967693281-c114d9930860?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "./Productdetailspage.html",
        id: 8
    },

    {
        productName: "Trendy Mobile Case",
        description: "Stylish protection for everyday phone safety",
        longDescription: "This trendy mobile case provides excellent protection while enhancing the look of your device. Made from durable materials, it safeguards against scratches, drops, and everyday wear. Its slim design ensures a comfortable grip without adding bulk. Perfect for users who want both style and protection, it is available in modern designs to match your personality.",
        category: "Mobile case",
        price: 500,
        rating: 4.1,
        review: "[5.5k Reviews]",
        image: "assets/mobileCase/mobileCase.jpg",
        img1: "https://plus.unsplash.com/premium_photo-1705346738010-d480180032ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img2: "https://images.unsplash.com/photo-1593055454503-531d165c2ed8?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3: "https://images.unsplash.com/photo-1623393937972-4b3102ba8c23?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img4: "https://images.unsplash.com/photo-1593298204880-46a17ccad7b0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "./Productdetailspage.html",
        id: 9
    }
];


//-------------------------------- Element selector----------------------------
let productContainer = document.querySelector('.product-img-container')
let filterbtns = document.querySelectorAll('.filter-btn')
let clearbutton = document.getElementById('clear-btn')
let searchInput = document.getElementById('search-input')
let searchContainer = document.querySelector('.search-list-container')

let cartMainContainer = document.getElementById("cart-main-container")
let cartOpenIcon = document.getElementById("cart-open-icon")
let cartCloseIcon = document.getElementById("card-close")
let cartItemContainer = document.getElementById("cart-item-container")

//------------------------------------ Event Lisener-----------------------------
filterbtns.forEach((item) => {
    item.addEventListener("click", () => {
        filterProducts(item.innerText);
    });
});

clearbutton.addEventListener('click', () => {
    clearAll()
})

searchInput.addEventListener('input', () => {
    searchNow(searchInput.value)
})

cartOpenIcon.addEventListener('click', () =>{
    openCartSection()
})

cartCloseIcon.addEventListener('click', () =>{
    closeCartSection()
})
// ----------------------------------------Function----------------------------------------
// function to display the searched products in ui 
//  function renderSearchedProducts(userSearchedItems){
//  }

// Function to render products in ui

function renderProductList(prods) {
    productContainer.innerHTML = ""

    prods.forEach((item) => {
        let card = document.createElement('div');
        card.classList.add('w-full');
        card.classList.add('h-[360px]');

        card.innerHTML = `
           <!-- image -->

           <a href="${item.link}?id=${item.id}" target="_blank">
                <div class="first-img relative h-[70%]  rounded-lg bg-white">
                    <img src="${item.image}" class="w-full object-cover rounded-lg h-[100%] m-auto">
                    <div class="best-seller text-[13px] border border-gray-200 font-medium w-fit rounded-xl bg-gray-200 py-0.5 px-2 absolute top-[10px] right-2">Best selling</div>
                </div>

             <!-- content -->

                <div class="mt-3 h-[30%] ">
                    <h1 class="font-medium">${item.productName}</h1>

                    <div class="flex items-center p-1 justify-between">

                        <h1 class="text-[11px] flex gap-1 font-medium text-gray-400">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="orange"
                        stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-star-icon lucide-star">
                        <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg></span>${item.rating}${item.review}</h1>

                        <h1 class="text-[16px] font-medium">₹ ${item.price}</h1>
                    </div>

                    <div class="flex justify-between gap-2">
                        <button class="btn-1 text-[12px] font-medium text-white w-[100%] border border-gray-200 bg-black py-3 px-9 rounded-3xl cursor-pointer">View Details</button>
                    </div>

                </div>

            </a>    
         `;

        productContainer.appendChild(card);
    });

}

renderProductList(products);

// functions to show filtered products

function filterProducts(categoryName) {
    let filtereditems = products.filter((item) => {
        return item.category == categoryName;
    });

    renderProductList(filtereditems);
}


// functions to clear the filter and show all products

function clearAll() {
    renderProductList(products)
}


function searchNow(userTyped){

    // this function does the job of filtering the products based on user searched or typed 
    let userSearchedFor = products.filter((item=>{
        return item.productName.toLowerCase().includes(userTyped.toLowerCase())
    }))

    // clearing the container, so the previous data will not be there in the ui 
    searchContainer.innerHTML = ""

    // if the input does not have any value, don't show the search box 
    if(searchInput.value == ""){
        searchContainer.classList.add("hidden")
        return;
    }
    
    // if the user has searched for something, but that value does'nt exist in the products array, then hide the searchbar 
    if(userSearchedFor.length == 0){
        searchContainer.classList.add("hidden");
    }else{
        searchContainer.classList.remove("hidden");
    }

   userSearchedFor.forEach((item)=>{
     
    let card = document.createElement('div')
    card.innerHTML = `
       
         <a href="${item.link}?id=${item.id}" target="_blank" class="search-card flex items-center gap-3 border border-gray-200 p-2 rounded-lg shadow-lg">
            <img src="${item.image}" class="w-[80px] h-[80px] rounded-lg object-cover">

                 <div>
                    <p class="text-lg font-medium text-black">${item.productName}</p>
                    <p class="text-md  text-gray-600">${item.description}</p>
                </div>
         </a>
    
    `
    searchContainer.appendChild(card)
   })
}

// funciton to open cart section

function openCartSection(){
    cartMainContainer.classList.remove("hidden")

    // getting items in local storage
    let items = localStorage.getItem("cart")

    // Converting string to array
    let parsedCartItems = JSON.parse(items)

    console.log("cart items :", parsedCartItems)

    cartItemContainer.innerHTML = ""
    parsedCartItems.forEach((item) => {
        let card = document.createElement('div')
        card.innerHTML = `

        <div 
            class="card flex items-center gap-3 border border-gray-200 p-2 rounded-lg shadow-lg">
            <img src="${item.image}" class="w-[80px] h-[80px] rounded-lg object-cover">

                 <div>
                    <p class="text-lg font-medium text-black">${item.productName}</p>
                    <p class="text-md text-gray-600">${item.description}</p>
                    <p class="text-md text-gray-800 font-medium">₹ ${item.price}</p>
                </div>
        </div>
        
        `
        cartItemContainer.appendChild(card)
        
    })

}


// funciton to close cart section

function closeCartSection(){
    cartMainContainer.classList.add("hidden")
}
//------------------------------------- Function------------------------------------------
export function addProductsToCart() {

    let cartItem = localStorage.getItem('cart');

    cartItem = cartItem ? JSON.parse(cartItem) : [];
    console.log(cartItem);

    cartItem.push(findedProduct);

    localStorage.setItem('cart', JSON.stringify(cartItem));

    successContainer.classList.remove("hidden");


    setTimeout(() => {
        successContainer.classList.add("hidden");
    }, 2000);

}
