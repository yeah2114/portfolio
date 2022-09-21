import 'babel-polyfill';
import common from './common.js';
import index from './index.js';
import about from './about.js';
import project from './project.js';

function init(){

    common();

    var pageUrl = location.pathname,
        pageS = pageUrl.lastIndexOf('/')+1,
        pageE = pageUrl.lastIndexOf('.'),
        pageName = pageUrl.slice(pageS,pageE);

    switch(pageName){
        case 'index': index(); break;
        case 'about': about(); break;
        case 'project': project(); break;
    }
   
}

window.addEventListener('DOMContentLoaded',init);