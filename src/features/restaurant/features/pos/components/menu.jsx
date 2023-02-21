import { useSelector } from "react-redux";
import { selectMenuItems } from "../../../slice";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiArrowLeftCircle } from "react-icons/fi";

export default function Menu({ order }) {
  const [searchString, setSearchString] = useState("");
  const menuItem = useSelector(selectMenuItems);
  function submitSearchString() {
    console.log(`Search for "${searchString}"`);
  }
  function addItemToOrder() {
    console.log("add item to order");
  }
  return (
    <>
      <div className="p-2 flex justify-between items-center border rounded">
        <input
          type="text"
          value={searchString}
          onChange={function (e) {
            console.log(e.target.value);
            setSearchString(e.target.value);
          }}
          onKeyUp={(e) => e.key === "Enter" && submitSearchString()}
          placeholder="Type item name"
          className="w-10 grow focus:outline-none"
        />
        <button onClick={submitSearchString} className="w-5 shrink-0">
          <BiSearch className="text-lg" />
        </button>
      </div>
      <div className="p-1.5 mx-auto flex flex-wrap border rounded overflow-y-auto">
        <button className="w-28 pl-2 text-start bg-colors-primary-light text-colors-primary font-bold hover:text-colors-white rounded hover:bg-colors-primary-dark">
          <FiArrowLeftCircle className="inline text-2xl mr-2" />
          <span>Go Back</span>
        </button>
        {
          // [
          //   {
          //     name: "Scratchthroat",
          //     price: 160,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Schweinitz's Sunflower",
          //     price: 250,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Lechuguilla",
          //     price: 262,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Castor Aralia",
          //     price: 569,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Forked Nailwort",
          //     price: 270,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Desert Evening Primrose",
          //     price: 479,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Psorinia",
          //     price: 651,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Metcalf Canyon Jewelflower",
          //     price: 177,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Hawai'i Bog Orchid",
          //     price: 491,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Hairy Pagoda-plant",
          //     price: 392,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Staggerweed",
          //     price: 257,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Wright's Viburnum",
          //     price: 347,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Bolander's Mock Dandelion",
          //     price: 581,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Oahu Phyllostegia",
          //     price: 589,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Small Matweed",
          //     price: 530,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Silver-leaf Ironbark",
          //     price: 64,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Ditrichum Moss",
          //     price: 51,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Hawkweed",
          //     price: 104,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Peebles' Bluestar",
          //     price: 421,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Honewort",
          //     price: 150,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Narrowleaf Willow",
          //     price: 151,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Glorytree",
          //     price: 448,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Bartram's Airplant",
          //     price: 313,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "False Toadflax",
          //     price: 594,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "San Diego Needlegrass",
          //     price: 320,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Spring Fumewort",
          //     price: 383,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Western Spruce Dwarf Mistletoe",
          //     price: 129,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Parry's Blue Eyed Mary",
          //     price: 78,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Porter's Fringed Sedge",
          //     price: 270,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Florida Burhead",
          //     price: 680,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Pygmyflower Rockjasmine",
          //     price: 64,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Serkkom",
          //     price: 470,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Glomerate Sedge",
          //     price: 144,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Five-needle Pine",
          //     price: 564,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Threeblossom Lidflower",
          //     price: 635,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Jacobi's Schiedea",
          //     price: 116,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Lycoris",
          //     price: 234,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Shaggy Fleabane",
          //     price: 415,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Liverleaf Wintergreen",
          //     price: 345,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Magrath's Bulrush",
          //     price: 99,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Teta Prieta",
          //     price: 83,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Eggers' Crabgrass",
          //     price: 656,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Pinewoods Lousewort",
          //     price: 323,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Pacific Silver Fir",
          //     price: 493,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Cascarilla",
          //     price: 383,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Juan Tomas",
          //     price: 357,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Davis' Milkweed",
          //     price: 324,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Viper's Bowstring Hemp",
          //     price: 150,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Hedgemustard",
          //     price: 629,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Wideleaf Indian Paintbrush",
          //     price: 379,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Redstem Springbeauty",
          //     price: 222,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Lodgepole Pine",
          //     price: 452,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Caribbean Milkweed",
          //     price: 647,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Maid Marian",
          //     price: 227,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Tulare Gooseberry",
          //     price: 434,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Trailing St. Johnswort",
          //     price: 465,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Howell's Buckwheat",
          //     price: 175,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Nakedwood",
          //     price: 566,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Carey's Balsamroot",
          //     price: 382,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Point Reyes Bentgrass",
          //     price: 349,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Tropical Nutrush",
          //     price: 238,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Hairyleaf Bristlegrass",
          //     price: 546,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Woollygrass",
          //     price: 155,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "California Yampah",
          //     price: 77,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Sulphur Sedge",
          //     price: 476,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Needle Spikerush",
          //     price: 298,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Rough Coneflower",
          //     price: 453,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Tiger Grass",
          //     price: 619,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Silver Lupine",
          //     price: 118,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Hybrid Rose",
          //     price: 625,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Sedge",
          //     price: 93,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Lori's Columbine",
          //     price: 486,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Longdisk Sneezeweed",
          //     price: 229,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Bejuco De Masa",
          //     price: 651,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Lesser Hawkbit",
          //     price: 414,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Black Booyong",
          //     price: 82,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Rape",
          //     price: 621,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Delicious Raspberry",
          //     price: 153,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Adder's-mouth Orchid",
          //     price: 85,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Bog Stenogyne",
          //     price: 398,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Black Horehound",
          //     price: 520,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "European Chestnut",
          //     price: 478,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Quillwort",
          //     price: 358,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Plains Onion",
          //     price: 502,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Berlandier's Wolfberry",
          //     price: 690,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Kona Cheesewood",
          //     price: 510,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Earth Lichen",
          //     price: 478,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Spleenwort",
          //     price: 342,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Pleuroziopsis Moss",
          //     price: 562,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Saffron-flowered Lupine",
          //     price: 445,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Nevada Pea",
          //     price: 613,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "African Fodder Cane",
          //     price: 594,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Pringle's Clustervine",
          //     price: 601,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Parlor Palm",
          //     price: 408,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Crupina",
          //     price: 259,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Nightblooming False Bindweed",
          //     price: 691,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Lithospermum",
          //     price: 539,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Michaux's Croton",
          //     price: 82,
          //     accompaniment: false,
          //   },
          //   {
          //     name: "Indian Banyan",
          //     price: 620,
          //     accompaniment: true,
          //   },
          //   {
          //     name: "Skunktop",
          //     price: 91,
          //     accompaniment: false,
          //   },
          // ]
          menuItem.map((v) => (
            <button
              key={v["name"]}
              onClick={function () {
                v["accompaniment"]
                  ? console.log("display the model")
                  : addItemToOrder();
              }}
              className="w-28 p-1 m-1 flex flex-col justify-between text-start border border-colors-primary-light rounded hover:text-colors-primary hover:border-colors-primary"
            >
              <div className="font-bold capitalize">{v["name"]}</div>
              <small>
                <div className="mt-2">
                  ksh{" "}
                  <span className="font-light" style={{ fontSize: ".8rem" }}>
                    {v["price"]}
                  </span>
                  /=
                </div>
              </small>
            </button>
          ))
        }
      </div>
    </>
  );
}
