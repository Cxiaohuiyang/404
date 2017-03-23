# directive

## ng-module
自定义指令通过require属性来指定查找依赖指令的controller，并传入link函数中进行调用
```
.directive("test",function(){
    return {
        ...
        require:'ngModel',
        link:function(scope,elem,attr,ngModelCtr){
            ...
            ngModel.$setViewValue(node.id)
            
            function parse(value) {
                //m.val 变化时候执行，不return则不对m.val赋值
                if (value) {
                    return value.toLowerCase();
                }
             }
             ngModelController.$parsers.push(parse);

        }
        ...
    }
})
```
使用自定义指令
```
<test ng-model="m.val"></test>
```
你用 `ngModel.$setViewValue(node.id) ` 对` m.val `赋值，实现双向绑定
`ngModelController`包含有`$formatters`和`$parsers`数组,会在每次更新数据绑定是调用。
>[angular ngModelController 文档](https://docs.angularjs.org/api/ng/type/ngModel.NgModelController)


## scope
* >默认共享scope
* >scope: true – 这时 directive 会创建一个新的子 scope 并继承父 scope `注意覆盖父属性`


#### 隔离`scope :{}`
```
.directive("test",function(){
    return {
        ...
        scope:{
            m:'&',
            onClick:'='
            text:'@',
            asName:'=rename'
        }
        ....
    }
})
```
* @ 结果总是一个字符串。`绑定是单向的`
* & 提供一种方式执行一个表达式在父 scope 的上下文中。如果没有指定 attr 名称，则属性名称为相同的本地名称。
* = 通过 directive 的 attr 属性的值在局部 scope 的属性和父 scope 属性名之间`建立双向绑定`。

```
 app.controller("myController", function ($scope) {
        $scope.value = "hello world";
        $scope.click = function () {
            $scope.value = Math.random();
        };
    }).directive("test", function () {
        return {
            scope: {
                action: "&"
            },
            template: '<input type="button" value="在directive中执行父scope定义的方法" ng-click="action()"/>'
        }
    })
```
```
   <div test action="click()"></div>
```

