$(document).ready(function () {

  // this part doesn't work for some reason. Need to figure out why and fix
  if (document.getElementById("calendar") != null) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $(document.getElementById('calendar')).fullCalendar('changeView', 'listWeek');
    }
  }

});


$(function () {

  // page is now ready, initialize the calendar...

  $('#calendar').fullCalendar({

    googleCalendarApiKey: 'AIzaSyCc-XALNQ1QOPENIKZ0iG97AKL5QeNLp3o',
    events: {
      googleCalendarId: 'qtiegmovrricbemiq0s4nrkbv0@group.calendar.google.com'
    },

    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,listMonth'
    },
    height: "auto",

    eventClick: function (event, jsEvent, view) {
      try {
        console.log(event);
        $('#calendarEventModalTitle').html(event.start.format("HH:mm\t") + event.title);
        if(typeof event.location != 'undefined'){
          $('#calendarEventModalLocation').html(event.location);
        }
        else {
          $('#calendarEventModalLocation').empty();
        }
        $('#calendarEventModalDescription').html(event.description);
        $('#eventUrl').attr('href', event.url);
        $('#calendarEventModal').modal();
      }
      catch(err) {
        console.log(err)
        return false
      }
      return false
    },

    eventDataTransform: function (eventData) {
      if (typeof eventData.description != 'undefined') {
        if (eventData.description.includes("Production")) {
          eventData.color = '#006a25'
        }
        if (eventData.description.includes("Meeting") || eventData.description.includes("meeting") || eventData.description.includes("Voting") || eventData.description.includes("Annual")) {
          eventData.color = '#ff6363'
        }
      }
      return eventData;
    }
  })

});



$("#mailingListForm").submit(function (e) {
  $("#mailingListModal").modal('show');
  var email = $("#mailingListEmailInput").val();
  console.log(email)
  $.post(
    "https://submit-form.com/ColObaebgXV-SmcMfBQyZ",
    {
      email: email
    },
    null,
    "json" // dataType must be set to json
  )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.error(response);
    });
    $('#mailingListForm').trigger("reset");
  return false
});

$("#contactForm").submit(function (e) {
  $("#mailingListModal").modal('show');
  var name = $("#contactFormName").val();
  var email = $("#contactFormEmail").val();
  var message = $("#contactFormMessage").val();
  $.post(
    "https://submit-form.com/NBxec7cB4oz4kQ6XDQj65",
    {
      name : name,
      email: email,
      message: message
    },
    null,
    "json" // dataType must be set to json
  )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.error(response);
    });
    $('#contactForm').trigger("reset");
  return false
});
