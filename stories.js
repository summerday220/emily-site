/* ============================================================
   EMILY'S STORIES — this is the only file you need to edit.

   There are three lists below.

   1. HIGHLIGHTS — your showcase pieces, with photos, at the top.
   2. COLLECTIONS — themed sections like "Immigration coverage".
      Each one has a title, a line about the beat, and a few
      stories. No photos needed.
   3. STORIES — the full running list underneath, which readers
      can filter by topic.

   Anything you put in HIGHLIGHTS or COLLECTIONS is automatically
   skipped in the STORIES list, so nothing shows up twice. That
   means you can keep STORIES as a complete record and just
   promote your best pieces upward.

   TO ADD ANYTHING: copy a block from { to }, paste it at the
   TOP of the right list, change the values. Keep the comma
   between blocks.

   Step-by-step instructions, in plain English, are in
   HOW-TO-UPDATE.md — open that first if this looks confusing.
   ============================================================ */


/* ============================================================
   1. HIGHLIGHTS — photo + a line or two + a link

   image:  the photo. Upload it to the repository ("Add file" >
           "Upload files"), then write just the filename here.
           Don't paste a URL from another site — if they move
           the file your photo goes blank and nobody tells you.
   alt:    a short description of the photo, for screen readers
           and for when an image fails to load.
   dek:    your line or two about the story.
   award:  optional — shows a gold award line above the headline.
   with:   optional — a co-byline, e.g. "Kenny Cooper".
   ============================================================ */

const HIGHLIGHTS = [

  {
    title: "'Music from the heart': Bluegrass tradition blossoms at a family-owned music shop in Bucks County",
    url: "https://whyy.org/articles/bucks-county-folk-music-shop-bluegrass-tradition/",
    image: "bluegrass.jpg",
    alt: "Ben Jarnutowski playing banjo at the music shop.",
    outlet: "WHYY News",
    date: "January 2025",
    topic: "Arts & Culture",
    medium: "audio",
    listen: "4:58",
    award: "2026 Regional Murrow Award for Excellence in Sound",
    dek: "In an on-demand economy, the kind of experience this shop offers is rare, and it has grown a thriving bluegrass community across the region."
  },

  {
    title: "Suburban Philadelphia skaters find community in roller derby: 'The harder you hit them, the more you love them'",
    url: "https://whyy.org/articles/roller-derby-suburbs-community/",
    image: "roller-derby.jpg",
    alt: "The Brandywine Roller Derby team at a Tuesday evening practice.",
    outlet: "WHYY News",
    date: "May 2025",
    topic: "Community",
    medium: "audio",
    listen: "3:24",
    award: "2026 Regional Murrow Award for Sports Reporting",
    with: "Kenny Cooper",
    dek: "Somewhere behind the bruises and the collisions, skaters in Bucks, Chester and Montgomery counties find acceptance in a full-contact sport."
  },

  {
    title: "Upper Darby restricts collaboration with ICE in sweeping ordinance",
    url: "https://whyy.org/articles/upper-darby-pennsylvania-ice-collaboration-ordinance/",
    image: "upper-darby-ice.jpg",
    alt: "Residents holding signs reading 'ICE out of Upper Darby' applaud as the township council passes an ordinance.",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Immigration",
    medium: "audio",
    listen: "1:08",
    dek: "Upper Darby passed one of the region's most expansive limits on cooperation with federal immigration enforcement. Nearly a quarter of the township's residents are foreign-born, and speakers packed the council meeting to say so."
  },

  {
    title: "Philly's Latin American Book Fair celebrates authors, culture and community",
    url: "https://whyy.org/articles/philadelphia-latin-american-book-fair/",
    image: "book-fair.jpg",
    alt: "An author talks with a visitor across a table of books at the Latin American Book Fair.",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Arts & Culture",
    medium: "audio",
    listen: "1:03",
    dek: "The fair's eighth edition filled the Kimmel Center with author meet-and-greets, performances, and the launch of a bilingual poetry press."
  },

  {
    title: "Bucks County Garden of Reflection ceremony remembers 9/11 victims on 25th anniversary",
    url: "https://whyy.org/articles/september-11-bucks-county-garden-reflection-ceremony/",
    image: "garden-of-reflection.jpg",
    alt: "The inscribed memorial stone at the Garden of Reflection in Lower Makefield Township.",
    outlet: "WHYY News",
    date: "September 2026",
    topic: "Community",
    medium: "article",
    dek: "Twenty-five years on, first responders and the people who lost someone gathered in Lower Makefield to say the names out loud again."
  }

];


/* ============================================================
   2. COLLECTIONS — themed sections

   Each collection is a heading, one line about the beat, and
   the stories you want to feature under it. Two or three each
   works best; more and it stops feeling selected.

   To add a whole new section, copy one block from { to } —
   including its title, note and stories — and paste it into
   the list. To retire one, delete its block.
   ============================================================ */

const COLLECTIONS = [

  {
    title: "Immigration coverage",
    note: "Tracking federal immigration enforcement across the Philadelphia suburbs: the municipalities limiting cooperation with ICE, the courts testing detention policy, and the state's largest detention center.",
    stories: [
      {
        title: "ICE mandatory detention policy is unlawful, federal appeals court in Philly rules",
        url: "https://whyy.org/articles/immigration-mandatory-detention-policy-unlawful-appeals-court-ruling-philadelphia/",
        outlet: "WHYY News",
        date: "August 2026",
        medium: "audio",
        listen: "1:06",
        dek: "The Third Circuit struck down the administration's policy of holding undocumented immigrants without bond hearings."
      },
      {
        title: "Pa. Dems, immigrant rights groups push for info on Moshannon ICE detention center contract as county votes for extension",
        url: "https://whyy.org/articles/moshannon-ice-detention-center-contract-extension-vote/",
        outlet: "WHYY News",
        date: "September 2026",
        medium: "audio",
        listen: "1:53",
        dek: "Clearfield County commissioners approved a six-month extension at Pennsylvania's largest ICE detention facility, over calls for the contract to be made public."
      }
    ]
  },

  {
    title: "Election 2026",
    note: "Race-by-race coverage of the Bucks County contests on the November ballot, including one of the most closely watched congressional seats in the country.",
    stories: [
      {
        title: "Pa. election 2026: What to know about the 1st Congressional District race in Bucks County",
        url: "https://whyy.org/articles/election-2026-pennsylvania-1st-congressional-district-voter-guide/",
        outlet: "WHYY News",
        date: "September 2026",
        medium: "article",
        dek: "Republican incumbent Brian Fitzpatrick faces Democrat Bob Harvie in what is widely seen as his most competitive challenge yet."
      },
      {
        title: "Pa. election 2026: What Bucks County voters should know about the 6th Senate District race between Frank Farry and Eileen Hartnett Albillar",
        url: "https://whyy.org/articles/election-2026-pennsylvania-senate-sixth-district-voter-guide/",
        outlet: "WHYY News",
        date: "September 2026",
        medium: "article",
        dek: "A face-off that could flip the balance of power in the Pennsylvania state Senate."
      }
    ]
  }

];


/* ============================================================
   3. STORIES — the full running list

   Readers filter these by topic. The filter buttons build
   themselves from whatever topics appear below, so a new topic
   gets its own button the moment you use it, and a topic you
   stop using disappears.

   topic:  "Immigration" | "Elections" | "Community" |
           "Arts & Culture" | "Courts & Law" | "Weather"
           — or anything else you like. Keep the spelling
           consistent or you'll get two buttons for one topic.
   medium: "article" | "audio" | "photo" | "essay" | "video"
   listen: optional runtime for radio, e.g. "1:53"
   ============================================================ */

const STORIES = [

  /* ---------- September 2026 ---------- */
  {
    title: "Nor'easter hits Philadelphia region, bringing high waves, coastal flooding to N.J. and Delaware",
    url: "https://whyy.org/articles/philadelphia-new-jersey-delaware-noreaster-coastal-flooding-high-waves-winds/",
    outlet: "WHYY News", date: "September 2026", topic: "Weather", medium: "article"
  },
  {
    title: "Bucks County duo offers 'table conversations' to discuss new 5-part documentary series",
    url: "https://whyy.org/articles/bucks-county-usa-documentary-table-conversations/",
    outlet: "WHYY News", date: "September 2026", topic: "Arts & Culture", medium: "article"
  },
  {
    title: "Pa. Dems, immigrant rights groups push for info on Moshannon ICE detention center contract as county votes for extension",
    url: "https://whyy.org/articles/moshannon-ice-detention-center-contract-extension-vote/",
    outlet: "WHYY News", date: "September 2026", topic: "Immigration", medium: "audio", listen: "1:53"
  },
  {
    title: "New documentary series examines the personal side of political division in 'Bucks County, USA'",
    url: "https://whyy.org/articles/bucks-county-usa-documentary-pbs/",
    outlet: "WHYY News", date: "September 2026", topic: "Arts & Culture", medium: "audio", listen: "1:01"
  },
  {
    title: "Upper Darby restricts collaboration with ICE in sweeping ordinance",
    url: "https://whyy.org/articles/upper-darby-pennsylvania-ice-collaboration-ordinance/",
    outlet: "WHYY News", date: "September 2026", topic: "Immigration", medium: "audio", listen: "1:08"
  },
  {
    title: "Philly's Latin American Book Fair celebrates authors, culture and community",
    url: "https://whyy.org/articles/philadelphia-latin-american-book-fair/",
    outlet: "WHYY News", date: "September 2026", topic: "Arts & Culture", medium: "audio", listen: "1:03"
  },
  {
    title: "Bucks County Garden of Reflection ceremony remembers 9/11 victims on 25th anniversary",
    url: "https://whyy.org/articles/september-11-bucks-county-garden-reflection-ceremony/",
    outlet: "WHYY News", date: "September 2026", topic: "Community", medium: "article"
  },
  {
    title: "Pa. election 2026: What to know about the 144th House District race in Bucks County",
    url: "https://whyy.org/articles/election-2026-pennsylvania-senate-144th-district-voter-guide/",
    outlet: "WHYY News", date: "September 2026", topic: "Elections", medium: "article"
  },
  {
    title: "Pa. election 2026: What to know about the 1st Congressional District race in Bucks County",
    url: "https://whyy.org/articles/election-2026-pennsylvania-1st-congressional-district-voter-guide/",
    outlet: "WHYY News", date: "September 2026", topic: "Elections", medium: "article"
  },
  {
    title: "Pa. election 2026: What to know about the 142nd House District race in Bucks County",
    url: "https://whyy.org/articles/election-2026-pennsylvania-senate-142nd-district-voter-guide/",
    outlet: "WHYY News", date: "September 2026", topic: "Elections", medium: "article"
  },
  {
    title: "Pa. election 2026: What Bucks County voters should know about the 6th Senate District race between Frank Farry and Eileen Hartnett Albillar",
    url: "https://whyy.org/articles/election-2026-pennsylvania-senate-sixth-district-voter-guide/",
    outlet: "WHYY News", date: "September 2026", topic: "Elections", medium: "article"
  },

  /* ---------- August 2026 ---------- */
  {
    title: "Upper Darby introduces expansive ICE ordinance",
    url: "https://whyy.org/articles/upper-darby-immigration-ice-ordinance-pennsylvania/",
    outlet: "WHYY News", date: "August 2026", topic: "Immigration", medium: "audio", listen: "1:29"
  },
  {
    title: "ICE mandatory detention policy is unlawful, federal appeals court in Philly rules",
    url: "https://whyy.org/articles/immigration-mandatory-detention-policy-unlawful-appeals-court-ruling-philadelphia/",
    outlet: "WHYY News", date: "August 2026", topic: "Immigration", medium: "audio", listen: "1:06"
  },
  {
    title: "Lansdowne bans collaboration agreements with U.S. Immigration and Customs Enforcement",
    url: "https://whyy.org/articles/lansdowne-bans-collaboration-agreements-ice/",
    outlet: "WHYY News", date: "August 2026", topic: "Immigration", medium: "audio", listen: "1:23"
  },
  {
    title: "Pa. election 2026: How to request, fill out and return your mail ballot",
    url: "https://whyy.org/articles/election-2026-pennsylvania-mail-ballot-how-to/",
    outlet: "WHYY News", date: "August 2026", topic: "Elections", medium: "article"
  },
  {
    title: "Montgomery County approves new policy for fixing mail ballot errors",
    url: "https://whyy.org/articles/montgomery-county-pennsylvania-mail-ballot-errors-policy-chance/",
    outlet: "WHYY News", date: "August 2026", topic: "Elections", medium: "article"
  },
  {
    title: "After deadly earthquake, Philadelphia's Colombian community mobilizes recovery efforts",
    url: "https://whyy.org/articles/colombia-earthquake-recovery-efforts-philadelphia-metro/",
    outlet: "WHYY News", date: "August 2026", topic: "Community", medium: "audio", listen: "1:14"
  },

  /* ---------- July 2026 ---------- */
  {
    title: "Philly Puerto Rican community pressures federal officials to act amid 'humanitarian crisis'",
    url: "https://whyy.org/articles/philly-puerto-rican-community-humanitarian-crisis/",
    outlet: "WHYY News", date: "July 2026", topic: "Community", medium: "audio", listen: "1:12"
  },
  {
    title: "ICE is arresting more people at Philadelphia International Airport, advocates say. Here's what to know",
    url: "https://whyy.org/articles/ice-arrests-philadelphia-airport/",
    outlet: "WHYY News", date: "July 2026", topic: "Immigration", medium: "audio", listen: "1:45"
  },
  {
    title: "Philadelphia Mayor Cherelle Parker needs to do more to enforce 'ICE Out' legislation, activists say",
    url: "https://whyy.org/articles/immigrant-rights-groups-philadelphia-ice-out-legislation/",
    outlet: "WHYY News", date: "July 2026", topic: "Immigration", medium: "audio", listen: "1:12"
  },
  {
    title: "Bucks County DA will not charge Quakertown police chief in student ICE protest response",
    url: "https://whyy.org/articles/quakertown-police-chief-no-charges-student-ice-protest-response/",
    outlet: "WHYY News", date: "July 2026", topic: "Immigration", medium: "article"
  },
  {
    title: "South Philly's youth dragon boat team heads to world championships in Taiwan",
    url: "https://whyy.org/articles/youth-dragon-boat-team-philadelphia-championships-taiwan/",
    outlet: "WHYY News", date: "July 2026", topic: "Arts & Culture", medium: "audio", listen: "3:59"
  },
  {
    title: "This Bucks County teenager is taking competitive jump rope to new heights",
    url: "https://whyy.org/articles/jump-rope-champion-bucks-county/",
    outlet: "WHYY News", date: "July 2026", topic: "Community", medium: "audio", listen: "1:07"
  },
  {
    title: "Montgomery County sues social media companies over youth mental health harm",
    url: "https://whyy.org/articles/montgomery-county-sues-social-media-companies-youth-mental-health/",
    outlet: "WHYY News", date: "July 2026", topic: "Courts & Law", medium: "article"
  },

  /* ---------- 2025 ---------- */
  {
    title: "Suburban Philadelphia skaters find community in roller derby: 'The harder you hit them, the more you love them'",
    url: "https://whyy.org/articles/roller-derby-suburbs-community/",
    outlet: "WHYY News", date: "May 2025", topic: "Community", medium: "audio", listen: "3:24", with: "Kenny Cooper"
  },
  {
    title: "'Music from the heart': Bluegrass tradition blossoms at a family-owned music shop in Bucks County",
    url: "https://whyy.org/articles/bucks-county-folk-music-shop-bluegrass-tradition/",
    outlet: "WHYY News", date: "January 2025", topic: "Arts & Culture", medium: "audio", listen: "4:58"
  }

];
