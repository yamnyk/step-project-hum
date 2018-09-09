$(document).ready(function () {
    masonryHiddenPhoto();
    masonry();
    butonClick('.imazing-photos');
    masonryButton();
    prokrutka();
    imazinNavbarClick();
})

    function photoList() {
        return $('.imazing-photos img');
    }
    
    function hidePhoto(name) {
        for (let i = 0; i < photoList().length; i++) {
            if ($(photoList()[i]).attr('class') != name) {
                $(photoList()[i]).css('display', 'none')
            }
        } 
    }

    function showPhoto() {
        for (let i = 0; i < photoList().length; i++) {
                $(photoList()[i]).css('display', 'block')
            }
    }

    function imazinNavbarClick() {
        $('.imazing-navbar li').click(function () {
            $('.imazing-photos').css({'height': 'auto'});
            showPhoto();
            switch ($(this).text()) {
                case 'Graphic Design':
                    hidePhoto('graphic-foto')
                    break;
                case 'Web Design':
                    hidePhoto('web-foto')
                    break;
                case 'Landing Pages':
                    hidePhoto('landing-foto')
                    break;
                case 'Wordress':
                    hidePhoto('wordpress-foto')
                    break;
            }

            $('.our-imazing-work .load-more').click(function () {
                $('.imazing-photos').css({'height': `auto`, 'margin-bottom': '100px'});
                $('.our-imazing-work .load-more').css('display', 'none')
            })
        })
    }

    function butonClick(selector) {
        let count = 0;
        let height = $(selector).height();

        $('.our-imazing-work .load-more').click(function () {
            if (photoList().length >= 24 + count*12) {
                $(selector).css({'height': `${height + height*(count+1)}`});
            } else {
                $(selector).css({'height': `auto`});
            }
            count++;
            if (count == 2) {
                $(this).css('display', 'none')
                $('.our-imazing-work').css({'margin-bottom': '100px'})
            }
        })

    }

    function prokrutka() {
        $('.navbar li a').click(function (e) {
            e.preventDefault();
            let id = $(this).attr('href');
            let pos = $(id).offset().top;
            $('html, body').animate({scrollTop: pos}, 1500)
        })
    }


    function masonry() {
    $('.photo-gallery-of-best-images').imagesLoaded(function () {
        $('.photo-gallery-of-best-images').masonry({
            itemSelector: '.best-photo',
            columnWidth: 10,
            gutter: 10,
            fitWidth: true,
        });
    })

    }

    function masonryHiddenPhoto() {
        let selector = $('.photo-gallery-of-best-images div');

        for (let i = 9; i < selector.length; i++) {
            $(selector[i]).addClass('hidden-photo');
        }
    }

function masonryShowPhoto() {
    let selector = $('.photo-gallery-of-best-images div');
    for (let i = 0; i < selector.length; i++) {
        $(selector[i]).removeClass('hidden-photo')
    }
}

function masonryButton() {
    $('.gallery-of-best-images .load-more').click(function () {
        masonryShowPhoto();
        masonry();
        $('.gallery-of-best-images .load-more').hide()
    })
}

