const balance = document.getElementById('balance');
const donationButton = document.getElementById('donation_button');
const historyButton = document.getElementById('history-button');
const donationContainer = document.getElementById('donation-container');
const historyContainer = document.getElementById('history-container');
const donateNoakhali = document.getElementById('donate-noakhali');
const noakhaliFund =  document.getElementById('noakhali-fund');
const donateFeni = document.getElementById('donate-feni');
const feniFund = document.getElementById('feni-fund');
const donateQuota = document.getElementById('donate-quota');
const quotaFund = document.getElementById('quota-fund');


donateNoakhali.addEventListener('click',function(){
    let currentBalance = parseFloat(balance.innerText);
    let noakhaliFunds = Number(noakhaliFund.innerText);
    const addAmount = Number(document.getElementById("input-field-noakhali").value);
    if(currentBalance>=addAmount && addAmount>=1){
        currentBalance -= addAmount;
        balance.innerText = currentBalance;
      noakhaliFunds +=addAmount;
      noakhaliFund.innerText = noakhaliFunds;
    }
   else{
    alert("Invalid Amount");
   }
    
})
donateFeni.addEventListener('click',function(){
    let currentBalance = parseFloat(balance.innerText);
    let feniFunds = Number(feniFund.innerText);
    const addAmount = Number(document.getElementById("input-field-feni").value);
    if(currentBalance>=addAmount && addAmount>=1){
        currentBalance -= addAmount;
        balance.innerText = currentBalance;
      feniFunds +=addAmount;
      feniFund.innerText = feniFunds;
    }
   else{
    alert("Invalid Amount");
   }
    
})
donateQuota.addEventListener('click',function(){
    let currentBalance = parseFloat(balance.innerText);
    let quotaFunds = Number(quotaFund.innerText);
    const addAmount = Number(document.getElementById("input-field-quota").value);
    if(currentBalance>=addAmount && addAmount>=1){
        currentBalance -= addAmount;
        balance.innerText = currentBalance;
      quotaFund +=addAmount;
      quotaFund.innerText = quotaFunds;
      console.log(quotaFund)
    }
   else{
    alert("Invalid Amount");
   }
    
})