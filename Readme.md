# SN Logistics

ServiceNow-based logistics tracking application with shipment management, automated status updates, tracking events, and a custom Service Portal interface.

![SN Logistics Banner](./img/banner.png)

---

## Overview

SN Logistics is a custom logistics tracking application built on the ServiceNow Platform.

The project was developed as a hands-on learning initiative while studying for the ServiceNow Certified Application Developer (CAD) certification. The main goal was to apply platform development concepts in a practical scenario, including custom tables, Business Rules, automation logic, Scheduled Jobs, Service Portal widgets, GlideRecord, and Scripted REST APIs.

The application simulates a shipment tracking system where users can search for a tracking number and view shipment information through a custom portal interface.

---

## Project Objectives

The main objectives of this project were to:

* Build a functional application inside ServiceNow
* Practice ServiceNow application development concepts
* Implement business logic using Business Rules
* Create and consume a Scripted REST API
* Develop a custom Service Portal experience
* Automate shipment status updates
* Structure data relationships between shipments, routes, centers, and tracking events
* Improve debugging, platform scripting, and application design skills

---

## What the Application Does

SN Logistics allows users to track shipments using a generated tracking number.

When a tracking number is submitted through the portal, the system:

1. Receives the tracking number from the user interface
2. Calls a custom Scripted REST API
3. Searches for the shipment using GlideRecord
4. Returns shipment data in JSON format
5. Displays the tracking information in a custom Service Portal widget

The returned data includes shipment status, current logistics center, recipient, estimated delivery date, and tracking number.

---

## Main Features

* Shipment tracking by tracking number
* Automatic tracking number generation
* Custom Scripted REST API
* Service Portal tracking interface
* Dark mode and light mode support
* Responsive portal layout
* Automated shipment status updates
* Automatic tracking event creation
* Route-based shipment structure
* Delivery simulation
* Delay handling
* Notification workflow
* Custom Business Rules
* Scheduled Job for shipment processing

---

## Service Portal

The user-facing interface was built using Service Portal widgets.

The portal was designed to provide a more modern and user-friendly experience compared to a standard ServiceNow interface. It includes a custom layout, responsive behavior, dark/light mode support, animations, and visual shipment tracking components.

### Light Mode

![Service Portal Light Mode](./img/SP_branco.png)

### Dark Mode

![Service Portal Dark Mode](./img/SP_preto.png)

---

## Shipment Record

Each shipment record stores the main information required to track and process a delivery.

The shipment includes:

* Sender
* Recipient
* Route
* Current logistics center
* Shipment status
* Estimated delivery date
* Shipping type
* Tracking number

![Shipment Form Part 1](./img/forms_parte1.png)

![Shipment Form Part 2](./img/forms_parte2.png)

---

## Tracking Number Generation

When a new shipment is created, a Business Rule automatically generates a unique tracking number.

Example:

```text
SN560240832BR
```

This tracking number is later used by the portal and the Scripted REST API to retrieve shipment information.

---

## Tracking Flow

The tracking process works as follows:

1. The user enters a tracking number in the Service Portal
2. The widget sends a request to the Scripted REST API
3. The API searches the shipment table using GlideRecord
4. The API returns the shipment data as JSON
5. The widget displays the response in the portal interface

![Tracking Input](./img/input.png)

API endpoint:

```text
/api/x_1762041_sn_log_0/sn_logistics_api/track/{tracking_number}
```

The API response includes:

* Shipment status
* Current logistics center
* Recipient
* Estimated delivery date
* Tracking number

---

## Scripted REST API

A custom Scripted REST API was created to expose shipment tracking data.

This part of the project was especially important for practicing:

* REST API structure
* Path parameters
* Request and response handling
* JSON responses
* GlideRecord queries
* API debugging
* Data validation

![Scripted REST API](./img/rest.png)

---

## Scheduled Job

A Scheduled Job was implemented to simulate shipment movement and automate status changes over time.

The Scheduled Job is responsible for:

* Updating shipment statuses
* Moving shipments between logistics centers
* Marking shipments as delayed when applicable
* Completing deliveries automatically
* Creating tracking updates during the shipment lifecycle

![Scheduled Job](./img/scheduled%20job.png)

This helped make the application behave more like a real logistics system, where shipment data changes over time without manual intervention.

---

## Business Rules

Several Business Rules were created to handle application logic and automate key processes.

Main Business Rules include:

* Generate Tracking Number
* Create Initial Tracking
* Create Tracking Event
* Validate Status Transition
* Status Auto
* Update Current Center

These rules support data consistency, automate repetitive actions, and ensure that shipment records follow the expected lifecycle.

---

## Dark Mode and Light Mode

The portal includes support for both dark mode and light mode.

The theme is handled through class toggles inside the widget logic:

```javascript
pagina.classList.toggle('light');
pagina.classList.toggle('dark');
```

![Dark Mode Portal](./img/SP_preto.png)

---

## Responsiveness

The portal was designed to be usable on different screen sizes, including desktop and mobile views.

![Responsive Layout](./img/responsivo.png)

---

## Technologies Used

* ServiceNow Platform
* Service Portal
* AngularJS
* JavaScript
* GlideRecord
* Scripted REST API
* Business Rules
* Scheduled Jobs
* HTML
* CSS
* Boxicons

---

## Key Learnings

This project helped me improve my understanding of several important ServiceNow development concepts, including:

* Application structure inside ServiceNow
* Custom table design
* Business Rules and server-side logic
* GlideRecord queries
* Scripted REST API development
* Service Portal widgets
* Client-side and server-side data flow
* Debugging ServiceNow applications
* Workflow automation
* UI customization inside Service Portal

The project also helped me better understand how enterprise applications connect data, logic, automation, and user experience inside a single platform.

---

## Current Limitations

This project was created as a learning and portfolio project, so there are still areas that can be improved.

Current limitations include:

* No authentication layer for external users
* No admin dashboard
* No full shipment history view in the portal
* No route map visualization
* Some internal naming conventions could be improved
* Limited error handling in some user scenarios

---

## Future Improvements

Planned improvements include:

* Add a full tracking timeline
* Improve portal responsiveness
* Add authentication and role-based access
* Create an admin dashboard
* Add route map visualization
* Improve tracking event history
* Refactor internal naming conventions
* Improve API error handling
* Add more detailed shipment lifecycle rules

---

## Author

Developed by Isaac Ambrozevicius.

* ServiceNow Certified System Administrator
* ServiceNow Certified Application Developer
* ServiceNow Certified Implementation Specialist – Data Foundations
