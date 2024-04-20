import axios from "axios";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);

      const response = await axios.get(url);
      const responseData = response?.data?.products;

      console.log(responseData);

      if (responseData) {
        setData(responseData);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrollPosition / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(data, scrollPercentage);

  if (errorMessage) {
    return <div>Some Error Occured ! {errorMessage}</div>;
  }

  if (loading) {
    return (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass="relative top-72 flex justify-center items-center"
        visible={true}
      />
    );
  }

  return (
    <>
      <div className="fixed top-0 z-10 w-[100%] items-center bg-black">
        <h1 className="font-bold text-4xl text-blue-700 m-5 p-3">
          Custome Scroll Indicator
        </h1>

        <div className="w-[100%] h-3 bg-yellow-500">
          <div className={`h-3 bg-red-600 rounded-r-full`} style={{ width: `${scrollPercentage}%` }}></div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div>
          {data && data.length > 0
            ? data.map((dataItem) => (
                <p className="relative top-28 text-2xl text-slate-500 font-bold p-4 m-4">
                  {dataItem.title}
                </p>
              ))
            : null}
        </div>
      </div>
    </>
  );
}
