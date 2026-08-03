const TEMPLATES = {
    general: {
        name: 'General Project',
        icon: '📝',
        description: 'Standard project template with core sections',
        sections: ['description', 'features', 'installation', 'usage', 'technologies', 'author', 'license'],
        generate: (data) => {
            let readme = `# ${data.projectName}\n\n`;
            
            readme += `${data.projectDescription}\n\n`;

            if (data.includeTOC) {
                readme += `## Table of Contents\n\n`;
                const toc = [];
                if (data.features) toc.push('- [Features](#features)');
                if (data.installation) toc.push('- [Installation](#installation)');
                if (data.usage) toc.push('- [Usage](#usage)');
                if (data.technologies) toc.push('- [Technologies](#technologies)');
                if (data.includeContributing) toc.push('- [Contributing](#contributing)');
                if (data.includeFAQ) toc.push('- [FAQ](#faq)');
                if (data.author) toc.push('- [Author](#author)');
                if (data.license && data.license !== 'None') toc.push('- [License](#license)');
                readme += toc.join('\n') + '\n\n';
            }

            if (data.features) {
                readme += `## Features\n\n`;
                const features = data.features.split('\n').filter(f => f.trim());
                features.forEach(feature => {
                    readme += `- ${feature.trim()}\n`;
                });
                readme += '\n';
            }

            if (data.installation) {
                readme += `## Installation\n\n\`\`\`bash\n${data.installation}\n\`\`\`\n\n`;
            }

            if (data.usage) {
                readme += `## Usage\n\n\`\`\`bash\n${data.usage}\n\`\`\`\n\n`;
            }

            if (data.technologies) {
                readme += `## Technologies\n\n`;
                const techs = data.technologies.split(',').map(t => t.trim());
                readme += techs.join(', ') + '\n\n';
            }

            if (data.includeContributing) {
                readme += `## Contributing\n\nContributions are welcome! Please feel free to submit a Pull Request.\n\n`;
            }

            if (data.includeFAQ) {
                readme += `## FAQ\n\n**Q: How do I get started?**\nA: Follow the Installation section above.\n\n`;
            }

            if (data.includeTroubleshooting) {
                readme += `## Troubleshooting\n\nIf you encounter any issues, please check the documentation or open an issue on GitHub.\n\n`;
            }

            if (data.author) {
                readme += `## Author\n\n${data.author}\n\n`;
            }

            if (data.license && data.license !== 'None') {
                readme += `## License\n\nThis project is licensed under the ${data.license} License.\n`;
            }

            return readme;
        }
    },

    datascience: {
        name: 'Data Science',
        icon: '📊',
        description: 'Specialized template for ML and data science projects',
        sections: ['description', 'datasets', 'models', 'metrics', 'installation', 'usage', 'results', 'paperReference'],
        generate: (data) => {
            let readme = `# ${data.projectName}\n\n`;
            
            readme += `${data.projectDescription}\n\n`;

            if (data.includeTOC) {
                readme += `## Table of Contents\n\n`;
                const toc = [];
                if (data.datasets) toc.push('- [Datasets](#datasets)');
                if (data.models) toc.push('- [Models and Algorithms](#models-and-algorithms)');
                if (data.metrics) toc.push('- [Performance Metrics](#performance-metrics)');
                if (data.paperReference) toc.push('- [Research Reference](#research-reference)');
                if (data.installation) toc.push('- [Installation](#installation)');
                if (data.usage) toc.push('- [Usage](#usage)');
                if (data.technologies) toc.push('- [Technologies](#technologies)');
                if (data.includeContributing) toc.push('- [Contributing](#contributing)');
                if (data.includeFAQ) toc.push('- [FAQ](#faq)');
                if (data.author) toc.push('- [Author](#author)');
                if (data.license && data.license !== 'None') toc.push('- [License](#license)');
                readme += toc.join('\n') + '\n\n';
            }

            if (data.datasets) {
                readme += `## Datasets\n\n`;
                const datasets = data.datasets.split('\n').filter(d => d.trim());
                datasets.forEach(dataset => {
                    readme += `- ${dataset.trim()}\n`;
                });
                readme += '\n';
            }

            if (data.models) {
                readme += `## Models and Algorithms\n\n`;
                const models = data.models.split(',').map(m => m.trim());
                readme += `This project implements the following models:\n\n`;
                models.forEach(model => {
                    readme += `- ${model}\n`;
                });
                readme += '\n';
            }

            if (data.metrics) {
                readme += `## Performance Metrics\n\n`;
                const metrics = data.metrics.split('\n').filter(m => m.trim());
                readme += `| Metric | Value |\n`;
                readme += `|--------|-------|\n`;
                metrics.forEach(metric => {
                    const [key, value] = metric.split(':').map(s => s.trim());
                    readme += `| ${key || 'Metric'} | ${value || 'Value'} |\n`;
                });
                readme += '\n';
            }

            if (data.installation) {
                readme += `## Installation\n\n\`\`\`bash\n${data.installation}\n\`\`\`\n\n`;
            }

            if (data.usage) {
                readme += `## Usage\n\n\`\`\`python\n${data.usage}\n\`\`\`\n\n`;
            }

            if (data.paperReference) {
                readme += `## Research Reference\n\n[View Research Paper](${data.paperReference})\n\n`;
            }

            if (data.technologies) {
                readme += `## Technologies\n\n`;
                const techs = data.technologies.split(',').map(t => t.trim());
                readme += techs.join(', ') + '\n\n';
            }

            if (data.includeContributing) {
                readme += `## Contributing\n\nContributions are welcome! Please feel free to submit a Pull Request.\n\n`;
            }

            if (data.includeFAQ) {
                readme += `## FAQ\n\n**Q: How do I train the model?**\nA: Follow the Usage section above.\n\n**Q: Can I use my own dataset?**\nA: Yes! Update the dataset path in the configuration file.\n\n`;
            }

            if (data.includeTroubleshooting) {
                readme += `## Troubleshooting\n\n**Memory Issues**: If you run out of memory, consider using a smaller dataset or reducing batch size.\n\n**Training Issues**: Check that your environment has all required dependencies installed.\n\n`;
            }

            if (data.author) {
                readme += `## Author\n\n${data.author}\n\n`;
            }

            if (data.license && data.license !== 'None') {
                readme += `## License\n\nThis project is licensed under the ${data.license} License.\n`;
            }

            return readme;
        }
    },

    mobile: {
        name: 'Mobile App',
        icon: '📱',
        description: 'Optimized template for iOS, Android, and cross platform apps',
        sections: ['description', 'platforms', 'features', 'installation', 'usage', 'screenshots', 'technologies'],
        generate: (data) => {
            let readme = `# ${data.projectName}\n\n`;
            
            readme += `${data.projectDescription}\n\n`;

            if (data.includeTOC) {
                readme += `## Table of Contents\n\n`;
                const toc = [];
                if (data.platforms) toc.push('- [Platforms](#platforms)');
                if (data.appFeatures) toc.push('- [Features](#features)');
                if (data.minimumOS) toc.push('- [Requirements](#requirements)');
                if (data.screenshots) toc.push('- [Screenshots](#screenshots)');
                if (data.installation) toc.push('- [Installation](#installation)');
                if (data.usage) toc.push('- [Usage](#usage)');
                if (data.technologies) toc.push('- [Technologies](#technologies)');
                if (data.includeContributing) toc.push('- [Contributing](#contributing)');
                if (data.includeFAQ) toc.push('- [FAQ](#faq)');
                if (data.author) toc.push('- [Author](#author)');
                if (data.license && data.license !== 'None') toc.push('- [License](#license)');
                readme += toc.join('\n') + '\n\n';
            }

            if (data.minimumOS) {
                readme += `## Platforms\n\n`;
                const platforms = document.querySelectorAll('#mobileFields .checkbox-inline input[type="checkbox"]:checked');
                if (platforms.length > 0) {
                    const platformNames = Array.from(platforms).map(p => p.value);
                    readme += `Supported Platforms: ${platformNames.join(', ')}\n\n`;
                }

                readme += `## Requirements\n\n`;
                readme += `**Minimum OS Versions**: ${data.minimumOS}\n\n`;
            }

            if (data.appFeatures) {
                readme += `## Features\n\n`;
                const features = data.appFeatures.split('\n').filter(f => f.trim());
                features.forEach(feature => {
                    readme += `- ${feature.trim()}\n`;
                });
                readme += '\n';
            }

            if (data.screenshots) {
                readme += `## Screenshots\n\n`;
                readme += `[View App](${data.screenshots})\n\n`;
            }

            if (data.installation) {
                readme += `## Installation\n\n\`\`\`bash\n${data.installation}\n\`\`\`\n\n`;
            }

            if (data.usage) {
                readme += `## Usage\n\n${data.usage}\n\n`;
            }

            if (data.technologies) {
                readme += `## Technologies\n\n`;
                const techs = data.technologies.split(',').map(t => t.trim());
                readme += techs.join(', ') + '\n\n';
            }

            if (data.includeContributing) {
                readme += `## Contributing\n\nContributions are welcome! Please feel free to submit a Pull Request.\n\n`;
            }

            if (data.includeFAQ) {
                readme += `## FAQ\n\n**Q: How do I build the app?**\nA: Follow the Installation section above.\n\n**Q: Does the app work offline?**\nA: Check the Features section for offline capability.\n\n`;
            }

            if (data.includeTroubleshooting) {
                readme += `## Troubleshooting\n\n**Build Errors**: Make sure you have the correct SDK versions installed.\n\n**Runtime Issues**: Check device logs using the platform specific debugger.\n\n`;
            }

            if (data.author) {
                readme += `## Author\n\n${data.author}\n\n`;
            }

            if (data.license && data.license !== 'None') {
                readme += `## License\n\nThis project is licensed under the ${data.license} License.\n`;
            }

            return readme;
        }
    },

    gamedev: {
        name: 'Game Development',
        icon: '🎮',
        description: 'Specialized template for games and interactive projects',
        sections: ['description', 'engine', 'genre', 'gameplay', 'platforms', 'trailer', 'installation', 'usage'],
        generate: (data) => {
            let readme = `# ${data.projectName}\n\n`;
            
            readme += `${data.projectDescription}\n\n`;

            if (data.includeTOC) {
                readme += `## Table of Contents\n\n`;
                const toc = [];
                if (data.genre) toc.push('- [Game Details](#game-details)');
                if (data.gameplay) toc.push('- [Gameplay](#gameplay)');
                if (data.trailerLink) toc.push('- [Trailer](#trailer)');
                if (data.installation) toc.push('- [Installation](#installation)');
                if (data.usage) toc.push('- [How to Play](#how-to-play)');
                if (data.technologies) toc.push('- [Technologies](#technologies)');
                if (data.includeContributing) toc.push('- [Contributing](#contributing)');
                if (data.includeFAQ) toc.push('- [FAQ](#faq)');
                if (data.author) toc.push('- [Author](#author)');
                if (data.license && data.license !== 'None') toc.push('- [License](#license)');
                readme += toc.join('\n') + '\n\n';
            }

            readme += `## Game Details\n\n`;

            if (data.engine) {
                readme += `**Engine**: ${data.engine}\n\n`;
            }

            if (data.genre) {
                readme += `**Genre**: ${data.genre}\n\n`;
            }

            const platforms = document.querySelectorAll('#gamedevFields .checkbox-inline input[type="checkbox"]:checked');
            if (platforms.length > 0) {
                const platformNames = Array.from(platforms).map(p => p.value);
                readme += `**Platforms**: ${platformNames.join(', ')}\n\n`;
            }

            if (data.gameplay) {
                readme += `## Gameplay\n\n`;
                const mechanics = data.gameplay.split('\n').filter(m => m.trim());
                readme += `Key Mechanics:\n\n`;
                mechanics.forEach(mechanic => {
                    readme += `- ${mechanic.trim()}\n`;
                });
                readme += '\n';
            }

            if (data.trailerLink) {
                readme += `## Trailer\n\n[Watch Trailer/Demo](${data.trailerLink})\n\n`;
            }

            if (data.installation) {
                readme += `## Installation\n\n\`\`\`bash\n${data.installation}\n\`\`\`\n\n`;
            }

            if (data.usage) {
                readme += `## How to Play\n\n${data.usage}\n\n`;
            }

            if (data.technologies) {
                readme += `## Technologies\n\n`;
                const techs = data.technologies.split(',').map(t => t.trim());
                readme += techs.join(', ') + '\n\n';
            }

            if (data.includeContributing) {
                readme += `## Contributing\n\nContributions are welcome! Please feel free to submit a Pull Request.\n\n`;
            }

            if (data.includeFAQ) {
                readme += `## FAQ\n\n**Q: Can I mod the game?**\nA: Check the documentation for modding guidelines.\n\n**Q: How do I report bugs?**\nA: Please open an issue on GitHub.\n\n`;
            }

            if (data.includeTroubleshooting) {
                readme += `## Troubleshooting\n\n**Performance Issues**: Try lowering graphics settings or updating your graphics drivers.\n\n**Crashes**: Make sure your system meets the minimum requirements.\n\n`;
            }

            if (data.author) {
                readme += `## Author\n\n${data.author}\n\n`;
            }

            if (data.license && data.license !== 'None') {
                readme += `## License\n\nThis project is licensed under the ${data.license} License.\n`;
            }

            return readme;
        }
    }
};
