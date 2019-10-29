import React from "react";
import "./app.scss";
import Header from "./header/Header";
import Headline from "./headline";
import ListPost from "./posts/ListPost";

const tempAr = [
  {
    fName: "Yatin",
    lName: "Gupta",
    age: 24,
    email: "yatin.gupta@gmail.com",
    hobbies: ["Football", "Cricket", "VG"],
    profile: [
      { company: "A Company", position: "SE" },
      { company: "B Company", position: "SSE" }
    ]
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header={"Posts"}
          desc={"Click the button to render"}
          tempAr={tempAr}
        />
        <ListPost />
      </section>
    </div>
  );
}

export default App;
