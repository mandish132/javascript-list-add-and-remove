//  var -> Function Scoped
// let,const -> BLock Scoped

// ARRAYS IN JS

const items=[
    {name:"Computer", price:90},
    {name:"room",price:200,quality:"medium"},
    {name:"bike",company:"honda",price:300},
]
const filters=items.filter(item => {
   return item.price>=100


})
console.log(filters)
const mapped=items.map((item) => {

       return ` ${item.name} price- >${item.price}`



})
// // console.log(filters)
console.log(mapped)

items.forEach((item) => {
    if(item.price>100){
        console.log(item.name)
    }

})
filters.forEach((itemss) => {
    console.log(itemss.name)


})
const isexpen=items.every(item => {
    return item.price<=500

})
console.log(isexpen)

const total=items.reduce((sum,item)=>{
    return item.price+sum

},0)
console.log(total)

//ARROW FUNCTIONS 
function sum(a,b){
    return a+b

}
console.log(sum(25,10))

let sums=(a,b)=>{
    return a+b

}
console.log(sums(25,10))
//CLASSES IN 
//GETTER AND SETTER IN JAVASCRIPT
class Square{

    constructor(width,height){
        this.width=width
        this.height=height
    }
    get area(){
        return this.width*this.height
    }

    get info(){
        console.log(`This square is of width ${this.width} and height of ${this.height}`)
    }

    set area(value){
       this.width=value

       return this.width
    }
    get area1(){
        return this.width*this.height
    }
}
obj=new Square(10,5)
obj.info
console.log(obj.area)

console.log(obj.area=3)
console.log(obj.area1)
//STATIC METHODS 

class Square{
    constructor(width,length){
        this.width=width
        this.length=length

    }
    static area(obj){
        return obj.length*obj.width
    }
    static area1(obj2,obj3){
        return obj2*obj3
    }
}

obj1=new Square(10,4)
console.log(Square.area(obj1))
console.log(Square.area1(9,5))

//Inheritance and extends

class Person{
    constructor(name,age){
        this.name=name
        this.age=age


    }
    describe(){
        console.log(`I am ${this.name} and age is${this.age}`)
    }

}
class Progammer extends Person{
    constructor(name,age,experience){
        super(name,age);
        this.experience=experience


    }
    code(){
        console.log(`${this.name} is coding for ${this.experience} years`)

    }



}
let person1=new Person("ram",40)
let program=[
    new Progammer("ram",30,5),
    new Progammer("hari",24,2)

]
function develop(program){

    let mapped=program.map((item) =>{
        item.code()
    })


}
develop(program);
person1.describe()
progam.code()
progam.describe()

class Listitems {
    constructor(element) {
        this.listelement = element
        this.textlist = ["code", "frustation"]
    }
    static createitems(text) {
        const li = document.createElement("li")
        li.textContent = text
        return li
    }
    update() {

        for (const text of this.textlist) {
            this.listelement.appendChild(Listitems.createitems(text));
        }

    }
    add(text){
     
       this.textlist.push(text)
       this.update()
     
 }
}