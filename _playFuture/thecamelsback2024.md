---
layout: play
title: The Camel's Back
author: Arnold Helsby
director: Robin Thwaytes
poster_thumb: /assets/img/play/thecamelsback2024/thecamelsback2024thumb.jpg
#poster: /assets/img/play/thecamelsback2024/thecamelsback2024poster.jpg
#poster_pdf: /assets/img/play/thecamelsback2024/thecamelsback2024poster.pdf
booking_form: /assets/img/play/thecamelsback2024/thecamelsback2024bookingform.pdf
booking_active: true
location: Longdown Village Hall
location_verbose: Longdown Village Hall, Chapel Hill, Longdown, Exeter EX6 7SN, UK
date: 2024-03-14
time: 7:30 pm
date_human: 14th - 16th March 2024
featured_on_index: true
#overview_img: thecamelsback20241.jpg
cast:
  - - Ned Ruddle
    - Benedict Morrison
  - - Cicely
    - Ellie Lynas
  - - Prudence Hannacott
    - Fran Guy
  - - Faith Hannacott
    - Elizabeth Taylor
  - - Tilda Hannacott
    - Alice Purcell
  - - Robert Sladen
    - Miles Clayton-Foster
  - - Miss Loveday
    - Claire Temple
  - - Mrs Middleton-Jones
    - Emmy Lloyd
  - - Samuel Meacock
    - Graham Setter
---


{::options parse_block_html="true" /}

<div class="jumbotron">
## {{page.title}}
<h3> <i class="fas fa-calendar-alt"></i> {{ page.date_human }}</h3>
<h3> <i class="fas fa-clock"></i> {{ page.time }}</h3>
<h3> <i class="fas fa-map-marker-alt"></i> {{ page.location_verbose }}</h3>
{% if page.booking_active %}
<a class="btn btn-primary" href="{{ site.social_links.ticketsource }}" role="button">Book Now</a>
{% endif %}
</div>

{% if page.poster %}
<div class="row text-center">
<div class="col-1">
</div>
<div class="col-10">
<img class="img-fluid" src="{{ page.poster | relative_url }}" alt="{{ page.title }} poster" />
</div>
<div class="col-1">
</div>
</div>
{% endif %}

{::options parse_block_html="false" /}

## {{ page.title }}
### By {{ page.author }}
### Directed by {{ page.director }}

Mr Hannacott, the owner of a farm, has recently died. His will aims to secure the future of his family and ensure the farm is managed efficiently. To this end he insists that his sister Prudence, a spinster, should bring her business acumen to the farm.

However, running a farm is very different to running a successful draper's shop, and her methods are not always welcomed by the family, the farm staff or the villagers.

A production of an amateur play in the village leads to problems on the farm as well as the farm’s residents grapple with how to get rid of Prudence!


{% include play/cast_list.html list=page.cast %}

{% if page.booking_active %}
<p class="text-center"><a class="btn btn-primary" href="{{ site.social_links.ticketsource }}" role="button">Book Now</a></p>
{% endif %}
{% if page.poster_pdf %}
<p class="text-center"><a href="{{ page.poster_pdf | relative_url}}" role="button">Download Poster</a></p>
{% endif %}
{% if page.booking_form %}
<p class="text-center"><a href="{{ page.booking_form | relative_url }}" role="button">Download Booking Form</a></p>
{% endif %}
