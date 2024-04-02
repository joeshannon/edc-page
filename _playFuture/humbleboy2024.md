---
layout: play
title: Humble Boy
author: Charlotte Jones
director: Briony Vallis
poster_thumb: /assets/img/play/humbleboy2024/humbleboy2024thumb.jpg
poster: /assets/img/play/humbleboy2024/humbleboy2024poster.jpg
#poster_pdf: /assets/img/play/humbleboy2024/humbleboy2024poster.pdf
#booking_form: /assets/img/play/humbleboy2024/humbleboy2024bookingform.pdf
booking_active: false
location: Longdown Village Hall
location_verbose: Longdown Village Hall, Chapel Hill, Longdown, Exeter EX6 7SN, UK
date: 2024-06-27
time: 7:30 pm
date_human: 27th - 29th June 2024
featured_on_index: false
#overview_img: humbleboy20241.jpg
cast:
  - - Felix Humble
    - Ric Hutton
  - - Mercy Lott
    - Debra Ramsay
  - - Flora Humble
    - Sarah Thorn
  - - Jim
    - Graham Setter
  - - George Pye
    - Benedict Morrison
  - - Rosie Pye
    - Helen Evans
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

“You know, Felix, bumble bees shouldn’t be able to fly… They don’t obey the laws
of physics. But they fly anyway.”

All is not well in the Humble Hive. Thirty-five-year-old Felix Humble is a
Cambridge astro-physicist in search of a unified field theory.

Following the sudden death of his father, Felix returns to his middle England
home and his difficult and demanding mother, where he soon realizes that his
search for unity must include his own chaotic home life.

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
