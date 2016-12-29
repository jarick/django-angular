
export default function ($http) {
    this.getList = (page=1) => $http({
        method: 'GET',
        url: `/api/v1/projects.json?page=${page}`
    });
    this.create = (data) => $http({
        method: 'POST',
        url: '/api/v1/projects.json',
        data: data,
        headers: { 'Content-Type': undefined},
        transformRequest: angular.identity
    });
    this.get = (id) => $http({
        method: 'GET',
        url: `/api/v1/projects/${id}.json`
    });
    this.edit = (id, data) => $http({
        method: 'PUT',
        url: `/api/v1/projects/${id}.json`,
        data: data,
        headers: { 'Content-Type': undefined},
        transformRequest: angular.identity
    });
    this.del = (id) => $http({
        method: 'DELETE',
        url: `/api/v1/projects/${id}.json`
    });

}