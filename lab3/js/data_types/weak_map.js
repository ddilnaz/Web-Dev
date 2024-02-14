let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMessages = new WeakSet();
  
  // two messages have been read
  readMessages.add(messages[0]);
  readMessages.add(messages[1]);
  // readMessages has 2 elements
  
  // ...let's read the first message again!
  readMessages.add(messages[0]);
  // readMessages still has 2 unique elements
  
  // answer: was the message[0] read?
  alert("Read message 0: " + readMessages.has(messages[0])); // true
  
  messages.shift();

  let isRead = Symbol("isRead");
  messages[0][isRead] = true;

//2
let messages1 = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMap = new WeakMap();
  
  readMap.set(messages1[0], new Date(2017, 1, 1));
 