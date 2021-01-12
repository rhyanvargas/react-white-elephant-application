import React, { useState, useEffect } from "react";
import GiftList from "./GiftList";
import "./App.css";

function App() {
  //STATE
  const [gifts, setGifts] = useState(SAMPLE_GIFTS);
  const [players, setPlayers] = useState([]);
  const [playerUp, setPlayerUp] = useState("");
  // TODO: think where to place "isOpened" and "isSelected"... should be state or in data as field

  useEffect(() => {
    //  When component mounts useEffect({},[])
    // 1. Intialize gifts
    // 2. Initialize Players
    // 3. Set isUp player to go first
  }, []);

  // console.log(players);

  // UTILITY FUNCTIONS
  const nextPlayer = () => {
    setPlayers((prevPlayers) => {
      const newArr = [...prevPlayers];
      newArr.push(newArr.shift());
      return newArr;
    });
  };

  const randomSort = (players) => {
    return players.sort(() => Math.random() - 0.5);
  };

  const renderPlayerList = () => {
    const playersList = players.map((player, index) => {
      return (
        <span
          key={player.id}
          className={index == 0 ? " player active" : "player"}
        >
          {index == 0 && "Up Now: "}
          {player.name}
        </span>
      );
    });
    const button = <button onClick={() => nextPlayer()}> Next Player </button>;
    return playersList.concat(button);
  };

  const startGame = (players) => {
    const list = randomSort(players);
    setPlayers(list);
  };

  return (
    <>
      {/* PLAYERLIST */}
      <section>
        <div className="container players-container">
          <div className="players-wrapper">
            {players.length > 0 ? (
              renderPlayerList()
            ) : (
              <button onClick={() => startGame(PLAYERS)}> Play Game</button>
            )}
          </div>
        </div>
      </section>
      {/* GIFTLIST */}
      <section>
        <h1>CLick on a gift below</h1>
        <GiftList gifts={gifts}></GiftList>
      </section>
    </>
  );
}

// MOCK

const SAMPLE_GIFTS = [
  {
    id: 1,
    owner: "Kevin",
    name: "COVID Ornament",
    Url:
      "https://smile.amazon.com/Christmas-Quarantine-Decorations-Friends-2020-Quarantined/dp/B08NZPJB1F/ref=sr_1_22?crid=2RKMBFSWOAW77&dchild=1",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81bIDT%2BQHSL._AC_SX522_.jpg",
    giftWrap:
      "https://logos-download.com/wp-content/uploads/2017/11/Baltimore_Ravens_logo.png",
    currentholder: null,
    steals: 0,
  },
  {
    id: 2,
    owner: "Richard",
    name: "Exploding Kittens",
    url:
      "https://smile.amazon.com/dp/B010TQY7A8/ref=cm_sw_r_cp_api_glc_fabc_P0t4FbNDDYTF5",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71UUDAPpKWL._AC_SX679_.jpg",
    giftWrap:
      "https://logos-download.com/wp-content/uploads/2017/11/Baltimore_Ravens_logo.png",
    currentholder: null,
    steals: 0,
  },
  {
    id: 3,
    owner: "Candi",
    name: "Santa Gift Card",
    url:
      "https://smile.amazon.com/dp/B071VCQJ24/ref=cm_sw_r_sms_api_glc_fabc_6N24FbSPC7RQC",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81oykAH2uJL._SY500_.jpg",
    giftWrap:
      "https://logos-download.com/wp-content/uploads/2017/11/Baltimore_Ravens_logo.png",
    currentholder: null,
    steals: 0,
  },
  {
    id: 4,
    owner: "Rhyan",
    name: "Poo-Pourri In A Pinch Pack",
    url:
      "https://smile.amazon.com/Poo-Pourri-Before-You-Go-Toilet-Spray-Pinch/dp/B07CNPBS7T/ref=sr_1_12?dchild=1&keywords=poop+pouri&qid=1608753197&sr=8-12",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61%2BKYjM5dYL._AC_SX425_.jpg",
    giftWrap:
      "https://logos-download.com/wp-content/uploads/2017/11/Baltimore_Ravens_logo.png",
    currentholder: null,
    steals: 0,
  },
  {
    id: 5,
    owner: "Alyssa",
    name: "Cast iron KettleBell",
    url:
      "https://smile.amazon.com/AmazonBasics-Cast-Iron-Kettlebell-Pounds/dp/B0731DWW5D/ref=sr_1_1?c=ts&dchild=1&keywords=Strength+Training+Kettlebells&qid=1608749890&rnid=2528832011&rps=1&s=exercise-and-fitness&sr=1-1&ts_id=16385851",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61FEl-0zcUL._AC_SX679_.jpg",
    giftWrap:
      "https://logos-download.com/wp-content/uploads/2017/11/Baltimore_Ravens_logo.png",
    currentholder: null,
    steals: 0,
  },
  {
    id: 6,
    owner: "Robbie",
    name: "Potty Putter Toilet Time Golf Game",
    url:
      "https://smile.amazon.com/dp/B000LC65QA/ref=cm_sw_r_sms_api_glc_fabc_w354FbV55TDTY",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81n5cbPP3mL._AC_SX522_.jpg",
    giftWrap:
      "https://logos-download.com/wp-content/uploads/2017/11/Baltimore_Ravens_logo.png",
    currentholder: null,
    steals: 0,
  },
  {
    id: 7,
    owner: "Julian",
    name: "Potty Putter Toilet Time Golf Game",
    url:
      "https://smile.amazon.com/Hilife-Steamer-Handheld-Clothing-Capacity/dp/B07HF3X6Y4/ref=sr_1_2?dchild=1&keywords=HiLife+Steamer&qid=1608763387&sr=8-2",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61Sm1grKOcL._AC_SY450_.jpg",
    giftWrap:
      "https://logos-download.com/wp-content/uploads/2017/11/Baltimore_Ravens_logo.png",
    currentholder: null,
    steals: 0,
  },
];
const PLAYERS = [
  {
    id: 1,
    name: "Kevin",
    number: "",
    ownGiftImage:
      "https://images-na.ssl-images-amazon.com/images/I/81bIDT%2BQHSL._AC_SX522_.jpg",
    ownGiftname: "COVID Ornament",
    ownGiftLink:
      "https://smile.amazon.com/Christmas-Quarantine-Decorations-Friends-2020-Quarantined/dp/B08NZPJB1F/ref=sr_1_22?crid=2RKMBFSWOAW77&dchild=1",
    selectedGiftName: "",
    selectedGiftImage: "",
    selectedGiftname: "",
    selectedGiftLink: "",
    isUp: false,
  },
  {
    id: 2,
    name: "Richard",
    number: "",
    ownGiftImage:
      "https://images-na.ssl-images-amazon.com/images/I/71UUDAPpKWL._AC_SX679_.jpg",
    ownGiftname: "Exploding Kittens",
    ownGiftLink:
      "https://smile.amazon.com/dp/B010TQY7A8/ref=cm_sw_r_cp_api_glc_fabc_P0t4FbNDDYTF5",
    selectedGiftName: "",
    selectedGiftImage: "",
    selectedGiftname: "",
    selectedGiftLink: "",
    isUp: false,
  },
  {
    id: 3,
    name: "Candi",
    number: "",
    ownGiftImage:
      "https://images-na.ssl-images-amazon.com/images/I/81oykAH2uJL._SY500_.jpg",
    ownGiftname: "Santa Gift Card",
    ownGiftLink:
      "https://smile.amazon.com/dp/B071VCQJ24/ref=cm_sw_r_sms_api_glc_fabc_6N24FbSPC7RQC",
    selectedGiftName: "",
    selectedGiftImage: "",
    selectedGiftname: "",
    selectedGiftLink: "",
    isUp: false,
  },
  {
    id: 4,
    name: "Rhyan",
    number: "",
    ownGiftImage:
      "https://images-na.ssl-images-amazon.com/images/I/61%2BKYjM5dYL._AC_SX425_.jpg",
    ownGiftname: "Poo-Pourri In A Pinch Pack",
    ownGiftLink:
      "https://smile.amazon.com/Poo-Pourri-Before-You-Go-Toilet-Spray-Pinch/dp/B07CNPBS7T/ref=sr_1_12?dchild=1&keywords=poop+pouri&qid=1608753197&sr=8-12",
    selectedGiftName: "",
    selectedGiftImage: "",
    selectedGiftname: "",
    selectedGiftLink: "",
    isUp: false,
  },
  {
    id: 5,
    name: "Alyssa",
    number: "",
    ownGiftImage:
      "https://images-na.ssl-images-amazon.com/images/I/61FEl-0zcUL._AC_SX679_.jpg",
    ownGiftname: "Cast iron KettleBell",
    ownGiftLink:
      "https://smile.amazon.com/AmazonBasics-Cast-Iron-Kettlebell-Pounds/dp/B0731DWW5D/ref=sr_1_1?c=ts&dchild=1&keywords=Strength+Training+Kettlebells&qid=1608749890&rnid=2528832011&rps=1&s=exercise-and-fitness&sr=1-1&ts_id=16385851",
    selectedGiftName: "",
    selectedGiftImage: "",
    selectedGiftname: "",
    selectedGiftLink: "",
    isUp: false,
  },
  {
    id: 6,
    name: "Robbie",
    number: "",
    ownGiftImage:
      "https://images-na.ssl-images-amazon.com/images/I/81n5cbPP3mL._AC_SX522_.jpg",
    ownGiftname: "Potty Putter Toilet Time Golf Game",
    ownGiftLink:
      "https://smile.amazon.com/dp/B000LC65QA/ref=cm_sw_r_sms_api_glc_fabc_w354FbV55TDTY",
    selectedGiftName: "",
    selectedGiftImage: "",
    selectedGiftname: "",
    selectedGiftLink: "",
    isUp: false,
  },
];

export default App;
