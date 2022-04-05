'use strict';
/*
(function () {
  var statBlock = document.querySelector('.stat');
  var money = statBlock.querySelector('.money');
  var moneyValueText = money.querySelector('span');
  var step = 1;
  var moneyAmount = 0;
  moneyValueText.textContent = moneyAmount;
  
  var clickme = document.querySelector('.clickable').querySelector('img');
  clickme.src = 'img/first.png';
  
  var clickHandler = function () {
    console.log('click +1');
    moneyAmount += step;
    moneyValueText.textContent = moneyAmount;
    statBlock.style.borderColor = 'orange';
    setTimeout("document.querySelector('.stat').style.borderColor = '#343434';", 100);
  };
  clickme.addEventListener('click', clickHandler);
  
  var upgradeSort = document.querySelector('.shop').querySelector('.sortof');
  var upgradeSortCostText = upgradeSort.querySelector('span');
  var upgradeSortCost = 10;
  upgradeSortCostText.textContent = upgradeSortCost;
  
  var upgradeSortHandler = function () {
    if (moneyAmount >= upgradeSortCost) {
        moneyAmount -= upgradeSortCost
        moneyValueText.textContent = moneyAmount;
        step += 1;
        upgradeSortCost += upgradeSortCost * 2;
        upgradeSortCostText.textContent = upgradeSortCost;
    }
  };
  upgradeSort.addEventListener('click', upgradeSortHandler);
  
})();
*/