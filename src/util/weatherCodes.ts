import sunny from '../assets/weather_sunny.png';
import partiallyCloudy from '../assets/weather_partly_cloudy.png';
import overcast from '../assets/weather_overcast.png';
import fog from '../assets/weather_fog.png';
import cloudyCold from '../assets/weather_snow.png';
import lightRain from '../assets/weather_light_rain.png';
import moderateRain from '../assets/weather_moderate_rain.png';
import heavyRain from '../assets/weather_heavy_rain.png';
import snow from '../assets/weather_snow.png';
import thunderstorms from '../assets/weather_thunderstorm.png';

type WeatherInfo = {
  label: string;
  logo: string;
};

const weatherTypes: { [key: string]: WeatherInfo } = {
  0: {
    label: 'Clear sky',
    logo: sunny,
  },
  1: {
    label: 'Mainly clear',
    logo: sunny,
  },
  2: {
    label: 'Partly cloudy',
    logo: partiallyCloudy,
  },
  3: {
    label: 'Overcast',
    logo: overcast,
  },
  45: {
    label: 'Fog',
    logo: fog,
  },
  48: {
    label: 'Depositing rime fog',
    logo: cloudyCold,
  },
  51: {
    label: 'Light drizzle',
    logo: lightRain,
  },
  53: {
    label: 'Moderate drizzle',
    logo: moderateRain,
  },
  55: {
    label: 'Dense drizzle',
    logo: heavyRain,
  },
  56: {
    label: 'Light freezing drizzle',
    logo: lightRain,
  },
  57: {
    label: 'Heavy freezing drizzle',
    logo: heavyRain,
  },
  61: {
    label: 'Light rain',
    logo: lightRain,
  },
  63: {
    label: 'Moderate rain',
    logo: moderateRain,
  },
  65: {
    label: 'Heavy Rain',
    logo: heavyRain,
  },
  66: {
    label: 'Light Freezing Rain',
    logo: snow,
  },
  67: {
    label: 'Heavy Freezing Rain',
    logo: snow,
  },
  71: {
    label: 'Light Snow',
    logo: snow,
  },
  73: {
    label: 'Moderate Snow',
    logo: snow,
  },
  75: {
    label: 'Heavy Snow',
    logo: snow,
  },
  77: {
    label: 'Snow Grains',
    logo: snow,
  },
  80: {
    label: 'Light Showers',
    logo: lightRain,
  },
  81: {
    label: 'Moderate Showers',
    logo: lightRain,
  },
  82: {
    label: 'Heavy Showers',
    logo: moderateRain,
  },
  85: {
    label: 'Light Snow Showers',
    logo: snow,
  },
  86: {
    label: 'Heavy Snow Showers',
    logo: snow,
  },
  95: {
    label: 'Thunderstorms',
    logo: thunderstorms,
  },
  96: {
    label: 'Thunderstorms',
    logo: thunderstorms,
  },
  99: {
    label: 'Thunderstorms',
    logo: thunderstorms,
  },
};

export function getWeatherFromCode(code: string): WeatherInfo {
  return weatherTypes[code] ?? { label: 'unknown', logo: fog };
}
