import React from "react";
import { useEffect, useState } from "react";
const Activit = () => {
  const [activity, setShowactivity] = useState({}); // funktionallelt för att spara data i {} och rendera de
  const [showBtn, setShowBtn] = useState(""); // funktionallelt för show random activity
  // Alternativ 1 med useEffect
  //  useEffect(() => {
  //   fetch("http://www.boredapi.com/api/activity")  // All Data som finns i activity
  //      .then((response) => response.json())
  //      .then((json) => setShowactivity(json));
  //  }, [showBtn]);
  //  let activ = () => {
  //    setShowBtn(showBtn + 1); //när vi klickar antal ggr så uppdatera data + 1
  //    console.log(showBtn);
  //  };

  //Alternativ 2 kör fetch direkt och setShowBtn(showBtn +1 ) dirikt i samma function(lättare och smidigare lol)
  let activ = () => {
    fetch("http://www.boredapi.com/api/activity") //Data som har participants 1
      .then((response) => response.json())
      .then((json) => setShowactivity(json));
    setShowBtn(showBtn + 1);
  };

  let part1 = () => {
    fetch("http://www.boredapi.com/api/activity?participants=1") //Data som har participants 1
      .then((response) => response.json())
      .then((json) => setShowactivity(json));
    setShowBtn(showBtn + 1); //Genom att klicka på denna knapp visas data direkt istället för att behöva klicka Get activity
  };
  let part2 = () => {
    fetch("http://www.boredapi.com/api/activity?participants=2") //Data som har participants 2
      .then((response) => response.json())
      .then((json) => setShowactivity(json));
    setShowBtn(showBtn + 1); 
  };

  let part3 = () => {
    fetch("http://www.boredapi.com/api/activity?participants=4") //Data som har participants 4
      .then((response) => response.json())
      .then((json) => setShowactivity(json));
    setShowBtn(showBtn + 1); 
  };

  return (
    //Returena random activity med dess namn, typ och participants
    <div>
      <h2>Activity</h2> 
      {/* Returen data som har dess function  */}
    <button onClick={activ}>Get Activity</button>
      <div style={{ color: "white" }}>
        { showBtn && <p> Activity Name : {activity.activity}</p>}
        {showBtn && <p> Activity type : {activity.type}</p>}
        {showBtn && <p> Activity participants : {activity.participants}</p>}
      </div>

      <button onClick={part1}>1 participants</button>
      <button onClick={part2}>2 participants</button>
      <button onClick={part3}>4 participants</button>
    </div>
  );
};

export default Activit;
