var sections = $('section');
var links = $.makeArray($('menu a'));
var realSections = $.makeArray(sections);
var sectionsPositions = $.map(realSections, function (section){
    return $(section).position().top;
});

$(window).scroll(function(){
    // debugger;
    var userPosition = $(this).scrollTop();
    for(var i = 0; i < sectionsPositions.length; i++){
        var height = $(realSections[i]).height() ;

        if(userPosition <= sectionsPositions[i] + height -5 && userPosition >= sectionsPositions[i] ){
           $(links[i - 1]).attr('class', 'on');
           $(realSections[i]).find('button, a').attr('tabindex','1');
           $(realSections[i]).siblings('section').find('button, a').attr('tabindex','-1');
        }else if(userPosition <= sectionsPositions[0] + height -5 ){
            $(realSections[0]).find('button, a').attr('tabindex','1');
            $(realSections[0]).siblings('section').find('button, a').attr('tabindex','-1');
            $(links[i]).removeClass('on');
        }else{
            $(links[i]).removeClass('on');
            $(realSections[i]).find('button, a').attr('tabindex','-1');
        }
    }
}) 
function carregou(){
    setTimeout(()=>{
        $("#loading").hide();
    },4000)
}

