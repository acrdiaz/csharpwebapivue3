# C# Core WebAPI Vue3

## Description

This is a simple project to demonstrate Vue 3 with C# WebAPI Core .net 8

---

## Quick Start

### 1. Clone the Repository

To get started, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/acrdiaz/csharpwebapivue3.git
```

### 2. Navigate to the Project Directory

Move into the project folder:

```bash
cd csharpwebapivue3
```

---

### 1. Create Database

Create database, table, and registries

```bash
create database TodoApp

create table Notes (
  id bigint identity(1, 1),
  [description] nvarchar(max)
)

insert into notes values ('buy fruits')
insert into notes values ('do laundry')

select * from notes
```

---

## Build UI Project (Vue 3)

### 1. Open directory

Open directory

```bash
cd ui
```

```bash
cd todoapp
```

### 2. Install dependencies

Install depenencies

```bash
npm install
```

### 3. Check if axios is installed

Check if axios is installed, should not be empty (or check the package.json)

```bash
npm list axios
```

### 4. Install axios if not installed

Install axios

```bash
npm install axios
```

### 5. Start the development server

Start server

```bash
npm run dev
```

### Optional: Build for production

```bash
npm run build
```

---

## Additional notes

See the file ["notes.txt"](notes.txt) to see the steps used to create the project from scratch.
