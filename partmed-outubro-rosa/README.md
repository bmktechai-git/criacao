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

## Conteúdo da edição — revisão v3

Fachada, recepção e Setor de Exames aparecem uma vez cada. Os intervalos restantes usam motion de fita, calendário e WhatsApp, além de duas imagens fotográficas ilustrativas criadas a partir da direção visual fornecida. Elas não representam as instalações da Partmed e estão identificadas como imagens ilustrativas.
Logo fixo sem box, com azul/preto convertido para branco no derivado logo-white.svg; original preservado. Selo fixo sem box: fita rosa à esquerda e texto branco alinhado à esquerda. Há um degradê de contraste no topo, sem placas atrás dos elementos.
Frases curtas de destaque substituem os parágrafos. A narração possui legendas sincronizadas em português. Dados em src/captions.json; instância editável no Studio em src/Narration.tsx; BasicCaptions oficial preservado em src/basic-captions.tsx.
Locução original preservada em public/Partmed_audio1.ogg; versão tratada em public/Partmed_audio1-tratado-alinhado.wav. Tratamento leve de ruído, filtro de voz, normalização de aproximadamente -18 LUFS e pico verdadeiro de -3 dB. Latência de 25 ms do tratamento compensada; duração decodificada preservada em 54,0135 segundos. Nenhuma fala removida ou acelerada. Distorção já presente na gravação original pode não ser totalmente recuperável.
Pacotes após a locução: 10 s, 11 s, 12 s; encerramento: 7 s. Serviços, preços e parcelamentos mantidos.

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
