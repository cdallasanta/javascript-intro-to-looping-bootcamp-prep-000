function forLoop(arr){
  for(var i=0;i<25;i++){
    if(i===1){
      arr.push("I am 1 strange loop.");
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  
  return arr;
}


function whileLoop(num){
  while(num>0){
    console.log(--num);
  }
  return 'done';
}


var n = 0;
 
function incrementVariable() {
  n = n + 1;
}

function doWhileLoop(arr){
  do {
    arr.splice(arr.length-1,1);
  } while (arr.length > 0 && incrementVariable())
  console.log(arr);
  return arr;
}

