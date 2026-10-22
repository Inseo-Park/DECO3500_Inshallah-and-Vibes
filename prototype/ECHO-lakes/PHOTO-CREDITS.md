# Real photographs — how to drop them in

The prototype ships with pictures it draws itself, each marked **SIMULATED
IMAGE**. It also looks for real photographs in `media/photos/` and uses those
instead whenever it finds them.

I could not download them for you: this build environment's network proxy
blocks Wikimedia outright. Everything you need is below, and it takes about ten
minutes.

## The quick way

From inside the `ECHO-social-voxel` folder:

```bash
bash get-photos.sh
```

or, on Windows PowerShell:

```powershell
./get-photos.ps1
```

Then reopen `index.html`. The photographs appear in the **History** tab of each
of the five places and anywhere else the prototype uses a picture. Nothing else
changes.

## The licences, before you do anything

Every file below is openly licensed and I verified each one against the file's
own licence template on Wikimedia Commons, not against a search result. They
fall into three groups.

**Public domain** (13 files) — no attribution is legally required, though the
holding institution asks to be credited and this prototype credits them anyway.
Australian photographs taken before 1 January 1955 are out of copyright in
Australia. These are the safe ones for anything you bake into a design asset.

**CC BY** (2 files) — you must credit the photographer and name the licence.
The prototype does this automatically under each picture.

**CC BY-SA** (9 files) — credit plus *share-alike*. Showing the photograph with
a visible credit, which is what this prototype does, is fine. But if you
composite, trace or recolour one into a design asset of your own, share-alike
can oblige you to release that asset under CC BY-SA too. For UI chrome, use the
public-domain thirteen.

One caution: the Commons file `StateLibQld_1_126411` is labelled "St Lucia
campus, ca. 1912". That is wrong — UQ was at Old Government House on George
Street until 1948 and St Lucia construction did not start until 1938. The
licence is sound; the caption is not, so it is not used here.

---

## The files

| Save as | What it is | Licence | Credit |
|---|---|---|---|
| `ground-1937.jpg` | Ground improvement work on the St Lucia site, 1937 | Public domain (PD-Australia) | John Oxley Library, State Library of Queensland |
| `building-1940.jpg` | The partially constructed university, 1940 | Public domain | State Library of Queensland |
| `arts-1941.jpg` | Construction of the Arts building, February 1941 | Public domain | Queensland State Archives, Digital Image ID 2717 |
| `arts-1941b.jpg` | Construction of the Arts building, February 1941 (second view) | Public domain | Queensland State Archives, Digital Image ID 2720 |
| `campus-1948.jpg` | The University of Queensland, St Lucia, November 1948 | Public domain | Queensland State Archives, Digital Image ID 521 |
| `awas-1943.jpg` | Lady Gowrie inspecting an AWAS parade at St Lucia, 5 October 1943 | Public domain | Australian War Memorial, P00576.006 |
| `graduates-1915.jpg` | Graduates outside the university, about 1915 | Public domain | State Library of Queensland |
| `forgan-court.jpg` | Forgan Smith Building from the Great Court, 2005 | Public domain (uploader release) | — |
| `lakes-busway.jpg` | UQ Lakes busway from the Eleanor Schonell Bridge | CC0 | — |
| `sunset.jpg` | Sunset over the St Lucia campus (wide panorama) | CC BY 4.0 | BobTanGo, CC BY 4.0, via Wikimedia Commons |
| `ferry-new.jpg` | The new UQ St Lucia ferry terminal, 2011 | CC BY 2.0 | Brisbane City Council, CC BY 2.0, via Wikimedia Commons |
| `greatcourt.jpg` | The Great Court, wide panorama, 2018 | CC BY-SA 4.0 | Kgbo, CC BY-SA 4.0, via Wikimedia Commons |
| `greatcourt-walk.jpg` | Covered walkway at the southern edge of the Great Court, 2015 | CC BY-SA 4.0 | Nick-D, CC BY-SA 4.0, via Wikimedia Commons |
| `greatcourt-carve.jpg` | Carved capital of a Great Court column | CC BY-SA 4.0 | Kgbo, CC BY-SA 4.0, via Wikimedia Commons |
| `forgan-tower.jpg` | Forgan Smith Building including the clock tower, July 2015 | CC BY-SA 4.0 | Nick-D, CC BY-SA 4.0, via Wikimedia Commons |
| `duhig.jpg` | Duhig North, the UQ Library building, 2020 | CC BY-SA 4.0 | Chris Olszewski, CC BY-SA 4.0, via Wikimedia Commons |
| `lakes-boardwalk.jpg` | Boardwalk across the UQ Lake, 2016 | CC BY-SA 4.0 | Kgbo, CC BY-SA 4.0, via Wikimedia Commons |
| `ferry.jpg` | UQ ferry terminal with the CityCat *Wilwinpa*, 2011 | CC BY-SA 4.0 | John Robert McPherson, CC BY-SA 4.0, via Wikimedia Commons |
| `jacaranda.jpg` | Jacarandas in bloom on campus | CC BY-SA 4.0 | Misaochan2, CC BY-SA 4.0, via Wikimedia Commons |

Licence links: CC BY 4.0 — https://creativecommons.org/licenses/by/4.0 ·
CC BY 2.0 — https://creativecommons.org/licenses/by/2.0 ·
CC BY-SA 4.0 — https://creativecommons.org/licenses/by-sa/4.0 ·
CC0 — https://creativecommons.org/publicdomain/zero/1.0

---

## Source pages

Every one of these is a Wikimedia Commons file description page. Open it to see
the licence template for yourself before you rely on it.

1. `ground-1937` — https://commons.wikimedia.org/wiki/File:StateLibQld_1_118056_Ground_improvement_work_underway_at_the_University_of_Queensland_site,_St._Lucia,_Brisbane,_1937.jpg
2. `building-1940` — https://commons.wikimedia.org/wiki/File:StateLibQld_2_200759_Partially_constructed_University_of_Queensland,_St_Lucia,_Brisbane,_1940.jpg
3. `arts-1941` — https://commons.wikimedia.org/wiki/File:Queensland_State_Archives_2717_Construction_of_the_Arts_building_at_the_University_of_Queensland_St_Lucia_February_1941.png
4. `arts-1941b` — https://commons.wikimedia.org/wiki/File:Queensland_State_Archives_2720_Construction_of_the_Arts_building_at_the_University_of_Queensland_St_Lucia_February_1941.png
5. `campus-1948` — https://commons.wikimedia.org/wiki/File:Queensland_State_Archives_521_University_of_Queensland_St_Lucia_November_1948.png
6. `awas-1943` — https://commons.wikimedia.org/wiki/File:AWAS_Parade_at_St_Lucia_1943_(AWM_P00576_006).jpg
7. `graduates-1915` — https://commons.wikimedia.org/wiki/File:StateLibQld_1_127983_Large_group_of_university_graduates_pictured_outside_the_University_of_Queensland,_ca._1915.jpg
8. `forgan-court` — https://commons.wikimedia.org/wiki/File:Forgan_Smith_Building_at_the_University_of_Queensland.jpg
9. `lakes-busway` — https://commons.wikimedia.org/wiki/File:UQLakesBusway.jpg
10. `sunset` — https://commons.wikimedia.org/wiki/File:Sunset_over_the_University_of_Queensland%27s_St_Lucia_Campus.jpg
11. `ferry-new` — https://commons.wikimedia.org/wiki/File:The_University_of_Queensland_new_terminal_(5729088826).jpg
12. `greatcourt` — https://commons.wikimedia.org/wiki/File:The_Great_Court,_St_Lucia_Campus,_University_of_Queensland,_Brisbane_01.jpg
13. `greatcourt-walk` — https://commons.wikimedia.org/wiki/File:Covered_walkway_at_the_southern_edge_of_the_Great_Court_at_the_University_of_Queensland_July_2015.jpg
14. `greatcourt-carve` — https://commons.wikimedia.org/wiki/File:Capital_of_a_column_surrounding_the_Great_Court,_University_of_Queensland,_St_Lucia_Campu.jpg
15. `forgan-tower` — https://commons.wikimedia.org/wiki/File:Forgan_Smith_Building_July_2015.jpg
16. `duhig` — https://commons.wikimedia.org/wiki/File:Duhig_North_12,_Library_building,_University_of_Queensland,_2020.jpg
17. `lakes-boardwalk` — https://commons.wikimedia.org/wiki/File:Boardwalk_across_UQ_Lake,_UQ,_St_Lucia_Campus_01.jpg
18. `ferry` — https://commons.wikimedia.org/wiki/File:University_of_Queensland_Ferry_Terminal_and_CityCat_Wilwinpa_Sir_William_Macgregor_Drive_St_Lucia_P1160915.jpg
19. `jacaranda` — https://commons.wikimedia.org/wiki/File:Jacaranda_festival.jpg

## If the script does not work

Open the page URL, click the image, choose "Download" or save the full-size
file, rename it to the filename in the first column, and put it in
`media/photos/`. The prototype checks for each one by name when it loads.

## What the prototype does with them

Each picture in a **History** tab has a slot. On load the build tries
`media/photos/<name>.jpg`; if the browser can load it, that photograph is used
and its credit line appears underneath. If not, the drawn picture is used
instead and says so. You can add them one at a time — nothing breaks if only
some are there.
