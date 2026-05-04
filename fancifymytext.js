function makeBigger() {
  alert("Hello, world!");  
  document.getElementById("textArea").style.fontSize = "24pt";  
}
function changeStyle() {
  const textArea = document.getElementById("textArea");

if (document.getElementById("fancy").checked) {
    alert("FancyShmancy selected!");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";

} else if (document.getElementById("boring").checked) {
    alert("BoringBetty selected!");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}
function mooText() {
 const textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");

  for (let i = 0; i < sentences.length - 1; i++) {
    let sentence = sentences[i].trim();

  if (sentence.length > 0) {
      let words = sentence.split(" ");
      let lastIndex = words.length - 1;

      words[lastIndex] = words[lastIndex] + "-Moo";
      sentences[i] = words.join(" ");
    }
  }
  textArea.value = sentences.join(".");
}