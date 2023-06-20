function check(){
    // 1st question.
    var score=""
    var q1_ans1=document.getElementById("q1-a1")
    var q1_ans2=document.getElementById("q1-a2")
    var q1_ans3=document.getElementById("q1-a3")
    var q1_ans4=document.getElementById("q1-a4")
   
    if(q1_ans1.checked==true){
        score++
        alert( "question 1 answer corect")
    }
    else{
        alert( "question 1 answer false")
    }


    // 2nd question
    
    var q2_ans1=document.getElementById("q2-a1")
    var q2_ans2=document.getElementById("q2-a2")
    var q2_ans3=document.getElementById("q2-a3")
    var q12_ans4=document.getElementById("q2-a4")
   
    if(q2_ans1.checked==true){
        score++
        alert( "question 2 answer corect")
    }
    else{
        alert( "question 2 answer false")
    }

    // 3rd question

    var q3_ans1=document.getElementById("q3-a1")
    var q3_ans2=document.getElementById("q3-a2")
    var q3_ans3=document.getElementById("q3-a3")
    var q3_ans4=document.getElementById("q3-a4")
   
    if(q3_ans1.checked==true){
        score++
        alert( "question 3 answer corect")
    }
    else{
        alert( "question 3 answer false")
    }
    alert("you score is" + score++)






}