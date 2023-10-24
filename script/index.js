// function main() {}

// module.exports = { main }


const imageContainer = document.getElementById("image-container")

window.addEventListener("load", ()=>{
    imageContainer.style.transform = "translateX(0%)";
}
);

window.addEventListener("load", ()=>{
    document.getElementById("header1").style.transform = "translateX(0%)";
}
);


fetch("https://swapi.dev/api/people")
.then((res) => res.json())
.then((data) => {

    const star = data.results;



    function luke(){
        document.getElementById("name1").innerHTML = `Name: ${star[0].name}`
        document.getElementById("gender1").innerHTML = `Gender: ${star[0].gender}`
        document.getElementById("height1").innerHTML = `Height: ${star[0].height}`
        document.querySelector("#content1").classList.toggle("hidden")
    }

    document.getElementById("luke").addEventListener("click", luke)
    

    function c3po(){
        document.getElementById("name2").innerHTML = `Name: ${star[1].name}`
        document.getElementById("gender2").innerHTML = `Gender: ${star[1].gender}`
        document.getElementById("height2").innerHTML = `Height: ${star[1].height}`
        document.querySelector("#content2").classList.toggle("hidden")
        
    }
    document.getElementById("c3po").addEventListener("click", c3po)

    function r2d2(){
        document.getElementById("name3").innerHTML = `Name: ${star[2].name}`
        document.getElementById("gender3").innerHTML = `Gender: ${star[2].gender}`
        document.getElementById("height3").innerHTML = `Height: ${star[2].height}`
        document.querySelector("#content3").classList.toggle("hidden")
    }
    document.getElementById("r2d2").addEventListener("click", r2d2)

    function darth(){
        document.getElementById("name4").innerHTML = `Name: ${star[3].name}`
        document.getElementById("gender4").innerHTML = `Gender: ${star[3].gender}`
        document.getElementById("height4").innerHTML = `Height: ${star[3].height}`
        document.querySelector("#content4").classList.toggle("hidden")
    }
    document.getElementById("darth").addEventListener("click", darth)

    function leia(){
        document.getElementById("name5").innerHTML = `Name: ${star[4].name}`
        document.getElementById("gender5").innerHTML = `Gender: ${star[4].gender}`
        document.getElementById("height5").innerHTML = `Height: ${star[4].height}`
        document.querySelector("#content5").classList.toggle("hidden")
    }
    document.getElementById("leia").addEventListener("click", leia)

    function owen(){
        document.getElementById("name6").innerHTML = `Name: ${star[5].name}`
        document.getElementById("gender6").innerHTML = `Gender: ${star[5].gender}`
        document.getElementById("height6").innerHTML = `Height: ${star[5].height}`
        document.querySelector("#content6").classList.toggle("hidden")
    }
    document.getElementById("owen").addEventListener("click", owen)

    function beru(){
        document.getElementById("name7").innerHTML = `Name: ${star[6].name}`
        document.getElementById("gender7").innerHTML = `Gender: ${star[6].gender}`
        document.getElementById("height7").innerHTML = `Height: ${star[6].height}`
        document.querySelector("#content7").classList.toggle("hidden")
    }
    document.getElementById("beru").addEventListener("click", beru)

    function r5d4(){
        document.getElementById("name8").innerHTML = `Name: ${star[7].name}`
        document.getElementById("gender8").innerHTML = `Gender: ${star[7].gender}`
        document.getElementById("height8").innerHTML = `Height: ${star[7].height}`
        document.querySelector("#content8").classList.toggle("hidden")
    }
    document.getElementById("r5d4").addEventListener("click", r5d4)

    function biggs(){
        document.getElementById("name9").innerHTML = `Name: ${star[8].name}`
        document.getElementById("gender9").innerHTML = `Gender: ${star[8].gender}`
        document.getElementById("height9").innerHTML = `Height: ${star[8].height}`
        document.querySelector("#content9").classList.toggle("hidden")
    }
    document.getElementById("biggs").addEventListener("click", biggs)

    function obiwan(){
        document.getElementById("name10").innerHTML = `Name: ${star[9].name}`
        document.getElementById("gender10").innerHTML = `Gender: ${star[9].gender}`
        document.getElementById("height10").innerHTML = `Height: ${star[9].height}`
        document.querySelector("#content10").classList.toggle("hidden")
    }
    document.getElementById("obiwan").addEventListener("click", obiwan)

}
)
