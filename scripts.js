document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    const clearButton = document.getElementById("clear");
    const equalsButton = document.getElementById("equals");
    const sqrtButton = document.getElementById("sqrt");
    const expButton = document.getElementById("exp");
    const sinButton = document.getElementById("sin");
    const cosButton = document.getElementById("cos");
    const tanButton = document.getElementById("tan");
    const logButton = document.getElementById("log");
    const deleteButton = document.getElementById("delete");
    const modifierButtons = document.querySelectorAll(".modifier");
    const decimalButton = document.getElementById("decimal");
    const historyList = document.getElementById("recentSolutions");
    const historyButton = document.querySelector(".history-button");
    const scientificButton = document.querySelector(".scientific-button");
    const normalButton = document.querySelector(".normal-button");
    
    // Toggle recent solutions visibility
    function toggleRecent() {
      if (historyList.style.display === "none") {
        historyList.style.display = "block";
      } else {
        historyList.style.display = "none";
      }
    }
    
    historyButton.addEventListener("click", toggleRecent);
    
    numbers.forEach(number => {
      number.addEventListener("click", function() {
        display.textContent += number.textContent;
      });
    });
  
    operators.forEach(operator => {
      operator.addEventListener("click", function() {
          let operatorText = operator.textContent;
          if (operatorText === '÷') {
              operatorText = '/';
          } else if (operatorText === 'x') {
              operatorText = '*';
          }
          display.textContent += operatorText;
      });
    });
  
    clearButton.addEventListener("click", function() {
      display.textContent = "";
    });
  
    equalsButton.addEventListener("click", function() {
      try {
        const expression = display.textContent;
        const result = eval(expression);
        display.textContent = result;
        addToHistory(expression + " = " + result);
      } catch(error) {
        display.textContent = "Error";
      }
    });
  
    sqrtButton.addEventListener("click", function() {
      display.textContent = Math.sqrt(parseFloat(display.textContent));
    });
  
    expButton.addEventListener("click", function() {
      display.textContent = Math.exp(parseFloat(display.textContent));
    });
  
    sinButton.addEventListener("click", function() {
      display.textContent = Math.sin(parseFloat(display.textContent) * Math.PI / 180);
    });
  
    cosButton.addEventListener("click", function() {
      display.textContent = Math.cos(parseFloat(display.textContent) * Math.PI / 180);
    });
  
    tanButton.addEventListener("click", function() {
      display.textContent = Math.tan(parseFloat(display.textContent) * Math.PI / 180);
    });
  
    logButton.addEventListener("click", function() {
      display.textContent = Math.log(parseFloat(display.textContent));
    });
  
    deleteButton.addEventListener("click", function() {
      display.textContent = display.textContent.slice(0, -1);
    });
  
    modifierButtons.forEach(modifier => {
      modifier.addEventListener("click", function() {
        display.textContent += modifier.textContent;
      });
    });
  
    decimalButton.addEventListener("click", function() {
      if (!display.textContent.includes('.')) {
        display.textContent += '.';
      }
    });
  
    function addToHistory(item) {
      const li = document.createElement("li");
      li.textContent = item;
      historyList.appendChild(li);
    }
});
