$(document).ready(function(){
    $(".designicon").click(function(){
        $("p").toggle();

    });

    $(".developicon").click(function(){
        $("p").toggle();
    });

    $(".producticon").click(function(){
        $("p").toggle();
    });

    $(".img-fluid").hover(function(){
        $(".content").toggle();
    })
    $(".myportfolio").hover(function(){
        $(this).find("div").toggleClass ("content_show");

    })
});

$(document).ready(function(){
    document.getElementById("contactus").addEventListener("submit",popUp);
    function popUp(){
        alert("We have received your message. Thank you")
    }
});    
