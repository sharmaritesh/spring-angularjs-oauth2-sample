$(document).ready(function() {

	$('#updatePwdForm').submit(function() {
		var pass = validatePwdForm();
	    if(pass == false){
	        return false;
	    }
	    return true;
	});
});

function validatePwdForm() {
	var oldPwd = $('#oldPwd').val();
	if (oldPwd == null || oldPwd.length < 1) {
		alert("Please provide old password");
		$('#oldPwd').focus();
		return false;
	}
	
	var newPwd = $('#newPwd').val();
	if (newPwd == null || newPwd.length < 1) {
		alert("Please provide new password");
		$('#newPwd').focus();
		return false;
	}
	var regex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;
	if(!regex.test(newPwd)) {
		alert("New password should contain \n\n1.one digit \n2.one lowercase character \n3.one uppercase character \n4.one special symbol @#$% \n5.length 6-20");
		$('#newPwd').focus();
		//return false;
	}
	
	var confirmPwd = $('#confirmPwd').val();
	if (confirmPwd == null || confirmPwd.length < 1) {
		alert("Please confirm new password");
		$('#confirmPwd').focus();
		return false;
	}
	if (newPwd != confirmPwd) {
		alert("New and confirm password should be same");
		$('#confirmPwd').focus();
		return false;
	}
	
	return true;
}