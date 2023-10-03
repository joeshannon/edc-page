---
layout: play
title: Stories from Beyond the Veil
#author:
director: Callum Dinnett
poster_thumb: /assets/img/play/storiesfrombeyondtheveil2023/storiesfrombeyondtheveil2023thumb.jpg
poster: /assets/img/play/storiesfrombeyondtheveil2023/storiesfrombeyondtheveil2023poster.jpg
poster_pdf: /assets/img/play/storiesfrombeyondtheveil2023/storiesfrombeyondtheveil2023poster.pdf
#booking_form: /assets/img/play/storiesfrombeyondtheveil2023/storiesfrombeyondtheveil2023bookingform.pdf
booking_active: true
location: Heavitree Church Hall
location_verbose: Heavitree Church Hall, Church Street, Heavitree, Exeter, EX2 5EP
date: 2023-10-30
time: 7:30 pm
date_human: 30th & 31st October 2023
featured_on_index: true
#overview_img: storiesfrombeyondtheveil20231.jpg
cast1:
  - - Ida Patterson
    - Sarah Thorn
  - - Major Simon Hopton
    - Christian De La Croix
  - - Tilly Templeton-Green
    - Kate Lambert
  - - Rev Wendy Wilkins
    - Amie Lynn
cast2:
  - - Old Man
    - Doug Thomson
  - - Woman
    - Kate Lambert
  - - Young Man
    - Christian De La Croix
cast3:
  - - Will
    - Jordan Burston
cast4:
  - - Theo
    - Sarah Thorn
  - - Mark
    - Jordan Burston
cast5:
  - - Sam Cooper
    - Carmel Smith
  - - August Prendergast
    - Doug Thomson
  - - Mimi
    - Sarah Thorn
  - - Anchor
    - Kate Lambert
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
{% comment %}
### By {{ page.author }}
{% endcomment %}
### Directed by {{ page.director }}

With a mix of sketches from the spooky to the supernatural, Stories from Beyond
the Veil will attempt to bring the tradition of EDC’s one night stands back from
the dead.

Featuring pieces written by Exeter Drama Company members, come for a glimpse
into worlds not quite like our own, with stories of ghosts, witches, and a whole
lot in between.

On nights for all things scary and spooky, join us for a night of creepiness and
perhaps a couple cautionary tales.

## Afternoon Tea
### By Alaric Greene

{% include play/cast_list.html list=page.cast1 %}

## It wasn’t my Fault
### By Ian Guy

{% include play/cast_list.html list=page.cast2 %}

## We are the Grandsons
### By Alaric Greene

{% include play/cast_list.html list=page.cast3 %}

## Reading between the Lines
### By Genni Trickett

{% include play/cast_list.html list=page.cast4 %}

## The Moonlight Contingency
### By Peter Burnett

{% include play/cast_list.html list=page.cast5 %}

{% if page.booking_active %}
<p class="text-center"><a class="btn btn-primary" href="{{ site.social_links.ticketsource }}" role="button">Book Now</a></p>
{% endif %}
{% if page.poster_pdf %}
<p class="text-center"><a href="{{ page.poster_pdf | relative_url}}" role="button">Download Poster</a></p>
{% endif %}
{% if page.booking_form %}
<p class="text-center"><a href="{{ page.booking_form | relative_url }}" role="button">Download Booking Form</a></p>
{% endif %}
