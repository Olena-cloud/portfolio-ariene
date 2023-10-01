$(document).ready(function () {
    $(".hero-links a").click(function(e){
        e.preventDefault()
        $(".hero-links a").removeClass("active")
        $(this).addClass("active")
    })
});