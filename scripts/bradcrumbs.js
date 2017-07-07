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
/*$(function () {
bindEventToNavigation();
showBreadCrumb();
cutOldBreadCrumbs();
});
function bindEventToNavigation() {
    $.each($("#navigationLinks > li > a"),function (index, element) {
       $(element).click(function () {
           breadcrumbStateSaver($(this).attr('href'),$(this).text());
           showBreadCrumb();
       });
    });

}
function breadcrumbStateSaver(link, text) {
    if (typeof (Storage) != 'undefined'){
        if (sessionStorage.breadcrumb){
            var breadcrumb = sessionStorage.breadcrumb;
            sessionStorage.breadcrumb = breadcrumb + " <span> >> </span>" + "<a href='" + link + "'>" + text + "</a>";

        }
        else {
            sessionStorage.breadcrumb = "<a href='" + link + "'>" + text + "</a>";
        }
    }
}
function showBreadCrumb() {
    $('#breadcrumbs').html(sessionStorage.breadcrumb);
}
function cutOldBreadCrumbs() {
    if ($('#breadcrumbs > a').length > 6) {
        $('#breadcrumbs').find('a').slice(0, $('#breadcrumbs a').length - 4).remove();
        $('#breadcrumbs').find('span').slice(0, $('#breadcrumbs span').length - 3).remove();
    }

}*/
/*$(function () {
    var a = $('#navigationLinks a');
    for(var i =0 ; i < a.length; i++){
        alert($(a[i]).html() + $(a[i]).prop('href'));
    }
    $(a).click(function () {
        var name = $(this).html();
        var path = $(this).prop('href');
        alert(name + path);
        BreadCrumb.add(name,path);
    });
    //BreadCrumb.init();
});

var BreadCrumb = (function() {
    var breadcrumbs = [];

    var a = $('#navigationLinks a');
    for(var i =0 ; i < a.length; i++){
     alert($(a[i]).html() + $(a[i]).prop('href'));
     }
    var navClick = $(a).click(function () {
     var aName = $(this).html();
     var aPath = $(this).prop('href');
     alert(aName + aPath);
     BreadCrumb.add(aName,aPath);
     });
    return {
        init: function () {
            $(a).click(function () {
                var aName = $(this).html();
                var aPath = $(this).prop('href');
                alert(aName + aPath);
                BreadCrumb.add(aName,aPath);
            });
        },
        add: function (name,path) {
            console.log('add');
            var breadcrumb = new Object();
            breadcrumb.path = path;
            breadcrumb.name = name;
            breadcrumbs.push(breadcrumb);
            console.log(breadcrumbs);
            this.check();
            this.print();
        },
        check:function () {
            if(breadcrumbs.length > 2){
                breadcrumbs.slice(0,1);
            }
        },
        print:function () {
            breadcrumbs.forEach(function () {
                $('#breadcrumbs').append($("<a href='#'></a>").addClass('breadcrumb').text(this.name)
                    .attr('href',this.path));
            })
        }
    };
})();*/