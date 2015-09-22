studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  $scope.students = [];

  $scope.addStudent = function() {
    $scope.students.push({ name: $scope.studentName });
    $scope.studentName = null;
  };

  $scope.deleteStudent = function(student) {
    // You can't delete Brentwood Davis
    if (student.name !== "Brentwood Davis") {
      var index = $scope.students.indexOf(student);
      $scope.students.splice(index, 1);
    }
  };

});
