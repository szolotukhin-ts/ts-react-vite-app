## What are micro tasks and macro tasks in the event loop
https://www.youtube.com/watch?v=L18RHG2DwwA&list=PLC3y8-rFHvwj1_l8acs_lBi3a0HNb3bAN&index=1

libuv - ?
https://medium.com/@rishabhshkl820/understanding-libuv-the-backbone-of-node-js-asynchronous-operations-53ca9218161d
https://docs.libuv.org/en/v1.x/guide/basics.html
https://www.geeksforgeeks.org/node-js/libuv-in-node-js/
event loop - ?
https://nairihar.medium.com/you-dont-know-node-js-eventloop-8ee16831767
https://medium.com/@2001dkmaurya/nodejs-09-libuv-event-loop-1020aced39b8
https://medium.com/@rahul.jindal57/event-loop-in-node-js-76edd2ff909d
phases of event loop - ?

https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

In Node.js, each iteration of an event loop is called a tick.

Some operations, such as process.nextTick() or Promise microtasks, execute outside of Libuv's event loop stages. 
Instead, they run in their own queues and get processed at specific checkpoints in JavaScript execution

=======================================================================================================================
The Event Loop: Execution Order
- Execute all synchronous code (Call Stack / Execution Stack)
- Execute process.nextTick() (Node.js)
- Execute all Microtasks (Promises, async/await, queueMicrotask)
- Execute one Macro-tasks (setTimeout, I/O, setImmediate, XMLHttpRequest (XHR))
- Repeat

=======================================================================================================================
microtask - Micro-task Queue (or Job Queue)

Microtasks are smaller, more urgent tasks that are executed after the currently executing macrotask has completed, 
but before the Event Loop moves to the next phase.
Only after tasks in microTasks are completed / excahusted, event loop will next pick up one task from macroTasks. 

- process.nextTick() - (Node.js)
- Promise, async/await
- MutationObserver - (Browsers)
- queueMicrotask -  A direct way to queue a microtask.

macrotask - Callback Queue (Macro-task Queue).

timers, event listeners (click, scroll etc), UI updates, I/O Operations: File reading, network requests

=======================================================================================================================
Event Loop Phases
- Timers - setTimeout / setInterval callbacks.
- Pending - Executes most system callbacks (e.g., TCP errors).  Handles I/O callbacks deferred to the next loop iteration 
- Idle, prepare phase - Internal to Node.js.
- Poll phase - Retrieves new I/O events, executes relevant callbacks, and blocks if necessary while waiting for I/O.
- Check phase - setImmediate callbacks. (Node.js)
- Close -

=======================================================================================================================
questions

MessageChannel callbacks

If the call stack is empty, the event loop moves the first task from the message queue to the call stack.
