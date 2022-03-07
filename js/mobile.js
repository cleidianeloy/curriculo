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
    $('menu a').hide();
    $('menu').append('<svg id="hamburguer" aria-expanded="false" role="button" aria-label="menu" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 24 24" width="48" fill="#FFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>');
    $('#hamburguer').click(function(){
        var ariaExpanded = $(this).attr('aria-expanded');
        if(ariaExpanded == 'false'){
            $('menu').attr('class','ativo');
            $('menu a').show();
            $(this).attr('aria-expanded', 'true');
        }else{
            $('menu a').hide();
            $('menu').removeClass('ativo');
            $('menu a').click(()=>{
                $('menu').removeClass('ativo');
                $('menu a').hide();
                $(this).attr('aria-expanded', 'false');
            })
            $(this).attr('aria-expanded', 'false');

        }
    })
}

var menuDesktop = () =>{
    $('menu a').show();
    $('menu #hamburguer').hide();
}
$(document).ready(()=>{
    if(isMobile()){
        console.log('é mobile')
        menuMobile(); 
    }else{
        console.log(' num é mobile')
        menuDesktop();
    }
})
$(window).resize(function(){

    if(isMobile()){
        console.log('é mobile')
        menuMobile(); 
    }else{
        console.log(' num é mobile')
        menuDesktop();
    }
})
