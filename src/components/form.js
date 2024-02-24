import { useState } from "react";
import "./form.css";

function Form() {
  const [formData, setFormData] = useState({
    file: "",
    title: "",
    description: "",
  });

  const [displayDataList, setDisplayDataList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleButtonClick = () => {
    const newData = { ...formData };
    setDisplayDataList((prevList) => [...prevList, newData]);

    setFormData({
      file: "",
      title: "",
      description: "",
    });
  };

  return (
    <div className="container">
      <form className="form">
        <label>Photo : </label>
        <input
          className="inpfile"
          type="file"
          name="file"
          onChange={handleChange}
        />

        <label>Title : </label>
        <input
          className="inp"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label>Description : </label>
        <input
          className="inp"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button className="btn" type="button" onClick={handleButtonClick}>
          SEND{" "}
        </button>
      </form>

      {displayDataList.length > 0 && (
        <div className="display">
          {displayDataList.map((data, index) => (
            <div key={index}>
              <p> {data.file}</p>
              <p> {data.title}</p>
              <p> {data.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Form;
