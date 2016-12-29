const MODULE_NAME = "myApp";
import "./style.css";
import ProjectsCtrl from "./controllers/ProjectsCtrl";
import ProjectCreateCtrl from "./controllers/ProjectCreateCtrl";
import ProjectEditCtrl from "./controllers/ProjectEditCtrl";
import TaskCreateCtrl from "./controllers/TaskCreateCtrl";
import TasksCtrl from "./controllers/TasksCtrl";
import TaskEditCtrl from "./controllers/TaskEditCtrl";
import TaskService from "./services/TaskService";
import ProjectService from "./services/ProjectService";

const app = angular.module(MODULE_NAME, ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
	    .when("/", {
	        templateUrl : "/projects",
          	controller : "ProjectsCtrl",
            resolve: {
                projects: function($projects) {
                    return $projects.getList(1);
                }
            }
	    })
        .when("/page/:page", {
	        templateUrl : "/projects",
          	controller : "ProjectsCtrl",
            resolve: {
                projects: function($projects, $route) {
                    const pageStr = $route.current.params.page;
                    const page = (parseInt(pageStr) > 0) ? parseInt(pageStr) : 1;
                    return $projects.getList(page);
                }
            }
	    })
		.when("/create", {
			templateUrl : "/project_edit",
          	controller : "ProjectCreateCtrl"
	    })
	    .when("/edit/:project", {
	        templateUrl : "/project_edit",
          	controller : "ProjectEditCtrl",
            resolve: {
                elem: function($projects, $route) {
                    const project = $route.current.params.project;
                    return $projects.get(project);
                }
            }
	    })
        .when("/projects/:project/tasks", {
	        templateUrl : "/tasks",
          	controller : "TasksCtrl",
            resolve: {
                tasks: function($tasks, $route, $location) {
                    const projectStr = $route.current.params.project;
                    const project = (parseInt(projectStr) > 0) ? parseInt(projectStr) : null;
                    if (!project) {
                        $location.url('/#!/');
                    }
                    return $tasks.getList(project, 1);
                }
            }
	    })
        .when("/projects/:project/tasks/page/:page", {
	        templateUrl : "/tasks",
          	controller : "TasksCtrl",
            resolve: {
                tasks: function($tasks, $route, $location) {
                    const projectStr = $route.current.params.project;
                    const project = (parseInt(projectStr) > 0) ? parseInt(projectStr) : null;
                    if (!project) {
                        $location.url('/#!/');
                    }
                    const pageStr = $route.current.params.page;
                    const page = (parseInt(pageStr) > 0) ? parseInt(pageStr) : 1;
                    return $tasks.getList(project, page);
                }
            }
	    })
		.when("/projects/:project/create", {
			templateUrl : "/task_edit",
          	controller : "TaskCreateCtrl"
	    })
	    .when("/projects/:project/edit/:task", {
	        templateUrl : "/task_edit",
          	controller : "TaskEditCtrl",
            resolve: {
                elem: function($tasks, $route) {
                    const task = $route.current.params.task;
                    return $tasks.get(task);
                }
            }
	    })
		.otherwise({redirectTo:'/'});
}).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});
app.service("$tasks", TaskService);
app.service("$projects", ProjectService);
app.controller("ProjectsCtrl", ProjectsCtrl);
app.controller("ProjectCreateCtrl", ProjectCreateCtrl);
app.controller("ProjectEditCtrl", ProjectEditCtrl);
app.controller("TasksCtrl", TasksCtrl);
app.controller("TaskCreateCtrl", TaskCreateCtrl);
app.controller("TaskEditCtrl", TaskEditCtrl);

export default MODULE_NAME;