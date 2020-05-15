const pokemon = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45,
      "Weight": 69,
      "Height": 7
    },
    "img_name": require("./images/001.png")
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 62,
      "Defense": 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 60,
      "Weight": 130,
      "Height": 10
    },
    "img_name": require("./images/002.png")
  },
  {
    "id": 3,
    "name": "Venusaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defense": 83,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 80,
      "Weight": 1000,
      "Height": 20
    },
    "img_name": require("./images/003.png")
  },
  {
    "id": 4,
    "name": "Charmander",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 39,
      "Attack": 52,
      "Defense": 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      "Speed": 65,
      "Weight": 85,
      "Height": 6
    },
    "img_name": require("./images/004.png")
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 58,
      "Attack": 64,
      "Defense": 58,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      "Speed": 80,
      "Weight": 190,
      "Height": 11
    },
    "img_name": require("./images/005.png")
  },
  {
    "id": 6,
    "name": "Charizard",
    "type": [
      "Fire",
      "Flying"
    ],
    "base": {
      "HP": 78,
      "Attack": 84,
      "Defense": 78,
      "Sp. Attack": 109,
      "Sp. Defense": 85,
      "Speed": 100,
      "Weight": 905,
      "Height": 17
    },
    "img_name": require("./images/006.png")
  },
  {
    "id": 7,
    "name": "Squirtle",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 44,
      "Attack": 48,
      "Defense": 65,
      "Sp. Attack": 50,
      "Sp. Defense": 64,
      "Speed": 43,
      "Weight": 90,
      "Height": 5
    },
    "img_name": require("./images/007.png")
  },
  {
    "id": 8,
    "name": "Wartortle",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 59,
      "Attack": 63,
      "Defense": 80,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      "Speed": 58,
      "Weight": 225,
      "Height": 10
    },
    "img_name": require("./images/008.png")
  },
  {
    "id": 9,
    "name": "Blastoise",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 79,
      "Attack": 83,
      "Defense": 100,
      "Sp. Attack": 85,
      "Sp. Defense": 105,
      "Speed": 78,
      "Weight": 855,
      "Height": 16
    },
    "img_name": require("./images/009.png")
  },
  {
    "id": 10,
    "name": "Caterpie",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 45,
      "Attack": 30,
      "Defense": 35,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      "Speed": 45,
      "Weight": 29,
      "Height": 3
    },
    "img_name": require("./images/010.png")
  },
  {
    "id": 11,
    "name": "Metapod",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 50,
      "Attack": 20,
      "Defense": 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 30,
      "Weight": 99,
      "Height": 7
    },
    "img_name": require("./images/011.png")
  },
  {
    "id": 12,
    "name": "Butterfree",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 45,
      "Defense": 50,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      "Speed": 70,
      "Weight": 320,
      "Height": 11
    },
    "img_name": require("./images/012.png")
  },
  {
    "id": 13,
    "name": "Weedle",
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 40,
      "Attack": 35,
      "Defense": 30,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      "Speed": 50,
      "Weight": 32,
      "Height": 3
    },
    "img_name": require("./images/013.png")
  },
  {
    "id": 14,
    "name": "Kakuna",
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 25,
      "Defense": 50,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 35,
      "Weight": 100,
      "Height": 6
    },
    "img_name": require("./images/014.png")
  },
  {
    "id": 15,
    "name": "Beedrill",
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 40,
      "Sp. Attack": 45,
      "Sp. Defense": 80,
      "Speed": 75,
      "Weight": 295,
      "Height": 10
    },
    "img_name": require("./images/015.png")
  },
  {
    "id": 16,
    "name": "Pidgey",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 40,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 56,
      "Weight": 18,
      "Height": 3
    },
    "img_name": require("./images/016.png")
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 63,
      "Attack": 60,
      "Defense": 55,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 71,
      "Weight": 300,
      "Height": 11
    },
    "img_name": require("./images/017.png")
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 83,
      "Attack": 80,
      "Defense": 75,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      "Speed": 101,
      "Weight": 395,
      "Height": 15
    },
    "img_name": require("./images/018.png")
  },
  {
    "id": 19,
    "name": "Rattata",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 30,
      "Attack": 56,
      "Defense": 35,
      "Sp. Attack": 25,
      "Sp. Defense": 35,
      "Speed": 72,
      "Weight": 35,
      "Height": 3
    },
    "img_name": require("./images/019.png")
  },
  {
    "id": 20,
    "name": "Raticate",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 55,
      "Attack": 81,
      "Defense": 60,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      "Speed": 97,
      "Weight": 185,
      "Height": 7
    },
    "img_name": require("./images/020.png")
  },
  {
    "id": 21,
    "name": "Spearow",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 60,
      "Defense": 30,
      "Sp. Attack": 31,
      "Sp. Defense": 31,
      "Speed": 70,
      "Weight": 20,
      "Height": 3
    },
    "img_name": require("./images/021.png")
  },
  {
    "id": 22,
    "name": "Fearow",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 65,
      "Sp. Attack": 61,
      "Sp. Defense": 61,
      "Speed": 100,
      "Weight": 380,
      "Height": 12
    },
    "img_name": require("./images/022.png")
  },
  {
    "id": 23,
    "name": "Ekans",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 35,
      "Attack": 60,
      "Defense": 44,
      "Sp. Attack": 40,
      "Sp. Defense": 54,
      "Speed": 55,
      "Weight": 69,
      "Height": 20
    },
    "img_name": require("./images/023.png")
  },
  {
    "id": 24,
    "name": "Arbok",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 95,
      "Defense": 69,
      "Sp. Attack": 65,
      "Sp. Defense": 79,
      "Speed": 80,
      "Weight": 650,
      "Height": 35
    },
    "img_name": require("./images/024.png")
  },
  {
    "id": 25,
    "name": "Pikachu",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 35,
      "Attack": 55,
      "Defense": 40,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 90,
      "Weight": 60,
      "Height": 4
    },
    "img_name": require("./images/025.png")
  },
  {
    "id": 26,
    "name": "Raichu",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 60,
      "Attack": 90,
      "Defense": 55,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      "Speed": 110,
      "Weight": 300,
      "Height": 8
    },
    "img_name": require("./images/026.png")
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 50,
      "Attack": 75,
      "Defense": 85,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      "Speed": 40,
      "Weight": 120,
      "Height": 6
    },
    "img_name": require("./images/027.png")
  },
  {
    "id": 28,
    "name": "Sandslash",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 75,
      "Attack": 100,
      "Defense": 110,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      "Speed": 65,
      "Weight": 295,
      "Height": 10
    },
    "img_name": require("./images/028.png")
  },
  {
    "id": 29,
    "name": "Nidoran♀",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 55,
      "Attack": 47,
      "Defense": 52,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 41,
      "Weight": 70,
      "Height": 4
    },
    "img_name": require("./images/029.png")
  },
  {
    "id": 30,
    "name": "Nidorina",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 70,
      "Attack": 62,
      "Defense": 67,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 56,
      "Weight": 200,
      "Height": 8
    },
    "img_name": require("./images/030.png")
  },
  {
    "id": 31,
    "name": "Nidoqueen",
    "type": [
      "Poison",
      "Ground"
    ],
    "base": {
      "HP": 90,
      "Attack": 92,
      "Defense": 87,
      "Sp. Attack": 75,
      "Sp. Defense": 85,
      "Speed": 76,
      "Weight": 600,
      "Height": 13
    },
    "img_name": require("./images/031.png")
  },
  {
    "id": 32,
    "name": "Nidoran♂",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 46,
      "Attack": 57,
      "Defense": 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 50,
      "Weight": 90,
      "Height": 5
    },
    "img_name": require("./images/032.png")
  },
  {
    "id": 33,
    "name": "Nidorino",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 61,
      "Attack": 72,
      "Defense": 57,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 65,
      "Weight": 195,
      "Height": 9
    },
    "img_name": require("./images/033.png")
  },
  {
    "id": 34,
    "name": "Nidoking",
    "type": [
      "Poison",
      "Ground"
    ],
    "base": {
      "HP": 81,
      "Attack": 102,
      "Defense": 77,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      "Speed": 85,
      "Weight": 620,
      "Height": 14
    },
    "img_name": require("./images/034.png")
  },
  {
    "id": 35,
    "name": "Clefairy",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 70,
      "Attack": 45,
      "Defense": 48,
      "Sp. Attack": 60,
      "Sp. Defense": 65,
      "Speed": 35,
      "Weight": 75,
      "Height": 6
    },
    "img_name": require("./images/035.png")
  },
  {
    "id": 36,
    "name": "Clefable",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 95,
      "Attack": 70,
      "Defense": 73,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      "Speed": 60,
      "Weight": 400,
      "Height": 13
    },
    "img_name": require("./images/036.png")
  },
  {
    "id": 37,
    "name": "Vulpix",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 38,
      "Attack": 41,
      "Defense": 40,
      "Sp. Attack": 50,
      "Sp. Defense": 65,
      "Speed": 65,
      "Weight": 99,
      "Height": 6
    },
    "img_name": require("./images/037.png")
  },
  {
    "id": 38,
    "name": "Ninetales",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 73,
      "Attack": 76,
      "Defense": 75,
      "Sp. Attack": 81,
      "Sp. Defense": 100,
      "Speed": 100,
      "Weight": 199,
      "Height": 11
    },
    "img_name": require("./images/038.png")
  },
  {
    "id": 39,
    "name": "Jigglypuff",
    "type": [
      "Normal",
      "Fairy"
    ],
    "base": {
      "HP": 115,
      "Attack": 45,
      "Defense": 20,
      "Sp. Attack": 45,
      "Sp. Defense": 25,
      "Speed": 20,
      "Weight": 55,
      "Height": 5
    },
    "img_name": require("./images/039.png")
  },
  {
    "id": 40,
    "name": "Wigglytuff",
    "type": [
      "Normal",
      "Fairy"
    ],
    "base": {
      "HP": 140,
      "Attack": 70,
      "Defense": 45,
      "Sp. Attack": 85,
      "Sp. Defense": 50,
      "Speed": 45,
      "Weight": 120,
      "Height": 10
    },
    "img_name": require("./images/040.png")
  },
  {
    "id": 41,
    "name": "Zubat",
    "type": [
      "Poison",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 35,
      "Sp. Attack": 30,
      "Sp. Defense": 40,
      "Speed": 55,
      "Weight": 75,
      "Height": 8
    },
    "img_name": require("./images/041.png")
  },
  {
    "id": 42,
    "name": "Golbat",
    "type": [
      "Poison",
      "Flying"
    ],
    "base": {
      "HP": 75,
      "Attack": 80,
      "Defense": 70,
      "Sp. Attack": 65,
      "Sp. Defense": 75,
      "Speed": 90,
      "Weight": 550,
      "Height": 16
    },
    "img_name": require("./images/042.png")
  },
  {
    "id": 43,
    "name": "Oddish",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 50,
      "Defense": 55,
      "Sp. Attack": 75,
      "Sp. Defense": 65,
      "Speed": 30,
      "Weight": 54,
      "Height": 5
    },
    "img_name": require("./images/043.png")
  },
  {
    "id": 44,
    "name": "Gloom",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 65,
      "Defense": 70,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      "Speed": 40,
      "Weight": 86,
      "Height": 8
    },
    "img_name": require("./images/044.png")
  },
  {
    "id": 45,
    "name": "Vileplume",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 75,
      "Attack": 80,
      "Defense": 85,
      "Sp. Attack": 110,
      "Sp. Defense": 90,
      "Speed": 50,
      "Weight": 186,
      "Height": 12
    },
    "img_name": require("./images/045.png")
  },
  {
    "id": 46,
    "name": "Paras",
    "type": [
      "Bug",
      "Grass"
    ],
    "base": {
      "HP": 35,
      "Attack": 70,
      "Defense": 55,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      "Speed": 25,
      "Weight": 54,
      "Height": 3
    },
    "img_name": require("./images/046.png")
  },
  {
    "id": 47,
    "name": "Parasect",
    "type": [
      "Bug",
      "Grass"
    ],
    "base": {
      "HP": 60,
      "Attack": 95,
      "Defense": 80,
      "Sp. Attack": 60,
      "Sp. Defense": 80,
      "Speed": 30,
      "Weight": 295,
      "Height": 10
    },
    "img_name": require("./images/047.png")
  },
  {
    "id": 48,
    "name": "Venonat",
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 55,
      "Defense": 50,
      "Sp. Attack": 40,
      "Sp. Defense": 55,
      "Speed": 45,
      "Weight": 300,
      "Height": 10
    },
    "img_name": require("./images/048.png")
  },
  {
    "id": 49,
    "name": "Venomoth",
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 70,
      "Attack": 65,
      "Defense": 60,
      "Sp. Attack": 90,
      "Sp. Defense": 75,
      "Speed": 90,
      "Weight": 125,
      "Height": 15
    },
    "img_name": require("./images/049.png")
  },
  {
    "id": 50,
    "name": "Diglett",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 10,
      "Attack": 55,
      "Defense": 25,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      "Speed": 95,
      "Weight": 8,
      "Height": 2
    },
    "img_name": require("./images/050.png")
  },
  {
    "id": 51,
    "name": "Dugtrio",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 35,
      "Attack": 100,
      "Defense": 50,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      "Speed": 120,
      "Weight": 333,
      "Height": 7
    },
    "img_name": require("./images/051.png")
  },
  {
    "id": 52,
    "name": "Meowth",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 35,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 90,
      "Weight": 42,
      "Height": 4
    },
    "img_name": require("./images/052.png")
  },
  {
    "id": 53,
    "name": "Persian",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 65,
      "Attack": 70,
      "Defense": 60,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 115,
      "Weight": 320,
      "Height": 10
    },
    "img_name": require("./images/053.png")
  },
  {
    "id": 54,
    "name": "Psyduck",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 50,
      "Attack": 52,
      "Defense": 48,
      "Sp. Attack": 65,
      "Sp. Defense": 50,
      "Speed": 55,
      "Weight": 196,
      "Height": 8
    },
    "img_name": require("./images/054.png")
  },
  {
    "id": 55,
    "name": "Golduck",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defense": 78,
      "Sp. Attack": 95,
      "Sp. Defense": 80,
      "Speed": 85,
      "Weight": 766,
      "Height": 17
    },
    "img_name": require("./images/055.png")
  },
  {
    "id": 56,
    "name": "Mankey",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 40,
      "Attack": 80,
      "Defense": 35,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      "Speed": 70,
      "Weight": 280,
      "Height": 5
    },
    "img_name": require("./images/056.png")
  },
  {
    "id": 57,
    "name": "Primeape",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 65,
      "Attack": 105,
      "Defense": 60,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      "Speed": 95,
      "Weight": 320,
      "Height": 10
    },
    "img_name": require("./images/057.png")
  },
  {
    "id": 58,
    "name": "Growlithe",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 55,
      "Attack": 70,
      "Defense": 45,
      "Sp. Attack": 70,
      "Sp. Defense": 50,
      "Speed": 60,
      "Weight": 190,
      "Height": 7
    },
    "img_name": require("./images/058.png")
  },
  {
    "id": 59,
    "name": "Arcanine",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 90,
      "Attack": 110,
      "Defense": 80,
      "Sp. Attack": 100,
      "Sp. Defense": 80,
      "Speed": 95,
      "Weight": 1550,
      "Height": 19
    },
    "img_name": require("./images/059.png")
  },
  {
    "id": 60,
    "name": "Poliwag",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 40,
      "Attack": 50,
      "Defense": 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 90,
      "Weight": 124,
      "Height": 6
    },
    "img_name": require("./images/060.png")
  },
  {
    "id": 61,
    "name": "Poliwhirl",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 65,
      "Attack": 65,
      "Defense": 65,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 90,
      "Weight": 200,
      "Height": 10
    },
    "img_name": require("./images/061.png")
  },
  {
    "id": 62,
    "name": "Poliwrath",
    "type": [
      "Water",
      "Fighting"
    ],
    "base": {
      "HP": 90,
      "Attack": 95,
      "Defense": 95,
      "Sp. Attack": 70,
      "Sp. Defense": 90,
      "Speed": 70,
      "Weight": 540,
      "Height": 13
    },
    "img_name": require("./images/062.png")
  },
  {
    "id": 63,
    "name": "Abra",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 25,
      "Attack": 20,
      "Defense": 15,
      "Sp. Attack": 105,
      "Sp. Defense": 55,
      "Speed": 90,
      "Weight": 195,
      "Height": 9
    },
    "img_name": require("./images/063.png")
  },
  {
    "id": 64,
    "name": "Kadabra",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 40,
      "Attack": 35,
      "Defense": 30,
      "Sp. Attack": 120,
      "Sp. Defense": 70,
      "Speed": 105,
      "Weight": 565,
      "Height": 13
    },
    "img_name": require("./images/064.png")
  },
  {
    "id": 65,
    "name": "Alakazam",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 55,
      "Attack": 50,
      "Defense": 45,
      "Sp. Attack": 135,
      "Sp. Defense": 95,
      "Speed": 120,
      "Weight": 480,
      "Height": 15
    },
    "img_name": require("./images/065.png")
  },
  {
    "id": 66,
    "name": "Machop",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 70,
      "Attack": 80,
      "Defense": 50,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 35,
      "Weight": 195,
      "Height": 8
    },
    "img_name": require("./images/066.png")
  },
  {
    "id": 67,
    "name": "Machoke",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 80,
      "Attack": 100,
      "Defense": 70,
      "Sp. Attack": 50,
      "Sp. Defense": 60,
      "Speed": 45,
      "Weight": 705,
      "Height": 15
    },
    "img_name": require("./images/067.png")
  },
  {
    "id": 68,
    "name": "Machamp",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 90,
      "Attack": 130,
      "Defense": 80,
      "Sp. Attack": 65,
      "Sp. Defense": 85,
      "Speed": 55,
      "Weight": 1300,
      "Height": 16
    },
    "img_name": require("./images/068.png")
  },
  {
    "id": 69,
    "name": "Bellsprout",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 50,
      "Attack": 75,
      "Defense": 35,
      "Sp. Attack": 70,
      "Sp. Defense": 30,
      "Speed": 40,
      "Weight": 40,
      "Height": 7
    },
    "img_name": require("./images/069.png")
  },
  {
    "id": 70,
    "name": "Weepinbell",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 50,
      "Sp. Attack": 85,
      "Sp. Defense": 45,
      "Speed": 55,
      "Weight": 64,
      "Height": 10
    },
    "img_name": require("./images/070.png")
  },
  {
    "id": 71,
    "name": "Victreebel",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 105,
      "Defense": 65,
      "Sp. Attack": 100,
      "Sp. Defense": 70,
      "Speed": 70,
      "Weight": 155,
      "Height": 17
    },
    "img_name": require("./images/071.png")
  },
  {
    "id": 72,
    "name": "Tentacool",
    "type": [
      "Water",
      "Poison"
    ],
    "base": {
      "HP": 40,
      "Attack": 40,
      "Defense": 35,
      "Sp. Attack": 50,
      "Sp. Defense": 100,
      "Speed": 70,
      "Weight": 455,
      "Height": 9
    },
    "img_name": require("./images/072.png")
  },
  {
    "id": 73,
    "name": "Tentacruel",
    "type": [
      "Water",
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 70,
      "Defense": 65,
      "Sp. Attack": 80,
      "Sp. Defense": 120,
      "Speed": 100,
      "Weight": 550,
      "Height": 16
    },
    "img_name": require("./images/073.png")
  },
  {
    "id": 74,
    "name": "Geodude",
    "type": [
      "Rock",
      "Ground"
    ],
    "base": {
      "HP": 40,
      "Attack": 80,
      "Defense": 100,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 20,
      "Weight": 200,
      "Height": 4
    },
    "img_name": require("./images/074.png")
  },
  {
    "id": 75,
    "name": "Graveler",
    "type": [
      "Rock",
      "Ground"
    ],
    "base": {
      "HP": 55,
      "Attack": 95,
      "Defense": 115,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      "Speed": 35,
      "Weight": 1050,
      "Height": 10
    },
    "img_name": require("./images/075.png")
  },
  {
    "id": 76,
    "name": "Golem",
    "type": [
      "Rock",
      "Ground"
    ],
    "base": {
      "HP": 80,
      "Attack": 120,
      "Defense": 130,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      "Speed": 45,
      "Weight": 3000,
      "Height": 14
    },
    "img_name": require("./images/076.png")
  },
  {
    "id": 77,
    "name": "Ponyta",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 50,
      "Attack": 85,
      "Defense": 55,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 90,
      "Weight": 300,
      "Height": 10
    },
    "img_name": require("./images/077.png")
  },
  {
    "id": 78,
    "name": "Rapidash",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 65,
      "Attack": 100,
      "Defense": 70,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 105,
      "Weight": 950,
      "Height": 17
    },
    "img_name": require("./images/078.png")
  },
  {
    "id": 79,
    "name": "Slowpoke",
    "type": [
      "Water",
      "Psychic"
    ],
    "base": {
      "HP": 90,
      "Attack": 65,
      "Defense": 65,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 15,
      "Weight": 360,
      "Height": 12
    },
    "img_name": require("./images/079.png")
  },
  {
    "id": 80,
    "name": "Slowbro",
    "type": [
      "Water",
      "Psychic"
    ],
    "base": {
      "HP": 95,
      "Attack": 75,
      "Defense": 110,
      "Sp. Attack": 100,
      "Sp. Defense": 80,
      "Speed": 30,
      "Weight": 785,
      "Height": 16
    },
    "img_name": require("./images/080.png")
  },
  {
    "id": 81,
    "name": "Magnemite",
    "type": [
      "Electric",
      "Steel"
    ],
    "base": {
      "HP": 25,
      "Attack": 35,
      "Defense": 70,
      "Sp. Attack": 95,
      "Sp. Defense": 55,
      "Speed": 45,
      "Weight": 60,
      "Height": 3
    },
    "img_name": require("./images/081.png")
  },
  {
    "id": 82,
    "name": "Magneton",
    "type": [
      "Electric",
      "Steel"
    ],
    "base": {
      "HP": 50,
      "Attack": 60,
      "Defense": 95,
      "Sp. Attack": 120,
      "Sp. Defense": 70,
      "Speed": 70,
      "Weight": 600,
      "Height": 10
    },
    "img_name": require("./images/082.png")
  },
  {
    "id": 83,
    "name": "Farfetch'd",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 52,
      "Attack": 90,
      "Defense": 55,
      "Sp. Attack": 58,
      "Sp. Defense": 62,
      "Speed": 60,
      "Weight": 150,
      "Height": 8
    },
    "img_name": require("./images/083.png")
  },
  {
    "id": 84,
    "name": "Doduo",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 35,
      "Attack": 85,
      "Defense": 45,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 75,
      "Weight": 392,
      "Height": 14
    },
    "img_name": require("./images/084.png")
  },
  {
    "id": 85,
    "name": "Dodrio",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 110,
      "Defense": 70,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 110,
      "Weight": 852,
      "Height": 18
    },
    "img_name": require("./images/085.png")
  },
  {
    "id": 86,
    "name": "Seel",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 65,
      "Attack": 45,
      "Defense": 55,
      "Sp. Attack": 45,
      "Sp. Defense": 70,
      "Speed": 45,
      "Weight": 900,
      "Height": 11
    },
    "img_name": require("./images/086.png")
  },
  {
    "id": 87,
    "name": "Dewgong",
    "type": [
      "Water",
      "Ice"
    ],
    "base": {
      "HP": 90,
      "Attack": 70,
      "Defense": 80,
      "Sp. Attack": 70,
      "Sp. Defense": 95,
      "Speed": 70,
      "Weight": 1200,
      "Height": 17
    },
    "img_name": require("./images/087.png")
  },
  {
    "id": 88,
    "name": "Grimer",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 80,
      "Defense": 50,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      "Speed": 25,
      "Weight": 300,
      "Height": 9
    },
    "img_name": require("./images/088.png")
  },
  {
    "id": 89,
    "name": "Muk",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 105,
      "Attack": 105,
      "Defense": 75,
      "Sp. Attack": 65,
      "Sp. Defense": 100,
      "Speed": 50,
      "Weight": 300,
      "Height": 12
    },
    "img_name": require("./images/089.png")
  },
  {
    "id": 90,
    "name": "Shellder",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 65,
      "Defense": 100,
      "Sp. Attack": 45,
      "Sp. Defense": 25,
      "Speed": 40,
      "Weight": 40,
      "Height": 3
    },
    "img_name": require("./images/090.png")
  },
  {
    "id": 91,
    "name": "Cloyster",
    "type": [
      "Water",
      "Ice"
    ],
    "base": {
      "HP": 50,
      "Attack": 95,
      "Defense": 180,
      "Sp. Attack": 85,
      "Sp. Defense": 45,
      "Speed": 70,
      "Weight": 1325,
      "Height": 15
    },
    "img_name": require("./images/091.png")
  },
  {
    "id": 92,
    "name": "Gastly",
    "type": [
      "Ghost",
      "Poison"
    ],
    "base": {
      "HP": 30,
      "Attack": 35,
      "Defense": 30,
      "Sp. Attack": 100,
      "Sp. Defense": 35,
      "Speed": 80,
      "Weight": 1,
      "Height": 13
    },
    "img_name": require("./images/092.png")
  },
  {
    "id": 93,
    "name": "Haunter",
    "type": [
      "Ghost",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 50,
      "Defense": 45,
      "Sp. Attack": 115,
      "Sp. Defense": 55,
      "Speed": 95,
      "Weight": 1,
      "Height": 16
    },
    "img_name": require("./images/093.png")
  },
  {
    "id": 94,
    "name": "Gengar",
    "type": [
      "Ghost",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 65,
      "Defense": 60,
      "Sp. Attack": 130,
      "Sp. Defense": 75,
      "Speed": 110,
      "Weight": 405,
      "Height": 15
    },
    "img_name": require("./images/094.png")
  },
  {
    "id": 95,
    "name": "Onix",
    "type": [
      "Rock",
      "Ground"
    ],
    "base": {
      "HP": 35,
      "Attack": 45,
      "Defense": 160,
      "Sp. Attack": 30,
      "Sp. Defense": 45,
      "Speed": 70,
      "Weight": 2100,
      "Height": 88
    },
    "img_name": require("./images/095.png")
  },
  {
    "id": 96,
    "name": "Drowzee",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 48,
      "Defense": 45,
      "Sp. Attack": 43,
      "Sp. Defense": 90,
      "Speed": 42,
      "Weight": 324,
      "Height": 10
    },
    "img_name": require("./images/096.png")
  },
  {
    "id": 97,
    "name": "Hypno",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 85,
      "Attack": 73,
      "Defense": 70,
      "Sp. Attack": 73,
      "Sp. Defense": 115,
      "Speed": 67,
      "Weight": 756,
      "Height": 16
    },
    "img_name": require("./images/097.png")
  },
  {
    "id": 98,
    "name": "Krabby",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 105,
      "Defense": 90,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 50,
      "Weight": 65,
      "Height": 4
    },
    "img_name": require("./images/098.png")
  },
  {
    "id": 99,
    "name": "Kingler",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 55,
      "Attack": 130,
      "Defense": 115,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 75,
      "Weight": 600,
      "Height": 13
    },
    "img_name": require("./images/099.png")
  },
  {
    "id": 100,
    "name": "Voltorb",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 50,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 100,
      "Weight": 104,
      "Height": 5
    },
    "img_name": require("./images/100.png")
  },
  {
    "id": 101,
    "name": "Electrode",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 70,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 150,
      "Weight": 666,
      "Height": 12
    },
    "img_name": require("./images/101.png")
  },
  {
    "id": 102,
    "name": "Exeggcute",
    "type": [
      "Grass",
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 40,
      "Defense": 80,
      "Sp. Attack": 60,
      "Sp. Defense": 45,
      "Speed": 40,
      "Weight": 25,
      "Height": 4
    },
    "img_name": require("./images/102.png")
  },
  {
    "id": 103,
    "name": "Exeggutor",
    "type": [
      "Grass",
      "Psychic"
    ],
    "base": {
      "HP": 95,
      "Attack": 95,
      "Defense": 85,
      "Sp. Attack": 125,
      "Sp. Defense": 75,
      "Speed": 55,
      "Weight": 1200,
      "Height": 20
    },
    "img_name": require("./images/103.png")
  },
  {
    "id": 104,
    "name": "Cubone",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 50,
      "Attack": 50,
      "Defense": 95,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      "Speed": 35,
      "Weight": 65,
      "Height": 4
    },
    "img_name": require("./images/104.png")
  },
  {
    "id": 105,
    "name": "Marowak",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 60,
      "Attack": 80,
      "Defense": 110,
      "Sp. Attack": 50,
      "Sp. Defense": 80,
      "Speed": 45,
      "Weight": 450,
      "Height": 10
    },
    "img_name": require("./images/105.png")
  },
  {
    "id": 106,
    "name": "Hitmonlee",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 50,
      "Attack": 120,
      "Defense": 53,
      "Sp. Attack": 35,
      "Sp. Defense": 110,
      "Speed": 87,
      "Weight": 498,
      "Height": 15
    },
    "img_name": require("./images/106.png")
  },
  {
    "id": 107,
    "name": "Hitmonchan",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 50,
      "Attack": 105,
      "Defense": 79,
      "Sp. Attack": 35,
      "Sp. Defense": 110,
      "Speed": 76,
      "Weight": 502,
      "Height": 14
    },
    "img_name": require("./images/107.png")
  },
  {
    "id": 108,
    "name": "Lickitung",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 90,
      "Attack": 55,
      "Defense": 75,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      "Speed": 30,
      "Weight": 655,
      "Height": 12
    },
    "img_name": require("./images/108.png")
  },
  {
    "id": 109,
    "name": "Koffing",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 40,
      "Attack": 65,
      "Defense": 95,
      "Sp. Attack": 60,
      "Sp. Defense": 45,
      "Speed": 35,
      "Weight": 10,
      "Height": 6
    },
    "img_name": require("./images/109.png")
  },
  {
    "id": 110,
    "name": "Weezing",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 120,
      "Sp. Attack": 85,
      "Sp. Defense": 70,
      "Speed": 60,
      "Weight": 95,
      "Height": 12
    },
    "img_name": require("./images/110.png")
  },
  {
    "id": 111,
    "name": "Rhyhorn",
    "type": [
      "Ground",
      "Rock"
    ],
    "base": {
      "HP": 80,
      "Attack": 85,
      "Defense": 95,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 25,
      "Weight": 1150,
      "Height": 10
    },
    "img_name": require("./images/111.png")
  },
  {
    "id": 112,
    "name": "Rhydon",
    "type": [
      "Ground",
      "Rock"
    ],
    "base": {
      "HP": 105,
      "Attack": 130,
      "Defense": 120,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      "Speed": 40,
      "Weight": 1200,
      "Height": 19
    },
    "img_name": require("./images/112.png")
  },
  {
    "id": 113,
    "name": "Chansey",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 250,
      "Attack": 5,
      "Defense": 5,
      "Sp. Attack": 35,
      "Sp. Defense": 105,
      "Speed": 50,
      "Weight": 346,
      "Height": 11
    },
    "img_name": require("./images/113.png")
  },
  {
    "id": 114,
    "name": "Tangela",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 65,
      "Attack": 55,
      "Defense": 115,
      "Sp. Attack": 100,
      "Sp. Defense": 40,
      "Speed": 60,
      "Weight": 350,
      "Height": 10
    },
    "img_name": require("./images/114.png")
  },
  {
    "id": 115,
    "name": "Kangaskhan",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 105,
      "Attack": 95,
      "Defense": 80,
      "Sp. Attack": 40,
      "Sp. Defense": 80,
      "Speed": 90,
      "Weight": 800,
      "Height": 22
    },
    "img_name": require("./images/115.png")
  },
  {
    "id": 116,
    "name": "Horsea",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 40,
      "Defense": 70,
      "Sp. Attack": 70,
      "Sp. Defense": 25,
      "Speed": 60,
      "Weight": 80,
      "Height": 4
    },
    "img_name": require("./images/116.png")
  },
  {
    "id": 117,
    "name": "Seadra",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 55,
      "Attack": 65,
      "Defense": 95,
      "Sp. Attack": 95,
      "Sp. Defense": 45,
      "Speed": 85,
      "Weight": 250,
      "Height": 12
    },
    "img_name": require("./images/117.png")
  },
  {
    "id": 118,
    "name": "Goldeen",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 45,
      "Attack": 67,
      "Defense": 60,
      "Sp. Attack": 35,
      "Sp. Defense": 50,
      "Speed": 63,
      "Weight": 150,
      "Height": 6
    },
    "img_name": require("./images/118.png")
  },
  {
    "id": 119,
    "name": "Seaking",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 80,
      "Attack": 92,
      "Defense": 65,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      "Speed": 68,
      "Weight": 390,
      "Height": 13
    },
    "img_name": require("./images/119.png")
  },
  {
    "id": 120,
    "name": "Staryu",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 45,
      "Defense": 55,
      "Sp. Attack": 70,
      "Sp. Defense": 55,
      "Speed": 85,
      "Weight": 345,
      "Height": 8
    },
    "img_name": require("./images/120.png")
  },
  {
    "id": 121,
    "name": "Starmie",
    "type": [
      "Water",
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 75,
      "Defense": 85,
      "Sp. Attack": 100,
      "Sp. Defense": 85,
      "Speed": 115,
      "Weight": 800,
      "Height": 11
    },
    "img_name": require("./images/121.png")
  },
  {
    "id": 122,
    "name": "Mr. Mime",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 65,
      "Sp. Attack": 100,
      "Sp. Defense": 120,
      "Speed": 90,
      "Weight": 545,
      "Height": 13
    },
    "img_name": require("./images/122.png")
  },
  {
    "id": 123,
    "name": "Scyther",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 70,
      "Attack": 110,
      "Defense": 80,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      "Speed": 105,
      "Weight": 560,
      "Height": 15
    },
    "img_name": require("./images/123.png")
  },
  {
    "id": 124,
    "name": "Jynx",
    "type": [
      "Ice",
      "Psychic"
    ],
    "base": {
      "HP": 65,
      "Attack": 50,
      "Defense": 35,
      "Sp. Attack": 115,
      "Sp. Defense": 95,
      "Speed": 95,
      "Weight": 406,
      "Height": 14
    },
    "img_name": require("./images/124.png")
  },
  {
    "id": 125,
    "name": "Electabuzz",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 65,
      "Attack": 83,
      "Defense": 57,
      "Sp. Attack": 95,
      "Sp. Defense": 85,
      "Speed": 105,
      "Weight": 300,
      "Height": 11
    },
    "img_name": require("./images/125.png")
  },
  {
    "id": 126,
    "name": "Magmar",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 65,
      "Attack": 95,
      "Defense": 57,
      "Sp. Attack": 100,
      "Sp. Defense": 85,
      "Speed": 93,
      "Weight": 445,
      "Height": 13
    },
    "img_name": require("./images/126.png")
  },
  {
    "id": 127,
    "name": "Pinsir",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 65,
      "Attack": 125,
      "Defense": 100,
      "Sp. Attack": 55,
      "Sp. Defense": 70,
      "Speed": 85,
      "Weight": 550,
      "Height": 15
    },
    "img_name": require("./images/127.png")
  },
  {
    "id": 128,
    "name": "Tauros",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 75,
      "Attack": 100,
      "Defense": 95,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      "Speed": 110,
      "Weight": 884,
      "Height": 14
    },
    "img_name": require("./images/128.png")
  },
  {
    "id": 129,
    "name": "Magikarp",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 20,
      "Attack": 10,
      "Defense": 55,
      "Sp. Attack": 15,
      "Sp. Defense": 20,
      "Speed": 80,
      "Weight": 100,
      "Height": 9
    },
    "img_name": require("./images/129.png")
  },
  {
    "id": 130,
    "name": "Gyarados",
    "type": [
      "Water",
      "Flying"
    ],
    "base": {
      "HP": 95,
      "Attack": 125,
      "Defense": 79,
      "Sp. Attack": 60,
      "Sp. Defense": 100,
      "Speed": 81,
      "Weight": 2350,
      "Height": 65
    },
    "img_name": require("./images/130.png")
  },
  {
    "id": 131,
    "name": "Lapras",
    "type": [
      "Water",
      "Ice"
    ],
    "base": {
      "HP": 130,
      "Attack": 85,
      "Defense": 80,
      "Sp. Attack": 85,
      "Sp. Defense": 95,
      "Speed": 60,
      "Weight": 2200,
      "Height": 25
    },
    "img_name": require("./images/131.png")
  },
  {
    "id": 132,
    "name": "Ditto",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 48,
      "Attack": 48,
      "Defense": 48,
      "Sp. Attack": 48,
      "Sp. Defense": 48,
      "Speed": 48,
      "Weight": 40,
      "Height": 3
    },
    "img_name": require("./images/132.png")
  },
  {
    "id": 133,
    "name": "Eevee",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 55,
      "Attack": 55,
      "Defense": 50,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      "Speed": 55,
      "Weight": 65,
      "Height": 3
    },
    "img_name": require("./images/133.png")
  },
  {
    "id": 134,
    "name": "Vaporeon",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 130,
      "Attack": 65,
      "Defense": 60,
      "Sp. Attack": 110,
      "Sp. Defense": 95,
      "Speed": 65,
      "Weight": 290,
      "Height": 10
    },
    "img_name": require("./images/134.png")
  },
  {
    "id": 135,
    "name": "Jolteon",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 65,
      "Attack": 65,
      "Defense": 60,
      "Sp. Attack": 110,
      "Sp. Defense": 95,
      "Speed": 130,
      "Weight": 245,
      "Height": 8
    },
    "img_name": require("./images/135.png")
  },
  {
    "id": 136,
    "name": "Flareon",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 65,
      "Attack": 130,
      "Defense": 60,
      "Sp. Attack": 95,
      "Sp. Defense": 110,
      "Speed": 65,
      "Weight": 250,
      "Height": 9
    },
    "img_name": require("./images/136.png")
  },
  {
    "id": 137,
    "name": "Porygon",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 65,
      "Attack": 60,
      "Defense": 70,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      "Speed": 40,
      "Weight": 365,
      "Height": 8
    },
    "img_name": require("./images/137.png")
  },
  {
    "id": 138,
    "name": "Omanyte",
    "type": [
      "Rock",
      "Water"
    ],
    "base": {
      "HP": 35,
      "Attack": 40,
      "Defense": 100,
      "Sp. Attack": 90,
      "Sp. Defense": 55,
      "Speed": 35,
      "Weight": 75,
      "Height": 4
    },
    "img_name": require("./images/138.png")
  },
  {
    "id": 139,
    "name": "Omastar",
    "type": [
      "Rock",
      "Water"
    ],
    "base": {
      "HP": 70,
      "Attack": 60,
      "Defense": 125,
      "Sp. Attack": 115,
      "Sp. Defense": 70,
      "Speed": 55,
      "Weight": 350,
      "Height": 10
    },
    "img_name": require("./images/139.png")
  },
  {
    "id": 140,
    "name": "Kabuto",
    "type": [
      "Rock",
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 80,
      "Defense": 90,
      "Sp. Attack": 55,
      "Sp. Defense": 45,
      "Speed": 55,
      "Weight": 115,
      "Height": 5
    },
    "img_name": require("./images/140.png")
  },
  {
    "id": 141,
    "name": "Kabutops",
    "type": [
      "Rock",
      "Water"
    ],
    "base": {
      "HP": 60,
      "Attack": 115,
      "Defense": 105,
      "Sp. Attack": 65,
      "Sp. Defense": 70,
      "Speed": 80,
      "Weight": 405,
      "Height": 13
    },
    "img_name": require("./images/141.png")
  },
  {
    "id": 142,
    "name": "Aerodactyl",
    "type": [
      "Rock",
      "Flying"
    ],
    "base": {
      "HP": 80,
      "Attack": 105,
      "Defense": 65,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      "Speed": 130,
      "Weight": 590,
      "Height": 18
    },
    "img_name": require("./images/142.png")
  },
  {
    "id": 143,
    "name": "Snorlax",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 160,
      "Attack": 110,
      "Defense": 65,
      "Sp. Attack": 65,
      "Sp. Defense": 110,
      "Speed": 30,
      "Weight": 4600,
      "Height": 21
    },
    "img_name": require("./images/143.png")
  },
  {
    "id": 144,
    "name": "Articuno",
    "type": [
      "Ice",
      "Flying"
    ],
    "base": {
      "HP": 90,
      "Attack": 85,
      "Defense": 100,
      "Sp. Attack": 95,
      "Sp. Defense": 125,
      "Speed": 85,
      "Weight": 554,
      "Height": 17
    },
    "img_name": require("./images/144.png")
  },
  {
    "id": 145,
    "name": "Zapdos",
    "type": [
      "Electric",
      "Flying"
    ],
    "base": {
      "HP": 90,
      "Attack": 90,
      "Defense": 85,
      "Sp. Attack": 125,
      "Sp. Defense": 90,
      "Speed": 100,
      "Weight": 526,
      "Height": 16
    },
    "img_name": require("./images/145.png")
  },
  {
    "id": 146,
    "name": "Moltres",
    "type": [
      "Fire",
      "Flying"
    ],
    "base": {
      "HP": 90,
      "Attack": 100,
      "Defense": 90,
      "Sp. Attack": 125,
      "Sp. Defense": 85,
      "Speed": 90,
      "Weight": 600,
      "Height": 20
    },
    "img_name": require("./images/146.png")
  },
  {
    "id": 147,
    "name": "Dratini",
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 41,
      "Attack": 64,
      "Defense": 45,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 50,
      "Weight": 33,
      "Height": 18
    },
    "img_name": require("./images/147.png")
  },
  {
    "id": 148,
    "name": "Dragonair",
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 61,
      "Attack": 84,
      "Defense": 65,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      "Speed": 70,
      "Weight": 165,
      "Height": 40
    },
    "img_name": require("./images/148.png")
  },
  {
    "id": 149,
    "name": "Dragonite",
    "type": [
      "Dragon",
      "Flying"
    ],
    "base": {
      "HP": 91,
      "Attack": 134,
      "Defense": 95,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 80,
      "Weight": 2100,
      "Height": 22
    },
    "img_name": require("./images/149.png")
  },
  {
    "id": 150,
    "name": "Mewtwo",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 106,
      "Attack": 110,
      "Defense": 90,
      "Sp. Attack": 154,
      "Sp. Defense": 90,
      "Speed": 130,
      "Weight": 1220,
      "Height": 20
    },
    "img_name": require("./images/150.png")
  },
  {
    "id": 151,
    "name": "Mew",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 100,
      "Weight": 40,
      "Height": 4
    },
    "img_name": require("./images/151.png")
  },
  {
    "id": 152,
    "name": "Chikorita",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 65,
      "Sp. Attack": 49,
      "Sp. Defense": 65,
      "Speed": 45,
      "Weight": 64,
      "Height": 9
    },
    "img_name": require("./images/152.png")
  },
  {
    "id": 153,
    "name": "Bayleef",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 60,
      "Attack": 62,
      "Defense": 80,
      "Sp. Attack": 63,
      "Sp. Defense": 80,
      "Speed": 60,
      "Weight": 158,
      "Height": 12
    },
    "img_name": require("./images/153.png")
  },
  {
    "id": 154,
    "name": "Meganium",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defense": 100,
      "Sp. Attack": 83,
      "Sp. Defense": 100,
      "Speed": 80,
      "Weight": 1005,
      "Height": 18
    },
    "img_name": require("./images/154.png")
  },
  {
    "id": 155,
    "name": "Cyndaquil",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 39,
      "Attack": 52,
      "Defense": 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      "Speed": 65,
      "Weight": 79,
      "Height": 5
    },
    "img_name": require("./images/155.png")
  },
  {
    "id": 156,
    "name": "Quilava",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 58,
      "Attack": 64,
      "Defense": 58,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      "Speed": 80,
      "Weight": 190,
      "Height": 9
    },
    "img_name": require("./images/156.png")
  },
  {
    "id": 157,
    "name": "Typhlosion",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 78,
      "Attack": 84,
      "Defense": 78,
      "Sp. Attack": 109,
      "Sp. Defense": 85,
      "Speed": 100,
      "Weight": 795,
      "Height": 17
    },
    "img_name": require("./images/157.png")
  },
  {
    "id": 158,
    "name": "Totodile",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 50,
      "Attack": 65,
      "Defense": 64,
      "Sp. Attack": 44,
      "Sp. Defense": 48,
      "Speed": 43,
      "Weight": 95,
      "Height": 6
    },
    "img_name": require("./images/158.png")
  },
  {
    "id": 159,
    "name": "Croconaw",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 65,
      "Attack": 80,
      "Defense": 80,
      "Sp. Attack": 59,
      "Sp. Defense": 63,
      "Speed": 58,
      "Weight": 250,
      "Height": 11
    },
    "img_name": require("./images/159.png")
  },
  {
    "id": 160,
    "name": "Feraligatr",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 85,
      "Attack": 105,
      "Defense": 100,
      "Sp. Attack": 79,
      "Sp. Defense": 83,
      "Speed": 78,
      "Weight": 888,
      "Height": 23
    },
    "img_name": require("./images/160.png")
  },
  {
    "id": 161,
    "name": "Sentret",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 35,
      "Attack": 46,
      "Defense": 34,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      "Speed": 20,
      "Weight": 60,
      "Height": 8
    },
    "img_name": require("./images/161.png")
  },
  {
    "id": 162,
    "name": "Furret",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 85,
      "Attack": 76,
      "Defense": 64,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      "Speed": 90,
      "Weight": 325,
      "Height": 18
    },
    "img_name": require("./images/162.png")
  },
  {
    "id": 163,
    "name": "Hoothoot",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 30,
      "Defense": 30,
      "Sp. Attack": 36,
      "Sp. Defense": 56,
      "Speed": 50,
      "Weight": 212,
      "Height": 7
    },
    "img_name": require("./images/163.png")
  },
  {
    "id": 164,
    "name": "Noctowl",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 100,
      "Attack": 50,
      "Defense": 50,
      "Sp. Attack": 86,
      "Sp. Defense": 96,
      "Speed": 70,
      "Weight": 408,
      "Height": 16
    },
    "img_name": require("./images/164.png")
  },
  {
    "id": 165,
    "name": "Ledyba",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 20,
      "Defense": 30,
      "Sp. Attack": 40,
      "Sp. Defense": 80,
      "Speed": 55,
      "Weight": 108,
      "Height": 10
    },
    "img_name": require("./images/165.png")
  },
  {
    "id": 166,
    "name": "Ledian",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 55,
      "Attack": 35,
      "Defense": 50,
      "Sp. Attack": 55,
      "Sp. Defense": 110,
      "Speed": 85,
      "Weight": 356,
      "Height": 14
    },
    "img_name": require("./images/166.png")
  },
  {
    "id": 167,
    "name": "Spinarak",
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 40,
      "Attack": 60,
      "Defense": 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 30,
      "Weight": 85,
      "Height": 5
    },
    "img_name": require("./images/167.png")
  },
  {
    "id": 168,
    "name": "Ariados",
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 70,
      "Attack": 90,
      "Defense": 70,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      "Speed": 40,
      "Weight": 335,
      "Height": 11
    },
    "img_name": require("./images/168.png")
  },
  {
    "id": 169,
    "name": "Crobat",
    "type": [
      "Poison",
      "Flying"
    ],
    "base": {
      "HP": 85,
      "Attack": 90,
      "Defense": 80,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      "Speed": 130,
      "Weight": 750,
      "Height": 18
    },
    "img_name": require("./images/169.png")
  },
  {
    "id": 170,
    "name": "Chinchou",
    "type": [
      "Water",
      "Electric"
    ],
    "base": {
      "HP": 75,
      "Attack": 38,
      "Defense": 38,
      "Sp. Attack": 56,
      "Sp. Defense": 56,
      "Speed": 67,
      "Weight": 120,
      "Height": 5
    },
    "img_name": require("./images/170.png")
  },
  {
    "id": 171,
    "name": "Lanturn",
    "type": [
      "Water",
      "Electric"
    ],
    "base": {
      "HP": 125,
      "Attack": 58,
      "Defense": 58,
      "Sp. Attack": 76,
      "Sp. Defense": 76,
      "Speed": 67,
      "Weight": 225,
      "Height": 12
    },
    "img_name": require("./images/171.png")
  },
  {
    "id": 172,
    "name": "Pichu",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 20,
      "Attack": 40,
      "Defense": 15,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 60,
      "Weight": 20,
      "Height": 3
    },
    "img_name": require("./images/172.png")
  },
  {
    "id": 173,
    "name": "Cleffa",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 50,
      "Attack": 25,
      "Defense": 28,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      "Speed": 15,
      "Weight": 30,
      "Height": 3
    },
    "img_name": require("./images/173.png")
  },
  {
    "id": 174,
    "name": "Igglybuff",
    "type": [
      "Normal",
      "Fairy"
    ],
    "base": {
      "HP": 90,
      "Attack": 30,
      "Defense": 15,
      "Sp. Attack": 40,
      "Sp. Defense": 20,
      "Speed": 15,
      "Weight": 10,
      "Height": 3
    },
    "img_name": require("./images/174.png")
  },
  {
    "id": 175,
    "name": "Togepi",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 35,
      "Attack": 20,
      "Defense": 65,
      "Sp. Attack": 40,
      "Sp. Defense": 65,
      "Speed": 20,
      "Weight": 15,
      "Height": 3
    },
    "img_name": require("./images/175.png")
  },
  {
    "id": 176,
    "name": "Togetic",
    "type": [
      "Fairy",
      "Flying"
    ],
    "base": {
      "HP": 55,
      "Attack": 40,
      "Defense": 85,
      "Sp. Attack": 80,
      "Sp. Defense": 105,
      "Speed": 40,
      "Weight": 32,
      "Height": 6
    },
    "img_name": require("./images/176.png")
  },
  {
    "id": 177,
    "name": "Natu",
    "type": [
      "Psychic",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 50,
      "Defense": 45,
      "Sp. Attack": 70,
      "Sp. Defense": 45,
      "Speed": 70,
      "Weight": 20,
      "Height": 2
    },
    "img_name": require("./images/177.png")
  },
  {
    "id": 178,
    "name": "Xatu",
    "type": [
      "Psychic",
      "Flying"
    ],
    "base": {
      "HP": 65,
      "Attack": 75,
      "Defense": 70,
      "Sp. Attack": 95,
      "Sp. Defense": 70,
      "Speed": 95,
      "Weight": 150,
      "Height": 15
    },
    "img_name": require("./images/178.png")
  },
  {
    "id": 179,
    "name": "Mareep",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 55,
      "Attack": 40,
      "Defense": 40,
      "Sp. Attack": 65,
      "Sp. Defense": 45,
      "Speed": 35,
      "Weight": 78,
      "Height": 6
    },
    "img_name": require("./images/179.png")
  },
  {
    "id": 180,
    "name": "Flaaffy",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 70,
      "Attack": 55,
      "Defense": 55,
      "Sp. Attack": 80,
      "Sp. Defense": 60,
      "Speed": 45,
      "Weight": 133,
      "Height": 8
    },
    "img_name": require("./images/180.png")
  },
  {
    "id": 181,
    "name": "Ampharos",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 90,
      "Attack": 75,
      "Defense": 85,
      "Sp. Attack": 115,
      "Sp. Defense": 90,
      "Speed": 55,
      "Weight": 615,
      "Height": 14
    },
    "img_name": require("./images/181.png")
  },
  {
    "id": 182,
    "name": "Bellossom",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 75,
      "Attack": 80,
      "Defense": 95,
      "Sp. Attack": 90,
      "Sp. Defense": 100,
      "Speed": 50,
      "Weight": 58,
      "Height": 4
    },
    "img_name": require("./images/182.png")
  },
  {
    "id": 183,
    "name": "Marill",
    "type": [
      "Water",
      "Fairy"
    ],
    "base": {
      "HP": 70,
      "Attack": 20,
      "Defense": 50,
      "Sp. Attack": 20,
      "Sp. Defense": 50,
      "Speed": 40,
      "Weight": 85,
      "Height": 4
    },
    "img_name": require("./images/183.png")
  },
  {
    "id": 184,
    "name": "Azumarill",
    "type": [
      "Water",
      "Fairy"
    ],
    "base": {
      "HP": 100,
      "Attack": 50,
      "Defense": 80,
      "Sp. Attack": 60,
      "Sp. Defense": 80,
      "Speed": 50,
      "Weight": 285,
      "Height": 8
    },
    "img_name": require("./images/184.png")
  },
  {
    "id": 185,
    "name": "Sudowoodo",
    "type": [
      "Rock"
    ],
    "base": {
      "HP": 70,
      "Attack": 100,
      "Defense": 115,
      "Sp. Attack": 30,
      "Sp. Defense": 65,
      "Speed": 30,
      "Weight": 380,
      "Height": 12
    },
    "img_name": require("./images/185.png")
  },
  {
    "id": 186,
    "name": "Politoed",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 90,
      "Attack": 75,
      "Defense": 75,
      "Sp. Attack": 90,
      "Sp. Defense": 100,
      "Speed": 70,
      "Weight": 339,
      "Height": 11
    },
    "img_name": require("./images/186.png")
  },
  {
    "id": 187,
    "name": "Hoppip",
    "type": [
      "Grass",
      "Flying"
    ],
    "base": {
      "HP": 35,
      "Attack": 35,
      "Defense": 40,
      "Sp. Attack": 35,
      "Sp. Defense": 55,
      "Speed": 50,
      "Weight": 5,
      "Height": 4
    },
    "img_name": require("./images/187.png")
  },
  {
    "id": 188,
    "name": "Skiploom",
    "type": [
      "Grass",
      "Flying"
    ],
    "base": {
      "HP": 55,
      "Attack": 45,
      "Defense": 50,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      "Speed": 80,
      "Weight": 10,
      "Height": 6
    },
    "img_name": require("./images/188.png")
  },
  {
    "id": 189,
    "name": "Jumpluff",
    "type": [
      "Grass",
      "Flying"
    ],
    "base": {
      "HP": 75,
      "Attack": 55,
      "Defense": 70,
      "Sp. Attack": 55,
      "Sp. Defense": 95,
      "Speed": 110,
      "Weight": 30,
      "Height": 8
    },
    "img_name": require("./images/189.png")
  },
  {
    "id": 190,
    "name": "Aipom",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 55,
      "Attack": 70,
      "Defense": 55,
      "Sp. Attack": 40,
      "Sp. Defense": 55,
      "Speed": 85,
      "Weight": 115,
      "Height": 8
    },
    "img_name": require("./images/190.png")
  },
  {
    "id": 191,
    "name": "Sunkern",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 30,
      "Attack": 30,
      "Defense": 30,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 30,
      "Weight": 18,
      "Height": 3
    },
    "img_name": require("./images/191.png")
  },
  {
    "id": 192,
    "name": "Sunflora",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 75,
      "Attack": 75,
      "Defense": 55,
      "Sp. Attack": 105,
      "Sp. Defense": 85,
      "Speed": 30,
      "Weight": 85,
      "Height": 8
    },
    "img_name": require("./images/192.png")
  },
  {
    "id": 193,
    "name": "Yanma",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 65,
      "Attack": 65,
      "Defense": 45,
      "Sp. Attack": 75,
      "Sp. Defense": 45,
      "Speed": 95,
      "Weight": 380,
      "Height": 12
    },
    "img_name": require("./images/193.png")
  },
  {
    "id": 194,
    "name": "Wooper",
    "type": [
      "Water",
      "Ground"
    ],
    "base": {
      "HP": 55,
      "Attack": 45,
      "Defense": 45,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 15,
      "Weight": 85,
      "Height": 4
    },
    "img_name": require("./images/194.png")
  },
  {
    "id": 195,
    "name": "Quagsire",
    "type": [
      "Water",
      "Ground"
    ],
    "base": {
      "HP": 95,
      "Attack": 85,
      "Defense": 85,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 35,
      "Weight": 750,
      "Height": 14
    },
    "img_name": require("./images/195.png")
  },
  {
    "id": 196,
    "name": "Espeon",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 65,
      "Attack": 65,
      "Defense": 60,
      "Sp. Attack": 130,
      "Sp. Defense": 95,
      "Speed": 110,
      "Weight": 265,
      "Height": 9
    },
    "img_name": require("./images/196.png")
  },
  {
    "id": 197,
    "name": "Umbreon",
    "type": [
      "Dark"
    ],
    "base": {
      "HP": 95,
      "Attack": 65,
      "Defense": 110,
      "Sp. Attack": 60,
      "Sp. Defense": 130,
      "Speed": 65,
      "Weight": 270,
      "Height": 10
    },
    "img_name": require("./images/197.png")
  },
  {
    "id": 198,
    "name": "Murkrow",
    "type": [
      "Dark",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 85,
      "Defense": 42,
      "Sp. Attack": 85,
      "Sp. Defense": 42,
      "Speed": 91,
      "Weight": 21,
      "Height": 5
    },
    "img_name": require("./images/198.png")
  },
  {
    "id": 199,
    "name": "Slowking",
    "type": [
      "Water",
      "Psychic"
    ],
    "base": {
      "HP": 95,
      "Attack": 75,
      "Defense": 80,
      "Sp. Attack": 100,
      "Sp. Defense": 110,
      "Speed": 30,
      "Weight": 795,
      "Height": 20
    },
    "img_name": require("./images/199.png")
  },
  {
    "id": 200,
    "name": "Misdreavus",
    "type": [
      "Ghost"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 60,
      "Sp. Attack": 85,
      "Sp. Defense": 85,
      "Speed": 85,
      "Weight": 10,
      "Height": 7
    },
    "img_name": require("./images/200.png")
  },
  {
    "id": 201,
    "name": "Unown",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 48,
      "Attack": 72,
      "Defense": 48,
      "Sp. Attack": 72,
      "Sp. Defense": 48,
      "Speed": 48,
      "Weight": 50,
      "Height": 5
    },
    "img_name": require("./images/201.png")
  },
  {
    "id": 202,
    "name": "Wobbuffet",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 190,
      "Attack": 33,
      "Defense": 58,
      "Sp. Attack": 33,
      "Sp. Defense": 58,
      "Speed": 33,
      "Weight": 285,
      "Height": 13
    },
    "img_name": require("./images/202.png")
  },
  {
    "id": 203,
    "name": "Girafarig",
    "type": [
      "Normal",
      "Psychic"
    ],
    "base": {
      "HP": 70,
      "Attack": 80,
      "Defense": 65,
      "Sp. Attack": 90,
      "Sp. Defense": 65,
      "Speed": 85,
      "Weight": 415,
      "Height": 15
    },
    "img_name": require("./images/203.png")
  },
  {
    "id": 204,
    "name": "Pineco",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 50,
      "Attack": 65,
      "Defense": 90,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 15,
      "Weight": 72,
      "Height": 6
    },
    "img_name": require("./images/204.png")
  },
  {
    "id": 205,
    "name": "Forretress",
    "type": [
      "Bug",
      "Steel"
    ],
    "base": {
      "HP": 75,
      "Attack": 90,
      "Defense": 140,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 40,
      "Weight": 1258,
      "Height": 12
    },
    "img_name": require("./images/205.png")
  },
  {
    "id": 206,
    "name": "Dunsparce",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 100,
      "Attack": 70,
      "Defense": 70,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45,
      "Weight": 140,
      "Height": 15
    },
    "img_name": require("./images/206.png")
  },
  {
    "id": 207,
    "name": "Gligar",
    "type": [
      "Ground",
      "Flying"
    ],
    "base": {
      "HP": 65,
      "Attack": 75,
      "Defense": 105,
      "Sp. Attack": 35,
      "Sp. Defense": 65,
      "Speed": 85,
      "Weight": 648,
      "Height": 11
    },
    "img_name": require("./images/207.png")
  },
  {
    "id": 208,
    "name": "Steelix",
    "type": [
      "Steel",
      "Ground"
    ],
    "base": {
      "HP": 75,
      "Attack": 85,
      "Defense": 200,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      "Speed": 30,
      "Weight": 4000,
      "Height": 92
    },
    "img_name": require("./images/208.png")
  },
  {
    "id": 209,
    "name": "Snubbull",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 60,
      "Attack": 80,
      "Defense": 50,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 30,
      "Weight": 78,
      "Height": 6
    },
    "img_name": require("./images/209.png")
  },
  {
    "id": 210,
    "name": "Granbull",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 90,
      "Attack": 120,
      "Defense": 75,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 45,
      "Weight": 487,
      "Height": 14
    },
    "img_name": require("./images/210.png")
  },
  {
    "id": 211,
    "name": "Qwilfish",
    "type": [
      "Water",
      "Poison"
    ],
    "base": {
      "HP": 65,
      "Attack": 95,
      "Defense": 85,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 85,
      "Weight": 39,
      "Height": 5
    },
    "img_name": require("./images/211.png")
  },
  {
    "id": 212,
    "name": "Scizor",
    "type": [
      "Bug",
      "Steel"
    ],
    "base": {
      "HP": 70,
      "Attack": 130,
      "Defense": 100,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      "Speed": 65,
      "Weight": 1180,
      "Height": 18
    },
    "img_name": require("./images/212.png")
  },
  {
    "id": 213,
    "name": "Shuckle",
    "type": [
      "Bug",
      "Rock"
    ],
    "base": {
      "HP": 20,
      "Attack": 10,
      "Defense": 230,
      "Sp. Attack": 10,
      "Sp. Defense": 230,
      "Speed": 5,
      "Weight": 205,
      "Height": 6
    },
    "img_name": require("./images/213.png")
  },
  {
    "id": 214,
    "name": "Heracross",
    "type": [
      "Bug",
      "Fighting"
    ],
    "base": {
      "HP": 80,
      "Attack": 125,
      "Defense": 75,
      "Sp. Attack": 40,
      "Sp. Defense": 95,
      "Speed": 85,
      "Weight": 540,
      "Height": 15
    },
    "img_name": require("./images/214.png")
  },
  {
    "id": 215,
    "name": "Sneasel",
    "type": [
      "Dark",
      "Ice"
    ],
    "base": {
      "HP": 55,
      "Attack": 95,
      "Defense": 55,
      "Sp. Attack": 35,
      "Sp. Defense": 75,
      "Speed": 115,
      "Weight": 280,
      "Height": 9
    },
    "img_name": require("./images/215.png")
  },
  {
    "id": 216,
    "name": "Teddiursa",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 60,
      "Attack": 80,
      "Defense": 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 40,
      "Weight": 88,
      "Height": 6
    },
    "img_name": require("./images/216.png")
  },
  {
    "id": 217,
    "name": "Ursaring",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 90,
      "Attack": 130,
      "Defense": 75,
      "Sp. Attack": 75,
      "Sp. Defense": 75,
      "Speed": 55,
      "Weight": 1258,
      "Height": 18
    },
    "img_name": require("./images/217.png")
  },
  {
    "id": 218,
    "name": "Slugma",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 40,
      "Attack": 40,
      "Defense": 40,
      "Sp. Attack": 70,
      "Sp. Defense": 40,
      "Speed": 20,
      "Weight": 350,
      "Height": 7
    },
    "img_name": require("./images/218.png")
  },
  {
    "id": 219,
    "name": "Magcargo",
    "type": [
      "Fire",
      "Rock"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 120,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      "Speed": 30,
      "Weight": 550,
      "Height": 8
    },
    "img_name": require("./images/219.png")
  },
  {
    "id": 220,
    "name": "Swinub",
    "type": [
      "Ice",
      "Ground"
    ],
    "base": {
      "HP": 50,
      "Attack": 50,
      "Defense": 40,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 50,
      "Weight": 65,
      "Height": 4
    },
    "img_name": require("./images/220.png")
  },
  {
    "id": 221,
    "name": "Piloswine",
    "type": [
      "Ice",
      "Ground"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 80,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 50,
      "Weight": 558,
      "Height": 11
    },
    "img_name": require("./images/221.png")
  },
  {
    "id": 222,
    "name": "Corsola",
    "type": [
      "Water",
      "Rock"
    ],
    "base": {
      "HP": 65,
      "Attack": 55,
      "Defense": 95,
      "Sp. Attack": 65,
      "Sp. Defense": 95,
      "Speed": 35,
      "Weight": 50,
      "Height": 6
    },
    "img_name": require("./images/222.png")
  },
  {
    "id": 223,
    "name": "Remoraid",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 35,
      "Attack": 65,
      "Defense": 35,
      "Sp. Attack": 65,
      "Sp. Defense": 35,
      "Speed": 65,
      "Weight": 120,
      "Height": 6
    },
    "img_name": require("./images/223.png")
  },
  {
    "id": 224,
    "name": "Octillery",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 75,
      "Attack": 105,
      "Defense": 75,
      "Sp. Attack": 105,
      "Sp. Defense": 75,
      "Speed": 45,
      "Weight": 285,
      "Height": 9
    },
    "img_name": require("./images/224.png")
  },
  {
    "id": 225,
    "name": "Delibird",
    "type": [
      "Ice",
      "Flying"
    ],
    "base": {
      "HP": 45,
      "Attack": 55,
      "Defense": 45,
      "Sp. Attack": 65,
      "Sp. Defense": 45,
      "Speed": 75,
      "Weight": 160,
      "Height": 9
    },
    "img_name": require("./images/225.png")
  },
  {
    "id": 226,
    "name": "Mantine",
    "type": [
      "Water",
      "Flying"
    ],
    "base": {
      "HP": 85,
      "Attack": 40,
      "Defense": 70,
      "Sp. Attack": 80,
      "Sp. Defense": 140,
      "Speed": 70,
      "Weight": 2200,
      "Height": 21
    },
    "img_name": require("./images/226.png")
  },
  {
    "id": 227,
    "name": "Skarmory",
    "type": [
      "Steel",
      "Flying"
    ],
    "base": {
      "HP": 65,
      "Attack": 80,
      "Defense": 140,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      "Speed": 70,
      "Weight": 505,
      "Height": 17
    },
    "img_name": require("./images/227.png")
  },
  {
    "id": 228,
    "name": "Houndour",
    "type": [
      "Dark",
      "Fire"
    ],
    "base": {
      "HP": 45,
      "Attack": 60,
      "Defense": 30,
      "Sp. Attack": 80,
      "Sp. Defense": 50,
      "Speed": 65,
      "Weight": 108,
      "Height": 6
    },
    "img_name": require("./images/228.png")
  },
  {
    "id": 229,
    "name": "Houndoom",
    "type": [
      "Dark",
      "Fire"
    ],
    "base": {
      "HP": 75,
      "Attack": 90,
      "Defense": 50,
      "Sp. Attack": 110,
      "Sp. Defense": 80,
      "Speed": 95,
      "Weight": 350,
      "Height": 14
    },
    "img_name": require("./images/229.png")
  },
  {
    "id": 230,
    "name": "Kingdra",
    "type": [
      "Water",
      "Dragon"
    ],
    "base": {
      "HP": 75,
      "Attack": 95,
      "Defense": 95,
      "Sp. Attack": 95,
      "Sp. Defense": 95,
      "Speed": 85,
      "Weight": 1520,
      "Height": 18
    },
    "img_name": require("./images/230.png")
  },
  {
    "id": 231,
    "name": "Phanpy",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 90,
      "Attack": 60,
      "Defense": 60,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 40,
      "Weight": 335,
      "Height": 5
    },
    "img_name": require("./images/231.png")
  },
  {
    "id": 232,
    "name": "Donphan",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 90,
      "Attack": 120,
      "Defense": 120,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 50,
      "Weight": 1200,
      "Height": 11
    },
    "img_name": require("./images/232.png")
  },
  {
    "id": 233,
    "name": "Porygon2",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 85,
      "Attack": 80,
      "Defense": 90,
      "Sp. Attack": 105,
      "Sp. Defense": 95,
      "Speed": 60,
      "Weight": 325,
      "Height": 6
    },
    "img_name": require("./images/233.png")
  },
  {
    "id": 234,
    "name": "Stantler",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 73,
      "Attack": 95,
      "Defense": 62,
      "Sp. Attack": 85,
      "Sp. Defense": 65,
      "Speed": 85,
      "Weight": 712,
      "Height": 14
    },
    "img_name": require("./images/234.png")
  },
  {
    "id": 235,
    "name": "Smeargle",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 55,
      "Attack": 20,
      "Defense": 35,
      "Sp. Attack": 20,
      "Sp. Defense": 45,
      "Speed": 75,
      "Weight": 580,
      "Height": 12
    },
    "img_name": require("./images/235.png")
  },
  {
    "id": 236,
    "name": "Tyrogue",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 35,
      "Attack": 35,
      "Defense": 35,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 35,
      "Weight": 210,
      "Height": 7
    },
    "img_name": require("./images/236.png")
  },
  {
    "id": 237,
    "name": "Hitmontop",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 50,
      "Attack": 95,
      "Defense": 95,
      "Sp. Attack": 35,
      "Sp. Defense": 110,
      "Speed": 70,
      "Weight": 480,
      "Height": 14
    },
    "img_name": require("./images/237.png")
  },
  {
    "id": 238,
    "name": "Smoochum",
    "type": [
      "Ice",
      "Psychic"
    ],
    "base": {
      "HP": 45,
      "Attack": 30,
      "Defense": 15,
      "Sp. Attack": 85,
      "Sp. Defense": 65,
      "Speed": 65,
      "Weight": 60,
      "Height": 4
    },
    "img_name": require("./images/238.png")
  },
  {
    "id": 239,
    "name": "Elekid",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 45,
      "Attack": 63,
      "Defense": 37,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      "Speed": 95,
      "Weight": 235,
      "Height": 6
    },
    "img_name": require("./images/239.png")
  },
  {
    "id": 240,
    "name": "Magby",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 45,
      "Attack": 75,
      "Defense": 37,
      "Sp. Attack": 70,
      "Sp. Defense": 55,
      "Speed": 83,
      "Weight": 214,
      "Height": 7
    },
    "img_name": require("./images/240.png")
  },
  {
    "id": 241,
    "name": "Miltank",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 95,
      "Attack": 80,
      "Defense": 105,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      "Speed": 100,
      "Weight": 755,
      "Height": 12
    },
    "img_name": require("./images/241.png")
  },
  {
    "id": 242,
    "name": "Blissey",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 255,
      "Attack": 10,
      "Defense": 10,
      "Sp. Attack": 75,
      "Sp. Defense": 135,
      "Speed": 55,
      "Weight": 468,
      "Height": 15
    },
    "img_name": require("./images/242.png")
  },
  {
    "id": 243,
    "name": "Raikou",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 90,
      "Attack": 85,
      "Defense": 75,
      "Sp. Attack": 115,
      "Sp. Defense": 100,
      "Speed": 115,
      "Weight": 1780,
      "Height": 19
    },
    "img_name": require("./images/243.png")
  },
  {
    "id": 244,
    "name": "Entei",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 115,
      "Attack": 115,
      "Defense": 85,
      "Sp. Attack": 90,
      "Sp. Defense": 75,
      "Speed": 100,
      "Weight": 1980,
      "Height": 21
    },
    "img_name": require("./images/244.png")
  },
  {
    "id": 245,
    "name": "Suicune",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 100,
      "Attack": 75,
      "Defense": 115,
      "Sp. Attack": 90,
      "Sp. Defense": 115,
      "Speed": 85,
      "Weight": 1870,
      "Height": 20
    },
    "img_name": require("./images/245.png")
  },
  {
    "id": 246,
    "name": "Larvitar",
    "type": [
      "Rock",
      "Ground"
    ],
    "base": {
      "HP": 50,
      "Attack": 64,
      "Defense": 50,
      "Sp. Attack": 45,
      "Sp. Defense": 50,
      "Speed": 41,
      "Weight": 720,
      "Height": 6
    },
    "img_name": require("./images/246.png")
  },
  {
    "id": 247,
    "name": "Pupitar",
    "type": [
      "Rock",
      "Ground"
    ],
    "base": {
      "HP": 70,
      "Attack": 84,
      "Defense": 70,
      "Sp. Attack": 65,
      "Sp. Defense": 70,
      "Speed": 51,
      "Weight": 1520,
      "Height": 12
    },
    "img_name": require("./images/247.png")
  },
  {
    "id": 248,
    "name": "Tyranitar",
    "type": [
      "Rock",
      "Dark"
    ],
    "base": {
      "HP": 100,
      "Attack": 134,
      "Defense": 110,
      "Sp. Attack": 95,
      "Sp. Defense": 100,
      "Speed": 61,
      "Weight": 2020,
      "Height": 20
    },
    "img_name": require("./images/248.png")
  },
  {
    "id": 249,
    "name": "Lugia",
    "type": [
      "Psychic",
      "Flying"
    ],
    "base": {
      "HP": 106,
      "Attack": 90,
      "Defense": 130,
      "Sp. Attack": 90,
      "Sp. Defense": 154,
      "Speed": 110,
      "Weight": 2160,
      "Height": 52
    },
    "img_name": require("./images/249.png")
  },
  {
    "id": 250,
    "name": "Ho-Oh",
    "type": [
      "Fire",
      "Flying"
    ],
    "base": {
      "HP": 106,
      "Attack": 130,
      "Defense": 90,
      "Sp. Attack": 110,
      "Sp. Defense": 154,
      "Speed": 90,
      "Weight": 1990,
      "Height": 38
    },
    "img_name": require("./images/250.png")
  },
  {
    "id": 251,
    "name": "Celebi",
    "type": [
      "Psychic",
      "Grass"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 100,
      "Weight": 50,
      "Height": 6
    },
    "img_name": require("./images/251.png")
  },
  {
    "id": 252,
    "name": "Treecko",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 35,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      "Speed": 70,
      "Weight": 50,
      "Height": 5
    },
    "img_name": require("./images/252.png")
  },
  {
    "id": 253,
    "name": "Grovyle",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 50,
      "Attack": 65,
      "Defense": 45,
      "Sp. Attack": 85,
      "Sp. Defense": 65,
      "Speed": 95,
      "Weight": 216,
      "Height": 9
    },
    "img_name": require("./images/253.png")
  },
  {
    "id": 254,
    "name": "Sceptile",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 70,
      "Attack": 85,
      "Defense": 65,
      "Sp. Attack": 105,
      "Sp. Defense": 85,
      "Speed": 120,
      "Weight": 522,
      "Height": 17
    },
    "img_name": require("./images/254.png")
  },
  {
    "id": 255,
    "name": "Torchic",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 45,
      "Attack": 60,
      "Defense": 40,
      "Sp. Attack": 70,
      "Sp. Defense": 50,
      "Speed": 45,
      "Weight": 25,
      "Height": 4
    },
    "img_name": require("./images/255.png")
  },
  {
    "id": 256,
    "name": "Combusken",
    "type": [
      "Fire",
      "Fighting"
    ],
    "base": {
      "HP": 60,
      "Attack": 85,
      "Defense": 60,
      "Sp. Attack": 85,
      "Sp. Defense": 60,
      "Speed": 55,
      "Weight": 195,
      "Height": 9
    },
    "img_name": require("./images/256.png")
  },
  {
    "id": 257,
    "name": "Blaziken",
    "type": [
      "Fire",
      "Fighting"
    ],
    "base": {
      "HP": 80,
      "Attack": 120,
      "Defense": 70,
      "Sp. Attack": 110,
      "Sp. Defense": 70,
      "Speed": 80,
      "Weight": 520,
      "Height": 19
    },
    "img_name": require("./images/257.png")
  },
  {
    "id": 258,
    "name": "Mudkip",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 50,
      "Attack": 70,
      "Defense": 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 40,
      "Weight": 76,
      "Height": 4
    },
    "img_name": require("./images/258.png")
  },
  {
    "id": 259,
    "name": "Marshtomp",
    "type": [
      "Water",
      "Ground"
    ],
    "base": {
      "HP": 70,
      "Attack": 85,
      "Defense": 70,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      "Speed": 50,
      "Weight": 280,
      "Height": 7
    },
    "img_name": require("./images/259.png")
  },
  {
    "id": 260,
    "name": "Swampert",
    "type": [
      "Water",
      "Ground"
    ],
    "base": {
      "HP": 100,
      "Attack": 110,
      "Defense": 90,
      "Sp. Attack": 85,
      "Sp. Defense": 90,
      "Speed": 60,
      "Weight": 819,
      "Height": 15
    },
    "img_name": require("./images/260.png")
  },
  {
    "id": 261,
    "name": "Poochyena",
    "type": [
      "Dark"
    ],
    "base": {
      "HP": 35,
      "Attack": 55,
      "Defense": 35,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 35,
      "Weight": 136,
      "Height": 5
    },
    "img_name": require("./images/261.png")
  },
  {
    "id": 262,
    "name": "Mightyena",
    "type": [
      "Dark"
    ],
    "base": {
      "HP": 70,
      "Attack": 90,
      "Defense": 70,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 70,
      "Weight": 370,
      "Height": 10
    },
    "img_name": require("./images/262.png")
  },
  {
    "id": 263,
    "name": "Zigzagoon",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 38,
      "Attack": 30,
      "Defense": 41,
      "Sp. Attack": 30,
      "Sp. Defense": 41,
      "Speed": 60,
      "Weight": 175,
      "Height": 4
    },
    "img_name": require("./images/263.png")
  },
  {
    "id": 264,
    "name": "Linoone",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 78,
      "Attack": 70,
      "Defense": 61,
      "Sp. Attack": 50,
      "Sp. Defense": 61,
      "Speed": 100,
      "Weight": 325,
      "Height": 5
    },
    "img_name": require("./images/264.png")
  },
  {
    "id": 265,
    "name": "Wurmple",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 45,
      "Attack": 45,
      "Defense": 35,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      "Speed": 20,
      "Weight": 36,
      "Height": 3
    },
    "img_name": require("./images/265.png")
  },
  {
    "id": 266,
    "name": "Silcoon",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 50,
      "Attack": 35,
      "Defense": 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 15,
      "Weight": 100,
      "Height": 6
    },
    "img_name": require("./images/266.png")
  },
  {
    "id": 267,
    "name": "Beautifly",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 70,
      "Defense": 50,
      "Sp. Attack": 100,
      "Sp. Defense": 50,
      "Speed": 65,
      "Weight": 284,
      "Height": 10
    },
    "img_name": require("./images/267.png")
  },
  {
    "id": 268,
    "name": "Cascoon",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 50,
      "Attack": 35,
      "Defense": 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 15,
      "Weight": 115,
      "Height": 7
    },
    "img_name": require("./images/268.png")
  },
  {
    "id": 269,
    "name": "Dustox",
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 70,
      "Sp. Attack": 50,
      "Sp. Defense": 90,
      "Speed": 65,
      "Weight": 316,
      "Height": 12
    },
    "img_name": require("./images/269.png")
  },
  {
    "id": 270,
    "name": "Lotad",
    "type": [
      "Water",
      "Grass"
    ],
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 30,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      "Speed": 30,
      "Weight": 26,
      "Height": 5
    },
    "img_name": require("./images/270.png")
  },
  {
    "id": 271,
    "name": "Lombre",
    "type": [
      "Water",
      "Grass"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 50,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      "Speed": 50,
      "Weight": 325,
      "Height": 12
    },
    "img_name": require("./images/271.png")
  },
  {
    "id": 272,
    "name": "Ludicolo",
    "type": [
      "Water",
      "Grass"
    ],
    "base": {
      "HP": 80,
      "Attack": 70,
      "Defense": 70,
      "Sp. Attack": 90,
      "Sp. Defense": 100,
      "Speed": 70,
      "Weight": 550,
      "Height": 15
    },
    "img_name": require("./images/272.png")
  },
  {
    "id": 273,
    "name": "Seedot",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 40,
      "Attack": 40,
      "Defense": 50,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 30,
      "Weight": 40,
      "Height": 5
    },
    "img_name": require("./images/273.png")
  },
  {
    "id": 274,
    "name": "Nuzleaf",
    "type": [
      "Grass",
      "Dark"
    ],
    "base": {
      "HP": 70,
      "Attack": 70,
      "Defense": 40,
      "Sp. Attack": 60,
      "Sp. Defense": 40,
      "Speed": 60,
      "Weight": 280,
      "Height": 10
    },
    "img_name": require("./images/274.png")
  },
  {
    "id": 275,
    "name": "Shiftry",
    "type": [
      "Grass",
      "Dark"
    ],
    "base": {
      "HP": 90,
      "Attack": 100,
      "Defense": 60,
      "Sp. Attack": 90,
      "Sp. Defense": 60,
      "Speed": 80,
      "Weight": 596,
      "Height": 13
    },
    "img_name": require("./images/275.png")
  },
  {
    "id": 276,
    "name": "Taillow",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 55,
      "Defense": 30,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 85,
      "Weight": 23,
      "Height": 3
    },
    "img_name": require("./images/276.png")
  },
  {
    "id": 277,
    "name": "Swellow",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 85,
      "Defense": 60,
      "Sp. Attack": 75,
      "Sp. Defense": 50,
      "Speed": 125,
      "Weight": 198,
      "Height": 7
    },
    "img_name": require("./images/277.png")
  },
  {
    "id": 278,
    "name": "Wingull",
    "type": [
      "Water",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 30,
      "Sp. Attack": 55,
      "Sp. Defense": 30,
      "Speed": 85,
      "Weight": 95,
      "Height": 6
    },
    "img_name": require("./images/278.png")
  },
  {
    "id": 279,
    "name": "Pelipper",
    "type": [
      "Water",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 100,
      "Sp. Attack": 95,
      "Sp. Defense": 70,
      "Speed": 65,
      "Weight": 280,
      "Height": 12
    },
    "img_name": require("./images/279.png")
  },
  {
    "id": 280,
    "name": "Ralts",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "base": {
      "HP": 28,
      "Attack": 25,
      "Defense": 25,
      "Sp. Attack": 45,
      "Sp. Defense": 35,
      "Speed": 40,
      "Weight": 66,
      "Height": 4
    },
    "img_name": require("./images/280.png")
  },
  {
    "id": 281,
    "name": "Kirlia",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "base": {
      "HP": 38,
      "Attack": 35,
      "Defense": 35,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      "Speed": 50,
      "Weight": 202,
      "Height": 8
    },
    "img_name": require("./images/281.png")
  },
  {
    "id": 282,
    "name": "Gardevoir",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "base": {
      "HP": 68,
      "Attack": 65,
      "Defense": 65,
      "Sp. Attack": 125,
      "Sp. Defense": 115,
      "Speed": 80,
      "Weight": 484,
      "Height": 16
    },
    "img_name": require("./images/282.png")
  },
  {
    "id": 283,
    "name": "Surskit",
    "type": [
      "Bug",
      "Water"
    ],
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 32,
      "Sp. Attack": 50,
      "Sp. Defense": 52,
      "Speed": 65,
      "Weight": 17,
      "Height": 5
    },
    "img_name": require("./images/283.png")
  },
  {
    "id": 284,
    "name": "Masquerain",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 70,
      "Attack": 60,
      "Defense": 62,
      "Sp. Attack": 100,
      "Sp. Defense": 82,
      "Speed": 80,
      "Weight": 36,
      "Height": 8
    },
    "img_name": require("./images/284.png")
  },
  {
    "id": 285,
    "name": "Shroomish",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 60,
      "Attack": 40,
      "Defense": 60,
      "Sp. Attack": 40,
      "Sp. Defense": 60,
      "Speed": 35,
      "Weight": 45,
      "Height": 4
    },
    "img_name": require("./images/285.png")
  },
  {
    "id": 286,
    "name": "Breloom",
    "type": [
      "Grass",
      "Fighting"
    ],
    "base": {
      "HP": 60,
      "Attack": 130,
      "Defense": 80,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 70,
      "Weight": 392,
      "Height": 12
    },
    "img_name": require("./images/286.png")
  },
  {
    "id": 287,
    "name": "Slakoth",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 60,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 30,
      "Weight": 240,
      "Height": 8
    },
    "img_name": require("./images/287.png")
  },
  {
    "id": 288,
    "name": "Vigoroth",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 80,
      "Attack": 80,
      "Defense": 80,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 90,
      "Weight": 465,
      "Height": 14
    },
    "img_name": require("./images/288.png")
  },
  {
    "id": 289,
    "name": "Slaking",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 150,
      "Attack": 160,
      "Defense": 100,
      "Sp. Attack": 95,
      "Sp. Defense": 65,
      "Speed": 100,
      "Weight": 1305,
      "Height": 20
    },
    "img_name": require("./images/289.png")
  },
  {
    "id": 290,
    "name": "Nincada",
    "type": [
      "Bug",
      "Ground"
    ],
    "base": {
      "HP": 31,
      "Attack": 45,
      "Defense": 90,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 40,
      "Weight": 55,
      "Height": 5
    },
    "img_name": require("./images/290.png")
  },
  {
    "id": 291,
    "name": "Ninjask",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 61,
      "Attack": 90,
      "Defense": 45,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 160,
      "Weight": 120,
      "Height": 8
    },
    "img_name": require("./images/291.png")
  },
  {
    "id": 292,
    "name": "Shedinja",
    "type": [
      "Bug",
      "Ghost"
    ],
    "base": {
      "HP": 1,
      "Attack": 90,
      "Defense": 45,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 40,
      "Weight": 12,
      "Height": 8
    },
    "img_name": require("./images/292.png")
  },
  {
    "id": 293,
    "name": "Whismur",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 64,
      "Attack": 51,
      "Defense": 23,
      "Sp. Attack": 51,
      "Sp. Defense": 23,
      "Speed": 28,
      "Weight": 163,
      "Height": 6
    },
    "img_name": require("./images/293.png")
  },
  {
    "id": 294,
    "name": "Loudred",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 84,
      "Attack": 71,
      "Defense": 43,
      "Sp. Attack": 71,
      "Sp. Defense": 43,
      "Speed": 48,
      "Weight": 405,
      "Height": 10
    },
    "img_name": require("./images/294.png")
  },
  {
    "id": 295,
    "name": "Exploud",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 104,
      "Attack": 91,
      "Defense": 63,
      "Sp. Attack": 91,
      "Sp. Defense": 73,
      "Speed": 68,
      "Weight": 840,
      "Height": 15
    },
    "img_name": require("./images/295.png")
  },
  {
    "id": 296,
    "name": "Makuhita",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 72,
      "Attack": 60,
      "Defense": 30,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      "Speed": 25,
      "Weight": 864,
      "Height": 10
    },
    "img_name": require("./images/296.png")
  },
  {
    "id": 297,
    "name": "Hariyama",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 144,
      "Attack": 120,
      "Defense": 60,
      "Sp. Attack": 40,
      "Sp. Defense": 60,
      "Speed": 50,
      "Weight": 2538,
      "Height": 23
    },
    "img_name": require("./images/297.png")
  },
  {
    "id": 298,
    "name": "Azurill",
    "type": [
      "Normal",
      "Fairy"
    ],
    "base": {
      "HP": 50,
      "Attack": 20,
      "Defense": 40,
      "Sp. Attack": 20,
      "Sp. Defense": 40,
      "Speed": 20,
      "Weight": 20,
      "Height": 2
    },
    "img_name": require("./images/298.png")
  },
  {
    "id": 299,
    "name": "Nosepass",
    "type": [
      "Rock"
    ],
    "base": {
      "HP": 30,
      "Attack": 45,
      "Defense": 135,
      "Sp. Attack": 45,
      "Sp. Defense": 90,
      "Speed": 30,
      "Weight": 970,
      "Height": 10
    },
    "img_name": require("./images/299.png")
  },
  {
    "id": 300,
    "name": "Skitty",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 50,
      "Attack": 45,
      "Defense": 45,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 50,
      "Weight": 110,
      "Height": 6
    },
    "img_name": require("./images/300.png")
  },
  {
    "id": 301,
    "name": "Delcatty",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 70,
      "Attack": 65,
      "Defense": 65,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 90,
      "Weight": 326,
      "Height": 11
    },
    "img_name": require("./images/301.png")
  },
  {
    "id": 302,
    "name": "Sableye",
    "type": [
      "Dark",
      "Ghost"
    ],
    "base": {
      "HP": 50,
      "Attack": 75,
      "Defense": 75,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 50,
      "Weight": 110,
      "Height": 5
    },
    "img_name": require("./images/302.png")
  },
  {
    "id": 303,
    "name": "Mawile",
    "type": [
      "Steel",
      "Fairy"
    ],
    "base": {
      "HP": 50,
      "Attack": 85,
      "Defense": 85,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 50,
      "Weight": 115,
      "Height": 6
    },
    "img_name": require("./images/303.png")
  },
  {
    "id": 304,
    "name": "Aron",
    "type": [
      "Steel",
      "Rock"
    ],
    "base": {
      "HP": 50,
      "Attack": 70,
      "Defense": 100,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 30,
      "Weight": 600,
      "Height": 4
    },
    "img_name": require("./images/304.png")
  },
  {
    "id": 305,
    "name": "Lairon",
    "type": [
      "Steel",
      "Rock"
    ],
    "base": {
      "HP": 60,
      "Attack": 90,
      "Defense": 140,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 40,
      "Weight": 1200,
      "Height": 9
    },
    "img_name": require("./images/305.png")
  },
  {
    "id": 306,
    "name": "Aggron",
    "type": [
      "Steel",
      "Rock"
    ],
    "base": {
      "HP": 70,
      "Attack": 110,
      "Defense": 180,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 50,
      "Weight": 3600,
      "Height": 21
    },
    "img_name": require("./images/306.png")
  },
  {
    "id": 307,
    "name": "Meditite",
    "type": [
      "Fighting",
      "Psychic"
    ],
    "base": {
      "HP": 30,
      "Attack": 40,
      "Defense": 55,
      "Sp. Attack": 40,
      "Sp. Defense": 55,
      "Speed": 60,
      "Weight": 112,
      "Height": 6
    },
    "img_name": require("./images/307.png")
  },
  {
    "id": 308,
    "name": "Medicham",
    "type": [
      "Fighting",
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 75,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      "Speed": 80,
      "Weight": 315,
      "Height": 13
    },
    "img_name": require("./images/308.png")
  },
  {
    "id": 309,
    "name": "Electrike",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 40,
      "Sp. Attack": 65,
      "Sp. Defense": 40,
      "Speed": 65,
      "Weight": 152,
      "Height": 6
    },
    "img_name": require("./images/309.png")
  },
  {
    "id": 310,
    "name": "Manectric",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 70,
      "Attack": 75,
      "Defense": 60,
      "Sp. Attack": 105,
      "Sp. Defense": 60,
      "Speed": 105,
      "Weight": 402,
      "Height": 15
    },
    "img_name": require("./images/310.png")
  },
  {
    "id": 311,
    "name": "Plusle",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 40,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      "Speed": 95,
      "Weight": 42,
      "Height": 4
    },
    "img_name": require("./images/311.png")
  },
  {
    "id": 312,
    "name": "Minun",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 60,
      "Attack": 40,
      "Defense": 50,
      "Sp. Attack": 75,
      "Sp. Defense": 85,
      "Speed": 95,
      "Weight": 42,
      "Height": 4
    },
    "img_name": require("./images/312.png")
  },
  {
    "id": 313,
    "name": "Volbeat",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 65,
      "Attack": 73,
      "Defense": 75,
      "Sp. Attack": 47,
      "Sp. Defense": 85,
      "Speed": 85,
      "Weight": 177,
      "Height": 7
    },
    "img_name": require("./images/313.png")
  },
  {
    "id": 314,
    "name": "Illumise",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 65,
      "Attack": 47,
      "Defense": 75,
      "Sp. Attack": 73,
      "Sp. Defense": 85,
      "Speed": 85,
      "Weight": 177,
      "Height": 6
    },
    "img_name": require("./images/314.png")
  },
  {
    "id": 315,
    "name": "Roselia",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 50,
      "Attack": 60,
      "Defense": 45,
      "Sp. Attack": 100,
      "Sp. Defense": 80,
      "Speed": 65,
      "Weight": 20,
      "Height": 3
    },
    "img_name": require("./images/315.png")
  },
  {
    "id": 316,
    "name": "Gulpin",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 70,
      "Attack": 43,
      "Defense": 53,
      "Sp. Attack": 43,
      "Sp. Defense": 53,
      "Speed": 40,
      "Weight": 103,
      "Height": 4
    },
    "img_name": require("./images/316.png")
  },
  {
    "id": 317,
    "name": "Swalot",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 100,
      "Attack": 73,
      "Defense": 83,
      "Sp. Attack": 73,
      "Sp. Defense": 83,
      "Speed": 55,
      "Weight": 800,
      "Height": 17
    },
    "img_name": require("./images/317.png")
  },
  {
    "id": 318,
    "name": "Carvanha",
    "type": [
      "Water",
      "Dark"
    ],
    "base": {
      "HP": 45,
      "Attack": 90,
      "Defense": 20,
      "Sp. Attack": 65,
      "Sp. Defense": 20,
      "Speed": 65,
      "Weight": 208,
      "Height": 8
    },
    "img_name": require("./images/318.png")
  },
  {
    "id": 319,
    "name": "Sharpedo",
    "type": [
      "Water",
      "Dark"
    ],
    "base": {
      "HP": 70,
      "Attack": 120,
      "Defense": 40,
      "Sp. Attack": 95,
      "Sp. Defense": 40,
      "Speed": 95,
      "Weight": 888,
      "Height": 18
    },
    "img_name": require("./images/319.png")
  },
  {
    "id": 320,
    "name": "Wailmer",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 130,
      "Attack": 70,
      "Defense": 35,
      "Sp. Attack": 70,
      "Sp. Defense": 35,
      "Speed": 60,
      "Weight": 1300,
      "Height": 20
    },
    "img_name": require("./images/320.png")
  },
  {
    "id": 321,
    "name": "Wailord",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 170,
      "Attack": 90,
      "Defense": 45,
      "Sp. Attack": 90,
      "Sp. Defense": 45,
      "Speed": 60,
      "Weight": 3980,
      "Height": 145
    },
    "img_name": require("./images/321.png")
  },
  {
    "id": 322,
    "name": "Numel",
    "type": [
      "Fire",
      "Ground"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 40,
      "Sp. Attack": 65,
      "Sp. Defense": 45,
      "Speed": 35,
      "Weight": 240,
      "Height": 7
    },
    "img_name": require("./images/322.png")
  },
  {
    "id": 323,
    "name": "Camerupt",
    "type": [
      "Fire",
      "Ground"
    ],
    "base": {
      "HP": 70,
      "Attack": 100,
      "Defense": 70,
      "Sp. Attack": 105,
      "Sp. Defense": 75,
      "Speed": 40,
      "Weight": 2200,
      "Height": 19
    },
    "img_name": require("./images/323.png")
  },
  {
    "id": 324,
    "name": "Torkoal",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 70,
      "Attack": 85,
      "Defense": 140,
      "Sp. Attack": 85,
      "Sp. Defense": 70,
      "Speed": 20,
      "Weight": 804,
      "Height": 5
    },
    "img_name": require("./images/324.png")
  },
  {
    "id": 325,
    "name": "Spoink",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 25,
      "Defense": 35,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      "Speed": 60,
      "Weight": 306,
      "Height": 7
    },
    "img_name": require("./images/325.png")
  },
  {
    "id": 326,
    "name": "Grumpig",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 80,
      "Attack": 45,
      "Defense": 65,
      "Sp. Attack": 90,
      "Sp. Defense": 110,
      "Speed": 80,
      "Weight": 715,
      "Height": 9
    },
    "img_name": require("./images/326.png")
  },
  {
    "id": 327,
    "name": "Spinda",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 60,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 60,
      "Weight": 50,
      "Height": 11
    },
    "img_name": require("./images/327.png")
  },
  {
    "id": 328,
    "name": "Trapinch",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 45,
      "Attack": 100,
      "Defense": 45,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      "Speed": 10,
      "Weight": 150,
      "Height": 7
    },
    "img_name": require("./images/328.png")
  },
  {
    "id": 329,
    "name": "Vibrava",
    "type": [
      "Ground",
      "Dragon"
    ],
    "base": {
      "HP": 50,
      "Attack": 70,
      "Defense": 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 70,
      "Weight": 153,
      "Height": 11
    },
    "img_name": require("./images/329.png")
  },
  {
    "id": 330,
    "name": "Flygon",
    "type": [
      "Ground",
      "Dragon"
    ],
    "base": {
      "HP": 80,
      "Attack": 100,
      "Defense": 80,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 100,
      "Weight": 820,
      "Height": 20
    },
    "img_name": require("./images/330.png")
  },
  {
    "id": 331,
    "name": "Cacnea",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 50,
      "Attack": 85,
      "Defense": 40,
      "Sp. Attack": 85,
      "Sp. Defense": 40,
      "Speed": 35,
      "Weight": 513,
      "Height": 4
    },
    "img_name": require("./images/331.png")
  },
  {
    "id": 332,
    "name": "Cacturne",
    "type": [
      "Grass",
      "Dark"
    ],
    "base": {
      "HP": 70,
      "Attack": 115,
      "Defense": 60,
      "Sp. Attack": 115,
      "Sp. Defense": 60,
      "Speed": 55,
      "Weight": 774,
      "Height": 13
    },
    "img_name": require("./images/332.png")
  },
  {
    "id": 333,
    "name": "Swablu",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 45,
      "Attack": 40,
      "Defense": 60,
      "Sp. Attack": 40,
      "Sp. Defense": 75,
      "Speed": 50,
      "Weight": 12,
      "Height": 4
    },
    "img_name": require("./images/333.png")
  },
  {
    "id": 334,
    "name": "Altaria",
    "type": [
      "Dragon",
      "Flying"
    ],
    "base": {
      "HP": 75,
      "Attack": 70,
      "Defense": 90,
      "Sp. Attack": 70,
      "Sp. Defense": 105,
      "Speed": 80,
      "Weight": 206,
      "Height": 11
    },
    "img_name": require("./images/334.png")
  },
  {
    "id": 335,
    "name": "Zangoose",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 73,
      "Attack": 115,
      "Defense": 60,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 90,
      "Weight": 403,
      "Height": 13
    },
    "img_name": require("./images/335.png")
  },
  {
    "id": 336,
    "name": "Seviper",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 73,
      "Attack": 100,
      "Defense": 60,
      "Sp. Attack": 100,
      "Sp. Defense": 60,
      "Speed": 65,
      "Weight": 525,
      "Height": 27
    },
    "img_name": require("./images/336.png")
  },
  {
    "id": 337,
    "name": "Lunatone",
    "type": [
      "Rock",
      "Psychic"
    ],
    "base": {
      "HP": 90,
      "Attack": 55,
      "Defense": 65,
      "Sp. Attack": 95,
      "Sp. Defense": 85,
      "Speed": 70,
      "Weight": 1680,
      "Height": 10
    },
    "img_name": require("./images/337.png")
  },
  {
    "id": 338,
    "name": "Solrock",
    "type": [
      "Rock",
      "Psychic"
    ],
    "base": {
      "HP": 90,
      "Attack": 95,
      "Defense": 85,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      "Speed": 70,
      "Weight": 1540,
      "Height": 12
    },
    "img_name": require("./images/338.png")
  },
  {
    "id": 339,
    "name": "Barboach",
    "type": [
      "Water",
      "Ground"
    ],
    "base": {
      "HP": 50,
      "Attack": 48,
      "Defense": 43,
      "Sp. Attack": 46,
      "Sp. Defense": 41,
      "Speed": 60,
      "Weight": 19,
      "Height": 4
    },
    "img_name": require("./images/339.png")
  },
  {
    "id": 340,
    "name": "Whiscash",
    "type": [
      "Water",
      "Ground"
    ],
    "base": {
      "HP": 110,
      "Attack": 78,
      "Defense": 73,
      "Sp. Attack": 76,
      "Sp. Defense": 71,
      "Speed": 60,
      "Weight": 236,
      "Height": 9
    },
    "img_name": require("./images/340.png")
  },
  {
    "id": 341,
    "name": "Corphish",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 43,
      "Attack": 80,
      "Defense": 65,
      "Sp. Attack": 50,
      "Sp. Defense": 35,
      "Speed": 35,
      "Weight": 115,
      "Height": 6
    },
    "img_name": require("./images/341.png")
  },
  {
    "id": 342,
    "name": "Crawdaunt",
    "type": [
      "Water",
      "Dark"
    ],
    "base": {
      "HP": 63,
      "Attack": 120,
      "Defense": 85,
      "Sp. Attack": 90,
      "Sp. Defense": 55,
      "Speed": 55,
      "Weight": 328,
      "Height": 11
    },
    "img_name": require("./images/342.png")
  },
  {
    "id": 343,
    "name": "Baltoy",
    "type": [
      "Ground",
      "Psychic"
    ],
    "base": {
      "HP": 40,
      "Attack": 40,
      "Defense": 55,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      "Speed": 55,
      "Weight": 215,
      "Height": 5
    },
    "img_name": require("./images/343.png")
  },
  {
    "id": 344,
    "name": "Claydol",
    "type": [
      "Ground",
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 70,
      "Defense": 105,
      "Sp. Attack": 70,
      "Sp. Defense": 120,
      "Speed": 75,
      "Weight": 1080,
      "Height": 15
    },
    "img_name": require("./images/344.png")
  },
  {
    "id": 345,
    "name": "Lileep",
    "type": [
      "Rock",
      "Grass"
    ],
    "base": {
      "HP": 66,
      "Attack": 41,
      "Defense": 77,
      "Sp. Attack": 61,
      "Sp. Defense": 87,
      "Speed": 23,
      "Weight": 238,
      "Height": 10
    },
    "img_name": require("./images/345.png")
  },
  {
    "id": 346,
    "name": "Cradily",
    "type": [
      "Rock",
      "Grass"
    ],
    "base": {
      "HP": 86,
      "Attack": 81,
      "Defense": 97,
      "Sp. Attack": 81,
      "Sp. Defense": 107,
      "Speed": 43,
      "Weight": 604,
      "Height": 15
    },
    "img_name": require("./images/346.png")
  },
  {
    "id": 347,
    "name": "Anorith",
    "type": [
      "Rock",
      "Bug"
    ],
    "base": {
      "HP": 45,
      "Attack": 95,
      "Defense": 50,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      "Speed": 75,
      "Weight": 125,
      "Height": 7
    },
    "img_name": require("./images/347.png")
  },
  {
    "id": 348,
    "name": "Armaldo",
    "type": [
      "Rock",
      "Bug"
    ],
    "base": {
      "HP": 75,
      "Attack": 125,
      "Defense": 100,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      "Speed": 45,
      "Weight": 682,
      "Height": 15
    },
    "img_name": require("./images/348.png")
  },
  {
    "id": 349,
    "name": "Feebas",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 20,
      "Attack": 15,
      "Defense": 20,
      "Sp. Attack": 10,
      "Sp. Defense": 55,
      "Speed": 80,
      "Weight": 74,
      "Height": 6
    },
    "img_name": require("./images/349.png")
  },
  {
    "id": 350,
    "name": "Milotic",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 95,
      "Attack": 60,
      "Defense": 79,
      "Sp. Attack": 100,
      "Sp. Defense": 125,
      "Speed": 81,
      "Weight": 1620,
      "Height": 62
    },
    "img_name": require("./images/350.png")
  },
  {
    "id": 351,
    "name": "Castform",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 70,
      "Attack": 70,
      "Defense": 70,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      "Speed": 70,
      "Weight": 8,
      "Height": 3
    },
    "img_name": require("./images/351.png")
  },
  {
    "id": 352,
    "name": "Kecleon",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 60,
      "Attack": 90,
      "Defense": 70,
      "Sp. Attack": 60,
      "Sp. Defense": 120,
      "Speed": 40,
      "Weight": 220,
      "Height": 10
    },
    "img_name": require("./images/352.png")
  },
  {
    "id": 353,
    "name": "Shuppet",
    "type": [
      "Ghost"
    ],
    "base": {
      "HP": 44,
      "Attack": 75,
      "Defense": 35,
      "Sp. Attack": 63,
      "Sp. Defense": 33,
      "Speed": 45,
      "Weight": 23,
      "Height": 6
    },
    "img_name": require("./images/353.png")
  },
  {
    "id": 354,
    "name": "Banette",
    "type": [
      "Ghost"
    ],
    "base": {
      "HP": 64,
      "Attack": 115,
      "Defense": 65,
      "Sp. Attack": 83,
      "Sp. Defense": 63,
      "Speed": 65,
      "Weight": 125,
      "Height": 11
    },
    "img_name": require("./images/354.png")
  },
  {
    "id": 355,
    "name": "Duskull",
    "type": [
      "Ghost"
    ],
    "base": {
      "HP": 20,
      "Attack": 40,
      "Defense": 90,
      "Sp. Attack": 30,
      "Sp. Defense": 90,
      "Speed": 25,
      "Weight": 150,
      "Height": 8
    },
    "img_name": require("./images/355.png")
  },
  {
    "id": 356,
    "name": "Dusclops",
    "type": [
      "Ghost"
    ],
    "base": {
      "HP": 40,
      "Attack": 70,
      "Defense": 130,
      "Sp. Attack": 60,
      "Sp. Defense": 130,
      "Speed": 25,
      "Weight": 306,
      "Height": 16
    },
    "img_name": require("./images/356.png")
  },
  {
    "id": 357,
    "name": "Tropius",
    "type": [
      "Grass",
      "Flying"
    ],
    "base": {
      "HP": 99,
      "Attack": 68,
      "Defense": 83,
      "Sp. Attack": 72,
      "Sp. Defense": 87,
      "Speed": 51,
      "Weight": 1000,
      "Height": 20
    },
    "img_name": require("./images/357.png")
  },
  {
    "id": 358,
    "name": "Chimecho",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 75,
      "Attack": 50,
      "Defense": 80,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      "Speed": 65,
      "Weight": 10,
      "Height": 6
    },
    "img_name": require("./images/358.png")
  },
  {
    "id": 359,
    "name": "Absol",
    "type": [
      "Dark"
    ],
    "base": {
      "HP": 65,
      "Attack": 130,
      "Defense": 60,
      "Sp. Attack": 75,
      "Sp. Defense": 60,
      "Speed": 75,
      "Weight": 470,
      "Height": 12
    },
    "img_name": require("./images/359.png")
  },
  {
    "id": 360,
    "name": "Wynaut",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 95,
      "Attack": 23,
      "Defense": 48,
      "Sp. Attack": 23,
      "Sp. Defense": 48,
      "Speed": 23,
      "Weight": 140,
      "Height": 6
    },
    "img_name": require("./images/360.png")
  },
  {
    "id": 361,
    "name": "Snorunt",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 50,
      "Attack": 50,
      "Defense": 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 50,
      "Weight": 168,
      "Height": 7
    },
    "img_name": require("./images/361.png")
  },
  {
    "id": 362,
    "name": "Glalie",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 80,
      "Attack": 80,
      "Defense": 80,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 80,
      "Weight": 2565,
      "Height": 15
    },
    "img_name": require("./images/362.png")
  },
  {
    "id": 363,
    "name": "Spheal",
    "type": [
      "Ice",
      "Water"
    ],
    "base": {
      "HP": 70,
      "Attack": 40,
      "Defense": 50,
      "Sp. Attack": 55,
      "Sp. Defense": 50,
      "Speed": 25,
      "Weight": 395,
      "Height": 8
    },
    "img_name": require("./images/363.png")
  },
  {
    "id": 364,
    "name": "Sealeo",
    "type": [
      "Ice",
      "Water"
    ],
    "base": {
      "HP": 90,
      "Attack": 60,
      "Defense": 70,
      "Sp. Attack": 75,
      "Sp. Defense": 70,
      "Speed": 45,
      "Weight": 876,
      "Height": 11
    },
    "img_name": require("./images/364.png")
  },
  {
    "id": 365,
    "name": "Walrein",
    "type": [
      "Ice",
      "Water"
    ],
    "base": {
      "HP": 110,
      "Attack": 80,
      "Defense": 90,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      "Speed": 65,
      "Weight": 1506,
      "Height": 14
    },
    "img_name": require("./images/365.png")
  },
  {
    "id": 366,
    "name": "Clamperl",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 35,
      "Attack": 64,
      "Defense": 85,
      "Sp. Attack": 74,
      "Sp. Defense": 55,
      "Speed": 32,
      "Weight": 525,
      "Height": 4
    },
    "img_name": require("./images/366.png")
  },
  {
    "id": 367,
    "name": "Huntail",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 55,
      "Attack": 104,
      "Defense": 105,
      "Sp. Attack": 94,
      "Sp. Defense": 75,
      "Speed": 52,
      "Weight": 270,
      "Height": 17
    },
    "img_name": require("./images/367.png")
  },
  {
    "id": 368,
    "name": "Gorebyss",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 55,
      "Attack": 84,
      "Defense": 105,
      "Sp. Attack": 114,
      "Sp. Defense": 75,
      "Speed": 52,
      "Weight": 226,
      "Height": 18
    },
    "img_name": require("./images/368.png")
  },
  {
    "id": 369,
    "name": "Relicanth",
    "type": [
      "Water",
      "Rock"
    ],
    "base": {
      "HP": 100,
      "Attack": 90,
      "Defense": 130,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      "Speed": 55,
      "Weight": 234,
      "Height": 10
    },
    "img_name": require("./images/369.png")
  },
  {
    "id": 370,
    "name": "Luvdisc",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 43,
      "Attack": 30,
      "Defense": 55,
      "Sp. Attack": 40,
      "Sp. Defense": 65,
      "Speed": 97,
      "Weight": 87,
      "Height": 6
    },
    "img_name": require("./images/370.png")
  },
  {
    "id": 371,
    "name": "Bagon",
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 45,
      "Attack": 75,
      "Defense": 60,
      "Sp. Attack": 40,
      "Sp. Defense": 30,
      "Speed": 50,
      "Weight": 421,
      "Height": 6
    },
    "img_name": require("./images/371.png")
  },
  {
    "id": 372,
    "name": "Shelgon",
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 65,
      "Attack": 95,
      "Defense": 100,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      "Speed": 50,
      "Weight": 1105,
      "Height": 11
    },
    "img_name": require("./images/372.png")
  },
  {
    "id": 373,
    "name": "Salamence",
    "type": [
      "Dragon",
      "Flying"
    ],
    "base": {
      "HP": 95,
      "Attack": 135,
      "Defense": 80,
      "Sp. Attack": 110,
      "Sp. Defense": 80,
      "Speed": 100,
      "Weight": 1026,
      "Height": 15
    },
    "img_name": require("./images/373.png")
  },
  {
    "id": 374,
    "name": "Beldum",
    "type": [
      "Steel",
      "Psychic"
    ],
    "base": {
      "HP": 40,
      "Attack": 55,
      "Defense": 80,
      "Sp. Attack": 35,
      "Sp. Defense": 60,
      "Speed": 30,
      "Weight": 952,
      "Height": 6
    },
    "img_name": require("./images/374.png")
  },
  {
    "id": 375,
    "name": "Metang",
    "type": [
      "Steel",
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 75,
      "Defense": 100,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      "Speed": 50,
      "Weight": 2025,
      "Height": 12
    },
    "img_name": require("./images/375.png")
  },
  {
    "id": 376,
    "name": "Metagross",
    "type": [
      "Steel",
      "Psychic"
    ],
    "base": {
      "HP": 80,
      "Attack": 135,
      "Defense": 130,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      "Speed": 70,
      "Weight": 5500,
      "Height": 16
    },
    "img_name": require("./images/376.png")
  },
  {
    "id": 377,
    "name": "Regirock",
    "type": [
      "Rock"
    ],
    "base": {
      "HP": 80,
      "Attack": 100,
      "Defense": 200,
      "Sp. Attack": 50,
      "Sp. Defense": 100,
      "Speed": 50,
      "Weight": 2300,
      "Height": 17
    },
    "img_name": require("./images/377.png")
  },
  {
    "id": 378,
    "name": "Regice",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 80,
      "Attack": 50,
      "Defense": 100,
      "Sp. Attack": 100,
      "Sp. Defense": 200,
      "Speed": 50,
      "Weight": 1750,
      "Height": 18
    },
    "img_name": require("./images/378.png")
  },
  {
    "id": 379,
    "name": "Registeel",
    "type": [
      "Steel"
    ],
    "base": {
      "HP": 80,
      "Attack": 75,
      "Defense": 150,
      "Sp. Attack": 75,
      "Sp. Defense": 150,
      "Speed": 50,
      "Weight": 2050,
      "Height": 19
    },
    "img_name": require("./images/379.png")
  },
  {
    "id": 380,
    "name": "Latias",
    "type": [
      "Dragon",
      "Psychic"
    ],
    "base": {
      "HP": 80,
      "Attack": 80,
      "Defense": 90,
      "Sp. Attack": 110,
      "Sp. Defense": 130,
      "Speed": 110,
      "Weight": 400,
      "Height": 14
    },
    "img_name": require("./images/380.png")
  },
  {
    "id": 381,
    "name": "Latios",
    "type": [
      "Dragon",
      "Psychic"
    ],
    "base": {
      "HP": 80,
      "Attack": 90,
      "Defense": 80,
      "Sp. Attack": 130,
      "Sp. Defense": 110,
      "Speed": 110,
      "Weight": 600,
      "Height": 20
    },
    "img_name": require("./images/381.png")
  },
  {
    "id": 382,
    "name": "Kyogre",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 90,
      "Sp. Attack": 150,
      "Sp. Defense": 140,
      "Speed": 90,
      "Weight": 3520,
      "Height": 45
    },
    "img_name": require("./images/382.png")
  },
  {
    "id": 383,
    "name": "Groudon",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 100,
      "Attack": 150,
      "Defense": 140,
      "Sp. Attack": 100,
      "Sp. Defense": 90,
      "Speed": 90,
      "Weight": 9500,
      "Height": 35
    },
    "img_name": require("./images/383.png")
  },
  {
    "id": 384,
    "name": "Rayquaza",
    "type": [
      "Dragon",
      "Flying"
    ],
    "base": {
      "HP": 105,
      "Attack": 150,
      "Defense": 90,
      "Sp. Attack": 150,
      "Sp. Defense": 90,
      "Speed": 95,
      "Weight": 2065,
      "Height": 70
    },
    "img_name": require("./images/384.png")
  },
  {
    "id": 385,
    "name": "Jirachi",
    "type": [
      "Steel",
      "Psychic"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 100,
      "Weight": 11,
      "Height": 3
    },
    "img_name": require("./images/385.png")
  },
  {
    "id": 386,
    "name": "Deoxys",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 50,
      "Attack": 150,
      "Defense": 50,
      "Sp. Attack": 150,
      "Sp. Defense": 50,
      "Speed": 150,
      "Weight": 608,
      "Height": 17
    },
    "img_name": require("./images/386.png")
  },
  {
    "id": 387,
    "name": "Turtwig",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 55,
      "Attack": 68,
      "Defense": 64,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      "Speed": 31,
      "Weight": 102,
      "Height": 4
    },
    "img_name": require("./images/387.png")
  },
  {
    "id": 388,
    "name": "Grotle",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 75,
      "Attack": 89,
      "Defense": 85,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      "Speed": 36,
      "Weight": 970,
      "Height": 11
    },
    "img_name": require("./images/388.png")
  },
  {
    "id": 389,
    "name": "Torterra",
    "type": [
      "Grass",
      "Ground"
    ],
    "base": {
      "HP": 95,
      "Attack": 109,
      "Defense": 105,
      "Sp. Attack": 75,
      "Sp. Defense": 85,
      "Speed": 56,
      "Weight": 3100,
      "Height": 22
    },
    "img_name": require("./images/389.png")
  },
  {
    "id": 390,
    "name": "Chimchar",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 44,
      "Attack": 58,
      "Defense": 44,
      "Sp. Attack": 58,
      "Sp. Defense": 44,
      "Speed": 61,
      "Weight": 62,
      "Height": 5
    },
    "img_name": require("./images/390.png")
  },
  {
    "id": 391,
    "name": "Monferno",
    "type": [
      "Fire",
      "Fighting"
    ],
    "base": {
      "HP": 64,
      "Attack": 78,
      "Defense": 52,
      "Sp. Attack": 78,
      "Sp. Defense": 52,
      "Speed": 81,
      "Weight": 220,
      "Height": 9
    },
    "img_name": require("./images/391.png")
  },
  {
    "id": 392,
    "name": "Infernape",
    "type": [
      "Fire",
      "Fighting"
    ],
    "base": {
      "HP": 76,
      "Attack": 104,
      "Defense": 71,
      "Sp. Attack": 104,
      "Sp. Defense": 71,
      "Speed": 108,
      "Weight": 550,
      "Height": 12
    },
    "img_name": require("./images/392.png")
  },
  {
    "id": 393,
    "name": "Piplup",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 53,
      "Attack": 51,
      "Defense": 53,
      "Sp. Attack": 61,
      "Sp. Defense": 56,
      "Speed": 40,
      "Weight": 52,
      "Height": 4
    },
    "img_name": require("./images/393.png")
  },
  {
    "id": 394,
    "name": "Prinplup",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 64,
      "Attack": 66,
      "Defense": 68,
      "Sp. Attack": 81,
      "Sp. Defense": 76,
      "Speed": 50,
      "Weight": 230,
      "Height": 8
    },
    "img_name": require("./images/394.png")
  },
  {
    "id": 395,
    "name": "Empoleon",
    "type": [
      "Water",
      "Steel"
    ],
    "base": {
      "HP": 84,
      "Attack": 86,
      "Defense": 88,
      "Sp. Attack": 111,
      "Sp. Defense": 101,
      "Speed": 60,
      "Weight": 845,
      "Height": 17
    },
    "img_name": require("./images/395.png")
  },
  {
    "id": 396,
    "name": "Starly",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 55,
      "Defense": 30,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 60,
      "Weight": 20,
      "Height": 3
    },
    "img_name": require("./images/396.png")
  },
  {
    "id": 397,
    "name": "Staravia",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 55,
      "Attack": 75,
      "Defense": 50,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 80,
      "Weight": 155,
      "Height": 6
    },
    "img_name": require("./images/397.png")
  },
  {
    "id": 398,
    "name": "Staraptor",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 85,
      "Attack": 120,
      "Defense": 70,
      "Sp. Attack": 50,
      "Sp. Defense": 60,
      "Speed": 100,
      "Weight": 249,
      "Height": 12
    },
    "img_name": require("./images/398.png")
  },
  {
    "id": 399,
    "name": "Bidoof",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 59,
      "Attack": 45,
      "Defense": 40,
      "Sp. Attack": 35,
      "Sp. Defense": 40,
      "Speed": 31,
      "Weight": 200,
      "Height": 5
    },
    "img_name": require("./images/399.png")
  },
  {
    "id": 400,
    "name": "Bibarel",
    "type": [
      "Normal",
      "Water"
    ],
    "base": {
      "HP": 79,
      "Attack": 85,
      "Defense": 60,
      "Sp. Attack": 55,
      "Sp. Defense": 60,
      "Speed": 71,
      "Weight": 315,
      "Height": 10
    },
    "img_name": require("./images/400.png")
  },
  {
    "id": 401,
    "name": "Kricketot",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 37,
      "Attack": 25,
      "Defense": 41,
      "Sp. Attack": 25,
      "Sp. Defense": 41,
      "Speed": 25,
      "Weight": 22,
      "Height": 3
    },
    "img_name": require("./images/401.png")
  },
  {
    "id": 402,
    "name": "Kricketune",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 77,
      "Attack": 85,
      "Defense": 51,
      "Sp. Attack": 55,
      "Sp. Defense": 51,
      "Speed": 65,
      "Weight": 255,
      "Height": 10
    },
    "img_name": require("./images/402.png")
  },
  {
    "id": 403,
    "name": "Shinx",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 45,
      "Attack": 65,
      "Defense": 34,
      "Sp. Attack": 40,
      "Sp. Defense": 34,
      "Speed": 45,
      "Weight": 95,
      "Height": 5
    },
    "img_name": require("./images/403.png")
  },
  {
    "id": 404,
    "name": "Luxio",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 60,
      "Attack": 85,
      "Defense": 49,
      "Sp. Attack": 60,
      "Sp. Defense": 49,
      "Speed": 60,
      "Weight": 305,
      "Height": 9
    },
    "img_name": require("./images/404.png")
  },
  {
    "id": 405,
    "name": "Luxray",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 80,
      "Attack": 120,
      "Defense": 79,
      "Sp. Attack": 95,
      "Sp. Defense": 79,
      "Speed": 70,
      "Weight": 420,
      "Height": 14
    },
    "img_name": require("./images/405.png")
  },
  {
    "id": 406,
    "name": "Budew",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 35,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      "Speed": 55,
      "Weight": 12,
      "Height": 2
    },
    "img_name": require("./images/406.png")
  },
  {
    "id": 407,
    "name": "Roserade",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 70,
      "Defense": 65,
      "Sp. Attack": 125,
      "Sp. Defense": 105,
      "Speed": 90,
      "Weight": 145,
      "Height": 9
    },
    "img_name": require("./images/407.png")
  },
  {
    "id": 408,
    "name": "Cranidos",
    "type": [
      "Rock"
    ],
    "base": {
      "HP": 67,
      "Attack": 125,
      "Defense": 40,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 58,
      "Weight": 315,
      "Height": 9
    },
    "img_name": require("./images/408.png")
  },
  {
    "id": 409,
    "name": "Rampardos",
    "type": [
      "Rock"
    ],
    "base": {
      "HP": 97,
      "Attack": 165,
      "Defense": 60,
      "Sp. Attack": 65,
      "Sp. Defense": 50,
      "Speed": 58,
      "Weight": 1025,
      "Height": 16
    },
    "img_name": require("./images/409.png")
  },
  {
    "id": 410,
    "name": "Shieldon",
    "type": [
      "Rock",
      "Steel"
    ],
    "base": {
      "HP": 30,
      "Attack": 42,
      "Defense": 118,
      "Sp. Attack": 42,
      "Sp. Defense": 88,
      "Speed": 30,
      "Weight": 570,
      "Height": 5
    },
    "img_name": require("./images/410.png")
  },
  {
    "id": 411,
    "name": "Bastiodon",
    "type": [
      "Rock",
      "Steel"
    ],
    "base": {
      "HP": 60,
      "Attack": 52,
      "Defense": 168,
      "Sp. Attack": 47,
      "Sp. Defense": 138,
      "Speed": 30,
      "Weight": 1495,
      "Height": 13
    },
    "img_name": require("./images/411.png")
  },
  {
    "id": 412,
    "name": "Burmy",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 40,
      "Attack": 29,
      "Defense": 45,
      "Sp. Attack": 29,
      "Sp. Defense": 45,
      "Speed": 36,
      "Weight": 34,
      "Height": 2
    },
    "img_name": require("./images/412.png")
  },
  {
    "id": 413,
    "name": "Wormadam",
    "type": [
      "Bug",
      "Grass"
    ],
    "base": {
      "HP": 60,
      "Attack": 59,
      "Defense": 85,
      "Sp. Attack": 79,
      "Sp. Defense": 105,
      "Speed": 36,
      "Weight": 65,
      "Height": 5
    },
    "img_name": require("./images/413.png")
  },
  {
    "id": 414,
    "name": "Mothim",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 70,
      "Attack": 94,
      "Defense": 50,
      "Sp. Attack": 94,
      "Sp. Defense": 50,
      "Speed": 66,
      "Weight": 233,
      "Height": 9
    },
    "img_name": require("./images/414.png")
  },
  {
    "id": 415,
    "name": "Combee",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 30,
      "Attack": 30,
      "Defense": 42,
      "Sp. Attack": 30,
      "Sp. Defense": 42,
      "Speed": 70,
      "Weight": 55,
      "Height": 3
    },
    "img_name": require("./images/415.png")
  },
  {
    "id": 416,
    "name": "Vespiquen",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 70,
      "Attack": 80,
      "Defense": 102,
      "Sp. Attack": 80,
      "Sp. Defense": 102,
      "Speed": 40,
      "Weight": 385,
      "Height": 12
    },
    "img_name": require("./images/416.png")
  },
  {
    "id": 417,
    "name": "Pachirisu",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 60,
      "Attack": 45,
      "Defense": 70,
      "Sp. Attack": 45,
      "Sp. Defense": 90,
      "Speed": 95,
      "Weight": 39,
      "Height": 4
    },
    "img_name": require("./images/417.png")
  },
  {
    "id": 418,
    "name": "Buizel",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 55,
      "Attack": 65,
      "Defense": 35,
      "Sp. Attack": 60,
      "Sp. Defense": 30,
      "Speed": 85,
      "Weight": 295,
      "Height": 7
    },
    "img_name": require("./images/418.png")
  },
  {
    "id": 419,
    "name": "Floatzel",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 85,
      "Attack": 105,
      "Defense": 55,
      "Sp. Attack": 85,
      "Sp. Defense": 50,
      "Speed": 115,
      "Weight": 335,
      "Height": 11
    },
    "img_name": require("./images/419.png")
  },
  {
    "id": 420,
    "name": "Cherubi",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 45,
      "Attack": 35,
      "Defense": 45,
      "Sp. Attack": 62,
      "Sp. Defense": 53,
      "Speed": 35,
      "Weight": 33,
      "Height": 4
    },
    "img_name": require("./images/420.png")
  },
  {
    "id": 421,
    "name": "Cherrim",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 70,
      "Attack": 60,
      "Defense": 70,
      "Sp. Attack": 87,
      "Sp. Defense": 78,
      "Speed": 85,
      "Weight": 93,
      "Height": 5
    },
    "img_name": require("./images/421.png")
  },
  {
    "id": 422,
    "name": "Shellos",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 76,
      "Attack": 48,
      "Defense": 48,
      "Sp. Attack": 57,
      "Sp. Defense": 62,
      "Speed": 34,
      "Weight": 63,
      "Height": 3
    },
    "img_name": require("./images/422.png")
  },
  {
    "id": 423,
    "name": "Gastrodon",
    "type": [
      "Water",
      "Ground"
    ],
    "base": {
      "HP": 111,
      "Attack": 83,
      "Defense": 68,
      "Sp. Attack": 92,
      "Sp. Defense": 82,
      "Speed": 39,
      "Weight": 299,
      "Height": 9
    },
    "img_name": require("./images/423.png")
  },
  {
    "id": 424,
    "name": "Ambipom",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 75,
      "Attack": 100,
      "Defense": 66,
      "Sp. Attack": 60,
      "Sp. Defense": 66,
      "Speed": 115,
      "Weight": 203,
      "Height": 12
    },
    "img_name": require("./images/424.png")
  },
  {
    "id": 425,
    "name": "Drifloon",
    "type": [
      "Ghost",
      "Flying"
    ],
    "base": {
      "HP": 90,
      "Attack": 50,
      "Defense": 34,
      "Sp. Attack": 60,
      "Sp. Defense": 44,
      "Speed": 70,
      "Weight": 12,
      "Height": 4
    },
    "img_name": require("./images/425.png")
  },
  {
    "id": 426,
    "name": "Drifblim",
    "type": [
      "Ghost",
      "Flying"
    ],
    "base": {
      "HP": 150,
      "Attack": 80,
      "Defense": 44,
      "Sp. Attack": 90,
      "Sp. Defense": 54,
      "Speed": 80,
      "Weight": 150,
      "Height": 12
    },
    "img_name": require("./images/426.png")
  },
  {
    "id": 427,
    "name": "Buneary",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 55,
      "Attack": 66,
      "Defense": 44,
      "Sp. Attack": 44,
      "Sp. Defense": 56,
      "Speed": 85,
      "Weight": 55,
      "Height": 4
    },
    "img_name": require("./images/427.png")
  },
  {
    "id": 428,
    "name": "Lopunny",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 65,
      "Attack": 76,
      "Defense": 84,
      "Sp. Attack": 54,
      "Sp. Defense": 96,
      "Speed": 105,
      "Weight": 333,
      "Height": 12
    },
    "img_name": require("./images/428.png")
  },
  {
    "id": 429,
    "name": "Mismagius",
    "type": [
      "Ghost"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 60,
      "Sp. Attack": 105,
      "Sp. Defense": 105,
      "Speed": 105,
      "Weight": 44,
      "Height": 9
    },
    "img_name": require("./images/429.png")
  },
  {
    "id": 430,
    "name": "Honchkrow",
    "type": [
      "Dark",
      "Flying"
    ],
    "base": {
      "HP": 100,
      "Attack": 125,
      "Defense": 52,
      "Sp. Attack": 105,
      "Sp. Defense": 52,
      "Speed": 71,
      "Weight": 273,
      "Height": 9
    },
    "img_name": require("./images/430.png")
  },
  {
    "id": 431,
    "name": "Glameow",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 49,
      "Attack": 55,
      "Defense": 42,
      "Sp. Attack": 42,
      "Sp. Defense": 37,
      "Speed": 85,
      "Weight": 39,
      "Height": 5
    },
    "img_name": require("./images/431.png")
  },
  {
    "id": 432,
    "name": "Purugly",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 71,
      "Attack": 82,
      "Defense": 64,
      "Sp. Attack": 64,
      "Sp. Defense": 59,
      "Speed": 112,
      "Weight": 438,
      "Height": 10
    },
    "img_name": require("./images/432.png")
  },
  {
    "id": 433,
    "name": "Chingling",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 45,
      "Attack": 30,
      "Defense": 50,
      "Sp. Attack": 65,
      "Sp. Defense": 50,
      "Speed": 45,
      "Weight": 6,
      "Height": 2
    },
    "img_name": require("./images/433.png")
  },
  {
    "id": 434,
    "name": "Stunky",
    "type": [
      "Poison",
      "Dark"
    ],
    "base": {
      "HP": 63,
      "Attack": 63,
      "Defense": 47,
      "Sp. Attack": 41,
      "Sp. Defense": 41,
      "Speed": 74,
      "Weight": 192,
      "Height": 4
    },
    "img_name": require("./images/434.png")
  },
  {
    "id": 435,
    "name": "Skuntank",
    "type": [
      "Poison",
      "Dark"
    ],
    "base": {
      "HP": 103,
      "Attack": 93,
      "Defense": 67,
      "Sp. Attack": 71,
      "Sp. Defense": 61,
      "Speed": 84,
      "Weight": 380,
      "Height": 10
    },
    "img_name": require("./images/435.png")
  },
  {
    "id": 436,
    "name": "Bronzor",
    "type": [
      "Steel",
      "Psychic"
    ],
    "base": {
      "HP": 57,
      "Attack": 24,
      "Defense": 86,
      "Sp. Attack": 24,
      "Sp. Defense": 86,
      "Speed": 23,
      "Weight": 605,
      "Height": 5
    },
    "img_name": require("./images/436.png")
  },
  {
    "id": 437,
    "name": "Bronzong",
    "type": [
      "Steel",
      "Psychic"
    ],
    "base": {
      "HP": 67,
      "Attack": 89,
      "Defense": 116,
      "Sp. Attack": 79,
      "Sp. Defense": 116,
      "Speed": 33,
      "Weight": 1870,
      "Height": 13
    },
    "img_name": require("./images/437.png")
  },
  {
    "id": 438,
    "name": "Bonsly",
    "type": [
      "Rock"
    ],
    "base": {
      "HP": 50,
      "Attack": 80,
      "Defense": 95,
      "Sp. Attack": 10,
      "Sp. Defense": 45,
      "Speed": 10,
      "Weight": 150,
      "Height": 5
    },
    "img_name": require("./images/438.png")
  },
  {
    "id": 439,
    "name": "Mime Jr.",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "base": {
      "HP": 20,
      "Attack": 25,
      "Defense": 45,
      "Sp. Attack": 70,
      "Sp. Defense": 90,
      "Speed": 60,
      "Weight": 130,
      "Height": 6
    },
    "img_name": require("./images/439.png")
  },
  {
    "id": 440,
    "name": "Happiny",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 100,
      "Attack": 5,
      "Defense": 5,
      "Sp. Attack": 15,
      "Sp. Defense": 65,
      "Speed": 30,
      "Weight": 244,
      "Height": 6
    },
    "img_name": require("./images/440.png")
  },
  {
    "id": 441,
    "name": "Chatot",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 76,
      "Attack": 65,
      "Defense": 45,
      "Sp. Attack": 92,
      "Sp. Defense": 42,
      "Speed": 91,
      "Weight": 19,
      "Height": 5
    },
    "img_name": require("./images/441.png")
  },
  {
    "id": 442,
    "name": "Spiritomb",
    "type": [
      "Ghost",
      "Dark"
    ],
    "base": {
      "HP": 50,
      "Attack": 92,
      "Defense": 108,
      "Sp. Attack": 92,
      "Sp. Defense": 108,
      "Speed": 35,
      "Weight": 1080,
      "Height": 10
    },
    "img_name": require("./images/442.png")
  },
  {
    "id": 443,
    "name": "Gible",
    "type": [
      "Dragon",
      "Ground"
    ],
    "base": {
      "HP": 58,
      "Attack": 70,
      "Defense": 45,
      "Sp. Attack": 40,
      "Sp. Defense": 45,
      "Speed": 42,
      "Weight": 205,
      "Height": 7
    },
    "img_name": require("./images/443.png")
  },
  {
    "id": 444,
    "name": "Gabite",
    "type": [
      "Dragon",
      "Ground"
    ],
    "base": {
      "HP": 68,
      "Attack": 90,
      "Defense": 65,
      "Sp. Attack": 50,
      "Sp. Defense": 55,
      "Speed": 82,
      "Weight": 560,
      "Height": 14
    },
    "img_name": require("./images/444.png")
  },
  {
    "id": 445,
    "name": "Garchomp",
    "type": [
      "Dragon",
      "Ground"
    ],
    "base": {
      "HP": 108,
      "Attack": 130,
      "Defense": 95,
      "Sp. Attack": 80,
      "Sp. Defense": 85,
      "Speed": 102,
      "Weight": 950,
      "Height": 19
    },
    "img_name": require("./images/445.png")
  },
  {
    "id": 446,
    "name": "Munchlax",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 135,
      "Attack": 85,
      "Defense": 40,
      "Sp. Attack": 40,
      "Sp. Defense": 85,
      "Speed": 5,
      "Weight": 1050,
      "Height": 6
    },
    "img_name": require("./images/446.png")
  },
  {
    "id": 447,
    "name": "Riolu",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 40,
      "Attack": 70,
      "Defense": 40,
      "Sp. Attack": 35,
      "Sp. Defense": 40,
      "Speed": 60,
      "Weight": 202,
      "Height": 7
    },
    "img_name": require("./images/447.png")
  },
  {
    "id": 448,
    "name": "Lucario",
    "type": [
      "Fighting",
      "Steel"
    ],
    "base": {
      "HP": 70,
      "Attack": 110,
      "Defense": 70,
      "Sp. Attack": 115,
      "Sp. Defense": 70,
      "Speed": 90,
      "Weight": 540,
      "Height": 12
    },
    "img_name": require("./images/448.png")
  },
  {
    "id": 449,
    "name": "Hippopotas",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 68,
      "Attack": 72,
      "Defense": 78,
      "Sp. Attack": 38,
      "Sp. Defense": 42,
      "Speed": 32,
      "Weight": 495,
      "Height": 8
    },
    "img_name": require("./images/449.png")
  },
  {
    "id": 450,
    "name": "Hippowdon",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 108,
      "Attack": 112,
      "Defense": 118,
      "Sp. Attack": 68,
      "Sp. Defense": 72,
      "Speed": 47,
      "Weight": 3000,
      "Height": 20
    },
    "img_name": require("./images/450.png")
  },
  {
    "id": 451,
    "name": "Skorupi",
    "type": [
      "Poison",
      "Bug"
    ],
    "base": {
      "HP": 40,
      "Attack": 50,
      "Defense": 90,
      "Sp. Attack": 30,
      "Sp. Defense": 55,
      "Speed": 65,
      "Weight": 120,
      "Height": 8
    },
    "img_name": require("./images/451.png")
  },
  {
    "id": 452,
    "name": "Drapion",
    "type": [
      "Poison",
      "Dark"
    ],
    "base": {
      "HP": 70,
      "Attack": 90,
      "Defense": 110,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      "Speed": 95,
      "Weight": 615,
      "Height": 13
    },
    "img_name": require("./images/452.png")
  },
  {
    "id": 453,
    "name": "Croagunk",
    "type": [
      "Poison",
      "Fighting"
    ],
    "base": {
      "HP": 48,
      "Attack": 61,
      "Defense": 40,
      "Sp. Attack": 61,
      "Sp. Defense": 40,
      "Speed": 50,
      "Weight": 230,
      "Height": 7
    },
    "img_name": require("./images/453.png")
  },
  {
    "id": 454,
    "name": "Toxicroak",
    "type": [
      "Poison",
      "Fighting"
    ],
    "base": {
      "HP": 83,
      "Attack": 106,
      "Defense": 65,
      "Sp. Attack": 86,
      "Sp. Defense": 65,
      "Speed": 85,
      "Weight": 444,
      "Height": 13
    },
    "img_name": require("./images/454.png")
  },
  {
    "id": 455,
    "name": "Carnivine",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 74,
      "Attack": 100,
      "Defense": 72,
      "Sp. Attack": 90,
      "Sp. Defense": 72,
      "Speed": 46,
      "Weight": 270,
      "Height": 14
    },
    "img_name": require("./images/455.png")
  },
  {
    "id": 456,
    "name": "Finneon",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 49,
      "Attack": 49,
      "Defense": 56,
      "Sp. Attack": 49,
      "Sp. Defense": 61,
      "Speed": 66,
      "Weight": 70,
      "Height": 4
    },
    "img_name": require("./images/456.png")
  },
  {
    "id": 457,
    "name": "Lumineon",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 69,
      "Attack": 69,
      "Defense": 76,
      "Sp. Attack": 69,
      "Sp. Defense": 86,
      "Speed": 91,
      "Weight": 240,
      "Height": 12
    },
    "img_name": require("./images/457.png")
  },
  {
    "id": 458,
    "name": "Mantyke",
    "type": [
      "Water",
      "Flying"
    ],
    "base": {
      "HP": 45,
      "Attack": 20,
      "Defense": 50,
      "Sp. Attack": 60,
      "Sp. Defense": 120,
      "Speed": 50,
      "Weight": 650,
      "Height": 10
    },
    "img_name": require("./images/458.png")
  },
  {
    "id": 459,
    "name": "Snover",
    "type": [
      "Grass",
      "Ice"
    ],
    "base": {
      "HP": 60,
      "Attack": 62,
      "Defense": 50,
      "Sp. Attack": 62,
      "Sp. Defense": 60,
      "Speed": 40,
      "Weight": 505,
      "Height": 10
    },
    "img_name": require("./images/459.png")
  },
  {
    "id": 460,
    "name": "Abomasnow",
    "type": [
      "Grass",
      "Ice"
    ],
    "base": {
      "HP": 90,
      "Attack": 92,
      "Defense": 75,
      "Sp. Attack": 92,
      "Sp. Defense": 85,
      "Speed": 60,
      "Weight": 1355,
      "Height": 22
    },
    "img_name": require("./images/460.png")
  },
  {
    "id": 461,
    "name": "Weavile",
    "type": [
      "Dark",
      "Ice"
    ],
    "base": {
      "HP": 70,
      "Attack": 120,
      "Defense": 65,
      "Sp. Attack": 45,
      "Sp. Defense": 85,
      "Speed": 125,
      "Weight": 340,
      "Height": 11
    },
    "img_name": require("./images/461.png")
  },
  {
    "id": 462,
    "name": "Magnezone",
    "type": [
      "Electric",
      "Steel"
    ],
    "base": {
      "HP": 70,
      "Attack": 70,
      "Defense": 115,
      "Sp. Attack": 130,
      "Sp. Defense": 90,
      "Speed": 60,
      "Weight": 1800,
      "Height": 12
    },
    "img_name": require("./images/462.png")
  },
  {
    "id": 463,
    "name": "Lickilicky",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 110,
      "Attack": 85,
      "Defense": 95,
      "Sp. Attack": 80,
      "Sp. Defense": 95,
      "Speed": 50,
      "Weight": 1400,
      "Height": 17
    },
    "img_name": require("./images/463.png")
  },
  {
    "id": 464,
    "name": "Rhyperior",
    "type": [
      "Ground",
      "Rock"
    ],
    "base": {
      "HP": 115,
      "Attack": 140,
      "Defense": 130,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 40,
      "Weight": 2828,
      "Height": 24
    },
    "img_name": require("./images/464.png")
  },
  {
    "id": 465,
    "name": "Tangrowth",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 125,
      "Sp. Attack": 110,
      "Sp. Defense": 50,
      "Speed": 50,
      "Weight": 1286,
      "Height": 20
    },
    "img_name": require("./images/465.png")
  },
  {
    "id": 466,
    "name": "Electivire",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 75,
      "Attack": 123,
      "Defense": 67,
      "Sp. Attack": 95,
      "Sp. Defense": 85,
      "Speed": 95,
      "Weight": 1386,
      "Height": 18
    },
    "img_name": require("./images/466.png")
  },
  {
    "id": 467,
    "name": "Magmortar",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 75,
      "Attack": 95,
      "Defense": 67,
      "Sp. Attack": 125,
      "Sp. Defense": 95,
      "Speed": 83,
      "Weight": 680,
      "Height": 16
    },
    "img_name": require("./images/467.png")
  },
  {
    "id": 468,
    "name": "Togekiss",
    "type": [
      "Fairy",
      "Flying"
    ],
    "base": {
      "HP": 85,
      "Attack": 50,
      "Defense": 95,
      "Sp. Attack": 120,
      "Sp. Defense": 115,
      "Speed": 80,
      "Weight": 380,
      "Height": 15
    },
    "img_name": require("./images/468.png")
  },
  {
    "id": 469,
    "name": "Yanmega",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 86,
      "Attack": 76,
      "Defense": 86,
      "Sp. Attack": 116,
      "Sp. Defense": 56,
      "Speed": 95,
      "Weight": 515,
      "Height": 19
    },
    "img_name": require("./images/469.png")
  },
  {
    "id": 470,
    "name": "Leafeon",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 65,
      "Attack": 110,
      "Defense": 130,
      "Sp. Attack": 60,
      "Sp. Defense": 65,
      "Speed": 95,
      "Weight": 255,
      "Height": 10
    },
    "img_name": require("./images/470.png")
  },
  {
    "id": 471,
    "name": "Glaceon",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 65,
      "Attack": 60,
      "Defense": 110,
      "Sp. Attack": 130,
      "Sp. Defense": 95,
      "Speed": 65,
      "Weight": 259,
      "Height": 8
    },
    "img_name": require("./images/471.png")
  },
  {
    "id": 472,
    "name": "Gliscor",
    "type": [
      "Ground",
      "Flying"
    ],
    "base": {
      "HP": 75,
      "Attack": 95,
      "Defense": 125,
      "Sp. Attack": 45,
      "Sp. Defense": 75,
      "Speed": 95,
      "Weight": 425,
      "Height": 20
    },
    "img_name": require("./images/472.png")
  },
  {
    "id": 473,
    "name": "Mamoswine",
    "type": [
      "Ice",
      "Ground"
    ],
    "base": {
      "HP": 110,
      "Attack": 130,
      "Defense": 80,
      "Sp. Attack": 70,
      "Sp. Defense": 60,
      "Speed": 80,
      "Weight": 2910,
      "Height": 25
    },
    "img_name": require("./images/473.png")
  },
  {
    "id": 474,
    "name": "Porygon-Z",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 85,
      "Attack": 80,
      "Defense": 70,
      "Sp. Attack": 135,
      "Sp. Defense": 75,
      "Speed": 90,
      "Weight": 340,
      "Height": 9
    },
    "img_name": require("./images/474.png")
  },
  {
    "id": 475,
    "name": "Gallade",
    "type": [
      "Psychic",
      "Fighting"
    ],
    "base": {
      "HP": 68,
      "Attack": 125,
      "Defense": 65,
      "Sp. Attack": 65,
      "Sp. Defense": 115,
      "Speed": 80,
      "Weight": 520,
      "Height": 16
    },
    "img_name": require("./images/475.png")
  },
  {
    "id": 476,
    "name": "Probopass",
    "type": [
      "Rock",
      "Steel"
    ],
    "base": {
      "HP": 60,
      "Attack": 55,
      "Defense": 145,
      "Sp. Attack": 75,
      "Sp. Defense": 150,
      "Speed": 40,
      "Weight": 3400,
      "Height": 14
    },
    "img_name": require("./images/476.png")
  },
  {
    "id": 477,
    "name": "Dusknoir",
    "type": [
      "Ghost"
    ],
    "base": {
      "HP": 45,
      "Attack": 100,
      "Defense": 135,
      "Sp. Attack": 65,
      "Sp. Defense": 135,
      "Speed": 45,
      "Weight": 1066,
      "Height": 22
    },
    "img_name": require("./images/477.png")
  },
  {
    "id": 478,
    "name": "Froslass",
    "type": [
      "Ice",
      "Ghost"
    ],
    "base": {
      "HP": 70,
      "Attack": 80,
      "Defense": 70,
      "Sp. Attack": 80,
      "Sp. Defense": 70,
      "Speed": 110,
      "Weight": 266,
      "Height": 13
    },
    "img_name": require("./images/478.png")
  },
  {
    "id": 479,
    "name": "Rotom",
    "type": [
      "Electric",
      "Ghost"
    ],
    "base": {
      "HP": 50,
      "Attack": 50,
      "Defense": 77,
      "Sp. Attack": 95,
      "Sp. Defense": 77,
      "Speed": 91,
      "Weight": 3,
      "Height": 3
    },
    "img_name": require("./images/479.png")
  },
  {
    "id": 480,
    "name": "Uxie",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 75,
      "Attack": 75,
      "Defense": 130,
      "Sp. Attack": 75,
      "Sp. Defense": 130,
      "Speed": 95,
      "Weight": 3,
      "Height": 3
    },
    "img_name": require("./images/480.png")
  },
  {
    "id": 481,
    "name": "Mesprit",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 80,
      "Attack": 105,
      "Defense": 105,
      "Sp. Attack": 105,
      "Sp. Defense": 105,
      "Speed": 80,
      "Weight": 3,
      "Height": 3
    },
    "img_name": require("./images/481.png")
  },
  {
    "id": 482,
    "name": "Azelf",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 75,
      "Attack": 125,
      "Defense": 70,
      "Sp. Attack": 125,
      "Sp. Defense": 70,
      "Speed": 115,
      "Weight": 3,
      "Height": 3
    },
    "img_name": require("./images/482.png")
  },
  {
    "id": 483,
    "name": "Dialga",
    "type": [
      "Steel",
      "Dragon"
    ],
    "base": {
      "HP": 100,
      "Attack": 120,
      "Defense": 120,
      "Sp. Attack": 150,
      "Sp. Defense": 100,
      "Speed": 90,
      "Weight": 6830,
      "Height": 54
    },
    "img_name": require("./images/483.png")
  },
  {
    "id": 484,
    "name": "Palkia",
    "type": [
      "Water",
      "Dragon"
    ],
    "base": {
      "HP": 90,
      "Attack": 120,
      "Defense": 100,
      "Sp. Attack": 150,
      "Sp. Defense": 120,
      "Speed": 100,
      "Weight": 3360,
      "Height": 42
    },
    "img_name": require("./images/484.png")
  },
  {
    "id": 485,
    "name": "Heatran",
    "type": [
      "Fire",
      "Steel"
    ],
    "base": {
      "HP": 91,
      "Attack": 90,
      "Defense": 106,
      "Sp. Attack": 130,
      "Sp. Defense": 106,
      "Speed": 77,
      "Weight": 4300,
      "Height": 17
    },
    "img_name": require("./images/485.png")
  },
  {
    "id": 486,
    "name": "Regigigas",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 110,
      "Attack": 160,
      "Defense": 110,
      "Sp. Attack": 80,
      "Sp. Defense": 110,
      "Speed": 100,
      "Weight": 4200,
      "Height": 37
    },
    "img_name": require("./images/486.png")
  },
  {
    "id": 487,
    "name": "Giratina",
    "type": [
      "Ghost",
      "Dragon"
    ],
    "base": {
      "HP": 150,
      "Attack": 100,
      "Defense": 120,
      "Sp. Attack": 100,
      "Sp. Defense": 120,
      "Speed": 90,
      "Weight": 7500,
      "Height": 45
    },
    "img_name": require("./images/487.png")
  },
  {
    "id": 488,
    "name": "Cresselia",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 120,
      "Attack": 70,
      "Defense": 120,
      "Sp. Attack": 75,
      "Sp. Defense": 130,
      "Speed": 85,
      "Weight": 856,
      "Height": 15
    },
    "img_name": require("./images/488.png")
  },
  {
    "id": 489,
    "name": "Phione",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 80,
      "Attack": 80,
      "Defense": 80,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 80,
      "Weight": 31,
      "Height": 4
    },
    "img_name": require("./images/489.png")
  },
  {
    "id": 490,
    "name": "Manaphy",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 100,
      "Weight": 14,
      "Height": 3
    },
    "img_name": require("./images/490.png")
  },
  {
    "id": 491,
    "name": "Darkrai",
    "type": [
      "Dark"
    ],
    "base": {
      "HP": 70,
      "Attack": 90,
      "Defense": 90,
      "Sp. Attack": 135,
      "Sp. Defense": 90,
      "Speed": 125,
      "Weight": 505,
      "Height": 15
    },
    "img_name": require("./images/491.png")
  },
  {
    "id": 492,
    "name": "Shaymin",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 100,
      "Weight": 21,
      "Height": 2
    },
    "img_name": require("./images/492.png")
  },
  {
    "id": 493,
    "name": "Arceus",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 120,
      "Attack": 120,
      "Defense": 120,
      "Sp. Attack": 120,
      "Sp. Defense": 120,
      "Speed": 120,
      "Weight": 3200,
      "Height": 32
    },
    "img_name": require("./images/493.png")
  },
  {
    "id": 494,
    "name": "Victini",
    "type": [
      "Psychic",
      "Fire"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 100,
      "Weight": 40,
      "Height": 4
    },
    "img_name": require("./images/494.png")
  },
  {
    "id": 495,
    "name": "Snivy",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 45,
      "Attack": 45,
      "Defense": 55,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      "Speed": 63,
      "Weight": 81,
      "Height": 6
    },
    "img_name": require("./images/495.png")
  },
  {
    "id": 496,
    "name": "Servine",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 75,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      "Speed": 83,
      "Weight": 160,
      "Height": 8
    },
    "img_name": require("./images/496.png")
  },
  {
    "id": 497,
    "name": "Serperior",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 75,
      "Attack": 75,
      "Defense": 95,
      "Sp. Attack": 75,
      "Sp. Defense": 95,
      "Speed": 113,
      "Weight": 630,
      "Height": 33
    },
    "img_name": require("./images/497.png")
  },
  {
    "id": 498,
    "name": "Tepig",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 65,
      "Attack": 63,
      "Defense": 45,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      "Speed": 45,
      "Weight": 99,
      "Height": 5
    },
    "img_name": require("./images/498.png")
  },
  {
    "id": 499,
    "name": "Pignite",
    "type": [
      "Fire",
      "Fighting"
    ],
    "base": {
      "HP": 90,
      "Attack": 93,
      "Defense": 55,
      "Sp. Attack": 70,
      "Sp. Defense": 55,
      "Speed": 55,
      "Weight": 555,
      "Height": 10
    },
    "img_name": require("./images/499.png")
  },
  {
    "id": 500,
    "name": "Emboar",
    "type": [
      "Fire",
      "Fighting"
    ],
    "base": {
      "HP": 110,
      "Attack": 123,
      "Defense": 65,
      "Sp. Attack": 100,
      "Sp. Defense": 65,
      "Speed": 65,
      "Weight": 1500,
      "Height": 16
    },
    "img_name": require("./images/500.png")
  },
  {
    "id": 501,
    "name": "Oshawott",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 55,
      "Attack": 55,
      "Defense": 45,
      "Sp. Attack": 63,
      "Sp. Defense": 45,
      "Speed": 45,
      "Weight": 59,
      "Height": 5
    },
    "img_name": require("./images/501.png")
  },
  {
    "id": 502,
    "name": "Dewott",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 75,
      "Attack": 75,
      "Defense": 60,
      "Sp. Attack": 83,
      "Sp. Defense": 60,
      "Speed": 60,
      "Weight": 245,
      "Height": 8
    },
    "img_name": require("./images/502.png")
  },
  {
    "id": 503,
    "name": "Samurott",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 95,
      "Attack": 100,
      "Defense": 85,
      "Sp. Attack": 108,
      "Sp. Defense": 70,
      "Speed": 70,
      "Weight": 946,
      "Height": 15
    },
    "img_name": require("./images/503.png")
  },
  {
    "id": 504,
    "name": "Patrat",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 45,
      "Attack": 55,
      "Defense": 39,
      "Sp. Attack": 35,
      "Sp. Defense": 39,
      "Speed": 42,
      "Weight": 116,
      "Height": 5
    },
    "img_name": require("./images/504.png")
  },
  {
    "id": 505,
    "name": "Watchog",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 60,
      "Attack": 85,
      "Defense": 69,
      "Sp. Attack": 60,
      "Sp. Defense": 69,
      "Speed": 77,
      "Weight": 270,
      "Height": 11
    },
    "img_name": require("./images/505.png")
  },
  {
    "id": 506,
    "name": "Lillipup",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 45,
      "Attack": 60,
      "Defense": 45,
      "Sp. Attack": 25,
      "Sp. Defense": 45,
      "Speed": 55,
      "Weight": 41,
      "Height": 4
    },
    "img_name": require("./images/506.png")
  },
  {
    "id": 507,
    "name": "Herdier",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 65,
      "Attack": 80,
      "Defense": 65,
      "Sp. Attack": 35,
      "Sp. Defense": 65,
      "Speed": 60,
      "Weight": 147,
      "Height": 9
    },
    "img_name": require("./images/507.png")
  },
  {
    "id": 508,
    "name": "Stoutland",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 85,
      "Attack": 110,
      "Defense": 90,
      "Sp. Attack": 45,
      "Sp. Defense": 90,
      "Speed": 80,
      "Weight": 610,
      "Height": 12
    },
    "img_name": require("./images/508.png")
  },
  {
    "id": 509,
    "name": "Purrloin",
    "type": [
      "Dark"
    ],
    "base": {
      "HP": 41,
      "Attack": 50,
      "Defense": 37,
      "Sp. Attack": 50,
      "Sp. Defense": 37,
      "Speed": 66,
      "Weight": 101,
      "Height": 4
    },
    "img_name": require("./images/509.png")
  },
  {
    "id": 510,
    "name": "Liepard",
    "type": [
      "Dark"
    ],
    "base": {
      "HP": 64,
      "Attack": 88,
      "Defense": 50,
      "Sp. Attack": 88,
      "Sp. Defense": 50,
      "Speed": 106,
      "Weight": 375,
      "Height": 11
    },
    "img_name": require("./images/510.png")
  },
  {
    "id": 511,
    "name": "Pansage",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 50,
      "Attack": 53,
      "Defense": 48,
      "Sp. Attack": 53,
      "Sp. Defense": 48,
      "Speed": 64,
      "Weight": 105,
      "Height": 6
    },
    "img_name": require("./images/511.png")
  },
  {
    "id": 512,
    "name": "Simisage",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 75,
      "Attack": 98,
      "Defense": 63,
      "Sp. Attack": 98,
      "Sp. Defense": 63,
      "Speed": 101,
      "Weight": 305,
      "Height": 11
    },
    "img_name": require("./images/512.png")
  },
  {
    "id": 513,
    "name": "Pansear",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 50,
      "Attack": 53,
      "Defense": 48,
      "Sp. Attack": 53,
      "Sp. Defense": 48,
      "Speed": 64,
      "Weight": 110,
      "Height": 6
    },
    "img_name": require("./images/513.png")
  },
  {
    "id": 514,
    "name": "Simisear",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 75,
      "Attack": 98,
      "Defense": 63,
      "Sp. Attack": 98,
      "Sp. Defense": 63,
      "Speed": 101,
      "Weight": 280,
      "Height": 10
    },
    "img_name": require("./images/514.png")
  },
  {
    "id": 515,
    "name": "Panpour",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 50,
      "Attack": 53,
      "Defense": 48,
      "Sp. Attack": 53,
      "Sp. Defense": 48,
      "Speed": 64,
      "Weight": 135,
      "Height": 6
    },
    "img_name": require("./images/515.png")
  },
  {
    "id": 516,
    "name": "Simipour",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 75,
      "Attack": 98,
      "Defense": 63,
      "Sp. Attack": 98,
      "Sp. Defense": 63,
      "Speed": 101,
      "Weight": 290,
      "Height": 10
    },
    "img_name": require("./images/516.png")
  },
  {
    "id": 517,
    "name": "Munna",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 76,
      "Attack": 25,
      "Defense": 45,
      "Sp. Attack": 67,
      "Sp. Defense": 55,
      "Speed": 24,
      "Weight": 233,
      "Height": 6
    },
    "img_name": require("./images/517.png")
  },
  {
    "id": 518,
    "name": "Musharna",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 116,
      "Attack": 55,
      "Defense": 85,
      "Sp. Attack": 107,
      "Sp. Defense": 95,
      "Speed": 29,
      "Weight": 605,
      "Height": 11
    },
    "img_name": require("./images/518.png")
  },
  {
    "id": 519,
    "name": "Pidove",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 50,
      "Attack": 55,
      "Defense": 50,
      "Sp. Attack": 36,
      "Sp. Defense": 30,
      "Speed": 43,
      "Weight": 21,
      "Height": 3
    },
    "img_name": require("./images/519.png")
  },
  {
    "id": 520,
    "name": "Tranquill",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 62,
      "Attack": 77,
      "Defense": 62,
      "Sp. Attack": 50,
      "Sp. Defense": 42,
      "Speed": 65,
      "Weight": 150,
      "Height": 6
    },
    "img_name": require("./images/520.png")
  },
  {
    "id": 521,
    "name": "Unfezant",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 80,
      "Attack": 115,
      "Defense": 80,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      "Speed": 93,
      "Weight": 290,
      "Height": 12
    },
    "img_name": require("./images/521.png")
  },
  {
    "id": 522,
    "name": "Blitzle",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 45,
      "Attack": 60,
      "Defense": 32,
      "Sp. Attack": 50,
      "Sp. Defense": 32,
      "Speed": 76,
      "Weight": 298,
      "Height": 8
    },
    "img_name": require("./images/522.png")
  },
  {
    "id": 523,
    "name": "Zebstrika",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 75,
      "Attack": 100,
      "Defense": 63,
      "Sp. Attack": 80,
      "Sp. Defense": 63,
      "Speed": 116,
      "Weight": 795,
      "Height": 16
    },
    "img_name": require("./images/523.png")
  },
  {
    "id": 524,
    "name": "Roggenrola",
    "type": [
      "Rock"
    ],
    "base": {
      "HP": 55,
      "Attack": 75,
      "Defense": 85,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 15,
      "Weight": 180,
      "Height": 4
    },
    "img_name": require("./images/524.png")
  },
  {
    "id": 525,
    "name": "Boldore",
    "type": [
      "Rock"
    ],
    "base": {
      "HP": 70,
      "Attack": 105,
      "Defense": 105,
      "Sp. Attack": 50,
      "Sp. Defense": 40,
      "Speed": 20,
      "Weight": 1020,
      "Height": 9
    },
    "img_name": require("./images/525.png")
  },
  {
    "id": 526,
    "name": "Gigalith",
    "type": [
      "Rock"
    ],
    "base": {
      "HP": 85,
      "Attack": 135,
      "Defense": 130,
      "Sp. Attack": 60,
      "Sp. Defense": 80,
      "Speed": 25,
      "Weight": 2600,
      "Height": 17
    },
    "img_name": require("./images/526.png")
  },
  {
    "id": 527,
    "name": "Woobat",
    "type": [
      "Psychic",
      "Flying"
    ],
    "base": {
      "HP": 65,
      "Attack": 45,
      "Defense": 43,
      "Sp. Attack": 55,
      "Sp. Defense": 43,
      "Speed": 72,
      "Weight": 21,
      "Height": 4
    },
    "img_name": require("./images/527.png")
  },
  {
    "id": 528,
    "name": "Swoobat",
    "type": [
      "Psychic",
      "Flying"
    ],
    "base": {
      "HP": 67,
      "Attack": 57,
      "Defense": 55,
      "Sp. Attack": 77,
      "Sp. Defense": 55,
      "Speed": 114,
      "Weight": 105,
      "Height": 9
    },
    "img_name": require("./images/528.png")
  },
  {
    "id": 529,
    "name": "Drilbur",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 60,
      "Attack": 85,
      "Defense": 40,
      "Sp. Attack": 30,
      "Sp. Defense": 45,
      "Speed": 68,
      "Weight": 85,
      "Height": 3
    },
    "img_name": require("./images/529.png")
  },
  {
    "id": 530,
    "name": "Excadrill",
    "type": [
      "Ground",
      "Steel"
    ],
    "base": {
      "HP": 110,
      "Attack": 135,
      "Defense": 60,
      "Sp. Attack": 50,
      "Sp. Defense": 65,
      "Speed": 88,
      "Weight": 404,
      "Height": 7
    },
    "img_name": require("./images/530.png")
  },
  {
    "id": 531,
    "name": "Audino",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 103,
      "Attack": 60,
      "Defense": 86,
      "Sp. Attack": 60,
      "Sp. Defense": 86,
      "Speed": 50,
      "Weight": 310,
      "Height": 11
    },
    "img_name": require("./images/531.png")
  },
  {
    "id": 532,
    "name": "Timburr",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 75,
      "Attack": 80,
      "Defense": 55,
      "Sp. Attack": 25,
      "Sp. Defense": 35,
      "Speed": 35,
      "Weight": 125,
      "Height": 6
    },
    "img_name": require("./images/532.png")
  },
  {
    "id": 533,
    "name": "Gurdurr",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 85,
      "Attack": 105,
      "Defense": 85,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      "Speed": 40,
      "Weight": 400,
      "Height": 12
    },
    "img_name": require("./images/533.png")
  },
  {
    "id": 534,
    "name": "Conkeldurr",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 105,
      "Attack": 140,
      "Defense": 95,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      "Speed": 45,
      "Weight": 870,
      "Height": 14
    },
    "img_name": require("./images/534.png")
  },
  {
    "id": 535,
    "name": "Tympole",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 50,
      "Attack": 50,
      "Defense": 40,
      "Sp. Attack": 50,
      "Sp. Defense": 40,
      "Speed": 64,
      "Weight": 45,
      "Height": 5
    },
    "img_name": require("./images/535.png")
  },
  {
    "id": 536,
    "name": "Palpitoad",
    "type": [
      "Water",
      "Ground"
    ],
    "base": {
      "HP": 75,
      "Attack": 65,
      "Defense": 55,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      "Speed": 69,
      "Weight": 170,
      "Height": 8
    },
    "img_name": require("./images/536.png")
  },
  {
    "id": 537,
    "name": "Seismitoad",
    "type": [
      "Water",
      "Ground"
    ],
    "base": {
      "HP": 105,
      "Attack": 95,
      "Defense": 75,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      "Speed": 74,
      "Weight": 620,
      "Height": 15
    },
    "img_name": require("./images/537.png")
  },
  {
    "id": 538,
    "name": "Throh",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 120,
      "Attack": 100,
      "Defense": 85,
      "Sp. Attack": 30,
      "Sp. Defense": 85,
      "Speed": 45,
      "Weight": 555,
      "Height": 13
    },
    "img_name": require("./images/538.png")
  },
  {
    "id": 539,
    "name": "Sawk",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 75,
      "Attack": 125,
      "Defense": 75,
      "Sp. Attack": 30,
      "Sp. Defense": 75,
      "Speed": 85,
      "Weight": 510,
      "Height": 14
    },
    "img_name": require("./images/539.png")
  },
  {
    "id": 540,
    "name": "Sewaddle",
    "type": [
      "Bug",
      "Grass"
    ],
    "base": {
      "HP": 45,
      "Attack": 53,
      "Defense": 70,
      "Sp. Attack": 40,
      "Sp. Defense": 60,
      "Speed": 42,
      "Weight": 25,
      "Height": 3
    },
    "img_name": require("./images/540.png")
  },
  {
    "id": 541,
    "name": "Swadloon",
    "type": [
      "Bug",
      "Grass"
    ],
    "base": {
      "HP": 55,
      "Attack": 63,
      "Defense": 90,
      "Sp. Attack": 50,
      "Sp. Defense": 80,
      "Speed": 42,
      "Weight": 73,
      "Height": 5
    },
    "img_name": require("./images/541.png")
  },
  {
    "id": 542,
    "name": "Leavanny",
    "type": [
      "Bug",
      "Grass"
    ],
    "base": {
      "HP": 75,
      "Attack": 103,
      "Defense": 80,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      "Speed": 92,
      "Weight": 205,
      "Height": 12
    },
    "img_name": require("./images/542.png")
  },
  {
    "id": 543,
    "name": "Venipede",
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 30,
      "Attack": 45,
      "Defense": 59,
      "Sp. Attack": 30,
      "Sp. Defense": 39,
      "Speed": 57,
      "Weight": 53,
      "Height": 4
    },
    "img_name": require("./images/543.png")
  },
  {
    "id": 544,
    "name": "Whirlipede",
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 40,
      "Attack": 55,
      "Defense": 99,
      "Sp. Attack": 40,
      "Sp. Defense": 79,
      "Speed": 47,
      "Weight": 585,
      "Height": 12
    },
    "img_name": require("./images/544.png")
  },
  {
    "id": 545,
    "name": "Scolipede",
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 100,
      "Defense": 89,
      "Sp. Attack": 55,
      "Sp. Defense": 69,
      "Speed": 112,
      "Weight": 2005,
      "Height": 25
    },
    "img_name": require("./images/545.png")
  },
  {
    "id": 546,
    "name": "Cottonee",
    "type": [
      "Grass",
      "Fairy"
    ],
    "base": {
      "HP": 40,
      "Attack": 27,
      "Defense": 60,
      "Sp. Attack": 37,
      "Sp. Defense": 50,
      "Speed": 66,
      "Weight": 6,
      "Height": 3
    },
    "img_name": require("./images/546.png")
  },
  {
    "id": 547,
    "name": "Whimsicott",
    "type": [
      "Grass",
      "Fairy"
    ],
    "base": {
      "HP": 60,
      "Attack": 67,
      "Defense": 85,
      "Sp. Attack": 77,
      "Sp. Defense": 75,
      "Speed": 116,
      "Weight": 66,
      "Height": 7
    },
    "img_name": require("./images/547.png")
  },
  {
    "id": 548,
    "name": "Petilil",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 45,
      "Attack": 35,
      "Defense": 50,
      "Sp. Attack": 70,
      "Sp. Defense": 50,
      "Speed": 30,
      "Weight": 66,
      "Height": 5
    },
    "img_name": require("./images/548.png")
  },
  {
    "id": 549,
    "name": "Lilligant",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 70,
      "Attack": 60,
      "Defense": 75,
      "Sp. Attack": 110,
      "Sp. Defense": 75,
      "Speed": 90,
      "Weight": 163,
      "Height": 11
    },
    "img_name": require("./images/549.png")
  },
  {
    "id": 550,
    "name": "Basculin",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 70,
      "Attack": 92,
      "Defense": 65,
      "Sp. Attack": 80,
      "Sp. Defense": 55,
      "Speed": 98,
      "Weight": 180,
      "Height": 10
    },
    "img_name": require("./images/550.png")
  },
  {
    "id": 551,
    "name": "Sandile",
    "type": [
      "Ground",
      "Dark"
    ],
    "base": {
      "HP": 50,
      "Attack": 72,
      "Defense": 35,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 65,
      "Weight": 152,
      "Height": 7
    },
    "img_name": require("./images/551.png")
  },
  {
    "id": 552,
    "name": "Krokorok",
    "type": [
      "Ground",
      "Dark"
    ],
    "base": {
      "HP": 60,
      "Attack": 82,
      "Defense": 45,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      "Speed": 74,
      "Weight": 334,
      "Height": 10
    },
    "img_name": require("./images/552.png")
  },
  {
    "id": 553,
    "name": "Krookodile",
    "type": [
      "Ground",
      "Dark"
    ],
    "base": {
      "HP": 95,
      "Attack": 117,
      "Defense": 80,
      "Sp. Attack": 65,
      "Sp. Defense": 70,
      "Speed": 92,
      "Weight": 963,
      "Height": 15
    },
    "img_name": require("./images/553.png")
  },
  {
    "id": 554,
    "name": "Darumaka",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 70,
      "Attack": 90,
      "Defense": 45,
      "Sp. Attack": 15,
      "Sp. Defense": 45,
      "Speed": 50,
      "Weight": 375,
      "Height": 6
    },
    "img_name": require("./images/554.png")
  },
  {
    "id": 555,
    "name": "Darmanitan",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 105,
      "Attack": 140,
      "Defense": 55,
      "Sp. Attack": 30,
      "Sp. Defense": 55,
      "Speed": 95,
      "Weight": 929,
      "Height": 13
    },
    "img_name": require("./images/555.png")
  },
  {
    "id": 556,
    "name": "Maractus",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 75,
      "Attack": 86,
      "Defense": 67,
      "Sp. Attack": 106,
      "Sp. Defense": 67,
      "Speed": 60,
      "Weight": 280,
      "Height": 10
    },
    "img_name": require("./images/556.png")
  },
  {
    "id": 557,
    "name": "Dwebble",
    "type": [
      "Bug",
      "Rock"
    ],
    "base": {
      "HP": 50,
      "Attack": 65,
      "Defense": 85,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 55,
      "Weight": 145,
      "Height": 3
    },
    "img_name": require("./images/557.png")
  },
  {
    "id": 558,
    "name": "Crustle",
    "type": [
      "Bug",
      "Rock"
    ],
    "base": {
      "HP": 70,
      "Attack": 105,
      "Defense": 125,
      "Sp. Attack": 65,
      "Sp. Defense": 75,
      "Speed": 45,
      "Weight": 2000,
      "Height": 14
    },
    "img_name": require("./images/558.png")
  },
  {
    "id": 559,
    "name": "Scraggy",
    "type": [
      "Dark",
      "Fighting"
    ],
    "base": {
      "HP": 50,
      "Attack": 75,
      "Defense": 70,
      "Sp. Attack": 35,
      "Sp. Defense": 70,
      "Speed": 48,
      "Weight": 118,
      "Height": 6
    },
    "img_name": require("./images/559.png")
  },
  {
    "id": 560,
    "name": "Scrafty",
    "type": [
      "Dark",
      "Fighting"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 115,
      "Sp. Attack": 45,
      "Sp. Defense": 115,
      "Speed": 58,
      "Weight": 300,
      "Height": 11
    },
    "img_name": require("./images/560.png")
  },
  {
    "id": 561,
    "name": "Sigilyph",
    "type": [
      "Psychic",
      "Flying"
    ],
    "base": {
      "HP": 72,
      "Attack": 58,
      "Defense": 80,
      "Sp. Attack": 103,
      "Sp. Defense": 80,
      "Speed": 97,
      "Weight": 140,
      "Height": 14
    },
    "img_name": require("./images/561.png")
  },
  {
    "id": 562,
    "name": "Yamask",
    "type": [
      "Ghost"
    ],
    "base": {
      "HP": 38,
      "Attack": 30,
      "Defense": 85,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      "Speed": 30,
      "Weight": 15,
      "Height": 5
    },
    "img_name": require("./images/562.png")
  },
  {
    "id": 563,
    "name": "Cofagrigus",
    "type": [
      "Ghost"
    ],
    "base": {
      "HP": 58,
      "Attack": 50,
      "Defense": 145,
      "Sp. Attack": 95,
      "Sp. Defense": 105,
      "Speed": 30,
      "Weight": 765,
      "Height": 17
    },
    "img_name": require("./images/563.png")
  },
  {
    "id": 564,
    "name": "Tirtouga",
    "type": [
      "Water",
      "Rock"
    ],
    "base": {
      "HP": 54,
      "Attack": 78,
      "Defense": 103,
      "Sp. Attack": 53,
      "Sp. Defense": 45,
      "Speed": 22,
      "Weight": 165,
      "Height": 7
    },
    "img_name": require("./images/564.png")
  },
  {
    "id": 565,
    "name": "Carracosta",
    "type": [
      "Water",
      "Rock"
    ],
    "base": {
      "HP": 74,
      "Attack": 108,
      "Defense": 133,
      "Sp. Attack": 83,
      "Sp. Defense": 65,
      "Speed": 32,
      "Weight": 810,
      "Height": 12
    },
    "img_name": require("./images/565.png")
  },
  {
    "id": 566,
    "name": "Archen",
    "type": [
      "Rock",
      "Flying"
    ],
    "base": {
      "HP": 55,
      "Attack": 112,
      "Defense": 45,
      "Sp. Attack": 74,
      "Sp. Defense": 45,
      "Speed": 70,
      "Weight": 95,
      "Height": 5
    },
    "img_name": require("./images/566.png")
  },
  {
    "id": 567,
    "name": "Archeops",
    "type": [
      "Rock",
      "Flying"
    ],
    "base": {
      "HP": 75,
      "Attack": 140,
      "Defense": 65,
      "Sp. Attack": 112,
      "Sp. Defense": 65,
      "Speed": 110,
      "Weight": 320,
      "Height": 14
    },
    "img_name": require("./images/567.png")
  },
  {
    "id": 568,
    "name": "Trubbish",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 50,
      "Attack": 50,
      "Defense": 62,
      "Sp. Attack": 40,
      "Sp. Defense": 62,
      "Speed": 65,
      "Weight": 310,
      "Height": 6
    },
    "img_name": require("./images/568.png")
  },
  {
    "id": 569,
    "name": "Garbodor",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 95,
      "Defense": 82,
      "Sp. Attack": 60,
      "Sp. Defense": 82,
      "Speed": 75,
      "Weight": 1073,
      "Height": 19
    },
    "img_name": require("./images/569.png")
  },
  {
    "id": 570,
    "name": "Zorua",
    "type": [
      "Dark"
    ],
    "base": {
      "HP": 40,
      "Attack": 65,
      "Defense": 40,
      "Sp. Attack": 80,
      "Sp. Defense": 40,
      "Speed": 65,
      "Weight": 125,
      "Height": 7
    },
    "img_name": require("./images/570.png")
  },
  {
    "id": 571,
    "name": "Zoroark",
    "type": [
      "Dark"
    ],
    "base": {
      "HP": 60,
      "Attack": 105,
      "Defense": 60,
      "Sp. Attack": 120,
      "Sp. Defense": 60,
      "Speed": 105,
      "Weight": 811,
      "Height": 16
    },
    "img_name": require("./images/571.png")
  },
  {
    "id": 572,
    "name": "Minccino",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 55,
      "Attack": 50,
      "Defense": 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 75,
      "Weight": 58,
      "Height": 4
    },
    "img_name": require("./images/572.png")
  },
  {
    "id": 573,
    "name": "Cinccino",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 75,
      "Attack": 95,
      "Defense": 60,
      "Sp. Attack": 65,
      "Sp. Defense": 60,
      "Speed": 115,
      "Weight": 75,
      "Height": 5
    },
    "img_name": require("./images/573.png")
  },
  {
    "id": 574,
    "name": "Gothita",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 45,
      "Attack": 30,
      "Defense": 50,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      "Speed": 45,
      "Weight": 58,
      "Height": 4
    },
    "img_name": require("./images/574.png")
  },
  {
    "id": 575,
    "name": "Gothorita",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 45,
      "Defense": 70,
      "Sp. Attack": 75,
      "Sp. Defense": 85,
      "Speed": 55,
      "Weight": 180,
      "Height": 7
    },
    "img_name": require("./images/575.png")
  },
  {
    "id": 576,
    "name": "Gothitelle",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 70,
      "Attack": 55,
      "Defense": 95,
      "Sp. Attack": 95,
      "Sp. Defense": 110,
      "Speed": 65,
      "Weight": 440,
      "Height": 15
    },
    "img_name": require("./images/576.png")
  },
  {
    "id": 577,
    "name": "Solosis",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 45,
      "Attack": 30,
      "Defense": 40,
      "Sp. Attack": 105,
      "Sp. Defense": 50,
      "Speed": 20,
      "Weight": 10,
      "Height": 3
    },
    "img_name": require("./images/577.png")
  },
  {
    "id": 578,
    "name": "Duosion",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 65,
      "Attack": 40,
      "Defense": 50,
      "Sp. Attack": 125,
      "Sp. Defense": 60,
      "Speed": 30,
      "Weight": 80,
      "Height": 6
    },
    "img_name": require("./images/578.png")
  },
  {
    "id": 579,
    "name": "Reuniclus",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 110,
      "Attack": 65,
      "Defense": 75,
      "Sp. Attack": 125,
      "Sp. Defense": 85,
      "Speed": 30,
      "Weight": 201,
      "Height": 10
    },
    "img_name": require("./images/579.png")
  },
  {
    "id": 580,
    "name": "Ducklett",
    "type": [
      "Water",
      "Flying"
    ],
    "base": {
      "HP": 62,
      "Attack": 44,
      "Defense": 50,
      "Sp. Attack": 44,
      "Sp. Defense": 50,
      "Speed": 55,
      "Weight": 55,
      "Height": 5
    },
    "img_name": require("./images/580.png")
  },
  {
    "id": 581,
    "name": "Swanna",
    "type": [
      "Water",
      "Flying"
    ],
    "base": {
      "HP": 75,
      "Attack": 87,
      "Defense": 63,
      "Sp. Attack": 87,
      "Sp. Defense": 63,
      "Speed": 98,
      "Weight": 242,
      "Height": 13
    },
    "img_name": require("./images/581.png")
  },
  {
    "id": 582,
    "name": "Vanillite",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 36,
      "Attack": 50,
      "Defense": 50,
      "Sp. Attack": 65,
      "Sp. Defense": 60,
      "Speed": 44,
      "Weight": 57,
      "Height": 4
    },
    "img_name": require("./images/582.png")
  },
  {
    "id": 583,
    "name": "Vanillish",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 51,
      "Attack": 65,
      "Defense": 65,
      "Sp. Attack": 80,
      "Sp. Defense": 75,
      "Speed": 59,
      "Weight": 410,
      "Height": 11
    },
    "img_name": require("./images/583.png")
  },
  {
    "id": 584,
    "name": "Vanilluxe",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 71,
      "Attack": 95,
      "Defense": 85,
      "Sp. Attack": 110,
      "Sp. Defense": 95,
      "Speed": 79,
      "Weight": 575,
      "Height": 13
    },
    "img_name": require("./images/584.png")
  },
  {
    "id": 585,
    "name": "Deerling",
    "type": [
      "Normal",
      "Grass"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 50,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      "Speed": 75,
      "Weight": 195,
      "Height": 6
    },
    "img_name": require("./images/585.png")
  },
  {
    "id": 586,
    "name": "Sawsbuck",
    "type": [
      "Normal",
      "Grass"
    ],
    "base": {
      "HP": 80,
      "Attack": 100,
      "Defense": 70,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      "Speed": 95,
      "Weight": 925,
      "Height": 19
    },
    "img_name": require("./images/586.png")
  },
  {
    "id": 587,
    "name": "Emolga",
    "type": [
      "Electric",
      "Flying"
    ],
    "base": {
      "HP": 55,
      "Attack": 75,
      "Defense": 60,
      "Sp. Attack": 75,
      "Sp. Defense": 60,
      "Speed": 103,
      "Weight": 50,
      "Height": 4
    },
    "img_name": require("./images/587.png")
  },
  {
    "id": 588,
    "name": "Karrablast",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 50,
      "Attack": 75,
      "Defense": 45,
      "Sp. Attack": 40,
      "Sp. Defense": 45,
      "Speed": 60,
      "Weight": 59,
      "Height": 5
    },
    "img_name": require("./images/588.png")
  },
  {
    "id": 589,
    "name": "Escavalier",
    "type": [
      "Bug",
      "Steel"
    ],
    "base": {
      "HP": 70,
      "Attack": 135,
      "Defense": 105,
      "Sp. Attack": 60,
      "Sp. Defense": 105,
      "Speed": 20,
      "Weight": 330,
      "Height": 10
    },
    "img_name": require("./images/589.png")
  },
  {
    "id": 590,
    "name": "Foongus",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 69,
      "Attack": 55,
      "Defense": 45,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 15,
      "Weight": 10,
      "Height": 2
    },
    "img_name": require("./images/590.png")
  },
  {
    "id": 591,
    "name": "Amoonguss",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 114,
      "Attack": 85,
      "Defense": 70,
      "Sp. Attack": 85,
      "Sp. Defense": 80,
      "Speed": 30,
      "Weight": 105,
      "Height": 6
    },
    "img_name": require("./images/591.png")
  },
  {
    "id": 592,
    "name": "Frillish",
    "type": [
      "Water",
      "Ghost"
    ],
    "base": {
      "HP": 55,
      "Attack": 40,
      "Defense": 50,
      "Sp. Attack": 65,
      "Sp. Defense": 85,
      "Speed": 40,
      "Weight": 330,
      "Height": 12
    },
    "img_name": require("./images/592.png")
  },
  {
    "id": 593,
    "name": "Jellicent",
    "type": [
      "Water",
      "Ghost"
    ],
    "base": {
      "HP": 100,
      "Attack": 60,
      "Defense": 70,
      "Sp. Attack": 85,
      "Sp. Defense": 105,
      "Speed": 60,
      "Weight": 1350,
      "Height": 22
    },
    "img_name": require("./images/593.png")
  },
  {
    "id": 594,
    "name": "Alomomola",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 165,
      "Attack": 75,
      "Defense": 80,
      "Sp. Attack": 40,
      "Sp. Defense": 45,
      "Speed": 65,
      "Weight": 316,
      "Height": 12
    },
    "img_name": require("./images/594.png")
  },
  {
    "id": 595,
    "name": "Joltik",
    "type": [
      "Bug",
      "Electric"
    ],
    "base": {
      "HP": 50,
      "Attack": 47,
      "Defense": 50,
      "Sp. Attack": 57,
      "Sp. Defense": 50,
      "Speed": 65,
      "Weight": 6,
      "Height": 1
    },
    "img_name": require("./images/595.png")
  },
  {
    "id": 596,
    "name": "Galvantula",
    "type": [
      "Bug",
      "Electric"
    ],
    "base": {
      "HP": 70,
      "Attack": 77,
      "Defense": 60,
      "Sp. Attack": 97,
      "Sp. Defense": 60,
      "Speed": 108,
      "Weight": 143,
      "Height": 8
    },
    "img_name": require("./images/596.png")
  },
  {
    "id": 597,
    "name": "Ferroseed",
    "type": [
      "Grass",
      "Steel"
    ],
    "base": {
      "HP": 44,
      "Attack": 50,
      "Defense": 91,
      "Sp. Attack": 24,
      "Sp. Defense": 86,
      "Speed": 10,
      "Weight": 188,
      "Height": 6
    },
    "img_name": require("./images/597.png")
  },
  {
    "id": 598,
    "name": "Ferrothorn",
    "type": [
      "Grass",
      "Steel"
    ],
    "base": {
      "HP": 74,
      "Attack": 94,
      "Defense": 131,
      "Sp. Attack": 54,
      "Sp. Defense": 116,
      "Speed": 20,
      "Weight": 1100,
      "Height": 10
    },
    "img_name": require("./images/598.png")
  },
  {
    "id": 599,
    "name": "Klink",
    "type": [
      "Steel"
    ],
    "base": {
      "HP": 40,
      "Attack": 55,
      "Defense": 70,
      "Sp. Attack": 45,
      "Sp. Defense": 60,
      "Speed": 30,
      "Weight": 210,
      "Height": 3
    },
    "img_name": require("./images/599.png")
  },
  {
    "id": 600,
    "name": "Klang",
    "type": [
      "Steel"
    ],
    "base": {
      "HP": 60,
      "Attack": 80,
      "Defense": 95,
      "Sp. Attack": 70,
      "Sp. Defense": 85,
      "Speed": 50,
      "Weight": 510,
      "Height": 6
    },
    "img_name": require("./images/600.png")
  },
  {
    "id": 601,
    "name": "Klinklang",
    "type": [
      "Steel"
    ],
    "base": {
      "HP": 60,
      "Attack": 100,
      "Defense": 115,
      "Sp. Attack": 70,
      "Sp. Defense": 85,
      "Speed": 90,
      "Weight": 810,
      "Height": 6
    },
    "img_name": require("./images/601.png")
  },
  {
    "id": 602,
    "name": "Tynamo",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 35,
      "Attack": 55,
      "Defense": 40,
      "Sp. Attack": 45,
      "Sp. Defense": 40,
      "Speed": 60,
      "Weight": 3,
      "Height": 2
    },
    "img_name": require("./images/602.png")
  },
  {
    "id": 603,
    "name": "Eelektrik",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 65,
      "Attack": 85,
      "Defense": 70,
      "Sp. Attack": 75,
      "Sp. Defense": 70,
      "Speed": 40,
      "Weight": 220,
      "Height": 12
    },
    "img_name": require("./images/603.png")
  },
  {
    "id": 604,
    "name": "Eelektross",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 85,
      "Attack": 115,
      "Defense": 80,
      "Sp. Attack": 105,
      "Sp. Defense": 80,
      "Speed": 50,
      "Weight": 805,
      "Height": 21
    },
    "img_name": require("./images/604.png")
  },
  {
    "id": 605,
    "name": "Elgyem",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 55,
      "Attack": 55,
      "Defense": 55,
      "Sp. Attack": 85,
      "Sp. Defense": 55,
      "Speed": 30,
      "Weight": 90,
      "Height": 5
    },
    "img_name": require("./images/605.png")
  },
  {
    "id": 606,
    "name": "Beheeyem",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 75,
      "Attack": 75,
      "Defense": 75,
      "Sp. Attack": 125,
      "Sp. Defense": 95,
      "Speed": 40,
      "Weight": 345,
      "Height": 10
    },
    "img_name": require("./images/606.png")
  },
  {
    "id": 607,
    "name": "Litwick",
    "type": [
      "Ghost",
      "Fire"
    ],
    "base": {
      "HP": 50,
      "Attack": 30,
      "Defense": 55,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      "Speed": 20,
      "Weight": 31,
      "Height": 3
    },
    "img_name": require("./images/607.png")
  },
  {
    "id": 608,
    "name": "Lampent",
    "type": [
      "Ghost",
      "Fire"
    ],
    "base": {
      "HP": 60,
      "Attack": 40,
      "Defense": 60,
      "Sp. Attack": 95,
      "Sp. Defense": 60,
      "Speed": 55,
      "Weight": 130,
      "Height": 6
    },
    "img_name": require("./images/608.png")
  },
  {
    "id": 609,
    "name": "Chandelure",
    "type": [
      "Ghost",
      "Fire"
    ],
    "base": {
      "HP": 60,
      "Attack": 55,
      "Defense": 90,
      "Sp. Attack": 145,
      "Sp. Defense": 90,
      "Speed": 80,
      "Weight": 343,
      "Height": 10
    },
    "img_name": require("./images/609.png")
  },
  {
    "id": 610,
    "name": "Axew",
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 46,
      "Attack": 87,
      "Defense": 60,
      "Sp. Attack": 30,
      "Sp. Defense": 40,
      "Speed": 57,
      "Weight": 180,
      "Height": 6
    },
    "img_name": require("./images/610.png")
  },
  {
    "id": 611,
    "name": "Fraxure",
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 66,
      "Attack": 117,
      "Defense": 70,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      "Speed": 67,
      "Weight": 360,
      "Height": 10
    },
    "img_name": require("./images/611.png")
  },
  {
    "id": 612,
    "name": "Haxorus",
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 76,
      "Attack": 147,
      "Defense": 90,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      "Speed": 97,
      "Weight": 1055,
      "Height": 18
    },
    "img_name": require("./images/612.png")
  },
  {
    "id": 613,
    "name": "Cubchoo",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 55,
      "Attack": 70,
      "Defense": 40,
      "Sp. Attack": 60,
      "Sp. Defense": 40,
      "Speed": 40,
      "Weight": 85,
      "Height": 5
    },
    "img_name": require("./images/613.png")
  },
  {
    "id": 614,
    "name": "Beartic",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 95,
      "Attack": 130,
      "Defense": 80,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      "Speed": 50,
      "Weight": 2600,
      "Height": 26
    },
    "img_name": require("./images/614.png")
  },
  {
    "id": 615,
    "name": "Cryogonal",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 80,
      "Attack": 50,
      "Defense": 50,
      "Sp. Attack": 95,
      "Sp. Defense": 135,
      "Speed": 105,
      "Weight": 1480,
      "Height": 11
    },
    "img_name": require("./images/615.png")
  },
  {
    "id": 616,
    "name": "Shelmet",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 50,
      "Attack": 40,
      "Defense": 85,
      "Sp. Attack": 40,
      "Sp. Defense": 65,
      "Speed": 25,
      "Weight": 77,
      "Height": 4
    },
    "img_name": require("./images/616.png")
  },
  {
    "id": 617,
    "name": "Accelgor",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 80,
      "Attack": 70,
      "Defense": 40,
      "Sp. Attack": 100,
      "Sp. Defense": 60,
      "Speed": 145,
      "Weight": 253,
      "Height": 8
    },
    "img_name": require("./images/617.png")
  },
  {
    "id": 618,
    "name": "Stunfisk",
    "type": [
      "Ground",
      "Electric"
    ],
    "base": {
      "HP": 109,
      "Attack": 66,
      "Defense": 84,
      "Sp. Attack": 81,
      "Sp. Defense": 99,
      "Speed": 32,
      "Weight": 110,
      "Height": 7
    },
    "img_name": require("./images/618.png")
  },
  {
    "id": 619,
    "name": "Mienfoo",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 45,
      "Attack": 85,
      "Defense": 50,
      "Sp. Attack": 55,
      "Sp. Defense": 50,
      "Speed": 65,
      "Weight": 200,
      "Height": 9
    },
    "img_name": require("./images/619.png")
  },
  {
    "id": 620,
    "name": "Mienshao",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 65,
      "Attack": 125,
      "Defense": 60,
      "Sp. Attack": 95,
      "Sp. Defense": 60,
      "Speed": 105,
      "Weight": 355,
      "Height": 14
    },
    "img_name": require("./images/620.png")
  },
  {
    "id": 621,
    "name": "Druddigon",
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 77,
      "Attack": 120,
      "Defense": 90,
      "Sp. Attack": 60,
      "Sp. Defense": 90,
      "Speed": 48,
      "Weight": 1390,
      "Height": 16
    },
    "img_name": require("./images/621.png")
  },
  {
    "id": 622,
    "name": "Golett",
    "type": [
      "Ground",
      "Ghost"
    ],
    "base": {
      "HP": 59,
      "Attack": 74,
      "Defense": 50,
      "Sp. Attack": 35,
      "Sp. Defense": 50,
      "Speed": 35,
      "Weight": 920,
      "Height": 10
    },
    "img_name": require("./images/622.png")
  },
  {
    "id": 623,
    "name": "Golurk",
    "type": [
      "Ground",
      "Ghost"
    ],
    "base": {
      "HP": 89,
      "Attack": 124,
      "Defense": 80,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      "Speed": 55,
      "Weight": 3300,
      "Height": 28
    },
    "img_name": require("./images/623.png")
  },
  {
    "id": 624,
    "name": "Pawniard",
    "type": [
      "Dark",
      "Steel"
    ],
    "base": {
      "HP": 45,
      "Attack": 85,
      "Defense": 70,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 60,
      "Weight": 102,
      "Height": 5
    },
    "img_name": require("./images/624.png")
  },
  {
    "id": 625,
    "name": "Bisharp",
    "type": [
      "Dark",
      "Steel"
    ],
    "base": {
      "HP": 65,
      "Attack": 125,
      "Defense": 100,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      "Speed": 70,
      "Weight": 700,
      "Height": 16
    },
    "img_name": require("./images/625.png")
  },
  {
    "id": 626,
    "name": "Bouffalant",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 95,
      "Attack": 110,
      "Defense": 95,
      "Sp. Attack": 40,
      "Sp. Defense": 95,
      "Speed": 55,
      "Weight": 946,
      "Height": 16
    },
    "img_name": require("./images/626.png")
  },
  {
    "id": 627,
    "name": "Rufflet",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 70,
      "Attack": 83,
      "Defense": 50,
      "Sp. Attack": 37,
      "Sp. Defense": 50,
      "Speed": 60,
      "Weight": 105,
      "Height": 5
    },
    "img_name": require("./images/627.png")
  },
  {
    "id": 628,
    "name": "Braviary",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 100,
      "Attack": 123,
      "Defense": 75,
      "Sp. Attack": 57,
      "Sp. Defense": 75,
      "Speed": 80,
      "Weight": 410,
      "Height": 15
    },
    "img_name": require("./images/628.png")
  },
  {
    "id": 629,
    "name": "Vullaby",
    "type": [
      "Dark",
      "Flying"
    ],
    "base": {
      "HP": 70,
      "Attack": 55,
      "Defense": 75,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      "Speed": 60,
      "Weight": 90,
      "Height": 5
    },
    "img_name": require("./images/629.png")
  },
  {
    "id": 630,
    "name": "Mandibuzz",
    "type": [
      "Dark",
      "Flying"
    ],
    "base": {
      "HP": 110,
      "Attack": 65,
      "Defense": 105,
      "Sp. Attack": 55,
      "Sp. Defense": 95,
      "Speed": 80,
      "Weight": 395,
      "Height": 12
    },
    "img_name": require("./images/630.png")
  },
  {
    "id": 631,
    "name": "Heatmor",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 85,
      "Attack": 97,
      "Defense": 66,
      "Sp. Attack": 105,
      "Sp. Defense": 66,
      "Speed": 65,
      "Weight": 580,
      "Height": 14
    },
    "img_name": require("./images/631.png")
  },
  {
    "id": 632,
    "name": "Durant",
    "type": [
      "Bug",
      "Steel"
    ],
    "base": {
      "HP": 58,
      "Attack": 109,
      "Defense": 112,
      "Sp. Attack": 48,
      "Sp. Defense": 48,
      "Speed": 109,
      "Weight": 330,
      "Height": 3
    },
    "img_name": require("./images/632.png")
  },
  {
    "id": 633,
    "name": "Deino",
    "type": [
      "Dark",
      "Dragon"
    ],
    "base": {
      "HP": 52,
      "Attack": 65,
      "Defense": 50,
      "Sp. Attack": 45,
      "Sp. Defense": 50,
      "Speed": 38,
      "Weight": 173,
      "Height": 8
    },
    "img_name": require("./images/633.png")
  },
  {
    "id": 634,
    "name": "Zweilous",
    "type": [
      "Dark",
      "Dragon"
    ],
    "base": {
      "HP": 72,
      "Attack": 85,
      "Defense": 70,
      "Sp. Attack": 65,
      "Sp. Defense": 70,
      "Speed": 58,
      "Weight": 500,
      "Height": 14
    },
    "img_name": require("./images/634.png")
  },
  {
    "id": 635,
    "name": "Hydreigon",
    "type": [
      "Dark",
      "Dragon"
    ],
    "base": {
      "HP": 92,
      "Attack": 105,
      "Defense": 90,
      "Sp. Attack": 125,
      "Sp. Defense": 90,
      "Speed": 98,
      "Weight": 1600,
      "Height": 18
    },
    "img_name": require("./images/635.png")
  },
  {
    "id": 636,
    "name": "Larvesta",
    "type": [
      "Bug",
      "Fire"
    ],
    "base": {
      "HP": 55,
      "Attack": 85,
      "Defense": 55,
      "Sp. Attack": 50,
      "Sp. Defense": 55,
      "Speed": 60,
      "Weight": 288,
      "Height": 11
    },
    "img_name": require("./images/636.png")
  },
  {
    "id": 637,
    "name": "Volcarona",
    "type": [
      "Bug",
      "Fire"
    ],
    "base": {
      "HP": 85,
      "Attack": 60,
      "Defense": 65,
      "Sp. Attack": 135,
      "Sp. Defense": 105,
      "Speed": 100,
      "Weight": 460,
      "Height": 16
    },
    "img_name": require("./images/637.png")
  },
  {
    "id": 638,
    "name": "Cobalion",
    "type": [
      "Steel",
      "Fighting"
    ],
    "base": {
      "HP": 91,
      "Attack": 90,
      "Defense": 129,
      "Sp. Attack": 90,
      "Sp. Defense": 72,
      "Speed": 108,
      "Weight": 2500,
      "Height": 21
    },
    "img_name": require("./images/638.png")
  },
  {
    "id": 639,
    "name": "Terrakion",
    "type": [
      "Rock",
      "Fighting"
    ],
    "base": {
      "HP": 91,
      "Attack": 129,
      "Defense": 90,
      "Sp. Attack": 72,
      "Sp. Defense": 90,
      "Speed": 108,
      "Weight": 2600,
      "Height": 19
    },
    "img_name": require("./images/639.png")
  },
  {
    "id": 640,
    "name": "Virizion",
    "type": [
      "Grass",
      "Fighting"
    ],
    "base": {
      "HP": 91,
      "Attack": 90,
      "Defense": 72,
      "Sp. Attack": 90,
      "Sp. Defense": 129,
      "Speed": 108,
      "Weight": 2000,
      "Height": 20
    },
    "img_name": require("./images/640.png")
  },
  {
    "id": 641,
    "name": "Tornadus",
    "type": [
      "Flying"
    ],
    "base": {
      "HP": 79,
      "Attack": 115,
      "Defense": 70,
      "Sp. Attack": 125,
      "Sp. Defense": 80,
      "Speed": 111,
      "Weight": 630,
      "Height": 15
    },
    "img_name": require("./images/641.png")
  },
  {
    "id": 642,
    "name": "Thundurus",
    "type": [
      "Electric",
      "Flying"
    ],
    "base": {
      "HP": 79,
      "Attack": 115,
      "Defense": 70,
      "Sp. Attack": 125,
      "Sp. Defense": 80,
      "Speed": 111,
      "Weight": 610,
      "Height": 15
    },
    "img_name": require("./images/642.png")
  },
  {
    "id": 643,
    "name": "Reshiram",
    "type": [
      "Dragon",
      "Fire"
    ],
    "base": {
      "HP": 100,
      "Attack": 120,
      "Defense": 100,
      "Sp. Attack": 150,
      "Sp. Defense": 120,
      "Speed": 90,
      "Weight": 3300,
      "Height": 32
    },
    "img_name": require("./images/643.png")
  },
  {
    "id": 644,
    "name": "Zekrom",
    "type": [
      "Dragon",
      "Electric"
    ],
    "base": {
      "HP": 100,
      "Attack": 150,
      "Defense": 120,
      "Sp. Attack": 120,
      "Sp. Defense": 100,
      "Speed": 90,
      "Weight": 3450,
      "Height": 29
    },
    "img_name": require("./images/644.png")
  },
  {
    "id": 645,
    "name": "Landorus",
    "type": [
      "Ground",
      "Flying"
    ],
    "base": {
      "HP": 89,
      "Attack": 125,
      "Defense": 90,
      "Sp. Attack": 115,
      "Sp. Defense": 80,
      "Speed": 101,
      "Weight": 680,
      "Height": 15
    },
    "img_name": require("./images/645.png")
  },
  {
    "id": 646,
    "name": "Kyurem",
    "type": [
      "Dragon",
      "Ice"
    ],
    "base": {
      "HP": 125,
      "Attack": 130,
      "Defense": 90,
      "Sp. Attack": 130,
      "Sp. Defense": 90,
      "Speed": 95,
      "Weight": 3250,
      "Height": 30
    },
    "img_name": require("./images/646.png")
  },
  {
    "id": 647,
    "name": "Keldeo",
    "type": [
      "Water",
      "Fighting"
    ],
    "base": {
      "HP": 91,
      "Attack": 72,
      "Defense": 90,
      "Sp. Attack": 129,
      "Sp. Defense": 90,
      "Speed": 108,
      "Weight": 485,
      "Height": 14
    },
    "img_name": require("./images/647.png")
  },
  {
    "id": 648,
    "name": "Meloetta",
    "type": [
      "Normal",
      "Psychic"
    ],
    "base": {
      "HP": 100,
      "Attack": 77,
      "Defense": 77,
      "Sp. Attack": 128,
      "Sp. Defense": 128,
      "Speed": 90,
      "Weight": 65,
      "Height": 6
    },
    "img_name": require("./images/648.png")
  },
  {
    "id": 649,
    "name": "Genesect",
    "type": [
      "Bug",
      "Steel"
    ],
    "base": {
      "HP": 71,
      "Attack": 120,
      "Defense": 95,
      "Sp. Attack": 120,
      "Sp. Defense": 95,
      "Speed": 99,
      "Weight": 825,
      "Height": 15
    },
    "img_name": require("./images/649.png")
  },
  {
    "id": 650,
    "name": "Chespin",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 56,
      "Attack": 61,
      "Defense": 65,
      "Sp. Attack": 48,
      "Sp. Defense": 45,
      "Speed": 38,
      "Weight": 90,
      "Height": 4
    },
    "img_name": require("./images/650.png")
  },
  {
    "id": 651,
    "name": "Quilladin",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 61,
      "Attack": 78,
      "Defense": 95,
      "Sp. Attack": 56,
      "Sp. Defense": 58,
      "Speed": 57,
      "Weight": 290,
      "Height": 7
    },
    "img_name": require("./images/651.png")
  },
  {
    "id": 652,
    "name": "Chesnaught",
    "type": [
      "Grass",
      "Fighting"
    ],
    "base": {
      "HP": 88,
      "Attack": 107,
      "Defense": 122,
      "Sp. Attack": 74,
      "Sp. Defense": 75,
      "Speed": 64,
      "Weight": 900,
      "Height": 16
    },
    "img_name": require("./images/652.png")
  },
  {
    "id": 653,
    "name": "Fennekin",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 40,
      "Sp. Attack": 62,
      "Sp. Defense": 60,
      "Speed": 60,
      "Weight": 94,
      "Height": 4
    },
    "img_name": require("./images/653.png")
  },
  {
    "id": 654,
    "name": "Braixen",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 59,
      "Attack": 59,
      "Defense": 58,
      "Sp. Attack": 90,
      "Sp. Defense": 70,
      "Speed": 73,
      "Weight": 145,
      "Height": 10
    },
    "img_name": require("./images/654.png")
  },
  {
    "id": 655,
    "name": "Delphox",
    "type": [
      "Fire",
      "Psychic"
    ],
    "base": {
      "HP": 75,
      "Attack": 69,
      "Defense": 72,
      "Sp. Attack": 114,
      "Sp. Defense": 100,
      "Speed": 104,
      "Weight": 390,
      "Height": 15
    },
    "img_name": require("./images/655.png")
  },
  {
    "id": 656,
    "name": "Froakie",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 41,
      "Attack": 56,
      "Defense": 40,
      "Sp. Attack": 62,
      "Sp. Defense": 44,
      "Speed": 71,
      "Weight": 70,
      "Height": 3
    },
    "img_name": require("./images/656.png")
  },
  {
    "id": 657,
    "name": "Frogadier",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 54,
      "Attack": 63,
      "Defense": 52,
      "Sp. Attack": 83,
      "Sp. Defense": 56,
      "Speed": 97,
      "Weight": 109,
      "Height": 6
    },
    "img_name": require("./images/657.png")
  },
  {
    "id": 658,
    "name": "Greninja",
    "type": [
      "Water",
      "Dark"
    ],
    "base": {
      "HP": 72,
      "Attack": 95,
      "Defense": 67,
      "Sp. Attack": 103,
      "Sp. Defense": 71,
      "Speed": 122,
      "Weight": 400,
      "Height": 15
    },
    "img_name": require("./images/658.png")
  },
  {
    "id": 659,
    "name": "Bunnelby",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 38,
      "Attack": 36,
      "Defense": 38,
      "Sp. Attack": 32,
      "Sp. Defense": 36,
      "Speed": 57,
      "Weight": 50,
      "Height": 4
    },
    "img_name": require("./images/659.png")
  },
  {
    "id": 660,
    "name": "Diggersby",
    "type": [
      "Normal",
      "Ground"
    ],
    "base": {
      "HP": 85,
      "Attack": 56,
      "Defense": 77,
      "Sp. Attack": 50,
      "Sp. Defense": 77,
      "Speed": 78,
      "Weight": 424,
      "Height": 10
    },
    "img_name": require("./images/660.png")
  },
  {
    "id": 661,
    "name": "Fletchling",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 45,
      "Attack": 50,
      "Defense": 43,
      "Sp. Attack": 40,
      "Sp. Defense": 38,
      "Speed": 62,
      "Weight": 17,
      "Height": 3
    },
    "img_name": require("./images/661.png")
  },
  {
    "id": 662,
    "name": "Fletchinder",
    "type": [
      "Fire",
      "Flying"
    ],
    "base": {
      "HP": 62,
      "Attack": 73,
      "Defense": 55,
      "Sp. Attack": 56,
      "Sp. Defense": 52,
      "Speed": 84,
      "Weight": 160,
      "Height": 7
    },
    "img_name": require("./images/662.png")
  },
  {
    "id": 663,
    "name": "Talonflame",
    "type": [
      "Fire",
      "Flying"
    ],
    "base": {
      "HP": 78,
      "Attack": 81,
      "Defense": 71,
      "Sp. Attack": 74,
      "Sp. Defense": 69,
      "Speed": 126,
      "Weight": 245,
      "Height": 12
    },
    "img_name": require("./images/663.png")
  },
  {
    "id": 664,
    "name": "Scatterbug",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 38,
      "Attack": 35,
      "Defense": 40,
      "Sp. Attack": 27,
      "Sp. Defense": 25,
      "Speed": 35,
      "Weight": 25,
      "Height": 3
    },
    "img_name": require("./images/664.png")
  },
  {
    "id": 665,
    "name": "Spewpa",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 45,
      "Attack": 22,
      "Defense": 60,
      "Sp. Attack": 27,
      "Sp. Defense": 30,
      "Speed": 29,
      "Weight": 84,
      "Height": 3
    },
    "img_name": require("./images/665.png")
  },
  {
    "id": 666,
    "name": "Vivillon",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 80,
      "Attack": 52,
      "Defense": 50,
      "Sp. Attack": 90,
      "Sp. Defense": 50,
      "Speed": 89,
      "Weight": 170,
      "Height": 12
    },
    "img_name": require("./images/666.png")
  },
  {
    "id": 667,
    "name": "Litleo",
    "type": [
      "Fire",
      "Normal"
    ],
    "base": {
      "HP": 62,
      "Attack": 50,
      "Defense": 58,
      "Sp. Attack": 73,
      "Sp. Defense": 54,
      "Speed": 72,
      "Weight": 135,
      "Height": 6
    },
    "img_name": require("./images/667.png")
  },
  {
    "id": 668,
    "name": "Pyroar",
    "type": [
      "Fire",
      "Normal"
    ],
    "base": {
      "HP": 86,
      "Attack": 68,
      "Defense": 72,
      "Sp. Attack": 109,
      "Sp. Defense": 66,
      "Speed": 106,
      "Weight": 815,
      "Height": 15
    },
    "img_name": require("./images/668.png")
  },
  {
    "id": 669,
    "name": "Flabébé",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 44,
      "Attack": 38,
      "Defense": 39,
      "Sp. Attack": 61,
      "Sp. Defense": 79,
      "Speed": 42,
      "Weight": 1,
      "Height": 1
    },
    "img_name": require("./images/669.png")
  },
  {
    "id": 670,
    "name": "Floette",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 54,
      "Attack": 45,
      "Defense": 47,
      "Sp. Attack": 75,
      "Sp. Defense": 98,
      "Speed": 52,
      "Weight": 9,
      "Height": 2
    },
    "img_name": require("./images/670.png")
  },
  {
    "id": 671,
    "name": "Florges",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 78,
      "Attack": 65,
      "Defense": 68,
      "Sp. Attack": 112,
      "Sp. Defense": 154,
      "Speed": 75,
      "Weight": 100,
      "Height": 11
    },
    "img_name": require("./images/671.png")
  },
  {
    "id": 672,
    "name": "Skiddo",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 66,
      "Attack": 65,
      "Defense": 48,
      "Sp. Attack": 62,
      "Sp. Defense": 57,
      "Speed": 52,
      "Weight": 310,
      "Height": 9
    },
    "img_name": require("./images/672.png")
  },
  {
    "id": 673,
    "name": "Gogoat",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 123,
      "Attack": 100,
      "Defense": 62,
      "Sp. Attack": 97,
      "Sp. Defense": 81,
      "Speed": 68,
      "Weight": 910,
      "Height": 17
    },
    "img_name": require("./images/673.png")
  },
  {
    "id": 674,
    "name": "Pancham",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 67,
      "Attack": 82,
      "Defense": 62,
      "Sp. Attack": 46,
      "Sp. Defense": 48,
      "Speed": 43,
      "Weight": 80,
      "Height": 6
    },
    "img_name": require("./images/674.png")
  },
  {
    "id": 675,
    "name": "Pangoro",
    "type": [
      "Fighting",
      "Dark"
    ],
    "base": {
      "HP": 95,
      "Attack": 124,
      "Defense": 78,
      "Sp. Attack": 69,
      "Sp. Defense": 71,
      "Speed": 58,
      "Weight": 1360,
      "Height": 21
    },
    "img_name": require("./images/675.png")
  },
  {
    "id": 676,
    "name": "Furfrou",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 75,
      "Attack": 80,
      "Defense": 60,
      "Sp. Attack": 65,
      "Sp. Defense": 90,
      "Speed": 102,
      "Weight": 280,
      "Height": 12
    },
    "img_name": require("./images/676.png")
  },
  {
    "id": 677,
    "name": "Espurr",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 62,
      "Attack": 48,
      "Defense": 54,
      "Sp. Attack": 63,
      "Sp. Defense": 60,
      "Speed": 68,
      "Weight": 35,
      "Height": 3
    },
    "img_name": require("./images/677.png")
  },
  {
    "id": 678,
    "name": "Meowstic",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 74,
      "Attack": 48,
      "Defense": 76,
      "Sp. Attack": 83,
      "Sp. Defense": 81,
      "Speed": 104,
      "Weight": 85,
      "Height": 6
    },
    "img_name": require("./images/678.png")
  },
  {
    "id": 679,
    "name": "Honedge",
    "type": [
      "Steel",
      "Ghost"
    ],
    "base": {
      "HP": 45,
      "Attack": 80,
      "Defense": 100,
      "Sp. Attack": 35,
      "Sp. Defense": 37,
      "Speed": 28,
      "Weight": 20,
      "Height": 8
    },
    "img_name": require("./images/679.png")
  },
  {
    "id": 680,
    "name": "Doublade",
    "type": [
      "Steel",
      "Ghost"
    ],
    "base": {
      "HP": 59,
      "Attack": 110,
      "Defense": 150,
      "Sp. Attack": 45,
      "Sp. Defense": 49,
      "Speed": 35,
      "Weight": 45,
      "Height": 8
    },
    "img_name": require("./images/680.png")
  },
  {
    "id": 681,
    "name": "Aegislash",
    "type": [
      "Steel",
      "Ghost"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 150,
      "Sp. Attack": 50,
      "Sp. Defense": 150,
      "Speed": 60,
      "Weight": 530,
      "Height": 17
    },
    "img_name": require("./images/681.png")
  },
  {
    "id": 682,
    "name": "Spritzee",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 78,
      "Attack": 52,
      "Defense": 60,
      "Sp. Attack": 63,
      "Sp. Defense": 65,
      "Speed": 23,
      "Weight": 5,
      "Height": 2
    },
    "img_name": require("./images/682.png")
  },
  {
    "id": 683,
    "name": "Aromatisse",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 101,
      "Attack": 72,
      "Defense": 72,
      "Sp. Attack": 99,
      "Sp. Defense": 89,
      "Speed": 29,
      "Weight": 155,
      "Height": 8
    },
    "img_name": require("./images/683.png")
  },
  {
    "id": 684,
    "name": "Swirlix",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 62,
      "Attack": 48,
      "Defense": 66,
      "Sp. Attack": 59,
      "Sp. Defense": 57,
      "Speed": 49,
      "Weight": 35,
      "Height": 4
    },
    "img_name": require("./images/684.png")
  },
  {
    "id": 685,
    "name": "Slurpuff",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 82,
      "Attack": 80,
      "Defense": 86,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      "Speed": 72,
      "Weight": 50,
      "Height": 8
    },
    "img_name": require("./images/685.png")
  },
  {
    "id": 686,
    "name": "Inkay",
    "type": [
      "Dark",
      "Psychic"
    ],
    "base": {
      "HP": 53,
      "Attack": 54,
      "Defense": 53,
      "Sp. Attack": 37,
      "Sp. Defense": 46,
      "Speed": 45,
      "Weight": 35,
      "Height": 4
    },
    "img_name": require("./images/686.png")
  },
  {
    "id": 687,
    "name": "Malamar",
    "type": [
      "Dark",
      "Psychic"
    ],
    "base": {
      "HP": 86,
      "Attack": 92,
      "Defense": 88,
      "Sp. Attack": 68,
      "Sp. Defense": 75,
      "Speed": 73,
      "Weight": 470,
      "Height": 15
    },
    "img_name": require("./images/687.png")
  },
  {
    "id": 688,
    "name": "Binacle",
    "type": [
      "Rock",
      "Water"
    ],
    "base": {
      "HP": 42,
      "Attack": 52,
      "Defense": 67,
      "Sp. Attack": 39,
      "Sp. Defense": 56,
      "Speed": 50,
      "Weight": 310,
      "Height": 5
    },
    "img_name": require("./images/688.png")
  },
  {
    "id": 689,
    "name": "Barbaracle",
    "type": [
      "Rock",
      "Water"
    ],
    "base": {
      "HP": 72,
      "Attack": 105,
      "Defense": 115,
      "Sp. Attack": 54,
      "Sp. Defense": 86,
      "Speed": 68,
      "Weight": 960,
      "Height": 13
    },
    "img_name": require("./images/689.png")
  },
  {
    "id": 690,
    "name": "Skrelp",
    "type": [
      "Poison",
      "Water"
    ],
    "base": {
      "HP": 50,
      "Attack": 60,
      "Defense": 60,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 30,
      "Weight": 73,
      "Height": 5
    },
    "img_name": require("./images/690.png")
  },
  {
    "id": 691,
    "name": "Dragalge",
    "type": [
      "Poison",
      "Dragon"
    ],
    "base": {
      "HP": 65,
      "Attack": 75,
      "Defense": 90,
      "Sp. Attack": 97,
      "Sp. Defense": 123,
      "Speed": 44,
      "Weight": 815,
      "Height": 18
    },
    "img_name": require("./images/691.png")
  },
  {
    "id": 692,
    "name": "Clauncher",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 50,
      "Attack": 53,
      "Defense": 62,
      "Sp. Attack": 58,
      "Sp. Defense": 63,
      "Speed": 44,
      "Weight": 83,
      "Height": 5
    },
    "img_name": require("./images/692.png")
  },
  {
    "id": 693,
    "name": "Clawitzer",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 71,
      "Attack": 73,
      "Defense": 88,
      "Sp. Attack": 120,
      "Sp. Defense": 89,
      "Speed": 59,
      "Weight": 353,
      "Height": 13
    },
    "img_name": require("./images/693.png")
  },
  {
    "id": 694,
    "name": "Helioptile",
    "type": [
      "Electric",
      "Normal"
    ],
    "base": {
      "HP": 44,
      "Attack": 38,
      "Defense": 33,
      "Sp. Attack": 61,
      "Sp. Defense": 43,
      "Speed": 70,
      "Weight": 60,
      "Height": 5
    },
    "img_name": require("./images/694.png")
  },
  {
    "id": 695,
    "name": "Heliolisk",
    "type": [
      "Electric",
      "Normal"
    ],
    "base": {
      "HP": 62,
      "Attack": 55,
      "Defense": 52,
      "Sp. Attack": 109,
      "Sp. Defense": 94,
      "Speed": 109,
      "Weight": 210,
      "Height": 10
    },
    "img_name": require("./images/695.png")
  },
  {
    "id": 696,
    "name": "Tyrunt",
    "type": [
      "Rock",
      "Dragon"
    ],
    "base": {
      "HP": 58,
      "Attack": 89,
      "Defense": 77,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      "Speed": 48,
      "Weight": 260,
      "Height": 8
    },
    "img_name": require("./images/696.png")
  },
  {
    "id": 697,
    "name": "Tyrantrum",
    "type": [
      "Rock",
      "Dragon"
    ],
    "base": {
      "HP": 82,
      "Attack": 121,
      "Defense": 119,
      "Sp. Attack": 69,
      "Sp. Defense": 59,
      "Speed": 71,
      "Weight": 2700,
      "Height": 25
    },
    "img_name": require("./images/697.png")
  },
  {
    "id": 698,
    "name": "Amaura",
    "type": [
      "Rock",
      "Ice"
    ],
    "base": {
      "HP": 77,
      "Attack": 59,
      "Defense": 50,
      "Sp. Attack": 67,
      "Sp. Defense": 63,
      "Speed": 46,
      "Weight": 252,
      "Height": 13
    },
    "img_name": require("./images/698.png")
  },
  {
    "id": 699,
    "name": "Aurorus",
    "type": [
      "Rock",
      "Ice"
    ],
    "base": {
      "HP": 123,
      "Attack": 77,
      "Defense": 72,
      "Sp. Attack": 99,
      "Sp. Defense": 92,
      "Speed": 58,
      "Weight": 2250,
      "Height": 27
    },
    "img_name": require("./images/699.png")
  },
  {
    "id": 700,
    "name": "Sylveon",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 95,
      "Attack": 65,
      "Defense": 65,
      "Sp. Attack": 110,
      "Sp. Defense": 130,
      "Speed": 60,
      "Weight": 235,
      "Height": 10
    },
    "img_name": require("./images/700.png")
  },
  {
    "id": 701,
    "name": "Hawlucha",
    "type": [
      "Fighting",
      "Flying"
    ],
    "base": {
      "HP": 78,
      "Attack": 92,
      "Defense": 75,
      "Sp. Attack": 74,
      "Sp. Defense": 63,
      "Speed": 118,
      "Weight": 215,
      "Height": 8
    },
    "img_name": require("./images/701.png")
  },
  {
    "id": 702,
    "name": "Dedenne",
    "type": [
      "Electric",
      "Fairy"
    ],
    "base": {
      "HP": 67,
      "Attack": 58,
      "Defense": 57,
      "Sp. Attack": 81,
      "Sp. Defense": 67,
      "Speed": 101,
      "Weight": 22,
      "Height": 2
    },
    "img_name": require("./images/702.png")
  },
  {
    "id": 703,
    "name": "Carbink",
    "type": [
      "Rock",
      "Fairy"
    ],
    "base": {
      "HP": 50,
      "Attack": 50,
      "Defense": 150,
      "Sp. Attack": 50,
      "Sp. Defense": 150,
      "Speed": 50,
      "Weight": 57,
      "Height": 3
    },
    "img_name": require("./images/703.png")
  },
  {
    "id": 704,
    "name": "Goomy",
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 45,
      "Attack": 50,
      "Defense": 35,
      "Sp. Attack": 55,
      "Sp. Defense": 75,
      "Speed": 40,
      "Weight": 28,
      "Height": 3
    },
    "img_name": require("./images/704.png")
  },
  {
    "id": 705,
    "name": "Sliggoo",
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 68,
      "Attack": 75,
      "Defense": 53,
      "Sp. Attack": 83,
      "Sp. Defense": 113,
      "Speed": 60,
      "Weight": 175,
      "Height": 8
    },
    "img_name": require("./images/705.png")
  },
  {
    "id": 706,
    "name": "Goodra",
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 90,
      "Attack": 100,
      "Defense": 70,
      "Sp. Attack": 110,
      "Sp. Defense": 150,
      "Speed": 80,
      "Weight": 1505,
      "Height": 20
    },
    "img_name": require("./images/706.png")
  },
  {
    "id": 707,
    "name": "Klefki",
    "type": [
      "Steel",
      "Fairy"
    ],
    "base": {
      "HP": 57,
      "Attack": 80,
      "Defense": 91,
      "Sp. Attack": 80,
      "Sp. Defense": 87,
      "Speed": 75,
      "Weight": 30,
      "Height": 2
    },
    "img_name": require("./images/707.png")
  },
  {
    "id": 708,
    "name": "Phantump",
    "type": [
      "Ghost",
      "Grass"
    ],
    "base": {
      "HP": 43,
      "Attack": 70,
      "Defense": 48,
      "Sp. Attack": 50,
      "Sp. Defense": 60,
      "Speed": 38,
      "Weight": 70,
      "Height": 4
    },
    "img_name": require("./images/708.png")
  },
  {
    "id": 709,
    "name": "Trevenant",
    "type": [
      "Ghost",
      "Grass"
    ],
    "base": {
      "HP": 85,
      "Attack": 110,
      "Defense": 76,
      "Sp. Attack": 65,
      "Sp. Defense": 82,
      "Speed": 56,
      "Weight": 710,
      "Height": 15
    },
    "img_name": require("./images/709.png")
  },
  {
    "id": 710,
    "name": "Pumpkaboo",
    "type": [
      "Ghost",
      "Grass"
    ],
    "base": {
      "HP": 59,
      "Attack": 66,
      "Defense": 70,
      "Sp. Attack": 44,
      "Sp. Defense": 55,
      "Speed": 41,
      "Weight": 50,
      "Height": 4
    },
    "img_name": require("./images/710.png")
  },
  {
    "id": 711,
    "name": "Gourgeist",
    "type": [
      "Ghost",
      "Grass"
    ],
    "base": {
      "HP": 85,
      "Attack": 100,
      "Defense": 122,
      "Sp. Attack": 58,
      "Sp. Defense": 75,
      "Speed": 54,
      "Weight": 125,
      "Height": 9
    },
    "img_name": require("./images/711.png")
  },
  {
    "id": 712,
    "name": "Bergmite",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 55,
      "Attack": 69,
      "Defense": 85,
      "Sp. Attack": 32,
      "Sp. Defense": 35,
      "Speed": 28,
      "Weight": 995,
      "Height": 10
    },
    "img_name": require("./images/712.png")
  },
  {
    "id": 713,
    "name": "Avalugg",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 95,
      "Attack": 117,
      "Defense": 184,
      "Sp. Attack": 44,
      "Sp. Defense": 46,
      "Speed": 28,
      "Weight": 5050,
      "Height": 20
    },
    "img_name": require("./images/713.png")
  },
  {
    "id": 714,
    "name": "Noibat",
    "type": [
      "Flying",
      "Dragon"
    ],
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 35,
      "Sp. Attack": 45,
      "Sp. Defense": 40,
      "Speed": 55,
      "Weight": 80,
      "Height": 5
    },
    "img_name": require("./images/714.png")
  },
  {
    "id": 715,
    "name": "Noivern",
    "type": [
      "Flying",
      "Dragon"
    ],
    "base": {
      "HP": 85,
      "Attack": 70,
      "Defense": 80,
      "Sp. Attack": 97,
      "Sp. Defense": 80,
      "Speed": 123,
      "Weight": 850,
      "Height": 15
    },
    "img_name": require("./images/715.png")
  },
  {
    "id": 716,
    "name": "Xerneas",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 126,
      "Attack": 131,
      "Defense": 95,
      "Sp. Attack": 131,
      "Sp. Defense": 98,
      "Speed": 99,
      "Weight": 2150,
      "Height": 30
    },
    "img_name": require("./images/716.png")
  },
  {
    "id": 717,
    "name": "Yveltal",
    "type": [
      "Dark",
      "Flying"
    ],
    "base": {
      "HP": 126,
      "Attack": 131,
      "Defense": 95,
      "Sp. Attack": 131,
      "Sp. Defense": 98,
      "Speed": 99,
      "Weight": 2030,
      "Height": 58
    },
    "img_name": require("./images/717.png")
  },
  {
    "id": 718,
    "name": "Zygarde",
    "type": [
      "Dragon",
      "Ground"
    ],
    "base": {
      "HP": 108,
      "Attack": 100,
      "Defense": 121,
      "Sp. Attack": 81,
      "Sp. Defense": 95,
      "Speed": 95,
      "Weight": 3050,
      "Height": 50
    },
    "img_name": require("./images/718.png")
  },
  {
    "id": 719,
    "name": "Diancie",
    "type": [
      "Rock",
      "Fairy"
    ],
    "base": {
      "HP": 50,
      "Attack": 100,
      "Defense": 150,
      "Sp. Attack": 100,
      "Sp. Defense": 150,
      "Speed": 50,
      "Weight": 88,
      "Height": 7
    },
    "img_name": require("./images/719.png")
  },
  {
    "id": 720,
    "name": "Hoopa",
    "type": [
      "Psychic",
      "Ghost"
    ],
    "base": {
      "HP": 80,
      "Attack": 110,
      "Defense": 60,
      "Sp. Attack": 150,
      "Sp. Defense": 130,
      "Speed": 70,
      "Weight": 90,
      "Height": 5
    },
    "img_name": require("./images/720.png")
  },
  {
    "id": 721,
    "name": "Volcanion",
    "type": [
      "Fire",
      "Water"
    ],
    "base": {
      "HP": 80,
      "Attack": 110,
      "Defense": 120,
      "Sp. Attack": 130,
      "Sp. Defense": 90,
      "Speed": 70,
      "Weight": 1950,
      "Height": 17
    },
    "img_name": require("./images/721.png")
  },
  {
    "id": 722,
    "name": "Rowlet",
    "type": [
      "Grass",
      "Flying"
    ],
    "base": {
      "HP": 68,
      "Attack": 55,
      "Defense": 55,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 42,
      "Weight": 15,
      "Height": 3
    },
    "img_name": require("./images/722.png")
  },
  {
    "id": 723,
    "name": "Dartrix",
    "type": [
      "Grass",
      "Flying"
    ],
    "base": {
      "HP": 78,
      "Attack": 75,
      "Defense": 75,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      "Speed": 52,
      "Weight": 160,
      "Height": 7
    },
    "img_name": require("./images/723.png")
  },
  {
    "id": 724,
    "name": "Decidueye",
    "type": [
      "Grass",
      "Ghost"
    ],
    "base": {
      "HP": 78,
      "Attack": 107,
      "Defense": 75,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 70,
      "Weight": 366,
      "Height": 16
    },
    "img_name": require("./images/724.png")
  },
  {
    "id": 725,
    "name": "Litten",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 45,
      "Attack": 65,
      "Defense": 40,
      "Sp. Attack": 60,
      "Sp. Defense": 40,
      "Speed": 70,
      "Weight": 43,
      "Height": 4
    },
    "img_name": require("./images/725.png")
  },
  {
    "id": 726,
    "name": "Torracat",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 65,
      "Attack": 85,
      "Defense": 50,
      "Sp. Attack": 80,
      "Sp. Defense": 50,
      "Speed": 90,
      "Weight": 250,
      "Height": 7
    },
    "img_name": require("./images/726.png")
  },
  {
    "id": 727,
    "name": "Incineroar",
    "type": [
      "Fire",
      "Dark"
    ],
    "base": {
      "HP": 95,
      "Attack": 115,
      "Defense": 90,
      "Sp. Attack": 80,
      "Sp. Defense": 90,
      "Speed": 60,
      "Weight": 830,
      "Height": 18
    },
    "img_name": require("./images/727.png")
  },
  {
    "id": 728,
    "name": "Popplio",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 50,
      "Attack": 54,
      "Defense": 54,
      "Sp. Attack": 66,
      "Sp. Defense": 56,
      "Speed": 40,
      "Weight": 75,
      "Height": 4
    },
    "img_name": require("./images/728.png")
  },
  {
    "id": 729,
    "name": "Brionne",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 60,
      "Attack": 69,
      "Defense": 69,
      "Sp. Attack": 91,
      "Sp. Defense": 81,
      "Speed": 50,
      "Weight": 175,
      "Height": 6
    },
    "img_name": require("./images/729.png")
  },
  {
    "id": 730,
    "name": "Primarina",
    "type": [
      "Water",
      "Fairy"
    ],
    "base": {
      "HP": 80,
      "Attack": 74,
      "Defense": 74,
      "Sp. Attack": 126,
      "Sp. Defense": 116,
      "Speed": 60,
      "Weight": 440,
      "Height": 18
    },
    "img_name": require("./images/730.png")
  },
  {
    "id": 731,
    "name": "Pikipek",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 35,
      "Attack": 75,
      "Defense": 30,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 65,
      "Weight": 12,
      "Height": 3
    },
    "img_name": require("./images/731.png")
  },
  {
    "id": 732,
    "name": "Trumbeak",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 55,
      "Attack": 85,
      "Defense": 50,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      "Speed": 75,
      "Weight": 148,
      "Height": 6
    },
    "img_name": require("./images/732.png")
  },
  {
    "id": 733,
    "name": "Toucannon",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 80,
      "Attack": 120,
      "Defense": 75,
      "Sp. Attack": 75,
      "Sp. Defense": 75,
      "Speed": 60,
      "Weight": 260,
      "Height": 11
    },
    "img_name": require("./images/733.png")
  },
  {
    "id": 734,
    "name": "Yungoos",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 48,
      "Attack": 70,
      "Defense": 30,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 45,
      "Weight": 60,
      "Height": 4
    },
    "img_name": require("./images/734.png")
  },
  {
    "id": 735,
    "name": "Gumshoos",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 88,
      "Attack": 110,
      "Defense": 60,
      "Sp. Attack": 55,
      "Sp. Defense": 60,
      "Speed": 45,
      "Weight": 142,
      "Height": 7
    },
    "img_name": require("./images/735.png")
  },
  {
    "id": 736,
    "name": "Grubbin",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 47,
      "Attack": 62,
      "Defense": 45,
      "Sp. Attack": 55,
      "Sp. Defense": 45,
      "Speed": 46,
      "Weight": 44,
      "Height": 4
    },
    "img_name": require("./images/736.png")
  },
  {
    "id": 737,
    "name": "Charjabug",
    "type": [
      "Bug",
      "Electric"
    ],
    "base": {
      "HP": 57,
      "Attack": 82,
      "Defense": 95,
      "Sp. Attack": 55,
      "Sp. Defense": 75,
      "Speed": 36,
      "Weight": 105,
      "Height": 5
    },
    "img_name": require("./images/737.png")
  },
  {
    "id": 738,
    "name": "Vikavolt",
    "type": [
      "Bug",
      "Electric"
    ],
    "base": {
      "HP": 77,
      "Attack": 70,
      "Defense": 90,
      "Sp. Attack": 145,
      "Sp. Defense": 75,
      "Speed": 43,
      "Weight": 450,
      "Height": 15
    },
    "img_name": require("./images/738.png")
  },
  {
    "id": 739,
    "name": "Crabrawler",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 47,
      "Attack": 82,
      "Defense": 57,
      "Sp. Attack": 42,
      "Sp. Defense": 47,
      "Speed": 63,
      "Weight": 70,
      "Height": 6
    },
    "img_name": require("./images/739.png")
  },
  {
    "id": 740,
    "name": "Crabominable",
    "type": [
      "Fighting",
      "Ice"
    ],
    "base": {
      "HP": 97,
      "Attack": 132,
      "Defense": 77,
      "Sp. Attack": 62,
      "Sp. Defense": 67,
      "Speed": 43,
      "Weight": 1800,
      "Height": 17
    },
    "img_name": require("./images/740.png")
  },
  {
    "id": 741,
    "name": "Oricorio",
    "type": [
      "Fire",
      "Flying"
    ],
    "base": {
      "HP": 75,
      "Attack": 70,
      "Defense": 70,
      "Sp. Attack": 98,
      "Sp. Defense": 70,
      "Speed": 93,
      "Weight": 34,
      "Height": 6
    },
    "img_name": require("./images/741.png")
  },
  {
    "id": 742,
    "name": "Cutiefly",
    "type": [
      "Bug",
      "Fairy"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 40,
      "Sp. Attack": 55,
      "Sp. Defense": 40,
      "Speed": 84,
      "Weight": 2,
      "Height": 1
    },
    "img_name": require("./images/742.png")
  },
  {
    "id": 743,
    "name": "Ribombee",
    "type": [
      "Bug",
      "Fairy"
    ],
    "base": {
      "HP": 60,
      "Attack": 55,
      "Defense": 60,
      "Sp. Attack": 95,
      "Sp. Defense": 70,
      "Speed": 124,
      "Weight": 5,
      "Height": 2
    },
    "img_name": require("./images/743.png")
  },
  {
    "id": 744,
    "name": "Rockruff",
    "type": [
      "Rock"
    ],
    "base": {
      "HP": 45,
      "Attack": 65,
      "Defense": 40,
      "Sp. Attack": 30,
      "Sp. Defense": 40,
      "Speed": 60,
      "Weight": 92,
      "Height": 5
    },
    "img_name": require("./images/744.png")
  },
  {
    "id": 745,
    "name": "Lycanroc",
    "type": [
      "Rock"
    ],
    "base": {
      "HP": 75,
      "Attack": 115,
      "Defense": 65,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      "Speed": 112,
      "Weight": 250,
      "Height": 8
    },
    "img_name": require("./images/745.png")
  },
  {
    "id": 746,
    "name": "Wishiwashi",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 45,
      "Attack": 20,
      "Defense": 20,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 40,
      "Weight": 3,
      "Height": 2
    },
    "img_name": require("./images/746.png")
  },
  {
    "id": 747,
    "name": "Mareanie",
    "type": [
      "Poison",
      "Water"
    ],
    "base": {
      "HP": 50,
      "Attack": 53,
      "Defense": 62,
      "Sp. Attack": 43,
      "Sp. Defense": 52,
      "Speed": 45,
      "Weight": 80,
      "Height": 4
    },
    "img_name": require("./images/747.png")
  },
  {
    "id": 748,
    "name": "Toxapex",
    "type": [
      "Poison",
      "Water"
    ],
    "base": {
      "HP": 50,
      "Attack": 63,
      "Defense": 152,
      "Sp. Attack": 53,
      "Sp. Defense": 142,
      "Speed": 35,
      "Weight": 145,
      "Height": 7
    },
    "img_name": require("./images/748.png")
  },
  {
    "id": 749,
    "name": "Mudbray",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 70,
      "Attack": 100,
      "Defense": 70,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      "Speed": 45,
      "Weight": 1100,
      "Height": 10
    },
    "img_name": require("./images/749.png")
  },
  {
    "id": 750,
    "name": "Mudsdale",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 100,
      "Attack": 125,
      "Defense": 100,
      "Sp. Attack": 55,
      "Sp. Defense": 85,
      "Speed": 35,
      "Weight": 9200,
      "Height": 25
    },
    "img_name": require("./images/750.png")
  },
  {
    "id": 751,
    "name": "Dewpider",
    "type": [
      "Water",
      "Bug"
    ],
    "base": {
      "HP": 38,
      "Attack": 40,
      "Defense": 52,
      "Sp. Attack": 40,
      "Sp. Defense": 72,
      "Speed": 27,
      "Weight": 40,
      "Height": 3
    },
    "img_name": require("./images/751.png")
  },
  {
    "id": 752,
    "name": "Araquanid",
    "type": [
      "Water",
      "Bug"
    ],
    "base": {
      "HP": 68,
      "Attack": 70,
      "Defense": 92,
      "Sp. Attack": 50,
      "Sp. Defense": 132,
      "Speed": 42,
      "Weight": 820,
      "Height": 18
    },
    "img_name": require("./images/752.png")
  },
  {
    "id": 753,
    "name": "Fomantis",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 40,
      "Attack": 55,
      "Defense": 35,
      "Sp. Attack": 50,
      "Sp. Defense": 35,
      "Speed": 35,
      "Weight": 15,
      "Height": 3
    },
    "img_name": require("./images/753.png")
  },
  {
    "id": 754,
    "name": "Lurantis",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 70,
      "Attack": 105,
      "Defense": 90,
      "Sp. Attack": 80,
      "Sp. Defense": 90,
      "Speed": 45,
      "Weight": 185,
      "Height": 9
    },
    "img_name": require("./images/754.png")
  },
  {
    "id": 755,
    "name": "Morelull",
    "type": [
      "Grass",
      "Fairy"
    ],
    "base": {
      "HP": 40,
      "Attack": 35,
      "Defense": 55,
      "Sp. Attack": 65,
      "Sp. Defense": 75,
      "Speed": 15,
      "Weight": 15,
      "Height": 2
    },
    "img_name": require("./images/755.png")
  },
  {
    "id": 756,
    "name": "Shiinotic",
    "type": [
      "Grass",
      "Fairy"
    ],
    "base": {
      "HP": 60,
      "Attack": 45,
      "Defense": 80,
      "Sp. Attack": 90,
      "Sp. Defense": 100,
      "Speed": 30,
      "Weight": 115,
      "Height": 10
    },
    "img_name": require("./images/756.png")
  },
  {
    "id": 757,
    "name": "Salandit",
    "type": [
      "Poison",
      "Fire"
    ],
    "base": {
      "HP": 48,
      "Attack": 44,
      "Defense": 40,
      "Sp. Attack": 71,
      "Sp. Defense": 40,
      "Speed": 77,
      "Weight": 48,
      "Height": 6
    },
    "img_name": require("./images/757.png")
  },
  {
    "id": 758,
    "name": "Salazzle",
    "type": [
      "Poison",
      "Fire"
    ],
    "base": {
      "HP": 68,
      "Attack": 64,
      "Defense": 60,
      "Sp. Attack": 111,
      "Sp. Defense": 60,
      "Speed": 117,
      "Weight": 222,
      "Height": 12
    },
    "img_name": require("./images/758.png")
  },
  {
    "id": 759,
    "name": "Stufful",
    "type": [
      "Normal",
      "Fighting"
    ],
    "base": {
      "HP": 70,
      "Attack": 75,
      "Defense": 50,
      "Sp. Attack": 45,
      "Sp. Defense": 50,
      "Speed": 50,
      "Weight": 68,
      "Height": 5
    },
    "img_name": require("./images/759.png")
  },
  {
    "id": 760,
    "name": "Bewear",
    "type": [
      "Normal",
      "Fighting"
    ],
    "base": {
      "HP": 120,
      "Attack": 125,
      "Defense": 80,
      "Sp. Attack": 55,
      "Sp. Defense": 60,
      "Speed": 60,
      "Weight": 1350,
      "Height": 21
    },
    "img_name": require("./images/760.png")
  },
  {
    "id": 761,
    "name": "Bounsweet",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 42,
      "Attack": 30,
      "Defense": 38,
      "Sp. Attack": 30,
      "Sp. Defense": 38,
      "Speed": 32,
      "Weight": 32,
      "Height": 3
    },
    "img_name": require("./images/761.png")
  },
  {
    "id": 762,
    "name": "Steenee",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 52,
      "Attack": 40,
      "Defense": 48,
      "Sp. Attack": 40,
      "Sp. Defense": 48,
      "Speed": 62,
      "Weight": 82,
      "Height": 7
    },
    "img_name": require("./images/762.png")
  },
  {
    "id": 763,
    "name": "Tsareena",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 72,
      "Attack": 120,
      "Defense": 98,
      "Sp. Attack": 50,
      "Sp. Defense": 98,
      "Speed": 72,
      "Weight": 214,
      "Height": 12
    },
    "img_name": require("./images/763.png")
  },
  {
    "id": 764,
    "name": "Comfey",
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 51,
      "Attack": 52,
      "Defense": 90,
      "Sp. Attack": 82,
      "Sp. Defense": 110,
      "Speed": 100,
      "Weight": 3,
      "Height": 1
    },
    "img_name": require("./images/764.png")
  },
  {
    "id": 765,
    "name": "Oranguru",
    "type": [
      "Normal",
      "Psychic"
    ],
    "base": {
      "HP": 90,
      "Attack": 60,
      "Defense": 80,
      "Sp. Attack": 90,
      "Sp. Defense": 110,
      "Speed": 60,
      "Weight": 760,
      "Height": 15
    },
    "img_name": require("./images/765.png")
  },
  {
    "id": 766,
    "name": "Passimian",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 100,
      "Attack": 120,
      "Defense": 90,
      "Sp. Attack": 40,
      "Sp. Defense": 60,
      "Speed": 80,
      "Weight": 828,
      "Height": 20
    },
    "img_name": require("./images/766.png")
  },
  {
    "id": 767,
    "name": "Wimpod",
    "type": [
      "Bug",
      "Water"
    ],
    "base": {
      "HP": 25,
      "Attack": 35,
      "Defense": 40,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      "Speed": 80,
      "Weight": 120,
      "Height": 5
    },
    "img_name": require("./images/767.png")
  },
  {
    "id": 768,
    "name": "Golisopod",
    "type": [
      "Bug",
      "Water"
    ],
    "base": {
      "HP": 75,
      "Attack": 125,
      "Defense": 140,
      "Sp. Attack": 60,
      "Sp. Defense": 90,
      "Speed": 40,
      "Weight": 1080,
      "Height": 20
    },
    "img_name": require("./images/768.png")
  },
  {
    "id": 769,
    "name": "Sandygast",
    "type": [
      "Ghost",
      "Ground"
    ],
    "base": {
      "HP": 55,
      "Attack": 55,
      "Defense": 80,
      "Sp. Attack": 70,
      "Sp. Defense": 45,
      "Speed": 15,
      "Weight": 700,
      "Height": 5
    },
    "img_name": require("./images/769.png")
  },
  {
    "id": 770,
    "name": "Palossand",
    "type": [
      "Ghost",
      "Ground"
    ],
    "base": {
      "HP": 85,
      "Attack": 75,
      "Defense": 110,
      "Sp. Attack": 100,
      "Sp. Defense": 75,
      "Speed": 35,
      "Weight": 2500,
      "Height": 13
    },
    "img_name": require("./images/770.png")
  },
  {
    "id": 771,
    "name": "Pyukumuku",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 55,
      "Attack": 60,
      "Defense": 130,
      "Sp. Attack": 30,
      "Sp. Defense": 130,
      "Speed": 5,
      "Weight": 12,
      "Height": 3
    },
    "img_name": require("./images/771.png")
  },
  {
    "id": 772,
    "name": "Type: Null",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 95,
      "Attack": 95,
      "Defense": 95,
      "Sp. Attack": 95,
      "Sp. Defense": 95,
      "Speed": 59,
      "Weight": 1205,
      "Height": 19
    },
    "img_name": require("./images/772.png")
  },
  {
    "id": 773,
    "name": "Silvally",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 95,
      "Attack": 95,
      "Defense": 95,
      "Sp. Attack": 95,
      "Sp. Defense": 95,
      "Speed": 95,
      "Weight": 1005,
      "Height": 23
    },
    "img_name": require("./images/773.png")
  },
  {
    "id": 774,
    "name": "Minior",
    "type": [
      "Rock",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 100,
      "Sp. Attack": 60,
      "Sp. Defense": 100,
      "Speed": 60,
      "Weight": 400,
      "Height": 3
    },
    "img_name": require("./images/774.png")
  },
  {
    "id": 775,
    "name": "Komala",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 65,
      "Attack": 115,
      "Defense": 65,
      "Sp. Attack": 75,
      "Sp. Defense": 95,
      "Speed": 65,
      "Weight": 199,
      "Height": 4
    },
    "img_name": require("./images/775.png")
  },
  {
    "id": 776,
    "name": "Turtonator",
    "type": [
      "Fire",
      "Dragon"
    ],
    "base": {
      "HP": 60,
      "Attack": 78,
      "Defense": 135,
      "Sp. Attack": 91,
      "Sp. Defense": 85,
      "Speed": 36,
      "Weight": 2120,
      "Height": 20
    },
    "img_name": require("./images/776.png")
  },
  {
    "id": 777,
    "name": "Togedemaru",
    "type": [
      "Electric",
      "Steel"
    ],
    "base": {
      "HP": 65,
      "Attack": 98,
      "Defense": 63,
      "Sp. Attack": 40,
      "Sp. Defense": 73,
      "Speed": 96,
      "Weight": 33,
      "Height": 3
    },
    "img_name": require("./images/777.png")
  },
  {
    "id": 778,
    "name": "Mimikyu",
    "type": [
      "Ghost",
      "Fairy"
    ],
    "base": {
      "HP": 55,
      "Attack": 90,
      "Defense": 80,
      "Sp. Attack": 50,
      "Sp. Defense": 105,
      "Speed": 96,
      "Weight": 7,
      "Height": 2
    },
    "img_name": require("./images/778.png")
  },
  {
    "id": 779,
    "name": "Bruxish",
    "type": [
      "Water",
      "Psychic"
    ],
    "base": {
      "HP": 68,
      "Attack": 105,
      "Defense": 70,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      "Speed": 92,
      "Weight": 190,
      "Height": 9
    },
    "img_name": require("./images/779.png")
  },
  {
    "id": 780,
    "name": "Drampa",
    "type": [
      "Normal",
      "Dragon"
    ],
    "base": {
      "HP": 78,
      "Attack": 60,
      "Defense": 85,
      "Sp. Attack": 135,
      "Sp. Defense": 91,
      "Speed": 36,
      "Weight": 1850,
      "Height": 30
    },
    "img_name": require("./images/780.png")
  },
  {
    "id": 781,
    "name": "Dhelmise",
    "type": [
      "Ghost",
      "Grass"
    ],
    "base": {
      "HP": 70,
      "Attack": 131,
      "Defense": 100,
      "Sp. Attack": 86,
      "Sp. Defense": 90,
      "Speed": 40,
      "Weight": 2100,
      "Height": 39
    },
    "img_name": require("./images/781.png")
  },
  {
    "id": 782,
    "name": "Jangmo-o",
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 45,
      "Attack": 55,
      "Defense": 65,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      "Speed": 45,
      "Weight": 297,
      "Height": 6
    },
    "img_name": require("./images/782.png")
  },
  {
    "id": 783,
    "name": "Hakamo-o",
    "type": [
      "Dragon",
      "Fighting"
    ],
    "base": {
      "HP": 55,
      "Attack": 75,
      "Defense": 90,
      "Sp. Attack": 65,
      "Sp. Defense": 70,
      "Speed": 65,
      "Weight": 470,
      "Height": 12
    },
    "img_name": require("./images/783.png")
  },
  {
    "id": 784,
    "name": "Kommo-o",
    "type": [
      "Dragon",
      "Fighting"
    ],
    "base": {
      "HP": 75,
      "Attack": 110,
      "Defense": 125,
      "Sp. Attack": 100,
      "Sp. Defense": 105,
      "Speed": 85,
      "Weight": 782,
      "Height": 16
    },
    "img_name": require("./images/784.png")
  },
  {
    "id": 785,
    "name": "Tapu Koko",
    "type": [
      "Electric",
      "Fairy"
    ],
    "base": {
      "HP": 70,
      "Attack": 115,
      "Defense": 85,
      "Sp. Attack": 95,
      "Sp. Defense": 75,
      "Speed": 130,
      "Weight": 205,
      "Height": 18
    },
    "img_name": require("./images/785.png")
  },
  {
    "id": 786,
    "name": "Tapu Lele",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "base": {
      "HP": 70,
      "Attack": 85,
      "Defense": 75,
      "Sp. Attack": 130,
      "Sp. Defense": 115,
      "Speed": 95,
      "Weight": 186,
      "Height": 12
    },
    "img_name": require("./images/786.png")
  },
  {
    "id": 787,
    "name": "Tapu Bulu",
    "type": [
      "Grass",
      "Fairy"
    ],
    "base": {
      "HP": 70,
      "Attack": 130,
      "Defense": 115,
      "Sp. Attack": 85,
      "Sp. Defense": 95,
      "Speed": 75,
      "Weight": 455,
      "Height": 19
    },
    "img_name": require("./images/787.png")
  },
  {
    "id": 788,
    "name": "Tapu Fini",
    "type": [
      "Water",
      "Fairy"
    ],
    "base": {
      "HP": 70,
      "Attack": 75,
      "Defense": 115,
      "Sp. Attack": 95,
      "Sp. Defense": 130,
      "Speed": 85,
      "Weight": 212,
      "Height": 13
    },
    "img_name": require("./images/788.png")
  },
  {
    "id": 789,
    "name": "Cosmog",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 43,
      "Attack": 29,
      "Defense": 31,
      "Sp. Attack": 29,
      "Sp. Defense": 31,
      "Speed": 37,
      "Weight": 1,
      "Height": 2
    },
    "img_name": require("./images/789.png")
  },
  {
    "id": 790,
    "name": "Cosmoem",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 43,
      "Attack": 29,
      "Defense": 131,
      "Sp. Attack": 29,
      "Sp. Defense": 131,
      "Speed": 37,
      "Weight": 9999,
      "Height": 1
    },
    "img_name": require("./images/790.png")
  },
  {
    "id": 791,
    "name": "Solgaleo",
    "type": [
      "Psychic",
      "Steel"
    ],
    "base": {
      "HP": 137,
      "Attack": 137,
      "Defense": 107,
      "Sp. Attack": 113,
      "Sp. Defense": 89,
      "Speed": 97,
      "Weight": 2300,
      "Height": 34
    },
    "img_name": require("./images/791.png")
  },
  {
    "id": 792,
    "name": "Lunala",
    "type": [
      "Psychic",
      "Ghost"
    ],
    "base": {
      "HP": 137,
      "Attack": 113,
      "Defense": 89,
      "Sp. Attack": 137,
      "Sp. Defense": 107,
      "Speed": 97,
      "Weight": 1200,
      "Height": 40
    },
    "img_name": require("./images/792.png")
  },
  {
    "id": 793,
    "name": "Nihilego",
    "type": [
      "Rock",
      "Poison"
    ],
    "base": {
      "HP": 109,
      "Attack": 53,
      "Defense": 47,
      "Sp. Attack": 127,
      "Sp. Defense": 131,
      "Speed": 103,
      "Weight": 555,
      "Height": 12
    },
    "img_name": require("./images/793.png")
  },
  {
    "id": 794,
    "name": "Buzzwole",
    "type": [
      "Bug",
      "Fighting"
    ],
    "base": {
      "HP": 107,
      "Attack": 139,
      "Defense": 139,
      "Sp. Attack": 53,
      "Sp. Defense": 53,
      "Speed": 79,
      "Weight": 3336,
      "Height": 24
    },
    "img_name": require("./images/794.png")
  },
  {
    "id": 795,
    "name": "Pheromosa",
    "type": [
      "Bug",
      "Fighting"
    ],
    "base": {
      "HP": 71,
      "Attack": 137,
      "Defense": 37,
      "Sp. Attack": 137,
      "Sp. Defense": 37,
      "Speed": 151,
      "Weight": 250,
      "Height": 18
    },
    "img_name": require("./images/795.png")
  },
  {
    "id": 796,
    "name": "Xurkitree",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 83,
      "Attack": 89,
      "Defense": 71,
      "Sp. Attack": 173,
      "Sp. Defense": 71,
      "Speed": 83,
      "Weight": 1000,
      "Height": 38
    },
    "img_name": require("./images/796.png")
  },
  {
    "id": 797,
    "name": "Celesteela",
    "type": [
      "Steel",
      "Flying"
    ],
    "base": {
      "HP": 97,
      "Attack": 101,
      "Defense": 103,
      "Sp. Attack": 107,
      "Sp. Defense": 101,
      "Speed": 61,
      "Weight": 9999,
      "Height": 92
    },
    "img_name": require("./images/797.png")
  },
  {
    "id": 798,
    "name": "Kartana",
    "type": [
      "Grass",
      "Steel"
    ],
    "base": {
      "HP": 59,
      "Attack": 181,
      "Defense": 131,
      "Sp. Attack": 59,
      "Sp. Defense": 31,
      "Speed": 109,
      "Weight": 1,
      "Height": 3
    },
    "img_name": require("./images/798.png")
  },
  {
    "id": 799,
    "name": "Guzzlord",
    "type": [
      "Dark",
      "Dragon"
    ],
    "base": {
      "HP": 223,
      "Attack": 101,
      "Defense": 53,
      "Sp. Attack": 97,
      "Sp. Defense": 53,
      "Speed": 43,
      "Weight": 8880,
      "Height": 55
    },
    "img_name": require("./images/799.png")
  },
  {
    "id": 800,
    "name": "Necrozma",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 97,
      "Attack": 107,
      "Defense": 101,
      "Sp. Attack": 127,
      "Sp. Defense": 89,
      "Speed": 79,
      "Weight": 2300,
      "Height": 24
    },
    "img_name": require("./images/800.png")
  },
  {
    "id": 801,
    "name": "Magearna",
    "type": [
      "Steel",
      "Fairy"
    ],
    "base": {
      "HP": 80,
      "Attack": 95,
      "Defense": 115,
      "Sp. Attack": 130,
      "Sp. Defense": 115,
      "Speed": 65,
      "Weight": 805,
      "Height": 10
    },
    "img_name": require("./images/801.png")
  },
  {
    "id": 802,
    "name": "Marshadow",
    "type": [
      "Fighting",
      "Ghost"
    ],
    "base": {
      "HP": 90,
      "Attack": 125,
      "Defense": 80,
      "Sp. Attack": 90,
      "Sp. Defense": 90,
      "Speed": 125,
      "Weight": 222,
      "Height": 7
    },
    "img_name": require("./images/802.png")
  }
]


export default pokemon;