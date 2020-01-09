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

    /*DROPDOWN*/
    $(".dropdown.click .ddTrigger").click(function () {
        if ($(this).closest(".dropdown").hasClass("right")) {
            var width = $(this).closest(".dropdown").width();
            var val = 'translate3d(' + width + 'px, 0px, 0px)';
            console.log('width: ' + width);
            console.log('val: ' + val);
            $(this).siblings(".ddmenu").css({
                'will-change': 'transform',
                'transform': val + 'translateZ(0)',
                'left': '0px',
                'top': '0px'
            });
            $(this).siblings(".ddmenu").toggle();
        } else {
            $(this).siblings(".ddmenu").toggle();
        }
    });
    /*DROPDOWN*/

    /*COLLAPSE*/
    $(".collapseTrigger").click(function () {
        var targetId = $(this).data("target");
        $(targetId).slideToggle();
    });
    /*COLLAPSE*/

    /*ACCORDION*/
    $(".accordionTrigger").click(function () {
        if ($(this).closest(".accordionGroup").hasClass("collapse")) {
            $(this).siblings(".accordionBody").slideToggle();
            $(this).closest(".accordion").siblings(".accordion").children(".accordionBody").slideUp();
        } else {
            $(this).siblings(".accordionBody").slideToggle();
        }
    });
    /*ACCORDION*/
});
