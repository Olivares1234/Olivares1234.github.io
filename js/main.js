    // typing text animation script
var typed = new Typed(".typing", {
    strings: ["Web Designer", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("gallery")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})

function sendEmail() {
    var name = $("#name");
    var email = $("#email");
    var subject = $("#subject");
    var body = $("#body");

    if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(body)) {
        $.ajax({
            url: 'sendEmail.php',
            method: 'POST',
            dataType: 'json',
            data: {
                name: name.val(),
                email: email.val(),
                subject: subject.val(),
                body: body.val()
            },
            success: function(response) {
                $('#myForm')[0].reset();
                $('.faded').text("Message Sent Successfully!");
                $('.alert').show();
                setTimeout(function() {
                    $('.alert').fadeOut('fast');
                    $('.faded').fadeOut('fast');
                }, 3000);


            }
        });
    }
}

function isNotEmpty(caller) {
    if (caller.val() == "") {
        caller.css('border', '1px solid red');
        return false;
    } else
        caller.css('border', '');

    return true;
}

$(document).ready(function() {
    $(document).on('submit', '#myForm', function() {
        return false;
    });

}); 



