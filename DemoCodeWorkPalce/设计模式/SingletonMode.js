/**
 * 单例模式
 * 只被实例化一次，若实例已存在，则返回该对象的引用
 */
var mySingleton=(function(){
    // 保存实例的引用
    var instance;
    
    function init(){
        var privateVar1='privateVar1';
        function privateFun(){
            console.log('i am a private function');
        }
        
        return {
            publicVar1:'publicVar1',
            publicFun:function(){
                console.log('i am a public function');
            },
            getPrivateFunAndVar(){
                privateFun();
                console.log(`privateVar1 is ${privateVar1}`);
            }
        }
    }
    // 返回实例
    return {
        getInstance:function(){
            if(!instance){
                instance=init();
            }
            return instance;
        }
    }
})();

