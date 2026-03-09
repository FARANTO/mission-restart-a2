# React মৌলিক ধারণা – README

এই ডকুমেন্টে React এর কিছু গুরুত্বপূর্ণ প্রশ্নের সহজ বাংলা ব্যাখ্যা দেওয়া হয়েছে।

---

## 1. JSX কী এবং কেন এটি ব্যবহার করা হয়?

**JSX (JavaScript XML)** হলো JavaScript এর একটি syntax extension যা ব্যবহার করে আমরা JavaScript এর ভিতরে HTML এর মতো কোড লিখতে পারি।

React এ UI তৈরি করার সময় JSX ব্যবহার করলে কোড পড়া এবং বোঝা অনেক সহজ হয়।

উদাহরণ:

```jsx
function App() {
  return (
    <h1>Hello World</h1>
  );
}
```

উপরের কোডটি দেখতে HTML এর মতো হলেও এটি আসলে JavaScript এর ভিতরে লেখা JSX।

React পরে এই JSX কে **React.createElement()** এ রূপান্তর করে এবং তারপর তা ব্রাউজারে render করে।

**JSX ব্যবহার করার কারণ:**

* UI কোড সহজে লেখা যায়
* HTML এর মতো readable syntax
* JavaScript logic সহজে ব্যবহার করা যায়
* component based UI তৈরি করা সহজ হয়

---

## 2. State এবং Props এর মধ্যে পার্থক্য কী?

React এ **State** এবং **Props** দুটোই ডাটা সংরক্ষণ ও ব্যবহারের জন্য ব্যবহৃত হয়, কিন্তু তাদের কাজ আলাদা।

### Props (Properties)

Props হলো parent component থেকে child component এ ডাটা পাঠানোর একটি উপায়।

Props **read-only**, অর্থাৎ child component এগুলো পরিবর্তন করতে পারে না।

উদাহরণ:

```jsx
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

### State

State হলো component এর নিজের ডাটা যা সময়ের সাথে পরিবর্তিত হতে পারে।

State পরিবর্তন হলে component আবার render হয়।

উদাহরণ:

```jsx
const [count, setCount] = useState(0);
```

### পার্থক্য

| Props                                | State                           |
| ------------------------------------ | ------------------------------- |
| Parent থেকে আসে                      | Component নিজে তৈরি করে         |
| Read-only                            | পরিবর্তন করা যায়                |
| Component এর বাইরে থেকে নিয়ন্ত্রণ হয় | Component এর ভিতরে নিয়ন্ত্রণ হয় |

---

## 3. useState hook কী এবং এটি কীভাবে কাজ করে?

**useState** হলো React এর একটি Hook যা functional component এর মধ্যে state ব্যবহার করার সুযোগ দেয়।

এটি সাধারণত এভাবে ব্যবহার করা হয়:

```jsx
const [state, setState] = useState(initialValue);
```

উদাহরণ:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

এখানে:

* `count` হলো state এর বর্তমান মান
* `setCount` হলো state আপডেট করার ফাংশন
* `useState(0)` হলো initial value

যখন `setCount` ব্যবহার করা হয়, তখন React component আবার render করে।

---

## 4. React এ কীভাবে বিভিন্ন component এর মধ্যে state শেয়ার করা যায়?

React এ state শেয়ার করার সবচেয়ে সাধারণ উপায় হলো **Lifting State Up**।

এর মানে হলো state কে parent component এ রাখা এবং তারপর সেই state কে props হিসেবে child component গুলোতে পাঠানো।

উদাহরণ:

```
Parent Component
   │
   ├── Child A
   └── Child B
```

Parent এ state থাকবে এবং Child A ও Child B উভয়েই props এর মাধ্যমে সেই state ব্যবহার করবে।

অন্য কিছু পদ্ধতি:

* Context API
* State management libraries (Redux, Zustand ইত্যাদি)

---

## 5. React এ Event Handling কীভাবে করা হয়?

React এ event handling JavaScript এর মতোই, তবে কিছু পার্থক্য আছে।

React এ event গুলো **camelCase** এ লেখা হয় এবং function হিসেবে দেওয়া হয়।

উদাহরণ:

```jsx
function ButtonExample() {

  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

এখানে:

* `onClick` হলো event
* `handleClick` হলো event handler function

React এ সাধারণ event গুলো:

* `onClick`
* `onChange`
* `onSubmit`
* `onMouseOver`

---


