
jQuery(document).ready(function(){
	
	/* hq marking list auto filled */
	
	var roaward_enterpoint=jQuery('#edit-field-enter-points-und-0-value').val();
	jQuery("#edit-field-enter-points-hq-und-0-value").val(roaward_enterpoint);
	var roaward_frequency=jQuery('#edit-field-frequency-of-participation-und-0-value').val();
	jQuery("#edit-field-frequency-of-partici-hq-und-0-value").val(roaward_frequency);
	var roaward_quantitative=jQuery('#edit-field-quantitative-results-und-0-value').val();
	jQuery("#edit-field-quantitative-and-qual-hq-und-0-value").val(roaward_quantitative);
	var roaward_innovative=jQuery('#edit-field-innovative-experiments-pro-und-0-value').val();
	jQuery("#edit-field-innovation-and-exper-hq-und-0-value").val(roaward_innovative);
	var roaward_recognition=jQuery('#edit-field-recognition-und-0-value').val();
	jQuery("#edit-field-recognition-hq-und-0-value").val(roaward_recognition);
	
	var roaward_publication=jQuery('#edit-field-publication-research-paper-und-0-value').val();
	jQuery("#edit-field-publication-research-pa-hq-und-0-value").val(roaward_publication);
	
	
	
	
	
	
	
	/* hq marking list auto filled */
	
	/*award page epployeecode */
	 jQuery(".eligible").live("click",function(){
		jQuery('.group-eligible-emp-group').show();			
		jQuery('.vertical-tabs').show();			
		jQuery('.form-actions').show();			
		jQuery('.form-actions').show();			
		var emp_name = jQuery('.emp-name').text();			
		jQuery('#edit-field-awards-code-und-0-value').val(emp_name);	
		jQuery('#edit-field-awards-code-und-0-value').attr('readonly', 'readonly');
		//var emp_days = jQuery(".emp-days").text();
		//jQuery('#edit-field-total-service-in-kvs-as-on-und-0-value').val(emp_days);
		
	}); 
	
	 jQuery(".page-node-add-award-application .validate").live("click",function(){
		jQuery('#edit-title').attr('readonly', 'readonly').css('background', '#ccc');
		jQuery('#edit-field-awards-date-of-birth-und-0-value-datepicker-popup-0 ').attr('readonly', 'readonly').css('background', '#ccc');
		
		
	}); 

	/* award-autocalculation-Teaching, Upload ACR/APAR of last 5 Year */	
	//jQuery("#edit-field-average-of-last-5-year-poi #edit-field-average-of-last-5-year-poi-und-0-value").prop('readonly', true);
	jQuery("#edit-field-average-of-last-5-year-poi #edit-field-average-of-last-5-year-poi-und-0-value").prop('readonly', true);
	jQuery("#edit-field-upload-acr-apar-of-last table tr td:nth-child(4) .form-text").live("keyup",function(){
		calculation_add_removal_award();
	});//end keyup
	/* award-autocalculation, removal process */	
 	jQuery("#award-application-node-form #edit-field-upload-acr-apar-of-last").mousemove(function(e) {
		calculation_add_removal_award(); 
	});//end click 
		
	//common function
	function calculation_add_removal_award(){
		var total = 0;
		var count = 0;
		var avg = 0;
		jQuery("#edit-field-upload-acr-apar-of-last table tr td:nth-child(4)").each(function(){
			count++;
			var current_value = parseFloat(jQuery(this).find(".form-text").val());
			if(jQuery.isNumeric(current_value) == false){ 
				jQuery(this).find(".form-text").val();
			}
			total = total + current_value;
			
		});
		//avg = Math.ceil(total/count);
		avg = total/count;
		avg = avg.toFixed(2);
		//avg = avg.toPrecision(2);
		jQuery("#edit-field-average-of-last-5-year-poi #edit-field-average-of-last-5-year-poi-und-0-value").val(avg);
	}
	
	// award-autocalculation-non teaching, Upload APAR of last 5 Year
	//jQuery("#edit-field-average-of-last-5-year-poi #edit-field-average-of-last-5-year-poi-und-0-value").prop('readonly', true);
	jQuery("#edit-field-upload-apar-of-last-5-year table tr td:nth-child(3) .form-text").live("keyup",function(){
		calculation_APAR_add_removal_award();
	});//end keyup
	// award-autocalculation, removal process 
	jQuery("#award-application-node-form #edit-field-upload-apar-of-last-5-year").mousemove( function(e) {
		calculation_APAR_add_removal_award(); 
	});//end click 
		
	//common function
	function calculation_APAR_add_removal_award(){
		var total1 = 0;
		var count = 0;
		var avg1 = 0;
		jQuery("#edit-field-upload-apar-of-last-5-year table tr td:nth-child(3)").each(function(){
			count++;
			var current_value1 = parseFloat(jQuery(this).find(".form-text").val());
			if(jQuery.isNumeric(current_value1) == false){
				jQuery(this).find(".form-text").val(0);
			}
			total1 = total1 + current_value1;
			 
		});
		//avg1 = Math.ceil(total1/count);
		avg1 = (total1/count);
		avg1 = avg1.toFixed(2);
		//avg1 = avg1.toPrecision(2);
		jQuery("#edit-field-average-of-last-5-year-poi #edit-field-average-of-last-5-year-poi-und-0-value").val(avg1);
	}
	
	
	//award application date difference calculation	
	jQuery('#edit-field-total-service-in-kvs-as-on-und-0-value').attr('readonly', 'readonly').css('background', '#ccc');
	jQuery('#edit-field-total-service-in-present-p-und-0-value').attr('readonly', 'readonly').css('background', '#ccc');
	jQuery("#edit-field-date-of-join-in-pponp-stat-und-0-value-datepicker-popup-0").change(function() {
	//alert(123);
		CalculateDiffprepost();
	});
	jQuery("#edit-field-date-of-appointment-in-kvs-und-0-value-datepicker-popup-0").change(function() {
		
	//alert(123);
		CalculateDiff();
	});
	 /*jQuery("#edit-field-date-of-appointment-in-kvs-und-0-value-datepicker-popup-0").live("focusout",function(){
		 alert(NF12222VDV);
		CalculateDiff();
	}); */ 
	
	function CalculateDiff() {
		//alert(111);
		 //var fdate = changeDateFormate(jQuery("#edit-field-date-of-appointment-in-kvs-und-0-value-datepicker-popup-0").val());
		 var fdate = changeDateFormate(jQuery("#edit-field-date-of-appointment-in-kvs-und-0-value-datepicker-popup-0").val());
		 //alert(fdate);
		//var tdate = changeDateFormate(jQuery("#edit-field-date-of-join-in-pponp-stat-und-0-value-datepicker-popup-0").val());
			//var today =  new Date();
			
			// var today =  '03/31/2019';
			var today =  '31/03/2020';
		var tdate = changeDateFormate(today); 
		//alert(tdate);
		//alert(fdate);
		
		
		if(fdate !="" && tdate != ""){
			var From_date = new Date(fdate);
			var To_date = new Date(tdate);
			//alert(From_date);
			//alert(To_date);
			//if(From_date > To_date ){ alert("From date should not be greater then To date"); return false;}
			var diff_date =  To_date - From_date;
		 //alert(diff_date);
			var years = Math.floor(diff_date/31536000000);
			var months = Math.floor((diff_date % 31536000000)/2628000000);
			var days = Math.floor(((diff_date % 31536000000) % 2628000000)/86400000);			
			/* var leapYears=countLeapYear(new Date(fdate).getFullYear(),new Date(tdate).getFullYear()); */
			//alert(leapYears);
			/* console.log(days);
			console.log(leapYears); */
			/* days=parseInt(days)-parseInt(leapYears); */
			jQuery("#Result").html(years+" year(s) "+months+" month(s) "+days+" and day(s)");
			
			//var date_dif = years+" year(s) "+months+" month(s) ";
			var date_dif = years+" year(s) "+months+" month(s) "+days+" day(s)";
			jQuery("#edit-field-total-service-in-kvs-as-on-und-0-value").val(date_dif);
			//alert( years+" year(s) "+months+" month(s) "+days+" and day(s)");
		}else{
			alert("Please select dates");
			return false;
		}
	}
	
	function countLeapYear(startyear,endyear){
		var cntLearYear=0;
		var starty = parseInt(startyear)+1;
		endyear=parseInt(endyear);
		for(starty;starty<=endyear;starty++){
			if(starty%4==0){
				cntLearYear=cntLearYear+1;
			}
		}
		return cntLearYear;
	}
	
	
	
	function CalculateDiffprepost() {
		//alert(111);
		 //var fdate = changeDateFormate(jQuery("#edit-field-date-of-appointment-in-kvs-und-0-value-datepicker-popup-0").val());
		 var fdate = changeDateFormate(jQuery("#edit-field-date-of-join-in-pponp-stat-und-0-value-datepicker-popup-0").val());
		 //alert(fdate);
		//var tdate = changeDateFormate(jQuery("#edit-field-date-of-join-in-pponp-stat-und-0-value-datepicker-popup-0").val());
			//var today =  new Date();
			
			//var today =  '03/31/2019';
			var today =  '31/03/2020';
		var tdate = changeDateFormate(today); 
		//alert(tdate);
		//alert(fdate);
		
		
		if(fdate !="" && tdate != ""){
			var From_date = new Date(fdate);
			var To_date = new Date(tdate);
			//alert(From_date);
			//alert(To_date);
			//if(From_date > To_date ){ alert("From date should not be greater then To date"); return false;}
			var diff_date =  To_date - From_date;
		 //alert(diff_date);
			var years = Math.floor(diff_date/31536000000);
			var months = Math.floor((diff_date % 31536000000)/2628000000);
			var days = Math.floor(((diff_date % 31536000000) % 2628000000)/86400000);
			jQuery("#Result").html(years+" year(s) "+months+" month(s) "+days+" and day(s)");
			
			//var date_dif = years+" year(s) "+months+" month(s) ";
			var date_dif = years+" year(s) "+months+" month(s) "+days+" day(s)";
			jQuery("#edit-field-total-service-in-present-p-und-0-value").val(date_dif);
			//alert( years+" year(s) "+months+" month(s) "+days+" and day(s)");
		}else{
			alert("Please select dates");
			return false;
		}
	}
	
	
	function changeDateFormate(date){ //not used currently
		var arr = date.split('/');
	 	var new_Dateformat =  arr[1]+"/"+arr[0]+"/"+arr[2];
		return new_Dateformat;
 	}
	
	
	
	/* kvs award js hq level marking field */

jQuery('#edit-field-enter-points-hq-und-0-value').on('keyup',function(){
	var value=jQuery(this).val();
	var ret_val =  award_common_validation(value,"#edit-field-enter-points-hq-und-0-value");
	
	if(ret_val == 0){
		return false;
	}else{
		if(parseInt(value)>10 ){
			alert('Please enter value less than 10');
			jQuery(this).val('');
		return false;
		}else{
			award_common_total_enter();
		}
	}		
});	
jQuery('#edit-field-quantitative-and-qual-hq-und-0-value').on('keyup',function(){
	var value=jQuery(this).val();
	var ret_val =  award_common_validation(value,"#edit-field-quantitative-and-qual-hq-und-0-value");
	
	if(ret_val == 0){
		return false;
	}else{
		if(parseInt(value)>20 ){
		
		alert('Please enter value less than 20');
		jQuery(this).val('');
		return false;
		}else{
			award_common_total_enter();
		}
	}		
});	
jQuery('#edit-field-frequency-of-partici-hq-und-0-value').on('keyup',function(){
	var value=jQuery(this).val();
	var ret_val =  award_common_validation(value,"#edit-field-frequency-of-partici-hq-und-0-value");
	
	if(ret_val == 0){
		return false;
	}else{
		if(parseInt(value)>5 ){
			alert('Please enter value less than 5');
			jQuery(this).val('');
			return false;
		}else{
			award_common_total_enter();
		}
	}	
});

jQuery('#edit-field-innovation-and-exper-hq-und-0-value').on('keyup',function(){
	var value=jQuery(this).val();
	var ret_val =  award_common_validation(value,"#edit-field-innovation-and-exper-hq-und-0-value");
	
	if(ret_val == 0){
		return false;
	}else{
		if(parseInt(value)>15 ){
			alert('Please enter value less than 15');
			jQuery(this).val('');
			return false;
		}else{
			award_common_total_enter();
		}
	}	
});
jQuery('#edit-field-publication-research-pa-hq-und-0-value').on('keyup',function(){
	var value=jQuery(this).val();
	//jQuery('#edit-enter-points-err').remove();
	var ret_val =  award_common_validation(value,"#edit-field-publication-research-pa-hq-und-0-value");
	
	if(ret_val == 0){
		return false;
		}else{
	
			if(parseInt(value)>5 )
			{
				alert('Please enter value less than 5');
				jQuery(this).val('');
				return false;
			}else{
				award_common_total_enter();
			}
		}	
});
jQuery('#edit-field-recognition-hq-und-0-value').on('keyup',function(){
	var value=jQuery(this).val();
	var ret_val =  award_common_validation(value,"#edit-field-recognition-hq-und-0-value");
	
	if(ret_val == 0){
		return false;
		}else{
	if(parseInt(value)>20 )
	{		
		alert('Please enter value less than 20');
		jQuery(this).val('');
	   return false;
	}else{
		award_common_total_enter();
	}
	}	
});
jQuery('#edit-field-marks-awarded-by-the-hq-und-0-value').on('keyup',function(){
	var value=jQuery(this).val();
	var ret_val =  award_common_validation(value,"#edit-field-marks-awarded-by-the-hq-und-0-value");
	
	if(ret_val == 0){
		return false;
	}else{
	if(parseInt(value)>25 )
	{		
		alert('Please enter value less than 25');
		jQuery(this).val('');
	    return false;
	    }else{
		award_common_total_enter();
	}	
	}	
});

jQuery('#edit-field-total-marks-scored-hq-und-0-value').on('keyup',function(){
	var value=jQuery(this).val();
	//jQuery('#edit-enter-points-err').remove();
	var ret_val =  award_common_validation(value,"#edit-field-total-marks-scored-hq-und-0-value");
	
	if(ret_val == 0){
		return false;
		}else{
	
			if(parseInt(value)>100 )
			{
				
				alert('Please enter value less than 100');
				jQuery(this).val('');
				return false;
			}else{
				award_common_total_enter();
			}
		}	
	
});
jQuery('#edit-field-total-marks-scored-hq-und-0-value').attr('readonly', 'readonly').css('background', '#ccc');

/* autocalculation for ro second level total points field */

function award_common_validation(value,id){
	var curr_value = value;
	//var numchk = new RegExp("^[0-9]*$");
	var numchk = new RegExp("[+-]?([0-9]*[.])?[0-9]+");
	 if( !numchk.test( curr_value ) ){
		 alert("Only numeric value allowed");
		 jQuery(id).val('');
		return 0;
	 }
	//return false;
}
function award_common_total_enter(){
	var numchk = new RegExp("[+-]?([0-9]*[.])?[0-9]+");
	var enter_points = parseFloat(jQuery("#edit-field-enter-points-hq-und-0-value").val());
	 if( !numchk.test( enter_points ) ){enter_points = 0;}
	var quant_result = parseFloat(jQuery("#edit-field-quantitative-and-qual-hq-und-0-value").val());
	 if( !numchk.test( quant_result ) ){quant_result = 0;}
	var frq_participant = parseFloat(jQuery("#edit-field-frequency-of-partici-hq-und-0-value").val());
	if( !numchk.test( frq_participant ) ){frq_participant = 0;}
	var innov_exp = parseFloat(jQuery("#edit-field-innovation-and-exper-hq-und-0-value").val());
	if( !numchk.test( innov_exp ) ){innov_exp = 0;}
	var pub_res = parseFloat(jQuery("#edit-field-publication-research-pa-hq-und-0-value").val());
	if( !numchk.test( pub_res ) ){pub_res = 0;}
	var recog = parseFloat(jQuery("#edit-field-recognition-hq-und-0-value").val());
	if( !numchk.test( recog ) ){recog = 0;}
	var indpn_marks = parseFloat(jQuery("#edit-field-marks-awarded-by-the-hq-und-0-value").val());
	if( !numchk.test( indpn_marks ) ){indpn_marks = 0;}
	
	toatl_marks=enter_points + quant_result + frq_participant + innov_exp + pub_res + recog + indpn_marks;
	
	jQuery("#edit-field-total-marks-scored-hq-und-0-value").val(toatl_marks);
}
function myFunction() { 
    window.print();
}	
	
});//end ready function