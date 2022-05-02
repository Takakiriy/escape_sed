# escape_sed

The `escape_sed` command displays the parameters you specify for the sed command.

[日本語 README](./README-jp.md)

<!-- TOC depthFrom:1 -->

- [escape_sed](#escape_sed)
  - [How to use](#how-to-use)
  - [Install](#install)
    - [For Windows](#for-windows)
    - [For mac](#for-mac)
    - [For CentOS 7](#for-centos-7)
  - [(for developers) How to build the development environment](#for-developers-how-to-build-the-development-environment)
    - [For Windows](#for-windows-1)
    - [For mac](#for-mac-1)
  - [(for developers) Test](#for-developers-test)
    - [Test using Jest](#test-using-jest)
    - [Test without Jest](#test-without-jest)

<!-- /TOC -->


## How to use

Install escape_sed and then run it in your shell.

    $ escape_sed
    lineNum> 12
    before> ab
    after > cd

    # line: 12
    # before: ab
    # after:  cd
    _c="$(sed "12 s/ab/cd/g"  "${file_path}" )";  echo "$_c" > "${file_path}";  unset _c


## Install

To use escape_sed, you must install Node.js.

### For Windows

    Install Node.js:
        - https://nodejs.org/ja/download/ >> Windows Installer (.msi) >> 64-bit
        - Open the downloaded file (e.g. node-v14.16.0-x64.exe)
        - Installation options are defaults

    If there is your Windows in the LAN with the proxy in the company and so on:
        Windows Start >> (Input) PowerShell :
            - npm config -g set proxy "http://___.___.___.___:____"
            - npm config -g set https-proxy "http://___.___.___.___:____"

    Download and expand escape_sed and install Node.js packages used by escape_sed:
        Windows Start >> (Input) PowerShell :
            cd  "${env:USERPROFILE}\Downloads"
            Invoke-WebRequest  https://github.com/Takakiriy/escape_sed/archive/refs/heads/master.zip -OutFile "escape_sed.zip"
            rm -r -fo  "escape_sed-master"  #// No need to run when installing for the first time
            Expand-Archive -Path "escape_sed.zip"  -DestinationPath "."
            cd  "escape_sed-master"

            npm install --only=production

    If you use PowerShell:
        Create a PS1 script file that launches escape_sed into the folder where PATH of PowerShell:
            Windows Start >> (Input) PowerShell :
                ${script} = "${env:USERPROFILE}\AppData\Local\Microsoft\WindowsApps\escape_sed.ps1"
                cd  ${env:USERPROFILE}\Downloads\escape_sed-master
                ${current_folder} = Convert-Path "."
                ${escape_sed_folder} = "${env:USERPROFILE}\Documents\escape_sed"

                echo  "`${env:NODE_PATH} = `"${current_folder}\node_modules`"" > ${script}
                echo  "node  ${current_folder}\build\escape_sed.js `$PsBoundParameters.Values `$args" >> ${script}

                Set-ExecutionPolicy  RemoteSigned  -Scope CurrentUser  #// Make the script run

    If you use Git bash:
        Install Git for Windows:
            - https://git-scm.com/ >> Downloads >> Windows
            - Open the downloaded file (e.g. Git-2.31.1-64-bit.exe)
            - Press Next button 8 times
            - Configuring the line ending conversions: Checkout as-is, commit as-is
            - Other installation options are defaults
        Create a bash script file that launches escape_sed into the folder where PATH passed:
            Right click at any folder >> Git bash :
                script="${HOME}/bin/escape_sed"
                cd  ${HOME}/Downloads/escape_sed-master
                current_folder="$(pwd)"
                mkdir -p "${HOME}/bin"

                echo  "export  NODE_PATH=\"${HOME}/AppData/Roaming/npm/node_modules\"" > ${script}
                echo  "node  ${current_folder}/build/escape_sed.js \"\$@\"" >> ${script}

    Check to use escape_sed command:
        Open new PowerShell or new Git bash:
            escape_sed --version

### For mac

    Install Node.js:
        - https://nodejs.org/ja/download/ >> macOS Installer (.pkg) >> 64-bit
        - Open the downloaded file (e.g. node-v14.16.0.pkg)
        - Installation options are defaults

    Download and expand escape_sed and install Node.js packages used by escape_sed:
        #// Launchpad >> Terminal
        cd  "${HOME}/Downloads"
        setopt interactivecomments
            #// enables comment symbol (#)
        curl -o "escape_sed.zip" -kL https://github.com/Takakiriy/escape_sed/archive/refs/heads/master.zip 
        rm -rf  "escape_sed-master"  #// No need to run when installing for the first time
        unzip -o escape_sed.zip
        cd  "escape_sed-master"

        npm install --only=production

    Make the script file in the PATH folder to start escape_sed:
        script="$HOME/bin/escape_sed"
        cd "${HOME}/Downloads/escape_sed-master"  #// The folder extracted from the Zip file
        mkdir -p "${HOME}/bin"
        rm -f  "${script}"  #// No need to run when installing for the first time
        echo  "export  NODE_PATH=\"$(pwd)/node_modules\"" >> "${script}"
        echo  "node  $(pwd)/build/escape_sed.js \"\$@\"" >> "${script}"
        chmod +x  "${script}"
        unset script

    Check to use escape_sed command:
        escape_sed --version


### For CentOS 7

    Install Node.js:
        - https://nodejs.org/ja/download/ >> (click 64-bit at the right of) Linux Binaries (x64) >>
            Copy the link
        #// Case of version 14.17.6
        - cd ${HOME}
        - curl -L -O https://nodejs.org/dist/v14.17.6/node-v14.17.6-linux-x64.tar.xz
        - tar -Jxvf  node-v14.17.6-linux-x64.tar.xz
        - rm  node-v14.17.6-linux-x64.tar.xz
        - sudo mv  node-v14.17.6-linux-x64  /opt
        - cd /opt
        - sudo ln -s  node-v14.17.6-linux-x64  node  #// You can skip if you use old and new versions and not use primarily
        - cd ${HOME}
        - PATH=/opt/node/bin:$PATH
        - node --version
        - echo 'export PATH="/opt/node/bin:$PATH"' >> ~/.bashrc

    If there is your machine in the LAN with the proxy in the company and so on:
        npm config -g set proxy "http://___.___.___.___:____"
        npm config -g set https-proxy "http://___.___.___.___:____"

    Download and expand escape_sed and install Node.js packages used by escape_sed:
        sudo yum install unzip  #// unzip が使えないとき
        mkdir -p ~/Downloads
        cd  ~/Downloads
        curl -L -O https://github.com/Takakiriy/escape_sed/archive/refs/heads/master.zip
        rm -f  "escape_sed.zip"  #// No need to run when installing for the first time
        mv  "master.zip"  "escape_sed.zip"
        rm -rf  "escape_sed-master"  #// No need to run when installing for the first time
        unzip -o  "escape_sed.zip"
        cd  "escape_sed-master"

    Create a bash script file that launches escape_sed into the folder where PATH passed:
        script="${HOME}/bin/escape_sed"
        cd  "${HOME}/Downloads/escape_sed-master"  #// The folder extracted from the Zip file
        mkdir -p "${HOME}/bin"
        rm -f  "${script}"  #// No need to run when installing for the first time

        echo  "export  NODE_PATH=\"$(pwd)/node_modules\"" >> "${script}"
        echo  "node  $(pwd)/build/escape_sed.js \"\$@\"" >> ${script}
        chmod +x  "${script}"
        unset script

    Check to use escape_sed command:
        escape_sed --version


## (for developers) How to build the development environment

### For Windows

Install Node.js:

    - https://nodejs.org/en/download/ >> Windows Installer (.msi) >> 64-bit
    - Open the downloaded file (e.g. node-v14.16.0-x64.exe)
    - Installation options are defaults

Install Git for Windows:

    - https://git-scm.com/ >> Downloads >> Windows
    - Open the downloaded file (e.g. Git-2.31.1-64-bit.exe)
    - Press Next button 8 times
    - Configuring the line ending conversions: Checkout as-is, commit as-is
    - Other installation options are defaults

Install Visual Studio Code:

    - https://code.visualstudio.com/
    - Open the downloaded file (e.g. VSCodeUserSetup-x64-1.54.3.exe)
    - Installation options are defaults
    - VSCode >> Terminal >> New Terminal
    - If you see powershell in the top right corner of the open shell, click there and 
        [ Select Default Shell >> Git bash ]
    - (recommend) Pin Visual Studio Code to the taskbar
    - (recommend) Set to save all files when Ctrl+S is pressed: |
        File >> Preferences >> Keyboard Shortcuts >> (input) save all >>
            (double click) File: Save All >> Ctrl + S key >> Enter key
    - Close Visual Studio Code

Double click `cmd menu.bat` and select `1. open_VisualStudioCode`:

To run the first test, press F5 key:


### For mac

Install Node.js:

    - https://nodejs.org/en/download/ >> macOS Installer (.pkg)
    - Open the downloaded file (e.g. node-v14.16.0.pkg)
    - Installation options are defaults

Install Visual Studio Code:

    - https://code.visualstudio.com/
    - Open the downloaded file (e.g. Visual Studio Code.app)
    - (recommend) Pin Visual Studio Code to the taskbar
    - (recommend) Set to save all files when Ctrl+S is pressed: |
        File >> Preferences >> Keyboard Shortcuts >> (input) save all >>
            (double click) File: Save All >> Ctrl + S key >> Enter key
    - Close Visual Studio Code

Add `cmd menu.command` file executable permission:

    - Double click `bin/chmod+x.command.zip` file
    - Right click at the expanded `chmod+x.command` file >> Open >> Open
    - Drag and drop `cmd menu.command` file to the opened window, push Enter key and close the window
    - Right click at `cmd menu.command` file >> Open >> Open
    - Close the opened window

Double click `cmd menu.command` file and select `1. open_VisualStudioCode`:

To run the first test, press fn + F5 key:


## (for developers) Test

There are the test using Jest and the test without Jest.
You can set the break point, click at the left of line number of the source file.

### Test using Jest

- Visual Studio Code >> Terminal >> New Terminal >> (1:__shell__ at the left of +) >> Create JavaScript Debug Terminal
- npm test
- Restart the test:
    - Continue button:  #// Run to the end of program
    - Press `f` key in the terminal running `npm test`
- (When you finish,) Terminal tab (bottom) >> Recycle box icon (right)

### Test without Jest

- Visual Studio Code >> F5 key
