const _0x4eb431=_0x251a;(function(_0x1113dd,_0x265a15){const _0x2c145d=_0x251a,_0x28d72f=_0x1113dd();while(!![]){try{const _0x4b789a=parseInt(_0x2c145d(0xc9))/0x1*(parseInt(_0x2c145d(0xf3))/0x2)+parseInt(_0x2c145d(0xc7))/0x3+parseInt(_0x2c145d(0xd0))/0x4+-parseInt(_0x2c145d(0xf1))/0x5*(parseInt(_0x2c145d(0x107))/0x6)+-parseInt(_0x2c145d(0xd6))/0x7+parseInt(_0x2c145d(0xed))/0x8*(-parseInt(_0x2c145d(0xf6))/0x9)+-parseInt(_0x2c145d(0xe5))/0xa*(-parseInt(_0x2c145d(0xef))/0xb);if(_0x4b789a===_0x265a15)break;else _0x28d72f['push'](_0x28d72f['shift']());}catch(_0x31493e){_0x28d72f['push'](_0x28d72f['shift']());}}}(_0x2a5e,0xaf434));import{ElementType,IMAGE_HTTP_HOST,IMAGE_HTTP_HOST_NT}from'@/core/entities';import _0x99992e from'path';import _0x387cd0 from'fs';import _0x5651c6 from'fs/promises';import{logDebug}from'@/common/utils/log';import{napCatCore}from'@/core';import{calculateFileMD5}from'@/common/utils/file';function _0x251a(_0x416efe,_0x452d97){const _0x2a5e5f=_0x2a5e();return _0x251a=function(_0x251a29,_0x5b738c){_0x251a29=_0x251a29-0xb7;let _0x4d813a=_0x2a5e5f[_0x251a29];return _0x4d813a;},_0x251a(_0x416efe,_0x452d97);}import*as _0x307769 from'file-type';import{MsgListener}from'@/core/listeners';import _0x31f731 from'image-size';function _0x2a5e(){const _0x4c072f=['addCacheScannedPaths','getImageUrl','getRkey','JNtoo','session','1100832LNcsKj','PIC','/download','private_rkey','unlink','gVjlB','5759327OKcLYm','JbwJj','downloadPath','iixDc','md5HexStr','filePath','wPmzF','svbkW','BWBTX','fileUuid','startsWith','lVuXB','start\x20downloadMedia','getFileSize','yPCrW','10jYUTwf','jYtJs','downloadRichMedia','zXSyW','uDQvY','includes','hYpJb','existsSync','313752tCkvnk','basename','4749437LLYhNC','addCacheScanedPaths','3301055zWWeoj','vspwo','4OKuLPS','clearCache','hotUpdate','153NDYeve','join','scanCache','uploadFile','downloadMedia\x20complete','CixPX','copyFile','util','defaultFileDownloadPath','onRichMediaDownloadComplete','getFileCacheInfo','delete','NbQfn','group_rkey','fileTypeFromFile','addListener','getMsgService','6Zizmox','ext','CNWxb','originImageUrl','getRichMediaFilePathForGuild','图片url获取失败','receive\x20downloadMedia\x20task','getFileType','CYGOU','clearChatCache','getStorageCleanService','getChatCacheInfo','indexOf','clearChatCacheInfo','bpKow','CprRH','UdbVS','tmp','AHpNZ','3015840UHuTeb','setCacheSilentScan','577658qnOtUT','pabNS'];_0x2a5e=function(){return _0x4c072f;};return _0x2a5e();}import{sessionConfig}from'@/core/sessionConfig';import{randomUUID}from'crypto';import{rkeyManager}from'../utils/rkey';import{AsyncQueue}from'@/common/utils/AsyncQueue';const getRKeyTaskQueue=new AsyncQueue(),downloadMediaTasks=new Map(),downloadMediaListener=new MsgListener();downloadMediaListener[_0x4eb431(0xff)]=_0x38fad2=>{const _0x37fc52=_0x4eb431,_0x5014c7={'yPCrW':function(_0x27dcba,_0x2ec851){return _0x27dcba(_0x2ec851);}};for(const [_0x4bc966,_0x1a3114]of downloadMediaTasks){_0x5014c7[_0x37fc52(0xe4)](_0x1a3114,_0x38fad2),downloadMediaTasks[_0x37fc52(0x101)](_0x4bc966);}},setTimeout(()=>{napCatCore['onLoginSuccess'](()=>{const _0x4fabc6=_0x251a;napCatCore[_0x4fabc6(0x105)](downloadMediaListener);});},0x64);export class NTQQFileApi{static async[_0x4eb431(0xbb)](_0x11ce40){const _0x540fc8=_0x4eb431;return _0x307769[_0x540fc8(0x104)](_0x11ce40);}static async[_0x4eb431(0xfc)](_0x48e0bc,_0x57dd9e){const _0x37aa21=_0x4eb431;await napCatCore[_0x37aa21(0xfd)][_0x37aa21(0xfc)](_0x48e0bc,_0x57dd9e);}static async['getFileSize'](_0x314287){const _0x1b2f65=_0x4eb431;return await napCatCore[_0x1b2f65(0xfd)][_0x1b2f65(0xe3)](_0x314287);}static async[_0x4eb431(0xf9)](_0x462220,_0x2a791a=ElementType[_0x4eb431(0xd1)],_0x3f40be=0x0){const _0x51bc00=_0x4eb431,_0x24e95f={'zXSyW':function(_0x4533c0,_0x5f2da9){return _0x4533c0(_0x5f2da9);},'svbkW':function(_0x41c951,_0x2fac00){return _0x41c951+_0x2fac00;},'SwmRs':function(_0x239470,_0x5b8b62){return _0x239470===_0x5b8b62;}},_0x4edbb2=await _0x24e95f[_0x51bc00(0xe8)](calculateFileMD5,_0x462220);let _0x47919f=(await NTQQFileApi[_0x51bc00(0xbb)](_0x462220))?.[_0x51bc00(0x108)]||'';_0x47919f&&(_0x47919f=_0x24e95f[_0x51bc00(0xdd)]('.',_0x47919f));let _0x5af2ae=''+_0x99992e[_0x51bc00(0xee)](_0x462220);_0x24e95f['SwmRs'](_0x5af2ae[_0x51bc00(0xc0)]('.'),-0x1)&&(_0x5af2ae+=_0x47919f);const _0x39de45=napCatCore['session'][_0x51bc00(0x106)]()[_0x51bc00(0xb8)]({'md5HexStr':_0x4edbb2,'fileName':_0x5af2ae,'elementType':_0x2a791a,'elementSubType':_0x3f40be,'thumbSize':0x0,'needCreate':!![],'downloadType':0x1,'file_uuid':''});await NTQQFileApi['copyFile'](_0x462220,_0x39de45);const _0x3124f1=await NTQQFileApi['getFileSize'](_0x462220);return{'md5':_0x4edbb2,'fileName':_0x5af2ae,'path':_0x39de45,'fileSize':_0x3124f1,'ext':_0x47919f};}static async['downloadMedia'](_0xb4a3c3,_0x439800,_0x99a2d1,_0x1eb39a,_0x5ae41d,_0x513c4a,_0x2d4992=0x3e8*0x3c*0x2,_0x18cdc5=![]){const _0x24b0af=_0x4eb431,_0x5772ae={'gVjlB':function(_0x455580,_0x2c5fcb){return _0x455580(_0x2c5fcb);},'CixPX':'下载超时','BWBTX':function(_0xe5588f,_0x1d2785,_0x59f61a,_0x49124f){return _0xe5588f(_0x1d2785,_0x59f61a,_0x49124f);},'CYGOU':_0x24b0af(0xfa),'iixDc':function(_0x4ae795,_0xc8f803){return _0x4ae795===_0xc8f803;},'ankJz':_0x24b0af(0xd8),'PMvkz':function(_0x523694,_0x402744){return _0x523694(_0x402744);},'CprRH':function(_0x512d7f){return _0x512d7f();},'hBUha':function(_0x5eaa8e,_0x366658,_0x4c5c04){return _0x5eaa8e(_0x366658,_0x4c5c04);},'jYtJs':function(_0x4c7910,_0x333a82,_0x2724df,_0x21c0e2,_0x46eefa,_0x322166,_0x2ba40e,_0x28f0a3,_0x334e8d,_0x1f35ad){return _0x4c7910(_0x333a82,_0x2724df,_0x21c0e2,_0x46eefa,_0x322166,_0x2ba40e,_0x28f0a3,_0x334e8d,_0x1f35ad);},'wPmzF':_0x24b0af(0xe2)};logDebug(_0x24b0af(0xba),_0xb4a3c3,_0x439800,_0x99a2d1,_0x1eb39a,_0x5ae41d,_0x513c4a,_0x2d4992,_0x18cdc5);if(_0x513c4a&&_0x387cd0[_0x24b0af(0xec)](_0x513c4a)){if(_0x18cdc5)try{await _0x5651c6[_0x24b0af(0xd4)](_0x513c4a);}catch(_0x5eaeb5){}else return _0x513c4a;}return _0x5772ae[_0x24b0af(0xe6)](logDebug,_0x5772ae[_0x24b0af(0xdc)],_0xb4a3c3,_0x439800,_0x99a2d1,_0x1eb39a,_0x5ae41d,_0x513c4a,_0x2d4992,_0x18cdc5),new Promise((_0x5018ea,_0x3bd4ee)=>{const _0x524fd5=_0x24b0af,_0x92dd10={'SEwTC':function(_0x2dd88b,_0xe4e967,_0x4e8d85,_0x4a2bee){const _0x5281ab=_0x251a;return _0x5772ae[_0x5281ab(0xde)](_0x2dd88b,_0xe4e967,_0x4e8d85,_0x4a2bee);},'UdbVS':_0x5772ae[_0x524fd5(0xbc)],'vspwo':function(_0x2853f0,_0x5409fb){const _0x321ec5=_0x524fd5;return _0x5772ae[_0x321ec5(0xd9)](_0x2853f0,_0x5409fb);},'bpKow':_0x5772ae['ankJz'],'JNtoo':function(_0x1958f2,_0x2199cb){return _0x5772ae['PMvkz'](_0x1958f2,_0x2199cb);}};let _0x30468f=![];const _0x4fa89e=_0x3d113b=>{const _0x2b48b1=_0x524fd5;_0x92dd10['SEwTC'](logDebug,_0x92dd10[_0x2b48b1(0xc4)],_0x3d113b,_0xb4a3c3);if(_0x92dd10[_0x2b48b1(0xf2)](_0x3d113b['msgId'],_0xb4a3c3)){_0x30468f=!![];let _0x223073=_0x3d113b[_0x2b48b1(0xdb)];if(_0x223073[_0x2b48b1(0xe0)]('\x5c')){const _0x5b4bee=sessionConfig[_0x2b48b1(0xfe)];logDebug(_0x92dd10[_0x2b48b1(0xc2)],_0x5b4bee),_0x223073=_0x99992e[_0x2b48b1(0xf7)](_0x5b4bee,_0x223073);}_0x92dd10[_0x2b48b1(0xce)](_0x5018ea,_0x223073);}};downloadMediaTasks['set'](_0x5772ae[_0x524fd5(0xc3)](randomUUID),_0x4fa89e),_0x5772ae['hBUha'](setTimeout,()=>{const _0x3993f2=_0x524fd5;!_0x30468f&&_0x5772ae[_0x3993f2(0xd5)](_0x3bd4ee,_0x5772ae[_0x3993f2(0xfb)]);},_0x2d4992),napCatCore[_0x524fd5(0xcf)][_0x524fd5(0x106)]()[_0x524fd5(0xe7)]({'fileModelId':'0','downloadSourceType':0x0,'triggerType':0x1,'msgId':_0xb4a3c3,'chatType':_0x439800,'peerUid':_0x99a2d1,'elementId':_0x1eb39a,'thumbSize':0x0,'downloadType':0x1,'filePath':_0x5ae41d});});}static async['getImageSize'](_0x448f72){const _0x1b4e63={'qvGRp':function(_0x33a6dd,_0x277201){return _0x33a6dd(_0x277201);},'hYpJb':function(_0xf4d80c,_0x187d6b){return _0xf4d80c(_0x187d6b);}};return new Promise((_0xb9dac3,_0x4f7231)=>{_0x31f731(_0x448f72,(_0x18d1b5,_0x1c3afa)=>{const _0xa69879=_0x251a;_0x18d1b5?_0x1b4e63['qvGRp'](_0x4f7231,_0x18d1b5):_0x1b4e63[_0xa69879(0xeb)](_0xb9dac3,_0x1c3afa);});});}static async[_0x4eb431(0xcc)](_0x189954,_0x4dfcb5){const _0x3fcb60=_0x4eb431,_0x22b320={'AHpNZ':_0x3fcb60(0xd2),'JbwJj':function(_0x2aeb5b,_0x19e9df){return _0x2aeb5b+_0x19e9df;},'mucGH':function(_0xab9607,_0x4c97a4){return _0xab9607+_0x4c97a4;},'lVuXB':function(_0x4d05c9,_0x2a78f5){return _0x4d05c9+_0x2a78f5;},'uDQvY':function(_0x1b0144,_0x388ff6){return _0x1b0144+_0x388ff6;},'pabNS':function(_0x993e6,_0x50718e){return _0x993e6||_0x50718e;},'CNWxb':function(_0x28b665,_0x462c7f){return _0x28b665||_0x462c7f;},'NbQfn':function(_0x53be92,_0x168513,_0x2f5071){return _0x53be92(_0x168513,_0x2f5071);},'TygeB':_0x3fcb60(0xb9)};if(!_0x189954)return'';const _0x536fa0=_0x189954[_0x3fcb60(0xb7)],_0x1fb6f8=_0x189954[_0x3fcb60(0xda)],_0x3335a6=_0x189954[_0x3fcb60(0xda)],_0x4f4ec3=_0x189954[_0x3fcb60(0xdf)];if(_0x536fa0){if(_0x536fa0[_0x3fcb60(0xe0)](_0x22b320[_0x3fcb60(0xc6)])){if(_0x536fa0[_0x3fcb60(0xea)]('&rkey='))return _0x22b320[_0x3fcb60(0xd7)](IMAGE_HTTP_HOST_NT,_0x536fa0);const _0x3c2352=await rkeyManager[_0x3fcb60(0xcd)](),_0x5f3b8d=_0x4dfcb5?_0x3c2352[_0x3fcb60(0xd3)]:_0x3c2352[_0x3fcb60(0x103)];return _0x22b320['mucGH'](_0x22b320[_0x3fcb60(0xe1)](IMAGE_HTTP_HOST_NT,_0x536fa0),''+_0x5f3b8d);}else return _0x22b320[_0x3fcb60(0xe9)](IMAGE_HTTP_HOST,_0x536fa0);}else{if(_0x22b320[_0x3fcb60(0xca)](_0x3335a6,_0x1fb6f8))return IMAGE_HTTP_HOST+'/gchatpic_new/0/0-0-'+_0x22b320[_0x3fcb60(0x109)](_0x3335a6,_0x1fb6f8)['toUpperCase']()+'/0';}return _0x22b320[_0x3fcb60(0x102)](logDebug,_0x22b320['TygeB'],_0x189954),'';}}export class NTQQFileCacheApi{static async[_0x4eb431(0xc8)](_0x437ec9=!![]){return'';}static['getCacheSessionPathList'](){return'';}static[_0x4eb431(0xf4)](_0x5b6732=[_0x4eb431(0xc5),_0x4eb431(0xf5)]){const _0x3b6502=_0x4eb431;return napCatCore[_0x3b6502(0xcf)]['getStorageCleanService']()['clearCacheDataByKeys'](_0x5b6732);}static[_0x4eb431(0xcb)](_0x593f37={}){const _0xdc8d9e=_0x4eb431;return napCatCore['session'][_0xdc8d9e(0xbe)]()[_0xdc8d9e(0xf0)](_0x593f37);}static[_0x4eb431(0xf8)](){const _0x578c82=_0x4eb431;return napCatCore[_0x578c82(0xcf)][_0x578c82(0xbe)]()[_0x578c82(0xf8)]();}static['getHotUpdateCachePath'](){return'';}static['getDesktopTmpPath'](){return'';}static['getChatCacheList'](_0x3623ad,_0x2e306b=0x3e8,_0x16b3be=0x0){const _0x326003=_0x4eb431;return napCatCore[_0x326003(0xcf)]['getStorageCleanService']()[_0x326003(0xbf)](_0x3623ad,_0x2e306b,0x1,_0x16b3be);}static[_0x4eb431(0x100)](_0x5cde10,_0x32638b=0x3e8,_0x841794){const _0x2600ba=_0x841794?_0x841794:{'fileType':_0x5cde10};}static async[_0x4eb431(0xbd)](_0x5c70d3=[],_0x4ee92f=[]){const _0x12c171=_0x4eb431;return napCatCore['session']['getStorageCleanService']()[_0x12c171(0xc1)](_0x5c70d3,_0x4ee92f);}}