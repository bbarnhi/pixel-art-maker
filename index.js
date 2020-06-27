/* document.addEventListener('DOMContentLoaded',Function(){
    var makeGrid = document.createElement('clickMe'){
        makeGrid.addEventListener('click'), myFunction(){
            makeGrid.innerHTML = "TEXT"
            document.getElementById("clickMe").appendChild(makeGrid);
        }
    }
})
*/
//Later allow user to pass in how large the array is to be.  X & Y.
document.addEventListener('DOMContentLoaded', function(){
    
        console.log("loaded")
        var name = ""
        for (var x = 0; 25 > x; x++){
            var nameX = "divX"+x
            for (var y = 0; 50 > y; y++){
                name = nameX + "Y"+y
                var newDiv = document.createElement("div");
                //newDiv.innerHTML=" "
                document.body.appendChild(newDiv) 
                newDiv.setAttribute("id", name)
                //Will be used to identify col and row of block
                newDiv.setAttribute("class", 'pixClass')
                newDiv.setAttribute("onclick", 'colorize('+name+',)')

            }
            var newBr = document.createElement("br");
            document.body.appendChild(newBr) 
        }
    }
    )

var colorize = function(currentId){
    //Next step is to also pass the selected color block instead of static color
    //var currentBlock = document.getElementsById(currentId);
    var radios = document.querySelectorAll('input[type="radio"]:checked');
    currentId.style.backgroundColor = selectedColor
}

//var selectedColor = function(color)