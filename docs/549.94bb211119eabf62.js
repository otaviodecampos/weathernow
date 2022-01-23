"use strict";(self.webpackChunkweather_now=self.webpackChunkweather_now||[]).push([[549],{549:(ie,f,s)=>{s.r(f),s.d(f,{WeatherModule:()=>oe});var e=s(893),g=s(579),A=s(306),T=s(727);class b extends T.w0{constructor(n,r){super()}schedule(n,r=0){return this}}const u={setInterval(...t){const{delegate:n}=u;return((null==n?void 0:n.setInterval)||setInterval)(...t)},clearInterval(t){const{delegate:n}=u;return((null==n?void 0:n.clearInterval)||clearInterval)(t)},delegate:void 0};var I=s(737);const m={now:()=>(m.delegate||Date).now(),delegate:void 0};class l{constructor(n,r=l.now){this.schedulerActionCtor=n,this.now=r}schedule(n,r=0,a){return new this.schedulerActionCtor(this,n).schedule(a,r)}}l.now=m.now;const D=new class S extends l{constructor(n,r=l.now){super(n,r),this.actions=[],this._active=!1,this._scheduled=void 0}flush(n){const{actions:r}=this;if(this._active)return void r.push(n);let a;this._active=!0;do{if(a=n.execute(n.state,n.delay))break}while(n=r.shift());if(this._active=!1,a){for(;n=r.shift();)n.unsubscribe();throw a}}}(class W extends b{constructor(n,r){super(n,r),this.scheduler=n,this.work=r,this.pending=!1}schedule(n,r=0){if(this.closed)return this;this.state=n;const a=this.id,o=this.scheduler;return null!=a&&(this.id=this.recycleAsyncId(o,a,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(o,this.id,r),this}requestAsyncId(n,r,a=0){return u.setInterval(n.flush.bind(n,this),a)}recycleAsyncId(n,r,a=0){if(null!=a&&this.delay===a&&!1===this.pending)return r;u.clearInterval(r)}execute(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const a=this._execute(n,r);if(a)return a;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,r){let o,a=!1;try{this.work(n)}catch(i){a=!0,o=i||new Error("Scheduled action threw falsy error")}if(a)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:n,scheduler:r}=this,{actions:a}=r;this.work=this.state=this.scheduler=null,this.pending=!1,(0,I.P)(a,this),null!=n&&(this.id=this.recycleAsyncId(r,n,null)),this.delay=null,super.unsubscribe()}}});var N=s(532);var U=s(482),O=s(403),j=s(421),J=s(32),L=s(451),w=s(505),P=s(262),x=s(646);const d=JSON.parse('{"JW":"https://api.openweathermap.org/data/2.5/weather","LV":"metric","q1":"1fdd7c70b6538f4fed1675d9a3580c4c","RT":10,"qp":10}');var c=(()=>{return(t=c||(c={})).Blue="blue",t.Red="red",t.Orange="orange",c;var t})(),R=s(520);function v(t){return`WeatherNow-${t}`}let Q=(()=>{class t{constructor(){this.storage=window.localStorage}set(r,a){const o={storedIn:new Date,value:a};this.storage.setItem(v(r),function Y(t){return JSON.stringify(t)}(o))}get(r,a=0){const o=this.storage.getItem(v(r));if(o){const i=function E(t){const n=JSON.parse(t);return n.storedIn=new Date(n.storedIn),n}(o);if(!a||function q(t,n){const r=function V(t,n){return Math.abs(t.getTime()-n.getTime())}(t,n);return function z(t){return Math.floor(t/1e3/60)}(r)}(i.storedIn,new Date)<a)return i.value}return null}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function y(t){return`CityName-${t}`}let K=(()=>{class t{constructor(r,a){this.http=r,this.storage=a}getDataByCityName(r){const a={q:r,appid:d.q1,units:d.LV},o=this.storage.get(y(r),d.qp);return o?(0,x.of)(o):this.http.get(d.JW,{params:a}).pipe((0,w.b)(i=>this.storage.set(y(r),i)))}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(R.eN),e.LFG(Q))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=s(808);const k=["*"];let C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-button"]],ngContentSelectors:k,decls:2,vars:0,consts:[[1,"btn"]],template:function(r,a){1&r&&(e.F$t(),e.TgZ(0,"button",0),e.Hsn(1),e.qZA())},styles:[".btn[_ngcontent-%COMP%]{border:2px solid var(--btn-border-color);padding:10px 16px;border-radius:30px;background:var(--btn-bg);color:var(--btn-text-color);font-size:14px}.btn[_ngcontent-%COMP%]:hover{background:var(--btn-hover-bg-color);cursor:pointer}"]}),t})();function G(t,n){if(1&t&&(e.TgZ(0,"div",8),e.TgZ(1,"div",9),e.TgZ(2,"div",10),e._uU(3," Humidity "),e.qZA(),e.TgZ(4,"div",11),e.TgZ(5,"span",12),e._uU(6),e.qZA(),e.TgZ(7,"span",13),e._uU(8," % "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",14),e.TgZ(10,"div",10),e._uU(11," Pressure "),e.qZA(),e.TgZ(12,"div",11),e.TgZ(13,"span",12),e._uU(14),e.qZA(),e.TgZ(15,"span",13),e._uU(16," hPa "),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const r=e.oxw().ngIf;e.xp6(6),e.hij(" ",r.main.humidity," "),e.xp6(8),e.hij(" ",r.main.pressure," ")}}function H(t,n){if(1&t&&(e.ynx(0),e.TgZ(1,"div"),e._uU(2),e.ALo(3,"number"),e.TgZ(4,"span",4),e._uU(5,"\xba"),e.qZA(),e.qZA(),e.TgZ(6,"div",5),e.YNc(7,G,17,2,"div",6),e.TgZ(8,"small",7),e._uU(9),e.ALo(10,"date"),e.qZA(),e.qZA(),e.BQk()),2&t){const r=n.ngIf,a=e.oxw();e.xp6(1),e.Gre("weather-card__content text text--big color color--",a.getTemperatureColor(r.main.temp),""),e.xp6(1),e.hij(" ",e.xi3(3,6,r.main.temp,"1.0-0")," "),e.xp6(5),e.Q6J("ngIf",a.showDetails),e.xp6(2),e.hij(" Updated at ",e.xi3(10,9,1e3*r.dt,"mediumTime")," ")}}function X(t,n){if(1&t){const r=e.EpF();e.ynx(0),e.TgZ(1,"div",15),e.TgZ(2,"span",16),e._uU(3," Something went wrong "),e.qZA(),e.TgZ(4,"app-button",17),e.NdJ("click",function(){return e.CHM(r),e.oxw(2).updateWeatherData()}),e._uU(5," Try Again "),e.qZA(),e.qZA(),e.BQk()}}function ee(t,n){if(1&t&&e.YNc(0,X,6,0,"ng-container",1),2&t){const r=e.oxw(),a=e.MAs(7);e.Q6J("ngIf",r.error)("ngIfElse",a)}}function te(t,n){1&t&&(e.TgZ(0,"div",18),e._UZ(1,"img",19),e.qZA())}let Z=(()=>{class t{constructor(r){this.weatherService=r,this.destroy$=new g.x,this.cancelTimer$=new g.x,this.showDetails=!1,this.selected=!1,this.error=!1}getTemperatureColor(r){switch(!0){case r<=5:return c.Blue;case r>25:return c.Red;default:return c.Orange}}ngOnDestroy(){this.destroy$.next(""),this.destroy$.complete()}ngOnChanges(r){this.cityName&&this.updateWeatherData()}updateWeatherData(){this.cancelTimer$.next(""),function B(t=0,n,r=D){let a=-1;return null!=n&&((0,N.K)(n)?r=n:a=n),new A.y(o=>{let i=function M(t){return t instanceof Date&&!isNaN(t)}(t)?+t-r.now():t;i<0&&(i=0);let se=0;return r.schedule(function(){o.closed||(o.next(se++),0<=a?this.schedule(void 0,a):o.complete())},i)})}(0,function $(t){return 60*t*1e3}(d.RT)).pipe(function F(t){return(0,U.e)((n,r)=>{(0,j.Xf)(t).subscribe(new O.Q(r,()=>r.complete(),J.Z)),!r.closed&&n.subscribe(r)})}((0,L.T)(this.destroy$,this.cancelTimer$)),(0,w.b)(()=>{this.error=!1,this.weatherData$=this.weatherService.getDataByCityName(this.cityName).pipe((0,P.K)(r=>(console.error(r),this.error=!0,(0,x.of)(null))))})).subscribe()}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-weather-card"]],hostAttrs:[1,"weather-card"],hostVars:2,hostBindings:function(r,a){2&r&&e.ekj("weather-card--selected",a.selected)},inputs:{showDetails:"showDetails",selected:"selected",cityName:"cityName"},features:[e.TTD],decls:8,vars:5,consts:[[1,"weather-card__title"],[4,"ngIf","ngIfElse"],["loadingOrError",""],["loading",""],[1,"celsius-symbol"],[1,"weather-card__footer"],["class","weather-card-details",4,"ngIf"],[1,"weather-card-updated","text","text--small"],[1,"weather-card-details"],[1,"weather-card-detail","weather-card-detail--humidity"],[1,"weather-card-detail__title"],[1,"weather-card-detail__content"],[1,"text","text--medium"],[1,"weather-card-detail__unit","text","text--small"],[1,"weather-card-detail","weather-card-detail--pressure"],[1,"weather-card__content","weather-card__content--error"],[1,"text","text--medium","color","color--red"],[1,"try-again-button",3,"click"],[1,"weather-card__content"],["alt","Loading","src","assets/card/loader.svg","width","50","height","50",1,"weather-card-loader"]],template:function(r,a){if(1&r&&(e.TgZ(0,"div",0),e._uU(1),e.qZA(),e.YNc(2,H,11,12,"ng-container",1),e.ALo(3,"async"),e.YNc(4,ee,1,2,"ng-template",null,2,e.W1O),e.YNc(6,te,2,0,"ng-template",null,3,e.W1O)),2&r){const o=e.MAs(5);e.xp6(1),e.hij(" ",a.cityName,"\n"),e.xp6(1),e.Q6J("ngIf",e.lcZ(3,3,a.weatherData$))("ngIfElse",o)}},directives:[h.O5,C],pipes:[h.Ov,h.JJ,h.uU],styles:[".weather-card-detail__content,.weather-card-detail__title,.weather-card__footer,.weather-card__content,.weather-card__title{display:flex;align-items:center;justify-content:center}.weather-card{display:flex;flex-direction:column;background:var(--weather-card-bg);min-width:250px;min-height:220px;color:var(--weather-card-color);border-radius:6px;box-shadow:var(--weather-card-shadow);flex:1;overflow:hidden}.weather-card--selected{order:-1;flex-basis:100%}@media only screen and (min-width: 1008px){.weather-card{order:unset;flex-basis:unset;flex:unset}}.weather-card__title{color:var(--weather-card-title-color);border-bottom:1px solid var(--weather-card-title-border-color);padding:10px;font-weight:500;font-size:16px}.weather-card__content{padding:10px;flex:1}.weather-card__content--error{flex-direction:column;gap:20px}.weather-card__content .celsius-symbol{transform:scale(.6) translateY(-18px)}.weather-card__footer{flex-direction:column;gap:10px;justify-content:space-between;background:var(--weather-card-footer-bg);padding:14px;margin-top:10px}.weather-card-details{display:flex;gap:10px;width:100%;justify-content:space-between;padding-left:20px;padding-right:20px}.weather-card-detail__title{color:var(--weather-card-detail-title-color);text-transform:uppercase;font-size:12px;margin-bottom:4px}.weather-card-detail__content{color:var(--weather-card-detail-content-color)}.weather-card-detail__unit{padding-top:2px}\n"],encapsulation:2}),t})(),_=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-weather-page"]],decls:3,vars:2,consts:[["cityName","Nuuk, GL"],["cityName","Urubici, BR",3,"showDetails","selected"],["cityName","Nairobi, KE"]],template:function(r,a){1&r&&(e._UZ(0,"app-weather-card",0),e._UZ(1,"app-weather-card",1),e._UZ(2,"app-weather-card",2)),2&r&&(e.xp6(1),e.Q6J("showDetails",!0)("selected",!0))},directives:[Z],styles:["[_nghost-%COMP%]{display:flex;gap:40px;flex-wrap:wrap;flex:1;align-items:center;justify-content:center}"]}),t})();var p=s(919);const re=[{path:"",component:_}];let ne=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.Bz.forChild(re)],p.Bz]}),t})(),ae=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[]]}),t})(),oe=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[ae,ne,h.ez,p.Bz]]}),t})()}}]);