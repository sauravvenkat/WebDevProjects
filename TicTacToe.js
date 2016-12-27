function get(id){
       return document.getElementById(id);
    }
    count = 0
    
    function changeColor(){
        count += 1
        if (count % 2 == 1){
            get('btn').style.backgroundColor = 'red'
        }
        else{
            get('btn').style.backgroundColor = 'blue'
        }
        get('btn').disabled = 'true';
        get('btn').style.cursor = 'none';
        console.log(count)
        
    }
    
    function changeColor1(){
        count += 1
        if (count % 2 == 1){
            get('btn1').style.backgroundColor = 'red';
        }
        else{
            get('btn1').style.backgroundColor = 'blue'
        }
        document.getElementById('btn1').disabled = 'true';
        document.getElementById('btn1').style.cursor = 'none';
        console.log(count)
    }
    
    function changeColor2(){
        count += 1
        if (count % 2 == 1){
            get('btn2').style.backgroundColor = 'red';
        }
        else{
            get('btn2').style.backgroundColor = 'blue'
        }
        document.getElementById('btn2').disabled = 'true';
        document.getElementById('btn2').style.cursor = 'none';
        console.log(count)
    }
    
     function changeColor3(){
        count += 1 
        if (count % 2 == 1){
            get('btn3').style.backgroundColor = 'red'
        }
        else{
            get('btn3').style.backgroundColor = 'blue'
        }
        document.getElementById('btn3').disabled = 'true';
        document.getElementById('btn3').style.cursor = 'none';
        console.log(count) 
    }
    function changeColor4(){
        count += 1
        if (count % 2 == 1){
            get('btn4').style.backgroundColor = 'red'
        }
        else{
            get('btn4').style.backgroundColor = 'blue'
        }
        document.getElementById('btn4').disabled = 'true';
        document.getElementById('btn4').style.cursor = 'none';
        console.log(count)
    }
    function changeColor5(){
        count += 1
        if (count % 2 == 1){
            get('btn5').style.backgroundColor = 'red'
        }
        else{
            get('btn5').style.backgroundColor = 'blue'
        }
        document.getElementById('btn5').disabled = 'true';
        document.getElementById('btn5').style.cursor = 'none';
        console.log(count)
    }
    function changeColor6(){
        count += 1
        if (count % 2 == 1){
            get('btn6').style.backgroundColor = 'red'
        }
        else{
            get('btn6').style.backgroundColor = 'blue'
        }
        document.getElementById('btn6').disabled = 'true';
        document.getElementById('btn6').style.cursor = 'none';
        console.log(count)
    }
    function changeColor7(){
        count += 1
        if (count % 2 == 1){
            get('btn7').style.backgroundColor = 'red'
        }
        else{
            get('btn7').style.backgroundColor = 'blue'
        }
        document.getElementById('btn7').disabled = 'true';
        document.getElementById('btn7').style.cursor = 'none';
        console.log(count)
    }
    function changeColor8(){
        count += 1
        if (count % 2 == 1){
            get('btn8').style.backgroundColor = 'red'
        }
        else{
            get('btn8').style.backgroundColor = 'blue'
        }
        document.getElementById('btn8').disabled = 'true';
        document.getElementById('btn8').style.cursor = 'none';
        console.log(count)
    }