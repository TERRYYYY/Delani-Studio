$(document).ready(function(){
    $(".col-md-4").click(function(){
     $(".imag").toggle();
     $("#para").toggle();
    });
    $(".col-md-4").click(function(){
        $(".imag").toggle();
        $("#para").toggle();
    });
       $(".col-md-4").click(function(){
        $(".imag").toggle();
        $("#para").toggle();
    });
    

});

    $(".img-fluid").hover(function(){
        $(".content").toggle();
    })
    $(".myportfolio").hover(function(){
        $(this).find("div").toggleClass ("content_show");

    })


$(document).ready(function(){
    document.getElementById("contactus").addEventListener("submit",popUp);
    function popUp(){
        alert("We have received your message. Thank you")
    }
});    

