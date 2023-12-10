import { readFileSync } from "node:fs";

const input = readFileSync("day7.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n")
  .map((item) => item.split(" ")).map(item => [item[0].split(""), item[1]])

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

  const part1 = () => {
    
    input.map(item => {
      const counts = {}
      item[0].forEach(function (x) { counts[x] = (counts[x] || 0) + 1; })
      let points = 0

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

    input.sort(([[a,b,c,d,e],f,g],[[i,j,k,l,m],n,o])=>
    cardsValue[a]-cardsValue[i] || cardsValue[b] - cardsValue[j] || cardsValue[c]-cardsValue[k] || cardsValue[d] - cardsValue[l] || cardsValue[e] - cardsValue[m])
         .map((item, index) => item[2] += index+1)
    input.sort(([a,b,c],[d,e,f])=> c - f)
  
  let result = input.map((item,index)=> (index+1)*Number(item[1]))
                    .reduce((acc,numb)=>acc+numb,0)
  console.log(result)
  }
  part1()