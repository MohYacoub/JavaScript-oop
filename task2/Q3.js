var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];

  function firstName (input){
    
    let sum = 0;

   for (i=0 ; i<=4 ;i++){
     
     sum += (input[i].age);
    
    }

   var avg = (sum)/i
   return avg;
}

 console.log (firstName (persons));
