import json
import sys


def reformat_data(input_data, state):
    reformatted_data = []
    count = 1
    for plant in input_data['data']:
        scientific_name_tokens = plant['scientific_name'].split()  # Split scientific name into tokens
        scientific_name_url = '%20'.join(scientific_name_tokens)  # Join tokens with '%20' instead of hyphens

        # Adding %20L at the end of the URL
        scientific_name_url += '%20L'

        new_plant = {
            'id': f"{state}-{count}",
            'common_name': plant['common_name'],
            'scientific_name': plant['scientific_name'],
            'image_url': plant['image_url'],
            'google_url': f"https://www.google.com/search?q={plant['common_name']}",
            'plantnet_url': f"https://identify.plantnet.org/k-world-flora/species/{scientific_name_url}/data"
        }
        reformatted_data.append(new_plant)
        count += 1
    return reformatted_data


def save_data(reformatted_data, state):
    with open(f"{state}.json", 'w') as f:
        json.dump(reformatted_data, f, indent=2)


def main():
    input_data = json.load(sys.stdin)
    state = sys.argv[1]
    reformatted_data = reformat_data(input_data, state)
    save_data(reformatted_data, state)


if __name__ == "__main__":
    main()
