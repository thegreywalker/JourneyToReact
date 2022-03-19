import React from "react";

const AllProducts = () => {
  const [allProducts, setAllProducts] = React.useState([]);

  const fetchAllProducts = React.useCallback(async () => {
    const response = await fetch("http://localhost:8000/products",{
      method: "GET",
      headers: {
        "Accept": "application/json",
      }
    })
    const data = await response.json();
    let loadedProducts = []
    for (const key in data) {
      loadedProducts.push({
        id: key,
        name: data[key].name,
        image: data[key].image,
        price: data[key].price,
        description: data[key].description,
        merchant_price: data[key].merchant_price
      })    
    }
    setAllProducts(loadedProducts);
  }, []);



  React.useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <React.Fragment>
      <section>
        <button className="m-5 bg-blue-400 p-4 rounded-lg text-white italic text-3xl hover:underline " onClick={fetchAllProducts}>Fetch Products</button>
      </section>
      <section>{allProducts.map(data => {
        return (
          <div key={data.id} className="from-blue-600 to-purple-500 bg-gradient-to-r p-4 mx-auto space-y-2 text-left space-x-5 rounded-lg border-4 border-double">
            <img className="w-40 h-40 rounded-md" src={data.image} alt={data.name} />
            <div className="text-xl italic text-white">
              
            <p>Name ~ {data.name}</p>
            <p>Price ~ {data.price}</p>
            <p>Description ~ {data.description}</p>
            <p>Merchant Price ~ {data.merchant_price}</p>
            </div>
          </div>
        )
      })}
       </section>
    </React.Fragment>
  );
};

export default AllProducts;
