let images = ["/ThePandaStore/images/main page products/display laptop.jpg","/ThePandaStore/images/main page products/display headphones.jpeg","/ThePandaStore/images/main page products/display cosmetics.jpg"];
let links = ["https://www.microsoft.com/en-in/surface/devices/surface-pro-9?activetab=pivot:overviewtab","https://www.boat-lifestyle.com/products/rockerz-551-anc-noise-cancelling-headphone","https://www.nykaa.com/maybelline-new-york-superstay-vinyl-ink-liquid-lipstick/p/7066987?productId=7066987&pps=1&skuId=7066975"];
let imageIndex = 0;

function changeDisplay()
{
   let target = document.getElementById('topproduct');
   let link = document.getElementById('displink');
   target.style.opacity = 0;

   setTimeout(function()
   {
    target.src = images[imageIndex];
    link.href = links[imageIndex];
    target.style.opacity = 1;
   }, 400);

   imageIndex = (imageIndex + 1)%images.length;
}

setInterval(changeDisplay,5000);

