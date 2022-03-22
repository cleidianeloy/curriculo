var sections = $('section');
var links = $.makeArray($('menu a'));
var realSections = $.makeArray(sections);
var sectionsPositions = $.map(realSections, function (section){
    return $(section).position().top;
});

// $(window).scroll(function(){
//     // debugger;
//     var userPosition = $(this).scrollTop();
//     for(var i = 0; i < sectionsPositions.length; i++){
//         var height = $(realSections[i]).height() ;
    
//         if(userPosition <= sectionsPositions[i] + height - (height * 0,50) && userPosition >= sectionsPositions[i] ){
//             $(links[i - 1]).attr('class', 'on');
//            $(links[i - 1]).siblings('a').removeClass('on');
//         }if(userPosition <= sectionsPositions[0] + height - (height * 0,50)){
//             $(links).removeClass('on');
//         }
//     }
// }) 
async function carregou(){
    setTimeout(()=>{
        $("#loading").hide();
        $('menu').show();
        $('main').show();
    },4000)
}

