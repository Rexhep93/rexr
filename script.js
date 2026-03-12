/* ═══════════════════════════════════════════════════════════════
   Streamgids — Enhanced Edition v1.4.0
   ═══════════════════════════════════════════════════════════════ */

/* ── Haptic feedback helper ── */
function haptic(style){
  try{
    if(window.navigator&&window.navigator.vibrate){
      if(style==='light')window.navigator.vibrate(10);
      else if(style==='medium')window.navigator.vibrate(20);
      else if(style==='heavy')window.navigator.vibrate(30);
      else window.navigator.vibrate(10);
    }
  }catch(e){}
}

/* ── Dynamic theme-color meta tag ── */
function updateMetaThemeColor(){
  var isDark=document.documentElement.getAttribute('data-theme')==='dark';
  var meta=document.getElementById('metaThemeColor');
  if(!meta){meta=document.querySelector('meta[name="theme-color"]');}
  if(meta)meta.content=isDark?'#1a1a1a':'#f2f2f7';
}

/* ── Brand Logo (canvas) ── */
function drawHeaderLogo(){
  const container=document.getElementById('headerLogo');
  if(!container)return;
 
  const isDark=document.documentElement.getAttribute('data-theme')==='dark';
  const streamColor=isDark?'#f0f4f8':'#30af4c';
  const gidsColor=isDark?'#3bc45a':'#808080';
 
  /* If canvas, replace with a div; if already a div/span, reuse */
  let wrapper=container;
  if(container.tagName==='CANVAS'){
    wrapper=document.createElement('div');
    wrapper.id='headerLogo';
    wrapper.style.cssText=container.style.cssText;
    container.parentNode.replaceChild(wrapper,container);
  }
 
  wrapper.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-40 -1051 4672 1444" style="height:2.3em;width:auto;display:block;">
  <g transform="scale(1, -1)">
    <path d="M240 -9Q195 -9 149.5 2.0Q104 13 65 40Q55 47 51.0 56.5Q47 66 48.5 75.5Q50 85 56.5 92.0Q63 99 72.5 100.5Q82 102 94 96Q133 72 169.5 62.5Q206 53 242 53Q299 53 328.0 74.0Q357 95 357 131Q357 159 338.0 175.5Q319 192 278 201L187 221Q124 234 93.5 266.0Q63 298 63 349Q63 394 86.5 426.5Q110 459 153.0 477.0Q196 495 253 495Q297 495 336.5 483.5Q376 472 408 447Q418 440 421.5 430.5Q425 421 422.5 411.5Q420 402 413.0 395.5Q406 389 396.0 388.0Q386 387 375 394Q345 414 314.0 423.5Q283 433 253 433Q197 433 168.0 411.0Q139 389 139 353Q139 325 157.0 307.0Q175 289 213 281L304 262Q369 248 401.5 217.5Q434 187 434 135Q434 69 381.0 30.0Q328 -9 240 -9Z" fill="${streamColor}" transform="translate(0, 0)"/>
    <path d="M271 -9Q214 -9 175.5 11.5Q137 32 118.0 71.5Q99 111 99 168V423H32Q15 423 6.0 431.5Q-3 440 -3 455Q-3 470 6.0 478.0Q15 486 32 486H99V601Q99 621 110.0 631.5Q121 642 140 642Q159 642 169.5 631.5Q180 621 180 601V486H306Q323 486 332.0 478.0Q341 470 341 455Q341 440 332.0 431.5Q323 423 306 423H180V176Q180 119 204.0 89.5Q228 60 282 60Q301 60 314.5 64.0Q328 68 337 68Q346 69 352.0 62.0Q358 55 358 38Q358 26 353.5 16.0Q349 6 338 2Q326 -2 306.5 -5.5Q287 -9 271 -9Z" fill="${streamColor}" transform="translate(431, 0)"/>
    <path d="M117 -7Q97 -7 86.5 4.0Q76 15 76 35V452Q76 472 86.0 482.5Q96 493 115 493Q134 493 144.5 482.5Q155 472 155 452V371H145Q161 430 206.0 462.0Q251 494 317 496Q332 497 341.0 489.5Q350 482 351 464Q352 447 343.0 437.0Q334 427 315 425L299 423Q231 417 194.5 379.5Q158 342 158 277V35Q158 15 147.5 4.0Q137 -7 117 -7Z" fill="${streamColor}" transform="translate(731, 0)"/>
    <path d="M295 -9Q218 -9 162.5 21.5Q107 52 76.5 108.0Q46 164 46 242Q46 318 76.0 374.5Q106 431 158.5 463.0Q211 495 280 495Q329 495 368.0 478.5Q407 462 434.5 431.0Q462 400 476.5 356.0Q491 312 491 257Q491 241 482.0 233.5Q473 226 456 226H108V279H437L421 266Q421 320 405.0 357.5Q389 395 358.5 415.0Q328 435 282 435Q231 435 195.5 411.5Q160 388 142.0 346.5Q124 305 124 250V244Q124 152 168.5 104.0Q213 56 295 56Q329 56 362.5 65.0Q396 74 428 95Q442 104 453.5 103.5Q465 103 472.0 96.5Q479 90 481.5 80.5Q484 71 479.5 60.0Q475 49 462 41Q429 17 384.0 4.0Q339 -9 295 -9Z" fill="${streamColor}" transform="translate(1039, 0)"/>
    <path d="M229 -9Q179 -9 139.5 10.5Q100 30 77.0 64.0Q54 98 54 140Q54 194 81.5 225.0Q109 256 172.5 269.0Q236 282 346 282H391V229H347Q266 229 219.5 221.5Q173 214 154.5 196.0Q136 178 136 145Q136 104 164.5 78.0Q193 52 242 52Q282 52 312.5 71.0Q343 90 360.5 123.0Q378 156 378 199V313Q378 375 353.0 402.5Q328 430 271 430Q236 430 201.0 421.0Q166 412 127 392Q113 385 103.0 387.5Q93 390 87.0 398.0Q81 406 80.0 416.5Q79 427 84.5 437.0Q90 447 102 453Q146 475 189.0 485.0Q232 495 271 495Q334 495 375.0 474.5Q416 454 436.0 412.5Q456 371 456 306V35Q456 15 446.5 4.0Q437 -7 419 -7Q400 -7 390.0 4.0Q380 15 380 35V113H389Q381 75 358.5 48.0Q336 21 303.0 6.0Q270 -9 229 -9Z" fill="${streamColor}" transform="translate(1521, 0)"/>
    <path d="M118 -7Q98 -7 88.0 4.0Q78 15 78 35V452Q78 472 88.0 482.5Q98 493 117 493Q136 493 146.5 482.5Q157 472 157 452V364L146 378Q165 434 207.5 464.5Q250 495 309 495Q371 495 409.5 465.5Q448 436 461 374H446Q464 430 510.5 462.5Q557 495 619 495Q674 495 709.5 474.0Q745 453 763.0 410.5Q781 368 781 303V35Q781 15 770.5 4.0Q760 -7 740 -7Q721 -7 710.5 4.0Q700 15 700 35V299Q700 366 677.0 397.5Q654 429 599 429Q539 429 504.5 387.5Q470 346 470 275V35Q470 15 459.5 4.0Q449 -7 429 -7Q410 -7 399.5 4.0Q389 15 389 35V299Q389 366 365.5 397.5Q342 429 288 429Q228 429 193.5 387.5Q159 346 159 275V35Q159 -7 118 -7Z" fill="${streamColor}" transform="translate(2001, 0)"/>
    <path d="M294 -191Q240 -191 190.5 -182.0Q141 -173 103 -155Q80 -145 70.5 -129.0Q61 -113 62.5 -95.0Q64 -77 74.5 -63.0Q85 -49 101.0 -43.5Q117 -38 135 -46Q179 -66 216.5 -72.0Q254 -78 281 -78Q345 -78 377.0 -49.0Q409 -20 409 40V116H418Q403 70 356.0 41.0Q309 12 252 12Q186 12 137.0 42.5Q88 73 61.0 128.5Q34 184 34 257Q34 312 49.5 357.0Q65 402 93.5 434.0Q122 466 162.5 483.5Q203 501 252 501Q311 501 356.5 472.5Q402 444 417 398L407 366V423Q407 460 426.5 479.5Q446 499 482 499Q518 499 537.0 479.5Q556 460 556 423V57Q556 -66 488.5 -128.5Q421 -191 294 -191ZM297 125Q331 125 355.5 141.0Q380 157 394.0 186.5Q408 216 408 257Q408 319 377.5 353.5Q347 388 297 388Q263 388 238.0 372.5Q213 357 199.5 327.5Q186 298 186 257Q186 195 216.0 160.0Q246 125 297 125Z" fill="${gidsColor}" transform="translate(2807, 0)"/>
    <path d="M134 -8Q97 -8 77.5 13.5Q58 35 58 74V416Q58 456 77.5 477.5Q97 499 134 499Q170 499 189.5 477.5Q209 456 209 416V74Q209 35 190.0 13.5Q171 -8 134 -8ZM134 581Q92 581 69.5 600.5Q47 620 47 656Q47 693 69.5 712.5Q92 732 134 732Q176 732 198.0 712.5Q220 693 220 656Q220 620 198.0 600.5Q176 581 134 581Z" fill="${gidsColor}" transform="translate(3372, 0)"/>
    <path d="M249 -11Q185 -11 136.5 20.0Q88 51 61.0 109.0Q34 167 34 246Q34 325 61.0 382.0Q88 439 136.5 470.0Q185 501 249 501Q307 501 351.5 473.0Q396 445 412 400H401V637Q401 675 420.0 694.5Q439 714 476 714Q512 714 532.0 694.5Q552 675 552 637V68Q552 31 532.5 11.0Q513 -9 477 -9Q441 -9 421.5 11.0Q402 31 402 68V136L413 97Q399 48 353.5 18.5Q308 -11 249 -11ZM294 102Q327 102 351.0 118.0Q375 134 389.0 165.5Q403 197 403 246Q403 319 373.0 353.5Q343 388 294 388Q262 388 237.5 373.0Q213 358 199.5 326.5Q186 295 186 246Q186 173 216.0 137.5Q246 102 294 102Z" fill="${gidsColor}" transform="translate(3590, 0)"/>
    <path d="M246 -11Q202 -11 155.5 -3.0Q109 5 71 24Q51 34 42.5 49.5Q34 65 35.0 81.0Q36 97 45.5 110.0Q55 123 70.5 127.5Q86 132 105 124Q146 107 180.0 100.0Q214 93 247 93Q290 93 309.5 106.5Q329 120 329 142Q329 162 316.0 172.0Q303 182 278 186L173 205Q111 216 77.5 250.5Q44 285 44 339Q44 389 72.0 425.5Q100 462 149.5 481.5Q199 501 262 501Q307 501 345.0 493.0Q383 485 418 467Q436 458 443.5 443.0Q451 428 448.5 412.0Q446 396 436.0 383.0Q426 370 410.5 366.0Q395 362 375 370Q343 385 316.0 391.5Q289 398 264 398Q219 398 199.0 383.5Q179 369 179 347Q179 330 190.5 318.5Q202 307 226 303L331 284Q396 273 430.0 240.5Q464 208 464 152Q464 76 404.5 32.5Q345 -11 246 -11Z" fill="${gidsColor}" transform="translate(4150, 0)"/>
  </g>
</svg>`;
 
  updateMetaThemeColor();
}

var GOOGLE_SHEET_CSV_URL='https://docs.google.com/spreadsheets/d/e/2PACX-1vSoYyeD3v2ElTcXt5I9IlPOHYBc8GwpRW_N06WFtgjUd20dIKEcEte7Vcdfik_kvfbDgs4xoS5wJU-c/pub?gid=0&single=true&output=csv';
var GOOGLE_SHEET_KIJKTIP_URL='https://docs.google.com/spreadsheets/d/e/2PACX-1vSoYyeD3v2ElTcXt5I9IlPOHYBc8GwpRW_N06WFtgjUd20dIKEcEte7Vcdfik_kvfbDgs4xoS5wJU-c/pub?gid=581385634&single=true&output=csv';

var TMDB_TOKEN='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWI4MDVlODg2MmYyODhkOTQ1NDhmOTU1NGYyZjc2YiIsIm5iZiI6MTY3OTQ3MzE2Ni43NzMsInN1YiI6IjY0MWFiYTBlZjlhYTQ3MDBiMTUxZGRmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E73D999tD0DBX0aJVVfyooRa3T750C-Y_Hk1TZLr-EM';
var TMDB_BASE='https://api.themoviedb.org/3';
var TMDB_IMG='https://image.tmdb.org/t/p/w300';



var WANTED_PROVIDERS=[
  {match:'netflix',key:'netflix',name:'Netflix',color:'#E50914',text:'#fff'},
  {match:'prime video',key:'prime video',name:'Prime Video',color:'#00A8E0',text:'#fff'},
  {match:'amazon prime',key:'prime video',name:'Prime Video',color:'#00A8E0',text:'#fff'},
  {match:'disney plus',key:'disney+',name:'Disney+',color:'#113CCF',text:'#fff'},
  {match:'disney+',key:'disney+',name:'Disney+',color:'#113CCF',text:'#fff'},
  {match:'apple tv plus',key:'apple tv+',name:'Apple TV+',color:'#555555',text:'#fff'},
  {match:'apple tv+',key:'apple tv+',name:'Apple TV+',color:'#555555',text:'#fff'},
  {match:'appletv+',key:'apple tv+',name:'Apple TV+',color:'#555555',text:'#fff'},
  {match:'appletv',key:'apple tv+',name:'Apple TV+',color:'#555555',text:'#fff'},
  {match:'apple tv',key:'apple tv+',name:'Apple TV+',color:'#555555',text:'#fff'},
  {match:'max ',key:'max',name:'Max',color:'#5822B4',text:'#fff'},
  {match:'hbo max',key:'max',name:'Max',color:'#5822B4',text:'#fff'},
  {match:'skyshowtime',key:'skyshowtime',name:'SkyShowtime',color:'#003E7E',text:'#fff'},
  {match:'videoland',key:'videoland',name:'Videoland',color:'#CC0000',text:'#fff'},
  {match:'path',key:'pathe',name:'Pathe Thuis',color:'#FF6B00',text:'#fff'},
  {match:'npo',key:'npo',name:'NPO Start',color:'#FF6600',text:'#fff'},
  {match:'paramount',key:'paramount',name:'Paramount+',color:'#0064FF',text:'#fff'},
  {match:'discovery',key:'discovery',name:'Discovery+',color:'#0036A0',text:'#fff'},
  {match:'viaplay',key:'viaplay',name:'Viaplay',color:'#1F1646',text:'#fff'},
  {match:'canal',key:'canal',name:'Canal+',color:'#000000',text:'#fff'},
  {match:'mubi',key:'mubi',name:'MUBI',color:'#00B4B4',text:'#fff'},
  {match:'cinemember',key:'cinemember',name:'CineMember',color:'#E8003D',text:'#fff'},
  {match:'film1',key:'film1',name:'Film1',color:'#D10000',text:'#fff'}
];
var POPULAR_KEYS=['netflix','prime video','max','disney+','videoland','skyshowtime','apple tv+','pathe','npo','paramount','discovery','viaplay','cinemember','film1','canal','mubi'];
var TMDB_NL_PROVIDERS={};

function matchProvider(n){var l=(n||'').toLowerCase().replace(/[^a-z0-9\s]/g,'').trim();if(l==='netflix kids'||l==='netflix basic with ads'||l.indexOf('netflix kids')!==-1)l='netflix';return WANTED_PROVIDERS.find(function(p){return l.includes(p.match);});}
function canonicalProviderName(n){var p=matchProvider(n);return p?p.name:((n||'').replace(/Netherlands/gi,'').trim());}
function canonicalProviderLogo(key){var canonKey=(key||'').toLowerCase();var fallback=null;for(var pid in TMDB_NL_PROVIDERS){var pr=TMDB_NL_PROVIDERS[pid];if(!pr||!pr.name||!pr.logo||providerKey(pr.name)!==canonKey)continue;var raw=(pr.rawName||'').toLowerCase();if(raw.indexOf('kids')!==-1||raw.indexOf('basic')!==-1||raw.indexOf('ads')!==-1){if(!fallback)fallback=pr.logo;continue;}return pr.logo;}return fallback;}
function getSvcStyle(n){var p=matchProvider(n);return p?{color:p.color,text:p.text}:{color:'#444',text:'#fff'};}
function providerKey(n){var p=matchProvider(n);return p?p.key:(n||'').toLowerCase().replace(/netherlands/gi,'').replace(/\s+/g,' ').trim();}
function capitalizeProvider(n){var p=matchProvider(n);if(p)return p.name;var s=(n||'').replace(/Netherlands/gi,'').trim();if(!s)return s;return s.charAt(0).toUpperCase()+s.slice(1);}
function isNLStreaming(n){return !!matchProvider(n);}
function detectOrigin(s){var n=(s||'').toLowerCase();return ['netflix','disney','max','hbo','videoland','apple','npo'].some(function(x){return n.includes(x)})?'original':'licensed';}
function resolveType(t){if(!t)return null;var s=String(t).toLowerCase();if(s==='movie')return 'movie';if(s.startsWith('tv_')||s.includes('series')||s.includes('miniseries')||s.includes('special'))return 'tv';return null;}

var allItems=[];var typeFilter='all';var svcFilter='all';var detailCache={};var imgCache={};
var allDays=[];var selectedDate=null;var currentModalItem=null;var collapsedSections={};
var activeTab='stream';
var streamType='all';var streamSubFilter=null;
var svcBarVisible=false;
var initComplete=false; /* Track whether init has finished loading */

/* ── Following & My List ── */
var following=[];var myList=[];
function loadFollowing(){try{following=JSON.parse(localStorage.getItem('sg_following')||'[]');}catch(e){following=[];}}
function saveFollowing(){try{localStorage.setItem('sg_following',JSON.stringify(following));}catch(e){}}
function isFollowing(id){return following.some(function(f){return f.id===id;});}
function toggleFollow(item){
  if(!item)return false;haptic('medium');
  var idx=following.findIndex(function(f){return f.id===item.id;});
  if(idx>=0){following.splice(idx,1);saveFollowing();updateMyListBadge();showToast('Niet meer gevolgd');return false;}
  following.push({id:item.id,title:item.title,img:item.img||imgCache[item.id]||'',_type:item._type,_key:item._key,_src:item._src,tmdb_id:item.tmdb_id||null,_genres:item._genres||[]});
  saveFollowing();updateMyListBadge();return true;
}
function loadMyList(){try{myList=JSON.parse(localStorage.getItem('sg_mylist')||'[]');}catch(e){myList=[];}}
function saveMyList(){try{localStorage.setItem('sg_mylist',JSON.stringify(myList));}catch(e){}}
function isInMyList(id){var item=allItems.find(function(i){return String(i.id)===String(id);});return myList.some(function(f){if(f.id===id)return true;if(item&&f.title&&item.title&&f.title.toLowerCase()===item.title.toLowerCase()&&f._type===item._type)return true;return false;});}
function addToMyList(item){
  if(!item)return false;haptic('medium');
  var titleLower=(item.title||'').toLowerCase();
  var exists=myList.some(function(f){if(f.id===item.id)return true;if(f.title&&f.title.toLowerCase()===titleLower&&f._type===item._type)return true;return false;});
  if(exists)return false;
  myList.push({id:item.id,title:item.title,img:item.img||imgCache[item.id]||'',_type:item._type,_key:item._key,_src:item._src,tmdb_id:item.tmdb_id||null,_genres:item._genres||[]});
  saveMyList();updateMyListBadge();return true;
}
function removeFromMyList(id){haptic('light');var idx=myList.findIndex(function(f){return f.id===id;});if(idx>=0){myList.splice(idx,1);saveMyList();updateMyListBadge();return true;}return false;}

/* ── My List badge in bottom nav ── */
function updateMyListBadge(){
  var badge=document.getElementById('myListBadge');
  if(!badge)return;
  var count=myList.length;
  if(count>0){
    badge.textContent=count;
    badge.style.display='flex';
  }else{
    badge.style.display='none';
  }
}

function getSetting(k,def){try{var v=localStorage.getItem('sg_'+k);return v!==null?v:def;}catch(e){return def;}}
function setSetting(k,v){try{localStorage.setItem('sg_'+k,v);}catch(e){}}
function getSettingBool(k){return getSetting(k,'false')==='true';}
var posterSize='compact';

function showToast(msg){var t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.classList.add('show');setTimeout(function(){t.classList.remove('show');},2400);}
function scGet(k){try{var v=sessionStorage.getItem(k);return v?JSON.parse(v):null;}catch(e){return null;}}
function scSet(k,v){try{sessionStorage.setItem(k,JSON.stringify(v));}catch(e){}}

var LC_TTL=4*60*60*1000;
function lcGet(k){try{var raw=localStorage.getItem('sgc_'+k);if(!raw)return null;var obj=JSON.parse(raw);if(Date.now()-obj.t>LC_TTL)return null;return obj.d;}catch(e){return null;}}
function lcSet(k,v){try{localStorage.setItem('sgc_'+k,JSON.stringify({t:Date.now(),d:v}));}catch(e){try{Object.keys(localStorage).forEach(function(key){if(key.startsWith('sgc_'))localStorage.removeItem(key);});localStorage.setItem('sgc_'+k,JSON.stringify({t:Date.now(),d:v}));}catch(e2){}}}

function dateOffset(o){var d=new Date();d.setDate(d.getDate()+o);var y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),dd=String(d.getDate()).padStart(2,'0');return y+'-'+m+'-'+dd;}
function dateStr(o){return dateOffset(o).replace(/-/g,'');}
function isoDate(w){if(!w)return '';var s=String(w);if(s.includes('-'))return s.slice(0,10);return s.slice(0,4)+'-'+s.slice(4,6)+'-'+s.slice(6,8);}
function todayISO(){var d=new Date();var parts=d.toLocaleDateString('nl-NL',{timeZone:'Europe/Amsterdam',year:'numeric',month:'2-digit',day:'2-digit'}).split('-');return parts[2]+'-'+parts[1]+'-'+parts[0];}
function dayNameShort(iso){return new Date(iso+'T12:00:00').toLocaleDateString('nl-NL',{weekday:'short'}).replace(/^\w/,function(c){return c.toUpperCase();});}
function dayNum(iso){return new Date(iso+'T12:00:00').getDate();}
function monthShort(iso){return new Date(iso+'T12:00:00').toLocaleDateString('nl-NL',{month:'short'}).replace(/^\w/,function(c){return c.toUpperCase();});}
function fullDate(iso){return new Date(iso+'T12:00:00').toLocaleDateString('nl-NL',{day:'numeric',month:'long',year:'numeric'});}
function getDateLabel(iso){var t=todayISO();if(iso===t)return 'Vandaag';if(iso===dateOffset(-1))return 'Gisteren';if(iso===dateOffset(1))return 'Morgen';return dayNameShort(iso);}

/* ── Date offset relative to a given date ── */
function dateOffsetFrom(baseISO,offset){
  var d=new Date(baseISO+'T12:00:00');
  d.setDate(d.getDate()+offset);
  var y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),dd=String(d.getDate()).padStart(2,'0');
  return y+'-'+m+'-'+dd;
}

function toggleTheme(){var cur=document.documentElement.getAttribute('data-theme');var next=cur==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',next);try{localStorage.setItem('streamgids_theme',next);}catch(e){}updateMetaThemeColor();}
function updateThemeIndicator(){var el=document.getElementById('themeIndicator');if(!el)return;}
function cycleTheme(){var cur=getSetting('theme','system');var next=cur==='system'?'light':cur==='light'?'dark':'system';setSetting('theme',next);if(next==='system'){var dk=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',dk?'dark':'light');localStorage.removeItem('streamgids_theme');}else{document.documentElement.setAttribute('data-theme',next);try{localStorage.setItem('streamgids_theme',next);}catch(e){}}updateThemeIndicator();updateMetaThemeColor();drawHeaderLogo();}

function goHome(){activeTab='stream';selectedDate=todayISO();typeFilter='all';svcFilter='all';streamType='all';streamSubFilter=null;svcBarVisible=false;document.querySelectorAll('.bnav').forEach(function(n){n.classList.toggle('active',n.getAttribute('data-f')==='stream');});var dt=document.getElementById('dateTabs');var sb=document.getElementById('svcBar');var fb=document.getElementById('filterBar');var sh=document.getElementById('swipeHintBar');if(dt)dt.style.display='';if(sh)sh.style.display='';if(sb)sb.style.display='none';if(fb)fb.style.display='';updateSvcClearFloat();buildDateTabs();buildFilterChips();renderMain();window.scrollTo({top:0,behavior:'smooth'});}

function shareItem(){if(!currentModalItem)return;var t=currentModalItem.title||'StreamGids';var txt='Bekijk "'+t+'" via StreamGids';if(navigator.share){navigator.share({title:t,text:txt,url:location.href}).catch(function(){});}else{window.open('https://wa.me/?text='+encodeURIComponent(txt+' '+location.href),'_blank');}}

function tmdb(path,params){params=params||{};var url=new URL(TMDB_BASE+path);Object.keys(params).forEach(function(k){url.searchParams.set(k,params[k]);});var ck='tmdb_'+url.toString();var c=scGet(ck);if(c)return Promise.resolve(c);return fetch(url.toString(),{headers:{'Authorization':'Bearer '+TMDB_TOKEN,'Content-Type':'application/json'}}).then(function(r){if(!r.ok)throw new Error('TMDB '+r.status);return r.json();}).then(function(d){scSet(ck,d);return d;});}



function fetchTMDBProviders(){var cached=lcGet('tmdb_providers');if(cached){Object.keys(cached).forEach(function(k){TMDB_NL_PROVIDERS[k]=cached[k];});return Promise.resolve();}return Promise.all([tmdb('/watch/providers/movie',{watch_region:'NL',language:'nl-NL'}),tmdb('/watch/providers/tv',{watch_region:'NL',language:'nl-NL'})]).then(function(res){var seen={};(res[0].results||[]).concat(res[1].results||[]).forEach(function(p){if(seen[p.provider_id])return;seen[p.provider_id]=true;var m=matchProvider(p.provider_name);if(!m)return;TMDB_NL_PROVIDERS[p.provider_id]={name:m.name,color:m.color,text:m.text,logo:p.logo_path?'https://image.tmdb.org/t/p/original'+p.logo_path:null,rawName:p.provider_name};});lcSet('tmdb_providers',TMDB_NL_PROVIDERS);});}
function tmdbPages(path,params,maxP){maxP=maxP||3;return tmdb(path,Object.assign({},params,{page:1})).catch(function(){return{results:[],total_pages:0};}).then(function(first){var all=(first.results||[]).slice();var total=Math.min(first.total_pages||1,maxP);if(total<=1)return all;var ps=[];for(var i=2;i<=total;i++){(function(pg){ps.push(tmdb(path,Object.assign({},params,{page:pg})).catch(function(){return{results:[]};}));})(i);}return Promise.all(ps).then(function(rest){rest.forEach(function(r){all=all.concat(r.results||[]);});return all;});});}

function fetchTMDBReleases(){
  var cached=lcGet('tmdb_releases');if(cached){console.log('[StreamGids] TMDB releases from cache ('+cached.length+')');return Promise.resolve(cached);}
  var items=[];var entries=Object.keys(TMDB_NL_PROVIDERS).map(function(id){return[id,TMDB_NL_PROVIDERS[id]];});if(!entries.length)return Promise.resolve([]);
  function makeItem(m,prov,id,type,overrideDate,epInfo){var date=overrideDate||(type==='movie'?(m.release_date||''):(m.first_air_date||''));if(!date||!m.id)return null;return{id:'tmdb-'+m.id+'-'+id+(overrideDate?'-'+overrideDate:''),title:m.title||m.name||m.original_title||m.original_name||'',img:m.poster_path?TMDB_IMG+m.poster_path:null,_type:type,_date:date,_src:{name:prov.name,logo_100px:canonicalProviderLogo(providerKey(prov.name))||prov.logo},_style:{color:prov.color,text:prov.text},_key:providerKey(prov.name),_originType:detectOrigin(prov.name),_source:'tmdb',_providerId:Number(id),tmdb_id:m.id,user_rating:m.vote_average||0,overview:m.overview||'',_epInfo:epInfo||null,_genres:m.genre_ids||[]};}
  var sub=document.getElementById('loadSub');if(sub)sub.textContent='TMDB: actuele titels ophalen...';
  return Promise.all([tmdb('/movie/now_playing',{language:'nl-NL',region:'NL',page:1}).catch(function(){return{results:[]};}),tmdb('/tv/on_the_air',{language:'nl-NL',page:1}).catch(function(){return{results:[]};})]).then(function(res){
    var movies=res[0].results||[];var tvShows=(res[1].results||[]).slice(0,20);
    var checks=movies.slice(0,20).map(function(m){return Object.assign({},m,{_isTV:false});}).concat(tvShows.map(function(t){return Object.assign({},t,{_isTV:true,_epDate:null,_epInfo:null});}));
    return Promise.all(checks.map(function(m){return tmdb('/'+(m._isTV?'tv':'movie')+'/'+m.id+'/watch/providers').then(function(pd){var flat=pd&&pd.results&&pd.results.NL&&pd.results.NL.flatrate||[];var rentBuy=(pd&&pd.results&&pd.results.NL&&pd.results.NL.rent||[]).concat(pd&&pd.results&&pd.results.NL&&pd.results.NL.buy||[]);flat.forEach(function(p){var prov=TMDB_NL_PROVIDERS[p.provider_id];if(!prov)return;var it=makeItem(m,prov,p.provider_id,m._isTV?'tv':'movie',null,null);if(it){it._monetization='flatrate';items.push(it);}});rentBuy.forEach(function(p){var prov=TMDB_NL_PROVIDERS[p.provider_id];if(!prov)return;var it=makeItem(m,prov,p.provider_id,m._isTV?'tv':'movie',null,null);if(it){it._monetization='rent';items.push(it);}});}).catch(function(){});}));
  }).then(function(){lcSet('tmdb_releases',items);return items;});
}

function enrichEpisodeDetails(){var tvItems=allItems.filter(function(i){return i._type==='tv'&&i._source==='tmdb'&&!i._epInfo&&i.tmdb_id;});if(!tvItems.length)return Promise.resolve();var idx=0;function next() {if(idx>=tvItems.length)return Promise.resolve();var batch=tvItems.slice(idx,idx+8);idx+=8;return Promise.all(batch.map(function(item){return tmdb('/tv/'+item.tmdb_id,{language:'nl-NL'}).then(function(detail){var candidates=[];if(detail.next_episode_to_air)candidates.push({date:detail.next_episode_to_air.air_date,s:detail.next_episode_to_air.season_number,e:detail.next_episode_to_air.episode_number,name:detail.next_episode_to_air.name||''});if(detail.last_episode_to_air)candidates.push({date:detail.last_episode_to_air.air_date,s:detail.last_episode_to_air.season_number,e:detail.last_episode_to_air.episode_number,name:detail.last_episode_to_air.name||''});var today=todayISO();var best=null;candidates.forEach(function(c){if(!c.date)return;if(!best)best=c;else if(Math.abs(new Date(c.date)-new Date(today))<Math.abs(new Date(best.date)-new Date(today)))best=c;});if(!best)return;if(best.date){var d=new Date(best.date+'T12:00:00');d.setDate(d.getDate()+1);item._date=d.toISOString().slice(0,10);}return tmdb('/tv/'+item.tmdb_id+'/season/'+best.s,{language:'nl-NL'}).then(function(seasonDetail){var eps=seasonDetail.episodes||[];var aired=eps.filter(function(ep){return ep.air_date&&ep.air_date<=today;}).length;var firstEpDate=(eps.length>0&&eps[0].air_date)?eps[0].air_date:null;item._epInfo={s:best.s,e:best.e,name:best.name,seasonEpisodeCount:eps.length,airedEpisodes:aired,isCompleteDrop:Object.keys(eps.reduce(function(a,ep){if(ep.air_date)a[ep.air_date]=true;return a;},{})).length<=1,seasonFirstAirDate:firstEpDate};}).catch(function(){});}).catch(function(){});})).then(next);}return next().then(function(){var tmdbItems=allItems.filter(function(i){return i._source==='tmdb';});lcSet('tmdb_releases',tmdbItems);if(activeTab==='stream'){buildSvcBar();buildDateTabs();renderMain();}});}

function fetchRemainingTMDBPages(){return Promise.all([tmdbPages('/movie/now_playing',{language:'nl-NL',region:'NL'},5),tmdbPages('/tv/on_the_air',{language:'nl-NL'},5)]).then(function(res){var existingIds={};allItems.forEach(function(i){if(i.tmdb_id)existingIds[i.tmdb_id]=true;});var newMovies=(res[0]||[]).filter(function(m){return !existingIds[m.id];});var newTV=(res[1]||[]).filter(function(t){return !existingIds[t.id];});if(!newMovies.length&&!newTV.length)return;var checks=newMovies.map(function(m){return Object.assign({},m,{_isTV:false});}).concat(newTV.map(function(t){return Object.assign({},t,{_isTV:true});}));var newItems=[];return Promise.all(checks.map(function(m){return tmdb('/'+(m._isTV?'tv':'movie')+'/'+m.id+'/watch/providers').then(function(pd){var flat=pd&&pd.results&&pd.results.NL&&pd.results.NL.flatrate||[];var rentBuy=(pd&&pd.results&&pd.results.NL&&pd.results.NL.rent||[]).concat(pd&&pd.results&&pd.results.NL&&pd.results.NL.buy||[]);flat.forEach(function(p){var prov=TMDB_NL_PROVIDERS[p.provider_id];if(!prov)return;newItems.push({id:'tmdb-'+m.id+'-'+p.provider_id,title:m.title||m.name||'',img:m.poster_path?TMDB_IMG+m.poster_path:null,_type:m._isTV?'tv':'movie',_date:m._isTV?(m.first_air_date||''):(m.release_date||''),_src:{name:prov.name,logo_100px:canonicalProviderLogo(providerKey(prov.name))||prov.logo},_style:{color:prov.color,text:prov.text},_key:providerKey(prov.name),_originType:detectOrigin(prov.name),_source:'tmdb',_providerId:Number(p.provider_id),tmdb_id:m.id,user_rating:m.vote_average||0,overview:m.overview||'',_epInfo:null,_genres:m.genre_ids||[],_monetization:'flatrate'});});rentBuy.forEach(function(p){var prov=TMDB_NL_PROVIDERS[p.provider_id];if(!prov)return;newItems.push({id:'tmdb-'+m.id+'-'+p.provider_id+'-rent',title:m.title||m.name||'',img:m.poster_path?TMDB_IMG+m.poster_path:null,_type:m._isTV?'tv':'movie',_date:m._isTV?(m.first_air_date||''):(m.release_date||''),_src:{name:prov.name,logo_100px:canonicalProviderLogo(providerKey(prov.name))||prov.logo},_style:{color:prov.color,text:prov.text},_key:providerKey(prov.name),_originType:detectOrigin(prov.name),_source:'tmdb',_providerId:Number(p.provider_id),tmdb_id:m.id,user_rating:m.vote_average||0,overview:m.overview||'',_epInfo:null,_genres:m.genre_ids||[],_monetization:'rent'});});}).catch(function(){});})).then(function(){if(newItems.length){newItems.forEach(function(ni){allItems.push(ni);});if(activeTab==='stream'){buildSvcBar();buildDateTabs();renderMain();}console.log('[StreamGids] +'+newItems.length+' extra TMDB items geladen');}});});}

/* ── Google Sheets CSV fetch ── */
function fetchGoogleSheet(){if(!GOOGLE_SHEET_CSV_URL)return Promise.resolve([]);var ck='gsheet_'+GOOGLE_SHEET_CSV_URL;var c=scGet(ck);if(c)return Promise.resolve(c);return fetch(GOOGLE_SHEET_CSV_URL).then(function(r){if(!r.ok)throw new Error('Sheet HTTP '+r.status);return r.text();}).then(function(csv){var lines=csv.split('\n');if(lines.length<2)return[];var hdr=lines[0].split(',').map(function(h){return h.trim().toLowerCase().replace(/['"]/g,'');});var ci={titel:hdr.indexOf('titel'),tmdb_id:hdr.indexOf('tmdb_id'),datum:hdr.indexOf('datum'),dienst:hdr.indexOf('dienst'),type:hdr.indexOf('type')};if(ci.titel===-1)ci.titel=0;if(ci.datum===-1)ci.datum=2;if(ci.dienst===-1)ci.dienst=3;var items=[];for(var i=1;i<lines.length;i++){var line=lines[i].trim();if(!line)continue;var cols=[];var cur='',inQ=false;for(var j=0;j<line.length;j++){var ch=line[j];if(ch==='"'){inQ=!inQ;}else if(ch===','&&!inQ){cols.push(cur.trim());cur='';}else{cur+=ch;}}cols.push(cur.trim());var titel=(cols[ci.titel]||'').replace(/^["']|["']$/g,'').trim();var tmdbId=(ci.tmdb_id>=0&&cols[ci.tmdb_id]||'').replace(/^["']|["']$/g,'').trim();var datum=(cols[ci.datum]||'').replace(/^["']|["']$/g,'').trim();var dienst=(cols[ci.dienst]||'').replace(/^["']|["']$/g,'').trim().toLowerCase();var type=(ci.type>=0&&cols[ci.type]||'movie').replace(/^["']|["']$/g,'').trim().toLowerCase();if(!titel||!datum)continue;var prov=matchProvider(dienst);items.push({id:'gs-'+i+'-'+titel.replace(/\s/g,'-').slice(0,20),title:titel,img:null,_type:type==='tv'?'tv':'movie',_date:datum,_src:{name:prov?prov.name:dienst,logo_100px:null},_style:{color:prov?prov.color:'#444',text:'#fff'},_key:prov?prov.key:dienst,_originType:detectOrigin(prov?prov.name:dienst),_source:'googlesheet',tmdb_id:tmdbId?Number(tmdbId):null,overview:'',user_rating:0});}console.log('[StreamGids] Google Sheet: '+items.length+' handmatige releases');scSet(ck,items);return items;}).catch(function(e){console.warn('[StreamGids] Google Sheet fout:',e);return[];});}

function enrichSheetItems(items){if(!items.length)return Promise.resolve(items);var cached=lcGet('gs_enriched');if(cached&&cached.length){console.log('[StreamGids] GS enriched from cache ('+cached.length+')');cached.forEach(function(ci){if(ci.img)imgCache[ci.id]=ci.img;});return Promise.resolve(cached);}var idx=0;function next(){if(idx>=items.length)return Promise.resolve();var batch=items.slice(idx,idx+10);idx+=10;return Promise.all(batch.map(function(item){var p;if(item.tmdb_id){p=tmdb('/'+(item._type==='tv'?'tv':'movie')+'/'+item.tmdb_id,{language:'nl-NL'});}else{p=tmdb('/search/'+(item._type==='tv'?'tv':'movie'),{query:item.title,language:'nl-NL'}).then(function(res){var hit=(res.results||[])[0];if(hit){item.tmdb_id=hit.id;return hit;}return null;});}return p.then(function(d){if(!d)return;if(d.poster_path){item.img=TMDB_IMG+d.poster_path;imgCache[item.id]=item.img;}if(d.overview&&!item.overview)item.overview=d.overview;if(!item.title&&(d.title||d.name))item.title=d.title||d.name;}).catch(function(){});})).then(next);}return next().then(function(){items.forEach(function(item){if(!item._src.logo_100px){var pk=(item._key||'').toLowerCase();Object.keys(TMDB_NL_PROVIDERS).forEach(function(pid){var pr=TMDB_NL_PROVIDERS[pid];if(pr&&pr.name&&providerKey(pr.name)===pk&&pr.logo)item._src.logo_100px=pr.logo;});}});lcSet('gs_enriched',items);return items;});}

function enrichSheetEpisodeDetails(){var gsTV=allItems.filter(function(i){return i._source==='googlesheet'&&i._type==='tv'&&!i._epInfo&&i.tmdb_id;});if(!gsTV.length)return Promise.resolve();var idx=0;function next(){if(idx>=gsTV.length)return Promise.resolve();var batch=gsTV.slice(idx,idx+8);idx+=8;return Promise.all(batch.map(function(item){return tmdb('/tv/'+item.tmdb_id,{language:'nl-NL'}).then(function(detail){var candidates=[];if(detail.next_episode_to_air)candidates.push({date:detail.next_episode_to_air.air_date,s:detail.next_episode_to_air.season_number,e:detail.next_episode_to_air.episode_number,name:detail.next_episode_to_air.name||''});if(detail.last_episode_to_air)candidates.push({date:detail.last_episode_to_air.air_date,s:detail.last_episode_to_air.season_number,e:detail.last_episode_to_air.episode_number,name:detail.last_episode_to_air.name||''});if(!candidates.length)return;var today=todayISO();var best=null;candidates.forEach(function(c){if(!c.date)return;if(!best)best=c;else if(Math.abs(new Date(c.date)-new Date(today))<Math.abs(new Date(best.date)-new Date(today)))best=c;});if(!best)return;return tmdb('/tv/'+item.tmdb_id+'/season/'+best.s,{language:'nl-NL'}).then(function(seasonDetail){var eps=seasonDetail.episodes||[];var aired=eps.filter(function(ep){return ep.air_date&&ep.air_date<=today;}).length;var firstEpDate=(eps.length>0&&eps[0].air_date)?eps[0].air_date:null;var matchedEp=best;if(item._date&&eps.length){var gsTime=new Date(item._date+'T12:00:00').getTime();var closestDist=Infinity;eps.forEach(function(ep){if(!ep.air_date)return;var nlDate=new Date(ep.air_date+'T12:00:00');nlDate.setDate(nlDate.getDate()+1);var dist=Math.abs(nlDate.getTime()-gsTime);if(dist<closestDist){closestDist=dist;matchedEp={s:best.s,e:ep.episode_number,name:ep.name||''};}});}item._epInfo={s:matchedEp.s,e:matchedEp.e,name:matchedEp.name,seasonEpisodeCount:eps.length,airedEpisodes:aired,isCompleteDrop:false,seasonFirstAirDate:firstEpDate};}).catch(function(){});}).catch(function(){});})).then(next);}return next().then(function(){var gsItems=allItems.filter(function(i){return i._source==='googlesheet';});lcSet('gs_enriched',gsItems);if(activeTab==='stream'){buildSvcBar();buildDateTabs();renderMain();}});}

/* ── MERGE ── */
function mergeItems(tm,gs){var result=[];var titleProvMap={};var seen={};function addItem(i){if(!i._date||!i.title)return;var tl=(i.title||'').toLowerCase().trim();var tk=tl+'|'+i._key;if(seen[tk])return;seen[tk]=true;if(titleProvMap[tl]){var existing=titleProvMap[tl];if(existing.providers.indexOf(i._key)===-1){existing.providers.push(i._key);if(!existing.item._alsoOn)existing.item._alsoOn=[];var dn=(i._src&&i._src.name||i._key).replace(/Netherlands/gi,'').trim();if(existing.item._alsoOn.indexOf(dn)===-1)existing.item._alsoOn.push(dn);}return;}titleProvMap[tl]={item:i,providers:[i._key]};result.push(i);}var apiDateKeys={};function addApiItem(i){addItem(i);if(i._date&&i.title){var dk=(i.title||'').toLowerCase().trim()+'|'+i._key+'|'+i._date;apiDateKeys[dk]=true;}}tm.forEach(function(i){addApiItem(i);});(gs||[]).forEach(function(i){if(!i._date||!i.title)return;var tl=(i.title||'').toLowerCase().trim();if(i._type==='tv'){var dateKey=tl+'|'+i._key+'|'+i._date;if(apiDateKeys[dateKey])return;if(seen[dateKey])return;seen[dateKey]=true;if(titleProvMap[tl]){var ex=titleProvMap[tl].item;if(!i.img&&ex.img){i.img=ex.img;imgCache[i.id]=ex.img;}if(!i.overview&&ex.overview)i.overview=ex.overview;if(!i.tmdb_id&&ex.tmdb_id)i.tmdb_id=ex.tmdb_id;}result.push(i);}else{addItem(i);}});return result;}


/* ── DATE TABS with count badges ── */
function getItemCountForDate(iso){
  /* Count ALL items for this date, not just ones with images loaded yet */
  return allItems.filter(function(i){return i._date===iso;}).length;
}

function buildDateTabs(){
  var c=document.getElementById('dateTabs');allDays=[];
  for(var i=-7;i<=14;i++)allDays.push(dateOffset(i));
  if(!selectedDate)selectedDate=todayISO();
  var minDate=dateOffset(-7),maxDate=dateOffset(14);
  if(selectedDate<minDate||selectedDate>maxDate)selectedDate=todayISO();
  var today=todayISO();
  c.innerHTML=allDays.map(function(iso){
    var label=getDateLabel(iso);var isActive=iso===selectedDate;var isToday=iso===today;
    var cnt=getItemCountForDate(iso);
    var countBadge=cnt>0?'<span class="dtab-count">'+cnt+'</span>':'';
    var sub=isToday?'':'<span class="dsub">'+dayNum(iso)+' '+monthShort(iso)+'</span>';
    return '<button class="dtab'+(isActive?' active':'')+(isToday?' is-today':'')+'" data-date="'+iso+'">'+label+countBadge+sub+'</button>';
  }).join('');
  /* Swipe hint bar (separate element after date tabs) - only show if user hasn't swiped yet */
  var hintBar=document.getElementById('swipeHintBar');
  var hasSeenSwipe=getSetting('swipe_seen','false')==='true';
if(!hasSeenSwipe && activeTab==='stream'){
    if(!hintBar){
      hintBar=document.createElement('div');
      hintBar.id='swipeHintBar';
      hintBar.className='swipe-hint-bar';
      hintBar.innerHTML='<div class="swipe-indicator"><svg class="swipe-arrow-left" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg><span>Swipe voor andere dag</span><svg class="swipe-arrow-right" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>';
      c.parentNode.insertBefore(hintBar,c.nextSibling);
    }
  }else{
    if(hintBar)hintBar.style.display='none';
  }
  setTimeout(function(){var a=c.querySelector('.dtab.active');if(a)a.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});},50);
}
function selectDate(iso){haptic('light');selectedDate=iso;document.querySelectorAll('.dtab').forEach(function(t){t.classList.toggle('active',t.getAttribute('data-date')===iso);});var a=document.querySelector('.dtab.active');if(a)a.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});window.scrollTo({top:0,behavior:'smooth'});renderMain();}
function navigateDay(direction){if(!allDays.length)return;var curIdx=allDays.indexOf(selectedDate);if(curIdx===-1)return;var newIdx=curIdx+direction;if(newIdx<0||newIdx>=allDays.length)return;selectDate(allDays[newIdx]);}

/* ── SERVICE BAR (toggled via filter chip) ── */
function buildSvcBar(){
  var bar=document.getElementById('svcBar');var provMap={};
  allItems.forEach(function(item){var k=item._key||'';if(provMap[k])return;provMap[k]={name:capitalizeProvider(item._src&&item._src.name||k),style:item._style,logo:item._src&&item._src.logo_100px||null};});
  var keys=Object.keys(provMap).sort(function(a,b){var ra=POPULAR_KEYS.indexOf(a);if(ra===-1)ra=999;var rb=POPULAR_KEYS.indexOf(b);if(rb===-1)rb=999;if(ra!==rb)return ra-rb;return provMap[a].name.localeCompare(provMap[b].name);});
  var html='<button class="sc active" data-k="all">Alle streamers</button>';
  keys.forEach(function(k){var info=provMap[k];var logo=info.logo?'<img src="'+info.logo+'" alt="'+info.name+'" onerror="this.style.display=\'none\'" loading="lazy">':'<div class="dot" style="background:'+info.style.color+'"></div>';html+='<button class="sc'+(svcFilter===k?' active':'')+'" data-k="'+k+'">'+logo+info.name+'</button>';});
  bar.innerHTML=html;
}

/* ── Floating clear filter button ── */
function updateSvcClearFloat(){
  var btn=document.getElementById('svcClearFloat');
  var label=document.getElementById('svcClearLabel');
  if(!btn)return;
  if(activeTab==='stream'){
    if(svcFilter!=='all'){
      btn.style.display='flex';
      if(label)label.textContent=capitalizeProvider(svcFilter)+' ✕';
    }else if(streamType==='movie'){
      btn.style.display='flex';
      if(label)label.textContent='Films ✕';
    }else if(streamType==='tv'){
      btn.style.display='flex';
      if(label)label.textContent='Series ✕';
    }else{
      btn.style.display='none';
    }
  }else{
    btn.style.display='none';
  }
}


/* ── FILTER CHIPS (with provider toggle) ── */
function buildFilterChips(){
  var fc=document.getElementById('filterChips');if(!fc)return;
  var html='';
  /* Provider toggle chip */
  var svcToggle='<button class="filter-chip svc-toggle-chip'+(svcBarVisible?' active':'')+'" data-sf="toggle_svc">Streamers'+(svcFilter!=='all'?': '+capitalizeProvider(svcFilter):'')+'</button>';

  if(streamType==='all'){
    html='<button class="filter-chip active" data-sf="all">Alles</button>';
    html+=svcToggle;
    html+='<button class="filter-chip" data-sf="movie">Films</button>';
    html+='<button class="filter-chip" data-sf="tv">Series</button>';
  }else if(streamType==='movie'){
    html='<button class="filter-chip back-chip" data-sf="back">&larr;</button>';
    html+='<button class="filter-chip'+(streamSubFilter===null?' active':'')+'" data-sf="movie_all">Alle films</button>';
    html+=svcToggle;
  }else if(streamType==='tv'){
    html='<button class="filter-chip back-chip" data-sf="back">&larr;</button>';
    html+='<button class="filter-chip'+(streamSubFilter===null?' active':'')+'" data-sf="tv_all">Alle series</button>';
    html+='<button class="filter-chip'+(streamSubFilter==='seasons'?' active':'')+'" data-sf="seasons">Nieuwe seizoenen</button>';
    html+='<button class="filter-chip'+(streamSubFilter==='episodes'?' active':'')+'" data-sf="episodes">Nieuwe afleveringen</button>';
    html+=svcToggle;
  }
  fc.innerHTML=html;
}
function handleFilterClick(sf){
  if(sf==='toggle_svc'){
    svcBarVisible=!svcBarVisible;
    var sb=document.getElementById('svcBar');
    if(sb)sb.style.display=svcBarVisible?'':'none';
    buildFilterChips();
    if(svcBarVisible){
      setTimeout(function(){var a=sb.querySelector('.sc.active');if(a)a.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});},50);
    }
    return;
  }
  haptic('light');
  if(sf==='back'){streamType='all';streamSubFilter=null;buildFilterChips();updateSvcClearFloat();renderStreamView();return;}
  if(streamType==='all'){
    if(sf==='all'){streamSubFilter=null;buildFilterChips();updateSvcClearFloat();renderStreamView();}
    else{streamType=sf;streamSubFilter=null;buildFilterChips();updateSvcClearFloat();renderStreamView();}
  }else{
    if(sf===streamType+'_all'){streamSubFilter=null;}
    else{streamSubFilter=sf;}
    buildFilterChips();updateSvcClearFloat();renderStreamView();
  }
}

/* ── MAIN RENDER ── */
function filteredItems(){return allItems.filter(function(i){if(streamType==='movie'&&i._type!=='movie')return false;if(streamType==='tv'&&i._type!=='tv')return false;if(svcFilter!=='all'&&i._key!==svcFilter)return false;return !!i._date;});}
function applySubFilter(items){if(!streamSubFilter)return items;if(streamSubFilter==='episodes')return items.filter(function(i){return i._type==='tv'&&(i._epInfo&&i._epInfo.s||i._source==='googlesheet');});if(streamSubFilter==='seasons')return items.filter(function(i){return i._type==='tv'&&(i._season||(i._epInfo&&i._epInfo.e===1));});return items;}
function renderStreamView(){document.getElementById('dateTabs').style.display='';renderMain();}

/* ── "Voor Jou" personalized section ── */
function getVoorJouItems(){
  /* Only show if user has items in myList or following */
  if(!myList.length&&!following.length)return[];

  var genreCounts={};
  myList.concat(following).forEach(function(f){
    (f._genres||[]).forEach(function(g){genreCounts[g]=(genreCounts[g]||0)+1;});
  });
  var topGenres=Object.keys(genreCounts).sort(function(a,b){return genreCounts[b]-genreCounts[a];}).slice(0,5).map(Number);
  if(!topGenres.length){
    topGenres=[28,35,18,53,878];
  }
  var savedTitles={};myList.concat(following).forEach(function(f){savedTitles[(f.title||'').toLowerCase()]=true;});
  var candidates=allItems.filter(function(i){
    if(!i.img&&!imgCache[i.id])return false;
    if(savedTitles[(i.title||'').toLowerCase()])return false;
    if(!i._genres||!i._genres.length)return false;
    return i._genres.some(function(g){return topGenres.indexOf(g)!==-1;});
  });
  var seen={};var deduped=[];
  candidates.forEach(function(i){var k=(i.title||'').toLowerCase();if(seen[k])return;seen[k]=true;deduped.push(i);});
  deduped.sort(function(a,b){return(b.user_rating||0)-(a.user_rating||0);});
  return deduped.slice(0,12);
}

function enrichSavedGenres(){
  var toEnrich=myList.concat(following).filter(function(f){return f.tmdb_id&&(!f._genres||!f._genres.length);});
  if(!toEnrich.length)return;
  var idx=0;
  function next(){
    if(idx>=toEnrich.length)return;
    var batch=toEnrich.slice(idx,idx+5);idx+=5;
    Promise.all(batch.map(function(item){
      var type=item._type==='movie'?'movie':'tv';
      return tmdb('/'+type+'/'+item.tmdb_id,{language:'nl-NL'}).then(function(d){
        if(d&&d.genres){item._genres=d.genres.map(function(g){return g.id;});}
      }).catch(function(){});
    })).then(function(){
      saveMyList();saveFollowing();
      next();
    });
  }
  next();
}

function renderVoorJou(main){
  var items=getVoorJouItems();
  if(!items.length)return;
  var sec=document.createElement('div');sec.className='voor-jou-section';
  sec.innerHTML='<div class="vj-title">Voor jou</div><div class="vj-sub">Gebaseerd op je lijst en gevolgde titels</div><div class="vj-scroll">'+items.map(function(item){
    var poster=imgCache[item.id]||item.img||'';
    var title=(item.title||'').replace(/'/g,"&#39;").replace(/"/g,'&quot;');
    var sid=String(item.id).replace(/['"\\]/g,'');
    return '<div class="vj-item" data-id="'+sid+'">'+(poster?'<img class="vj-poster" src="'+poster+'" alt="'+title+'" loading="lazy">':'<div class="vj-poster"></div>')+'<div class="vj-name">'+title+'</div><div class="vj-meta">'+(item._type==='movie'?'Film':'Serie')+'</div></div>';
  }).join('')+'</div>';
  main.insertBefore(sec,main.firstChild);
  /* Prevent horizontal scroll in vj-scroll from triggering day swipe */
  var vjScroll=sec.querySelector('.vj-scroll');
  if(vjScroll){
    vjScroll.addEventListener('touchstart',function(e){e.stopPropagation();},{passive:true});
    vjScroll.addEventListener('touchmove',function(e){e.stopPropagation();},{passive:true});
    vjScroll.addEventListener('touchend',function(e){e.stopPropagation();},{passive:true});
  }
  sec.querySelectorAll('.vj-item').forEach(function(el){el.addEventListener('click',function(){openModal(el.getAttribute('data-id'));});});
}

function renderMain(){
  var main=document.getElementById('main');main.innerHTML='';
  if(!initComplete&&!allItems.length){
    main.innerHTML='<div class="loading-screen" id="loadingScreen"><div class="ld-spinner"></div><div id="loadText">Laden...</div><div class="ld-sub" id="loadSub"></div></div>';
    return;
  }
  var items=filteredItems().filter(function(i){return i._date===selectedDate;});
  items=items.filter(function(i){return imgCache[i.id]||i.img;});
  items=applySubFilter(items);

  /* Show "Voor Jou" on today only */
  if(selectedDate===todayISO()&&streamType==='all'&&svcFilter==='all'&&!streamSubFilter){
    renderVoorJou(main);
  }

  if(!items.length){
    /* Enhanced empty state with stats */
    var nextDay=dateOffsetFrom(selectedDate,1);
    var prevDay=dateOffsetFrom(selectedDate,-1);
    var tomorrowCount=getItemCountForDate(nextDay);
    var yesterdayCount=getItemCountForDate(prevDay);
    var statsHtml='';
    if(tomorrowCount>0)statsHtml+='<strong>'+tomorrowCount+'</strong> releases morgen';
    if(tomorrowCount>0&&yesterdayCount>0)statsHtml+=' · ';
    if(yesterdayCount>0)statsHtml+='<strong>'+yesterdayCount+'</strong> releases gisteren';
    var ctas='<div class="empty-cta-row">';
    /* Navigate relative to selectedDate, not today */
    var minDate=dateOffset(-7),maxDate=dateOffset(14);
    if(nextDay>=minDate&&nextDay<=maxDate)ctas+='<button class="empty-cta-btn" onclick="selectDate(\''+nextDay+'\')">Bekijk morgen</button>';
    if(prevDay>=minDate&&prevDay<=maxDate)ctas+='<button class="empty-cta-btn" onclick="selectDate(\''+prevDay+'\')">Bekijk gisteren</button>';
    ctas+='<button class="empty-cta-btn" onclick="setType(\'top10\')">Bekijk Top 10</button></div>';
    main.innerHTML+='<div class="empty-state"><div style="font-size:16px;margin-bottom:6px;font-weight:600">Geen releases</div>'+(statsHtml?'<div class="empty-stats">'+statsHtml+'</div>':'')+'<div style="font-size:13px;color:var(--t3);margin-bottom:14px">Geen nieuwe content op '+getDateLabel(selectedDate).toLowerCase()+'. Probeer een andere dag.</div>'+ctas+'</div>';return;
  }
  var svcGroups={};var svcOrder=[];
  items.forEach(function(item){var k=item._key||'overig';if(!svcGroups[k]){svcGroups[k]={name:capitalizeProvider(item._src&&item._src.name||k),logo:item._src&&item._src.logo_100px||null,color:item._style&&item._style.color||'#444',items:[]};svcOrder.push(k);}svcGroups[k].items.push(item);});
  svcOrder.sort(function(a,b){var ra=POPULAR_KEYS.indexOf(a);if(ra===-1)ra=999;var rb=POPULAR_KEYS.indexOf(b);if(rb===-1)rb=999;if(ra!==rb)return ra-rb;return svcGroups[b].items.length-svcGroups[a].items.length;});
  svcOrder.forEach(function(key,idx){
    var g=svcGroups[key];var sec=document.createElement('div');sec.className='svc-section'+(collapsedSections[key]?' collapsed':'');sec.id='svc-'+key;sec.style.animationDelay=(idx*0.04)+'s';
    var canonLogo=canonicalProviderLogo(key)||g.logo||null;
    var logoHtml=canonLogo?'<img class="svc-logo" src="'+canonLogo+'" alt="'+g.name+'" onerror="this.style.display=\'none\'" loading="lazy">':'<div class="svc-dot" style="background:'+g.color+'">'+g.name.charAt(0)+'</div>';
    var mc=g.items.filter(function(i){return i._type==='movie';}).length;var tc=g.items.filter(function(i){return i._type==='tv';}).length;var parts=[];if(mc)parts.push(mc+' film'+(mc>1?'s':''));if(tc)parts.push(tc+' serie'+(tc>1?'s':''));
    sec.innerHTML='<div class="svc-hdr" data-key="'+key+'">'+logoHtml+'<div class="svc-name">'+g.name+'</div><div class="svc-cnt">'+parts.join(' · ')+'</div><svg class="svc-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="svc-body">'+g.items.map(function(item){return crowHtml(item);}).join('')+'</div>';
    main.appendChild(sec);
  });
}

function crowHtml(item){
  var title=(item.title||'').replace(/'/g,"&#39;").replace(/"/g,'&quot;');
  var sid=String(item.id).replace(/['"\\]/g,'');
  var poster=imgCache[item.id]||item.img||'';
  var tl=item._type==='movie'?'Film':'Serie';
  var cls=item._type==='movie'?'film':'serie';
  var sn=capitalizeProvider(item._src&&item._src.name||'Streaming');
  var epBadge='';
  if(item._type==='tv'){var ep=item._epInfo;var hasSeason=!!item._season;var hasEpInfo=!!(ep&&ep.s);var isGS=item._source==='googlesheet';if(hasEpInfo){var totalEps=ep.seasonEpisodeCount||null;var completeDrop=ep.isCompleteDrop||false;if(ep.e===1||completeDrop){epBadge='<div class="crow-ep-badge season">Nieuw seizoen (S'+ep.s+')</div>';}else{if(totalEps){epBadge='<div class="crow-ep-badge">Nieuwe aflevering '+ep.e+' van '+totalEps+'</div>';}else{epBadge='<div class="crow-ep-badge">Nieuwe aflevering</div>';}epBadge+='<div class="crow-ep-badge season">Seizoen '+ep.s+'</div>';}}else if(hasSeason){epBadge='<div class="crow-ep-badge season">Nieuw seizoen (S'+item._season+')</div>';}else if(isGS){epBadge='<div class="crow-ep-badge">Nieuwe aflevering</div>';}}

  var alsoOnHtml='';
  if(item._alsoOn&&item._alsoOn.length>0){
    alsoOnHtml='<div class="crow-also-on"><span class="crow-also-on-label">Ook op</span>';
    item._alsoOn.forEach(function(name){
      var pk=providerKey(name);var logo=canonicalProviderLogo(pk);
      if(logo)alsoOnHtml+='<img src="'+logo+'" alt="'+name+'" title="'+name+'" loading="lazy">';
      else alsoOnHtml+='<span style="font-size:10px;color:var(--t3)">'+name+'</span>';
    });
    alsoOnHtml+='</div>';
  }

  var metaL=tl+' - '+sn;
  return '<div class="crow" data-id="'+sid+'"><div class="crow-poster skeleton-poster">'+(poster?'<img src="'+poster+'" alt="'+title+'" loading="lazy" onload="this.parentElement.classList.remove(\'skeleton-poster\')" onerror="this.parentElement.classList.remove(\'skeleton-poster\');this.parentElement.innerHTML=\'<div class=crow-fb>'+title.replace(/'/g,'').replace(/"/g,'')+'</div>\'">':'<div class="crow-fb" id="fb-'+sid+'">'+title+'</div>')+'</div><div class="crow-info"><div class="crow-title">'+title+'</div>'+epBadge+'<div class="crow-meta">'+metaL+'</div>'+alsoOnHtml+'</div><div class="crow-badge '+cls+'">'+tl+'</div></div>';
}

function toggleSection(key){collapsedSections[key]=!collapsedSections[key];var sec=document.getElementById('svc-'+key);if(sec)sec.classList.toggle('collapsed');}
function enrichMissingPosters(){var missing=allItems.filter(function(i){return !i.img&&!imgCache[i.id]&&i.title;});var idx=0;function next(){if(idx>=missing.length)return;var batch=missing.slice(idx,idx+6);idx+=6;Promise.all(batch.map(function(item){var type=item._type==='movie'?'movie':'tv';return tmdb('/search/'+type,{query:item.title,language:'nl-NL'}).then(function(res){var hit=(res.results||[]).find(function(r){return r.poster_path;});if(!hit||!hit.poster_path)return;var url=TMDB_IMG+hit.poster_path;imgCache[item.id]=url;item.img=url;}).catch(function(){});})).then(next);}next();}


function setType(f){
  activeTab=f;haptic('light');
  document.querySelectorAll('.bnav').forEach(function(n){n.classList.toggle('active',n.getAttribute('data-f')===f);});
  var dt=document.getElementById('dateTabs');var sb=document.getElementById('svcBar');var fb=document.getElementById('filterBar');var sh=document.getElementById('swipeHintBar');
  if(f==='stream'){selectedDate=todayISO();streamType='all';streamSubFilter=null;svcBarVisible=false;dt.style.display='';if(sh)sh.style.display='';sb.style.display='none';fb.style.display='';updateSvcClearFloat();buildFilterChips();buildDateTabs();renderMain();}
  else if(f==='top10'){dt.style.display='none';if(sh)sh.style.display='none';sb.style.display='none';fb.style.display='none';updateSvcClearFloat();renderTop10();}
  else if(f==='kijktip'){dt.style.display='none';if(sh)sh.style.display='none';sb.style.display='none';fb.style.display='none';updateSvcClearFloat();renderKijktip();}
  else if(f==='spinkijk'){dt.style.display='none';if(sh)sh.style.display='none';sb.style.display='none';fb.style.display='none';updateSvcClearFloat();renderSpinKijk();}
  else if(f==='search'){dt.style.display='none';if(sh)sh.style.display='none';sb.style.display='none';fb.style.display='none';updateSvcClearFloat();renderSearch();}
  else if(f==='settings'){dt.style.display='none';if(sh)sh.style.display='none';sb.style.display='none';fb.style.display='none';updateSvcClearFloat();renderSettings();}
  else if(f==='mylist'){dt.style.display='none';if(sh)sh.style.display='none';sb.style.display='none';fb.style.display='none';updateSvcClearFloat();renderMyList();}
}

/* ── MODAL with cast, similar ── */
function openModal(rawId){
  var overlay=document.getElementById('overlay');var si=document.getElementById('si');var sd=document.getElementById('sd');var wb=document.getElementById('wb');var shareBtn=document.getElementById('shareBtn');var ratingsRow=document.getElementById('ratingsRow');
  var castRow=document.getElementById('castRow');var similarRow=document.getElementById('similarRow');var alsoOnRow=document.getElementById('alsoOnRow');
  var item=allItems.find(function(i){return String(i.id)===String(rawId);});if(!item)return;currentModalItem=item;haptic('light');
  var title=item.title,_src=item._src,_style=item._style,_type=item._type,_source=item._source,tmdb_id=item.tmdb_id;
  var svcName=capitalizeProvider(_src&&_src.name||'Streaming');var color=_style&&_style.color||'#40e86a';var initPoster=imgCache[item.id]||item.img||'';
  si.innerHTML='<div class="sheet-header"><div class="sp">'+(initPoster?'<img src="'+initPoster+'" alt="">':'')+'</div><div class="sinf"><div class="ssvc" style="color:'+color+'">'+svcName+'</div><div class="stitle">'+title+'</div><div class="smeta">'+(_type==='movie'?'Film':'Serie')+' - laden...</div></div></div>';
  sd.textContent=item.overview||'Beschrijving laden...';ratingsRow.style.display='none';ratingsRow.innerHTML='';wb.style.display='none';if(shareBtn)shareBtn.style.display='flex';
  if(castRow){castRow.style.display='none';castRow.innerHTML='';}
  if(similarRow){similarRow.style.display='none';similarRow.innerHTML='';}
  if(alsoOnRow){alsoOnRow.style.display='none';alsoOnRow.innerHTML='';}
  overlay.classList.add('open');document.body.style.overflow='hidden';
  var fullTitle=title,year='',runtime='',genres='',rawOverview=item.overview||'',watchLink=null,imdbId=null,seasonInfo=item._season?'Seizoen '+item._season:'',posterUrl=initPoster,tmdbRating=item.user_rating||0;
  var resolvedTmdbId=tmdb_id||(_source==='tmdb'?String(rawId).replace(/tmdb-(\d+)-.*/,'$1'):null);
  var chain=Promise.resolve();
  if(resolvedTmdbId){chain=chain.then(function(){var cKey='tmdb-'+_type+'-'+resolvedTmdbId;if(detailCache[cKey])return detailCache[cKey];var path=_type==='movie'?'/movie/'+resolvedTmdbId:'/tv/'+resolvedTmdbId;return Promise.all([tmdb(path,{language:'nl-NL'}),tmdb(path+'/watch/providers'),tmdb(path+'/external_ids').catch(function(){return{};}),tmdb(path+'/credits',{language:'nl-NL'}).catch(function(){return{cast:[]};}),tmdb(path+'/recommendations',{language:'nl-NL',page:1}).catch(function(){return{results:[]};})]).then(function(r){detailCache[cKey]={det:r[0],prov:r[1],extIds:r[2],credits:r[3],recommendations:r[4]};return detailCache[cKey];}).catch(function(){detailCache[cKey]=null;return null;});}).then(function(cached){if(cached&&cached.det){var d=cached.det;fullTitle=d.title||d.name||title;year=(d.release_date||d.first_air_date||'').slice(0,4);runtime=d.runtime?d.runtime+' min':'';tmdbRating=d.vote_average||tmdbRating;genres=(d.genres||[]).slice(0,4).map(function(g){return '<span class="stag">'+g.name+'</span>';}).join('');if(d.overview)rawOverview=d.overview;if(_type==='tv'&&d.number_of_seasons)seasonInfo=d.number_of_seasons+' seizoen'+(d.number_of_seasons>1?'en':'');if(d.poster_path){posterUrl=TMDB_IMG+d.poster_path;imgCache[item.id]=posterUrl;item.img=posterUrl;}var nlProv=cached.prov&&cached.prov.results&&cached.prov.results.NL;if(nlProv&&nlProv.link)watchLink=nlProv.link;imdbId=cached.extIds&&cached.extIds.imdb_id||null;

    if(cached.credits&&castRow){
      var cast=(cached.credits.cast||[]).slice(0,10);
      if(cast.length){
        castRow.innerHTML='<div class="cast-row-title">Cast</div><div class="cast-scroll">'+cast.map(function(c){
          var photo=c.profile_path?'https://image.tmdb.org/t/p/w185'+c.profile_path:'';
          return '<div class="cast-item">'+(photo?'<img class="cast-photo" src="'+photo+'" alt="'+c.name+'" loading="lazy">':'<div class="cast-photo"></div>')+'<div class="cast-name">'+c.name+'</div><div class="cast-char">'+(c.character||'')+'</div></div>';
        }).join('')+'</div>';
        castRow.style.display='block';
      }
    }

    if(cached.recommendations&&similarRow){
      var recs=(cached.recommendations.results||[]).filter(function(s){return s.poster_path;});
      var origLang=d.original_language||'en';
      recs.sort(function(a,b){
        var aLang=(a.original_language||'')=== origLang?1:0;
        var bLang=(b.original_language||'')=== origLang?1:0;
        if(aLang!==bLang)return bLang-aLang;
        return(b.vote_count||0)-(a.vote_count||0);
      });
      var sims=recs.slice(0,8);
      if(sims.length){
        similarRow.innerHTML='<div class="similar-row-title">Vergelijkbaar</div><div class="similar-scroll">'+sims.map(function(s){
          var sPoster='https://image.tmdb.org/t/p/w185'+s.poster_path;
          var sTitle=(s.title||s.name||'').replace(/'/g,"&#39;");
          var sMt=s.title?'movie':'tv';
          return '<div class="similar-item" data-tmdb="'+s.id+'" data-mt="'+sMt+'" data-title="'+sTitle+'"><img class="similar-poster skeleton-poster" src="'+sPoster+'" alt="'+sTitle+'" loading="lazy" onload="this.classList.remove(\'skeleton-poster\')"><div class="similar-name">'+sTitle+'</div></div>';
        }).join('')+'</div>';
        similarRow.style.display='block';
        similarRow.querySelectorAll('.similar-item').forEach(function(el){el.addEventListener('click',function(){closeModal();setTimeout(function(){openTop10Modal(el.getAttribute('data-tmdb'),el.getAttribute('data-mt'),el.getAttribute('data-title'));},300);});});
      }
    }
  }});}

  chain.then(function(){
    if(!watchLink){var svc=(_src&&_src.name||'').toLowerCase();if(svc.includes('netflix'))watchLink='https://www.netflix.com/search?q='+encodeURIComponent(fullTitle);else if(svc.includes('prime'))watchLink='https://www.amazon.nl/s?k='+encodeURIComponent(fullTitle);else if(svc.includes('disney'))watchLink='https://www.disneyplus.com/search/'+encodeURIComponent(fullTitle);else if(svc.includes('apple'))watchLink='https://tv.apple.com/';else if(svc.includes('max'))watchLink='https://www.max.com/';else if(svc.includes('sky'))watchLink='https://www.skyshowtime.com/';else if(svc.includes('videoland'))watchLink='https://www.videoland.com/';else if(svc.includes('path'))watchLink='https://www.pathe-thuis.nl/';else if(svc.includes('npo'))watchLink='https://npo.nl/';else if(svc.includes('paramount'))watchLink='https://www.paramountplus.com/nl/';else if(svc.includes('discovery'))watchLink='https://www.discoveryplus.com/nl/';}
    var mp=[_type==='movie'?'Film':'Serie'];if(year)mp.push(year);if(runtime)mp.push(runtime);if(_type==='tv'&&seasonInfo)mp.push(seasonInfo);
    si.innerHTML='<div class="sheet-header"><div class="sp">'+(posterUrl?'<img src="'+posterUrl+'" alt="">':'')+'</div><div class="sinf"><div class="ssvc" style="color:'+color+'">'+svcName+'</div><div class="stitle">'+fullTitle+'</div><div class="smeta">'+mp.join(' - ')+'</div><div class="stags">'+genres+'</div></div></div>';
    sd.textContent=rawOverview||'Geen beschrijving beschikbaar.';
    /* If overview is empty or English, try to fetch NL version then EN fallback */
    if(resolvedTmdbId){
      if(!rawOverview||rawOverview==='Geen beschrijving beschikbaar.'){
        /* No overview at all - try NL then EN */
        tmdb('/'+(_type==='movie'?'movie':'tv')+'/'+resolvedTmdbId,{language:'nl-NL'}).then(function(nlData){
          if(nlData&&nlData.overview&&currentModalItem===item){
            sd.textContent=nlData.overview;
          }else{
            /* Try English */
            return tmdb('/'+(_type==='movie'?'movie':'tv')+'/'+resolvedTmdbId,{language:'en-US'}).then(function(enData){
              if(enData&&enData.overview&&currentModalItem===item){
                sd.innerHTML='<span class="desc-lang-tag">Beschrijving in het Engels</span>'+enData.overview;
              }
            });
          }
        }).catch(function(){});
      }else if(/^[A-Za-z\s]{20,}/.test(rawOverview.slice(0,60))){
        tmdb('/'+(_type==='movie'?'movie':'tv')+'/'+resolvedTmdbId,{language:'nl-NL'}).then(function(nlData){
          if(nlData&&nlData.overview&&currentModalItem===item){
            sd.textContent=nlData.overview;
          }else if(currentModalItem===item){
            sd.innerHTML='<span class="desc-lang-tag">Beschrijving in het Engels</span>'+rawOverview;
          }
        }).catch(function(){});
      }
    }

    if(item._alsoOn&&item._alsoOn.length>0&&alsoOnRow){
      var aoHtml='<span class="also-on-label">Ook op:</span>';
      item._alsoOn.forEach(function(name){var pk=providerKey(name);var logo=canonicalProviderLogo(pk);if(logo)aoHtml+='<img class="also-on-logo" src="'+logo+'" alt="'+name+'" title="'+name+'">';else aoHtml+='<span class="also-on-label">'+name+'</span>';});
      alsoOnRow.innerHTML=aoHtml;alsoOnRow.style.display='flex';
    }

    var chips=[];var imdbUrl=imdbId?'https://www.imdb.com/title/'+imdbId+'/':'https://www.imdb.com/find/?q='+encodeURIComponent(fullTitle)+'&s=tt';chips.push('<a class="rating-chip imdb" href="'+imdbUrl+'" target="_blank" rel="noopener"><span class="chip-logo">IMDb</span>Bekijk in IMDb</a>');chips.push('<a class="rating-chip rt" href="https://www.rottentomatoes.com/search?search='+encodeURIComponent(fullTitle)+'" target="_blank" rel="noopener"><span class="chip-logo">RT</span>Bekijk in RT</a>');ratingsRow.innerHTML=chips.join('');ratingsRow.style.display='flex';
    if(watchLink){wb.href=watchLink;wb.style.display='flex';var wbLogo=document.getElementById('wbLogo');var wbLabel=document.getElementById('wbLabel');var pLogo=canonicalProviderLogo(item._key)||item._src&&item._src.logo_100px||null;if(!pLogo){var pKey=(item._key||'').toLowerCase();Object.keys(TMDB_NL_PROVIDERS).forEach(function(pid){var pr=TMDB_NL_PROVIDERS[pid];if(pr&&pr.name&&providerKey(pr.name)===pKey&&pr.logo)pLogo=pr.logo;});}if(pLogo&&wbLogo){wbLogo.src=pLogo;wbLogo.alt=svcName;wbLogo.style.display='block';}else if(wbLogo){wbLogo.style.display='none';}if(wbLabel)wbLabel.textContent='Kijken op '+svcName;}
    updateActionBtns();
  });
}
function updateActionBtns(){var followBtn=document.getElementById('followBtn');var followLbl=document.getElementById('followBtnLabel');var myListBtn=document.getElementById('myListBtn');var myListLbl=document.getElementById('myListBtnLabel');if(!currentModalItem){if(followBtn)followBtn.style.display='none';if(myListBtn)myListBtn.style.display='none';return;}if(followBtn)followBtn.style.display='flex';if(myListBtn)myListBtn.style.display='flex';var fol=isFollowing(currentModalItem.id);if(followLbl)followLbl.textContent=fol?'Gevolgd':'Volgen';if(followBtn)followBtn.classList.toggle('is-active',fol);var inList=isInMyList(currentModalItem.id);if(myListLbl)myListLbl.textContent=inList?'In mijn lijst':'Mijn lijst';if(myListBtn)myListBtn.classList.toggle('is-active',inList);}
function closeModal(){haptic('light');document.getElementById('overlay').classList.remove('open');document.body.style.overflow='';currentModalItem=null;}


/* ── MY LIST ── */
function renderMyList(){document.querySelectorAll('.bnav').forEach(function(n){n.classList.toggle('active',n.getAttribute('data-f')==='mylist');});var dt=document.getElementById('dateTabs');var sb=document.getElementById('svcBar');var fb=document.getElementById('filterBar');if(dt)dt.style.display='none';if(sb)sb.style.display='none';if(fb)fb.style.display='none';var main=document.getElementById('main');main.innerHTML='';var sec=document.createElement('section');sec.className='settings-section';var html='<div class="set-title">Mijn lijst</div>';if(!myList.length){html+='<div class="kt-empty" style="padding:40px 20px"><div class="kt-empty-title">Lijst is leeg</div><div class="kt-empty-sub">Voeg toe via het + knopje bij de film of serie.</div></div>';}else{html+='<div class="fav-list">'+myList.map(function(f){var poster=f.img||'';var tl=f._type==='movie'?'Film':'Serie';var sn=capitalizeProvider(f._src&&f._src.name||'');return '<div class="crow fav-crow" data-id="'+f.id+'"><div class="crow-poster">'+(poster?'<img src="'+poster+'" alt="" loading="lazy">':'<div class="crow-fb">'+f.title+'</div>')+'</div><div class="crow-info"><div class="crow-title">'+f.title+'</div><div class="crow-meta">'+tl+(sn?' · '+sn:'')+'</div></div><button class="mylist-remove-btn" data-id="'+f.id+'" aria-label="Verwijder">✕</button></div>';}).join('')+'</div>';}sec.innerHTML=html;main.appendChild(sec);sec.querySelectorAll('.fav-crow').forEach(function(row){row.addEventListener('click',function(e){if(e.target.closest('.mylist-remove-btn'))return;openModal(row.getAttribute('data-id'));});});sec.querySelectorAll('.mylist-remove-btn').forEach(function(btn){btn.addEventListener('click',function(e){e.stopPropagation();removeFromMyList(btn.getAttribute('data-id'));renderMyList();showToast('Verwijderd uit lijst');});});}

/* ── TOP 10 ── */
var top10Period='week',top10Category='all',top10Cache={};
function fetchTop10(p,c){var ck='t10_'+p+'_'+c;if(top10Cache[ck])return Promise.resolve(top10Cache[ck]);var ep=c==='all'?'/trending/all/'+p:'/trending/'+c+'/'+p;return Promise.all([tmdb(ep,{language:'nl-NL',region:'NL',page:1}).catch(function(){return{results:[]};}),tmdb(ep,{language:'nl-NL',region:'NL',page:2}).catch(function(){return{results:[]};}),tmdb(ep,{language:'nl-NL',region:'NL',page:3}).catch(function(){return{results:[]};})]).then(function(pages){var r=[];pages.forEach(function(d){r=r.concat(d.results||[]);});var seen={};r=r.filter(function(x){if(seen[x.id])return false;seen[x.id]=true;return true;});top10Cache[ck]=r.slice(0,60);return top10Cache[ck];});}
function renderTop10(){var main=document.getElementById('main');main.innerHTML='';var sec=document.createElement('section');sec.className='top10-section';sec.innerHTML='<div class="top10-title">Top 10 trending deze week</div><div class="top10-sub">Meest bekeken op streaming in Nederland</div><div class="t10-tabs" id="t10tabs"></div><div id="t10list" class="t10-list"><div class="t10-loading"><div class="ld-spinner" style="margin:0 auto 8px"></div>Laden...</div></div>';main.appendChild(sec);renderT10Tabs();fetchTop10(top10Period,top10Category).then(function(items){var el=document.getElementById('t10list');if(!el)return;if(!items.length){el.innerHTML='<div class="t10-loading">Geen data.</div>';return;}var checks=items.map(function(item){var isTV=item.media_type==='tv'||(!item.title&&item.name);var type=isTV?'tv':'movie';return tmdb('/'+type+'/'+item.id+'/watch/providers').then(function(pd){var nlFlat=pd&&pd.results&&pd.results.NL&&pd.results.NL.flatrate||[];item._nlProviders=nlFlat;item._hasNLStream=nlFlat.length>0;item._streamerLabel='';for(var i=0;i<nlFlat.length;i++){var m=matchProvider(nlFlat[i].provider_name);if(m){item._streamerLabel=m.name;break;}}if(!item._streamerLabel&&nlFlat.length>0)item._streamerLabel=nlFlat[0].provider_name||'';}).catch(function(){item._nlProviders=[];item._hasNLStream=false;item._streamerLabel='';});});Promise.all(checks).then(function(){var streamable=items.filter(function(item){return item._hasNLStream;}).slice(0,10);if(!streamable.length){el.innerHTML='<div class="sp-empty">Geen streambare content gevonden.</div>';return;}el.innerHTML=streamable.map(function(item,idx){var rank=idx+1;var isTV=item.media_type==='tv'||(!item.title&&item.name);var title=item.title||item.name||'?';var poster=item.poster_path?TMDB_IMG+item.poster_path:'';var year=(item.release_date||item.first_air_date||'').slice(0,4);var score=item.vote_average?Number(item.vote_average).toFixed(1):'';var tl=isTV?'Serie':'Film';var rc=rank<=3?'r'+rank:'';var safe=title.replace(/'/g,"&#39;");var mt=item.media_type||(isTV?'tv':'movie');var streamerHtml=item._streamerLabel?'<span class="t10-streamer">'+item._streamerLabel+'</span>':'';return '<div class="t10-item" data-tmdb="'+item.id+'" data-mt="'+mt+'" data-title="'+safe+'"><div class="t10-rank '+rc+'">'+rank+'</div><div class="t10-poster">'+(poster?'<img src="'+poster+'" alt="'+safe+'" loading="lazy">':'')+'</div><div class="t10-info"><div class="t10-name">'+title+'<span class="t10-badge">'+tl+'</span></div><div class="t10-meta">'+year+streamerHtml+'</div></div>'+(score?'<div class="t10-score">'+score+'</div>':'')+'</div>';}).join('');});});}
function renderT10Tabs(){var c=document.getElementById('t10tabs');if(!c)return;c.innerHTML=['all','movie','tv'].map(function(cat){return '<button class="t10-tab'+(top10Category===cat?' active':'')+'" data-c="'+cat+'">'+(cat==='all'?'Alles':cat==='movie'?'Films':'Series')+'</button>';}).join('');}
function openTop10Modal(tmdbId,mt,title){var existing=allItems.find(function(i){return String(i.tmdb_id)===String(tmdbId);});if(existing){openModal(existing.id);return;}var fi={id:'t10-'+tmdbId,title:title,img:null,_type:mt==='tv'?'tv':'movie',_date:'',_src:{name:'Streaming'},_style:{color:'#40e86a',text:'#fff'},_key:'streaming',_originType:'licensed',_source:'tmdb',tmdb_id:tmdbId,overview:'',user_rating:0,_genres:[]};allItems.push(fi);openModal('t10-'+tmdbId);}

/* ══════════════════════════════════════════════════════════
   SPIN & KIJK v2 — Large diverse pool, per-streamer discovery,
   1980+ filter, English priority, session-wide dedup,
   unlimited spins
   ══════════════════════════════════════════════════════════ */
var spinExcluded=[];var spinFilter='all';var spinCache=null;var spinCurrent=null;
var spinSelectedStreamers=[];
var spinProviderCache={};
var spinSeenIds={};/* tracks ALL shown ids this session — reduces repeats */
var spinDiscoverCache=null;/* per-streamer discover results */

/* ── Helper: build watch link from streamer name ── */
function buildWatchLink(streamer,title){
  var svc=(streamer||'').toLowerCase();var t=encodeURIComponent(title||'');
  if(svc.includes('netflix'))return 'https://www.netflix.com/search?q='+t;
  if(svc.includes('prime'))return 'https://www.amazon.nl/s?k='+t;
  if(svc.includes('disney'))return 'https://www.disneyplus.com/search/'+t;
  if(svc.includes('apple'))return 'https://tv.apple.com/';
  if(svc.includes('max'))return 'https://www.max.com/';
  if(svc.includes('sky'))return 'https://www.skyshowtime.com/';
  if(svc.includes('videoland'))return 'https://www.videoland.com/';
  if(svc.includes('path'))return 'https://www.pathe-thuis.nl/';
  if(svc.includes('npo'))return 'https://npo.nl/';
  if(svc.includes('paramount'))return 'https://www.paramountplus.com/nl/';
  if(svc.includes('discovery'))return 'https://www.discoveryplus.com/nl/';
  if(svc.includes('viaplay'))return 'https://viaplay.nl/';
  if(svc.includes('mubi'))return 'https://mubi.com/';
  if(svc.includes('canal'))return 'https://www.canalplus.com/nl/';
  if(svc.includes('cinemember'))return 'https://www.cinemember.nl/';
  if(svc.includes('film1'))return 'https://www.film1.nl/';
  return null;
}

/* ── Helper: check if title passes 1980+ and English-priority filters ── */
function spinPassesFilters(item){
  /* 1980+ filter */
  var dateStr2=item.release_date||item.first_air_date||'';
  var year=parseInt(dateStr2.slice(0,4),10);
  if(year&&year<1980)return false;
  /* English priority: non-English titles need high popularity */
  var lang=(item.original_language||'').toLowerCase();
  if(lang!=='en'&&lang!=='nl'){
    /* Allow non-EN/NL only if popularity >= 40 or vote_count >= 500 */
    if((item.popularity||0)<40&&(item.vote_count||0)<500)return false;
  }
  return true;
}

/* ── Fetch large diverse pool (IMDB-style via TMDB) ── */
function fetchSpinPool(){
  if(spinCache)return Promise.resolve(spinCache);
  var fetches=[];
  /* Top Rated ≈ IMDB Top 250 — 5 pages each */
  for(var tr=1;tr<=5;tr++){
    fetches.push(tmdb('/movie/top_rated',{language:'nl-NL',region:'NL',page:tr}).catch(function(){return{results:[]};}));
    fetches.push(tmdb('/tv/top_rated',{language:'nl-NL',page:tr}).catch(function(){return{results:[]};}));
  }
  /* Popular ≈ IMDB Most Popular — 5 pages each */
  for(var pp=1;pp<=5;pp++){
    fetches.push(tmdb('/movie/popular',{language:'nl-NL',region:'NL',page:pp}).catch(function(){return{results:[]};}));
    fetches.push(tmdb('/tv/popular',{language:'nl-NL',page:pp}).catch(function(){return{results:[]};}));
  }
  /* Trending week — recent buzz, 3 pages */
  for(var tw=1;tw<=3;tw++){
    fetches.push(tmdb('/trending/all/week',{language:'nl-NL',region:'NL',page:tw}).catch(function(){return{results:[]};}));
  }
  return Promise.all(fetches).then(function(pages){
    var pool=[];var seen={};
    pages.forEach(function(page){
      (page.results||[]).forEach(function(x){
        if(seen[x.id])return;seen[x.id]=true;
        if(!x.media_type){x.media_type=x.title?'movie':'tv';}
        if(!spinPassesFilters(x))return;
        pool.push(x);
      });
    });
    /* Shuffle the pool for better randomness */
    for(var i=pool.length-1;i>0;i--){
      var j=Math.floor(Math.random()*(i+1));
      var tmp=pool[i];pool[i]=pool[j];pool[j]=tmp;
    }
    spinCache=pool;
    console.log('[Spin&Kijk] Pool: '+pool.length+' titels');
    return pool;
  });
}

/* ── Per-streamer discovery — ensures every NL streamer has content ── */
function fetchSpinDiscover(){
  if(spinDiscoverCache)return Promise.resolve(spinDiscoverCache);
  /* Build provider ID map per streamer key */
  var streamerPids={};
  Object.keys(TMDB_NL_PROVIDERS).forEach(function(pid){
    var prov=TMDB_NL_PROVIDERS[pid];if(!prov||!prov.name)return;
    var pk=providerKey(prov.name);
    if(!streamerPids[pk])streamerPids[pk]=[];
    if(streamerPids[pk].indexOf(pid)===-1)streamerPids[pk].push(pid);
  });
  var fetches=[];var fetchKeys=[];
  Object.keys(streamerPids).forEach(function(pk){
    var pids=streamerPids[pk].join('|');
    /* Fetch 3 pages of movies and 3 pages of tv for each streamer */
    for(var pg=1;pg<=3;pg++){
      fetches.push(tmdb('/discover/movie',{with_watch_providers:pids,watch_region:'NL',language:'nl-NL',sort_by:'popularity.desc',page:pg,'primary_release_date.gte':'1980-01-01'}).catch(function(){return{results:[]};}));
      fetchKeys.push({pk:pk,type:'movie'});
      fetches.push(tmdb('/discover/tv',{with_watch_providers:pids,watch_region:'NL',language:'nl-NL',sort_by:'popularity.desc',page:pg,'first_air_date.gte':'1980-01-01'}).catch(function(){return{results:[]};}));
      fetchKeys.push({pk:pk,type:'tv'});
    }
  });
  return Promise.all(fetches).then(function(results){
    var discoverMap={};/* pk -> [{item, type}] */
    results.forEach(function(page,idx){
      var info=fetchKeys[idx];
      if(!discoverMap[info.pk])discoverMap[info.pk]=[];
      (page.results||[]).forEach(function(x){
        if(!x.media_type)x.media_type=info.type;
        if(spinPassesFilters(x)){
          discoverMap[info.pk].push(x);
        }
      });
    });
    spinDiscoverCache=discoverMap;
    var total=0;Object.keys(discoverMap).forEach(function(k){total+=discoverMap[k].length;});
    console.log('[Spin&Kijk] Discover: '+total+' titels over '+Object.keys(discoverMap).length+' streamers');
    return discoverMap;
  });
}

/* ── True random pick (not weighted — more variety) ── */
function trueRandom(items){
  return items[Math.floor(Math.random()*items.length)];
}

function getAvailableSpinStreamers(){
  var spinKeys=['netflix','prime video','max','disney+','videoland','apple tv+','skyshowtime'];
  var streamers=[];
  spinKeys.forEach(function(key){
    var wp=WANTED_PROVIDERS.find(function(p){return p.key===key;});
    if(wp)streamers.push({key:wp.key,name:wp.name,color:wp.color,logo:canonicalProviderLogo(wp.key)});
  });
  return streamers;
}

function renderSpinKijk(){
  var main=document.getElementById('main');main.innerHTML='';
  var sec=document.createElement('section');sec.className='spin-section';
  sec.innerHTML='<div class="spin-hdr"><div class="spin-title">Spin & Kijk</div><div class="spin-sub">Geen idee wat je vanavond kijkt? <br />Draai het wiel en laat het lot beslissen.🍿🔮</div></div>'+
    '<div class="spin-filter-row" id="spinFilterRow">'+
      '<button class="spin-filter-btn'+(spinFilter==='all'?' active':'')+'" data-sf="all">Alles</button>'+
      '<button class="spin-filter-btn'+(spinFilter==='movie'?' active':'')+'" data-sf="movie">Films</button>'+
      '<button class="spin-filter-btn'+(spinFilter==='tv'?' active':'')+'" data-sf="tv">Series</button>'+
    '</div>'+
    '<div class="spin-streamer-filter" id="spinStreamerFilter">'+
      '<button class="spin-streamer-toggle" id="spinStreamerToggle">'+
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>'+
        '<span id="spinStreamerLabel">'+(spinSelectedStreamers.length?spinSelectedStreamers.length+' streamers':'Alle streamers')+'</span>'+
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>'+
      '</button>'+
      '<div class="spin-streamer-dropdown" id="spinStreamerDropdown" style="display:none"></div>'+
    '</div>'+
    '<div class="spin-stage" id="spinStage">'+
      '<div class="spin-idle">'+
        '<div class="spin-wheel-wrap"><div class="spin-wheel" id="spinWheel">'+
         '<svg width="160" height="160" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="s" cx="40%" cy="35%" r="60%"><stop stop-color="#fff" stop-opacity=".18"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><filter id="f" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dy=".6" stdDeviation=".6" flood-color="#0a2e12" flood-opacity=".35"/></filter><clipPath id="c"><circle cx="12" cy="12" r="10"/></clipPath></defs><circle cx="12" cy="12" r="10.8" fill="none" stroke="#0a2e12" stroke-width=".3" opacity=".2"/><g clip-path="url(#c)"><g transform="translate(12 12)"><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#2da547"/><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#6dd692" transform="rotate(45)"/><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#249940" transform="rotate(90)"/><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#7fdc9a" transform="rotate(135)"/><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#2da547" transform="rotate(180)"/><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#6dd692" transform="rotate(225)"/><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#249940" transform="rotate(270)"/><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#7fdc9a" transform="rotate(315)"/><g stroke="#1a7a32" stroke-width=".3" opacity=".5"><line y2="-11"/><line x2="7.78" y2="-7.78"/><line x2="11"/><line x2="7.78" y2="7.78"/><line y2="11"/><line x2="-7.78" y2="7.78"/><line x2="-11"/><line x2="-7.78" y2="-7.78"/></g></g><circle cx="12" cy="12" r="10" fill="url(#s)"/></g><circle cx="12" cy="12" r="10" stroke="#1a7a32" stroke-width="1" fill="none"/><circle cx="12" cy="12" r="10.5" stroke="#0f5422" stroke-width=".2" fill="none" opacity=".4"/><g filter="url(#f)"><polygon points="12,1.2 10.8,3.2 13.2,3.2" fill="#0b401a" stroke="#2da547" stroke-width=".3" stroke-linejoin="round"/></g><circle cx="12" cy="12" r="2.2" fill="#0f5422" stroke="#2da547" stroke-width=".8"/><circle cx="12" cy="12" r="1.1" fill="#2da547"/><circle cx="11.7" cy="11.7" r=".4" fill="#7fdc9a" opacity=".6"/></svg>'+
        '</div></div>'+
        '<button class="spin-go-btn" id="spinGoBtn">Spin!</button>'+
      '</div>'+
    '</div>'+
    '<div class="spin-excluded-info" id="spinExInfo"></div>';
  main.appendChild(sec);

  sec.querySelector('#spinFilterRow').addEventListener('click',function(e){
    var btn=e.target.closest('.spin-filter-btn');if(!btn)return;
    haptic('light');spinFilter=btn.getAttribute('data-sf');
    sec.querySelectorAll('.spin-filter-btn').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-sf')===spinFilter);});
  });

  var streamerToggle=sec.querySelector('#spinStreamerToggle');
  var streamerDropdown=sec.querySelector('#spinStreamerDropdown');
  if(streamerToggle){
    streamerToggle.addEventListener('click',function(){
      var isOpen=streamerDropdown.style.display!=='none';
      streamerDropdown.style.display=isOpen?'none':'flex';
      if(!isOpen)renderSpinStreamerDropdown(streamerDropdown);
    });
  }

  sec.querySelector('#spinGoBtn').addEventListener('click',function(){doSpin(sec);});
  updateSpinExInfo();
}

function renderSpinStreamerDropdown(dropdown){
  var streamers=getAvailableSpinStreamers();
  dropdown.innerHTML=streamers.map(function(s){
    var isSelected=spinSelectedStreamers.indexOf(s.key)!==-1;
    var logoHtml=s.logo?'<img src="'+s.logo+'" alt="'+s.name+'">':'<div class="spin-dd-dot" style="background:'+s.color+'"></div>';
    return '<button class="spin-dd-item'+(isSelected?' selected':'')+'" data-key="'+s.key+'">'+
      '<span class="spin-dd-check">'+(isSelected?'✓':'')+'</span>'+
      logoHtml+
      '<span>'+s.name+'</span>'+
    '</button>';
  }).join('')+
  '<button class="spin-dd-clear">Wis selectie</button>';

  dropdown.querySelectorAll('.spin-dd-item').forEach(function(btn){
    btn.addEventListener('click',function(){
      var key=btn.getAttribute('data-key');
      var idx=spinSelectedStreamers.indexOf(key);
      if(idx>=0){spinSelectedStreamers.splice(idx,1);}
      else{spinSelectedStreamers.push(key);}
      renderSpinStreamerDropdown(dropdown);
      updateSpinStreamerLabel();
    });
  });
  var clearBtn=dropdown.querySelector('.spin-dd-clear');
  if(clearBtn)clearBtn.addEventListener('click',function(){
    spinSelectedStreamers=[];
    renderSpinStreamerDropdown(dropdown);
    updateSpinStreamerLabel();
  });
}

function updateSpinStreamerLabel(){
  var label=document.getElementById('spinStreamerLabel');
  if(!label)return;
  if(spinSelectedStreamers.length===0){label.textContent='Alle streamers';}
  else if(spinSelectedStreamers.length<=2){
    label.textContent=spinSelectedStreamers.map(function(k){return capitalizeProvider(k);}).join(', ');
  }else{
    label.textContent=spinSelectedStreamers.length+' streamers';
  }
}

function doSpin(sec){
  var stage=sec.querySelector('#spinStage');
  stage.innerHTML='<div class="spin-spinning"><div class="spin-wheel-wrap"><div class="spin-wheel spinning" id="spinWheel">'+
    '<svg width="160" height="160" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="s" cx="40%" cy="35%" r="60%"><stop stop-color="#fff" stop-opacity=".18"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><filter id="f" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dy=".6" stdDeviation=".6" flood-color="#0a2e12" flood-opacity=".35"/></filter><clipPath id="c"><circle cx="12" cy="12" r="10"/></clipPath></defs><circle cx="12" cy="12" r="10.8" fill="none" stroke="#0a2e12" stroke-width=".3" opacity=".2"/><g clip-path="url(#c)"><g transform="translate(12 12)"><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#2da547"/><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#6dd692" transform="rotate(45)"/><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#249940" transform="rotate(90)"/><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#7fdc9a" transform="rotate(135)"/><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#2da547" transform="rotate(180)"/><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#6dd692" transform="rotate(225)"/><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#249940" transform="rotate(270)"/><path d="M0 0L0-11A11 11 0 0 1 7.78-7.78Z" fill="#7fdc9a" transform="rotate(315)"/><g stroke="#1a7a32" stroke-width=".3" opacity=".5"><line y2="-11"/><line x2="7.78" y2="-7.78"/><line x2="11"/><line x2="7.78" y2="7.78"/><line y2="11"/><line x2="-7.78" y2="7.78"/><line x2="-11"/><line x2="-7.78" y2="-7.78"/></g></g><circle cx="12" cy="12" r="10" fill="url(#s)"/></g><circle cx="12" cy="12" r="10" stroke="#1a7a32" stroke-width="1" fill="none"/><circle cx="12" cy="12" r="10.5" stroke="#0f5422" stroke-width=".2" fill="none" opacity=".4"/><circle cx="12" cy="12" r="1.1" fill="#2da547"/><circle cx="11.7" cy="11.7" r=".4" fill="#7fdc9a" opacity=".6"/></svg>'+
  '</div></div><div class="spin-spinning-text">Aan het draaien...</div></div>';
  haptic('medium');

  /* Load both pools in parallel */
  Promise.all([fetchSpinPool(),fetchSpinDiscover()]).then(function(res){
    var mainPool=res[0]||[];
    var discoverMap=res[1]||{};
    var hasStreamerFilter=spinSelectedStreamers.length>0;

    /* Build the candidate list */
    var candidates=[];var seen={};

    if(hasStreamerFilter){
      /* ── STREAMER FILTER ACTIVE: ONLY use discover results for selected streamers ── */
      spinSelectedStreamers.forEach(function(sk){
        var items=discoverMap[sk]||[];
        items.forEach(function(x){
          if(seen[x.id])return;seen[x.id]=true;
          candidates.push(x);
        });
      });
      /* Also scan the main pool for items that might be on these streamers
         (they already have cached provider info from prior spins) */
      mainPool.forEach(function(x){
        if(seen[x.id])return;
        var cKey=(x.media_type==='tv'?'tv':'movie')+'-'+x.id;
        var cached=spinProviderCache[cKey];
        if(cached){
          var nlFlat=cached&&cached.results&&cached.results.NL&&cached.results.NL.flatrate||[];
          var matches=nlFlat.some(function(p){
            var mp2=matchProvider(p.provider_name);
            return mp2&&spinSelectedStreamers.indexOf(mp2.key)!==-1;
          });
          if(matches){seen[x.id]=true;candidates.push(x);}
        }
      });
    }else{
      /* ── NO STREAMER FILTER: combine everything ── */
      mainPool.forEach(function(x){
        if(seen[x.id])return;seen[x.id]=true;
        candidates.push(x);
      });
      Object.keys(discoverMap).forEach(function(pk){
        (discoverMap[pk]||[]).forEach(function(x){
          if(seen[x.id])return;seen[x.id]=true;
          candidates.push(x);
        });
      });
    }

    /* Filter by type */
    if(spinFilter==='movie')candidates=candidates.filter(function(i){return i.media_type==='movie'||(!i.name&&i.title);});
    if(spinFilter==='tv')candidates=candidates.filter(function(i){return i.media_type==='tv'||(i.name&&!i.title);});

    /* Exclude skipped items */
    var excludedIds={};
    spinExcluded.forEach(function(e){excludedIds[e.id]=true;});
    candidates=candidates.filter(function(i){return !excludedIds[i.id];});

    /* Deprioritize already-seen-this-session items */
    var fresh=[];var stale=[];
    candidates.forEach(function(c){
      if(spinSeenIds[c.id])stale.push(c);
      else fresh.push(c);
    });
    var pool=fresh.length?fresh:stale;

    if(!pool.length){
      stage.innerHTML='<div class="spin-empty"><div class="spin-empty-title">Alles gedraaid!</div><div class="spin-empty-sub">Je hebt alle opties gezien. Reset om opnieuw te beginnen.</div><button class="spin-reset-btn" id="spinResetBtn">Reset</button></div>';
      sec.querySelector('#spinResetBtn').addEventListener('click',function(){spinExcluded=[];spinSeenIds={};updateSpinExInfo();renderSpinKijk();});
      return;
    }

    /* Allow many attempts — discover items are pre-filtered for the streamer,
       so most should pass, but we still verify via /watch/providers */
    var attempts=0;var maxAttempts=Math.min(pool.length,50);

    function tryPick(){
      if(attempts>=maxAttempts){
        stage.innerHTML='<div class="spin-empty"><div class="spin-empty-title">Geen streambare titels gevonden</div><div class="spin-empty-sub">Probeer andere filters of reset.</div><button class="spin-reset-btn" id="spinResetBtn">Reset</button></div>';
        var rb=sec.querySelector('#spinResetBtn');if(rb)rb.addEventListener('click',function(){spinExcluded=[];spinSeenIds={};spinSelectedStreamers=[];updateSpinExInfo();renderSpinKijk();});
        return;
      }

      var pick=trueRandom(pool);
      pool=pool.filter(function(x){return x.id!==pick.id;});
      attempts++;

      var isTV=pick.media_type==='tv'||(pick.name&&!pick.title);
      var type=isTV?'tv':'movie';

      var cacheKey=type+'-'+pick.id;
      var cachedProv=spinProviderCache[cacheKey];
      var provPromise=cachedProv!==undefined?Promise.resolve(cachedProv):
        tmdb('/'+type+'/'+pick.id+'/watch/providers').then(function(pd){
          spinProviderCache[cacheKey]=pd;return pd;
        }).catch(function(){spinProviderCache[cacheKey]=null;return null;});

      provPromise.then(function(pd){
        var nlFlat=pd&&pd.results&&pd.results.NL&&pd.results.NL.flatrate||[];
        if(!nlFlat.length){tryPick();return;}

      /* Verify streamer filter match — always limit to allowed spin streamers */
      var SPIN_ALLOWED_KEYS=['netflix','prime video','max','disney+','videoland','apple tv+','skyshowtime'];
      var activeKeys=hasStreamerFilter?spinSelectedStreamers:SPIN_ALLOWED_KEYS;
      var matchesStreamer=nlFlat.some(function(p){
        var mp2=matchProvider(p.provider_name);
        return mp2&&activeKeys.indexOf(mp2.key)!==-1;
      });
      if(!matchesStreamer){tryPick();return;}

        /* Find the matching streamer name to display */
        var streamer='';var sColor='var(--green)';
         for(var i=0;i<nlFlat.length;i++){
        var mp2=matchProvider(nlFlat[i].provider_name);
        if(mp2&&activeKeys.indexOf(mp2.key)!==-1){streamer=mp2.name;sColor=mp2.color;break;}
         }
        if(!streamer){
          for(var j=0;j<nlFlat.length;j++){var mp3=matchProvider(nlFlat[j].provider_name);if(mp3){streamer=mp3.name;sColor=mp3.color;break;}}
          if(!streamer&&nlFlat.length>0)streamer=nlFlat[0].provider_name||'';
        }

        var nlLink=buildWatchLink(streamer,pick.title||pick.name||'');
        if(!nlLink)nlLink=pd&&pd.results&&pd.results.NL&&pd.results.NL.link||null;

        spinSeenIds[pick.id]=true;
        spinCurrent={pick:pick,type:type,streamer:streamer,sColor:sColor,nlLink:nlLink,isTV:isTV};

        setTimeout(function(){
          haptic('heavy');
          renderSpinResult(sec,stage,pick,type,streamer,sColor,nlLink,isTV);
        },800);
      });
    }
    tryPick();
  });
}

function renderSpinResult(sec,stage,pick,type,streamer,sColor,nlLink,isTV){
  var poster=pick.poster_path?TMDB_IMG+pick.poster_path:'';
  var title=pick.title||pick.name||'?';
  var year=(pick.release_date||pick.first_air_date||'').slice(0,4);
  var score=pick.vote_average?Number(pick.vote_average).toFixed(1):'';
  var tl=isTV?'Serie':'Film';
  var safe=title.replace(/'/g,"&#39;").replace(/"/g,'&quot;');

  var streamerHtml=streamer?'<div class="spin-streamer" style="color:'+sColor+'">Beschikbaar op '+streamer+'</div>':'<div class="spin-streamer" style="color:var(--t3)">Niet gevonden op NL streaming</div>';
  var watchBtn=nlLink?'<a class="spin-watch-btn" href="'+nlLink+'" target="_blank" rel="noopener">Kijken op '+streamer+'</a>':'';

  stage.innerHTML='<div class="spin-result">'+
    '<div class="spin-result-card">'+
      '<div class="spin-poster">'+(poster?'<img src="'+poster+'" alt="'+safe+'">':'')+'</div>'+
      '<div class="spin-info">'+
        '<div class="spin-result-type">'+tl+(year?' · '+year:'')+'</div>'+
        '<div class="spin-result-title">'+title+'</div>'+
        streamerHtml+
        (score?'<div class="spin-score">⭐ '+score+'</div>':'')+
      '</div>'+
    '</div>'+
    '<div class="spin-actions">'+
      watchBtn+
      '<button class="spin-detail-btn" id="spinDetailBtn">Bekijk details</button>'+
      '<button class="spin-again-btn" id="spinAgainBtn">Opnieuw draaien</button>'+
      '<button class="spin-skip-btn" id="spinSkipBtn">Niet voor mij</button>'+
    '</div>'+
  '</div>';

  var detailBtn=sec.querySelector('#spinDetailBtn');
  if(detailBtn)detailBtn.addEventListener('click',function(){openTop10Modal(pick.id,type,title);});

  var againBtn=sec.querySelector('#spinAgainBtn');
  if(againBtn)againBtn.addEventListener('click',function(){doSpin(sec);});

  var skipBtn=sec.querySelector('#spinSkipBtn');
  if(skipBtn)skipBtn.addEventListener('click',function(){
    spinExcluded.push({id:pick.id,title:title});
    updateSpinExInfo();
    showToast('"'+title+'" overgeslagen');
    doSpin(sec);
  });
}

function updateSpinExInfo(){
  var el=document.getElementById('spinExInfo');if(!el)return;
  if(spinExcluded.length>0){
    el.innerHTML='<span>'+spinExcluded.length+' titel'+(spinExcluded.length>1?'s':'')+' overgeslagen</span><button class="spin-reset-link" id="spinResetLink">Reset</button>';
    el.style.display='flex';
    var resetLink=el.querySelector('#spinResetLink');
    if(resetLink)resetLink.addEventListener('click',function(){spinExcluded=[];spinSeenIds={};updateSpinExInfo();showToast('Filters gereset');});
  }else{
    el.style.display='none';
  }
}


/* ── SEARCH ── */
var searchTimeout=null;
function renderSearch(){var main=document.getElementById('main');main.innerHTML='';var sec=document.createElement('section');sec.className='search-section';sec.innerHTML='<div class="search-input-wrap"><svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input class="search-input" id="searchInput" type="text" placeholder="Zoek een film of serie..." autocomplete="off" autofocus></div><div id="searchResults" class="search-results"><div class="search-hint">Wil je weten of een film of serie te streamen is? Zoek nu!</div></div>';main.appendChild(sec);var inp=document.getElementById('searchInput');if(inp){inp.focus();inp.addEventListener('input',function(){clearTimeout(searchTimeout);var q=inp.value.trim();if(q.length<2){document.getElementById('searchResults').innerHTML='<div class="search-hint">Typ de naam van een film of serie om te zoeken.</div>';return;}searchTimeout=setTimeout(function(){doSearch(q);},350);});}}
function doSearch(q){
  var el=document.getElementById('searchResults');if(!el)return;
  el.innerHTML='<div class="search-hint">Zoeken naar "'+q+'"...</div>';
  var ql=q.toLowerCase();
  var localHits=allItems.filter(function(i){return i.title&&i.title.toLowerCase().indexOf(ql)!==-1&&i._key!=='search';});
  var seen={};var deduped=[];
  localHits.forEach(function(i){var k=(i.title||'').toLowerCase()+'|'+i._type;if(seen[k])return;seen[k]=true;deduped.push(i);});
  Promise.all([tmdb('/search/movie',{query:q,language:'nl-NL',region:'NL'}).catch(function(){return{results:[]};}),tmdb('/search/tv',{query:q,language:'nl-NL',region:'NL'}).catch(function(){return{results:[]};})]).then(function(res){
    var tmdbRaw=[];
    (res[0].results||[]).slice(0,10).forEach(function(m){var k=(m.title||m.name||'').toLowerCase()+'|movie';if(!seen[k]){seen[k]=true;tmdbRaw.push({raw:m,type:'movie'});}});
    (res[1].results||[]).slice(0,10).forEach(function(t){var k=(t.name||t.title||'').toLowerCase()+'|tv';if(!seen[k]){seen[k]=true;tmdbRaw.push({raw:t,type:'tv'});}});
    var tmdbHits=tmdbRaw.map(function(entry){var m=entry.raw;var item={id:'search-'+entry.type.charAt(0)+'-'+m.id,title:m.title||m.name||'',img:m.poster_path?TMDB_IMG+m.poster_path:null,_type:entry.type,_date:(entry.type==='movie'?m.release_date:m.first_air_date)||'',_src:{name:'Laden...'},_style:{color:'#666',text:'#fff'},_key:'search',_originType:'licensed',_source:'tmdb',tmdb_id:m.id,overview:m.overview||'',user_rating:m.vote_average||0,_voteCount:m.vote_count||0,_popularity:m.popularity||0,_genres:m.genre_ids||[]};entry.item=item;return item;});
    tmdbHits.forEach(function(h){if(!allItems.find(function(i){return i.id===h.id;}))allItems.push(h);});
    var combined=deduped.concat(tmdbHits).filter(function(item){return imgCache[item.id]||item.img;});
    combined.sort(function(a,b){var aTl=(a.title||'').toLowerCase(),bTl=(b.title||'').toLowerCase();var aExact=aTl===ql?2:(aTl.indexOf(ql)===0?1:0);var bExact=bTl===ql?2:(bTl.indexOf(ql)===0?1:0);if(aExact!==bExact)return bExact-aExact;var aAvail=a._key&&a._key!=='search'?1:0;var bAvail=b._key&&b._key!=='search'?1:0;if(aAvail!==bAvail)return bAvail-aAvail;var aVotes=a._voteCount||0,bVotes=b._voteCount||0;if(aVotes!==bVotes)return bVotes-aVotes;return(b.user_rating||0)-(a.user_rating||0);});
    combined=combined.slice(0,15);
    if(!combined.length){el.innerHTML='<div class="search-empty">Geen resultaten voor "'+q+'".</div>';return;}
    renderSearchResults(el,combined);
    var needsProv=tmdbRaw.filter(function(e){return e.item;});var bIdx=0;
    function loadProvBatch(){if(bIdx>=needsProv.length)return;var batch=needsProv.slice(bIdx,bIdx+5);bIdx+=5;
      Promise.all(batch.map(function(entry){return tmdb('/'+entry.type+'/'+entry.raw.id+'/watch/providers').then(function(pd){
        var nlFlat=pd&&pd.results&&pd.results.NL&&pd.results.NL.flatrate||[];var streamer='';var sColor='#40e86a';
        for(var i=0;i<nlFlat.length;i++){var mp2=matchProvider(nlFlat[i].provider_name);if(mp2){streamer=mp2.name;sColor=mp2.color;break;}}
        if(!streamer&&nlFlat.length>0)streamer=nlFlat[0].provider_name||'';
        entry.item._src={name:streamer||'Niet beschikbaar',logo_100px:nlFlat.length>0&&nlFlat[0].logo_path?'https://image.tmdb.org/t/p/original'+nlFlat[0].logo_path:null};
        entry.item._style={color:sColor,text:'#fff'};entry.item._key=streamer?providerKey(streamer):'search';
        var sid=entry.item.id.replace(/['"\\]/g,'');var rowEl=el.querySelector('[data-id="'+sid+'"]');
        if(rowEl){var sn=capitalizeProvider(entry.item._src.name||'');var isAvail=sn&&sn!=='Niet beschikbaar'&&sn!=='Onbekend'&&sn!=='Laden...';
          var badge=isAvail?'<span class="t10-streamer" style="font-size:10px">'+sn+'</span>':'<span class="t10-badge" style="font-size:10px;background:var(--brd2);color:var(--t3)">Niet op streaming</span>';
          var metaEl=rowEl.querySelector('.crow-meta');if(metaEl){var tl=entry.item._type==='movie'?'Film':'Serie';var year=(entry.item._date||'').slice(0,4);metaEl.innerHTML=(tl+(year?' - '+year:''))+' '+badge;}}
      }).catch(function(){});})).then(loadProvBatch);}
    loadProvBatch();
  });
}
function renderSearchResults(el,combined){
  el.innerHTML=combined.map(function(item){var title=(item.title||'').replace(/'/g,"&#39;").replace(/"/g,'&quot;');var sid=String(item.id).replace(/['"\\]/g,'');var poster=imgCache[item.id]||item.img||'';var tl=item._type==='movie'?'Film':'Serie';var cls=item._type==='movie'?'film':'serie';var year=(item._date||'').slice(0,4);var sn=capitalizeProvider(item._src&&item._src.name||'');var isAvail=sn&&sn!=='Niet beschikbaar'&&sn!=='Onbekend'&&sn!=='Laden...';var streamerBadge=sn==='Laden...'?'<span class="t10-badge" style="font-size:10px;background:var(--brd2);color:var(--t3)">⏳</span>':isAvail?'<span class="t10-streamer" style="font-size:10px">'+sn+'</span>':'<span class="t10-badge" style="font-size:10px;background:var(--brd2);color:var(--t3)">Niet op streaming</span>';return '<div class="crow" data-id="'+sid+'"><div class="crow-poster">'+(poster?'<img src="'+poster+'" alt="'+title+'" loading="lazy">':'<div class="crow-fb">'+title+'</div>')+'</div><div class="crow-info"><div class="crow-title">'+title+'</div><div class="crow-meta">'+(tl+(year?' - '+year:''))+' '+streamerBadge+'</div></div><div class="crow-badge '+cls+'">'+tl+'</div></div>';}).join('');
}



/* ══════════════════════════════════════════════════════════
   KIJKTIP (with detail button)
   ══════════════════════════════════════════════════════════ */
var kijktipCache=null;var kijktipAllTips=null;var kijktipSelectedWeek=null;
function getISOWeek(dateStr2){var d=new Date(dateStr2+'T12:00:00');if(isNaN(d.getTime()))return null;d.setHours(0,0,0,0);d.setDate(d.getDate()+3-(d.getDay()+6)%7);var week1=new Date(d.getFullYear(),0,4);var weekNum=1+Math.round(((d.getTime()-week1.getTime())/86400000-3+(week1.getDay()+6)%7)/7);return{year:d.getFullYear(),week:weekNum};}
function getCurrentISOWeek(){var now=new Date();var d=new Date(now.toLocaleDateString('en-CA',{timeZone:'Europe/Amsterdam'}));d.setHours(0,0,0,0);d.setDate(d.getDate()+3-(d.getDay()+6)%7);var week1=new Date(d.getFullYear(),0,4);var weekNum=1+Math.round(((d.getTime()-week1.getTime())/86400000-3+(week1.getDay()+6)%7)/7);return{year:d.getFullYear(),week:weekNum};}
function fetchAllKijktips(){if(kijktipAllTips)return Promise.resolve(kijktipAllTips);if(!GOOGLE_SHEET_KIJKTIP_URL)return Promise.resolve([]);return fetch(GOOGLE_SHEET_KIJKTIP_URL).then(function(r){return r.text();}).then(function(csv){var lines=[];var cur='',inQ=false;for(var c=0;c<csv.length;c++){var ch=csv[c];if(ch==='"')inQ=!inQ;else if((ch==='\n'||ch==='\r')&&!inQ){if(cur.trim())lines.push(cur);cur='';continue;}cur+=ch;}if(cur.trim())lines.push(cur);if(lines.length<2)return[];var hdr=lines[0].split(',').map(function(h){return h.trim().toLowerCase().replace(/['"]/g,'');});var ci={titel:hdr.indexOf('titel'),tmdb_id:hdr.indexOf('tmdb_id'),type:hdr.indexOf('type'),tekst:hdr.indexOf('tekst'),datum:hdr.indexOf('datum')};var tips=[];for(var i=1;i<lines.length;i++){var line=lines[i].trim();if(!line)continue;var cols=[];var cur2='',inQ2=false;for(var j=0;j<line.length;j++){var ch2=line[j];if(ch2==='"'){inQ2=!inQ2;}else if(ch2===','&&!inQ2){cols.push(cur2.trim());cur2='';}else{cur2+=ch2;}}cols.push(cur2.trim());var titel=(cols[ci.titel>=0?ci.titel:0]||'').replace(/^["']|["']$/g,'').trim();if(!titel)continue;var datum=(ci.datum>=0?cols[ci.datum]:'').replace(/^["']|["']$/g,'').trim();var wk=datum?getISOWeek(datum):null;tips.push({titel:titel,tmdb_id:(ci.tmdb_id>=0?cols[ci.tmdb_id]:'').replace(/^["']|["']$/g,'').trim(),type:(ci.type>=0?cols[ci.type]:'movie').replace(/^["']|["']$/g,'').trim().toLowerCase(),tekst:(ci.tekst>=0?cols[ci.tekst]:'').replace(/^["']|["']$/g,'').trim(),datum:datum,_week:wk});}tips.sort(function(a,b){return(b.datum||'').localeCompare(a.datum||'');});kijktipAllTips=tips;return tips;}).catch(function(){return[];});}
function getKijktipWeeks(tips){var weekMap={};tips.forEach(function(t){if(!t._week)return;var key=t._week.year+'-'+String(t._week.week).padStart(2,'0');if(!weekMap[key])weekMap[key]={year:t._week.year,week:t._week.week,key:key,tips:[]};weekMap[key].tips.push(t);});var weeks=Object.keys(weekMap).map(function(k){return weekMap[k];});weeks.sort(function(a,b){return b.key.localeCompare(a.key);});return weeks.slice(0,10);}
function renderKijktip(){var main=document.getElementById('main');main.innerHTML='';var sec=document.createElement('section');sec.className='kijktip-section';sec.innerHTML='<div class="kt-hdr"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg><div class="kt-title">Kijktip van de week</div></div><div class="kt-week-nav" id="ktWeekNav"></div><div id="ktContent" class="kt-content"><div class="t10-loading">Laden...</div></div>';main.appendChild(sec);if(!GOOGLE_SHEET_KIJKTIP_URL){document.getElementById('ktContent').innerHTML='<div class="kt-empty"><div class="kt-empty-title">Binnenkort beschikbaar</div><div class="kt-empty-sub">Elke week een nieuwe kijktip met een persoonlijke aanbeveling.</div></div>';return;}fetchAllKijktips().then(function(tips){if(!tips||!tips.length){document.getElementById('ktWeekNav').innerHTML='';document.getElementById('ktContent').innerHTML='<div class="kt-empty"><div class="kt-empty-title">Nog geen kijktips</div><div class="kt-empty-sub">Binnenkort verschijnen hier aanbevelingen.</div></div>';return;}var weeks=getKijktipWeeks(tips);if(!weeks.length){kijktipSelectedWeek=null;document.getElementById('ktWeekNav').innerHTML='';renderKijktipContent(tips[0]);return;}if(!kijktipSelectedWeek)kijktipSelectedWeek=weeks[0].key;var validKeys=weeks.map(function(w){return w.key;});if(validKeys.indexOf(kijktipSelectedWeek)===-1)kijktipSelectedWeek=weeks[0].key;renderKijktipWeekNav(weeks);var selectedWeek=weeks.find(function(w){return w.key===kijktipSelectedWeek;});if(selectedWeek&&selectedWeek.tips.length){renderKijktipContent(selectedWeek.tips[0]);}});}
function renderKijktipWeekNav(weeks){var nav=document.getElementById('ktWeekNav');if(!nav)return;nav.innerHTML=weeks.map(function(w){var label='Week '+w.week;var isActive=w.key===kijktipSelectedWeek;return '<button class="kt-week-tab'+(isActive?' active':'')+'" data-wk="'+w.key+'">'+label+'</button>';}).join('');nav.querySelectorAll('.kt-week-tab').forEach(function(btn){btn.addEventListener('click',function(){kijktipSelectedWeek=btn.getAttribute('data-wk');renderKijktip();});});setTimeout(function(){var a=nav.querySelector('.kt-week-tab.active');if(a)a.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});},50);}
function renderKijktipContent(tip){
  var el=document.getElementById('ktContent');if(!el||!tip)return;
  el.innerHTML='<div class="t10-loading">Laden...</div>';
  var type=tip.type==='tv'?'tv':'movie';
  var p=tip.tmdb_id?tmdb('/'+type+'/'+tip.tmdb_id,{language:'nl-NL'}):tmdb('/search/'+type,{query:tip.titel,language:'nl-NL'}).then(function(r){return(r.results||[])[0]||null;});
  p.then(function(d){
    var poster=d&&d.poster_path?TMDB_IMG+d.poster_path:'';
    var title=tip.titel;var year=d?(d.release_date||d.first_air_date||'').slice(0,4):'';
    var genres=d&&d.genres?(d.genres||[]).slice(0,3).map(function(g){return '<span class="stag">'+g.name+'</span>';}).join(''):'';
    var tmdbId=tip.tmdb_id||(d?d.id:null);
    var detailBtn=tmdbId?'<button class="kt-detail-btn" data-tmdb="'+tmdbId+'" data-mt="'+type+'" data-title="'+title.replace(/"/g,'&quot;')+'">Bekijk details</button>':'';
    el.innerHTML='<div class="kt-card"><div class="kt-poster">'+(poster?'<img src="'+poster+'" alt="">':'')+'</div><div class="kt-info"><div class="kt-name">'+title+'</div><div class="kt-meta">'+(type==='tv'?'Serie':'Film')+(year?' · '+year:'')+'</div>'+genres+'</div></div>'+'<div class="kt-text">'+tip.tekst.replace(/\n/g,'<br>')+'</div>'+detailBtn;
    var btn=el.querySelector('.kt-detail-btn');
    if(btn)btn.addEventListener('click',function(){openTop10Modal(btn.getAttribute('data-tmdb'),btn.getAttribute('data-mt'),btn.getAttribute('data-title'));});
  }).catch(function(){el.innerHTML='<div class="kt-card"><div class="kt-info"><div class="kt-name">'+tip.titel+'</div></div></div><div class="kt-text">'+(tip.tekst||'').replace(/\n/g,'<br>')+'</div>';});
}

/* ══════════════════════════════════════════════════════════
   SETTINGS
   ══════════════════════════════════════════════════════════ */
function renderSettings(){var main=document.getElementById('main');main.innerHTML='';var sec=document.createElement('section');sec.className='settings-section';var themeVal=getSetting('theme','system');var pSize=getSetting('posterSize','compact');var notifRel=getSettingBool('notif_releases');var notifFav=getSettingBool('notif_fav');sec.innerHTML='<div class="set-title">Instellingen</div><div class="set-group"><div class="set-group-title">Weergave</div><div class="set-row"><span>Thema</span><div class="set-toggle-group" id="themeToggle"><button class="set-tog'+(themeVal==='light'?' active':'')+'" data-v="light">Licht</button><button class="set-tog'+(themeVal==='dark'?' active':'')+'" data-v="dark">Donker</button><button class="set-tog'+(themeVal==='system'?' active':'')+'" data-v="system">Systeem</button></div></div><div class="set-row set-link" id="setFollowLink"><span>Volgend</span><span class="set-cnt">('+following.length+')</span><span class="set-arrow">&rsaquo;</span></div><div class="set-row set-link" id="setMyListLink"><span>Mijn lijst</span><span class="set-cnt">('+myList.length+')</span><span class="set-arrow">&rsaquo;</span></div><div class="set-row"><span>Posterweergave</span><div class="set-toggle-group" id="posterToggle"><button class="set-tog'+(pSize==='compact'?' active':'')+'" data-v="compact">Compact</button><button class="set-tog'+(pSize==='large'?' active':'')+'" data-v="large">Groot</button></div></div></div><div class="set-group"><div class="set-group-title">Meldingen</div><div class="set-row"><span>Nieuwe releases in volgend</span><label class="set-switch"><input type="checkbox" id="notifRel"'+(notifRel?' checked':'')+'><span class="set-slider"></span></label></div><div class="set-row"><span>Herinner mij aan mijn lijst</span><label class="set-switch"><input type="checkbox" id="notifFav"'+(notifFav?' checked':'')+'><span class="set-slider"></span></label></div></div><div class="set-group"><div class="set-group-title">Juridisch</div><div class="set-row set-link" data-page="privacy"><span>Privacybeleid</span><span class="set-arrow">&rsaquo;</span></div><div class="set-row set-link" data-page="terms"><span>Algemene voorwaarden</span><span class="set-arrow">&rsaquo;</span></div><div class="set-row set-link" data-page="disclaimer"><span>Disclaimer</span><span class="set-arrow">&rsaquo;</span></div><div class="set-row set-link" data-page="deletedata"><span>Data verwijderen</span><span class="set-arrow">&rsaquo;</span></div><div class="set-row set-link" data-page="contact"><span>Contact</span><span class="set-arrow">&rsaquo;</span></div></div><div class="set-group"><div class="set-group-title">Over</div><div class="set-row"><span>Versie</span><span class="set-val">1.4.0</span></div><div class="set-row"><span>Data</span><span class="set-val">TMDB</span></div><div class="set-row set-disclaimer-text">Dit product maakt gebruik van de TMDb-API maar wordt niet goedgekeurd of gecertificeerd door TMDb.</div><div class="set-row set-disclaimer-text">StreamGids is niet gelieerd aan Netflix, Disney+, Amazon, Apple of andere streamingdiensten.</div><div class="set-row set-link" data-page="feedback"><span>App feedback</span><span class="set-arrow">&rsaquo;</span></div></div>';main.appendChild(sec);
  sec.querySelector('#themeToggle').addEventListener('click',function(e){var btn=e.target.closest('.set-tog');if(!btn)return;var v=btn.getAttribute('data-v');setSetting('theme',v);sec.querySelectorAll('#themeToggle .set-tog').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-v')===v);});if(v==='system'){var dk=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',dk?'dark':'light');localStorage.removeItem('streamgids_theme');}else{document.documentElement.setAttribute('data-theme',v);try{localStorage.setItem('streamgids_theme',v);}catch(e2){}}updateThemeIndicator();updateMetaThemeColor();drawHeaderLogo();});
  sec.querySelector('#posterToggle').addEventListener('click',function(e){var btn=e.target.closest('.set-tog');if(!btn)return;var v=btn.getAttribute('data-v');setSetting('posterSize',v);posterSize=v;sec.querySelectorAll('#posterToggle .set-tog').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-v')===v);});var appEl=document.querySelector('.app');if(appEl)appEl.classList.toggle('poster-large',v==='large');showToast('Posterweergave: '+(v==='large'?'Groot':'Compact'));});
  var nrEl=sec.querySelector('#notifRel');if(nrEl)nrEl.addEventListener('change',function(){setSetting('notif_releases',nrEl.checked?'true':'false');if(nrEl.checked&&'Notification' in window&&Notification.permission!=='granted')Notification.requestPermission();});
  var nfEl=sec.querySelector('#notifFav');if(nfEl)nfEl.addEventListener('change',function(){setSetting('notif_fav',nfEl.checked?'true':'false');});
  sec.querySelector('#setFollowLink').addEventListener('click',function(){renderFollowing();});
  sec.querySelector('#setMyListLink').addEventListener('click',function(){renderMyList();});
  sec.querySelectorAll('.set-link[data-page]').forEach(function(el2){el2.addEventListener('click',function(){renderSettingsPage(el2.getAttribute('data-page'));});});
}
function renderFollowing(){var main=document.getElementById('main');main.innerHTML='';var sec=document.createElement('section');sec.className='settings-section';var html='<div class="set-back" id="setBack">&larr; Instellingen</div><div class="set-title">Volgend</div>';if(!following.length){html+='<div class="kt-empty" style="padding:40px 20px"><div class="kt-empty-title">Geen gevolgde titels</div><div class="kt-empty-sub">Volg films en series via de Volgen knop in de detail-sheet.</div></div>';}else{html+='<div class="fav-list">'+following.map(function(f){var poster=f.img||'';var tl=f._type==='movie'?'Film':'Serie';return '<div class="crow fav-crow" data-id="'+f.id+'"><div class="crow-poster">'+(poster?'<img src="'+poster+'" alt="" loading="lazy">':'')+'</div><div class="crow-info"><div class="crow-title">'+f.title+'</div><div class="crow-meta">'+tl+'</div></div></div>';}).join('')+'</div>';}sec.innerHTML=html;main.appendChild(sec);sec.querySelector('#setBack').addEventListener('click',function(){renderSettings();});sec.querySelectorAll('.fav-crow').forEach(function(row){row.addEventListener('click',function(){openModal(row.getAttribute('data-id'));});});}
function renderSettingsPage(page){var titles={privacy:'Privacybeleid',terms:'Algemene voorwaarden',disclaimer:'Disclaimer',deletedata:'Data verwijderen',contact:'Contact',feedback:'App feedback'};var main=document.getElementById('main');main.innerHTML='';var sec=document.createElement('section');sec.className='settings-section';var content='Binnenkort beschikbaar.';if(page==='privacy'){content='<p><strong>Laatst bijgewerkt:</strong> maart 2025</p><p>StreamGids ("de App") is ontwikkeld door Rex Raba. Dit privacybeleid beschrijft hoe wij omgaan met jouw gegevens wanneer je de App gebruikt.</p><h3>1. Welke gegevens verzamelen wij?</h3><p><strong>Lokaal opgeslagen gegevens (op jouw apparaat)</strong><br>De App slaat de volgende gegevens uitsluitend lokaal op via localStorage in je browser of app.</p><h3>2. Externe diensten</h3><p>De App maakt gebruik van TMDb en Google Sheets.</p><h3>3. Cookies en tracking</h3><p>De App maakt geen gebruik van cookies, advertentie-trackers of analytics-scripts van derden.</p><h3>4. Contact</h3><p><a href="mailto:info@streamgidsapp.nl">info@streamgidsapp.nl</a></p>';}else if(page==='terms'){content='<p><strong>Laatst bijgewerkt:</strong> maart 2025</p><p>Door het gebruik van StreamGids ga je akkoord met deze voorwaarden.</p><h3>1. Algemeen</h3><p>De App is ontwikkeld door Rex Raba.</p><h3>2. Contact</h3><p><a href="mailto:info@streamgidsapp.nl">info@streamgidsapp.nl</a></p>';}else if(page==='disclaimer'){content='<p><strong>Laatst bijgewerkt:</strong> maart 2025</p><h3>Geen officiële affiliatie</h3><p>StreamGids is onafhankelijk.</p><h3>Contact</h3><p><a href="mailto:info@streamgidsapp.nl">info@streamgidsapp.nl</a></p>';}else if(page==='deletedata'){content='<h3>Jouw gegevens</h3><p>StreamGids slaat alle gegevens lokaal op.</p><button class="retry-btn" onclick="localStorage.clear();sessionStorage.clear();showToast(\'Data verwijderd\');setTimeout(function(){location.reload();},500);">Alle data verwijderen</button>';}sec.innerHTML='<div class="set-back" id="setBack">&larr; Instellingen</div><div class="set-title">'+(titles[page]||page)+'</div><div class="set-page-content">'+content+'</div>';main.appendChild(sec);sec.querySelector('#setBack').addEventListener('click',function(){renderSettings();});}


/* ── EVENT LISTENERS ── */
document.addEventListener('DOMContentLoaded',function(){
  console.log('[StreamGids] Init v1.4.0');
  loadFollowing();loadMyList();posterSize=getSetting('posterSize','compact');
  if(document.fonts&&document.fonts.ready){document.fonts.ready.then(drawHeaderLogo);}else{setTimeout(drawHeaderLogo,150);}
  updateMyListBadge();
  var headerSearchBtn=document.getElementById('headerSearchBtn');
  if(headerSearchBtn)headerSearchBtn.addEventListener('click',function(){haptic('light');setType('search');});
  var headerSettingsBtn=document.getElementById('headerSettingsBtn');
  if(headerSettingsBtn)headerSettingsBtn.addEventListener('click',function(){haptic('light');setType('settings');});
  var appEl=document.querySelector('.app');
  if(appEl&&posterSize==='large')appEl.classList.add('poster-large');
  var brandLink=document.getElementById('brandLink');
  if(brandLink)brandLink.addEventListener('click',function(e){e.preventDefault();goHome();});
  document.querySelectorAll('.bnav').forEach(function(btn){btn.addEventListener('click',function(){setType(btn.getAttribute('data-f'));});});
  var shareBtn=document.getElementById('shareBtn');if(shareBtn)shareBtn.addEventListener('click',shareItem);
  var followBtn=document.getElementById('followBtn');
  if(followBtn)followBtn.addEventListener('click',function(){if(!currentModalItem)return;var nowFollowing=toggleFollow(currentModalItem);if(nowFollowing){if('Notification' in window&&Notification.permission!=='granted'&&Notification.permission!=='denied'){if(confirm('Wil jij meldingen ontvangen voor "'+currentModalItem.title+'"?'))Notification.requestPermission();}showToast('Je volgt nu "'+currentModalItem.title+'"');}updateActionBtns();});
  var myListBtn=document.getElementById('myListBtn');
  if(myListBtn)myListBtn.addEventListener('click',function(){if(!currentModalItem)return;if(isInMyList(currentModalItem.id)){removeFromMyList(currentModalItem.id);showToast('Verwijderd uit jouw lijst');}else{addToMyList(currentModalItem);showToast('Toegevoegd aan jouw lijst!');}updateActionBtns();});
  var overlay=document.getElementById('overlay');overlay.addEventListener('click',function(e){if(e.target===overlay)closeModal();});
  var sheetClose=document.getElementById('sheetClose');if(sheetClose)sheetClose.addEventListener('click',closeModal);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();});
  document.getElementById('dateTabs').addEventListener('click',function(e){var tab=e.target.closest('.dtab');if(tab)selectDate(tab.getAttribute('data-date'));});
  document.getElementById('svcBar').addEventListener('click',function(e){var chip=e.target.closest('.sc');if(!chip)return;haptic('light');svcFilter=chip.getAttribute('data-k');document.querySelectorAll('.sc').forEach(function(c){c.classList.toggle('active',c.getAttribute('data-k')===svcFilter);});updateSvcClearFloat();buildFilterChips();renderMain();setTimeout(function(){var a=document.querySelector('.sc.active');if(a)a.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});},50);});
  document.getElementById('filterBar').addEventListener('click',function(e){var chip=e.target.closest('.filter-chip');if(chip)handleFilterClick(chip.getAttribute('data-sf'));});
  /* Floating clear filter button */
  var svcClearBtn=document.getElementById('svcClearFloat');
  if(svcClearBtn)svcClearBtn.addEventListener('click',function(){haptic('light');svcFilter='all';streamType='all';streamSubFilter=null;svcBarVisible=false;document.getElementById('svcBar').style.display='none';document.querySelectorAll('.sc').forEach(function(c){c.classList.toggle('active',c.getAttribute('data-k')==='all');});updateSvcClearFloat();buildFilterChips();renderMain();});
  document.getElementById('main').addEventListener('click',function(e){
    var hdr=e.target.closest('.svc-hdr');if(hdr){toggleSection(hdr.getAttribute('data-key'));return;}
    var row=e.target.closest('.crow');if(row){openModal(row.getAttribute('data-id'));return;}
    var t10=e.target.closest('.t10-item');if(t10){openTop10Modal(t10.getAttribute('data-tmdb'),t10.getAttribute('data-mt'),t10.getAttribute('data-title'));return;}
    var t10tab=e.target.closest('.t10-tab');if(t10tab){if(t10tab.getAttribute('data-p'))top10Period=t10tab.getAttribute('data-p');if(t10tab.getAttribute('data-c'))top10Category=t10tab.getAttribute('data-c');renderTop10();return;}
  });

  /* Sheet swipe down to dismiss — prevent background scroll */
  (function(){var sheet=document.getElementById('sheetEl');if(!sheet)return;var startY=0,currentY=0,isDragging=false;
  sheet.addEventListener('touchstart',function(e){if(sheet.scrollTop>0)return;startY=e.touches[0].clientY;currentY=startY;isDragging=true;sheet.style.transition='none';},{passive:true});
  sheet.addEventListener('touchmove',function(e){if(!isDragging)return;currentY=e.touches[0].clientY;var dy=currentY-startY;if(dy<0){dy=0;}if(sheet.scrollTop>0){isDragging=false;sheet.style.transform='';return;}if(dy>0){
    /* Prevent background page scroll */
    e.preventDefault();
    sheet.style.transform='translateY('+dy+'px)';sheet.style.opacity=Math.max(0.3,1-dy/400);}},{passive:false});
  sheet.addEventListener('touchend',function(){if(!isDragging)return;isDragging=false;var dy=currentY-startY;sheet.style.transition='transform 0.25s ease, opacity 0.25s ease';if(dy>100){haptic('medium');sheet.style.transform='translateY(100%)';sheet.style.opacity='0';setTimeout(function(){closeModal();sheet.style.transform='';sheet.style.opacity='';sheet.style.transition='';},250);}else{sheet.style.transform='';sheet.style.opacity='';setTimeout(function(){sheet.style.transition='';},250);}});})();

  /* Horizontal swipe to change days */
  (function(){var mainEl=document.getElementById('main');if(!mainEl)return;var swStartX=0,swStartY=0,swLocked=false,swDirection=null;var SWIPE_THRESHOLD=50;mainEl.addEventListener('touchstart',function(e){swStartX=e.touches[0].clientX;swStartY=e.touches[0].clientY;swLocked=false;swDirection=null;},{passive:true});mainEl.addEventListener('touchmove',function(e){if(swLocked)return;var dx=e.touches[0].clientX-swStartX;var dy=e.touches[0].clientY-swStartY;if(!swDirection&&(Math.abs(dx)>10||Math.abs(dy)>10)){if(Math.abs(dy)>Math.abs(dx)){swLocked=true;return;}swDirection='horizontal';}},{passive:true});mainEl.addEventListener('touchend',function(e){if(swLocked||swDirection!=='horizontal')return;if(activeTab!=='stream')return;var dx=e.changedTouches[0].clientX-swStartX;if(Math.abs(dx)<SWIPE_THRESHOLD)return;haptic('light');var sh=document.getElementById('swipeHintBar');if(sh&&sh.style.display!=='none'){sh.style.transition='opacity 0.4s ease';sh.style.opacity='0';setTimeout(function(){sh.style.display='none';},400);setSetting('swipe_seen','true');}if(dx<0){navigateDay(1);}else{navigateDay(-1);}});})();

  if(window.matchMedia){window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(e){try{var saved=localStorage.getItem('streamgids_theme');if(!saved){document.documentElement.setAttribute('data-theme',e.matches?'dark':'light');updateThemeIndicator();updateMetaThemeColor();drawHeaderLogo();}}catch(err){}});}
  init();
});

/* ── INIT ── */
function init(){
  var lt=document.getElementById('loadText'),ls=document.getElementById('loadSub');
  if(lt)lt.textContent='Laden...';if(ls)ls.textContent='';
  var hasRendered=false;
  function tryRender(){if(!allItems.length)return;if(activeTab!=='stream'){
    /* Data loaded but user navigated away - still mark as ready, render when they come back */
    if(!hasRendered){hasRendered=true;buildSvcBar();buildDateTabs();buildFilterChips();}
    return;
  }if(!hasRendered){hasRendered=true;buildSvcBar();buildDateTabs();buildFilterChips();renderMain();}else{buildSvcBar();buildDateTabs();renderMain();}}
  var t0=Date.now();
  Promise.all([fetchTMDBProviders().catch(function(){}),fetchGoogleSheet()]).then(function(setup){
    var gsItems=setup[1]||[];
    var sheetReady=enrichSheetItems(gsItems).then(function(enriched){allItems=mergeItems([],enriched);if(allItems.length){if(ls)ls.textContent='';tryRender();}return enriched;});
    var tmdbReady=fetchTMDBReleases().catch(function(){return[];});
    tmdbReady.then(function(tmdbItems){return sheetReady.then(function(gsEnriched){allItems=mergeItems(tmdbItems,gsEnriched);if(ls)ls.textContent='';tryRender();return gsEnriched;});});
    Promise.all([tmdbReady,sheetReady]).then(function(res){
      allItems=mergeItems(res[0]||[],res[1]||[]);
      initComplete=true;
      console.log('[StreamGids] '+allItems.length+' items geladen in '+(Date.now()-t0)+'ms');
      if(ls)ls.textContent='';tryRender();
      enrichMissingPosters();
      setTimeout(function(){enrichSavedGenres();},200);
      setTimeout(function(){enrichEpisodeDetails().catch(function(){});},500);
      setTimeout(function(){enrichSheetEpisodeDetails().catch(function(){});},1000);
      setTimeout(function(){fetchRemainingTMDBPages().catch(function(){});},1500);
    }).catch(function(e){console.error(e);if(!hasRendered){document.getElementById('main').innerHTML='<div class="error-screen"><div class="error-title">Kon niet laden</div><div class="error-msg">'+(e.message||'Controleer je verbinding.')+'</div><button class="retry-btn" onclick="location.reload()">Opnieuw</button></div>';}});
  }).catch(function(e){console.error(e);document.getElementById('main').innerHTML='<div class="error-screen"><div class="error-title">Kon niet laden</div><div class="error-msg">'+(e.message||'Controleer je verbinding.')+'</div><button class="retry-btn" onclick="location.reload()">Opnieuw</button></div>';});
}
