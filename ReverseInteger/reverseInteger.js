function reverse(x) {
    const isNegative = x < 0;
    const reversed = Number.parseInt(x.toString().split("").reverse().join(""))

    return reversed > 2 ** 31 - 1 ? 0 : isNegative ? -reversed : reversed;
  };
