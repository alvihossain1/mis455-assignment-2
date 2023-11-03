function submit(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;

    var msg;

    if(name == ""){
        msg = `
        <div class="output red-mark">
            <h2 class="pady-1">Oops! Looks like you've missed some input field to fill up.</h2>
            <h3 class="pady-1"><span class="h-purple">Name</span> field is empty please fill up the necessary field.  <i class="fa-solid fa-xmark"></i> </h3>
        </div>
        `;
    }
    else if(email == ""){
        msg = `
        <div class="output red-mark">
            <h2 class="pady-1">Oops! Looks like you've missed some input field to fill up.</h2>
            <h3 class="pady-1"><span class="h-purple">Email</span> field is empty please fill up the necessary field.  <i class="fa-solid fa-xmark"></i> </h3>
        </div>
        `;
    }
    else if(phone == ""){
        msg = `
        <div class="output red-mark">
            <h2 class="pady-1">Oops! Looks like you've missed some input field to fill up.</h2>
            <h3 class="pady-1"><span class="h-purple">Phone</span> field is empty please fill up the necessary field.  <i class="fa-solid fa-xmark"></i> </h3>
        </div>
        `;
    }
    else if(dob == ""){
        msg = `
        <div class="output red-mark">
            <h2 class="pady-1">Oops! Looks like you've missed some input field to fill up.</h2>
            <h3 class="pady-1"><span class="h-purple">Date-of-birth</span> field is empty please fill up the necessary field.  <i class="fa-solid fa-xmark"></i> </h3>
        </div>
        `;
    }
    else{
        msg = `
        <div class="output">
            <h2 class="pady-1">Thank You! <span class="h-gold">${name}</span>, for signing Up and being with us.</h2>
            <h3 class="pady-1">Your email: <span class="h-crimson">${email}</span>  |  your mobile number: <span class="h-purple">${phone}</span>  |  and your Date-of-birth: <span class="h-seagreen">${dob}</span> has been recorded successfully!  <i class="fa-solid fa-check"></i> </h3>
        </div>
        `;

    }

    document.getElementById("generate").innerHTML = msg;



}