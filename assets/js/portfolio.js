// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.col-md-4',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer'
    }
});

  
// bind filter button click

$('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    console.log("data-filter = " + filterValue);
    $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.btn-group').each( function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
    });
    console.log("Button group each");
});