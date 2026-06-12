const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const sourcePath = path.join(rootDir, '2D_desktop_GF_ver2.html');
const outDir = path.join(rootDir, 'www');
const outPath = path.join(outDir, 'index.html');

const mobileCss = `

/* Android WebView app layout */
html,
body {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
}

body {
  background: var(--bg);
  align-items: center;
  justify-content: center;
  padding: max(10px, env(safe-area-inset-top)) 10px max(10px, env(safe-area-inset-bottom));
}

#setupScreen {
  background: linear-gradient(135deg, #fce4f0 0%, #ede0ff 50%, #dff0ff 100%);
  -webkit-app-region: no-drag;
  padding: 12px;
}

.setup-card {
  width: min(350px, calc(100vw - 24px));
  max-height: calc(100vh - 24px);
  overflow-y: auto;
  border-radius: 18px;
  padding: 24px 22px;
}

.setup-close,
.topbar-btns .top-btn:last-child {
  display: none;
}

#widget {
  left: 50%;
  right: auto;
  bottom: max(0px, env(safe-area-inset-bottom));
  transform: translateX(-50%);
  width: min(340px, calc(100vw - 20px));
  max-height: 100vh;
}

.widget-topbar {
  -webkit-app-region: no-drag;
}

.topbar-btns,
.top-btn,
.setup-input,
.chat-input,
.start-btn,
.persona-btn,
.secondary-btn,
.text-btn {
  -webkit-app-region: no-drag;
}

.setup-input,
.chat-input {
  font-size: 16px;
}

.char-area {
  max-height: min(520px, calc(100vh - 178px));
}
`;

function replaceOnce(source, target, replacement) {
  if (!source.includes(target)) {
    throw new Error(`Could not find expected marker: ${target}`);
  }

  return source.replace(target, replacement);
}

let html = fs.readFileSync(sourcePath, 'utf8');
html = replaceOnce(
  html,
  '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">'
);
html = replaceOnce(html, '<title>companion</title>', '<title>Desktop Renai Revolution 2D</title>');
html = replaceOnce(html, '</style>', `${mobileCss}\n</style>`);

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, html, 'utf8');

console.log(`Prepared ${path.relative(rootDir, outPath)} from ${path.basename(sourcePath)}`);
