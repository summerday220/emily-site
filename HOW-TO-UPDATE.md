# How to update your site

Hi Emily — this is everything you'll ever need to do to keep the site
current. No coding knowledge assumed. Find the thing you want to do, follow
the steps.

**The single most reassuring thing to know:** GitHub keeps a copy of every
version of every file, forever. You cannot permanently break this. If
something goes wrong there is always an undo, and there's a section at the
bottom explaining exactly how.

---

## The five-minute orientation

Your site is four files that live on github.com. You edit them in your web
browser — nothing to download, nothing to install, works from any computer
or your phone.

| File | What's in it |
|---|---|
| **stories.js** | Your stories. This is the one you'll open 95% of the time. |
| **index.html** | Your name, bio, jobs, education, contact links. |
| **style.css** | Colors and fonts. You'll probably never touch it. |
| **resume.pdf** | The downloadable resume. |

Every edit follows the same five clicks:

1. Go to your repository on **github.com**
2. Click the file you want to change
3. Click the **pencil icon** in the top right
4. Make your change
5. Scroll down, click the green **Commit changes** button, then **Commit
   changes** again in the popup

Your live site updates about a minute later. That's it. That's the whole
system.

---

## The two rules

Almost every problem is one of these two things.

**Rule 1 — every line ends with a comma, except the last one in a block.**

```
    title: "My headline",        ← comma
    url: "https://...",          ← comma
    medium: "article"            ← no comma, it's last
```

**Rule 2 — text goes inside "double quotes."**

```
    outlet: "WHYY News",         ← right
    outlet: WHYY News,           ← wrong, will break
```

If your page ever goes blank, it's one of these. Scroll to "When something
breaks" at the bottom.

---

## Adding a story to Recent work

Open **stories.js**. Scroll past the Highlights section to the one labelled
`2. STORIES`.

Copy this and paste it right after the `const STORIES = [` line:

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

Then change the values to match your story. A few notes:

- **topic** is the little label above the headline. Use whatever you like —
  "Weather", "Community", "Arts & Entertainment". Delete the whole line if
  you don't want one.
- **medium** must be one of: `"article"`, `"audio"`, `"photo"`, `"essay"`,
  `"video"`. This controls the filter buttons.
- **For a radio piece**, add a runtime line so the little play triangle
  shows up:
  ```
    medium: "audio",
    listen: "1:53"
  ```

Newest story goes at the top. Commit, done.

### About those filter buttons

They build themselves. Right now the site shows All / Articles / Audio,
because those are the only two mediums you've used. The moment you add your
first story with `medium: "photo"`, a **Photos** button appears on its own.
Nothing to set up.

---

## Adding a highlight (the big ones with photos)

Highlights are the showcase pieces at the top — photo, a couple of lines,
links to the story. Keep it to about four to six so they stay special.

**Step 1: get the photo onto GitHub.**

1. Save the photo to your computer. Give it a simple name, all lowercase,
   no spaces — `murrow-feature.jpg`, not `Screen Shot 2026-10-02 at
   4.51.09 PM.png`
2. On your repository's main page, click **Add file** → **Upload files**
3. Drag the photo in, click **Commit changes**

**Step 2: add the block.**

Open **stories.js**, find the section labelled `1. HIGHLIGHTS`, and paste
this right after `const HIGHLIGHTS = [`:

```
  {
    title: "Paste your headline here",
    url: "https://whyy.org/articles/paste-the-link-here/",
    image: "murrow-feature.jpg",
    alt: "Short description of what's in the photo",
    outlet: "WHYY News",
    date: "October 2026",
    topic: "Community",
    medium: "audio",
    listen: "4:12",
    dek: "Your line or two about the story — what it found, why it mattered, what you want someone to feel before they click."
  },
```

The `image` value is just the filename you uploaded, in quotes.

**About `alt`:** this is the description a blind reader's screen reader
announces, and what shows if the image fails to load. One short sentence.
"Residents hold signs at a township council meeting," not "photo" or "image
of story."

**About `dek`:** this is yours. A line or two in your voice. It's the thing
that makes someone click.

**Two optional extras.** Add either line to any highlight:

```
    award: "2026 Regional Murrow Award — Excellence in Sound",
    with: "Kenny Cooper",
```

`award` puts a gold line above the headline — your two Murrow winners use
it. `with` credits a co-byline in the small grey line underneath. Leave
either out and it simply doesn't appear.

**A story can be in both lists.** If it's in Highlights and in Stories, the
page shows it once, up top, and skips the duplicate below. You don't have to
manage that.

---

## Changing a photo

Same two steps as above. Upload the new photo (**Add file** → **Upload
files**), then open stories.js and change the `image:` line to the new
filename.

If you upload a photo with the exact same name as an old one, it replaces it
and you don't need to edit anything.

### Note on the four photos that are there now

The four current highlight photos point at WHYY's image server rather than
living on your site. They work, but if WHYY ever moves or renames one of
those files, that photo goes blank without warning.

When you have a spare twenty minutes: save those four images, upload them
the way described above, and change each `image:` line to the filename. Then
nothing outside your control can break them.

---

## Editing your bio, name, or contact links

These live in **index.html**. It looks more intimidating than stories.js but
you're only ever changing the words between the `>` and `<` symbols.

To change your bio, find this near the middle:

```html
<section id="about" class="bio">
```

Below it are three paragraphs, each wrapped in `<p>` and `</p>`. Change the
words inside. Leave the `<p>` and `</p>` alone.

```html
<p>I'm a bilingual multimedia journalist covering...</p>
     ↑ change everything in here            ↑ leave these tags
```

Same idea for your email, your job title, the line under your name — find
the words, change the words, leave the pointy brackets alone.

I've left comments throughout the file that start with `<!-- EMILY:` marking
the spots you're most likely to want.

---

## Adding a new job to Experience

In **index.html**, find `<section id="experience">`. Copy one of the blocks
that looks like this and paste it above the others:

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

## Updating your resume

There are two versions on purpose:

- **Your full resume** — with your address, phone and references. Keep using
  this for actual job applications. Don't put it on the site.
- **`Neil.Emily.Resume.web.docx`** — the same resume with your home address,
  your phone number, and Madhu's and Maria's direct phone numbers taken out,
  because anyone on the internet can download whatever's on the site. The
  References section reads "Available on request," which is standard and
  what hiring editors expect.

To update the web one:

1. Open `Neil.Emily.Resume.web.docx` and make your change
2. **Word:** File → Save As → change the format to **PDF**
   **Google Docs:** File → Download → **PDF Document**
3. Name it exactly `resume.pdf` — lowercase, no spaces
4. On GitHub: **Add file** → **Upload files**, drag it in, **Commit
   changes**. Same filename means it replaces the old one automatically.

**Don't paste your address or phone back in.** They were removed on purpose.

### The one annoying part

Your Experience section on the page is a second copy of your resume. A new
job means changing it in two places — the page and the PDF.

My suggestion: **update the page first, always.** It's a two-minute edit
from any browser, and it's what people actually read — most visitors never
click download. Refresh the PDF when you're job hunting and it matters.

---

## Changing the colors

In **style.css**, right at the top:

```css
--indigo:#243a6b;   headings, links, the dark band at the bottom
--gold:#c9891a;     the accent rules and underlines
```

Change a color code there and it changes everywhere on the site. If you want
to try a color, google "hex color picker," find one you like, and paste the
`#` code in.

---

## When something breaks

**The page is blank, or the stories are gone.**

Almost always a missing comma or a missing quote mark in stories.js. Go back
to the file, click the pencil, and look carefully at the block you just
added. Compare it to the ones around it.

**Just undo it instead.**

Faster and always works:

1. Go to your repository
2. Click **Commits** (near the top, it shows a number and a clock icon)
3. Find your most recent change in the list
4. Click the **`...`** on the right → **Revert**
5. Confirm

Your site goes back to exactly how it was a minute later. Then try the edit
again.

**The photo isn't showing.**

Check the filename matches exactly, including capital letters and the
extension. `Photo.JPG` and `photo.jpg` are different files as far as the web
is concerned.

**A change isn't showing up on the live site.**

Give it two minutes, then refresh with **Cmd+Shift+R** (Mac) or
**Ctrl+Shift+R** (Windows). That forces your browser to fetch the new
version instead of the one it saved.

**Still stuck?**

Every version is saved. Nothing is lost. Ask Jaz.

---

## Quick reference

| I want to... | File | Section |
|---|---|---|
| Add a recent story | stories.js | `2. STORIES` |
| Add a highlight with a photo | stories.js | `1. HIGHLIGHTS` |
| Change a photo | Upload it, then stories.js | the `image:` line |
| Edit my bio | index.html | `id="about"` |
| Add a job | index.html | `id="experience"` |
| Change my email or links | index.html | top and bottom |
| Update the resume | Word/Docs → PDF → upload | — |
| Change colors | style.css | the top |
| Undo a mistake | GitHub **Commits** → **Revert** | — |
