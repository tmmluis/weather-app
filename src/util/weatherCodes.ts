import sunny from "../assets/1530392_weather_sun_sunny_temperature.png"
import partiallyCloudy from "../assets/1530391_clouds_sun_sunny_weather.png"
import overcast from "../assets/1530369_cloudy_weather_clouds_cloud.png"
import fog from "../assets/1530368_foggy_weather_fog_clouds_cloudy.png"
import cloudyCold from "../assets/1530371_winter_snow_clouds_weather.png"
import lightRain from "../assets/1530365_rain_cloud_drizzel_weather.png"
import moderateRain from "../assets/1530364_rain_storm_shower_weather.png"
import heavyRain from "../assets/1530362_cloudy_weather_forecast_rain_clouds.png"
import snow from "../assets/weather_snow.png"

type WeatherInfo = {
  label: string
  logo: string
}

const weatherTypes: { [key: string]: WeatherInfo } = {
  0: {
    label: "Clear sky",
    logo: sunny,
  },
  1: {
    label: "Mainly clear",
    logo: sunny,
  },
  2: {
    label: "Partly cloudy",
    logo: partiallyCloudy,
  },
  3: {
    label: "Overcast",
    logo: overcast,
  },
  45: {
    label: "Fog",
    logo: fog,
  },
  48: {
    label: "Depositing rime fog",
    logo: cloudyCold,
  },
  51: {
    label: "Light drizzle",
    logo: lightRain,
  },
  53: {
    label: "Moderate drizzle",
    logo: moderateRain,
  },
  55: {
    label: "Dense drizzle",
    logo: heavyRain,
  },
  56: {
    label: "Light freezing drizzle",
    logo: lightRain,
  },
  57: {
    label: "Heavy freezing drizzle",
    logo: heavyRain,
  },
  61: {
    label: "Light rain",
    logo: lightRain,
  },
  63: {
    label: "Moderate rain",
    logo: moderateRain,
  },
  65: {
    label: "Heavy Rain",
    logo: heavyRain,
  },
  66: {
    label: "Light Freezing Rain",
    logo: snow,
  },
  67: {
    label: "Heavy Freezing Rain",
    logo: snow,
  },
}

export function getWeatherFromCode(code: string): WeatherInfo {
  return weatherTypes[code] ?? { label: "unknown", logo: fog }
}
