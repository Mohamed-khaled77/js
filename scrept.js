let num1;
let num2;
let asin;

function calculator() {
  num1 = +prompt(`الرقم الأول:`);
  asin = prompt(`نوع العملية (+, -, *, /, %): `);
  num2 = +prompt(`الرقم الثاني: `);

  switch (asin) {
    case `+`:
      console.log(num1 + num2);
      break;
    case `-`:
      console.log(num1 - num2);
      break;
    case `*`:
      console.log(num1 * num2);
      break;
    case `/`:
      console.log(num1 / num2);
      break;
    case `%`:
      console.log(num1 % num2);
      break;
    default:
      console.log(`عملية غير صحيحة`);
  }
}
