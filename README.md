# GyanGrid – AI-Powered Educational Platform for Bharat  
**_"Not Just EdTech — EduQuity."_**

GyanGrid is a socio-tech AI platform designed to revolutionize India’s educational landscape, especially in rural and government school settings, through accessible technology, equity-driven features, and intelligent insights.

---

## 📑 Table of Contents
- [Project Overview](#project-overview)  
- [Key Features](#key-features)  
- [Tech Stack](#tech-stack)  
- [System Architecture](#system-architecture)  
- [Dashboards Overview](#dashboards-overview)  
- [Offline + Device Strategy](#offline--device-strategy)  
- [ReConnect – Device Redistribution Model](#reconnect--device-redistribution-model)  
- [Revenue & Sustainability](#revenue--sustainability)  
- [Getting Started](#getting-started)  
- [Folder Structure](#folder-structure)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)

---

## 📌 Project Overview

**GyanGrid** is an open, AI-augmented educational ecosystem focused on equitable, scalable, and intelligent learning. It empowers teachers, students, school admins, and communities with tools to track, manage, and optimize education — even in offline or low-resource environments.

GyanGrid includes:
- AI-powered dashboards (Student, Teacher, Principal)  
- Real-time learning analytics  
- In-app fee and salary management  
- Offline support with multilingual content  
- A curated e-marketplace for educational resources  
- Device redistribution through its unique **ReConnect** initiative

---

## ✨ Key Features

### 🎓 Student Dashboard
- Personalized learning insights (attendance %, strong/weak topics)  
- Daily & upcoming class schedules  
- Auto-generated quiz tracking  
- Assignment submissions  
- Fee payment portal via Razorpay  
- Access to learning marketplace  
- Offline + multilingual support  

### 👨‍🏫 Teacher Dashboard
- Daily class confirmation/reschedule logs  
- Assignment/quiz uploading  
- Student/class performance analytics  
- Salary viewing + payout breakdown  
- Teaching impact visualization  

### 🏫 Principal/Admin Dashboard
- Multi-grade analytics dashboard  
- Teacher performance & class logs  
- Student dropout + scholarship alerts  
- Fund disbursement & circulars  
- Approval of salaries + device tracking  

### 🛠 Admin Panel
- System-wide settings, permissions  
- CSR/NGO onboarding and tracking  
- Data logs, usage analytics, feature toggles  
- Support ticket management

---

## 🧠 Tech Stack

| Layer           | Tools/Technologies |
|----------------|--------------------|
| Frontend       | React.js, Vite, Tailwind, PWA |
| Backend        | Node.js + Express / Firebase Functions |
| Database       | Firestore, IndexedDB, Cloudflare R2 |
| AI Layer       | Whisper.cpp, IndicTrans, TFLite/ONNX |
| Payments       | Razorpay |
| Security       | Firebase Auth, OAuth2, RBAC |
| Tracking       | Light location ping (privacy-compliant) |

---

## 🧱 System Architecture

[User (Student / Teacher / Principal)]
        ↓
[Frontend PWA (React + Vite)]
        ↓
[Firebase Auth + Firestore Database]
        ↓
[AI Services: Whisper.cpp, IndicTrans, ONNX / TFLite]
        ↓
[Payment Services (Razorpay)]
        ↓
[Analytics + Admin Console]
        ↓
[Device Monitoring + ReConnect Layer]

---


---

## 📊 Dashboards Overview

### Student
- Learning insights + performance summary  
- Fee status & quiz analytics  
- Strong vs weak topic maps  
- Access to e-marketplace + downloadable report

### Teacher
- Attendance, class confirmation  
- Assignment uploads & impact graphs  
- Salary details, payout logs  
- Teaching effectiveness matrix

### Principal
- Multi-grade comparative dashboards  
- Staff and student alerts  
- Fund disbursal and academic calendar

---

## 🌐 Offline + Device Strategy

- Progressive Web App (PWA) with IndexedDB  
- Works offline, syncs on connection  
- Multilingual input + voice (Whisper, IndicTrans)  
- Mobile-first UI, works on school PCs  
- “Guest mode” for shared devices

---

## 🔁 ReConnect – Device Redistribution Model

> _“Turn old phones into new futures.”_

- Collect used devices from donors via e-marketplace  
- Refurbish, wipe, and pre-install GyanGrid  
- Distribute to students at:
  - ₹500–800 subsidized  
  - Free (via NGO/CSR support)  
- GPS-only tracking (no private data)  
- Device usage linked to school admin  
- Transparent impact dashboard for donors/CSR

---

## 💰 Revenue & Sustainability

| Revenue Source                   | Model Description                     |
|----------------------------------|----------------------------------------|
| School Subscriptions             | ₹100–₹300/student/month (private)      |
| Razorpay Commission              | 0.5%–2% per transaction (fees/salary)  |
| Marketplace Vendor Commissions   | 5%–15% per product                     |
| Ads in Marketplace               | Sponsored slots or banners            |
| CSR/NGO Sponsorship              | Per-device or per-student coverage     |
| Scholarship Monitoring Services  | 0.2%–1% commission on impact tracking |

---







