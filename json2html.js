// json2html.js

export default function json2html(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return "<table data-user=\"jeevanasandhya369@gmail.com\"></table>";
  }

  const headers = [...new Set(data.flatMap(Object.keys))];

  let html = `<table data-user="jeevanasandhya369@gmail.com">
    <thead>
      <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
    </thead>
    <tbody>`;


  data.forEach(row => {
    html += `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
  });

  html += `
    </tbody>
  </table>`;

  return html;
}
