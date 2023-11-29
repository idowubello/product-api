const body = document.body;
const container = document.createElement("div");
body.style.backgroundColor='blue'
const fetchProduct = async() => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  
  data.map(element => {
    // create tags
    const main = document.createElement("div");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
main.style.backgroundColor='yellow'
    main.classList.add("main");

    img.setAttribute("src", element.image);
    h3.textContent = element.title;
    p.textContent = "NGN " + element.price;
    main.append(img, h3, p);
    container.append(main);
  });

  

}

container.classList.add("container")

fetchProduct()
body.append(container)