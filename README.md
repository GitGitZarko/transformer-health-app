# 🔌 Transformer Voltage Dashboard

A full-stack application for visualizing voltage readings from multiple transformers using interactive line charts.

This project is split into two parts:

- **Client**: React (with Vite + TypeScript), styled using Material UI and powered by Recharts.
- **Server**: Node.js + Express backend serving transformer data.

---

## 📁 Project Structure

---

## ✨ Features

- 📊 Interactive line chart for transformer voltage
- 🔁 Real-time or simulated data from Express API
- ✅ Checkbox toggles to show/hide transformers
- 🧼 Auto-assigns colors to lines (no manual config)
- 🧠 Clean formatting: timestamps, labels, and names
- 📱 Responsive design with Material UI

---

---

## 🔧 Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) **v21.0.0 or later**
  > You can check your current version with:
  > ```bash
  > node -v
  > ```
- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/) (comes with Docker Desktop)

---

## 🚀 Getting Started

### Clone the repo

```bash
git clone https://github.com/GitGitZarko/transformer-health-app.git
cd transformer-health-app
```

---


### ▶️ Quick Start (using Docker Compose)

To build and run both the **client** and **server**:

```bash
docker-compose up --build
```
- The client will be available at http://localhost:5005/
- The server will run on http://localhost:3005

### 🐳 Individual Docker Builds

```bash
cd server
docker build -t voltage-server .
docker run -p 3001:3001 voltage-server
```

```bash
cd client
docker build -t voltage-client .
docker run -p 5173:5173 voltage-client
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.


## License

[MIT](https://choosealicense.com/licenses/mit/)