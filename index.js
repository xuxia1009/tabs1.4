var app = angular.module("app", []);
app.directive("parent", function() {
    return {
        restrict: "EA",
        replace: true,
        controller: function($scope) {
            $scope.panes = ["one", "two"];
            $scope.arr = [];
            this.add = function(scop) {
                $scope.arr.push(scop);
                scop.select = function(ind) {
                    var pane = document.querySelectorAll(".tab-pane");
                    [...pane].forEach(function(item, index) {
                        if (ind === index) {
                            angular.element(item).addClass("active");
                        } else {
                            angular.element(item).removeClass("active");
                        }
                    })
                };
            }
        }
    }
});
app.directive("child1", function() {
    return {
        restrict: "EA",
        replace: true,
        templateUrl: "./tab.html",
        scope: {
            panes: "="
        },
        require: "?^parent",
        controller: function($scope) {
            //console.log($scope.panes);
        },
        link: function(scope, element, attrs, parentCtrl) {
            scope.name = "xuxia";
            parentCtrl.add(scope);
        }
    }
})