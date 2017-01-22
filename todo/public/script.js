
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

    //ajax logout
    $("#logout_btn").click(function(){
        var data = "";
        $.ajax({
			method: "GET",
			url: "/ajaxlogout",
            data
		}).done(function(msg) {
            if (msg == "success"){
                window.location.href = "/";
            } else {
                alert('Sikertelen kijelentkezés!');
            }
		}).fail(function(error) {
            console.log(error.responseText);
        }).catch(function(error) {
            console.log(error.responseText);
        });
        return false;
    })

    //ajax reg usercheck
    $("#regform").submit(function(){
        var username = $("#regform #username").val();
        var email = $("#regform #email").val();
        var password = $("#regform #password").val();
        var data = "username=" + username + "&email=" + email + "&password=" + password;

        $.ajax({
			method: "POST",
			url: "/ajaxregcheck",
            data,
            headers
		}).done(function(msg) {
            if (msg == "fail"){
                alert('Sikertelen regisztráció, ellenőrizd az adatokat!');
                return false;
            } else {
                window.location.href = "/";
            }
		}).fail(function(error) {
            console.log(error.responseText);
        }).catch(function(error) {
            console.log(error.responseText);
        });

        return false;
    });



    //ajax changepass
    $("#changepass").submit(function(){
        var password = $("#changepass #password").val();
        var data = "password=" + password;

        $.ajax({
			method: "POST",
			url: "/ajaxchangepass",
            data,
            headers
		}).done(function(msg) {
            if (msg == "fail"){
                alert('Sikertelen módosítás; minimum 4 karakter!');
            } else {
               alert("Sikeres módosítás!");
               $("#changepass #password").val("");
            }
		}).fail(function(error) {
            console.log(error.responseText);
        }).catch(function(error) {
            console.log(error.responseText);
        });

        return false;
    });

    //ajax del job
    $(".ajax_del_job").click(function(){
        var btn = $(this);
        var id = btn.data('id');
        var row = btn.parent().parent();
        var data = "";
        $.ajax({
			method: "GET",
			url: "/ajaxdeljob/" + id,
            data
		}).done(function(msg) {
            if (msg == "success"){
                //alert("Sikeres törlés!");
                row.remove();
            } else {
                alert('Sikertelen törlés!');
            }
		}).fail(function(error) {
            console.log(error.responseText);
        }).catch(function(error) {
            console.log(error.responseText);
        });
        return false;
    })

});

