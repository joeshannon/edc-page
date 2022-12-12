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
cast1:
  - - Master of Ceremonies
    - Oliver Hale
cast2:
  - - Marion Ley
    - Ellie Daniel & Chloe Thomas
  - - Mrs Ley
    - Lynda Anning
  - - Ruben Ley
    - Graham Setter
  - - Sir Charles Carton
    - Rob Langham
  - - Edward Carton
    - Callum Dinnett
cast3:
  - - Matilda Jane
    - Amelia King
  - - Mr Bloomfield Brambleton
    - Tim Harlow
  - - Cecily, his daughter
    - Julia Douglas-Mann
  - - Lawrence Lavender
    - Kyle Carter
  - - Simonides Swanhopper
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

## {{ page.title }}
{% comment %}
### By {{ page.author }}
{% endcomment %}
### Directed by {{ page.director }}

In the Higher Sphere we meet Rueben Ley, a Devonshire farmer, elevated in
society struggling with his broad accent in the face of his daughter, home from
finishing school and now stepping out with the Squire's son, and his wife who's
trying her best!

And in Who is Who the bombastic Mr Bloomfield Brambleton causes his daughter,
their maid, the new valet and an eligible young bachelor to all be mistaken for
other people.

{% include play/cast_list.html list=page.cast1 %}

## In the Higher Sphere
### By Jan Stewar

{% include play/cast_list.html list=page.cast2 %}

## Who is Who
### By Thomas J Williams Esq

{% include play/cast_list.html list=page.cast3 %}

<p class="text-center"><a class="btn btn-primary" href="{{ site.social_links.ticketsource }}" role="button">Book Now</a></p>
<p class="text-center"><a href="{{ page.poster_pdf | relative_url}}" role="button">Download Poster</a></p>
{% comment %}
<p class="text-center"><a href="{{ page.booking_form | relative_url }}" role="button">Download Booking Form</a></p>
{% endcomment %}
