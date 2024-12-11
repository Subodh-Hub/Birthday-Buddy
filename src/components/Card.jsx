import "../assets/styles/Card/card.css";
import { useState } from "react";
import Person from "./Person";
function Card() {
  const dummyData = [
    {
      name: "Bertie Yates",
      age: 28,
      imageDestination: "../assets/images/person-1.jpg",
    },
    {
      name: "Hester Hogan",
      age: 32,
      imageDestination: "../assets/images/person-2.jpg",
    },
    {
      name: "Larry Little",
      age: 36,
      imageDestination: "../assets/images/person-3.jpg",
    },
    {
      name: "Sean Walsh",
      age: 34,
      imageDestination: "../assets/images/person-4.jpg",
    },
    {
      name: "Lola Gardner",
      age: 29,
      imageDestination: "../assets/images/person-5.jpg",
    },
  ];
  const [data, setData] = useState(dummyData);
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  function clearAllHandler() {
    setData([]);
  }
  function showDataHandler() {
    setData(dummyData);
  }

  function nameUpdateHandler(event) {
    setNewName(event.target.value);
  }
  function ageUpdateHandler(event) {
    setNewAge(event.target.value);
  }

  function handleAddUser() {
    const newData = {
      name: `${newName}`,
      age: `${newAge}`,
    };
    console.log(newData);
    if (newName.trim() !== "" && newAge > 0) {
      setData((data) => [...data, newData]);
      console.log("res");
    }
  }

  function setVisible() {
    setShowForm(true);
  }
  return (
    <>
      <div className="wrapper">
        <button onClick={setVisible}>Add</button>
        <h2>{data.length} Birthdays Today</h2>
        <ul>
          {data.map((element, index) => (
            <li key={index}>
              <Person
                name={element.name}
                age={element.age}
                // image={new URL(element.imageDestination, import.meta.url).href}
              />
            </li>
          ))}
        </ul>
        <button onClick={clearAllHandler}>Clear All</button>
        <button onClick={showDataHandler}>Show All</button>
      </div>
      {showForm && (
        <div className="form">
          <input
            type="text"
            placeholder="Enter your name"
            onChange={nameUpdateHandler}
          />
          <br />
          <input
            type="number"
            placeholder="Enter your age"
            onChange={ageUpdateHandler}
          />
          <br />
          <button onClick={handleAddUser}>Add People</button>
        </div>
      )}
    </>
  );
}
export default Card;
