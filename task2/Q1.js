class Person {
    constructor(first_name,last_name,age,dob,food,favorite_movie){
    this.fname = first_name;
    this.lname = last_name ;
    this.age = age ;
    this.dob = dob ;
    this.food = food.split(',');
    this.fvmov = favorite_movie.split(',') ;
}}

let Mohammad = new Person (
    "Mohammad",
    "Yacoub",
    38,
    "16/11/1994",
    "'spagiti','magloba','pizza'",
    "'yourname','alone','insideout','7bound'"
)

console.log(Mohammad);