console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 1000);

setTimeout(() => {
  console.log('No timeout function');
}, 0);

console.log('Finishing up');