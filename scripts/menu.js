/**
 * Created by Nazar on 22.06.2017.
 */
/*window.onload = function(){
    var locationPage;
    function getPath() {
    var x = location.pathname;
    alert(x);
    locationPage= x;

}
getPath();
function checkPage() {
    if (locationPage == "/Restaurant/index.html"){
        alert("Main Page");
        var mainPage = $('#breadMain');
        mainPage.style.color= "black";
        }
    if (locationPage == "/Restaurant/menu.html"){
        alert("Menu");
        var menu = document.getElementById("breadMenu");
        menu.style.color = "black";
    }
}
checkPage();

}*/
$(function () {
    $(".nav-bar ul li a").click(function () {
        this.css("background-color:yellow");
    })
})