import setHeader from "./utilities/set-header.js";
import setDocsContent from "./utilities/set-docs-content.js";

const schemaBtn = document.querySelector(".schema-btn");
const imgUploadBtn = document.querySelector(".img-upload-btn");
const staffBtn = document.querySelector(".staff-btn");
const merchBtn = document.querySelector(".merch-btn");
const thoughtBtn = document.querySelector(".thought-btn");
const responseBtn= document.querySelector(".response-btn");
const useExamplesBtn = document.querySelector(".use-examples-btn");

schemaBtn.addEventListener("click", () => setDocsContent("schema"));
imgUploadBtn.addEventListener("click", () => setDocsContent("image"));
staffBtn.addEventListener("click", () => setDocsContent("staff"));
merchBtn.addEventListener("click", () => setDocsContent("merch"));
thoughtBtn.addEventListener("click", () => setDocsContent("thought"));
responseBtn.addEventListener("click", () => setDocsContent("response"));
useExamplesBtn.addEventListener("click", () => setDocsContent("examples"));

setHeader();
setDocsContent("schema");