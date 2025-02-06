# 🚀 JIRA-AI Task Manager

## **📌 Project Overview**
JIRA-AI Task Manager is an **AI-powered task management system** that **automates task creation** and **seamlessly integrates with Jira** for streamlined project tracking. This project is built using **MERN Stack (MongoDB, Express, React, Node.js)** and integrates **AI via Hugging Face API** to generate detailed task descriptions.

---

## **✨ Key Features**
✅ **AI-Generated Task Descriptions** – Just enter a simple task title, and AI will generate a detailed description instantly. 🤖  
✅ **Seamless Jira Integration** – Tasks are **automatically created in Jira**, saving valuable time for developers and managers. 🔗  
✅ **MERN Stack Performance** – Built with **React, Node.js, Express, and MongoDB** for **high speed & reliability**. ⚡  
✅ **Modern & Responsive UI** – A **beautiful, user-friendly interface** designed with **Tailwind CSS**. 🎨  
✅ **Real-Time Task Management** – View, manage, and track tasks **instantly** without manual effort! 🔄  

---

## **🛠 Tech Stack Used**
### **Frontend:**
- React.js ⚛️
- Tailwind CSS 🎨
- Axios 📡

### **Backend:**
- Node.js 🌍
- Express.js 🚀
- MongoDB 🗄️
- Mongoose ORM 🔗
- JWT Authentication 🔑

### **AI & External Services:**
- Hugging Face API 🤖 (AI-based task description generation)
- Jira API 🔄 (Task automation)

---

## **📂 Project Structure**
```
/JIRA-AI
  |-- /server (Backend)
  |    |-- /controllers (Handles API logic)
  |    |-- /models (MongoDB Schemas)
  |    |-- /routes (API Routes)
  |    |-- /config (Database Connection)
  |    |-- server.js (Main Backend Entry Point)
  |-- /client (Frontend)
  |    |-- /public (HTML, Assets)
  |    |-- /src
  |    |    |-- /components (Reusable UI Components)
  |    |    |-- /pages (Main Pages)
  |    |    |-- /services (API Calls)
  |    |    |-- App.js (Main App Component)
  |    |    |-- index.js (Entry Point)
  |-- package.json (Project Dependencies)
  |-- README.md (Project Documentation)
  |-- .env (Environment Variables)
```

---

## **🚀 How to Run the Project**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/JIRA-AI.git
cd JIRA-AI
```

### **2️⃣ Setup Backend**
```bash
cd server
npm install
```

### **3️⃣ Setup `.env` File for Backend**
Create a `.env` file inside the `server` folder and add:
```
MONGO_URI=your_mongodb_connection_string
JIRA_API_URL=your_jira_api_url
JIRA_USERNAME=your_jira_email
JIRA_API_TOKEN=your_jira_api_token
JIRA_PROJECT_KEY=your_jira_project_key
HUGGINGFACE_API_KEY=your_huggingface_api_key
PORT=5000
```

### **4️⃣ Start Backend Server**
```bash
npm start
```
The backend will run on: `http://localhost:5000`

### **5️⃣ Setup Frontend**
```bash
cd ../client
npm install
```

### **6️⃣ Setup `.env` File for Frontend**
Create a `.env` file inside the `client` folder and add:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### **7️⃣ Start Frontend**
```bash
npm start
```
The frontend will run on: `http://localhost:3000`

---

## **🛠 API Endpoints**
| Method | Endpoint            | Description |
|--------|---------------------|-------------|
| POST   | `/api/tasks`        | Create a new AI-generated task |
| GET    | `/api/tasks`        | Fetch all tasks |
| GET    | `/api/tasks/:id`    | Fetch a specific task by ID |
| DELETE | `/api/tasks/:id`    | Delete a task |

---

## **🔥 Next Features & Roadmap**
✅ Deploying on **AWS & Vercel** 🌍  
✅ AI-powered **task prioritization** 🏆  
✅ Real-time **team collaboration & notifications** 🤝  

---

## **💬 Feedback & Contributions**
🚀 If you found this project useful, give it a ⭐ on GitHub!  
📢 Open to collaborations & feature suggestions!  
📩 Feel free to reach out for improvements or ideas!  
 

#MERN #AI #Jira #Automation #WebDevelopment #React #NodeJS 🚀🔥  

---
