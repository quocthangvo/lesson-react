import React, { useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";

const UseMemo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState(() => {
    const local = JSON.parse(localStorage.getItem("prod"));
    return local;
  });

  const [deleteIndex, setDeleteIndex] = useState(null);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts((products) => {
      const newProd = [
        ...products,
        {
          name,
          price: +price,
        },
      ];
      const jsonProducts = JSON.stringify(newProd);
      localStorage.setItem("prod", jsonProducts);
      return newProd;
    });
    toast.success("Thêm thành công");

    setName("");
    setPrice("");

    nameRef.current.focus();
  };

  const handleDelete = () => {
    // const confirm = window.confirm("Bạn có muốn xóa không?");
    // if (!confirm) return;

    const newProduct = products.filter((_, index) => index !== deleteIndex);
    setProducts(newProduct);
    localStorage.setItem("prod", JSON.stringify(newProduct));
    toast("Đã xóa thành công");
    setDeleteIndex(null);
  };

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("total...");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);
  //   console.log(products);
  return (
    <div>
      <div className="flex justify-center">
        <div className="m-10 grid grid-rows-3 text-start h-[200px]">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg  p-2 h-[50px] border-2 mb-2
         focus:outline-none focus:border-cyan-400"
            ref={nameRef}
          />
          <input
            type="text"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="rounded-lg h-[50px] focus:outline-none focus:border-cyan-400 p-2 border-2 mb-2"
          />
          <button
            onClick={handleSubmit}
            className="p-2 h-[50px] bg-green-400 rounded-lg mt-2 text-white hover:bg-green-600"
          >
            Add
          </button>
        </div>
        <div className="text-center">
          <h2>Total: {total}</h2>
          <ul className="">
            {products.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center w-[150px] m-2"
              >
                {item.name} - {item.price}
                <button
                  onClick={() => setDeleteIndex(index)}
                  className="p-1 ml-2 rounded-md"
                >
                  <i className="fa-regular fa-trash-can text-[20px] text-red-500"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* MODAL xác nhận xoá */}
        {deleteIndex !== null && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 ">
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-[500px]
            animate-fadeIn"
            >
              <div className="flex">
                <i className="fa-solid fa-triangle-exclamation text-[50px] text-red-400"></i>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-red-500">
                    Xóa dữ liệu
                  </p>
                  <span>Bạn có chắc muốn xoá?</span>
                </div>
              </div>

              <div className="flex justify-end mt-5">
                <button
                  className="px-6 py-1 rounded hover:bg-gray-400 border-2 mr-2"
                  onClick={() => setDeleteIndex(null)}
                >
                  Huỷ
                </button>
                <button
                  className="px-6 py-1 bg-red-400 text-white rounded hover:bg-red-600"
                  onClick={handleDelete}
                >
                  Xoá
                </button>
              </div>
            </div>
          </div>
        )}
      </div>{" "}
      <table className="table-auto">
        <thead className="font-bold">
          <tr className="p-3">
            <td className="p-3">Name</td>
            <td className="p-3">Age</td>
            <td className="p-3">Address</td>
          </tr>
        </thead>
        <tbody>
          <tr className="p-3">
            <td className="p-3">Thang</td>
            <td className="p-3">20</td>
            <td className="p-3">TPHCM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UseMemo;
