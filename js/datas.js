function getMyBirthday(){
    var  birthday = new Date(2000,01,03);
    var today = new Date();
    var age =  0;
     if(today.getDay() < 3 && today.getMonth() == 1){// na array o mes de fevereiro é 1 
         age = today.getFullYear() - birthday.getFullYear() - 1
     }else if(today.getMonth() < 1)
     {
        age = today.getFullYear() - birthday.getFullYear() - 1
     }else{
        age = today.getFullYear() - birthday.getFullYear();
     }
     return age.toString();
}
$('#myAge').text(getMyBirthday());