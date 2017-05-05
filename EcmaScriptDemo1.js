var myobj=[
{"name":"Atul","salary":20000,"job":"TL"},
{"name":"Sita","salary":20000,"job":"Manager"},
{"name":"Happy","salary":30000,"job":"Manager"},
{"name":"Honey","salary":40000,"job":"Manager"},
{"name":"Rahul","salary":10000,"job":"tl"},
]

//with ecma5 printing total of salary
var salary=myobj.map(function(n)
{
  return n.salary;
}).filter(function(item)
{
   if(item>10000)
{
   //console.log(item); 
 return item;
}
  
}).reduce(function(acc,value)
{
   return (acc+value);

})

//console.log(salary)

//with ecma6 printing total of salary
var salary1 = myobj.map(n => (n.salary)).
filter(item=>(item>10000)).
reduce((acc,value)=>(acc+value));
//console.log(salary1);


//with ecma5 printing name imp:-filter will always return the whole array after filter it wont return  a single item
var data = myobj.filter(function(item){
 return (item.job=="Manager")

}).map(function(n)
{
  return n.name;
})

//console.log("data here"+JSON.stringify(data).toString().toUpperCase());

//with ecma6 printing name

var data2 = myobj.filter(item=>(item.job=="Manager")).map(n=>n.name);

console.log(data2);

//-----------------------------------------------------------












