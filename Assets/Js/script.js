// 1) Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
//var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)
//resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile 
//(riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalidi

class CustomMatch {
    constructor(number) {
        this.number = number;
    }
    plus(number) {
        this.number = this.number + number;
        return this;
    }
    minus(number) {
        this.number = this.number - number;
        return this;
    }
    multiply(number) {
        this.number = this.number * number;
        return this;
    }
    divide(number) {
        this.number = this.number / number;
        return this;
    }
    toString() {
        return this.number;
    }

}
let result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);

console.log(result);
console.log(result.toString());

//2) Custom bir array classi yaradin. Hemin arrayin find ve push metodu olsun. Taski ishleyib turn in edin.


class CustomArray {
    constructor(arr) {
        this.arr = arr;
    }
    add(a) {
        let counter = 0;
        for (let i = 0; i < this.arr.length; i++) {
            counter++;
        }
        this.arr[counter] = a;
        return this.arr;
    }
    finds(a) {
        for (let i = 0; i < this.arr.length; i++) {
            if (a == this.arr[i]) {
                return this.arr[i];
            }
        }
        return -1;
    }

}
let array = new CustomArray([1, 2, 5, 3]);
array.add(7);
console.log(array);

console.log(array.finds(3));

//Əlavə işlər
//javascript ile html element yaratmaq ve html elementlere class vermek ve onclick istifade etmek
const container = document.createElement('div');
const row = document.createElement('div');
const col12 = document.createElement('div');
const button = document.createElement('button');

button.classList.add('btn', 'btn-dark');
button.innerText = 'İşığı söndür';

container.className = 'container';
row.className = 'row';
col12.className = 'col-12';
button.id = 'button-id';

col12.append(button);
row.append(col12);
container.append(row);
document.body.prepend(container);

button.onclick = function () {
    //if (button.classList.contains('btn-dark')){
    //    document.body.style.backgroundColor = 'black';        
    //}
    //else{
    //    document.body.style.backgroundColor = 'white';
    //}
    //button.classList.toggle('btn-dark');
    //button.classList.toggle('btn-light');

    if (button.classList.contains('btn-dark')) {
        button.classList.remove('btn-dark');
        button.classList.add('btn-light');
        document.getElementById('button-id'), this.innerHTML = 'İşığı yandır';
        document.body.style.backgroundColor = 'black';
    }
    else {
        button.classList.remove('btn-light');
        button.classList.add('btn-dark');
        document.getElementById('button-id'), this.innerHTML = 'İşığı söndür';
        document.body.style.backgroundColor = 'white';
    }
}
// Herflerin sayi
let str = "hasadsdsdfdfdfdfdfdfdfdfdfdfdfdf"

console.log("Soz: - ", str);

let st = str.charAt(1)

console.log(st);
let h = str.charCodeAt(0)
let a = str.charCodeAt(1)

console.log("Umumi sozun uzunlugu: ", str.length);

console.log("Sozun 1ci elementinin(yeni 0-ci indexi) deyeri - ",h);
console.log("Sozun 2ci elementinin(yeni 1-ci indexi) deyeri - ",a);

let count1 = 0;

 for (let i = 0; i < str.length; i++) {
     if (str.charCodeAt(i) == 97) {
         count1++;
     }
 }

console.log("a-nin uzunlugu",count1);

// ------------------Dynamic--------------------

// let strPrompt = prompt("Her hansi bir soz daxil edin")
// let char = prompt(" Qeyd etdiyiniz Sozde her hansi bir simvol secin ve hemin simvolun nece defe yazildigini oyrenin")

// let numb = char.charAt(0);
// // console.log("Qeyd etdiyinin simvol: ", numb);

// let charCount = 0;
// let count = 0;
// let charCodePrompt;
// let c = 0;

// for (let i = 0; i < strPrompt.length; i++) {
//     let charCode = strPrompt.charAt(i);
//     console.log("qeyd etdiyiniz simvollar: ", charCode);
//     if (numb == charCode) {
//         charCodePrompt = charCode;
//     }
//     else if (numb == undefined) {
//         console.log("Daxil etdiyiniz simvol qeyd olunan metn-de yoxdur");
//     }
// }

// console.log("Qeyd etdiyiniz soz {", strPrompt, "}");
// console.log("qeyd olunan sozun uzunlugu", strPrompt.length);
// console.log("qeyd olunan simvol: |", char, "|");

// for (let index = 0; index < strPrompt.length; index++) {
//     if (strPrompt.charAt(index) == charCodePrompt) {
//         charCount++;
//     }
// }
// console.log("qeyd etdiyiniz simvolun sayi: ", charCount);


// // sozdeki herfleri bir arraye yigib array formasinda geri qaytarmaq ucun

// let arr = [];

// for (let j = 0; j < strPrompt.length; j++) {

//     arr.push(strPrompt.charAt(j))
// }

// console.log(arr);


// // -=-=-=-=-=-= herflerin sayini gosteren method

// function findDuplicates() {
//     let obj = {
//         word: "",
//         uniqueChar: "",
//         uniqueCount: 0,
//         duplicates: 0
//     };

//     for (let i = 0; i < strPrompt.length; i++) {
//         obj.word += strPrompt[i];

//         if (obj.uniqueChar.indexOf(strPrompt[i]) < 0) {
//             obj.uniqueChar += strPrompt[i];
//             obj.uniqueCount++;
//         }
//         else {
//             obj.duplicates++;
//         }
//     }
//     if (obj.duplicates > 0) {
//         console.log(strPrompt, " sozunde ", obj.duplicates, " eded simvol tekrari var");
//     }

//     // obj.uniqueChar = obj.unique.replace(/[&\/\\#,_+()$~%.'":*?<>]/g, '');
//     // obj.uniqueChar = obj.unique.split('').sort().join('');

//     return obj;
// }

// console.log(findDuplicates(strPrompt));


// //  Artiq olanlari secib ayirir

// const getRepeatedChars = (strPrompt) => {
//     let chars = {};
//     for (let char of strPrompt) {
//         chars[char] = (chars[char] || 0) + 1;
//     }
//     return Object.entries(chars).filter(char => char[1] > 1).map(char => char[0]);
// }
// console.log("Tekrar Olunan Simvollar: ", getRepeatedChars(strPrompt));
// //----------------------------------


// // Herflerin sayini gosterir

// function CharCount(strPrompt) {
//     if (strPrompt) {
//         let newObj = {};
//         for (let i = 0; i < strPrompt.length; i++) {
//             if (newObj[strPrompt[i]]) {
//                 newObj[strPrompt[i]]++
//             }
//             else {
//                 newObj[strPrompt[i]] = 1;
//             }
//         }
//         console.log("Sozde olan simvollarin sayi: ", newObj);
//     }
// }

// CharCount(strPrompt)




