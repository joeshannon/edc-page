---
layout: play
title: Macbeth
author: William Shakespeare
director: Claire Temple and Alice Purcell
poster_thumb: /assets/img/play/macbeth2023/macbeth2023thumb.jpg
poster: /assets/img/play/macbeth2023/macbeth2023poster.jpg
#poster_pdf: /assets/img/play/macbeth2023/macbeth2023poster.pdf
#booking_form: /assets/img/play/macbeth2023/macbeth2023bookingform.pdf
booking_active: false
location: In and around Exeter
location_verbose: In and around Exeter
date: 2023-07-01
time: 7:30pm
date_human: July 2023
featured_on_index: false
cast:
  - - First Witch
    - Olivia Parker
  - - Second Witch
    - Milly Groves
  - - Third Witch
    - Chloe Thomas
  - - King Duncan
    - Rob Langham
  - - Malcolm
    - Matt Ryder
  - - Captain
    - Mark Goddard
  - - Ross
    - Nigel Mason
  - - Macbeth
    - Alex Gannon
  - - Banquo
    - Pixie Frost
  - - Angus
    - Christian De La Croix
  - - Lady Macbeth
    - Carmel Smith
  - - Messenger
    - Emily Swaddle
  - - Fleance
    - Georgia Rich
  - - Porter
    - Ian Guy
  - - MacDuff
    - Andrew Strang
  - - Lennox
    - Callum Dinnett
  - - Donalbain
    - Jordan Burston
  - - Old Man
    - Roger Mathewson
  - - 1st Murderer
    - Sarah Davies
  - - 2nd Murderer
    - Mark Goddard
  - - 1st Apparition
    - Roger Mathewson
  - - 2nd Apparition
    - Sarah Davies
  - - 3rd Apparition
    - Georgia Rich
  - - Doctor
    - Robin Thwaytes
  - - Gentlewoman
    - Annette Bassett
  - - Seyton
    - Richard Hogben
  - - Seyward
    - Krish Madray
  - - Servants & Soldiers
    - Will Kettell, Arthur Grizzell, Richard Hogben, Miles Clayton-Foster and  Doug Thomson
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
### By {{ page.author }}
### Directed by {{ page.director }}

Further details to be announced soon.

{% include play/cast_list.html list=page.cast %}

{% if page.booking_active %}
<p class="text-center"><a class="btn btn-primary" href="{{ site.social_links.ticketsource }}" role="button">Book Now</a></p>
{% endif %}
{% if page.page.poster_pdf %}
<p class="text-center"><a href="{{ page.poster_pdf | relative_url}}" role="button">Download Poster</a></p>
{% endif %}
{% if page.booking_form %}
<p class="text-center"><a href="{{ page.booking_form | relative_url }}" role="button">Download Booking Form</a></p>
{% endif %}
