Arquivos destinados a estudos e testes com API's utilizando o NodeJS

# INICIALIZANDO UM PROJETO

### Inicializar o git
git init 

### Adicionar todos arquivos não rastreados
git add .

### Status
git status

### Commit LOCAL
git commit -m "mensagem"

### Vinculando com o repositório remoto, buscar link com o SSH
git remote add origin git@github.com:rdmuller/TestesApiNode.git

### Criando branch main (é necessário porque por padrão a branch é a master)
git branch -M main

### Commit no GitHub
git push -u origin main
caso já tenha enviado algo, o "git push" é suficiente

### Fazendo update
git pull

# VINCULANDO PC
Executar no git bash
ssh-keygen -t rsa -b 4096 -C "rdm.ronaldmuller@gmail.com"

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key

iniciar o ssh agent
eval `ssh-agent -s`
ssh-add ~/.ssh/id_rsa

### Baixando um repositório
git clone git@github.com:rdmuller/TestesApiNode.git
