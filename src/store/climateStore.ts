import { create } from 'zustand'; 
export const useClimateStore = create((set: any, get: any) => ({
  currentData: null,
  historicalData: [],
  predictions: [],
  alerts: [],
  aiResults: null,
  isLoading: false,
  selectedLocation: null,
  activeAlertId: null,
  sidebarOpen: true,
  preferences: {
    theme: 'dark',
    units: 'metric',
    notifications: true,
    alertThreshold: 'moderate',
    defaultLocation: { lat: 40.7128, lng: -74.0060, city: 'New York', country: 'USA' },
  },

  setCurrentData: (data: any) => set({ currentData: data }),
  updateWeatherMetrics: (metrics: any) => set((state: any) => ({
    currentData: state.currentData ? { ...state.currentData, weather: { ...state.currentData.weather, ...metrics } } : null,
  })),
  addPrediction: (prediction: any) => set((state: any) => ({ predictions: [...state.predictions, prediction] })),
  updatePredictionConfidence: (id: string, confidence: number) => set((state: any) => ({
    predictions: state.predictions.map((p: any) => p.id === id ? { ...p, confidence } : p),
  })),
  addAlert: (alert: any) => set((state: any) => ({ alerts: [alert, ...state.alerts] })),
  dismissAlert: (id: string) => set((state: any) => ({
    alerts: state.alerts.map((a: any) => a.id === id ? { ...a, isActive: false } : a),
  })),
  setAIResults: (results: any) => set({ aiResults: results }),
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  setSelectedLocation: (location: any) => set({ selectedLocation: location }),
  toggleSidebar: () => set((state: any) => ({ sidebarOpen: !state.sidebarOpen })),
  updatePreferences: (prefs: any) => set((state: any) => ({ preferences: { ...state.preferences, ...prefs } })),
  getHighConfidencePredictions: () => get().predictions.filter((p: any) => p.confidence >= 0.75),
  getActiveAlerts: () => get().alerts.filter((a: any) => a.isActive),
  getCriticalAlerts: () => get().alerts.filter((a: any) => a.isActive && ['critical', 'extreme'].includes(a.severity)),
}));

export const useCurrentData = () => useClimateStore((state: any) => state.currentData);
export const usePredictions = () => useClimateStore((state: any) => state.predictions);
export const useAlerts = () => useClimateStore((state: any) => state.alerts);
export const useAIResults = () => useClimateStore((state: any) => state.aiResults);
export const useIsLoading = () => useClimateStore((state: any) => state.isLoading);
export const usePreferences = () => useClimateStore((state: any) => state.preferences);
export const useSidebarOpen = () => useClimateStore((state: any) => state.sidebarOpen);