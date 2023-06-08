"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[415],{8111:(_n,$e,b)=>{b.d($e,{a:()=>x});var i=b(4004),ie=b(1448),le=b(1571),fe=b(529);let x=(()=>{class F{constructor(m){this.http=m,this.url=ie.T+"api/reservations"}getReservations(){return this.http.get(this.url).pipe((0,i.U)(m=>m))}getReservationsForUserDay(m,O){return this.http.get(this.url+"/user/"+m+"/"+O).pipe((0,i.U)(q=>q))}getReservationsForRestaurantDay(m,O){return this.http.get(this.url+"/rest/"+m+"/"+O).pipe((0,i.U)(q=>q))}getReservationsForRestaurant(m){return this.http.get(this.url+"/rest/"+m).pipe((0,i.U)(O=>O))}getReservationsForUser(m){return this.http.get(this.url+"/user/"+m).pipe((0,i.U)(O=>O))}postReservation(m){return this.http.post(this.url,m)}putReservation(m,O){return this.http.put(this.url+"/"+m,O)}confirmReservation(m,O){return this.http.put(this.url+"/"+m+"/confirmation",{confirm:O})}deleteReservation(m){return this.http.delete(this.url+"/"+m)}}return F.\u0275fac=function(m){return new(m||F)(le.LFG(fe.eN))},F.\u0275prov=le.Yz7({token:F,factory:F.\u0275fac,providedIn:"root"}),F})()},8020:(_n,$e,b)=>{b.d($e,{d:()=>x});var i=b(4004),ie=b(1448),le=b(1571),fe=b(529);let x=(()=>{class F{constructor(m){this.http=m,this.url=ie.T+"api/restaurants"}getRestaurants(){return this.http.get(this.url).pipe((0,i.U)(m=>m))}getRestaurantById(m){return this.http.get(this.url+"/"+m).pipe((0,i.U)(O=>O))}getRestaurantsPaginated(m){return this.http.get(this.url+"/page/"+m).pipe((0,i.U)(O=>O))}searchRestaurantsPaginated(m,O){return this.http.post(this.url+"/search/"+O,{name:m}).pipe((0,i.U)(q=>q))}postRestaurant(m){return this.http.post(this.url,m)}postWithFiles(m){return this.http.post(this.url+"/add",m)}putRestaurant(m,O){return this.http.put(this.url+"/"+m,O).pipe((0,i.U)(q=>q))}putWithFiles(m,O){return O.append("id",m),this.http.post(this.url+"/add",O).pipe((0,i.U)(q=>q))}deleteRestaurant(m){return this.http.delete(this.url+"/"+m).pipe((0,i.U)(O=>O))}removeImage(m){return this.http.delete(this.url+"/removeImage/"+m).pipe((0,i.U)(O=>O))}}return F.\u0275fac=function(m){return new(m||F)(le.LFG(fe.eN))},F.\u0275prov=le.Yz7({token:F,factory:F.\u0275fac,providedIn:"root"}),F})()},9837:(_n,$e,b)=>{b.d($e,{mH:()=>oi,FF:()=>Si});var i=b(1571),ie=b(9751),le=b(515),fe=b(9646),x=b(7579),F=b(8421),Ee=b(5577),m=b(1144),O=b(576),q=b(3268);const Ki=["addListener","removeListener"],eo=["addEventListener","removeEventListener"],to=["on","off"];function j(t,o,e,n){if((0,O.m)(e)&&(n=e,e=void 0),n)return j(t,o,e).pipe((0,q.Z)(n));const[s,a]=function oo(t){return(0,O.m)(t.addEventListener)&&(0,O.m)(t.removeEventListener)}(t)?eo.map(r=>l=>t[r](o,l,e)):function no(t){return(0,O.m)(t.addListener)&&(0,O.m)(t.removeListener)}(t)?Ki.map(hn(t,o)):function io(t){return(0,O.m)(t.on)&&(0,O.m)(t.off)}(t)?to.map(hn(t,o)):[];if(!s&&(0,m.z)(t))return(0,Ee.z)(r=>j(r,o,e))((0,F.Xf)(t));if(!s)throw new TypeError("Invalid event target");return new ie.y(r=>{const l=(...c)=>r.next(1<c.length?c:c[0]);return s(l),()=>a(l)})}function hn(t,o){return e=>n=>t[e](o,n)}var so=b(727);class ao extends so.w0{constructor(o,e){super()}schedule(o,e=0){return this}}const rt={setInterval(t,o,...e){const{delegate:n}=rt;return n?.setInterval?n.setInterval(t,o,...e):setInterval(t,o,...e)},clearInterval(t){const{delegate:o}=rt;return(o?.clearInterval||clearInterval)(t)},delegate:void 0};var ro=b(8737);const gn={now:()=>(gn.delegate||Date).now(),delegate:void 0};class ze{constructor(o,e=ze.now){this.schedulerActionCtor=o,this.now=e}schedule(o,e=0,n){return new this.schedulerActionCtor(this,o).schedule(n,e)}}ze.now=gn.now;const uo=new class co extends ze{constructor(o,e=ze.now){super(o,e),this.actions=[],this._active=!1}flush(o){const{actions:e}=this;if(this._active)return void e.push(o);let n;this._active=!0;do{if(n=o.execute(o.state,o.delay))break}while(o=e.shift());if(this._active=!1,n){for(;o=e.shift();)o.unsubscribe();throw n}}}(class lo extends ao{constructor(o,e){super(o,e),this.scheduler=o,this.work=e,this.pending=!1}schedule(o,e=0){var n;if(this.closed)return this;this.state=o;const s=this.id,a=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(a,s,e)),this.pending=!0,this.delay=e,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(a,this.id,e),this}requestAsyncId(o,e,n=0){return rt.setInterval(o.flush.bind(o,this),n)}recycleAsyncId(o,e,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return e;null!=e&&rt.clearInterval(e)}execute(o,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(o,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,e){let s,n=!1;try{this.work(o)}catch(a){n=!0,s=a||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),s}unsubscribe(){if(!this.closed){const{id:o,scheduler:e}=this,{actions:n}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,ro.P)(n,this),null!=o&&(this.id=this.recycleAsyncId(e,o,null)),this.delay=null,super.unsubscribe()}}});var po=b(3532);function Pt(t=0,o,e=uo){let n=-1;return null!=o&&((0,po.K)(o)?e=o:n=o),new ie.y(s=>{let a=function fo(t){return t instanceof Date&&!isNaN(t)}(t)?+t-e.now():t;a<0&&(a=0);let r=0;return e.schedule(function(){s.closed||(s.next(r++),0<=n?this.schedule(void 0,n):s.complete())},a)})}const{isArray:_o}=Array;function bn(t){return 1===t.length&&_o(t[0])?t[0]:t}var _e=b(5403);var he=b(1135),Nn=b(9841),lt=b(5032);const yn=new ie.y(lt.Z);var Dn=b(3269);function ct(...t){const o=(0,Dn.jO)(t),e=bn(t);return e.length?new ie.y(n=>{let s=e.map(()=>[]),a=e.map(()=>!1);n.add(()=>{s=a=null});for(let r=0;!n.closed&&r<e.length;r++)(0,F.Xf)(e[r]).subscribe((0,_e.x)(n,l=>{if(s[r].push(l),s.every(c=>c.length)){const c=s.map(d=>d.shift());n.next(o?o(...c):c),s.some((d,u)=>!d.length&&a[u])&&n.complete()}},()=>{a[r]=!0,!s[r].length&&n.complete()}));return()=>{s=a=null}}):le.E}b(6451);var Tn=b(7272),dt=b(4482);function I(t){return(0,dt.e)((o,e)=>{(0,F.Xf)(t).subscribe((0,_e.x)(e,()=>e.complete(),lt.Z)),!e.closed&&o.subscribe(e)})}var oe=b(9300),z=b(5698),ce=b(4004),xt=b(8675),wn=b(4671);function Ft(t,o=wn.y){return t=t??bo,(0,dt.e)((e,n)=>{let s,a=!0;e.subscribe((0,_e.x)(n,r=>{const l=o(r);(a||!t(s,l))&&(a=!1,s=l,n.next(r))}))})}function bo(t,o){return t===o}var On=b(3900),Cn=b(8505);function Bt(...t){const o=(0,Dn.jO)(t);return(0,dt.e)((e,n)=>{const s=t.length,a=new Array(s);let r=t.map(()=>!1),l=!1;for(let c=0;c<s;c++)(0,F.Xf)(t[c]).subscribe((0,_e.x)(n,d=>{a[c]=d,!l&&!r[c]&&(r[c]=!0,(l=r.every(wn.y))&&(r=null))},lt.Z));e.subscribe((0,_e.x)(n,c=>{if(l){const d=[c,...a];n.next(o?o(...d):d)}}))})}b(9718);var h=b(6895);b(433),Math,Math,Math;const ht=["*"];function Fs(t,o){if(1&t){const e=i.EpF();i.TgZ(0,"button",6),i.NdJ("click",function(){const a=i.CHM(e).$implicit,r=i.oxw();return r.focus(),i.KtG(r.select(a.id,r.NgbSlideEventSource.INDICATOR))}),i.qZA()}if(2&t){const e=o.$implicit,n=i.oxw();i.ekj("active",e.id===n.activeId),i.uIk("aria-labelledby","slide-"+e.id)("aria-controls","slide-"+e.id)("aria-selected",e.id===n.activeId)}}function Bs(t,o){}function Gs(t,o){if(1&t&&(i.TgZ(0,"div",7)(1,"span",8),i.SDv(2,9),i.qZA(),i.YNc(3,Bs,0,0,"ng-template",10),i.qZA()),2&t){const e=o.$implicit,n=o.index,s=o.count;i.Q6J("id","slide-"+e.id),i.xp6(2),i.pQV(n+1)(s),i.QtT(2),i.xp6(1),i.Q6J("ngTemplateOutlet",e.tplRef)}}function Ls(t,o){if(1&t){const e=i.EpF();i.TgZ(0,"button",11),i.NdJ("click",function(){i.CHM(e);const s=i.oxw();return i.KtG(s.arrowLeft())}),i._UZ(1,"span",12),i.TgZ(2,"span",8),i.SDv(3,13),i.qZA()()}}function Hs(t,o){if(1&t){const e=i.EpF();i.TgZ(0,"button",14),i.NdJ("click",function(){i.CHM(e);const s=i.oxw();return i.KtG(s.arrowRight())}),i._UZ(1,"span",15),i.TgZ(2,"span",8),i.SDv(3,16),i.qZA()()}}const ha=["dialog"];function Fe(t){return"string"==typeof t}function be(t){return null!=t}function Ge(t){return(t||document.body).getBoundingClientRect()}const Wn={animation:!0,transitionTimerDelayMs:5},Dr=()=>{},{transitionTimerDelayMs:Tr}=Wn,Ke=new Map,G=(t,o,e,n)=>{let s=n.context||{};const a=Ke.get(o);if(a)switch(n.runningTransition){case"continue":return le.E;case"stop":t.run(()=>a.transition$.complete()),s=Object.assign(a.context,s),Ke.delete(o)}const r=e(o,n.animation,s)||Dr;if(!n.animation||"none"===window.getComputedStyle(o).transitionProperty)return t.run(()=>r()),(0,fe.of)(void 0).pipe(function Nr(t){return o=>new ie.y(e=>o.subscribe({next:r=>t.run(()=>e.next(r)),error:r=>t.run(()=>e.error(r)),complete:()=>t.run(()=>e.complete())}))}(t));const l=new x.x,c=new x.x,d=l.pipe(function mo(...t){return o=>(0,Tn.z)(o,(0,fe.of)(...t))}(!0));Ke.set(o,{transition$:l,complete:()=>{c.next(),c.complete()},context:s});const u=function yr(t){const{transitionDelay:o,transitionDuration:e}=window.getComputedStyle(t);return 1e3*(parseFloat(o)+parseFloat(e))}(o);return t.runOutsideAngular(()=>{const f=j(o,"transitionend").pipe(I(d),(0,oe.h)(({target:_})=>_===o));(function vn(...t){return 1===(t=bn(t)).length?(0,F.Xf)(t[0]):new ie.y(function ho(t){return o=>{let e=[];for(let n=0;e&&!o.closed&&n<t.length;n++)e.push((0,F.Xf)(t[n]).subscribe((0,_e.x)(o,s=>{if(e){for(let a=0;a<e.length;a++)a!==n&&e[a].unsubscribe();e=null}o.next(s)})))}}(t))})(Pt(u+Tr).pipe(I(d)),f,c).pipe(I(d)).subscribe(()=>{Ke.delete(o),t.run(()=>{r(),l.next(),l.complete()})})}),l.asObservable()};let ve=(()=>{class t{constructor(){this.animation=Wn.animation}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var ue=(()=>{return(t=ue||(ue={})).START="start",t.END="end",ue;var t})();const ii=({classList:t})=>t.contains("carousel-item-start")||t.contains("carousel-item-end"),et=t=>{t.remove("carousel-item-start"),t.remove("carousel-item-end")},mt=t=>{et(t),t.remove("carousel-item-prev"),t.remove("carousel-item-next")},Br=(t,o,{direction:e})=>{const{classList:n}=t;return o?(ii(t)?et(n):(n.add("carousel-item-"+(e===ue.START?"next":"prev")),Ge(t),n.add("carousel-item-"+e)),()=>{mt(n),n.add("active")}):(et(n),mt(n),void n.add("active"))},Gr=(t,o,{direction:e})=>{const{classList:n}=t;return o?(ii(t)?et(n):n.add("carousel-item-"+e),()=>{mt(n),n.remove("active")}):(et(n),mt(n),void n.remove("active"))};let Lr=(()=>{class t{constructor(e){this._ngbConfig=e,this.interval=5e3,this.wrap=!0,this.keyboard=!0,this.pauseOnHover=!0,this.pauseOnFocus=!0,this.showNavigationArrows=!0,this.showNavigationIndicators=!0}get animation(){return void 0===this._animation?this._ngbConfig.animation:this._animation}set animation(e){this._animation=e}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(ve))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Hr=0,Ur=(()=>{class t{constructor(e){this.tplRef=e,this.id="ngb-slide-"+Hr++,this.slid=new i.vpe}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Rgc))},t.\u0275dir=i.lG2({type:t,selectors:[["ng-template","ngbSlide",""]],inputs:{id:"id"},outputs:{slid:"slid"},standalone:!0}),t})(),jr=(()=>{class t{constructor(e,n,s,a,r){this._platformId=n,this._ngZone=s,this._cd=a,this._container=r,this.NgbSlideEventSource=ye,this._destroy$=new x.x,this._interval$=new he.X(0),this._mouseHover$=new he.X(!1),this._focused$=new he.X(!1),this._pauseOnHover$=new he.X(!1),this._pauseOnFocus$=new he.X(!1),this._pause$=new he.X(!1),this._wrap$=new he.X(!1),this.slide=new i.vpe,this.slid=new i.vpe,this._transitionIds=null,this.animation=e.animation,this.interval=e.interval,this.wrap=e.wrap,this.keyboard=e.keyboard,this.pauseOnHover=e.pauseOnHover,this.pauseOnFocus=e.pauseOnFocus,this.showNavigationArrows=e.showNavigationArrows,this.showNavigationIndicators=e.showNavigationIndicators}set interval(e){this._interval$.next(e)}get interval(){return this._interval$.value}set wrap(e){this._wrap$.next(e)}get wrap(){return this._wrap$.value}set pauseOnHover(e){this._pauseOnHover$.next(e)}get pauseOnHover(){return this._pauseOnHover$.value}set pauseOnFocus(e){this._pauseOnFocus$.next(e)}get pauseOnFocus(){return this._pauseOnFocus$.value}set mouseHover(e){this._mouseHover$.next(e)}get mouseHover(){return this._mouseHover$.value}set focused(e){this._focused$.next(e)}get focused(){return this._focused$.value}arrowLeft(){this.focus(),this.prev(ye.ARROW_LEFT)}arrowRight(){this.focus(),this.next(ye.ARROW_RIGHT)}ngAfterContentInit(){(0,h.NF)(this._platformId)&&this._ngZone.runOutsideAngular(()=>{const e=(0,Nn.a)([this.slide.pipe((0,ce.U)(n=>n.current),(0,xt.O)(this.activeId)),this._wrap$,this.slides.changes.pipe((0,xt.O)(null))]).pipe((0,ce.U)(([n,s])=>{const a=this.slides.toArray(),r=this._getSlideIdxById(n);return s?a.length>1:r<a.length-1}),Ft());(0,Nn.a)([this._pause$,this._pauseOnHover$,this._mouseHover$,this._pauseOnFocus$,this._focused$,this._interval$,e]).pipe((0,ce.U)(([n,s,a,r,l,c,d])=>n||s&&a||r&&l||!d?0:c),Ft(),(0,On.w)(n=>n>0?Pt(n,n):yn),I(this._destroy$)).subscribe(()=>this._ngZone.run(()=>this.next(ye.TIMER)))}),this.slides.changes.pipe(I(this._destroy$)).subscribe(()=>{this._transitionIds?.forEach(e=>(t=>{Ke.get(t)?.complete()})(this._getSlideElement(e))),this._transitionIds=null,this._cd.markForCheck(),this._ngZone.onStable.pipe((0,z.q)(1)).subscribe(()=>{for(const{id:e}of this.slides){const n=this._getSlideElement(e);e===this.activeId?n.classList.add("active"):n.classList.remove("active")}})})}ngAfterContentChecked(){let e=this._getSlideById(this.activeId);this.activeId=e?e.id:this.slides.length?this.slides.first.id:""}ngAfterViewInit(){if(this.activeId){const e=this._getSlideElement(this.activeId);e&&e.classList.add("active")}}ngOnDestroy(){this._destroy$.next()}select(e,n){this._cycleToSelected(e,this._getSlideEventDirection(this.activeId,e),n)}prev(e){this._cycleToSelected(this._getPrevSlide(this.activeId),ue.END,e)}next(e){this._cycleToSelected(this._getNextSlide(this.activeId),ue.START,e)}pause(){this._pause$.next(!0)}cycle(){this._pause$.next(!1)}focus(){this._container.nativeElement.focus()}_cycleToSelected(e,n,s){const a=this._transitionIds;if(a&&(a[0]!==e||a[1]!==this.activeId))return;let r=this._getSlideById(e);if(r&&r.id!==this.activeId){this._transitionIds=[this.activeId,e],this.slide.emit({prev:this.activeId,current:r.id,direction:n,paused:this._pause$.value,source:s});const l={animation:this.animation,runningTransition:"stop",context:{direction:n}},c=[],d=this._getSlideById(this.activeId);if(d){const _=G(this._ngZone,this._getSlideElement(d.id),Gr,l);_.subscribe(()=>{d.slid.emit({isShown:!1,direction:n,source:s})}),c.push(_)}const u=this.activeId;this.activeId=r.id;const f=this._getSlideById(this.activeId),p=G(this._ngZone,this._getSlideElement(r.id),Br,l);p.subscribe(()=>{f?.slid.emit({isShown:!0,direction:n,source:s})}),c.push(p),ct(...c).pipe((0,z.q)(1)).subscribe(()=>{this._transitionIds=null,this.slid.emit({prev:u,current:r.id,direction:n,paused:this._pause$.value,source:s})})}this._cd.markForCheck()}_getSlideEventDirection(e,n){return this._getSlideIdxById(e)>this._getSlideIdxById(n)?ue.END:ue.START}_getSlideById(e){return this.slides.find(n=>n.id===e)||null}_getSlideIdxById(e){const n=this._getSlideById(e);return null!=n?this.slides.toArray().indexOf(n):-1}_getNextSlide(e){const n=this.slides.toArray(),s=this._getSlideIdxById(e);return s===n.length-1?this.wrap?n[0].id:n[n.length-1].id:n[s+1].id}_getPrevSlide(e){const n=this.slides.toArray(),s=this._getSlideIdxById(e);return 0===s?this.wrap?n[n.length-1].id:n[0].id:n[s-1].id}_getSlideElement(e){return this._container.nativeElement.querySelector(`#slide-${e}`)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(Lr),i.Y36(i.Lbi),i.Y36(i.R0b),i.Y36(i.sBO),i.Y36(i.SBq))},t.\u0275cmp=i.Xpm({type:t,selectors:[["ngb-carousel"]],contentQueries:function(e,n,s){if(1&e&&i.Suo(s,Ur,4),2&e){let a;i.iGM(a=i.CRH())&&(n.slides=a)}},hostAttrs:["tabIndex","0",1,"carousel","slide"],hostVars:3,hostBindings:function(e,n){1&e&&i.NdJ("keydown.arrowLeft",function(){return n.keyboard&&n.arrowLeft()})("keydown.arrowRight",function(){return n.keyboard&&n.arrowRight()})("mouseenter",function(){return n.mouseHover=!0})("mouseleave",function(){return n.mouseHover=!1})("focusin",function(){return n.focused=!0})("focusout",function(){return n.focused=!1}),2&e&&(i.uIk("aria-activedescendant","slide-"+n.activeId),i.Udp("display","block"))},inputs:{animation:"animation",activeId:"activeId",interval:"interval",wrap:"wrap",keyboard:"keyboard",pauseOnHover:"pauseOnHover",pauseOnFocus:"pauseOnFocus",showNavigationArrows:"showNavigationArrows",showNavigationIndicators:"showNavigationIndicators"},outputs:{slide:"slide",slid:"slid"},exportAs:["ngbCarousel"],standalone:!0,features:[i.jDz],decls:6,vars:6,consts:function(){let o,e,n;return o=$localize`:Currently selected slide number read by screen reader@@ngb.carousel.slide-number: Slide ${"\ufffd0\ufffd"}:INTERPOLATION: of ${"\ufffd1\ufffd"}:INTERPOLATION_1: `,e=$localize`:@@ngb.carousel.previous:Previous`,n=$localize`:@@ngb.carousel.next:Next`,[["role","tablist",1,"carousel-indicators"],["type","button","data-bs-target","","role","tab",3,"active","click",4,"ngFor","ngForOf"],[1,"carousel-inner"],["class","carousel-item","role","tabpanel",3,"id",4,"ngFor","ngForOf"],["class","carousel-control-prev","type","button",3,"click",4,"ngIf"],["class","carousel-control-next","type","button",3,"click",4,"ngIf"],["type","button","data-bs-target","","role","tab",3,"click"],["role","tabpanel",1,"carousel-item",3,"id"],[1,"visually-hidden"],o,[3,"ngTemplateOutlet"],["type","button",1,"carousel-control-prev",3,"click"],["aria-hidden","true",1,"carousel-control-prev-icon"],e,["type","button",1,"carousel-control-next",3,"click"],["aria-hidden","true",1,"carousel-control-next-icon"],n]},template:function(e,n){1&e&&(i.TgZ(0,"div",0),i.YNc(1,Fs,1,5,"button",1),i.qZA(),i.TgZ(2,"div",2),i.YNc(3,Gs,4,4,"div",3),i.qZA(),i.YNc(4,Ls,4,0,"button",4),i.YNc(5,Hs,4,0,"button",5)),2&e&&(i.ekj("visually-hidden",!n.showNavigationIndicators),i.xp6(1),i.Q6J("ngForOf",n.slides),i.xp6(2),i.Q6J("ngForOf",n.slides),i.xp6(1),i.Q6J("ngIf",n.showNavigationArrows),i.xp6(1),i.Q6J("ngIf",n.showNavigationArrows))},dependencies:[h.ax,h.tP,h.O5],encapsulation:2,changeDetection:0}),t})();var ye=(()=>{return(t=ye||(ye={})).TIMER="timer",t.ARROW_LEFT="arrowLeft",t.ARROW_RIGHT="arrowRight",t.INDICATOR="indicator",ye;var t})();let oi=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[jr]}),t})();var T=(()=>{return(t=T||(T={}))[t.Tab=9]="Tab",t[t.Enter=13]="Enter",t[t.Escape=27]="Escape",t[t.Space=32]="Space",t[t.PageUp=33]="PageUp",t[t.PageDown=34]="PageDown",t[t.End=35]="End",t[t.Home=36]="Home",t[t.ArrowLeft=37]="ArrowLeft",t[t.ArrowUp=38]="ArrowUp",t[t.ArrowRight=39]="ArrowRight",t[t.ArrowDown=40]="ArrowDown",T;var t})();typeof navigator<"u"&&navigator.userAgent&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2||/Android/.test(navigator.userAgent));const di=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function ui(t){const o=Array.from(t.querySelectorAll(di)).filter(e=>-1!==e.tabIndex);return[o[0],o[o.length-1]]}new Date(1882,10,12),new Date(2174,10,25);class Oe{constructor(o,e,n){this.nodes=o,this.viewRef=e,this.componentRef=n}}let xl=(()=>{class t{constructor(e,n){this._el=e,this._zone=n}ngOnInit(){this._zone.onStable.asObservable().pipe((0,z.q)(1)).subscribe(()=>{G(this._zone,this._el.nativeElement,(e,n)=>{n&&Ge(e),e.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return G(this._zone,this._el.nativeElement,({classList:e})=>e.remove("show"),{animation:this.animation,runningTransition:"stop"})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.SBq),i.Y36(i.R0b))},t.\u0275cmp=i.Xpm({type:t,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(e,n){2&e&&(i.Tol("modal-backdrop"+(n.backdropClass?" "+n.backdropClass:"")),i.ekj("show",!n.animation)("fade",n.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[i.jDz],decls:0,vars:0,template:function(e,n){},encapsulation:2}),t})();class Ri{close(o){}dismiss(o){}}class Fl{constructor(o,e,n,s){this._windowCmptRef=o,this._contentRef=e,this._backdropCmptRef=n,this._beforeDismiss=s,this._closed=new x.x,this._dismissed=new x.x,this._hidden=new x.x,o.instance.dismissEvent.subscribe(a=>{this.dismiss(a)}),this.result=new Promise((a,r)=>{this._resolve=a,this._reject=r}),this.result.then(null,()=>{})}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(I(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(I(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}close(o){this._windowCmptRef&&(this._closed.next(o),this._resolve(o),this._removeModalElements())}_dismiss(o){this._dismissed.next(o),this._reject(o),this._removeModalElements()}dismiss(o){if(this._windowCmptRef)if(this._beforeDismiss){const e=this._beforeDismiss();!function zn(t){return t&&t.then}(e)?!1!==e&&this._dismiss(o):e.then(n=>{!1!==n&&this._dismiss(o)},()=>{})}else this._dismiss(o)}_removeModalElements(){const o=this._windowCmptRef.instance.hide(),e=this._backdropCmptRef?this._backdropCmptRef.instance.hide():(0,fe.of)(void 0);o.subscribe(()=>{const{nativeElement:n}=this._windowCmptRef.location;n.parentNode.removeChild(n),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),e.subscribe(()=>{if(this._backdropCmptRef){const{nativeElement:n}=this._backdropCmptRef.location;n.parentNode.removeChild(n),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),ct(o,e).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}}var it=(()=>{return(t=it||(it={}))[t.BACKDROP_CLICK=0]="BACKDROP_CLICK",t[t.ESC=1]="ESC",it;var t})();let Bl=(()=>{class t{constructor(e,n,s){this._document=e,this._elRef=n,this._zone=s,this._closed$=new x.x,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new i.vpe,this.shown=new x.x,this.hidden=new x.x}get fullscreenClass(){return!0===this.fullscreen?" modal-fullscreen":Fe(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(e){this.dismissEvent.emit(e)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe((0,z.q)(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){const{nativeElement:e}=this._elRef,n={animation:this.animation,runningTransition:"stop"},r=ct(G(this._zone,e,()=>e.classList.remove("show"),n),G(this._zone,this._dialogEl.nativeElement,()=>{},n));return r.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),r}_show(){const e={animation:this.animation,runningTransition:"continue"};ct(G(this._zone,this._elRef.nativeElement,(a,r)=>{r&&Ge(a),a.classList.add("show")},e),G(this._zone,this._dialogEl.nativeElement,()=>{},e)).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){const{nativeElement:e}=this._elRef;this._zone.runOutsideAngular(()=>{j(e,"keydown").pipe(I(this._closed$),(0,oe.h)(s=>s.which===T.Escape)).subscribe(s=>{this.keyboard?requestAnimationFrame(()=>{s.defaultPrevented||this._zone.run(()=>this.dismiss(it.ESC))}):"static"===this.backdrop&&this._bumpBackdrop()});let n=!1;j(this._dialogEl.nativeElement,"mousedown").pipe(I(this._closed$),(0,Cn.b)(()=>n=!1),(0,On.w)(()=>j(e,"mouseup").pipe(I(this._closed$),(0,z.q)(1))),(0,oe.h)(({target:s})=>e===s)).subscribe(()=>{n=!0}),j(e,"click").pipe(I(this._closed$)).subscribe(({target:s})=>{e===s&&("static"===this.backdrop?this._bumpBackdrop():!0===this.backdrop&&!n&&this._zone.run(()=>this.dismiss(it.BACKDROP_CLICK))),n=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){const{nativeElement:e}=this._elRef;if(!e.contains(document.activeElement)){const n=e.querySelector("[ngbAutofocus]"),s=ui(e)[0];(n||s||e).focus()}}_restoreFocus(){const e=this._document.body,n=this._elWithFocus;let s;s=n&&n.focus&&e.contains(n)?n:e,this._zone.runOutsideAngular(()=>{setTimeout(()=>s.focus()),this._elWithFocus=null})}_bumpBackdrop(){"static"===this.backdrop&&G(this._zone,this._elRef.nativeElement,({classList:e})=>(e.add("modal-static"),()=>e.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(h.K0),i.Y36(i.SBq),i.Y36(i.R0b))},t.\u0275cmp=i.Xpm({type:t,selectors:[["ngb-modal-window"]],viewQuery:function(e,n){if(1&e&&i.Gf(ha,7),2&e){let s;i.iGM(s=i.CRH())&&(n._dialogEl=s.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(e,n){2&e&&(i.uIk("aria-modal",!0)("aria-labelledby",n.ariaLabelledBy)("aria-describedby",n.ariaDescribedBy),i.Tol("modal d-block"+(n.windowClass?" "+n.windowClass:"")),i.ekj("fade",n.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[i.jDz],ngContentSelectors:ht,decls:4,vars:2,consts:[["role","document"],["dialog",""],[1,"modal-content"]],template:function(e,n){1&e&&(i.F$t(),i.TgZ(0,"div",0,1)(2,"div",2),i.Hsn(3),i.qZA()()),2&e&&i.Tol("modal-dialog"+(n.size?" modal-"+n.size:"")+(n.centered?" modal-dialog-centered":"")+n.fullscreenClass+(n.scrollable?" modal-dialog-scrollable":"")+(n.modalDialogClass?" "+n.modalDialogClass:""))},styles:["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"],encapsulation:2}),t})(),Gl=(()=>{class t{constructor(e){this._document=e}hide(){const e=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),n=this._document.body,s=n.style,{overflow:a,paddingRight:r}=s;if(e>0){const l=parseFloat(window.getComputedStyle(n).paddingRight);s.paddingRight=`${l+e}px`}return s.overflow="hidden",()=>{e>0&&(s.paddingRight=r),s.overflow=a}}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(h.K0))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Ll=(()=>{class t{constructor(e,n,s,a,r,l,c){this._applicationRef=e,this._injector=n,this._environmentInjector=s,this._document=a,this._scrollBar=r,this._rendererFactory=l,this._ngZone=c,this._activeWindowCmptHasChanged=new x.x,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._backdropAttributes=["animation","backdropClass"],this._modalRefs=[],this._windowAttributes=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],this._windowCmpts=[],this._activeInstances=new i.vpe,this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){const d=this._windowCmpts[this._windowCmpts.length-1];((t,o,e,n=!1)=>{t.runOutsideAngular(()=>{const s=j(o,"focusin").pipe(I(e),(0,ce.U)(a=>a.target));j(o,"keydown").pipe(I(e),(0,oe.h)(a=>a.which===T.Tab),Bt(s)).subscribe(([a,r])=>{const[l,c]=ui(o);(r===l||r===o)&&a.shiftKey&&(c.focus(),a.preventDefault()),r===c&&!a.shiftKey&&(l.focus(),a.preventDefault())}),n&&j(o,"click").pipe(I(e),Bt(s),(0,ce.U)(a=>a[1])).subscribe(a=>a.focus())})})(this._ngZone,d.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(d.location.nativeElement)}})}_restoreScrollBar(){const e=this._scrollBarRestoreFn;e&&(this._scrollBarRestoreFn=null,e())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(e,n,s){const a=s.container instanceof HTMLElement?s.container:be(s.container)?this._document.querySelector(s.container):this._document.body,r=this._rendererFactory.createRenderer(null,null);if(!a)throw new Error(`The specified modal container "${s.container||"body"}" was not found in the DOM.`);this._hideScrollBar();const l=new Ri,c=(e=s.injector||e).get(i.lqb,null)||this._environmentInjector,d=this._getContentRef(e,c,n,l,s);let u=!1!==s.backdrop?this._attachBackdrop(a):void 0,f=this._attachWindowComponent(a,d.nodes),p=new Fl(f,d,u,s.beforeDismiss);return this._registerModalRef(p),this._registerWindowCmpt(f),p.hidden.pipe((0,z.q)(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(r.removeClass(this._document.body,"modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),l.close=_=>{p.close(_)},l.dismiss=_=>{p.dismiss(_)},this._applyWindowOptions(f.instance,s),1===this._modalRefs.length&&r.addClass(this._document.body,"modal-open"),u&&u.instance&&(this._applyBackdropOptions(u.instance,s),u.changeDetectorRef.detectChanges()),f.changeDetectorRef.detectChanges(),p}get activeInstances(){return this._activeInstances}dismissAll(e){this._modalRefs.forEach(n=>n.dismiss(e))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(e){let n=(0,i.LMc)(xl,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(n.hostView),e.appendChild(n.location.nativeElement),n}_attachWindowComponent(e,n){let s=(0,i.LMc)(Bl,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:n});return this._applicationRef.attachView(s.hostView),e.appendChild(s.location.nativeElement),s}_applyWindowOptions(e,n){this._windowAttributes.forEach(s=>{be(n[s])&&(e[s]=n[s])})}_applyBackdropOptions(e,n){this._backdropAttributes.forEach(s=>{be(n[s])&&(e[s]=n[s])})}_getContentRef(e,n,s,a,r){return s?s instanceof i.Rgc?this._createFromTemplateRef(s,a):Fe(s)?this._createFromString(s):this._createFromComponent(e,n,s,a,r):new Oe([])}_createFromTemplateRef(e,n){const a=e.createEmbeddedView({$implicit:n,close(r){n.close(r)},dismiss(r){n.dismiss(r)}});return this._applicationRef.attachView(a),new Oe([a.rootNodes],a)}_createFromString(e){const n=this._document.createTextNode(`${e}`);return new Oe([[n]])}_createFromComponent(e,n,s,a,r){const l=i.zs3.create({providers:[{provide:Ri,useValue:a}],parent:e}),c=(0,i.LMc)(s,{environmentInjector:n,elementInjector:l}),d=c.location.nativeElement;return r.scrollable&&d.classList.add("component-host-scrollable"),this._applicationRef.attachView(c.hostView),new Oe([[d]],c.hostView,c)}_setAriaHidden(e){const n=e.parentElement;n&&e!==this._document.body&&(Array.from(n.children).forEach(s=>{s!==e&&"SCRIPT"!==s.nodeName&&(this._ariaHiddenValues.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}),this._setAriaHidden(n))}_revertAriaHidden(){this._ariaHiddenValues.forEach((e,n)=>{e?n.setAttribute("aria-hidden",e):n.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(e){const n=()=>{const s=this._modalRefs.indexOf(e);s>-1&&(this._modalRefs.splice(s,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(e),this._activeInstances.emit(this._modalRefs),e.result.then(n,n)}_registerWindowCmpt(e){this._windowCmpts.push(e),this._activeWindowCmptHasChanged.next(),e.onDestroy(()=>{const n=this._windowCmpts.indexOf(e);n>-1&&(this._windowCmpts.splice(n,1),this._activeWindowCmptHasChanged.next())})}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(i.z2F),i.LFG(i.zs3),i.LFG(i.lqb),i.LFG(h.K0),i.LFG(Gl),i.LFG(i.FYo),i.LFG(i.R0b))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Hl=(()=>{class t{constructor(e){this._ngbConfig=e,this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return void 0===this._animation?this._ngbConfig.animation:this._animation}set animation(e){this._animation=e}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(ve))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Si=(()=>{class t{constructor(e,n,s){this._injector=e,this._modalStack=n,this._config=s}open(e,n={}){const s={...this._config,animation:this._config.animation,...n};return this._modalStack.open(this._injector,e,s)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(e){this._modalStack.dismissAll(e)}hasOpenModals(){return this._modalStack.hasOpenModals()}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(i.zs3),i.LFG(Ll),i.LFG(Hl))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();new i.OlP("live announcer delay",{providedIn:"root",factory:function Cc(){return 100}})}}]);