// 1. Input is taken as the sample Input given in the Assignment question,
// Input can be modified by placing new values in the "sock" array and hence the result will change accordingly.

let socks = [
  10,
  10,
  10,
  10,
  20,
  30,
  30,
  30,
  30,
  30,
  30,
  30,
  40,
  40,
  40,
  40,
  40
];
function sorting() {
  let newArray = [];
  let sortedSocks = socks.sort();
  //Duplicating the given array of Input for comparison
  let sortedSocksCopy = sortedSocks.slice(0);

  //Loop goes over every element in the Input
  for (var i = 0; i < sortedSocks.length; i++) {
    myCount = 0;
    //Looping over every element to see if it's the same.
    for (var j = 0; j < sortedSocksCopy.length; j++) {
      if (sortedSocks[i] == sortedSocksCopy[j]) {
        // increase amount of times duplicate is found
        myCount++;
        delete sortedSocksCopy[j];
      }
    }
    if (myCount > 0) {
      var a = new Object();
      let pairOfSocks = myCount / 2;
      let soldablePair;
      //Now checking if the Number of socks in pair is an Integer or decimal.
      if (Number.isInteger(pairOfSocks)) {
        //If integer, it is set as the number of pair that can be sold
        soldablePair = pairOfSocks;
      } else {
        //If decimal, it is brought down to the lesser closest Integer
        // and set to the number of pairs of socks that can be sold.
        soldablePair = Math.floor(pairOfSocks);
      }
      a.soldablePair = soldablePair;
      a.value = sortedSocks[i];
      a.count = myCount;
      newArray.push(a);
    }
  }
  console.log(newArray);
  let finalPairOfSocks = 0;
  //Now of each Object the number of pair of socks that can be sold are added
  // and outputted to the screen by document.getElementById
  for (let i = 0; i < newArray.length; i++) {
    finalPairOfSocks += newArray[i].soldablePair;
  }
  document.getElementById(
    "result"
  ).innerHTML = `${finalPairOfSocks} pair of socks.`;
  return newArray;
}
