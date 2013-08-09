// Take the user input, and add it as a to-do item in a list
function addItem() {
    // Grab the value of the user input
    userInput = document.getElementById("userInput").value;
    // Write the html for the to list item, and throw in the users input as the value of the to-do item
    todoItem = '<div id="todoItem" class="to-do-wrapper"><input type="text" class="to-do item" value="' + userInput + '" readonly><div id="userAction" class="submit complete-item"><i class="icon-ok"></i></div></div>';
    // Now place it on the page in the right spot
    $(todoItem).appendTo('#to-do-items').slideDown(250);
    // Reset the value of the users input to '' so they don't accidentally add the same item twice
    document.getElementById("userInput").value = '';
}

$(document).ready(function() {

    $('.add').click(addItem);

    $('.complete-item').click(function(){
        console.log("I'm working!");
    });

}); // END OF DOCUMENT