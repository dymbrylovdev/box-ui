import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      svgr({
        // Configure SVGR options
        svgrOptions: {
          exportType: 'named',
          ref: true,
          svgo: false,
        },
        include: '**/*.svg',
      }),
      // Bundle analyzer for development
      isDev && visualizer({
        filename: 'dist/stats.html',
        open: false,
        gzipSize: true,
        brotliSize: true,
      }),
    ].filter(Boolean),

    // Define global constants (replacing Webpack's DefinePlugin)
    define: {
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify('http://localhost:8000'),
    },

    // Development server configuration
    server: {
      port: 3000,
      open: true,
      // Proxy API requests to backend
      proxy: {
        '/api': {
          target: 'http://localhost:8000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
      // Add CORS headers for development
      cors: true,
    },

    // Build configuration
    build: {
      outDir: 'build',
      sourcemap: true,
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Configure chunk splitting
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor libraries
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            redux: ['@reduxjs/toolkit', 'react-redux'],
            i18n: ['i18next', 'react-i18next', 'i18next-browser-languagedetector', 'i18next-http-backend'],
          },
        },
      },
    },

    // Optimize dependencies
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        '@reduxjs/toolkit',
        'react-redux',
        'i18next',
        'react-i18next',
      ],
    },

    // CSS configuration
    css: {
      modules: {
        // CSS Modules configuration matching Webpack behavior
        localsConvention: 'camelCase',
        generateScopedName: isDev
          ? '[path][name]__[local]--[hash:base64:5]'
          : '[hash:base64:8]',
      },
    },

    // Resolve configuration
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: [
        { find: '@', replacement: '/src' },
      ],
    },
  };
});
