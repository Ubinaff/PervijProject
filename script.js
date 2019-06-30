let money, time;
function start(){
    money = +prompt("Ваш бюджет на месяц",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');
    while (isNaN(money) || money==""|| money == null ) {
      money = +prompt("Ваш бюджет на месяц",'');

    }
}
start();
function detectLevel(){
   if (money > 100){
      console.log("уровень достатка высокий");
   } else {
      console.log("уровень достатка низок");
   }
}
detectLevel();
let appData = {
   budget: money,
   timeData: time,
   expenses:{},
   optionalExpenses :{},
   income: [],
   savings:true
};
function chooseExpenses(){
   for (let i =0; i<2; i++){
      let a = prompt("введите обязательную статью расходов в этом месяце",''),
          b = prompt("во сколько обойдется",'');
      appData.expenses[a] = b;
  
     if (typeof(a)=== 'string' && typeof(a) !=null && typeof(b)!=null 
     && a!="" && b!=""){
        console.log("done");
        appData.expenses[a] = b;
     } else {
        i-- ;
     }
  }
}
chooseExpenses();
appData.moneyPerDay = (appData.budget / 30).toFixed(1);

alert (appData.moneyPerDay);

function checkSavings(){
   if (appData.savings == true){
      let save = +prompt("kakova summa nakoplenija"),
          precent = +prompt("pod kakoj procent");

          appData.monthIncome = save/100/12*precent;
          alert("Dochod v Mesjaz s vashego deposita:"+ appData.monthIncome);
   }
}
checkSavings();
function chooseOptExpenses(){
   for (let i=0; i<3; i++){
      appData.optionalExpenses[i+1] = +prompt("статья необяхательных вопросов" + (i+1));
   }
}
chooseOptExpenses();