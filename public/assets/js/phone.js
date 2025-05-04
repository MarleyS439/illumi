const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", (e) => {
  const cursorPosition = e.target.selectionStart;
  const originalLength = e.target.value.length;

  let value = e.target.value.replace(/\D/g, "");

  if (value.length > 2) {
    value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
  }
  if (value.length > 10) {
    value = `${value.substring(0, 10)}-${value.substring(10, 14)}`;
  }

  e.target.value = value;

  const newLength = e.target.value.length;
  const cursorOffset = newLength - originalLength;
  e.target.selectionEnd = cursorPosition + cursorOffset;
});
