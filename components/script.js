var button=document.getElementsByClassName('counter-button')[0];

function animate(curr,next){
    next.classList.add('animate');
    setTimeout(function(){
        curr.innerText = next.innerText;
        next.classList.remove("animate");
        next.innerText = parseInt(next.innerText) + 1;
    },500);
}


button.addEventListener('click',function(){

    var number=parseInt(document.getElementById('input').value);

    if (isNaN(number)) {
        alert("Please enter a number");
        clearInterval(countInterval);  
        return;
    }
    var curr=document.getElementsByClassName('curr')[0];
    var next=document.getElementsByClassName('next')[0];

    var count=0;
    var id=setInterval(function(){
  
        if(count==number){
            clearInterval(id);
            window.alert("Counter has stopped");
            //Resetting values
            curr.innerText=0;
            next.innerText=1;
            document.getElementById('input').value="";

            return;
        }
        animate(curr,next);
        count++;
    },1000);

});

