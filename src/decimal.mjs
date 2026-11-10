const QUANTITY_SCALE = 12;
const PRICE_SCALE = 8;
function parseFixed(value, scale) {
  if (!Number.isInteger(scale) || scale < 0 || scale > 18) throw new Error("Invalid scale");
  if (!/^-?(0|[1-9]\d*)(?:\.\d+)?$/.test(value)) throw new Error("Invalid decimal");
  const negative = value.startsWith("-");
  const [whole, fraction = ""] = (negative ? value.slice(1) : value).split(".");
  if (fraction.length > scale) throw new Error("Decimal precision exceeded");
  const units = BigInt(whole) * 10n ** BigInt(scale) + BigInt(fraction.padEnd(scale, "0") || "0");
  return negative ? -units : units;
}
function formatFixed(units, scale) {
  const base = 10n ** BigInt(scale);
  const sign = units < 0n ? "-" : "";
  const absolute = units < 0n ? -units : units;
  if (scale === 0) return sign + absolute.toString();
  const fraction = (absolute % base).toString().padStart(scale, "0").replace(/0+$/, "");
  return sign + (absolute / base).toString() + (fraction ? `.${fraction}` : "");
}
function roundHalfAway(numerator, denominator) {
  if (denominator <= 0n) throw new Error("Denominator must be positive");
  const sign = numerator < 0n ? -1n : 1n;
  const absolute = numerator < 0n ? -numerator : numerator;
  const quotient = absolute / denominator;
  const remainder = absolute % denominator;
  return sign * (quotient + (remainder * 2n >= denominator ? 1n : 0n));
}
function safeMinor(value) {
  if (value > BigInt(Number.MAX_SAFE_INTEGER) || value < BigInt(Number.MIN_SAFE_INTEGER)) {
    throw new Error("Money exceeds safe database integer range");
  }
  return Number(value);
}
function sumMinor(values) {
  return safeMinor(values.reduce((sum, value) => {
    if (!Number.isSafeInteger(value)) throw new Error("Money must be integer minor units");
    return sum + BigInt(value);
  }, 0n));
}
function marketValueMinor(quantity, priceDollars) {
  const q = parseFixed(quantity, QUANTITY_SCALE);
  const p = parseFixed(priceDollars, PRICE_SCALE);
  return safeMinor(roundHalfAway(q * p * 100n, 10n ** BigInt(QUANTITY_SCALE + PRICE_SCALE)));
}
export {
  PRICE_SCALE,
  QUANTITY_SCALE,
  formatFixed,
  marketValueMinor,
  parseFixed,
  roundHalfAway,
  safeMinor,
  sumMinor
};
