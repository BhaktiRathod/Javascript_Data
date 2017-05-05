var myobj=[
{"name":"Atul","salary":20000,"job":"TL"},
{"name":"Sita","salary":20000,"job":"Manager"},
{"name":"Happy","salary":30000,"job":"Manager"},
{"name":"Honey","salary":40000,"job":"Manager"},
{"name":"Rahul","salary":10000,"job":"tl"},
]

var salary=myobj.map(function(n)
{
  return n.salary;
})

console.log(salary);
