---
layout: play
title: Macbeth
author: William Shakespeare
director: Claire Temple and Alice Purcell
poster_thumb: /assets/img/play/macbeth2023/macbeth2023thumb.jpg
poster: /assets/img/play/macbeth2023/macbeth2023poster.jpg
poster_pdf: /assets/img/play/macbeth2023/macbeth2023poster.pdf
#booking_form: /assets/img/play/macbeth2023/macbeth2023bookingform.pdf
booking_active: true
location: In and around Exeter
location_verbose: In and around Exeter
date: 2023-06-24
time: See poster
date_human: June and July 2023
featured_on_index: true
cast:
  - - First Witch
    - Olivia Parker
  - - Second Witch
    - Emily Swaddle
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
    - Milly Groves
  - - Fleance
    - Georgia Rich
  - - Porter
    - Ian Guy
  - - Macduff
    - Krish Madray
  - - Lennox
    - Callum Dinnett
  - - Donalbain
    - Arthur Grizzell
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
    - Miles Clayton-Foster
  - - Mentieth
    - Christian De La Croix
  - - Seyward
    - Mark Goddard
  - - Servants & Soldiers
    - Will Kettell, Arthur Grizzell, Richard Hogben, Miles Clayton-Foster and  Doug Thomson
images:
  - url: macbeth20231.jpg
    caption: Entr’act - Macbeth’s camp with Angus, Malcolm and Third Witch
  - url: macbeth20232.jpg
    caption: Macbeth and the three witches. Olivia Parker, Emily Swaddle, Chloe Thomas & Alex Gannon
  - url: macbeth20233.jpg
    caption: Three Witches. L-R Emily Swaddle, Chloe Thomas, Olivia Parker.
  - url: macbeth20234.jpg
    caption: Lady Macbeth - Carmel Smith, Macbeth - Alex Gannon
  - url: macbeth20235.jpg
    caption: Macbeth - Alex Gannon
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

Brutal actions have brutal consequences.

{% include play/image_1by2.html index=0 width=4 height=3 %}

When supernatural forces give Macbeth a sign that he will become king, he and
his wife seize an opportunity to rise through the ranks, controlling their
destiny.

{% include play/image_1by2.html index=2 width=4 height=3 %}

But their ambitions unravel into a living nightmare, leaving a trail of
destruction, as the couple seek to cling to power and control.

{% include play/image.html index=4 width=4 height=3 %}

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
