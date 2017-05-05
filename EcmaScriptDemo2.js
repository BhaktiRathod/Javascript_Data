var myobj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

//Display all objects with occupation as Programmer and sort with age;

var data = myobj.filter(item=>(item.occupation=="Programmer")).sort((a,b)=>(a.age-b.age))
//console.log(data);

// get all unique elements

var str="abcvfdfcvdea";
var arr=[];
getunique();
function getunique()
{
  var data = str.split('').toString();
  console.log(data);
  for(var i in data)
  {
    if((arr.indexOf(data.charAt(i)))==-1)
     {
         arr.push(data.charAt(i));
     }
  
   }
console.log(arr.toString().join(''));
}




var mynewobj = [
{"TeamLeader":[{"name" :"Saurabh","age":30},{"name":"Anupriya","age":32}],
  "Programmer" :[{"name":"kalyani","age":25},{"name":"Damodaran","age":27},{"name":"krishnakath","age":22},
                 {"name":"venketraman","age":28}],}]



