/* var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 50 }
  ];

  function olderPerson (input){
    
    let x = 0;

   for (i=0 ; i<=4 ;i++){
     
     if(input[i].age > input[i++].age){
         
         x = input[i].age;
     }
     else {
        x = input[i].age;
     }
    
    }
   return x;
}

 console.log (olderPerson (persons));
 */

var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 100 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];

  function firstName (input){
    
    let x = new Array (5);

   for (i=0 ; i<=4 ;i++){
     
    x[i] = (input[i].age);
    
    }

   return x;
}



xx = firstName (persons);

var max_of_array = Math.max.apply(Math, xx);
console.log(max_of_array);



