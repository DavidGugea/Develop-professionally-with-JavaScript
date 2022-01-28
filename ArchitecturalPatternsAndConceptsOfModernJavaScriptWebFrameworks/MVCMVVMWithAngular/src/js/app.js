const angular = require("angularjs");

const app = angular.module("albums", []);

// Controller
app.controller("AlbumController", ["$scope", function($scope) {
    // Model
    const albums = [
        {title: "Title1", artist: "Artist1"},
        {title: "Title2", artist: "Artist2"},
        {title: "Title3", artist: "Artist3"},
        {title: "Title4", artist: "Artist4"}
    ];

    // ViewModel
    $scope.albums = albums;
    $scope.printAlbums = function() {
        $scope.albums.forEach(function(album) {
            console.log(album);
        });
    }
}]);