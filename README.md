# **🖼️ Steganography Website**  

🚀 A **modern, interactive, and feature-rich** web-based **Steganography Tool** for **hiding and extracting secret messages** in **images, videos, and ciphertext**. Built with **Flask (Python)** for the backend and **HTML, CSS, JavaScript (Node.js)** for the frontend.  

---

## **✨ Features**  

✅ **Image Steganography** – Encode & decode messages in images  
✅ **Video Steganography** – Hide & extract messages in videos  
✅ **Ciphertext Encryption & Decryption** – Secure text communication  
✅ **Dark Mode Support** – Beautiful switchable theme  
✅ **Preview & Download** – View and save encoded files  
✅ **Fast & Lightweight** – Smooth user experience  
✅ **Responsive & Modern UI** – Glassmorphism design with animations  

---

## **📂 Project Structure**  

```
steganography-website/
│── backend/                 
│   ├── steganography.py      # API (Handles image, video, ciphertext steganography)
│   ├── uploads/              # Temporary upload storage
│   ├── output/               # Encoded images/videos storage
│   ├── requirements.txt      # Python dependencies
│
│── frontend/                
│   ├── index.html            # Main webpage UI
│   ├── style.css             # Modern styling (Glassmorphism + Dark Mode)
│   ├── script.js             # JavaScript logic (API integration)
│
│── node_modules/             
│── server.js                 # Node.js Express frontend server
│── package.json              # Node.js dependencies
│── README.md                 # Project documentation
│── .gitignore
```

---

## **🛠️ Installation & Setup**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/Ronitraj07/Steganography.git
cd Steganography
```

---

### **2️⃣ Backend Setup (Flask API)**  

#### **🔹 Install Dependencies**  
```sh
cd backend
pip install -r requirements.txt
```

#### **🔹 Run the Backend**  
```sh
python steganography.py
```
✅ Backend is now running at → [`http://127.0.0.1:5000`](http://127.0.0.1:5000)

---

### **3️⃣ Frontend Setup (Node.js & Express)**  

#### **🔹 Install Dependencies**  
```sh
cd frontend
npm install
```

#### **🔹 Run the Frontend**  
```sh
node server.js
```
✅ Frontend is now running at → [`http://127.0.0.1:3000`](http://127.0.0.1:3000)  

---

## **🧪 How to Use**  

1. Open **[`http://127.0.0.1:3000`](http://127.0.0.1:3000)** in your browser  
2. Choose **Image, Video, or Ciphertext** mode  
3. **Upload a file & enter a secret message**  
4. Click **Encode** to hide the message  
5. Click **Decode** to extract the message  
6. **Preview & Download** the encoded file  

---

## **📜 API Endpoints**  

| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/encode/image` | Encodes a message in an image |
| `POST` | `/decode/image` | Extracts a message from an image |
| `POST` | `/encode/video` | Embeds a message in a video |
| `POST` | `/decode/video` | Extracts a message from a video |
| `POST` | `/encrypt/text` | Encrypts a text message |
| `POST` | `/decrypt/text` | Decrypts a text message |

Example API call (Encoding an image):  
```sh
curl -X POST -F "file=@image.png" -F "message=Hello" http://127.0.0.1:5000/encode/image
```

---

## **🌟 Screenshots**  

### **🔆 Light Mode**  
![Light Mode UI](https://via.placeholder.com/800x400.png?text=Light+Mode+UI)  

### **🌙 Dark Mode**  
![Dark Mode UI](https://via.placeholder.com/800x400.png?text=Dark+Mode+UI)  

---

## **🤝 Contributing**  

Want to improve this project? Feel free to **fork**, **star**, and submit a **pull request**. Contributions are always welcome! 🚀  

---

## **📜 License**  

This project is **MIT Licensed**. Use freely and responsibly.  

---

This README follows the **modern structured format** you wanted. Let me know if you need any modifications! 🚀
