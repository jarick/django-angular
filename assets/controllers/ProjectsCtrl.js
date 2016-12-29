
export default function ($scope, projects, $routeParams, $projects, $route) {
    const pageStr = $routeParams.page;
    const page = (parseInt(pageStr) > 0) ? parseInt(pageStr) : 1;
    $scope.count = projects.data.count;
    $scope.next = (projects.data.next) ? page + 1 : null;
    $scope.previous = (projects.data.previous) ? page - 1 : null;
    $scope.list = projects.data.results;
    $scope.del = (id) => {
        $projects.del(id).then(() => {
            $route.reload();
        })
    }
}