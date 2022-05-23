// 1) Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
//var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)
//resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile 
//(riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalidi

class CustomMatch {
    constructor(a) {
        this.a = a;
    }
    plus(a) {
        this.a = this.a + a;
        return this;
    }
    minus(a) {
        this.a = this.plus - a;
        return this;
    }
    multiply(a) {
        this.a = this.a * a;
        return this;
    }
    divide(a) {
        this.a = this.a / a;
        return this;
    }
    toString() {
        return this.a;
    }

}
let result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);

console.log(result.toString());





//2) Custom bir array classi yaradin. Hemin arrayin find ve push metodu olsun. Taski ishleyib turn in edin.

