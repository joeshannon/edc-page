---
layout: play
title: Lady Windermere’s Fan
author: Oscar Wilde
director: Ian Guy
poster_thumb: /assets/img/play/ladywindermeresfan2023/ladywindermeresfan2023thumb.jpg
#poster: /assets/img/play/ladywindermeresfan2023/ladywindermeresfan2023poster.jpg
#poster_pdf: /assets/img/play/ladywindermeresfan2023/ladywindermeresfan2023poster.pdf
booking_form: /assets/img/play/ladywindermeresfan2023/ladywindermeresfan2023bookingform.pdf
booking_active: true
location: Longdown Village Hall
location_verbose: Longdown Village Hall, Chapel Hill, Longdown, Exeter, EX6 7SN
date: 2023-09-28
time: 7:30 pm
date_human: 28th - 30th September 2023
featured_on_index: false
cast:
  - - Parker
    - Ed Heeley
  - - Lady Windermere
    - Georgi Edmond
  - - Lord Darlington
    - Sam Lew
  - - The Duchess of Berwick
    - Genni Trickett
  - - Lady Agatha
    - Chloe Thomas
  - - Lord Windermere
    - Chris Taylor
  - - Mr Dumby
    - Peter Burnett
  - - Lady Stutfield
    - Ellie Lynas
  - - Mrs Cowper-Cowper
    - Emmy Lloyd
  - - Mr Hopper
    - Miles Clayton-Foster
  - - Lord Augustus Lorton
    - Doug Thomson
  - - Cecil Graham
    - Richard Hogben
  - - Lady Plymdale
    - Tara Studholme Lyons
  - - Mrs Erlynne
    - Jenny Nash
  - - Lady Jedburgh
    - Gill Cree
  - - Rosalie
    - Cecily Fox
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

First performed in 1892, Lady Windermere’s Fan was one of Oscar Wilde’s earliest
theatrical successes. The play is centred on the titular character of Lady
Windermere, who on the day of her birthday party hears a disturbing rumour... is
her husband having an affair?

Will the ‘other woman’ really attend the party?

Chronicling a series of misunderstandings and deceptions in the high society
world of Victorian London this hectic upper-class comedy sparkles with Wilde's
trademark wit and intelligence and remains one of his most popular plays to this
day.

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
