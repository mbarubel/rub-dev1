$('#contact_success').hide();
$('#contact_return').hide();

//Contact form//alert(url);
function contact_form() {
  $("#contact").validationEngine({
    scroll: false
  });
  var valid = $("#contact").validationEngine('validate');

  if (valid == true) {
    name = $('#name').val();
    email_address = $('#email_address').val();
    your_message = $('#your_message').val();   
    url = "ajax/ajax_contact.php";
    $('#contact').hide(500).animate(500);
    $('#contact_success').show(500).animate(500).html('<img src="img/ajax-loader.gif">');

    $.get(url, {
      name: name,
      email_address: email_address,
      your_message: your_message      
    }, function (return_data) {
      //response_data=return_data;
      if (status >= 200 && status < 300 || status === 304) {
        $('#contact_success').show(500).html(return_data);
        reset_form();
      } else {
        $('#contact_success').hide(500);
        $('#contact_return').show(500).html(return_data);
      }
    })

    return false;

  } else {
    return false;
  }
}


function reset_form() {
  $('#name').val('');
  $('#email_address').val('');
  $('#your_message').val('');
}



var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// http://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}
