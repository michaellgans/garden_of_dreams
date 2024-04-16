import os

# Path to the directory containing the JSON files
directory = 'statesJSON'

# Output file name for the concatenated file
output_file = 'states.json'

# Initialize an empty list to store the contents of all JSON files
all_contents = []

# Loop through each file in the directory
for filename in os.listdir(directory):
    if filename.endswith(".json"):
        file_path = os.path.join(directory, filename)
        # Read the contents of the current JSON file
        with open(file_path, 'r') as file:
            # Append the contents of the file to the list
            all_contents.append(file.read())

# Sort the contents alphabetically
all_contents.sort()

# Write the sorted contents to the output file
with open(output_file, 'w') as output:
    # Write each content to the output file
    for content in all_contents:
        output.write(content)

print(f'All JSON files in {directory} have been concatenated into {output_file} and sorted alphabetically.')
