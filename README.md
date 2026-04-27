# SUCCESS | Flight Intelligence Aggregator

[![Deploy Status](https://img.shields.io/badge/Deploy-Success-brightgreen.svg)](#)
[![Frontend](https://img.shields.io/badge/Frontend-Vercel-black.svg)](https://flight-route-normalize.vercel.app/)
[![Backend](https://img.shields.io/badge/Backend-Render-blue.svg)](#)
[![Cache](https://img.shields.io/badge/Cache-Redis-red.svg)](#)

**Live Application:** [Launch Flight Intelligence](https://flight-route-normalize.vercel.app/)

## Overview
The **Flight Intelligence Aggregator** is a lightweight, high-performance web service designed to retrieve, normalize, and cache real-time global aviation data. Built with a focus on clean architecture and premium, minimal UI design, this system efficiently bridges third-party flight APIs with a zero-dependency frontend.

This project serves as a technical showcase of rate-limit management, data normalization, and decoupled micro-architecture deployment.

---

## 📁 Project Structure

```text
flight-route-normalize/
├── client/             # Frontend dashboard (Zero-dependency vanilla HTML/CSS/JS)
├── src/                # Backend Node.js/Express application
│   ├── routes/         # API route definitions
│   ├── controllers/    # Request handling and response formatting
│   ├── services/       # Core business logic (Normalization, Aggregation)
│   ├── providers/      # External API integrations (AviationStack, etc.)
│   ├── middleware/     # Rate limiting, Redis caching, Error handling
│   └── server.js       # Application entry point and server initialization
├── package.json        # Project metadata, scripts, and dependencies
└── README.md           # Project documentation