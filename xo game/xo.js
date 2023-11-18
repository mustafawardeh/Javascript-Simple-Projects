let up=document.getElementById('content_h3')
let up_span = document.getElementById('up_span')
// let ar1=document.getElementById('ar1')
// let ar2=document.getElementById('ar2')
// let ar3=document.getElementById('ar3')
// let ar4=document.getElementById('ar4')
// let ar5=document.getElementById('ar5')
// let ar6=document.getElementById('ar6')
// let ar7=document.getElementById('ar7')
// let ar8=document.getElementById('ar8')
// let ar9=document.getElementById('ar9')
let arr=[];
for(let i=0;i<9;i++)
{
    arr.push(document.getElementById('ar'+(i+1)));
    console.log(arr[i]);
}
let turn='X';
let winner;
function SetValue(id)
{

    for(let i=0;i<9;i++)
    {
        if(arr[i].id==id && arr[i].innerHTML.trim()=="" && turn=='X')
        {
            arr[i].innerHTML=turn;
            turn='O';     
        }
        else if(arr[i].id==id && arr[i].innerHTML.trim()=="" && turn=='O')
        {
            arr[i].innerHTML=turn;
            arr[i].style.background='blue';
            turn='X';
        }
        up.innerHTML=turn + " Turn";
        console.log("winner " +winner);
        checkWinner(arr);
    }
    if(winner!=null && winner!='Game End')
    {
        up.innerHTML="Winner is " +winner;
        setInterval(function(){
            up.innerHTML+='.';
        },1000);
        
        setTimeout(function(){location.reload()},4000);   
    }
    else if(winner=='Game End')
    {
        up.innerHTML=winner;
        setInterval(function(){
            up.innerHTML+='.';
        },1000);
        
        setTimeout(function(){location.reload()},4000);   
    }
}

function checkWinner(arr)
{
    if(arr[0].innerHTML.trim()==arr[1].innerHTML.trim()
    && arr[1].innerHTML.trim()==arr[2].innerHTML.trim()
    &&arr[1].innerHTML.trim()!='')
    {
        winner=arr[1].innerHTML.trim();
    }
    else if(arr[3].innerHTML.trim()==arr[4].innerHTML.trim()
    && arr[4].innerHTML.trim()==arr[5].innerHTML.trim()
    &&arr[3].innerHTML.trim()!='')
    {
        winner=arr[3].innerHTML.trim();
    }
    else if(arr[6].innerHTML.trim()==arr[7].innerHTML.trim()
    && arr[7].innerHTML.trim()==arr[8].innerHTML.trim()
    &&arr[6].innerHTML.trim()!='')
    {
        winner=arr[6].innerHTML.trim();
    }
    else if(arr[0].innerHTML.trim()==arr[3].innerHTML.trim()
    && arr[3].innerHTML.trim()==arr[6].innerHTML.trim()
    &&arr[0].innerHTML.trim()!='')
    {
        winner=arr[0].innerHTML.trim();
    }
    else if(arr[1].innerHTML.trim()==arr[4].innerHTML.trim()
    && arr[4].innerHTML.trim()==arr[7].innerHTML.trim()
    &&arr[1].innerHTML.trim()!='')
    {
        winner=arr[1].innerHTML.trim();
    }
    else if(arr[2].innerHTML.trim()==arr[5].innerHTML.trim()
    && arr[5].innerHTML.trim()==arr[8].innerHTML.trim()
    &&arr[2].innerHTML.trim()!='')
    {
        winner=arr[1].innerHTML.trim();
    }
    else if(arr[0].innerHTML.trim()==arr[4].innerHTML.trim()
    && arr[4].innerHTML.trim()==arr[8].innerHTML.trim()
    &&arr[0].innerHTML.trim()!='')
    {
        winner=arr[0].innerHTML.trim();
    }
    else if(arr[2].innerHTML.trim()==arr[4].innerHTML.trim()
    && arr[4].innerHTML.trim()==arr[6].innerHTML.trim()
    &&arr[2].innerHTML.trim()!='')
    {
        winner=arr[2].innerHTML.trim();
    }
    else if(arr[0].innerHTML.trim()!="" && arr[1].innerHTML.trim()!=""
    &&arr[2].innerHTML.trim()!=''&&arr[3].innerHTML.trim()!=''
    &&arr[4].innerHTML.trim()!=''&&arr[5].innerHTML.trim()!=''
    &&arr[6].innerHTML.trim()!=''&&arr[7].innerHTML.trim()!=''
    &&arr[8].innerHTML.trim()!=''){
        winner='Game End';
    }
}