// Asynchronous - This challenge will involve using promises to deal with asynchronous functions

export const test = () =>{
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Hello");
    } else {
      reject("Goodbye")
    }
  });
}