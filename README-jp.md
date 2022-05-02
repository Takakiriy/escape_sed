# escape_sed
<!-- Character Encoding: "WHITE SQUARE" U+25A1 is □. -->

`escape_sed` コマンドは、sed コマンドに指定するパラメーターを表示します。

<!-- TOC depthFrom:1 -->

- [escape_sed](#escape_sed)
  - [使い方](#使い方)
  - [インストール](#インストール)
    - [Windows の場合](#windows-の場合)
    - [mac の場合](#mac-の場合)
    - [CentOS 7 の場合](#centos-7-の場合)
  - [（開発者用） 開発環境の構築手順](#開発者用-開発環境の構築手順)
    - [Windows の場合](#windows-の場合-1)
    - [mac の場合](#mac-の場合-1)
  - [（開発者用） テスト](#開発者用-テスト)
    - [Jest を使うテスト](#jest-を使うテスト)
    - [Jest を使わないテスト](#jest-を使わないテスト)

<!-- /TOC -->


## 使い方

escape_sed をインストールしてから、シェルで実行します。

    $ escape_sed
    lineNum> 12
    before> ab
    after > cd

    # line: 12
    # before: ab
    # after:  cd
    _c="$(sed "12 s/ab/cd/g"  "${file_path}" )";  echo "$_c" > "${file_path}";  unset _c


## インストール

escape_sed を使うには Node.js のインストールが必要です。

### Windows の場合

    Node.js をインストールします:
        - https://nodejs.org/ja/download/ >> Windows Installer (.msi) >> 64-bit
        - ダウンロードしたファイル（例：node-v14.16.0-x64.exe）を開きます
        - インストール オプションはデフォルトを使用

    社内など、プロキシがある LAN に Windows がある場合:
        Windows スタート >> PowerShell（と入力）:
            - npm config -g set proxy "http://___.___.___.___:____"
            - npm config -g set https-proxy "http://___.___.___.___:____"

    escape_sed をダウンロードして展開し、escape_sed が使う Node.js パッケージをインストールします:
        Windows スタート >> PowerShell（と入力）:
            cd  "${env:USERPROFILE}\Downloads"
            Invoke-WebRequest  https://github.com/Takakiriy/escape_sed/archive/refs/heads/master.zip -OutFile "escape_sed.zip"
            rm -r -fo  "escape_sed-master"  #// 初めてインストールするときは実行不要です
            Expand-Archive -Path "escape_sed.zip"  -DestinationPath "."
            cd  "escape_sed-master"

            npm install --only=production

    PowerShell を使う場合:
        PowerShell の PATH が通ったフォルダーに escape_sed を起動する PS1 スクリプト ファイル を作ります:
            Windows スタート >> PowerShell（と入力） :
                ${script} = "${env:USERPROFILE}\AppData\Local\Microsoft\WindowsApps\escape_sed.ps1"
                cd  ${env:USERPROFILE}\Downloads\escape_sed-master
                ${current_folder} = Convert-Path "."
                ${escape_sed_folder} = "${env:USERPROFILE}\Documents\escape_sed"

                echo  "`${env:NODE_PATH} = `"${current_folder}\node_modules`"" > ${script}
                echo  "node  ${current_folder}\build\escape_sed.js `$PsBoundParameters.Values `$args" >> ${script}

                Set-ExecutionPolicy  RemoteSigned  -Scope CurrentUser  #// スクリプトを実行できるようにします

    Git bash を使う場合:
        Git for Windows をインストールします:
            - https://git-scm.com/ >> Downloads >> Windows
            - ダウンロードしたファイル（例：Git-2.31.1-64-bit.exe）を開く
            - Next を8回押す
            - Configuring the line ending conversions: Checkout as-is, commit as-is
            - 他のインストール オプションはデフォルトを使用
        PATH が通ったフォルダーに escape_sed を起動する bash スクリプト ファイル を作ります:
            フォルダーを右クリック >> Git bash :
                script="${HOME}/bin/escape_sed"
                cd  ${HOME}/Downloads/escape_sed-master
                current_folder="$(pwd)"
                mkdir -p "${HOME}/bin"

                echo  "export  NODE_PATH=\"${HOME}/AppData/Roaming/npm/node_modules\"" > ${script}
                echo  "node  ${current_folder}/build/escape_sed.js \"\$@\"" >> ${script}

    escape_sed が使えることを確認します:
        PowerShell または Git bash を新しく開いて:
            escape_sed --version

### mac の場合

    Node.js をインストールします:
        - https://nodejs.org/ja/download/ >> macOS Installer (.pkg) >> 64-bit
        - ダウンロードしたファイル（例：node-v14.16.0.pkg）を開きます
        - インストール オプションはデフォルトを使用

    escape_sed をダウンロードして展開し、escape_sed が使う Node.js パッケージをインストールします:
        #// Launchpad >> Terminal
        cd  "${HOME}/Downloads"
        setopt interactivecomments
            #// enables comment symbol (#)
        curl -o "escape_sed.zip" -kL https://github.com/Takakiriy/escape_sed/archive/refs/heads/master.zip 
        rm -rf  "escape_sed-master"  #// 初めてインストールするときは実行不要です
        unzip -o escape_sed.zip
        cd  "escape_sed-master"

        npm install --only=production

    PATH が通ったフォルダーに escape_sed を起動する スクリプト ファイル を作ります:
        script="$HOME/bin/escape_sed"
        cd "${HOME}/Downloads/escape_sed-master"  #// Zip ファイルを展開したフォルダー
        mkdir -p "${HOME}/bin"
        rm -f  "${script}"  #// 初めてインストールするときは実行不要です
        echo  "export  NODE_PATH=\"$(pwd)/node_modules\"" >> "${script}"
        echo  "node  $(pwd)/build/escape_sed.js \"\$@\"" >> "${script}"
        chmod +x  "${script}"
        unset script

    escape_sed が使えることを確認します:
        escape_sed --version


### CentOS 7 の場合

    Node.js をインストールします:
        - https://nodejs.org/ja/download/ >> (click 64-bit at the right of) Linux Binaries (x64) >>
            Copy the link
        #// Case of version 14.17.6
        - cd ${HOME}
        - curl -L -O https://nodejs.org/dist/v14.17.6/node-v14.17.6-linux-x64.tar.xz
        - tar -Jxvf  node-v14.17.6-linux-x64.tar.xz
        - rm  node-v14.17.6-linux-x64.tar.xz
        - sudo mv  node-v14.17.6-linux-x64  /opt
        - cd /opt
        - sudo ln -s  node-v14.17.6-linux-x64  node  #// 新旧バージョンと共存し、主に使わないときは不要
        - cd ${HOME}
        - PATH=/opt/node/bin:$PATH
        - node --version
        - echo 'export PATH="/opt/node/bin:$PATH"' >> ~/.bashrc

    社内など、プロキシがある LAN にある場合:
        npm config -g set proxy "http://___.___.___.___:____"
        npm config -g set https-proxy "http://___.___.___.___:____"

    escape_sed をダウンロードして展開し、escape_sed が使う Node.js パッケージをインストールします:
        sudo yum install unzip  #// unzip が使えないとき
        mkdir -p ~/Downloads
        cd  ~/Downloads
        curl -L -O https://github.com/Takakiriy/escape_sed/archive/refs/heads/master.zip
        rm -f  "escape_sed.zip"  #// 初めてインストールするときは実行不要です
        mv  "master.zip"  "escape_sed.zip"
        rm -rf  "escape_sed-master"  #// 初めてインストールするときは実行不要です
        unzip -o  "escape_sed.zip"
        cd  "escape_sed-master"

        npm install --only=production

    PATH が通ったフォルダーに escape_sed を起動する bash スクリプト ファイル を作ります:
        script="${HOME}/bin/escape_sed"
        cd  "${HOME}/Downloads/escape_sed-master"  #// Zip ファイルを展開したフォルダー
        mkdir -p "${HOME}/bin"
        rm -f  "${script}"  #// 初めてインストールするときは実行不要です

        echo  "export  NODE_PATH=\"$(pwd)/node_modules\"" >> "${script}"
        echo  "node  $(pwd)/build/escape_sed.js \"\$@\"" >> ${script}
        chmod +x  "${script}"
        unset script

    escape_sed が使えることを確認します:
        escape_sed --version


## （開発者用） 開発環境の構築手順

### Windows の場合

Node.js をインストールします:

    - https://nodejs.org/ja/download/ >> Windows Installer (.msi) >> 64-bit
    - ダウンロードしたファイル（例：node-v14.16.0-x64.exe）を開きます
    - インストール オプションはデフォルトを使用

Git for Windows をインストールします:

    - https://git-scm.com/ >> Downloads >> Windows
    - ダウンロードしたファイル（例：Git-2.31.1-64-bit.exe）を開く
    - Next を8回押す
    - Configuring the line ending conversions: Checkout as-is, commit as-is
    - 他のインストール オプションはデフォルトを使用

Visual Studio Code をインストールします:

    - https://code.visualstudio.com/
    - ダウンロードしたファイル（例：VSCodeUserSetup-x64-1.54.3.exe）を開きます
    - インストール オプションはデフォルトを使用
    - VSCode >> Terminal >> New Terminal
    - 開いたシェルの右上に 1:powershell が表示されていたら、そこをクリックして Select Default Shell >> Git bash
    - （推奨）Visual Studio Code をタスクバーにピン止めします:
    - （推奨）Ctrl + S キーを押したときに全てのファイルを保存するように設定します: |
        File >> Preferences >> Keyboard Shortcuts >> save all （と入力） >>
            File: Save All （をダブルクリック） >> Ctrl + S キー >> Enter キー
    - Visual Studio Code を閉じます

Node.js パッケージをインストールします:
    - シェル >> code __ThisFolder__
    - VSCode >> Terminal >> New Terminal
    - npm ci

F5 キーを押すと、最初のテストが動きます:


### mac の場合

Node.js をインストールします:

    - https://nodejs.org/ja/download/ >> macOS Installer (.pkg)
    - ダウンロードしたファイル（例：node-v14.16.0.pkg）を開きます
    - インストール オプションはデフォルトを使用

Visual Studio Code をインストールします:

    - https://code.visualstudio.com/
    - ダウンロードしたファイル（例：Visual Studio Code.app）をダブルクリックします
    - （推奨）Visual Studio Code を Dock に移動します:
    - （推奨）Ctrl + S キーを押したときに全てのファイルを保存するように設定します: |
        Code >> Preferences >> Keyboard Shortcuts >> save all （と入力） >>
            File: Save All （をダブルクリック） >> Command + S キー >> Enter キー
    - Visual Studio Code を閉じます

`cmd menu.command` ファイルに実行権限を追加します:

    - `bin/chmod+x.command.zip` ファイルをダブルクリックします
    - 解凍してできた `chmod+x.command` ファイルを右クリック >> 開く >> 開く
    - `cmd menu.command` ファイルを開いたウィンドウにドラッグ＆ドロップして、Enter キーを押し、ウィンドウを閉じます
    - `cmd menu.command` ファイルを右クリック >> 開く >> 開く
    - 開いたウィンドウを閉じます

Node.js パッケージをインストールします:
    - シェル >> code __ThisFolder__
    - VSCode >> Terminal >> New Terminal
    - npm ci

fn + F5 キーを押すと、最初のテストが動きます:


## （開発者用） テスト

Jest を使うテストと Jest を使わないテストがあります。
ソース ファイルの行番号の左をクリックして、ブレークポイントを設定できます。

### Jest を使うテスト

- Visual Studio Code >> Terminal >> New Terminal >>（＋の左の 1:__shell__）>> Create JavaScript Debug Terminal
- npm test
- テストを再起動します:
    - Continue ボタン:  #// 最後まで実行します
    - npm test が動いている Terminal で f キーを押します
- （終了するときは）Terminal タブ（下）>> ゴミ箱アイコン（右）

### Jest を使わないテスト

- Visual Studio Code >> F5 キー
