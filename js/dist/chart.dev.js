"use strict";

// Hide Sections
$('.section').hide();
setTimeout(function () {
  $(document).ready(function () {
    // Show sections
    $('.section').fadeIn(); // Hide preloader

    $('.loader').fadeOut(); //Init Side nav

    $('.button-collapse').sideNav(); // Init Modal

    $('.modal').modal(); // Init Select

    $('select').material_select(); // Counter

    $('.count').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 1000,
        easing: 'swing',
        step: function step(now) {
          $(this).text(Math.ceil(now));
        }
      });
    }); // Comments - Approve & Deny

    $('.approve').click(function (e) {
      Materialize.toast('Comment Approved', 3000);
      e.preventDefault();
    });
    $('.deny').click(function (e) {
      Materialize.toast('Comment Denied', 3000);
      e.preventDefault();
    }); // Quick Todos

    $('#todo-form').submit(function (e) {
      var output = "<li class=\"collection-item\">\n            <div>".concat($('#todo').val(), "\n              <a href=\"#!\" class=\"secondary-content delete\">\n                <i class=\"material-icons\">close</i>\n              </a>\n            </div>\n          </li>");
      $('.todos').append(output);
      Materialize.toast('Todo Added', 3000);
      e.preventDefault();
    }); // Delete Todos

    $('.todos').on('click', '.delete', function (e) {
      $(this).parent().parent().remove();
      Materialize.toast('Todo Removed', 3000);
      e.preventDefault();
    });
    CKEDITOR.replace('body');
  });
}, 1000);