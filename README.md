# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)

- @echo off
setlocal enabledelayedexpansion

:: Caminhos das pastas
set COLLECTIONS_DIR=.\collections
set ENVIRONMENTS_DIR=.\environments
set REPORTS_DIR=.\reports

:: Verificar se a pasta de reports existe
if not exist "%REPORTS_DIR%" (
    mkdir "%REPORTS_DIR%"
    echo Nova pasta criada com sucesso.
)

echo A pasta "%REPORTS_DIR%" foi cria. Deseja apagar a nova pasta "%REPORTS_DIR%"? (S/N)
set /p DECISAO=Escolha: 

if /i "%DECISAO%"=="S" (
    rmdir /s /q "%REPORTS_DIR%"
    echo Pasta excluída com sucesso.
    mkdir "%REPORTS_DIR%"
    echo Nova pasta criada com sucesso.
) else (
    echo Manter a pasta atual e seu conteudo.
)


echo ==========================================
echo Escolha o ambiente para testar:

set /p ENV_CHOICE="Escolha numero de acordo com o ambiente QA=1 ou UAT=2 :"

:: Verifica a escolha do usuário
if "%ENV_CHOICE%"=="1" (
    set ENV_FILE=%ENVIRONMENTS_DIR%\qa.json
    set ENV_NAME=QA
) else if "%ENV_CHOICE%"=="2" (
    set ENV_FILE=%ENVIRONMENTS_DIR%\uat.json
    set ENV_NAME=UAT
) else (
    echo Escolha inválida. Saindo...
    exit /b
)

echo ==========================================
echo  Executando testes do Postman com Newman no ambiente %ENV_NAME%
echo ==========================================

:: Loop pelas collections
for %%C in (%COLLECTIONS_DIR%\*.json) do (
    echo Rodando Collection: %%~nC no ambiente %ENV_NAME%
    newman run "%%C" ^
        -e "%ENV_FILE%" ^
        --reporters "cli,htmlextra" ^
        --reporter-htmlextra-export "%REPORTS_DIR%\report_%%~nC_%ENV_NAME%.html"
)

echo ==========================================
echo  Testes finalizados! Relatórios em %REPORTS_DIR%
echo ==========================================
