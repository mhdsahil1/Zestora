const fs = require('fs');
const filepath = 'src/app/account/orders/[id]/page.tsx';
let data = fs.readFileSync(filepath, 'utf8');

// Replace item price
data = data.replace(/\$\{\(item\.price \* item\.quantity\)\.toFixed\(2\)\}/g, '₹{(item.price * item.quantity).toFixed(2)}');

// Replace total price
data = data.replace(/\$\{order\.totalPrice\.toFixed\(2\)\}/g, '₹{order.totalPrice.toFixed(2)}');

fs.writeFileSync(filepath, data, 'utf8');
console.log('Fixed currency symbols automatically!');
