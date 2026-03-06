import { type OramaDocument, sync } from 'fumadocs-core/search/orama-cloud';
import * as fs from 'node:fs/promises';
import { OramaCloud } from '@orama/core';

// the path of pre-rendered `static.json`
const filePath = 'build/client/static.json';

async function main() {
  const projectId = process.env.VITE_ORAMA_PROJECT_ID;
  const apiKey = process.env.ORAMA_PRIVATE_API_KEY;
  const index = process.env.VITE_ORAMA_DATASOURCE_ID;

  if (!projectId || !apiKey || !index) {
    throw new Error(
      'Missing required env vars: VITE_ORAMA_PROJECT_ID, ORAMA_PRIVATE_API_KEY, VITE_ORAMA_DATASOURCE_ID',
    );
  }

  const orama = new OramaCloud({ projectId, apiKey });

  const content = await fs.readFile(filePath);
  const allRecords = JSON.parse(content.toString()) as OramaDocument[];
  const records = allRecords.filter((r) => !r.url?.includes('/baseui/'));

  try {
    await sync(orama, { index, documents: records });
    console.log(`search updated: ${records.length} records`);
  } catch (e) {
    console.warn(`⚠ search sync failed (${records.length} records): ${e instanceof Error ? e.message : e}`);
  }
}

void main();
