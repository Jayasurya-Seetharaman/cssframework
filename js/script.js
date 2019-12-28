$(document).ready(function () {
    /*ALERT-DISMISS*/
    $(".alertDismiss .close").click(function () {
        $(this).closest(".alertDismiss").fadeOut();
    });
    /*ALERT-DISMISS*/

    /*TOAST*/
    $(".showToast1").click(function () {
        var autoHide = $(".toastJs1").data('autohide');
        if (autoHide === true || autoHide === undefined) {
            $(".toastJs1").addClass("show");
            setTimeout(() => {
                $(".toastJs1").removeClass("show");
            }, 3000);
        } else if (autoHide === false) {
            $(".toastJs1").addClass("show");
        }
    });

    $(".showToast2").click(function () {
        var autoHide = $(".toastJs2").data('autohide');
        if (autoHide === true || autoHide === undefined) {
            $(".toastJs2").addClass("show");
            setTimeout(() => {
                $(".toastJs2").removeClass("show");
            }, 3000);
        } else if (autoHide === false) {
            $(".toastJs2").addClass("show");
        }
    });
    $(".toast .close").click(function () {
        $(this).closest(".toast").removeClass("show");
    });
    /*TOAST*/
});
