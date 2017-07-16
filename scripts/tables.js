/**
 * Created by Nazar on 09.07.2017.
 */
$(function () {
Tables.fill();


});
var Tables = (function () {
    var tablesArray = [];

    return {
    fill:function () {
        $.ajax({
            type:"GET",
            url:'http://localhost:58993/api/values',
            dataType: 'json',
            success:onSuccess,
            error:onError
        });
        function onSuccess(json) {
            tablesArray = json;
            var tablesHtml ='';
            for (var i = 0; i < tablesArray.length; i++){
                if(tablesArray[i].Free){
                 var table =  '<div  id="table' + (i + 1)  + '" class="table">' + '<h4>'+ 'Table '+ tablesArray[i].Id
                     +'</h4>' + '<p>Ordered</p>'+ '<a href="#order"> <img src="../Restaurant/images/table_2.png"> </a>'
                     + '</div>';
                }
                 else {
                    table =  '<div  id="table' + (i + 1)  + '" class=" table ordered" >' + '<h4>'+ 'Table '
                        + tablesArray[i].Id +'</h4>' + '<p>Ordered</p>'
                        + '<a href="#order"> <img src="../Restaurant/images/table_2.png"> </a>' + '</div>';
                }
                     tablesHtml+=table;

            }
            //alert(tablesHtml);
            $('.tables').append(tablesHtml);
            //console.log($('.table')[3].id);
            $(".table a").click(function () {
                for (var j = 0;j < tablesArray.length; j++ ){
                    if (tablesArray[j].Id == $(this).parent().attr('id').slice(5)){
                        $('#idTable').val(tablesArray[j].Id);
                        $('#orderTable').val(tablesArray[j].Free);
                        break;
                    }
                }
                $("#order").css("display","block");
                $("#order").click(function () {
                    for (var k = 0; k < tablesArray.length; k++){
                        if(tablesArray[k].Id == $("#idTable").val()){
                            if (tablesArray[k].Free == true){
                            tablesArray[k].Free = false;
                            $.ajax({
                                type:"PUT",
                                url:'http://localhost:58993/api/values',
                                data:tablesArray[k],
                                success:function (data) {
                                    alert("You booked the table ");
                                   // console.log(tablesArray[k]);
                                       /* if (tablesArray[k].Id == $('.table')[l].attr('id').slice(5)){
                                            $('.table')[l].addClass('ordered');
                                        }*/
                                   /* $('.table').each(function (m) {
                                        if ($(this).attr('id').slice(5) == tablesArray[k]){
                                            $(this).addClass("ordered");
                                        }
                                    });*/

                                    alert($('.table').length);
                                },
                                error:function (error) {
                                    console.log(error);
                                }
                            });
                            $('#table'+$("#idTable").val()).addClass("ordered");
                            break;
                            }
                            else {
                                alert("This table has been already booked! Please, choose another one!");
                            }
                        }
                    }
                    //console.log(tablesArray);

                });
            });
            //var obj = json;
            //a = obj;
           // console.log(obj);
        };
        function onError(error) {
            console.log(error);
        }
    }
    };
}());
//var a;