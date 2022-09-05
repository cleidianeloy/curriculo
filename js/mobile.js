$('nav').append('<svg id="hamburguer" aria-expanded="false" role="button" aria-label="menu" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 24 24" width="48" fill="#FFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>');
var isMobile =  () => {
    var isMobile = false;
    var width = $(window).width();
    if(width < 600){
        isMobile = true;
    }else{
        isMobile = false;
    }
    return isMobile;
};
var menuMobile = () =>{
    $('nav a').hide();
    $('nav #hamburguer').show();
    $('#hamburguer').click(function(){
        var ariaExpanded = $(this).attr('aria-expanded');
        if(ariaExpanded == 'false'){
            $('nav').attr('class','ativo');
            $('nav a').show();
            $(this).attr('aria-expanded', 'true');
        }else{
            $('nav a').hide();
            $('nav').removeClass('ativo');
            $('nav a').click(()=>{
                $('nav').removeClass('ativo');
                $('nav a').hide();
                $(this).attr('aria-expanded', 'false');
            })
            $(this).attr('aria-expanded', 'false');

        }
    })

}
var menuDesktop = () =>{
    $('nav a').show();
    $('nav #hamburguer').hide();
}
var vertical = () =>{
    $('.horizontal').hide();
    $('.vertical').show();
}
var horizontal = () => {
    $('.vertical').hide();
    $('.horizontal').show();
}

var isWhat = () =>{
    if(isMobile()){
        console.log('é mobile')
        menuMobile(); 
        vertical();
    }else{
        console.log(' num é mobile')
        menuDesktop();
        horizontal();
       
    }
}
$(document).ready(()=>{
    isWhat();
})
$(window).resize(function(){
    isWhat();
})
