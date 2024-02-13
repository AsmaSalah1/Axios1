
async function getProducts(){
const {data}=await axios.get(`https://dummyjson.com/products`);
return data.products;
}
async function getData(){
const data=await getProducts();
const result=data.map( (pro)=> {
    return `
    <div class="col-md-4 col-lg-3 mx-auto m-3" >
     <img class="card-img-top " src=${pro.thumbnail} />
    <h4 class="card-title">${pro.title}</h4>
    <a href="details.html?phons_id=${pro .id}" class="btn btn-primary">Show Details </a>
    </div>
    
    `
} )
document.querySelector(".cards").innerHTML=result;
}
getData();

