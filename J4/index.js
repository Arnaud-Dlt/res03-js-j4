function exercice1()
{
    
    let btn=document.getElementById("btn-change-color");
    
    btn.addEventListener("click", function(event)
    {
        let changeColor=document.getElementById("box1");
        changeColor.style.backgroundColor="blue";
    });
}


function exercice2()
{
    let btn=document.getElementById("btn-move");
    
    btn.addEventListener("click", function(event)
    {
        let move=document.getElementsByClassName("move");
        let ball=document.getElementById("box2");
        ball.classList.add("move");
    })
}

function exercice3()
{
    let ingredients = ["Salade", "Tomate", "Oignon"];
    let ul=document.querySelector("ul:first-of-type");
    let btn=document.getElementById("btn-add-ingredients");
    
    btn.addEventListener("click", function(event)
    {
        for(let i=0;i<ingredients.length;i++)
        {
            let li = document.createElement("li");
            let txt=document.createTextNode(ingredients[i]);
            ul.appendChild(li);
            li.appendChild(txt);
            
            
        }
    })
}

function exercice4()
{
    let heroes = [
        {
            name : "Clark Kent",
            secret : "Superman"
        },
        {
            name : "Diana Prince",
            secret : "Wonder Woman"
        },
        {
            name : "Tony Stark",
            secret: "Iron Man"
        }
    ];
    
    let btn=document.getElementById("btn-add-hero")
    let tbody=document.querySelector("tbody");
    
    let count=0;
    btn.addEventListener("click", function(event)
    {
        let tr=document.createElement("tr");
        let tdName=document.createElement("td");
        let tdSecret=document.createElement("td");
        let name=document.createTextNode(heroes[count].name);
        let secret=document.createTextNode(heroes[count].secret);
                
        tbody.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdSecret);
        tdName.appendChild(name);
        tdSecret.appendChild(secret);
        count++;
    })
}

function exercice5()
{
    let btn=document.getElementById("btn-turn");
    
    btn.addEventListener("click", function()
    {
        let blue=document.getElementById("blue");
        let red=document.getElementById("red");
        let green=document.getElementById("green");
        
        blue.style.backgroundColor="red";
        red.style.backgroundColor="green";
        green.style.backgroundColor="blue";
    })
}

function exercice6()
{

}

window.addEventListener("DOMContentLoaded", function(){
    
    exercice1();
    exercice2();
    exercice3();
    exercice4();
    exercice5();
    exercice6();
});