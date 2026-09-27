# Emily's site — setup and maintenance

**Emily: you want `HOW-TO-UPDATE.md` instead.** This file is the setup and
deployment guide.

---

## What's here

```
index.html                    the whole site — header, Work tab, About tab, contact
about.html                    two-line redirect for the old /about.html link
style.css                     colors, type, spacing
stories.js                    the stories  ← the only file that needs regular edits
resume.pdf                    the downloadable resume, personal details removed
Neil.Emily.Resume.web.docx    editable source for that PDF
HOW-TO-UPDATE.md              Emily's guide
README.md                     this
```

To preview locally, double-click `index.html`. It opens in a browser. No
build step, no dependencies, no install.

---

## Decide this first: whose GitHub account?

Whoever owns the repository is the only person who can edit it. If it sits
on your account, Emily has to come to you every time she publishes — you
become the bottleneck, and the site goes stale the way the Wix one did.

| Option | Verdict |
|---|---|
| **Emily makes the account, you set it up while logged into hers** | Best. She owns it outright. Sit together for twenty minutes, or she shares the password. |
| **You make it, add her as a collaborator** (Settings → Collaborators) | Works fine. Repo still lives on your account. |
| **You make it, transfer to her later** | Possible but fiddly, and it briefly breaks the custom domain. |

Everything below works the same either way.

---

## Step 1 — Get the files into one folder

Download all files from the chat into a new folder called `emily-site`.

**Check the filenames.** Browsers rename downloads — `index (1).html`,
`style-2.css`. Rename them back to exactly:

```
index.html   style.css   stories.js   resume.pdf
HOW-TO-UPDATE.md   README.md   Neil.Emily.Resume.web.docx
```

Lowercase, no spaces, no numbers. GitHub Pages looks for `index.html`
specifically and serves a blank page without it.

You don't need `headshot.jpg` yet — the site works without it, there's just
a grey box where the photo goes.

---

## Step 2 — Make the account

**github.com** → **Sign up**. Email, password, username, verify. Free, no
card.

The username becomes part of the temporary URL, so pick something sensible:
`emilybneil`, not `xX_reporter_Xx`.

---

## Step 3 — Make the repository

A repository is GitHub's word for a folder.

1. Top right → **+** → **New repository**
2. **Repository name:** `emily-site`
3. Set it to **Public**. This matters — free GitHub Pages only works on
   public repos. It means the files are visible, which is fine; a website is
   public anyway.
4. Don't tick "Add a README file" — you have one
5. **Create repository**

---

## Step 4 — Upload

You'll land on a setup page full of terminal commands. **Ignore all of it.**
Find the line near the top:

> *...or upload an existing file*

Click **uploading an existing file**.

Drag the files in — the *files*, not the folder. Folder drops behave
unpredictably across browsers. Wait for every filename to appear in the
list, scroll down, click green **Commit changes**.

---

## Step 5 — Turn on GitHub Pages

1. **Settings** (gear tab, far right, top of the repo)
2. Left sidebar → **Pages**
3. **Source** → **Deploy from a branch**
4. Branch → **main**. Folder → **/ (root)**. **Save**.

Wait one to three minutes, then refresh. A green box appears:

> Your site is live at **https://username.github.io/emily-site/**

If you get a 404, wait another two minutes — it's slow the first time. Still
404 after five? The filename is wrong. Check it's exactly `index.html`.

---

## Step 6 — Custom domain

Do this only once step 5 works.

Buy from **porkbun.com** (friendliest, ~$11/yr) or **cloudflare.com**
(cheapest, ~$10.46/yr at wholesale). Not GoDaddy — they stripped consumer
protections from their terms in February 2026.

`emilyneil.com` first choice, `emilybneil.com` as backup since it matches
her email and old Wix URL.

**At GitHub:** Settings → Pages → **Custom domain** → type the domain →
Save.

**At the registrar**, in the DNS settings, add five records:

| Type | Host | Points to |
|---|---|---|
| A | *(blank)* | `185.199.108.153` |
| A | *(blank)* | `185.199.109.153` |
| A | *(blank)* | `185.199.110.153` |
| A | *(blank)* | `185.199.111.153` |
| CNAME | `www` | `username.github.io` |

Four A records is correct — those are GitHub's four servers.

Wait. Usually under an hour, occasionally up to 24. Then go back to Settings
→ Pages and tick **Enforce HTTPS** — it stays greyed out until the domain
verifies, which is normal.

Uploading files adds a `CNAME` file to the repo at this point. Leave it
alone; GitHub manages it.

---

## How the page works

Worth knowing if you're maintaining it.

`stories.js` defines two plain arrays, `HIGHLIGHTS` and `STORIES`. A small
inline script at the bottom of `index.html` renders both. Three things it
does that aren't obvious:

- **Filters are generated from the data.** It reads which `medium` values
  actually appear and only builds buttons for those. Emily can't end up with
  a "Photos" button leading to an empty list.
- **Highlights are de-duplicated out of the story list**, matched on URL. A
  story can live in both arrays and only renders once.
- **All interpolated values are HTML-escaped.** An apostrophe or ampersand
  in a headline can't break the page.

No build step, no framework, no dependencies. Two external requests: Google
Fonts, and WHYY's image CDN for the four current highlight photos.

---

## The resume, and what deliberately isn't on it

`resume.pdf` is not Emily's full resume. Four things were taken out,
because anything on the site can be downloaded by anyone who finds it:

| Removed | Why |
|---|---|
| Home street address | A public page is not the place for where she lives |
| Phone number | Same, and it invites spam calls |
| Both references' names and direct phone numbers | Other people's contact details shouldn't go on a public page unless they've agreed to it |
| The References section entirely | "Available on request" is assumed and dated. Editors ask when they want them. |

Kept: her name, Philadelphia PA, her Gmail, and her X and Instagram
handles. It now ends on Languages.

This matters a bit more than usual — she covers immigration enforcement
and policing, beats that occasionally attract people you'd rather not
hand an address to.

**Her full resume, with the address and references, still exists and is
what she should send with actual applications.** `resume.pdf` is the
public copy only. `Neil.Emily.Resume.web.docx` is its editable source;
if she edits and re-exports, the same four things need to stay out.

---

## Things to confirm with Emily

- **Job title.** Currently "Suburban reporter for Billy Penn at WHYY." Her
  WHYY author page says "WHYY News reporter covering Bucks and Montgomery
  counties"; her resume says WHYY News. "Billy Penn at WHYY" is WHYY's own
  name for the newsroom, so it's accurate and names both — but she knows
  which editors should see.
- **Email.** Using `emilybneil@gmail.com` rather than the WHYY address, so
  the site outlives any one job. One-line change either way.
- **The About section.** Written to sound like her, but it isn't hers. She
  should rewrite it.
- **Signal.** Standard on sites for reporters covering immigration
  enforcement and policing. Not currently listed.
- **The Murrow line** sits directly under her name. Check she wants it that
  prominent.
- **The two Murrow features should be the first two highlights.** I don't
  have the headlines or links — there's a marked spot in `stories.js`.

---

## Known trade-offs

**The resume exists twice.** The Experience section on the page and the PDF
are separate copies, so a job change means editing both. Fixable by dropping
one, but the page version is what people actually read and the PDF is what
they expect to be able to download. Emily's guide tells her to update the
page first and refresh the PDF when it matters.

**Four highlight photos are hotlinked to WHYY's CDN.** They render fine, but
WHYY could move a file and blank one without warning. Emily's guide covers
downloading and re-uploading them; worth doing for the Murrow features at
minimum.

---

## Troubleshooting

| Symptom | Cause |
|---|---|
| Blank white page | `index.html` misnamed, or files are in a subfolder instead of the repo root |
| Loads as unstyled text | `style.css` missing or renamed |
| Highlights section gone | `stories.js` didn't upload, or a syntax error — usually a missing comma |
| 404 after enabling Pages | Wait 5 min. Then check Settings → Pages says branch `main`, folder `/ (root)` |
| Change not appearing | Wait a minute, then hard-refresh: Cmd+Shift+R / Ctrl+Shift+R |
| Need to undo anything | Repo → **Commits** → find it → `...` → **Revert** |
