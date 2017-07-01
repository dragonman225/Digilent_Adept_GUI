# Digilent Adept GUI for Linux

A small Electron app that helps people program Digilent FPGA board with simple clicks.
## Check Before Start :
Make sure Digilent Adept2 runtime and Digilent Adept2 utilities are installed.

Check by typing djtgcfg in terminal.
## Quick Start (for Nexys3) :

Clone the repo.
```
git clone https://github.com/dragonman225/Digilent_Adept_GUI
```
Install dependencies.
```
npm install
```
Set permission for launch script.
```
chmod +x run.sh
```
Run the App.
```
./run.sh
```
## For Device other than Nexys3:
* Edit window.js, replace all 'Nexys3' strings with your device name.
* Edit index.html, replace all 'Nexys3' strings with your device name.
* Follow Quick Start !