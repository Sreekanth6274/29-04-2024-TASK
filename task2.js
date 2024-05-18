// => JSON => JAVASCRIPT OBJECT NOTATION ( Task 4 )

let myInfo = {
    firstName : "Sreekanth",
    lastName : "Peddarapu",
    age : 24,
    qualiFication : "Btech",
    branch : "ECE",
}

let allElements = JSON.stringify(myInfo);
 // if uu want all Elements in double qoutations We can represent ( JSON.Stringify Method)
console.log(allElements)

let conertObject = JSON.parse(allElements);
// Again if uu want double quotes to Object we can represent ( JSON.parse Method )
console.log(conertObject);



// SPREAD OPERATORS with Objects; ( Task 1)
//  if uu Want Any adding Objects, we can use this spread method

let dMart = {
    vegeTables : "Tomato 1 Kg",
    milk :  "1 packet",
    coffePowder : "Brue 1packet",
    oilPacket : "Freedom 5lit"
}

let superMarket ={
    nonVeg: "Chickn 1kg",
    ingreDients : "Masala Packets",
    fruits: ["Apples" , "banana"],
    drinks : "ThumsUp",
}

let totalProducts = { ...dMart, ...superMarket} 

console.log(totalProducts);

// REST METHOD

let { vegeTables,milk, ...theRest} = totalProducts;

console.log(vegeTables,milk)

console.log(theRest);

//SPREAD OPERATORS WITH ARRAYS (task1)


let vegItems = ["curdrice", "Tomato Rice", "Sambar Rice"]
let nonvegItems =["chickendum","mutton biryani","fish fry"]

let allItems = [ ...vegItems, ...nonvegItems]

console.log(allItems);

//REST OPERATORS WITH ARRAYS

let [veg1,veg2, ...theRest1] = allItems;

console.log(veg1,veg2);

console.log(theRest1);


// function reverseString(reverse3)  {
//       let reverse1 = reverse3.reverse();
// }

// const str = prompt('enter promt: ');
// let result = reverseString(str);

// console.log(result);



function reverseString(str) {
    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");
    return joinArray;
  }
  reverseString("hello");
