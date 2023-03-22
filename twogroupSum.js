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