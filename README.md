# TASK 3 – Collaborative Document Editor using React & Backend

*COMPANY*: CODTECH IT SOLUTIONS  
*NAME*: MAADESHWAR D V  
*INTERN ID*: CITS0D500  
*DOMAIN*: FULL STACK DEVELOPMENT  
*DURATION*: 4 WEEKS  
*MENTOR*: NEELA SANTOSH  

## Description:

In Task 3, I was challenged to create a real-time **Collaborative Document Editor** — a full-stack web application inspired by tools like Google Docs, where multiple users can edit a document simultaneously and see live updates as they happen. This task brought together all aspects of full-stack development: frontend design, backend logic, real-time data exchange, and database integration.

The frontend of the application was developed using **React.js**, a powerful JavaScript library for building dynamic user interfaces. For the rich text editing functionality, I integrated **Quill.js**, an open-source WYSIWYG editor that offers flexible formatting features like bold, italic, lists, headers, and links. React’s component-based architecture allowed me to isolate functionalities such as the editor, toolbar, and document loader for better maintainability and code reuse.

The backend was powered by **Node.js** and **Express.js**, and I used **Socket.io** once again to enable real-time communication between users editing the same document. When one user types or formats text, the changes are immediately broadcast to other connected users via sockets. This required careful synchronization of document state and latency handling to ensure consistency and minimize typing delays.

I implemented a MongoDB database using **Mongoose ORM** to store and retrieve documents persistently. Every document had a unique ID (generated using UUID), and users could access a shared editing session by visiting the corresponding URL. If a document didn’t exist, the backend created a new one; if it did, it loaded the existing content from MongoDB and served it to the client.

Handling real-time collaboration introduced a number of technical challenges. One of the biggest was **document conflict resolution**. I learned how to implement basic operational transforms to merge concurrent edits in real time without corrupting the document structure. Although basic, this logic mimicked the more complex algorithms used by production-grade editors.

To improve the user experience, I also implemented **autosave functionality** — every few seconds, the document state is saved to MongoDB automatically. This ensures that even if a user accidentally disconnects, they can recover their work when they return. The app also handles socket disconnections gracefully and attempts reconnection without data loss.

On the security side, I implemented basic route protection and input validation to prevent potential misuse of the editor. I added middleware to verify valid document IDs and sanitize incoming socket events. Though this project can be extended further with features like authentication, document sharing, access control, and version history, the current version provides a solid base to build upon.

Styling was done using CSS Modules to scope styles locally to components. The UI was kept minimal and professional to mimic modern collaboration tools. Responsive layout ensured that the application works well across devices, from desktops to tablets.

This task was the most challenging and enriching of all. It not only tested my coding skills but also deepened my understanding of how modern real-time collaborative tools function. I had to think from both frontend and backend perspectives — how to maintain performance, reduce data conflicts, ensure smooth communication between users, and handle edge cases.

By completing this task, I’ve learned how to manage shared application state across users in real time, how to build rich text editors, and how to integrate React with Socket.io and MongoDB. It significantly strengthened my knowledge of full-stack development and gave me the confidence to build scalable and collaborative applications for real-world use cases.
