import { fetchFlights } from '../providers/aviationstack.provider.js';

export const aggregateFlights = async (query) => {
  const flights = await fetchFlights(query);
  return flights;
};