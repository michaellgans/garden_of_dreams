import sys
import json



category_mapping_letter = {
    'F': 'Flowering Plant',
    'T': 'Tree',
    'G': 'Shrub/Grass',
    'Fu': 'Fungus',
    'C': 'Cactus',
}


def categorize_fams(category_mapping, filename):
    with open(filename, 'r') as file:
        families_list = [line.strip() for line in file]

    for family_name in families_list:
        category = input(f"Enter category for '{family_name}': ").strip()

        if category not in category_mapping:
            category_mapping[category] = []
        category_mapping[category].append(family_name)

        print(f"Family '{family_name}' belongs to the '{category}' category.")

    print("Categorization Complete")


def cats_to_json(category_mapping, output_file):
    with open (output_file, 'w') as json_file:
        json.dump(category_mapping, json_file, indent=4)


if __name__ == "__main__":
    filename = sys.argv[1]
    output_file = sys.argv[2]
    category_mapping = {}
    categorize_fams(category_mapping, filename)
    cats_to_json(category_mapping, output_file)
