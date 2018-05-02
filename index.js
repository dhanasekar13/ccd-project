const {
    app,
    BrowserWindow,
    Menu,
    shell,
} = require('electron')

const Menu1 = Menu;
const url = require('url')
const path = require('path')
const {
    ipcMain
} = require('electron')
const $ = require('jquery')

let win,win1

function createWindow() {
    win = new BrowserWindow({
        fullscreen: true,
        icon: path.join(__dirname, '../../assest/a.png')
    })
    win.loadURL(url.format({
        pathname: path.join(__dirname, './src/enquiry/index.html'),
        protocol: 'file:',
        slashes: true
    }))

process.env.username='dhanasekar'

    //this will set the menu for the particular window
    const mainWindowMenuBar = Menu.buildFromTemplate(baseMenuTemplate);
    win.setMenu(mainWindowMenuBar)
    win.on('closed', () => {
        win = app.quit();
    })
}

const menuTemplate =[{
  label:'form1',
  click(){
    win1.loadURL(url.format({
        pathname: path.join(__dirname, "./src/enquiry/form.html"),
        protocol: 'file:',
        slashes: true
    }))
  }
},
{
  label:'form2',
  click(){
    win1.loadURL(url.format({
      pathname:path.join(__dirname,"./src/enquiry/form1.html"),
      protocol:'file:',
      slashes:true
    }))
  }
},
{
    label: 'Developer Tools',
    submenu: [{
        label: 'Print',
        click() {
            var window = BrowserWindow.getFocusedWindow();
            window.webContents.print({
                silent: false
            });
        }
    },
        {
            label: 'Toggle DevTools',
            accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
            click(item, focusedWindow) {
                focusedWindow.toggleDevTools();
            }
        }
    ]
}
]

const baseMenuTemplate = [{
        label: '|||-------------------------ENQUIRY-------------------------|||',
        click() {
            win.loadURL(url.format({
                pathname: path.join(__dirname, "./src/enquiry/index.html"),
                protocol: 'file:',
                slashes: true
            }))
        }
    }, {
              label: '|||----------------------------QUOTATION----------------------|||',
        click() {
            win.loadURL(url.format({
                pathname: path.join(__dirname, './src/quotation/index.html'),
                protocol: 'file:',
                slashes: true
            }))
        }
    },
    {
        label: '|||------------------------PURCHASE ORDER----------------------|||',
        click() {
          win.loadURL(url.format({
              pathname: path.join(__dirname, './src/po/index.html'),
              protocol: 'file:',
              slashes: true
          }))
        }
    },
    {
    label:'|||---------------------Exit---------------------|||',
    click(){
      app.quit()
    }
  }, {
      label: 'Developer Tools',
      submenu: [{
          label: 'Print',
          click() {
              var window = BrowserWindow.getFocusedWindow();
              window.webContents.print({
                  silent: false
              });
          }
      },
          {
              label: 'Toggle DevTools',
              accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
              click(item, focusedWindow) {
                  focusedWindow.toggleDevTools();
              }
          }
      ]
  }
];

ipcMain.on('login', (event, arg) => {
    global.product = arg;
  console.log(arg)
  win1 = new BrowserWindow({
      fullscreen: false,
      icon: path.join(__dirname, '../../assest/a.png')
  })
  win1.loadURL(url.format({
      pathname: path.join(__dirname, './src/enquiry/form.html'),
      protocol: 'file:',
      slashes: true,
  }))
  const WindowMenuBar = Menu.buildFromTemplate(menuTemplate);
  win1.setMenu(WindowMenuBar)

  win1.on('closed', () => {
      win1 ='' ;
  })

})
app.on('ready', createWindow)
