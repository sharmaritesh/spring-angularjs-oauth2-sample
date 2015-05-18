$(document).ready(function() {
	// why after document is ready? Id is not available so let Thymeleaf do its
	// work and then add scipts.

	// lookup spectrums for currently selected lamp
	lookupSpectrums();

	//validateForm();
	
	// lookup spectrums when a lamp is selected
	$('#lamp').on("change", function() {
		lookupSpectrums();
	});
	
//	find total number of lamps
//	$('#hLampCount').on("blur", function() {
//		validateAndPopulateTotalLampsCount();
//	});
//	$('#vLampCount').on("blur", function() {
//		validateAndPopulateTotalLampsCount();
//	});
	
	if($('#manualEdgeConfiguration').is(":checked")) {
		$("#edgeX").prop('disabled', false);
		$("#edgeY").prop('disabled', false);
	} else {
		$("#edgeX").prop('disabled', true);
		$("#edgeY").prop('disabled', true);
	}
	$('#manualEdgeConfiguration').on("change", function() {
		if($(this).is(":checked")) {
			 $("#edgeX").prop('disabled', false);
			 $("#edgeY").prop('disabled', false);
		} else {
			$("#edgeX").prop('disabled', true);
			$("#edgeY").prop('disabled', true);
		}
	});
	
	//while waiting for calculation
	$('#calculateForm').submit(function() {
	    var pass = validateForm();
	    if(pass == false){
	        return false;
	    }
	    $(".loaderImage").show("slow");
	    return true;
	});
});

function validateForm() {
	var areaSizeX = $('#horizontalArea').val();
	var areaSizeY = $('#verticalArea').val();
	
//	if ((areaSizeX == null || areaSizeY == null) || (areaSizeX * areaSizeX) <= 49) {
//		alert("Total area cannot be less then 49 m2.");
//		return false;
//	}
	if (areaSizeX == null || areaSizeX < 1 || areaSizeY == null || areaSizeY < 1) {
		alert("Area dimensions cannot be zero or negative");
		$('#horizontalArea').focus();
		return false;
	}
	
//	var areLampsValid = validateAndPopulateTotalLampsCount();
//	if (areLampsValid == false) {
//		return false;
//	}
	var hLampCount = $('#hLampCount').val();
	if (hLampCount == null || hLampCount < 1) {
		alert("Atleast 1 lamp is required horizontally");
		$('#hLampCount').focus();
		return false;
	}
	var vLampCount = $('#vLampCount').val();
	if (vLampCount == null || vLampCount < 1) {
		alert("Atleast 1 lamp is required vertically");
		$('#vLampCount').focus();
		return false;
	}
	
	var luminarDistance = $('#luminarDistance').val();
	if (luminarDistance == null || luminarDistance < 0 || luminarDistance > 20) {
		alert("Height should be greater than 0 and less than 20");
		$('#luminarDistance').focus();
		return false;
	}	
	
	var reflectiveIndex = $('#wallReflectionCoefficient').val();
	if (reflectiveIndex == null || reflectiveIndex < 0 || reflectiveIndex > 1) {
		alert("Please enter reflection coefficient between 0-1");
		$('#wallReflectionCoefficient').focus();
		return false;
	}
	
//	var custName = $('#customerName').val();
//	if (custName == null || custName.length == 0) {
//		alert("Please enter customer name");
//		return false;
//	}
	
//	custName = $('#representative').val();
//	if (custName == null || custName.length == 0) {
//		alert("Please enter Valoya Representative");
//		return false;
//	}
	
//	custName = $('#targetPower').val();
//	if (custName == null || custName < 1) {
//		alert("Please enter Target Power");
//		$('#targetPower').focus();
//		return false;
//	}
	
	return true;
}

function validateAndPopulateTotalLampsCount() {
	var hLCount = $('#hLampCount').val();
	var vLCount = $('#vLampCount').val();
	var totalLamps = hLCount * vLCount;
	if (totalLamps == 0) {
		alert("Zero lamps entered. Please enter atleast one lamp.");
		return false;
	}
	if (totalLamps > 200) {
		alert("Total lamps cannot be greater than 200");
		$('#hLampCount').val(0).html(0);
		$('#vLampCount').val(0).html(0);
		return false;
	}
	$('#totalLamps').val(hLCount * vLCount).html(hLCount * vLCount);
	return true;
}

function lookupSpectrums() {
	$.ajax({
		type : "GET",
		url : "/lamp/" + $("#lamp").val(),
		async : false,
		success : function(response) {
			var spectrumList = $('#spectrum');
			spectrumList.empty();
			$.each(response, function(index, value) {
				spectrumList.append($('<option></option>').val(value).html(
						value));
			});
		},
		error : function(xhr, status, error) {
			var err = eval("(" + xhr.responseText + ")");
			alert('Error occured while looking up lamp : ' + err.Message);
		}
	});
}