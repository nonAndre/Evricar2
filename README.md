# 🏎️ Evricar

**Evricar** is a modern app designed to manage a car dealership.

This app provides to possible use cases

1. User: if you sign up with an email like yourname@utente.evricar.it
2. Employees: if you sign up with an email like yourname@dip.evricar.it
3. Non-logged user: You can explore the menus but you can't customize the cars



## 🔍 Behind the Scenes

SmartLibrary is built using a powerful modern stack:

- ⚛️ **React (TypeScript)**
- 🔥 **Firebase** – for authentication and data storage
- 🧠 **TanStack Query** – for caching and async data management
- 🪢 **Zustand** – for lightweight state management
- 🎨 **Tailwind CSS** – for elegant and responsive styling


## 🚀 Features

## 🛒 1. Catalog & Customization (User Side)

Browse a wide selection of cars.

Logged-in users can customize their vehicles.

Submit orders directly through the app.

## 📋 2. Order Management (Employee Side)

Employees can view, accept, or deny incoming orders.

Streamlined interface for efficient decision-making.



## ⚙️ Setup

### 1. 📥 Clone the Repository

```bash
git clone https://github.com/nonAndre/Evricar2.git
cd Evricar2
```

### 2. 💻 Install Dependencies

```bash
nvm use
npm install
```
### 3. 🛠️ Configure Environment Variables

Create a ```.env``` file in the root of the project and add the following:

```bash
VITE_APIKEY=your_key
VITE_AUTHDOMAIN=your_key
VITE_PROJECTID=your_key
VITE_STORAGEBUCKET=your_key
VITE_MESSAGESENDERID=your_key
VITE_APPID=your_key

```

## 4. ▶️ Run the App
```bash
npm run dev
```

## 📌 Notes

Make sure to use correct email formats (utente.evricar.it for users, dip.evricar.it for employees) to access the respective features.

Firebase credentials must be properly set in .env for the app to run correctly.

## 🛠️ Contributing

We welcome contributions! Feel free to fork the repo, open pull requests, or submit issues for improvements and bug fixes.
