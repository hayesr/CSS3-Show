var imgs = [
    "i/wells10.jpg",
    "i/wells11.jpg",
    "i/wells12.jpg",
    "i/wells14.jpg",
    "i/wells15.jpg",
    "i/wells16.jpg"
];

var pointer = 0;

function nextInd(a, i){
    return (i + 1) > (a.length - 1) ? (i - (a.length - 1)) : i + 1;
}

function prevInd(a, i){
    return (i - 1) < 0 ? (i + (a.length - 1)) : i - 1;
}

function loadImg(img){
    $(img)
        .load(function(){
            $("#banner .outgoing").remove();
            $("#banner .incoming").attr('class', 'outgoing').jqfallback('slow');
            $(this).addClass('incoming');
            $("#banner").append(this);
        })
        .error(function(){
            console.log("problem loading image: " + img.src);
        });
}

$.fn.jqfallback = function(speed){
    if ( !$.fader.useCSS ){
        this.fadeOut(speed);
    }
};

$("#banner").ready(function(){
    $("#banner").prepend( "<img src=\"" + imgs[0] + "\" class=\"incoming\">" ); 
});

$(document).ready(function(){
    $.fader = {
        useCSS: Modernizr.csstransitions
    };
    
    if( $.fader.useCSS ){
        $('html').addClass('cssfader');
    }
    
    $("#next").click( function(){
        pointer = nextInd(imgs, pointer);
    
        //loaderfunction
        image = new Image();
        image.src = imgs[pointer];
    
        loadImg(image);
        return false;
    });
    
    $("#prev").click(function(){
        pointer = prevInd(imgs, pointer);
        
        //loaderfunction
        image = new Image();
        image.src = imgs[pointer];
        
        loadImg(image);
        return false;
    });
});

