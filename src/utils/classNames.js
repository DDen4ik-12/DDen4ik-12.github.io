export default (...values) => {
  const filteredClassNames = [];
  for (const value of values) {
    if (typeof value == "string") {
      filteredClassNames.push(value);
    } else if (Array.isArray(value)) {
      for (const subvalue of value) {
        if (typeof subvalue == "string") filteredClassNames.push(subvalue);
      }
    } else if (typeof value == "object" && value instanceof Object) {
      for (const [subvalue, condition] of Object.entries(value)) {
        if (condition && typeof subvalue == "string")
          filteredClassNames.push(subvalue);
      }
    }
  }
  return filteredClassNames.join(" ");
};