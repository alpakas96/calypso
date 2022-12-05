let container = document.querySelector(".newShot")
let btn = document.querySelector(".newShotButton")
let shotListArray = []; //holds all of the shot objects 

class shotObject {
    constructor (number) {
        this.name = ("shot" + number);
        this.htmlContent =`
            <form class="shot${number}"
                <fieldset>
                    <legend>Shot ${number}:</legend>
                    <label for="fname">Enter Shot Description:</label><br>
                    <textarea id="fname" name="fname"> </textarea><br>
                    <input type="submit" value="Generate">
                    <input type="submit" value="Delete shot" class="shot${number}DeleteButton">
                    <script> 
                        shot${number}DeleteButton.addEventListener (
                            "click", 
                            shot${number}.remove();
                        ); 
                    </script> 
                </fieldset>
            </form>
        `  
    }
}

// function Title(text){
//     this.element = document.createElement('h2');
//     this.element.innerText = text;
//   }

function createNewShot(){
    let newShot = new shotObject;(shotListArray.length); 
    shotListArray.push(newShot); 
    container.insertAdjacentHTML("beforeend", shotListArray[0].htmlContent); 
}

btn.addEventListener("click", createNewShot);



// put all created dom element into an array (use a class / objects)
// loop through entire array with if to find container to delete 
// use delete array.value 