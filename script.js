//Computer Function - to determine the interest gained over the specified amount of time based on the principal amount
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+
                "\</mark>,<br\>at an interest rate of <mark>"+rate+"%\</mark>.<br\>You will receive an amount of <mark>"
                +interest+"\</mark>,<br\>in the year <mark>"+year+"\</mark><br\>";
        
    principal.focus();
    
}

//Updates the range with current value for the interest rate.
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
//This function validates the input before calling the compute function.
function principalValidation()
{
    
    
    if (principal.value <= 0){
        alert("Please enter a number greater than 0.");
        principal.focus();
        return false;
    }
    principal.focus();
    return compute();
    

}

//brings the amount input into focus for the user to use once the page is loaded. 
function focusAmount(){
    
    principal.focus();
}


// function getInputValue() {
//     var e = document.getElementById("myList");
//     var inputVal=e.value;
//     var inputVa2 = document.getElementById("myRange").value;
//     var inputVa3 = document.getElementById("amount").value;
//     var result = inputVa3 * inputVal * inputVa2 / 100;
//     document.getElementById("result").innerHTML = "If you deposit " + "<span class='highlight'>" + inputVa3 + "</span>." + ", <br> at an interest rate of " + "<span class='highlight'>" + inputVa2 + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + result + "</span>" + ", <br> in the year " + "<span class='highlight'>" + inputVal + "</span>";
//     return false;
// }

