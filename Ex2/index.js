function month(){
    document.getElementById('selectMonth').innerHTML=new Date().getMonth();
}
function showUserName(){
    console.log(document.getElementById('userName').value);
    window.alert(document.getElementById('userName').value);
}
function show(){
    document.getElementById("myDiv").style.display='block';
}
function hide(){
    document.getElementById("myDiv").style.display='none';
}