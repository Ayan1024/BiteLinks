# 🔗 URL Shortener App

A sleek and secure full-stack URL shortener built using **Next.js 15 App Router**, **NextAuth**, **MongoDB**, and **Tailwind CSS**. This application allows users to shorten URLs after signing in securely, view/manage their links, and experience seamless dark/light mode switching.

---

## ✨ Features

- 🔐 **Authentication** – Secure login and register using **NextAuth.js** with credentials (email & password).
- 🔒 **Password Security** – User passwords are hashed using **bcrypt** and stored safely in MongoDB.
- 📬 **MongoDB Integration** – Stores user data and shortened URLs.
- 🌐 **URL Shortening** – Easily shorten any long link, and copy with a single click.
- 🌙 **Dark/Light Theme** – Smooth theme toggle with persistence using `next-themes`.
- 🧠 **Hydration-safe UI** – Designed to prevent SSR/CSR hydration mismatch errors.
- 🧼 **Clean, Modern UI** – Built with **Tailwind CSS** and **Material Tailwind** components.

---

## 🚀 Tech Stack

- **Frontend**: [Next.js 15 (App Router)](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), [Material Tailwind](https://www.material-tailwind.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Security**: [bcrypt](https://www.npmjs.com/package/bcrypt)
- **Icons**: [Heroicons](https://heroicons.com)

---

## 📸 UI Screenshots

### 🖼️ Front Page (Light & Dark Mode)

| Light | Dark |
|-------|------|
| ![Light FrontPage](./screenshots/wui.png) | ![Dark FrontPage](./screenshots/bui.png) |
### 🖼️ Login Page

| ![Login Dark](./screenshots/login.png) |

### 🌍 Shortener Page

| Light | Dark |
|-------|------|
| ![Shortener Light](./screenshots/wshortner.png) | ![Shortener Dark](./screenshots/shortner.png) |
### 📑 Footer

 ![Footer](./screenshots/footer.png) |

> _All screenshots are located in the `screenshots/` folder._

---
# NextAuth configuration
NEXTAUTH_SECRET=your_super_secret_here
NEXTAUTH_URL=http://localhost:3000

# MongoDB connection
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_db_name?retryWrites=true&w=majority

# (Optional) OAuth providers – enable if you're using them
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret

TWITTER_CLIENT_ID=your_twitter_client_id
TWITTER_CLIENT_SECRET=your_twitter_client_secret

---

## ✨ File Structure
/app  
  /api
    /auth       → NextAuth API routes
  /shorten      → Page to create
/components     → Custom reusable components
/lib            → DB connection, utilities
/models         → Mongoose models
/public         → Your img/png/svg
/styles         → Global CSS  
/screenshots  → UI images for README(Tailwind)
