function highestOccurrence(array) {
    if (array.length == 0) return null

    const modeMap = {},
      maxCount = 1,
      newArray = []
  
    for (var i = 0; i < array.length; i++) {
      const element = array[i];
  
      if (modeMap[element] == null) modeMap[element] = 1;
      else modeMap[element]++
  
      if (modeMap[element] > maxCount) {
        modes = [element]
        maxCount = modeMap[element]
      } else if (modeMap[element] == maxCount) {
        newArray.push(element);
        maxCount = modeMap[element];
      }
    }
    return newArray;
  }
/* 

Output 

highestOccurrence([2, 3, 2, 2, 2, 4, 2]);
[2]

highestOccurrence([2, 3, 2, 3, 2, 3, 4]);
[2, 3]

highestOccurrence(['a', 'b', 'c', 'a', 'a', 'a', 'a']);
['a']

highestOccurrence(['a', 'a', 2, 2, 2, 'a', 4]);
['a', 2]

*/