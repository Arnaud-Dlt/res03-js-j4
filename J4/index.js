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
            ul.appendChild(li);
            li.innerHTML=ingredients[i];
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
}

function exercice5()
{

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