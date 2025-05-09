Velvetyne is a full-stack e-commerce platform built using the MERN stack. It offers modern user features, a role-based admin dashboard, and plans to integrate GPT-4-powered dynamic pricing and shopping assistance through conversational UI.

Tech Stack:-
Frontend: React.js, Redux Toolkit, Material UI, React Router

Backend: Node.js, Express.js, MongoDB, JWT

Dev Tools: Nodemon, ESLint, Prettier

Planned AI: OpenAI GPT-4 API (Function Calling)

Completed Features:-
Secure Auth (Login/Signup with OTP + Password Reset)

User Module (Wishlist, Profile, Cart, Order History)

Admin Dashboard (Manage Products, Users, Orders, Admins)

Role-based Access with Soft-Delete & Status Update

Material UI Integration

Redux Toolkit for global state

Search & Pagination for Products

In Progress:-
Final UI polish for Admin Dashboard

Dynamic Pricing API integration

Payment Gateway (Stripe or Razorpay)

Deployment to Vercel or AWS

GPT-4 Integration for:

Conversational Product Discovery

Smart Recommendations

Price Comparison via Function Calling

🧭 Roadmap
plaintext
Copy
Edit
[✓] Build core frontend features
[✓] Backend APIs and database modeling
[✓] Auth system with OTP/email
[✓] Admin dashboard CRUD
[ ] Payment system integration
[ ] Vercel deployment (Next phase)
[ ] OpenAI GPT-4 Function Calling Integration
[ ] Conversational chat UI (React-based)
[ ] SEO optimization for product pages

Architecture Diagram (Verbal Description):-
Frontend: React (SPA) → Redux → Axios

Backend: Node.js API → MongoDB

Auth: JWT + OTP via Email

Admin Panel: Separate routes & protected API access

Planned GPT-4 Flow:

Chat UI → GPT-4 API → Backend Pricing/Inventory API → Response

Uses Function Calling to fetch product details, dynamic prices, or categories

(You can visualize this in a flow diagram using draw.io or Excalidraw)

Future: GPT-4 Integration (Blog Summary)
Title: How I’m Integrating GPT-4 into My E-Commerce App for Dynamic Pricing & Conversational Shopping

Outline:

Why GPT-4 in E-Commerce?

Product search fatigue → Chat-based discovery

Dynamic pricing → Based on demand, stock, trends

Architecture

Function Calling to fetch pricing, product specs

Natural Language → Function → Response → React Component

Example Use Case

User asks: “Show me wireless earphones under ₹2000”

GPT triggers a backend query → fetches → returns a dynamic list

Challenges

Handling latency

Balancing token cost and relevance

Rate-limiting and caching responses

Deployment Plans

Fine-tuning prompts

Hosting backend functions on AWS Lambda/Vercel serverless