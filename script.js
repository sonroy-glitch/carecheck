async function searchPlaces(lat, lng, type, value, radiusMeters = 1000, limit = 5) {
  const query = `[out:json][timeout:25];(node["${type}"="${value}"](around:${radiusMeters},${lat},${lng});way["${type}"="${value}"](around:${radiusMeters},${lat},${lng}););out center ${limit};`;

  const url = `https://overpass.kumi.systems/api/interpreter?data=${encodeURIComponent(query)}`;

  const response = await fetch(url, {
    headers: {
      "Accept": "*/*",
      "User-Agent": "MyPlacesApp/1.0 (sounakr65@gmail.com)",
    }
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed (${response.status}): ${text.slice(0, 200)}`);
  }

  const data = await response.json();
  return data.elements.map((el) => ({
    id: el.id,
    type: el.type,
    lat: el.lat ?? el.center?.lat,
    lng: el.lon ?? el.center?.lon,
    name: el.tags?.name || "Unnamed",
    tags: el.tags,
  }));
}

searchPlaces(28.64, 77.21, "amenity", "hospital")
  .then((places) => console.log(`Found ${places.length}`, places))
  .catch(console.error);