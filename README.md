# ⚽ Flux Team Roster

> A professional **Team Roster Manager** built to demonstrate the official Facebook **Flux Architecture** in a modern React environment.

---

## 🪞 Overview

This project serves as a deep dive into **unidirectional data flow**. While many modern apps use simplified hooks, this project implements the original **Flux pattern** — using a central **Singleton Dispatcher** — to manage a sports team roster.

It solves the problem of **prop drilling** and unpredictable state changes by enforcing a strict circular data path.

---

## 🚀 Features

✨ Key things this app can do:

- 🎯 **Centralized State** — Uses a Singleton Store as the *Single Source of Truth*
- 🧠 **Action-Based Updates** — All changes are triggered via formal Actions and a Central Dispatcher
- 📱 **Persistent Storage** — Integrated with `localStorage` so your roster survives page refreshes
- ⚡ **Vite-Powered** — High-performance development environment bridged with legacy architecture

---

## 🔥 Full Data Flow

- User triggers action
- Action dispatched
- Dispatcher sends action to Store
- Store updates _players
- Store emits "change"
- React component re-renders

---

## 🧠 In Simple Words

This file represents a **Flux Store**.

It:

- 📦 Stores team players data
- 👂 Listens for dispatched actions
- 🔄 Updates the internal data based on action type
- 📢 Notifies React components when data changes

---

## 🏗 Architecture Pattern

This follows the **Classic Flux Store Pattern**:

1. **Action** is dispatched.
2. **Dispatcher** sends the action to the Store.
3. **Store** updates its private state.
4. Store emits a `"change"` event.
5. **React components** re-render with updated data.

---

## 🔁 Data Flow (Unidirectional)

User Action → Dispatcher → Store → React View
This ensures predictable and centralized state management.


## 🧱 Tech Stack

| Technology | Purpose |
|------------|----------|
| React 19 | UI components and rendering logic |
| Flux (Official Library) | Implementation of the Dispatcher pattern |
| Vite | Modern build tool and dev server |
| Events (EventEmitter) | Communication between the Store and UI |
| CSS3 | Clean, focused styling for the roster interface |

---

## 📚 What We Have Studied

Here are the key JavaScript and architectural concepts covered while building this project 🧩

- 🔄 **Unidirectional Data Flow** — Understanding the `Action → Dispatcher → Store → View` loop
- 🏗 **Singleton Pattern** — Ensuring only one Dispatcher exists for the entire application
- 🧬 **Immutability** — Learning that React requires new array references (`[...]`) to trigger UI updates
- 📡 **Event-Driven UI** — Using `addChangeListener` to manually subscribe React components to external data stores
- 🔧 **Legacy Integration** — Patching modern build tools (Vite) to support Node.js built-ins like `EventEmitter`

---

## 🌿 Lessons Learned

- 🧠 **Architecture Matters** — Understanding the original Flux pattern makes state management much less “magical”
- 🚫 **Don’t Mutate State** — `.push()` is the enemy of React; always spread arrays to create new references
- 🌉 **The Bridge** — Using `--legacy-peer-deps` and configuring `vite.config.js` to make old and new technologies work together

---


## 💫 Author

👩‍💻 Created by **Aliya Syed**  
> *“Build. Break. Learn. Repeat.”* 🌸

