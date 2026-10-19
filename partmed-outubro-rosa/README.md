# Partmed • Outubro Rosa

Composição Remotion `Partmed-Outubro-Rosa`: 1080 × 1920, 30 fps, duração de 94,033 segundos.

## Visualizar no navegador com GitHub Codespaces

No repositório, abra **Code → Codespaces → Create codespace on main**.
O contêiner instala as dependências e inicia o Studio na porta 3000.
Abra a aba **Ports / Portas**, localize a porta 3000 e clique em **Open in Browser**.
Mantenha a visibilidade da porta privada; a autenticação do GitHub permite que você veja a prévia.
Se o Studio não estiver rodando: no terminal `cd partmed-outubro-rosa && npm run studio -- --port=3000`.
Escolha `Partmed-Outubro-Rosa` e pressione Play.
A criação de um Codespace depende da disponibilidade e da cota da sua conta; não foi iniciada automaticamente.

## Conteúdo da edição

Somente três vídeos originais fornecidos pelo usuário. Vídeos com proporção de exibição vertical 9:16 e pixels anamórficos (SAR 81:256), preservados com `objectFit="contain"`, sem distorção ou recorte. As sobreposições gráficas ficam na parte inferior.
Locução `public/Partmed_audio1.ogg` integral, 54,0265 segundos, sem aceleração, cortes ou substituição. Áudio de câmera silenciado.
Cortes e destaques alinhados aos blocos da fala. Dissolvências de 0,45 s e selo global fixo.
Pacotes após a locução: 10 s, 11 s, 12 s; encerramento: 7 s.
Serviços, valores e parcelamentos mantidos exatamente como fornecidos.

## Limitação visual a revisar

O arquivo `sala-exame.mp4`, fornecido como sala de ginecologia, mostra placa Setor de Exames e área de atendimento. Na inspeção da filmagem não foi identificada uma sala ginecológica privativa. O arquivo foi priorizado sem atribuir ao ambiente uma identificação não confirmada.

## Revisão e exportação

A prévia MP4 de revisão usa escala de 50% (540 × 960), H.264/AAC, 30 fps; não é a exportação final aprovada.
Exportação final 1080 × 1920 H.264 depende da aprovação do usuário.

## Desenvolvimento local

Instale Node.js 24 e execute na pasta do projeto:

```bash
npm ci
npm run check
npm run studio -- --port=3000
```

Use o checkout existente; não crie worktrees para iniciar o projeto.
