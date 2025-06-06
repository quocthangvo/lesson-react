import React, { useState } from "react";

const TodoList = () => {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJob = JSON.parse(localStorage.getItem("jobs"));
    console.log(storageJob);
    return storageJob;
  });

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob(""); //nhap reset lai o nhap
  };
  return (
    <div className="p-10">
      <input
        type="text"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {jobs.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
