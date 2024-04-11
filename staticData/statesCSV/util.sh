#!/bin/bash

# List of full state names
states=("Alabama" "Alaska" "Arizona" "Arkansas" "California" "Colorado" "Connecticut" "Delaware" "Florida" "Georgia" "Hawaii" "Idaho" "Illinois" "Indiana" "Iowa" "Kansas" "Kentucky" "Louisiana" "Maine" "Maryland" "Massachusetts" "Michigan" "Minnesota" "Mississippi" "Missouri" "Montana" "Nebraska" "Nevada" "New Hampshire" "New Jersey" "New Mexico" "New York" "North Carolina" "North Dakota" "Ohio" "Oklahoma" "Oregon" "Pennsylvania" "Rhode Island" "South Carolina" "South Dakota" "Tennessee" "Texas" "Utah" "Vermont" "Virginia" "Washington" "West Virginia" "Wisconsin" "Wyoming")

# Loop over each state
for state in "${states[@]}"
do
    # Download CSV file for the state
    curl "https://plants.usda.gov/assets/docs/NRCSStateList/${state}_NRCS_csv.txt" -o "$state.csv"

    # Run Python script to convert CSV to JSON
    python csv2json.py "$state.csv"
done
