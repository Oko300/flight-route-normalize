import { ENV } from '../../../config/env.js';

const BASE_URL = 'http://api.aviationstack.com/v1';

export async function fetchFlights({ flight_iata, dep_iata, arr_iata }) {
  const params = new URLSearchParams({
    access_key: ENV.AVIATIONSTACK_API_KEY,
    ...(flight_iata && { flight_iata }),
    ...(dep_iata && { dep_iata }),
    ...(arr_iata && { arr_iata }),
  });

  const res = await fetch(`${BASE_URL}/flights?${params}`);
  const data = await res.json();

  if (data.error) throw new Error(data.error.info);
  return data.data;
}