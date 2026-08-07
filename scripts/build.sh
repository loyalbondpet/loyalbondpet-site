#!/bin/bash
set -Eeuo pipefail

cd "$(pwd)"

echo "Installing dependencies..."
npm install

echo "Building the Next.js project..."
npx next build

echo "Build completed successfully!"
