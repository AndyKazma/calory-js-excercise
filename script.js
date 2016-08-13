function onSliderChanged() {
	var pval = document.getElementById("ProteinId").value;
	var fval = document.getElementById("FatId").value;
	var cval = document.getElementById("CarboId").value;
	var element = document.getElementById("ResultId");

	document.getElementById("ProteinpId").innerHTML= pval + " g";
	document.getElementById("FatpId").innerHTML= fval + " g";
	document.getElementById("CarbopId").innerHTML= cval + " g";

	var total = (pval*4) + (fval*9) + (cval*4);
	document.getElementById("ResultId").innerHTML= total;

	if (total < 601) {
			element.style.color = "gold";		
	}
	else if (total <= 1200) {
			element.style.color = "orange";		
	}
	else if (total > 1200) {
			element.style.color = "red";		
	}
}