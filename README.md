# 📌 Employee Task Management System (React)

## 🚀 Overview
The **Employee Task Management System** is a React-based application that allows admins to create and assign tasks to employees, while employees can log in to view and manage their assigned tasks.  

It uses **React Context + LocalStorage** for authentication and data persistence.

---

## 🛠️ Tech Stack
- **Frontend:** React (Hooks + Context API)
- **Styling:** CSS / Tailwind / Bootstrap (based on your project)
- **Storage:** LocalStorage (for login & task data persistence)

---

## ✨ Features

### 👨‍💼 Admin
- Login with admin credentials
- View all employees
- Create and assign tasks to employees
- View all tasks with status (New, Active, Completed, Failed)

### 👨‍💻 Employee
- Login with personal credentials
- View tasks assigned by Admin
- Task categories:  
  - **New Tasks**  
  - **Active Tasks**  
  - **Completed Tasks**  
  - **Failed Tasks**
- Each task contains: **Title, Category, Date, Assigned By, Description**

--- 
##🔑 Login Credentials

##Admin Login:
Email: admin@example.com
Password: 123

##Employee Login:
Predefined employees stored in AuthContext (persisted with LocalStorage)
Email : e@e.com
Password : 123

## 📂 Project Structure
employee-task-management/
│── public/
│   └── index.html
│
│── src/
│   ├── Components/
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   ├── TaskList/
│   │   │   ├── AcceptTask.jsx
│   │   │   ├── CompleteTask.jsx
│   │   │   ├── FailedTask.jsx
│   │   │   ├── NewTask.jsx
│   │   │   └── TaskList.jsx
│   │   └── Others/
│   │       ├── AllTask.jsx
│   │       ├── CreateTask.jsx
│   │       ├── Header.jsx
│   │       └── TaskListNumbers.jsx
│   │
│   ├── Context/
│   │   └── AuthProvider.jsx
│   │
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── utils/
│   │   └── LocalStorage.jsx
│   │
│   ├── App.js
│   ├── index.js
│   └── main.js
│
│── .gitignore
│── README.md
│── package.json
│── package-lock.json
│── vite.config.js
README.md

🖼️ Screenshots
🔐 Login Page

🖥️ Admin Dashboard

👨‍💻 Employee Dashboard
