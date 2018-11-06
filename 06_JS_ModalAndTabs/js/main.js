$(function () {


    $("#defaultOpen").click();

    var modal = $('.popup');    
    var link = $('#btnPopup');
    var close = $('.close-btn');
    var tab = $('.nav-link');


    link.click(function (event) {    
        modal.toggleClass('popup_active');
    });
    close.click(function (event) {       
        modal.toggleClass('popup_active');
    });
   
    tab.on('click', function (event) {
    
        event.preventDefault();
        $('.active').removeClass('active');
        $(this).parent().toggleClass('active');
        var target = $(this).attr('href');
        $(target).toggleClass('active');
    });
});

function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = $(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";        
    }

    tablinks = $(".tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }    
    elmnt.style.backgroundColor = color;
    var h = $(window).height();
    console.log(h);
    $("#" + pageName).css({ "display": "block", "height": h+"px" });
}
$(document).mousedown(function (event) {
    var k = event.target;
    var note = k.getAttribute("data-note");
    if (note != null) {
        var n3 = note.substr(2);                
        var src = "sound/" + note[1]+note[0]+n3 + ".ogg";
        console.log(src);
        var audio = new Audio(src);
        if (audio == null) return;
        audio.play();
        audio.currentTime = 0;
    }   
});
$(document).keyup(function (event) {
    var k = event.keyCode;
    $("div[data-key = " + k + "]").toggleClass("playing");
});