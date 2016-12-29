
export default function ($scope, $routeParams, $tasks, $location) {
    $scope.project = $routeParams.project;
    $scope.submit = () => {
        const data = new FormData(document.getElementById('project-form'));
        $tasks.create(data).then(() => {
            $location.url(`/projects/${$scope.project}/tasks`);
        })
    };
    $scope.elem = {};
}