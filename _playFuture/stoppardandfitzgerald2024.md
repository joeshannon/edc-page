---
layout: play
title: An Evening with Stoppard & Fitzgerald
#author:
director: Jack and Elizabeth Harding
poster_thumb: /assets/img/play/stoppardandfitzgerald2024/stoppardandfitzgerald2024thumb.jpg
poster: /assets/img/play/stoppardandfitzgerald2024/stoppardandfitzgerald2024poster.jpg
poster_pdf: /assets/img/play/stoppardandfitzgerald2024/stoppardandfitzgerald2024poster.pdf
booking_form: /assets/img/play/stoppardandfitzgerald2024/stoppardandfitzgerald2024bookingform.pdf
booking_active: true
location: Tedburn St Mary & Longdown
location_verbose: |
  Tedburn St Mary Village Hall, Crediton Road, Tedburn St Mary, EX6 6DZ &
  Longdown Village Hall, Chapel Hill, Longdown, EX6 7SN
date: 2024-09-25
time: 7:30 pm
date_human: 25th Sept. at Tedburn St Mary & 26th - 28th Sept. at Longdown
featured_on_index: true
#overview_img: stoppardandfitzgerald20241.jpg
cast1:
  - - Julie Marvis
    - Carmel Smith
  - - Lois Marvis
    - Gina Turvill
  - - Young Man
    - Dan Loney
cast2:
  - - Moon
    - Chris Taylor
  - - Birdboot
    - Christian De La Croix
  - - Radio Announcer
    - Ed Heeley
  - - Mrs Drudge
    - Susan Sutherland
  - - Simon Gascoyne
    - James Hyde
  - - Felicity Cunningham
    - Chloe Kemp-Thompson
  - - Lady Cynthia Muldoon
    - Clém Bernard
  - - Major Magnus Muldoon
    - Emmy Lloyd
  - - Inspector Hound
    - Ellie Lynas
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
### Directed by {{ page.director }}
{% endcomment %}

### Porcelain and Pink
#### By F. Scott Fitzgerald
#### Directed by Elizabeth Harding

Porcelain and Pink is a witty case of mistaken identity where the main character
spends the entire time in a bathtub.

{% include play/cast_list.html list=page.cast1 %}

### The Real Inspector Hound
#### By Tom Stoppard
#### Directed by Jack Harding

The Real Inspector Hound is a mad-cap, whodunnit play-within-a-play which
promises laughter, three murders, and twists and turns galore.

{% include play/cast_list.html list=page.cast2 %}

{% if page.booking_active %}
<p class="text-center"><a class="btn btn-primary" href="{{ site.social_links.ticketsource }}" role="button">Book Now</a></p>
{% endif %}
{% if page.poster_pdf %}
<p class="text-center"><a href="{{ page.poster_pdf | relative_url}}" role="button">Download Poster</a></p>
{% endif %}
{% if page.booking_form %}
<p class="text-center"><a href="{{ page.booking_form | relative_url }}" role="button">Download Booking Form</a></p>
{% endif %}
