# Node Package Manager (npm)

It’s the default package manager that comes with `Node.js`, and it’s used for:

---

🔹 1. Managing Packages (Libraries / Tools)

* You can install open-source libraries (like **Jest**, **React**, **Express**, etc.).
* Example:

  ```bash
  npm install jest --save-dev
  ```

  This downloads Jest into your `node_modules/` folder and adds it to your `package.json`.

---

🔹 2. Running Scripts

Inside your `package.json`, you can define scripts:

```json
"scripts": {
  "start": "node server.js",
  "test": "jest"
}
```

Then run them with:

```bash
npm start
npm test
```

---

### 🔹 3. Dependency Management

* When you install something, npm records it in `package.json` + lockfile.
* Anyone who clones your repo can run:

  ```bash
  npm install
  ```

  and get the exact same dependencies.

---

### ✅ Summary

* **npm = package manager + script runner** for Node.js projects.
* It helps you install, update, and run code libraries.

