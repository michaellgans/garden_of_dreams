import os

# Define the abbreviation-state name mappings
state_mappings = {
    "cnt": "Connecticut",
    "del": "Delaware",
    "fla": "Florida",
    "geo": "Georgia",
    "haw": "Hawaii",
    "ida": "Idaho",
    "ill": "Illinois",
    "ini": "Indiana",
    "iow": "Iowa",
    "kan": "Kansas",
    "kty": "Kentucky",
    "lou": "Louisiana",
    "mai": "Maine",
    "mry": "Maryland",
    "mas": "Massachusetts",
    "mic": "Michigan",
    "min": "Minnesota",
    "msi": "Mississippi",
    "mso": "Missouri",
    "mnt": "Montana",
    "neb": "Nebraska",
    "nev": "Nevada",
    "nwh": "New Hampshire",
    "nwj": "New Jersey",
    "nwm": "New Mexico",
    "nwy": "New York",
    "nca": "North Carolina",
    "nda": "North Dakota",
    "ohi": "Ohio",
    "okl": "Oklahoma",
    "ore": "Oregon",
    "pen": "Pennsylvania",
    "rho": "Rhode Island",
    "sca": "South Carolina",
    "sda": "South Dakota",
    "ten": "Tennessee",
    "tex": "Texas",
    "uta": "Utah",
    "ver": "Vermont",
    "vrg": "Virginia",
    "was": "Washington",
    "wva": "West Virginia",
    "wis": "Wisconsin",
    "wyo": "Wyoming"
}

# Path to the directory containing the JSON files
directory = 'statesJSON'

# Loop through each file in the directory
for filename in os.listdir(directory):
    if filename.endswith(".json"):
        file_path = os.path.join(directory, filename)
        # Get the abbreviation from the file name
        abbreviation = filename.split('.')[0]
        # Get the corresponding full state name from the mappings
        full_state_name = state_mappings.get(abbreviation)
        if full_state_name:
            # Prepend the full state name to the file
            with open(file_path, 'r+') as file:
                content = file.read()
                file.seek(0, 0)
                file.write(f'"{full_state_name}": ' + content)
                print(f'Added "State": "{full_state_name}" to {filename}')
        else:
            print(f'No matching state found for abbreviation {abbreviation} in {filename}')
