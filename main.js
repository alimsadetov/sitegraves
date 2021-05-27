window.onload=function(){
    let karta = document.getElementById("karta");
    let width = window.innerWidth;
    if (window.innerWidth >=1110){
        width = 1110;
    }

    else if (window.innerWidth >=800){
        width = 800;
    }

    else if (window.innerWidth >=688){
        width = 688;
    }

    else if (window.innerWidth >= 500){
        width = 500;
    }

    else if (window.innerWidth >= 400){
        width = 400;
    }

    else if (window.innerWidth >= 320){
        width = 320;
    }

    karta.src=`https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A868440aafb3dee28d51d49af268be5a2214c509065e74fc96f7d42c497c5358c&amp;width=${width}&amp;height=499&amp;lang=ru_RU&amp;scroll=true`;
};