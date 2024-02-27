var playVideo = $('.advantage__img');
var toggle = $('.advantage__img--girl')
var videoYoutube = $('.advantage__youtube')
var category1 = $('#1')
var category2 = $('#2')
var category3 = $('#3')
var category4 = $('#4')
var category5 = $('#5')
var idClicked = 1
var slideSum = $('.introduce')
$('.total-page').html(slideSum.length)
var currentPage = 0
console.log(slideSum.length);

category1[0].onclick = () => {
    idClicked = 1
    console.log(idClicked);
    category1[0].classList.add('button--active')
    removeClass()
}
category2[0].onclick = () => {
    idClicked = 2
    console.log(idClicked);
    category2[0].classList.add('button--active')
    removeClass()
}
category3[0].onclick = () => {
    idClicked = 3
    console.log(idClicked);
    category3[0].classList.add('button--active')
    removeClass()
}
category4[0].onclick = () => {
    idClicked = 4
    console.log(idClicked);
    category4[0].classList.add('button--active')
    removeClass()
}
category5[0].onclick = () => {
    idClicked = 5
    console.log(idClicked);
    category5[0].classList.add('button--active')
    removeClass()
}

function removeClass() {
    for (let i = 1; i <= 5; i++) {
        if (i !== idClicked) {
            console.log(i);
            $('#' + i)[0].classList.remove('button--active')

        }
    }
}

playVideo[0].addEventListener("click", test)
function test() {
    toggle[0].style.display = "none";
    console.log(videoYoutube);
    videoYoutube[0].style.display = "block";
    videoYoutube.html('<iframe width="92%" height="100%" src="https://www.youtube.com/embed/mzqvF_rIOx8?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
}



//GET DATA FROM JSON
var arr = []
$(document).ready(function () {
    // Handler for .ready() called.
    $.ajax({
        type: 'GET',
        dataType: "JSON",
        url: "http://127.0.0.1:5500/firstexam/db.json",
        success: function (response) {
            console.log(response['Design'][0].title);
            arr = response
            console.log(arr);
        }
    });
});

$(document).ready(function () {
    // $('.owl-carousel').owlCarousel({
    //     items: 1,
    //     loop: true,
    //     margin: 0,
    //     autoplay: false,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: true
    // })
    // $('.customNextBtn').click(function() {
    //     $('.owl-carousel').trigger('next.owl.carousel');
    // })
    // // Go to the previous item
    // $('.customPrevBtn').click(function() {
    //     // With optional speed parameter
    //     // Parameters has to be in square bracket '[]'
    //     $('.owl-carousel').trigger('prev.owl.carousel', [300]);
    // })

    $('.owl-carousel').owlCarousel({
                items: 1,
                margin: 0,
                autoplay: false,
                autoplayTimeout: 3000,
            })    
    $('.customNextBtn').click(function() {
        $('.owl-carousel').trigger('next.owl.carousel');
        if($(".owl-item").hasClass("active")){
            $(".current-page").html($(".owl-item.active .item").attr("attr-id"));
            currentPage = $(".owl-item.active .item").attr("attr-id")
        }
        test(currentPage)
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        $('.owl-carousel').trigger('prev.owl.carousel');
        if($(".owl-item").hasClass("active")){
            $(".current-page").html($(".owl-item.active .item").attr("attr-id"));
            currentPage = $(".owl-item.active .item").attr("attr-id")
        }
        test(currentPage)
    })
});
    

function test(id) {
    if(id === '1') {
        console.log(true);
        $('.customPrevBtn').addClass('disabled')
       
    }
    else if (id === slideSum.length) {
        $('.customNextBtn').classList.add('disabled')
    }
    else {
        
    }
}

// $(document).ready(function () {
//     $('.owl-carousel1').owlCarousel({
//         items: 1,
//         loop: true,
//         margin: 0,
//         autoplay: false,
//         autoplayTimeout: 3000,
//         autoplayHoverPause: true
//     })
    
// });


