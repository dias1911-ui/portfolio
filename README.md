# 🖧 Portfólio - Especialista em Redes e Linux

Um portfólio profissional moderno e responsivo para especialistas em Infraestrutura de Redes e Administração de Sistemas Linux.

## ✨ Características

- ✅ Design moderno com tema tech (Cyber Blue)
- ✅ Apresentação dos 5 projetos principais
- ✅ Seções: Home, Sobre, Projetos, Skills, Certificados, Contato
- ✅ Animações suaves e efeitos visuais
- ✅ Totalmente responsivo (Mobile, Tablet, Desktop)
- ✅ Performance otimizada
- ✅ Fácil customização

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html      # Estrutura HTML
├── style.css       # Estilos CSS com temas
├── script.js       # Interatividade JavaScript
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### 1. Clone o Repositório
```bash
git clone https://github.com/dias1911-ui/portfolio.git
cd portfolio
```

### 2. Abra no Navegador
```bash
# Opção 1: Abra o arquivo
open index.html

# Opção 2: Use um servidor local
python -m http.server 8000
# Acesse: http://localhost:8000
```

## 🎨 Customização

### 1. Informações Pessoais

Abra `index.html` e localize e edite:

```html
<!-- Nome -->
<h1>Olá! 👋 Sou <span class="destaque">SEU_NOME</span></h1>

<!-- Profissão -->
<p class="profissao">Sua Especialidade</p>

<!-- Descrição -->
<p class="descricao">Suas áreas de expertise</p>

<!-- Email -->
<a href="mailto:seu.email@exemplo.com" class="btn-contato">📧 Email</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/seu-perfil" target="_blank">💼 LinkedIn</a>

<!-- GitHub -->
<a href="https://github.com/seu-usuario" target="_blank">💻 GitHub</a>
```

### 2. Projetos (5 Principais)

Encontre a seção `<!-- Projeto 1 -->` e customize:

```html
<div class="projeto-card">
    <div class="projeto-header">🖧</div>
    <h3>Seu Projeto</h3>
    <p>Descrição breve</p>
    <div class="projeto-destaque">
        <strong>Demonstra:</strong>
    </div>
    <div class="projeto-tags">
        <span>Tecnologia1</span>
        <span>Tecnologia2</span>
    </div>
    <p class="projeto-desc">Descrição detalhada do que foi implementado</p>
    <div class="projeto-links">
        <a href="URL_DOCUMENTACAO" target="_blank">Ver Documentação</a>
        <a href="URL_DIAGRAMA" target="_blank">Diagrama</a>
    </div>
</div>
```

### 3. Skills Técnicas

Localize `.skill-card` e adicione/remova suas competências:

```html
<div class="skill-card">
    <h3>🖧 Sua Categoria</h3>
    <ul>
        <li>Competência 1</li>
        <li>Competência 2</li>
        <li>Competência 3</li>
    </ul>
</div>
```

### 4. Certificações

Customize a seção de certificados:

```html
<div class="certificado-card">
    <div class="certificado-icone">🎓</div>
    <h3>Seu Certificado</h3>
    <p>Descrição</p>
    <span class="status">✅ Certificado</span>
    <!-- ou -->
    <span class="status em-progresso">🔄 Em Progresso</span>
</div>
```

### 5. Cores e Temas

Edite `style.css` para alterar as cores:

```css
:root {
    --cor-primaria: #00d4ff;      /* Cyan/Azul claro */
    --cor-secundaria: #ff6b6b;    /* Vermelho */
    --cor-tertiary: #51cf66;      /* Verde */
    --cor-fundo: #0a0e27;         /* Fundo muito escuro */
    --cor-fundo-claro: #1a1f3a;   /* Fundo claro */
    --cor-texto: #e2e8f0;         /* Texto principal */
    --cor-texto-claro: #94a3b8;   /* Texto secundário */
}
```

## 📚 5 Projetos Recomendados

### 🖧 Projeto 1: Rede Corporativa Completa
**Tecnologias:** VLANs, DHCP, DNS, NAT, Roteamento, ACL
- Diagrama de topologia
- Configurações de switch/roteador
- Documentação de endereçamento IP

### 🔀 Projeto 2: Infraestrutura Cisco
**Tecnologias:** Switching, Routing, STP, OSPF, BGP, Troubleshooting
- Configs Cisco IOS
- Lab simulado (Cisco Packet Tracer)
- Guia de troubleshooting

### 🐧 Projeto 3: Servidor Linux Empresarial
**Tecnologias:** Ubuntu/RHEL, SSH, Firewall, Hardening, Serviços
- Scripts de automação
- Políticas de segurança
- Guia de administração

### 🖥️ Projeto 4: Infraestrutura com Monitoramento
**Tecnologias:** Linux, Nginx, DNS, Zabbix/Prometheus, Logs
- Playbooks Ansible
- Dashboards Grafana
- Stack de monitoramento

### 🔐 Projeto 5: Ambiente Integrado
**Tecnologias:** Rede + Linux + Segurança + Monitoramento
- Arquitetura corporativa completa
- Documentação técnica
- Plano de disaster recovery

## 🌐 Fazer Deploy

### Opção 1: GitHub Pages (Gratuito)
```bash
# Renomeie o repositório para:
# SEU_USERNAME.github.io

# Push do código
git add .
git commit -m "Portfólio inicial"
git push origin main

# Acesse: https://SEU_USERNAME.github.io
```

### Opção 2: Netlify (Recomendado)
1. Acesse [netlify.com](https://netlify.com)
2. Conecte seu repositório GitHub
3. Deploy automático
4. Domínio customizado (opcional)

### Opção 3: Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Importe o repositório
3. Deploy instantâneo

## 📱 Responsividade

Testado em:
- 💻 Desktop (1920px, 1440px, 1024px)
- 📱 Tablet (768px, 768px)
- 📲 Mobile (375px, 480px, 640px)

## 💡 Dicas Profissionais

- 📸 Adicione screenshots dos seus projetos
- 🔗 Links funcionais para documentação e código
- 📊 Inclua diagramas e topologias de rede
- 📝 Descrições claras e técnicas
- 🎯 Mantenha sempre atualizado
- 🔐 Proteja dados sensíveis nas documentações

## 🎓 Tecnologias Aplicadas

- **HTML5** - Estrutura semântica
- **CSS3** - Gradientes, flexbox, grid, animações
- **JavaScript Vanilla** - Interatividade sem frameworks
- **Intersection Observer** - Animações ao scroll
- **Media Queries** - Design responsivo

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [Can I Use](https://caniuse.com/) - Compatibilidade de browsers
- [Figma](https://figma.com/) - Design
- [Zabbix Docs](https://www.zabbix.com/documentation)
- [Linux Manual Pages](https://linux.die.net/man/)

## 🔧 Melhorias Futuras

- [ ] Modo dark/light toggle
- [ ] Sistema de comentários
- [ ] Blog integrado
- [ ] Formulário de contato funcional
- [ ] PWA (Progressive Web App)
- [ ] Otimização SEO
- [ ] Google Analytics

## 📄 Licença

Este projeto está sob licença MIT - sinta-se livre para usar, modificar e distribuir.

## 🤝 Contribuições

Contribuições são bem-vindas! Faça um fork, crie uma branch com suas mudanças e abra um pull request.

---

**⭐ Se este projeto foi útil, deixe uma estrela!**

**Made with ❤️ by Dias - Especialista em Redes e Linux**

---

## 📞 Contato

- 📧 Email: washingtondias1911@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/washington-dias-b02a7716b?utm_source=share_via&utm_content=profile&utm_medium=member_android
- 💻 GitHub: [dias1911-ui](https://github.com/dias1911-ui)
  
