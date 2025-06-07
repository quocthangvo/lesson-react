import React, { useState } from "react";
// import styled from "styled-components";

const courses = [
  {
    id: 1,
    name: "HTML,CSS",
  },
  {
    id: 2,
    name: "JavaScript",
  },
  {
    id: 3,
    name: "React",
  },
];

const TwoWayBinding = () => {
  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = prev.includes(id); //includes đặt giá trị thành mảng
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleChange = () => {
    console.log("ids:", checked);
  };
  return (
    <div className="p-10">
      {courses.map((course) => (
        <div key={course.id} className="text-lg text-red-700 flex items-center">
          <input
            className="h-5 w-5  mr-2"
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button
        className="p-4 text-lg bg-slate-500 rounded-lg"
        onClick={handleChange}
      >
        Register
      </button>
    </div>
  );
};

export default TwoWayBinding;
