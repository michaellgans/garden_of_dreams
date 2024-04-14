#!/bin/bash

# List of full state names
states=("ala" "ask" "ari" "ark" "cal" "col" "cnt" "del" "fla" "geo" "haw" "ida" "ill" "ini" "iow" "kan" "kty" "lou" "mai" "mry" "mas" "mic" "min" "msi" "mso" "mnt" "neb" "nev" "nwh" "nwj" "nwm" "nwy" "nca" "nda" "ohi" "okl" "ore" "pen" "rho" "sca" "sda" "ten" "tex" "uta" "ver" "vrg" "was" "wva" "wis" "wyo")

# Loop over each state
for state in "${states[@]}"
do
    # Download CSV file for the state
    curl "https://trefle.io/api/v1/distributions/${state}/plants?filter%5Bestablishment%5D=native&token=SbeeVCPUVgWafdQTER04QdFsOCxJZ1B9WRqtInHqsDY" -o "$state.json"

    # Run Python script to convert CSV to JSON
    python csv2json.py "$state.csv"
done




# State Keys

# Alabama
# ala
# Alaska
# ask
# Arizona
# ari
# Arkansas
# ark
# California
# cal
# Colorado
# col
# Connecticut
# cnt
# Delaware
# del
# Florida
# fla
# Georgia
# geo
# Hawaii
# haw
# Idaho
# ida
# Illinois
# ill
# Indiana
# ini
# Iowa
# iow
# Kansas
# kan
# Kentucky
# kty
# Louisiana
# lou
# Maine
# mai
# Maryland
# mry
# Massachusetts
# mas
# Michigan
# mic
# Minnesota
# min
# Mississippi
# msi
# Missouri
# mso
# Montana
# mnt
# Nebraska
# neb
# Nevada
# nev
# New Hampshire
# nwh
# New Jersey
# nwj
# New Mexico
# nwm
# New York
# nwy
# North Carolina
# nca
# North Dakota
# nda
# Ohio
# ohi
# Oklahoma
# okl
# Oregon
# ore
# Pennsylvania
# pen
# Rhode Island
# rho
# South Carolina
# sca
# South Dakota
# sda
# Tennessee
# ten
# Texas
# tex
# Utah
# uta
# Vermont
# ver
# Virginia
# vrg
# Washington
# was
# West Virginia
# wva
# Wisconsin
# wis
# Wyoming
# wyo
