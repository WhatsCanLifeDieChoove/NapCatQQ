const _0x251af2=_0x1eed;(function(_0x3c53af,_0x5390c2){const _0xae225d=_0x1eed,_0x2a5efb=_0x3c53af();while(!![]){try{const _0x572eec=parseInt(_0xae225d(0x146))/0x1*(-parseInt(_0xae225d(0x142))/0x2)+parseInt(_0xae225d(0x147))/0x3+-parseInt(_0xae225d(0x14a))/0x4+parseInt(_0xae225d(0x139))/0x5+parseInt(_0xae225d(0x136))/0x6+parseInt(_0xae225d(0x143))/0x7*(parseInt(_0xae225d(0x13c))/0x8)+parseInt(_0xae225d(0x140))/0x9*(-parseInt(_0xae225d(0x14b))/0xa);if(_0x572eec===_0x5390c2)break;else _0x2a5efb['push'](_0x2a5efb['shift']());}catch(_0x46d808){_0x2a5efb['push'](_0x2a5efb['shift']());}}}(_0x25ac,0xf3ebe));import{isNumeric}from'@/common/utils/helper';import{NTQQGroupApi}from'@/core/apis';export const Credentials={'Skey':'','CreatTime':0x0,'PskeyData':new Map(),'PskeyTime':new Map()};export const WebGroupData={'GroupData':new Map(),'GroupTime':new Map()};export const selfInfo={'uid':'','uin':'','nick':'','online':!![]};export const groups=new Map();function _0x1eed(_0x51220c,_0x41e2e9){const _0x25ac5b=_0x25ac();return _0x1eed=function(_0x1eed80,_0x2412bd){_0x1eed80=_0x1eed80-0x136;let _0x2af393=_0x25ac5b[_0x1eed80];return _0x2af393;},_0x1eed(_0x51220c,_0x41e2e9);}export function deleteGroup(_0x51f4a0){const _0x44d1b1=_0x1eed;groups[_0x44d1b1(0x14f)](_0x51f4a0),groupMembers[_0x44d1b1(0x14f)](_0x51f4a0);}export const groupMembers=new Map();export const friends=new Map();export const friendRequests={};export const groupNotifies={};export const napCatError={'ffmpegError':'','httpServerError':'','wsServerError':'','otherError':_0x251af2(0x144)};export async function getFriend(_0x708576){const _0x294302=_0x251af2;_0x708576=_0x708576[_0x294302(0x13a)]();if(isNumeric(_0x708576)){const _0x41d6a5=Array[_0x294302(0x150)](friends['values']());return _0x41d6a5[_0x294302(0x141)](_0x180da=>_0x180da[_0x294302(0x137)]===_0x708576);}else return friends[_0x294302(0x13e)](_0x708576);}export async function getGroup(_0x628852){const _0x3e4fff=_0x251af2;let _0x402410=groups['get'](_0x628852[_0x3e4fff(0x13a)]());if(!_0x402410)try{const _0xfe3862=await NTQQGroupApi[_0x3e4fff(0x14e)]();_0xfe3862[_0x3e4fff(0x13f)]&&_0xfe3862[_0x3e4fff(0x13b)](_0x50c5ca=>{const _0x391822=_0x3e4fff;groups[_0x391822(0x138)](_0x50c5ca[_0x391822(0x149)],_0x50c5ca);});}catch(_0x234e42){return undefined;}return _0x402410=groups['get'](_0x628852[_0x3e4fff(0x13a)]()),_0x402410;}export async function getGroupMember(_0x539b52,_0x417cac){const _0x274b16=_0x251af2,_0x18ea41={'nOeMb':function(_0x4a1d83,_0x4df776){return _0x4a1d83(_0x4df776);},'PGKvq':function(_0x30d8c9){return _0x30d8c9();}};_0x539b52=_0x539b52[_0x274b16(0x13a)](),_0x417cac=_0x417cac[_0x274b16(0x13a)]();let _0x3c3053=groupMembers[_0x274b16(0x13e)](_0x539b52);if(!_0x3c3053)try{_0x3c3053=await NTQQGroupApi[_0x274b16(0x14c)](_0x539b52),groupMembers[_0x274b16(0x138)](_0x539b52,_0x3c3053);}catch(_0x31bfba){return null;}const _0x2b9e3a=()=>{const _0x6b3537=_0x274b16;let _0x23b64d=undefined;return _0x18ea41[_0x6b3537(0x13d)](isNumeric,_0x417cac)?_0x23b64d=Array[_0x6b3537(0x150)](_0x3c3053[_0x6b3537(0x148)]())[_0x6b3537(0x141)](_0x583b73=>_0x583b73[_0x6b3537(0x137)]===_0x417cac):_0x23b64d=_0x3c3053[_0x6b3537(0x13e)](_0x417cac),_0x23b64d;};let _0x1241be=_0x18ea41[_0x274b16(0x14d)](_0x2b9e3a);return!_0x1241be&&(_0x3c3053=await NTQQGroupApi[_0x274b16(0x14c)](_0x539b52),_0x1241be=_0x2b9e3a()),_0x1241be;}export const uid2UinMap={};export function getUidByUin(_0xfc90d8){const _0xd62273=_0x251af2,_0x3fb708={'tOxka':function(_0x52d806,_0x237622){return _0x52d806===_0x237622;}};for(const _0x2efb81 in uid2UinMap){if(_0x3fb708[_0xd62273(0x145)](uid2UinMap[_0x2efb81],_0xfc90d8))return _0x2efb81;}}export const tempGroupCodeMap={};export const rawFriends=[];export const stat={'packet_received':0x0,'packet_sent':0x0,'message_received':0x0,'message_sent':0x0,'last_message_time':0x0,'disconnect_times':0x0,'lost_times':0x0,'packet_lost':0x0};function _0x25ac(){const _0x2fa3a9=['getGroupMembers','PGKvq','getGroups','delete','from','1311462zmWTAu','uin','set','5747965xFYbqV','toString','forEach','272zcTJzp','nOeMb','get','length','576FKNaOc','find','156122CeKNcs','349741YVUTVh','NapCat未能正常启动，请检查日志查看错误','tOxka','1UXasEL','1741041glpAAb','values','groupCode','4529856AaFpCA','224630hXFvhj'];_0x25ac=function(){return _0x2fa3a9;};return _0x25ac();}