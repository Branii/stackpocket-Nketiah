import { Box, Button, Checkbox, SimpleGrid } from '@mantine/core/';
import React, {useEffect, useState} from 'react'
import { arrayBuffer } from 'stream/consumers';

const SumOf2 = () => {

    const [userSelections, setUserSelections] = useState<number[]>([]);
    const [totalBet, setTotalBet] = useState(0);
    const numsList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    const labels:  string[] = ["1st", "2nd", "3rd", "4th", "5th"]
    const [checked, setChecked] = useState(false)
    const [checkBox, setCheckBox] = useState<string[]>([]);


    const handleCheckBox = ( label: string) => {

        const isChecked = checkBox.includes(label) ? checkBox.filter(l => l !== label) : [...checkBox, label]
        setCheckBox(isChecked)
    }



    const handleNumberSelection = (num: number) => {
        console.log("num ", num)
    }

  
   // Pick 2 Group(Joint)
   // 3 checkboxes = 45 * 3 = 135
   // 4 checkboxes = 45 * 6 = 270
   // 5 checkboxes = 45 * 10 = 450

    //const getCombinations = () => {}

    //   const sumOf2PlainJs = () => {
    //     let increment = 1;
    //     const incrementByIndex = {
    //       10: 4, 11: 4, 7: 4, 8: 4,
    //       12: 3, 13: 3, 6: 3, 5: 3,
    //       14: 2, 15: 2, 4: 2, 3: 2,
    //       9: 5,
    //       16: 1, 17: 1, 2: 1, 1: 1
    //     };
    //     for (let i = 0; i < 18; i++) {
    //       if (incrementByIndex[i]) {
    //         increment += incrementByIndex[i];
    //       }
    //     }
    //     return increment;
    //   };

    /**
     * 
     * @param arr this is the thing
     * @returns 
     */
    const sumOf2New = (arr: Array<number>): number => {
        let increment = 1;
        const incrementByIndex: {[key: number]: number} = {
          10: 4, 11: 4, 7: 4, 8: 4,
          12: 3, 13: 3, 6: 3, 5: 3,
          14: 2, 15: 2, 4: 2, 3: 2,
          9: 5,
          16: 1, 17: 1, 2: 1, 1: 1
        };
        for (let i = 0; i < arr.length; i++) {
          if (incrementByIndex[i]) {
            increment += incrementByIndex[i];
          }
        }
        return increment;
      };
      
      
      
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
      useEffect(() =>{ 

     console.log("Number ", sumOf2New(arr));

    },[arr]);


    function TwoGroupSum(userSelections   = [1,2,3,]){

      let selectionsArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
      let totalBetCount: number = 0
      for (let index = 0; index < userSelections.length; index++) {
        const userSelection = userSelections[index];
        totalBetCount += userSelection <= 9 ? Math.ceil((selectionsArray.indexOf(userSelection) + 1) / 2) : Math.ceil((17 - selectionsArray.indexOf(userSelection)) / 2)

       
      }
      
     
       const myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
       console.log(totalBetCount)
    }
    
   
   
  const SumOf2Pick2 = (userSelec: Array<number>) => {
    
    let totalBetCount = 0
    let overaLLBetArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,]
  userSelec.forEach((item) =>{
       
         totalBetCount +=  item <= 9 ?  (overaLLBetArray.indexOf(item) + 1) : 10 -((overaLLBetArray.indexOf(item) + 1) -10)

     })
       // console.log("total bet count: ",totalBetCount)
        return totalBetCount
}

  const Pick3Group3 = (userSelec: number[]) => {

    let totalBetCount = 0
    userSelec.forEach((item,index) => {

      index += 1
      totalBetCount = index * (index -1)


    })

    console.log("total bet count: ",totalBetCount)

    return totalBetCount
  }

  function pick3Group6(userSelec: number[]){

    return getCombinationsAll(userSelec,3);

  }
  

  const SumOf3 = (arr: number[]) => {
    const incrementByIndex: {[key: number]: number} = {
       0: 1, 1: 3, 2: 6, 3: 10, 4: 15, 5: 21,
       6: 28, 7: 36, 8: 45, 9: 55, 10: 63,
       11: 69, 12: 73, 13: 75, 14: 75, 15: 73,
       16: 69, 17: 63, 18: 55, 19: 45, 20: 36,
       21: 28, 22: 21, 23: 15, 24: 10, 25: 6,
       26: 3, 27: 1
    }
    return arr.reduce((increment, _, i) => increment + (incrementByIndex[i-1] || 0), 1)
  }

  const ThreeGroupSum = (arr: number[]) => {
    const incrementByIndex: {[key: number]: number} = {
       1: 1, 2: 2, 3: 2, 4: 4, 5: 5,
       6: 6, 7: 8, 8: 10, 9: 11, 10: 13,
       11: 14, 12: 14, 13: 15, 14: 15, 15: 14,
       16: 14, 17: 13, 18: 11, 19: 10, 20: 8,
       21: 6, 22: 5, 23: 4, 24: 2, 25: 2,
       26: 1
    }
    return arr.reduce((increment, _, i) => increment + (incrementByIndex[i + 1] || 0), 1) -1

  }

  const Pick4Joint = (allUserSelections: number[][]) => {
  
  let totalBetsCount = 0

    allUserSelections.forEach((rowSelections)=>{
       totalBetsCount === 0 ? totalBetsCount += rowSelections.length: totalBetsCount *= rowSelections.length
    })
    console.log(totalBetsCount)
    return totalBetsCount
  }


  const Pick4Group24 = (userSelec: number[]) => {
      return getCombinationsAll(userSelec, 4)
  }

  const Pick4Group12 = (userSelections: number[][]) =>{


    let firstRow = userSelections[0]
    let secondRow = userSelections[1]

    
     if([...firstRow,...secondRow].length !== firstRow.length + secondRow.length ) return false
   

    let totalBetsCount: number =  getCombinationsAll(userSelections[1], 2)

   return (firstRow.length > 1) ? totalBetsCount * firstRow.length : totalBetsCount

  }

  const Pick4Group4 = (userSelections: number[][]) => {
    
    let firstRow = userSelections[0]
    let secondRow = userSelections[1]
    
    

    console.log([...firstRow,...secondRow])
    console.log(firstRow.length + secondRow.length)
    if([...firstRow,...secondRow].length !== firstRow.length + secondRow.length ) return false
   
    let results =  firstRow.length * secondRow.length
    return results
    
   }





    function getCombinationsAll(array: number[], r: number){
      const result: number[][] = [];
     
      // Recursive function to generate combinations
      function generateCombos(combination: number[], index: number) {
        if (combination.length === r) {
          result.push(combination);
          return;
        }
     
        if (index >= array.length) {
          return;
        }
     
        const newCombo = [...combination];
        newCombo.push(array[index]);
     
        generateCombos(newCombo, index + 1);
        generateCombos(combination, index + 1);
    
      }
     
      generateCombos([], 0);
      
      return result.length;
    }

    function getCombinationForpick2GroupJoint(array: number[], r: number = 2){
      const result: number[][] = [];
     
      // Recursive function to generate combinations
      function generateCombos(combination: number[], index: number) {
        if (combination.length === r) {
          result.push(combination);
          return;
        }
     
        if (index >= array.length) {
          return;
        }
     
        const newCombo = [...combination];
        newCombo.push(array[index]);
     
        generateCombos(newCombo, index + 1);
        generateCombos(combination, index + 1);
    
      }
     
      generateCombos([], 0);
      
      return result.length;
    }


    useEffect(() => {
      
      TwoGroupSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])
      console.log("Here... ", SumOf2Pick2([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))
      console.log("Combs ", getCombinationsAll([0,1,2,3,4,5,6,7,8,9], 3));
      console.log("pick2GroupJoint ", getCombinationForpick2GroupJoint([1, 2]))
      console.log("under pick3 group 3", Pick3Group3([5,6,7,8,9]));
      console.log("pICK 3 GROUP 6 ", pick3Group6([5,6,7,8,]))
    console.log("sum of 3", SumOf3([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]));
    console.log("Three Group Sum ", ThreeGroupSum([1,2,3,4,5,6,7,8,9,10]))
    console.log("under pick4 group 24", Pick4Group24([0,1,2,3,4,5,6,7,8,9]));
    console.log("under pick 4 joint ", Pick4Joint([[5,6,7,8,9],[5,6,7,8,9],[5,6,7,8,9],[5,6,7,8,9],[5,6,7,8,9]]))
    console.log("under pick 4 group 12 ", Pick4Group12([[5,6,7,8,9],[0, 5],]))
    console.log("under pick 4 group 4", Pick4Group4([[5,6],[8,6]]))

     
  }, []);

 

  return (
    <div>
          <Box mt={50} ml={60}>
            {
                labels.map(label => 
                 <div key={Math.random()} style={{display: "inline-block", alignItems:"center"}}> 
                    <Checkbox label={label} mr={20} checked={checkBox.includes(label)} onChange={(e)=> handleCheckBox( label)}/> 
                </div>
                )
            }
          </Box>
            <Box mt={20} ml={50}>
                {
                    numsList && numsList.map((number, index) =>
                        <Button
                            key={index}
                            onClick={() => handleNumberSelection(number)}
                            mx={3}
                            variant={`${userSelections.includes(number + index) ? 'light' : 'default'}`}
                        >
                            {number}
                        </Button>
                    )
                }
                <Box ml={20} mt={20}>{totalBet + "bets"}</Box>
                <Box ml={20} mt={20}>{checkBox.length}</Box>
            </Box>
        </div>
  )
}

export default SumOf2

