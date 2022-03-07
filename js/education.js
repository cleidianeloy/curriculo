$(window).ready(()=>{

    $('.popup').each(function(){
        var botaoFechar = $('<svg class="botao-svg" tabindex="1" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#14279B"><path d="M0 0h24v24H0V0z" fill="none"></path><path class="botao"d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9.41 15.95L12 13.36l2.59 2.59L16 14.54l-2.59-2.59L16 9.36l-1.41-1.41L12 10.54 9.41 7.95 8 9.36l2.59 2.59L8 14.54z"></path></svg>')
        botaoFechar.click(() => {
            $('.popup').parent().hide();
            $('section').removeClass('ofuscade');
            }).focus().keypress((e)=>{
                if(e.which === 13){
                 $(botaoFechar).triggerHandler('click');
            }
        });
        $(this).append(botaoFechar);
    })
})
$('svg a').focus().keypress((e)=>{
    if(e.which === 13){
     $('svg a').triggerHandler('click');
    }
})
function popup(id){
    $('#'+ id).show();
    $('section').attr('class', 'ofuscade');

}