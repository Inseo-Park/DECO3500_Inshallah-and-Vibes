#!/usr/bin/env bash
# Fetch the open-licensed photographs listed in PHOTO-CREDITS.md into media/photos/.
# Every file below is public domain, CC0, CC BY or CC BY-SA. Credits are in
# PHOTO-CREDITS.md and are shown inside the prototype under each picture.
set -u
cd "$(dirname "$0")"
mkdir -p media/photos
UA="ECHO-UQ-student-prototype/1.0 (coursework; contact via the person running this script)"
B="https://upload.wikimedia.org/wikipedia/commons"

get () { # get <saveas> <url>
  if [ -s "media/photos/$1" ]; then echo "  have  $1"; return; fi
  if curl -fsSL -A "$UA" -o "media/photos/$1" "$2"; then echo "  got   $1"
  else echo "  FAILED $1 — fetch it by hand from the page listed in PHOTO-CREDITS.md"; rm -f "media/photos/$1"; fi
}

echo "Fetching photographs into media/photos/ ..."
get ground-1937.jpg      "$B/8/84/StateLibQld_1_118056_Ground_improvement_work_underway_at_the_University_of_Queensland_site%2C_St._Lucia%2C_Brisbane%2C_1937.jpg"
get building-1940.jpg    "$B/a/a6/StateLibQld_2_200759_Partially_constructed_University_of_Queensland%2C_St_Lucia%2C_Brisbane%2C_1940.jpg"
get arts-1941.jpg        "$B/6/6a/Queensland_State_Archives_2717_Construction_of_the_Arts_building_at_the_University_of_Queensland_St_Lucia_February_1941.png"
get arts-1941b.jpg       "$B/a/ad/Queensland_State_Archives_2720_Construction_of_the_Arts_building_at_the_University_of_Queensland_St_Lucia_February_1941.png"
get campus-1948.jpg      "$B/2/2f/Queensland_State_Archives_521_University_of_Queensland_St_Lucia_November_1948.png"
get awas-1943.jpg        "$B/f/fd/AWAS_Parade_at_St_Lucia_1943_%28AWM_P00576_006%29.jpg"
get graduates-1915.jpg   "$B/c/c6/StateLibQld_1_127983_Large_group_of_university_graduates_pictured_outside_the_University_of_Queensland%2C_ca._1915.jpg"
get forgan-court.jpg     "$B/3/34/Forgan_Smith_Building_at_the_University_of_Queensland.jpg"
get lakes-busway.jpg     "$B/5/5f/UQLakesBusway.jpg"
get sunset.jpg           "$B/e/eb/Sunset_over_the_University_of_Queensland%27s_St_Lucia_Campus.jpg"
get ferry-new.jpg        "$B/a/a9/The_University_of_Queensland_new_terminal_%285729088826%29.jpg"
get greatcourt.jpg       "$B/9/96/The_Great_Court%2C_St_Lucia_Campus%2C_University_of_Queensland%2C_Brisbane_01.jpg"
get greatcourt-walk.jpg  "$B/0/09/Covered_walkway_at_the_southern_edge_of_the_Great_Court_at_the_University_of_Queensland_July_2015.jpg"
get greatcourt-carve.jpg "$B/a/a3/Capital_of_a_column_surrounding_the_Great_Court%2C_University_of_Queensland%2C_St_Lucia_Campu.jpg"
get forgan-tower.jpg     "$B/3/38/Forgan_Smith_Building_July_2015.jpg"
get duhig.jpg            "$B/e/ef/Duhig_North_12%2C_Library_building%2C_University_of_Queensland%2C_2020.jpg"
get lakes-boardwalk.jpg  "$B/9/9e/Boardwalk_across_UQ_Lake%2C_UQ%2C_St_Lucia_Campus_01.jpg"
get ferry.jpg            "$B/4/4d/University_of_Queensland_Ferry_Terminal_and_CityCat_Wilwinpa_Sir_William_Macgregor_Drive_St_Lucia_P1160915.jpg"
get jacaranda.jpg        "$B/a/a8/Jacaranda_festival.jpg"
echo
echo "Done. Reopen index.html — the History tabs will use the photographs."
echo "Credits and licences: PHOTO-CREDITS.md"
