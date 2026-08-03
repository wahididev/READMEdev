// Form Elements
const titleInput = document.getElementById('projectTitle');
const descInput = document.getElementById('projectDesc');
const badgeChecks = document.querySelectorAll('.badge-check');
const techInput = document.getElementById('techStack');
const installInput = document.getElementById('installation');
const usageInput = document.getElementById('usage');
const licenseInput = document.getElementById('license');

// Output Elements
const previewContainer = document.getElementById('previewContainer');
const markdownContainer = document.getElementById('markdownContainer');
const tabPreview = document.getElementById('tabPreview');
const tabMarkdown = document.getElementById('tabMarkdown');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');

// Helper to construct Badges
function getBadges() {
  let badgesMarkdown = '';
  badgeChecks.forEach(check => {
    if (check.checked) {
      if (check.value === 'license') {
        badgesMarkdown += `![License](https://img.shields.io/badge/license-MIT-blue.svg) `;
      } else if (check.value === 'build') {
        badgesMarkdown += `![Build](https://img.shields.io/badge/build-passing-brightgreen.svg) `;
      } else if (check.value === 'version') {
        badgesMarkdown += `![Version](https://img.shields.io/badge/version-1.0.0-orange.svg) `;
      }
    }
  });
  return badgesMarkdown ? badgesMarkdown + '\n\n' : '';
}

// Generate Raw Markdown String
function generateMarkdown() {
  const title = titleInput.value.trim() || 'Project Title';
  const desc = descInput.value.trim();
  const tech = techInput.value.trim();
  const install = installInput.value.trim();
  const usage = usageInput.value.trim();
  const license = licenseInput.value;

  let md = `# ${title}\n\n`;
  md += getBadges();

  if (desc) md += `${desc}\n\n`;

  if (tech) {
    md += `## 🛠️ Built With\n`;
    tech.split(',').forEach(item => {
      if (item.trim()) md += `- ${item.trim()}\n`;
    });
    md += `\n`;
  }

  if (install) {
    md += `## ⚙️ Installation\n\`\`\`bash\n${install}\n\`\`\`\n\n`;
  }

  if (usage) {
    md += `## 🚀 Usage\n\`\`\`bash\n${usage}\n\`\`\`\n\n`;
  }

  if (license && license !== 'None') {
    md += `## 📄 License\nThis project is licensed under the ${license} License.`;
  }

  return md;
}

// Update UI (Live Render)
function updateOutput() {
  const markdownText = generateMarkdown();
  
  // Update raw markdown textarea
  markdownContainer.value = markdownText;
  
  // Render HTML via Marked.js
  previewContainer.innerHTML = marked.parse(markdownText);

  // Auto-save form inputs to localStorage
  saveToLocalStorage();
}

// Event Listeners for Live Update
const allInputs = [titleInput, descInput, techInput, installInput, usageInput, licenseInput];
allInputs.forEach(input => input.addEventListener('input', updateOutput));
badgeChecks.forEach(check => check.addEventListener('change', updateOutput));

// Toggle Tabs
tabPreview.addEventListener('click', () => {
  tabPreview.classList.add('active');
  tabMarkdown.classList.remove('active');
  previewContainer.classList.remove('hidden');
  markdownContainer.classList.add('hidden');
});

tabMarkdown.addEventListener('click', () => {
  tabMarkdown.classList.add('active');
  tabPreview.classList.remove('active');
  markdownContainer.classList.remove('hidden');
  previewContainer.classList.add('hidden');
});

// Copy to Clipboard
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(markdownContainer.value).then(() => {
    const originalText = copyBtn.innerText;
    copyBtn.innerText = '✅ Copied!';
    setTimeout(() => copyBtn.innerText = originalText, 2000);
  });
});

// Download README.md File
downloadBtn.addEventListener('click', () => {
  const blob = new Blob([markdownContainer.value], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'README.md';
  a.click();
  URL.revokeObjectURL(url);
});

// Save to LocalStorage
function saveToLocalStorage() {
  const data = {
    title: titleInput.value,
    desc: descInput.value,
    tech: techInput.value,
    install: installInput.value,
    usage: usageInput.value,
    license: licenseInput.value
  };
  localStorage.setItem('readme_dev_data', JSON.stringify(data));
}

// Restore from LocalStorage
function loadFromLocalStorage() {
  const saved = localStorage.getItem('readme_dev_data');
  if (saved) {
    const data = JSON.parse(saved);
    titleInput.value = data.title || '';
    descInput.value = data.desc || '';
    techInput.value = data.tech || '';
    installInput.value = data.install || '';
    usageInput.value = data.usage || '';
    licenseInput.value = data.license || 'MIT';
  }
}

// Initial Call on Load
loadFromLocalStorage();
updateOutput();
