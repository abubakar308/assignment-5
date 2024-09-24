const balance = document.getElementById('balance');
const donationButton = document.getElementById('donation-button');
const historyButton = document.getElementById('history-button');
const donationContainer = document.getElementById('donation-container');
const historyContainer = document.getElementById('history-container');
const donateNoakhali = document.getElementById('donate-noakhali');
const noakhaliFund =  document.getElementById('noakhali-fund');
const donateFeni = document.getElementById('donate-feni');
const feniFund = document.getElementById('feni-fund');
const donateQuota = document.getElementById('donate-quota');
const quotaFund = document.getElementById('quota-fund');

function blog(){
  window.location.href = "./question.html"
}


donationButton.addEventListener('click',function(){
  historyContainer.classList.add('hidden');
  donationContainer.classList.remove('hidden');
  historyButton.style.backgroundColor = "white"
  donationButton.style.backgroundColor = "green"
})
historyButton.addEventListener('click',function(){
  donationContainer.classList.add('hidden');
  historyContainer.classList.remove('hidden');
  donationButton.style.backgroundColor = 'white';
  historyButton.style.backgroundColor = "green"
})


donateNoakhali.addEventListener('click',function(){
    let currentBalance = parseFloat(balance.innerText);
    let noakhaliFunds = Number(noakhaliFund.innerText);
    const addAmount = Number(document.getElementById("input-field-noakhali").value);
    if(currentBalance>=addAmount && addAmount>=1){
        currentBalance -= addAmount;
        balance.innerText = currentBalance;
      noakhaliFunds +=addAmount;
      noakhaliFund.innerText = noakhaliFunds;
     const div = document.createElement('div');
     div.innerHTML = `
 <div class="max-w-screen-xl mx-auto my-3 p-3 rounded-xl border-solid border-2 border-gray-200"> <h3 class="text-xl font-semibold">  ${addAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
      <p>Date: ${Date()} </p>
      </div>`;
      historyContainer.appendChild(div);
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

      const div = document.createElement('div');
     div.innerHTML = `
 <div class="max-w-screen-xl mx-auto my-3 p-3 rounded-xl border-solid border-2 border-gray-200"> <h3 class="text-xl font-semibold">  ${addAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
      <p>Date: ${Date()} </p>
      </div>`;
      historyContainer.appendChild(div);
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
      quotaFunds += addAmount;
      quotaFund.innerText = quotaFunds;

      const div = document.createElement('div');
     div.innerHTML = `
 <div class="max-w-screen-xl mx-auto my-3 p-3 rounded-xl border-solid border-2 border-gray-200"> <h3 class="text-xl font-semibold">  ${addAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
      <p>Date: ${Date()} </p>
      </div>`;
      historyContainer.appendChild(div);
    }
   else{
    alert("Invalid Amount");
   }
    
})