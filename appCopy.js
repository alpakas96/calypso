let container = document.querySelector(".newScene")
let btn = document.querySelector(".newSceneButton")

// this lets us count the shot numbers
let shotList = [0]; 
// using this to increment the shot list 
let x = 0; 

class newSceneClass {
    constructor (number) {
        this.sceneNumber = number; 
    }
}

function handleClick(){
    


    // these two lines update the scene numbers
    x++;
    shotList.push(x); 
    //htmlContent holds all elements for 

                // the action="" is what happens when the submit button is hit at the bottom of the form
    let htmlContent = `
        <form class="shot${shotList[x]} action="/action_page.php">
            <fieldset>
                <legend>Shot ${shotList[x]}:</legend>
                <label for="fname">Enter Shot Description:</label><br>
                <textarea id="fname" name="fname"> </textarea><br>
                <input type="submit" value="Generate">
                <input type="submit" value="Delete shot" class="shot${x}DeleteButton">
                <script> 
                    shot${x}DeleteButton.addEventListener (
                        "click", 
                        shot${shotList[x]}.remove()
                    ); 
                </script> 
            </fieldset>
        </form>
    `
    container.insertAdjacentHTML("beforeend", htmlContent);
}
 
// this is triggered if the delete shot button is clicked 


btn.addEventListener("click", handleClick);
console.log(shotList);


// put all created dom element into an array (use a class / objects)
// loop through entire array with if to find container to delete 
// use delete array.value 