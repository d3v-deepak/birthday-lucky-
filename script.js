var dateOfBirth=document.querySelector("#birth-date");
var luckyNumber=document.querySelector("#lucky-number")   
var checkBtn=document.querySelector("#check-btn")

var outputBox=document.querySelector(".output-box")

function checkBirthdayIsLuccky(){
var dob=dateOfBirth.value;
var luckyNum=luckyNumber.value;
var sumOfDate=calculateDateSum(dob)
if(luckyNum && dob)
{
if(sumOfDate % luckyNum === 0)
  showResult("your Lucky Number is really lucky   🎈🎉"  )
else
 showResult("Your Lucky Number is not a lucky one 🤐🙃")
}
else
showResult("Please enter valid values 😩😕")
}





function showResult(result){

outputBox.innerHTML=result

}





function calculateDateSum(dob){

var bDay=dob.replaceAll("-","")
var sum=0;
for(var i=0; i< bDay.length;i++)
{

sum=sum+Number(bDay.charAt(i))

}

return sum;

}






checkBtn.addEventListener("click",checkBirthdayIsLuccky)