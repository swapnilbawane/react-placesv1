import "./styles.css";
import React, { useState } from "react";
import mumbai from "../src/mumbai.jpg";

var listofPlaces = {
  southmumbai: [
    { name: "Marine Drive", rating: "4/5", description: "Also called as Queen's necklace is buzzing with people day and night. A solace to a Mumbaikar along the cool sea and open sky view."},
    { name: "Gateway of India", rating: "4.6/5", description: "An iconic tourist spot that made during the British Empire." },
    { name: "Taj Mahal Hotel", rating: "5/5", description: "Elegant, stylish and known for its best hospitality." }
  ],

  goregaon: [
    { name: "Film City", rating: "4.5/5", description: "Home to entertainment industry."},
    { name: "Aarey Milk Colony", rating: "4.7/5", description: "Scenic lushful greenery amidst Goregaon." },
    { name: "Krishna Vatika Mandir", rating: "5/5", description: "Calm and peaceful amidst a chaotic surrounding, visit to experience." }
  ],

  andheri: [
    { name: "Versova Beach", rating: "4.8/5", description: "Recently cleaned up by many localites, sea as they say gives you solace." },
    { name: "Lokhandwala Complex Market", rating: "4.9/5", description: "Buzzing with shops and deals visit here to get the best deals." },
    { name: "Sri Sri Radha Rasabihari Ji Temple", rating: "4.95/5", description: "Temple well maintained, known and visited a lot by locals offers a serene experience to all." }
  ],

  mulund: [
    { name: "Mahakavi Kalidas Natya Mandir", rating: "5/5", description: "An auditorium home to many theater plays and events. An iconic spot indeed" },
    { name: "Sambhaji Garden", rating: "4/5", description: "Located along the Eastern Express Highway, it provides open air gym facility and courts for sports." },
    { name: "Chintamani Deshmukh Garden", rating: "5/5", description: "Another popular local spot to hang out for locals."}
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
        <img style={{ width: "50%" }} src={mumbai} alt="gateway of india and taj mahal in mumbai." />
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
        {listofPlaces[selectedTopic].map((places) => (
          <ul style={{ textAlign: "left" }}>
            <li
              key={places.name}
              style={{
                paddingInlineStart: "1rem",
                listStyle: "none",
                border: "0.2px solid grey",
                borderRadius: "0.5rem",
                padding: "1rem",
                width: "60%"
              }}
            >
              <div style={{ fontSize: "larger" }}> {places.name} </div>
              <div style={{ fontSize: "smaller" }}> {places.rating} </div>
              <div style={{ fontSize: "smaller" }}>  
              {places.description} </div>

            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
