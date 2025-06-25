jQuery(document).ready(function() {
        $(function () {
            $('#defaultCountdown').countdown({ until: new Date(2025, 7 - 1, 1, 12) }); // year, month (value-1), date, hour
        });
});