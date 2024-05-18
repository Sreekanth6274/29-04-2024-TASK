//Ternary Operators (TAsk 2)

let number1 = 50;
let number2 = 60;

let lowValue = number1 > number2 

if(lowValue){
    console.log(`${number1} is Greater.`);
} else {
    console.log(`${number1} is Not Greater.`)
}

let ternaryOperator = number1 < number2 ? `${number1} is less than.` : `${number2} is Not less than..`

console.log( ternaryOperator);


//OBJECT DESTRUCTURING (Task 3)

let mobileFeatures = {
    model: "Iqoo 12",
    color: "Desert Red",
    camera: " 50mp + 50mp + 64mp",
    ram : "12Gb RAM",
    launchYear : 2024,
    additionalFeatures : {
      bandwidth:  "5G bandwidth", 
      processor : "Snapdragon Gen1",
    },
    charger: " 120w Flash Charger",
    battery : "5000mah"
}

   let ram ="+4Gb RAM" ;

let {model,ram : myRam,additionalFeatures, charger,battery, camera,launchYear } = mobileFeatures;

console.log(model);
console.log(myRam);
console.log(additionalFeatures);
console.log(charger);
console.log(camera);
console.log(battery);
console.log(launchYear);

// Concept Of "This" Keyword ( TAsk 5 )

let mobileFeatures2 = {
    model: "Iqoo 12",
    color: "Desert Red",
    camera: " 50mp + 50mp + 64mp",
    ram : "12Gb RAM",
    launchYear : 2024,
    additionalFeatures : {
      bandwidth:  "5G bandwidth", 
      processor : "Snapdragon Gen1",
    },
    charger: " 120w Flash Charger",
    battery : "5000mah",

    mobileInfo : function(){
      console.log(this.camera);
    },
}

mobileFeatures2.mobileInfo(mobileFeatures2);



let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

let name5 ="Cs ACademy"
let name7 = name5.slice(0,5)
console.log(name7)

let name8 = ("cats")








function modifyArray(arr, callback) {
  arr.unshift(6456565);
callback();
}

let arr = [1,2,3,4,5];

modifyArray(arr, function(){
  console.log("arr has been modified",arr)
});


let filterConcept = () => {
    let number1 = [1,2,5,5,6,5,2,7,8,7,9,8,9,1,3,4,3]

    let number2 =number1.filter( number1 <= 9);

    console.log(number2);
}

filterConcept();












