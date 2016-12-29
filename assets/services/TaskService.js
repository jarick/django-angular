
export default function ($http) {
     this.getList = (project, page=1) => $http({
        method: 'GET',
        url: `/api/v1/tasks.json?page=${page}&project=${project}`
    });
    this.create = (data) => $http({
        method: 'POST',
        url: '/api/v1/tasks.json',
        data: data,
        headers: { 'Content-Type': undefined},
        transformRequest: angular.identity
    });
    this.get = (id) => $http({
        method: 'GET',
        url: `/api/v1/tasks/${id}.json`
    });
    this.edit = (id, data) => $http({
        method: 'PUT',
        url: `/api/v1/tasks/${id}.json`,
        data: data,
        headers: { 'Content-Type': undefined},
        transformRequest: angular.identity
    });
    this.del = (id) => $http({
        method: 'DELETE',
        url: `/api/v1/tasks/${id}.json`
    });
}