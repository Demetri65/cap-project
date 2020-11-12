var $form = $('form#test-form'),
      url = 'https://script.google.com/macros/s/AKfycbxaJ8us3vexYjcBgOAqrT2OcFSN-ozfUqrWMcr27T0giHlmHXs/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
