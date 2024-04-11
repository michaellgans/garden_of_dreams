import requests

# URL for downloading CSV data
url = "https://plants.usda.gov/csvdownload?plantLst=NRCSStateList&nrcsstate=Alabama"

# Send GET request to the URL
response = requests.get(url)

# Check if request was successful (status code 200)
if response.status_code == 200:
    # Save HTML response to a file for inspection
    with open("response.html", "w", encoding="utf-8") as file:
        file.write(response.text)
        print("HTML response saved to response.html for inspection")
else:
    print(f"Failed to download CSV data. Status code: {response.status_code}")
