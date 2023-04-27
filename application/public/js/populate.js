var url = "https://jsonplaceholder.typicode.com/albums/2/photos";
async function fetchWithString() {
    
    try {
        var response = await fetch(url);
        var data = await response.json();
        var count = 0;
        var photoCount = document.getElementById('count');
        var htmlString = data.reduce(function (prev, product){
            count++;
            return ( 
                prev + 
            `<div class = "product-card">
            <img class = "product-img" src = "${product.thumbnailUrl}">
            <div class = "product-info">
                <p class = "product-title">${product.title}</p>
                <p class = "product-cost">${product.price}</p>
            </div>
        </div>`
            );
        },"");
        photoCount.textContent = "There are " + count + " items";
        document.getElementById("product-list").innerHTML = htmlString;
        let cards = document.getElementsByClassName("product-card");
        [...cards].forEach(function(ele){
            ele.addEventListener("click", function(ev){
                var current = ev.currentTarget;
                current.style.transition = "opacity 0.2s";
                current.style.opacity = 0;
                let timer = setInterval(function (){
                    count--;
                    current.remove();
                    clearInterval(timer);
                    photoCount.textContent = "There are " + count + " items";
                }, 200);
            });
        });

    } catch (error) {
        console.log(error);
    }
}
fetchWithString();