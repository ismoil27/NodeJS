const os = require("node:os");

const freeMem = os.freemem();
const totalMem = os.totalmem();

const total = totalMem - freeMem;

const sum = total / Math.pow(1024, 2);

console.log(sum.toFixed() + "MB");
