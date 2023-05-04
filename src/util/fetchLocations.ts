type WeatherData = {
  temperature: string;
  windSpeed: string;
  weatherCode: string;
};

export type LocationData = {
  name: string;
  country: string;
  admin1: string;
  latitude: string;
  longitude: string;
  weather: WeatherData;
};

export async function fetchLocations(token: string) {
  if (token.length > 2) {
    const baseUrl = 'https://geocoding-api.open-meteo.com/v1/';
    const response = await fetch(`${baseUrl}search?name=${token}`);
    const data = await response.json();

    if (data.results) {
      const locations: LocationData[] = await Promise.all(
        data.results.map(async (location: LocationData) => {
          const weatherData = await fetchWeather(
            location.latitude,
            location.longitude
          );
          return {
            name: location.name,
            country: location.country,
            admin1: location.admin1,
            latitude: location.latitude,
            longitude: location.longitude,
            weather: weatherData,
          } as LocationData;
        })
      );

      return locations;
    }
  }
  return null;
}

async function fetchWeather(latitude: string, longitude: string) {
  const baseUrl = 'https://api.open-meteo.com/v1/';
  const response = await fetch(
    `${baseUrl}forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const data = await response.json();

  return {
    temperature: data.current_weather.temperature,
    windSpeed: data.current_weather.windspeed,
    weatherCode: data.current_weather.weathercode,
  };
}
