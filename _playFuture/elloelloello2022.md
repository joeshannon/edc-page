---
layout: play
title: "'Ello, 'ello, 'ello"
#author: Various
director: Ian Guy
poster_thumb: /assets/img/play/elloelloello2022/elloelloello2022thumb.jpg
poster: /assets/img/play/elloelloello2022/elloelloello2022poster.jpg
poster_pdf: /assets/img/play/elloelloello2022/elloelloello2022poster.pdf
booking_form: /assets/img/play/elloelloello2022/elloelloello2022bookingform.pdf
location: Heavitree Church Hall
location_verbose: Heavitree Church Hall, Church Street, Heavitree, Exeter, EX2 5EH
date: 2022-09-29
time: 7:30pm
date_human: 29th & 30th September 2022
featured_on_index: false
cast1:
  - - Dogberry
    - Jordan Burston
  - - Verges
    - Andy Bailey
  - - First Watchman
    - Arthur Grizzell
  - - Second Watchman
    - Will Kettell
  - - Borachio
    - Miles Clayton-Foster
  - - Conrade
    - Leon Davies
cast2:
  - - Cressida
    - Claire Temple
  - - Dick
    - Andy Bailey
  - - Alex
    - Jordan Burston
  - - Stereo
    - Jenny Nash
cast3:
  - - Tom
    - Miles Clayton-Foster
  - - DI Young
    - Andy Bailey
  - - Solicitor
    - Jenny Nash
  - - DI Anderson
    - Leon Davies
cast4:
  - - Parker
    - Jordan Burston
  - - Hawkson
    - Claire Temple
  - - Person
    - Arthur Grizzell
cast5:
  - - Police Inspector
    - Claire Temple
  - - Constable Greenslade
    - Leon Davies
cast6:
  - - Crusher
    - Andy Bailey
  - - Princess
    - Jenny Nash
  - - Dandy
    - Leon Davies
  - - Rex
    - Miles Clayton-Foster
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

{% comment %}
## {{ page.title }}
### By {{ page.author }}
{% endcomment %}
### Directed by {{ page.director }}

The evidence is clear cut, the usual suspects have been assembled and we invite
you to examine exhibit A as 'Ello, 'ello, 'ello pokes gentle fun at the boys and
girls in blue with jokes, sketches, poems and weird and wonderful facts!

## Much Ado about Nothing - an extract
### By William Shakespeare

{% include play/cast_list.html list=page.cast1 %}

---

## Stereo Policing
### By Neil Marchant

{% include play/cast_list.html list=page.cast2 %}

---

## What happens in Vegas
### By Ben Trowbridge

{% include play/cast_list.html list=page.cast3 %}

---

## The Defectives
### By Kyle Carter

{% include play/cast_list.html list=page.cast4 %}

---

## Constable Greenslade
### By Anon

{% include play/cast_list.html list=page.cast5 %}

---

## It's a Dog's Life
### By Alaric Greene

{% include play/cast_list.html list=page.cast6 %}


<p class="text-center"><a class="btn btn-primary" href="{{ site.social_links.ticketsource }}" role="button">Book Now</a></p>
<p class="text-center"><a href="{{ page.poster_pdf | relative_url}}" role="button">Download Poster</a></p>
<p class="text-center"><a href="{{ page.booking_form | relative_url }}" role="button">Download Booking Form</a></p>
