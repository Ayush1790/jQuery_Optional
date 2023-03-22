$(document).ready(function(){
    // code for calculating the emi detail
    $(".button__details").click(function(){
        const amt=($("#amount").val());
        const rate=($("#intrest").val());
        const time=($("#period").val());
        if (check("#amount", amt, "#msg1")) { return; }
        if (check("#intrest", rate, "#msg2")) { return; }
        if (check("#period", time, "#msg3")) { return; }
    let interest = (amt * (rate * 0.01)) / time;
    let total = ((amt / time) + interest).toFixed(2);
    let data=`<tr><td>${total}</td><td>${(total*time-amt).toFixed(2)}</td><td>${(total*time).toFixed(2)}</td></tr>`;
    $(".table__body").html(data);
    })
    // code for calculating the monthly emi 
    $(".button__calculate").click(function(){
        const amt=($("#amount").val());
        const rate=($("#intrest").val());
        const time=($("#period").val());
        if (check("#amount", amt, "#msg1")) { return; }
        if (check("#intrest", rate, "#msg2")) { return; }
        if (check("#period", time, "#msg3")) { return; }
    let interest = (amt * (rate * 0.01)) / time;
    let total = ((amt / time) + interest).toFixed(2);
        let data=`<tr><td>${total}</td></tr>`;
        $(".table__body").html(data);
    })
    //code for reset
    $(".button__reset").click(function(){
        $("#amount").val("");
        $("#intrest").val("");
        $("#period").val("");
        data="";
        $(".table__body").html(data);
    })
    //code for validation
    function check(id, val, msg) {
        if (val == "" || val <= 0) {
            $(id).css("border", "1px solid red");
            $(msg).text("* " + id + " should not be empty and greater then zero").css("color", "red");
            return 1;
        } else {
            $(id).css("border", "1px solid black");
            $(msg).text("");
            return 0;
        }
    }
})