const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('📸 Preparando o navegador fantasma para gerar o PDF...');
  
  // 1. Abre o navegador invisível
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  // 2. Pega o caminho exato do HTML
  const caminhoHtml = `file://${path.join(__dirname, 'cypress', 'reports', 'html', 'index.html')}`;
  
  // 3. Acessa a página e espera tudo carregar
  await page.goto(caminhoHtml, { waitUntil: 'networkidle0' });
  
  // 4. "Imprime" a tela como um PDF A4 com cores
  await page.pdf({ 
      path: 'cypress/reports/Relatorio-Automacao.pdf', 
      format: 'A4',
      printBackground: true 
  });

  // 5. Fecha o navegador
  await browser.close();
  
  console.log('✅ Sucesso! O Relatório em PDF foi salvo na pasta cypress/reports/');
})();