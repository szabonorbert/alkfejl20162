
$(document).ready(function(){
    
    const headers = {
        'csrf-token': $('[name="_csrf"]').val(),
    }
    
    // ajax login

    $("#loginform").submit(function(){
        
        var email = $("#loginform #email").val();
        var password = $("#loginform #password").val();
        var data = 'email=' + email + "&password=" + password;

        $.ajax({
			method: "POST",
			url: "/ajaxlogin",
            data,
            headers
		}).done(function(msg) {
            if (msg == "success"){
                window.location.href = "/";
            } else {
                alert('Sikertelen bejelentkezés!');
            }
		}).fail(function(error) {
            console.log(error.responseText);
        }).catch(function(error) {
            console.log(error.responseText);
        });
        return false;
    });



});

