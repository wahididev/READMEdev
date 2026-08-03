let currentTemplate = 'general';
let generatedReadme = '';

document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    updateFieldVisibility();
});

function initializeEventListeners() {
    // Template selector buttons
    document.querySelectorAll('.template-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.template-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentTemplate = e.currentTarget.dataset.template;
            updateFieldVisibility();
            generatedReadme = '';
            document.getElementById('previewContent').innerHTML = '<p style="text-align: center; color: #888; margin-top: 40px;">Fill in the form and click "Generate README" to see preview</p>';
            document.getElementById('previewStatus').textContent = 'Ready to generate';
            document.getElementById('downloadBtn').disabled = true;
            document.getElementById('copyBtn').disabled = true;
        });
    });

    // Generate button
    document.getElementById('generateBtn').addEventListener('click', generateReadme);

    // Download button
    document.getElementById('downloadBtn').addEventListener('click', downloadReadme);

    // Copy button
    document.getElementById('copyBtn').addEventListener('click', copyToClipboard);

    // Reset button
    document.getElementById('resetBtn').addEventListener('click', resetForm);

    // Form inputs for live preview
    document.getElementById('projectName').addEventListener('input', () => {
        if (generatedReadme) generateReadme();
    });
    document.getElementById('projectDescription').addEventListener('input', () => {
        if (generatedReadme) generateReadme();
    });
}

function updateFieldVisibility() {
    // Hide all conditional fields
    document.querySelectorAll('.conditional-fields').forEach(field => {
        field.classList.add('hidden');
    });

    // Show relevant fields for selected template
    switch (currentTemplate) {
        case 'datascience':
            document.getElementById('dataScienceFields').classList.remove('hidden');
            break;
        case 'mobile':
            document.getElementById('mobileFields').classList.remove('hidden');
            break;
        case 'gamedev':
            document.getElementById('gamedevFields').classList.remove('hidden');
            break;
        default:
            document.getElementById('generalFields').classList.remove('hidden');
    }
}

function getFormData() {
    return {
        projectName: document.getElementById('projectName').value || 'Project Name',
        projectDescription: document.getElementById('projectDescription').value || 'A great project',
        features: document.getElementById('features')?.value || '',
        datasets: document.getElementById('datasets')?.value || '',
        models: document.getElementById('models')?.value || '',
        metrics: document.getElementById('metrics')?.value || '',
        paperReference: document.getElementById('paperReference')?.value || '',
        platforms: Array.from(document.querySelectorAll('#mobileFields .checkbox-inline input[type="checkbox"]:checked')).map(p => p.value),
        minimumOS: document.getElementById('minimumOS')?.value || '',
        appFeatures: document.getElementById('appFeatures')?.value || '',
        screenshots: document.getElementById('screenshots')?.value || '',
        engine: document.getElementById('engine')?.value || '',
        genre: document.getElementById('genre')?.value || '',
        gameplay: document.getElementById('gameplay')?.value || '',
        platformsGame: Array.from(document.querySelectorAll('#gamedevFields .checkbox-inline input[type="checkbox"]:checked')).map(p => p.value),
        trailerLink: document.getElementById('trailerLink')?.value || '',
        installation: document.getElementById('installation').value || '',
        usage: document.getElementById('usage').value || '',
        technologies: document.getElementById('technologies').value || '',
        author: document.getElementById('author').value || '',
        githubLink: document.getElementById('githubLink').value || '',
        license: document.getElementById('license').value || 'MIT',
        includeTOC: document.getElementById('includeTOC').checked,
        includeContributing: document.getElementById('includeContributing').checked,
        includeFAQ: document.getElementById('includeFAQ').checked,
        includeTroubleshooting: document.getElementById('includeTroubleshooting').checked
    };
}

function generateReadme() {
    const projectName = document.getElementById('projectName').value.trim();
    const projectDescription = document.getElementById('projectDescription').value.trim();

    if (!projectName || !projectDescription) {
        alert('Please fill in Project Name and Project Description');
        return;
    }

    const data = getFormData();
    const template = TEMPLATES[currentTemplate];

    if (!template) {
        alert('Invalid template selected');
        return;
    }

    generatedReadme = template.generate(data);

    // Display preview
    const previewContent = document.getElementById('previewContent');
    previewContent.innerHTML = markdownToHtml(generatedReadme);

    // Update status
    document.getElementById('previewStatus').textContent = 'Generated successfully';

    // Enable buttons
    document.getElementById('downloadBtn').disabled = false;
    document.getElementById('copyBtn').disabled = false;
}

function markdownToHtml(markdown) {
    let html = markdown;

    // Headers
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');

    // Code blocks
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.+?)_/g, '<em>$1</em>');

    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');

    // Lists
    html = html.replace(/^\- (.*?)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*?<\/li>)/s, '<ul>$1</ul>');
    html = html.replace(/^\d+\. (.*?)$/gm, '<li>$1</li>');

    // Tables
    html = html.replace(/\| (.*?) \|\n\| (.*?) \|\n([\s\S]*?)\n\n/g, (match, header1, header2, rows) => {
        let table = '<table><tr>';
        header1.split('|').forEach(h => {
            table += '<th>' + h.trim() + '</th>';
        });
        table += '</tr>';
        rows.split('\n').forEach(row => {
            if (row.trim() && !row.includes('---')) {
                table += '<tr>';
                row.split('|').forEach(cell => {
                    table += '<td>' + cell.trim() + '</td>';
                });
                table += '</tr>';
            }
        });
        table += '</table>';
        return table;
    });

    // Line breaks
    html = html.replace(/\n\n/g, '</p><p>');
    html = '<p>' + html + '</p>';

    return html;
}

function downloadReadme() {
    if (!generatedReadme) {
        alert('Please generate README first');
        return;
    }

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/markdown;charset=utf-8,' + encodeURIComponent(generatedReadme));
    element.setAttribute('download', 'README.md');
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function copyToClipboard() {
    if (!generatedReadme) {
        alert('Please generate README first');
        return;
    }

    navigator.clipboard.writeText(generatedReadme).then(() => {
        const originalText = document.getElementById('copyBtn').textContent;
        document.getElementById('copyBtn').textContent = 'Copied!';
        setTimeout(() => {
            document.getElementById('copyBtn').textContent = originalText;
        }, 2000);
    }).catch(() => {
        alert('Failed to copy to clipboard');
    });
}

function resetForm() {
    document.querySelectorAll('input[type="text"], input[type="email"], input[type="url"], textarea, select').forEach(field => {
        if (field.type <mark>= 'checkbox' || field.type </mark>= 'radio') {
            if (field.id === 'includeTOC') {
                field.checked = true;
            } else {
                field.checked = false;
            }
        } else {
            field.value = '';
        }
    });

    generatedReadme = '';
    document.getElementById('previewContent').innerHTML = '<p style="text-align: center; color: #888; margin-top: 40px;">Fill in the form and click "Generate README" to see preview</p>';
    document.getElementById('previewStatus').textContent = 'Ready to generate';
    document.getElementById('downloadBtn').disabled = true;
    document.getElementById('copyBtn').disabled = true;
}
