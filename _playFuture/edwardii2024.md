---
layout: play
title: Edward II
author: Christopher Marlowe
director: Ian Guy
poster_thumb: /assets/img/play/edwardii2024/edwardii2024thumb.jpg
#poster: /assets/img/play/edwardii2024/edwardii2024poster.jpg
#poster_pdf: /assets/img/play/edwardii2024/edwardii2024poster.pdf
#booking_form: /assets/img/play/edwardii2024/edwardii2024bookingform.pdf
booking_active: false
location: St Michael’s Church, Alphington
location_verbose: St. Michael’s Church, Rectory Drive, Alphington, Exeter, EX2 8XJ
date: 2024-05-15
time: 7:30 pm
date_human: 15th - 17th May 2024
featured_on_index: false
#overview_img: edwardii20241.jpg
cast:
  - - Piers Gaveston
    - Graeme Mooney
  - - Poor person 1/James, a guard/Bishop of Coventry
    - Christian de la Croix
  - - Poor person 2/Attendant/Herald/Beaumont
    - Julia Gadek
  - - Poor person 3/Abbott
    - Richard Hogben
  - - King Edward II
    - Jack Harding
  - - Thomas, Earl of Lancaster
    - Krish Madray
  - - Roger Mortimer, Earl of March
    - Dan Loney
  - - Edmund, Earl of Kent, brother to the King
    - Stuart Cloete
  - - Alice, Countess of Warwick
    - Ana Anajuba
  - - Bishop of Canterbury/Guard
    - Callum Dinnett
  - - Queen Isabella
    - Clémence Bernard
  - - Beatrice, Countess of Pembroke
    - Amie Lynn
  - - Baldock, a servant
    - Jack Feltham
  - - Edward Spencer, a friend of Gaveston’s
    - David Purser
  - - Lady Margaret de Clare
    - Carmel Smith
  - - Alice, Countess of Arundel
    - Sarah Davies
  - - John Matrevis, Jailer/Guard
    - Jay Smith
  - - Gourney, Jailer/Guard
    - Jordan Burston
  - - Lightborn, Assassin
    - Tara Studholme Lyons
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

Edward Longshanks, Edward I is dead and his weak and ineffectual son is now
Edward II.

His first command is to recall from exile in France his favourite, Piers
Gaveston, an action that proves unwelcome amongst the Barons and the Bishops.

With rebellion brewing, the royal marriage falling apart and the different
factions taking sides armies are raised and the executioner’s axe is wielded
freely.


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
