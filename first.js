
//================================================================
productst = document.querySelectorAll(".products");
gridc = document.querySelectorAll(".grid-container1");
gridm = document.querySelectorAll(".grid-container");

para = document.querySelectorAll(".leftdiv");

rights = document.querySelectorAll(".headbj");
chan = document.querySelector(".changer");
grid = document.querySelectorAll(".grid");
gridc = document.querySelectorAll(".grid-container1");
bp = document.querySelectorAll(".box-prod");
bi = document.querySelectorAll(".box-image");
bit = document.querySelectorAll(".box-item");



let currname = "My products";
chan.addEventListener("click", ch = () => {

    console.log(para[0]);

    if(chan.innerHTML == "HOME")
    {
        
        for (let i = 0; i < gridc.length; i++) {
            gridc[i].style.display = "none";
        }
        for (let i = 0; i < grid.length; i++) {
            grid[i].style.display = "none";
        }
        for (let i = 0; i < productst.length; i++) {
            productst[i].style.backgroundImage = "";
            
        }
        for (let i = 0; i < rights.length; i++) {
            rights[i].style.display = "inline";
        }

        chan.innerHTML = "My products";
    }

    else if(chan.innerHTML = "My products")
    {
        for (let i = 0; i < productst.length; i++) {
            productst[i].style.backgroundImage = "none";
        }
    
    
        for (let i = 0; i < rights.length; i++) {
            rights[i].style.display = "none";
        }
    
        for (let i = 0; i < grid.length; i++) {
            grid[i].style.display = "block";
        }
        for (let i = 0; i < gridc.length; i++) {
            gridc[i].style.display = "grid";
        }
        
        chan.innerHTML = "HOME";

    }
    
}
);

function sele()
{

    for (let i = 0; i < productst.length; i++) {
        productst[i].style.backgroundImage = "none";
        
    }


    for (let i = 0; i < rights.length; i++) {
        rights[i].style.display = "none";
    }

    for (let i = 0; i < grid.length; i++) {
        grid[i].style.display = "block";
    }
    for (let i = 0; i < gridc.length; i++) {
        gridc[i].style.display = "grid";
    }

    chan.innerHTML = "HOME";
}


//================================
//for changing modes

headn = document.querySelectorAll(".heading");
side2n = document.querySelector(".side2nd");

let currmode = "light";

function sayHello() {

    if (currmode == "light") {

        side2n.style.backgroundColor = "black";

        const collection = document.getElementsByClassName("leftdiv");
        document.getElementById("topbar").style.backgroundColor = "#181818";
        document.getElementById("topbar").style.color = "white";
        document.getElementById("downbar").style.color = "white";
        document.getElementById("downbar").style.backgroundColor = "#181818";

        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = "#282828";
            collection[i].style.color = "beige";
        }
        const ci = document.getElementsByClassName("listhead");
        for (let i = 0; i < ci.length; i++) {
            ci[i].style.color = "white";
        }
        for (let i = 0; i < headn.length; i++) {
            headn[i].style.color = "white";
        }
        for (let i = 0; i < gridm.length; i++) {
            gridm[i].style.backgroundColor = "black";
        }

        document.querySelector(".sidebar").style.backgroundColor = "black";
        currmode = "dark";
        modechange.setAttribute("value", "☽ DARK MODE ");
    }
    else {

        side2n.style.backgroundColor = "#3C3633";

        const collection = document.getElementsByClassName("leftdiv");
        document.getElementById("topbar").style.backgroundColor = "#3C3633";
        document.getElementById("topbar").style.color = "#d5cec1";
        document.getElementById("downbar").style.color = "#d5cec1";
        document.getElementById("downbar").style.backgroundColor = "#3C3633";

        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = "#d5cec1";
            collection[i].style.color = "#3C3633";
        }

        const ci = document.getElementsByClassName("listhead");
        for (let i = 0; i < ci.length; i++) {
            ci[i].style.color = "#3C3633";
        }
        for (let i = 0; i < headn.length; i++) {
            headn[i].style.color = "#3C3633";
        }
        for (let i = 0; i < gridm.length; i++) {
            gridm[i].style.backgroundColor = "#e6ded7";
        }
        
        document.querySelector(".sidebar").style.backgroundColor = "#2c2622";
        currmode = "light";
        modechange.setAttribute("value", "☀︎ LIGHT MODE ");
    }
}

let modechange = document.querySelector(".mode");
console.log(modechange);
modechange.addEventListener("click", sayHello);

////------------------------------------------------

function opennn() {

    const l1 = document.getElementsByClassName("sidebbb");
    
        l1[0].setAttribute("onclick", "open11()");
    
    const l = document.getElementsByClassName("sidebar");
    for (let i in l) {
        l[i].style.transform = "translateX(100%)";
        l[i].style.transition = " width 1s,height 1s,transform 0.75s";
    }

}
function open11() {
    console.log("Sdsdsdsdsds");
    const l1 = document.getElementsByClassName("sidebbb");
    
        l1[0].setAttribute("onclick", "opennn()");
    
    const l = document.getElementsByClassName("sidebar");
    for (let i in l) {
        l[i].style.transform = "translateX(-100%)";
    }
}


let log = document.querySelector(".jumpd");
log.innerHTML = "";
let logo = document.querySelector(".logo");


logo.addEventListener("mouseenter", () => {

    log.style.height = "150px";
    log.style.width = "150px";
    log.style.transform = "translateY(140px)";
    log.style.transition = "width 1s,height 1s,transform 1s";
    setTimeout(logoo, 500);
}
);

logo.addEventListener("mouseleave", () => {

    log.style.height = "0px";
    log.style.width = "0px";
    setTimeout(logoof, 200);
    log.style.transform = "translateY(150px)";
    log.style.transition = "width 1s,height 1s,transform 1s";
    log.style.transform = "translateY(-150px)";
}
);


function logoo() {
    log.innerHTML = "Welcome \n to \n my site";
}
function logoof() {
    log.innerHTML = "";
}


let side2 = document.querySelector(".side2nd");
function openside()
{
    console.log("Sdaas");
    const l1 = document.getElementsByClassName("sidebbb");
    
        l1[1].setAttribute("onclick", "openside1()");
    

    
        side2.style.transform = "translateX(-100%)";
        side2.style.transition = " width 1s,height 1s,transform 1s";
    
}
function openside1() {
    console.log("Sdsdsdsdsds");
    const l1 = document.getElementsByClassName("sidebbb");
  
        l1[1].setAttribute("onclick", "openside()");
    
        side2.style.transform = "translateX(0%)";
}

//====================================

//side2n is side2nd bar
let cartv = document.querySelectorAll(".box-item-cart");
let cartv_price = document.querySelectorAll(".box-item");
let pricing = document.querySelector(".pricetot")
let contenta = document.querySelector(".contenta");
let num_shirt_men = 0;
let tot_price = 0;


for(let i = 0;i<cartv.length;i++)
{
    console.log(i);
    let dustbinn;
    let addeditem;
    let forpr;
    cartv[i].addEventListener("click",() =>
    {
        
        
        contenta.innerHTML += "<ul type = 'none'><li> <a class='itemsadd' id = '"+cartv[i].getAttribute("price")+ "'>" + cartv[i].getAttribute("add") + "</a> <a class='itemsadds dustbin' >" + "🗑️" + "</a> </li></ul>"; 
        tot_price += new Number(cartv_price[i].getAttribute("price"));


        

        pricing.innerHTML = " Total price : " + tot_price + "$$";
        dustbinn = document.querySelectorAll(".dustbin");
        addeditem = document.querySelectorAll(".itemsadd");

        for(let j = 0;j<dustbinn.length;j++)
        {
            
            dustbinn[j].addEventListener("click",() =>
            {
                console.log(addeditem[0].getAttribute('id') + "asdasdas");
                dustbinn[j].style.display = "none";
                addeditem[j].style.display = "none";
                
                tot_price -= new Number(addeditem[j].getAttribute("id"));
                if(tot_price < 0)
                {
                    tot_price = 0;
                }
                pricing.innerHTML = " Total price : " + tot_price + "$$";
                if(contenta.innerText == "")
                {
                    pricing.innerHTML = " Total price : " + 0 + "$$";
                }
            });
        }
    });
}

function inp()
{
    let inpp = document.getElementById("takininput");
    console.log(inpp.value);
    let inppp = "https://www.myntra.com/kk?rawQuery=shoes" + inpp.value;
    window.open(inppp);
}



function openan(e)
{
    let i = e.target.src;
    console.log(i);
    tempstor = i;
    window.open("p1.html");
}
function openan1(e)
{
    let i = e.target.src;
    console.log(i);
    tempstor = i;
    window.open("p2.html");
}
function openan2(e)
{
    let i = e.target.src;
    console.log(i);
    tempstor = i;
    window.open("p3.html");
}
function openan3(e)
{
    let i = e.target.src;
    console.log(i);
    tempstor = i;
    window.open("p4.html");
}
function openan4(e)
{
    let i = e.target.src;
    console.log(i);
    tempstor = i;
    window.open("p5.html");
}
function openan5(e)
{
    let i = e.target.src;
    console.log(i);
    tempstor = i;
    window.open("p6.html");
}



