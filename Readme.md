# SN Logistics ✉️

> Track your shipment in real time with a modern logistics platform.

![alt text](./img/banner.png)

---

# About the project

This project started in March 2026 when I began studying for the ServiceNow CAD (Certified Application Developer) certification.

At first, the idea was just to build something simple to practice:
- GlideRecord
- Business Rules
- REST APIs

Then I had the brilliant idea of:

```text
"what if I build an entire logistics app... like the postal service?"
```

😭

The problem is that I was still learning half of the stuff.

So this project basically became:
- tutorials
- ServiceNow documentation (A LOT)
- debugging (A LOT TOO)
- suffering (WAY TOO MUCH)
- coffee (my teeth almost turned yellow)
- more debugging
- me breaking things that were already working

But honestly...

This was probably one of the projects that taught me ServiceNow the most.

---

# What is SN Logistics?

SN Logistics is a shipment tracking portal built entirely inside ServiceNow.

You enter a tracking number and the system:
- searches the shipment
- calls a Scripted REST API
- returns the data
- displays everything in a custom interface

All using:
- Service Portal
- Custom Widgets
- AngularJS
- GlideRecord
- Business Rules
- Scheduled Jobs
- Scripted REST API

---

# Features

✅ Shipment tracking  
✅ Dark mode / Light mode  
✅ Responsive interface  
✅ Custom REST API  
✅ Automatic status updates  
✅ Automatic tracking events  
✅ Automatic tracking number generation  
✅ Route system  
✅ Delivery simulation  
✅ Delay system  
✅ Fully customized UI  
✅ Notification workflow

---

# The portal

The entire UI was built using Service Portal widgets.

I didn’t want to create another fully white default-looking ServiceNow portal  
(little did I know this would become 10x more work)

So I tried to make something more modern:
- glassmorphism
- keyframe animations (the blue icons move 👀)
- dark mode
- gradients
- hover effects
- floating icons
- cleaner layout

![alt text](./img/SP_branco.png)

![alt text](./img/SP_preto.png)

---

# How it works

## 1. Shipment

The shipment stores:
- sender
- recipient
- route
- current center
- status
- estimated delivery time
- shipping type

![alt text](./img/forms_parte1.png)

![alt text](./img/forms_parte2.png)

---

## 2. Tracking Number

When a shipment is created:
- a Business Rule automatically generates a tracking number

Example:

```text
SN560240832BR
```

---

## 3. Tracking

The user enters the tracking number:

![alt text](./img/input.png)

The widget calls this API:

```text
/api/x_1762041_sn_log_0/sn_logistics_api/track/{tracking_number}
```

The API performs a GlideRecord query and returns:
- status
- current center
- recipient
- estimated delivery
- tracking number

---

# Scripted REST API

This was probably one of the parts that taught me the most.

I struggled A LOT trying to understand:
- request
- response
- path params
- JSON
- API returns
- debugging

![alt text](./img/rest.png)

---

# The most absurd bug in the project

I spent ALMOST 2 HOURS trying to figure out why the estimated delivery was NOT showing up on the portal.

I reviewed:
- widget
- Angular
- API
- Business Rule
- GlideRecord
- response
- JSON
- literally everything

Just to discover that the field name was:

```text
Esimated Delivery
```

WITHOUT THE "T".

😭😭😭😭😭😭😭😭😭

And how did I fix it?

I updated everything that referenced "estimated delivery" to "esimated delivery" instead of renaming the field 💀

debug scars.

---

# Scheduled Job

I also created a scheduler that:
- updates statuses
- moves shipments
- marks shipments as delayed
- automatically delivers shipments

![alt text](./img/scheduled%20job.png)

It actually started feeling like a living system updating itself in real time.

---

# Business Rules

There are several BRs in the project:
- Generate Tracking Number
- Create Initial Tracking
- Create Tracking Event
- Validate Status Transition
- Status Auto
- Update Current Center

Some of them are slightly broken.

But they work 😭

---

# Dark Mode

The dark mode was implemented using class toggles inside the widget:

```javascript
pagina.classList.toggle('light');
pagina.classList.toggle('dark');
```

And honestly?

This was one of my favorite parts of the final result.

![alt text](./img/SP_preto.png)

let's ignore the fact that the toggle button is misaligned ok

---

# Responsiveness

I also tried to make the portal at least somewhat responsive.

So it works relatively well on:
- desktop
- mobile

![alt text](./img/responsivo.png)

---

# Technologies used

- ServiceNow
- Service Portal
- AngularJS
- JavaScript
- GlideRecord
- Scripted REST API
- Business Rules
- Scheduled Jobs
- HTML
- CSS
- Boxicons

---

# What I learned

This project taught me A LOT about:
- architecture inside ServiceNow
- how APIs work
- debugging
- portals
- widgets
- GlideRecord
- data flow
- application structure

But most importantly:

how to solve problems.

![alt text](./img/KKKKKKKKKKK.png)

---

# Important notes

This project is NOT perfect.

And honestly, that was never the goal.

I wanted to build something:
- functional
- visually cool
- fun
- and that felt like a real project

And I think it turned out pretty well :)

---

# Next steps

Things I still want to add:
- tracking timeline
- authentication
- admin dashboard
- route map
- full tracking history

---

# Developed by

Isaac Ambrozevicius

CSA Certified System Administrator — ServiceNow  
CAD Certified Application Developer — ServiceNow