var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output");

submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    if(ip&&qty&&curr){
    calculateProfitAndLoss(ip, qty, curr);
    }else{
     showOutput(`Please enter all three fields`);
    }
  }
    


function calculateProfitAndLoss(initial, quantity, current){
    if(initial>current){
      var loss = (initial-current)*quantity;
      var lossPercentage = (loss/(initial* quantity))*100;
      outputBox.style.color = 'red';
      showOutput(`Whoops! Your loss is ${loss} and the loss percentage is ${lossPercentage.toFixed(2)} %`);

    }else if(current>initial){
        var profit = (current-initial)*quantity;
         var profitPercentage = (profit/(initial* quantity))*100;
         outputBox.style.color = 'green';
         showOutput(`Yayy! Your Profit is ${profit} and the profit percentage is ${profitPercentage.toFixed(2)} %`);


    }else{
         outputBox.style.color = 'black';
         showOutput(`No pain no gain, No gain no pain`);
    }
    
}

function showOutput(message) {
     outputBox.innerHTML = message;
}