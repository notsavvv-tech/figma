import { builder } from '@builder.io/react';

// Replace this with your Builder.io public API key.
// Create a free account at https://builder.io, then add the key here.
builder.init('YOUR_PUBLIC_API_KEY');

// Optional: set the default model for your page content.
builder.setUserAttributes({
  url: window.location.pathname,
});
