export function getCombinations(array, r) {
    const result = [];
    // Recursive function to generate combinations
    function generateCombos(combination, index) {
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
    return result;
  }