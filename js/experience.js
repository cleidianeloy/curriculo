function Experience(company, occupation, start, end, description, logo){
    this.company = company;
    this.occupation = occupation;
    this.start = start;
    this.end = end;
    this.description = description;
    this.logo = logo;
    this.innerHtml = () =>{
        var div = $('<div></div>')
        var companyT = $('<h1></h1>')
        var descriptionT = $('<p></p>');
        var occupationEDate = $('<p></p>')
        var left = $('<div><div>');
        var right = $('<div></div>')
        var img = $('<img/>');
        
        companyT.text(this.company)
        occupationEDate.text(this.occupation + ' | ' + this.start + ' - ' + this.end)
        descriptionT.text(this.description);

        img.attr('src', this.logo);
        img.attr('alt', 'Essa imagem representa o logo da company ' + this.company);
        div.attr('class', 'experience')
        companyT.attr('class','nameCompany')
        descriptionT.attr('class','jobDescription')
        occupationEDate.attr('class', 'time')
        left.attr('class','grid-left');
        right.attr('class','grid-right');
        
        right.append(companyT)
        right.append(occupationEDate)
        right.append(descriptionT)
        left.append(img);
        div.append(left);
        div.append(right);
        $('#experiences .slide').append(div)
    }
    if(end == null){
        this.end = 'Atualmente';
    }


}
function newExperience(){
    var experience = new Experience(
        'FIESC', 
        'Web Design', 
        "Jun/2021",
         null,
         'Atividades relacionadas a programação de Front-End de cursos a distancia, '
         + 'usando javascript, jquery, css e html, principalmente. Além disso, também usado'
         + ' trello (kanban) e github.',
         './imgs/senai.png');
        experience1 = new Experience(
            'Everis',
            'Programador Júnior',
            'Jan/2021',
            'Mai/2021', 
            'Atividades com analise e programação de banco de dados, com PLSQL. Também participando de projetos que continham codigos com Java e C++' +
            ' Usando o sistema operacional linux para execução de algumas tarefas.', 
            './imgs/everis.jpeg')
    experience.innerHtml();
    experience1.innerHtml();
}



$(document).ready(()=>{
    //debugger;
    newExperience();
    var qntExperiences = $('.slide').children('.experience').length;
    var divButton = $('<div></div>');
    var divSlide = $('.slide')
    divButton.attr('class','buttons');
    var i = 0;
    for(var i = 0; i < qntExperiences; i++){
        var button = $('<button></button>');
        button.attr('date', i);
        if(button.attr('date') === '0'){
            button.attr('class', 'activated');
        }else{
            button.attr('class', 'disabled');
        }
        button.click((event)=>{
            var thisButton = $(event.target);
            var date = thisButton.attr('date');
            thisButton.attr('class', 'activated');
            thisButton.siblings('button').attr('class','disabled')
            divSlide.children('.experience').each(function(index){
                var essaDiv = $(this);
                var display = $(this).css('display')
                console.log('index ' + index);
                date = parseInt(date);
                if(index === date && display ==='none'){
                   essaDiv.toggle("slide");
                   essaDiv.siblings('.experience').toggle("slide");
                }
            });
        })
        divButton.append(button);
    }
    divSlide.append(divButton);
    divSlide.children('.experience').hide();
    divSlide.children('.experience').first().show();
    // $(window).scroll(function(event){
    //     console.log($(window).scrollTop());
    //     if($(window).scrollTop() === $('#experiences').position().top){
    //         
    //     }
    // })


})
