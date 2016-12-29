
export default function ($scope, tasks, $routeParams, $tasks, $route) {
    const pageStr = $routeParams.page;
    const page = (parseInt(pageStr) > 0) ? parseInt(pageStr) : 1;
    $scope.project = $routeParams.project;
    $scope.count = tasks.data.count;
    $scope.next = (tasks.data.next) ? page + 1 : null;
    $scope.previous = (tasks.data.previous) ? page - 1 : null;
    $scope.list = tasks.data.results;
    $scope.del = (id) => {
        $tasks.del(id).then(() => {
            $route.reload();
        })
    }
}