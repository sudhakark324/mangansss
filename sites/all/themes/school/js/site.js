// JavaScript Document

jQuery(document).ready(function(e) {
    var animate_width = jQuery('#side_nav_cont').width();
	jQuery('#side_nav_cont').animate({right: '-'+animate_width},500);
	jQuery('#side_nav_toggle2').animate({right: '-'+animate_width},10);
	
	jQuery('#side_nav_toggle').click(function(e) {
        e.preventDefault();
		jQuery(this).animate({right: '-'+animate_width},500);
		jQuery('#side_nav_toggle2').animate({right: animate_width},800);
		jQuery('#side_nav_toggle2').animate({right: animate_width},500);
		jQuery('#side_nav_cont').animate({right: '0px'},800);
		
    });
	
	jQuery('#side_nav_toggle2').click(function(e) {
        e.preventDefault();
		jQuery(this).animate({right: '-'+animate_width},500);
		jQuery('#side_nav_toggle').animate({right: '0px'},200);
		jQuery('#side_nav_toggle').animate({right: '0px'},500);
		jQuery('#side_nav_cont').animate({right: '-'+animate_width},800);
		
    });
jQuery("#edit-field-tc-issue-shift-value option[value=0]").hide();

	/* code for replate @ and . */
	/* var str = jQuery("#content").html();   
  var res = str.replace(/\@/g, '[at]');  
  jQuery("#content").html(res);
  var str = jQuery("#content").html();   
  var res = str.replace(/\./g, '[dot]');  
  jQuery("#content").html(res); */
	
	jQuery('li.login-out').find('a[href]').attr('title', 'Login');
	/* external link popup */
	jQuery("a[href^='http://']:not([href*='"+location.hostname+"']), [href^='https://']:not([href*='"+location.hostname+"'])")
    .attr("target","_blank")
    .click(function(e) {
        return confirm('You are being redirected to an external website. Please note that JKendriya Vidyalaya Sangathan cannot be held responsible for external websites content & privacy policies.');
    })
	//view button position
	/*var linksSpace = jQuery('.links').css('padding-left');
	alert(linksSpace);
	jQuery('.mid_links a.view').css('left',linksSpace);*/
	
	if(window.innerWidth<941){
		var menus = jQuery('#side_nav_cont ul').html();
		jQuery('#nav').append(menus);
	}
	/*header date update*/ 
	var dt = new Date();
	var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var monthNames = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November","December" ];
	var curr_day = weekday[dt.getDay()]+", "+ (monthNames[dt.getMonth()]) +" "+ dt.getDate()+", "+dt.getFullYear()+ " " +dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	jQuery(".gov-india span").html(curr_day.toUpperCase());
	/*header date update*/
/*News Scroll*/
  jQuery(function(){
  jQuery('.marquee-vertical').marquee();  
  jQuery('.marquee-horizontal').marquee({direction:'horizontal', delay:0, timing:50});  

});	
});

window.onresize = function(){
	if(window.innerWidth<941){
		var menus = jQuery('#side_nav_cont ul').html();
		jQuery('#nav').append(menus);
	}
}
function myFunction() { 
    window.print();
}