function rotateArray(inputArray=[],positions,shiftedArray=[],index=0-positions, inputLength=inputArray.length){
    if (inputLength===0||positions===0){return inputArray};
    while(index>inputLength-1){index-=inputLength};
    while(index<0){index+=inputLength};
    shiftedArray.push(inputArray[index]);
    if (shiftedArray.length<inputLength){
        return rotateArray(inputArray,positions,shiftedArray,index+1);
    } else {return shiftedArray}
}

module.exports = rotateArray;