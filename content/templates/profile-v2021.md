---
title: Metadata Profile 2021
---

This is documentation of the metadata profile we used for the 2021 release of the ecosystem mapping in September 2021.

## Fields

|name|subattributes|title|description|examples|source_method|type|format|factual (y/n)|priority|priority_notes|shown_on_website|How often filled|
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|name||Full name or title||Life Itself||string|||||Y|140|
|id||A short web-useable url||life-itself||||||||249|
|rd_1_focus||Current focus|Says whether we should focus on this organisation (or not yet?)|Y = priority  <br />YY = top priority  <br />? = maybe/not sure  <br />N = not current priority||||||||138|
|url||Homepage URL||[https://lifeitself.us](https://lifeitself.us)||string|url|||||140|
|description||Long textual description|Long textual description from the organization in their own words (likely copied from their home page and about page)||manual|string||||||133|
|description_extracted||Description from website|The description that is auto-extracted from their website||automated/microlink||||||||
|inner|||||||||||||
|cultural|||||||||||||
|systems|||||||||||||
|email||Contact email|A contact email for the organization. Usually from website (sometimes from their facebook page).|hello@lifeitself.us|||||5|We need this for contacting them etc||90|
|email2||Second contact email|when there was a second (and different) email address e.g. for press/media specifically or from facebook page|||||||||10|
|have_email||Does the organisation have a contact email?|Y if email of if we have a contact detail of one of the main people, N if no email at all|||||||||76|
|blog||Blog|Their blog e.g. their medium or wordpress page. The link can usually be found on their website. If no link/page has been found the cell will say 'not-found'.|not-found|||||3|||70|
|youtube||Youtube|Their youtube page/channel. The link can usually be found on their website. If no link/page has been found the cell will say 'not-found'.|not-found|||||3|||72|
|twitter||Twitter|Their twitter page. The link can usually be found on their website. If no link/page has been found the cell will say 'not-found'.|not-found|||||3|||77|
|instagram||Instagram|Their Instagram page. The link can usually be found on their website. If no link/page has been found the cell will say 'not-found'.|[](https://www.instagram.com/brave_earth_/)[https://www.instagram.com/brave_earth_/](https://www.instagram.com/brave_earth_/)|||||2|||78|
|linkedin||Linkedin|Their linkedin page. The link can usually be found on their website. If no link/page has been found the cell will say 'not-found'.|not-found|||||2|||72|
|facebook||Facebook|Their facebook page. The link can usually be found on their website. If no link/page has been found the cell will say 'not-found'.|[](https://www.facebook.com/braveearth)[https://www.facebook.com/braveearth](https://www.facebook.com/braveearth)||||||||78|
|phone||Phone||||||||||0|
|logo|url|URL to Logo image||[https://lifeitself.us/wp-content/uploads/2020/12/life-itself-logo.svg](https://lifeitself.us/wp-content/uploads/2020/12/life-itself-logo.svg)||string|url|||||109|
||cached|URL of logo (cached in cloudinary)||[https://res.cloudinary.com/ds7qslkd0/image/upload/v1633363990/Ecosystem%20Mapping/life-itself-logo_syl7ai.svg](https://res.cloudinary.com/ds7qslkd0/image/upload/v1633363990/Ecosystem%20Mapping/life-itself-logo_syl7ai.svg)||||||||74|
||width||||||||||||
||height||||||||||||
|image|url|URL to image (different from logo)|An image which gives a sense of what the organization does/is about|[https://dark-mountain.net/wp-content/uploads/2021/09/TOPAS-TANA01-2048x1185.jpg](https://dark-mountain.net/wp-content/uploads/2021/09/TOPAS-TANA01-2048x1185.jpg)||||||||74|
||cached|URL of image (cached in cloudinary)||[https://res.cloudinary.com/ds7qslkd0/image/upload/v1637004530/Ecosystem%20Mapping/Dark_Mountain_up1ydi.jpg](https://res.cloudinary.com/ds7qslkd0/image/upload/v1637004530/Ecosystem%20Mapping/Dark_Mountain_up1ydi.jpg)||||||||73|
||width||||||||||||
||height||||||||||||
|image_homepage|url|||||||||||0|
||cached||||||||||||
||width||||||||||||
||height||||||||||||
|images_extra|url|||||||||||0|
||cached||||||||||||
||width||||||||||||
||height||||||||||||
|tagline||Tagline||The end of the world as we know it is not the end of the world full stop.||||||||11|
|activity orig||Activity of origin?|??|Publishing, Writing/Art Project||||||||104|
|activity||Activity|See "Activity" sheet for description of options|spaces||array[Activity]||||||82|
|activity_2||||research||||||||80|
|topic||Topic|See "Topic" sheet for description of options|development||array[Topic]||||||79|
|topic_2||||governance||||||||76|
|regions||Region|Region (country or, if many countries, continent) where the organisation is located/ carries out their activities|UK||||||||63|
|locations|||City where the organisation is located/ carries out their activities|Leeds, GB||||||||102|
|started||Start date (year)||2015||||||||97|
|ended||End date (year)||2020||||||||0|
|active||Active (Y/N)||Y||||||||114|
|people||List of people|Comma separated list of associated people. A person has the format `Name [<email>]` where [ ] indicates it is optional ...|`Joe Bloggs <joe@bloggsbettersociety.org>`||array[Person]||||||72|

### Maybe

- tagline
- type: Organization or Individual
- Prep metadata

### `social_change`

| id  | title  | description |
|---|---|---|
|inner|Inner Change|Spirituality, mindfulness, personal development|
|cultural|Cultural Change|[Community and cultural change], Community building  <br>Conscious collectives ??|
|systems|Systems Change|Systems change esp governance|