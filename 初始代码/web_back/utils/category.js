/**
 * 文章类别
 */

var category = {
    //显示获取
    show: function (callBack) {

        //    $.ajax({
        //        url: 'http://localhost:8000/admin/category_search',
        //        type: 'get',
        //        success: function(res){
        //            callBack(res);
        //        }
        //    });
        $.get(URLIST.category_show, function (res) {
            callBack(res);
        });
    },
    //删除
    del: function (id, callBack) {
        $.post(URLIST.category_delete, { id: id }, function (res) {
            callBack(res);
        });
    },

    //添加
    add: function (name, slug, callBack) {
        $.post(URLIST.category_add, { name: name, slug: slug }, function (res) {
            callBack(res);
        });
    },


    //编辑
    edit: function (id, name, slug, callBack) {
        $.post(URLIST.category_edit, { name: name, id: id, slug: slug }, function (res) {
            callBack(res);
        })
    }



}