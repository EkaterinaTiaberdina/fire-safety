const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const goTest = document.querySelector("h3");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener("click", bug);
buttonTwo.addEventListener("click", firefighter);

function bug() {
    goTest.textContent = "ЭТО НЕВЕРНЫЙ ОТВЕТ!";
    image.setAttribute("src", "https://givnost.ru/wp-content/uploads/2018/05/zhuk-pozharnik-obraz-zhizni-i-sreda-obitaniya-zhuka-pozharnika-5.jpg");
    text.textContent = "ПОЖАРНИК - ЭТО ЖУК";

    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}
function firefighter() {
    image.setAttribute("src", "https://static.insales-cdn.com/images/products/1/6231/125778007/f05-znak-pozharnoy-bezopasnosti-telefon-dlya-ispolzovaniya-pri-pozhare.jpg");
    text.textContent = "ПРИ ПОЖАРЕ НУЖНО ЗВОНИТЬ?";
    
    buttonOne.textContent = "01, 101";
    buttonTwo.textContent = "03, 103";
    goTest.style = "display: none";
    
    buttonOne.addEventListener("click", telephone);
    buttonTwo.addEventListener("click", incorrectTelephone);
}
function telephone() {
    image.setAttribute("src", "https://www.gov.spb.ru/static/writable/mediact/photo/2020/08/18/%D0%BF%D0%BE%D0%BC%D0%BD%D0%B8%D1%82%D0%B5.jpg");
    text.textContent = "ЧТО НУЖНО ДЕЛАТЬ, ЕСЛИ ЗАГОРЕЛСЯ ЭЛЕКТРОПРИБОР (ТЕЛЕВИЗОР)?";
   
    buttonOne.textContent = "ПОЛИТЬ ЕГО ВОДОЙ";
    buttonTwo.textContent = "ВЫДЕРНУТЬ ИЗ РОЗЕТКИ, НАКРЫТЬ ПЛОТНОЙ ТКАНЬЮ";

    buttonOne.style = "display: block";
    buttonTwo.style = "display: block";
        
    buttonOne.addEventListener("click", electricity);
    buttonTwo.addEventListener("click", tv);
}
function incorrectTelephone() {
    goTest.textContent = "ЭТО НЕВЕРНЫЙ ОТВЕТ!";
    image.setAttribute("src", "https://avatars.mds.yandex.net/i?id=20dec5d1841f21808146a6c5b59f6774-4843317-images-thumbs&n=13");
    text.textContent = "03, 103 - ЭТО НОМЕР СКОРОЙ ПОМОЩИ";
    
    goTest.style = "display: block";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}
function electricity() {
    goTest.textContent = "ЭТО НЕВЕРНЫЙ ОТВЕТ!";
    image.setAttribute("src", "https://rusdorznak.ru/Uploads/Catalog/znaki-bezopasnosti/znaki-elektrobezopasnosti/7_8_15.jpg");
    text.textContent = "ТУШИТЬ ЭЛЕКТРОПРИБОРЫ ВОДОЙ КАТЕГОРИЧЕСКИЙ ЗАПРЕЩЕНО! ВОДА - ХОРОШИЙ ПРОВОДНИК ЭЛЕКТРИЧЕСТВА, КОТОРАЯ СОЗДАЁТ РИСК УДАРА ТОКОМ";

    goTest.style = "display: block";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}
function tv() {
    image.setAttribute("src", "https://i.ytimg.com/vi/h2NwUTp_f_0/maxresdefault.jpg");
    text.textContent = "КАК ПОТУШИТЬ ЗАГОРЕВШУЮСЯ НА ЧЕЛОВЕКЕ ОДЕЖДУ?";

    buttonOne.textContent = "СОРВАТЬ С НЕГО ОДЕЖДУ";
    buttonTwo.textContent = "ПОВАЛИТЬ ЧЕЛОВЕКА НА ЗЕМЛЮ, НАКРЫТЬ ПЛОТНОЙ ТКАНЬЮ";

    goTest.style = "display: none";
    buttonOne.style = "display: block";
    buttonTwo.style = "display: block";

    buttonOne.addEventListener("click", incorrectClothes);
    buttonTwo.addEventListener("click", clothes);
}
function incorrectClothes() {
    goTest.textContent = "ЭТО НЕВЕРНЫЙ ОТВЕТ!";
    image.setAttribute("src", "https://red-fire.ru/images/odezhda-gorit.jpg");
    text.textContent = "СРЫВАТЬ ОДЕЖДУ МОЖНО ТОЛЬКО В ПЕРВЫЕ НЕСКОЛЬКО СЕКУНД ПОСЛЕ ВОЗГОРАНИЯ. ИНАЧЕ МОЖНО НАНЕСТИ ЧЕЛОВЕКУ СЕРЬЁЗНЫЕ ПОВРЕЖДЕНИЯ!";

    goTest.style = "display: block";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}
function clothes() {
    image.setAttribute("src", "https://avatars.mds.yandex.net/i?id=586001e8af98f091c92b6af78f4b9bc9-5351135-images-thumbs&n=13");
    text.textContent = "КАК ПРАВИЛЬНО ТУШИТЬ КОСТЁР?";
    buttonOne.textContent = "ЗАЛИТЬ ВОДОЙ, ЗАСЫПАТЬ ЗЕМЛЁЙ";
    buttonTwo.textContent = "РАСКИДАТЬ УГЛИ, ЗАТОПТАТЬ НОГАМИ";

    buttonOne.addEventListener("click", bonfire);
    buttonTwo.addEventListener("click",incorrectBonfire);
}
function bonfire() {
    image.setAttribute("src", "https://kurobr.spb.ru/images/2020/9/1.png");
    text.textContent = "ГЛАВНОЕ ПРАВИЛО ПРИ ЛЮБОЙ ОПАСНОСТИ?";
    buttonOne.textContent = "НЕ ПОДДАВАТЬСЯ ПАНИКЕ, НЕ ТЕРЯТЬ САМООБЛАДАНИЯ";
    buttonTwo.textContent = "БЕЖАТЬ, КРИЧАТЬ, НИ О ЧЁМ НЕ ДУМАЯ";

    goTest.style = "display: none";
    buttonOne.style = "display: block";
    buttonTwo.style = "display: block";

    buttonOne.addEventListener("click", noPanic);
    buttonTwo.addEventListener("click", incorrectAction);
}
function incorrectBonfire() {
    goTest.textContent = "ЭТО НЕВЕРНЫЙ ОТВЕТ!";
    image.setAttribute("src", "https://profilaktika.net/upload/iblock/8cc/8cc98304b6eddb93789804b5f97f40f5.jpg");
    text.textContent = "ЭТОГО НЕ ДОСТАТОЧНО! ВЕТЕР МОЖЕТ РАЗНЕСТИ УГЛИ И РАЗДУТЬ ИХ ВНОВЬ";

    goTest.style = "display: block";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}
function noPanic() {
    image.setAttribute("src", "https://cityblank.ru/upload/iblock/475/47540aef794e8b5ae0f5107b471e2b01.png");
    text.textContent = "ПОЗДРАВЛЯЮ! ТЕСТ ПРОЙДЕН!";

    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}
function incorrectAction() {
    goTest.textContent = "ЭТО НЕВЕРНЫЙ ОТВЕТ!";
    image.setAttribute("src", "https://cdn.leroymerlin.ru/lmru/image/upload/v1670934966/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/lmcode/BS7PuidlHEi0zp68vjGOHw/90782566.jpg");
    text.textContent = "ПАНИКА ВЫЗЫВАЕТ НЕОСОЗНАННЫЕ ДЕЙСТВИЯ, ПРИВОДЯЩИЕ К СЕРЬЁЗНЫЙ ПОСЛЕДСТВИЯМ!";

    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}