
 let incomebalance = 0;
 let expensebalance = 0;
 let totalbalance=0;

income = () => {
    var income= document.getElementById("income");
    var category = document.getElementById("category");

    
    var isvalidincome = /^\d+$/.test(income.value);
    var isvalidcategory =/^[a-zA-Z ]+$/.test(category.value);

    var incomevalue = document.getElementById("income").value;
    var categoryvalue = document.getElementById("category").value;

    var totalincome = parseFloat(income.value);
    
    if(!isvalidincome){
        document.getElementById("errorincome").innerHTML = "invalid number"
    }else{
         document.getElementById("income").value = '';
         document.getElementById("errorincome").innerHTML = '';
    }

    if(!isvalidcategory){
        document.getElementById("errorcategory").innerHTML = "invalid category";
    }else{
        document.getElementById("category").value = '';
        document.getElementById("errorcategory").innerText = '';
    }
    if(isvalidincome && isvalidcategory){
        var row = document.getElementById("incometable-row");
      var tablebody = row.insertRow();

      var cell1 = tablebody.insertCell(0);
      var cell2 = tablebody.insertCell(1);
     
   
       cell1.innerHTML= categoryvalue;
       cell2.innerHTML= incomevalue;

       incomebalance += totalincome;

       document.getElementById("totalbalance").innerHTML=incomebalance;

       

    }
   
    totalbalances();
    update();


}


expense = () => {
    var expense= document.getElementById("expense");
    var expcategory = document.getElementById("expcategory");
    
    var isvalidexpense= /^\d+$/.test(expense.value);
    var isvalidexpcategory=/^[a-zA-Z ]+$/.test(expcategory.value);

    var epensevalue= document.getElementById("expense").value;
    var expcategoryvalue = document.getElementById("expcategory").value;

    var totalexpense = parseFloat(expense.value);
    
    if(!isvalidexpense){
        document.getElementById("errorexpense").innerHTML = "invalid number"
    }else{
        document.getElementById("expense").value = '';
        document.getElementById("errorexpense").innerHTML = '';
    }

    if(!isvalidexpcategory){
        document.getElementById("errorexpcategory").innerHTML = "invalid category"
    }else{
        document.getElementById("expcategory").value = '';
        document.getElementById("errorexpcategory").innerText = '';
    }

    if(isvalidexpense && isvalidexpcategory){
        var row = document.getElementById("expensetable-row");
      var tablebody = row.insertRow();

      var cells1 = tablebody.insertCell(0);
      var cells2 = tablebody.insertCell(1);
     
   
       cells1.innerHTML= expcategoryvalue;
       cells2.innerHTML= epensevalue ;

       expensebalance += totalexpense;

       document.getElementById("totalexpbalance").innerHTML= expensebalance;


    }
    totalbalances();
    update();
}



let totalbalances = () =>{
  let totincome =document.getElementById("totalbalance").innerHTML;
  let totexpense =document.getElementById("totalexpbalance").innerHTML;
  let totalbalance = totincome-totexpense;
  document.getElementById("lastbalance").innerHTML = totalbalance;
}

// -------------------------pie chart---------------------------


let update=()=>{
    let incomebalance= parseFloat(document.getElementById("totalbalance").innerHTML);
    let expensebalance= parseFloat(document.getElementById("totalexpbalance").innerHTML);
    let totalbalance= parseFloat(document.getElementById("lastbalance").innerHTML);


const ctx = document.getElementById('myChart');
let existingChart=Chart.getChart(ctx);

if(existingChart){
    existingChart.destroy();
}

new Chart(ctx, {
    type: 'pie',
     data :{
        labels: [
          'income',
          'expense',
          'balance'
        ],
        datasets: [{
          label: 'my income expense',
          data: [incomebalance,expensebalance,totalbalance ],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 20
        }]
      },
    
  });

}

window.onload=update;








