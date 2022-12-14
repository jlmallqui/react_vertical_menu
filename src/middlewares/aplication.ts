import { APPS } from './constantes'


export const getApp = () => {

    const mainWeb = APPS.find(app => app.main == true)
    const hostname = window.location.hostname;


    const subDomain = getSubDomain(hostname)
    console.log('hostname', hostname, '   subDomain ', subDomain);


    const appActive = APPS.find(app => app.subdomain == subDomain)
    if (!appActive) return mainWeb?.application;
    return appActive.application;
}


export const getSubDomain = (host: String) => {
    const url = 'localhost'
    const hostParts = host.split(".")
    let subDomain = ''
    let hostPosition = -1

    const isLocalHost = hostParts.slice(hostPosition)[0] === url
    if (isLocalHost) {
        hostPosition = hostPosition - 1
        subDomain = hostParts.slice(hostPosition)[0];
        if (subDomain == 'www' || subDomain == url) {
            subDomain = ''
        }
    } else {
        hostPosition = hostPosition - 2
        subDomain = hostParts.slice(hostPosition)[0];
        if (subDomain == 'www' || subDomain == url) {
            subDomain = ''
        }
    }
    return subDomain;
}