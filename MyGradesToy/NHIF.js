let basicSalary= 30000
let benefits = 0
let grossSalary = basicSalary + benefits
let tax 
let netIncome = 0

 if(grossSalary <= 24000){
     tax = grossSalary * 0.1
     netIncome = grossSalary - tax 
    console.log(netIncome);
 }else if(grossSalary>24000 && grossSalary<=32333){
    tax = grossSalary * 0.25
    netIncome = grossSalary - tax
    console.log(netIncome);

 } else if (grossSalary>32333){
     tax = grossSalary * 0.3
     netIncome = grossSalary - tax
    console.log(netIncome);
 }