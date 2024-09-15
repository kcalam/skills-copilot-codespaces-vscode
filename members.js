function skillsMember () {
  return {
    restrict: 'E',
    templateUrl: 'members.html',
    scope: {
      member: '='
    },
    controller: function ($scope) {
      $scope.skills = $scope.member.skills;
    }
  };
}