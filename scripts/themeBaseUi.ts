import * as fs from 'node:fs';
import * as path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const BASE_UI_DIR = path.join(ROOT, 'app', 'components', 'base-ui');

const REPLACEMENTS: [RegExp, string][] = [
  // dark: prefix classes clash with FumaDocs automatic dark mode
  [/\bdark:[a-zA-Z0-9-\/\[\]\.]+\b/g, ' '],

  // Backgrounds
  [/\bbg-white\b/g, 'bg-fd-background'],
  [/\bbg-black\b/g, 'bg-fd-foreground'],
  [/\bbg-gray-50\b/g, 'bg-fd-background'],
  [/\bbg-gray-100\b/g, 'bg-fd-muted'],
  [/\bbg-gray-200\b/g, 'bg-fd-accent'],
  [/\bbg-gray-300\b/g, 'bg-fd-accent'],
  [/\bbg-gray-800\b/g, 'bg-fd-foreground'],
  [/\bbg-gray-900\b/g, 'bg-fd-foreground'],
  [/\bbg-blue-50\b/g, 'bg-fd-primary/10'],
  [/\bbg-blue-100\b/g, 'bg-fd-primary/20'],
  [/\bbg-blue-500\b/g, 'bg-fd-primary'],
  [/\bbg-blue-600\b/g, 'bg-fd-primary'],
  [/\bbg-blue-800\b/g, 'bg-fd-primary'],
  [/\bbg-blue-900\b/g, 'bg-fd-primary/90'],
  [/\bbg-red-50\b/g, 'bg-fd-error/10'],
  [/\bbg-red-100\b/g, 'bg-fd-error/20'],
  [/\bbg-red-600\b/g, 'bg-fd-error'],
  [/\bbg-red-800\b/g, 'bg-fd-error'],
  [/\bbg-green-50\b/g, 'bg-fd-success/10'],
  [/\bbg-green-100\b/g, 'bg-fd-success/20'],
  [/\bbg-green-600\b/g, 'bg-fd-success'],
  [/\bbg-green-800\b/g, 'bg-fd-success'],

  // Text Colors
  [/\btext-white\b/g, 'text-fd-primary-foreground'],
  [/\btext-black\b/g, 'text-fd-foreground'],
  [/\btext-gray-50\b/g, 'text-fd-background'],
  [/\btext-gray-100\b/g, 'text-fd-background'],
  [/\btext-gray-200\b/g, 'text-fd-muted'],
  [/\btext-gray-300\b/g, 'text-fd-muted'],
  [/\btext-gray-400\b/g, 'text-fd-muted-foreground/50'],
  [/\btext-gray-500\b/g, 'text-fd-muted-foreground'],
  [/\btext-gray-600\b/g, 'text-fd-muted-foreground'],
  [/\btext-gray-700\b/g, 'text-fd-foreground'],
  [/\btext-gray-800\b/g, 'text-fd-foreground'],
  [/\btext-gray-900\b/g, 'text-fd-foreground'],
  [/\btext-blue-500\b/g, 'text-fd-primary'],
  [/\btext-blue-600\b/g, 'text-fd-primary'],
  [/\btext-blue-700\b/g, 'text-fd-primary'],
  [/\btext-blue-800\b/g, 'text-fd-primary'],
  [/\btext-blue-900\b/g, 'text-fd-primary'],
  [/\btext-red-500\b/g, 'text-fd-error'],
  [/\btext-red-600\b/g, 'text-fd-error'],
  [/\btext-red-800\b/g, 'text-fd-error'],
  [/\btext-red-900\b/g, 'text-fd-error'],
  [/\btext-green-600\b/g, 'text-fd-success'],
  [/\btext-green-800\b/g, 'text-fd-success'],

  // Borders, Dividers, Outlines, Rings
  [/\bborder-gray-200\b/g, 'border-fd-border'],
  [/\bborder-gray-300\b/g, 'border-fd-border'],
  [/\bborder-gray-400\b/g, 'border-fd-border'],
  [/\bborder-gray-800\b/g, 'border-fd-border'],
  [/\bdivide-gray-200\b/g, 'divide-fd-border'],
  [/\boutline-gray-200\b/g, 'outline-fd-border'],
  [/\boutline-gray-300\b/g, 'outline-fd-border'],
  [/\boutline-blue-800\b/g, 'outline-fd-primary'],
  [/\boutline-black\/4\b/g, 'outline-fd-border'],
  [/\bring-gray-200\b/g, 'ring-fd-border'],
  [/\bring-blue-800\b/g, 'ring-fd-primary'],

  // Shadows
  [/\bshadow-gray-100\b/g, 'shadow-fd-foreground/5'],
  [/\bshadow-gray-200\b/g, 'shadow-fd-foreground/10'],
  [/\bshadow-gray-300\b/g, 'shadow-fd-foreground/20'],
  [/\bshadow-black\/[0-9]+\b/g, 'shadow-fd-foreground/10'],

  // Fills & Strokes
  [/\bfill-gray-50\b/g, 'fill-fd-background'],
  [/\bfill-gray-100\b/g, 'fill-fd-muted'],
  [/\bfill-gray-900\b/g, 'fill-fd-foreground'],
  [/\bfill="black"\b/g, 'fill="currentColor"'],
  [/\bstroke-gray-400\b/g, 'stroke-fd-muted-foreground'],
  [/\bstroke-gray-900\b/g, 'stroke-fd-foreground'],
  [/\bstroke="white"\b/g, 'stroke="currentColor"'],
];

function collectAllTsxFiles(dir: string): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectAllTsxFiles(fullPath));
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.mdx')) {
      results.push(fullPath);
    }
  }

  return results;
}

function themefyFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  for (const [regex, replacement] of REPLACEMENTS) {
    content = content.replace(regex, replacement);
  }

  // Clean up extra spaces and empty classNames safely without breaking TSX indentation
  content = content.replace(/\s+className="([^"]*)"/g, (match, classNames) => {
    const cleaned = classNames.replace(/\s{2,}/g, ' ').trim();
    return cleaned ? ` className="${cleaned}"` : '';
  });

  content = content.replace(/\s+className=\{`([^`\n]*)`\}/g, (match, classNames) => {
    const cleaned = classNames.replace(/\s{2,}/g, ' ').trim();
    return cleaned ? ` className={\`${cleaned}\`}` : '';
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    // console.log(`Themefied: ${path.relative(ROOT, filePath)}`);
  }
}

function main() {
  const files = collectAllTsxFiles(BASE_UI_DIR);
  console.log(`Scanning ${files.length} files in Base UI for hardcoded Tailwind colors...`);
  
  for (const file of files) {
    themefyFile(file);
  }
  
  console.log('Successfully themefied all Base UI components!');
}

main();
