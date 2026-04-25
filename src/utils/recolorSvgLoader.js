export default (src) => `
  const og = ${JSON.stringify(src)};
  export default (newColor) => "data:image/svg+xml;," +
    encodeURIComponent(og.replace("<svg", '<svg fill="' + newColor + '"'));
`;