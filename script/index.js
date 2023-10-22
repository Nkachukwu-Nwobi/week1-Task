// function main() {}

// module.exports = { main }


fetch("https://swapi.dev/api/people")

.then((res) => res.json())
.then((data) => {
    console.log(data.results[0].name)

    function luke(){
        document.getElementById("name1").innerHTML = `Name: ${data.results[0].name}`
        document.getElementById("gender1").innerHTML = `Gender: ${data.results[0].gender}`
        document.getElementById("height1").innerHTML = `Height: ${data.results[0].height}`
    }
    document.getElementById("luke").addEventListener("click", luke)

    function c3po(){
        document.getElementById("name2").innerHTML = `Name: ${data.results[1].name}`
        document.getElementById("gender2").innerHTML = `Gender: ${data.results[1].gender}`
        document.getElementById("height2").innerHTML = `Height: ${data.results[1].height}`
    }
    document.getElementById("c3po").addEventListener("click", c3po)

    function r2d2(){
        document.getElementById("name3").innerHTML = `Name: ${data.results[2].name}`
        document.getElementById("gender3").innerHTML = `Gender: ${data.results[2].gender}`
        document.getElementById("height3").innerHTML = `Height: ${data.results[2].height}`
    }
    document.getElementById("r2d2").addEventListener("click", r2d2)

    function darth(){
        document.getElementById("name4").innerHTML = `Name: ${data.results[3].name}`
        document.getElementById("gender4").innerHTML = `Gender: ${data.results[3].gender}`
        document.getElementById("height4").innerHTML = `Height: ${data.results[3].height}`
    }
    document.getElementById("darth").addEventListener("click", darth)

    function leia(){
        document.getElementById("name5").innerHTML = `Name: ${data.results[4].name}`
        document.getElementById("gender5").innerHTML = `Gender: ${data.results[4].gender}`
        document.getElementById("height5").innerHTML = `Height: ${data.results[4].height}`
    }
    document.getElementById("leia").addEventListener("click", leia)

    function owen(){
        document.getElementById("name6").innerHTML = `Name: ${data.results[5].name}`
        document.getElementById("gender6").innerHTML = `Gender: ${data.results[5].gender}`
        document.getElementById("height6").innerHTML = `Height: ${data.results[5].height}`
    }
    document.getElementById("owen").addEventListener("click", owen)

    function beru(){
        document.getElementById("name7").innerHTML = `Name: ${data.results[6].name}`
        document.getElementById("gender7").innerHTML = `Gender: ${data.results[6].gender}`
        document.getElementById("height7").innerHTML = `Height: ${data.results[6].height}`
    }
    document.getElementById("beru").addEventListener("click", beru)

    function r5d4(){
        document.getElementById("name8").innerHTML = `Name: ${data.results[7].name}`
        document.getElementById("gender8").innerHTML = `Gender: ${data.results[7].gender}`
        document.getElementById("height8").innerHTML = `Height: ${data.results[7].height}`
    }
    document.getElementById("r5d4").addEventListener("click", r5d4)

    function biggs(){
        document.getElementById("name9").innerHTML = `Name: ${data.results[8].name}`
        document.getElementById("gender9").innerHTML = `Gender: ${data.results[8].gender}`
        document.getElementById("height9").innerHTML = `Height: ${data.results[8].height}`
    }
    document.getElementById("biggs").addEventListener("click", biggs)

    function obiwan(){
        document.getElementById("name10").innerHTML = `Name: ${data.results[9].name}`
        document.getElementById("gender10").innerHTML = `Gender: ${data.results[9].gender}`
        document.getElementById("height10").innerHTML = `Height: ${data.results[9].height}`
    }
    document.getElementById("obiwan").addEventListener("click", obiwan)

}
)
/*
function openImg(div){
    const fullImage = document.getElementById("fullBox")
    fullImage.style.display = "flex";
    document.getElementById("fullImg").src = div;


}

function closeImg(){
    document.getElementById("fullBox").style.display = "none"
}

openImg(image)
closeImg()
*/