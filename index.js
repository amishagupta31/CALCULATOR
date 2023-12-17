function backspace() {
            var displayValue = document.getElementById('display').value;
            document.getElementById('display').value = displayValue.slice(0, -1);
        }
         function appendCharacter(character) {
        document.getElementById('display').value += character;
    }
    function clearDisplay() {
        document.getElementById('display').value ='';    }

    function calculateResult() {
        try {
            document.getElementById('display').value = eval(document.getElementById('display').value);
        } catch (error) 
        {
            document.getElementById('display').value = 'Error';
        }
    }
