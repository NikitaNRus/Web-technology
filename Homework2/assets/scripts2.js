// let name = prompt("Как ваше имя?");
// alert(`Привет, ${name}`);
// let age = prompt("Сколько вам лет?");
// switch(a){
//     case 18:
//         alert ("Вы совершенолетний, все можно")
//     case 10:
// 	    alert("Вам надо учить уроки!")
//     case 30:
//         alert("Ложись спать, завтра на работу!")    
//     default:
// 	    alert("Мы не знаем, что вам делать")
	// }   

let pstr = document.getElementById("p1");
let content = pstr.textContent
function changedP(pstr, content){
    if (pstr.classList.contains("newp")){
        pstr.classList.remove("newp");
        pstr.textContent = content;
    }
    else{
        pstr.classList.add("newp");
        pstr.textContent = "Здесь могла бы быть ваша реклама!";
    }
}


let button1 = document.getElementById('btn1');
console.log(button1);
button1.addEventListener('click',(event) =>{changedP(pstr,content)});


function changeLi(){
    let listr = document.getElementById("li1");
    if (listr.classList.contains("newli")){
        listr.classList.remove("newli");
        }
    else{
        listr.classList.add("newli");
    }
}

let button2 = document.getElementById('btn2');
console.log(button2);
button2.addEventListener('click',changeLi);