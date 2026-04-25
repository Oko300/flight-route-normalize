export const validateFlightQuery = (req, res, next) => {
  const { flight_iata, dep_iata, arr_iata } = req.query;

  if (!flight_iata && !dep_iata && !arr_iata) {
    return res.status(400).json({
      success: false,
      message: 'Provide at least one of: flight_iata, dep_iata, arr_iata',
    });
  }

  next();
};