import React, { useEffect, useState } from "react";
import axios from "axios";
//https://picsum.photos/v2/list?page=2&limit=100

const getPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=4`
    );
    // handle success
    console.log(response);
    return response.data;
  } catch (error) {
    // handle error
    console.log(error);
  }
};

const Photos = () => {
  //   useEffect(function callback(params) {side-effects}, []); Function Declaration
  //   useEffect(() => {side-effects}, []);  Arrow Function

  const [photos, setPhotos] = useState([]); // state này lấy api ảnh load ảnh ra
  const [nextPage, setNextPage] = useState(1);

  const handleLoadPage = async () => {
    console.log("load page", nextPage);
    const images = await getPhotos(nextPage);
    // concat nối mảng, vừa nối các ảnh cũ(photos) và ảnh mới(images) nối thêm
    const newPhotos = [...photos, ...images];
    setPhotos(newPhotos);
    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    handleLoadPage();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-12 p-5">
        {photos.length > 0 &&
          photos.map((item, index) => (
            <div key={index} className="p-5bg-slate-300 shadow-sm rounded-lg">
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div
        className="flex justify-center cursor-pointer"
        onClick={handleLoadPage}
      >
        <p className="w-[10rem] h-[4rem] p-5 bg-sky-400 hover:bg-sky-600 mb-5 rounded-lg text-center text-white font-bold text-[18px]">
          Load more
        </p>
      </div>
    </div>
  );
};

export default Photos;
