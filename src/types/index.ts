export interface WeatherMetrics {
  temperature: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDirection: number;
  uvIndex: number;
  visibility: number;
  precipitation: number;
}

export interface AirQuality {
  aqi: number;
  pm25: number;
  pm10: number;
  o3: number;
  no2: number;
  co: number;
}

export type DisasterType = 'hurricane' | 'flood' | 'wildfire' | 'earthquake' | 'tsunami' | 'drought' | 'tornado' | 'landslide';
export type SeverityLevel = 'low' | 'moderate' | 'high' | 'critical' | 'extreme';

export interface GeoLocation {
  lat: number;
  lng: number;
  city: string;
  country: string;
  region?: string;
}

export interface DisasterPrediction {
  id: string;
  type: DisasterType;
  probability: number;
  confidence: number;
  severity: SeverityLevel;
  predictedTime: Date;
  location: GeoLocation;
  description: string;
  recommendedActions: string[];
  dataSources: string[];
}

export interface EmergencyAlert {
  id: string;
  type: DisasterType;
  severity: SeverityLevel;
  message: string;
  timestamp: Date;
  location: GeoLocation;
  isActive: boolean;
  instructions: string[];
}

export interface HistoricalDataPoint {
  timestamp: Date;
  temperature: number;
  humidity: number;
  precipitation: number;
  aqi: number;
}

export interface ClimateData {
  id: string;
  timestamp: Date;
  location: GeoLocation;
  weather: WeatherMetrics;
  airQuality: AirQuality;
  predictions: DisasterPrediction[];
  sustainabilityScore: number;
  carbonFootprint: number;
  renewableEnergyPercent: number;
  alerts: EmergencyAlert[];
  historicalData: HistoricalDataPoint[];
}

export interface AIPredictionResult {
  modelVersion: string;
  predictions: DisasterPrediction[];
  overallConfidence: number;
  modelAccuracy: number;
  processingTime: number;
  features: string[];
}

export interface SustainabilityMetric {
  category: string;
  score: number;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
  icon: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  secondary?: number;
  timestamp?: Date;
}

export interface NavItem {
  label: string;
  path: string;
  icon: string;
  badge?: number;
}

export type ThemeMode = 'dark' | 'light' | 'system';

export interface UserPreferences {
  theme: ThemeMode;
  units: 'metric' | 'imperial';
  notifications: boolean;
  alertThreshold: SeverityLevel;
  defaultLocation: GeoLocation;
}