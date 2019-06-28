import { Constants } from "expo";
const { manifest } = Constants;
const api = manifest.packagerOpts.dev
    ? 'http://' + manifest.debuggerHost.split(':').shift().concat(':3000')
    : 'productionurl.com'

export default {
    server: {
        url: api,
        address: '10.0.2.2', // Localhost when running using emulator.
        // address: '127.0.0.1', // Localhost when runing using adb.
        port: 3000,
    },
}