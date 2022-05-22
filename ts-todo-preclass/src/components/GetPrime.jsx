import React, { useMemo } from "react";

const isPrime = (n) => {
  let count = 0;
  if (n === 1 || n === 0) {
    return false;
  }
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
    if (count > 2) {
      return false;
    }
  }
  return true;
};

const getNthPrimeNo1 = (n) => {
  console.log(`getting ${n}th prime no`);

  let count = 1;
  let i = 1;
  while (count <= n) {
    i++;
    let res = isPrime(i);
    if (res) {
      count++;
    }
  }
  return i;
};

const GetPrime = ({ value, label, next }) => {
  // const val = getNthPrimeNo1(value);
  //expensive operation is being memorised
  const val = useMemo(() => getNthPrimeNo1(value), [value]);

  return (
    <div>
      <h3>{label}</h3>
      <h3>The {value} th Prime number is </h3>
      <h5> {val} </h5>
      <button onClick={next}>NEXT</button>
    </div>
  );
};

//React Memo
//Higher order components

// export default React.memo(GetPrime, (prevProps, nextProps) => {
//   return prevProps.value === nextProps.value;
// });
export default React.memo(GetPrime);
