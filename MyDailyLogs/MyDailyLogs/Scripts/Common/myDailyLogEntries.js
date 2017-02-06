function ScrollToFocusLine() {
    $($('div.focusLineClass')[0]).scrollToMe();
}

jQuery.fn.extend({
    scrollToMe: function () {
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var x = jQuery(this).offset().top - (viewHeight / 2);
        jQuery('html,body').animate({ scrollTop: x }, 1);
    }
});