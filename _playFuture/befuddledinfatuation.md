---
layout: play
title: Befuddled Infatuation
#author: Genni Trickett
director: Ian Guy
poster_thumb: /assets/img/play/befuddledinfatuation2022/befuddledinfatuation2022thumb.jpg
poster: /assets/img/play/befuddledinfatuation2022/befuddledinfatuation2022poster.jpg
poster_pdf: /assets/img/play/befuddledinfatuation2022/befuddledinfatuation2022poster.pdf
booking_form: /assets/img/play/befuddledinfatuation2022/befuddledinfatuation2022bookingform.pdf
location: Heavitree Church Hall
location_verbose: Heavitree Church Hall, Church Street, Heavitree, Exeter, EX2 5EP
date: 2022-12-12
time: 7:30pm
date_human: 12th - 14th December 2022
featured_on_index: false
---

{::options parse_block_html="true" /}

<div class="jumbotron">
## {{page.title}}
<h3> <i class="fas fa-calendar-alt"></i> {{ page.date_human }}</h3>
<h3> <i class="fas fa-clock"></i> {{ page.time }}</h3>
<h3> <i class="fas fa-map-marker-alt"></i> {{ page.location_verbose }}</h3>
<a class="btn btn-primary" href="{{ site.social_links.ticketsource }}" role="button">Book Now</a>
</div>

<div class="row text-center">
<div class="col-1">
</div>
<div class="col-10">
<img class="img-fluid" src="{{ page.poster | relative_url }}" alt="{{ page.title }} poster" />
</div>
<div class="col-1">
</div>
</div>

{::options parse_block_html="false" /}

## {{ page.title }}
{% comment %}
### By {{ page.author }}
{% endcomment %}
### Directed by {{ page.director }}

### In the Higher Sphere & Who is Who

Two one act Victorian comedies where chaos, confusion and misidentification abound!

<p class="text-center"><a class="btn btn-primary" href="{{ site.social_links.ticketsource }}" role="button">Book Now</a></p>
<p class="text-center"><a href="{{ page.poster_pdf | relative_url}}" role="button">Download Poster</a></p>
{% comment %}
<p class="text-center"><a href="{{ page.booking_form | relative_url }}" role="button">Download Booking Form</a></p>
{% endcomment %}
