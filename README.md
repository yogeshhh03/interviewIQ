# 🤖 InterviewIQ.AI

> **AI-Powered Voice Interview Platform** — Practice real interview scenarios with an intelligent AI interviewer, get instant feedback, and track your performance analytics.

---

## 🌟 Live Demo

🔗 [interviewiq.ai](https://github.com/yogeshhh03/interviewIQ)

---

## 📸 Screenshots

| Interview Setup | AI Interview | Performance Report |
|---|---|---|
| Role & Resume Upload | Voice-based Q&A | Score Analytics |

---

## ✨ Features

- 🎙️ **AI Voice Interview** — Real-time voice recognition with Text-to-Speech AI interviewer
- 📄 **Resume Analysis** — Upload PDF resume → AI auto-fills role, skills & projects
- 🧠 **Smart Question Generation** — GPT-4o powered personalized interview questions
- 📊 **Performance Analytics** — Confidence, Communication & Correctness scores
- 🏦 **Credit System** — Buy credits via Razorpay (UPI, Cards, Netbanking)
- 📜 **Interview History** — Full history with detailed reports for each session
- 🔐 **Auth System** — Google OAuth + Email/Password (Firebase)
- 🎯 **Interview Modes** — Technical & HR interview modes

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React.js (Vite) | UI Framework |
| Redux Toolkit | State Management |
| Framer Motion | Animations |
| Axios | API Calls |
| Firebase | Authentication |
| React Icons | Icons |
| React Router DOM | Navigation |
| Web Speech API | Voice Recognition |
| Speech Synthesis API | AI Voice (TTS) |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | Server |
| MongoDB + Mongoose | Database |
| JWT | Auth Tokens |
| Multer | File Uploads |
| PDF.js | PDF Text Extraction |
| OpenRouter (GPT-4o-mini) | AI Questions & Evaluation |
| Razorpay | Payment Gateway |
| Cookie Parser | Session Management |

---

## 📁 Project Structure

```
interviewIQ/
├── client/                    # React Frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/            # Images, Videos
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Step1SetUp.jsx      # Interview Setup
│   │   │   ├── Step2Interview.jsx  # Live AI Interview
│   │   │   ├── Step3Report.jsx     # Results
│   │   │   ├── Timer.jsx
│   │   │   ├── AuthModel.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Auth.jsx
│   │   │   ├── InterviewPage.jsx
│   │   │   ├── InterviewHistory.jsx
│   │   │   ├── InterviewReport.jsx
│   │   │   └── Pricing.jsx
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   ├── utils/
│   │   │   └── firebase.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env                   # Client env variables
│   └── package.json
│
└── server/                    # Node.js Backend
    ├── config/
    │   ├── connectDb.js
    │   └── token.js
    ├── controllers/
    │   ├── auth.controller.js
    │   ├── interview.controller.js
    │   ├── payment.controller.js
    │   └── user.controller.js
    ├── middlewares/
    │   ├── isAuth.js
    │   └── multer.js
    ├── models/
    │   ├── user.model.js
    │   ├── interview.model.js
    │   └── payment.model.js
    ├── routes/
    │   ├── auth.route.js
    │   ├── interview.route.js
    │   ├── payment.route.js
    │   └── user.route.js
    ├── services/
    │   ├── openRouter.service.js
    │   └── razorpay.service.js
    ├── public/                # Resume uploads (temp)
    ├── .env                   # Server env variables
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- OpenRouter API key ([openrouter.ai](https://openrouter.ai))
- Razorpay account ([razorpay.com](https://razorpay.com))
- Firebase project ([console.firebase.google.com](https://console.firebase.google.com))

---

### 📦 Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yogeshhh03/interviewIQ.git
cd interviewIQ
```

---

#### 2. Setup Server

```bash
cd server
npm install
```

Create `server/.env` file:

```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Start server:

```bash
npm run dev
```

---

#### 3. Setup Client

```bash
cd client
npm install
```

Create `client/.env` file:

```env
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_FIREBASE_APIKEY=your_firebase_api_key
```

Start client:

```bash
npm run dev
```

---

#### 4. Open in Browser

```
http://localhost:5173
```

---

## 🔑 Environment Variables

### Server (`server/.env`)

| Variable | Description | Required |
|---|---|---|
| `PORT` | Server port (default: 8000) | ✅ |
| `MONGODB_URL` | MongoDB Atlas connection string | ✅ |
| `JWT_SECRET` | Secret key for JWT tokens | ✅ |
| `OPENROUTER_API_KEY` | OpenRouter API key for GPT-4o-mini | ✅ |
| `RAZORPAY_KEY_ID` | Razorpay Key ID | ✅ |
| `RAZORPAY_KEY_SECRET` | Razorpay Key Secret | ✅ |

### Client (`client/.env`)

| Variable | Description | Required |
|---|---|---|
| `VITE_RAZORPAY_KEY_ID` | Razorpay Key ID (same as server) | ✅ |
| `VITE_FIREBASE_APIKEY` | Firebase API Key | ✅ |

---

## 🔌 API Endpoints

### Auth Routes (`/api/auth`)
| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register new user |
| POST | `/login` | Login user |
| GET | `/logout` | Logout user |

### Interview Routes (`/api/interview`)
| Method | Endpoint | Description |
|---|---|---|
| POST | `/resume` | Upload & analyze PDF resume |
| POST | `/generate-questions` | Generate AI interview questions |
| POST | `/submit-answer` | Submit answer for evaluation |
| POST | `/finish` | Finish interview & calculate scores |
| GET | `/get-interview` | Get user's interview history |
| GET | `/report/:id` | Get detailed interview report |

### Payment Routes (`/api/payment`)
| Method | Endpoint | Description |
|---|---|---|
| POST | `/order` | Create Razorpay order |
| POST | `/verify` | Verify payment & add credits |

### User Routes (`/api/user`)
| Method | Endpoint | Description |
|---|---|---|
| GET | `/current-user` | Get logged-in user data |

---

## 💳 Pricing Plans

| Plan | Price | Credits | Features |
|---|---|---|---|
| Free | ₹0 | 100 | Basic reports, Voice access |
| Starter Pack | ₹100 | 150 | Detailed feedback, Analytics |
| Pro Pack | ₹500 | 650 | Advanced AI, Priority processing |

> Each interview session costs **50 credits**

---

## 🧪 Testing Payments (Razorpay Test Mode)

Use these test credentials in Razorpay checkout:

**UPI (Recommended):**
```
success@razorpay   → Payment Success
failure@razorpay   → Payment Failure
```

**Test Card:**
```
Card Number : 4718 6092 2568 5301
Expiry      : 12/26
CVV         : 123
OTP         : 123456
```

**Netbanking:** Select any bank → Click "Success" on the test page

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Yogesh Verma**

- GitHub: [@yogeshhh03](https://github.com/yogeshhh03)

---

<div align="center">

⭐ **Star this repo if you found it helpful!** ⭐

Made with ❤️ by Yogesh Verma

</div>
