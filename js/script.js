$(document).ready(function () {
    $(".alertDismiss .close").click(function () {
        $(this).closest(".alertDismiss").fadeOut();
    });
});