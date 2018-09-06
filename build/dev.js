
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const electron = require('electron')
const path = require('path')
const { spawn } = require('child_process')
const webpackHotMiddleware = require('webpack-hot-middleware')

let electronProcess = null
let manualRestart = false
let hotMiddleware

function startRenderer() {
    return new Promise((resolve, reject) => {
        config.entry.app = [path.join(__dirname, 'dev-client')].concat(config.entry.app)
        config.mode = 'development'
        const compiler = webpack(config)
        hotMiddleware = webpackHotMiddleware(compiler, {
            log: false,
            heartbeat: 2500
        })
        console.log(config.entry);
        compiler.hooks.compilation.tap('compilation', compilation => {
            compilation.hooks.htmlWebpackPluginAfterEmit.tapAsync('html-webpack-plugin-after-emit', (data, cb) => {
                cb()
            })
        })

        compiler.hooks.done.tap('done', stats => {
            hotMiddleware.publish({ action: 'reload' })
        })

        const server = new WebpackDevServer(
            compiler,
            {
                clientLogLevel: 'error',
                quiet: true,
                before(app, ctx) {
                    app.use(hotMiddleware)
                    ctx.middleware.waitUntilValid(() => {
                        resolve()
                    })
                }
            }
        )

        server.listen(6767, 'localhost', err => {
        });
    })
}

function startElectron() {
    electronProcess = spawn(electron, ['--inspect=5858', path.join(__dirname, '../main.js')])

    electronProcess.stdout.on('data', data => {
    })
    electronProcess.stderr.on('data', data => {
    })

    electronProcess.on('close', () => {
        if (!manualRestart) process.exit()
    })
}

function init() {

    Promise.all([startRenderer()])
        .then(() => {
            startElectron()
        })
        .catch(err => {
            console.error(err)
        })
}

init()