# **Velvetyne**

**Velvetyne** is a full-stack e-commerce platform built using the **MERN stack**. It delivers a modern shopping experience with **secure user login**, a **role-based admin dashboard**, and **cloud-optimized product image handling** using AWS S3 and CloudFront.

---

## **1. Completed Features**

* **Secure Authentication** — Login with JWT-based authentication
* **Cart System** — Fully functional cart powered by Redux with persistence across sessions
* **Product Catalog** — Product listing and detail views
* **UI Integration** — All pages built using Material UI and Redux Toolkit

---

## **2. In Progress**

* **Product Management** — Migrating from local storage to AWS S3 + CloudFront CDN
* **Admin Dashboard** — CRUD operations for products, users, and orders
* **UI Refinement** — Enhancements for responsiveness and design consistency
* **Payment Gateway Integration** — Stripe or Razorpay
* **Deployment Setup** — Vercel or AWS

---

## **3. Roadmap**

| **Milestone**                            | **Status**     |
| ---------------------------------------- | -------------- |
| Core frontend development                | ✅ Completed    |
| Backend APIs and database modeling       | ✅ Completed    |
| Authentication system                    | ✅ Completed    |
| Cart system with persistence             | ✅ Completed    |
| Admin dashboard CRUD operations          | 🔄 In Progress |
| Product cloud integration (S3/CDN)       | 🔄 In Progress |
| Payment system integration               | ⏳ Pending      |
| Deployment to production                 | ⏳ Pending      |

---

## **4. Architecture Overview**

**Frontend**-
Built as a Single Page Application using **React.js**, **Redux Toolkit** for state management, and **Axios** for backend communication.

**Backend**-
RESTful API built with **Express.js**, using **MongoDB** with **Mongoose** for database operations.

**Authentication**-
JWT-based secure login system for both user and admin access.

**Cloud Optimization (In Progress)**-
Product images will be stored in **AWS S3**, and delivered via **CloudFront CDN** for low-latency performance. Image URLs are stored in MongoDB.

---

### 🎨 UI Preview

**Login with OTP**  
Secure authentication flow with OTP and success redirect  
<img src="demos/login.png" alt="Login" width="600"/>

---

**Product Listing**  
Homepage with product cards, filters, and search  
<img src="demos/productlisting.png" alt="Product Listing" width="600"/>

---

**Product Details**  
Single product view with key information and action buttons  
<img src="demos/product.png" alt="Product Details" width="600"/>


---
