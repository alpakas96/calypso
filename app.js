let container = document.querySelector(".newShot")
let btn = document.querySelector(".newShotButton")
let shotListArray = []; //holds all of the shot objects 
let y = 0; 

class shotObject {
    constructor (number) {
        this.name = ("shot" + number);
        this.htmlContent =`
            <form class="shot${number}" id="shot${number}">
                <fieldset>
                    <legend>Shot ${number}:</legend>
                    <label for="fname">Enter Shot Description:</label><br>
                    <textarea id="fname" name="fname"> </textarea><br>
                    <input type="submit" value="Make">
                    <button class="shot${number}DeleteButton">Delete shot</button>
                    <script> 

                        let deleteShot${number} = document.getElementById('shot${number}');
                        document.querySelector(".shot${number}DeleteButton").addEventListener ("click", (e) => {
                            e.preventDefault()
                            deleteShot${number}.parentNode.removeChild(deleteShot${number})
                        }); 
                    </script> 
                </fieldset>
            </form>
        ` 
    }
}

// shot${number}DeleteButton.addEventListener ("click", deleteShot${number}.remove(), reRender());

function createNewShot(){
    let newShot = new shotObject (shotListArray.length + 1); 
    shotListArray.push(newShot); 
    let arrayLength = shotListArray.length
    container.insertAdjacentHTML("beforeend", shotListArray[arrayLength-1].htmlContent); 
}

btn.addEventListener("click", createNewShot);




// put all created dom element into an array (use a class / objects)
// loop through entire array with if to find container to delete 
// use delete array.value 

