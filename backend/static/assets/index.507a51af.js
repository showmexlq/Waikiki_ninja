var e=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,r=(a,s,t)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,l=(e,a)=>{for(var s in a||(a={}))o.call(a,s)&&r(e,s,a[s]);if(t)for(var s of t(a))c.call(a,s)&&r(e,s,a[s]);return e},n=(e,t)=>a(e,s(t));import{o as i,c as d,a as p,F as m,r as u,k,p as y,b as w,d as x,e as v,t as b,f as g,g as f,u as h,h as C,_ as j,w as S,i as K,j as _,l as P,m as A,n as W,q as I,s as L,v as V}from"./vendor.35e336be.js";const O={},z={class:"main"};O.render=function(e,a){const s=u("Header"),t=u("router-view");return i(),d(m,null,[p(s),p("div",z,[p(t)])],64)};const Q=k.create({prefixUrl:"/api",retry:{limit:0}});function U(e){return Q.post("WSCKLogin",{json:e}).json()}const D={setup(){const e=h();C();let a=x({remark:"",jdwsck:void 0,nickName:void 0,timestamp:void 0});const s=async()=>{try{const e=localStorage.getItem("eid"),s=localStorage.getItem("wseid");if(!e&&!s)return void t();if(e){const s=await function(e){const a=new URLSearchParams;return a.set("eid",e),Q.get("userinfo",{searchParams:a}).json()}(e);if(!s)return j.error("获取用户CK信息失败，请重重新登录"),void t();a.nickName=s.data.nickName,a.remark=s.data.remark,a.timestamp=new Date(s.data.timestamp).toLocaleString()}if(s){const e=await getWSCKUserinfoAPI(s);if(!e)return j.error("获取用户WSCK信息失败，请重重新登录"),void t();a.nickName=e.data.nickName,a.timestamp=new Date(e.data.timestamp).toLocaleString()}}catch(e){console.error(e)}};v(s);const t=()=>{localStorage.removeItem("eid"),localStorage.removeItem("wseid"),e.push("/login")};return n(l({},b(a)),{activity:[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"}],getInfo:s,logout:t,delAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return Q.post("delaccount",{json:e}).json()}({eid:e});200!==a.code?(j.error(a.message),t()):(j.success(a.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}},enableCK:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return Q.post("enableck",{json:e}).json()}({eid:e});200!==a.code?j.success(a.message):(j.error(a.message),setTimeout((()=>{t()}),1e3)),await s()}catch(e){console.error(e)}},disableCK:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return Q.post("disableck",{json:e}).json()}({eid:e});200!==a.code?j.error(a.message):(j.success(a.message),setTimeout((()=>{t()}),1e3)),await s()}catch(e){console.error(e)}},changeremark:async()=>{try{const t=localStorage.getItem("eid"),o=localStorage.getItem("wseid"),c=a.remark;if(t){const e=await function(e){return Q.post("update/remark",{json:e}).json()}({eid:t,remark:c});200!==e.code?j.success(e.message):j.error(e.message)}if(o){const a=await(e={wseid:o,remark:c},Q.post("updateWSCK/remark",{json:e}).json());200!==a.code?j.success(a.message):j.error(a.message)}await s()}catch(t){console.error(t)}var e},WSCKLogin:async()=>{try{const e=a.jdwsck.match(/wskey=(.*?);/)&&a.jdwsck.match(/wskey=(.*?);/)[1],s=a.jdwsck.match(/pin=(.*?);/)&&a.jdwsck.match(/pin=(.*?);/)[1];if(e&&s){const a=await U({wskey:e,pin:s});a.data.wseid?(localStorage.setItem("wseid",a.data.wseid),j.success(a.message)):j.error(a.message||"wskey 解析失败，请检查后重试！")}else j.error("wskey 解析失败，请检查后重试！")}catch(e){console.error(e)}},delWSCKAccount:async()=>{try{const e=localStorage.getItem("wseid"),a=await function(e){return Q.post("WSCKDelaccount",{json:e}).json()}({wseid:e});200!==a.code?j.error(a.message):(j.success(a.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}},openUrlWithJD:e=>{const a=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);window.location.href=`openapp.jdmobile://virtual?params=${a}`,console.log(window.location.href)}})}},R=S("data-v-061c06e8");y("data-v-061c06e8");const q={class:"content"},N={class:"card"},T=p("div",{class:"card-header"},[p("p",{class:"text-3xl font-bold"},"个人中心")],-1),J={class:"card-body"},E={class:"card-footer"},H=K("删除CK"),$=K("禁用CK"),Z=K("启用CK"),B=K("退出登录"),G={class:"card"},F=_('<div class="card-header" data-v-061c06e8><p class="text-3xl font-bold" data-v-061c06e8>WSCK 录入</p><div class="card-body text-base leading-6" data-v-061c06e8><b data-v-061c06e8>wskey有效期长达一年。</b><b data-v-061c06e8>wskey会随着京东app的退出登录和更改密码而失效，清楚app数据或者卸载软件不会影响。</b></div></div>',1),X={class:"card-body text-center"},M={class:"card-footer"},Y=K("重新录入"),ee=K("删除WSCK"),ae={class:"card"},se=p("div",{class:"card-header"},[p("p",{class:"text-3xl font-bold"},"修改备注（CK和WSCK同步）")],-1),te={class:"card-body text-center"},oe={class:"card-footer"},ce=K("修改"),re={class:"card"},le=p("div",{class:"card-header"},[p("p",{class:"text-3xl font-bold"},"常见活动位置"),p("span",{class:"card-subtitle"},"下面是一些常见活动的位置")],-1),ne={class:"card-body"},ie={class:"pr-2"};w();const de=R(((e,a,s,t,o,c)=>{const r=u("el-button"),l=u("el-input");return i(),d("div",q,[p("div",N,[T,p("div",J,[p("p",null,"昵称："+g(e.nickName),1),p("p",null,"更新时间："+g(e.timestamp),1)]),p("div",E,[p(r,{type:"danger",size:"small",auto:"",onClick:t.delAccount},{default:R((()=>[H])),_:1},8,["onClick"]),p(r,{type:"warning",size:"small",auto:"",onClick:t.disableCK},{default:R((()=>[$])),_:1},8,["onClick"]),p(r,{type:"success",size:"small",auto:"",onClick:t.enableCK},{default:R((()=>[Z])),_:1},8,["onClick"]),p(r,{size:"small",auto:"",onClick:t.logout},{default:R((()=>[B])),_:1},8,["onClick"])])]),p("div",G,[F,p("div",X,[p(l,{modelValue:e.jdwsck,"onUpdate:modelValue":a[1]||(a[1]=a=>e.jdwsck=a),placeholder:"pin=xxxxxx;wskey=xxxxxxxxxx;",size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),p("div",M,[p(r,{type:"success",size:"small",auto:"",onClick:t.WSCKLogin},{default:R((()=>[Y])),_:1},8,["onClick"]),p(r,{type:"danger",size:"small",auto:"",onClick:t.delWSCKAccount},{default:R((()=>[ee])),_:1},8,["onClick"])])]),p("div",ae,[se,p("div",te,[p(l,{modelValue:e.remark,"onUpdate:modelValue":a[2]||(a[2]=a=>e.remark=a),size:"small",placeholder:"{{ remark }}",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),p("div",oe,[p(r,{type:"success",size:"small",auto:"",onClick:t.changeremark},{default:R((()=>[ce])),_:1},8,["onClick"])])]),p("div",re,[le,p("div",ne,[p("ul",null,[(i(!0),d(m,null,f(t.activity,((e,a)=>(i(),d("li",{key:a,class:"leading-normal"},[p("span",null,g(e.name)+"：",1),p("span",ie,g(e.address),1),e.href?(i(),d("a",{key:0,class:"text-blue-400",href:"#",onClick:a=>t.openUrlWithJD(e.href)},"直达链接",8,["onClick"])):P("",!0)])))),128))])])])])}));D.render=de,D.__scopeId="data-v-061c06e8";const pe={setup(){const e=h();C();let a=x({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,waitLogin:!1,marginWSCKCount:0,allowWSCKAdd:!0,jdwsck:void 0,showQR:!1,showWSCK:!1,showCK:!0});const s=async()=>{try{const e=(await Q.get("info").json()).data;a.marginCount=e.marginCount,a.allowAdd=e.allowAdd,a.marginWSCKCount=e.marginWSCKCount,a.allowWSCKAdd=e.allowWSCKAdd,a.showQR=e.showQR,a.showWSCK=e.showWSCK,a.showCK=e.showCK}catch(e){console.error(e)}},t=async()=>{if(this.showQR)try{const e=await Q.get("qrcode").json();a.token=e.data.token,a.okl_token=e.data.okl_token,a.cookies=e.data.cookies,a.QRCode=e.data.QRCode,a.QRCode&&(a.waitLogin=!0,clearInterval(a.timer),a.timer=setInterval(o,3e3))}catch(e){console.error(e),j.error("生成二维码失败！请重试或放弃")}else j.warning("扫码已禁用请手动抓包")},o=async()=>{try{const s=await function(e){return Q.post("check",{json:e}).json()}({token:a.token,okl_token:a.okl_token,cookies:a.cookies});switch(null==s?void 0:s.data.errcode){case 0:localStorage.setItem("eid",s.data.eid),j.success(s.message),clearInterval(a.timer),e.push("/");break;case 176:break;default:j.error(s.message),a.waitLogin=!1,clearInterval(a.timer)}}catch(s){clearInterval(a.timer),a.waitLogin=!1}};return v((()=>{s(),t()})),n(l({},b(a)),{getInfo:s,getQrcode:t,showQrcode:async()=>{a.qrCodeVisibility=!0},ckeckLogin:o,jumpLogin:async()=>{const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${a.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e},CKLogin:async()=>{try{const s=a.cookie.match(/pt_key=(.*?);/)&&a.cookie.match(/pt_key=(.*?);/)[1],t=a.cookie.match(/pt_pin=(.*?);/)&&a.cookie.match(/pt_pin=(.*?);/)[1];if(s&&t){const a=await function(e){return Q.post("cklogin",{json:e}).json()}({pt_key:s,pt_pin:t});a.data.eid?(localStorage.setItem("eid",a.data.eid),j.success(a.message),e.push("/")):j.error(a.message||"cookie 解析失败，请检查后重试！")}else j.error("cookie 解析失败，请检查后重试！")}catch(s){console.error(s)}},WSCKLogin:async()=>{try{const s=a.jdwsck.match(/wskey=(.*?);/)&&a.jdwsck.match(/wskey=(.*?);/)[1],t=a.jdwsck.match(/pin=(.*?);/)&&a.jdwsck.match(/pin=(.*?);/)[1];if(s&&t){const a=await U({wskey:s,pin:t});a.data.wseid?(localStorage.setItem("wseid",a.data.wseid),j.success(a.message),e.push("/")):j.error(a.message||"wskey 解析失败，请检查后重试！")}else j.error("wskey 解析失败，请检查后重试！")}catch(s){console.error(s)}}})}},me=S("data-v-92798b1c");y("data-v-92798b1c");const ue={class:"content"},ke=_('<div class="card" data-v-92798b1c><div class="card-header" data-v-92798b1c><div class="flex items-center justify-between" data-v-92798b1c><p class="text-3xl font-bold" data-v-92798b1c>Hello!</p></div></div><div class="card-body text-base leading-6" data-v-92798b1c><p data-v-92798b1c>为了您的财产安全请关闭免密支付以及打开支付验密（京东-设置-支付设置-支付验密设置）。</p><p data-v-92798b1c>建议京东账户绑定微信以保证提现能到账。</p><b data-v-92798b1c>安全起见，WSCK可以在CK登录后录入，有效期一年。</b></div><div class="card-footer" data-v-92798b1c></div></div>',1),ye={key:0,class:"card"},we={class:"card-header"},xe={class:"flex items-center justify-between"},ve=p("p",{class:"text-3xl font-bold"},"扫码登录",-1),be={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},ge=p("span",{class:"card-subtitle"}," 请点击下方按钮登录，点击按钮后回到本网站查看是否登录成功，京东的升级提示不用管。 ",-1),fe={class:"card-body text-center"},he={key:0,class:"flex flex-col w-48 m-auto mt-4"},Ce=K("扫描二维码登录"),je=K("跳转到京东 App 登录"),Se=p("div",{class:"card-footer"},null,-1),Ke={key:1,class:"card"},_e={class:"card-header"},Pe={class:"flex items-center justify-between"},Ae=p("p",{class:"text-3xl font-bold"},"WSCK 录入",-1),We={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Ie=_('<div class="card-body text-base leading-6" data-v-92798b1c><b data-v-92798b1c>wskey有效期长达一年</b><b data-v-92798b1c>wskey会随着京东app的退出登录和更改密码而失效，清楚app数据或者卸载软件不会影响。</b></div><span class="card-subtitle" data-v-92798b1c> 请在下方输入您的 WSCK </span>',2),Le={class:"card-body text-center"},Ve=K("录入"),Oe=p("div",{class:"card-footer"},null,-1),ze={key:2,class:"card"},Qe={class:"card-header"},Ue={class:"flex items-center justify-between"},De=p("p",{class:"text-3xl font-bold"},"CK 登录",-1),Re={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},qe=p("div",{class:"card-body text-base leading-6"},[p("p",null,"cookie直接填入输入框即可，Ninja会自动正则提取pt_key和pt_pin。")],-1),Ne=p("span",{class:"card-subtitle"}," 请在下方输入您的 cookie 登录。 ",-1),Te={class:"card-body text-center"},Je=K("登录"),Ee=p("div",{class:"card-footer"},null,-1);w();const He=me(((e,a,s,t,o,c)=>{const r=u("el-button"),l=u("el-input");return i(),d("div",ue,[ke,e.showQR?(i(),d("div",ye,[p("div",we,[p("div",xe,[ve,p("span",be,"余量："+g(e.marginCount),1)]),ge]),p("div",fe,[e.qrCodeVisibility?(i(),d("img",{key:1,src:e.QRCode,width:256,class:"m-auto"},null,8,["src"])):(i(),d("div",he,[p(r,{type:"primary",round:"",onClick:t.showQrcode},{default:me((()=>[Ce])),_:1},8,["onClick"]),p(r,{class:"mt-4 ml-0",type:"primary",round:"",onClick:t.jumpLogin},{default:me((()=>[je])),_:1},8,["onClick"])]))]),Se])):P("",!0),e.showWSCK?(i(),d("div",Ke,[p("div",_e,[p("div",Pe,[Ae,p("span",We,"余量："+g(e.marginWSCKCount),1)]),Ie]),p("div",Le,[p(l,{modelValue:e.jdwsck,"onUpdate:modelValue":a[1]||(a[1]=a=>e.jdwsck=a),placeholder:"pin=xxxxxx;wskey=xxxxxxxxxx;",size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),p(r,{type:"primary",size:"small",round:"",onClick:t.WSCKLogin},{default:me((()=>[Ve])),_:1},8,["onClick"])]),Oe])):P("",!0),e.showCK?(i(),d("div",ze,[p("div",Qe,[p("div",Ue,[De,p("span",Re,"余量："+g(e.marginCount),1)]),qe,Ne]),p("div",Te,[p(l,{modelValue:e.cookie,"onUpdate:modelValue":a[2]||(a[2]=a=>e.cookie=a),placeholder:"...pt_pin=xxxxxx;pt_token=xxxxxxxxxx;...",size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),p(r,{type:"primary",size:"small",round:"",onClick:t.CKLogin},{default:me((()=>[Je])),_:1},8,["onClick"])]),Ee])):P("",!0)])}));pe.render=He,pe.__scopeId="data-v-92798b1c";const $e=[{path:"/",component:D},{path:"/login",component:pe}],Ze=A({history:W(),routes:$e}),Be=[L,V,j],Ge=[j],Fe=I(O);Be.forEach((e=>{Fe.component(e.name,e)})),Ge.forEach((e=>{Fe.use(e)})),Fe.use(Ze),Fe.mount("#app");
