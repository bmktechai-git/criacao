const fs = require('node:fs');
const path = require('node:path');
const file = path.join(process.cwd(), 'node_modules/@remotion/studio-server/dist/preview-server/validate-same-origin.js');
const marker = '// Allow only this Codespace HTTPS origin on the Studio port.';
const original = fs.readFileSync(file, 'utf8');
const target = '    if (originUrl.origin !== `http://${host}`) {';
const replacement = `    ${marker}
    const codespaceOrigin = process.env.CODESPACES === 'true' && process.env.CODESPACE_NAME
        ? 'https://' + process.env.CODESPACE_NAME + '-3000.' + (process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN || 'app.github.dev')
        : null;
    if (codespaceOrigin && originUrl.origin === codespaceOrigin) return;
${target}`;
if (original.includes(marker)) {
  console.log('Correção já aplicada.');
} else {
  if (!original.includes(target)) throw new Error('Versão do validador diferente; nenhum arquivo alterado.');
  fs.writeFileSync(file + '.partmed-backup', original);
  fs.writeFileSync(file, original.replace(target, replacement));
  console.log('Correção aplicada. Reinicie o Studio na porta 3000.');
}
