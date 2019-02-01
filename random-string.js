

function generateString(){
var possibleChars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l',
                     'm','n','o','p','q','r','s','t','u','v','w','x','y','z','@','#','$','%','&','*'];
var randomStr=''; var randomIndex;
for(var i = 0; i<6; i++ )
{
randomIndex = Math.floor(Math.random()*possibleChars.length);
randomStr += possibleChars[randomIndex];

}
document.getElementById('display-panel').innerText = randomStr;
}
document.querySelector('#generate-btn').addEventListener('click', generateString);


                    