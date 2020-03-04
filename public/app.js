



// Send the POST request.
$.ajax("/api/cats", {
    type: "POST",
    data: newDog
}).then(
    function () {
        console.log("created new dog");
        // Reload the page to get the updated list
        location.reload();
    }
);


