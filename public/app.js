    var a = document.getElementById('value')
    
function cal(num) {
    a.value += num
}

function res() {
    var final = eval(a.value)
    a.value = final
}
function c() {
    a.value = ' '
}