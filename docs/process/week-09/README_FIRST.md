# ECHO Wiki Page — GitHub Upload Instructions

## Important

GitHub does not extract images from a ZIP file for Markdown images to use.
The Wiki page references the individual image files through raw GitHub URLs.

## Upload these files first

In the main repository:

`DECO3500_Inshallah-and-Vibes/Week 9 Stand Up/`

Create a folder named:

`ECHO_Wiki_Assets`

Upload **all six image files** from the `ECHO_Wiki_Assets` folder into that folder.

The final repository structure must be:

```text
Week 9 Stand Up/
├── ECHO_1.zip
├── ECHO_Weeks6-8_Iterations_preview.pdf
└── ECHO_Wiki_Assets/
    ├── 01_existing_wiki_links.png
    ├── 02_design_decisions.png
    ├── 03_design_direction.png
    ├── 04_physical_concept.png
    ├── 05_user_testing_01.jpeg
    └── 06_user_testing_02.jpeg
```

## Then update the Wiki

1. Open the Wiki page.
2. Click **Edit**.
3. Open `Design-Process-Overview.md` from this package.
4. Copy and paste its complete contents into the Wiki editor.
5. Save the page.

## Why this works

The Markdown image links point to:

`https://raw.githubusercontent.com/Inseo-Park/DECO3500_Inshallah-and-Vibes/main/Week%209%20Stand%20Up/ECHO_Wiki_Assets/`

Therefore, the individual images must exist at those exact repository paths. Uploading only the ZIP file is not enough.
