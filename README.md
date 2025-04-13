


# 🎓 SikshaSathi

![image](https://github.com/user-attachments/assets/c903b69d-6dce-4e4c-a9c3-936cb86efabc)


---

# 🎓 Prototype Video 

https://youtu.be/NHBso4jtv08?feature=shared

# Backend Repo 

https://github.com/Srinjoy2004/SikshaSathi_Backend




---

# 🎓 Introduction

**SikshaSathi** is a modern, web-based school management platform designed to simplify administrative and academic workflows in educational institutions. The system supports student registration, fee payment, attendance tracking, exam management, and more—all through a user-friendly dashboard interface.

---

## 🚀 Features

- 👨‍🎓 **Student Management** – Add, edit, or delete student details with ease.
- 💰 **Fee Management** – Track student fees, payments, dues, and generate receipts.
- 📝 **Attendance Tracking** – Mark and manage daily attendance with reports.
- 🧑‍🏫 **Teacher Dashboard** – Teacher-specific dashboard for managing classes and students.
- 📊 **Admin Dashboard** – Full control over all modules, analytics, and user permissions.
- 📅 **Exam & Results Management** – Add exams, input marks, and generate results.
- 🔒 **Authentication System** – Secure login for Admins, Teachers, and Students.
- 🧹 **Clean UI** – Built using modern frontend technologies for a responsive experience.

---

## 🛠️ Tech Stack

| Technology     | Role                           |
|----------------|--------------------------------|
| **HTML, CSS, JS** | Frontend Structure & Styling |
| **Bootstrap**     | Responsive UI Components     |
| **PHP**           | Backend Development          |
| **MySQL**         | Database Management          |

---

## 📸 Screenshots

| Login Page | Admin Dashboard | Student Form |
|------------|------------------|--------------|
| ![Login](screenshots/login.png) | ![Dashboard](screenshots/admin_dashboard.png) | ![Student Form](screenshots/student_form.png) |

> 📂 _Screenshots are stored in the `/screenshots` folder. Update as needed._

---

## 🧩 Installation Guide

1. **Clone the repository**
   ```bash
   git clone https://github.com/apu52/SikshaSathi.git
   cd SikshaSathi
   ```

2. **Set up your web server** (XAMPP/LAMP/WAMP)

3. **Create the Database**
   - Import the `database.sql` file located in the root folder into your MySQL server.

4. **Configure the database**
   - Open `/config/db.php` and update with your local DB credentials.

5. **Run the project**
   - Open `localhost/SikshaSathi` in your browser.

---

## 🔐 Default Credentials

| Role    | Username | Password |
|---------|----------|----------|
| Admin   | admin    | admin123 |
| Teacher | teacher1 | pass123  |

> ⚠️ Change default passwords after first login for security.

---

## 📌 Folder Structure

```
SikshaSathi/
├── assets/          # CSS, JS, images
├── config/          # DB configuration
├── pages/           # Core pages (dashboard, forms)
├── includes/        # Header, footer, sidebar components
├── database.sql     # DB structure & sample data
├── index.php        # Entry point
└── README.md
```

---

## 🧠 Future Enhancements

- Email/SMS Notification Integration
- Multi-language Support
- Attendance via QR Code
- Role-based Access Control (RBAC)
- Mobile App Support

---

## 🤝 Contributing

Contributions are welcome! If you'd like to suggest features or report bugs, please open an issue or submit a pull request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---



