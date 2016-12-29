
export default function ($scope, $projects, $location) {
    $scope.submit = () => {
        const data = new FormData(document.getElementById('project-form'));
        $projects.create(data).then(() => {
            $location.url('/');
        })
    };
    $scope.elem = {};
}