function clr(){
    document.getElementById("result").value="";
}
function display(val)
{
    document.getElementById("result").value+=val;
}

function finalresult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}

// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e,target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else{string += e.target.innerHTML;
//         input.value = string;}
//     }) 
// })