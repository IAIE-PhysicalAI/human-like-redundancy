// BibTeX copy button
const copyButton = document.querySelector('.copy-button');
const bibtexCode = document.querySelector('#bibtex-code');
copyButton?.addEventListener('click', async () => {
  if (!bibtexCode) return;
  try {
    await navigator.clipboard.writeText(bibtexCode.textContent.trim());
    copyButton.textContent = 'Copied';
    setTimeout(() => { copyButton.textContent = 'Copy'; }, 2000);
  } catch {
    copyButton.textContent = 'Select to copy';
  }
});
