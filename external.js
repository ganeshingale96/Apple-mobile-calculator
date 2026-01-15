str =""
arr = ['+','-','*','/','=','.']
op = document.getElementById("inp")
function cal(p){
    lastChar = str.slice(-1)

    if (str === "" && arr.includes(p)) {
        return;
    }

    if (arr.includes(lastChar) && arr.includes(p)) {
        return;
    }
    str+=p
    op.value = str  
}
function back(){
    str = str.toString().slice(0,str.length-1)
    op.value = str  
}
function clear_screen(){
    str = '0'
    op.value = str  
}
function percent(){
    if(str.length >0){
    str = (parseFloat(str) / 100)
    op.value = str  
    }
}
function total(){
    lastChar = str.slice(-1)
    if (arr.includes(lastChar) && arr.includes('=')) {
        return;
    }
    if(str.length >0 ){
    str = eval(str).toString()
    op.value = str
    }  
}