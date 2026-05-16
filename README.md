# figma-builder-starter

A minimal React + Builder.io starter project for rendering Builder content and building from Figma designs.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Replace `YOUR_PUBLIC_API_KEY` in `src/builderConfig.js` with your Builder.io public API key.
4. Create a `page` model in Builder.io and publish a page at `/`.

## Notes

- This project uses Vite and React.
- Use Builder.io to import assets or create your Figma-inspired page.
- The app will load Builder content for the current URL.
