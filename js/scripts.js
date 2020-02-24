$(document).ready(function(){
    $(".design").click(function(){
        $("p").toggle();
        $("h6").toggle();

    });

    $(".develop").click(function(){
        $("p").toggle();
        $(".developicon").toggle();
    });

    $(".product").click(function(){
        $("h6").toggle();
    });

    $(".img-fluid").hover(function(){
        $(".content").toggle();
    })
});

$(document).ready(function(){
    document.getElementById("contactus").addEventListener("submit",popUp);
    function popUp(){
        alert("We have received your message. Thank you")
    }
});    
