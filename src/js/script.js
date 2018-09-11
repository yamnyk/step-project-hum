    $(document).ready(function () {
        masonryHiddenPhoto();
        masonry();
        butonClick();
        masonryButton();
        navbarScroll();
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

    function butonClick() {
        let count = 0;
        let height = $('.imazing-photos').height();

        $('#imazing-photo-button').click(function () {
            loadAnimation('#imazing-photo-button');
            setTimeout(function () {
                stopAnimation('#imazing-photo-button');
                if (photoList().length >= 24 + count*12) {
                    $('.imazing-photos').css({'height': `${height + height*(count+1)}`});
                } else {
                    $('.imazing-photos').css({'height': `auto`});
                }
                count++;
                if (count == 2) {
                    $('.button-container .load-more').css('display', 'none')
                    $('.imazing-photos').css({'margin-bottom': '100px'})
                }
            }, 2000)
        })
    }

    function navbarScroll() {
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
        $('#best-images-button').click(function () {
            loadAnimation('#best-images-button');
            setTimeout(function () {
                stopAnimation('#best-images-button');
                masonryShowPhoto();
                masonry();
                $('.photo-gallery-of-best-images').css({'margin-bottom': '100px'})
                $('#best-images-button').hide()
            }, 2000)
        })
    }

    function loadAnimation(button) {
        $('.anime-container').css('display', 'block');
        $(button).css('opacity', '100%');
    }

    function stopAnimation(button) {
        $('.anime-container').css('display', 'none');
        $(button).css('display', 'inline-block');
    }