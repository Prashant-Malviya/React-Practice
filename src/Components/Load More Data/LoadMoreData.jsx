import axios from "axios";
import { useEffect, useState } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const responseData = response?.data;
      console.log(responseData);

      if (
        responseData &&
        responseData.products &&
        responseData.products.length
      ) {
        setProducts((prevData) => [...prevData, ...responseData.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading Data! Please Wait...</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {products && products.length
            ? products.map((item) => (
                <div
                  key={item.id}
                  className="p-5 border border-solid flex flex-col gap-2.5"
                >
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))
            : null}
        </div>
        <div>
          <button
          disabled={disableButton}
            className={`${disableButton ? "bg-gray-400" : "bg-blue-500"} px-3 py-3 m-3 bg-blue-600 rounded-md text-white flex justify-center items-center`}

            
            onClick={() => setCount(count + 1)}
          >
            Load More Products
          </button>
          {disableButton ? <p>You Have Reached To 100 Products</p> : null}
        </div>
      </div>
    </>
  );
}
