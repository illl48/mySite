app.controller('aboutmeController', ['$scope','$window', '$document','mFac',function($scope,$window,$document, mFac) {

$scope.myName='Edward Lai';
$scope.myNote='Currently looking for an entry level position in the area of software/web development.';    
$scope.linkedinlink='https://www.linkedin.com/in/edlai48';    
$scope.email='edwardlai3582@gmail.com'; 
$scope.resume='./images/siteuse/resume_EDL.pdf';
    
$scope.gallery=[
    {image: './images/siteuse/withpete.jpg', description: '# Pete Rock & me'},
    {image: './images/siteuse/NABLER.jpg', description: '# Toy I got recently!'},
    {image: './images/siteuse/mocha.jpg', description: '# Mocha lol'},
];

$scope.imagenumber=$scope.gallery.length;    
$scope.selected={value: 0};
//$scope.frontp='';    
$scope.showform=false;
 $scope.esubmitted=false;
$scope.frontp=$scope.gallery[0].image;
$scope.frontdescription=$scope.gallery[0].description;    
$scope.backp=$scope.gallery[0].image;
$scope.backdescription=$scope.gallery[0].description;     
$scope.currentside=0; //0 front, 1 back  what we see
$scope.currentnumber=0;    

$scope.opentheater=function(){
    $scope.$broadcast('openT');
}    

//$scope.feedback=mFac.feedback;

$scope.div_hide=function(){
  $scope.showform=false; 
  $scope.name='';
  $scope.mailaddress='';
  $scope.message='';
  $scope.esubmitted=false;    
}     
    
$scope.sendmail=function() {
  $scope.esubmitted = true;
  if($scope.name==='' || $scope.mailaddress === ''|| $scope.message === ''
     ||!$scope.name||!$scope.mailaddress||!$scope.message) { 
    //alert("form not complete");  
    return; 
  }  
  mFac.send({
  name: $scope.name,
  mailaddress: $scope.mailaddress,
  message: $scope.message
  });
  $scope.div_hide();    
} 

$scope.$on('picchange', function (event, data) {
    console.log('On: '+data);
    if(data===$scope.currentnumber) return;
    else{
      $scope.$apply(function () {
        if($scope.currentside==0){
          $scope.backp=$scope.gallery[data].image;
          $scope.backdescription=$scope.gallery[data].description;
          $scope.currentside=1;
          $scope.currentnumber=data;     
          $document[0].querySelector('#fml').classList.toggle('hover'); 
        }
        else{
          $scope.frontp=$scope.gallery[data].image;
          $scope.frontdescription=$scope.gallery[data].description;
          $scope.currentside=0;
          $scope.currentnumber=data;     
          $document[0].querySelector('#fml').classList.toggle('hover'); 
        }     
      }); 
    } 
  });    
    
}]);