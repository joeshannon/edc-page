$(document).ready(function () {

  // this part doesn't work for some reason. Need to figure out why and fix
  if (document.getElementById("calendar") != null) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $(document.getElementById('calendar')).fullCalendar('changeView', 'listWeek');
    }
  }

});


document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'en-gb',
    showNonCurrentDates: false,
    fixedWeekCount: false,
    eventDisplay: 'block',
    displayEventTime: false,
    themeSystem: 'bootstrap',
    googleCalendarApiKey: 'AIzaSyCc-XALNQ1QOPENIKZ0iG97AKL5QeNLp3o',
    events: {
      googleCalendarId: 'qtiegmovrricbemiq0s4nrkbv0@group.calendar.google.com'
    },
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listMonth'
    },
    height: "auto",
    eventClick: function (info) {
      info.jsEvent.preventDefault();
      try {
        var eventStart = info.event.start;
        $('#calendarEventModalTitle').html(eventStart.toLocaleTimeString(calendar.locale, { hour: '2-digit', minute: '2-digit' }) + " " + info.event.title);
        if (typeof info.event.extendedProps.location != 'undefined') {
          $('#calendarEventModalLocation').html(info.event.extendedProps.location);
        }
        else {
          $('#calendarEventModalLocation').empty();
        }
        $('#calendarEventModalDescription').html(info.event.extendedProps.description);
        $('#calendarEventModal').modal();
      }
      catch (err) {
        console.log(err)
      }
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
    },
    eventDidMount: function (event) {
      var eventStart = event.event.start.toLocaleTimeString(calendar.locale, { hour: '2-digit', minute: '2-digit' });
      var titleElement = event.el.querySelector(".fc-event-title")
      if (!titleElement) {
        return
      }
      var origTitle = titleElement.textContent
      titleElement.textContent = eventStart + " " + origTitle
    },
  });
  calendar.render();
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
