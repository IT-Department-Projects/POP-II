function init(){
	setTimeout(function(){
		$('.home-text').css({'margin-top': '0', 'opacity': '1'});
		$('.navblocks').css({'margin-top': '0', 'opacity': '1'});
		$('.container').css({'margin-top': '0', 'opacity': '1'});
		$('.materialboxed').materialbox();
		$('.slider').slider({indicators: false, transition: 1000, interval: 4000});
		$('.slider').slider('start');
	}, 100);
}
var url = 'https://script.google.com/macros/s/AKfycbytrKHv5A3eUMBuN-SwT0o8ZBPy05cg-4mTQULBVjlAhb2he18/exec';

function validateEmail(email) {
    var x = email;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        return false;
    }
    return true
}

function sendMail(){
	var name = $('#name').val();
	var email = $('#email').val();
	var msg = $('#msg').val();
	if(name.lenght==0 || email.lenght==0 || msg.length==0){
		Materialize.toast("Please fill all the details!", 3000 );
		return;
	}
	if(!validateEmail(email)){
		Materialize.toast("Please give valid email!", 3000 );
		return;
	}
	var body = "Name: "+name+"\n";
	body += "Email: "+email+"\n";
	body += "Message: \n"+msg;
	console.log(body);
	$('#send').addClass('disabled');
	$('.sending-mail').css('opacity', 1);
	console.log("Sending Get request");
	var request = $.ajax({
		crossDomain: true,
		url: url,
		method: "GET",
		data: {sub:"Contact", body: body, callback: "ctrlq"},
		dataType: "jsonp",
		jsonp: false,
		cache: true
	});
}


function ctrlq(e) {
    console.log(e);
    $('#send').removeClass('disabled');
	$('.sending-mail').css('opacity', 0);
	$('#name').val("");
	$('#email').val("");
	$('#msg').val("");
	Materialize.toast("Thanks for contacting us, we will get to you soon :)", 3000 );
}