# ✈️ Flight Route Data Normalizer

An advanced backend-powered aviation intelligence platform that aggregates flight route data, normalizes pricing across carriers, and calculates smart value scores based on price per kilometer.

Built for scalable travel-tech and analytics use cases.

---

## 🚀 Features

### Flight Search Engine
- Search routes by origin, destination, and date
- REST API architecture using Express.js

### Multi-Provider Aggregation
- Designed to support multiple flight data providers
- Unified response formatting across carriers

### Smart Data Normalization
- Standardizes airline, pricing, stops, duration, and route metrics

### Value Scoring Engine
- Calculates **price per kilometer**
- Helps identify best-value routes

### Redis Caching
- Speeds up repeated searches
- Reduces external API calls

### Frontend Dashboard
- Real-time aviation dashboard UI included

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Redis
- HTML / CSS / JavaScript
- REST APIs

---

## 📁 Project Structure

```bash
flight-route-normalize/
│── client/             # Frontend dashboard
│── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── providers/
│   ├── middleware/
│   └── server.js
│── package.json
│── README.md