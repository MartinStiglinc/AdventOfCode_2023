//I am so proud of this my own code which take me almost 5 hours to code but it works

import { readFileSync } from "node:fs";

//create array of arrays from input txt file
const input = readFileSync("day7.txt", { encoding: "utf-8" }) // read day7.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // split on lines in text
  .map((item) => item.split(" ")).map(item => [item[0].split(""), item[1]]) //final array of arrays

  //numeric values of cards to now the order from weaker to stronger
  const cardsValue = {
    'A': 14,
    'K': 13,
    'Q': 12,
    'J': 11,
    'T': 10,
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2
  }

  //function for part one of day7
  const part1 = () => {
    //creating helping object for later sorting
    input.map(item => {
      const counts = {}
      item[0].forEach(function (x) { counts[x] = (counts[x] || 0) + 1; })
      let points = 0

      //all possible cards on hand with the points needed to later sorting
      switch(Object.keys(counts).length) {
        case 1:
          points +=70000
          break;
        case 2:
          points += 40000
              switch(Object.values(counts).sort((a,b) => b-a)[0]){
                case 4:
                  points += 20000
                  break;
                case 3: 
                  points += 10000
                  break;
                default:
                  points = points
              }

          break;
        case 3:
          points +=20000
          switch(Object.values(counts).sort((a,b) => b-a)[0]){
            case 3:
              points += 20000
              break;
            case 2:
              points += 10000
              break;
            default:
              points = points
          }
          break;
        case 4:
          points +=20000
          break;
        case 5:
          points +=10000
          break;
        default:
          points = 0
      }
      item.push(points)
    })
    // sort the array from first card to last card
    input.sort(([[a,b,c,d,e],f,g],[[i,j,k,l,m],n,o])=>
    cardsValue[a]-cardsValue[i] || cardsValue[b] - cardsValue[j] || cardsValue[c]-cardsValue[k] || cardsValue[d] - cardsValue[l] || cardsValue[e] - cardsValue[m])
         .map((item, index) => item[2] += index+1) //adding index value to the points
    input.sort(([a,b,c],[d,e,f])=> c - f) //final sorting

    //calculate the final result number for puzzle par one
  let result = input.map((item,index)=> (index+1)*Number(item[1]))
                    .reduce((acc,numb)=>acc+numb,0)
  console.log(result) //console log the final number
  }
  part1() //activate function for part one
