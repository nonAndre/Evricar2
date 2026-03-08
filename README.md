## ⚙️ Setup

### Requirements
1.  Git <br>
Download from [here](https://git-scm.com/)


2.  Node.js <br>
Download from [here](https://nodejs.org/en)

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

The app will be visible at

```bash
http://localhost:5173/Evricar2
```
