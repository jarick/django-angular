
export default function ($scope, $routeParams, $tasks, $location, elem) {
    $scope.project = $routeParams.project;
    $scope.elem = elem.data;
    $scope.submit = () => {
        const data = new FormData(document.getElementById('project-form'));
        $tasks.edit($scope.elem.pk, data).then(() => {
            $location.url(`/projects/${$scope.project}/tasks`);
        })
    };
}