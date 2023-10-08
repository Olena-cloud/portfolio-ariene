$(document).ready(function () {
    $(".hero-links a").click(function (e) {
        e.preventDefault()
        $(".hero-links a").removeClass("active")
        $(this).addClass("active")
    })

    // stars rating
    $(".list-stars span").rateYo({
        starWidth: "27px",
        multiColor: {
            "startColor": "#c4c4c4",
            "endColor": "#f5bf75"
        },
        rating    : 3.5,
        spacing: "4px",
        "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25" fill="none"><path d="M12.4545 0.869652L9.24787 7.3337L2.07336 8.37361C0.786765 8.55913 0.271144 10.1361 1.20417 11.0393L6.39476 16.068L5.16709 23.1716C4.94611 24.4556 6.30637 25.4174 7.44565 24.8169L13.8639 21.4628L20.2822 24.8169C21.4215 25.4125 22.7817 24.4556 22.5607 23.1716L21.3331 16.068L26.5236 11.0393C27.4567 10.1361 26.9411 8.55913 25.6545 8.37361L18.48 7.3337L15.2733 0.869652C14.6987 -0.282549 13.034 -0.297196 12.4545 0.869652Z"/></svg>'
    })
});