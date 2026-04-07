function calculate(){
    let total =0
    let a = parseInt(prompt("Enter n : "))
    for(let i =1;i<=a;i++){
        total = total + i
    }
    document.getElementById("result").innerHTML = "Sum of N number is : " + total
}