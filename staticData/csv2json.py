# This script will parse the csv file into a .json file with key-value pairs, only 
# if the object has a "State Common Name", as well as assign it a unique "ID".
import csv
import json
import sys

def parse_csv_to_json(csv_file):
    id_counter = 1
    json_data = []
    with open(csv_file, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            # Check if the row has a value for "State Common Name"
            if row.get("State Common Name"):
                row_with_id = {"ID": id_counter, **row}
                id_counter += 1
                json_data.append(row_with_id)
    return json_data

def main():
    if len(sys.argv) != 2:
        print("Usage: ./csv2json <file.csv>")
        sys.exit(1)

    input_csv_file = sys.argv[1]
    output_json_file = input_csv_file.replace('.csv', '.json')

    json_data = parse_csv_to_json(input_csv_file)
    with open(output_json_file, 'w', encoding='utf-8') as jsonfile:
        json.dump(json_data, jsonfile, indent=4)

if __name__ == "__main__":
    main()
