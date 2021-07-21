const config = {
  testEnvironment: 'node',
  haste: {
    enableSymlinks: true,
  },
  reporters: ['default'],
  testMatch: ['**/*.test.js'],
  moduleNameMapper: {
    'examples_jest/(.*)': '<rootDir>/$1',
  },
};

if (process.env.NODE_V8_COVERAGE) {
  const coverageConfig = {
    collectCoverage: true,
    coverageReporters: [["lcovonly", {"file": "jest_cov.dat"}]],
    collectCoverageFrom: ['./ts/src/*.ts'],
    coverageDirectory: process.env.NODE_V8_COVERAGE,
  };

  Object.assign(config, coverageConfig);
}

module.exports = config;
