var playVideo = $('.advantage__img');
var toggle = $('.advantage__img--girl')
var videoYoutube = $('.advantage__youtube')
var category1 = $('#1')
var category2 = $('#2')
var category3 = $('#3')
var category4 = $('#4')
var category5 = $('#5')
var idClicked = 1
var arr = []
var slideSum = ($('.introduce').length).toString()
$('.total-page').html(slideSum)
var currentPage = 0



// Filter project by category in mobile responsive
document.getElementById("select").addEventListener('change', (event) => {
    console.log(event.target.value)
    if (event.target.value > 0) {
        innerFilterProject(event.target.value)
    }
    else {
        innerShowProject(2)
        $('.project__button').css('display', 'block')
    }
});


// AddNavBarActive
function handleNavBarActive(element) {
    element.addClass('button--active')
}
handleNavBarActive(category1)

//Filter project by category in pc responsive
category1.click(function () {
    handleNavBarActive(category1);
    removeClass(1)
    innerShowProject(2)
    $('.project__button').css('display', 'block')
})
category2.click(function () {
    handleNavBarActive(category2);
    removeClass(2)
    innerFilterProject(1)
});
category3.click(function () {
    handleNavBarActive(category3);
    removeClass(3)
    innerFilterProject(2)
});
category4.click(function () {
    handleNavBarActive(category4);
    removeClass(4)
    innerFilterProject(3)
});
category5.click(function () {
    handleNavBarActive(category5);
    removeClass(5)
    innerFilterProject(4)

});
function removeClass(id) {
    for (let i = 1; i <= 5; i++) {
        if (i !== id) {
            $('#' + i).removeClass('button--active')
        }
    }
}

// Handle Play Video
playVideo.click(handlePlayVideo)
function handlePlayVideo() {
    console.log('clicked');
    toggle.css("display", "none")
    console.log(videoYoutube);
    videoYoutube.css("display", "block")
    videoYoutube.html('<iframe width="92%" height="100%" src="https://www.youtube.com/embed/mzqvF_rIOx8?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
}

//HANDLE DATA FROM JSON
fetch('db.json')
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Lỗi, mã lỗi ' + response.status);
                return;
            }
            // parse response data
            response.json().then(data => {
                arr.push(data);
                console.log(arr[0]);
                innerShowProject(2)
            })
        }
    )
    .catch(err => {
        console.log('Error :-S', err)
    });


$('.project__button').click(function () {
    $('#project__json').html('')
    innerShowProject(4)
    $('.project__button').css('display', 'none')
})

function innerShowProject(id) {
    // Clear project current
    $('#project__json').html('')
    // Add project to show
    for (let i = 1; i <= id; i++) {
        for (let j = 0; j < arr[0][i].length; j++) {
            $('#project__json').append(
                `<div class="project__content" style="background-color:${arr[0][i][j].bgcolor};
                color:${arr[0][i][j].color}; animation: show 1s;">
                    <div class="project__content--left">
                        <div class="project__content__category">
                            ${arr[0][i][j].title}
                        </div>
                        <div class="project__content__des">
                            ${arr[0][i][j].description}
                        </div>
                    </div>
                    <div class="project__content__img">
                        <img src="${arr[0][i][j].imgsrc}" alt="">
                    </div>
                </div>`)}}
}

function innerFilterProject(id) {
    // Remove "Show more" button
    $('.project__button').css('display', 'none')
    // Clear project current
    $('#project__json').html('')
    // Add project to show
    for (let j = 0; j < arr[0][id].length; j++) {
        $('#project__json').append(
            `<div class="project__content" style="background-color:${arr[0][id][j].bgcolor};
            color:${arr[0][id][j].color};animation: show 1s;">
                <div class="project__content--left">
                    <div class="project__content__category">
                        ${arr[0][id][j].title}
                    </div>
                    <div class="project__content__des">
                        ${arr[0][id][j].description}
                    </div>
                </div>
                <div class="project__content__img">
                    <img src="${arr[0][id][j].imgsrc}" alt="">
                </div>
            </div>`)}
}


// SLIDER
//Slider header
$('#owl-carousel1').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 5000,
    dots: false
})
//Slider feature
$('#owl-carousel3').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            autoWidth: true,
            margin: 30,
            center: true,

        },
        900: {
            items: 2,
            dotsEach: 1,
            autoWidth: false,
        }
    }
})
//Slider client
$('#owl-carousel2').owlCarousel({
    items: 1,
    margin: 30,
    loop: true,
    autoplay: false,
    dots: false,
    autoWidth: true
})

// Go to next item   
$('.customNextBtn1').click(function () {
    $('#owl-carousel1').trigger('next.owl.carousel');
    $('#owl-carousel1').trigger('stop.owl.autoplay');
    if ($(".owl-item").hasClass("active")) {
        $(".current-page").html($(".owl-item.active .item").attr("attr-id"));
        currentPage = $(".owl-item.active .item").attr("attr-id")
    }
})
// Go to the previous item
$('.customPrevBtn1').click(function () {
    $('#owl-carousel1').trigger('prev.owl.carousel');
    $('#owl-carousel1').trigger('stop.owl.autoplay');
    if ($(".owl-item").hasClass("active")) {
        $(".current-page").html($(".owl-item.active .item").attr("attr-id"));
        currentPage = $(".owl-item.active .item").attr("attr-id")
    }
})

$('.customNextBtn2').click(function () {
    $('#owl-carousel2').trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn2').click(function () {
    $('#owl-carousel2').trigger('prev.owl.carousel');
})


// Toggle Disabled Class - use when slider does not have loop: true property
function toggleDisabledClass(id) {
    if (id === '1') {
        console.log(true);
        $('.customPrevBtn').addClass('disabled')
        $('.customNextBtn').removeClass('disabled')

    }
    else if (id === slideSum) {
        $('.customNextBtn').addClass('disabled')
        $('.customPrevBtn').removeClass('disabled')
    }
    else {
        $('.customPrevBtn').removeClass('disabled')
    }
}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}