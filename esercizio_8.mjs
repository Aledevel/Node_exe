// The newsEvent object continuously emits three different events: newsEvent, breakingNews and error

// Attach event listeners for each event and log out their data.



import { error } from "node:console";
import { EventEmitter,  } from "node:events";
const emitter = new EventEmitter();



function createNewsFeed() {

  setInterval(() => {
    emitter.emit("newsEvent","News: A thing happened in a place.");
  }, 1000);

  setInterval(() => {
    emitter.emit("breakingNews","Breaking news! A BIG thing happened.");
  }, 4000);

  setTimeout(() => {
    emitter.emit("error",new Error("News feed connection error"));
  }, 5000);

  return emitter;
}


const newsFeed = createNewsFeed();



newsFeed.on("newsEvent",(data)=>{
  console.log(data)
})
newsFeed.on("breakingNews",(data)=>{
  console.log(data)
})
newsFeed.on("error",(error)=>{
  console.error(error)
})
