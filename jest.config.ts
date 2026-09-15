import type { Config } from 'jest';
import { createDefaultPreset } from 'ts-jest';

const { transform } = createDefaultPreset();

const config: Config = {
  testEnvironment: 'node',
  transform,
};

export default config;
