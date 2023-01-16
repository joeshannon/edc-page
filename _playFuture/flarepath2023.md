---
layout: play
title: Flare Path
author: Terence Rattigan
director: Jenny Nash
poster_thumb: /assets/img/play/flarepath2023/flarepath2023thumb.jpg
poster: /assets/img/play/flarepath2023/flarepath2023poster.jpg
poster_pdf: /assets/img/play/flarepath2023/flarepath2023poster.pdf
booking_form: /assets/img/play/flarepath2023/flarepath2023bookingform.pdf
location: Longdown Village Hall
location_verbose: Longdown Village Hall, Chapel Hill, Longdown, Exeter, EX6 7SN
date: 2023-03-23
time: 7:30pm
date_human: 23rd - 25th March 2023
featured_on_index: true
cast:
  - - Doris, Countess Skricevinsky
    - Charlotte Guy
  - - Peter Kyle
    - Matt Ryder
  - - Mrs Oakes
    - Claire Temple
  - - Sergeant Miller
    - Christian de la Croix
  - - Percy
    - Arthur Grizzel
  - - Count Skricevinsky
    - Chris Taylor
  - - Flight Lieutenant Teddy Graham
    - Miles Clayton-Foster
  - - Patricia Graham
    - Olivia Parker
  - - Mrs Miller
    - Cecilia Neil-Smith
  - - Squadron Leader Swanson
    - Mark Goddard
  - - Corporal Wiggy Jones
    - Callum Dinnett
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
### By {{ page.author }}
### Directed by {{ page.director }}

At the Falcon Hotel on the Lincolnshire coast, men from a nearby RAF airbase are
planning to spend the weekend with their wives.

Patricia Graham, an actress from London, has something to tell her husband
Teddy, who is a bomber pilot. The situation is complicated when Peter Kyle, a
Hollywood film star, arrives at the hotel, and Teddy is sent out on a night raid
over Germany.

Patricia is torn between a rekindled old flame and loyalty to the husband who
relies on her for support. Tensions rise as a plane goes missing as those at the
hotel sit and wait.

{% include play/cast_list.html list=page.cast %}


<p class="text-center"><a class="btn btn-primary" href="{{ site.social_links.ticketsource }}" role="button">Book Now</a></p>
<p class="text-center"><a href="{{ page.poster_pdf | relative_url}}" role="button">Download Poster</a></p>
<p class="text-center"><a href="{{ page.booking_form | relative_url }}" role="button">Download Booking Form</a></p>
