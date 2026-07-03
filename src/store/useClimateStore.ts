import { create } from 'zustand';

interface ClimateState {
  temperature: number;
  humidity: number;
  windSpeed: number;
  location: string;
  isLoading: boolean;
  error: string | null;
  setTemperature: (temp: number) => void;
  setHumidity: (humidity: number) => void;
  setLocation: (location: string) => void;
  setLoading: (loading: boolean) => void;
  fetchClimateData: (loc: string) => Promise<void>;
}

export const useClimateStore = create<ClimateState>((set) => ({
  temperature: 0,
  humidity: 0,
  windSpeed: 0,
  location: '',
  isLoading: false,
  error: null,

  setTemperature: (temp) => set({ temperature: temp }),
  
  setHumidity: (hum) => set({ humidity: hum }),
  
  setLocation: (loc) => set({ location: loc }),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  fetchClimateData: async (loc) => {
    set({ isLoading: true, error: null, location: loc });
    try {
      // Step 1: Get coordinates from city name (Geocoding API)
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(loc)}&count=1&language=en&format=json`
      );
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        set({ isLoading: false, error: `City "${loc}" not found. Try another city.` });
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Step 2: Get weather data using coordinates
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m ,wind_speed_10m`
      );
      const weatherData = await weatherResponse.json();
      
      set({
        temperature: weatherData.current?.temperature_2m || 0,
        humidity: weatherData.current?.relative_humidity_2m || 0,
        windSpeed: weatherData.current?.wind_speed_10m || 0,
        location: `${name}, ${country}`,
        isLoading: false,
      });
    } catch (error) {
      console.error('Failed to fetch climate data:', error);
      set({ 
        isLoading: false, 
        error: 'Failed to fetch climate data. Please check your internet connection.'
      });
    }
  },
}));