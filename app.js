// README Templates
const templates = {
    basic: {
        name: 'Basic Project',
        generate: (data) => {
            let readme = `# ${data.projectName}\n\n`;
            readme += `${data.projectDescription}\n\n`;

            if (data.includeTOC) {
                readme += generateTableOfContents(data);
            }

            if (data.features.length > 0) {
                readme += `## Features\n\n`;
                data.features.forEach((feature) => {
                    readme += `- ${feature}\n`;
                });
                readme += '\n';
            }

            if (data.installation.trim()) {
                readme += `## Installation\n\n`;
                readme += `\`\`\`bash\n${data.installation}\n\`\`\`\n\n`;
            }

            if (data.usage.trim()) {
                readme += `## Usage\n\n`;
                readme += `\`\`\`bash\n${data.usage}\n\`\`\`\n\n`;
            }

            if (data.technologies.length > 0) {
                readme += `## Technologies\n\n`;
                readme += data.technologies.map((tech) => `- ${tech}`).join('\n');
                readme += '\n\n';
            }

            if (data.includeContributing) {
                readme += `## Contributing\n\nContributions are welcome! Please feel free to submit a Pull Request.\n\n`;
            }

            if (data.license !== 'None') {
                readme += `## License\n\nThis project is licensed under the ${data.license} License.\n\n`;
            }

            if (data.author) {
                readme += `## Author\n\n${data.author}\n`;
            }

            return readme;
        }
    },

    webapp: {
        name: 'Web Application',
        generate: (data) => {
            let readme = `# ${data.projectName}\n\n`;
            readme += `> ${data.projectDescription}\n\n`;

            if (data.includeTOC) {
                readme += generateTableOfContents(data);
            }

            readme += `## Overview\n\n${data.projectDescription}\n\n`;

            if (data.features.length > 0) {
                readme += `## Features\n\n`;
                data.features.forEach((feature) => {
                    readme += `- ✨ ${feature}\n`;
                });
                readme += '\n';
            }

            if (data.technologies.length > 0) {
                readme += `## Tech Stack\n\n`;
                readme += `\`\`\`\n${data.technologies.join(' • ')}\n\`\`\`\n\n`;
            }

            readme += `## Prerequisites\n\n- Node.js 14+\n- npm or yarn\n\n`;

            if (data.installation.trim()) {
                readme += `## Installation & Setup\n\n`;
                readme += `\`\`\`bash\n${data.installation}\n\`\`\`\n\n`;
            }

            if (data.usage.trim()) {
                readme += `## Getting Started\n\n`;
                readme += `\`\`\`bash\n${data.usage}\n\`\`\`\n\n`;
            }

            if (data.includeFAQ) {
                readme += `## FAQ\n\n**Q: How do I deploy this?**\nA: Refer to the deployment documentation.\n\n`;
            }

            if (data.includeContributing) {
                readme += `## Contributing\n\nWe welcome contributions! Please read our contributing guidelines before submitting PRs.\n\n`;
            }

            if (data.license !== 'None') {
                readme += `## License\n\n${data.license} © ${new Date().getFullYear()}\n`;
            }

            return readme;
        }
    },

    library: {
        name: 'Library/Package',
        generate: (data) => {
            let readme = `# ${data.projectName}\n\n`;
            readme += `${data.projectDescription}\n\n`;

            if (data.includeTOC) {
                readme += generateTableOfContents(data);
            }

            readme += `## Installation\n\n`;
            if (data.installation.trim()) {
                readme += `\`\`\`bash\n${data.installation}\n\`\`\`\n\n`;
            } else {
                readme += `\`\`\`bash\nnpm install ${data.projectName.toLowerCase()}\n\`\`\`\n\n`;
            }

            if (data.features.length > 0) {
                readme += `## Features\n\n`;
                data.features.forEach((feature) => {
                    readme += `- ${feature}\n`;
                });
                readme += '\n';
            }

            readme += `## Usage\n\n`;
            if (data.usage.trim()) {
                readme += `\`\`\`javascript\n${data.usage}\n\`\`\`\n\n`;
            } else {
                readme += `\`\`\`javascript\nimport ${data.projectName} from '${data.projectName.toLowerCase()}';\n\n// Your code here\n\`\`\`\n\n`;
            }

            if (data.technologies.length > 0) {
                readme += `## Requirements\n\n`;
                readme += data.technologies.map((tech) => `- ${tech}`).join('\n');
                readme += '\n\n';
            }

            if (data.includeFAQ) {
                readme += `## FAQ\n\n**Q: Is this library tree shakeable?**\nA: Yes, this library supports tree shaking.\n\n`;
            }

            if (data.includeContributing) {
                readme += `## Contributing\n\nContributions are welcome! Please fork and create a pull request.\n\n`;
            }

            if (data.license !== 'None') {
                readme += `## License\n\n${data.license}\n`;
            }

            return readme;
        }
    },

    api: {
        name: 'REST API',
        generate: (data) => {
            let readme = `# ${data.projectName}\n\n`;
            readme += `${data.projectDescription}\n\n`;

            if (data.includeTOC) {
                readme += generateTableOfContents(data);
            }

            readme += `## API Overview\n\n${data.projectDescription}\n\n`;

            if (data.features.length > 0) {
                readme += `## Features\n\n`;
                data.features.forEach((feature) => {
                    readme += `- 🔹 ${feature}\n`;
                });
                readme += '\n';
            }

            readme += `## Prerequisites\n\n- Node.js 14+\n- npm or yarn\n\n`;

            if (data.installation.trim()) {
                readme += `## Installation\n\n`;
                readme += `\`\`\`bash\n${data.installation}\n\`\`\`\n\n`;
            }

            readme += `## Running the Server\n\n`;
            if (data.usage.trim()) {
                readme += `\`\`\`bash\n${data.usage}\n\`\`\`\n\n`;
            } else {
                readme += `\`\`\`bash\nnpm start\n\`\`\`\n\nThe API will be available at \`http://localhost:3000\`\n\n`;
            }

            if (data.technologies.length > 0) {
                readme += `## Technology Stack\n\n`;
                readme += data.technologies.map((tech) => `- ${tech}`).join('\n');
                readme += '\n\n';
            }

            readme += `## API Endpoints\n\nPlease refer to the API documentation for detailed endpoint information.\n\n`;

            if (data.includeContributing) {
                readme += `## Contributing\n\nWe accept contributions! Please submit a pull request.\n\n`;
            }

            if (data.license !== 'None') {
                readme += `## License\n\n${data.license}\n`;
            }

            return readme;
        }
    },

    cli: {
        name: 'CLI Tool',
        generate: (data) => {
            let readme = `# ${data.projectName}\n\n`;
            readme += `${data.projectDescription}\n\n`;

            if (data.includeTOC) {
                readme += generateTableOfContents(data);
            }

            readme += `## Installation\n\n`;
            if (data.installation.trim()) {
                readme += `\`\`\`bash\n${data.installation}\n\`\`\`\n\n`;
            } else {
                readme += `\`\`\`bash\nnpm install -g ${data.projectName.toLowerCase()}\n\`\`\`\n\n`;
            }

            if (data.features.length > 0) {
                readme += `## Features\n\n`;
                data.features.forEach((feature) => {
                    readme += `- ${feature}\n`;
                });
                readme += '\n';
            }

            readme += `## Usage\n\n`;
            if (data.usage.trim()) {
                readme += `\`\`\`bash\n${data.usage}\n\`\`\`\n\n`;
            } else {
                readme += `\`\`\`bash\n${data.projectName.toLowerCase()} --help\n\`\`\`\n\n`;
            }

            readme += `## Commands\n\nRun \`${data.projectName.toLowerCase()} --help\` to see all available commands.\n\n`;

            if (data.includeFAQ) {
                readme += `## FAQ\n\n**Q: How do I uninstall this tool?**\nA: Run \`npm uninstall -g ${data.projectName.toLowerCase()}\`\n\n`;
            }

            if (data.includeContributing) {
                readme += `## Contributing\n\nContributions are welcome! Please submit issues and pull requests.\n\n`;
            }

            if (data.license !== 'None') {
                readme += `## License\n\n${data.license}\n`;
            }

            return readme;
        }
    },

    ml: {
        name: 'Machine Learning',
        generate: (data) => {
            let readme = `# ${data.projectName}\n\n`;
            readme += `${data.projectDescription}\n\n`;

            if (data.includeTOC) {
                readme += generateTableOfContents(data);
            }

            readme += `## Overview\n\n${data.projectDescription}\n\n`;

            if (data.features.length > 0) {
                readme += `## Key Features\n\n`;
                data.features.forEach((feature) => {
                    readme += `- 🤖 ${feature}\n`;
                });
                readme += '\n';
            }

            readme += `## Requirements\n\n- Python 3.8+\n- pip or conda\n\n`;

            if (data.installation.trim()) {
                readme += `## Installation\n\n`;
                readme += `\`\`\`bash\n${data.installation}\n\`\`\`\n\n`;
            }

            if (data.usage.trim()) {
                readme += `## Usage\n\n`;
                readme += `\`\`\`python\n${data.usage}\n\`\`\`\n\n`;
            }

            if (data.technologies.length > 0) {
                readme += `## Dependencies\n\n`;
                readme += data.technologies.map((tech) => `- ${tech}`).join('\n');
                readme += '\n\n';
            }

            readme += `## Dataset\n\nPlease download the dataset and place it in the \`data/\` directory.\n\n`;

            if (data.includeFAQ) {
                readme += `## FAQ\n\n**Q: What models are supported?**\nA: Please refer to the documentation for supported models.\n\n`;
            }

            if (data.includeContributing) {
                readme += `## Contributing\n\nWe welcome research contributions and improvements!\n\n`;
            }

            if (data.license !== 'None') {
                readme += `## License\n\n${data.license}\n`;
            }

            return readme;
        }
    }
};

// Utility Functions
function parseFeatures(text) {
    return text
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
}

function parseTechnologies(text) {
    return text
        .split(',')
        .map((tech) => tech.trim())
        .filter((tech) => tech.length > 0);
}

function generateTableOfContents(data) {
    const sections = [];

    if (data.features.length > 0) sections.push('Features');
    if (data.installation.trim()) sections.push('Installation');
    if (data.usage.trim()) sections.push('Usage');
    if (data.technologies.length > 0) sections.push('Technologies');
    if (data.includeContributing) sections.push('Contributing');
    if (data.license !== 'None') sections.push('License');
    if (data.author) sections.push('Author');

    if (sections.length === 0) return '';

    let toc = '## Table of Contents\n\n';
    sections.forEach((section) => {
        const anchor = section.toLowerCase().replace(/\s+/g, '-');
        toc += `- [${section}](#${anchor})\n`;
    });
    toc += '\n';

    return toc;
}

function markdownToHtml(markdown) {
    let html = markdown;

    // Escape HTML special characters
    html = html
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    // Convert headings
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');

    // Convert bold and italic
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Convert links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');

    // Convert inline code
    html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');

    // Convert code blocks
    html = html.replace(/```([\s\S]*?)```/g, function(match, code) {
        return '<pre><code>' + code.trim() + '</code></pre>';
    });

    // Convert line breaks
    const lines = html.split('\n');
    let result = '';
    let inList = false;

    lines.forEach((line) => {
        if (line.trim().startsWith('- ')) {
            if (!inList) {
                result += '<ul>';
                inList = true;
            }
            result += '<li>' + line.trim().substring(2) + '</li>';
        } else {
            if (inList && line.trim() !== '') {
                result += '</ul>';
                inList = false;
            }
            if (line.trim() !== '') {
                result += line + '<br>';
            }
        }
    });

    if (inList) {
        result += '</ul>';
    }

    return result;
}

function downloadFile(filename, content) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function copyToClipboard(text) {
    return navigator.clipboard
        .writeText(text)
        .then(() => true)
        .catch(() => false);
}

// DOM Elements
const elements = {
    projectName: document.getElementById('projectName'),
    projectDescription: document.getElementById('projectDescription'),
    templateType: document.getElementById('templateType'),
    features: document.getElementById('features'),
    installation: document.getElementById('installation'),
    usage: document.getElementById('usage'),
    technologies: document.getElementById('technologies'),
    author: document.getElementById('author'),
    license: document.getElementById('license'),
    includeTOC: document.getElementById('includeTOC'),
    includeContributing: document.getElementById('includeContributing'),
    includeFAQ: document.getElementById('includeFAQ'),
    generateBtn: document.getElementById('generateBtn'),
    downloadBtn: document.getElementById('downloadBtn'),
    copyBtn: document.getElementById('copyBtn'),
    resetBtn: document.getElementById('resetBtn'),
    previewContent: document.getElementById('previewContent'),
    previewStatus: document.getElementById('previewStatus')
};

let currentReadmeContent = '';

function collectFormData() {
    return {
        projectName: elements.projectName.value || 'My Project',
        projectDescription: elements.projectDescription.value || 'A project',
        features: parseFeatures(elements.features.value),
        installation: elements.installation.value,
        usage: elements.usage.value,
        technologies: parseTechnologies(elements.technologies.value),
        author: elements.author.value,
        license: elements.license.value,
        includeTOC: elements.includeTOC.checked,
        includeContributing: elements.includeContributing.checked,
        includeFAQ: elements.includeFAQ.checked
    };
}

function generateReadme() {
    const formData = collectFormData();
    const templateKey = elements.templateType.value;
    const template = templates[templateKey] || templates.basic;
    currentReadmeContent = template.generate(formData);
    displayPreview();
    updateButtonStates();
}

function displayPreview() {
    const previewHtml = markdownToHtml(currentReadmeContent);
    elements.previewContent.innerHTML = previewHtml;
    elements.previewStatus.textContent = 'Preview ready';
    elements.previewStatus.classList.add('success');
}

async function handleDownload() {
    downloadFile('README.md', currentReadmeContent);
    elements.downloadBtn.textContent = 'Downloaded ✓';
    setTimeout(() => {
        elements.downloadBtn.textContent = 'Download README';
    }, 2000);
}

async function handleCopy() {
    const success = await copyToClipboard(currentReadmeContent);

    if (success) {
        elements.copyBtn.textContent = 'Copied ✓';
        setTimeout(() => {
            elements.copyBtn.textContent = 'Copy to Clipboard';
        }, 2000);
    } else {
        alert('Failed to copy to clipboard');
    }
}

function handleReset() {
    document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach((el) => {
        if (el.type === 'checkbox') {
            el.checked = el.id === 'includeTOC';
        } else {
            el.value = '';
        }
    });

    currentReadmeContent = '';
    elements.previewContent.innerHTML =
        '<p style="text-align: center; color: #888; margin-top: 40px;">Fill in the form and click "Generate README" to see preview</p>';
    elements.previewStatus.textContent = 'Ready to generate';
    elements.previewStatus.classList.remove('success');
    updateButtonStates();
}

function updateButtonStates() {
    const hasContent = currentReadmeContent.length > 0;
    elements.downloadBtn.disabled = !hasContent;
    elements.copyBtn.disabled = !hasContent;
}

// Event Listeners
elements.generateBtn.addEventListener('click', generateReadme);
elements.downloadBtn.addEventListener('click', handleDownload);
elements.copyBtn.addEventListener('click', handleCopy);
elements.resetBtn.addEventListener('click', handleReset);

// Initialize
updateButtonStates();
console.log('GitHub README Generator initialized');
