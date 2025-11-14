console.log('START');

console.log('1. Synchronous');

setTimeout(() => {
  console.log('5. setTimeout 0ms');
}, 0);

setTimeout(() => {
  console.log('7. setTimeout 100ms');
}, 100);

Promise.resolve().then(() => {
  console.log('3. Promise then');
});

async function asyncFunc() {
  console.log('2. Async function started');
  await Promise.resolve();
  console.log('4. After await');
}

asyncFunc();

function withCallback(callback) {
  callback();
}

withCallback(() => {
  console.log('2.5. Callback executed');
});

console.log('END');

setTimeout(() => {
  console.log('6. setTimeout with Promise inside');
  Promise.resolve().then(() => {
    console.log('6.5. Promise in setTimeout');
  });
}, 50);
