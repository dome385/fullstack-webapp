


function notify (msg, msgtype) {
  notie.alert({
    type: msgtype,
    text: msg,
  })
}

document.getElementById("colorButton").addEventListener("click", function () {
  notify("This is my message", "success")
})


const elem = document.getElementById('reservation-dates');
    const rangePicker = new DateRangePicker(elem, {
        format: "dd-mm-yyyy",
    });



(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      let forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


