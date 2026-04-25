export const normalizeFlights = (flights) => {
  return flights.map((f) => ({
    flightNumber: f.flight?.iata || 'N/A',
    status: f.flight_status || 'unknown',
    departure: {
      airport: f.departure?.airport,
      iata: f.departure?.iata,
      scheduled: f.departure?.scheduled,
      actual: f.departure?.actual,
    },
    arrival: {
      airport: f.arrival?.airport,
      iata: f.arrival?.iata,
      scheduled: f.arrival?.scheduled,
      actual: f.arrival?.actual,
    },
    airline: f.airline?.name || 'Unknown',
  }));
};