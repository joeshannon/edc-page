---
layout: play
title: The Wind in the Willows
author: John Morley, based on the book by Kenneth Grahame
director: Miles Clayton-Foster
poster_thumb: /assets/img/play/thewindinthewillows2023/thewindinthewillows2023thumb.jpg
poster: /assets/img/play/thewindinthewillows2023/thewindinthewillows2023poster.jpg
poster_pdf: /assets/img/play/thewindinthewillows2023/thewindinthewillows2023poster.pdf
#booking_form: /assets/img/play/thewindinthewillows2023/thewindinthewillows2023bookingform.pdf
booking_active: true
location: Longdown Village Hall
location_verbose: Longdown Village Hall, Chapel Hill, Longdown, Exeter EX6 7SN, UK
date: 2023-12-07
time: 7:30 pm
date_human: 7th - 9th December 2023
featured_on_index: true
#overview_img: thewindinthewillows20231.jpg
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

Adapted from Kenneth Grahame’s 1908 children’s classic The Wind in the Willows
takes us through the life of the arrogant and boastful Toad of Toad Hall.

Toad is a fickle creature constantly searching for his latest muse and fad using
his family wealth to fund his new hobbies.

Toad’s closest friends Badger, Rat and his newest friend Mole are constantly
trying to keep a reign on Toad in the hope of protecting his dignity and
himself!

Toad is forever headstrong and his latest craze, despite constant pleading from
his friends, may be his downfall.

Cast list to be announced.

{% if page.booking_active %}
<p class="text-center"><a class="btn btn-primary" href="{{ site.social_links.ticketsource }}" role="button">Book Now</a></p>
{% endif %}
{% if page.poster_pdf %}
<p class="text-center"><a href="{{ page.poster_pdf | relative_url}}" role="button">Download Poster</a></p>
{% endif %}
{% if page.booking_form %}
<p class="text-center"><a href="{{ page.booking_form | relative_url }}" role="button">Download Booking Form</a></p>
{% endif %}
