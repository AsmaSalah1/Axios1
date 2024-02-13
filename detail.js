
async function getpro(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('phons_id');
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const data = await response.data
    const { title, thumbnail,price,rating } = data;

    document.querySelector("h1").textContent = title;
    document.querySelector("h3").textContent += price;
    document.querySelector("img").src = thumbnail;
     document.querySelector("span").innerHTML+=rating;

}
getpro();


