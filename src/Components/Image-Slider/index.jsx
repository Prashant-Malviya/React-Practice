import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div className="text-center">Loading data! Please wait...</div>;
  }

  if (errorMsg !== null) {
    return <div className="text-center">Error occurred! {errorMsg}</div>;
  }

  return (
    <div className="relative flex justify-center items-center w-[600px] h-[450px]">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute left-4 w-8 h-8 text-white filter drop-shadow-md cursor-pointer"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "border border-gray-300 rounded-md shadow-md"
                  : "hidden"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute right-4 w-8 h-8 text-white filter drop-shadow-md cursor-pointer"
      />
      <div className="absolute bottom-9 flex">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "w-4 h-4 mx-1 bg-white rounded-full"
                    : "w-4 h-4 mx-1 bg-gray-400 rounded-full"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </div>
    </div>
  );
}
