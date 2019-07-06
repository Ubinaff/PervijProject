let money, time;
function start(){
    money = +prompt("Ваш бюджет на месяц",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');
    while (isNaN(money) || money==""|| money == null ) {
      money = prompt("Ваш бюджет на месяц",'');

    }
}
start();

// function detectLevel(){
//    if (money > 100){
//       console.log("уровень достатка высокий");
//    } else {
//       console.log("уровень достатка низок");
//    }
// }
// detectLevel();
let appData = {
   budget: money,
   timeData: time,
   expenses:{},
   optionalExpenses :{},
   income: [],
   savings:true,
   chooseExpenses: function(){
      for(let i=0; i<2; i++){
         let          a = prompt("введите обязательную статью расходов в этом месяце",''),
                      b = prompt("во сколько обойдется",'');
         if ((typeof (a)) != null && (typeof (b)) != null && a!= ""&& b!=""&& a.length < 50)  {
            console.log("всё верно");
            appData.expenses[a] = b;

         }  else {
            i= i-1;
         }         
      }

   },
   detectDayBudget: function (){
      appData.moneyPerDay = (appData.budget / 30).toFixed(1);
      alert (appData.moneyPerDay);
   },
   checkSavings: function () {
      if (appData.savings == true){
               let save = +prompt("kakova summa nakoplenija"),
                   precent = +prompt("pod kakoj procent");
         
                   appData.monthIncome = save/100/12*precent;
                   alert("Dochod v Mesjaz s vashego deposita:"+ appData.monthIncome);
      }
   },
   chooseOptExpenses: function () {
      for (let i=1; i<3; i++){
         let opt = prompt ("Статья необязательных расходов", "");
         appData.optionalExpenses[i]= opt;
         // if ((typeof(appData.optionalExpenses[i])===1)){
         //    console.log("статья необяхательных вопросов" + (i));
         // }
      }
   },
   choosIncome: function() {
      let items = prompt("что принесёт допольнительный доход","");
      appData.income = items.split(", ");
      appData.income.push(prompt("модет что то ещё",""));
      appData.income.sort();

      appData.income.forEach(function(item,i){
         i= i+1;
         alert("Способ "+ i+ " : " + item);
      });          
   },
   
};
for(let key in appData){
      console.log(key);
   } 
   for(let key of appData){
      console.log(key);
   } 
