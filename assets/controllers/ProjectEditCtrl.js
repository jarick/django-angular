
export default function ($scope, $projects, $location, elem) {
    $scope.elem = elem.data;
    $scope.submit = () => {
        const data = new FormData(document.getElementById('project-form'));
        $projects.edit($scope.elem.pk, data).then(() => {
            $location.url('/');
        })
    }
}