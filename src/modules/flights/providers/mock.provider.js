exports.fetchFlights = async () => {
  return [
    {
      airline: 'MockAir',
      price: 500,
      currency: 'USD',
      from: 'LOS',
      to: 'LHR',
      distance_km: 5500,
      duration: 420,
      stops: 1,
    },
  ];
};