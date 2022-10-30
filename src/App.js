import "./styles.css";
import React, { useState } from "react";
import mumbai from "../src/mumbai.jpg";

var listofPlaces = {
  southmumbai: [
    { name: "Marine Drive", rating: "4/5" },
    { name: "Gateway of India", rating: "4.6/5" },
    { name: "Taj Mahal Hotel", rating: "5/5" }
  ],

  goregaon: [
    { name: "Film City", rating: "4.5/5" },
    { name: "Aarey Milk Colony", rating: "4.7/5" },
    { name: "Krishna Vatika Mandir", rating: "5/5" }
  ],

  andheri: [
    { name: "Versova Beach", rating: "4.8/5" },
    { name: "Lokhandwala Complex Market", rating: "4.9/5" },
    { name: "Sri Sri Radha Rasabihari Ji Temple", rating: "4.95/5" }
  ],

  mulund: [
    { name: "Mahakavi Kalidas Natya Mandir", rating: "5/5" },
    { name: "Sambhaji Garden", rating: "4/5" },
    { name: "Chintamani Deshmukh Garden", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedTopic, setTopic] = useState("southmumbai");

  function topicSelectionHandler(genre) {
    setTopic(genre);
  }

  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          color: "blue"
        }}
      >
        Places to visit in Mumbai!
      </h1>

      <div style={{ padding: "1rem" }}>
        <img style={{ width: "50%" }} src={mumbai} />
      </div>

      <div style={{ margin: "1rem" }}>Your ultimate guide to visit Mumbai.</div>

      <hr />

      {/* generating buttons - for each item in the object create a button*/}
      <div>
        {Object.keys(listofPlaces).map((topic) => (
          <button
            key={topic.id}
            onClick={() => topicSelectionHandler(topic)}
            style={{
              margin: "0.5rem",
              borderRadius: "0.5rem",
              border: "solid 1px",
              padding: "0.5rem",
              backgroundColor: "whitesmoke"
            }}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* generating list  */}
      <div style={{ margin: "auto" }}>
        {listofPlaces[selectedTopic].map((books) => (
          <ul style={{ textAlign: "left" }}>
            <li
              key={books.name}
              style={{
                paddingInlineStart: "1rem",
                listStyle: "none",
                border: "0.2px solid grey",
                borderRadius: "0.5rem",
                padding: "1rem",
                width: "60%"
              }}
            >
              <div style={{ fontSize: "larger" }}> {books.name} </div>
              <div style={{ fontSize: "smaller" }}> {books.rating} </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
