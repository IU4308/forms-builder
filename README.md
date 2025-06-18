# 🧩 Form Builder App

A collaborative, full-featured form-building platform that enables users to create, manage, and share interactive templates. Built with modern web technologies, it offers real-time collaboration, drag-and-drop question editing, image uploads, role-based access control, and powerful integrations with Salesforce, Odoo, Power Automate, and more.

## 🔗 Links

- 🌐 [Live Website](https://forms-builder-chi.vercel.app)
- 🗂 [Backend Repository](https://github.com/IU4308/forms-builder-backend)

## ✨ Features

- 🔧 **Drag-and-Drop Form Builder** – Easily create and reorder questions in templates.
- 🧑‍💻 **Role-Based Access Control** – Distinct roles for users and admins, with permission-based content access and editing.
- 🌐 **Internationalization (i18n)** – Support for multiple languages via `i18next`.
- 📁 **Image Uploads** – Upload and embed images using Cloudinary.
- 👥 **User Dashboard** – Personal workspace for managing created templates and received submissions.
- 🧩 **Template Sharing and Submission** – Users can create their own templates or fill out forms shared by others.
- ⚙️ **Template Configuration** – Template creators can configure image, tags, and set allowed users.
- 📊 **Results & Analytics** – Template creators can view all submissions and see aggregated results displayed as charts.
- 🔎 **Admin Visibility** – Admin users have full visibility and can access every page as its author.
- 📊 **Admin Panel** – Manage users, templates, and submissions at a global level.
- 🔄 **Real-Time Collaboration** – Sync changes live using WebSockets (`socket.io`).
- 🔌 **External Integrations**:
  - **Salesforce** – Automatically create contacts and accounts from form data.
  - **Odoo** – Import aggregated results into a custom-built Odoo app (deployed via Docker).
  - **Power Automate** – Generate and upload help tickets as JSON files to Dropbox via REST API, with automatic notification triggers.

## 🛠️ Tech Stack

**Frontend**
- TypeScript
- React
- Tailwind CSS
- Shadcn UI
- React Router
- React Query
- Axios
- i18next

**Backend**
- Node.js
- Express.js
- PostgreSQL
- Socket.io
- Cloudinary SDK

**Integrations**
- Salesforce API
- Odoo (Dockerized custom module)
- Power Automate + Dropbox (REST API)

