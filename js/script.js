document.querySelector(".grid").addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") { // Check if the images only is clicked
        var liLength = this.querySelectorAll("li").length; // Store the length of li
        if (liLength > 1) { // Check if the li more than one item
            var removeTarget = e.target.parentNode; // Store the parent node to be removed
            removeTarget.parentNode.removeChild(removeTarget); // remove the parent node of the last variable
        } else { // grab the last image
            var imgTitle = e.target.alt; // Store the last image alt value
            document.querySelector("#art p").innerHTML = "<p>You picked: " + imgTitle + "</p>"; // print the alt value in the p element
        }
    }
}, false);