$(function() {
    $('.change-devoured').on('click', function(event) {
        var id = $(this).data("id");
        var newDevoured = true;
        

        var newDevouredState = {
            devoured: newDevoured
        };


        $.ajax('/api/burgers/' + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);
                location.reload();
            }
        );
    });

    $('.create-form').on('submit', function(event) {
        event.preventDefault();
        var newBurger = {
            name: $('#burger-type').val().trim(),
            devoured: 0
        };
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
                console.log('Made new burger');
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("Successfully deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });

    $('.reorder-burger').on('click', function(event) {
        // var id = $(this).data("id");

        event.preventDefault();

        var newBurger = {
            name: $(this).data("nameof"),
            devoured: 0
        };
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
                console.log('Re-ordered this burger');
                location.reload();
            }
        );
    });

});