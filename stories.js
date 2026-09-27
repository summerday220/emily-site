/* ============================================================
   EMILY'S STORIES — this is the only file you need to edit.

   There are two lists below.

   1. HIGHLIGHTS — your showcase pieces. Each one gets a photo,
      a couple of lines, and links to the story. Keep this to
      about 3 to 6 so they stay special. The Murrow features
      belong here.

   2. STORIES — the running list of recent work underneath.
      No photo needed. Add to this as you publish.

   A story can be in both lists if you want it highlighted AND
   in the running list.

   TO ADD ANYTHING: copy a block from { to }, paste it at the
   TOP of the right list, change the values. Keep the comma
   between blocks.

   Step-by-step instructions for everything, in plain English,
   are in HOW-TO-UPDATE.md — open that file first if this one
   looks confusing.
   ============================================================ */


/* ============================================================
   1. HIGHLIGHTS — photo + a line or two + a link

   image:  the photo. Two options:
           (a) Upload your own copy. On GitHub click "Add file"
               then "Upload files", drag the photo in, commit.
               Then just write the filename: "my-photo.jpg"
           (b) Paste the image URL from the published story.
           Option (a) is safer — if WHYY ever moves a file, a
           pasted URL goes blank, but your own copy never does.
           The four below currently use option (b).
   alt:    a short description of the photo for screen readers
           and for when an image fails to load.
   dek:    your line or two about the story.
   ============================================================ */

const HIGHLIGHTS = [

  {
    title: "Upper Darby restricts collaboration with ICE in sweeping ordinance",
    url: "https://whyy.org/articles/upper-darby-pennsylvania-ice-collaboration-ordinance/",
    image: "https://d1fw4rghwibahr.cloudfront.net/wp-content/uploads/2026/09/upper-darby-ice-legislation-2-1024x567.jpeg",
    alt: "Residents holding signs reading 'ICE out of Upper Darby' applaud as the township council passes an ordinance.",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Politics & Policy",
    medium: "audio",
    listen: "1:08",
    dek: "Upper Darby passed one of the region's most expansive limits on cooperation with federal immigration enforcement. Nearly a quarter of the township's residents are foreign-born, and speakers packed the council meeting to say so."
  },

  {
    title: "Philly's Latin American Book Fair celebrates authors, culture and community",
    url: "https://whyy.org/articles/philadelphia-latin-american-book-fair/",
    image: "https://d1fw4rghwibahr.cloudfront.net/wp-content/uploads/2026/09/philadelphia-latin-american-book-fair-2026-1-1024x768.jpeg",
    alt: "An author speaks with a reader at a table during the Latin American Book Fair.",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Arts & Entertainment",
    medium: "audio",
    listen: "1:03",
    dek: "The fair's eighth edition filled the Kimmel Center with author meet-and-greets, performances, and the launch of a bilingual poetry press."
  },

  {
    title: "Bucks County Garden of Reflection ceremony remembers 9/11 victims on 25th anniversary",
    url: "https://whyy.org/articles/september-11-bucks-county-garden-reflection-ceremony/",
    image: "https://d1fw4rghwibahr.cloudfront.net/wp-content/uploads/2026/09/911-ceremony-lower-makefield-7-1024x683.jpeg",
    alt: "The Garden of Reflection 9/11 Memorial in Lower Makefield Township.",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Community",
    medium: "article",
    dek: "Twenty-five years on, first responders and the people who lost someone gathered in Lower Makefield to say the names out loud again."
  },

  {
    title: "Nor'easter hits Philadelphia region, bringing high waves, coastal flooding to N.J. and Delaware",
    url: "https://whyy.org/articles/philadelphia-new-jersey-delaware-noreaster-coastal-flooding-high-waves-winds/",
    image: "https://d1fw4rghwibahr.cloudfront.net/wp-content/uploads/2026/09/noreaster-atlantic-city-11-1024x683.jpeg",
    alt: "A sign stands in floodwater along the New Jersey shore during a nor'easter.",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Weather",
    medium: "article",
    dek: "A state of emergency across eight New Jersey counties, voluntary evacuations in shore towns, and water where the road should have been."
  }

  /* ---------------------------------------------------------
     EMILY — your two 2026 Regional Murrow features should go
     at the top of this list. Copy a block above, swap in the
     headline, link, photo and your line or two about it.
     --------------------------------------------------------- */

];


/* ============================================================
   2. STORIES — the running list. No photo needed.

   medium: "article" | "audio" | "photo" | "essay" | "video"
           The filter buttons build themselves from whatever
           mediums appear below, so a button only shows up once
           at least one story uses it.
   topic:  optional label above the headline — delete to skip
   dek:    optional one-liner — delete to skip
   listen: optional runtime for radio, e.g. "1:53" — delete if
           not audio
   ============================================================ */

const STORIES = [

  {
    title: "Nor'easter hits Philadelphia region, bringing high waves, coastal flooding to N.J. and Delaware",
    url: "https://whyy.org/articles/philadelphia-new-jersey-delaware-noreaster-coastal-flooding-high-waves-winds/",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Weather",
    medium: "article"
  },

  {
    title: "Bucks County duo offers 'table conversations' to discuss new 5-part documentary series",
    url: "https://whyy.org/articles/bucks-county-usa-documentary-table-conversations/",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Arts & Entertainment",
    medium: "article"
  },

  {
    title: "Pa. Dems, immigrant rights groups push for info on Moshannon ICE detention center contract as county votes for extension",
    url: "https://whyy.org/articles/moshannon-ice-detention-center-contract-extension-vote/",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Politics & Policy",
    medium: "audio",
    listen: "1:53"
  },

  {
    title: "New documentary series examines the personal side of political division in 'Bucks County, USA'",
    url: "https://whyy.org/articles/bucks-county-usa-documentary-pbs/",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Arts & Entertainment",
    medium: "audio",
    listen: "1:01"
  },

  {
    title: "Upper Darby restricts collaboration with ICE in sweeping ordinance",
    url: "https://whyy.org/articles/upper-darby-pennsylvania-ice-collaboration-ordinance/",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Politics & Policy",
    medium: "audio",
    listen: "1:08"
  },

  {
    title: "Philly's Latin American Book Fair celebrates authors, culture and community",
    url: "https://whyy.org/articles/philadelphia-latin-american-book-fair/",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Arts & Entertainment",
    medium: "audio",
    listen: "1:03"
  },

  {
    title: "Bucks County Garden of Reflection ceremony remembers 9/11 victims on 25th anniversary",
    url: "https://whyy.org/articles/september-11-bucks-county-garden-reflection-ceremony/",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Community",
    medium: "article"
  },

  {
    title: "Pa. election 2026: What to know about the 1st Congressional District race in Bucks County",
    url: "https://whyy.org/articles/election-2026-pennsylvania-1st-congressional-district-voter-guide/",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Politics & Policy",
    medium: "article"
  }

];
