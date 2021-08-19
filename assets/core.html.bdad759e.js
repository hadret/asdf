import{r as s,o as a,c as e,a as n,w as l,F as o,d as r,b as c}from"./app.3fb345e9.js";const i={},d=n("h1",{id:"core",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#core","aria-hidden":"true"},"#"),r(" Core")],-1),p=n("blockquote",null,[n("p",null,'Hi, we\'ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the "Edit this page" link at the bottom of the page.')],-1),t=n("p",null,[r("The core "),n("code",null,"asdf"),r(" command list is rather small, but can facilitate many workflows.")],-1),u=n("h2",{id:"installation-setup",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#installation-setup","aria-hidden":"true"},"#"),r(" Installation & Setup")],-1),m=r("Covered in the "),h=r("Getting Started"),F=r(" guide."),b=c('<h2 id="exec" tabindex="-1"><a class="header-anchor" href="#exec" aria-hidden="true">#</a> Exec</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#66D9EF;">exec</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [args...]</span></span>\n<span class="line"></span></code></pre></div><p>Executes the command shim for the current version.</p><h2 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> Env</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf env </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [util]</span></span>\n<span class="line"></span></code></pre></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> Info</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf info</span></span>\n<span class="line"></span></code></pre></div><p>A helper command to print the OS, Shell and <code>asdf</code> debug information. Share this when making a bug report.</p><h2 id="reshim" tabindex="-1"><a class="header-anchor" href="#reshim" aria-hidden="true">#</a> Reshim</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf reshim </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"></span></code></pre></div>',10),v=r("This recreates the shims for the current version of a package. By default, shims are created by plugins during installation of a tool. Some tools like the "),f={href:"https://docs.npmjs.com/cli/",target:"_blank",rel:"noopener noreferrer"},y=r("npm CLI"),g=r(" allow global installation of executables, for example, installing "),k={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},x=r("Yarn"),E=r(" via "),H=n("code",null,"npm install -g yarn",-1),$=r(". Since this executable was not installed via the plugin lifecycle, no shim exists for it yet. "),D=n("code",null,"asdf reshim nodejs <version>",-1),O=r(" will force recalculation of shims for any new executables, like "),M=n("code",null,"yarn",-1),w=r(", for "),A=n("code",null,"<version>",-1),S=r(" of "),_=n("code",null,"nodejs",-1),R=r(" ."),j=c('<h2 id="shim-versions" tabindex="-1"><a class="header-anchor" href="#shim-versions" aria-hidden="true">#</a> Shim-versions</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf shim-versions </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>Lists the plugins and versions that provide shims for a command.</p>',3),I=r("As an example, "),q={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},B=r("Node.js"),T=r(" ships with two executables, "),z=n("code",null,"node",-1),G=r(" and "),L=n("code",null,"npm",-1),C=r(". When many versions of the tools are installed with "),P={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},Z=n("code",null,"asdf-nodejs",-1),U=r(),K=n("code",null,"shim-versions",-1),N=r(" can return:"),W=c('<div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">➜ asdf shim-versions node</span></span>\n<span class="line"><span style="color:#F8F8F2;">nodejs 14.8.0</span></span>\n<span class="line"><span style="color:#F8F8F2;">nodejs 14.17.3</span></span>\n<span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>\n<span class="line"></span></code></pre></div><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">➜ asdf shim-versions npm</span></span>\n<span class="line"><span style="color:#F8F8F2;">nodejs 14.8.0</span></span>\n<span class="line"><span style="color:#F8F8F2;">nodejs 14.17.3</span></span>\n<span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>\n<span class="line"></span></code></pre></div><h2 id="atualizar" tabindex="-1"><a class="header-anchor" href="#atualizar" aria-hidden="true">#</a> Atualizar</h2><p><code>asdf</code> has a built in command to update which relies on Git (our recommended installation method). If you installed using a different method you should follow the steps for that method:</p>',4),Y=n("thead",null,[n("tr",null,[n("th",null,"Method"),n("th",null,"Latest Stable Release"),n("th",null,[r("Latest commit on "),n("code",null,"master")])])],-1),J=n("tr",null,[n("td",null,"asdf (via Git)"),n("td",null,[n("code",null,"asdf update")]),n("td",null,[n("code",null,"asdf update --head")])],-1),Q=n("tr",null,[n("td",null,"Homebrew"),n("td",null,[n("code",null,"brew upgrade asdf")]),n("td",null,[n("code",null,"brew upgrade asdf --HEAD")])],-1),V=n("td",null,"Pacman",-1),X=r("Obter manualmente um novo "),ss=n("code",null,"PKGBUILD",-1),as=r(" e "),es=n("br",null,null,-1),ns=r(" reconstruir ou usar suas preferências de "),ls={href:"https://wiki.archlinux.org/index.php/AUR_helpers",target:"_blank",rel:"noopener noreferrer"},os=r("AUR"),rs=r("."),cs=n("td",null,null,-1),is=c('<h2 id="desinstalar" tabindex="-1"><a class="header-anchor" href="#desinstalar" aria-hidden="true">#</a> Desinstalar</h2><p>Para desinstalar <code>asdf</code> siga os passos:</p><details class="custom-container details"><summary>Bash &amp; Git</summary><ol><li>Em seu <code>~/.bashrc</code> remova as linhas do <code>asdf.sh</code> e seus complementos:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf ${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>Bash &amp; Git (macOS)</summary><ol><li>Em seu <code>~/.bash_profile</code> remova as linhas do <code>asdf.sh</code> e remova seus complementos:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf ${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details>',4),ds={class:"custom-container details"},ps=c('<summary>Bash &amp; Homebrew (macOS)</summary><p>Caso esteja usando <strong>macOs Catalina ou mais recente</strong>, por padrão o <em>shell</em> é <strong>ZSH</strong>. Se não achar alguma configuração em seu <code>~/.bash_profile</code> talvez esteja em <code>~/.zshrc</code> em cada caso siga as intruções do ZSH.</p><ol><li>Em seu <code>~/.bash_profile</code> remova as linhas do <code>asdf.sh</code> e remova seus complementos:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/libexec/asdf.sh</span></span>\n<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/etc/bash_completion.d/asdf.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',4),ts=r("?> Os complementos precisam "),us={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash",target:"_blank",rel:"noopener noreferrer"},ms=r("instruções de configuração do Homebrew"),hs=r(" e siga o guia de remoção."),Fs=c('<ol start="2"><li>Desinstale usando seu gerenciador de pacotes:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',4),bs=c('<details class="custom-container details"><summary>Bash &amp; Pacman</summary><ol><li>Em seu <code>~/.bashrc</code> remova as linhas do <code>asdf.sh</code> e seus complementos:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Desinstale usando seu gerenciador de pacotes:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf ${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>Fish &amp; Git</summary><ol><li>Em seu <code>~/.config/fish/config.fish</code> remova as linhas do <code>asdf.sh</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.fish</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>e remova os complementos de com esse comando:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions/asdf.fish</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf ${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>Fish &amp; Homebrew</summary><ol><li>Em seu <code>~/.config/fish/config.fish</code> remova as linhas do <code>asdf.fish</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;(brew --prefix asdf)&quot;</span><span style="color:#F8F8F2;">/libexec/asdf.fish</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Desinstale usando seu gerenciador de pacotes:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>Fish &amp; Pacman</summary><ol><li>Em seu <code>~/.config/fish/config.fish</code> remova as linhas do <code>asdf.fish</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.fish</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Desinstale usando seu gerenciador de pacotes:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf ${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>ZSH &amp; Git</summary><ol><li>Em seu <code>~/.zshrc</code> remova as linhas do <code>asdf.sh</code> e seus complementos:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"><span style="color:#88846F;"># ...</span></span>\n<span class="line"><span style="color:#F8F8F2;">fpath=(${ASDF_DIR}/completions $fpath)</span></span>\n<span class="line"><span style="color:#F8F8F2;">autoload -Uz compinit</span></span>\n<span class="line"><span style="color:#F8F8F2;">compinit</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>Ou</strong> use ZSH Framework plugin.</p><ol start="2"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf ${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>ZSH &amp; Homebrew</summary><ol><li>Em seu <code>~/.zshrc</code> remova as linhas do <code>asdf.sh</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/libexec/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Desinstale usando seu gerenciador de pacotes:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>ZSH &amp; Pacman</summary><ol><li>Em seu <code>~/.zshrc</code> remova as linhas do <code>asdf.sh</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Desinstale usando seu gerenciador de pacotes:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Remova o diretório <code>$HOME/.asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf ${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>Execute o comando para remover todos os arquivos de configurações do <code>asdf</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><p>Tudo pronto! 🎉</p>',8);i.render=function(r,c){const i=s("RouterLink"),vs=s("OutboundLink");return a(),e(o,null,[d,p,t,u,n("p",null,[m,n(i,{to:"/pt-br/guide/getting-started.html"},{default:l((()=>[h])),_:1}),F]),b,n("p",null,[v,n("a",f,[y,n(vs)]),g,n("a",k,[x,n(vs)]),E,H,$,D,O,M,w,A,S,_,R]),j,n("p",null,[I,n("a",q,[B,n(vs)]),T,z,G,L,C,n("a",P,[Z,n(vs)]),U,K,N]),W,n("table",null,[Y,n("tbody",null,[J,Q,n("tr",null,[V,n("td",null,[X,ss,as,es,ns,n("a",ls,[os,n(vs)]),rs]),cs])])]),is,n("details",ds,[ps,n("p",null,[ts,n("a",us,[ms,n(vs)]),hs]),Fs]),bs],64)};export default i;
