const _0x513033=_0x485d;(function(_0x2e3a9f,_0x4377af){const _0x16fe8f=_0x485d,_0x233b83=_0x2e3a9f();while(!![]){try{const _0x32a834=-parseInt(_0x16fe8f(0xf2))/0x1+-parseInt(_0x16fe8f(0x125))/0x2*(parseInt(_0x16fe8f(0x12d))/0x3)+-parseInt(_0x16fe8f(0xe4))/0x4*(parseInt(_0x16fe8f(0xf6))/0x5)+parseInt(_0x16fe8f(0x10d))/0x6+-parseInt(_0x16fe8f(0xe3))/0x7*(-parseInt(_0x16fe8f(0x110))/0x8)+-parseInt(_0x16fe8f(0x111))/0x9+parseInt(_0x16fe8f(0xd6))/0xa;if(_0x32a834===_0x4377af)break;else _0x233b83['push'](_0x233b83['shift']());}catch(_0x158086){_0x233b83['push'](_0x233b83['shift']());}}}(_0x44a8,0xb04bb));import{AtType,ElementType,FaceIndex,FaceType,PicType}from'./index';import{promises as _0x3e825d}from'node:fs';function _0x485d(_0x2daad1,_0xdb08b7){const _0x44a803=_0x44a8();return _0x485d=function(_0x485d54,_0x14cc83){_0x485d54=_0x485d54-0xd2;let _0x12b8cc=_0x44a803[_0x485d54];return _0x12b8cc;},_0x485d(_0x2daad1,_0xdb08b7);}import _0x3e01e5 from'fluent-ffmpeg';import{NTQQFileApi}from'@/core/apis/file';import{calculateFileMD5,isGIF}from'@/common/utils/file';import{logDebug,logError}from'@/common/utils/log';import{defaultVideoThumb,getVideoInfo}from'@/common/utils/video';import{encodeSilk}from'@/common/utils/audio';import _0x24cd5c from'./face_config.json';import*as _0x111097 from'node:path';function _0x44a8(){const _0x2d7c66=['FACE','stringify','Bot\x20Test','https://www.bilibili.com/','AniStickerType','markdown','MARKDOWN','PIC','error','bGhFK','bNmkZ','文件异常，大小为0','aySGV','921686RAmzDB','miniapp','toString','width','replace','[骰子]','获取视频封面失败，使用默认封面','RPS','3xseTGd','PTT','ARK','_0.png','sep','JqqCh','18927680rgfMEj','QSid','UgLtp','获取视频信息失败','MFACE','Ori','https://tianquan.gtimg.cn/qqAIAgent/item/7/square.png','pic','join','wbYWf','find','getImageSize','unlink','49YsURwz','8QadRLo','CRlJj','video','tNVfI','Thumb','notAt','https://tianquan.gtimg.cn/shoal/qqAIAgent/3e9d70c9-d98c-45b8-80b4-79d82971b514.png','end','jpg','VIDEO','QhwFV','GhzoY','KVhCL','copyFile','462170CLnvpN','file','FILE','sysface','1430150RUwFWc','aqpOD','hvLde','kGdng','stat','FSiye','size','sYuAC','then','nTMYj','AniStickerPackId','uploadFile','[包剪锤]','JYBds','emoji','dice','writeFile','FJglJ','catch','kouuh','reply','TEXT','mface','3129210JgznHu','text','gif','84184fVpCfE','2437056neJbJt','tgPTr','height','time','dirname','string','AEnwe'];_0x44a8=function(){return _0x2d7c66;};return _0x44a8();}import{SignMiniApp}from'../apis';export const mFaceCache=new Map();export class SendMsgElementConstructor{static[_0x513033(0x10e)](_0x4c3e0e){const _0x17788a=_0x513033;return{'elementType':ElementType[_0x17788a(0x10b)],'elementId':'','textElement':{'content':_0x4c3e0e,'atType':AtType[_0x17788a(0xe9)],'atUid':'','atTinyId':'','atNtUid':''}};}static['at'](_0x29ee1d,_0x585405,_0xe71ee8,_0x10eea3){const _0x1afe10=_0x513033;return{'elementType':ElementType[_0x1afe10(0x10b)],'elementId':'','textElement':{'content':'@'+_0x10eea3,'atType':_0xe71ee8,'atUid':_0x29ee1d,'atTinyId':'','atNtUid':_0x585405}};}static[_0x513033(0x10a)](_0x42154d,_0x767fcd,_0x17eb1d,_0x395451){return{'elementType':ElementType['REPLY'],'elementId':'','replyElement':{'replayMsgSeq':_0x42154d,'replayMsgId':_0x767fcd,'senderUin':_0x17eb1d,'senderUinStr':_0x395451}};}static async[_0x513033(0xdd)](_0x157ec2,_0x41be68='',_0x19c5a7=0x0){const _0x544854=_0x513033,_0x12f8a5={'xHQXh':function(_0x5650e3,_0x213866){return _0x5650e3(_0x213866);}},{md5:_0x4f23be,fileName:_0x85814c,path:_0x2f8aec,fileSize:_0x4951de}=await NTQQFileApi[_0x544854(0x101)](_0x157ec2,ElementType['PIC'],_0x19c5a7);if(_0x4951de===0x0)throw _0x544854(0x123);const _0x2e7f1a=await NTQQFileApi[_0x544854(0xe1)](_0x157ec2),_0x5a29a3={'md5HexStr':_0x4f23be,'fileSize':_0x4951de['toString'](),'picWidth':_0x2e7f1a?.['width'],'picHeight':_0x2e7f1a?.[_0x544854(0x113)],'fileName':_0x85814c,'sourcePath':_0x2f8aec,'original':!![],'picType':_0x12f8a5['xHQXh'](isGIF,_0x157ec2)?PicType[_0x544854(0x10f)]:PicType[_0x544854(0xec)],'picSubType':_0x19c5a7,'fileUuid':'','fileSubId':'','thumbFileSize':0x0,'summary':_0x41be68};return{'elementType':ElementType[_0x544854(0x11f)],'elementId':'','picElement':_0x5a29a3};}static async[_0x513033(0xf3)](_0x4fb41e,_0x52fee4=''){const _0xaf332d=_0x513033,_0x546759={'inBom':function(_0x4a1070,_0x1576ad){return _0x4a1070===_0x1576ad;},'aqpOD':function(_0x74744b,_0x114ce7){return _0x74744b||_0x114ce7;}},{md5:_0x304f56,fileName:_0x21c9c7,path:_0x2a138a,fileSize:_0x79c2}=await NTQQFileApi[_0xaf332d(0x101)](_0x4fb41e,ElementType['FILE']);if(_0x546759['inBom'](_0x79c2,0x0))throw _0xaf332d(0x123);const _0x2bc1cb={'elementType':ElementType[_0xaf332d(0xf4)],'elementId':'','fileElement':{'fileName':_0x546759[_0xaf332d(0xf7)](_0x52fee4,_0x21c9c7),'filePath':_0x2a138a,'fileSize':_0x79c2[_0xaf332d(0x127)]()}};return _0x2bc1cb;}static async[_0x513033(0xe6)](_0x4e76bc,_0x9b2546='',_0x4a3681=''){const _0x33e8b7=_0x513033,_0x3a1001={'hvLde':function(_0x113f6b,_0xa2e1ff){return _0x113f6b(_0xa2e1ff);},'HgwGT':_0x33e8b7(0x12b),'bGhFK':_0x33e8b7(0xeb),'JqqCh':function(_0x560731,_0x5d8f39){return _0x560731+_0x5d8f39;},'tgPTr':function(_0x3c11b5,_0x411d74){return _0x3c11b5+_0x411d74;},'aySGV':function(_0xe62321,_0x484566){return _0xe62321===_0x484566;},'KVhCL':'文件异常，大小为0','Spyze':'mp4','AEnwe':function(_0x374d5a,_0x2c8742){return _0x374d5a(_0x2c8742);},'FSiye':_0x33e8b7(0xd9),'OSoBH':function(_0x10f859,_0x4b934a){return _0x10f859||_0x4b934a;}},{fileName:_0x7d2dc7,path:_0x4cd41c,fileSize:_0xe96eea,md5:_0x739f50}=await NTQQFileApi[_0x33e8b7(0x101)](_0x4e76bc,ElementType[_0x33e8b7(0xed)]);if(_0x3a1001[_0x33e8b7(0x124)](_0xe96eea,0x0))throw _0x3a1001[_0x33e8b7(0xf0)];let _0x3cbe58=_0x4cd41c[_0x33e8b7(0x129)](_0x111097[_0x33e8b7(0xd4)]+_0x33e8b7(0xdb)+_0x111097[_0x33e8b7(0xd4)],_0x111097[_0x33e8b7(0xd4)]+_0x33e8b7(0xe8)+_0x111097[_0x33e8b7(0xd4)]);_0x3cbe58=_0x111097[_0x33e8b7(0x115)](_0x3cbe58);let _0x2d3e5e={'width':0x780,'height':0x438,'time':0xf,'format':_0x3a1001['Spyze'],'size':_0xe96eea,'filePath':_0x4e76bc};try{_0x2d3e5e=await _0x3a1001[_0x33e8b7(0x117)](getVideoInfo,_0x4cd41c);}catch(_0x1b5e62){logError(_0x3a1001[_0x33e8b7(0xfb)],_0x1b5e62);}const _0x2b37bc=new Promise((_0x1d8315,_0x3fce33)=>{const _0x2cc8b5=_0x33e8b7,_0x9d8ef4={'kGdng':function(_0x23df15,_0xf4b615){const _0x1d9754=_0x485d;return _0x3a1001[_0x1d9754(0xf8)](_0x23df15,_0xf4b615);},'wbYWf':function(_0x1865a3,_0x5ec40e){const _0x15a237=_0x485d;return _0x3a1001[_0x15a237(0xf8)](_0x1865a3,_0x5ec40e);},'sYuAC':_0x3a1001['HgwGT']},_0x2ad4ee=_0x739f50+_0x2cc8b5(0xd3),_0x2ddc74=_0x111097[_0x2cc8b5(0xde)](_0x3cbe58,_0x2ad4ee);_0x3e01e5(_0x4e76bc)['on'](_0x3a1001[_0x2cc8b5(0x121)],()=>{})['on'](_0x2cc8b5(0x120),_0x57b24e=>{const _0x203482=_0x2cc8b5,_0xb645ff={'CRlJj':function(_0x348d91,_0x4cebc7){const _0x114379=_0x485d;return _0x9d8ef4[_0x114379(0xdf)](_0x348d91,_0x4cebc7);}};logDebug(_0x9d8ef4[_0x203482(0xfd)],_0x57b24e),_0x4a3681?_0x3e825d[_0x203482(0xf1)](_0x4a3681,_0x2ddc74)['then'](()=>{const _0x303191=_0x203482;_0x9d8ef4[_0x303191(0xf9)](_0x1d8315,_0x2ddc74);})[_0x203482(0x108)](_0x3fce33):_0x3e825d[_0x203482(0x106)](_0x2ddc74,defaultVideoThumb)[_0x203482(0xfe)](()=>{const _0x627721=_0x203482;_0xb645ff[_0x627721(0xe5)](_0x1d8315,_0x2ddc74);})[_0x203482(0x108)](_0x3fce33);})['screenshots']({'timestamps':[0x0],'filename':_0x2ad4ee,'folder':_0x3cbe58,'size':_0x3a1001[_0x2cc8b5(0xd5)](_0x3a1001[_0x2cc8b5(0x112)](_0x2d3e5e[_0x2cc8b5(0x128)],'x'),_0x2d3e5e[_0x2cc8b5(0x113)])})['on'](_0x2cc8b5(0xeb),()=>{const _0x14f91b=_0x2cc8b5;_0x3a1001[_0x14f91b(0xf8)](_0x1d8315,_0x2ddc74);});}),_0x2ecab5=new Map(),_0x48f2e0=await _0x2b37bc,_0x21fe0c=(await _0x3e825d[_0x33e8b7(0xfa)](_0x48f2e0))[_0x33e8b7(0xfc)];_0x2ecab5['set'](0x0,_0x48f2e0);const _0x2709fd=await calculateFileMD5(_0x48f2e0),_0x5a79fd={'elementType':ElementType['VIDEO'],'elementId':'','videoElement':{'fileName':_0x3a1001['OSoBH'](_0x9b2546,_0x7d2dc7),'filePath':_0x4cd41c,'videoMd5':_0x739f50,'thumbMd5':_0x2709fd,'fileTime':_0x2d3e5e[_0x33e8b7(0x114)],'thumbPath':_0x2ecab5,'thumbSize':_0x21fe0c,'thumbWidth':_0x2d3e5e[_0x33e8b7(0x128)],'thumbHeight':_0x2d3e5e['height'],'fileSize':_0x3a1001['tgPTr']('',_0xe96eea)}};return _0x5a79fd;}static async['ptt'](_0x62a05a){const _0x3b7e97=_0x513033,_0x153b1b={'jOEIf':function(_0x4f9aae,_0x3182b9){return _0x4f9aae(_0x3182b9);},'tNVfI':function(_0x26d585,_0x57ebbc){return _0x26d585===_0x57ebbc;},'kouuh':_0x3b7e97(0x123),'bNmkZ':function(_0x212a2c,_0x4b761c){return _0x212a2c||_0x4b761c;}},{converted:_0x7eb0fe,path:_0x3a33fb,duration:_0x5a7763}=await _0x153b1b['jOEIf'](encodeSilk,_0x62a05a);if(!_0x3a33fb)throw'语音转换失败,\x20请检查语音文件是否正常';const {md5:_0x18797c,fileName:_0x5c4fad,path:_0x144b2d,fileSize:_0x49d05b}=await NTQQFileApi['uploadFile'](_0x3a33fb,ElementType[_0x3b7e97(0x12e)]);if(_0x153b1b[_0x3b7e97(0xe7)](_0x49d05b,0x0))throw _0x153b1b[_0x3b7e97(0x109)];return _0x7eb0fe&&_0x3e825d[_0x3b7e97(0xe2)](_0x3a33fb)[_0x3b7e97(0xfe)](),{'elementType':ElementType[_0x3b7e97(0x12e)],'elementId':'','pttElement':{'fileName':_0x5c4fad,'filePath':_0x144b2d,'md5HexStr':_0x18797c,'fileSize':_0x49d05b,'duration':_0x153b1b[_0x3b7e97(0x122)](_0x5a7763,0x1),'formatType':0x1,'voiceType':0x1,'voiceChangeType':0x0,'canConvert2Text':!![],'waveAmplitudes':[0x0,0x12,0x9,0x17,0x10,0x11,0x10,0xf,0x2c,0x11,0x18,0x14,0xe,0xf,0x11],'fileSubId':'','playState':0x1,'autoConvertText':0x0}};}static['face'](_0x2826dc){const _0x4e85d3=_0x513033,_0x35b1ab={'nTMYj':function(_0x1e6b7e,_0x1913d8){return _0x1e6b7e>=_0x1913d8;}},_0x5e9ce4=_0x24cd5c[_0x4e85d3(0xf5)],_0xeb8f21=_0x24cd5c[_0x4e85d3(0x104)],_0x30d9e5=_0x5e9ce4[_0x4e85d3(0xe0)](_0x349631=>_0x349631[_0x4e85d3(0xd7)]===_0x2826dc[_0x4e85d3(0x127)]());_0x2826dc=parseInt(_0x2826dc['toString']());let _0x20dd6d=0x1;return _0x35b1ab[_0x4e85d3(0xff)](_0x2826dc,0xde)&&(_0x20dd6d=0x2),_0x30d9e5[_0x4e85d3(0x11c)]&&(_0x20dd6d=0x3),{'elementType':ElementType[_0x4e85d3(0x118)],'elementId':'','faceElement':{'faceIndex':_0x2826dc,'faceType':_0x20dd6d,'faceText':_0x30d9e5['QDes'],'stickerId':_0x30d9e5['AniStickerId'],'stickerType':_0x30d9e5[_0x4e85d3(0x11c)],'packId':_0x30d9e5[_0x4e85d3(0x100)],'sourceType':0x1}};}static[_0x513033(0x10c)](_0x3837d6,_0x5d6f9f,_0x28faeb,_0x6cbc6){const _0x2e5630=_0x513033,_0x26d97b={'FJglJ':'[商城表情]'};return{'elementType':ElementType[_0x2e5630(0xda)],'marketFaceElement':{'emojiPackageId':_0x3837d6,'emojiId':_0x5d6f9f,'key':_0x28faeb,'faceName':_0x6cbc6||mFaceCache['get'](_0x5d6f9f)||_0x26d97b[_0x2e5630(0x107)]}};}static[_0x513033(0x105)](_0x3ca904){const _0x3d3d47=_0x513033;return{'elementType':ElementType['FACE'],'elementId':'','faceElement':{'faceIndex':FaceIndex[_0x3d3d47(0x105)],'faceType':FaceType['dice'],'faceText':_0x3d3d47(0x12a),'packId':'1','stickerId':'33','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static['rps'](_0x8f966c){const _0x4c1d01=_0x513033,_0x37d8ef={'AKNMI':_0x4c1d01(0x102)};return{'elementType':ElementType[_0x4c1d01(0x118)],'elementId':'','faceElement':{'faceIndex':FaceIndex[_0x4c1d01(0x12c)],'faceText':_0x37d8ef['AKNMI'],'faceType':0x3,'packId':'1','stickerId':'34','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static['ark'](_0x539f1a){const _0x39a52e=_0x513033,_0x360612={'UgLtp':function(_0x5dc35d,_0x213258){return _0x5dc35d!==_0x213258;},'GhzoY':_0x39a52e(0x116)};return _0x360612[_0x39a52e(0xd8)](typeof _0x539f1a,_0x360612[_0x39a52e(0xef)])&&(_0x539f1a=JSON[_0x39a52e(0x119)](_0x539f1a)),{'elementType':ElementType[_0x39a52e(0xd2)],'elementId':'','arkElement':{'bytesData':_0x539f1a,'linkInfo':null,'subElementType':null}};}static[_0x513033(0x11d)](_0x249e47){const _0x251b2b=_0x513033;return{'elementType':ElementType[_0x251b2b(0x11e)],'elementId':'','markdownElement':{'content':_0x249e47}};}static async[_0x513033(0x126)](){const _0x384a06=_0x513033,_0x1f0964={'QhwFV':_0x384a06(0x11a),'JYBds':'https://tianquan.gtimg.cn/shoal/qqAIAgent/3e9d70c9-d98c-45b8-80b4-79d82971b514.png'};let _0x19c853=await SignMiniApp({'prompt':_0x384a06(0x11a),'title':_0x1f0964['QhwFV'],'preview':_0x384a06(0xdc),'jumpUrl':_0x384a06(0x11b),'tag':_0x1f0964[_0x384a06(0xee)],'tagIcon':_0x384a06(0xea),'source':_0x1f0964[_0x384a06(0xee)],'sourcelogo':_0x1f0964[_0x384a06(0x103)]});return{'elementType':ElementType[_0x384a06(0xd2)],'elementId':'','arkElement':{'bytesData':_0x19c853,'linkInfo':null,'subElementType':null}};}}