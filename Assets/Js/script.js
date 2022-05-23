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
        this.number = this.plus - number;
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



