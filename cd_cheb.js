function chebyshev(order, x, data) {
  // Evaluate a Chebyshev polynomial

  let bk;
  let two_x = 2 * x;
  let bkp2 = data[order];
  let bkp1 = two_x * bkp2 + data[order - 1];

  for (let n = order - 2; n > 0; n--) {
    bk = data[n] + two_x * bkp1 - bkp2;
    bkp2 = bkp1;
    bkp1 = bk;
  }
  return data[0] + x * bkp1 - bkp2;
}

function der_chebyshev(order, x, data) {
  //Evaluate the derivative of a Chebyshev polynomial

  let bk;
  let two_x = 2 * x;
  let bkp2 = order * data[order];
  let bkp1 = two_x * bkp2 + (order - 1) * data[order - 1];

  for (let n = order - 2; n > 1; n--) {
    bk = n * data[n] + two_x * bkp1 - bkp2;
    bkp2 = bkp1;
    bkp1 = bk;
  }

  return data[1] + two_x * bkp1 - bkp2;
}

module.exports = {
  chebyshev,
  der_chebyshev,
};
