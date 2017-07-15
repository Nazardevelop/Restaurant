/**
 * Created by Nazar on 09.07.2017.
 */
/* var CreateTable = (function() {
    var tables = [];

    function onSuccess(json) {
        if ($(json).text()){
            alert('hi');
        }
        else {
            alert(tables);
            var str = JSON.stringify(tables);
            $.post('tables.json',str);
            alert(str);
        }
    };
    function onError(error) {
        return error;
    };

    return {
        add:function () {
            alert("dfs");
            var tablesDiv = $('.tables div');
           console.log(tablesDiv.length);
           for (var i = 0; i < tablesDiv.length; i++){
               var newTable = new Object();
               newTable.id = tablesDiv[i].id;
               newTable.free = true;
               tables.push(newTable);
           }
           console.log(tables);
            var str = JSON.stringify(tables);
            alert(str);
            $.ajax({
                type:"GET",
                url:"tables.json",
                success:onSuccess,
                error:onError()
            });
          // a = tablesDiv;
        }
        chekJson: function () {
            $.get("tables.json",function () {
                if (this.find('tables')){
                    alert("not empty");
                }
                else {
                    $.post("tables.json",tables,function () {
                        alert('tables');
                    } )
                }
            })
        }
    };
}());
$(function () {
    CreateTable.add();
   $.get("tables.json",function () {
        if (this.find('tables')){
            alert("not empty");
        }
        else {
            $.push
        }
    })
});
var a;*/
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
            var obj = json;
            a = obj;
            console.log(obj)
        };
        function onError(error) {
            console.log(error);
        }
    }
    };
}());
var a;