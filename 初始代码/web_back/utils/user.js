var user = {
    /**
     * 用户登录
     * @param {*} userName 用户名
     * @param {*} password 密码
     * @param {*} callback 回调函数
     */
    login:function(userName, password, callBack){
     $.post(
         URLIST.user_login,
         {
           user_name: userName,
           password: password
         },
         function(res){
             //res就是响应体,是由$.post方法决定
             callBack(res);
         }
     );
    },

    
    /**
     * 用户退出
     * @param {*} callBack
     */
    logout: function(callBack) {
        $.post(URLIST.user_logout,function(res){
            callBack(res);
        });
    },





    getInfo: function(callBack){
        $.get(URLIST.user_getInfo,function(res){
            callBack(res);
        });
    }
} ;