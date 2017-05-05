var myobj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];


var mydata = myobj.filter(function(item,index)
{
    if(item.occupation==="Programmer")
    {
          return myobj[index];
  
    }



})

console.log(mydata);

var mydata2 = myobj.filter((item,index)=>
  if(item.occupat)

)
