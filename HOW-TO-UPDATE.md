# How to update your site

Hi Emily. This is everything you'll ever need to keep the site current.
No coding knowledge assumed. Find the thing you want to do, follow the
steps.

**The most reassuring thing to know first:** GitHub keeps a copy of every
version of every file, forever. You cannot permanently break this. There
is always an undo, and "When something breaks" at the bottom shows you
exactly how in four clicks.

---

## Contents

- [Start here: how this actually works](#start-here-how-this-actually-works)
- [The five clicks](#the-five-clicks)
- [The two rules](#the-two-rules)
- [Add a story to Recent work](#add-a-story-to-recent-work)
- [Add a highlight, with a photo](#add-a-highlight-with-a-photo)
- [Photos: the one thing worth knowing](#photos-the-one-thing-worth-knowing)
- [Change your headshot](#change-your-headshot)
- [Adding your Signal link](#adding-your-signal-link)
- [Edit your bio, job title or links](#edit-your-bio-job-title-or-links)
- [Add a new job](#add-a-new-job)
- [Update your resume](#update-your-resume)
- [Change the colors](#change-the-colors)
- [Please never put these on the site](#please-never-put-these-on-the-site)
- [Six things that trip everyone up](#six-things-that-trip-everyone-up)
- [When something breaks](#when-something-breaks)
- [Quick reference](#quick-reference)

---

## Start here: how this actually works

Your site lives on **github.com**. GitHub is just a place that stores
files and serves them to the internet as a website. Your repository — or
"repo" — is the folder holding them.

**The single most important thing to understand:**

> Your website is the copy on GitHub. A copy on your laptop is not the
> website. Editing a file on your computer changes nothing until you
> upload it.

Almost every "I changed it but nothing happened" moment comes from this.
The simplest way to avoid it entirely is to **edit directly on
github.com in your browser** — then there's only ever one copy. That's
what the steps below do. Nothing to install, works from any computer or
your phone.

Here's what's in the folder:

The site is **one page with two tabs**, Work and About.

Clicking a tab swaps the content in the middle. Your header and the
contact bar never move — nothing reloads, so there's no flicker. The
address bar still changes to `#about`, so you can send someone straight
to that tab, and the back button works.

Everything is in **index.html**. There's no second page to keep in
sync.

| File | What it's for |
|---|---|
| **stories.js** | Your stories. This is the one you'll open almost every time. |
| **index.html** | The whole page: header, both tabs, contact bar. |
| **style.css** | Colors, fonts, spacing. |
| **resume.pdf** | The resume people download. |
| **Neil.Emily.Resume.web.docx** | The editable version of that resume. |
| `headshot.jpg` and the story photos | Your images. |

You'll also see **about.html** in the folder. It's a two-line file that
forwards anyone with the old link to the About tab. Leave it alone.

---

## The five clicks

Every text edit works the same way:

1. Go to your repository on **github.com**
2. Click the name of the file you want to change
3. Click the **pencil icon**, top right of the file
4. Make your change
5. Scroll down, click green **Commit changes**, then **Commit changes**
   again in the popup that appears

Leave "Commit directly to the `main` branch" selected — it's the default,
and it's what makes the change go live.

Wait about a minute, then look at your site. **If you don't see the
change, press Ctrl+Shift+R** (or Cmd+Shift+R on a Mac). That forces your
browser to fetch the new version instead of the one it saved earlier.
This catches people out constantly.

That's the whole system.

---

## The two rules

Nearly every problem is one of these.

**Rule 1 — every line ends with a comma, except the last one in a block.**

```
    title: "My headline",        ← comma
    url: "https://...",          ← comma
    medium: "article"            ← no comma, it's the last one
```

**Rule 2 — text goes inside "double quotes."**

```
    outlet: "WHYY News",         ← right
    outlet: WHYY News,           ← wrong, this will break the page
```

If the page goes blank or the stories vanish, it's one of these. Don't
hunt for it — just undo and try again. See the bottom of this file.

---

## Add a story to Recent work

Open **stories.js**. Scroll past Highlights to the part labelled
`2. STORIES`.

Copy this, and paste it directly after the `const STORIES = [` line:

```
  {
    title: "Paste your headline here",
    url: "https://whyy.org/articles/paste-the-link-here/",
    outlet: "WHYY News",
    date: "October 2026",
    topic: "Politics & Policy",
    medium: "article"
  },
```

Change the values to match your story. Notes:

- **topic** is the small label above the headline. Use whatever you like —
  "Weather", "Community", "Arts & Entertainment". Delete the whole line if
  you don't want one.
- **medium** must be one of: `"article"`, `"audio"`, `"photo"`,
  `"essay"`, `"video"`.
- **For a radio piece**, add a runtime so the little play triangle shows:
  ```
    medium: "audio",
    listen: "1:53"
  ```

Newest story at the top. Commit, done.

**The filter buttons build themselves.** Right now the site shows All /
Articles / Audio, because those are the only two kinds you've posted. The
first time you add a story with `medium: "photo"`, a **Photos** button
appears on its own. Nothing to set up.

---

## Add a highlight, with a photo

Highlights are the showcase pieces at the top, with a photo and a couple
of lines. Keep it to about four to six so they stay special.

### Step 1 — get the photo

Open your published story, right-click the main photo, **Save image as**,
and save it somewhere you'll find it.

*If right-click doesn't offer to save it:* right-click and choose **Open
image in new tab** first, then save it from there. Some sites block the
direct save.

Name it something short and plain, lowercase, no spaces:
`bluegrass.jpg`, not `Screen Shot 2026-10-02 at 4.51.09 PM.png`.

**Check the file size before you upload it.** Right-click the file on
your computer → Properties (Windows) or Get Info (Mac). If it's over
about 400 KB, see the photos section below — there's an easy fix.

### Step 2 — upload it to GitHub

On your repository's main page:

1. Click **Add file** (top right, next to the green Code button) →
   **Upload files**
2. Drag the photo in
3. Scroll down, **Commit changes**

### Step 3 — add the block

Open **stories.js**, find the part labelled `1. HIGHLIGHTS`, and paste
this right after `const HIGHLIGHTS = [`:

```
  {
    title: "Paste your headline here",
    url: "https://whyy.org/articles/paste-the-link-here/",
    image: "bluegrass.jpg",
    alt: "Short description of what's in the photo",
    outlet: "WHYY News",
    date: "October 2026",
    topic: "Community",
    medium: "audio",
    listen: "4:12",
    dek: "Your line or two about the story — what it found, why it mattered, what you want someone to feel before they click."
  },
```

The `image` value is just the filename you uploaded, in quotes. Nothing
else — no `https://`, no folder name.

**About `alt`:** this is what a blind reader's screen reader says out
loud, and what appears if the image ever fails to load. One short
sentence describing what's actually in the frame. *"Residents hold signs
at a township council meeting"* — not *"photo"* or *"image of my story."*

**About `dek`:** this one's yours. A line or two in your own voice. It's
what makes someone click.

**Two optional extras** you can add to any highlight:

```
    award: "2026 Regional Murrow Award for Excellence in Sound",
    with: "Kenny Cooper",
```

`award` puts a gold line above the headline — your two Murrow winners use
it. `with` credits a co-byline in the small grey line underneath. Leave
either out and it simply doesn't appear.

**A story can be in both lists.** If it's in Highlights and in Stories,
the page shows it once, up top, and drops the duplicate below. You don't
have to manage that.

---

## Photos: the one thing worth knowing

**Every photo on your site is your own copy, stored in your repository.**
That's deliberate. Earlier versions pointed at WHYY's image servers, and
the trouble with that is silent failure: if WHYY ever moves or renames a
file, the photo goes blank and *nobody tells you*. Visitors see an empty
box and you have no idea. Your own copy can't do that.

So when you add a highlight, always save the image and upload it. Never
paste a URL from another site.

### Save them as JPEG, not PNG

This one actually matters. PNG is lossless — brilliant for screenshots
and diagrams, wasteful for photographs. Real numbers from your own site:

| | As PNG | As JPEG |
|---|---|---|
| bluegrass | 1,052 KB | **101 KB** |
| garden-of-reflection | 1,173 KB | **131 KB** |

Same picture, no visible difference, one-tenth the weight. Those two PNGs
were heavier than the rest of the entire site put together, and on a
phone that's a slow-loading page.

**So:** if a photo saves as `.png` and it's over about 400 KB, open it in
any image editor (Windows Photos, Mac Preview, or photopea.com which is
free in a browser) and re-save as JPEG. Then upload that.

### One sneaky thing to watch for

A file can be *named* `.jpg` but not actually be a JPEG inside. This
happens when you save an image from a site that serves a newer format
called AVIF or WebP. It usually still displays, but it can break in older
browsers, and it will confuse LinkedIn, Word and email if you reuse it.

You can't tell by looking. If a photo behaves oddly anywhere, that's
usually why — open it and re-save it as JPEG and the problem goes away.

### What size to aim for

Roughly **800 to 1000 pixels wide** is ideal. The photos display at about
440 pixels, and doubling that keeps them sharp on high-resolution
screens. Bigger than 1200 is just slower with nothing to show for it.

---

## Change your headshot

Same as any photo. Save the new one as `headshot.jpg`, upload it via
**Add file → Upload files**, commit.

Because the filename is identical, it replaces the old one and you don't
need to edit anything else.

A **square** photo works best — it's displayed as a circle, so anything
tall or wide gets cropped at the sides.

---

## Adding your Signal link

There's a spot ready for it in the dark contact bar at the bottom of
both pages. It's switched off until you're ready.

**First, get a username link — not a phone link.**

In Signal: **Settings → Profile → Username**. Set a username, then copy
the link it offers.

This matters. Signal also gives out a `signal.me` link built from your
phone number, and that link *contains your number* — anyone who sees it
on your site has it. A username link doesn't. Given what you cover,
that's the difference worth caring about, and you can change or delete
a username any time without touching your number.

**Then switch it on.** In **index.html**, find this near the bottom:

```html
<!--<li><a href="PASTE-YOUR-SIGNAL-LINK-HERE">Signal</a></li>-->
```

Delete the `<!--` at the start and the `-->` at the end, and swap
`PASTE-YOUR-SIGNAL-LINK-HERE` for your link. It should end up looking
like:

```html
<li><a href="https://signal.me/#eu/your-actual-link">Signal</a></li>
```

That's it — it only exists once now.

---

## Edit your bio, job title or links

These live in **index.html**. It looks more intimidating than stories.js,
but you are only ever changing the words *between* the pointy brackets.

Everything is in **index.html**. Your bio sits inside the About tab —
search the file for:

```html
<section id="about" class="bio">
```

Below it are paragraphs, each wrapped in `<p>` and `</p>`. Change the
words inside. Leave the tags alone.

```html
<p>I'm a bilingual multimedia journalist covering...</p>
     ↑ change everything in here             ↑ don't touch these
```

Same idea for your email, your job title, the line under your name. Find
the words, change the words, leave the brackets.

I've left notes throughout the file starting with `<!-- EMILY:` marking
the spots you're most likely to want.

---

## Add a new job

In **index.html**, find `<section id="experience">`. Copy one of these
blocks and paste it above the others:

```html
      <li>
        <span class="when">Mar 2024 – present</span>
        <div>
          <p class="what">Your job title<span class="where">Where, City</span></p>
          <p class="note">A sentence or two about what you did there.</p>
        </div>
      </li>
```

Change the four bits of text. Everything else stays as it is.

---

## Update your resume

There are two versions on purpose:

- **Your full resume** — with your address, phone and references. Keep
  using this for actual applications. It should never go on the site.
- **`Neil.Emily.Resume.web.docx`** — the public copy, and the file you
  edit when something changes.

Four things were taken out of the public copy, because anyone on the
internet can download whatever is on the site:

| Removed | Why |
|---|---|
| Your home address | A public page isn't the place for where you live |
| Your phone number | Same, plus it invites spam calls |
| Your references' direct phone numbers | Other people's contact details shouldn't be public unless they've agreed to it |
| The References section itself | Editors ask when they want them, and "available on request" is assumed — it's a line that says nothing |

What's left: your name, Philadelphia PA, your Gmail, and your X and
Instagram handles. It ends on Languages.

To update the web one:

1. Open `Neil.Emily.Resume.web.docx` and make your change
2. **Word:** File → Save As → change format to **PDF**
   **Google Docs:** File → Download → **PDF Document**
3. Name it exactly `resume.pdf` — lowercase, no spaces
4. Upload it via **Add file → Upload files**. Same filename replaces the
   old one automatically.

**Don't paste your address, your phone, or the references back in.** If
you want a version with references for a specific application, make that
one separately and send it by email — don't put it on the site.

### The one annoying part

The Experience section on the page is a second copy of your resume, so a
new job means changing it in two places.

My suggestion: **update the page first, always.** It's a two-minute edit
from any browser, and it's what people actually read — most visitors
never click download. Refresh the PDF when you're job hunting and it
matters.

---

## Change the colors

Right at the top of **style.css**:

```css
--primary:#284858;       headings and links
--primary-deep:#1d3744;  the dark bar at the bottom
--accent:#ab633f;        the rules, underlines and award marks
--accent-text:#8a4c2e;   the same accent, darker, where it's used as text
```

Change a code there and it changes on both pages at once.

These colours come from your headshot. Its background sits at one side of
the colour wheel (cool blue-grey) and your skin tones at the opposite
side (warm) — that contrast is part of why the photo works. The site uses
the same pairing, deliberately less saturated than the photo, so the
photography stays the most colourful thing on the page.

There are two versions of the accent because the brighter one isn't dark
enough to read as small text. If you change one, change both.

---

## Please never put these on the site

Anything on the site can be downloaded by anyone who finds it, and given
that you cover immigration enforcement and policing, that's worth being
deliberate about.

Keep off the site:

- **Your home address.** It was removed from the web resume on purpose.
- **Your phone number.** Same. Email is the right public contact.
- **Other people's contact details**, unless they've agreed to being
  listed publicly. This is why your references' phone numbers aren't in
  the web resume.

Email, work handles and professional links are all fine. That's what a
public page is for.

---

## Six things that trip everyone up

**1. "Add files via upload" is not a button.** When you look at your list
of files, that grey text beside each filename is a *label* describing the
last change. Clicking it shows you a history page. The button you want is
**Add file**, up near the green Code button.

**2. Both tabs live in one file.** Work and About are two blocks inside index.html, not two files. Scroll down past the Highlights and you'll find the About content in the same document.

**3. Your computer is not the website.** Changing a file in a folder on
your laptop does nothing until you upload it. Editing directly on
github.com avoids the problem entirely.

**4. Your browser shows you an old copy.** After committing, wait a
minute and press **Ctrl+Shift+R** (Cmd+Shift+R on Mac). Nine times out of
ten "it didn't work" is just a cached page.

**5. Filenames are literal.** `Photo.JPG` and `photo.jpg` are different
files as far as the web is concerned. Lowercase, no spaces, and match the
filename in stories.js exactly.

**6. Browsers rename downloads.** If you download a file and re-upload
it, check it isn't now called `index (1).html`. Rename it back first.

---

## When something breaks

### Just undo it

Faster than debugging, and it always works:

1. Go to your repository
2. Click **Commits** near the top (it shows a number and a clock icon)
3. Find your most recent change in the list
4. Click the **`...`** on the right → **Revert**
5. Confirm

Your site goes back to exactly how it was, about a minute later. Then try
the edit again more slowly.

### Or work out what happened

| What you see | What it usually is |
|---|---|
| Page blank, or stories gone | A missing comma or quote mark in stories.js. Undo. |
| A photo isn't showing | Filename doesn't match `stories.js` exactly, including capitals |
| Page looks like plain unstyled text | `style.css` didn't upload, or got renamed |
| Change isn't appearing | Wait a minute, then Ctrl+Shift+R |
| Site loads really slowly | A photo is too big. Check for anything over 400 KB. |

### Still stuck?

Every version is saved. Nothing is ever lost. Ask Jaz.

---

## Quick reference

| I want to... | Where | Section |
|---|---|---|
| Add a recent story | stories.js | `2. STORIES` |
| Add a highlight with a photo | Upload photo, then stories.js | `1. HIGHLIGHTS` |
| Swap a photo | Upload with the same filename | — |
| Change my headshot | Upload as `headshot.jpg` | — |
| Edit my bio | index.html | `id="about"` |
| Add a job | index.html | `id="experience"` |
| Change my email or links | index.html | top and bottom |
| Turn on my Signal link | index.html | the contact bar |
| Turn on my Signal link | **both** index.html and about.html | the contact bar |
| Update the resume | Word/Docs → PDF → upload | — |
| Change colors | style.css | the top |
| Undo a mistake | GitHub **Commits** → **Revert** | — |
