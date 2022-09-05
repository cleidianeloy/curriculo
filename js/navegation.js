var sections = $('section');
var links = $.makeArray($('nav a'));


$(window).scroll(function(){
    // debugger;
    var realSections = $.makeArray(sections);
    var sectionsPositions = $.map(realSections, function (section){
        return $(section).position().top;
    });
    var userPosition = $(this).scrollTop();
    for(var i = 0; i <= sectionsPositions.length; i++){
        var height = $(realSections[i]).height();
        if(userPosition <= sectionsPositions[0] + height - (height * 0.08)){
            $(links).removeClass('on');
        }else 
        if(userPosition <= (sectionsPositions[i] + height - (height * 0.08)) && userPosition >= sectionsPositions[i] ){
            $(links[i - 1]).attr('class', 'on');
           $(links[i - 1]).siblings('a').removeClass('on');
        }
        
    }
}) 
async function carregou(){
    setTimeout(()=>{
        $("#loading").hide();
        $('nav').show();
        $('main').show();
    },4000)
}

