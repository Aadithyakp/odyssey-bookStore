$(document).ready(function() {
    // Focus on the first link when the page is loaded
    $("#image_selector img:first").focus();
    
    // Event handler for click event on each link
    $("#image_select img").on("click",function(evt) {
        evt.preventDefault(); // Prevent default action of the link
        let imageURL = $(this).attr("src");
        console.log(imageURL);
        $('body').css({
            'background-image': 'url(' + imageURL + ')',
            'transition': 'background-image 0.5s ease-in-out' // Adding transition for background change
        });
    });

    
});
