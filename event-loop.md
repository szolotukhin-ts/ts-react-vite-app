## What are micro tasks and macro tasks in the event loop
https://www.youtube.com/watch?v=L18RHG2DwwA&list=PLC3y8-rFHvwj1_l8acs_lBi3a0HNb3bAN&index=1

libuv - ?
https://medium.com/@rishabhshkl820/understanding-libuv-the-backbone-of-node-js-asynchronous-operations-53ca9218161d
https://docs.libuv.org/en/v1.x/guide/basics.html
https://www.geeksforgeeks.org/node-js/libuv-in-node-js/
event loop - ?
https://medium.com/@rahul.jindal57/event-loop-in-node-js-76edd2ff909d
https://nairihar.medium.com/you-dont-know-node-js-eventloop-8ee16831767
https://medium.com/@2001dkmaurya/nodejs-09-libuv-event-loop-1020aced39b8
phases of event loop - ?

https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

In Node.js, each iteration of an event loop is called a tick.

Some operations, such as process.nextTick() or Promise microtasks, execute outside of Libuv's event loop stages. 
Instead, they run in their own queues and get processed at specific checkpoints in JavaScript execution

=======================================================================================================================
The Event Loop: Execution Order
- Execute all synchronous code (Call Stack)
- Execute process.nextTick()
- Execute Microtasks (Promises, async/await)
- Execute Macro-tasks (setTimeout, I/O, setImmediate)

=======================================================================================================================
microtask - Micro-task Queue (or Job Queue)

Microtasks are smaller, more urgent tasks that are executed after the currently executing macrotask has completed, 
but before the Event Loop moves to the next phase.

- process.nextTick()
- Promise, async/await
- MutationObserver
- queueMicrotask

macrotask - Callback Queue (Macro-task Queue).

=======================================================================================================================
Event Loop Phases
- Timers - setTimeout / setInterval callbacks.
- Pending - Executes most system callbacks (e.g., TCP errors).
- Idle, prepare phase - Internal to Node.js.
- Poll phase
- Check phase - setImmediate callbacks.
- Close -

=======================================================================================================================
questions

MessageChannel callbacks
