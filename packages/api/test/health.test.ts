import { test } from 'node:test';
import assert from 'node:assert';
import { buildApp } from '../src/app.ts';

test('GET /health returns ok', async () => {
  const app = buildApp();
  const response = await app.inject({
    method: 'GET',
    url: '/health'
  });

  assert.strictEqual(response.statusCode, 200);
  assert.deepStrictEqual(response.json(), { status: 'ok' });
});
