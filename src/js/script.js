$(document).ready(function () {
    $('.photo-gallery-of-best-images').masonry({
        // options
        itemSelector: '.best-photo',
        columnWidth: 10,
        gutter: 10,
        fitWidth: true,
    });

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

    $('.our-imazing-work .load-more').click(function () {
        let height = $('.imazing-photos').height()*2;
        if (photoList().length >= 24) {
            $('.imazing-photos').css({'height': `${height}`, 'margin-bottom': '100px'});
        } else {
            $('.imazing-photos').css({'height': `auto`, 'margin-bottom': '100px'});
        }

        $('.our-imazing-work .load-more').css('display', 'none')
    })
})


