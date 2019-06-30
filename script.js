let money = +prompt("Ваш бюджет на месяц",'');
let time = prompt("Введите дату в формате YYYY-MM-DD",'');
let appData = {
   budget: money,
   timeData: time,
   expenses:{},
   optionalExpenses :{},
   income: [],
   savings:false
};
for (let i =0; i<2; i++){
    let a = prompt("vvedite statiju",''),
        b = prompt("vv vo sk oboid",'');
    appData.expenses[a] = b;

   if (typeof(a)=== 'string' && typeof(a) !=null && typeof(b)!=null 
   && a!="" && b!=""){
      console.log("done");
      appData.expenses[a] = b;
   } else {
      i-- ;
   }
}
alert (money/30);
