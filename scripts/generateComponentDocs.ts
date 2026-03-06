import * as fs from 'node:fs';
import * as path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content', 'docs');
const COMPONENTS_DIR = path.join(ROOT, 'app', 'components');

const BASE_UI_DIR = path.join(COMPONENTS_DIR, 'base-ui');
const REACT_ARIA_DIR = path.join(COMPONENTS_DIR, 'react-aria');

const UTILITY_PACKAGES = new Set([
  'csp-provider', 'direction-provider', 'floating-ui-react', 'form',
  'labelable-provider', 'merge-props', 'types', 'unstable-use-media-query',
  'use-button', 'use-render', 'utils', 'composite',
]);

function toTitleCase(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function escapeForMdx(code: string): string {
  return code.replace(/`{3,}/g, (m) => '`'.repeat(m.length + 1));
}

function getExportedFunctions(source: string): string[] {
  const names: string[] = [];
  const fnRegex = /export\s+(?:function|const)\s+(\w+)/g;
  let m: RegExpExecArray | null;
  while ((m = fnRegex.exec(source)) !== null) {
    names.push(m[1]);
  }
  return names;
}

const REACT_ARIA_PREVIEWS: Record<string, string> = {
  AlertDialog: `<DialogTrigger>\n    <Button variant="destructive">Delete</Button>\n    <Modal>\n      <AlertDialog title="Delete item" variant="destructive" actionLabel="Delete">\n        Are you sure you want to delete this item?\n      </AlertDialog>\n    </Modal>\n  </DialogTrigger>`,
  Breadcrumbs: `<Breadcrumbs>\n    <Breadcrumb href="/">Home</Breadcrumb>\n    <Breadcrumb href="/docs">Docs</Breadcrumb>\n    <Breadcrumb>Current</Breadcrumb>\n  </Breadcrumbs>`,
  Button: `<div className="flex gap-2">\n    <Button variant="primary">Primary</Button>\n    <Button variant="secondary">Secondary</Button>\n    <Button variant="destructive">Destructive</Button>\n    <Button variant="quiet">Quiet</Button>\n  </div>`,
  Calendar: `<Calendar aria-label="Date" />`,
  Checkbox: `<Checkbox>Accept terms</Checkbox>`,
  CheckboxGroup: `<CheckboxGroup label="Interests">\n    <Checkbox value="sports">Sports</Checkbox>\n    <Checkbox value="music">Music</Checkbox>\n    <Checkbox value="reading">Reading</Checkbox>\n  </CheckboxGroup>`,
  ColorArea: `<ColorArea aria-label="Color" />`,
  ColorField: `<ColorField label="Color" defaultValue="#ff0000" />`,
  ColorPicker: `<ColorPicker label="Fill color" defaultValue="#ff0000" />`,
  ColorSlider: `<ColorSlider label="Hue" channel="hue" defaultValue="hsl(0, 100%, 50%)" />`,
  ColorSwatch: `<ColorSwatch color="#ff0000" />`,
  ColorSwatchPicker: `<ColorSwatchPicker label="Color" colors={['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']} />`,
  ColorThumb: `<p className="text-fd-muted-foreground text-sm">ColorThumb is used internally by color components.</p>`,
  ColorWheel: `<ColorWheel aria-label="Hue" />`,
  ComboBox: `<ComboBox label="Framework">\n    <ComboBoxItem>React</ComboBoxItem>\n    <ComboBoxItem>Vue</ComboBoxItem>\n    <ComboBoxItem>Angular</ComboBoxItem>\n    <ComboBoxItem>Svelte</ComboBoxItem>\n  </ComboBox>`,
  CommandPalette: `<p className="text-fd-muted-foreground text-sm">CommandPalette requires a trigger setup: see source code below.</p>`,
  DateField: `<DateField label="Date" />`,
  DatePicker: `<DatePicker label="Date" />`,
  DateRangePicker: `<DateRangePicker label="Date range" />`,
  Dialog: `<p className="text-fd-muted-foreground text-sm">Dialog is used inside Modal: see AlertDialog for a full example.</p>`,
  Disclosure: `<Disclosure>\n    <DisclosureHeader>What is Jone?</DisclosureHeader>\n    <DisclosurePanel>Jone is a UI library built on Base UI and React Aria.</DisclosurePanel>\n  </Disclosure>`,
  DisclosureGroup: `<DisclosureGroup>\n    <Disclosure>\n      <DisclosureHeader>Question 1</DisclosureHeader>\n      <DisclosurePanel>Answer 1</DisclosurePanel>\n    </Disclosure>\n    <Disclosure>\n      <DisclosureHeader>Question 2</DisclosureHeader>\n      <DisclosurePanel>Answer 2</DisclosurePanel>\n    </Disclosure>\n  </DisclosureGroup>`,
  DropZone: `<DropZone>\n    <p>Drop files here</p>\n  </DropZone>`,
  Field: `<div className="flex flex-col gap-1">\n    <Label>Username</Label>\n    <Input placeholder="Enter username" />\n    <Description>Your unique identifier</Description>\n  </div>`,
  FieldButton: `<FieldButton>Action</FieldButton>`,
  Form: `<Form className="flex flex-col gap-4">\n    <TextField label="Email" type="email" isRequired />\n    <Button type="submit">Submit</Button>\n  </Form>`,
  GridList: `<GridList aria-label="Items" selectionMode="multiple">\n    <GridListItem>Item 1</GridListItem>\n    <GridListItem>Item 2</GridListItem>\n    <GridListItem>Item 3</GridListItem>\n  </GridList>`,
  Link: `<div className="flex gap-4">\n    <Link href="#" variant="primary">Primary Link</Link>\n    <Link href="#" variant="secondary">Secondary Link</Link>\n  </div>`,
  ListBox: `<ListBox aria-label="Options" selectionMode="single" className="w-60">\n    <ListBoxItem>Option A</ListBoxItem>\n    <ListBoxItem>Option B</ListBoxItem>\n    <ListBoxItem>Option C</ListBoxItem>\n  </ListBox>`,
  Menu: `<MenuTrigger>\n    <Button variant="secondary">Actions ▾</Button>\n    <Menu>\n      <MenuItem>Edit</MenuItem>\n      <MenuItem>Duplicate</MenuItem>\n      <MenuItem>Delete</MenuItem>\n    </Menu>\n  </MenuTrigger>`,
  Meter: `<Meter label="Storage" value={70} />`,
  Modal: `<DialogTrigger>\n    <Button>Open Modal</Button>\n    <Modal>\n      <Dialog>\n        {({ close }) => (\n          <>\n            <Heading slot="title" className="text-lg font-semibold mb-2">Modal Title</Heading>\n            <p className="text-sm text-neutral-500 mb-4">This is a modal dialog.</p>\n            <Button variant="secondary" onPress={close}>Close</Button>\n          </>\n        )}\n      </Dialog>\n    </Modal>\n  </DialogTrigger>`,
  NumberField: `<NumberField label="Quantity" defaultValue={1} minValue={0} />`,
  Popover: `<DialogTrigger>\n    <Button variant="secondary">Info</Button>\n    <Popover>\n      <Dialog>\n        <Heading slot="title" className="text-sm font-medium mb-1">Help</Heading>\n        <p className="text-xs text-neutral-500">This is a popover.</p>\n      </Dialog>\n    </Popover>\n  </DialogTrigger>`,
  ProgressBar: `<ProgressBar label="Loading..." value={65} />`,
  RadioGroup: `<RadioGroup label="Favorite framework">\n    <Radio value="react">React</Radio>\n    <Radio value="vue">Vue</Radio>\n    <Radio value="angular">Angular</Radio>\n  </RadioGroup>`,
  RangeCalendar: `<RangeCalendar aria-label="Date range" />`,
  SearchField: `<SearchField label="Search" />`,
  Select: `<Select label="Country">\n    <SelectItem>United States</SelectItem>\n    <SelectItem>Canada</SelectItem>\n    <SelectItem>Germany</SelectItem>\n    <SelectItem>Japan</SelectItem>\n  </Select>`,
  Separator: `<div className="w-full flex flex-col gap-2">\n    <p className="text-sm">Above</p>\n    <Separator />\n    <p className="text-sm">Below</p>\n  </div>`,
  Slider: `<Slider label="Volume" defaultValue={50} />`,
  Switch: `<Switch>Dark mode</Switch>`,
  Table: `<Table aria-label="Example" selectionMode="multiple">\n    <TableHeader>\n      <Column isRowHeader>Name</Column>\n      <Column>Role</Column>\n    </TableHeader>\n    <TableBody>\n      <Row>\n        <Cell>Alice</Cell>\n        <Cell>Developer</Cell>\n      </Row>\n      <Row>\n        <Cell>Bob</Cell>\n        <Cell>Designer</Cell>\n      </Row>\n    </TableBody>\n  </Table>`,
  Tabs: `<Tabs>\n    <TabList>\n      <Tab id="overview">Overview</Tab>\n      <Tab id="features">Features</Tab>\n      <Tab id="pricing">Pricing</Tab>\n    </TabList>\n    <TabPanels>\n      <TabPanel id="overview">Overview content goes here.</TabPanel>\n      <TabPanel id="features">Features content goes here.</TabPanel>\n      <TabPanel id="pricing">Pricing content goes here.</TabPanel>\n    </TabPanels>\n  </Tabs>`,
  TagGroup: `<TagGroup label="Tags" selectionMode="multiple">\n    <Tag>React</Tag>\n    <Tag>TypeScript</Tag>\n    <Tag>Tailwind</Tag>\n  </TagGroup>`,
  TextField: `<TextField label="Name" placeholder="Enter your name" />`,
  TimeField: `<TimeField label="Time" />`,
  Toast: `<p className="text-fd-muted-foreground text-sm">Toast requires a global queue setup: see source code below for the implementation.</p>`,
  ToggleButton: `<ToggleButton>Pin</ToggleButton>`,
  ToggleButtonGroup: `<ToggleButtonGroup selectionMode="single">\n    <ToggleButton id="left">Left</ToggleButton>\n    <ToggleButton id="center">Center</ToggleButton>\n    <ToggleButton id="right">Right</ToggleButton>\n  </ToggleButtonGroup>`,
  Toolbar: `<Toolbar>\n    <Button variant="secondary">Cut</Button>\n    <Button variant="secondary">Copy</Button>\n    <Button variant="secondary">Paste</Button>\n    <Separator orientation="vertical" />\n    <Button variant="secondary">Undo</Button>\n  </Toolbar>`,
  Tooltip: `<TooltipTrigger>\n    <Button variant="secondary">Hover me</Button>\n    <Tooltip>This is a tooltip!</Tooltip>\n  </TooltipTrigger>`,
  Tree: `<Tree aria-label="Files">\n    <TreeItem title="src" />\n    <TreeItem title="public" />\n  </Tree>`,
};

interface PropInfo {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
}

function parsePropsFromSource(source: string): PropInfo[] {
  const props: PropInfo[] = [];
  const interfaceRegex = /export\s+interface\s+\w+Props[^{]*\{([^}]+)\}/g;

  let match: RegExpExecArray | null;
  while ((match = interfaceRegex.exec(source)) !== null) {
    const body = match[1];
    const lines = body.split('\n');

    let currentComment = '';
    for (const line of lines) {
      const trimmed = line.trim();

      if (trimmed.startsWith('/**') || trimmed.startsWith('*') || trimmed === '*/') {
        const commentText = trimmed
          .replace(/^\/?\*+\/?/, '')
          .replace(/\*\/$/, '')
          .trim();
        if (commentText) currentComment += (currentComment ? ' ' : '') + commentText;
        continue;
      }

      const propMatch = trimmed.match(/^(\w+)(\?)?:\s*(.+?)(?:;|$)/);
      if (propMatch) {
        const [, name, optional, type] = propMatch;
        const defaultMatch = currentComment.match(/@default\s+['"]?(.+?)['"]?\s*(?:\*\/)?$/);
        const defaultVal = defaultMatch ? defaultMatch[1].replace(/\s*\*\/$/, '').trim() : '-';
        const description = currentComment.replace(/@default\s+.*$/, '').trim();

        props.push({
          name: name + (optional ? '?' : ''),
          type: type.trim().replace(/\|/g, '\\|'),
          defaultValue: defaultVal,
          description: description || '-',
        });
        currentComment = '';
      } else {
        if (!trimmed.startsWith('/*') && !trimmed.startsWith('*') && trimmed !== '') {
          currentComment = '';
        }
      }
    }
  }

  return props;
}

function escapeForTable(val: string): string {
  return val.replace(/\$/g, '\\$').replace(/[{}]/g, (c) => `\\${c}`);
}

function buildPropsTable(props: PropInfo[]): string {
  if (props.length === 0) return '';

  let table = '## Props\n\n';
  table += '| Name | Type | Default | Description |\n';
  table += '| --- | --- | --- | --- |\n';
  for (const prop of props) {
    table += `| \`${escapeForTable(prop.name)}\` | \`${escapeForTable(prop.type)}\` | \`${escapeForTable(prop.defaultValue)}\` | ${escapeForTable(prop.description)} |\n`;
  }
  return table;
}

function getBaseUiComponents(): string[] {
  return fs.readdirSync(BASE_UI_DIR, { withFileTypes: true })
    .filter(e => e.isDirectory() && !UTILITY_PACKAGES.has(e.name))
    .map(e => e.name)
    .sort();
}

function getReactAriaComponents(): string[] {
  return fs.readdirSync(REACT_ARIA_DIR, { withFileTypes: true })
    .filter(e => e.isFile() && e.name.endsWith('.tsx'))
    .map(e => e.name.replace('.tsx', ''))
    .sort();
}

function findMainSourceFile(componentDir: string): string | null {
  const entries = fs.readdirSync(componentDir, { withFileTypes: true });
  const tsxFiles = entries.filter(e => e.isFile() && e.name.endsWith('.tsx'));

  if (tsxFiles.length > 0) {
    return path.join(componentDir, tsxFiles[0].name);
  }

  const indexParts = entries.find(e => e.name === 'index.parts.ts');
  if (indexParts) return path.join(componentDir, indexParts.name);

  const indexFile = entries.find(e => e.name === 'index.ts');
  if (indexFile) return path.join(componentDir, indexFile.name);

  return null;
}

function collectAllSourceFiles(dir: string): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectAllSourceFiles(fullPath));
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      results.push(fullPath);
    }
  }

  return results;
}

function generateBaseUiMdx(slug: string): string {
  const componentDir = path.join(BASE_UI_DIR, slug);
  const title = toTitleCase(slug);

  const mainFile = findMainSourceFile(componentDir);
  let sourceCode = '';
  let allProps: PropInfo[] = [];

  if (mainFile) {
    sourceCode = fs.readFileSync(mainFile, 'utf-8');
    allProps = parsePropsFromSource(sourceCode);
  }

  const allFiles = collectAllSourceFiles(componentDir);
  for (const file of allFiles) {
    if (file !== mainFile) {
      const content = fs.readFileSync(file, 'utf-8');
      allProps.push(...parsePropsFromSource(content));
    }
  }

  const uniqueProps = allProps.filter((prop, i, arr) =>
    arr.findIndex(p => p.name === prop.name) === i
  );

  const escapedSource = escapeForMdx(sourceCode);
  const previewNote = `<p className="text-fd-muted-foreground text-sm">Base UI components are headless: they provide logic and accessibility without styling. See source code below for the implementation.</p>`;

  let mdx = `---
title: ${title}
description: Base UI ${title} component
---

## Preview

<ComponentPreview>
  ${previewNote}
</ComponentPreview>

## Source Code

\`\`\`tsx title="${slug}/index.ts"
${escapedSource.trim()}
\`\`\`
`;

  const propsTable = buildPropsTable(uniqueProps);
  if (propsTable) {
    mdx += `\n${propsTable}`;
  }

  return mdx;
}

function generateReactAriaMdx(componentName: string): string {
  const filePath = path.join(REACT_ARIA_DIR, `${componentName}.tsx`);
  const sourceCode = fs.readFileSync(filePath, 'utf-8');
  const props = parsePropsFromSource(sourceCode);
  const escapedSource = escapeForMdx(sourceCode);

  const preview = REACT_ARIA_PREVIEWS[componentName];
  const previewJsx = preview ?? `<p className="text-fd-muted-foreground text-sm">Interactive preview not available: see source code below.</p>`;

  let mdx = `---
title: ${componentName}
description: React Aria ${componentName} component
---

## Preview

<ComponentPreview>
  ${previewJsx}
</ComponentPreview>

## Source Code

\`\`\`tsx title="${componentName}.tsx"
${escapedSource.trim()}
\`\`\`
`;

  const propsTable = buildPropsTable(props);
  if (propsTable) {
    mdx += `\n${propsTable}`;
  }

  return mdx;
}

function generateIndexTable(
  components: { slug: string; title: string }[],
  linkPrefix: string,
): string {
  let table = '| Component | Link |\n';
  table += '| --- | --- |\n';
  for (const { slug, title } of components) {
    table += `| ${title} | [View](${linkPrefix}/${slug}) |\n`;
  }
  return table;
}

function main() {
  const baseUiSlugs = getBaseUiComponents();
  const reactAriaNames = getReactAriaComponents();

  console.log(`Found ${baseUiSlugs.length} Base UI components`);
  console.log(`Found ${reactAriaNames.length} React Aria components`);

  // Generate Base UI component pages
  const baseUiContentDir = path.join(CONTENT_DIR, 'baseui');
  for (const slug of baseUiSlugs) {
    const mdx = generateBaseUiMdx(slug);
    const outPath = path.join(baseUiContentDir, `${slug}.mdx`);
    fs.writeFileSync(outPath, mdx, 'utf-8');
    console.log(`  ✓ baseui/${slug}.mdx`);
  }

  // Generate React Aria component pages
  const reactAriaContentDir = path.join(CONTENT_DIR, 'react-aria');
  for (const name of reactAriaNames) {
    const mdx = generateReactAriaMdx(name);
    const slug = name.charAt(0).toLowerCase() + name.slice(1);
    const outPath = path.join(reactAriaContentDir, `${slug}.mdx`);
    fs.writeFileSync(outPath, mdx, 'utf-8');
    console.log(`  ✓ react-aria/${slug}.mdx`);
  }

  // Update Base UI index
  const baseUiComponents = baseUiSlugs.map(slug => ({
    slug,
    title: toTitleCase(slug),
  }));

  const baseUiIndex = `---
title: Base UI
description: Jone components built on Base UI
---

Base UI provides the headless primitives for Jone components.

## Components

${generateIndexTable(baseUiComponents, '/docs/baseui')}
`;

  fs.writeFileSync(path.join(baseUiContentDir, 'index.mdx'), baseUiIndex, 'utf-8');
  console.log('✓ Updated baseui/index.mdx');

  // Update React Aria index
  const reactAriaComponents = reactAriaNames.map(name => ({
    slug: name.charAt(0).toLowerCase() + name.slice(1),
    title: name,
  }));

  const reactAriaIndex = `---
title: React Aria
description: Jone components built on React Aria
---

React Aria provides the headless primitives for Jone components. Adobe's React Aria is actively maintained with strong accessibility focus.

## Components

${generateIndexTable(reactAriaComponents, '/docs/react-aria')}
`;

  fs.writeFileSync(path.join(reactAriaContentDir, 'index.mdx'), reactAriaIndex, 'utf-8');
  console.log('✓ Updated react-aria/index.mdx');

  // Update meta.json files
  const baseUiMeta = {
    title: 'Base UI',
    description: 'The headless library',
    root: true,
    pages: ['index', ...baseUiSlugs],
  };

  fs.writeFileSync(
    path.join(baseUiContentDir, 'meta.json'),
    JSON.stringify(baseUiMeta, null, 2) + '\n',
    'utf-8',
  );
  console.log('✓ Updated baseui/meta.json');

  const reactAriaMeta = {
    title: 'React Aria',
    description: 'Components built on React Aria primitives',
    root: true,
    pages: ['index', ...reactAriaComponents.map(c => c.slug)],
  };

  fs.writeFileSync(
    path.join(reactAriaContentDir, 'meta.json'),
    JSON.stringify(reactAriaMeta, null, 2) + '\n',
    'utf-8',
  );
  console.log('✓ Updated react-aria/meta.json');

  console.log('\nDone! Generated docs for all components.');
}

main();
