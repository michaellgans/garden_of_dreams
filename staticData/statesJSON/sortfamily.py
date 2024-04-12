def sort_text_file(file_path):
    # Read the contents of the text file into a list
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # Sort the list alphabetically
    lines.sort()

    # Write the sorted contents back to the text file
    with open(file_path, 'w', encoding='utf-8') as file:
        for line in lines:
            file.write(line)

