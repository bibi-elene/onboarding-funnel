
# **Onboarding Funnel App**

A modern onboarding funnel application with a backend to track user interactions and a React-powered frontend for a seamless user experience. Follow these steps to run the app locally on your machine.

---

## **How to Run the App Locally**

### **1. Clone the Repository**
```bash
git clone https://github.com/bibi-elene/onboarding-funnel.git
cd onboarding-funnel
```

---

### **2. Start the Backend**
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

   - The backend will run at: `http://localhost:5001` (you can check API data at localhost:5001/metrics)

---

### **3. Start the Frontend**
1. Go back to the root directory (onboarding-funnel):
   ```bash
   cd ..
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

   - The frontend will run at: `http://localhost:3000`

---

### **4. (Optional) Create a New SQLite Database**
If you need to reset or create a new database:
1. Open a terminal in the backend directory:
   ```bash
   cd backend
   ```
2. Run the following command to create a new SQLite database file:
   ```bash
   sqlite3 database.db
   ```
3. Exit SQLite CLI by typing `.exit`.
4. Restart the backend server to reinitialize the database:
   ```bash
   npm start
   ```

---

## **Overview of the App**

### **Features**
- **Multi-step Onboarding**: A 3-step onboarding process with video-guided steps.
- **User Tracking**: Tracks actions like `visited`, `started`, and `completed` via the backend.
- **Dashboard**: A graphical representation of user metrics.
- **Database**: Persistent storage using SQLite.

### **Tech Stack**
- **Frontend**: React
- **Backend**: Express.js
- **Database**: SQLite

---

## **Project Structure**
```
onboarding-funnel/
├── backend/          # Backend server (Express.js)
├── src/  Frontend code
├── package.json/ # Frontend packages  
```

---

## **Key Commands**
### Start the Backend:
```bash
cd backend
npm start
```

### Start the Frontend:
```bash
cd ..
npm start
```

### Create a New SQLite Database:
```bash
sqlite3 database.db 
# view db tables
.tables
# view data in users
SELECT * from users;
.exit
```

Restart the backend server after creating the database:
```bash
npm start
```
