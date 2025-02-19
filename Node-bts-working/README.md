

in node there are 2 engines --> v8 and libuv 

v8 engine handles synchronous code while 
libuv handles asynchronous code 

it keeps the async code to itself till the timer is up and after that it sends the code to the callback queue 

where event loop continiously checks if the callstack is empty or not. 

if yes , then the code is pushed to the callstack for execution 




but when we are writing js code that is async in nature and is for client side ie browser then 
it does not require any other specific engines to manage the asynchronous code 

it is managed by web API's 

and whne time is up they are sent to callback queue where they wait form callstack to get empty which is monitored by 

event loop.

when callstack is empty they are moved to the callstack for execution
