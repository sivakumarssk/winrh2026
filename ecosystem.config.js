module.exports = {
    apps: [
      {
        name: 'winrh2026-client',
        script: 'npx',
        args: 'serve out -l 30016', // Serve the static files on port 3000
        cwd: '.',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };