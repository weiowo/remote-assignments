//Assignment1

function findMax(arr) {
    let maxnumber = [0,0];
  
    for(let i = 0; i < arr.length; i++) {
  
      for(let j = 0; j < arr[i].length; j++) {
        
        if(arr[i][j] > maxnumber[i]) {
           
           maxnumber[i] = arr[i][j];
        }
      }
   }
   return maxnumber;
}

console.log(findMax([[1, 2, 4, 5],[5, 2, 7, 1, 6]]));

//Assignment1-corrected version

function findmax(arr) {
   let maxnumber = arr[0];
 
   for(let i = 0; i < arr.length; i++) {

       if(arr[i] > maxnumber) {        
          maxnumber = arr[i];
       }
     }
  
  return maxnumber;
}

console.log(findmax([1, 2, 4, 5]));
console.log(findmax([5,2,7,1,6]));



//Assignment2

function calculate(args){
   let result;
   if(args.op==="+"){
   result=args.n1+args.n2;
   }else if(args.op==="-"){
   result=args.n1-args.n2;
   }else{
   result="Not supported";
   }
   return result;
   }


//First way
console.log(calculate({n1:200,n2:450,op:"-"}));

//Second way
class Num{
   constructor(n1,n2,op){
      this.n1=n1;
      this.n2=n2;
      this.op=op;
   }
}

const Numbers = new Num(300,450,"+");
console.log(calculate(Numbers));





//Assignment3

function avg(data){
   let sum = 0;

   for (let i = 0; i < data.products.length; i++){
      sum += data.products[i].price;
   }
   let avgprice = sum/data.products.length;
   return avgprice ;
} 

console.log(avg({size:3,products:[
   {name:"Product 1",price:100},
   {name:"Product 2",price:700},
   {name:"Product 3",price:250},
   ]}));

data={
   size:3, 
   products:[ {name:"Product 1",price:100},
              {name:"Product 2",price:700},
              {name:"Product 3",price:250},
]}

//Average price of all products is 350

