import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const W = 595.28;
const H = 841.89;
const ink = [0.08, 0.23, 0.2];
const green = [0.04, 0.34, 0.28];
const muted = [0.35, 0.43, 0.4];
const pale = [0.9, 0.96, 0.92];
const enc = (text) =>
  text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/[^\x20-\x7E]/g, "?");
const esc = (text) =>
  enc(text).replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");

function createPdf(commands) {
  const stream = commands.join("\n");
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
    `<< /Length ${Buffer.byteLength(stream, "ascii")} >>\nstream\n${stream}\nendstream`,
  ];
  let pdf = "%PDF-1.4\n%ESG\n";
  const offsets = [0];
  for (let index = 0; index < objects.length; index += 1) {
    offsets.push(Buffer.byteLength(pdf, "ascii"));
    pdf += `${index + 1} 0 obj\n${objects[index]}\nendobj\n`;
  }
  const xref = Buffer.byteLength(pdf, "ascii");
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets.slice(1))
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return Buffer.from(pdf, "ascii");
}

function text(commands, x, y, value, { size = 10, bold = false, color = ink } = {}) {
  commands.push(
    `${color.join(" ")} rg BT /${bold ? "F2" : "F1"} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${esc(value)}) Tj ET`,
  );
}
function line(commands, x1, y1, x2, y2, color = muted, width = 0.6) {
  commands.push(`${color.join(" ")} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S`);
}
function box(commands, x, y, width, height, fill = pale) {
  commands.push(`${fill.join(" ")} rg ${x} ${y} ${width} ${height} re f`);
}
function checkbox(commands, x, y, label) {
  commands.push(`0.35 0.43 0.4 RG 0.7 w ${x} ${y} 9 9 re S`);
  text(commands, x + 14, y + 1, label, { size: 8.5 });
}
function field(commands, label, x, y, lineWidth = 225) {
  text(commands, x, y + 5, label, { size: 8.5, bold: true });
  line(commands, x, y - 5, x + lineWidth, y - 5);
}
function section(commands, label, y) {
  box(commands, 42, y - 5, 511, 19, pale);
  text(commands, 50, y + 1, label.toUpperCase(), { size: 9, bold: true, color: green });
}
function header(title, subtitle) {
  const c = [];
  box(c, 0, 790, W, 52, green);
  text(c, 42, 819, "ECOLE DES SCIENCES DE GISENYI", {
    size: 10,
    bold: true,
    color: [1, 1, 1],
  });
  text(c, 42, 800, title, { size: 16, bold: true, color: [1, 1, 1] });
  text(c, 42, 770, subtitle, { size: 8, color: muted });
  return c;
}

function studentIdentification() {
  const c = header(
    "Student Identification / Registration Form",
    "Draft form - confirm current requirements with the school before completing.",
  );
  box(c, 42, 716, 511, 35, [0.96, 0.97, 0.94]);
  text(
    c,
    51,
    736,
    "Complete by hand and submit to the admissions office with the requested documents.",
    { size: 8.2, bold: true },
  );
  text(c, 51, 722, "Attach one recent passport-size photograph in the box provided.", {
    size: 8.2,
    color: muted,
  });
  commandsPhoto(c);

  section(c, "Student details", 685);
  field(c, "Academic year", 50, 656, 150);
  field(c, "Class / level requested", 315, 656, 185);
  text(c, 50, 634, "Admission pathway:", { size: 8.5, bold: true });
  checkbox(c, 155, 628, "NESA allocated");
  checkbox(c, 280, 628, "Transfer applicant");
  field(c, "Student full name", 50, 606, 315);
  field(c, "Date of birth", 50, 581, 190);
  field(c, "Gender (optional)", 315, 581, 185);
  field(c, "Nationality", 50, 556, 190);
  field(c, "Student ID (if applicable)", 315, 556, 185);

  section(c, "Parent / guardian", 525);
  field(c, "Full name", 50, 496, 315);
  field(c, "Telephone", 50, 471, 190);
  field(c, "Email", 315, 471, 185);
  field(c, "Home address", 50, 446, 450);

  section(c, "Previous school (if applicable)", 415);
  field(c, "School name", 50, 386, 315);
  field(c, "Location / district", 50, 361, 190);
  field(c, "School contact", 315, 361, 185);

  section(c, "Documents enclosed", 330);
  checkbox(c, 52, 302, "NESA allocation evidence");
  checkbox(c, 285, 302, "Previous term report card");
  checkbox(c, 52, 280, "Previous school / transfer records");
  checkbox(c, 285, 280, "Passport-size photograph");
  checkbox(c, 52, 258, "Other document requested by the school");
  line(c, 290, 256, 545, 256);

  section(c, "Declaration", 232);
  text(
    c,
    50,
    207,
    "I confirm that this information is accurate. Transfer applicants must disclose any past or pending",
    { size: 8 },
  );
  text(
    c,
    50,
    194,
    "disciplinary measure at the previous school. The school may request supporting records.",
    { size: 8 },
  );
  field(c, "Parent / guardian signature", 50, 167, 230);
  field(c, "Date", 325, 167, 140);
  field(c, "Student signature", 50, 139, 230);
  field(c, "Date", 325, 139, 140);

  line(c, 42, 98, 553, 98, green, 0.8);
  text(c, 42, 82, "FOR SCHOOL USE ONLY", { size: 8, bold: true, color: green });
  field(c, "Date received", 150, 79, 115);
  field(c, "Reviewed by", 300, 79, 110);
  field(c, "Decision / notes", 42, 51, 400);
  return createPdf(c);
}
function commandsPhoto(c) {
  c.push("0.35 0.43 0.4 RG 0.8 w 455 648 88 103 re S");
  text(c, 463, 700, "PASSPORT PHOTO", { size: 7, bold: true, color: muted });
  text(c, 468, 686, "Attach here", { size: 8, color: muted });
}

function previousSchoolInformation() {
  const c = header(
    "Previous School Information Form",
    "Transfer admission - complete with a parent / guardian and attach the latest official report card.",
  );
  box(c, 42, 715, 511, 34, [0.96, 0.97, 0.94]);
  text(
    c,
    51,
    735,
    "Applicants must have at least 70 in the previous term and pass the ESG entrance examination.",
    { size: 8.1, bold: true },
  );
  text(c, 51, 721, "Admission is subject to review and confirmation by the school.", {
    size: 8.1,
    color: muted,
  });

  section(c, "Student details", 690);
  field(c, "Student full name", 50, 661, 320);
  field(c, "Class / level requested at ESG", 50, 636, 245);
  field(c, "Academic year", 340, 636, 160);

  section(c, "Previous school", 607);
  field(c, "Full name of school", 50, 578, 430);
  field(c, "Address / district", 50, 553, 430);
  field(c, "School telephone", 50, 528, 190);
  field(c, "School email (if available)", 315, 528, 185);
  field(c, "Head teacher / contact person", 50, 503, 315);
  field(c, "Dates attended - from", 50, 478, 190);
  field(c, "To", 315, 478, 185);
  field(c, "Most recent term / year", 50, 453, 190);
  field(c, "Result (attach report card)", 315, 453, 185);

  section(c, "Disciplinary declaration", 425);
  text(
    c,
    50,
    398,
    "Has the student ever received a disciplinary measure, or is a matter pending at the previous school?",
    { size: 8.2, bold: true },
  );
  checkbox(c, 52, 375, "No");
  checkbox(c, 115, 375, "Yes - provide details below");
  text(c, 50, 353, "If yes, explain the circumstances and outcome:", {
    size: 8.5,
    bold: true,
  });
  line(c, 50, 335, 545, 335);
  line(c, 50, 313, 545, 313);
  line(c, 50, 291, 545, 291);

  section(c, "Consent and signatures", 266);
  text(
    c,
    50,
    239,
    "I confirm these details are accurate and authorize ESG to contact the previous school to verify them.",
    { size: 8.2 },
  );
  text(
    c,
    50,
    225,
    "I have disclosed any disciplinary measure or pending disciplinary matter truthfully.",
    { size: 8.2 },
  );
  field(c, "Student signature", 50, 192, 220);
  field(c, "Date", 315, 192, 145);
  field(c, "Parent / guardian name", 50, 163, 220);
  field(c, "Signature", 315, 163, 145);
  field(c, "Date", 50, 134, 145);

  line(c, 42, 98, 553, 98, green, 0.8);
  text(c, 42, 82, "FOR SCHOOL USE ONLY", { size: 8, bold: true, color: green });
  field(c, "Records received", 155, 79, 110);
  field(c, "Entrance exam result", 300, 79, 115);
  field(c, "Reviewed by", 42, 51, 170);
  field(c, "Decision / notes", 265, 51, 260);
  return createPdf(c);
}

for (const [name, bytes] of [
  ["student-identification-form.pdf", studentIdentification()],
  ["previous-school-information-form.pdf", previousSchoolInformation()],
]) {
  const output = resolve("public", name);
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, bytes);
  console.log(`Generated ${output} (${bytes.byteLength} bytes)`);
}
