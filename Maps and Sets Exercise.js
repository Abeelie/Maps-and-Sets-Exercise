// Quick Question #1
// What does the following code return?

new Set([1,1,2,2,3,4]) // {1,2,3,4}

// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("") // ref


let m = new Map();
m.set([1,2,3], true); // 0: {Array(3) => true}
m.set([1,2,3], false); //  1: {Array(3) => false}


const hasDuplicate = (array) => new Set(array).size !== array.length ? true : false;

function vowelCount(string){
	let vowel = "aeiou";
	const vowelMap = new Map();
    for(let char of string){
    let lowerCaseChar = char.toLowerCase()
    if(vowel.includes(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

