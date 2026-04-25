exports.rank = (flights) => {
  return flights
    .map((f) => ({
      ...f,
      score: f.price / f.distance_km,
    }))
    .sort((a, b) => a.score - b.score);
};