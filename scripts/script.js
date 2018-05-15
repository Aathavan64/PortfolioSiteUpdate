
$('.Show').click(function () {
    $('#target').show(500);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').click(function () {
    $('#target').hide(500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.toggle').click(function () {
    $('#target').toggle('slow');
});

$('button.movieWatchListScroll').on('click', function () {
    $.smoothScroll({
        scrollTarget: '#movieWatchList'
    });
    return false;
});

$('button.bitRegretScroll').on('click', function () {
    $.smoothScroll({
        scrollTarget: '#bitRegret'
    });
    return false;
});

$('button.movieWatchListScroll').on('click', function () {
    $.smoothScroll({
        scrollTarget: '#movieWatchList'
    });
    return false;
});

$('button.overScroll').on('click', function () {
    $.smoothScroll({
        scrollTarget: '#over'
    });
    return false;
});

$('button.westerBrosScroll').on('click', function () {
    $.smoothScroll({
        scrollTarget: '#westerBros'
    });
    return false;
});

