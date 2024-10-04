let sAPI;

//  document events
$(document).ready(function() {
   //  gather api
   sAPI = $('#api').val() ? $('#api').val() : 'http://localhost:3000/api/fema/nfhl';

   showAlert('success', sAPI);
});

//  utilities
const showAlert = function(type, message) {
   //  success, danger, warning, info
   let alert = document.getElementById('alert');

   let contents = document.createElement('div');
   contents.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

   alert.append(contents);
};
