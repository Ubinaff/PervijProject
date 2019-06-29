var money = prompt("Ваш бюджет на месяц");
console.log(money);
var time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(time);
var obj = {
   budjet: money,
   vremja: time,
   expenses:"",
   optionalExpenses :"",
   income: [],
   savings:false
};
console.log(obj.budjet);
var otvet1 = prompt("введите обязательную статью расхлд");
var otvet2 = prompt("во сколько обойдётся");
var expenses ={
arrSotvetami:[otvet1 + ":"+ otvet2]
};
alert (money/30);
