import cr from './images/WE21_candiRobbie.jpeg'
import rich from './images/WE21_richard.png'
import mash from './images/WE21_ashley.jpeg'
import rhy from './images/WE21_Rhyan.png'
import alys from './images/WE21_alyssa.png'
import juls from './images/WE21_RebeccaJulian.png'
import ad from './images/WE21_adrian.png'
import rob from './images/WE21_robin.png'
import erin from './images/WE21_Erin.png'
import ella from './images/WE21_ella.png'
import ellish from './images/WE21_elisha.jpeg'
import erica from './images/WE21_erica.JPG'
import giftWrap from './images/giftWrap.jpeg'

export const SAMPLE_GIFTS = [
  {
    id: 1,
    ownerId: 1,
    name: "Cutting Board Thing",
    url:
      "#",
    image:
      cr,
    giftWrap:
      giftWrap,
    currentHolder: null, // name of player
    steals: 0,
  },
  {
    id: 2,
    ownerId: 2,
    name: "Exploding JackBox Party QuadPack",
    url:
      "#",
    image:
      rich,
    giftWrap:
      giftWrap,
    currentHolder: null, // name of player
    steals: 0,
  },
  {
    id: 3,
    ownerId: 3,
    name: "Shoulder Shaking Nekteck Massager 8000",
    url:
      "#",
    image:
      mash,
    giftWrap:
      giftWrap,
    currentHolder: null, // name of player
    steals: 0,
  },
  {
    id: 4,
    ownerId: 4,
    name: "Ultimate Block Slider Board Game (Oversized)",
    url:
      "#",
    image:
      rhy,
    giftWrap:
      giftWrap,
    currentHolder: null, // name of player
    steals: 0,
  },
  {
    id: 5,
    ownerId: 5,
    name: "#1 Pour Over Coffee Maker 7000",
    url:
      "#",
    image:
      alys,
    giftWrap:
      giftWrap,
    currentHolder: null, // name of player
    steals: 0,
  },
  {
    id: 6,
    ownerId: 6,
    name: "Super Deep Tissue Massage Gun X 9000",
    url:
      "#",
    image:
      juls,
    giftWrap:
      giftWrap,
    currentHolder: null, // name of player
    steals: 0,
  },
  {
    id: 7,
    ownerId: 7,
    name: "The Thanos Egg Lamp Speaker Light Audio Torch Flame Bluetooth 8000 ",
    url:
      "#",
    image:
      ad,
    giftWrap:
      giftWrap,
    currentHolder: null, // name of player
    steals: 0,
  },
  {
    id: 8,
    ownerId: 8,
    name: "Ultimate Survivor Pack Bundle Limited Edition - Pack & Bottle ",
    url:
      "#",
    image:
      rob,
    giftWrap:
      giftWrap,
    currentHolder: null, // name of player
    steals: 0,
  },
  {
    id: 9,
    ownerId: 9,
    name: "All-in-One Bamboo Cutting Board",
    url:
      "#",
    image:
      erin,
    giftWrap:
      giftWrap,
    currentHolder: null, // name of player
    steals: 0,
  },
  {
    id: 10,
    ownerId: 10,
    name: "Cabana Party Starter Kit w/Cocktail Cards",
    url:
      "#",
    image:
      ella,
    giftWrap:
      giftWrap,
    currentHolder: null, // name of player
    steals: 0,
  },
  {
    id: 11,
    ownerId: 11,
    name: "Howdy Cowboy Hat w/Precious Gem Belt",
    url:
      "#",
    image:
      ellish,
    giftWrap:
      giftWrap,
    currentHolder: null, // name of player
    steals: 0,
  },
  {
    id: 12,
    ownerId: 12,
    name: "Willy Wonka Magic Cotton Candy Maker 5000",
    url:
      "#",
    image:
      erica,
    giftWrap:
      giftWrap,
    currentHolder: null, // name of player
    steals: 0,
  },
];

export const PLAYERS = [
  {
    id: 1,
    name: "Randi (Candi & Robbie)",
    number: "",
    ownGiftId: 1, // id of gift
    currentGift: null, // id of gift
    isUp: false,
  },
  {
    id: 2,
    name: "Richard",
    number: "",
    ownGiftId: 2, // id of gift
    currentGift: null, // id of gift
    isUp: false,
  },
  {
    id: 3,
    name: "Mashley (Ashley & Mark)",
    number: "",
    ownGiftId: 3, // id of gift
    currentGift: null, // id of gift
    isUp: false,
  },
  {
    id: 4,
    name: "Rhyan",
    number: "",
    ownGiftId: 4, // id of gift
    currentGift: null, // id of gift
    isUp: false,
  },
  {
    id: 5,
    name: "Chalyssa (Alyssa & Charles)",
    number: "",
    ownGiftId: 5, // id of gift
    currentGift: null, // id of gift
    isUp: false,
  },
  {
    id: 6,
    name: "Rebulian (Rebecca & Julian",
    number: "",
    ownGiftId: 6, // id of gift
    currentGift: null, // id of gift
    isUp: false,
  },
  {
    id: 7,
    name: "Adrian",
    number: "",
    ownGiftId: 7, // id of gift
    currentGift: null, // id of gift
    isUp: false,
  },
  {
    id: 8,
    name: "BluBin (Robin & Blue)",
    number: "",
    ownGiftId: 8, // id of gift
    currentGift: null, // id of gift
    isUp: false,
  },
  {
    id: 9,
    name: "Erin",
    number: "",
    ownGiftId: 9, // id of gift
    currentGift: null, // id of gift
    isUp: false,
  },
  {
    id: 10,
    name: "Ella",
    number: "",
    ownGiftId: 10, // id of gift
    currentGift: null, // id of gift
    isUp: false,
  },
  {
    id: 11,
    name: "Elisha",
    number: "",
    ownGiftId: 11, // id of gift
    currentGift: null, // id of gift
    isUp: false,
  },
  {
    id: 12,
    name: "Erica",
    number: "",
    ownGiftId: 12, // id of gift
    currentGift: null, // id of gift
    isUp: false,
  },
];
