$(document).ready(function () {
    $(".timeup").css("display", "none");
})
//function for get time
$("button").click(function () {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    $(".showtime").text(h + ":" + m + ":" + s);
    // function for decrement time
    let myIntervel = setInterval(function () {
        if (s > 0) {
            s--;
        } else {
            s = 60;
            if (m > 0) {
                m--;
            } else {
                m = 60;
                if (h > 0) {
                    h--;
                } else {
                    h = 0;
                    if (h == 0 && m == 60 && s == 60) {
                        clearInterval(myIntervel);
                        $(".showtime").css("display", "none");
                        $(".timeup").css("display", "block");
                    }
                }
            }
        }
        $(".showtime").text(h + ":" + m + ":" + s);
    }, 1000);
})