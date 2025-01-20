import{r as De}from"./index-B-SYruCi.js";const Hs=De.createContext({globe:null,setGlobe:()=>{}}),On=({children:h})=>{const[e,t]=De.useState(null);return De.createElement(Hs.Provider,{value:{globe:e,setGlobe:t}},h)},Un=()=>De.useContext(Hs);On.__docgenInfo={description:"",methods:[],displayName:"GlobeContextProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ji=2*Math.PI,mt=2147483647,pe=549755748352,ve=-549755748352,D=Math.PI/180,me=180/Math.PI,Vn=2*me,st=.5*D,Gn=Math.sqrt(.5),qn=.1,je=1e-10,Mr=1e-12,Ir=1e-14,jn=1e-15;function Oh(h,e=4096){--h;for(let t=1;t<32;t<<=1)h=h|h>>t;return h+1>e?e:h+1}function ki(h=0,e=1){return Math.floor(Math.random()*(e-h))+h}function er(h,e){return(h%e+e)%e}function zr(h){const e=er(h,Ji);return Math.abs(e)<Ir&&Math.abs(h)>Ir?Ji:e}function Fr(h,e){return e<h?0:1}function li(h){const e=Math.abs(h);return e-Math.floor(e)}function Yn(h){return Math.pow(2,h)}function Wn(h,e,t){return t+h*(e-t)}function kr(h){return h-Math.floor(h/360)*360}const Xn=Math.PI*.5,Os=180/Math.PI,Zn=Os*2,Ni=Math.PI/360,$n=Os*Xn;class P{constructor(e=0,t=0,i=0){this.lon=0,this.lat=0,this.height=0,this.lon=e,this.lat=t,this.height=i}isZero(){return this.lon===0&&this.lat===0&&this.height===0}static join(e){let t=[];for(let i=0;i<e.length;i++){let r=e[i];t[i]=new P(r[0],r[1],r[2])}return t}static createFromArray(e){return new P(e[0],e[1],e[2])}static toArray(e){return[e.lon,e.lat,e.height]}toArray(){return P.toArray(this)}static forwardMercator(e,t,i){return new P(e*Di,Math.log(Math.tan((90+t)*Ni))*qt,i)}static forwardMercatorRes(e,t){return t.lon=e.lon*Di,t.lat=Math.log(Math.tan((90+e.lat)*Ni))*qt,t.height=e.height,t}static inverseMercator(e,t,i=0){return new P(e*Qn,Zn*Math.atan(Math.exp(t*Us))-$n,i)}set(e=0,t=0,i=0){return this.lon=e,this.lat=t,this.height=i,this}copy(e){return this.lon=e.lon,this.lat=e.lat,this.height=e.height,this}clone(){return new P(this.lon,this.lat,this.height)}forwardMercator(){return P.forwardMercator(this.lon,this.lat,this.height)}forwardMercatorEPS01(){let e=this.lat;return e>89.9?e=89.9:e<-89.9&&(e=-89.9),new P(this.lon*Di,Math.log(Math.tan((90+e)*Ni))*qt)}inverseMercator(){return P.inverseMercator(this.lon,this.lat,this.height)}equal(e){return e.height?this.lon===e.lon&&this.lat===e.lat&&this.height===e.height:this.lon===e.lon&&this.lat===e.lat}}const _e=2003750834e-2,tr=_e*2,Us=Math.PI/_e,qt=_e/Math.PI,Kn=Math.PI*.5,Di=_e/180,Qn=180/_e,Vs=Math.PI/360,Jn=180/Math.PI,ir=2*_e,hi=1/ir;function rr(h){return new P(h.lon*_e/180,Math.log(Math.tan((90+h.lat)*Vs))*qt,h.height)}function ci(h){return h*_e/180}function di(h){return Math.log(Math.tan((90+h)*Vs))*qt}function ea(h){return Jn*(2*Math.atan(Math.exp(h*Us))-Kn)}function Gs(h,e,t){let i=tr/(1<<t),r=new P(-2003750834e-2+h*i,_e-e*i-i);return new U(r,new P(r.lon+i,r.lat+i))}const se=ea(_e),Ne=-se;class U{constructor(e=new P,t=new P){this.southWest=e,this.northEast=t}static createFromArray(e){return new U(new P(e[0],e[1]),new P(e[2],e[3]))}static createByCoordinates(e){let t=pe,i=ve,r=pe,s=ve;for(let n=0;n<e.length;n++){const a=e[n];a.lon<t&&(t=a.lon),a.lon>i&&(i=a.lon),a.lat<r&&(r=a.lat),a.lat>s&&(s=a.lat)}return new U(new P(t,r),new P(i,s))}static createByCoordinatesArr(e){let t=pe,i=ve,r=pe,s=ve;for(let n=0;n<e.length;n++){const a=e[n];a[0]<t&&(t=a[0]),a[0]>i&&(i=a[0]),a[1]<r&&(r=a[1]),a[1]>s&&(s=a[1])}return new U(new P(t,r),new P(i,s))}static fromTile(e,t,i,r=ir,s=ir){const n=1<<i,o=r/n,l=s/n,c=-r*.5+e*o,d=s*.5-t*l,f=d-l,_=c+o;return new U(new P(c,f),new P(_,d))}setByCoordinates(e){let t=pe,i=ve,r=pe,s=ve;for(let n=0;n<e.length;n++){const a=e[n];a.lon<t&&(t=a.lon),a.lon>i&&(i=a.lon),a.lat<r&&(r=a.lat),a.lat>s&&(s=a.lat)}return this.southWest.lon=t,this.southWest.lat=r,this.northEast.lon=i,this.northEast.lat=s,this}isInside(e){const t=this.southWest,i=this.northEast;return e.lon>=t.lon&&e.lon<=i.lon&&e.lat>=t.lat&&e.lat<=i.lat}overlaps(e){const t=this.southWest,i=this.northEast;return t.lon<=e.northEast.lon&&i.lon>=e.southWest.lon&&t.lat<=e.northEast.lat&&i.lat>=e.southWest.lat}getWidth(){return this.northEast.lon-this.southWest.lon}getHeight(){return this.northEast.lat-this.southWest.lat}clone(){return new U(this.southWest.clone(),this.northEast.clone())}getCenter(){const e=this.southWest,t=this.northEast;return new P(e.lon+(t.lon-e.lon)*.5,e.lat+(t.lat-e.lat)*.5)}getNorthWest(){return new P(this.southWest.lon,this.northEast.lat)}getNorthEast(){return new P(this.northEast.lon,this.northEast.lat)}getSouthWest(){return new P(this.southWest.lon,this.southWest.lat)}getSouthEast(){return new P(this.northEast.lon,this.southWest.lat)}getNorth(){return this.northEast.lat}getEast(){return this.northEast.lon}getWest(){return this.southWest.lon}getSouth(){return this.southWest.lat}equals(e){return this.southWest.lon===e.southWest.lon&&this.southWest.lat===e.southWest.lat&&this.northEast.lon===e.northEast.lon&&this.northEast.lat===e.northEast.lat}forwardMercator(){return new U(this.southWest.forwardMercator(),this.northEast.forwardMercator())}inverseMercator(){return new U(this.southWest.inverseMercator(),this.northEast.inverseMercator())}getCartesianBounds(e){let t=pe,i=ve,r=pe,s=ve,n=pe,a=ve;const o=[new P(this.southWest.lon,this.southWest.lat),new P(this.southWest.lon,this.northEast.lat),new P(this.northEast.lon,this.northEast.lat),new P(this.northEast.lon,this.southWest.lat)];for(let l=0;l<o.length;l++){const c=e.lonLatToCartesian(o[l]),d=c.x,f=c.y,_=c.z;d<t&&(t=d),d>i&&(i=d),f<r&&(r=f),f>s&&(s=f),_<n&&(n=_),_>a&&(a=_)}return[t,r,n,i,s,a]}toString(){return`[${this.southWest.lon.toFixed(5)}, ${this.southWest.lat.toFixed(5)}, ${this.northEast.lon.toFixed(5)}, ${this.northEast.lat.toFixed(5)}]`}}class bt{constructor(){this._m=[0,0,0,0,0,0,0,0,0]}set(e){return this._m[0]=e[0],this._m[1]=e[1],this._m[2]=e[2],this._m[3]=e[3],this._m[4]=e[4],this._m[5]=e[5],this._m[6]=e[6],this._m[7]=e[7],this._m[8]=e[8],this}clone(){let e=new bt;return e.set(this._m),e}copy(e){return this.set(e._m)}transposeTo(){let e=new bt,t=this._m;return e._m[0]=t[0],e._m[1]=t[3],e._m[2]=t[6],e._m[3]=t[1],e._m[4]=t[4],e._m[5]=t[7],e._m[6]=t[2],e._m[7]=t[5],e._m[8]=t[8],e}setIdentity(){return this._m[0]=1,this._m[1]=0,this._m[2]=0,this._m[3]=0,this._m[4]=1,this._m[5]=0,this._m[6]=0,this._m[7]=0,this._m[8]=1,this}mulVec(e){let t=e.x,i=e.y,r=e.z,s=this._m;return new m(s[0]*t+s[3]*i+s[6]*r,s[1]*t+s[4]*i+s[7]*r,s[2]*t+s[5]*i+s[8]*r)}toMatrix4(){let e=new ae,t=e._m,i=this._m;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=0,t[4]=i[3],t[5]=i[4],t[6]=i[5],t[7]=0,t[8]=i[6],t[9]=i[7],t[10]=i[8],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,e}}class ee{constructor(e=0,t=0,i=0,r=0){this.x=e,this.y=t,this.z=i,this.w=r}static get identity(){return new ee(0,0,0,1)}static fromVec(e){return new ee(e[0],e[1],e[2],e[3])}toVec3(){return new m(this.x,this.y,this.z)}clone(){return new ee(this.x,this.y,this.z,this.w)}equal(e){return this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toArray(){return[this.x,this.y,this.z,this.w]}toArray3(){return[this.x,this.y,this.z]}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}addA(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}subA(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}scale(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}affinity(){let e=1/this.w;return this.x*=e,this.y*=e,this.z*=e,this.w=1,this}scaleTo(e){return new ee(this.x*e,this.y*e,this.z*e,this.w*e)}getStep(e){return new ee(this.x<e?0:1,this.y<e?0:1,this.z<e?0:1,this.w<e?0:1)}getFrac(e){return new ee(li(e.x),li(e.y),li(e.z),li(e.w))}dot(e){return e.x*this.x+e.y*this.y+e.z*this.z+e.w*this.w}isZero(){return!(this.x||this.y||this.z||this.w)}}class ae{constructor(){this._m=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}static identity(){let e=new ae;return e._m[0]=1,e._m[1]=0,e._m[2]=0,e._m[3]=0,e._m[4]=0,e._m[5]=1,e._m[6]=0,e._m[7]=0,e._m[8]=0,e._m[9]=0,e._m[10]=1,e._m[11]=0,e._m[12]=0,e._m[13]=0,e._m[14]=0,e._m[15]=1,e}set(e){return this._m[0]=e[0],this._m[1]=e[1],this._m[2]=e[2],this._m[3]=e[3],this._m[4]=e[4],this._m[5]=e[5],this._m[6]=e[6],this._m[7]=e[7],this._m[8]=e[8],this._m[9]=e[9],this._m[10]=e[10],this._m[11]=e[11],this._m[12]=e[12],this._m[13]=e[13],this._m[14]=e[14],this._m[15]=e[15],this}clone(){let e=new ae;return e.set(this._m),e}copy(e){return this.set(e._m)}toMatrix3(){let e=new bt,t=this._m,i=e._m;return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[4],i[4]=t[5],i[5]=t[6],i[6]=t[8],i[7]=t[9],i[8]=t[10],e}mulVec3(e){let t=e.x,i=e.y,r=e.z;return new m(this._m[0]*t+this._m[4]*i+this._m[8]*r+this._m[12],this._m[1]*t+this._m[5]*i+this._m[9]*r+this._m[13],this._m[2]*t+this._m[6]*i+this._m[10]*r+this._m[14])}mulVec4(e){let t=e.x,i=e.y,r=e.z,s=e.w;return new ee(this._m[0]*t+this._m[4]*i+this._m[8]*r+this._m[12]*s,this._m[1]*t+this._m[5]*i+this._m[9]*r+this._m[13]*s,this._m[2]*t+this._m[6]*i+this._m[10]*r+this._m[14]*s,this._m[3]*t+this._m[7]*i+this._m[11]*r+this._m[15]*s)}toInverseMatrix3(){let e=this._m,t=e[0],i=e[1],r=e[2],s=e[4],n=e[5],a=e[6],o=e[8],l=e[9],c=e[10],d=c*n-a*l,f=-c*s+a*o,_=l*s-n*o,g=t*d+i*f+r*_;if(!g)return;g=1/g;let v=new bt;return v._m[0]=d*g,v._m[1]=(-c*i+r*l)*g,v._m[2]=(a*i-r*n)*g,v._m[3]=f*g,v._m[4]=(c*t-r*o)*g,v._m[5]=(-a*t+r*s)*g,v._m[6]=_*g,v._m[7]=(-l*t+i*o)*g,v._m[8]=(n*t-i*s)*g,v}inverseTo(e=new ae){let t=this._m[0],i=this._m[1],r=this._m[2],s=this._m[3],n=this._m[4],a=this._m[5],o=this._m[6],l=this._m[7],c=this._m[8],d=this._m[9],f=this._m[10],_=this._m[11],g=this._m[12],v=this._m[13],u=this._m[14],p=this._m[15],b=t*a-i*n,w=t*o-r*n,y=t*l-s*n,x=i*o-r*a,T=i*l-s*a,A=r*l-s*o,E=c*v-d*g,C=c*u-f*g,B=c*p-_*g,F=d*u-f*v,k=d*p-_*v,M=f*p-_*u,L=1/(b*M-w*k+y*F+x*B-T*C+A*E);return e._m[0]=(a*M-o*k+l*F)*L,e._m[1]=(-i*M+r*k-s*F)*L,e._m[2]=(v*A-u*T+p*x)*L,e._m[3]=(-d*A+f*T-_*x)*L,e._m[4]=(-n*M+o*B-l*C)*L,e._m[5]=(t*M-r*B+s*C)*L,e._m[6]=(-g*A+u*y-p*w)*L,e._m[7]=(c*A-f*y+_*w)*L,e._m[8]=(n*k-a*B+l*E)*L,e._m[9]=(-t*k+i*B-s*E)*L,e._m[10]=(g*T-v*y+p*b)*L,e._m[11]=(-c*T+d*y-_*b)*L,e._m[12]=(-n*F+a*C-o*E)*L,e._m[13]=(t*F-i*C+r*E)*L,e._m[14]=(-g*x+v*w-u*b)*L,e._m[15]=(c*x-d*w+f*b)*L,e}transposeTo(){let e=new ae;return e._m[0]=this._m[0],e._m[1]=this._m[4],e._m[2]=this._m[8],e._m[3]=this._m[12],e._m[4]=this._m[1],e._m[5]=this._m[5],e._m[6]=this._m[9],e._m[7]=this._m[13],e._m[8]=this._m[2],e._m[9]=this._m[6],e._m[10]=this._m[10],e._m[11]=this._m[14],e._m[12]=this._m[3],e._m[13]=this._m[7],e._m[14]=this._m[11],e._m[15]=this._m[15],e}setIdentity(){return this._m[0]=1,this._m[1]=0,this._m[2]=0,this._m[3]=0,this._m[4]=0,this._m[5]=1,this._m[6]=0,this._m[7]=0,this._m[8]=0,this._m[9]=0,this._m[10]=1,this._m[11]=0,this._m[12]=0,this._m[13]=0,this._m[14]=0,this._m[15]=1,this}mul(e){let t=this._m[0],i=this._m[1],r=this._m[2],s=this._m[3],n=this._m[4],a=this._m[5],o=this._m[6],l=this._m[7],c=this._m[8],d=this._m[9],f=this._m[10],_=this._m[11],g=this._m[12],v=this._m[13],u=this._m[14],p=this._m[15],b=e._m[0],w=e._m[1],y=e._m[2],x=e._m[3],T=e._m[4],A=e._m[5],E=e._m[6],C=e._m[7],B=e._m[8],F=e._m[9],k=e._m[10],M=e._m[11],L=e._m[12],I=e._m[13],z=e._m[14],R=e._m[15],S=new ae;return S._m[0]=b*t+w*n+y*c+x*g,S._m[1]=b*i+w*a+y*d+x*v,S._m[2]=b*r+w*o+y*f+x*u,S._m[3]=b*s+w*l+y*_+x*p,S._m[4]=T*t+A*n+E*c+C*g,S._m[5]=T*i+A*a+E*d+C*v,S._m[6]=T*r+A*o+E*f+C*u,S._m[7]=T*s+A*l+E*_+C*p,S._m[8]=B*t+F*n+k*c+M*g,S._m[9]=B*i+F*a+k*d+M*v,S._m[10]=B*r+F*o+k*f+M*u,S._m[11]=B*s+F*l+k*_+M*p,S._m[12]=L*t+I*n+z*c+R*g,S._m[13]=L*i+I*a+z*d+R*v,S._m[14]=L*r+I*o+z*f+R*u,S._m[15]=L*s+I*l+z*_+R*p,S}translate(e){let t=e.x,i=e.y,r=e.z,s=this._m;return s[12]=s[0]*t+s[4]*i+s[8]*r+s[12],s[13]=s[1]*t+s[5]*i+s[9]*r+s[13],s[14]=s[2]*t+s[6]*i+s[10]*r+s[14],s[15]=s[3]*t+s[7]*i+s[11]*r+s[15],this}translateToPosition(e){let t=this._m;return t[12]=e.x,t[13]=e.y,t[14]=e.z,this}rotate(e,t){let i=Math.cos(t),r=Math.sin(t),s=new ae,n=s._m;return n[0]=i+(1-i)*e.x*e.x,n[1]=(1-i)*e.y*e.x-r*e.z,n[2]=(1-i)*e.z*e.x+r*e.y,n[3]=0,n[4]=(1-i)*e.x*e.y+r*e.z,n[5]=i+(1-i)*e.y*e.y,n[6]=(1-i)*e.z*e.y-r*e.x,n[7]=0,n[8]=(1-i)*e.x*e.z-r*e.y,n[9]=(1-i)*e.y*e.z+r*e.x,n[10]=i+(1-i)*e.z*e.z,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this.mul(s)}setRotation(e,t){let i=Math.cos(t),r=Math.sin(t),s=this._m;return s[0]=i+(1-i)*e.x*e.x,s[1]=(1-i)*e.y*e.x-r*e.z,s[2]=(1-i)*e.z*e.x+r*e.y,s[3]=0,s[4]=(1-i)*e.x*e.y+r*e.z,s[5]=i+(1-i)*e.y*e.y,s[6]=(1-i)*e.z*e.y-r*e.x,s[7]=0,s[8]=(1-i)*e.x*e.z-r*e.y,s[9]=(1-i)*e.y*e.z+r*e.x,s[10]=i+(1-i)*e.z*e.z,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,this}rotateBetweenVectors(e,t){return N.getRotationBetweenVectors(e,t).getMat4()}scale(e){let t=this._m;return t[0]=t[0]*e.x,t[1]=t[1]*e.x,t[2]=t[2]*e.x,t[3]=t[3]*e.x,t[4]=t[4]*e.y,t[5]=t[5]*e.y,t[6]=t[6]*e.y,t[7]=t[7]*e.y,t[8]=t[8]*e.z,t[9]=t[9]*e.z,t[10]=t[10]*e.z,t[11]=t[11]*e.z,this}setPerspective(e,t,i,r,s,n){let a=t-e,o=r-i,l=s-n,c=2*s,d=this._m;return d[0]=c/a,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=c/o,d[6]=0,d[7]=0,d[8]=(t+e)/a,d[9]=(r+i)/o,d[10]=(n+s)/l,d[11]=-1,d[12]=0,d[13]=0,d[14]=c*n/l,d[15]=0,this}setOrtho(e,t,i,r,s,n){let a=1/(e-t),o=1/(i-r),l=1/(s-n),c=this._m;return c[0]=-2*a,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=-2*o,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=2*l,c[11]=0,c[12]=(e+t)*a,c[13]=(r+i)*o,c[14]=(n+s)*l,c[15]=1,this}eulerToMatrix(e,t,i){let r=Math.cos(e),s=Math.sin(e),n=Math.cos(t),a=Math.sin(t),o=Math.cos(i),l=Math.sin(i),c=r*a,d=s*a,f=this._m;return f[0]=n*o,f[1]=-n*l,f[2]=-a,f[4]=-d*o+r*l,f[5]=d*l+r*o,f[6]=-s*n,f[8]=c*o+s*l,f[9]=-c*l+s*o,f[10]=r*n,f[3]=f[7]=f[11]=f[12]=f[13]=f[14]=0,f[15]=1,this}}class N{constructor(e=0,t=0,i=0,r=0){this.x=e,this.y=t,this.z=i,this.w=r}static get IDENTITY(){return new N(0,0,0,1)}static xRotation(e){return e*=.5,new N(Math.sin(e),0,0,Math.cos(e))}static yRotation(e){return e*=.5,new N(0,Math.sin(e),0,Math.cos(e))}static zRotation(e){return e*=.5,new N(0,0,Math.sin(e),Math.cos(e))}static axisAngleToQuat(e,t=0){let i=e.getNormal(),r=t*.5,s=Math.sin(r);return new N(i.x*s,i.y*s,i.z*s,Math.cos(r))}static getLookRotation(e,t){let i=e.getNormal().negate(),r=t.cross(i).normalize(),s=i.cross(r),n=1+r.x+s.y+i.z;if(n>1e-6){let o=1/(2*Math.sqrt(n));return new N((i.y-s.z)*o,(r.z-i.x)*o,(s.x-r.y)*o,.25/o)}if(r.x>s.y&&r.x>i.z){let o=1/(2*Math.sqrt(1+r.x-s.y-i.z));return new N(.25/o,(s.x+r.y)*o,(r.z+i.x)*o,(i.y-s.z)*o)}if(s.y>i.z){let o=1/(2*Math.sqrt(1+s.y-r.x-i.z));return new N((s.x+r.y)*o,.25/o,(i.y+s.z)*o,(r.z-i.x)*o)}let a=1/(2*Math.sqrt(1+i.z-r.x-s.y));return new N((r.z+i.x)*a,(i.y+s.z)*a,.25/a,(s.x-r.y)*a)}static getLookAtSourceDest(e,t){let i=t.subA(e).normalize(),r=m.FORWARD.dot(i);if(Math.abs(r- -1)<1e-6)return N.axisAngleToQuat(m.UP,Math.PI);if(Math.abs(r-1)<1e-6)return new N(0,0,0,1);let s=Math.acos(r),n=m.FORWARD.cross(i).normalize();return N.axisAngleToQuat(n,s)}static getRotationBetweenVectors(e,t){let i=e.cross(t);return new N(i.x,i.y,i.z,1+e.dot(t)).normalize()}static getRotationBetweenVectorsRes(e,t,i){let r=e.cross(t);return i.set(r.x,r.y,r.z,1+e.dot(t)),i.normalize()}static getRotationBetweenVectorsUp(e,t,i){let r=e.dot(t);if(Math.abs(r+1)<1e-6)return N.axisAngleToQuat(i,Math.PI);if(Math.abs(r-1)<1e-6)return new N(0,0,0,1);let s=Math.acos(r),n=e.cross(t).normalize();return N.axisAngleToQuat(n,s)}static setFromEulerAngles(e,t,i){return new N().setFromEulerAngles(e,t,i)}isZero(){return this.x===0&&this.y===0&&this.z===0&&this.w===0}clear(){return this.x=this.y=this.z=this.w=0,this}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}setIdentity(){return this.x=0,this.y=0,this.z=0,this.w=1,this}clone(){return new N(this.x,this.y,this.z,this.w)}add(e){return new N(this.x+e.x,this.y+e.y,this.z+e.z,this.w+e.w)}sub(e){return new N(this.x-e.x,this.y-e.y,this.z-e.z,this.w-e.w)}scaleTo(e){return new N(this.x*e,this.y*e,this.z*e,this.w*e)}scale(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}toVec(){return[this.x,this.y,this.z,this.w]}setFromSphericalCoords(e,t,i){let r=Math.sin(i/2),s=Math.cos(i/2),n=Math.sin(e),a=Math.cos(e),o=Math.sin(t),l=Math.cos(t);return this.x=r*a*o,this.y=r*n,this.z=r*n*l,this.w=s,this}setLookRotation(e,t){let i=e.getNormal().negate(),r=t.cross(i).normalize(),s=i.cross(r),n=1+r.x+s.y+i.z;if(n>1e-6){let a=1/(2*Math.sqrt(n));this.x=(i.y-s.z)*a,this.y=(r.z-i.x)*a,this.z=(s.x-r.y)*a,this.w=.25/a}else if(r.x>s.y&&r.x>i.z){let a=1/(2*Math.sqrt(1+r.x-s.y-i.z));this.x=.25/a,this.y=(s.x+r.y)*a,this.z=(r.z+i.x)*a,this.w=(i.y-s.z)*a}else if(s.y>i.z){let a=1/(2*Math.sqrt(1+s.y-r.x-i.z));this.x=(s.x+r.y)*a,this.y=.25/a,this.z=(i.y+s.z)*a,this.w=(r.z-i.x)*a}else{let a=1/(2*Math.sqrt(1+i.z-r.x-s.y));this.x=(r.z+i.x)*a,this.y=(i.y+s.z)*a,this.z=.25/a,this.w=(s.x-r.y)*a}return this}toSphericalCoords(){let e=this.w,t=Math.sqrt(1-e*e);Math.abs(t)<5e-4&&(t=1);let i=this.x/t,r=this.y/t,s=this.z/t,n,a=-Math.asin(r);return i*i+s*s<5e-4?n=0:n=Math.atan2(i,s),n<0&&(n+=360),{lat:a,lon:n,alpha:Math.acos(e)}}setFromAxisAngle(e,t){let i=e.getNormal(),r=t*.5,s=Math.sin(r);return this.set(i.x*s,i.y*s,i.z*s,Math.cos(r)),this}getAxisAngle(){let e=this.x,t=this.y,i=this.z,r=this.w,s=Math.sqrt(e*e+t*t+i*i),n,a;if(s>1e-7){let o=1/s;n=new m(e*o,t*o,i*o),r<0?a=2*Math.atan2(-s,-r):a=2*Math.atan2(s,r)}else n=new m(0,0,0),a=0;return{axis:n,angle:a}}setFromEulerAngles(e,t,i){let r=e*st,s=t*st,n=i*st,a=Math.cos(r),o=Math.cos(s),l=Math.cos(n),c=Math.sin(r),d=Math.sin(s),f=Math.sin(n),_=o*l,g=d*f;return this.w=a*_+c*g,this.x=c*_-a*g,this.y=a*d*l+c*o*f,this.z=a*o*f-c*d*l,this.normalize()}getEulerAngles(){let e=this.x,t=this.y,i=this.z,r=this.w,s=t*t,n=Math.atan2(2*(r*e+t*i),1-2*(e*e+s)),a=r*t-i*e;a<-1?a=-1:a>1&&(a=1);let o=Math.asin(2*a),l=Math.atan2(2*(r*i+e*t),1-2*(s+i*i));return{roll:n,pitch:o,yaw:l}}setFromMatrix4(e){let t,i,r=[],s,n,a,o=e._m,l=[1,2,0];return t=o[0]+o[5]+o[10],t>0?(i=Math.sqrt(t+1),this.w=i/2,i=.5/i,this.x=(o[6]-o[9])*i,this.y=(o[8]-o[2])*i,this.z=(o[1]-o[4])*i):(s=0,o[5]>o[0]&&(s=1),o[10]>o[s*5]&&(s=2),n=l[s],a=l[n],i=Math.sqrt(o[s*5]-(o[n*5]+o[a*5])+1),r[s]=i*.5,i!==0&&(i=.5/i),r[3]=(o[n*4+a]-o[a*4+n])*i,r[n]=(o[s*4+n]+o[n*4+s])*i,r[a]=(o[s*4+a]+o[a*4+s])*i,this.x=r[0],this.y=r[1],this.z=r[2],this.w=r[3]),this}getMat4(e=new ae){let t=this.x+this.x,i=this.y+this.y,r=this.z+this.z,s=this.w*t,n=this.w*i,a=this.w*r,o=this.x*t,l=this.x*i,c=this.x*r,d=this.y*i,f=this.y*r,_=this.z*r;return e.set([1-(d+_),l-a,c+n,0,l+a,1-(o+_),f-s,0,c-n,f+s,1-(o+d),0,0,0,0,1])}getMat3(){let e=new bt,t=e._m,i=this.x,r=this.y,s=this.z,n=this.w,a=i+i,o=r+r,l=s+s,c=i*a,d=i*o;i=i*l;let f=r*o;return r=r*l,s=s*l,a=n*a,o=n*o,n=n*l,t[0]=1-(f+s),t[1]=d-n,t[2]=i+o,t[3]=d+n,t[4]=1-(c+s),t[5]=r-a,t[6]=i-o,t[7]=r+a,t[8]=1-(c+f),e}mulVec3(e){let t=e.x,i=e.y,r=e.z,s=this.x,n=this.y,a=this.z,o=this.w,l=o*t+n*r-a*i,c=o*i+a*t-s*r,d=o*r+s*i-n*t;return t=-s*t-n*i-a*r,new m(l*o+t*-s+c*-a-d*-n,c*o+t*-n+d*-s-l*-a,d*o+t*-a+l*-n-c*-s)}mul(e){let t=this.x,i=this.y,r=this.z,s=this.w,n=e.x,a=e.y,o=e.z,l=e.w;return new N(t*l+s*n+i*o-r*a,i*l+s*a+r*n-t*o,r*l+s*o+t*a-i*n,s*l-t*n-i*a-r*o)}mulA(e){let t=this.x,i=this.y,r=this.z,s=this.w,n=e.x,a=e.y,o=e.z,l=e.w;return this.x=t*l+s*n+i*o-r*a,this.y=i*l+s*a+r*n-t*o,this.z=r*l+s*o+t*a-i*n,this.w=s*l-t*n-i*a-r*o,this}conjugate(){return new N(-this.x,-this.y,-this.z,this.w)}inverse(){let e=1/this.magnitude2();return new N(-this.x*e,-this.y*e,-this.z*e,this.w*e)}magnitude(){let e=this.x,t=this.y,i=this.z,r=this.w;return Math.sqrt(e*e+t*t+i*i+r*r)}magnitude2(){let e=this.x,t=this.y,i=this.z,r=this.w;return e*e+t*t+i*i+r*r}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}normalize(){let e=this.x,t=this.y,i=this.z,r=this.w,s=Math.sqrt(e*e+t*t+i*i+r*r);return s===0?(this.x=0,this.y=0,this.z=0,this.w=0,this):(s=1/s,this.x=e*s,this.y=t*s,this.z=i*s,this.w=r*s,this)}isEqual(e){let t=this.dot(e);return Math.abs(t-1)<.001}slerp(e,t){let i=this.x,r=this.y,s=this.z,n=this.w,a=e.x,o=e.y,l=e.z,c=e.w,d,f,_,g,v;return f=i*a+r*o+s*l+n*c,f<0&&(f=-f,a=-a,o=-o,l=-l,c=-c),1-f>1e-6?(d=Math.acos(f),_=Math.sin(d),g=Math.sin((1-t)*d)/_,v=Math.sin(t*d)/_):(g=1-t,v=t),new N(g*i+v*a,g*r+v*o,g*s+v*l,g*n+v*c)}getRoll(e=!1){let t=this.x,i=this.y,r=this.z,s=this.w;if(e){let n=2*i,a=2*r,o=a*s,l=n*t,c=n*i,d=a*r;return Math.atan2(l+o,1-(c+d))}else return Math.atan2(2*(t*i+s*r),s*s+t*t-i*i-r*r)}getPitch(e=!1){let t=this.x,i=this.y,r=this.z,s=this.w;if(e){let n=2*t,a=2*r,o=n*s,l=n*t,c=a*i,d=a*r;return Math.atan2(c+o,1-(l+d))}else return Math.atan2(2*(i*r+s*t),s*s-t*t-i*i+r*r)}getYaw(e=!1){let t=this.x,i=this.y,r=this.z,s=this.w;if(e){let n=2*t,a=2*i,o=2*r,l=a*s,c=n*t,d=o*t,f=a*i;return Math.atan2(d+l,1-(c+f))}else return Math.asin(-2*(t*r-s*i))}}class m{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}static get UP(){return new m(0,1,0)}static get DOWN(){return new m(0,-1,0)}static get RIGHT(){return new m(1,0,0)}static get LEFT(){return new m(-1,0,0)}static get FORWARD(){return new m(0,0,-1)}static get BACKWARD(){return new m(0,0,1)}static get ZERO(){return new m}static get UNIT_X(){return new m(1,0,0)}static get UNIT_Y(){return new m(0,1,0)}static get UNIT_Z(){return new m(0,0,1)}static get NORTH(){return m.UNIT_Z}static doubleToTwoFloats(e,t,i){let r=e.x,s=e.y,n=e.z;if(r>=0){let a=Math.floor(r/65536)*65536;t.x=Math.fround(a),i.x=Math.fround(r-a)}else{let a=Math.floor(-r/65536)*65536;t.x=Math.fround(-a),i.x=Math.fround(r+a)}if(s>=0){let a=Math.floor(s/65536)*65536;t.y=Math.fround(a),i.y=Math.fround(s-a)}else{let a=Math.floor(-s/65536)*65536;t.y=Math.fround(-a),i.y=Math.fround(s+a)}if(n>=0){let a=Math.floor(n/65536)*65536;t.z=Math.fround(a),i.z=Math.fround(n-a)}else{let a=Math.floor(-n/65536)*65536;t.z=Math.fround(-a),i.z=Math.fround(n+a)}}static doubleToTwoFloat32Array(e,t,i){let r=e.x,s=e.y,n=e.z;if(r>=0){let a=Math.floor(r/65536)*65536;t[0]=Math.fround(a),i[0]=Math.fround(r-a)}else{let a=Math.floor(-r/65536)*65536;t[0]=Math.fround(-a),i[0]=Math.fround(r+a)}if(s>=0){let a=Math.floor(s/65536)*65536;t[1]=Math.fround(a),i[1]=Math.fround(s-a)}else{let a=Math.floor(-s/65536)*65536;t[1]=Math.fround(-a),i[1]=Math.fround(s+a)}if(n>=0){let a=Math.floor(n/65536)*65536;t[2]=Math.fround(a),i[2]=Math.fround(n-a)}else{let a=Math.floor(-n/65536)*65536;t[2]=Math.fround(-a),i[2]=Math.fround(n+a)}}static fromVec(e){return new m(e[0],e[1],e[2])}static angle(e,t){return Math.acos(e.dot(t)/Math.sqrt(e.length2()*t.length2()))}static lerp(e,t,i){return new m(e.x+(t.x-e.x)*i,e.y+(t.y-e.y)*i,e.z+(t.z-e.z)*i)}static add(e,t){let i=new m(e.x,e.y,e.z);return i.addA(t),i}static sub(e,t){let i=new m(e.x,e.y,e.z);return i.subA(t),i}static scale(e,t){return e.scaleTo(t)}static mul(e,t){let i=new m(e.x,e.y,e.z);return i.mulA(t),i}static noncollinear(e,t){return!!(e.y*t.z-e.z*t.y||e.z*t.x-e.x*t.z||e.x*t.y-e.y*t.z)}static proj_b_to_plane(e,t,i){let r=e.sub(t.scaleTo(t.dot(e)/t.dot(t)));return i&&r.isZero()?new m(i.x,i.y,i.z):r}static proj_b_to_a(e,t){return t.scaleTo(t.dot(e)/t.dot(t))}static orthoNormalize(e,t){return e=e.getNormal(),e.scale(t.dot(e)),t.subA(e).normalize()}static div(e,t){let i=new m(e.x,e.y,e.z);return i.divA(t),i}static length2(e){return e.length2()}static dot(e,t){return e.dot(t)}toVec4(){return new ee(this.x,this.y,this.z,1)}clone(){return new m(this.x,this.y,this.z)}toString(){return`(${this.x},${this.y},${this.z})`}isZero(){return!(this.x||this.y||this.z)}projToVec(e){return e.scaleTo(e.dot(this)/e.dot(e))}equal(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}length2(){return this.x*this.x+this.y*this.y+this.z*this.z}getQuat(){return new N(this.x,this.y,this.z)}addA(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}add(e){return new m(this.x+e.x,this.y+e.y,this.z+e.z)}subA(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}sub(e){return new m(this.x-e.x,this.y-e.y,this.z-e.z)}scale(e){return this.x*=e,this.y*=e,this.z*=e,this}scaleTo(e){return new m(this.x*e,this.y*e,this.z*e)}mulA(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}mul(e){return new m(this.x*e.x,this.y*e.y,this.z*e.z)}divA(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}div(e){return new m(this.x/e.x,this.y/e.y,this.z/e.z)}dot(e){return e.x*this.x+e.y*this.y+e.z*this.z}dotArr(e){return e[0]*this.x+e[1]*this.y+e[2]*this.z}cross(e){return new m(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)}clear(){return this.x=this.y=this.z=0,this}getNormal(){let e=new m;e.copy(this);let t=1/e.length();return e.x*=t,e.y*=t,e.z*=t,e}normal(){let e=new m;e.copy(this);let t=1/e.length();return e.x*=t,e.y*=t,e.z*=t,e}normalNegate(){let e=new m;e.copy(this);let t=-1/e.length();return e.x*=t,e.y*=t,e.z*=t,e}normalNegateScale(e){let t=new m;t.copy(this);let i=-e/t.length();return t.x*=i,t.y*=i,t.z*=i,t}normalScale(e){let t=new m;t.copy(this);let i=e/t.length();return t.x*=i,t.y*=i,t.z*=i,t}normalize(){let e=1/this.length();return this.x*=e,this.y*=e,this.z*=e,this}toVec(){return[this.x,this.y,this.z]}toArray(){return[this.x,this.y,this.z]}distance(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return Math.sqrt(t*t+i*i+r*r)}distance2(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}negateTo(){return new m(-this.x,-this.y,-this.z)}projToRay(e,t){let i=m.proj_b_to_a(m.sub(this,e),t);return i.addA(e),i}angle(e){return m.angle(this,e)}lerp(e,t){return new m(this.x+(e.x-this.x)*t,this.y+(e.y-this.y)*t,this.z+(e.z-this.z)*t)}smerp(e,t){let i=1-t;return new m(this.x*t+e.x*i,this.y*t+e.y*i,this.z*t+e.z*i)}static get LERP_DELTA(){return 1e-6}slerp(e,t){let i=new m;if(t<=0)return i.copy(this),i;if(t>=1)return i.copy(e),i;let r,s,n,a,o=this.dot(e);return 1-o>m.LERP_DELTA?(r=Math.acos(o),s=Math.sin(r),n=Math.sin((1-t)*r)/s,a=Math.sin(t*r)/s):(n=1-t,a=t),m.add(this.scaleTo(n),e.scale(a))}getRotationTo(e,t){let i=this.clone(),r=e.clone();i.normalize(),r.normalize();let s=i.dot(r);if(s>=1)return N.IDENTITY.clone();if(s<1e-6-1)if(t.equal(m.ZERO)){let n=m.UNIT_X.cross(i);return n.isZero()&&(n=m.UNIT_Y.cross(i)),n.normalize(),N.axisAngleToQuat(n,Math.PI)}else return N.axisAngleToQuat(t,Math.PI);else{let n=Math.sqrt((1+s)*2),a=1/n,o=i.cross(r),l=new N(o.x*a,o.y*a,o.z*a,n*.5);return l.normalize(),l}}}class V{constructor(e=0,t=0){this.x=e,this.y=t}static get UP(){return new V(0,1)}static get DOWN(){return new V(0,-1)}static get RIGHT(){return new V(1,0)}static get LEFT(){return new V(-1,0)}static get ZERO(){return new V}static add(e,t){const i=new V(e.x,e.y);return i.addA(t),i}static sub(e,t){var i=new V(e.x,e.y);return i.subA(t),i}static scale(e,t){let i=new V(e.x,e.y);return i.scale(t),i}static mul(e,t){let i=new V(e.x,e.y);return i.mulA(t),i}static div(e,t){let i=new V(e.x,e.y);return i.divA(t),i}static proj_b_to_a(e,t){return t.scaleTo(t.dot(e)/t.dot(t))}static angle(e,t){return Math.acos(e.dot(t)/Math.sqrt(e.length2()*t.length2()))}static orthoNormalize(e,t){return e=e.normal(),e.scale(t.dot(e)),t.sub(e).normalize()}toVector3(){return new m(this.x,this.y,0)}clone(){return new V(this.x,this.y)}equal(e){return this.x===e.x&&this.y===e.y}copy(e){return this.x=e.x,this.y=e.y,this}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}length2(){return this.x*this.x+this.y*this.y}addA(e){return this.x+=e.x,this.y+=e.y,this}add(e){return new V(this.x+e.x,this.y+e.y)}subA(e){return this.x-=e.x,this.y-=e.y,this}sub(e){return new V(this.x-e.x,this.y-e.y)}scale(e){return this.x*=e,this.y*=e,this}scaleTo(e){return new V(this.x*e,this.y*e)}mulA(e){return this.x*=e.x,this.y*=e.y,this}mul(e){return new V(this.x*e.x,this.y*e.y)}divA(e){return this.x/=e.x,this.y/=e.y,this}dot(e){return e.x*this.x+e.y*this.y}dotArr(e){return e[0]*this.x+e[1]*this.y}cross(e){return this.x*e.y-this.y*e.x}clear(){return this.x=this.y=0,this}normal(){let e=new V;e.copy(this);let t=1/e.length();return e.x*=t,e.y*=t,e}normalize(){let e=1/this.length();return this.x*=e,this.y*=e,this}toVec(){return[this.x,this.y]}distance(e){return V.sub(this,e).length()}set(e,t){return this.x=e,this.y=t,this}negate(){return this.x=-this.x,this.y=-this.y,this}negateTo(){return new V(-this.x,-this.y)}projToRay(e,t){let i=V.proj_b_to_a(V.sub(this,e),t);return i.add(e),i}angle(e){return V.angle(this,e)}lerp(e,t,i){let r=this.clone();return i<=0?r.copy(e):i>=1?r.copy(t):r=V.add(e,V.sub(t,e).scale(i)),r}static get LERP_DELTA(){return 1e-6}slerp(e,t){let i=new V;if(t<=0)return i.copy(this),i;if(t>=1)return i.copy(e),i;let r,s,n,a,o=this.dot(e);return 1-o>V.LERP_DELTA?(r=Math.acos(o),s=Math.sin(r),n=Math.sin((1-t)*r)/s,a=Math.sin(t*r)/s):(n=1-t,a=t),V.add(this.scale(n),e.scale(a))}}const qs={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Hi(h,e){return h??e}function Bt(h){return h==null}let ta=0;function js(h){let e=h._openglobus_id;return e||(e=h._openglobus_id=++ta),e}function Ys(h){return typeof h=="string"||h instanceof String}function Tt(h){return h.toString(16).padStart(2,"0")}function Nr(h){let e,t,i;return h instanceof Array?(e=Tt(h[0]),t=Tt(h[1]),i=Tt(h[2])):(e=Tt(h.x),t=Tt(h.y),i=Tt(h.z)),`#${e}${t}${i}`}function $e(h,e){let t=qs[h];if(t&&(h=t),h[0]==="#"){let i=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=h.replace(i,function(n,a,o,l){return a+a+o+o+l+l}),s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return s?new ee(parseInt(s[1],16)/255,parseInt(s[2],16)/255,parseInt(s[3],16)/255,Bt(e)?1:e):new ee}else{Bt(e)&&(e=1);let i=h.split(",");return new ee(parseInt(i[0].split("(")[1])/255,parseInt(i[1])/255,parseInt(i[2])/255,Bt(i[3])?e:parseFloat(i[3]))}}function sr(h,e){let t=$e(h,e);return new Float32Array([t.x,t.y,t.z,t.w])}function nr(h){let e=qs[h];if(e&&(h=e),h[0]==="#"){let t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=h.replace(t,function(s,n,a,o){return n+n+a+a+o+o}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i);return r?new m(parseInt(r[1],16)/255,parseInt(r[2],16)/255,parseInt(r[3],16)/255):new m}else{let t=h.split(",");return new m(parseInt(t[0].split("(")[1])/255,parseInt(t[1])/255,parseInt(t[2])/255)}}function zt(h,e){return h.replace(/{[^{}]+}/g,function(t){return e[t.replace(/[{}]+/g,"")]||""})}function Ws(h){let e=document.createElement("div");e.innerHTML=h;let t=[];for(let i=0;i<e.childNodes.length;i++)t.push(e.childNodes[i]),e.removeChild(e.childNodes[i]);return t}function ia(h){return typeof h=="number"}function ra(h,e=""){return h?h.trim():e}function Xe(h,e){if(h){if(ia(h))return new m(h,h,h);if(h instanceof m)return h.clone();if(h instanceof Array)return m.fromVec(h);if(h instanceof V)return new m(h.x,h.y,0)}else if(e)return e;return new m}function Ze(h,e){if(h){if(Ys(h))return $e(h);if(h instanceof Array)return ee.fromVec(h);if(h instanceof ee)return h.clone()}else if(e)return e;return new ee(1,1,1,1)}function Fe(h,e){if(h){if(Ys(h))return nr(h);if(h instanceof Array)return m.fromVec(h);if(h instanceof m)return h.clone()}else if(e)return e;return new m(1,1,1)}function Xs(h,e){if(h){if(h instanceof Array)return new U(ar(h[0]),ar(h[1]));if(h instanceof U)return h.clone()}else if(e)return e;return new U}function ar(h,e){if(h){if(h instanceof Array)return new P(h[0],h[1],h[2]);if(h instanceof P)return h.clone()}return new P}function sa(h,e){let t=0,i=h.length-1;for(;t<=i;){let r=Math.floor((t+i)*.5);if(Math.abs(h[r]-e)<.001)return r;h[r]<e?t=r+1:i=r-1}return-1}function mr(h,e,t){let i=0,r=h.length-1;for(;i<=r;){let s=r+i>>1,n=t(e,h[s],s);if(n>0)i=s+1;else if(n<0)r=s-1;else return s}return-i-1}function Zs(h,e,t){let i=mr(h,e,t);return i<0&&(i=~i),h.splice(i,0,e),i}function na(h,e,t,i,r=!1){let s=new P(e.lon-h.lon,e.lat-h.lat),n=new P(i.lon-t.lon,i.lat-t.lat),a=-s.lat,o=+s.lon,l=-(a*h.lon+o*h.lat),c=-n.lat,d=+n.lon,f=-(c*t.lon+d*t.lat),_=c*h.lon+d*h.lat+f,g=c*e.lon+d*e.lat+f,v=a*t.lon+o*t.lat+l,u=a*i.lon+o*i.lat+l;if(r&&(_*g>0||v*u>0))return;let p=_/(_-g);return new P(h.lon+p*s.lon,h.lat+p*s.lat)}function or(h,e,t=!1){let i,r=0;return function(){const s=arguments;r?(t&&clearTimeout(i),i=setTimeout(()=>{Date.now()-r>=e&&(h.apply(null,s),r=Date.now())},e-(Date.now()-r))):(h.apply(null,s),r=Date.now())}}function $(h,e){let t=new h.constructor(h.length+e.length);return t.set(h,0),t.set(e,h.length),t}function xe(h=[],e=[]){if(ArrayBuffer.isView(h))return $(h,e);for(let t=0;t<e.length;t++)h.push(e[t]);return h}function X(h,e=Float32Array){if(ArrayBuffer.isView(h))return h;{const t=new e(h.length);return t.set(h,0),t}}function kt(h){return ArrayBuffer.isView(h)?Array.from(h):h}function Ee(h,e,t,i){return ArrayBuffer.isView(h)?(e<0&&(t=Math.abs(e),e+=h.length),K(h,e,t)):(e<0?h.splice(e):h.splice(e,t),h)}function K(h,e,t,i){if(h.length===0)return h;const r=h.length-t,s=new h.constructor(r);return s.set(h.subarray(0,e)),s.set(h.subarray(e+t),e),s}function $s(h,e,t,i,r){const s=r+1,n=t+s,a=i+s;let o=new Float64Array(s*s*3),l=0;for(let c=t;c<n;c++)for(let d=i;d<a;d++){let f=3*(c*(e+1)+d);o[l++]=h[f],o[l++]=h[f+1],o[l++]=h[f+2]}return o}function aa(h,e,t,i,r){const s=r+1,n=t+s,a=i+s;let o=new Float32Array(s*s*3),l=0;for(let c=t;c<n;c++)for(let d=i;d<a;d++){let f=3*(c*(e+1)+d);o[l++]=h[f],o[l++]=h[f+1],o[l++]=h[f+2]}return o}function Dr(h,e,t,i,r,s,n,a,o,l,c,d,f){const _=s+a+1,g=n+a+1;r+=1;let v=0,u=0;for(let p=s;p<_;p++)for(let b=n;b<g;b++){let w=p*r+b,y=3*w,x=h[y],T=h[y+1],A=h[y+2];!i||i[w]===0?(x<d.xmin&&(d.xmin=x),x>d.xmax&&(d.xmax=x),T<d.ymin&&(d.ymin=T),T>d.ymax&&(d.ymax=T),A<d.zmin&&(d.zmin=A),A>d.zmax&&(d.zmax=A)):f[u]=1,u++,o[v]=x,c[v]=t[y],l[v++]=e[y],o[v]=T,c[v]=t[y+1],l[v++]=e[y+1],o[v]=A,c[v]=t[y+2],l[v++]=e[y+2]}}function Ks(h){return h.map(e=>Array.isArray(e)?Ks(e):e)}async function oa(h){return new Promise(e=>{const t=new Image;return t.addEventListener("load",()=>{e(t)}),t.src=h,t.crossOrigin="",t})}function Uh(h){return h.complete&&h.naturalHeight!==0}function la(h){let t=new URLSearchParams(location.search).get(h);if(t)return Number(t)}const ha=.001,ca=1e3,pr=60,da=1/pr,bi=3600,fa=1/bi,Qs=12*bi,Xt=86400,ua=864e5,Js=1/ua,lr=1/Xt,en=2451545;function _a(h,e,t){let i=(e-14)/12|0,r=h+4800+i;return(1461*r/4|0)+(367*(e-2-12*i)/12|0)-(3*((r+100)/100|0)/4|0)+t-32075}function Hr(h){let e=_a(h.getUTCFullYear(),h.getUTCMonth()+1,h.getUTCDate()),t=h.getUTCHours()-12;t<0&&(t+=24);let i=h.getUTCSeconds()+t*bi+h.getUTCMinutes()*pr+h.getUTCMilliseconds()*ha;i>=Qs&&e--;let r=i*lr|0;return e+=r,i-=Xt*r,i<0&&(e--,i+=Xt),e+i*lr}function ga(h){let e=va,t=mr(e,h,function(r,s){return r-s.jd});t<0&&(t=~t),t>=e.length&&(t=e.length-1);let i=e[t].leapSeconds;return t!==0&&(e[t].jd-h)*Xt>i&&(i=e[t-1].leapSeconds),h+i*lr}function ma(h){let e=h|0,t=(h-e)*Xt;t>=Qs&&e++;let i=e+68569|0,r=4*i/146097|0;i=i-((146097*r+3)/4|0)|0;let s=4e3*(i+1)/1461001|0;i=i-(1461*s/4|0)+31|0;let n=80*i/2447|0,a=i-(2447*n/80|0)|0;i=n/11|0;let o=n+2-12*i|0,l=100*(r-49)+s+i|0,c=t*fa|0,d=t-c*bi,f=d*da|0;d=d-f*pr;let _=d|0,g=(d-_)*ca|0;return c+=12,c>23&&(c-=24),new Date(Date.UTC(l,o-1,a,c,f,_,g))}function pa(h,e){return h+e*Js}function j(h,e){return{jd:h,leapSeconds:e}}const va=[j(24413175e-1,10),j(24414995e-1,11),j(24416835e-1,12),j(24420485e-1,13),j(24424135e-1,14),j(24427785e-1,15),j(24431445e-1,16),j(24435095e-1,17),j(24438745e-1,18),j(24442395e-1,19),j(24447865e-1,20),j(24451515e-1,21),j(24455165e-1,22),j(24462475e-1,23),j(24471615e-1,24),j(24478925e-1,25),j(24482575e-1,26),j(24488045e-1,27),j(24491695e-1,28),j(24495345e-1,29),j(24500835e-1,30),j(24506305e-1,31),j(24511795e-1,32),j(24537365e-1,33),j(24548325e-1,34),j(24561095e-1,35),j(24572045e-1,36)];ga(en);class xa{constructor(e){this.vertices=[new m,new m,new m,new m,new m,new m,new m,new m],e&&this.setFromBoundsArr(e)}copy(e){for(let t=0,i=this.vertices.length;t<i;t++)this.vertices[t].copy(e.vertices[t])}setFromBoundsArr(e){let t=e[0],i=e[3],r=e[1],s=e[4],n=e[2],a=e[5],o=this.vertices;o[0].set(t,r,n),o[1].set(i,r,n),o[2].set(i,r,a),o[3].set(t,r,a),o[4].set(t,s,n),o[5].set(i,s,n),o[6].set(i,s,a),o[7].set(t,s,a)}setFromExtent(e,t){this.setFromBoundsArr(t.getCartesianBounds(e))}}class nt{constructor(e=0,t){this.radius=e,this.center=t?t.clone():new m}setFromBounds(e){let t=new m(e[0],e[1],e[2]);this.center.set(t.x+(e[3]-t.x)*.5,t.y+(e[3]-t.y)*.5,t.z+(e[5]-t.z)*.5),this.radius=this.center.distance(t)}setFromExtent(e,t){this.setFromBounds(t.getCartesianBounds(e))}}function Ke(h,e){return new ei(h,e)}class ei{constructor(e,t){this.__id=ei.__counter__++,this._eventNames=[],e&&this.registerNames(e),this._sender=t||this,this._stopPropagation=!1,this._stampCache={}}bindSender(e){this._sender=e||this}registerNames(e){for(let t=0;t<e.length;t++)this[e[t]]={active:!0,handlers:[]},this._eventNames.push(e[t]);return this}_getStamp(e,t,i){return`${e}_${t}_${i}`}_stamp(e,t){let i=js(t),r=this._getStamp(e,this.__id,i);return this._stampCache[r]?!1:(this._stampCache[r]=i,!0)}on(e,t,i,r=0){if(this._stamp(e,t)&&this[e]){let s=t.bind(i||this._sender);s._openglobus_id=t._openglobus_id,s._openglobus_priority=r,Zs(this[e].handlers,s,(n,a)=>(a._openglobus_priority||0)-(n._openglobus_priority||0))}}off(e,t){if(t){let i=this._getStamp(e,this.__id,t._openglobus_id);if(t._openglobus_id&&this._stampCache[i]){let r=this[e].handlers,s=r.length,n=-1;for(;s--;)if(r[s]._openglobus_id===t._openglobus_id){n=s;break}n!==-1&&(r.splice(n,1),this._stampCache[i]=void 0,delete this._stampCache[i])}}}dispatch(e,...t){let i=!0;if(e&&e.active&&!this._stopPropagation){let r=e.handlers.slice(0),s=r.length;for(;s--;)r[s](...t)===!1&&(i=!1)}return this._stopPropagation=!1,i}stopPropagation(){this._stopPropagation=!0}clear(){for(let e=0;e<this._eventNames.length;e++){let t=this[this._eventNames[e]];t.handlers.length=0,t.handlers=[]}this._eventNames.length=0,this._eventNames=[]}}ei.__counter__=0;const ya=["render"];class Se{constructor(e={}){this.__id=Se.__counter__++,this.events=Ke(ya),this.model=e.model||null,this.template=e.template||"",this.parent=e.parent||null,this._classList=e.classList||[],this.el=null}static getHTML(e,t){return zt(e,t)}static parseHTML(e){return Ws(e)}static insertAfter(e,t){Array.isArray(e)||(e=[e]);for(let i=0;i<e.length;i++)t.parentNode&&t.parentNode.insertBefore(e[i],t.nextSibling);return e}static insertBefore(e,t){Array.isArray(e)||(e=[e]);for(let i=0;i<e.length;i++)t.parentNode&&t.parentNode.insertBefore(e[i],t);return e}insertBefore(e){this.el||this.render(),this.el&&(e instanceof HTMLElement&&e.parentNode&&Se.insertBefore(this.el,e),e instanceof Se&&e.el&&e.el.parentNode&&Se.insertBefore(this.el,e.el))}insertAfter(e){this.el||this.render(),this.el&&(e instanceof HTMLElement&&e.parentNode&&Se.insertAfter(this.el,e),e instanceof Se&&e.el&&e.el.parentNode&&Se.insertAfter(this.el,e.el))}isEqual(e){return e.__id===this.__id}appendTo(e,t=!1,i=!1){return e&&(this.el||(this.beforeRender(e),this.render()),this.el&&this.el.parentNode&&this.el.parentNode.removeChild(this.el),t&&(e.innerHTML=""),this.el&&(i?e.childNodes[0]?Se.insertBefore(this.el,e.childNodes[0]):e.appendChild(this.el):e.appendChild(this.el)),this.afterRender(e)),this}afterRender(e){}beforeRender(e){}stopPropagation(){this.events.stopPropagation()}renderTemplate(e){return Se.parseHTML(Se.getHTML(this.template,e||{}))[0]}render(e){this.el=this.renderTemplate(e);for(let t=0,i=this._classList.length;t<i;t++)this.el.classList.add(this._classList[t]);return this.events.dispatch(this.events.render,this),this}select(e){return this.el?this.el.querySelector(e):null}selectRemove(e){if(this.el){let t=this.select(e);if(t&&t.parentNode)return t.parentNode.removeChild(t),t}}selectAll(e,t){if(this.el){const i=this.el.querySelectorAll(e);if(t)for(let r=0,s=i.length;r<s;r++)t(i[r],r);return i}}remove(){this.el&&this.el.parentNode&&this.el.parentNode.removeChild(this.el)}}Se.__counter__=0;const ba=`<div class="og-button" title="{title}">
       <div class="og-button-icon">{icon}</div>
       <div class="og-button-text">{text}</div>
    </div>`,wa=["click","mousedown","mouseup","touchstart","touchend","touchcancel"];class vi extends Se{constructor(e={}){super({template:zt(ba,{icon:e.icon||"",text:e.text||"",title:e.title||""}),...e}),this._onMouseDown=t=>{t.preventDefault(),this.events.dispatch(this.events.mousedown,this,t)},this._onMouseUp=t=>{t.preventDefault(),this.events.dispatch(this.events.mouseup,this,t)},this._onTouchStart=t=>{t.preventDefault(),this.events.dispatch(this.events.touchstart,this,t)},this._onTouchEnd=t=>{t.preventDefault(),this.events.dispatch(this.events.touchend,this,t)},this._onTouchCancel=t=>{t.preventDefault(),this.events.dispatch(this.events.touchcancel,this,t)},this._onMouseClick=t=>{this._mouseClickHandler(t)},this.events=this.events.registerNames(wa),this.el=null,this.name=e.name||"",this.$icon=null,this.$text=null}render(e){return super.render(e),this.$icon=this.select(".og-button-icon"),this.$text=this.select(".og-button-text"),this.el.__og_button__=this,this._initEvents(),this}_initEvents(){this.el&&(this.el.addEventListener("click",this._onMouseClick),this.el.addEventListener("mousedown",this._onMouseDown),this.el.addEventListener("mouseup",this._onMouseUp),this.el.addEventListener("touchstart",this._onTouchStart),this.el.addEventListener("touchend",this._onTouchEnd),this.el.addEventListener("touchcancel",this._onTouchCancel))}_mouseClickHandler(e){e.preventDefault(),this.events.dispatch(this.events.click,this,e)}remove(){this._clearEvents(),super.remove()}_clearEvents(){this.el&&this.el.removeEventListener("click",this._onMouseClick)}}class Ie{constructor(e={}){this.__id=Ie.__counter__++,this._name=e.name||`_control_${this.__id.toString()}`,this.planet=null,this._initialized=!1,this.renderer=null,this.autoActivate=e.autoActivate||!1,this._active=!1,this._deferredActive=!0}get name(){return this._name}oninit(){}onadd(){}onremove(){}onactivate(){}ondeactivate(){}addTo(e){e&&(this.renderer=e,e.controls[this.name]=this,this.onadd&&this.onadd(),e.isInitialized()&&(this._initialized=!0,this.oninit&&this.oninit(),this.autoActivate&&this.activate()))}remove(){this.deactivate(),this.onremove&&this.onremove();let e=this.renderer,t=this.name;if(!e)return;let i=e.controls[t];i&&this.isEqual(i)&&delete e.controls[t],this.renderer=null,this._active=!1,this._initialized=!1}activate(){this._active||(this._initialized||(this._initialized=!0,this.oninit&&this.oninit()),this._deferredActive?(this._active=!0,this.onactivate&&this.onactivate()):this._deferredActive=!0)}deactivate(){this._active?(this._active=!1,this.ondeactivate&&this.ondeactivate()):this._initialized||(this._deferredActive=!1)}isActive(){return this._active}isEqual(e){return e.__id===this.__id}}Ie.__counter__=0;const Ta=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   viewBox="0 0 110.6 110.3"
   version="1.1"
   id="svg21"
   sodipodi:docname="aaa.svg"
   inkscape:version="0.92.3 (2405546, 2018-03-11)">
  <metadata
     id="metadata11">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <defs
     id="defs25" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1920"
     inkscape:window-height="1001"
     id="namedview23"
     showgrid="false"
     inkscape:zoom="9.4900968"
     inkscape:cx="28.376998"
     inkscape:cy="60.17054"
     inkscape:window-x="-9"
     inkscape:window-y="-9"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg21" />
  <g
     id="Layer_2"
     data-name="Layer 2"
     transform="matrix(1,0,0,-1,0,110.3)">
    <g
       id="Слой_1"
       data-name="Слой 1">
      <g
         id="_Group_"
         data-name="&lt;Group&gt;">
        <g
           id="_Group_7"
           data-name="&lt;Group&gt;">
          <polygon
             id="_Path_7"
             data-name="&lt;Path&gt;"
             points="55.2,97.6 55.3,97.4 55.3,97.6 55.3,97.2 65.3,55.1 55.3,55.1 55.2,55.1 45.3,55.1 55.2,97.2 "
             style="fill:#ff2b45" />
          <polygon
             id="_Path_8"
             data-name="&lt;Path&gt;"
             points="55.3,12.7 55.3,12.9 55.2,12.7 55.2,13.1 45.3,55.1 55.2,55.1 55.3,55.1 65.3,55.1 55.3,13.1 "
             style="fill:#cecece;" />
        </g>
      </g>
    </g>
  </g>
</svg>`;class Aa extends Ie{constructor(e={}){super(e),this._heading=0,this._svg=null}oninit(){let e=new vi({classList:["og-map-button","og-compass-button"],icon:Ta});e.appendTo(this.renderer.div),e.events.on("click",this._onClick,this),this._svg=e.select("svg"),this.renderer.events.on("draw",this._draw,this)}_onClick(){const e=this.planet;let t=e.getCartesianFromPixelTerrain(this.renderer.handler.getCenter());t?e.flyCartesian(t.normal().scaleTo(t.length()+t.distance(e.camera.eye)),null,null,0,null,null,()=>{e.camera.look(t)}):e.flyCartesian(e.camera.eye)}_draw(){this.setHeading(this.planet.camera.getHeading())}setHeading(e){this._heading!==e&&(this._heading=e,this._svg.style.transform=`rotateZ(${-e}deg)`)}}const Ea=`<svg className="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor; overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z"/>
</svg>`,Ca=["resize","focus","visibility","dragstart","dragend"],Pa=`<div class="og-ddialog" 
        style="display:{display}; resize:{resize}; width: {width}px; {height}; top: {top}px; left: {left}px; min-height: {minHeight}; max-height: {maxHeight}; min-width: {minWidth}; max-width: {maxWidth};">
       <div class="og-ddialog-header">
         <div class="og-ddialog-header__title">{title}</div>      
         <div class="og-ddialog-header__buttons"></div>      
        </div>
       <div class="og-ddialog-container"></div>
    </div>>`;class vr extends Se{constructor(e={}){super({template:zt(Pa,{title:e.title||"",display:Hi(e.visible,!0)?"flex":"none",resize:Hi(e.resizable,!0)?"both":"none",width:e.width||300,height:e.height?`height: ${e.height||200}px`:"",left:e.left||0,top:e.top||0,minHeight:e.minHeight?`${e.minHeight}px`:"unset",maxHeight:e.maxHeight?`${e.maxHeight}px`:"unset",minWidth:e.minWidth?`${e.minWidth}px`:"unset",maxWidth:e.maxWidth?`${e.maxWidth}px`:"unset"}),...e}),this._onCloseBtnClick=()=>{this.close()},this._onMouseDownAll=()=>{this.bringToFront()},this._onMouseDown=t=>{t.preventDefault(),this._startDragging(),this._startPosX=t.clientX,this._startPosY=t.clientY,document.addEventListener("mousemove",this._onMouseMove),document.addEventListener("mouseup",this._onMouseUp)},this._onMouseMove=t=>{t.preventDefault();let i=this._startPosX-t.clientX,r=this._startPosY-t.clientY;this._startPosX=t.clientX,this._startPosY=t.clientY,this.setPosition(this.el.offsetLeft-i,this.el.offsetTop-r)},this._onMouseUp=()=>{this._clearDragging(),document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove)},this.events=this.events.registerNames(Ca),this._startPosX=0,this._startPosY=0,this.$header=null,this.$title=null,this.$container=null,this.$buttons=null,this._closeBtn=new vi({icon:Ea,classList:["og-button-size__20"]}),this.useHide=e.useHide||!1,this._visibility=Hi(e.visible,!0)}setContainer(e){this.$container.innerHTML=e}get container(){return this.$container}get width(){return this.el?parseFloat(this.el.style.width):0}get height(){return this.el?parseFloat(this.el.style.height):0}bringToFront(){this.el.style.zIndex=String(vr.__zIndex__++)}render(e){return super.render(e),this.bringToFront(),this.$header=this.select(".og-ddialog-header"),this.$title=this.select(".og-ddialog-header__title"),this.$container=this.select(".og-ddialog-container"),this.$buttons=this.select(".og-ddialog-header__buttons"),this._initEvents(),this._initButtons(),this}show(){this._visibility||(this._visibility=!0,this.el.style.display="flex",this.bringToFront(),this.events.dispatch(this.events.visibility,!0,this))}hide(){this._visibility&&(this._visibility=!1,this.el.style.display="none",this.events.dispatch(this.events.visibility,!1,this))}close(){this.useHide?this.hide():this.remove()}setVisibility(e){e?this.show():this.hide()}_initButtons(){this._closeBtn.events.on("click",this._onCloseBtnClick),this._closeBtn.appendTo(this.$buttons)}_initEvents(){this.$header.addEventListener("mousedown",this._onMouseDown),this.el.addEventListener("mousedown",this._onMouseDownAll)}setPosition(e,t){e!=null&&(this.el.style.left=`${e}px`),t!=null&&(this.el.style.top=`${t}px`)}_startDragging(){this.el.classList.contains("dragging")||(this.el.classList.add("dragging"),this.events.dispatch(this.events.dragstart,this))}_clearDragging(){this.el.classList.contains("dragging")&&(this.events.dispatch(this.events.dragend,this),this.el.classList.remove("dragging"))}remove(){this._clearDragging(),this._clearEvents(),super.remove()}_clearEvents(){this._closeBtn.events.off("click",this._onCloseBtnClick),document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this.$header.removeEventListener("mousedown",this._onMouseDown),this.el.removeEventListener("mousedown",this._onMouseDownAll)}}vr.__zIndex__=0;const La=3570,Ba=1e3,ne=0,de=1,fe=2,ue=3,Q=0,te=1,J=2,ie=3,Ve=0,Te=1,Oi=2,jt=[J,ie,Q,te],Or=[[-1,-1,ne,de],[de,-1,ue,-1],[fe,ue,-1,-1],[-1,ne,-1,fe]],Sa=[[fe,ue,ne,de],[de,ne,ue,fe],[fe,ue,ne,de],[de,ne,ue,fe]],Ra=[[0,1,0,0],[1,0,0,0],[0,1,0,1],[1,1,1,1]];class Ma{constructor(e,t){this.segment=e,this.layer=t,this.isReady=!1,this.isLoading=!1,this.texture=null,this.pickingMask=null,this.textureExists=!1,this.appliedNodeId=0,this.appliedNode=null,this.texOffset=[0,0,1,1],this.loadingAttempts=0,this._updateTexture=null,this._updatePickingMask=null,this.pickingReady=!1}abortLoading(){this.layer.abortMaterialLoading(this)}_createTexture(e){return this.layer._planet&&this.layer.createTexture(e,this.layer._internalFormat,this.isReady?this.texture:null)}applyImage(e){this.segment.initialized&&(this._updateTexture=null,this.texture=this._createTexture(e),this.isReady=!0,this.pickingReady=!0,this.textureExists=!0,this.isLoading=!1,this.appliedNodeId=this.segment.node.nodeId,this.texOffset=[0,0,1,1])}applyTexture(e,t){this.segment.initialized&&(this.texture=e,this._updateTexture=null,this.pickingMask=t||null,this._updatePickingMask=null,this.isReady=!0,this.pickingReady=!0,this.textureExists=!0,this.isLoading=!1,this.appliedNodeId=this.segment.node.nodeId,this.texOffset=[0,0,1,1])}textureNotExists(){this.segment.initialized&&(this.pickingReady=!0,this.isLoading=!1,this.isReady=!0,this.textureExists=!1)}clear(){this.loadingAttempts=0,this.layer.clearMaterial(this)}}const Ui=30;class Qe{constructor(e,t={}){if(this.isVector=!1,this.__id=Qe.__counter__++,this._iconSrc=t.iconSrc||null,this.events=Ke(Ia,this),this.name=e||"noname",this.properties=t.properties||{},this.hideInLayerSwitcher=t.hideInLayerSwitcher||!1,this._hasImageryTiles=!0,this._opacity=t.opacity!=null?t.opacity:1,this.minZoom=t.minZoom||0,this.maxZoom=t.maxZoom!=null?t.maxZoom:50,this._planet=null,this.isVector=!1,this._attribution=t.attribution||"",this._zIndex=t.zIndex||0,this._isBaseLayer=t.isBaseLayer||!1,this._defaultTextures=t.defaultTextures||[null,null],this._visibility=t.visibility!==void 0?t.visibility:!0,this._fading=t.fading||!1,this._fadingFactor=this._opacity/Ui,this._fading?this._fadingOpacity=0:this._fadingOpacity=this._opacity,this._height=t.height||0,this._extent=new U,this.createTexture=null,this._textureFilter=t.textureFilter?t.textureFilter.trim().toUpperCase():"MIPMAP",this._isSRGB=t.isSRGB!=null?t.isSRGB:!1,this._internalFormat=null,this._extentMerc=new U,this.setExtent(Xs(t.extent,new U(new P(-180,-90),new P(180,90)))),this._pickingColor=new m,this._pickingEnabled=t.pickingEnabled!==void 0?t.pickingEnabled:!0,this._isPreloadDone=!1,this._preLoadZoomLevels=t.preLoadZoomLevels||[0,1],this._ambient=null,this._diffuse=null,this._specular=null,t.ambient){let i=Fe(t.ambient,new m(.2,.2,.2));this._ambient=new Float32Array([i.x,i.y,i.z])}if(t.diffuse){let i=Fe(t.diffuse,new m(.8,.8,.8));this._diffuse=new Float32Array([i.x,i.y,i.z])}if(t.specular){let i=Fe(t.specular,new m(3e-4,3e-4,3e-4)),r=t.shininess||20;this._specular=new Float32Array([i.x,i.y,i.z,r])}this.nightTextureCoefficient=t.nightTextureCoefficient||1}get iconSrc(){return this._iconSrc}set iconSrc(e){this._iconSrc=e}set diffuse(e){if(e){let t=Fe(e);this._diffuse=new Float32Array(t.toArray())}else this._diffuse=null}set ambient(e){if(e){let t=Fe(e);this._ambient=new Float32Array(t.toArray())}else this._ambient=null}set specular(e){if(e){let t=Fe(e);this._specular=new Float32Array([t.x,t.y,t.y,this._specular?this._specular[3]:0])}else this._specular=null}set shininess(e){this._specular&&(this._specular[3]=e)}static getTMS(e,t,i){return{x:e,y:(1<<i)-t-1,z:i}}static getTileIndex(e,t,i,r){return`${r}::${e}_${t}_${i}`}get instanceName(){return"Layer"}get rendererEvents(){return this.events}set opacity(e){e!==this._opacity&&(this._fading?e>this._opacity?this._fadingFactor=(e-this._opacity)/Ui:e<this._opacity&&(this._fadingFactor=(this._opacity-e)/Ui):this._fadingOpacity=e,this._opacity=e)}set pickingEnabled(e){this._pickingEnabled=e}get pickingEnabled(){return this._pickingEnabled}hasImageryTiles(){return this._hasImageryTiles}getID(){return this.__id}get id(){return this.__id}get _id(){return this.__id}isEqual(e){return e.__id===this.__id}_assignPlanet(e){this._planet=e,e._layers.push(this),e.renderer&&e.renderer.isInitialized()&&(this._isSRGB?this._internalFormat=e.renderer.handler.gl.SRGB8_ALPHA8:this._internalFormat=e.renderer.handler.gl.RGBA8,this.createTexture=e.renderer.handler.createTexture[this._textureFilter],this.events.on("visibilitychange",e._onLayerVisibilityChanged,e),this._isBaseLayer&&this._visibility&&e.setBaseLayer(this),e.events.dispatch(e.events.layeradd,this),this.events.dispatch(this.events.add,e),e.updateVisibleLayers(),this._bindPicking(),this._visibility&&this.hasImageryTiles()&&this._preLoad())}get isIdle(){return this._planet&&this._planet._terrainCompletedActivated||!1}_bindPicking(){this._planet&&this._planet.renderer&&this._planet.renderer.assignPickingColor(this)}addTo(e){this._planet||this._assignPlanet(e)}remove(){let e=this._planet;if(e){for(let t=0;t<e._layers.length;t++)if(this.isEqual(e._layers[t]))return e.renderer&&e.renderer.clearPickingColor(this),e._layers.splice(t,1),e.updateVisibleLayers(),this.clear(),e.events.dispatch(e.events.layerremove,this),this.events.dispatch(this.events.remove,e),this._planet=null,this._internalFormat=null,this.createTexture=null,this}return this}clear(){this._planet&&this._planet._clearLayerMaterial(this)}get planet(){return this._planet}setAttribution(e){this._attribution!==e&&(this._attribution=e,this._planet&&this._planet.updateAttributionsList())}getAttribution(){return this._attribution}setHeight(e){this._height=e,this._planet&&this._planet.updateVisibleLayers()}getHeight(){return this._height}setZIndex(e){this._zIndex=e,this._planet&&this._planet.updateVisibleLayers()}getZIndex(){return this._zIndex}bringToFront(){if(this._planet){let e=this._planet.visibleTileLayers,t=e[e.length-1];t.isEqual(this)||this.setZIndex(t.getZIndex()+1)}}isBaseLayer(){return this._isBaseLayer}setBaseLayer(e){this._isBaseLayer=e,this._planet&&(!e&&this._planet.baseLayer&&this.isEqual(this._planet.baseLayer)&&(this._planet.baseLayer=null),this._planet.updateVisibleLayers())}setVisibility(e){e!==this._visibility&&(this._visibility=e,this._planet&&(this._isBaseLayer&&e&&this._planet.setBaseLayer(this),this._planet.updateVisibleLayers(),e&&!this._isPreloadDone&&!this.isVector&&(this._isPreloadDone=!0,this._preLoad())),this.events.dispatch(this.events.visibilitychange,this))}_forceMaterialApply(e){let t=e.materials,i=t[this.__id];i||(i=t[this.__id]=this.createMaterial(e)),i.isReady||(this._planet._renderCompleted=!1),this.applyMaterial(i,!0)}clearMaterial(e){}loadMaterial(e,t=!1){}applyMaterial(e,t=!1){return[0,0,1,1]}_preLoadRecursive(e,t){if(!(e.segment.tileZoom>t)){this._preLoadZoomLevels.includes(e.segment.tileZoom)&&this._forceMaterialApply(e.segment);for(let i=0,r=e.nodes.length;i<r;i++)e.nodes[i]&&this._preLoadRecursive(e.nodes[i],t)}}_preLoad(){if(this._planet&&this._preLoadZoomLevels.length){let e=this._planet,t=Math.max(...this._preLoadZoomLevels);for(let i=0,r=e.quadTreeStrategy.quadTreeList.length;i<r;i++)this._preLoadRecursive(e.quadTreeStrategy.quadTreeList[i],t)}}getVisibility(){return this._visibility}setExtent(e){let t=e.southWest.clone(),i=e.northEast.clone();t.lat<Ne&&(t.lat=Ne),i.lat>se&&(i.lat=se),this._extent=e.clone(),this._extentMerc=new U(t.forwardMercator(),i.forwardMercator()),this._correctFullExtent()}getExtent(){return this._extent}getExtentMerc(){return this._extentMerc}flyExtent(){var e;(e=this._planet)==null||e.flyExtent(this.getExtent())}viewExtent(){var e;(e=this._planet)==null||e.viewExtent(this.getExtent())}_correctFullExtent(){}get opacity(){return this._opacity}get screenOpacity(){return this._fading?this._fadingOpacity:this._opacity}_refreshFadingOpacity(){let e=this._planet;return this._visibility&&e.getViewExtent().overlaps(this._extent)&&e.maxCurrZoom>=this.minZoom&&e.minCurrZoom<=this.maxZoom?(this._fadingOpacity+=this._fadingFactor,(this._fadingFactor>0&&this._fadingOpacity>this._opacity||this._fadingFactor<0&&this._fadingOpacity<this._opacity)&&(this._fadingOpacity=this._opacity),!1):(this._fadingOpacity-=this._fadingFactor,this._fadingOpacity<=0&&(this._fadingOpacity=0),!1)}createMaterial(e){return new Ma(e,this)}redraw(){var e;(e=this._planet)==null||e.quadTreeStrategy.clearLayerMaterial(this)}abortMaterialLoading(e){}abortLoading(){}}Qe.__counter__=0;const Ia=["visibilitychange","add","remove","mousemove","mouseenter","mouseleave","lclick","rclick","mclick","ldblclick","rdblclick","mdblclick","lup","rup","mup","ldown","rdown","mdown","lhold","rhold","mhold","mousewheel","touchmove","touchstart","touchend","doubletouch","touchleave","touchenter"],za=["load","loadend"];class ze extends Qe{constructor(e,t){super(e,t),this.events=this.events.registerNames(za),this.animated=t.animated||!1,this.minNativeZoom=t.minNativeZoom||0,this.maxNativeZoom=t.maxNativeZoom||100,this._counter=0,this._pendingsQueue=[],this.drawTile=t.drawTile,this._onLoadend_=null}addTo(e){return this._onLoadend_=this._onLoadend.bind(this),this.events.on("loadend",this._onLoadend_,this),super.addTo(e)}remove(){return this.events.off("loadend",this._onLoadend_),this._onLoadend_=null,super.remove()}_onLoadend(){this._planet&&this._planet._terrainCompletedActivated&&this._planet.events.dispatch(this._planet.events.layerloadend,this)}get instanceName(){return"CanvasTiles"}get isIdle(){return super.isIdle&&this._counter===0}abortLoading(){this._pendingsQueue.forEach(e=>{this.abortMaterialLoading(e)}),this._pendingsQueue=[]}setVisibility(e){e!==this._visibility&&(super.setVisibility(e),e||this.abortLoading())}loadMaterial(e){let t=e.segment;this._isBaseLayer?e.texture=t.getDefaultTexture():e.texture=t.planet.transparentTexture,(this._planet.layerLock.isFree()||e.segment.tileZoom<2)&&(e.isReady=!1,e.isLoading=!0,ze.__requestsCounter>=ze.MAX_REQUESTS&&this._counter?this._pendingsQueue.push(e):this._exec(e))}_exec(e){ze.__requestsCounter++,this._counter++;const t=this.events.load;t.handlers.length&&this.events.dispatch(t,e),requestAnimationFrame(()=>{this.drawTile(e,i=>{this._counter--,ze.__requestsCounter--,this._correctCounter(),e.isLoading&&e.applyImage(i),this._dequeueRequest()})})}_correctCounter(){this._counter<0&&(this._counter=0),ze.__requestsCounter<0&&(ze.__requestsCounter=0)}abortMaterialLoading(e){e.isLoading&&(this._counter--,ze.__requestsCounter--,this._correctCounter(),this._dequeueRequest()),e.isLoading=!1,e.isReady=!1}_dequeueRequest(){if(this._pendingsQueue.length){if(ze.__requestsCounter<ze.MAX_REQUESTS){const e=this._whilePendings();e&&this._exec(e)}}else this._counter===0&&this._planet&&this._planet._terrainCompletedActivated&&this.events.dispatch(this.events.loadend)}_whilePendings(){for(;this._pendingsQueue.length;){const e=this._pendingsQueue.pop();if(e&&e.segment&&e.segment.node){if(e.segment.initialized&&e.segment.node.getState()===Te)return e;e.isLoading=!1}}return null}applyMaterial(e){if(e.isReady)return e.layer.animated&&requestAnimationFrame(()=>{this.drawTile(e,function(t){e.applyImage(t)})}),e.texOffset;if(e.segment.tileZoom<this.minNativeZoom)e.textureNotExists();else{let t=e.segment,i=t.node,r=!1,s=e.layer.maxNativeZoom;t.passReady&&!e.isLoading&&t.tileZoom<=s&&this.loadMaterial(e);let n=this._id,a=e;for(;i.parentNode;)if(i=i.parentNode,a=i.segment.materials[n],a&&a.textureExists){r=!0;break}if(t.passReady){if(i.segment.tileZoom===s)t.tileZoom>s&&e.textureNotExists();else if(i.segment.tileZoom<s){let o=t.node;for(;o.segment.tileZoom>s;)o=o.parentNode;let l=o.segment.materials[n];l?!l.isLoading&&!l.isReady&&this.loadMaterial(l):(l=o.segment.materials[e.layer._id]=e.layer.createMaterial(o.segment),this.loadMaterial(l))}}if(r){e.layer.animated&&requestAnimationFrame(()=>{this.drawTile(e,function(l){e.applyImage(l)})}),e.appliedNodeId=i.nodeId,e.texture=a.texture;let o=1/(2<<t.tileZoom-i.segment.tileZoom-1);e.texOffset[0]=t.tileX*o-i.segment.tileX,e.texOffset[1]=t.tileY*o-i.segment.tileY,e.texOffset[2]=o,e.texOffset[3]=o}else e.texture=t.planet.transparentTexture,e.texOffset[0]=0,e.texOffset[1]=0,e.texOffset[2]=1,e.texOffset[3]=1}return e.texOffset}clearMaterial(e){e.isReady&&(e.isReady=!1,e.textureExists&&e.texture&&!e.texture.default&&(e.segment.handler.gl.deleteTexture(e.texture),e.texture=null)),this.abortMaterialLoading(e),e.isLoading=!1,e.textureExists=!1,e.layer=null,e.segment=null}}ze.MAX_REQUESTS=20;ze.__requestsCounter=0;class xr{constructor(e=2,t){this._sourceId=0,this._source=new Map,this._pendingQueue=[],this._numWorkers=e,this._workerQueue=[],t&&this.setProgram(t)}check(){this._pendingQueue.length&&this.make(this._pendingQueue.pop())}setProgram(e){let t=new Blob([e],{type:"application/javascript"});for(let i=0;i<this._numWorkers;i++){let r=new Worker(URL.createObjectURL(t));r.onmessage=s=>{this._onMessage(s),this._workerQueue&&this._workerQueue.unshift(s.target),this.check()},this._workerQueue.push(r)}}make(e){}_onMessage(e){}destroy(){for(let e=0;e<this._workerQueue.length;e++){const t=this._workerQueue[e];t.onmessage=null,t.terminate()}this._pendingQueue=null,this._workerQueue=null}get pendingQueue(){return this._pendingQueue}}const Ae=-2,he=-1;class Fa extends xr{constructor(e=4){super(e,ka)}_onMessage(e){let t=this._source.get(e.data.id);t.label._lockId===Ae?requestAnimationFrame(()=>{this.make({handler:t.handler,label:t.label})}):t.handler.workerCallback(e.data,t.label),this._source.delete(e.data.id)}make(e){let t=e.label;if(e.handler._entityCollection){let r=t.serializeWorkerData(this._sourceId);if(r)if(this._workerQueue.length){let s=this._workerQueue.pop();this._source.set(this._sourceId,e),t._lockId=this._sourceId,this._sourceId++,s.postMessage({labelData:r},[r.buffer])}else this._pendingQueue.push(e)}}}const ka=`'use strict';

    function concatTypedArrays(dest, index, source) {
        let len = source.length,
            offset = index * len;
        for(let i = 0; i < len; i++) {
            dest[offset + i] = source[i];
        }
    }

    self.onmessage = function (e) {
        var labelData = e.data.labelData,
            id = labelData[0],
            maxLetters = labelData[1],
            isVisible = labelData[2],
            /*3, 4, 5*/_positionHigh_x = labelData[3], _positionHigh_y = labelData[4], _positionHigh_z = labelData[5],
            /*6, 7, 8*/_positionLow_x = labelData[6], _positionLow_y = labelData[7], _positionLow_z = labelData[8],
            /*9*/_size = labelData[9],
            /*10, 11, 12*/_offset_x = labelData[10], _offset_y = labelData[11], _offset_z = labelData[12],
            /*13, 14, 15, 16*/_color_x = labelData[13], _color_y = labelData[14], _color_z = labelData[15], _color_w = labelData[16],
            /*17*/_rotation = labelData[17],
            /*18, 19, 20*/_alignedAxis_x = labelData[18], _alignedAxis_y = labelData[19], _alignedAxis_z = labelData[20],
            /*21*/_fontIndex = labelData[21],
            /*22*/_outline = labelData[22],
            /*23, 24, 25, 26*/_outlineColor_x = labelData[23], _outlineColor_y = labelData[24], _outlineColor_z = labelData[25], _outlineColor_w = labelData[26],
            /*27, 28, 29*/_pickingColor_x = labelData[27], _pickingColor_y = labelData[28], _pickingColor_z = labelData[29]
         

        let _vertexArr = new Float32Array(maxLetters * 12),
            _texCoordArr = new Float32Array(maxLetters * 24),
            _gliphParamArr = new Float32Array(maxLetters * 24),
            _positionHighArr = new Float32Array(maxLetters * 18),
            _positionLowArr = new Float32Array(maxLetters * 18),
            _sizeArr = new Float32Array(maxLetters * 6),
            _offsetArr = new Float32Array(maxLetters * 18),
            _rgbaArr = new Float32Array(maxLetters * 24),
            _rotationArr = new Float32Array(maxLetters * 6),
            _alignedAxisArr = new Float32Array(maxLetters * 18),
            _fontIndexArr = new Float32Array(maxLetters * 6),
            _outlineArr = new Float32Array(maxLetters * 6),
            _outlineColorArr = new Float32Array(maxLetters * 24),
            _pickingColorArr = new Float32Array(maxLetters * 18);
        
        for (let i = 0; i < maxLetters; i++) {
            if (isVisible !== 0) {
                concatTypedArrays(_vertexArr, i, [0, 0, 0, -1, 1, -1, 1, -1, 1, 0, 0, 0]);
            } else {
                concatTypedArrays(_vertexArr, i, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            }

            concatTypedArrays(_texCoordArr, i, [0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0]);
            concatTypedArrays(_gliphParamArr, i, [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0]);

            var x = _positionHigh_x, y = _positionHigh_y, z = _positionHigh_z, w;
            concatTypedArrays(_positionHighArr, i, [x, y, z, x, y, z, x, y, z, x, y, z, x, y, z, x, y, z]);

            x = _positionLow_x; y = _positionLow_y; z = _positionLow_z;
            concatTypedArrays(_positionLowArr, i, [x, y, z, x, y, z, x, y, z, x, y, z, x, y, z, x, y, z]);

            x = _size;
            concatTypedArrays(_sizeArr, i, [x, x, x, x, x, x]);

            x = _offset_x; y = _offset_y; z = _offset_z;
            concatTypedArrays(_offsetArr, i, [x, y, z, x, y, z, x, y, z, x, y, z, x, y, z, x, y, z]);

            x = _color_x; y = _color_y; z = _color_z; w = _color_w;
            concatTypedArrays(_rgbaArr, i, [x, y, z, w, x, y, z, w, x, y, z, w, x, y, z, w, x, y, z, w, x, y, z, w]);

            x = _rotation;
            concatTypedArrays(_rotationArr, i, [x, x, x, x, x, x]);

            x = _alignedAxis_x; y = _alignedAxis_y; z = _alignedAxis_z;
            concatTypedArrays(_alignedAxisArr, i, [x, y, z, x, y, z, x, y, z, x, y, z, x, y, z, x, y, z]);

            x = _fontIndex;
            concatTypedArrays(_fontIndexArr, i, [x, x, x, x, x, x]);

            x = _outline;
            concatTypedArrays(_outlineArr, i, [x, x, x, x, x, x]);

            x = _outlineColor_x; y = _outlineColor_y; z = _outlineColor_z; w = _outlineColor_w;
            concatTypedArrays(_outlineColorArr, i, [x, y, z, w, x, y, z, w, x, y, z, w, x, y, z, w, x, y, z, w, x, y, z, w]);

            x = _pickingColor_x / 255; y = _pickingColor_y / 255; z = _pickingColor_z / 255;
            concatTypedArrays(_pickingColorArr, i, [x, y, z, x, y, z, x, y, z, x, y, z, x, y, z, x, y, z]);
        }

        self.postMessage({
                id: id,
                vertexArr: _vertexArr,
                texCoordArr: _texCoordArr,
                gliphParamArr: _gliphParamArr,
                positionHighArr: _positionHighArr,
                positionLowArr: _positionLowArr,
                sizeArr: _sizeArr,
                offsetArr: _offsetArr,
                rgbaArr: _rgbaArr,
                rotationArr: _rotationArr,
                alignedAxisArr: _alignedAxisArr,
                fontIndexArr: _fontIndexArr,
                outlineArr: _outlineArr,
                outlineColorArr: _outlineColorArr,
                pickingColorArr: _pickingColorArr
             }, [
                    _vertexArr.buffer,
                    _texCoordArr.buffer,
                    _gliphParamArr.buffer,
                    _positionHighArr.buffer,
                    _positionLowArr.buffer,
                    _sizeArr.buffer,
                    _offsetArr.buffer,
                    _rgbaArr.buffer,
                    _rotationArr.buffer,
                    _alignedAxisArr.buffer,
                    _fontIndexArr.buffer,
                    _outlineArr.buffer,
                    _outlineColorArr.buffer,
                    _pickingColorArr.buffer
            ]);
    }`;class ti{constructor(e={}){this.__id=ti.__counter__++,this._position=Xe(e.position),this._positionHigh=new m,this._positionLow=new m,m.doubleToTwoFloats(this._position,this._positionHigh,this._positionLow),this._rotation=e.rotation||0,this._color=Ze(e.color),this._alignedAxis=Xe(e.alignedAxis),this._offset=Xe(e.offset),this._visibility=e.visibility!=null?e.visibility:!0,this._entity=null,this._handler=null,this._handlerIndex=-1,this._isReady=!1,this._lockId=he}setPosition(e,t,i){this._position.x=e,this._position.y=t,this._position.z=i,m.doubleToTwoFloats(this._position,this._positionHigh,this._positionLow),this._isReady&&this._handler?this._handler.setPositionArr(this._handlerIndex,this._positionHigh,this._positionLow):this._lockId!==he&&(this._lockId=Ae)}setPosition3v(e){this._position.x=e.x,this._position.y=e.y,this._position.z=e.z,m.doubleToTwoFloats(e,this._positionHigh,this._positionLow),this._isReady&&this._handler?this._handler.setPositionArr(this._handlerIndex,this._positionHigh,this._positionLow):this._lockId!==he&&(this._lockId=Ae)}getPosition(){return this._position}setOffset(e,t,i){this._offset.x=e,this._offset.y=t,i!=null&&(this._offset.z=i),this._isReady&&this._handler?this._handler.setOffsetArr(this._handlerIndex,this._offset):this._lockId!==he&&(this._lockId=Ae)}setOffset3v(e){this.setOffset(e.x,e.y,e.z)}getOffset(){return this._offset}setRotation(e){e!==this._rotation&&(this._rotation=e,this._isReady&&this._handler?this._handler.setRotationArr(this._handlerIndex,e):this._lockId!==he&&(this._lockId=Ae))}getRotation(){return this._rotation}setOpacity(e){e!==this._color.w&&(e!=null&&(this._color.w=e),this._isReady&&this._handler?this._handler.setRgbaArr(this._handlerIndex,this._color):this._lockId!==he&&(this._lockId=Ae))}setColor(e,t,i,r){(r!==this._color.w||e!==this._color.x||t!==this._color.y||this._color.z!==i)&&(this._color.x=e,this._color.y=t,this._color.z=i,r!=null&&(this._color.w=r),this._isReady&&this._handler?this._handler.setRgbaArr(this._handlerIndex,this._color):this._lockId!==he&&(this._lockId=Ae))}setColor4v(e){this.setColor(e.x,e.y,e.z,e.w)}setColorHTML(e){this.setColor4v($e(e))}getColor(){return this._color}setVisibility(e){e!==this._visibility&&(this._visibility=e,this._isReady&&this._handler?this._handler.setVisibility(this._handlerIndex,e):this._lockId!==he&&(this._lockId=Ae))}getVisibility(){return this._visibility}setAlignedAxis(e,t,i){this._alignedAxis.x=e,this._alignedAxis.y=t,this._alignedAxis.z=i,this._isReady&&this._handler?this._handler.setAlignedAxisArr(this._handlerIndex,this._alignedAxis):this._lockId!==he&&(this._lockId=Ae)}setAlignedAxis3v(e){this.setAlignedAxis(e.x,e.y,e.z)}getAlignedAxis(){return this._alignedAxis}remove(){this._entity=null,this._handler&&this._handler.remove(this)}setPickingColor3v(e){this._isReady&&this._handler?this._handler.setPickingColorArr(this._handlerIndex,e):this._lockId!==he&&(this._lockId=Ae)}serializeWorkerData(e){return this._handler?new Float32Array([]):null}}ti.__counter__=0;class Na extends ti{constructor(e={}){super(e),this._handler=null,this._src=e.src||null,this._image=e.image||null,this._scale=1,this._width=e.width||(e.size?e.size[0]:30),this._height=e.height||(e.size?e.size[1]:30)}setSrc(e){this._src=e;let t=this._handler;if(t&&e&&e.length){let i=t._entityCollection.renderNode;if(i&&i.renderer){let r=i.renderer.billboardsTextureAtlas,s=this;r.loadImage(e,function(n){n.__nodeIndex!=null&&r.get(n.__nodeIndex)?(s._image=n,t.setTexCoordArr(s._handlerIndex,r.get(s._image.__nodeIndex).texCoords)):(r.addImage(n),r.createTexture(),s._image=n,i.updateBillboardsTexCoords())})}}}getSrc(){return this._src}setImage(e){this.setSrc(e.src)}getImage(){return this._image}setSize(e,t){this._width=e,this._height=t,this._handler&&this._handler.setSizeArr(this._handlerIndex,e*this._scale,t*this._scale)}getSize(){return{width:this._width,height:this._height}}setWidth(e){this.setSize(e,this._height)}getWidth(){return this._width}setHeight(e){this.setSize(this._width,e)}getHeight(){return this._height}}var ke;(function(h){h[h.POINT=1]="POINT",h[h.LINESTRING=2]="LINESTRING",h[h.POLYGON=3]="POLYGON",h[h.MULTIPOLYGON=4]="MULTIPOLYGON",h[h.MULTILINESTRING=5]="MULTILINESTRING"})(ke||(ke={}));const Da={POINT:1,LINESTRING:2,POLYGON:3,MULTIPOLYGON:4,MULTILINESTRING:5};class Ye{constructor(e={}){this.__id=Ye.__counter__++,this._entity=null,this._handler=null,this._handlerIndex=-1,this._polyVerticesHighMerc=[],this._polyVerticesLowMerc=[],this._polyVerticesLength=-1,this._polyIndexesLength=-1,this._polyVerticesHandlerIndex=-1,this._polyIndexesHandlerIndex=-1,this._lineVerticesHighMerc=[],this._lineVerticesLowMerc=[],this._lineVerticesLength=-1,this._lineOrdersLength=-1,this._lineIndexesLength=-1,this._lineColorsLength=-1,this._lineThicknessLength=-1,this._lineVerticesHandlerIndex=-1,this._lineOrdersHandlerIndex=-1,this._lineIndexesHandlerIndex=-1,this._lineThicknessHandlerIndex=-1,this._lineColorsHandlerIndex=-1,this._type=e.type&&Ye.getType(e.type)||ke.POINT,this._coordinates=e.coordinates||[],this._extent=Ye.getExtent({type:e.type||"POINT",coordinates:e.coordinates||[]},this._coordinates),e.style=e.style||{},this._style={fillColor:Ze(e.style.fillColor,new ee(.19,.62,.85,.4)),lineColor:Ze(e.style.lineColor,new ee(.19,.62,.85,1)),strokeColor:Ze(e.style.strokeColor,new ee(1,1,1,.95)),lineWidth:e.style.lineWidth||3,strokeWidth:e.style.strokeWidth||0},this._visibility=e.visibility||!0,this._pickingReady=!1}get id(){return this.__id}get type(){return this._type}static getType(e){return Da[e.toUpperCase()]}static getExtent(e,t){let i=new U(new P(180,90),new P(-180,-90)),r=Ye.getType(e.type);if(r===ke.POINT){let s=e.coordinates[0],n=e.coordinates[1];i.southWest.lon=s,i.southWest.lat=n,i.northEast.lon=s,i.northEast.lat=n,t&&(t[0]=s)&&(t[1]=n)}else if(r===ke.LINESTRING){let s=e.coordinates;for(let n=0;n<s.length;n++){let a=s[n][0],o=s[n][1];a<i.southWest.lon&&(i.southWest.lon=a),o<i.southWest.lat&&(i.southWest.lat=o),a>i.northEast.lon&&(i.northEast.lon=a),o>i.northEast.lat&&(i.northEast.lat=o),t&&(t[n]=[a,o])}}else if(r===ke.POLYGON){let s=e.coordinates;for(let n=0;n<s.length;n++){let a=s[n];t&&(t[n]=[]);for(let o=0;o<a.length;o++){let l=a[o],c=l[0],d=l[1];c<i.southWest.lon&&(i.southWest.lon=c),d<i.southWest.lat&&(i.southWest.lat=d),c>i.northEast.lon&&(i.northEast.lon=c),d>i.northEast.lat&&(i.northEast.lat=d),t&&(t[n][o]=[c,d])}}}else if(r===ke.MULTIPOLYGON){let s=e.coordinates;for(let n=0;n<s.length;n++){let a=s[n];t&&(t[n]=[]);for(let o=0;o<a.length;o++){let l=a[o];t&&(t[n][o]=[]);for(let c=0;c<l.length;c++){let d=l[c],f=d[0],_=d[1];f<i.southWest.lon&&(i.southWest.lon=f),_<i.southWest.lat&&(i.southWest.lat=_),f>i.northEast.lon&&(i.northEast.lon=f),_>i.northEast.lat&&(i.northEast.lat=_),t&&(t[n][o][c]=[f,_])}}}}else if(r===ke.MULTILINESTRING){let s=e.coordinates;for(let n=0;n<s.length;n++){let a=s[n];t&&(t[n]=[]);for(let o=0;o<a.length;o++){let l=a[o],c=l[0],d=l[1];c<i.southWest.lon&&(i.southWest.lon=c),d<i.southWest.lat&&(i.southWest.lat=d),c>i.northEast.lon&&(i.northEast.lon=c),d>i.northEast.lat&&(i.northEast.lat=d),t&&(t[n][o]=[c,d])}}}else i.southWest.lon=i.southWest.lat=i.northEast.lon=i.northEast.lat=0,t&&(t[0]=0)&&(t[1]=0);return i}setGeometry(e){let t=this._handler;return t&&(this.remove(),this._type=Ye.getType(e.type||"Point"),this._extent=Ye.getExtent(e,this._coordinates),t.add(this)),this}setFillColor(e,t,i,r=1){let s=this._style.fillColor;return(s.w===0&&r!==0||s.w!==0&&r===0)&&(this._pickingReady=!1),s.x=e,s.y=t,s.z=i,s.w=r,this._handler&&this._handler.setPolyColorArr(this,s),this}overlaps(e){return this._extent.overlaps(e)}setFillColor4v(e){return this.setFillColor(e.x,e.y,e.z,e.w)}setStrokeColor(e,t,i,r=1){let s=this._style.strokeColor;return(s.w===0&&r!==0||s.w!==0&&r===0)&&(this._pickingReady=!1),s.x=e,s.y=t,s.z=i,s.w=r,this._handler&&this._handler.setLineStrokeColorArr(this,s),this}setLineColor(e,t,i,r=1){let s=this._style.lineColor;return(s.w===0&&r!==0||s.w!==0&&r===0)&&(this._pickingReady=!1),s.x=e,s.y=t,s.z=i,s.w=r,this._handler&&this._handler.setLineColorArr(this,s),this}setStrokeColor4v(e){return this.setStrokeColor(e.x,e.y,e.z,e.w)}setLineColor4v(e){return this.setLineColor(e.x,e.y,e.z,e.w)}setStrokeOpacity(e){let t=this._style.strokeColor;return t.w=e,this.setStrokeColor(t.x,t.y,t.z,e)}setLineOpacity(e){let t=this._style.lineColor;return t.w=e,this.setLineColor(t.x,t.y,t.z,e)}setStrokeWidth(e){return this._style.strokeWidth=e,this._pickingReady=!1,this._handler&&this._handler.setLineStrokeArr(this,e),this}bringToFront(){return this._handler&&this._handler.bringToFront(this),this}setLineWidth(e){return this._style.lineWidth=e,this._pickingReady=!1,this._handler&&this._handler.setLineThicknessArr(this,e),this}setFillOpacity(e){let t=this._style.fillColor;return(t.w===0&&e!==0||t.w!==0&&e===0)&&(this._pickingReady=!1),t.w=e,this._handler&&this._handler.setPolyColorArr(this,t),this}setVisibility(e){return this._visibility=e,this._handler&&this._handler.setGeometryVisibility(this),this}getVisibility(){return this._visibility}remove(){this._handler&&this._handler.remove(this)}getExtent(){return this._extent.clone()}getType(){return this._type}}Ye.__counter__=0;class Oe{constructor(e,t){this.p0=e||new m,this.p1=t||new m}getMagnitude(){return this.p0.distance(this.p1)}getSphereIntersection(e){let t=this.p0,i=this.p1,r=e.center.x,s=e.center.y,n=e.center.z,a=t.x,o=t.y,l=t.z,c=i.x-a,d=i.y-o,f=i.z-l,_=c*c+d*d+f*f,g=2*(a*c+o*d+l*f-c*r-d*s-f*n),v=a*a-2*a*r+r*r+o*o-2*o*s+s*s+l*l-2*l*n+n*n-e.radius*e.radius,u=g*g-4*_*v;if(u<0)return[];let p=(-g-Math.sqrt(u))/(2*_),b=new m(t.x*(1-p)+p*i.x,t.y*(1-p)+p*i.y,t.z*(1-p)+p*i.z);if(u==0)return[b];let w=(-g+Math.sqrt(u))/(2*_),y=new m(t.x*(1-w)+w*i.x,t.y*(1-w)+w*i.y,t.z*(1-w)+w*i.z);return Math.abs(p-.5)<Math.abs(w-.5)?[b,y]:[y,b]}intersects(e,t,i){let r=this.p0.sub(e.p0),s=e.p1.sub(e.p0);if(Math.abs(s.x)<je&&Math.abs(s.y)<je&&Math.abs(s.z)<je)return!1;let n=this.p1.sub(this.p0);if(Math.abs(n.x)<je&&Math.abs(n.y)<je&&Math.abs(n.z)<je)return!1;let a=r.x*s.x+r.y*s.y+r.z*s.z,o=s.x*n.x+s.y*n.y+s.z*n.z,l=r.x*n.x+r.y*n.y+r.z*n.z,c=s.x*s.x+s.y*s.y+s.z*s.z,f=(n.x*n.x+n.y*n.y+n.z*n.z)*c-o*o;if(Math.abs(f)<je)return!1;let g=(a*o-l*c)/f;if(t.x=this.p0.x+g*n.x,t.y=this.p0.y+g*n.y,t.z=this.p0.z+g*n.z,i){let v=(a+o*g)/c;i.x=e.p0.x+v*s.x,i.y=e.p0.y+v*s.y,i.z=e.p0.z+v*s.z}return!0}getNearestDistancePoint(e,t){let i=this.p0,r=this.p1,s=this.getMagnitude(),n=((e.x-i.x)*(r.x-i.x)+(e.y-i.y)*(r.y-i.y)+(e.z-i.z)*(r.z-i.z))/(s*s);return t.x=i.x+n*(r.x-i.x),t.y=i.y+n*(r.y-i.y),t.z=i.z+n*(r.z-i.z),!(n<0||n>1)}}let re=class Ue{constructor(e=m.ZERO,t=m.ZERO){this.origin=e,this.direction=t}static get OUTSIDE(){return 0}static get INSIDE(){return 1}static get INPLANE(){return 2}static get AWAY(){return 3}set(e,t){return this.origin=e,this.direction=t,this}getPoint(e){return m.add(this.origin,this.direction.scaleTo(e))}hitTriangle(e,t,i,r){let s=t.sub(e),n=i.sub(e),a=s.cross(n),o=this.origin.sub(e),l=-a.dot(o),c=a.dot(this.direction);if(Math.abs(c)<je)return l===0?(r.copy(this.origin),Ue.INPLANE):Ue.OUTSIDE;let d=l/c;if(r.copy(this.origin.add(this.direction.scaleTo(d))),d<0)return Ue.AWAY;let f=s.dot(s),_=s.dot(n),g=n.dot(n),v=r.sub(e),u=v.dot(s),p=v.dot(n),b=_*_-f*g,w=(_*p-g*u)/b;if(w<0||w>1)return Ue.OUTSIDE;let y=(_*u-f*p)/b;return y<0||w+y>1?Ue.OUTSIDE:Ue.INSIDE}hitPlane(e,t,i,r){let s=m.sub(t,e),n=m.sub(i,e),a=s.cross(n),o=m.sub(this.origin,e),l=-a.dot(o),c=a.dot(this.direction);if(Math.abs(c)<je&&l===0)return Ue.OUTSIDE;let d=l/c;if(d<0)return Ue.OUTSIDE;let f=this.direction.scaleTo(d);return r.x=this.origin.x+f.x,r.y=this.origin.y+f.y,r.z=this.origin.z+f.z,Ue.INSIDE}hitSphere(e){let t=e.radius,i=e.center,r=this.origin,s=this.direction,n=m.sub(i,r);if(n.dot(s)<0){var a=n.length();if(a>t)return null;if(a===t)return r.clone();let c=i.projToRay(r,n);var o=m.sub(c,i).length();let f=Math.sqrt(t*t-o*o)-m.sub(c,r).length();return m.add(r,s.scaleTo(f))}else{let c=i.projToRay(r,s);var l=m.sub(i,c).length();if(l>e.radius)return null;{let d=Math.sqrt(t*t-l*l),f;return c.subA(r),n.length()>t?f=c.length()-d:f=c.length()+d,m.add(r,s.scaleTo(f))}}}hitBox(e){}};function Ha(h){const e=[[0,0,0]],t=[[0,0]],i=[[0,0,0]],r=[e,t,i];let s=[[],[],[]];const n=[],a=[];let o,l=["default"],c="default",d="default";function f(){o&&o.data.vertices.length&&(o=null)}function _(){if(!o){const b=[],w=[],y=[];s=[b,w,y],o={object:d,groups:l,material:c,data:{vertices:b,textures:w,normals:y}},a.push(o)}}function g(b){b.split("/").forEach((y,x)=>{if(!y)return;const T=parseInt(y),A=T+(T>=0?0:r[x].length);s[x].push(...r[x][A])})}const v={v(b){e.push(b.map(parseFloat))},vn(b){i.push(b.map(parseFloat))},vt(b){t.push(b.map(parseFloat))},f(b){_();const w=b.length-2;for(let y=0;y<w;++y)g(b[0]),g(b[y+1]),g(b[y+2])},s:()=>{},mtllib(b,w){n.push(w)},usemtl(b,w){c=w,f()},g(b){l=b,f()},o(b,w){d=w,f()}},u=/(\w*)(?: )*(.*)/,p=h.split(`
`);for(let b=0;b<p.length;++b){const w=p[b].trim();if(w===""||w.startsWith("#"))continue;const y=u.exec(w);if(!y)continue;const[,x,T]=y,A=w.split(/\s+/).slice(1),E=v[x];if(!E){console.warn("unhandled keyword:",x);continue}E(A,T)}for(const b of a)b.data=Object.fromEntries(Object.entries(b.data).filter(([w,y])=>y.length>0));return{geometries:a,materialLibs:n}}function Oa(h){return{geometries:h.geometries.map(t=>{const i=t.data.vertices,r=t.data.normals,s=t.data.textures;Ua(t.data,0);let n=[],a=[],o=[];for(let l=0;l<i.length;l+=3){const c=i[l],d=i[l+1],f=i[l+2];n.push(c,d,f)}for(let l=0;l<r.length;l+=3){const c=r[l],d=r[l+1],f=r[l+2];a.push(c,d,-f)}for(let l=0;l<s.length;l+=2){const c=s[l],d=1-s[l+1];o.push(c,d)}return{object:t.object,groups:t.groups,material:t.material,data:{vertices:n,normals:a,textures:o}}}),materialLibs:h.materialLibs}}function Ua(h,e){const t=Math.cos(e),i=Math.sin(e),r=h.vertices,s=h.normals;for(let n=0;n<r.length;n+=3){const a=r[n],o=r[n+1],l=r[n+2];r[n]=a*t+l*i,r[n+1]=o,r[n+2]=-a*i+l*t;const c=s[n],d=s[n+1],f=s[n+2];s[n]=c*t+f*i,s[n+1]=d,s[n+2]=-c*i+f*t}return{vertices:r,normals:s}}function Va(h){return h instanceof Array?new Float32Array(h):typeof h=="string"?sr(h):new Float32Array([1,1,1,1])}class Z{constructor(e={}){if(this._name=e.name||"noname",this._vertices=e.vertices||[],this._numVertices=this._vertices.length/3,this._texCoords=e.texCoords||new Array(2*this._numVertices),e.center&&Z.centering(this._vertices),this._src=e.src||null,this.color=Va(e.color),e.scale){let t=e.scale,i;typeof t=="number"?i=new m(t,t,t):i=t,Z.scale(this._vertices,i)}if(e.indices)this._indices=e.indices,this._normals=e.normals||[];else{this._normals=Z.getNormals(this._vertices),this._indices=new Array(this._vertices.length/3);for(let t=0,i=this._indices.length;t<i;t++)this._indices[t]=t}}static centering(e){let t=pe,i=pe,r=pe,s=ve,n=ve,a=ve;for(let d=0,f=e.length;d<f;d+=3){let _=e[d],g=e[d+1],v=e[d+2];_<t&&(t=_),g<i&&(i=g),v<r&&(r=v),_>s&&(s=_),g>n&&(n=g),v>a&&(a=v)}let o=t+(s-t)*.5,l=i+(n-i)*.5,c=r+(a-r)*.5;for(let d=0,f=e.length;d<f;d+=3)e[d]-=o,e[d+1]-=l,e[d+2]-=c}centering(){return Z.centering(this._vertices),this}applyMat4(e){for(let t=0,i=this._vertices.length;t<i;t+=3){let r=new m(this._vertices[t],this._vertices[t+1],this._vertices[t+2]),s=new m(this._normals[t],this._normals[t+1],this._normals[t+2]);r=e.mulVec3(r),s=e.mulVec3(s),this._vertices[t]=r.x,this._vertices[t+1]=r.y,this._vertices[t+2]=r.z,this._normals[t]=s.x,this._normals[t+1]=s.y,this._normals[t+2]=s.z}return this}scale(e){return Z.scale(this._vertices,e),this}translate(e){for(let t=0,i=this._vertices.length;t<i;t+=3)this._vertices[t]+=e.x,this._vertices[t+1]+=e.y,this._vertices[t+2]+=e.z;return this}get src(){return this._src}set src(e){this._src=e}get name(){return this._name}get vertices(){return this._vertices}get normals(){return this._normals}get indices(){return this._indices}get texCoords(){return this._texCoords}get numVertices(){return this._numVertices}static scale(e,t){for(let i=0;i<e.length;i+=3)e[i]*=t.x,e[i+1]*=t.y,e[i+2]*=t.z}static centroid(e){let t=1e3,i=1e3,r=1e3,s=-1e3,n=-1e3,a=-1e3;for(let o=0;o<e.length;o+=3){let l=e[o],c=e[o+1],d=e[o+2];l<t&&(t=l),c<i&&(i=c),d<r&&(r=d),l>s&&(s=l),c>n&&(n=c),d>a&&(a=d)}return[t+(s-t)*.5,i+(n-i)*.5,r+(a-r)*.5]}static translate(e,t){for(let i=0;i<e.length;i+=3)e[i]+=t[0],e[i+1]+=t[1],e[i+2]+=t[2]}static getNormals(e){let t=new Array(e.length);for(let i=0;i<e.length;i+=9){let r=i,s=i+3,n=i+6,a=e[r],o=e[r+1],l=e[r+2],c=e[s],d=e[s+1],f=e[s+2],_=e[n],g=e[n+1],v=e[n+2],u=c-a,p=d-o,b=f-l,w=_-a,y=g-o,x=v-l,T=p*x-b*y,A=b*w-u*x,E=u*y-p*w,C=Math.sqrt(T*T+A*A+E*E);T/=C,A/=C,E/=C,t[r]=T,t[r+1]=A,t[r+2]=E,t[s]=T,t[s+1]=A,t[s+2]=E,t[n]=T,t[n+1]=A,t[n+2]=E}return t}static createSphere(e=16,t=16,i=1,r=0,s=0,n=0){let a=[],o=[],l=[];for(let c=0;c<=t;c++){let d=c*Math.PI/t,f=Math.sin(d),_=Math.cos(d);for(let g=0;g<=e;g++){let v=g*2*Math.PI/e,u=Math.sin(v),b=Math.cos(v)*f+r,w=_+s,y=u*f+n;l.push(b),l.push(w),l.push(y),a.push(i*b),a.push(i*w),a.push(i*y)}}for(let c=0;c<t;c++)for(let d=0;d<e;d++){let f=c*(e+1)+d,_=f+e+1;o.push(f),o.push(f+1),o.push(_),o.push(_),o.push(f+1),o.push(_+1)}return new Z({vertices:a,normals:l,indices:o})}static createDisc(e=1,t=0,i=8,r=!0,s=0,n=0,a=0,o=0){let l=[],c=[],d=[],f=0,_=Math.PI*2,g=r?1:-1,v=s;for(let p=1;p<=i;p++)l.push(n,t*g+a,o),d.push(0,g,0),s++;let u=s;for(let p=0;p<=i;p++){let w=p/i*_+f,y=Math.cos(w),x=Math.sin(w);l.push(e*x+n,t*g+a,e*y+o),d.push(0,g,0),s++}for(let p=0;p<i;p++){let b=v+p,w=u+p;r?c.push(w,w+1,b):c.push(w+1,w,b)}return new Z({vertices:l,normals:d,indices:c})}static getFrustumScaleByCameraAngles(e,t,i){return new m(2*e*Math.tan(st*t),2*e*Math.tan(st*i),e)}static getFrustumScaleByCameraAspectRatio(e,t,i){let r=Vn*Math.atan(Math.tan(st*t)/i);return Z.getFrustumScaleByCameraAngles(e,t,r)}static createFrustum(e=1,t=1,i=1,r=0,s=0,n=0){return t*=.5,i*=.5,new Z({vertices:[0+r,0+s,0+n,-1*t+r,1*i+s,-1*e+n,1*t+r,1*i+s,-1*e+n,0+r,0+s,0+n,1*t+r,-1*i+s,-1*e+n,-1*t+r,-1*i+s,-1*e+n,0+r,0+s,0+n,1*t+r,1*i+s,-1*e+n,1*t+r,-1*i+s,-1*e+n,0+r,0+s,0+n,-1*t+r,-1*i+s,-1*e+n,-1*t+r,1*i+s,-1*e+n,0+r,0+s,0+n,1*t+r,1*i+s,-1*e+n,-1*t+r,1*i+s,-1*e+n,0+r,0+s,0+n,-1*t+r,-1*i+s,-1*e+n,1*t+r,-1*i+s,-1*e+n,0+r,0+s,0+n,1*t+r,-1*i+s,-1*e+n,1*t+r,1*i+s,-1*e+n,0+r,0+s,0+n,-1*t+r,1*i+s,-1*e+n,-1*t+r,-1*i+s,-1*e+n]})}static createCylinder(e=1,t=1,i=1,r=32,s=1,n=!0,a=!0,o=0,l=0,c=0){let d=[],f=[],_=[],g=0,v=Math.PI*2,u=0,p=[],b=new m,w=(t-e)/i;for(let y=0;y<=s;y++){let x=[],T=y/s,A=T*(t-e)+e;for(let E=0;E<=r;E++){let B=E/r*v+g,F=Math.sin(B),k=Math.cos(B);d.push(A*F+o,-T*i+i+l,A*k+c),b.set(F,w,k).normalize(),_.push(b.x,b.y,b.z),x.push(u++)}p.push(x)}for(let y=0;y<r;y++)for(let x=0;x<s;x++){let T=p[x][y],A=p[x+1][y],E=p[x+1][y+1],C=p[x][y+1];f.push(T,A,C),f.push(A,E,C)}if(e!==0&&n){let y=Z.createDisc(e,i,r,!0,u,o,l,c);d.push(...y.vertices),_.push(...y.normals),f.push(...y.indices)}if(t!==0&&a){let y=Z.createDisc(t,0,r,!1,u+(n?1+2*r:0),o,l,c);d.push(...y.vertices),_.push(...y.normals),f.push(...y.indices)}return new Z({vertices:d,normals:_,indices:f})}static createCube(e=1,t=1,i=1,r=0,s=0,n=0){let a=e*.5+r,o=t*.5+s,l=i*.5+n;return new Z({vertices:[-a,-o,l,a,-o,-l,a,-o,l,-a,-o,l,-a,-o,-l,a,-o,-l,-a,o,l,a,o,l,a,o,-l,-a,o,l,a,o,-l,-a,o,-l,-a,-o,l,a,-o,l,-a,o,l,-a,o,l,a,-o,l,a,o,l,-a,-o,-l,-a,o,-l,a,-o,-l,-a,o,-l,a,o,-l,a,-o,-l,a,-o,l,a,-o,-l,a,o,l,a,o,l,a,-o,-l,a,o,-l,-a,-o,l,-a,o,l,-a,-o,-l,-a,o,l,-a,o,-l,-a,-o,-l]})}static createArrow(e=0,t=2.1,i=-15){return new Z({vertices:[0,t,0,7,0,6,0,0,i,0,0,e,7,0,6,0,t,0,-7,0,6,0,0,e,0,t,0,-7,0,6,0,t,0,0,0,i,-7,0,6,0,0,i,0,0,e,0,0,e,0,0,i,7,0,6]})}static async loadObj(e){return(await fetch(e,{mode:"cors"}).then(i=>i.text()).then(i=>Oa(Ha(i))).catch(()=>[])).geometries.map(({data:{vertices:i,normals:r,textures:s}})=>new Z({vertices:i,normals:r,texCoords:s}))}merge(e){const t=[...this._vertices,...e.vertices],i=[...this._normals,...e.normals],r=[...this._texCoords,...e.texCoords],s=this._vertices.length/3,n=[...this._indices,...e.indices.map(a=>a+s)];return new Z({name:`${this._name}_${e.name}`,vertices:t,texCoords:r,indices:n,normals:i,color:this.color})}}class Ga{constructor(e){var i;this._handlerIndex=-1,this._tag=e.tag||"none",this.instanced=!0,this._entity=null,this._position=Xe(e.position),this._positionHigh=new m,this._positionLow=new m,m.doubleToTwoFloats(this._position,this._positionHigh,this._positionLow),this._pitch=e.pitch||0,this._yaw=e.yaw||0,this._roll=e.roll||0,this._pitchRad=this._pitch*D,this._yawRad=this._yaw*D,this._rollRad=this._roll*D,this._scale=Xe(e.scale,new m(1,1,1)),this._translate=Xe(e.translate,new m),this._color=Ze(e.color),this._qRot=N.IDENTITY,this._handler=null,this._handlerIndex=-1,this._tagData=null,this._tagDataIndex=-1;let t=e.object3d;(!e.object3d||((i=e.object3d)==null?void 0:i.vertices.length)===0)&&(t=new Z),e.objSrc&&(this.setObjectSrc(e.objSrc),this._objectSrc=e.objSrc),this._object3d=t,e.textureSrc&&this.setTextureSrc(e.textureSrc),this._visibility=e.visibility!=null?e.visibility:!0,this._children=[],this._direction=new m,this._qNorthFrame=new N}get tag(){return this._tag}getPosition(){return this._position}getPitch(){return this._pitch}getYaw(){return this._yaw}getRoll(){return this._roll}get object3d(){return this._object3d}get vertices(){return this._object3d.vertices}get normals(){return this._object3d.normals}get texCoords(){return this._object3d.texCoords}get indices(){return this._object3d.indices}setOpacity(e){this._color.w=e,this.setColor(this._color.x,this._color.y,this._color.z,e)}setColor(e,t,i,r){this._color.x=e,this._color.y=t,this._color.z=i,r!=null&&(this._color.w=r),this._handler&&this._handler.setRgbaArr(this._tagData,this._tagDataIndex,this._color)}setColor4v(e){this._color.x=e.x,this._color.y=e.y,this._color.z=e.z,e.w!=null&&(this._color.w=e.w),this._handler&&this._handler.setRgbaArr(this._tagData,this._tagDataIndex,this._color)}setVisibility(e){this._visibility=e,this._handler&&this._handler.setVisibility(this._tagData,this._tagDataIndex,e)}getVisibility(){return this._visibility}setPosition(e,t,i){this._position.x=e,this._position.y=t,this._position.z=i,m.doubleToTwoFloats(this._position,this._positionHigh,this._positionLow),this._handler&&this._handler.setPositionArr(this._tagData,this._tagDataIndex,this._positionHigh,this._positionLow),this.updateRotation()}setPosition3v(e){this._position.x=e.x,this._position.y=e.y,this._position.z=e.z,m.doubleToTwoFloats(e,this._positionHigh,this._positionLow),this._handler&&this._handler.setPositionArr(this._tagData,this._tagDataIndex,this._positionHigh,this._positionLow),this.updateRotation()}setYaw(e){this._yaw=e,this._yawRad=e*D,this.updateRotation()}setObject(e){this._object3d=e}setObjectSrc(e){this._objectSrc=e,this._handler&&this._handler.setObjectSrc(e,this.tag)}setTextureSrc(e){this._textureSrc=e,this._object3d&&(this._object3d.src=e),this._handler&&this._handler.setTextureTag(e,this.tag)}setColorHTML(e){this.setColor4v($e(e))}setPitch(e){this._pitch=e,this._pitchRad=e*D,this.updateRotation()}setRoll(e){this._roll=e,this._rollRad=e*D,this.updateRotation()}setPitchYawRoll(e,t,i){this._pitch=e,this._yaw=t,this._roll=i,this._pitchRad=e*D,this._yawRad=t*D,this._rollRad=i*D,this.updateRotation()}setScale(e){this._scale.x=this._scale.y=this._scale.z=e,this._handler&&this._handler.setScaleArr(this._tagData,this._tagDataIndex,this._scale)}setScale3v(e){this._scale.copy(e),this._handler&&this._handler.setScaleArr(this._tagData,this._tagDataIndex,e)}getScale(){return this._scale}setTranslate3v(e){this._translate.copy(e),this._handler&&this._handler.setTranslateArr(this._tagData,this._tagDataIndex,e)}getTranslate(){return this._translate}remove(){this._entity=null,this._handler&&this._handler.remove(this)}setPickingColor3v(e){this._handler&&this._handler.setPickingColorArr(this._tagData,this._tagDataIndex,e)}updateRotation(){if(this._handler&&this._handler._planet){this._qNorthFrame=this._handler._planet.getNorthFrameRotation(this._position);let e=N.xRotation(-this._pitchRad),t=N.yRotation(this._yawRad),i=N.zRotation(-this._rollRad);this._qRot=i.mul(e).mul(t).mul(this._qNorthFrame).conjugate(),this._direction=this._qRot.mulVec3(new m(0,0,-1)).normalize(),this._handler.setQRotArr(this._tagData,this._tagDataIndex,this._qRot)}}getDirection(){return this._direction.clone()}}const St={RIGHT:0,LEFT:1,CENTER:2},Ur={left:St.LEFT,right:St.RIGHT,center:St.CENTER};class qa extends ti{constructor(e={}){super(e),this._handler=null,this._text=e.text||"",this._face=ra(e.face,"arial"),this._size=e.size||24,this._outline=e.outline!=null?e.outline:0,this._outlineColor=Ze(e.outlineColor,new ee(0,0,0,1)),this._align=e.align&&Ur[e.align.trim().toLowerCase()]||St.RIGHT,this._fontIndex=0,this._fontAtlas=null,this._isRTL=e.isRTL||!1,this._letterSpacing=e.letterSpacing||0}setText(e){this._text=e.toString(),this._isReady&&this._handler&&this._handler.setText(this._handlerIndex,e,this._fontIndex,this._align,this._letterSpacing,this._isRTL)}setLetterSpacing(e){this._letterSpacing=e,this._isReady&&this._handler&&this._handler.setText(this._handlerIndex,this._text,this._fontIndex,this._align,e,this._isRTL)}getLetterSpacing(){return this._letterSpacing}setRtl(e){this._isRTL=e,this._isReady&&this._handler&&this._handler.setText(this._handlerIndex,this._text,this._fontIndex,this._align,this._letterSpacing,this._isRTL)}getText(){return this._text}setAlign(e){this._align=Ur[e.trim().toLowerCase()],this._isReady&&this._handler?this._handler.setText(this._handlerIndex,this._text,this._fontIndex,this._align,this._letterSpacing,this._isRTL):this._lockId!==he&&(this._lockId=Ae)}getAlign(){return this._align}setFace(e){this._face=e.trim(),this.update()}getFace(){return this._face}setSize(e){e!==this._size&&(this._size=e,this._isReady&&this._handler?this._handler.setSizeArr(this._handlerIndex,e):this._lockId!==he&&(this._lockId=Ae))}getSize(){return this._size}setOutline(e){this._outline=e,this._isReady&&this._handler?this._handler.setOutlineArr(this._handlerIndex,e):this._lockId!==he&&(this._lockId=Ae)}getOutline(){return this._outline}setOpacity(e){super.setOpacity(e),this.setOutlineOpacity(e)}setOutlineColor(e,t,i,r){(r!==this._outlineColor.w||e!==this._outlineColor.x||t!==this._outlineColor.y||i!==this._outlineColor.z)&&(this._outlineColor.x=e,this._outlineColor.y=t,this._outlineColor.z=i,this._outlineColor.w=r,this._isReady&&this._handler?this._handler.setOutlineColorArr(this._handlerIndex,this._outlineColor):this._lockId!==he&&(this._lockId=Ae))}setOutlineColor4v(e){this.setOutlineColor(e.x,e.y,e.z,e.w)}setOutlineColorHTML(e){this.setOutlineColor4v($e(e))}getOutlineColor(){return this._outlineColor}setOutlineOpacity(e){e!==this._outlineColor.w&&(this._outlineColor.w=e,this._isReady&&this._handler?this._handler.setOutlineColorArr(this._handlerIndex,this._outlineColor):this._lockId!==he&&(this._lockId=Ae))}getOutlineOpacity(){return this._outlineColor.w}async update(){if(this._fontAtlas){const e=await this._fontAtlas.getFontIndex(this._face);this._applyFontIndex(e)}}_applyFontIndex(e){this._fontIndex=e,this._isReady&&this._handler?(this._handler.setFontIndexArr(this._handlerIndex,this._fontIndex),this._handler.setText(this._handlerIndex,this._text,this._fontIndex,this._align,this._letterSpacing,this._isRTL)):this._lockId!==he&&(this._lockId=Ae)}assignFontAtlas(e){this._fontAtlas||(this._fontAtlas=e),this.update()}serializeWorkerData(e){return this._handler?new Float32Array([e,this._handler._maxLetters,this.getVisibility()?1:0,this._positionHigh.x,this._positionHigh.y,this._positionHigh.z,this._positionLow.x,this._positionLow.y,this._positionLow.z,this._size,this._offset.x,this._offset.y,this._offset.z,this._color.x,this._color.y,this._color.z,this._color.w,this._rotation,this._alignedAxis.x,this._alignedAxis.y,this._alignedAxis.z,this._fontIndex,this._outline,this._outlineColor.x,this._outlineColor.y,this._outlineColor.z,this._outlineColor.w,this._entity._pickingColor.x,this._entity._pickingColor.y,this._entity._pickingColor.z]):null}}const ht=0,ct=1,dt=2;class wi{constructor(e={}){this.__id=wi.__counter__++,this.visibility=e.visibility!=null?e.visibility:!0,this.pointSize=e.pointSize||3,this.pickingScale=e.pickingScale||0,this._renderNode=null,this._entity=null,this._points=[],this._coordinatesData=[],this._colorData=[],this._pickingColorData=[],this._coordinatesBuffer=null,this._colorBuffer=null,this._pickingColorBuffer=null,this._handler=null,this._handlerIndex=-1,this._buffersUpdateCallbacks=[],this._buffersUpdateCallbacks[ht]=this._createCoordinatesBuffer,this._buffersUpdateCallbacks[ct]=this._createColorBuffer,this._buffersUpdateCallbacks[dt]=this._createPickingColorBuffer,this._changedBuffers=new Array(this._buffersUpdateCallbacks.length),e.points&&this.setPoints(e.points)}clear(){this._points.length=0,this._points=[],this._coordinatesData.length=0,this._coordinatesData=[],this._colorData.length=0,this._colorData=[],this._pickingColorData.length=0,this._pickingColorData=[],this._deleteBuffers()}setVisibility(e){this.visibility=e}getVisibility(){return this.visibility}setRenderNode(e){this._renderNode=e,this._setPickingColors()}remove(){this._entity=null,this._handler&&this._handler.remove(this)}setPoints(e){this.clear();for(let t=0;t<e.length;t++){let i=e[t],r=new m(i[0],i[1],i[2]),s=new ee(i[3],i[4],i[5],i[6]==null?255:i[6]);this._coordinatesData.push(r.x,r.y,r.z),this._colorData.push(s.x/255,s.y/255,s.z/255,s.w/255);let n={_entity:this._entity,_pickingColor:new m,_entityCollection:this._entity?this._entity._entityCollection:null,index:t,position:r,color:s,pointCloud:this,properties:i[7]||{}};this._points.push(n),this._renderNode&&this._renderNode.renderer&&(this._renderNode.renderer.assignPickingColor(n),this._pickingColorData.push(n._pickingColor.x/255,n._pickingColor.y/255,n._pickingColor.z/255,1))}this._changedBuffers[ht]=!0,this._changedBuffers[ct]=!0,this._changedBuffers[dt]=!0}setPointPosition(e,t,i,r){this._changedBuffers[ht]=!0}setPointColor(e,t,i,r,s){this._changedBuffers[ct]=!0}addPoints(e){this._changedBuffers[ht]=!0,this._changedBuffers[ct]=!0,this._changedBuffers[dt]=!0}addPoint(e,t){this._changedBuffers[ht]=!0,this._changedBuffers[ct]=!0,this._changedBuffers[dt]=!0}getPoint(e){return this._points[e]}removePoint(e){this._changedBuffers[ht]=!0,this._changedBuffers[ct]=!0,this._changedBuffers[dt]=!0}insertPoint(e,t){this._changedBuffers[ht]=!0,this._changedBuffers[ct]=!0,this._changedBuffers[dt]=!0}draw(){if(this.visibility&&this._coordinatesData.length){this._update();let t=this._renderNode.renderer,i=t.handler.programs.pointCloud,r=i._program,s=t.handler.gl,n=r.attributes,a=r.uniforms;i.activate(),s.uniformMatrix4fv(a.projectionViewMatrix,!1,t.activeCamera.getProjectionViewMatrix()),s.uniform1f(a.opacity,this._handler._entityCollection._fadingOpacity),s.uniform1f(a.pointSize,this.pointSize),s.bindBuffer(s.ARRAY_BUFFER,this._coordinatesBuffer),s.vertexAttribPointer(n.coordinates,this._coordinatesBuffer.itemSize,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,this._colorBuffer),s.vertexAttribPointer(n.colors,this._colorBuffer.itemSize,s.FLOAT,!1,0,0),s.drawArrays(s.POINTS,0,this._coordinatesBuffer.numItems)}}drawPicking(){if(this.visibility&&this._coordinatesData.length){let t=this._renderNode.renderer,i=t.handler.programs.pointCloud,r=i._program,s=t.handler.gl,n=r.attributes,a=r.uniforms;i.activate(),s.uniformMatrix4fv(a.projectionViewMatrix,!1,t.activeCamera.getProjectionViewMatrix()),s.uniform1f(a.opacity,this._handler._entityCollection._fadingOpacity),s.uniform1f(a.pointSize,this.pointSize+this.pickingScale),s.bindBuffer(s.ARRAY_BUFFER,this._coordinatesBuffer),s.vertexAttribPointer(n.coordinates,this._coordinatesBuffer.itemSize,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,this._pickingColorBuffer),s.vertexAttribPointer(n.colors,this._pickingColorBuffer.itemSize,s.FLOAT,!1,0,0),s.drawArrays(s.POINTS,0,this._coordinatesBuffer.numItems)}}_update(){if(this._renderNode){let e=this._changedBuffers.length;for(;e--;)this._changedBuffers[e]&&(this._buffersUpdateCallbacks[e].call(this),this._changedBuffers[e]=!1)}}_deleteBuffers(){if(this._renderNode){let e=this._renderNode.renderer,t=e.handler.gl;t.deleteBuffer(this._coordinatesBuffer),t.deleteBuffer(this._colorBuffer),t.deleteBuffer(this._pickingColorBuffer)}this._coordinatesBuffer=null,this._colorBuffer=null,this._pickingColorBuffer=null}_createCoordinatesBuffer(){let e=this._renderNode.renderer.handler;e.gl.deleteBuffer(this._coordinatesBuffer),this._coordinatesBuffer=e.createArrayBuffer(new Float32Array(this._coordinatesData),3,this._coordinatesData.length/3)}_createColorBuffer(){let e=this._renderNode.renderer.handler;e.gl.deleteBuffer(this._colorBuffer),this._colorBuffer=e.createArrayBuffer(new Float32Array(this._colorData),4,this._colorData.length/4)}_createPickingColorBuffer(){let e=this._renderNode.renderer.handler;e.gl.deleteBuffer(this._pickingColorBuffer),this._pickingColorBuffer=e.createArrayBuffer(new Float32Array(this._pickingColorData),4,this._pickingColorData.length/4)}_setPickingColors(){if(this._renderNode&&this._renderNode.renderer){for(let e=0;e<this._points.length;e++){let t=this._points[e];t._entity=this._entity,t._entityCollection=this._entity._entityCollection,this._renderNode.renderer.assignPickingColor(t),this._pickingColorData.push(t._pickingColor.x/255,t._pickingColor.y/255,t._pickingColor.z/255,1)}this._changedBuffers[dt]=!0}}}wi.__counter__=0;const ft=0,fi=1,qe=2,ja="#0000FF",Ce=0,Pe=1,Le=2,W=3;class it{constructor(e={}){this.__id=it.__counter__++,this.altitude=e.altitude||0,this.thickness=e.thickness||1.5,this._opacity=e.opacity!=null?e.opacity:1,this._defaultColor=sr(e.color||ja,e.opacity),this.visibility=e.visibility!=null?e.visibility:!0,this._closedLine=e.isClosed||!1,this._path3v=[],this._pathLengths=[],this._pathLonLat=[],this._pathLonLatMerc=[],this._pathColors=e.pathColors?Ks(e.pathColors):[],this._extent=new U,this._verticesHigh=[],this._verticesLow=[],this._orders=[],this._indexes=[],this._colors=[],this._verticesHighBuffer=null,this._verticesLowBuffer=null,this._ordersBuffer=null,this._indexesBuffer=null,this._colorsBuffer=null,this._pickingColor=[0,0,0],this._renderNode=null,this._entity=null,this._handler=null,this._handlerIndex=-1,this._buffersUpdateCallbacks=[],this._buffersUpdateCallbacks[ft]=this._createVerticesBuffer,this._buffersUpdateCallbacks[fi]=this._createIndexBuffer,this._buffersUpdateCallbacks[qe]=this._createColorsBuffer,this._changedBuffers=new Array(this._buffersUpdateCallbacks.length),e.pathLonLat?this.setPathLonLat(e.pathLonLat):e.path3v&&this.setPath3v(e.path3v),this._refresh()}static appendLineData3v(e,t,i,r,s,n,a,o,l,c,d,f,_,g){var v=0,u=new m,p=new m;_&&(_.southWest.set(180,90),_.northEast.set(-180,-90)),o.length>0?(v=o[o.length-5]+9,o.push(v,v)):o.push(0,0);for(let F=0,k=e.length;F<k;F++){var b=e[F],w=t[F];if(c[F]=[],f[F]=[],d[F]=[],b.length===0)continue;var y=v,x;if(r)x=b[b.length-1],x instanceof Array&&(x=new m(x[0],x[1],x[2]));else{var T=b[0],A=b[1]||T;T instanceof Array&&(T=new m(T[0],T[1],T[2])),A instanceof Array&&(A=new m(A[0],A[1],A[2])),T=T,A=A,x=new m(T.x+T.x-A.x,T.y+T.y-A.y,T.z+T.z-A.z)}let M=i;w&&w[0]&&(M=w[0]),m.doubleToTwoFloats(x,u,p),s.push(u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z),n.push(p.x,p.y,p.z,p.x,p.y,p.z,p.x,p.y,p.z,p.x,p.y,p.z);let L=M[Ce],I=M[Pe],z=M[Le],R=M[W]!=null?M[W]:1;F>0&&g.push(L,I,z,R,L,I,z,R,L,I,z,R,L,I,z,R),a.push(1,-1,2,-2);for(let S=0,q=b.length;S<q;S++){var E=b[S];if(E instanceof Array&&(E=new m(E[0],E[1],E[2])),d[F].push(E),l){var C=l.cartesianToLonLat(E);c[F].push(C),f[F].push(C.forwardMercator()),C.lon<_.southWest.lon&&(_.southWest.lon=C.lon),C.lat<_.southWest.lat&&(_.southWest.lat=C.lat),C.lon>_.northEast.lon&&(_.northEast.lon=C.lon),C.lat>_.northEast.lat&&(_.northEast.lat=C.lat)}w&&w[S]&&(M=w[S]),L=M[Ce],I=M[Pe],z=M[Le],R=M[W]!=null?M[W]:1,m.doubleToTwoFloats(E,u,p),s.push(u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z),n.push(p.x,p.y,p.z,p.x,p.y,p.z,p.x,p.y,p.z,p.x,p.y,p.z),g.push(L,I,z,R,L,I,z,R,L,I,z,R,L,I,z,R),a.push(1,-1,2,-2),o.push(v++,v++,v++,v++)}var B;if(r)B=b[0],B instanceof Array&&(B=new m(B[0],B[1],B[2])),o.push(y,y+1,y+1,y+1);else{let S=b[b.length-1],q=b[b.length-2]||S;S instanceof Array?S=new m(S[0],S[1],S[2]):S=S,q instanceof Array?q=new m(q[0],q[1],q[2]):q=q,B=new m(S.x+S.x-q.x,S.y+S.y-q.y,S.z+S.z-q.z),o.push(v-1,v-1,v-1,v-1)}w&&w[b.length-1]&&(M=w[b.length-1]),L=M[Ce],I=M[Pe],z=M[Le],R=M[W]!=null?M[W]:1,m.doubleToTwoFloats(B,u,p),s.push(u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z),n.push(p.x,p.y,p.z,p.x,p.y,p.z,p.x,p.y,p.z,p.x,p.y,p.z),g.push(L,I,z,R,L,I,z,R,L,I,z,R,L,I,z,R),a.push(1,-1,2,-2),F<e.length-1&&e[F+1].length!==0&&(v+=8,o.push(v,v))}}static appendPoint3v(e,t,i,r,s,n,a,o,l,c,d,f,_,g){var v=new m,u=new m,p=c.length-4,b=c[p-1]+1;e.length===0?(e.push([]),i[0]||(i[0]=[])):i[e.length-1]||(i[e.length-1]=[]);var w=e[e.length-1],y=w.length;w.push(t);let x=r[Ce],T=r[Pe],A=r[Le],E=r[W]!=null?r[W]:1,C=i[e.length-1];if(C[y]?(C[y][Ce]=x,C[y][Pe]=T,C[y][Le]=A,C[y][W]=E):C.push(r),y===1){var B;if(s)B=w[y-1],B instanceof Array&&(B=new m(B[0],B[1],B[2]));else{let S=w[0],q=w[1]||S;S instanceof Array?S=new m(S[0],S[1],S[2]):S=S,q instanceof Array?q=new m(q[0],q[1],q[2]):q=q,B=new m(S.x+S.x-q.x,S.y+S.y-q.y,S.z+S.z-q.z)}m.doubleToTwoFloats(B,v,u);let R=n.length-3*12;n[R]=v.x,n[R+1]=v.y,n[R+2]=v.z,n[R+3]=v.x,n[R+4]=v.y,n[R+5]=v.z,n[R+6]=v.x,n[R+7]=v.y,n[R+8]=v.z,n[R+9]=v.x,n[R+10]=v.y,n[R+11]=v.z,a[R]=u.x,a[R+1]=u.y,a[R+2]=u.z,a[R+3]=u.x,a[R+4]=u.y,a[R+5]=u.z,a[R+6]=u.x,a[R+7]=u.y,a[R+8]=u.z,a[R+9]=u.x,a[R+10]=u.y,a[R+11]=u.z}var F=b;if(d){f.length===0&&f.push([]),_.length===0&&_.push([]);var k=f[f.length-1],M=_[_.length-1];let R=d.cartesianToLonLat(t);k.push(R),M.push(R.forwardMercator()),R.lon<g.southWest.lon&&(g.southWest.lon=R.lon),R.lat<g.southWest.lat&&(g.southWest.lat=R.lat),R.lon>g.northEast.lon&&(g.northEast.lon=R.lon),R.lat>g.northEast.lat&&(g.northEast.lat=R.lat)}m.doubleToTwoFloats(t,v,u);let L=n.length-12;n[L]=v.x,n[L+1]=v.y,n[L+2]=v.z,n[L+3]=v.x,n[L+4]=v.y,n[L+5]=v.z,n[L+6]=v.x,n[L+7]=v.y,n[L+8]=v.z,n[L+9]=v.x,n[L+10]=v.y,n[L+11]=v.z,a[L]=u.x,a[L+1]=u.y,a[L+2]=u.z,a[L+3]=u.x,a[L+4]=u.y,a[L+5]=u.z,a[L+6]=u.x,a[L+7]=u.y,a[L+8]=u.z,a[L+9]=u.x,a[L+10]=u.y,a[L+11]=u.z;let I=o.length-16;o[I]=x,o[I+1]=T,o[I+2]=A,o[I+3]=E,o[I+4]=x,o[I+5]=T,o[I+6]=A,o[I+7]=E,o[I+8]=x,o[I+9]=T,o[I+10]=A,o[I+11]=E,o[I+12]=x,o[I+13]=T,o[I+14]=A,o[I+15]=E,c[p]=b++,c[p+1]=b++,c[p+2]=b++,c[p+3]=b++;var z;if(s)z=w[0],c.push(F,F+1,F+1,F+1);else{let R=w[w.length-1],S=w[w.length-2]||R;z=new m(R.x+R.x-S.x,R.y+R.y-S.y,R.z+R.z-S.z),c.push(b-1,b-1,b-1,b-1)}m.doubleToTwoFloats(z,v,u),n.push(v.x,v.y,v.z,v.x,v.y,v.z,v.x,v.y,v.z,v.x,v.y,v.z),a.push(u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z),o.push(x,T,A,E,x,T,A,E,x,T,A,E,x,T,A,E),l.push(1,-1,2,-2)}static setPathColors(e,t,i,r){for(let o=0,l=e.length;o<l;o++){var s=e[o],n=t[o];if(s.length===0)continue;let c=i;n&&n[0]&&(c=n[0]);let d=c[Ce],f=c[Pe],_=c[Le],g=c[W]!=null?c[W]:1;o>0&&r.push(d,f,_,g,d,f,_,g,d,f,_,g,d,f,_,g);for(let v=0,u=s.length;v<u;v++){var a=s[v];a instanceof Array&&(a=new P(a[0],a[1],a[2])),n&&n[v]&&(c=n[v]),d=c[Ce],f=c[Pe],_=c[Le],g=c[W]!=null?c[W]:1,r.push(d,f,_,g,d,f,_,g,d,f,_,g,d,f,_,g)}n&&n[s.length-1]&&(c=n[s.length-1]),d=c[Ce],f=c[Pe],_=c[Le],g=c[W]!=null?c[W]:1,r.push(d,f,_,g,d,f,_,g,d,f,_,g,d,f,_,g)}}static appendLineDataLonLat(e,t,i,r,s,n,a,o,l,c,d,f,_,g){var v=0,u=new m,p=new m;_&&(_.southWest.set(180,90),_.northEast.set(-180,-90)),o.length>0?(v=o[o.length-5]+9,o.push(v)):o.push(0);for(let C=0,B=e.length;C<B;C++){var b=e[C],w=t[C];if(c[C]=[],f[C]=[],d[C]=[],b.length===0)continue;var y=v,x;if(r){let z=b[b.length-1];z instanceof Array?x=l.lonLatToCartesian(new P(z[0],z[1],z[2])):x=l.lonLatToCartesian(z)}else{let z,R,S=b[0];S instanceof Array?z=l.lonLatToCartesian(new P(S[0],S[1],S[2])):z=l.lonLatToCartesian(S),S=b[1],S||(S=b[0]),S instanceof Array?R=l.lonLatToCartesian(new P(S[0],S[1],S[2])):R=l.lonLatToCartesian(S),x=new m(z.x+z.x-R.x,z.y+z.y-R.y,z.z+z.z-R.z)}let F=i;w&&w[0]&&(F=w[0]),m.doubleToTwoFloats(x,u,p),s.push(u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z),n.push(p.x,p.y,p.z,p.x,p.y,p.z,p.x,p.y,p.z,p.x,p.y,p.z);let k=F[Ce],M=F[Pe],L=F[Le],I=F[W]!=null?F[W]:1;C>0&&g.push(k,M,L,I,k,M,L,I,k,M,L,I,k,M,L,I),a.push(1,-1,2,-2);for(let z=0,R=b.length;z<R;z++){var T=b[z];T instanceof Array&&(T=new P(T[0],T[1],T[2])),w&&w[z]&&(F=w[z]),k=F[Ce],M=F[Pe],L=F[Le],I=F[W]!=null?F[W]:1;var A=l.lonLatToCartesian(T);c[C].push(A),d[C].push(T),f[C].push(T.forwardMercator()),m.doubleToTwoFloats(A,u,p),s.push(u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z),n.push(p.x,p.y,p.z,p.x,p.y,p.z,p.x,p.y,p.z,p.x,p.y,p.z),g.push(k,M,L,I,k,M,L,I,k,M,L,I,k,M,L,I),a.push(1,-1,2,-2),o.push(v++,v++,v++,v++),T.lon<_.southWest.lon&&(_.southWest.lon=T.lon),T.lat<_.southWest.lat&&(_.southWest.lat=T.lat),T.lon>_.northEast.lon&&(_.northEast.lon=T.lon),T.lat>_.northEast.lat&&(_.northEast.lat=T.lat)}var E;if(r){let z=b[0];z instanceof Array?E=l.lonLatToCartesian(new P(z[0],z[1],z[2])):E=l.lonLatToCartesian(z),o.push(y,y+1,y+1,y+1)}else{let z,R,S=b[b.length-1];S instanceof Array?z=l.lonLatToCartesian(new P(S[0],S[1],S[2])):z=l.lonLatToCartesian(S),S=b[b.length-2],S||(S=b[0]),S instanceof Array?R=l.lonLatToCartesian(new P(S[0],S[1],S[2])):R=l.lonLatToCartesian(S),E=new m(z.x+z.x-R.x,z.y+z.y-R.y,z.z+z.z-R.z),o.push(v-1,v-1,v-1,v-1)}w&&w[b.length-1]&&(F=w[b.length-1]),k=F[Ce],M=F[Pe],L=F[Le],I=F[W]!=null?F[W]:1,m.doubleToTwoFloats(E,u,p),s.push(u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z,u.x,u.y,u.z),n.push(p.x,p.y,p.z,p.x,p.y,p.z,p.x,p.y,p.z,p.x,p.y,p.z),g.push(k,M,L,I,k,M,L,I,k,M,L,I,k,M,L,I),a.push(1,-1,2,-2),C<e.length-1&&e[C+1].length!==0&&(v+=8,o.push(v,v))}}_setEqualPath3v(e){var t=this._extent;t.southWest.set(180,90),t.northEast.set(-180,-90);var i=new m,r=new m,s=this._verticesHigh,n=this._verticesLow,a=this._pathLonLat,o=this._pathLonLatMerc,l=0,c=this._renderNode.ellipsoid;for(let b=0;b<e.length;b++){var d=e[b],f;this._closedLine?f=d[d.length-1]:f=new m(d[0].x+d[0].x-d[1].x,d[0].y+d[0].y-d[1].y,d[0].z+d[0].z-d[1].z),m.doubleToTwoFloats(f,i,r),s[l]=i.x,n[l++]=r.x,s[l]=i.y,n[l++]=r.y,s[l]=i.z,n[l++]=r.z,s[l]=i.x,n[l++]=r.x,s[l]=i.y,n[l++]=r.y,s[l]=i.z,n[l++]=r.z,s[l]=i.x,n[l++]=r.x,s[l]=i.y,n[l++]=r.y,s[l]=i.z,n[l++]=r.z,s[l]=i.x,n[l++]=r.x,s[l]=i.y,n[l++]=r.y,s[l]=i.z,n[l++]=r.z;for(let w=0;w<d.length;w++){var _=d[w],g=this._path3v[b][w];if(g.x=_.x,g.y=_.y,g.z=_.z,c){var v=c.cartesianToLonLat(_);this._pathLonLat[b][w]=v,a[b][w]=v,o[b][w]=v.forwardMercator(),v.lon<t.southWest.lon&&(t.southWest.lon=v.lon),v.lat<t.southWest.lat&&(t.southWest.lat=v.lat),v.lon>t.northEast.lon&&(t.northEast.lon=v.lon),v.lat>t.northEast.lat&&(t.northEast.lat=v.lat)}m.doubleToTwoFloats(_,i,r),s[l]=i.x,n[l++]=r.x,s[l]=i.y,n[l++]=r.y,s[l]=i.z,n[l++]=r.z,s[l]=i.x,n[l++]=r.x,s[l]=i.y,n[l++]=r.y,s[l]=i.z,n[l++]=r.z,s[l]=i.x,n[l++]=r.x,s[l]=i.y,n[l++]=r.y,s[l]=i.z,n[l++]=r.z,s[l]=i.x,n[l++]=r.x,s[l]=i.y,n[l++]=r.y,s[l]=i.z,n[l++]=r.z}var u;if(this._closedLine)u=d[0];else{var p=d.length-1;u=new m(d[p].x+d[p].x-d[p-1].x,d[p].y+d[p].y-d[p-1].y,d[p].z+d[p].z-d[p-1].z)}m.doubleToTwoFloats(u,i,r),s[l]=i.x,n[l++]=r.x,s[l]=i.y,n[l++]=r.y,s[l]=i.z,n[l++]=r.z,s[l]=i.x,n[l++]=r.x,s[l]=i.y,n[l++]=r.y,s[l]=i.z,n[l++]=r.z,s[l]=i.x,n[l++]=r.x,s[l]=i.y,n[l++]=r.y,s[l]=i.z,n[l++]=r.z,s[l]=i.x,n[l++]=r.x,s[l]=i.y,n[l++]=r.y,s[l]=i.z,n[l++]=r.z}}_setEqualPathLonLat(e){var t=this._extent;t.southWest.set(180,90),t.northEast.set(-180,-90);var i=new m,r=new m,s=this._verticesHigh,n=this._verticesLow,a=this._pathLonLat,o=this._pathLonLatMerc,l=this._path3v,c=0,d=this._renderNode.ellipsoid;for(let p=0;p<e.length;p++){var f=e[p],_;if(this._closedLine)_=d.lonLatToCartesian(f[f.length-1]);else{let b=d.lonLatToCartesian(f[0]),w=d.lonLatToCartesian(f[1]);_=new m(b.x+b.x-w.x,b.y+b.y-w.y,b.z+b.z-w.z)}m.doubleToTwoFloats(_,i,r),s[c]=i.x,n[c++]=r.x,s[c]=i.y,n[c++]=r.y,s[c]=i.z,n[c++]=r.z,s[c]=i.x,n[c++]=r.x,s[c]=i.y,n[c++]=r.y,s[c]=i.z,n[c++]=r.z,s[c]=i.x,n[c++]=r.x,s[c]=i.y,n[c++]=r.y,s[c]=i.z,n[c++]=r.z,s[c]=i.x,n[c++]=r.x,s[c]=i.y,n[c++]=r.y,s[c]=i.z,n[c++]=r.z;for(let b=0;b<f.length;b++){var g=f[b],v=d.lonLatToCartesian(g);l[p][b]=v,o[p][b]=g.forwardMercator(),a[p][b]=g,m.doubleToTwoFloats(v,i,r),s[c]=i.x,n[c++]=r.x,s[c]=i.y,n[c++]=r.y,s[c]=i.z,n[c++]=r.z,s[c]=i.x,n[c++]=r.x,s[c]=i.y,n[c++]=r.y,s[c]=i.z,n[c++]=r.z,s[c]=i.x,n[c++]=r.x,s[c]=i.y,n[c++]=r.y,s[c]=i.z,n[c++]=r.z,s[c]=i.x,n[c++]=r.x,s[c]=i.y,n[c++]=r.y,s[c]=i.z,n[c++]=r.z,g.lon<t.southWest.lon&&(t.southWest.lon=g.lon),g.lat<t.southWest.lat&&(t.southWest.lat=g.lat),g.lon>t.northEast.lon&&(t.northEast.lon=g.lon),g.lat>t.northEast.lat&&(t.northEast.lat=g.lat)}var u;if(this._closedLine)u=d.lonLatToCartesian(f[0]);else{let b=d.lonLatToCartesian(f[f.length-1]),w=d.lonLatToCartesian(f[f.length-2]);u=new m(b.x+b.x-w.x,b.y+b.y-w.y,b.z+b.z-w.z)}m.doubleToTwoFloats(u,i,r),s[c]=i.x,n[c++]=r.x,s[c]=i.y,n[c++]=r.y,s[c]=i.z,n[c++]=r.z,s[c]=i.x,n[c++]=r.x,s[c]=i.y,n[c++]=r.y,s[c]=i.z,n[c++]=r.z,s[c]=i.x,n[c++]=r.x,s[c]=i.y,n[c++]=r.y,s[c]=i.z,n[c++]=r.z,s[c]=i.x,n[c++]=r.x,s[c]=i.y,n[c++]=r.y,s[c]=i.z,n[c++]=r.z}}setPointLonLat(e,t,i){if(this._renderNode&&this._renderNode.ellipsoid){let o=this._pathLonLat,l=this._pathLonLatMerc;o[i][t]=e,l[i][t]=e.forwardMercator();var r=this._extent;r.southWest.set(180,90),r.northEast.set(-180,-90);for(let c=0;c<o.length;c++){var s=o[c];for(let d=0;d<s.length;d++){var n=s[d].lon,a=s[d].lat;n>r.northEast.lon&&(r.northEast.lon=n),a>r.northEast.lat&&(r.northEast.lat=a),n<r.southWest.lon&&(r.southWest.lon=n),a<r.southWest.lat&&(r.southWest.lat=a)}}this.setPoint3v(this._renderNode.ellipsoid.lonLatToCartesian(e),t,i,!0)}else{let o=this._pathLonLat[i];o[t].lon=e.lon,o[t].lat=e.lat,o[t].height=e.height}}setPoint3v(e,t=0,i=0,r=!1){if(this._renderNode){var s=new m,n=new m,a=this._verticesHigh,o=this._verticesLow,l=this._pathLonLat,c=this._pathLonLatMerc,d=0,f=0;f=this._pathLengths[i]*12+24*i;let x=this._path3v[i];x[t].x=e.x,x[t].y=e.y,x[t].z=e.z;let T=this._closedLine||x.length===1;if(t===0||t===1){var _;T?_=x[x.length-1]:_=new m(x[0].x+x[0].x-x[1].x,x[0].y+x[0].y-x[1].y,x[0].z+x[0].z-x[1].z),d=f,m.doubleToTwoFloats(_,s,n),a[d]=s.x,a[d+1]=s.y,a[d+2]=s.z,a[d+3]=s.x,a[d+4]=s.y,a[d+5]=s.z,a[d+6]=s.x,a[d+7]=s.y,a[d+8]=s.z,a[d+9]=s.x,a[d+10]=s.y,a[d+11]=s.z,o[d]=n.x,o[d+1]=n.y,o[d+2]=n.z,o[d+3]=n.x,o[d+4]=n.y,o[d+5]=n.z,o[d+6]=n.x,o[d+7]=n.y,o[d+8]=n.z,o[d+9]=n.x,o[d+10]=n.y,o[d+11]=n.z}if(!r&&this._renderNode.ellipsoid){var g=this._renderNode.ellipsoid.cartesianToLonLat(e);l[i][t]=g,c[i][t]=g.forwardMercator();var v=this._extent;v.southWest.set(180,90),v.northEast.set(-180,-90);for(let A=0;A<l.length;A++){var u=l[A];for(let E=0;E<u.length;E++){var p=u[E].lon,b=u[E].lat;p>v.northEast.lon&&(v.northEast.lon=p),b>v.northEast.lat&&(v.northEast.lat=b),p<v.southWest.lon&&(v.southWest.lon=p),b<v.southWest.lat&&(v.southWest.lat=b)}}}if(d=f+t*12+12,m.doubleToTwoFloats(e,s,n),a[d]=s.x,a[d+1]=s.y,a[d+2]=s.z,a[d+3]=s.x,a[d+4]=s.y,a[d+5]=s.z,a[d+6]=s.x,a[d+7]=s.y,a[d+8]=s.z,a[d+9]=s.x,a[d+10]=s.y,a[d+11]=s.z,o[d]=n.x,o[d+1]=n.y,o[d+2]=n.z,o[d+3]=n.x,o[d+4]=n.y,o[d+5]=n.z,o[d+6]=n.x,o[d+7]=n.y,o[d+8]=n.z,o[d+9]=n.x,o[d+10]=n.y,o[d+11]=n.z,t===x.length-1||t===x.length-2){var w;if(T)w=x[0];else{var y=x.length-1;w=new m(x[y].x+x[y].x-x[y-1].x,x[y].y+x[y].y-x[y-1].y,x[y].z+x[y].z-x[y-1].z)}d=f+x.length*12+12,m.doubleToTwoFloats(w,s,n),a[d]=s.x,a[d+1]=s.y,a[d+2]=s.z,a[d+3]=s.x,a[d+4]=s.y,a[d+5]=s.z,a[d+6]=s.x,a[d+7]=s.y,a[d+8]=s.z,a[d+9]=s.x,a[d+10]=s.y,a[d+11]=s.z,o[d]=n.x,o[d+1]=n.y,o[d+2]=n.z,o[d+3]=n.x,o[d+4]=n.y,o[d+5]=n.z,o[d+6]=n.x,o[d+7]=n.y,o[d+8]=n.z,o[d+9]=n.x,o[d+10]=n.y,o[d+11]=n.z}this._changedBuffers[ft]=!0}else{let x=this._path3v[i];x[t].x=e.x,x[t].y=e.y,x[t].z=e.z}}_resizePathLengths(e=0){this._pathLengths[0]=0;for(let t=e+1,i=this._path3v.length;t<=i;t++)this._pathLengths[t]=this._pathLengths[t-1]+this._path3v[t-1].length}removeSegment(e){this._path3v.splice(e,1),this.setPath3v([].concat(this._path3v))}removePoint(e,t=0){this._path3v[t].splice(e,1),this._path3v[t].length===0&&this._path3v.splice(t,1),this.setPath3v([].concat(this._path3v))}insertPoint3v(e,t=0,i,r=0){let s=[].concat(this._path3v),n=s[r];if(n){let a=[].concat(this._pathColors);if(n.splice(t,0,e),i){let o=a[r];o||(o=new Array(n.length)),o.splice(t,0,i)}this.setPath3v(s,a)}else this.addPoint3v(e,r)}appendPoint3v(e,t,i){this._path3v.length===0||!this._renderNode?(this._pathColors.push([t||this._defaultColor]),this.addPoint3v(e)):(this._verticesHigh=kt(this._verticesHigh),this._verticesLow=kt(this._verticesLow),this._colors=kt(this._colors),this._orders=kt(this._orders),this._indexes=kt(this._indexes),it.appendPoint3v(this._path3v,e,this._pathColors,t||this._defaultColor,this._closedLine,this._verticesHigh,this._verticesLow,this._colors,this._orders,this._indexes,i?null:this._renderNode.ellipsoid,this._pathLonLat,this._pathLonLatMerc,this._extent),this._pathLengths[this._path3v.length]+=1,this._changedBuffers[ft]=!0,this._changedBuffers[qe]=!0,this._changedBuffers[fi]=!0)}addPoint3v(e,t=0){t>=this._path3v.length&&this._path3v.push([]),this._path3v[t].push(e),this.setPath3v([].concat(this._path3v))}addPointLonLat(e,t=0){t>=this._pathLonLat.length&&this._pathLonLat.push([]),this._pathLonLat[t].push(e),this.setPathLonLat([].concat(this._pathLonLat))}clear(){this._clearData()}setPointColor(e,t=0,i=0){if(this._renderNode&&t<this._path3v[i].length){let r=this._pathColors[i];if(!r)if(this._path3v[i]&&t<this._path3v[i].length)this._pathColors[i]=new Array(this._path3v[i].length);else return;r[t]?(r[t][Ce]=e[Ce],r[t][Pe]=e[Pe],r[t][Le]=e[Le],r[t][W]=e[W]||1):r[t]=[e[Ce],e[Pe],e[Le],e[W]||1];let s=this._colors,n=t*16+this._pathLengths[i]*16+32*i;s[n]=s[n+4]=s[n+8]=s[n+12]=e[Ce],s[n+1]=s[n+5]=s[n+9]=s[n+13]=e[Pe],s[n+2]=s[n+6]=s[n+10]=s[n+14]=e[Le],s[n+3]=s[n+7]=s[n+11]=s[n+15]=e[W]||1,this._changedBuffers[qe]=!0}else{let r=this._pathColors[i];r[t]=e}}setOpacity(e){this._opacity=e}setAltitude(e){this.altitude=e}setThickness(e){this.thickness=e}getThickness(){return this.thickness}setVisibility(e){this.visibility=e}getVisibility(){return this.visibility}setRenderNode(e){e&&(this._renderNode=e,this._pathLonLat.length?this._createDataLonLat([].concat(this._pathLonLat)):this._createData3v([].concat(this._path3v)),this._refresh(),e.renderer&&e.renderer.isInitialized()&&this._update())}_clearData(){this._verticesHigh=null,this._verticesLow=null,this._orders=null,this._indexes=null,this._colors=null,this._verticesHigh=[],this._verticesLow=[],this._orders=[],this._indexes=[],this._colors=[],this._path3v.length=0,this._pathLonLat.length=0,this._pathLonLatMerc.length=0,this._path3v=[],this._pathLonLat=[],this._pathLonLatMerc=[]}_createData3v(e){this._clearData(),it.appendLineData3v(e,this._pathColors,this._defaultColor,this._closedLine,this._verticesHigh,this._verticesLow,this._orders,this._indexes,this._renderNode.ellipsoid,this._pathLonLat,this._path3v,this._pathLonLatMerc,this._extent,this._colors),this._resizePathLengths(0)}_createDataLonLat(e){this._clearData(),it.appendLineDataLonLat(e,this._pathColors,this._defaultColor,this._closedLine,this._verticesHigh,this._verticesLow,this._orders,this._indexes,this._renderNode.ellipsoid,this._path3v,this._pathLonLat,this._pathLonLatMerc,this._extent,this._colors),this._resizePathLengths(0)}remove(){this._entity=null,this._pathColors.length=0,this._pathColors=[],this._verticesHigh=null,this._verticesLow=null,this._orders=null,this._indexes=null,this._colors=null,this._verticesHigh=[],this._verticesLow=[],this._orders=[],this._indexes=[],this._colors=[],this._deleteBuffers(),this._handler&&this._handler.remove(this)}setPickingColor3v(e){this._pickingColor[0]=e.x/255,this._pickingColor[1]=e.y/255,this._pickingColor[2]=e.z/255}getExtent(){return this._extent.clone()}getPath3v(){return this._path3v}getPathLonLat(){return this._pathLonLat}getPathColors(){return this._pathColors}setPathColors(e){e&&(this._colors=[],this._pathColors=[].concat(e),it.setPathColors(this._pathLonLat,e,this._defaultColor,this._colors),this._changedBuffers[qe]=!0)}setColorHTML(e){this._defaultColor=sr(e);let t=$e(e),i=this._pathColors;for(let s=0,n=i.length;s<n;s++){let a=i[s];for(let o=0,l=a.length;o<l;o++)a[o][0]=t.x,a[o][1]=t.y,a[o][2]=t.z,a[o][3]=t.w}let r=this._colors;for(let s=0,n=r.length;s<n;s+=4)r[s]=t.x,r[s+1]=t.y,r[s+2]=t.z,r[s+3]=t.w;this._changedBuffers[qe]=!0}setPathLonLat(e,t=!1){this._renderNode&&this._renderNode.ellipsoid?t?(this._setEqualPathLonLat(e),this._changedBuffers[ft]=!0,this._changedBuffers[qe]=!0):(this._createDataLonLat(e),this._changedBuffers[ft]=!0,this._changedBuffers[fi]=!0,this._changedBuffers[qe]=!0):this._pathLonLat=[].concat(e)}setPath3v(e,t,i=!1){t&&(this._pathColors=[].concat(t)),this._renderNode?i?(this._setEqualPath3v(e),this._changedBuffers[ft]=!0,this._changedBuffers[qe]=!0):(this._createData3v(e),this._changedBuffers[ft]=!0,this._changedBuffers[fi]=!0,this._changedBuffers[qe]=!0):this._path3v=[].concat(e)}draw(){if(this.visibility&&this._path3v.length){this._update();let t=this._renderNode.renderer,i=t.handler.programs.polyline_screen,r=i._program,s=t.handler.gl,n=r.attributes,a=r.uniforms,o=this._handler._entityCollection;i.activate(),s.disable(s.CULL_FACE),s.uniform1f(a.depthOffset,o.polygonOffsetUnits),s.uniformMatrix4fv(a.proj,!1,t.activeCamera.getProjectionMatrix()),s.uniformMatrix4fv(a.view,!1,t.activeCamera.getViewMatrix()),s.uniform3fv(a.eyePositionHigh,t.activeCamera.eyeHigh),s.uniform3fv(a.eyePositionLow,t.activeCamera.eyeLow),s.uniform2fv(a.viewport,[t.handler.canvas.width,t.handler.canvas.height]),s.uniform1f(a.thickness,this.thickness*.5),s.uniform1f(a.opacity,this._opacity*o._fadingOpacity),s.bindBuffer(s.ARRAY_BUFFER,this._colorsBuffer),s.vertexAttribPointer(n.color,this._colorsBuffer.itemSize,s.FLOAT,!1,0,0);let l=this._verticesHighBuffer;s.bindBuffer(s.ARRAY_BUFFER,l),s.vertexAttribPointer(n.prevHigh,l.itemSize,s.FLOAT,!1,12,0),s.vertexAttribPointer(n.currentHigh,l.itemSize,s.FLOAT,!1,12,48),s.vertexAttribPointer(n.nextHigh,l.itemSize,s.FLOAT,!1,12,96),l=this._verticesLowBuffer,s.bindBuffer(s.ARRAY_BUFFER,l),s.vertexAttribPointer(n.prevLow,l.itemSize,s.FLOAT,!1,12,0),s.vertexAttribPointer(n.currentLow,l.itemSize,s.FLOAT,!1,12,48),s.vertexAttribPointer(n.nextLow,l.itemSize,s.FLOAT,!1,12,96),s.bindBuffer(s.ARRAY_BUFFER,this._ordersBuffer),s.vertexAttribPointer(n.order,this._ordersBuffer.itemSize,s.FLOAT,!1,4,0),s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,this._indexesBuffer),s.drawElements(s.TRIANGLE_STRIP,this._indexesBuffer.numItems,s.UNSIGNED_INT,0),s.enable(s.CULL_FACE)}}drawPicking(){if(this.visibility&&this._path3v.length){let e=this._renderNode,t=e.renderer,i=t.handler.programs.polyline_picking,r=i._program,s=t.handler.gl,n=r.attributes,a=r.uniforms;i.activate(),s.disable(s.CULL_FACE),s.uniform1f(a.depthOffset,this._handler._entityCollection.polygonOffsetUnits),s.uniformMatrix4fv(a.proj,!1,t.activeCamera.getProjectionMatrix()),s.uniformMatrix4fv(a.view,!1,t.activeCamera.getViewMatrix()),s.uniform4fv(a.color,[this._pickingColor[0],this._pickingColor[1],this._pickingColor[2],1]),s.uniform3fv(a.eyePositionHigh,t.activeCamera.eyeHigh),s.uniform3fv(a.eyePositionLow,t.activeCamera.eyeLow),s.uniform2fv(a.uFloatParams,[e._planetRadius2||0,t.activeCamera._tanViewAngle_hradOneByHeight]),s.uniform2fv(a.viewport,[t.handler.canvas.width,t.handler.canvas.height]),s.uniform1f(a.thickness,this.thickness*.5);let o=this._verticesHighBuffer;s.bindBuffer(s.ARRAY_BUFFER,o),s.vertexAttribPointer(n.prevHigh,o.itemSize,s.FLOAT,!1,12,0),s.vertexAttribPointer(n.currentHigh,o.itemSize,s.FLOAT,!1,12,48),s.vertexAttribPointer(n.nextHigh,o.itemSize,s.FLOAT,!1,12,96),o=this._verticesLowBuffer,s.bindBuffer(s.ARRAY_BUFFER,o),s.vertexAttribPointer(n.prevLow,o.itemSize,s.FLOAT,!1,12,0),s.vertexAttribPointer(n.currentLow,o.itemSize,s.FLOAT,!1,12,48),s.vertexAttribPointer(n.nextLow,o.itemSize,s.FLOAT,!1,12,96),s.bindBuffer(s.ARRAY_BUFFER,this._ordersBuffer),s.vertexAttribPointer(n.order,this._ordersBuffer.itemSize,s.FLOAT,!1,4,0),s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,this._indexesBuffer),s.drawElements(s.TRIANGLE_STRIP,this._indexesBuffer.numItems,s.UNSIGNED_INT,0),s.enable(s.CULL_FACE)}}_refresh(){let e=this._changedBuffers.length;for(;e--;)this._changedBuffers[e]=!0}_update(){if(this._renderNode){let e=this._changedBuffers.length;for(;e--;)this._changedBuffers[e]&&(this._buffersUpdateCallbacks[e].call(this),this._changedBuffers[e]=!1)}}_deleteBuffers(){if(this._renderNode){let e=this._renderNode.renderer,t=e.handler.gl;t.deleteBuffer(this._verticesHighBuffer),t.deleteBuffer(this._verticesLowBuffer),t.deleteBuffer(this._ordersBuffer),t.deleteBuffer(this._indexesBuffer),t.deleteBuffer(this._colorsBuffer),this._verticesHighBuffer=null,this._verticesLowBuffer=null,this._ordersBuffer=null,this._indexesBuffer=null,this._colorsBuffer=null}}_createVerticesBuffer(){let e=this._renderNode.renderer.handler,t=this._verticesHigh.length/3;(!this._verticesHighBuffer||this._verticesHighBuffer.numItems!==t)&&(e.gl.deleteBuffer(this._verticesHighBuffer),e.gl.deleteBuffer(this._verticesLowBuffer),this._verticesHighBuffer=e.createStreamArrayBuffer(3,t),this._verticesLowBuffer=e.createStreamArrayBuffer(3,t)),this._verticesHigh=X(this._verticesHigh),this._verticesLow=X(this._verticesLow),e.setStreamArrayBuffer(this._verticesHighBuffer,this._verticesHigh),e.setStreamArrayBuffer(this._verticesLowBuffer,this._verticesLow)}_createIndexBuffer(){let e=this._renderNode.renderer.handler;e.gl.deleteBuffer(this._ordersBuffer),e.gl.deleteBuffer(this._indexesBuffer),this._orders=X(this._orders),this._ordersBuffer=e.createArrayBuffer(this._orders,1,this._orders.length/2),this._indexes=X(this._indexes,Uint32Array),this._indexesBuffer=e.createElementArrayBuffer(this._indexes,1,this._indexes.length)}_createColorsBuffer(){let e=this._renderNode.renderer.handler;e.gl.deleteBuffer(this._colorsBuffer),this._colors=X(this._colors),this._colorsBuffer=e.createArrayBuffer(new Float32Array(this._colors),4,this._colors.length/4)}}it.__counter__=0;class Ti{constructor(e={}){this.__id=Ti.__counter__++,this._thickness=e.thickness||2,this._startPosition=Xe(e.startPosition),this._startPositionHigh=new m,this._startPositionLow=new m,m.doubleToTwoFloats(this._startPosition,this._startPositionHigh,this._startPositionLow),this._endPosition=Xe(e.endPosition),this._endPositionHigh=new m,this._endPositionLow=new m,m.doubleToTwoFloats(this._endPosition,this._endPositionHigh,this._endPositionLow),this._startColor=Ze(e.startColor),this._endColor=Ze(e.endColor),this._visibility=e.visibility!=null?e.visibility:!0,this._entity=null,this._handler=null,this._handlerIndex=-1}setStartPosition(e,t,i){this._startPosition.x=e,this._startPosition.y=t,this._startPosition.z=i,m.doubleToTwoFloats(this._startPosition,this._startPositionHigh,this._startPositionLow),this._handler&&this._handler.setStartPositionArr(this._handlerIndex,this._startPositionHigh,this._startPositionLow)}getLength(){return this._startPosition.distance(this._endPosition)}setStartPosition3v(e){this._startPosition.x=e.x,this._startPosition.y=e.y,this._startPosition.z=e.z,m.doubleToTwoFloats(this._startPosition,this._startPositionHigh,this._startPositionLow),this._handler&&this._handler.setStartPositionArr(this._handlerIndex,this._startPositionHigh,this._startPositionLow)}setEndPosition(e,t,i){this._endPosition.x=e,this._endPosition.y=t,this._endPosition.z=i,m.doubleToTwoFloats(this._endPosition,this._endPositionHigh,this._endPositionLow),this._handler&&this._handler.setEndPositionArr(this._handlerIndex,this._endPositionHigh,this._endPositionLow)}setEndPosition3v(e){this._endPosition.x=e.x,this._endPosition.y=e.y,this._endPosition.z=e.z,m.doubleToTwoFloats(this._endPosition,this._endPositionHigh,this._endPositionLow),this._handler&&this._handler.setEndPositionArr(this._handlerIndex,this._endPositionHigh,this._endPositionLow)}setThickness(e){this._thickness=e,this._handler&&this._handler.setThicknessArr(this._handlerIndex,e)}setColors4v(e,t){e&&(this._startColor.x=e.x,this._startColor.y=e.y,this._startColor.z=e.z,this._startColor.w=e.w),t&&(this._endColor.x=t.x,this._endColor.y=t.y,this._endColor.z=t.z,this._endColor.w=t.w),this._handler&&this._handler.setRgbaArr(this._handlerIndex,this._startColor,this._endColor)}setColorsHTML(e,t){e&&(this._startColor=$e(e)),t&&(this._endColor=$e(t)),this._handler&&this._handler.setRgbaArr(this._handlerIndex,this._startColor,this._endColor)}getStartPosition(){return this._startPosition}getEndPosition(){return this._endPosition}setVisibility(e){this._visibility=e,this._handler&&this._handler.setVisibility(this._handlerIndex,e)}getVisibility(){return this._visibility}remove(){this._entity=null,this._handler&&this._handler.remove(this)}setPickingColor3v(e){this._handler&&this._handler.setPickingColorArr(this._handlerIndex,e)}}Ti.__counter__=0;let oe=new m,le=new m;class Ai{constructor(e={}){if(this.__id=Ai.__counter__++,this.visibility=e.visibility!=null?e.visibility:!0,this.color=new Float32Array([1,1,1,.5]),e.color){let t=Ze(e.color);this.setColor(t.x,t.y,t.z,t.w)}e.opacity&&this.setOpacity(e.opacity),this._renderNode=null,this._entity=null,this._verticesHighBuffer=null,this._verticesLowBuffer=null,this._indexBuffer=null,this._verticesHigh=[],this._verticesLow=[],this._indexes=[],this._path=[],this._pickingColor=new Float32Array(4),this._gridSize=1,this._handler=null,this._handlerIndex=-1,e.path&&this.setPath(e.path)}setPickingColor3v(e){this._pickingColor[0]=e.x/255,this._pickingColor[1]=e.y/255,this._pickingColor[2]=e.z/255,this._pickingColor[3]=1}clear(){this._path.length=0,this._path=[],this._verticesHigh.length=0,this._verticesHigh=[],this._verticesLow.length=0,this._verticesLow=[],this._indexes.length=0,this._indexes=[],this._deleteBuffers()}setColor4v(e){this.setColor(e.x,e.y,e.z,e.w)}setColorHTML(e){this.setColor4v($e(e))}setColor(e,t,i,r){r=r||this.color[3],this.color[0]=e,this.color[1]=t,this.color[2]=i,this.color[3]=r}setOpacity(e){this.color[3]=e||0}setVisibility(e){this.visibility=e}getVisibility(){return this.visibility}setRenderNode(e){this._renderNode=e,this._createBuffers()}remove(){this._entity=null,this._handler&&this._handler.remove(this)}draw(){if(this.visibility&&this._verticesHigh.length){let e=this._renderNode.renderer,t=e.handler.gl,i=e.handler.programs.strip,r=i._program,s=r.attributes,n=r.uniforms;i.activate(),t.disable(t.CULL_FACE),t.uniformMatrix4fv(n.viewMatrix,!1,e.activeCamera.getViewMatrix()),t.uniformMatrix4fv(n.projectionMatrix,!1,e.activeCamera.getProjectionMatrix()),t.uniform3fv(n.eyePositionHigh,e.activeCamera.eyeHigh),t.uniform3fv(n.eyePositionLow,e.activeCamera.eyeLow),t.uniform4fv(n.uColor,this.color),t.uniform1f(n.uOpacity,this._entity._entityCollection._fadingOpacity),t.bindBuffer(t.ARRAY_BUFFER,this._verticesHighBuffer),t.vertexAttribPointer(s.aVertexPositionHigh,this._verticesHighBuffer.itemSize,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,this._verticesLowBuffer),t.vertexAttribPointer(s.aVertexPositionLow,this._verticesLowBuffer.itemSize,t.FLOAT,!1,0,0),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this._indexBuffer),t.drawElements(e.handler.gl.TRIANGLE_STRIP,this._indexBuffer.numItems,t.UNSIGNED_INT,0),t.enable(t.CULL_FACE)}}drawPicking(){if(this.visibility&&this._verticesHigh.length){let e=this._renderNode.renderer,t=e.handler.gl,i=e.handler.programs.strip,r=i._program,s=r.attributes,n=r.uniforms;i.activate(),t.disable(t.CULL_FACE),t.uniformMatrix4fv(n.viewMatrix,!1,e.activeCamera.getViewMatrix()),t.uniformMatrix4fv(n.projectionMatrix,!1,e.activeCamera.getProjectionMatrix()),t.uniform3fv(n.eyePositionHigh,e.activeCamera.eyeHigh),t.uniform3fv(n.eyePositionLow,e.activeCamera.eyeLow),t.uniform1f(n.uOpacity,this._entity._entityCollection._fadingOpacity!=0?1:0),t.uniform4fv(n.uColor,this._pickingColor),t.bindBuffer(t.ARRAY_BUFFER,this._verticesHighBuffer),t.vertexAttribPointer(s.aVertexPositionHigh,this._verticesHighBuffer.itemSize,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,this._verticesLowBuffer),t.vertexAttribPointer(s.aVertexPositionLow,this._verticesLowBuffer.itemSize,t.FLOAT,!1,0,0),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this._indexBuffer),t.drawElements(e.handler.gl.TRIANGLE_STRIP,this._indexBuffer.numItems,t.UNSIGNED_INT,0),t.enable(t.CULL_FACE)}}_deleteBuffers(){if(this._renderNode&&this._renderNode.renderer){let e=this._renderNode.renderer,t=e.handler.gl;t.deleteBuffer(this._indexBuffer),t.deleteBuffer(this._verticesHighBuffer),t.deleteBuffer(this._verticesLowBuffer)}this._verticesHighBuffer=null,this._verticesLowBuffer=null,this._indexBuffer=null}_createBuffers(){if(this._renderNode&&this._renderNode.renderer&&this._renderNode.renderer.isInitialized()){let e=this._renderNode.renderer.handler.gl;e.deleteBuffer(this._indexBuffer),e.deleteBuffer(this._verticesHighBuffer),e.deleteBuffer(this._verticesLowBuffer),this._verticesHighBuffer=this._renderNode.renderer.handler.createArrayBuffer(new Float32Array(this._verticesHigh),3,this._verticesHigh.length/3),this._verticesLowBuffer=this._renderNode.renderer.handler.createArrayBuffer(new Float32Array(this._verticesLow),3,this._verticesLow.length/3),this._indexBuffer=this._renderNode.renderer.handler.createElementArrayBuffer(new Uint32Array(this._indexes),1,this._indexes.length)}}addEdge3v(e,t){let i=this._path.length;if(i===0)this._path.push([e.clone(),t.clone()]);else{let r=this._path[i-1][0],s=this._path[i-1][1];this._path.push([e.clone(),t.clone()]);let n=this._verticesHigh,a=this._verticesLow,o=this._gridSize,l=o+1,c=new m,d=this._verticesHigh.length/3,f=d,_=Math.abs(r.sub(s).normal().dot(e.sub(r).normal()));for(let g=0;g<l;g++){let v=g/o,u=r.lerp(e,v),p=s.lerp(t,v);for(let b=0;b<l;b++){let w=b/o,y=r.lerp(s,w),x=e.lerp(t,w);_!==1?new Oe(u,p).intersects(new Oe(y,x),c):c=x,f=d+g*l+b,m.doubleToTwoFloats(c,oe,le);let T=f*3;n[T]=oe.x,n[T+1]=oe.y,n[T+2]=oe.z,a[T]=le.x,a[T+1]=le.y,a[T+2]=le.z,g<o&&this._indexes.push(f,f+l)}g<o&&this._indexes.push(f+l,f+1)}this._createBuffers()}}setEdge3v(e,t,i){if(i===this._path.length){this.addEdge3v(e,t);return}if(this._path[i]){if(this._path[i][0]=e,this._path[i][1]=t,this._path.length>1){let r=this._gridSize,s=r+1,n=s*s,a=new m,o=this._verticesHigh,l=this._verticesLow;if(i===this._path.length-1){let c=this._path[i-1][0],d=this._path[i-1][1],f=this._verticesHigh.length/3-n,_=f,g=Math.abs(c.sub(d).normal().dot(e.sub(c).normal()));for(let v=0;v<s;v++){let u=v/r,p=c.lerp(e,u),b=d.lerp(t,u);for(let w=0;w<s;w++){let y=w/r,x=c.lerp(d,y),T=e.lerp(t,y);g!==1?new Oe(p,b).intersects(new Oe(x,T),a):a=T,_=f+v*s+w,m.doubleToTwoFloats(a,oe,le);let A=_*3;o[A]=oe.x,o[A+1]=oe.y,o[A+2]=oe.z,l[A]=le.x,l[A+1]=le.y,l[A+2]=le.z}}}else if(i===0){let c=0,d=e,f=t;e=this._path[1][0],t=this._path[1][1];for(let _=0;_<s;_++){let g=_/r,v=d.lerp(e,g),u=f.lerp(t,g);for(let p=0;p<s;p++){let b=p/r,w=d.lerp(f,b),y=e.lerp(t,b);new Oe(v,u).intersects(new Oe(w,y),a),c=_*s+p,m.doubleToTwoFloats(a,oe,le);let x=c*3;o[x]=oe.x,o[x+1]=oe.y,o[x+2]=oe.z,l[x]=le.x,l[x+1]=le.y,l[x+2]=le.z}}}else if(i>0&&i<this._path.length){let c=this._path[i-1][0],d=this._path[i-1][1],f=this._path[i+1][0],_=this._path[i+1][1],g=i*n,v=(i-1)*n,u=v;for(let p=0;p<s;p++){let b=p/r,w=c.lerp(e,b),y=t.lerp(_,b),x=e.lerp(f,b),T=d.lerp(t,b);for(let A=0;A<s;A++){let E=A/r,C=c.lerp(d,E),B=e.lerp(t,E);new Oe(w,T).intersects(new Oe(C,B),a);let F=p*s+A;u=v+F,m.doubleToTwoFloats(a,oe,le);let k=u*3;o[k]=oe.x,o[k+1]=oe.y,o[k+2]=oe.z,l[k]=le.x,l[k+1]=le.y,l[k+2]=le.z;let M=f.lerp(_,E);B=e.lerp(t,E),new Oe(x,y).intersects(new Oe(B,M),a),u=g+F,m.doubleToTwoFloats(a,oe,le),k=u*3,o[k]=oe.x,o[k+1]=oe.y,o[k+2]=oe.z,l[k]=le.x,l[k+1]=le.y,l[k+2]=le.z}}}this._createBuffers()}}else console.warn(`strip index ${i} is out of range`)}removeEdge(e){this._path.splice(e,1),this.setPath([].concat(this._path))}setGridSize(e){this._gridSize=e,this.setPath([].concat(this._path))}getPath(){return this._path}setPath(e){this._verticesHigh=[],this._verticesLow=[],this._indexes=[],this._path=[];for(let t=0;t<e.length;t++){let i=e[t][0],r=e[t][1];i instanceof Array&&(i=new m(i[0],i[1],i[2])),r instanceof Array&&(r=new m(r[0],r[1],r[2])),this.addEdge3v(i,r)}}insertEdge3v(e,t,i){if(i<this._path.length){let r=[].concat(this._path);r.splice(i,0,[e,t]),this.setPath(r)}else i===this._path.length&&this.addEdge3v(e,t)}}Ai.__counter__=0;class Ei{constructor(e={}){e.properties=e.properties||{},this.__id=Ei.__counter__++,this.properties=e.properties||{},this.properties.name=this.properties.name!=null?this.properties.name:"",this.childrenNodes=[],this.parent=null,this._cartesian=Xe(e.cartesian),this._lonLat=ar(e.lonlat),this._lonLatMerc=new P,this._altitude=e.altitude||0,this._visibility=e.visibility!=null?e.visibility:!0,this._entityCollection=null,this._entityCollectionIndex=-1,this._layer=null,this._layerIndex=-1,this._pickingColor=new m(0,0,0),this._independentPicking=e.independentPicking||!1,this._featureConstructorArray={billboard:[Na,this.setBillboard],label:[qa,this.setLabel],polyline:[it,this.setPolyline],pointCloud:[wi,this.setPointCloud],geometry:[Ye,this.setGeometry],geoObject:[Ga,this.setGeoObject],strip:[Ai,this.setStrip],ray:[Ti,this.setRay]},this.billboard=this._createOptionFeature("billboard",e.billboard),this.label=this._createOptionFeature("label",e.label),this.polyline=this._createOptionFeature("polyline",e.polyline),this.ray=this._createOptionFeature("ray",e.ray),this.pointCloud=this._createOptionFeature("pointCloud",e.pointCloud),this.geometry=this._createOptionFeature("geometry",e.geometry),this.geoObject=this._createOptionFeature("geoObject",e.geoObject),this.strip=this._createOptionFeature("strip",e.strip)}get id(){return this.__id}isEqual(e){return this.__id===e.__id}get layerIndex(){return this._layerIndex}get instanceName(){return"Entity"}_createOptionFeature(e,t){if(t){let i=this._featureConstructorArray[e];return i[1].call(this,new i[0](t))}return null}getCollectionIndex(){return this._entityCollectionIndex}addTo(e,t=!1){return e.add(this,t),this}remove(){this._layer&&this._layer.removeEntity(this),this._entityCollection&&this._entityCollection.removeEntity(this)}setVisibility(e){this._visibility=e,this.billboard&&this.billboard.setVisibility(e),this.geoObject&&this.geoObject.setVisibility(e),this.label&&this.label.setVisibility(e),this.polyline&&this.polyline.setVisibility(e),this.ray&&this.ray.setVisibility(e),this.geometry&&this.geometry.setVisibility(e);for(let t=0;t<this.childrenNodes.length;t++)this.childrenNodes[t].setVisibility(e)}getVisibility(){return this._visibility}setCartesian3v(e){this.setCartesian(e.x,e.y,e.z)}setCartesian(e,t,i){let r=this._cartesian;r.x=e||0,r.y=t||0,r.z=i||0,this.billboard&&this.billboard.setPosition3v(r),this.geoObject&&this.geoObject.setPosition3v(r),this.label&&this.label.setPosition3v(r);for(let n=0;n<this.childrenNodes.length;n++)this.childrenNodes[n].setCartesian(e,t,i);let s=this._entityCollection;s&&s.renderNode&&s.renderNode.ellipsoid&&(this._lonLat=s.renderNode.ellipsoid.cartesianToLonLat(r),Math.abs(this._lonLat.lat)<se?this._lonLatMerc=this._lonLat.forwardMercator():this._lonLatMerc.lon=this._lonLatMerc.lat=this._lonLatMerc.height=0)}_setCartesian3vSilent(e,t=!1){let i=this._cartesian;i.x=e.x||0,i.y=e.y||0,i.z=e.z||0,this.billboard&&this.billboard.setPosition3v(i),this.geoObject&&this.geoObject.setPosition3v(i),this.label&&this.label.setPosition3v(i);for(let s=0;s<this.childrenNodes.length;s++)this.childrenNodes[s].setCartesian(i.x,i.y,i.z);let r=this._entityCollection;!t&&r&&r.renderNode&&r.renderNode.ellipsoid&&(this._lonLat=r.renderNode.ellipsoid.cartesianToLonLat(i),Math.abs(this._lonLat.lat)<se&&(this._lonLatMerc=this._lonLat.forwardMercator()))}getLonLat(){return this._lonLat.clone()}setLonLat(e){let t=this._lonLat;t.lon=e.lon,t.lat=e.lat,t.height=e.height;let i=this._entityCollection;i&&i.renderNode&&i.renderNode.ellipsoid&&(Math.abs(t.lat)<se&&(this._lonLatMerc=t.forwardMercator()),i.renderNode.ellipsoid.lonLatToCartesianRes(t,this._cartesian),this.setCartesian3v(this._cartesian))}setLonLat2(e,t,i){let r=this._lonLat;r.lon=e,r.lat=t,r.height=i??r.height;let s=this._entityCollection;s&&s.renderNode&&s.renderNode.ellipsoid&&(Math.abs(r.lat)<se?this._lonLatMerc=r.forwardMercator():this._lonLatMerc.lon=this._lonLatMerc.lat=this._lonLatMerc.height=0,s.renderNode.ellipsoid.lonLatToCartesianRes(r,this._cartesian),this.setCartesian3v(this._cartesian))}setAltitude(e){this._altitude=e}getAltitude(){return this._altitude}getCartesian(){return this._cartesian.clone()}setBillboard(e){return this.billboard&&this.billboard.remove(),this.billboard=e,this.billboard._entity=this,this.billboard.setPosition3v(this._cartesian),this.billboard.setVisibility(this._visibility),this._entityCollection&&this._entityCollection.billboardHandler.add(e),e}setLabel(e){return this.label&&this.label.remove(),this.label=e,this.label._entity=this,this.label.setPosition3v(this._cartesian),this.label.setVisibility(this._visibility),this._entityCollection&&this._entityCollection.labelHandler.add(e),e}setRay(e){return this.ray&&this.ray.remove(),this.ray=e,this.ray._entity=this,this.ray.setVisibility(this._visibility),this._entityCollection&&this._entityCollection.rayHandler.add(e),e}setPolyline(e){return this.polyline&&this.polyline.remove(),this.polyline=e,this.polyline._entity=this,this.polyline.setVisibility(this._visibility),this._entityCollection&&this._entityCollection.polylineHandler.add(e),e}setPointCloud(e){return this.pointCloud&&this.pointCloud.remove(),this.pointCloud=e,this.pointCloud._entity=this,this.pointCloud.setVisibility(this._visibility),this._entityCollection&&this._entityCollection.pointCloudHandler.add(e),e}setGeometry(e){this.geometry&&this.geometry.remove(),this.geometry=e,this.geometry._entity=this,this.geometry.setVisibility(this._visibility);let t=this._layer;return this._layer&&this._layer.removeEntity(this),t&&t.add(this),e}setGeoObject(e){return this.geoObject&&this.geoObject.remove(),this.geoObject=e,this.geoObject._entity=this,this.geoObject.setPosition3v(this._cartesian),this.geoObject.setVisibility(this._visibility),this._entityCollection&&this._entityCollection.geoObjectHandler.add(e),e}setStrip(e){return this.strip&&this.strip.remove(),this.strip=e,this.strip._entity=this,this.strip.setVisibility(this._visibility),this._entityCollection&&this._entityCollection.stripHandler.add(e),e}get layer(){return this._layer}get rendererEvents(){return this._layer?this._layer.events:this._entityCollection?this._entityCollection.events:null}appendChild(e){e._entityCollection=this._entityCollection,e._independentPicking||(e._pickingColor=this._pickingColor),e.parent=this,this.childrenNodes.push(e),this._entityCollection&&this._entityCollection.appendChildEntity(e)}setPickingColor(){let e=this._pickingColor;this.billboard&&this.billboard.setPickingColor3v(e),this.label&&this.label.setPickingColor3v(e),this.polyline&&this.polyline.setPickingColor3v(e),this.ray&&this.ray.setPickingColor3v(e),this.strip&&this.strip.setPickingColor3v(e),this.geoObject&&this.geoObject.setPickingColor3v(e);for(let t=0;t<this.childrenNodes.length;t++)this.childrenNodes[t].setPickingColor()}getExtent(){let e,t=this._lonLat;this.billboard||this.label?e=new U(new P(t.lon,t.lat),new P(t.lon,t.lat)):e=new U(new P(180,90),new P(-180,-90));let i=e.southWest,r=e.northEast;if(this.polyline){let s=this.polyline.getExtent();s.southWest.lon<i.lon&&(i.lon=s.southWest.lon),s.southWest.lat<i.lat&&(i.lat=s.southWest.lat),s.northEast.lon>r.lon&&(r.lon=s.northEast.lon),s.northEast.lat>r.lat&&(r.lat=s.northEast.lat)}if(this.geometry){let s=this.geometry.getExtent();s.southWest.lon<i.lon&&(i.lon=s.southWest.lon),s.southWest.lat<i.lat&&(i.lat=s.southWest.lat),s.northEast.lon>r.lon&&(r.lon=s.northEast.lon),s.northEast.lat>r.lat&&(r.lat=s.northEast.lat)}for(let s=0;s<this.childrenNodes.length;s++){let n=this.childrenNodes[s].getExtent();n.southWest.lon<i.lon&&(i.lon=n.southWest.lon),n.southWest.lat<i.lat&&(i.lat=n.southWest.lat),n.northEast.lon>r.lon&&(r.lon=n.northEast.lon),n.northEast.lat>r.lat&&(r.lat=n.northEast.lat)}return e}}Ei.__counter__=0;class Ci{constructor(e){this.__id=Ci.__counter__++,this._name=e||`nonameNode:${this.__id}`,this.topNode=this,this._dictionary={},this._dictionary[this._name]=this,this.childNodes=[],this.parentNode=null}get name(){return this._name}addNode(e){this.parentNode==null?e.topNode=this:e.topNode=this.topNode,e.parentNode=this,e._dictionary=this.topNode._dictionary,this.childNodes.push(e),this.topNode._dictionary[e.name]=e}destroy(){for(let e=0;e<this.childNodes.length;e++)this.childNodes[e].destroy();this._clear()}getNodeByName(e){return this._dictionary[e]}_clear(){this.parentNode=null,this.topNode=this,this.childNodes.length=0}isEqual(e){return e.__id===this.__id}}Ci.__counter__=0;class Ya extends Ci{constructor(e){super(e),this.childNodes=[],this.renderer=null,this.drawMode=0,this.show=!0,this._isActive=!0,this.lightEnabled=!1,this._lights=[],this._lightsNames=[],this._lightsPositions=[],this._lightsParamsv=[],this._lightsParamsf=[],this.entityCollections=[],this._pickingId=-1}addNode(e){super.addNode(e),this.renderer&&e.assign(this.renderer)}assign(e){this.renderer=e,this._pickingId=e.addPickingCallback(this,this._entityCollectionPickingCallback),this.initialize()}initialize(){if(this.renderer&&this.renderer.isInitialized()){for(let e=0;e<this.entityCollections.length;e++)this.entityCollections[e].bindRenderNode(this);this.init()}}init(){}onremove(){}remove(){let e=this.renderer,t=this.name;if(e){e.renderNodes[t]&&e.renderNodes[t].isEqual(this)&&(e.renderNodes[t]=null,delete e.renderNodes[t]);for(let i=0;i<e._renderNodesArr.length;i++)if(e._renderNodesArr[i].isEqual(this)){e._renderNodesArr.splice(i,1);break}e.removePickingCallback(this._pickingId),this._pickingId=-1,this.onremove&&this.onremove()}}addEntityCollection(e,t){return e.addTo(this,t),this}removeEntityCollection(e){e.remove()}addLight(e){return e.addTo(this),this}getLightByName(e){let t=this._lightsNames.indexOf(e);return this._lights[t]}removeLight(e){e.remove()}preDrawNode(){this._isActive&&this._preDrawNodes()}drawNode(){this._isActive&&this._drawNodes()}isActive(){return this._isActive}setActive(e){this._isActive=e,this.renderer&&(this._isActive&&this._pickingId===-1?this._pickingId=this.renderer.addPickingCallback(this,this._entityCollectionPickingCallback):!this._isActive&&this._pickingId!==-1&&(this.renderer.removePickingCallback(this._pickingId),this._pickingId=-1));for(let t=0;t<this.childNodes.length;t++)this.childNodes[t].setActive(e)}setDrawMode(e){this.drawMode=e;for(let t=0;t<this.childNodes.length;t++)this.childNodes[t].setDrawMode(e)}transformLights(){for(let e=0;e<this._lights.length;e++){let t=e*3,i;i=this._lights[e]._position,this._lightsPositions[t]=i.x,this._lightsPositions[t+1]=i.y,this._lightsPositions[t+2]=i.z}}updateBillboardsTexCoords(){for(let e=0;e<this.entityCollections.length;e++)this.entityCollections[e].billboardHandler.refreshTexCoordsArr()}frame(){}preFrame(){}_preDrawNodes(){for(let e=0;e<this.childNodes.length;e++)this.childNodes[e]._isActive&&this.childNodes[e]._preDrawNodes();this.show&&(this.preFrame(),this.drawEntityCollections(this.entityCollections))}_drawNodes(){for(let e=0;e<this.childNodes.length;e++)this.childNodes[e]._isActive&&this.childNodes[e]._drawNodes();this.show&&this.frame()}drawEntityCollections(e){this.renderer.enqueueEntityCollectionsToDraw(e)}drawPickingEntityCollections(e){if(e.length){let t=e.length;for(;t--;)e[t]._fadingOpacity&&e[t].billboardHandler.drawPicking();for(t=e.length;t--;)e[t]._fadingOpacity&&e[t].geoObjectHandler.drawPicking();for(t=e.length;t--;)e[t]._fadingOpacity&&e[t].labelHandler.drawPicking();for(t=e.length;t--;)e[t]._fadingOpacity&&e[t].rayHandler.drawPicking();for(t=e.length;t--;)e[t]._visibility&&e[t].polylineHandler.drawPicking();for(t=e.length;t--;)e[t]._visibility&&e[t].stripHandler.drawPicking()}}_entityCollectionPickingCallback(){this.drawPickingEntityCollections(this.entityCollections)}}class Wa{constructor(){this._container=document.createElement("div"),this._container.classList.add("ogConsole"),this._container.style.display="none",document.body&&document.body.appendChild(this._container),this._visibility=!1}getVisibility(){return this._visibility}setVisibility(e){this._visibility!=e&&(this._visibility=e,this._visibility?this.show():this.hide())}show(){this._container.parentNode||document.body&&document.body.appendChild(this._container),this._container.style.display="block",this._visibility=!0}hide(){this._container.style.display="none",this._visibility=!1}logErr(e){let t=document.createElement("div");t.classList.add("ogConsole-text"),t.classList.add("ogConsole-error"),t.innerHTML="error: "+e,console.trace(t.innerHTML),this._container.appendChild(t),this.show()}logWrn(e){let t=document.createElement("div");t.classList.add("ogConsole-text"),t.classList.add("ogConsole-warning"),t.innerHTML="warning: "+e,console.trace(t.innerHTML),this._container.appendChild(t),this.show()}log(e){let t=document.createElement("div");t.classList.add("ogConsole-text"),t.innerHTML=e,console.trace(e),this._container.appendChild(t),this.show()}}const He=new Wa;let Yt=["FLOAT","DOUBLE","BOOL","INT","UINT","VEC2","VEC3","VEC4","DVEC2","DVEC3","DVEC4","BVEC2","BVEC3","BVEC4","IVEC2","IVEC3","IVEC4","UVEC2","UVEC3","UVEC4","MAT2","DMAT2","MAT3","DMAT3","MAT4","DMAT4","MAT2X3","MAT2X4","MAT3X2","MAT3X4","MAT4X2","MAT4X3","DMAT2X3","DMAT2X4","DMAT3X2","DMAT3X4","DMAT4X2","DMAT4X3","SAMPLER1D","SAMPLER2D","SAMPLER3D","SAMPLERCUBE","SAMPLER2DSHADOW","SAMPLER2DARRAY","INTXX","FLOATXX"];const ge={};for(let h=0;h<Yt.length;h++)ge[Yt[h]]=h;const hr={};for(let h=0;h<Yt.length;h++)hr[Yt[h].toLowerCase()]=ge[Yt[h]];const be={u:[],a:[]};be.u[ge.MAT4]=function(h,e){h.gl.uniformMatrix4fv(e._pName,!1,e.value)};be.u[ge.MAT3]=function(h,e){h.gl.uniformMatrix3fv(e._pName,!1,e.value)};be.u[ge.FLOAT]=function(h,e){h.gl.uniform1f(e._pName,e.value)};be.u[ge.INT]=function(h,e){h.gl.uniform1i(e._pName,e.value)};be.u[ge.VEC2]=function(h,e){h.gl.uniform2fv(e._pName,e.value)};be.u[ge.VEC3]=function(h,e){h.gl.uniform3fv(e._pName,e.value)};be.u[ge.VEC4]=function(h,e){h.gl.uniform4fv(e._pName,e.value)};be.u[ge.SAMPLER2D]=function(h,e){let t=h.gl;t.activeTexture(t.TEXTURE0+h._textureID),t.bindTexture(t.TEXTURE_2D,e.value),t.uniform1i(e._pName,h._textureID),h._textureID++};be.u[ge.SAMPLERCUBE]=function(h,e){let t=h.gl;t.activeTexture(t.TEXTURE0+h._textureID),t.bindTexture(t.TEXTURE_CUBE_MAP,e.value),t.uniform1i(e._pName,h._textureID),h._textureID++};be.u[ge.SAMPLER2DARRAY]=function(h,e){let t=e.value,i=h.gl,r=t.length,s=new Int32Array(r);for(let n=0;n<r;n++)i.activeTexture(i.TEXTURE0+h._textureID+n),i.bindTexture(i.TEXTURE_2D,t[n]),s[n]=n;i.uniform1iv(e._pName,s)};be.u[ge.INTXX]=function(h,e){h.gl.uniform1iv(e._pName,e.value)};be.u[ge.FLOATXX]=function(h,e){h.gl.uniform1fv(e._pName,e.value)};be.a[ge.FLOAT]=function(h,e){h.gl.vertexAttrib1f(e._pName,e.value)};be.a[ge.VEC2]=function(h,e){h.gl.vertexAttrib2fv(e._pName,e.value)};be.a[ge.VEC3]=function(h,e){h.gl.vertexAttrib3fv(e._pName,e.value)};const Xa=["BYTE","SHORT","UNSIGNED_BYTE","UNSIGNED_SHORT","FLOAT","HALF_FLOAT"];class G{constructor(e,t){this.name=e,this._attributes={};for(let i in t.attributes)typeof t.attributes[i]=="string"||typeof t.attributes[i]=="number"?this._attributes[i]={type:t.attributes[i]}:this._attributes[i]=t.attributes[i];this._uniforms={};for(let i in t.uniforms)typeof t.uniforms[i]=="string"||typeof t.uniforms[i]=="number"?this._uniforms[i]={type:t.uniforms[i]}:this._uniforms[i]=t.uniforms[i];this.vertexShader=t.vertexShader,this.fragmentShader=t.fragmentShader,this.gl=null,this._variables={},this._p=null,this._textureID=0,this._attribArrays=[],this._attribDivisor=[],this.attributes={},this.uniforms={},this.vertexAttribDivisor=null,this.drawElementsInstanced=null}static bindBuffer(e,t){let i=e.gl;i&&(i.bindBuffer(i.ARRAY_BUFFER,t.value),i.vertexAttribPointer(t._pName,t.value.itemSize,t.itemType,t.normalized,0,0))}use(){this.gl&&this.gl.useProgram(this._p)}set(e){this._textureID=0;for(let t in e)this._variables[t].value=e[t],this._variables[t].func(this,this._variables[t])}apply(){this._textureID=0;let e=this._variables;for(let t in e)e[t].func(this,e[t])}drawIndexBuffer(e,t){let i=this.gl;i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t),i.drawElements(e,t.numItems,i.UNSIGNED_SHORT,0)}drawArrays(e,t){this.gl.drawArrays(e,0,t)}_getShaderCompileStatus(e,t){return this.gl?(this.gl.shaderSource(e,t),this.gl.compileShader(e),this.gl.getShaderParameter(e,this.gl.COMPILE_STATUS)?!0:(He.logErr(`Shader program "${this.name}":${this.gl.getShaderInfoLog(e)}.`),!1)):!1}_createVertexShader(e){if(!this.gl)return;let t=this.gl.createShader(this.gl.VERTEX_SHADER);if(t&&this._getShaderCompileStatus(t,e))return t}_createFragmentShader(e){if(!this.gl)return;let t=this.gl.createShader(this.gl.FRAGMENT_SHADER);if(t&&this._getShaderCompileStatus(t,e))return t}disableAttribArrays(){let e=this.gl,t=this._attribArrays;for(let i=0,r=t.length;i<r;i++)e.disableVertexAttribArray(t[i]),this.vertexAttribDivisor(t[i],0)}enableAttribArrays(){let e=this.gl,t=this._attribArrays,i=this._attribDivisor;for(let r=0,s=t.length;r<s;r++)e.enableVertexAttribArray(t[r]),this.vertexAttribDivisor(t[r],i[r])}delete(){this.gl&&this.gl.deleteProgram(this._p)}createProgram(e){if(this.gl=e,this._p=this.gl.createProgram(),!this._p)return;let t=this._createFragmentShader(this.fragmentShader),i=this._createVertexShader(this.vertexShader);if(!(!t||!i)){if(e.attachShader(this._p,t),e.attachShader(this._p,i),e.linkProgram(this._p),!this.drawElementsInstanced)if(e.drawElementsInstanced)this.drawElementsInstanced=e.drawElementsInstanced.bind(e);else{let r=e.getExtension("ANGLE_instanced_arrays");r&&(this.drawElementsInstanced=r.drawElementsInstancedANGLE.bind(r))}if(!this.vertexAttribDivisor)if(e.vertexAttribDivisor)this.vertexAttribDivisor=e.vertexAttribDivisor.bind(e);else{let r=e.getExtension("ANGLE_instanced_arrays");r&&(this.vertexAttribDivisor=r.vertexAttribDivisorANGLE.bind(r))}if(!e.getProgramParameter(this._p,e.LINK_STATUS)){He.logErr(`Shader program "${this.name}": initialization failed. ${e.getProgramInfoLog(this._p)}.`),e.deleteProgram(this._p);return}this.use();for(let r in this._attributes){this._variables[r]=this._attributes[r],this._attributes[r].func=G.bindBuffer;let s=this._attributes[r].itemType,n=s?s.trim().toUpperCase():"FLOAT";if(Xa.indexOf(n)==-1?(He.logErr(`Shader program "${this.name}": attribute '${r}', item type '${this._attributes[r].itemType}' not exists.`),this._attributes[r].itemType=e.FLOAT):this._attributes[r].itemType=e[n],this._attributes[r].normalized=this._attributes[r].normalized||!1,this._attributes[r].divisor=this._attributes[r].divisor||0,this._p[r]=e.getAttribLocation(this._p,r),this._p[r]==null){He.logErr(`Shader program "${this.name}":  attribute '${r}' not exists.`),e.deleteProgram(this._p);return}let a=this._attributes[r].type;typeof a=="string"&&(a=hr[a.trim().toLowerCase()]);let o=this._attributes[r].divisor;if(a===ge.MAT4){let l=this._p[r];this._attribArrays.push(l,l+1,l+2,l+3),this._attribDivisor.push(o,o,o,o)}else this._attribArrays.push(this._p[r]),this._attribDivisor.push(o);e.enableVertexAttribArray(this._p[r]),this._attributes[r]._pName=this._p[r],this.attributes[r]=this._p[r]}for(let r in this._uniforms){if(typeof this._uniforms[r].type=="string"){let s=this._uniforms[r].type;this._uniforms[r].func=be.u[hr[s.trim().toLowerCase()]]}else this._uniforms[r].func=be.u[this._uniforms[r].type];if(this._variables[r]=this._uniforms[r],this._p[r]=e.getUniformLocation(this._p,r),this._p[r]==null){He.logErr(`Shader program "${this.name}": uniform '${r}' not exists.`),e.deleteProgram(this._p);return}this._uniforms[r]._pName=this._p[r],this.uniforms[r]=this._p[r]}e.detachShader(this._p,t),e.detachShader(this._p,i),e.deleteShader(t),e.deleteShader(i)}}}const tn=`vec2 project(vec4 p) {
                    return (0.5 * p.xyz / p.w + 0.5).xy * viewport;
                }`,rn=`mat2 rotate2d(float angle) {
        return mat2(cos(angle), -sin(angle),
           sin(angle), cos(angle));
     }`;function Za(){return new G("billboardPicking",{uniforms:{viewport:"vec2",projectionMatrix:"mat4",viewMatrix:"mat4",eyePositionHigh:"vec3",eyePositionLow:"vec3",planetRadius:"float",uScaleByDistance:"vec3",opacity:"float",depthOffset:"float"},attributes:{a_vertices:"vec2",a_positionsHigh:"vec3",a_positionsLow:"vec3",a_offset:"vec3",a_size:"vec2",a_rotation:"float",a_rgba:"vec4"},vertexShader:`precision highp float;
            attribute vec2 a_vertices;
            attribute vec3 a_positionsHigh;
            attribute vec3 a_positionsLow;
            attribute vec3 a_offset;
            attribute vec2 a_size;
            attribute float a_rotation;
            attribute vec4 a_rgba;

            varying vec3 v_rgb;

            uniform mat4 viewMatrix;
            uniform mat4 projectionMatrix;
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;
            uniform vec3 uScaleByDistance;
            uniform float opacity;
            uniform float planetRadius;
            uniform vec2 viewport;
            uniform float depthOffset;

            const vec3 ZERO3 = vec3(0.0);

            ${tn}

            ${rn}

            void main() {

                vec3 a_positions = a_positionsHigh + a_positionsLow;
                vec3 cameraPos = eyePositionHigh + eyePositionLow;

                vec3 look = a_positions - cameraPos;
                float lookDist = length(look);
                v_rgb = a_rgba.rgb;

                if(opacity * step(lookDist, sqrt(dot(cameraPos,cameraPos) - planetRadius) + sqrt(dot(a_positions,a_positions) - planetRadius)) == 0.0){
                    return;
                }

                //vec3 up = vec3( viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1] );
                //vec3 right = vec3( viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0] );

                float scd = (1.0 - smoothstep(uScaleByDistance[0], uScaleByDistance[1], lookDist)) * (1.0 - step(uScaleByDistance[2], lookDist));

                mat4 viewMatrixRTE = viewMatrix;
                viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                vec3 highDiff = a_positionsHigh - eyePositionHigh;
                vec3 lowDiff = a_positionsLow - eyePositionLow;
                vec4 posRTE = viewMatrixRTE * vec4(highDiff + lowDiff, 1.0);
                vec4 projPos = projectionMatrix * posRTE;
                                
                float camSlope = dot(vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]), normalize(cameraPos));                
                if(camSlope > 0.5) {
                    float dist = dot(look, normalize(cameraPos));
                    projPos.z += dist * 0.02;
                }else{
                    projPos.z += -(abs(projPos.z)) * 0.002;                 
                }
                
                projPos.z += depthOffset + a_offset.z;
                                
                vec2 screenPos = project(projPos);

                vec2 v =  screenPos + rotate2d(a_rotation) * (a_vertices * a_size * scd + a_offset.xy);

                gl_Position = vec4((2.0 * v / viewport - 1.0) * projPos.w, projPos.z, projPos.w);
            }`,fragmentShader:`precision highp float;
            varying vec3 v_rgb;
            void main () {
                gl_FragColor = vec4(v_rgb, 1.0);
            }`})}function $a(){return new G("billboard",{uniforms:{viewport:"vec2",u_texture:"sampler2d",projectionMatrix:"mat4",viewMatrix:"mat4",eyePositionHigh:"vec3",eyePositionLow:"vec3",planetRadius:"float",uScaleByDistance:"vec3",opacity:"float",depthOffset:"float"},attributes:{a_vertices:"vec2",a_texCoord:"vec2",a_positionsHigh:"vec3",a_positionsLow:"vec3",a_offset:"vec3",a_size:"vec2",a_rotation:"float",a_rgba:"vec4"},vertexShader:`precision highp float;
            attribute vec2 a_vertices;
            attribute vec2 a_texCoord;
            attribute vec3 a_positionsHigh;
            attribute vec3 a_positionsLow;
            attribute vec3 a_offset;
            attribute vec2 a_size;
            attribute float a_rotation;
            attribute vec4 a_rgba;

            varying vec2 v_texCoords;
            varying vec4 v_rgba;

            uniform mat4 viewMatrix;
            uniform mat4 projectionMatrix;
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;
            uniform vec3 uScaleByDistance;
            uniform float opacity;
            uniform float planetRadius;
            uniform vec2 viewport;
            uniform float depthOffset;

            const vec3 ZERO3 = vec3(0.0);

            ${tn}

            ${rn}

            void main() {
                
                vec3 a_positions = a_positionsHigh + a_positionsLow;
                vec3 cameraPos = eyePositionHigh + eyePositionLow;

                v_texCoords = a_texCoord;
                vec3 look = a_positions - cameraPos;
                float lookDist = length(look);
                v_rgba = a_rgba;

                if(opacity * step(lookDist, sqrt(dot(cameraPos,cameraPos) - planetRadius) + sqrt(dot(a_positions,a_positions) - planetRadius)) == 0.0){
                    return;
                }

                //vec3 up = vec3( viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1] );
                //vec3 right = vec3( viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0] );

                float scd = (1.0 - smoothstep(uScaleByDistance[0], uScaleByDistance[1], lookDist)) * (1.0 - step(uScaleByDistance[2], lookDist));

                mat4 viewMatrixRTE = viewMatrix;
                viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                vec3 highDiff = a_positionsHigh - eyePositionHigh;
                vec3 lowDiff = a_positionsLow - eyePositionLow;
                vec4 posRTE = viewMatrixRTE * vec4(highDiff + lowDiff, 1.0);
                vec4 projPos = projectionMatrix * posRTE;
                                                
                float camSlope = dot(vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]), normalize(cameraPos));                
                if(camSlope > 0.5) {
                    float dist = dot(look, normalize(cameraPos));
                    projPos.z += dist * 0.02;
                }else{
                    projPos.z += -(abs(projPos.z)) * 0.002;                 
                }
                
                projPos.z += depthOffset + a_offset.z;
                
                vec2 screenPos = project(projPos);

                vec2 v = screenPos + rotate2d(a_rotation) * (a_vertices * a_size * scd + a_offset.xy);

                gl_Position = vec4((2.0 * v / viewport - 1.0) * projPos.w, projPos.z, projPos.w);
            }`,fragmentShader:`precision highp float;
            uniform sampler2D u_texture;
            varying vec2 v_texCoords;
            varying vec4 v_rgba;
            void main () {
                vec4 color = texture2D(u_texture, v_texCoords);
                if(color.a < 0.1)
                    discard;
                gl_FragColor = color * v_rgba;
            }`})}const Vr=0,Gr=1,qr=2,jr=3,Yr=4,Wr=5,Xr=6,Zr=7;class ii{constructor(e){this.__id=ii.__counter__++,this.pickingEnabled=!0,this._entityCollection=e,this._renderer=null,this._billboards=[],this._positionHighBuffer=null,this._positionLowBuffer=null,this._sizeBuffer=null,this._offsetBuffer=null,this._rgbaBuffer=null,this._rotationBuffer=null,this._texCoordBuffer=null,this._vertexBuffer=null,this._pickingColorBuffer=null,this._texCoordArr=new Float32Array([]),this._vertexArr=new Float32Array([]),this._positionHighArr=new Float32Array([]),this._positionLowArr=new Float32Array([]),this._sizeArr=new Float32Array([]),this._offsetArr=new Float32Array([]),this._rgbaArr=new Float32Array([]),this._rotationArr=new Float32Array([]),this._pickingColorArr=new Float32Array([]),this._buffersUpdateCallbacks=[],this._buffersUpdateCallbacks[Vr]=this.createPickingColorBuffer,this._buffersUpdateCallbacks[Gr]=this.createPositionBuffer,this._buffersUpdateCallbacks[qr]=this.createSizeBuffer,this._buffersUpdateCallbacks[jr]=this.createOffsetBuffer,this._buffersUpdateCallbacks[Yr]=this.createRgbaBuffer,this._buffersUpdateCallbacks[Wr]=this.createRotationBuffer,this._buffersUpdateCallbacks[Xr]=this.createTexCoordBuffer,this._buffersUpdateCallbacks[Zr]=this.createVertexBuffer,this._changedBuffers=new Array(this._buffersUpdateCallbacks.length)}isEqual(e){return e&&e.__id===this.__id}static concArr(e,t){for(let i=0;i<t.length;i++)e.push(t[i])}initProgram(){this._renderer&&this._renderer.handler&&(this._renderer.handler.programs.billboard||this._renderer.handler.addProgram($a()),this._renderer.handler.programs.billboardPicking||this._renderer.handler.addProgram(Za()))}setRenderer(e){this._renderer=e,this.initProgram()}refresh(){let e=this._changedBuffers.length;for(;e--;)this._changedBuffers[e]=!0}_removeBillboards(){let e=this._billboards.length;for(;e--;){let t=this._billboards[e];t._handlerIndex=-1,t._handler=null,t._isReady=!1,t._lockId=he}this._billboards.length=0,this._billboards=[]}clear(){this._texCoordArr=null,this._vertexArr=null,this._positionHighArr=null,this._positionLowArr=null,this._sizeArr=null,this._offsetArr=null,this._rgbaArr=null,this._rotationArr=null,this._pickingColorArr=null,this._texCoordArr=new Float32Array([]),this._vertexArr=new Float32Array([]),this._positionHighArr=new Float32Array([]),this._positionLowArr=new Float32Array([]),this._sizeArr=new Float32Array([]),this._offsetArr=new Float32Array([]),this._rgbaArr=new Float32Array([]),this._rotationArr=new Float32Array([]),this._pickingColorArr=new Float32Array([]),this._removeBillboards(),this._deleteBuffers(),this.refresh()}_deleteBuffers(){if(this._renderer){let e=this._renderer.handler.gl;e.deleteBuffer(this._positionHighBuffer),e.deleteBuffer(this._positionLowBuffer),e.deleteBuffer(this._sizeBuffer),e.deleteBuffer(this._offsetBuffer),e.deleteBuffer(this._rgbaBuffer),e.deleteBuffer(this._rotationBuffer),e.deleteBuffer(this._vertexBuffer),e.deleteBuffer(this._texCoordBuffer),e.deleteBuffer(this._pickingColorBuffer)}this._positionHighBuffer=null,this._positionLowBuffer=null,this._sizeBuffer=null,this._offsetBuffer=null,this._rgbaBuffer=null,this._rotationBuffer=null,this._vertexBuffer=null,this._texCoordBuffer=null,this._pickingColorBuffer=null}update(){if(this._renderer){let e=this._changedBuffers.length;for(;e--;)this._changedBuffers[e]&&(this._buffersUpdateCallbacks[e].call(this),this._changedBuffers[e]=!1)}}add(e){e._handlerIndex==-1&&(e._isReady=!0,e._handler=this,e._handlerIndex=this._billboards.length,this._billboards.push(e))}_displayPASS(){let e=this._renderer,t=e.handler;t.programs.billboard.activate();let i=t.programs.billboard._program,r=i.attributes,s=i.uniforms,n=t.gl,a=this._entityCollection;n.disable(n.CULL_FACE),n.uniform1f(s.depthOffset,a.polygonOffsetUnits),n.uniform1i(s.u_texture,0),n.uniformMatrix4fv(s.viewMatrix,!1,e.activeCamera.getViewMatrix()),n.uniformMatrix4fv(s.projectionMatrix,!1,e.activeCamera.getProjectionMatrix()),n.uniform3fv(s.eyePositionHigh,e.activeCamera.eyeHigh),n.uniform3fv(s.eyePositionLow,e.activeCamera.eyeLow),n.uniform3fv(s.uScaleByDistance,a.scaleByDistance),n.uniform1f(s.opacity,a._fadingOpacity),n.bindBuffer(n.ARRAY_BUFFER,this._texCoordBuffer),n.vertexAttribPointer(r.a_texCoord,this._texCoordBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._vertexBuffer),n.vertexAttribPointer(r.a_vertices,this._vertexBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._positionHighBuffer),n.vertexAttribPointer(r.a_positionsHigh,this._positionHighBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._positionLowBuffer),n.vertexAttribPointer(r.a_positionsLow,this._positionLowBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._rgbaBuffer),n.vertexAttribPointer(r.a_rgba,this._rgbaBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._sizeBuffer),n.vertexAttribPointer(r.a_size,this._sizeBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._offsetBuffer),n.vertexAttribPointer(r.a_offset,this._offsetBuffer.itemSize,n.FLOAT,!1,0,0),n.uniform1f(s.planetRadius,a.renderNode._planetRadius2||0),n.uniform2fv(s.viewport,[t.canvas.clientWidth,t.canvas.clientHeight]),n.bindBuffer(n.ARRAY_BUFFER,this._rotationBuffer),n.vertexAttribPointer(r.a_rotation,this._rotationBuffer.itemSize,n.FLOAT,!1,0,0),n.drawArrays(n.TRIANGLES,0,this._vertexBuffer.numItems),n.enable(n.CULL_FACE)}_pickingPASS(){let e=this._renderer,t=e.handler;t.programs.billboardPicking.activate();let i=t.programs.billboardPicking._program,r=i.attributes,s=i.uniforms,n=t.gl,a=this._entityCollection;n.disable(n.CULL_FACE),n.uniform1f(s.depthOffset,a.polygonOffsetUnits),n.uniformMatrix4fv(s.viewMatrix,!1,e.activeCamera.getViewMatrix()),n.uniformMatrix4fv(s.projectionMatrix,!1,e.activeCamera.getProjectionMatrix()),n.uniform3fv(s.eyePositionHigh,e.activeCamera.eyeHigh),n.uniform3fv(s.eyePositionLow,e.activeCamera.eyeLow),n.uniform3fv(s.uScaleByDistance,a.scaleByDistance),n.uniform1f(s.opacity,a._fadingOpacity),n.bindBuffer(n.ARRAY_BUFFER,this._vertexBuffer),n.vertexAttribPointer(r.a_vertices,this._vertexBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._positionHighBuffer),n.vertexAttribPointer(r.a_positionsHigh,this._positionHighBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._positionLowBuffer),n.vertexAttribPointer(r.a_positionsLow,this._positionLowBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._pickingColorBuffer),n.vertexAttribPointer(r.a_rgba,this._pickingColorBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._sizeBuffer),n.vertexAttribPointer(r.a_size,this._sizeBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._offsetBuffer),n.vertexAttribPointer(r.a_offset,this._offsetBuffer.itemSize,n.FLOAT,!1,0,0),n.uniform1f(s.planetRadius,a.renderNode._planetRadius2||0),n.uniform2fv(s.viewport,[t.canvas.clientWidth,t.canvas.clientHeight]),n.bindBuffer(n.ARRAY_BUFFER,this._rotationBuffer),n.vertexAttribPointer(r.a_rotation,this._rotationBuffer.itemSize,n.FLOAT,!1,0,0),n.drawArrays(n.TRIANGLES,0,this._vertexBuffer.numItems),n.enable(n.CULL_FACE)}draw(){this._billboards.length&&(this.update(),this._displayPASS())}drawPicking(){this._billboards.length&&this.pickingEnabled&&this._pickingPASS()}reindexBillboardsArray(e){let t=this._billboards;for(let i=e;i<t.length;i++)t[i]._handlerIndex=i}_removeBillboard(e){let t=e._handlerIndex;this._billboards.splice(t,1);let i=t*24;this._rgbaArr=K(this._rgbaArr,i,24),i=t*18,this._positionHighArr=K(this._positionHighArr,i,18),this._positionLowArr=K(this._positionLowArr,i,18),this._offsetArr=K(this._offsetArr,i,18),this._pickingColorArr=K(this._pickingColorArr,i,18),i=t*12,this._vertexArr=K(this._vertexArr,i,12),this._sizeArr=K(this._sizeArr,i,12),this._texCoordArr=K(this._texCoordArr,i,12),i=t*6,this._rotationArr=K(this._rotationArr,i,6),this.reindexBillboardsArray(t),this.refresh(),e._handlerIndex=-1,e._handler=null,e._isReady=!1,e._lockId=he}setAlignedAxisArr(e,t){}remove(e){e._handler&&(e._isReady&&this.__id===e._handler.__id?this._removeBillboard(e):e._handler=null)}setPositionArr(e,t,i){let r=e*18,s=this._positionHighArr,n=t.x,a=t.y,o=t.z;s[r]=n,s[r+1]=a,s[r+2]=o,s[r+3]=n,s[r+4]=a,s[r+5]=o,s[r+6]=n,s[r+7]=a,s[r+8]=o,s[r+9]=n,s[r+10]=a,s[r+11]=o,s[r+12]=n,s[r+13]=a,s[r+14]=o,s[r+15]=n,s[r+16]=a,s[r+17]=o,s=this._positionLowArr,n=i.x,a=i.y,o=i.z,s[r]=n,s[r+1]=a,s[r+2]=o,s[r+3]=n,s[r+4]=a,s[r+5]=o,s[r+6]=n,s[r+7]=a,s[r+8]=o,s[r+9]=n,s[r+10]=a,s[r+11]=o,s[r+12]=n,s[r+13]=a,s[r+14]=o,s[r+15]=n,s[r+16]=a,s[r+17]=o,this._changedBuffers[Gr]=!0}setPickingColorArr(e,t){let i=e*18,r=this._pickingColorArr,s=t.x/255,n=t.y/255,a=t.z/255;r[i]=s,r[i+1]=n,r[i+2]=a,r[i+3]=s,r[i+4]=n,r[i+5]=a,r[i+6]=s,r[i+7]=n,r[i+8]=a,r[i+9]=s,r[i+10]=n,r[i+11]=a,r[i+12]=s,r[i+13]=n,r[i+14]=a,r[i+15]=s,r[i+16]=n,r[i+17]=a,this._changedBuffers[Vr]=!0}setSizeArr(e,t,i){let r=e*12,s=this._sizeArr,n=t,a=i;s[r]=n,s[r+1]=a,s[r+2]=n,s[r+3]=a,s[r+4]=n,s[r+5]=a,s[r+6]=n,s[r+7]=a,s[r+8]=n,s[r+9]=a,s[r+10]=n,s[r+11]=a,this._changedBuffers[qr]=!0}setOffsetArr(e,t){let i=e*18,r=this._offsetArr,s=t.x,n=t.y,a=t.z;r[i]=s,r[i+1]=n,r[i+2]=a,r[i+3]=s,r[i+4]=n,r[i+5]=a,r[i+6]=s,r[i+7]=n,r[i+8]=a,r[i+9]=s,r[i+10]=n,r[i+11]=a,r[i+12]=s,r[i+13]=n,r[i+14]=a,r[i+15]=s,r[i+16]=n,r[i+17]=a,this._changedBuffers[jr]=!0}setRgbaArr(e,t){let i=e*24,r=this._rgbaArr,s=t.x,n=t.y,a=t.z,o=t.w;r[i]=s,r[i+1]=n,r[i+2]=a,r[i+3]=o,r[i+4]=s,r[i+5]=n,r[i+6]=a,r[i+7]=o,r[i+8]=s,r[i+9]=n,r[i+10]=a,r[i+11]=o,r[i+12]=s,r[i+13]=n,r[i+14]=a,r[i+15]=o,r[i+16]=s,r[i+17]=n,r[i+18]=a,r[i+19]=o,r[i+20]=s,r[i+21]=n,r[i+22]=a,r[i+23]=o,this._changedBuffers[Yr]=!0}setRotationArr(e,t){let i=e*6,r=this._rotationArr;r[i]=t,r[i+1]=t,r[i+2]=t,r[i+3]=t,r[i+4]=t,r[i+5]=t,this._changedBuffers[Wr]=!0}setTexCoordArr(e,t){let i=e*12,r=this._texCoordArr;r[i]=t[0],r[i+1]=t[1],r[i+2]=t[2],r[i+3]=t[3],r[i+4]=t[4],r[i+5]=t[5],r[i+6]=t[6],r[i+7]=t[7],r[i+8]=t[8],r[i+9]=t[9],r[i+10]=t[10],r[i+11]=t[11],this._changedBuffers[Xr]=!0}setVisibility(e,t){let i;t?i=[-.5,.5,-.5,-.5,.5,-.5,.5,-.5,.5,.5,-.5,.5]:i=[0,0,0,0,0,0,0,0,0,0,0,0],this.setVertexArr(e,i)}setVertexArr(e,t){let i=e*12,r=this._vertexArr;r[i]=t[0],r[i+1]=t[1],r[i+2]=t[2],r[i+3]=t[3],r[i+4]=t[4],r[i+5]=t[5],r[i+6]=t[6],r[i+7]=t[7],r[i+8]=t[8],r[i+9]=t[9],r[i+10]=t[10],r[i+11]=t[11],this._changedBuffers[Zr]=!0}createPositionBuffer(){let e=this._renderer.handler,t=this._positionHighArr.length/3;(!this._positionHighBuffer||this._positionHighBuffer.numItems!==t)&&(e.gl.deleteBuffer(this._positionHighBuffer),e.gl.deleteBuffer(this._positionLowBuffer),this._positionHighBuffer=e.createStreamArrayBuffer(3,t),this._positionLowBuffer=e.createStreamArrayBuffer(3,t)),e.setStreamArrayBuffer(this._positionHighBuffer,this._positionHighArr),e.setStreamArrayBuffer(this._positionLowBuffer,this._positionLowArr)}createSizeBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._sizeBuffer),this._sizeBuffer=e.createArrayBuffer(this._sizeArr,2,this._sizeArr.length/2)}createOffsetBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._offsetBuffer),this._offsetBuffer=e.createArrayBuffer(this._offsetArr,3,this._offsetArr.length/3)}createRgbaBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._rgbaBuffer),this._rgbaBuffer=e.createArrayBuffer(this._rgbaArr,4,this._rgbaArr.length/4)}createRotationBuffer(){let e=this._renderer.handler;(!this._rotationBuffer||this._rotationBuffer.numItems!==this._rotationArr.length)&&(e.gl.deleteBuffer(this._rotationBuffer),this._rotationBuffer=e.createStreamArrayBuffer(1,this._rotationArr.length)),e.setStreamArrayBuffer(this._rotationBuffer,this._rotationArr)}createVertexBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._vertexBuffer),this._vertexBuffer=e.createArrayBuffer(this._vertexArr,2,this._vertexArr.length/2)}createTexCoordBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._texCoordBuffer),this._texCoordBuffer=e.createArrayBuffer(this._texCoordArr,2,this._texCoordArr.length/2)}createPickingColorBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._pickingColorBuffer),this._pickingColorBuffer=e.createArrayBuffer(this._pickingColorArr,3,this._pickingColorArr.length/3)}refreshTexCoordsArr(){}}ii.__counter__=0;class Ka extends ii{constructor(e){super(e),this._billboards=[]}add(e){if(e._handlerIndex==-1){super.add(e),this._addBillboardToArrays(e),this.refresh();let t=e.getSrc()||e.getImage()&&e.getImage().src;t&&e.setSrc(t)}}_addBillboardToArrays(e){e.getVisibility()?this._vertexArr=$(this._vertexArr,[-.5,.5,-.5,-.5,.5,-.5,.5,-.5,.5,.5,-.5,.5]):this._vertexArr=$(this._vertexArr,[0,0,0,0,0,0,0,0,0,0,0,0]),this._texCoordArr=$(this._texCoordArr,[0,0,0,0,0,0,0,0,0,0,0,0]);let t=e._positionHigh.x,i=e._positionHigh.y,r=e._positionHigh.z,s;this._positionHighArr=$(this._positionHighArr,[t,i,r,t,i,r,t,i,r,t,i,r,t,i,r,t,i,r]),t=e._positionLow.x,i=e._positionLow.y,r=e._positionLow.z,this._positionLowArr=$(this._positionLowArr,[t,i,r,t,i,r,t,i,r,t,i,r,t,i,r,t,i,r]),t=e._width,i=e._height,this._sizeArr=$(this._sizeArr,[t,i,t,i,t,i,t,i,t,i,t,i]),t=e._offset.x,i=e._offset.y,r=e._offset.z,this._offsetArr=$(this._offsetArr,[t,i,r,t,i,r,t,i,r,t,i,r,t,i,r,t,i,r]),t=e._color.x,i=e._color.y,r=e._color.z,s=e._color.w,this._rgbaArr=$(this._rgbaArr,[t,i,r,s,t,i,r,s,t,i,r,s,t,i,r,s,t,i,r,s,t,i,r,s]),t=e._rotation,this._rotationArr=$(this._rotationArr,[t,t,t,t,t,t]),t=e._entity._pickingColor.x/255,i=e._entity._pickingColor.y/255,r=e._entity._pickingColor.z/255,this._pickingColorArr=$(this._pickingColorArr,[t,i,r,t,i,r,t,i,r,t,i,r,t,i,r,t,i,r])}get billboards(){return this._billboards}refreshTexCoordsArr(){if(this._entityCollection&&this._renderer){let t=this._renderer.billboardsTextureAtlas;for(let i=0;i<this._billboards.length;i++){let r=this._billboards[i],s=r.getImage();if(s){let n=t.get(s.__nodeIndex);n&&this.setTexCoordArr(r._handlerIndex,n.texCoords)}}}}}const sn=`vec3 qRotate(vec4 q, vec3 v){
    return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}`,Qa=()=>new G("geo_object",{uniforms:{viewMatrix:"mat4",projectionMatrix:"mat4",uScaleByDistance:"vec3",eyePositionHigh:"vec3",eyePositionLow:"vec3",lightsPositions:"vec3",lightsParamsv:"vec3",lightsParamsf:"float",uTexture:"sampler2d",uUseTexture:"float",useLighting:"float"},attributes:{aVertexPosition:"vec3",aVertexNormal:"vec3",aTexCoord:"vec2",aPositionHigh:{type:"vec3",divisor:1},aPositionLow:{type:"vec3",divisor:1},aColor:{type:"vec4",divisor:1},aScale:{type:"vec3",divisor:1},aTranslate:{type:"vec3",divisor:1},aDispose:{type:"float",divisor:1},qRot:{type:"vec4",divisor:1}},vertexShader:`precision highp float;
            
            attribute vec3 aVertexPosition;
            attribute vec3 aVertexNormal; 
            attribute vec3 aPositionHigh;
            attribute vec3 aPositionLow;    
            attribute vec4 aColor;
            attribute vec3 aScale;
            attribute vec3 aTranslate;
            attribute float aDispose;
            attribute float aUseTexture;
            attribute vec2 aTexCoord;
            attribute vec4 qRot;
            
            uniform vec3 uScaleByDistance;
            uniform mat4 projectionMatrix;
            uniform mat4 viewMatrix;
            
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;

            varying vec3 cameraPosition;
            varying vec3 vNormal;
            varying vec3 v_vertex;           
            varying vec4 vColor;
            varying float vDispose;
            varying vec2 vTexCoords;
            
            ${sn}
           
            void main(void) {
                        
                if (aDispose == 0.0) {
                   return;
                }
                
                vec3 position = aPositionHigh + aPositionLow;
                cameraPosition = eyePositionHigh + eyePositionLow;
                
                vec3 look = cameraPosition - position;
                float lookLength = length(look);

                vColor = aColor;
                vTexCoords = aTexCoord;
              
                mat4 viewMatrixRTE = viewMatrix;
                viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                vec3 highDiff = aPositionHigh - eyePositionHigh;
                vec3 lowDiff = aPositionLow - eyePositionLow;
             
                vNormal = qRotate(qRot, aVertexNormal);
                               
                // if(lookLength > uScaleByDistance[1])
                // {
                //     scd = uScaleByDistance[1] / uScaleByDistance[0];
                // }
                // else if(lookLength > uScaleByDistance[0])
                // {
                //     scd = lookLength / uScaleByDistance[0];
                // }
                // ... is the same math
                // use scaleByDistance: [1.0, 1.0, 1.0] for real sized objects 
                float scd = uScaleByDistance[2] * clamp(lookLength, uScaleByDistance[0], uScaleByDistance[1]) / uScaleByDistance[0];
                
                vec3 vert = qRotate(qRot, scd * (aVertexPosition * aScale + aTranslate));
                
                vert += lowDiff;
                               
                gl_Position = projectionMatrix * viewMatrixRTE  * vec4(highDiff * step(1.0, length(highDiff)) + vert, 1.0);
                
                v_vertex = position + vert;
            }`,fragmentShader:`precision highp float;

                #define MAX_POINT_LIGHTS 1
                
                uniform vec3 lightsPositions[MAX_POINT_LIGHTS];
                uniform vec3 lightsParamsv[MAX_POINT_LIGHTS * 3];
                uniform float lightsParamsf[MAX_POINT_LIGHTS];
                uniform sampler2D uTexture;
                uniform float uUseTexture;
                uniform float useLighting;                
                            
                varying vec3 cameraPosition;
                varying vec3 v_vertex;                
                varying vec4 vColor;
                varying vec3 vNormal;
                varying vec2 vTexCoords;
                
                void main(void) {        
                                        
                    vec3 lightWeighting = vec3(1.0);
                
                    if(useLighting != 0.0){
                        vec3 normal = normalize(vNormal);
                        vec3 lightDir = normalize(lightsPositions[0]);
                        vec3 viewDir = normalize(cameraPosition - v_vertex);                
                        vec3 reflectionDirection = reflect(-lightDir, normal);
                        float reflection = max( dot(reflectionDirection, viewDir), 0.0);
                        float specularLightWeighting = pow( reflection, lightsParamsf[0]);                                        
                        float diffuseLightWeighting = max(dot(normal, lightDir), 0.0);
                        lightWeighting = lightsParamsv[0] + lightsParamsv[1] * diffuseLightWeighting + lightsParamsv[2] * specularLightWeighting;
                    }
                                       
                    if(uUseTexture > 0.0) {
                        vec4 tColor = texture2D(uTexture, vTexCoords);
                        gl_FragColor = vec4(tColor.rgb * lightWeighting, tColor.a);
                    } else {
                        gl_FragColor = vec4(vColor.rgb * lightWeighting, vColor.a);
                    }
                }`}),Ja=()=>new G("geo_object_picking",{uniforms:{viewMatrix:"mat4",projectionMatrix:"mat4",uScaleByDistance:"vec3",eyePositionHigh:"vec3",eyePositionLow:"vec3",pickingScale:"vec3"},attributes:{aVertexPosition:"vec3",aPositionHigh:{type:"vec3",divisor:1},aPositionLow:{type:"vec3",divisor:1},aPickingColor:{type:"vec3",divisor:1},aScale:{type:"vec3",divisor:1},aTranslate:{type:"vec3",divisor:1},aDispose:{type:"float",divisor:1},qRot:{type:"vec4",divisor:1}},vertexShader:`precision highp float;

            attribute vec3 aVertexPosition;
            attribute vec3 aPositionHigh;
            attribute vec3 aPositionLow;
            attribute vec3 aPickingColor;    
            attribute vec3 aScale;
            attribute vec3 aTranslate;
            attribute float aDispose;
            attribute vec4 qRot;
            
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;
            uniform vec3 uScaleByDistance;
            uniform mat4 projectionMatrix;
            uniform mat4 viewMatrix;
            uniform vec3 pickingScale;

            varying vec3 vColor;
            
            ${sn}

            void main(void) {

                if (aDispose == 0.0) {
                    return;
                 }
            
                 vColor = aPickingColor;
                
                 vec3 position = aPositionHigh + aPositionLow;
                 vec3 cameraPosition = eyePositionHigh + eyePositionLow;
 
                 mat4 viewMatrixRTE = viewMatrix;
                 viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);
 
                 vec3 highDiff = aPositionHigh - eyePositionHigh;
                 vec3 lowDiff = aPositionLow - eyePositionLow;
              
                 vec3 look = cameraPosition - position;
                 float lookLength = length(look);
                                
                 // if(lookLength > uScaleByDistance[1])
                 // {
                 //     scd = uScaleByDistance[1] / uScaleByDistance[0];
                 // }
                 // else if(lookLength > uScaleByDistance[0])
                 // {
                 //     scd = lookLength / uScaleByDistance[0];
                 // }
                 // ... is the same math above
                 // @hack
                 // pickingScale replace to this line, because when it s
                 // tays in the vert above it affects on Mac Safari jitter
                 float scd = uScaleByDistance[2] * clamp(lookLength, uScaleByDistance[0], uScaleByDistance[1]) / uScaleByDistance[0];

                 //vec3 vert = qRotate(qRot, (aVertexPosition * aScale + aTranslate) * pickingScale) * scd;
                 vec3 vert = qRotate(qRot, scd * pickingScale * (aVertexPosition * aScale + aTranslate));
                 
                 vert += lowDiff;
                                
                 gl_Position = projectionMatrix * viewMatrixRTE  * vec4(highDiff * step(1.0, length(highDiff)) + vert, 1.0);
            }`,fragmentShader:`precision highp float;
            varying vec3 vColor;
            void main () {
                gl_FragColor = vec4(vColor, 1.0);
            }`}),nn=0,an=1,on=2,ln=3,hn=4,cn=5,dn=6,fn=7,un=8,_n=9,gn=10;function we(h,e=0,t=0,i=1,...r){const s=e*t;for(let n=s,a=s+t;n<a;n++)h[n]=r[n%i];return h}class eo{constructor(e){this.isFree=!0,this._geoObjectHandler=e,this.geoObjects=[],this.numInstances=0,this._texture=null,this._textureSrc=null,this._sizeArr=[],this._translateArr=[],this._vertexArr=[],this._positionHighArr=[],this._positionLowArr=[],this._qRotArr=[],this._rgbaArr=[],this._normalsArr=[],this._indicesArr=[],this._pickingColorArr=[],this._visibleArr=[],this._texCoordArr=[],this._sizeBuffer=null,this._translateBuffer=null,this._vertexBuffer=null,this._positionHighBuffer=null,this._positionLowBuffer=null,this._qRotBuffer=null,this._rgbaBuffer=null,this._normalsBuffer=null,this._indicesBuffer=null,this._pickingColorBuffer=null,this._visibleBuffer=null,this._texCoordBuffer=null,this._buffersUpdateCallbacks=[],this._buffersUpdateCallbacks[fn]=this.createPickingColorBuffer,this._buffersUpdateCallbacks[an]=this.createPositionBuffer,this._buffersUpdateCallbacks[ln]=this.createNormalsBuffer,this._buffersUpdateCallbacks[on]=this.createRgbaBuffer,this._buffersUpdateCallbacks[hn]=this.createIndicesBuffer,this._buffersUpdateCallbacks[nn]=this.createVertexBuffer,this._buffersUpdateCallbacks[dn]=this.createSizeBuffer,this._buffersUpdateCallbacks[un]=this.createVisibleBuffer,this._buffersUpdateCallbacks[_n]=this.createTexCoordBuffer,this._buffersUpdateCallbacks[cn]=this.createQRotBuffer,this._buffersUpdateCallbacks[gn]=this.createTranslateBuffer,this._changedBuffers=new Array(this._buffersUpdateCallbacks.length)}createTexture(e){this._geoObjectHandler&&this._geoObjectHandler._planet&&(this._texture=this._geoObjectHandler._planet.renderer.handler.createTextureDefault(e))}clear(){this.numInstances=0,this.geoObjects=[],this._sizeArr=[],this._translateArr=[],this._vertexArr=[],this._positionHighArr=[],this._positionLowArr=[],this._qRotArr=[],this._rgbaArr=[],this._normalsArr=[],this._indicesArr=[],this._pickingColorArr=[],this._visibleArr=[],this._texCoordArr=[],this._deleteBuffers(),this.isFree=!1}_deleteBuffers(){if(this._geoObjectHandler&&this._geoObjectHandler._planet&&this._geoObjectHandler._planet.renderer){let e=this._geoObjectHandler._planet.renderer.handler,t=e.gl;e.deleteTexture(this._texture),this._texture=null,t.deleteBuffer(this._sizeBuffer),t.deleteBuffer(this._translateBuffer),t.deleteBuffer(this._vertexBuffer),t.deleteBuffer(this._positionHighBuffer),t.deleteBuffer(this._positionLowBuffer),t.deleteBuffer(this._qRotBuffer),t.deleteBuffer(this._rgbaBuffer),t.deleteBuffer(this._normalsBuffer),t.deleteBuffer(this._indicesBuffer),t.deleteBuffer(this._pickingColorBuffer),t.deleteBuffer(this._visibleBuffer),t.deleteBuffer(this._texCoordBuffer)}this._sizeBuffer=null,this._translateBuffer=null,this._vertexBuffer=null,this._positionHighBuffer=null,this._positionLowBuffer=null,this._qRotBuffer=null,this._rgbaBuffer=null,this._normalsBuffer=null,this._indicesBuffer=null,this._pickingColorBuffer=null,this._visibleBuffer=null,this._texCoordBuffer=null}createVertexBuffer(){const e=this._geoObjectHandler._planet.renderer.handler;e.gl.deleteBuffer(this._vertexBuffer),this._vertexArr=X(this._vertexArr),this._vertexBuffer=e.createArrayBuffer(this._vertexArr,3,this._vertexArr.length/3)}createVisibleBuffer(){const e=this._geoObjectHandler._planet.renderer.handler,t=this._visibleArr.length;(!this._visibleBuffer||this._visibleBuffer.numItems!==t)&&(e.gl.deleteBuffer(this._visibleBuffer),this._visibleBuffer=e.createStreamArrayBuffer(1,t)),this._visibleArr=X(this._visibleArr),e.setStreamArrayBuffer(this._visibleBuffer,this._visibleArr)}createSizeBuffer(){let e=this._geoObjectHandler._planet.renderer.handler,t=this._sizeArr.length/3;(!this._sizeBuffer||this._sizeBuffer.numItems!==t)&&(e.gl.deleteBuffer(this._sizeBuffer),this._sizeBuffer=e.createStreamArrayBuffer(3,t)),this._sizeArr=X(this._sizeArr),e.setStreamArrayBuffer(this._sizeBuffer,this._sizeArr)}createTranslateBuffer(){let e=this._geoObjectHandler._planet.renderer.handler,t=this._translateArr.length/3;(!this._translateBuffer||this._translateBuffer.numItems!==t)&&(e.gl.deleteBuffer(this._translateBuffer),this._translateBuffer=e.createStreamArrayBuffer(3,t)),this._translateArr=X(this._translateArr),e.setStreamArrayBuffer(this._translateBuffer,this._translateArr)}createTexCoordBuffer(){const e=this._geoObjectHandler._planet.renderer.handler;e.gl.deleteBuffer(this._texCoordBuffer),this._texCoordArr=X(this._texCoordArr),this._texCoordBuffer=e.createArrayBuffer(this._texCoordArr,2,this._texCoordArr.length/2)}createPositionBuffer(){let e=this._geoObjectHandler._planet.renderer.handler,t=this._positionHighArr.length/3;(!this._positionHighBuffer||this._positionHighBuffer.numItems!==t)&&(e.gl.deleteBuffer(this._positionHighBuffer),e.gl.deleteBuffer(this._positionLowBuffer),this._positionHighBuffer=e.createStreamArrayBuffer(3,t),this._positionLowBuffer=e.createStreamArrayBuffer(3,t)),this._positionHighArr=X(this._positionHighArr),this._positionLowArr=X(this._positionLowArr),e.setStreamArrayBuffer(this._positionHighBuffer,this._positionHighArr),e.setStreamArrayBuffer(this._positionLowBuffer,this._positionLowArr)}createRgbaBuffer(){let e=this._geoObjectHandler._planet.renderer.handler,t=this._rgbaArr.length/4;(!this._rgbaBuffer||this._rgbaBuffer.numItems!==t)&&(e.gl.deleteBuffer(this._rgbaBuffer),this._rgbaBuffer=e.createStreamArrayBuffer(4,t)),this._rgbaArr=X(this._rgbaArr),e.setStreamArrayBuffer(this._rgbaBuffer,this._rgbaArr)}createQRotBuffer(){let e=this._geoObjectHandler._planet.renderer.handler,t=this._qRotArr.length/4;(!this._qRotBuffer||this._qRotBuffer.numItems!==t)&&(e.gl.deleteBuffer(this._qRotBuffer),this._qRotBuffer=e.createStreamArrayBuffer(4,t)),this._qRotArr=X(this._qRotArr),e.setStreamArrayBuffer(this._qRotBuffer,this._qRotArr)}createNormalsBuffer(){const e=this._geoObjectHandler._planet.renderer.handler;e.gl.deleteBuffer(this._normalsBuffer),this._normalsArr=X(this._normalsArr),this._normalsBuffer=e.createArrayBuffer(this._normalsArr,3,this._normalsArr.length/3)}createIndicesBuffer(){const e=this._geoObjectHandler._planet.renderer.handler;e.gl.deleteBuffer(this._indicesBuffer),this._indicesArr=X(this._indicesArr,Uint32Array),this._indicesBuffer=e.createElementArrayBuffer(this._indicesArr,1,this._indicesArr.length)}createPickingColorBuffer(){const e=this._geoObjectHandler._planet.renderer.handler;e.gl.deleteBuffer(this._pickingColorBuffer),this._pickingColorArr=X(this._pickingColorArr),this._pickingColorBuffer=e.createArrayBuffer(this._pickingColorArr,3,this._pickingColorArr.length/3)}refresh(){let e=this._changedBuffers.length;for(;e--;)this._changedBuffers[e]=!0}update(){if(this._geoObjectHandler._planet){let e=this._changedBuffers.length;for(;e--;)this._changedBuffers[e]&&(this._buffersUpdateCallbacks[e].call(this),this._changedBuffers[e]=!1);this.isFree=!0}}}class Pi{constructor(e){this.__id=Pi.__counter__++,this.pickingEnabled=!0,this._entityCollection=e,this._planet=null,this._geoObjects=[],this._instanceDataMap=new Map,this._instanceDataMapValues=[],this._dataTagUpdateQueue=[]}initProgram(){this._planet&&this._planet.renderer&&(this._planet.renderer.handler.programs.geo_object||this._planet.renderer.handler.addProgram(Qa()),this._planet.renderer.handler.programs.geo_object_picking||this._planet.renderer.handler.addProgram(Ja()))}setRenderNode(e){this._planet=e,this.initProgram();for(let t=0;t<this._instanceDataMapValues.length;t++)this._loadDataTagTexture(this._instanceDataMapValues[t]);for(let t=0;t<this._geoObjects.length;t++)this._geoObjects[t].updateRotation();this.update()}setTextureTag(e,t){const i=this._instanceDataMap.get(t);i&&(i._textureSrc=e,this._instanceDataMap.set(t,i),this._loadDataTagTexture(i))}setObjectSrc(e,t){const i=this._instanceDataMap.get(t);e&&i&&i._objectSrc!==e&&(i._objectSrc=e,Z.loadObj(e).then(r=>{this._updateInstanceData(r[0],t)}))}_updateInstanceData(e,t){const i=this._instanceDataMap.get(t);i&&(e.vertices.length!==i._vertexArr.length&&(i._vertexArr=e.vertices,i._changedBuffers[nn]=!0),e.normals.length!==i._normalsArr.length&&(i._normalsArr=e.normals,i._changedBuffers[ln]=!0),e.indices.length!==i._indicesArr.length&&(i._indicesArr=e.indices,i._changedBuffers[hn]=!0),e.texCoords.length!==i._texCoordArr.length&&(i._texCoordArr=e.texCoords,i._changedBuffers[_n]=!0),i._textureSrc=e.src,this._loadDataTagTexture(i),this._updateTag(i),this._instanceDataMapValues=Array.from(this._instanceDataMap.values()))}_addGeoObjectToArray(e){const t=e.tag;let i=this._instanceDataMap.get(t);i||(i=new eo(this),this._instanceDataMap.set(t,i),this._instanceDataMapValues=Array.from(this._instanceDataMap.values()),i._vertexArr=e.vertices,i._normalsArr=e.normals,i._indicesArr=e.indices,i._texCoordArr=e.texCoords,i._textureSrc=e.object3d.src,this._loadDataTagTexture(i)),e._tagDataIndex=i.numInstances++,e._tagData=i,i.geoObjects.push(e);let r=3;i._visibleArr=xe(i._visibleArr,we([],0,1,1,e.getVisibility()?1:0));let s=e._positionHigh.x,n=e._positionHigh.y,a=e._positionHigh.z,o;i._positionHighArr=xe(i._positionHighArr,we([],0,r,r,s,n,a)),s=e._positionLow.x,n=e._positionLow.y,a=e._positionLow.z,i._positionLowArr=xe(i._positionLowArr,we([],0,r,r,s,n,a)),s=e._entity._pickingColor.x/255,n=e._entity._pickingColor.y/255,a=e._entity._pickingColor.z/255,i._pickingColorArr=xe(i._pickingColorArr,we([],0,r,r,s,n,a)),r=4,s=e._qRot.x,n=e._qRot.y,a=e._qRot.z,o=e._qRot.w,i._qRotArr=xe(i._qRotArr,we([],0,r,r,s,n,a,o)),s=e._color.x,n=e._color.y,a=e._color.z,o=e._color.w,i._rgbaArr=xe(i._rgbaArr,we([],0,r,r,s,n,a,o)),r=3;let l=e.getScale();s=l.x,n=l.y,a=l.z,i._sizeArr=xe(i._sizeArr,we([],0,r,r,s,n,a));let c=e.getTranslate();s=c.x,n=c.y,a=c.z,i._translateArr=xe(i._translateArr,we([],0,r,r,s,n,a))}_displayPASS(){let e=this._planet.renderer,t=e.handler.programs.geo_object,i=t._program,r=i.uniforms,s=i.attributes,n=e.handler.gl,a=this._entityCollection;t.activate(),n.uniform3fv(r.uScaleByDistance,a.scaleByDistance),n.uniform1f(r.useLighting,a._useLighting),n.uniform3fv(r.eyePositionHigh,e.activeCamera.eyeHigh),n.uniform3fv(r.eyePositionLow,e.activeCamera.eyeLow),n.uniformMatrix4fv(r.projectionMatrix,!1,e.activeCamera.getProjectionMatrix()),n.uniformMatrix4fv(r.viewMatrix,!1,e.activeCamera.getViewMatrix()),n.uniform3fv(r.lightsPositions,this._planet._lightsPositions),n.uniform3fv(r.lightsParamsv,this._planet._lightsParamsv),n.uniform1fv(r.lightsParamsf,this._planet._lightsParamsf);for(let o=0;o<this._instanceDataMapValues.length;o++){let l=this._instanceDataMapValues[o];n.bindBuffer(n.ARRAY_BUFFER,l._qRotBuffer),n.vertexAttribPointer(s.qRot,l._qRotBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,l._sizeBuffer),n.vertexAttribPointer(s.aScale,l._sizeBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,l._translateBuffer),n.vertexAttribPointer(s.aTranslate,l._translateBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,l._rgbaBuffer),n.vertexAttribPointer(s.aColor,l._rgbaBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,l._visibleBuffer),n.vertexAttribPointer(s.aDispose,l._visibleBuffer.itemSize,n.FLOAT,!1,0,0),n.uniform1f(r.uUseTexture,l._texture?1:0),n.bindBuffer(n.ARRAY_BUFFER,l._positionHighBuffer),n.vertexAttribPointer(s.aPositionHigh,l._positionHighBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,l._positionLowBuffer),n.vertexAttribPointer(s.aPositionLow,l._positionLowBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,l._normalsBuffer),n.vertexAttribPointer(s.aVertexNormal,l._normalsBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,l._vertexBuffer),n.vertexAttribPointer(s.aVertexPosition,l._vertexBuffer.itemSize,n.FLOAT,!1,0,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,l._texture||e.handler.defaultTexture),n.uniform1i(r.uTexture,0),n.bindBuffer(n.ARRAY_BUFFER,l._texCoordBuffer),n.vertexAttribPointer(s.aTexCoord,l._texCoordBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,l._indicesBuffer),i.drawElementsInstanced(n.TRIANGLES,l._indicesBuffer.numItems,n.UNSIGNED_INT,0,l.numInstances)}}drawPicking(){this._geoObjects.length&&this.pickingEnabled&&(this.update(),this._pickingPASS())}_pickingPASS(){let e=this._planet.renderer,t=e.handler.programs.geo_object_picking,i=t._program,r=i.uniforms,s=i.attributes,n=e.handler.gl,a=this._entityCollection;t.activate(),n.uniform3fv(r.uScaleByDistance,a.scaleByDistance),n.uniform3fv(r.pickingScale,a.pickingScale),n.uniform3fv(r.eyePositionHigh,e.activeCamera.eyeHigh),n.uniform3fv(r.eyePositionLow,e.activeCamera.eyeLow),n.uniformMatrix4fv(r.projectionMatrix,!1,e.activeCamera.getProjectionMatrix()),n.uniformMatrix4fv(r.viewMatrix,!1,e.activeCamera.getViewMatrix());for(let o=0;o<this._instanceDataMapValues.length;o++){let l=this._instanceDataMapValues[o];n.bindBuffer(n.ARRAY_BUFFER,l._qRotBuffer),n.vertexAttribPointer(s.qRot,l._qRotBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,l._sizeBuffer),n.vertexAttribPointer(s.aScale,l._sizeBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,l._translateBuffer),n.vertexAttribPointer(s.aTranslate,l._translateBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,l._pickingColorBuffer),n.vertexAttribPointer(s.aPickingColor,l._pickingColorBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,l._positionHighBuffer),n.vertexAttribPointer(s.aPositionHigh,l._positionHighBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,l._positionLowBuffer),n.vertexAttribPointer(s.aPositionLow,l._positionLowBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,l._visibleBuffer),n.vertexAttribPointer(s.aDispose,l._visibleBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,l._vertexBuffer),n.vertexAttribPointer(s.aVertexPosition,l._vertexBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,l._indicesBuffer),i.drawElementsInstanced(n.TRIANGLES,l._indicesBuffer.numItems,n.UNSIGNED_INT,0,l.numInstances)}}async _loadDataTagTexture(e){if(this._planet&&e._textureSrc){const t=await oa(e._textureSrc);e.createTexture(t)}}setQRotArr(e,t,i){we(e._qRotArr,t,4,4,i.x,i.y,i.z,i.w),e._changedBuffers[cn]=!0,this._updateTag(e)}setVisibility(e,t,i){we(e._visibleArr,t,1,1,i?1:0),e._changedBuffers[un]=!0,this._updateTag(e)}setPositionArr(e,t,i,r){we(e._positionHighArr,t,3,3,i.x,i.y,i.z),we(e._positionLowArr,t,3,3,r.x,r.y,r.z),e._changedBuffers[an]=!0,this._updateTag(e)}setRgbaArr(e,t,i){we(e._rgbaArr,t,4,4,i.x,i.y,i.z,i.w),e._changedBuffers[on]=!0,this._updateTag(e)}setPickingColorArr(e,t,i){we(e._pickingColorArr,t,3,3,i.x/255,i.y/255,i.z/255),e._changedBuffers[fn]=!0,this._updateTag(e)}setScaleArr(e,t,i){we(e._sizeArr,t,3,3,i.x,i.y,i.z),e._changedBuffers[dn]=!0,this._updateTag(e)}setTranslateArr(e,t,i){we(e._translateArr,t,3,3,i.x,i.y,i.z),e._changedBuffers[gn]=!0,this._updateTag(e)}_updateTag(e){e.isFree&&(e.isFree=!1,this._dataTagUpdateQueue.push(e))}update(){for(let e=0,t=this._dataTagUpdateQueue.length;e<t;e++)this._dataTagUpdateQueue[e].update();this._dataTagUpdateQueue=[]}_removeAll(){let e=this._geoObjects.length;for(;e--;){const t=this._geoObjects[e];t._tagDataIndex=-1,t._tagData=null,t._handlerIndex=-1,t._handler=null}this._geoObjects.length=0,this._geoObjects=[];for(let t=0;t<this._instanceDataMapValues.length;t++)this._instanceDataMapValues[t].clear();this._instanceDataMap.clear(),this._instanceDataMapValues=[]}clear(){this._removeAll()}draw(){this._geoObjects.length&&(this.update(),this._displayPASS())}add(e){e._handlerIndex===-1&&(e._handler=this,e._handlerIndex=this._geoObjects.length,this._geoObjects.push(e),this._addGeoObjectToArray(e),e.updateRotation(),e._tagData.refresh(),this._updateTag(e._tagData),e.setObjectSrc(e._objectSrc))}remove(e){e._handler&&this.__id==e._handler.__id&&this._removeGeoObject(e)}_clearDataTagQueue(){this._dataTagUpdateQueue=[]}_removeGeoObject(e){let t=e._tagData,i=e.tag;t.numInstances--;let r=!1;t.numInstances===0&&(t.clear(),this._instanceDataMap.delete(i),this._instanceDataMapValues=[],this._clearDataTagQueue(),r=!0),this._geoObjects.splice(e._handlerIndex,1);for(let n=e._handlerIndex,a=this._geoObjects.length;n<a;n++){let o=this._geoObjects[n];o._handlerIndex=o._handlerIndex-1}let s=e._tagDataIndex;t.geoObjects.splice(s,1);for(let n=e._tagDataIndex,a=t.geoObjects.length;n<a;n++){let o=t.geoObjects[n];o._tagDataIndex=o._tagDataIndex-1}t._rgbaArr=Ee(t._rgbaArr,s*4,4),t._positionHighArr=Ee(t._positionHighArr,s*3,3),t._positionLowArr=Ee(t._positionLowArr,s*3,3),t._qRotArr=Ee(t._qRotArr,s*4,4),t._pickingColorArr=Ee(t._pickingColorArr,s*3,3),t._sizeArr=Ee(t._sizeArr,s*3,3),t._translateArr=Ee(t._translateArr,s*3,3),t._visibleArr=Ee(t._visibleArr,s,1),e._handlerIndex=-1,e._handler=null,e._tagDataIndex=-1,e._tagData=null,r||(t.refresh(),this._updateTag(t))}}Pi.__counter__=0;const yr=`
#define EMPTY -1.0
#define RTL 1.0`,br=`vec2 project(vec4 p) {
                    return (0.5 * p.xyz / p.w + 0.5).xy * viewport;
                }`,wr=`mat2 rotate2d(float angle) {
        return mat2(cos(angle), -sin(angle),
           sin(angle), cos(angle));
     }`;function to(){return new G("label",{uniforms:{viewport:"vec2",fontTextureArr:"sampler2darray",sdfParamsArr:"vec4",projectionMatrix:"mat4",viewMatrix:"mat4",eyePositionHigh:"vec3",eyePositionLow:"vec3",planetRadius:"float",scaleByDistance:"vec3",opacity:"float",isOutlinePass:"int",depthOffset:"float"},attributes:{a_outline:"float",a_gliphParam:"vec4",a_vertices:"vec2",a_texCoord:"vec4",a_positionsHigh:"vec3",a_positionsLow:"vec3",a_size:"float",a_rotation:"float",a_rgba:"vec4",a_offset:"vec3",a_fontIndex:"float"},vertexShader:`#version 300 es
            
            ${yr}
            
            in float a_outline;
            in vec4 a_gliphParam;
            in vec2 a_vertices;
            in vec4 a_texCoord;
            in vec3 a_positionsHigh;
            in vec3 a_positionsLow;
            in vec3 a_offset;
            in float a_size;
            in float a_rotation;
            in vec4 a_rgba;
            in float a_fontIndex;

            out vec2 v_uv;
            out vec4 v_rgba;
            flat out int v_fontIndex;            
            out vec4 v_outlineColor;
            flat out float v_outline;

            uniform vec2 viewport;
            uniform mat4 viewMatrix;
            uniform mat4 projectionMatrix;
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;
            uniform float planetRadius;
            uniform vec3 scaleByDistance;
            uniform float opacity;
            uniform float depthOffset;

            const vec3 ZERO3 = vec3(0.0);
           
            ${br}

            ${wr}

            void main() {

                if(a_texCoord.w == EMPTY) {
                    gl_Position = vec4(0.0);
                    v_fontIndex = -1;
                    return;
                }
               
                vec3 a_positions = a_positionsHigh + a_positionsLow;
                vec3 cameraPos = eyePositionHigh + eyePositionLow;

                v_outline = a_outline;

                v_fontIndex = int(a_fontIndex);
                v_uv = a_texCoord.xy;
                vec3 look = a_positions - cameraPos;
                float lookDist = length(look);
                v_rgba = a_rgba;
                
                if(opacity * step(lookDist, sqrt(dot(cameraPos,cameraPos) - planetRadius) + sqrt(dot(a_positions,a_positions) - planetRadius)) == 0.0){
                    return;
                }

                float scd = (1.0 - smoothstep(scaleByDistance[0], scaleByDistance[1], lookDist)) * (1.0 - step(scaleByDistance[2], lookDist));

                v_rgba.a *= opacity;

                mat4 viewMatrixRTE = viewMatrix;
                viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                vec3 highDiff = a_positionsHigh - eyePositionHigh;
                vec3 lowDiff = a_positionsLow - eyePositionLow;
                vec4 posRTE = viewMatrixRTE * vec4(highDiff + lowDiff, 1.0);
                vec4 projPos = projectionMatrix * posRTE;
                                
                float camSlope = dot(vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]), normalize(cameraPos));                
                if(camSlope > 0.5) {
                    float dist = dot(look, normalize(cameraPos));
                    projPos.z += dist * 0.02;                  
                }else{
                    projPos.z += -(abs(projPos.z)) * 0.002;                 
                }
                        
                projPos.z += depthOffset + a_offset.z;
                               
                vec2 screenPos = project(projPos);
                
                vec2 vert = a_vertices;                
                vec4 gp = a_gliphParam;                                
                if(a_texCoord.w == RTL){
                    vert.x = step(vert.x * 0.5 + 1.0, 1.0);
                    gp.x = -a_gliphParam.x;
                    gp.z = -(a_gliphParam.z + a_texCoord.z);
                }else{
                    gp.z = a_gliphParam.z + a_texCoord.z;
                }
                                
                vec2 v = screenPos + rotate2d(a_rotation) * ((vert * gp.xy + gp.zw) * a_size * scd + a_offset.xy);

                gl_Position = vec4((2.0 * v / viewport - 1.0) * projPos.w, projPos.z, projPos.w);
            }`,fragmentShader:`#version 300 es

            uniform int isOutlinePass;
            
            precision highp float;

            const int MAX_SIZE = 11;

            // x - ATLAS_WIDTH = 512.0;
            // y - ATLAS_HEIGHT = 512.0;
            // z - ATLAS_GLYPH_SIZE = 32.0;
            // w - ATLAS_FIELD_RANGE = 8.0;

            uniform sampler2D fontTextureArr[MAX_SIZE];
            uniform vec4 sdfParamsArr[MAX_SIZE];

            flat in int v_fontIndex;
            in vec2 v_uv;
            in vec4 v_rgba;           

            flat in float v_outline;

            in vec3 v_pickingColor;

            layout(location = 0) out vec4 outScreen;

            float median(float r, float g, float b) {
                return max(min(r, g), min(max(r, g), b));
            }

            float getDistance() {
                vec3 msdf;
                if(v_fontIndex == 0) {
                    msdf = texture(fontTextureArr[0], v_uv).rgb;
                } else if(v_fontIndex == 1){
                    msdf = texture(fontTextureArr[1], v_uv).rgb;
                } else if(v_fontIndex == 2){
                    msdf = texture(fontTextureArr[2], v_uv).rgb;
                } else if(v_fontIndex == 3){
                    msdf = texture(fontTextureArr[3], v_uv).rgb;
                } else if(v_fontIndex == 4){
                    msdf = texture(fontTextureArr[4], v_uv).rgb;
                } else if(v_fontIndex == 5){
                    msdf = texture(fontTextureArr[5], v_uv).rgb;
                } else if(v_fontIndex == 6){
                    msdf = texture(fontTextureArr[6], v_uv).rgb;
                } else if(v_fontIndex == 7){
                    msdf = texture(fontTextureArr[7], v_uv).rgb;
                } else if(v_fontIndex == 8){
                    msdf = texture(fontTextureArr[8], v_uv).rgb;
                } else if(v_fontIndex == 9){
                    msdf = texture(fontTextureArr[9], v_uv).rgb;
                } else if(v_fontIndex == 10){
                    msdf = texture(fontTextureArr[10], v_uv).rgb;
                }
                return median(msdf.r, msdf.g, msdf.b);
            }
                        
            void main () {
            
                if(v_fontIndex == -1) {
                    return;
                }
                
                vec4 sdfParams = sdfParamsArr[v_fontIndex];
                float sd = getDistance();             
                vec2 dxdy = fwidth(v_uv) * sdfParams.xy;

                if(isOutlinePass == 0){                             
                    float dist = sd + min(0.001, 0.5 - 1.0 / sdfParams.w) - 0.5;
                    float opacity = clamp(dist * sdfParams.w / length(dxdy) + 0.5, 0.0, 1.0);
                    if(opacity <= 0.1){
                        discard;
                    }
                    outScreen = vec4(v_rgba.rgb, opacity * v_rgba.a);
                } else {             
                    float dist = sd + min(v_outline, 0.5 - 1.0 / sdfParams.w) - 0.5;
                    float opacity = clamp(dist * sdfParams.w / length(dxdy) + 0.5, 0.0, 1.0);                       
                    if(opacity <= 0.1){
                        discard;
                    }
                    outScreen = vec4(v_rgba.rgb, opacity * v_rgba.a);
                    //outScreen = v_rgba * strokeAlpha * (0.5 - opacity) * 2.0;
                }         
            }`})}function io(){return new G("label",{uniforms:{viewport:"vec2",fontTextureArr:"sampler2darray",sdfParamsArr:"vec4",projectionMatrix:"mat4",viewMatrix:"mat4",eyePositionHigh:"vec3",eyePositionLow:"vec3",planetRadius:"float",scaleByDistance:"vec3",opacity:"float",isOutlinePass:"int",depthOffset:"float"},attributes:{a_outline:"float",a_gliphParam:"vec4",a_vertices:"vec2",a_texCoord:"vec4",a_positionsHigh:"vec3",a_positionsLow:"vec3",a_size:"float",a_rotation:"float",a_rgba:"vec4",a_offset:"vec3",a_fontIndex:"float"},vertexShader:`            
            ${yr}
                        
            attribute float a_outline;
            attribute vec4 a_gliphParam;
            attribute vec2 a_vertices;
            attribute vec4 a_texCoord;
            attribute vec3 a_positionsHigh;
            attribute vec3 a_positionsLow;
            attribute vec3 a_offset;
            attribute float a_size;
            attribute float a_rotation;
            attribute vec4 a_rgba;
            attribute float a_fontIndex;

            varying float v_outline;
            varying vec2 v_uv;
            varying vec4 v_rgba;
            varying float v_fontIndex;            

            uniform vec2 viewport;
            uniform mat4 viewMatrix;
            uniform mat4 projectionMatrix;
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;
            uniform float planetRadius;
            uniform vec3 scaleByDistance;
            uniform float opacity;
            uniform float depthOffset;

            const vec3 ZERO3 = vec3(0.0);

            ${br}

            ${wr}

            void main() {

                if(a_texCoord.w == EMPTY) {
                    gl_Position = vec4(0.0);
                    v_fontIndex = -1.0;
                    return;
                }
               
                vec3 a_positions = a_positionsHigh + a_positionsLow;
                vec3 cameraPos = eyePositionHigh + eyePositionLow;

                v_outline = a_outline;
                v_uv = vec2(a_texCoord.xy);
                v_rgba = a_rgba;
                v_fontIndex = a_fontIndex;
                
                vec3 look = a_positions - cameraPos;
                float lookDist = length(look);
                
                if(opacity * step(lookDist, sqrt(dot(cameraPos,cameraPos) - planetRadius) + sqrt(dot(a_positions,a_positions) - planetRadius)) == 0.0){
                    return;
                }

                float scd = (1.0 - smoothstep(scaleByDistance[0], scaleByDistance[1], lookDist)) * (1.0 - step(scaleByDistance[2], lookDist));

                v_rgba.a *= opacity;

                mat4 viewMatrixRTE = viewMatrix;
                viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                vec3 highDiff = a_positionsHigh - eyePositionHigh;
                vec3 lowDiff = a_positionsLow - eyePositionLow;
                vec4 posRTE = viewMatrixRTE * vec4(highDiff + lowDiff, 1.0);
                vec4 projPos = projectionMatrix * posRTE;
                                
                float camSlope = dot(vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]), normalize(cameraPos));                
                if(camSlope > 0.5) {
                    float dist = dot(look, normalize(cameraPos));
                    projPos.z += dist * 0.02;                  
                }else{
                    projPos.z += -(abs(projPos.z)) * 0.002;                 
                }
                        
                projPos.z += depthOffset + a_offset.z;
                               
                vec2 screenPos = project(projPos);
                
                vec2 vert = a_vertices;                
                vec4 gp = a_gliphParam;                                
                if(a_texCoord.w == RTL){
                    vert.x = step(vert.x * 0.5 + 1.0, 1.0);
                    gp.x = -a_gliphParam.x;
                    gp.z = -(a_gliphParam.z + a_texCoord.z);
                }else{
                    gp.z = a_gliphParam.z + a_texCoord.z;
                }
                                
                vec2 v = screenPos + rotate2d(a_rotation) * ((vert * gp.xy + gp.zw) * a_size * scd + a_offset.xy);
                
                gl_Position = vec4((2.0 * v / viewport - 1.0) * projPos.w, projPos.z, projPos.w);
            }`,fragmentShader:`#extension GL_OES_standard_derivatives : enable

            precision highp float;
            precision highp int;

            const int MAX_SIZE = 11;

            // x - ATLAS_WIDTH = 512.0;
            // y - ATLAS_HEIGHT = 512.0;
            // z - ATLAS_GLYPH_SIZE = 32.0;
            // w - ATLAS_FIELD_RANGE = 8.0;

            uniform sampler2D fontTextureArr[MAX_SIZE];
            uniform vec4 sdfParamsArr[MAX_SIZE];
            uniform int isOutlinePass;
            
            varying float v_outline;
            varying vec2 v_uv;
            varying vec4 v_rgba;           
            varying float v_fontIndex;
            
            float fontIndex;

            float median(float r, float g, float b) {
                return max(min(r, g), min(max(r, g), b));
            }

            float getDistance() {
                vec3 msdf;
                if(fontIndex >= 0.0 && fontIndex < 1.0) {
                    msdf = texture2D(fontTextureArr[0], v_uv).rgb;
                } else if(fontIndex >= 1.0 && fontIndex < 2.0){
                    msdf = texture2D(fontTextureArr[1], v_uv).rgb;
                } else if(fontIndex >= 2.0 && fontIndex < 3.0){
                    msdf = texture2D(fontTextureArr[2], v_uv).rgb;
                } else if(fontIndex >= 3.0 && fontIndex < 4.0){
                    msdf = texture2D(fontTextureArr[3], v_uv).rgb;
                } else if(fontIndex >= 4.0 && fontIndex < 5.0){
                    msdf = texture2D(fontTextureArr[4], v_uv).rgb;
                } else if(fontIndex >= 5.0 && fontIndex < 6.0){
                    msdf = texture2D(fontTextureArr[5], v_uv).rgb;
                } else if(fontIndex >= 6.0 && fontIndex < 7.0){
                    msdf = texture2D(fontTextureArr[6], v_uv).rgb;
                } else if(fontIndex >= 7.0 && fontIndex < 8.0){
                    msdf = texture2D(fontTextureArr[7], v_uv).rgb;
                } else if(fontIndex >= 8.0 && fontIndex < 9.0){
                    msdf = texture2D(fontTextureArr[8], v_uv).rgb;
                } else if(fontIndex >= 9.0 && fontIndex < 10.0){
                    msdf = texture2D(fontTextureArr[9], v_uv).rgb;
                } else if(fontIndex >= 10.0 && fontIndex < 11.0){
                    msdf = texture2D(fontTextureArr[10], v_uv).rgb;
                }
                return median(msdf.r, msdf.g, msdf.b);
            }


            vec4 getSDFParams() {
                if(fontIndex >= 0.0 && fontIndex < 1.0) {
                    return sdfParamsArr[0];
                } else if(fontIndex >= 1.0 && fontIndex < 2.0){
                    return sdfParamsArr[1];
                } else if(fontIndex >= 2.0 && fontIndex < 3.0){
                    return sdfParamsArr[2];
                } else if(fontIndex >= 3.0 && fontIndex < 4.0){
                    return sdfParamsArr[3];
                } else if(fontIndex >= 4.0 && fontIndex < 5.0){
                    return sdfParamsArr[4];
                } else if(fontIndex >= 5.0 && fontIndex < 6.0){
                    return sdfParamsArr[5];
                } else if(fontIndex >= 6.0 && fontIndex < 7.0){
                    return sdfParamsArr[6];
                } else if(fontIndex >= 7.0 && fontIndex < 8.0){
                    return sdfParamsArr[7];
                } else if(fontIndex >= 8.0 && fontIndex < 9.0){
                    return sdfParamsArr[8];
                } else if(fontIndex >= 9.0 && fontIndex < 10.0){
                    return sdfParamsArr[9];
                } else if(fontIndex >= 10.0 && fontIndex < 11.0){
                    return sdfParamsArr[10];
                }
            }
                    
            void main () {

                fontIndex = v_fontIndex + 0.1;
                
                if(v_fontIndex < 0.0){
                    return;
                }
                
                vec4 sdfParams = getSDFParams();
                float sd = getDistance();             
                vec2 dxdy = fwidth(v_uv) * sdfParams.xy;
                float dist = sd + min(0.001, 0.5 - 1.0 / sdfParams.w) - 0.5;
                float opacity = clamp(dist * sdfParams.w / length(dxdy) + 0.5, 0.0, 1.0);

                if(isOutlinePass == 0){                             
                    //gl_FragColor = vec4(v_rgba.rgb, opacity * v_rgba.a);
                } else {                
                    float strokeDist = sd + min(v_outline, 0.5 - 1.0 / sdfParams.w) - 0.5;
                    float strokeAlpha = v_rgba.a * clamp(strokeDist * sdfParams.w / length(dxdy) + 0.5, 0.0, 1.0);                    
                    if(strokeAlpha < 0.1){
                        discard;
                    }
                    //gl_FragColor = v_rgba * strokeAlpha * (0.5 - opacity) * 2.0;
                }
            }`})}function ro(){return new G("labelPicking",{uniforms:{viewport:"vec2",projectionMatrix:"mat4",viewMatrix:"mat4",eyePositionHigh:"vec3",eyePositionLow:"vec3",planetRadius:"float",scaleByDistance:"vec3",opacity:"float",depthOffset:"float"},attributes:{a_gliphParam:"vec4",a_vertices:"vec2",a_texCoord:"vec4",a_positionsHigh:"vec3",a_positionsLow:"vec3",a_offset:"vec3",a_size:"float",a_rotation:"float",a_rgba:"vec4"},vertexShader:`
            
            ${yr}
            
            attribute vec4 a_gliphParam;
            attribute vec2 a_vertices;
            attribute vec4 a_texCoord;
            attribute vec3 a_positionsHigh;
            attribute vec3 a_positionsLow;
            attribute vec3 a_offset;
            attribute float a_size;
            attribute float a_rotation;
            attribute vec4 a_rgba;

            varying vec4 v_rgba;

            uniform vec2 viewport;
            uniform mat4 viewMatrix;
            uniform mat4 projectionMatrix;
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;
            uniform float planetRadius;
            uniform vec3 scaleByDistance;
            uniform float opacity;
            uniform float depthOffset;

            const vec3 ZERO3 = vec3(0.0);

            ${br}

            ${wr}

            void main() {
                vec3 a_positions = a_positionsHigh + a_positionsLow;
                vec3 cameraPos = eyePositionHigh + eyePositionLow;
                v_rgba = a_rgba;
                
                if(a_texCoord.w == EMPTY) {
                    v_rgba.a = 0.0;
                    gl_Position = vec4(0.0);
                    return;
                }

                vec3 look = a_positions - cameraPos;
                float lookDist = length(look);
                if(opacity * step(lookDist, sqrt(dot(cameraPos,cameraPos) - planetRadius) + sqrt(dot(a_positions,a_positions) - planetRadius)) == 0.0){
                    return;
                }

                float scd = (1.0 - smoothstep(scaleByDistance[0], scaleByDistance[1], lookDist)) * (1.0 - step(scaleByDistance[2], lookDist));

                v_rgba.a *= opacity;

                mat4 viewMatrixRTE = viewMatrix;
                viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                vec3 highDiff = a_positionsHigh - eyePositionHigh;
                vec3 lowDiff = a_positionsLow - eyePositionLow;
                vec4 posRTE = viewMatrixRTE * vec4(highDiff + lowDiff, 1.0);
                vec4 projPos = projectionMatrix * posRTE;
                
                float camSlope = dot(vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]), normalize(cameraPos));                
                if(camSlope > 0.5) {
                    float dist = dot(look, normalize(cameraPos));
                    projPos.z += dist * 0.02;                  
                }else{
                    projPos.z += -(abs(projPos.z)) * 0.002;                 
                }
                        
                projPos.z += depthOffset + a_offset.z;
                
                vec2 screenPos = project(projPos);
                
                vec2 vert = a_vertices;                
                vec4 gp = a_gliphParam;                                
                if(a_texCoord.w == RTL){
                    vert.x = step(vert.x * 0.5 + 1.0, 1.0);
                    gp.x = -a_gliphParam.x;
                    gp.z = -(a_gliphParam.z + a_texCoord.z);
                }else{
                    gp.z = a_gliphParam.z + a_texCoord.z;
                }
                                
                vec2 v = screenPos + rotate2d(a_rotation) * ((vert * gp.xy + gp.zw) * a_size * scd + a_offset.xy);
                                
                gl_Position = vec4((2.0 * v / viewport - 1.0) * projPos.w, projPos.z, projPos.w);
            }`,fragmentShader:`precision highp float;

            varying vec4 v_rgba;

            varying vec3 v_pickingColor;

            void main () {

                vec4 color = v_rgba;
                if (color.a < 0.05) {
                    return;
                }

                gl_FragColor = vec4(v_rgba.rgb, v_rgba.a);
            }`})}const so=0,no=1,ao=2,oo=3,lo=4,ho=5,co=6,fo=7,$r=8,Kr=9,Qr=10,At=-1,uo=1;class _o extends ii{constructor(e,t=21){super(e),this._billboards=[],this._gliphParamBuffer=null,this._fontIndexBuffer=null,this._outlineBuffer=null,this._outlineColorBuffer=null,this._gliphParamArr=new Float32Array([]),this._fontIndexArr=new Float32Array([]),this._outlineArr=new Float32Array([]),this._outlineColorArr=new Float32Array([]),this._buffersUpdateCallbacks[$r]=this.createFontIndexBuffer,this._buffersUpdateCallbacks[Kr]=this.createOutlineBuffer,this._buffersUpdateCallbacks[Qr]=this.createOutlineColorBuffer,this._changedBuffers=new Array(this._buffersUpdateCallbacks.length),this._maxLetters=t}initProgram(){this._renderer&&this._renderer.handler&&this._renderer.handler.gl&&(this._renderer.handler.programs.label||(this._renderer.handler.gl.type==="webgl2"?this._renderer.handler.addProgram(to()):this._renderer.handler.addProgram(io())),this._renderer.handler.programs.labelPicking||this._renderer.handler.addProgram(ro()))}get labels(){return this._billboards}add(e){e._handler||(e._handler=this,this.assignFontAtlas(e),this.refresh())}updateFonts(){let e=[...this._billboards];this._billboards=[];for(let t=0;t<e.length;t++)this.assignFontAtlas(e[t])}_addLabelToArrays(e){this._renderer&&this._renderer.labelWorker.make({handler:this,label:e})}assignFontAtlas(e){this._entityCollection&&this._renderer?(e.assignFontAtlas(this._renderer.fontAtlas),this._addLabelToArrays(e)):this._billboards.push(e)}workerCallback(e,t){t._lockId!==he&&t._handler&&this.isEqual(t._handler)&&(t._isReady=!0,t._lockId=he,t._handlerIndex=this._billboards.length,this._billboards.push(t),this._vertexArr=$(this._vertexArr,e.vertexArr),this._texCoordArr=$(this._texCoordArr,e.texCoordArr),this._gliphParamArr=$(this._gliphParamArr,e.gliphParamArr),this._positionHighArr=$(this._positionHighArr,e.positionHighArr),this._positionLowArr=$(this._positionLowArr,e.positionLowArr),this._sizeArr=$(this._sizeArr,e.sizeArr),this._offsetArr=$(this._offsetArr,e.offsetArr),this._rgbaArr=$(this._rgbaArr,e.rgbaArr),this._rotationArr=$(this._rotationArr,e.rotationArr),this._fontIndexArr=$(this._fontIndexArr,e.fontIndexArr),this._outlineArr=$(this._outlineArr,e.outlineArr),this._outlineColorArr=$(this._outlineColorArr,e.outlineColorArr),this._pickingColorArr=$(this._pickingColorArr,e.pickingColorArr),t.update(),this.refresh())}clear(){this._texCoordArr=null,this._gliphParamArr=null,this._vertexArr=null,this._positionHighArr=null,this._positionLowArr=null,this._sizeArr=null,this._offsetArr=null,this._rgbaArr=null,this._rotationArr=null,this._fontIndexArr=null,this._outlineArr=null,this._outlineColorArr=null,this._texCoordArr=new Float32Array([]),this._gliphParamArr=new Float32Array([]),this._vertexArr=new Float32Array([]),this._positionHighArr=new Float32Array([]),this._positionLowArr=new Float32Array([]),this._sizeArr=new Float32Array([]),this._offsetArr=new Float32Array([]),this._rgbaArr=new Float32Array([]),this._rotationArr=new Float32Array([]),this._fontIndexArr=new Float32Array([]),this._outlineArr=new Float32Array([]),this._outlineColorArr=new Float32Array([]),this._removeBillboards(),this._deleteBuffers(),this.refresh()}_deleteBuffers(){if(this._renderer){let e=this._renderer.handler.gl;e.deleteBuffer(this._gliphParamBuffer),e.deleteBuffer(this._sizeBuffer),e.deleteBuffer(this._fontIndexBuffer),e.deleteBuffer(this._texCoordBuffer),e.deleteBuffer(this._outlineBuffer),e.deleteBuffer(this._outlineColorBuffer),e.deleteBuffer(this._positionHighBuffer),e.deleteBuffer(this._positionLowBuffer),e.deleteBuffer(this._sizeBuffer),e.deleteBuffer(this._offsetBuffer),e.deleteBuffer(this._rgbaBuffer),e.deleteBuffer(this._rotationBuffer),e.deleteBuffer(this._vertexBuffer),e.deleteBuffer(this._texCoordBuffer),e.deleteBuffer(this._pickingColorBuffer),this._gliphParamBuffer=null,this._sizeBuffer=null,this._fontIndexBuffer=null,this._texCoordBuffer=null,this._outlineBuffer=null,this._outlineColorBuffer=null,this._positionHighBuffer=null,this._positionLowBuffer=null,this._sizeBuffer=null,this._offsetBuffer=null,this._rgbaBuffer=null,this._rotationBuffer=null,this._vertexBuffer=null,this._texCoordBuffer=null,this._pickingColorBuffer=null}}_displayPASS(){let e=this._renderer,t=e.handler;t.programs.label.activate();let i=t.programs.label._program,r=i.attributes,s=i.uniforms,n=t.gl,a=this._entityCollection;n.disable(n.CULL_FACE),n.uniform1iv(s.fontTextureArr,e.fontAtlas.samplerArr),n.uniform4fv(s.sdfParamsArr,e.fontAtlas.sdfParamsArr),n.uniformMatrix4fv(s.viewMatrix,!1,e.activeCamera.getViewMatrix()),n.uniformMatrix4fv(s.projectionMatrix,!1,e.activeCamera.getProjectionMatrix()),n.uniform3fv(s.eyePositionHigh,e.activeCamera.eyeHigh),n.uniform3fv(s.eyePositionLow,e.activeCamera.eyeLow),n.uniform3fv(s.scaleByDistance,a.scaleByDistance),n.uniform1f(s.opacity,a._fadingOpacity),n.uniform1f(s.planetRadius,a.renderNode._planetRadius2||0),n.uniform2fv(s.viewport,[t.canvas.clientWidth,t.canvas.clientHeight]),n.bindBuffer(n.ARRAY_BUFFER,this._texCoordBuffer),n.vertexAttribPointer(r.a_texCoord,this._texCoordBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._gliphParamBuffer),n.vertexAttribPointer(r.a_gliphParam,this._gliphParamBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._vertexBuffer),n.vertexAttribPointer(r.a_vertices,this._vertexBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._positionHighBuffer),n.vertexAttribPointer(r.a_positionsHigh,this._positionHighBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._positionLowBuffer),n.vertexAttribPointer(r.a_positionsLow,this._positionLowBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._sizeBuffer),n.vertexAttribPointer(r.a_size,this._sizeBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._rotationBuffer),n.vertexAttribPointer(r.a_rotation,this._rotationBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._offsetBuffer),n.vertexAttribPointer(r.a_offset,this._offsetBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._fontIndexBuffer),n.vertexAttribPointer(r.a_fontIndex,this._fontIndexBuffer.itemSize,n.FLOAT,!1,0,0),n.uniform1i(s.isOutlinePass,1),n.uniform1f(s.depthOffset,a.polygonOffsetUnits),n.bindBuffer(n.ARRAY_BUFFER,this._outlineColorBuffer),n.vertexAttribPointer(r.a_rgba,this._outlineColorBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._outlineBuffer),n.vertexAttribPointer(r.a_outline,this._outlineBuffer.itemSize,n.FLOAT,!1,0,0),n.drawArrays(n.TRIANGLES,0,this._vertexBuffer.numItems),n.depthFunc(n.EQUAL),n.uniform1i(s.isOutlinePass,0),n.uniform1f(s.depthOffset,a.polygonOffsetUnits),n.bindBuffer(n.ARRAY_BUFFER,this._rgbaBuffer),n.vertexAttribPointer(r.a_rgba,this._rgbaBuffer.itemSize,n.FLOAT,!1,0,0),n.drawArrays(n.TRIANGLES,0,this._vertexBuffer.numItems),n.depthFunc(n.LESS),n.enable(n.CULL_FACE)}_pickingPASS(){let e=this._renderer,t=e.handler;t.programs.labelPicking.activate();let i=t.programs.labelPicking._program,r=i.attributes,s=i.uniforms,n=t.gl,a=this._entityCollection,o=a.renderNode;n.disable(n.CULL_FACE),n.uniformMatrix4fv(s.viewMatrix,!1,e.activeCamera.getViewMatrix()),n.uniformMatrix4fv(s.projectionMatrix,!1,e.activeCamera.getProjectionMatrix()),n.uniform3fv(s.eyePositionHigh,e.activeCamera.eyeHigh),n.uniform3fv(s.eyePositionLow,e.activeCamera.eyeLow),n.uniform3fv(s.scaleByDistance,a.scaleByDistance),n.uniform1f(s.opacity,a._fadingOpacity),n.uniform1f(s.planetRadius,o._planetRadius2||0),n.uniform2fv(s.viewport,[t.canvas.clientWidth,t.canvas.clientHeight]),n.bindBuffer(n.ARRAY_BUFFER,this._texCoordBuffer),n.vertexAttribPointer(r.a_texCoord,this._texCoordBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._gliphParamBuffer),n.vertexAttribPointer(r.a_gliphParam,this._gliphParamBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._vertexBuffer),n.vertexAttribPointer(r.a_vertices,this._vertexBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._positionHighBuffer),n.vertexAttribPointer(r.a_positionsHigh,this._positionHighBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._positionLowBuffer),n.vertexAttribPointer(r.a_positionsLow,this._positionLowBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._sizeBuffer),n.vertexAttribPointer(r.a_size,this._sizeBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._rotationBuffer),n.vertexAttribPointer(r.a_rotation,this._rotationBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._offsetBuffer),n.vertexAttribPointer(r.a_offset,this._offsetBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._pickingColorBuffer),n.vertexAttribPointer(r.a_rgba,this._pickingColorBuffer.itemSize,n.FLOAT,!1,0,0),n.uniform1f(s.depthOffset,a.polygonOffsetUnits),n.drawArrays(n.TRIANGLES,0,this._vertexBuffer.numItems),n.enable(n.CULL_FACE)}_removeBillboard(e){let t=e._handlerIndex;this._billboards.splice(t,1);let i=24*this._maxLetters,r=t*i;this._rgbaArr=K(this._rgbaArr,r,i),this._outlineColorArr=K(this._outlineColorArr,r,i),this._texCoordArr=K(this._texCoordArr,r,i),this._gliphParamArr=K(this._gliphParamArr,r,i),i=18*this._maxLetters,r=t*i,this._positionHighArr=K(this._positionHighArr,r,i),this._positionLowArr=K(this._positionLowArr,r,i),this._offsetArr=K(this._offsetArr,r,i),this._pickingColorArr=K(this._pickingColorArr,r,i),i=12*this._maxLetters,r=t*i,this._vertexArr=K(this._vertexArr,r,i),i=6*this._maxLetters,r=t*i,this._sizeArr=K(this._sizeArr,r,i),this._rotationArr=K(this._rotationArr,r,i),this._fontIndexArr=K(this._fontIndexArr,r,i),this._outlineArr=K(this._outlineArr,r,i),this.reindexBillboardsArray(t),this.refresh(),e._handlerIndex=-1,e._handler=null,e._isReady=!1}setText(e,t,i,r,s=0,n=!1){t=t.normalize("NFKC");let a=this._renderer.fontAtlas.atlasesArr[i];if(!a)return;let o=e*24*this._maxLetters,l=this._texCoordArr,c=this._gliphParamArr,d=0,f=Math.min(this._maxLetters,t.length),_=0;n&&(_=uo);let g=0,v=a.kernings;for(d=0;d<f;d++){let u=o+d*24,p=t[d],b=a.get(p.charCodeAt(0))||a.get(32);if(!b)continue;let w=b.texCoords,y=b.metrics;l[u]=w[0],l[u+1]=w[1],l[u+2]=g,l[u+3]=_,l[u+4]=w[2],l[u+5]=w[3],l[u+6]=g,l[u+7]=_,l[u+8]=w[4],l[u+9]=w[5],l[u+10]=g,l[u+11]=_,l[u+12]=w[6],l[u+13]=w[7],l[u+14]=g,l[u+15]=_,l[u+16]=w[8],l[u+17]=w[9],l[u+18]=g,l[u+19]=_,l[u+20]=w[10],l[u+21]=w[11],l[u+22]=g,l[u+23]=_,c[u]=y.nWidth,c[u+1]=y.nHeight,c[u+2]=y.nXOffset,c[u+3]=y.nYOffset,c[u+4]=y.nWidth,c[u+5]=y.nHeight,c[u+6]=y.nXOffset,c[u+7]=y.nYOffset,c[u+8]=y.nWidth,c[u+9]=y.nHeight,c[u+10]=y.nXOffset,c[u+11]=y.nYOffset,c[u+12]=y.nWidth,c[u+13]=y.nHeight,c[u+14]=y.nXOffset,c[u+15]=y.nYOffset,c[u+16]=y.nWidth,c[u+17]=y.nHeight,c[u+18]=y.nXOffset,c[u+19]=y.nYOffset,c[u+20]=y.nWidth,c[u+21]=y.nHeight,c[u+22]=y.nXOffset,c[u+23]=y.nYOffset;let x=v[p.charCodeAt(0)];if(x&&t[d+1]){let T=x[t[d+1].charCodeAt(0)];T?g+=y.nAdvance+T+s:g+=y.nAdvance+s}else g+=y.nAdvance+s}if(r===St.CENTER)for(g*=-.5,d=0;d<f;d++){let u=o+d*24;l[u+2]+=g,l[u+6]+=g,l[u+10]+=g,l[u+14]+=g,l[u+18]+=g,l[u+22]+=g}for(;d<this._maxLetters;d++){let u=o+d*24;l[u+3]=At,l[u+7]=At,l[u+11]=At,l[u+15]=At,l[u+19]=At,l[u+23]=At}this._changedBuffers[co]=!0}setPositionArr(e,t,i){let r=e*18*this._maxLetters,s=this._positionHighArr,n=t.x,a=t.y,o=t.z,l=this._positionLowArr,c=i.x,d=i.y,f=i.z;for(let _=0;_<this._maxLetters;_++){let g=r+_*18;s[g]=n,s[g+1]=a,s[g+2]=o,s[g+3]=n,s[g+4]=a,s[g+5]=o,s[g+6]=n,s[g+7]=a,s[g+8]=o,s[g+9]=n,s[g+10]=a,s[g+11]=o,s[g+12]=n,s[g+13]=a,s[g+14]=o,s[g+15]=n,s[g+16]=a,s[g+17]=o,l[g]=c,l[g+1]=d,l[g+2]=f,l[g+3]=c,l[g+4]=d,l[g+5]=f,l[g+6]=c,l[g+7]=d,l[g+8]=f,l[g+9]=c,l[g+10]=d,l[g+11]=f,l[g+12]=c,l[g+13]=d,l[g+14]=f,l[g+15]=c,l[g+16]=d,l[g+17]=f}this._changedBuffers[no]=!0}setPickingColorArr(e,t){let i=e*18*this._maxLetters,r=this._pickingColorArr,s=t.x/255,n=t.y/255,a=t.z/255;for(let o=0;o<this._maxLetters;o++){let l=i+o*18;r[l]=s,r[l+1]=n,r[l+2]=a,r[l+3]=s,r[l+4]=n,r[l+5]=a,r[l+6]=s,r[l+7]=n,r[l+8]=a,r[l+9]=s,r[l+10]=n,r[l+11]=a,r[l+12]=s,r[l+13]=n,r[l+14]=a,r[l+15]=s,r[l+16]=n,r[l+17]=a}this._changedBuffers[so]=!0}setSizeArr(e,t){let i=e*6*this._maxLetters,r=this._sizeArr;for(let s=0;s<this._maxLetters;s++){let n=i+s*6;r[n]=t,r[n+1]=t,r[n+2]=t,r[n+3]=t,r[n+4]=t,r[n+5]=t}this._changedBuffers[ao]=!0}setOffsetArr(e,t){let i=e*18*this._maxLetters,r=this._offsetArr,s=t.x,n=t.y,a=t.z;for(let o=0;o<this._maxLetters;o++){let l=i+o*18;r[l]=s,r[l+1]=n,r[l+2]=a,r[l+3]=s,r[l+4]=n,r[l+5]=a,r[l+6]=s,r[l+7]=n,r[l+8]=a,r[l+9]=s,r[l+10]=n,r[l+11]=a,r[l+12]=s,r[l+13]=n,r[l+14]=a,r[l+15]=s,r[l+16]=n,r[l+17]=a}this._changedBuffers[oo]=!0}setRgbaArr(e,t){let i=e*24*this._maxLetters,r=this._rgbaArr,s=t.x,n=t.y,a=t.z,o=t.w;for(let l=0;l<this._maxLetters;l++){let c=i+l*24;r[c]=s,r[c+1]=n,r[c+2]=a,r[c+3]=o,r[c+4]=s,r[c+5]=n,r[c+6]=a,r[c+7]=o,r[c+8]=s,r[c+9]=n,r[c+10]=a,r[c+11]=o,r[c+12]=s,r[c+13]=n,r[c+14]=a,r[c+15]=o,r[c+16]=s,r[c+17]=n,r[c+18]=a,r[c+19]=o,r[c+20]=s,r[c+21]=n,r[c+22]=a,r[c+23]=o}this._changedBuffers[lo]=!0}setOutlineColorArr(e,t){let i=e*24*this._maxLetters,r=this._outlineColorArr,s=t.x,n=t.y,a=t.z,o=t.w;for(let l=0;l<this._maxLetters;l++){let c=i+l*24;r[c]=s,r[c+1]=n,r[c+2]=a,r[c+3]=o,r[c+4]=s,r[c+5]=n,r[c+6]=a,r[c+7]=o,r[c+8]=s,r[c+9]=n,r[c+10]=a,r[c+11]=o,r[c+12]=s,r[c+13]=n,r[c+14]=a,r[c+15]=o,r[c+16]=s,r[c+17]=n,r[c+18]=a,r[c+19]=o,r[c+20]=s,r[c+21]=n,r[c+22]=a,r[c+23]=o}this._changedBuffers[Qr]=!0}setOutlineArr(e,t){let i=e*6*this._maxLetters,r=this._outlineArr;for(let s=0;s<this._maxLetters;s++){let n=i+s*6;r[n]=t,r[n+1]=t,r[n+2]=t,r[n+3]=t,r[n+4]=t,r[n+5]=t}this._changedBuffers[Kr]=!0}setRotationArr(e,t){let i=e*6*this._maxLetters,r=this._rotationArr;for(let s=0;s<this._maxLetters;s++){let n=i+s*6;r[n]=t,r[n+1]=t,r[n+2]=t,r[n+3]=t,r[n+4]=t,r[n+5]=t}this._changedBuffers[ho]=!0}setVisibility(e,t){let i;t?i=[0,0,0,-1,1,-1,1,-1,1,0,0,0]:i=[0,0,0,0,0,0,0,0,0,0,0,0],this.setVertexArr(e,i)}setVertexArr(e,t){let i=e*12*this._maxLetters,r=this._vertexArr;for(let s=0;s<this._maxLetters;s++){let n=i+s*12;r[n]=t[0],r[n+1]=t[1],r[n+2]=t[2],r[n+3]=t[3],r[n+4]=t[4],r[n+5]=t[5],r[n+6]=t[6],r[n+7]=t[7],r[n+8]=t[8],r[n+9]=t[9],r[n+10]=t[10],r[n+11]=t[11]}this._changedBuffers[fo]=!0}setFontIndexArr(e,t){let i=e*6*this._maxLetters,r=this._fontIndexArr;for(let s=0;s<this._maxLetters;s++){let n=i+s*6;r[n]=t,r[n+1]=t,r[n+2]=t,r[n+3]=t,r[n+4]=t,r[n+5]=t}this._changedBuffers[$r]=!0}createSizeBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._sizeBuffer),this._sizeBuffer=e.createArrayBuffer(this._sizeArr,1,this._sizeArr.length)}createFontIndexBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._fontIndexBuffer),this._fontIndexBuffer=e.createArrayBuffer(this._fontIndexArr,1,this._fontIndexArr.length)}createTexCoordBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._texCoordBuffer),this._texCoordBuffer=e.createArrayBuffer(this._texCoordArr,4,this._texCoordArr.length/4),e.gl.deleteBuffer(this._gliphParamBuffer),this._gliphParamBuffer=e.createArrayBuffer(this._gliphParamArr,4,this._gliphParamArr.length/4)}createOutlineBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._outlineBuffer),this._outlineBuffer=e.createArrayBuffer(this._outlineArr,1,this._outlineArr.length)}createOutlineColorBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._outlineColorBuffer),this._outlineColorBuffer=e.createArrayBuffer(this._outlineColorArr,4,this._outlineColorArr.length/4)}setMaxLetters(e){this._maxLetters=e}}function go(){return new G("pointCloud",{uniforms:{projectionViewMatrix:"mat4",opacity:"float",pointSize:"float"},attributes:{coordinates:"vec3",colors:"vec3"},vertexShader:`attribute vec3 coordinates;
            attribute vec4 colors;
            uniform mat4 projectionViewMatrix;
            uniform float opacity;
            uniform float pointSize;
            varying vec4 color;
            void main() {
                color = colors;
                color.a *= opacity;
                gl_Position = projectionViewMatrix * vec4(coordinates, 1.0);
                gl_PointSize = pointSize;
            }`,fragmentShader:`precision highp float;
            varying vec4 color;
            void main(void) {
                gl_FragColor = color;
            }`})}class Li{constructor(e){this.pickingEnabled=!0,this.__id=Li.__counter__++,this.pickingEnabled=!0,this._entityCollection=e,this._renderer=null,this._pointClouds=[]}_initProgram(){this._renderer&&this._renderer.handler&&(this._renderer.handler.programs.pointCloud||this._renderer.handler.addProgram(go()))}setRenderNode(e){this._renderer=e.renderer,this._initProgram();for(let t=0;t<this._pointClouds.length;t++)this._pointClouds[t].setRenderNode(e)}add(e){e._handlerIndex===-1&&(e._handler=this,e._handlerIndex=this._pointClouds.length,this._pointClouds.push(e),this._entityCollection&&this._entityCollection.renderNode&&e.setRenderNode(this._entityCollection.renderNode))}remove(e){let t=e._handlerIndex;t!==-1&&(e._deleteBuffers(),e._handlerIndex=-1,e._handler=null,this._pointClouds.splice(t,1),this._reindexPointCloudArray(t))}_reindexPointCloudArray(e){let t=this._pointClouds;for(let i=e;i<t.length;i++)t[i]._handlerIndex=i}draw(){let e=this._pointClouds.length;for(;e--;)this._pointClouds[e].draw()}drawPicking(){if(this.pickingEnabled){let e=this._pointClouds.length;for(;e--;)this._pointClouds[e].drawPicking()}}clear(){let e=this._pointClouds.length;for(;e--;)this._pointClouds[e]._deleteBuffers(),this._pointClouds[e]._handler=null,this._pointClouds[e]._handlerIndex=-1;this._pointClouds.length=0,this._pointClouds=[]}}Li.__counter__=0;function mo(){return new G("polyline_screen",{uniforms:{viewport:"vec2",proj:"mat4",view:"mat4",eyePositionHigh:"vec3",eyePositionLow:"vec3",thickness:"float",opacity:"float",depthOffset:"float"},attributes:{prevHigh:"vec3",currentHigh:"vec3",nextHigh:"vec3",prevLow:"vec3",currentLow:"vec3",nextLow:"vec3",order:"float",color:"vec4"},vertexShader:`precision highp float;

                attribute vec3 prevHigh;
                attribute vec3 currentHigh;
                attribute vec3 nextHigh;

                attribute vec3 prevLow;
                attribute vec3 currentLow;
                attribute vec3 nextLow;

                attribute float order;

                attribute vec4 color;

                uniform float thickness;
                uniform mat4 proj;
                uniform mat4 view;
                uniform vec2 viewport;
                uniform vec3 eyePositionHigh;
                uniform vec3 eyePositionLow;
                uniform float opacity;
                uniform float depthOffset;

                varying vec4 vColor;
                varying vec3 vPos;
                varying vec3 uCamPos;

                const float NEAR = -1.0;

                vec2 getIntersection(vec2 start1, vec2 end1, vec2 start2, vec2 end2){
                    vec2 dir = end2 - start2;
                    vec2 perp = vec2(-dir.y, dir.x);
                    float d2 = dot(perp, start2);
                    float seg = dot(perp, start1) - d2;
                    float prl = seg - dot(perp, end1) + d2;
                    if(prl > -1.0 && prl < 1.0){
                        return start1;
                    }
                    float u = seg / prl;
                    return start1 + u * (end1 - start1);
                }

                vec2 project(vec4 p){
                    return (0.5 * p.xyz / p.w + 0.5).xy * viewport;
                }

                void main(){

                    uCamPos = eyePositionHigh + eyePositionLow;

                    vColor = vec4(color.rgb, color.a * opacity);

                    vec3 current = currentHigh + currentLow;

                    vPos = current;

                    mat4 viewMatrixRTE = view;
                    viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                    vec3 highDiff, lowDiff;

                    highDiff = currentHigh - eyePositionHigh;
                    lowDiff = currentLow - eyePositionLow;
                    vec4 vCurrent = viewMatrixRTE * vec4(highDiff + lowDiff, 1.0);

                    highDiff = prevHigh - eyePositionHigh;
                    lowDiff = prevLow - eyePositionLow;
                    vec4 vPrev = viewMatrixRTE * vec4(highDiff + lowDiff, 1.0);

                    highDiff = nextHigh - eyePositionHigh;
                    lowDiff = nextLow - eyePositionLow;
                    vec4 vNext = viewMatrixRTE * vec4(highDiff + lowDiff, 1.0);

                    /*Clip near plane, the point behind view plane*/
                    if(vCurrent.z > NEAR) {
                        if(vPrev.z < NEAR && abs(order) == 1.0){
                            vCurrent = vPrev + (vCurrent - vPrev) * (NEAR - vPrev.z) / (vCurrent.z - vPrev.z);
                        } else if(vNext.z < NEAR && abs(order) == 2.0){
                            vCurrent = vNext + (vCurrent - vNext) * (NEAR - vNext.z) / (vCurrent.z - vNext.z);
                        }
                    }

                    vec4 dCurrent = proj * vCurrent;
                    vec2 _next = project(proj * vNext);
                    vec2 _prev = project(proj * vPrev);
                    vec2 _current = project(dCurrent);

                    if(_prev == _current){
                        if(_next == _current){
                            _next = _current + vec2(1.0, 0.0);
                            _prev = _current - _next;
                        }else{
                            _prev = _current + normalize(_current - _next);
                        }
                    }

                    if(_next == _current){
                        _next = _current + normalize(_current - _prev);
                    }

                    vec2 sNext = _next,
                         sCurrent = _current,
                         sPrev = _prev;

                    vec2 dirNext = normalize(sNext - sCurrent);
                    vec2 dirPrev = normalize(sPrev - sCurrent);
                    float dotNP = dot(dirNext, dirPrev);

                    vec2 normalNext = normalize(vec2(-dirNext.y, dirNext.x));
                    vec2 normalPrev = normalize(vec2(dirPrev.y, -dirPrev.x));

                    float d = thickness * sign(order);

                    vec2 m;
                    if(dotNP >= 0.99991){
                        m = sCurrent - normalPrev * d;
                    }else{
                        m = getIntersection( sCurrent + normalPrev * d, sPrev + normalPrev * d,
                                sCurrent + normalNext * d, sNext + normalNext * d );

                        if( dotNP > 0.5 && dot(dirNext + dirPrev, m - sCurrent) < 0.0 ){
                            float occw = order * sign(dirNext.x * dirPrev.y - dirNext.y * dirPrev.x);
                            if(occw == -1.0){
                                m = sCurrent + normalPrev * d;
                            }else if(occw == 1.0){
                                m = sCurrent + normalNext * d;
                            }else if(occw == -2.0){
                                m = sCurrent + normalNext * d;
                            }else if(occw == 2.0){
                                m = sCurrent + normalPrev * d;
                            }
                        }else if(distance(sCurrent, m) > min(distance(sCurrent, sNext), distance(sCurrent, sPrev))){
                            m = sCurrent + normalNext * d;
                        }
                    }

                    gl_Position = vec4((2.0 * m / viewport - 1.0) * dCurrent.w, dCurrent.z + depthOffset, dCurrent.w);
                }`,fragmentShader:`precision highp float;
                //uniform vec2 uFloatParams;
                varying vec3 uCamPos;
                varying vec4 vColor;
                varying vec3 vPos;
                void main() {
                    vec3 look = vPos - uCamPos;
                    float lookLength = length(look);
                    //float a = vColor.a * step(lookLength, sqrt(dot(uCamPos,uCamPos) - uFloatParams[0]) + sqrt(dot(vPos,vPos) - uFloatParams[0]));
                    float a = vColor.a;
                    gl_FragColor = vec4(vColor.rgb, a);
                }`})}function po(){return new G("polyline_picking",{uniforms:{viewport:"vec2",proj:"mat4",view:"mat4",eyePositionHigh:"vec3",eyePositionLow:"vec3",color:"vec4",thickness:"float",depthOffset:"float"},attributes:{prevHigh:"vec3",currentHigh:"vec3",nextHigh:"vec3",prevLow:"vec3",currentLow:"vec3",nextLow:"vec3",order:"float"},vertexShader:`precision highp float;
                
                attribute vec3 prevHigh;
                attribute vec3 currentHigh;
                attribute vec3 nextHigh;
                
                attribute vec3 prevLow;
                attribute vec3 currentLow;
                attribute vec3 nextLow;

                attribute float order;

                uniform float thickness;
                uniform vec4 color;
                uniform mat4 proj;
                uniform mat4 view;
                uniform vec2 viewport;
                uniform vec3 eyePositionHigh;
                uniform vec3 eyePositionLow;
                uniform float depthOffset;

                varying vec4 vColor;
                varying vec3 vPos;
                varying vec3 uCamPos;
               
                
                const float NEAR = -1.0;
                
                vec2 getIntersection(vec2 start1, vec2 end1, vec2 start2, vec2 end2){
                    vec2 dir = end2 - start2;
                    vec2 perp = vec2(-dir.y, dir.x);
                    float d2 = dot(perp, start2);
                    float seg = dot(perp, start1) - d2;
                    float prl = seg - dot(perp, end1) + d2;
                    if(prl > -1.0 && prl < 1.0){
                        return start1;
                    }
                    float u = seg / prl;
                    return start1 + u * (end1 - start1);
                }
                
                vec2 project(vec4 p){
                    return (0.5 * p.xyz / p.w + 0.5).xy * viewport;
                }
                
                void main(){

                    uCamPos = eyePositionHigh + eyePositionLow;

                    vColor = color;

                    vec3 current = currentHigh + currentLow;

                    vPos = current;                    

                    vec3 highDiff, lowDiff;

                    mat4 viewMatrixRTE = view;
                    viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                    highDiff = currentHigh - eyePositionHigh;
                    lowDiff = currentLow - eyePositionLow;
                    vec4 vCurrent = viewMatrixRTE * vec4(highDiff + lowDiff, 1.0);

                    highDiff = prevHigh - eyePositionHigh;
                    lowDiff = prevLow - eyePositionLow;    
                    vec4 vPrev = viewMatrixRTE * vec4(highDiff + lowDiff, 1.0);

                    highDiff = nextHigh - eyePositionHigh;
                    lowDiff = nextLow - eyePositionLow;    
                    vec4 vNext = viewMatrixRTE * vec4(highDiff + lowDiff, 1.0);

                    /*Clip near plane*/
                    if(vCurrent.z > NEAR) {
                        if(vPrev.z < NEAR && abs(order) == 1.0){
                            vCurrent = vPrev + (vCurrent - vPrev) * (NEAR - vPrev.z) / (vCurrent.z - vPrev.z);
                        } else if(vNext.z < NEAR && abs(order) == 2.0){
                            vCurrent = vNext + (vCurrent - vNext) * (NEAR - vNext.z) / (vCurrent.z - vNext.z);
                        }
                    }
                    
                    vec4 dCurrent = proj * vCurrent;
                    vec2 _next = project(proj * vNext);
                    vec2 _prev = project(proj * vPrev);
                    vec2 _current = project(dCurrent);
                    if(_prev == _current){
                        if(_next == _current){
                            _next = _current + vec2(1.0, 0.0);
                            _prev = _current - _next;
                        }else{
                            _prev = _current + normalize(_current - _next);
                        }
                    }
                    if(_next == _current){
                        _next = _current + normalize(_current - _prev);
                    }
                    
                    vec2 sNext = _next,
                         sCurrent = _current,
                         sPrev = _prev;

                    vec2 dirNext = normalize(sNext - sCurrent);
                    vec2 dirPrev = normalize(sPrev - sCurrent);
                    float dotNP = dot(dirNext, dirPrev);
                    
                    vec2 normalNext = normalize(vec2(-dirNext.y, dirNext.x));
                    vec2 normalPrev = normalize(vec2(dirPrev.y, -dirPrev.x));
                    
                    float d = thickness * sign(order);
                    
                    vec2 m;
                    if(dotNP >= 0.99991){
                        m = sCurrent - normalPrev * d;
                    }else{
                        m = getIntersection( sCurrent + normalPrev * d, sPrev + normalPrev * d,
                                sCurrent + normalNext * d, sNext + normalNext * d );
                        
                        if( dotNP > 0.5 && dot(dirNext + dirPrev, m - sCurrent) < 0.0 ){
                            float occw = order * sign(dirNext.x * dirPrev.y - dirNext.y * dirPrev.x);
                            if(occw == -1.0){
                                m = sCurrent + normalPrev * d;
                            }else if(occw == 1.0){
                                m = sCurrent + normalNext * d;
                            }else if(occw == -2.0){
                                m = sCurrent + normalNext * d;
                            }else if(occw == 2.0){
                                m = sCurrent + normalPrev * d;
                            }
                        }
                        else if(distance(sCurrent, m) > min(distance(sCurrent, sNext), distance(sCurrent, sPrev))){
                            m = sCurrent + normalNext * d;
                        }
                    }
                    gl_Position = vec4((2.0 * m / viewport - 1.0) * dCurrent.w, dCurrent.z + depthOffset, dCurrent.w);
                }`,fragmentShader:`precision highp float;
                //uniform vec2 uFloatParams;
                varying vec3 uCamPos;
                varying vec4 vColor;
                varying vec3 vPos;
                void main() {
                    vec3 look = vPos - uCamPos;
                    float lookLength = length(look);
                    //float a = vColor.a * step(lookLength, sqrt(dot(uCamPos,uCamPos) - uFloatParams[0]) + sqrt(dot(vPos,vPos) - uFloatParams[0]));
                    float a = vColor.a;                    
                    gl_FragColor = vec4(vColor.rgb, a);
                }`})}class Bi{constructor(e){this.__id=Bi.__counter__++,this._entityCollection=e,this._renderer=null,this._polylines=[],this.pickingEnabled=!0}_initProgram(){this._renderer&&this._renderer.handler&&(this._renderer.handler.programs.polyline_screen||this._renderer.handler.addProgram(mo()),this._renderer.handler.programs.polyline_picking||this._renderer.handler.addProgram(po()))}setRenderNode(e){this._renderer=e.renderer,this._initProgram();for(let t=0;t<this._polylines.length;t++)this._polylines[t].setRenderNode(e)}add(e){e._handlerIndex===-1&&(e._handler=this,e._handlerIndex=this._polylines.length,this._polylines.push(e),this._entityCollection&&this._entityCollection.renderNode&&e.setRenderNode(this._entityCollection.renderNode))}remove(e){let t=e._handlerIndex;t!==-1&&(e._deleteBuffers(),e._handlerIndex=-1,e._handler=null,this._polylines.splice(t,1),this.reindexPolylineArray(t))}reindexPolylineArray(e){let t=this._polylines;for(let i=e;i<t.length;i++)t[i]._handlerIndex=i}draw(){let e=this._polylines.length;for(;e--;)this._polylines[e].draw()}drawPicking(){if(this.pickingEnabled){let e=this._polylines.length;for(;e--;)this._polylines[e].drawPicking()}}clear(){let e=this._polylines.length;for(;e--;)this._polylines[e]._deleteBuffers(),this._polylines[e]._handler=null,this._polylines[e]._handlerIndex=-1;this._polylines.length=0,this._polylines=[]}}Bi.__counter__=0;function vo(){return new G("rayScreen",{uniforms:{projectionMatrix:"mat4",viewMatrix:"mat4",eyePositionHigh:"vec3",eyePositionLow:"vec3",resolution:"float",uOpacity:"float"},attributes:{a_vertices:"vec2",a_startPosHigh:"vec3",a_startPosLow:"vec3",a_endPosHigh:"vec3",a_endPosLow:"vec3",a_thickness:"float",a_rgba:"vec4"},vertexShader:`precision highp float;

            attribute vec4 a_rgba;
            attribute vec3 a_startPosHigh;
            attribute vec3 a_startPosLow;
            attribute vec3 a_endPosHigh;
            attribute vec3 a_endPosLow;
            attribute vec2 a_vertices;
            attribute float a_thickness;

            varying vec4 v_rgba;

            uniform mat4 viewMatrix;
            uniform mat4 projectionMatrix;
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;
            uniform float resolution;
            uniform float uOpacity;

            void main() {

                v_rgba = vec4(a_rgba.rgb, a_rgba.a * uOpacity);

                vec3 v = (a_endPosHigh - a_startPosHigh) + (a_endPosLow - a_startPosLow);

                vec3 look = (a_startPosHigh - eyePositionHigh) + (a_startPosLow - eyePositionLow) + v * a_vertices.y;
                vec3 up = normalize(normalize(v));
                vec3 right = normalize(cross(look,up));
 
                float dist = dot(look, vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]));
                float focalSize = 2.0 * dist * resolution;
                vec3 vert = right * a_thickness * focalSize * a_vertices.x;

                vec3 highDiff;
                if(a_vertices.y == 0.0){
                    highDiff = a_startPosHigh - eyePositionHigh;
                    vert += a_startPosLow - eyePositionLow;
                }else{
                    highDiff = a_endPosHigh - eyePositionHigh;
                    vert += a_endPosLow - eyePositionLow;
                }

                mat4 viewMatrixRTE = viewMatrix;
                viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);
                
                // Hack for iMac M1, looks like it doesnt 
                // work correctly with zeroes in highDiff
                // if(length(highDiff) < 1.0){
                //     highDiff = vec3(0.0);
                // }
                
                gl_Position = projectionMatrix * viewMatrixRTE * vec4(highDiff * step(1.0, length(highDiff)) + vert, 1.0);
            }`,fragmentShader:`precision highp float;
            varying vec4 v_rgba;
            void main () {
                gl_FragColor = v_rgba;
            }`})}const Jr=0,es=1,ts=2,is=3,rs=4,ss=5;class Si{constructor(e){this.__id=Si.__counter__++,this.pickingEnabled=!0,this._entityCollection=e,this._renderer=null,this._rays=[],this._vertexBuffer=null,this._startPositionHighBuffer=null,this._startPositionLowBuffer=null,this._endPositionHighBuffer=null,this._endPositionLowBuffer=null,this._thicknessBuffer=null,this._rgbaBuffer=null,this._pickingColorBuffer=null,this._vertexArr=[],this._startPositionHighArr=[],this._startPositionLowArr=[],this._endPositionHighArr=[],this._endPositionLowArr=[],this._thicknessArr=[],this._rgbaArr=[],this._pickingColorArr=[],this._buffersUpdateCallbacks=[],this._buffersUpdateCallbacks[ss]=this.createVertexBuffer,this._buffersUpdateCallbacks[es]=this.createStartPositionBuffer,this._buffersUpdateCallbacks[ts]=this.createEndPositionBuffer,this._buffersUpdateCallbacks[rs]=this.createThicknessBuffer,this._buffersUpdateCallbacks[is]=this.createRgbaBuffer,this._buffersUpdateCallbacks[Jr]=this.createPickingColorBuffer,this._changedBuffers=new Array(this._buffersUpdateCallbacks.length)}static concArr(e,t){for(let i=0;i<t.length;i++)e.push(t[i])}initProgram(){this._renderer&&this._renderer.handler&&(this._renderer.handler.programs.rayScreen||this._renderer.handler.addProgram(vo()))}setRenderer(e){this._renderer=e,this.initProgram()}refresh(){let e=this._changedBuffers.length;for(;e--;)this._changedBuffers[e]=!0}_removeRays(){let e=this._rays.length;for(;e--;){let t=this._rays[e];t._handlerIndex=-1,t._handler=null}this._rays.length=0,this._rays=[]}clear(){this._vertexArr=null,this._startPositionHighArr=null,this._startPositionLowArr=null,this._endPositionHighArr=null,this._endPositionLowArr=null,this._thicknessArr=null,this._rgbaArr=null,this._vertexArr=new Float32Array([]),this._startPositionHighArr=new Float32Array([]),this._startPositionLowArr=new Float32Array([]),this._endPositionHighArr=new Float32Array([]),this._endPositionLowArr=new Float32Array([]),this._thicknessArr=new Float32Array([]),this._rgbaArr=new Float32Array([]),this._removeRays(),this._deleteBuffers(),this.refresh()}_deleteBuffers(){if(this._renderer){let e=this._renderer.handler.gl;e&&(e.deleteBuffer(this._startPositionHighBuffer),e.deleteBuffer(this._startPositionLowBuffer),e.deleteBuffer(this._endPositionHighBuffer),e.deleteBuffer(this._endPositionLowBuffer),e.deleteBuffer(this._thicknessBuffer),e.deleteBuffer(this._rgbaBuffer),e.deleteBuffer(this._vertexBuffer)),this._startPositionHighBuffer=null,this._startPositionLowBuffer=null,this._endPositionHighBuffer=null,this._endPositionLowBuffer=null,this._thicknessBuffer=null,this._rgbaBuffer=null,this._vertexBuffer=null}}update(){if(this._renderer){let e=this._changedBuffers.length;for(;e--;)this._changedBuffers[e]&&(this._buffersUpdateCallbacks[e].call(this),this._changedBuffers[e]=!1)}}add(e){e._handlerIndex==-1&&(e._handler=this,e._handlerIndex=this._rays.length,this._rays.push(e),this._addRayToArrays(e),this.refresh())}_addRayToArrays(e){e.getVisibility()?this._vertexArr=xe(this._vertexArr,[-.5,1,-.5,0,.5,0,.5,0,.5,1,-.5,1]):this._vertexArr=xe(this._vertexArr,[0,0,0,0,0,0,0,0,0,0,0,0]);let t=e._startPositionHigh.x,i=e._startPositionHigh.y,r=e._startPositionHigh.z;this._startPositionHighArr=xe(this._startPositionHighArr,[t,i,r,t,i,r,t,i,r,t,i,r,t,i,r,t,i,r]),t=e._startPositionLow.x,i=e._startPositionLow.y,r=e._startPositionLow.z,this._startPositionLowArr=xe(this._startPositionLowArr,[t,i,r,t,i,r,t,i,r,t,i,r,t,i,r,t,i,r]),t=e._endPositionHigh.x,i=e._endPositionHigh.y,r=e._endPositionHigh.z,this._endPositionHighArr=xe(this._endPositionHighArr,[t,i,r,t,i,r,t,i,r,t,i,r,t,i,r,t,i,r]),t=e._endPositionLow.x,i=e._endPositionLow.y,r=e._endPositionLow.z,this._endPositionLowArr=xe(this._endPositionLowArr,[t,i,r,t,i,r,t,i,r,t,i,r,t,i,r,t,i,r]),t=e._thickness,this._thicknessArr=xe(this._thicknessArr,[t,t,t,t,t,t]);let s=e._startColor.x,n=e._startColor.y,a=e._startColor.z,o=e._startColor.w,l=e._endColor.x,c=e._endColor.y,d=e._endColor.z,f=e._endColor.w;this._rgbaArr=xe(this._rgbaArr,[l,c,d,f,s,n,a,o,s,n,a,o,s,n,a,o,l,c,d,f,l,c,d,f]),t=e._entity._pickingColor.x/255,i=e._entity._pickingColor.y/255,r=e._entity._pickingColor.z/255,this._pickingColorArr=xe(this._pickingColorArr,[t,i,r,t,i,r,t,i,r,t,i,r,t,i,r,t,i,r])}_displayPASS(){let e=this._renderer,t=e.handler;t.programs.rayScreen.activate();let i=t.programs.rayScreen._program,r=i.attributes,s=i.uniforms,n=t.gl,a=this._entityCollection;n.disable(n.CULL_FACE),n.uniform1f(s.uOpacity,a._fadingOpacity),n.uniformMatrix4fv(s.viewMatrix,!1,e.activeCamera.getViewMatrix()),n.uniformMatrix4fv(s.projectionMatrix,!1,e.activeCamera.getProjectionMatrix()),n.uniform3fv(s.eyePositionHigh,e.activeCamera.eyeHigh),n.uniform3fv(s.eyePositionLow,e.activeCamera.eyeLow),n.uniform1f(s.resolution,e.activeCamera._tanViewAngle_hradOneByHeight),n.bindBuffer(n.ARRAY_BUFFER,this._startPositionHighBuffer),n.vertexAttribPointer(r.a_startPosHigh,this._startPositionHighBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._startPositionLowBuffer),n.vertexAttribPointer(r.a_startPosLow,this._startPositionLowBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._endPositionHighBuffer),n.vertexAttribPointer(r.a_endPosHigh,this._endPositionHighBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._endPositionLowBuffer),n.vertexAttribPointer(r.a_endPosLow,this._endPositionLowBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._rgbaBuffer),n.vertexAttribPointer(r.a_rgba,this._rgbaBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._thicknessBuffer),n.vertexAttribPointer(r.a_thickness,this._thicknessBuffer.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this._vertexBuffer),n.vertexAttribPointer(r.a_vertices,this._vertexBuffer.itemSize,n.FLOAT,!1,0,0),n.drawArrays(n.TRIANGLES,0,this._vertexBuffer.numItems),n.enable(n.CULL_FACE)}_pickingPASS(){}draw(){this._rays.length&&(this.update(),this._displayPASS())}drawPicking(){this._rays.length&&this.pickingEnabled&&this._pickingPASS()}reindexRaysArray(e){let t=this._rays;for(let i=e;i<t.length;i++)t[i]._handlerIndex=i}_removeRay(e){let t=e._handlerIndex;this._rays.splice(t,1);let i=t*24;this._rgbaArr=Ee(this._rgbaArr,i,24),i=t*18,this._startPositionHighArr=Ee(this._startPositionHighArr,i,18),this._startPositionLowArr=Ee(this._startPositionLowArr,i,18),this._endPositionHighArr=Ee(this._endPositionHighArr,i,18),this._endPositionLowArr=Ee(this._endPositionLowArr,i,18),this._pickingColorArr=Ee(this._pickingColorArr,i,18),i=t*12,this._vertexArr=Ee(this._vertexArr,i,12),i=t*6,this._thicknessArr=Ee(this._thicknessArr,i,6),this.reindexRaysArray(t),this.refresh(),e._handlerIndex=-1,e._handler=null}remove(e){e._handler&&this.__id===e._handler.__id&&this._removeRay(e)}setStartPositionArr(e,t,i){let r=e*18,s=this._startPositionHighArr,n=t.x,a=t.y,o=t.z;s[r]=n,s[r+1]=a,s[r+2]=o,s[r+3]=n,s[r+4]=a,s[r+5]=o,s[r+6]=n,s[r+7]=a,s[r+8]=o,s[r+9]=n,s[r+10]=a,s[r+11]=o,s[r+12]=n,s[r+13]=a,s[r+14]=o,s[r+15]=n,s[r+16]=a,s[r+17]=o,s=this._startPositionLowArr,n=i.x,a=i.y,o=i.z,s[r]=n,s[r+1]=a,s[r+2]=o,s[r+3]=n,s[r+4]=a,s[r+5]=o,s[r+6]=n,s[r+7]=a,s[r+8]=o,s[r+9]=n,s[r+10]=a,s[r+11]=o,s[r+12]=n,s[r+13]=a,s[r+14]=o,s[r+15]=n,s[r+16]=a,s[r+17]=o,this._changedBuffers[es]=!0}setEndPositionArr(e,t,i){let r=e*18,s=this._endPositionHighArr,n=t.x,a=t.y,o=t.z;s[r]=n,s[r+1]=a,s[r+2]=o,s[r+3]=n,s[r+4]=a,s[r+5]=o,s[r+6]=n,s[r+7]=a,s[r+8]=o,s[r+9]=n,s[r+10]=a,s[r+11]=o,s[r+12]=n,s[r+13]=a,s[r+14]=o,s[r+15]=n,s[r+16]=a,s[r+17]=o,s=this._endPositionLowArr,n=i.x,a=i.y,o=i.z,s[r]=n,s[r+1]=a,s[r+2]=o,s[r+3]=n,s[r+4]=a,s[r+5]=o,s[r+6]=n,s[r+7]=a,s[r+8]=o,s[r+9]=n,s[r+10]=a,s[r+11]=o,s[r+12]=n,s[r+13]=a,s[r+14]=o,s[r+15]=n,s[r+16]=a,s[r+17]=o,this._changedBuffers[ts]=!0}setPickingColorArr(e,t){let i=e*18,r=this._pickingColorArr,s=t.x/255,n=t.y/255,a=t.z/255;r[i]=s,r[i+1]=n,r[i+2]=a,r[i+3]=s,r[i+4]=n,r[i+5]=a,r[i+6]=s,r[i+7]=n,r[i+8]=a,r[i+9]=s,r[i+10]=n,r[i+11]=a,r[i+12]=s,r[i+13]=n,r[i+14]=a,r[i+15]=s,r[i+16]=n,r[i+17]=a,this._changedBuffers[Jr]=!0}setRgbaArr(e,t,i){let r=e*24,s=this._rgbaArr,n=t.x,a=t.y,o=t.z,l=t.w,c=i.x,d=i.y,f=i.z,_=i.w;s[r]=c,s[r+1]=d,s[r+2]=f,s[r+3]=_,s[r+4]=n,s[r+5]=a,s[r+6]=o,s[r+7]=l,s[r+8]=n,s[r+9]=a,s[r+10]=o,s[r+11]=l,s[r+12]=n,s[r+13]=a,s[r+14]=o,s[r+15]=l,s[r+16]=c,s[r+17]=d,s[r+18]=f,s[r+19]=_,s[r+20]=c,s[r+21]=d,s[r+22]=f,s[r+23]=_,this._changedBuffers[is]=!0}setThicknessArr(e,t){let i=e*6,r=this._thicknessArr;r[i]=t,r[i+1]=t,r[i+2]=t,r[i+3]=t,r[i+4]=t,r[i+5]=t,this._changedBuffers[rs]=!0}setVisibility(e,t){let i;t?i=[-.5,1,-.5,0,.5,0,.5,0,.5,1,-.5,1]:i=[0,0,0,0,0,0,0,0,0,0,0,0],this.setVertexArr(e,i)}setVertexArr(e,t){let i=e*12,r=this._vertexArr;r[i]=t[0],r[i+1]=t[1],r[i+2]=t[2],r[i+3]=t[3],r[i+4]=t[4],r[i+5]=t[5],r[i+6]=t[6],r[i+7]=t[7],r[i+8]=t[8],r[i+9]=t[9],r[i+10]=t[10],r[i+11]=t[11],this._changedBuffers[ss]=!0}createStartPositionBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._startPositionHighBuffer),this._startPositionHighArr=X(this._startPositionHighArr),this._startPositionHighBuffer=e.createArrayBuffer(this._startPositionHighArr,3,this._startPositionHighArr.length/3,e.gl.DYNAMIC_DRAW),e.gl.deleteBuffer(this._startPositionLowBuffer),this._startPositionLowArr=X(this._startPositionLowArr),this._startPositionLowBuffer=e.createArrayBuffer(this._startPositionLowArr,3,this._startPositionLowArr.length/3,e.gl.DYNAMIC_DRAW)}createEndPositionBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._endPositionHighBuffer),this._endPositionHighArr=X(this._endPositionHighArr),this._endPositionHighBuffer=e.createArrayBuffer(this._endPositionHighArr,3,this._endPositionHighArr.length/3,e.gl.DYNAMIC_DRAW),e.gl.deleteBuffer(this._endPositionLowBuffer),this._endPositionLowArr=X(this._endPositionLowArr),this._endPositionLowBuffer=e.createArrayBuffer(this._endPositionLowArr,3,this._endPositionLowArr.length/3,e.gl.DYNAMIC_DRAW)}createRgbaBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._rgbaBuffer),this._rgbaArr=X(this._rgbaArr),this._rgbaBuffer=e.createArrayBuffer(this._rgbaArr,4,this._rgbaArr.length/4)}createThicknessBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._thicknessBuffer),this._thicknessArr=X(this._thicknessArr),this._thicknessBuffer=e.createArrayBuffer(this._thicknessArr,1,this._thicknessArr.length,e.gl.DYNAMIC_DRAW)}createVertexBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._vertexBuffer),this._vertexArr=X(this._vertexArr),this._vertexBuffer=e.createArrayBuffer(this._vertexArr,2,this._vertexArr.length/2,e.gl.DYNAMIC_DRAW)}createPickingColorBuffer(){let e=this._renderer.handler;e.gl.deleteBuffer(this._pickingColorBuffer),this._pickingColorArr=X(this._pickingColorArr),this._pickingColorBuffer=e.createArrayBuffer(this._pickingColorArr,3,this._pickingColorArr.length/3)}}Si.__counter__=0;class Ri{constructor(e){this.__id=Ri.__counter__++,this.pickingEnabled=!0,this._entityCollection=e,this._renderer=null,this._strips=[]}_initProgram(){this._renderer&&this._renderer.handler&&!this._renderer.handler.programs.strip&&this._renderer.handler.addProgram(new G("strip",{uniforms:{projectionMatrix:{type:"mat4"},viewMatrix:{type:"mat4"},eyePositionHigh:"vec3",eyePositionLow:"vec3",uColor:{type:"vec4"},uOpacity:{type:"float"}},attributes:{aVertexPositionHigh:{type:"vec3"},aVertexPositionLow:{type:"vec3"}},vertexShader:`attribute vec3 aVertexPositionHigh;
                        attribute vec3 aVertexPositionLow;
                        uniform mat4 projectionMatrix;
                        uniform mat4 viewMatrix;
                        uniform vec3 eyePositionHigh;
                        uniform vec3 eyePositionLow;
                        void main(void) {

                            vec3 highDiff = aVertexPositionHigh - eyePositionHigh;
                            vec3 lowDiff = aVertexPositionLow - eyePositionLow;

                            mat4 viewMatrixRTE = viewMatrix;
                            viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                            gl_Position = projectionMatrix * viewMatrixRTE * vec4(highDiff * step(1.0, length(highDiff)) + lowDiff, 1.0);
                        }`,fragmentShader:`precision highp float;
                        uniform vec4 uColor;
                        uniform float uOpacity;
                        void main(void) {
                            gl_FragColor = vec4(uColor.rgb, uColor.a * uOpacity);
                        }`}))}setRenderNode(e){this._renderer=e.renderer,this._initProgram();for(let t=0;t<this._strips.length;t++)this._strips[t].setRenderNode(e)}add(e){e._handlerIndex===-1&&(e._handler=this,e._handlerIndex=this._strips.length,this._strips.push(e),this._entityCollection&&this._entityCollection.renderNode&&e.setRenderNode(this._entityCollection.renderNode))}remove(e){let t=e._handlerIndex;t!==-1&&(e._deleteBuffers(),e._handlerIndex=-1,e._handler=null,this._strips.splice(t,1),this.reindexStripArray(t))}reindexStripArray(e){let t=this._strips;for(let i=e;i<t.length;i++)t[i]._handlerIndex=i}draw(){let e=this._strips.length;for(;e--;)this._strips[e].draw()}drawPicking(){if(this.pickingEnabled){let e=this._strips.length;for(;e--;)this._strips[e].drawPicking()}}clear(){let e=this._strips.length;for(;e--;)this._strips[e]._deleteBuffers(),this._strips[e]._handler=null,this._strips[e]._handlerIndex=-1;this._strips.length=0,this._strips=[]}}Ri.__counter__=0;class yt{constructor(e={}){this.__id=yt.__counter__++,this._renderNodeIndex=-1,this.renderNode=null,this._visibility=e.visibility==null?!0:e.visibility,this.polygonOffsetUnits=e.polygonOffsetUnits!=null?e.polygonOffsetUnits:0,this.billboardHandler=new Ka(this),this.labelHandler=new _o(this,e.labelMaxLetters),this.polylineHandler=new Bi(this),this.rayHandler=new Si(this),this.pointCloudHandler=new Li(this),this.stripHandler=new Ri(this),this.geoObjectHandler=new Pi(this),e.pickingEnabled!=null&&this.setPickingEnabled(e.pickingEnabled),this._entities=[],this.scaleByDistance=e.scaleByDistance||[mt,mt,mt];let t=new Float32Array([1,1,1]);e.pickingScale!==void 0&&(e.pickingScale instanceof Array?(t[0]=e.pickingScale[0]||t[0],t[1]=e.pickingScale[1]||t[1],t[2]=e.pickingScale[2]||t[2]):typeof e.pickingScale=="number"&&(t[0]=e.pickingScale,t[1]=e.pickingScale,t[2]=e.pickingScale)),this.pickingScale=t,this._opacity=e.opacity==null?1:e.opacity,this._fadingOpacity=this._opacity,this.events=this.rendererEvents=Ke(xo,this),this._useLighting=e.useLighting!=null?e.useLighting?1:0:1,e.entities&&this.addEntities(e.entities)}isEmpty(){return this._entities.length==0}get id(){return this.__id}get useLighting(){return!!this._useLighting}set useLighting(e){this._useLighting=Number(e)}isEqual(e){return this.__id===e.__id}setVisibility(e){this._visibility=e,this._fadingOpacity=this._opacity*(e?1:0),this.events.dispatch(this.events.visibilitychange,this)}getVisibility(){return this._visibility}setOpacity(e){this._opacity=e}setPickingEnabled(e){this.billboardHandler.pickingEnabled=e,this.labelHandler.pickingEnabled=e,this.polylineHandler.pickingEnabled=e,this.rayHandler.pickingEnabled=e,this.pointCloudHandler.pickingEnabled=e,this.stripHandler.pickingEnabled=e,this.geoObjectHandler.pickingEnabled=e}getOpacity(){return this._opacity}setScaleByDistance(e,t,i){this.scaleByDistance[0]=e,this.scaleByDistance[1]=t,this.scaleByDistance[2]=i||mt}appendChildEntity(e){this._addRecursively(e)}_addRecursively(e){e.billboard&&this.billboardHandler.add(e.billboard),e.label&&this.labelHandler.add(e.label),e.polyline&&this.polylineHandler.add(e.polyline),e.ray&&this.rayHandler.add(e.ray),e.pointCloud&&this.pointCloudHandler.add(e.pointCloud),e.strip&&this.stripHandler.add(e.strip),e.geoObject&&this.geoObjectHandler.add(e.geoObject),this.events.dispatch(this.events.entityadd,e);let t=this.renderNode;for(let i=0;i<e.childrenNodes.length;i++)e.childrenNodes[i]._entityCollection=this,e.childrenNodes[i]._entityCollectionIndex=e._entityCollectionIndex,e.childrenNodes[i]._independentPicking?t&&t.renderer&&t.renderer.assignPickingColor(e.childrenNodes[i]):e.childrenNodes[i]._pickingColor=e._pickingColor,this._addRecursively(e.childrenNodes[i])}add(e){if(!e._entityCollection){e._entityCollection=this,e._entityCollectionIndex=this._entities.length,this._entities.push(e);let t=this.renderNode;t&&(t.renderer&&t.renderer.assignPickingColor(e),t.ellipsoid&&e._cartesian.isZero()&&e.setCartesian3v(t.ellipsoid.lonLatToCartesian(e._lonLat))),this._addRecursively(e),e.setPickingColor()}return this}addEntities(e){for(let t=0,i=e.length;t<i;t++)this.add(e[t]);return this}belongs(e){return e._entityCollection&&this._renderNodeIndex===e._entityCollection._renderNodeIndex}_removeRecursively(e){e._entityCollection=null,e._entityCollectionIndex=-1,e.billboard&&this.billboardHandler.remove(e.billboard),e.label&&this.labelHandler.remove(e.label),e.polyline&&this.polylineHandler.remove(e.polyline),e.ray&&this.rayHandler.remove(e.ray),e.pointCloud&&this.pointCloudHandler.remove(e.pointCloud),e.strip&&this.stripHandler.remove(e.strip),e.geoObject&&this.geoObjectHandler.remove(e.geoObject);for(let t=0;t<e.childrenNodes.length;t++)this._removeRecursively(e.childrenNodes[t])}removeEntity(e){this._entities.splice(e._entityCollectionIndex,1),this.reindexEntitiesArray(e._entityCollectionIndex),this.renderNode&&this.renderNode.renderer&&(this.renderNode.renderer.clearPickingColor(e),e._pickingColor.clear()),this.belongs(e)&&this._removeRecursively(e),this.events.dispatch(this.events.entityremove,e)}_removeEntitySilent(e){this._entities.splice(e._entityCollectionIndex,1),this.reindexEntitiesArray(e._entityCollectionIndex),this.renderNode&&this.renderNode.renderer&&(this.renderNode.renderer.clearPickingColor(e),e._pickingColor.clear()),this.belongs(e)&&this._removeRecursively(e)}createPickingColors(){if(!(this.renderNode&&this.renderNode.renderer))return;let e=this._entities;for(let t=0;t<e.length;t++)e[t].parent||(this.renderNode.renderer.assignPickingColor(e[t]),e[t].setPickingColor())}reindexEntitiesArray(e){let t=this._entities;for(let i=e;i<t.length;i++)t[i]._entityCollectionIndex=i}addTo(e,t=!1){return this.renderNode||(this.renderNode=e,t||(this._renderNodeIndex=e.entityCollections.length,e.entityCollections.push(this)),e.ellipsoid&&this._updateGeodeticCoordinates(e.ellipsoid),this.bindRenderNode(e),this.events.dispatch(this.events.add,this)),this}bindRenderNode(e){e.renderer&&e.renderer.isInitialized()&&(this.billboardHandler.setRenderer(e.renderer),this.labelHandler.setRenderer(e.renderer),this.rayHandler.setRenderer(e.renderer),this.geoObjectHandler.setRenderNode(e),this.polylineHandler.setRenderNode(e),this.pointCloudHandler.setRenderNode(e),this.stripHandler.setRenderNode(e),this.updateBillboardsTextureAtlas(),this.updateLabelsFontAtlas(),this.createPickingColors())}_updateGeodeticCoordinates(e){let t=this._entities,i=t.length;for(;i--;){let r=t[i];r._lonLat&&r.setCartesian3v(e.lonLatToCartesian(r._lonLat))}}updateBillboardsTextureAtlas(){let e=this.billboardHandler.billboards;for(let t=0;t<e.length;t++)e[t].setSrc(e[t].getSrc())}updateLabelsFontAtlas(){this.renderNode&&this.labelHandler.updateFonts()}remove(){if(this.renderNode){if(this._renderNodeIndex!==-1){this.renderNode.entityCollections.splice(this._renderNodeIndex,1);for(let e=this._renderNodeIndex;e<this.renderNode.entityCollections.length;e++)this.renderNode.entityCollections[e]._renderNodeIndex=e}this.renderNode=null,this._renderNodeIndex=-1,this.events.dispatch(this.events.remove,this)}}getEntities(){return[].concat(this._entities)}each(e){let t=this._entities.length;for(;t--;){let i=this._entities[t];i&&e(i)}}clear(){this.billboardHandler.clear(),this.labelHandler.clear(),this.polylineHandler.clear(),this.rayHandler.clear(),this.pointCloudHandler.clear(),this.stripHandler.clear(),this.geoObjectHandler.clear();let e=this._entities.length;for(;e--;){let t=this._entities[e];this.renderNode&&this.renderNode.renderer&&(this.renderNode.renderer.clearPickingColor(t),t._pickingColor.clear()),this._clearEntity(t)}this._entities.length=0,this._entities=[]}_clearEntity(e){e._entityCollection=null,e._entityCollectionIndex=-1;for(let t=0;t<e.childrenNodes.length;t++)this._clearEntity(e.childrenNodes[t])}}yt.__counter__=0;const xo=["draw","drawend","add","remove","entityadd","entityremove","visibilitychange","mousemove","mouseenter","mouseleave","lclick","rclick","mclick","ldblclick","rdblclick","mdblclick","lup","rup","mup","ldown","rdown","mdown","lhold","rhold","mhold","mousewheel","touchmove","touchstart","touchend","doubletouch","touchleave","touchenter"];function yo(h,e=!1){let t=1-Fr(128,h[0])*2,i=2*er(h[0],128)+Fr(128,h[1])-127,r=er(h[1],128)*65536+h[2]*256+(e&&h[3]||0)+8388608;return t*Yn(i)*(r*11920928955078125e-23)}function Lt(h,e){if(h>=0){let t=Math.floor(h/65536)*65536;e[0]=Math.fround(t),e[1]=Math.fround(h-t)}else{let t=Math.floor(-h/65536)*65536;e[0]=Math.fround(-t),e[1]=Math.fround(h+t)}return e}function ns(h,e){if(h>=0){let t=Math.floor(h/65536)*65536;e.x=Math.fround(t),e.y=Math.fround(h-t)}else{let t=Math.floor(-h/65536)*65536;e.x=Math.fround(-t),e.y=Math.fround(h+t)}return e}function as(h,e,t){t=t||2;var i=e&&e.length,r=i?e[0]*t:h.length,s=mn(h,0,r,t,!0),n=[];if(!s)return n;var a,o,l,c,d,f,_;if(i&&(s=Eo(h,e,s,t)),h.length>80*t){a=l=h[0],o=c=h[1];for(let g=t;g<r;g+=t)d=h[g],f=h[g+1],d<a&&(a=d),f<o&&(o=f),d>l&&(l=d),f>c&&(c=f);_=Math.max(l-a,c-o)}return $t(s,n,t,a,o,_),n}function mn(h,e,t,i,r){var s,n;if(r===Fo(h,e,t,i)>0)for(s=e;s<t;s+=i)n=os(s,h[s],h[s+1],n);else for(s=t-i;s>=e;s-=i)n=os(s,h[s],h[s+1],n);return n&&pt(n,n.next)&&(Qt(n),n=n.next),n}function Zt(h,e){if(!h)return h;e||(e=h);var t=h,i;do if(i=!1,!t.steiner&&(pt(t,t.next)||Be(t.prev,t,t.next)===0)){if(Qt(t),t=e=t.prev,t===t.next)return null;i=!0}else t=t.next;while(i||t!==e);return e}function $t(h,e,t,i,r,s,n){if(h){!n&&s&&Bo(h,i,r,s);for(var a=h,o,l;h.prev!==h.next;){if(o=h.prev,l=h.next,s?wo(h,i,r,s):bo(h)){e.push(o.i/t),e.push(h.i/t),e.push(l.i/t),Qt(h),h=l.next,a=l.next;continue}if(h=l,h===a){n?n===1?(h=To(h,e,t),$t(h,e,t,i,r,s,2)):n===2&&Ao(h,e,t,i,r,s):$t(Zt(h),e,t,i,r,s,1);break}}}}function bo(h){var e=h.prev,t=h,i=h.next;if(Be(e,t,i)>=0)return!1;for(var r=h.next.next;r!==h.prev;){if(xi(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&Be(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function wo(h,e,t,i){var r=h.prev,s=h,n=h.next;if(Be(r,s,n)>=0)return!1;for(var a=r.x<s.x?r.x<n.x?r.x:n.x:s.x<n.x?s.x:n.x,o=r.y<s.y?r.y<n.y?r.y:n.y:s.y<n.y?s.y:n.y,l=r.x>s.x?r.x>n.x?r.x:n.x:s.x>n.x?s.x:n.x,c=r.y>s.y?r.y>n.y?r.y:n.y:s.y>n.y?s.y:n.y,d=cr(a,o,e,t,i),f=cr(l,c,e,t,i),_=h.nextZ;_&&_.z<=f;){if(_!==h.prev&&_!==h.next&&xi(r.x,r.y,s.x,s.y,n.x,n.y,_.x,_.y)&&Be(_.prev,_,_.next)>=0)return!1;_=_.nextZ}for(_=h.prevZ;_&&_.z>=d;){if(_!==h.prev&&_!==h.next&&xi(r.x,r.y,s.x,s.y,n.x,n.y,_.x,_.y)&&Be(_.prev,_,_.next)>=0)return!1;_=_.prevZ}return!0}function To(h,e,t){var i=h;do{var r=i.prev,s=i.next.next;!pt(r,s)&&pn(r,i,i.next,s)&&Kt(r,s)&&Kt(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),Qt(i),Qt(i.next),i=h=s),i=i.next}while(i!==h);return i}function Ao(h,e,t,i,r,s){var n=h;do{for(var a=n.next.next;a!==n.prev;){if(n.i!==a.i&&Mo(n,a)){var o=vn(n,a);n=Zt(n,n.next),o=Zt(o,o.next),$t(n,e,t,i,r,s),$t(o,e,t,i,r,s);return}a=a.next}n=n.next}while(n!==h)}function Eo(h,e,t,i){var r=[],s,n,a,o,l;for(s=0,n=e.length;s<n;s++)a=e[s]*i,o=s<n-1?e[s+1]*i:h.length,l=mn(h,a,o,i,!1),l===l.next&&(l.steiner=!0),r.push(Ro(l));for(r.sort(Co),s=0;s<r.length;s++)Po(r[s],t),t=Zt(t,t.next);return t}function Co(h,e){return h.x-e.x}function Po(h,e){if(e=Lo(h,e),e){var t=vn(e,h);Zt(t,t.next)}}function Lo(h,e){var t=e,i=h.x,r=h.y,s=-1/0,n;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){var a=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=i&&a>s){if(s=a,a===i){if(r===t.y)return t;if(r===t.next.y)return t.next}n=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!n)return null;if(i===s)return n.prev;var o=n,l=n.x,c=n.y,d=1/0,f;for(t=n.next;t!==o;)i>=t.x&&t.x>=l&&i!==t.x&&xi(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)&&(f=Math.abs(r-t.y)/(i-t.x),(f<d||f===d&&t.x>n.x)&&Kt(t,h)&&(n=t,d=f)),t=t.next;return n}function Bo(h,e,t,i){var r=h;do r.z===null&&(r.z=cr(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==h);r.prevZ.nextZ=null,r.prevZ=null,So(r)}function So(h){var e,t,i,r,s,n,a,o,l=1;do{for(t=h,h=null,s=null,n=0;t;){for(n++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(o=l;a>0||o>0&&i;)a!==0&&(o===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,o--),s?s.nextZ=r:h=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(n>1);return h}function cr(h,e,t,i,r){return h=32767*(h-t)/r,e=32767*(e-i)/r,h=(h|h<<8)&16711935,h=(h|h<<4)&252645135,h=(h|h<<2)&858993459,h=(h|h<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,h|e<<1}function Ro(h){var e=h,t=h;do e.x<t.x&&(t=e),e=e.next;while(e!==h);return t}function xi(h,e,t,i,r,s,n,a){return(r-n)*(e-a)-(h-n)*(s-a)>=0&&(h-n)*(i-a)-(t-n)*(e-a)>=0&&(t-n)*(s-a)-(r-n)*(i-a)>=0}function Mo(h,e){return h.next.i!==e.i&&h.prev.i!==e.i&&!Io(h,e)&&Kt(h,e)&&Kt(e,h)&&zo(h,e)}function Be(h,e,t){return(e.y-h.y)*(t.x-e.x)-(e.x-h.x)*(t.y-e.y)}function pt(h,e){return h.x===e.x&&h.y===e.y}function pn(h,e,t,i){return pt(h,e)&&pt(t,i)||pt(h,i)&&pt(t,e)?!0:Be(h,e,t)>0!=Be(h,e,i)>0&&Be(t,i,h)>0!=Be(t,i,e)>0}function Io(h,e){var t=h;do{if(t.i!==h.i&&t.next.i!==h.i&&t.i!==e.i&&t.next.i!==e.i&&pn(t,t.next,h,e))return!0;t=t.next}while(t!==h);return!1}function Kt(h,e){return Be(h.prev,h,h.next)<0?Be(h,e,h.next)>=0&&Be(h,h.prev,e)>=0:Be(h,e,h.prev)<0||Be(h,h.next,e)<0}function zo(h,e){var t=h,i=!1,r=(h.x+e.x)/2,s=(h.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==h);return i}function vn(h,e){var t=new dr(h.i,h.x,h.y),i=new dr(e.i,e.x,e.y),r=h.next,s=e.prev;return h.next=e,e.prev=h,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function os(h,e,t,i){var r=new dr(h,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Qt(h){h.next.prev=h.prev,h.prev.next=h.next,h.prevZ&&(h.prevZ.nextZ=h.nextZ),h.nextZ&&(h.nextZ.prevZ=h.prevZ)}function dr(h,e,t){this.i=h,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fo(h,e,t,i){var r=0;for(let s=e,n=t-i;s<t;s+=i)r+=(h[n]-h[s])*(h[s+1]+h[n+1]),n=s;return r}function ls(h){var e=h[0][0].length,t={vertices:[],holes:[],dimensions:e},i=0;for(let r=0;r<h.length;r++){for(let s=0;s<h[r].length;s++)for(let n=0;n<e;n++)t.vertices.push(h[r][s][n]);r>0&&(i+=h[r-1].length,t.holes.push(i))}return t}const hs=0,cs=1,ds=2,fs=3,us=4,ko=5,_s=6,gs=7,No=8,ms=9,Do=10,Ho=11;function Vi(h,e,t){let i=h[0],r=h[1];if(i>=0){let s=Math.floor(i/65536)*65536;e.x=Math.fround(s),t.x=Math.fround(i-s)}else{let s=Math.floor(-i/65536)*65536;e.x=Math.fround(-s),t.x=Math.fround(i+s)}if(r>=0){let s=Math.floor(r/65536)*65536;e.y=Math.fround(s),t.y=Math.fround(r-s)}else{let s=Math.floor(-r/65536)*65536;e.y=Math.fround(-s),t.y=Math.fround(r+s)}}let H=new V,O=new V,Et=new V;class rt{constructor(e){this.__id=rt.__counter__++,this._layer=e,this._handler=null,this._geometries=[],this._updatedGeometryArr=[],this._updatedGeometry={},this._removeGeometryExtentArr=[],this._removeGeometryExtents={},this._polyVerticesHighMerc=[],this._polyVerticesLowMerc=[],this._polyColors=[],this._polyPickingColors=[],this._polyIndexes=[],this._lineVerticesHighMerc=[],this._lineVerticesLowMerc=[],this._lineOrders=[],this._lineIndexes=[],this._lineColors=[],this._linePickingColors=[],this._lineThickness=[],this._lineStrokes=[],this._lineStrokeColors=[],this._polyVerticesHighBufferMerc=null,this._polyVerticesLowBufferMerc=null,this._polyColorsBuffer=null,this._polyPickingColorsBuffer=null,this._polyIndexesBuffer=null,this._lineVerticesHighBufferMerc=null,this._lineVerticesLowBufferMerc=null,this._lineColorsBuffer=null,this._linePickingColorsBuffer=null,this._lineThicknessBuffer=null,this._lineStrokesBuffer=null,this._lineStrokeColorsBuffer=null,this._lineOrdersBuffer=null,this._lineIndexesBuffer=null,this._buffersUpdateCallbacks=[],this._buffersUpdateCallbacks[hs]=this.createPolyVerticesBuffer,this._buffersUpdateCallbacks[cs]=this.createPolyIndexesBuffer,this._buffersUpdateCallbacks[ds]=this.createPolyColorsBuffer,this._buffersUpdateCallbacks[fs]=this.createLineVerticesBuffer,this._buffersUpdateCallbacks[us]=this.createLineIndexesBuffer,this._buffersUpdateCallbacks[ko]=this.createLineOrdersBuffer,this._buffersUpdateCallbacks[_s]=this.createLineColorsBuffer,this._buffersUpdateCallbacks[gs]=this.createLineThicknessBuffer,this._buffersUpdateCallbacks[No]=this.createLineStrokesBuffer,this._buffersUpdateCallbacks[ms]=this.createLineStrokeColorsBuffer,this._buffersUpdateCallbacks[Do]=this.createPolyPickingColorsBuffer,this._buffersUpdateCallbacks[Ho]=this.createLinePickingColorsBuffer,this._changedBuffers=new Array(this._buffersUpdateCallbacks.length)}static appendLineData(e,t,i,r,s,n,a,o,l,c,d,f,_,g,v,u,p,b){var w=0;d.length>0?(w=d[d.length-5]+9,d.push(w,w)):d.push(0,0);var y=s,x=[i.x,i.y,i.z,i.w],T=a,A=[n.x,n.y,n.z,n.w],E=[r.x,r.y,r.z,1];for(let B=0;B<e.length;B++){var C=e[B];if(C.length===0)continue;let F=w,k;if(t)k=C[C.length-1];else{let L=C[0],I=C[1];I||(I=L),k=[L[0]+L[0]-I[0],L[1]+L[1]-I[1]]}Vi(k,H,O),o.push(H.x,H.y,H.x,H.y,H.x,H.y,H.x,H.y),l.push(O.x,O.y,O.x,O.y,O.x,O.y,O.x,O.y),p.push(H.x,H.y,H.x,H.y,H.x,H.y,H.x,H.y),b.push(O.x,O.y,O.x,O.y,O.x,O.y,O.x,O.y),c.push(1,-1,2,-2),g.push(y,y,y,y),u.push(T,T,T,T),f.push(x[0],x[1],x[2],x[3],x[0],x[1],x[2],x[3],x[0],x[1],x[2],x[3],x[0],x[1],x[2],x[3]),v.push(A[0],A[1],A[2],A[3],A[0],A[1],A[2],A[3],A[0],A[1],A[2],A[3],A[0],A[1],A[2],A[3]),_.push(E[0],E[1],E[2],E[3],E[0],E[1],E[2],E[3],E[0],E[1],E[2],E[3],E[0],E[1],E[2],E[3]);for(let L=0;L<C.length;L++){let I=C[L];Vi(I,H,O),o.push(H.x,H.y,H.x,H.y,H.x,H.y,H.x,H.y),l.push(O.x,O.y,O.x,O.y,O.x,O.y,O.x,O.y),p.push(H.x,H.y,H.x,H.y,H.x,H.y,H.x,H.y),b.push(O.x,O.y,O.x,O.y,O.x,O.y,O.x,O.y),c.push(1,-1,2,-2),g.push(y,y,y,y),u.push(T,T,T,T),f.push(x[0],x[1],x[2],x[3],x[0],x[1],x[2],x[3],x[0],x[1],x[2],x[3],x[0],x[1],x[2],x[3]),v.push(A[0],A[1],A[2],A[3],A[0],A[1],A[2],A[3],A[0],A[1],A[2],A[3],A[0],A[1],A[2],A[3]),_.push(E[0],E[1],E[2],E[3],E[0],E[1],E[2],E[3],E[0],E[1],E[2],E[3],E[0],E[1],E[2],E[3]),d.push(w++,w++,w++,w++)}let M;if(t)M=C[0],d.push(F,F+1,F+1,F+1);else{let L=C[C.length-1],I=C[C.length-2];I||(I=L),M=[L[0]+L[0]-I[0],L[1]+L[1]-I[1]],d.push(w-1,w-1,w-1,w-1)}Vi(M,H,O),o.push(H.x,H.y,H.x,H.y,H.x,H.y,H.x,H.y),l.push(O.x,O.y,O.x,O.y,O.x,O.y,O.x,O.y),p.push(H.x,H.y,H.x,H.y,H.x,H.y,H.x,H.y),b.push(O.x,O.y,O.x,O.y,O.x,O.y,O.x,O.y),c.push(1,-1,2,-2),g.push(y,y,y,y),u.push(T,T,T,T),f.push(x[0],x[1],x[2],x[3],x[0],x[1],x[2],x[3],x[0],x[1],x[2],x[3],x[0],x[1],x[2],x[3]),v.push(A[0],A[1],A[2],A[3],A[0],A[1],A[2],A[3],A[0],A[1],A[2],A[3],A[0],A[1],A[2],A[3]),_.push(E[0],E[1],E[2],E[3],E[0],E[1],E[2],E[3],E[0],E[1],E[2],E[3],E[0],E[1],E[2],E[3]),B<e.length-1&&(w+=8,d.push(w,w))}}assignHandler(e){this._handler=e,this.refresh(),e.isInitialized()&&this.update()}add(e){if(e._handlerIndex===-1){e._handler=this,e._handlerIndex=this._geometries.length,this._geometries.push(e);let t=e._entity._pickingColor.scaleTo(1/255);if(e._polyVerticesHighMerc=[],e._polyVerticesLowMerc=[],e._lineVerticesHighMerc=[],e._lineVerticesLowMerc=[],e._coordinates[0].length){if(e.type===ke.POLYGON){let i=e._coordinates,r=[];for(let c=0;c<i.length;c++){r[c]=[];for(let d=0;d<i[c].length;d++)r[c][d]=[ci(i[c][d][0]),di(i[c][d][1])]}let s=ls(r),n=as(s.vertices,s.holes,2);e._polyVerticesHandlerIndex=this._polyVerticesHighMerc.length,e._polyIndexesHandlerIndex=this._polyIndexes.length;for(let c=0;c<n.length;c++)this._polyIndexes.push(n[c]+e._polyVerticesHandlerIndex*.5);let a=e._style.fillColor,o=[],l=[];for(let c=0;c<s.vertices.length*.5;c++)this._polyColors.push(a.x,a.y,a.z,a.w),this._polyPickingColors.push(t.x,t.y,t.z,1);for(let c=0;c<s.vertices.length;c++)ns(s.vertices[c],Et),o[c]=Et.x,l[c]=Et.y;e._polyVerticesHighMerc=o,e._polyVerticesLowMerc=l,this._polyVerticesHighMerc.push.apply(this._polyVerticesHighMerc,o),this._polyVerticesLowMerc.push.apply(this._polyVerticesLowMerc,l),e._polyVerticesLength=s.vertices.length,e._polyIndexesLength=n.length,e._lineVerticesHandlerIndex=this._lineVerticesHighMerc.length,e._lineOrdersHandlerIndex=this._lineOrders.length,e._lineIndexesHandlerIndex=this._lineIndexes.length,e._lineColorsHandlerIndex=this._lineColors.length,e._lineThicknessHandlerIndex=this._lineThickness.length,rt.appendLineData(r,!0,e._style.lineColor,t,e._style.lineWidth,e._style.strokeColor,e._style.strokeWidth,this._lineVerticesHighMerc,this._lineVerticesLowMerc,this._lineOrders,this._lineIndexes,this._lineColors,this._linePickingColors,this._lineThickness,this._lineStrokeColors,this._lineStrokes,e._lineVerticesHighMerc,e._lineVerticesLowMerc),e._lineVerticesLength=this._lineVerticesHighMerc.length-e._lineVerticesHandlerIndex,e._lineOrdersLength=this._lineOrders.length-e._lineOrdersHandlerIndex,e._lineIndexesLength=this._lineIndexes.length-e._lineIndexesHandlerIndex,e._lineColorsLength=this._lineColors.length-e._lineColorsHandlerIndex,e._lineThicknessLength=this._lineThickness.length-e._lineThicknessHandlerIndex}else if(e.type===ke.MULTIPOLYGON){let i=e._coordinates,r=[],s=[];e._lineVerticesHandlerIndex=this._lineVerticesHighMerc.length,e._lineOrdersHandlerIndex=this._lineOrders.length,e._lineIndexesHandlerIndex=this._lineIndexes.length,e._lineColorsHandlerIndex=this._lineColors.length,e._lineThicknessHandlerIndex=this._lineThickness.length;for(let l=0;l<i.length;l++){let c=i[l],d=[];for(let g=0;g<c.length;g++){d[g]=[];for(let v=0;v<i[l][g].length;v++)d[g][v]=[ci(c[g][v][0]),di(c[g][v][1])]}let f=ls(d),_=as(f.vertices,f.holes,2);for(let g=0;g<_.length;g++)s.push(_[g]+r.length*.5);r.push.apply(r,f.vertices),rt.appendLineData(d,!0,e._style.lineColor,t,e._style.lineWidth,e._style.strokeColor,e._style.strokeWidth,this._lineVerticesHighMerc,this._lineVerticesLowMerc,this._lineOrders,this._lineIndexes,this._lineColors,this._linePickingColors,this._lineThickness,this._lineStrokeColors,this._lineStrokes,e._lineVerticesHighMerc,e._lineVerticesLowMerc)}e._polyVerticesHandlerIndex=this._polyVerticesHighMerc.length,e._polyIndexesHandlerIndex=this._polyIndexes.length;for(let l=0;l<s.length;l++)this._polyIndexes.push(s[l]+e._polyVerticesHandlerIndex*.5);let n=e._style.fillColor,a=[],o=[];for(let l=0;l<r.length*.5;l++)this._polyColors.push(n.x,n.y,n.z,n.w),this._polyPickingColors.push(t.x,t.y,t.z,1);for(let l=0;l<r.length;l++)ns(r[l],Et),a[l]=Et.x,o[l]=Et.y;e._polyVerticesHighMerc=a,e._polyVerticesLowMerc=o,this._polyVerticesHighMerc.push.apply(this._polyVerticesHighMerc,a),this._polyVerticesLowMerc.push.apply(this._polyVerticesLowMerc,o),e._polyVerticesLength=r.length,e._polyIndexesLength=s.length,e._lineVerticesLength=this._lineVerticesHighMerc.length-e._lineVerticesHandlerIndex,e._lineOrdersLength=this._lineOrders.length-e._lineOrdersHandlerIndex,e._lineIndexesLength=this._lineIndexes.length-e._lineIndexesHandlerIndex,e._lineColorsLength=this._lineColors.length-e._lineColorsHandlerIndex,e._lineThicknessLength=this._lineThickness.length-e._lineThicknessHandlerIndex}else if(e.type===ke.LINESTRING){let i=e._coordinates,r=new Array(i.length);for(let s=0;s<i.length;s++)r[s]=[ci(i[s][0]),di(i[s][1])];e._lineVerticesHandlerIndex=this._lineVerticesHighMerc.length,e._lineOrdersHandlerIndex=this._lineOrders.length,e._lineIndexesHandlerIndex=this._lineIndexes.length,e._lineColorsHandlerIndex=this._lineColors.length,e._lineThicknessHandlerIndex=this._lineThickness.length,rt.appendLineData([r],!1,e._style.lineColor,t,e._style.lineWidth,e._style.strokeColor,e._style.strokeWidth,this._lineVerticesHighMerc,this._lineVerticesLowMerc,this._lineOrders,this._lineIndexes,this._lineColors,this._linePickingColors,this._lineThickness,this._lineStrokeColors,this._lineStrokes,e._lineVerticesHighMerc,e._lineVerticesLowMerc),e._lineVerticesLength=this._lineVerticesHighMerc.length-e._lineVerticesHandlerIndex,e._lineOrdersLength=this._lineOrders.length-e._lineOrdersHandlerIndex,e._lineIndexesLength=this._lineIndexes.length-e._lineIndexesHandlerIndex,e._lineColorsLength=this._lineColors.length-e._lineColorsHandlerIndex,e._lineThicknessLength=this._lineThickness.length-e._lineThicknessHandlerIndex}else if(e.type===ke.MULTILINESTRING){let i=e._coordinates,r=[];for(let s=0;s<i.length;s++){r[s]=[];for(let n=0;n<i[s].length;n++)r[s][n]=[ci(i[s][n][0]),di(i[s][n][1])]}e._lineVerticesHandlerIndex=this._lineVerticesHighMerc.length,e._lineOrdersHandlerIndex=this._lineOrders.length,e._lineIndexesHandlerIndex=this._lineIndexes.length,e._lineColorsHandlerIndex=this._lineColors.length,e._lineThicknessHandlerIndex=this._lineThickness.length,rt.appendLineData(r,!1,e._style.lineColor,t,e._style.lineWidth,e._style.strokeColor,e._style.strokeWidth,this._lineVerticesHighMerc,this._lineVerticesLowMerc,this._lineOrders,this._lineIndexes,this._lineColors,this._linePickingColors,this._lineThickness,this._lineStrokeColors,this._lineStrokes,e._lineVerticesHighMerc,e._lineVerticesLowMerc),e._lineVerticesLength=this._lineVerticesHighMerc.length-e._lineVerticesHandlerIndex,e._lineOrdersLength=this._lineOrders.length-e._lineOrdersHandlerIndex,e._lineIndexesLength=this._lineIndexes.length-e._lineIndexesHandlerIndex,e._lineColorsLength=this._lineColors.length-e._lineColorsHandlerIndex,e._lineThicknessLength=this._lineThickness.length-e._lineThicknessHandlerIndex}}this.setGeometryVisibility(e),!this._updatedGeometry[e.__id]&&this._updatedGeometryArr.push(e),this._updatedGeometry[e.__id]=!0,this.refresh()}}remove(e){const t=e._handlerIndex;if(t!==-1){this._geometries.splice(t,1),this._polyVerticesHighMerc.splice(e._polyVerticesHandlerIndex,e._polyVerticesLength),this._polyVerticesLowMerc.splice(e._polyVerticesHandlerIndex,e._polyVerticesLength),this._polyColors.splice(e._polyVerticesHandlerIndex*2,e._polyVerticesLength*2),this._polyPickingColors.splice(e._polyVerticesHandlerIndex*2,e._polyVerticesLength*2),this._polyIndexes.splice(e._polyIndexesHandlerIndex,e._polyIndexesLength);let i=e._polyVerticesLength*.5;for(let s=e._polyIndexesHandlerIndex;s<this._polyIndexes.length;s++)this._polyIndexes[s]-=i;this._lineVerticesHighMerc.splice(e._lineVerticesHandlerIndex,e._lineVerticesLength),this._lineVerticesLowMerc.splice(e._lineVerticesHandlerIndex,e._lineVerticesLength),this._lineOrders.splice(e._lineOrdersHandlerIndex,e._lineOrdersLength),this._lineColors.splice(e._lineColorsHandlerIndex,e._lineColorsLength),this._linePickingColors.splice(e._lineColorsHandlerIndex,e._lineColorsLength),this._lineStrokeColors.splice(e._lineColorsHandlerIndex,e._lineColorsLength),this._lineThickness.splice(e._lineThicknessHandlerIndex,e._lineThicknessLength),this._lineStrokes.splice(e._lineThicknessHandlerIndex,e._lineThicknessLength),this._lineIndexes.splice(e._lineIndexesHandlerIndex,e._lineIndexesLength),i=e._lineVerticesLength*.5;for(let s=e._lineIndexesHandlerIndex;s<this._lineIndexes.length;s++)this._lineIndexes[s]-=i;let r=this._geometries;for(let s=t;s<r.length;s++){let n=r[s];n._handlerIndex=s,n._polyVerticesHandlerIndex-=e._polyVerticesLength,n._polyIndexesHandlerIndex-=e._polyIndexesLength,n._lineVerticesHandlerIndex-=e._lineVerticesLength,n._lineOrdersHandlerIndex-=e._lineOrdersLength,n._lineColorsHandlerIndex-=e._lineColorsLength,n._lineThicknessHandlerIndex-=e._lineThicknessLength,n._lineIndexesHandlerIndex-=e._lineIndexesLength}e._pickingReady=!1,e._handler=null,e._handlerIndex=-1,e._polyVerticesHighMerc=[],e._polyVerticesLowMerc=[],e._polyVerticesLength=-1,e._polyIndexesLength=-1,e._polyVerticesHandlerIndex=-1,e._polyIndexesHandlerIndex=-1,e._lineVerticesHighMerc=[],e._lineVerticesLowMerc=[],e._lineVerticesLength=-1,e._lineOrdersLength=-1,e._lineIndexesLength=-1,e._lineColorsLength=-1,e._lineThicknessLength=-1,e._lineVerticesHandlerIndex=-1,e._lineOrdersHandlerIndex=-1,e._lineIndexesHandlerIndex=-1,e._lineThicknessHandlerIndex=-1,e._lineColorsHandlerIndex=-1,!this._removeGeometryExtents[e.__id]&&this._removeGeometryExtentArr.push(e.getExtent()),this._removeGeometryExtents[e.__id]=!0,this.refresh()}}_refreshRecursevely(e,t){if(t.ready){let i=this._layer._id;for(let r=0;r<t.nodes.length;r++){let s=t.nodes[r];if(e.overlaps(s.segment.getExtentLonLat())){this._refreshRecursevely(e,s);let n=s.segment.materials[i];n&&n.isReady&&(n.segment.node.getState()!==Te?n.layer.clearMaterial(n):(n.pickingReady=n.pickingReady&&e._pickingReady,n.isReady=!1,n._updateTexture=n.texture,n._updatePickingMask=n.pickingMask),e._pickingReady=!0)}}}}_refreshRecursevelyExt(e,t){if(t.ready){let i=this._layer.__id;for(let r=0;r<t.nodes.length;r++){let s=t.nodes[r];if(e.overlaps(s.segment.getExtentLonLat())){this._refreshRecursevelyExt(e,s);let n=s.segment.materials[i];n&&n.isReady&&n.layer.clearMaterial(n)}}}}_refreshPlanetNode(e){let t,i=this._removeGeometryExtentArr;for(t=0;t<i.length;t++)this._refreshRecursevelyExt(i[t],e);let r=this._updatedGeometryArr;for(t=0;t<r.length;t++)this._refreshRecursevely(r[t],e)}_updatePlanet(){let e=this._layer._planet;if(e){let t=e.quadTreeStrategy.quadTreeList;for(let i=0;i<t.length;i++)this._refreshPlanetNode(t[i])}this._updatedGeometryArr.length=0,this._updatedGeometryArr=[],this._updatedGeometry={},this._removeGeometryExtentArr.length=0,this._removeGeometryExtentArr=[],this._removeGeometryExtents={}}refresh(){let e=this._changedBuffers.length;for(;e--;)this._changedBuffers[e]=!0}update(){if(this._handler){let e=!1,t=this._changedBuffers.length;for(;t--;)this._changedBuffers[t]&&(e=!0,this._buffersUpdateCallbacks[t].call(this),this._changedBuffers[t]=!1);e&&this._updatePlanet()}}setGeometryVisibility(e){let t=e.getVisibility()?1:0,i=this._polyVerticesHighMerc,r=this._polyVerticesLowMerc,s=e._polyVerticesLength,n=e._polyVerticesHandlerIndex;for(let a=0;a<s;a++)i[n+a]=e._polyVerticesHighMerc[a]*t,r[n+a]=e._polyVerticesLowMerc[a]*t;i=this._lineVerticesHighMerc,r=this._lineVerticesLowMerc,s=e._lineVerticesLength,n=e._lineVerticesHandlerIndex;for(let a=0;a<s;a++)i[n+a]=e._lineVerticesHighMerc[a]*t,r[n+a]=e._lineVerticesLowMerc[a]*t;this._changedBuffers[hs]=!0,this._changedBuffers[fs]=!0,!this._updatedGeometry[e.__id]&&this._updatedGeometryArr.push(e),this._updatedGeometry[e.__id]=!0}setPolyColorArr(e,t){let i=e._polyVerticesHandlerIndex*2,r=i+e._polyVerticesLength*2,s=this._polyColors;for(let n=i;n<r;n+=4)s[n]=t.x,s[n+1]=t.y,s[n+2]=t.z,s[n+3]=t.w;this._changedBuffers[ds]=!0,!this._updatedGeometry[e.__id]&&this._updatedGeometryArr.push(e),this._updatedGeometry[e.__id]=!0}setLineStrokeColorArr(e,t){let i=e._lineColorsHandlerIndex,r=i+e._lineColorsLength,s=this._lineStrokeColors;for(let n=i;n<r;n+=4)s[n]=t.x,s[n+1]=t.y,s[n+2]=t.z,s[n+3]=t.w;this._changedBuffers[ms]=!0,!this._updatedGeometry[e.__id]&&this._updatedGeometryArr.push(e),this._updatedGeometry[e.__id]=!0}setLineColorArr(e,t){let i=e._lineColorsHandlerIndex,r=i+e._lineColorsLength,s=this._lineColors;for(let n=i;n<r;n+=4)s[n]=t.x,s[n+1]=t.y,s[n+2]=t.z,s[n+3]=t.w;this._changedBuffers[_s]=!0,!this._updatedGeometry[e.__id]&&this._updatedGeometryArr.push(e),this._updatedGeometry[e.__id]=!0}setLineStrokeArr(e,t){}setLineThicknessArr(e,t){let i=e._lineThicknessHandlerIndex,r=i+e._lineThicknessLength,s=this._lineThickness;for(let n=i;n<r;n++)s[n]=t;this._changedBuffers[gs]=!0,!this._updatedGeometry[e.__id]&&this._updatedGeometryArr.push(e),this._updatedGeometry[e.__id]=!0}bringToFront(e){let t=this._polyIndexes.splice(e._polyIndexesHandlerIndex,e._polyIndexesLength),i=this._lineIndexes.splice(e._lineIndexesHandlerIndex,e._lineIndexesLength);this._geometries.splice(e._handlerIndex,1);let r=this._geometries;for(let s=e._handlerIndex;s<r.length;s++){let n=r[s];n._handlerIndex=s,n._polyIndexesHandlerIndex-=e._polyIndexesLength,n._lineIndexesHandlerIndex-=e._lineIndexesLength}e._polyIndexesHandlerIndex=this._polyIndexes.length,e._lineIndexesHandlerIndex=this._lineIndexes.length,e._handlerIndex=this._geometries.length,this._geometries.push(e),this._polyIndexes.push.apply(this._polyIndexes,t),this._lineIndexes.push.apply(this._lineIndexes,i),this._changedBuffers[cs]=!0,this._changedBuffers[us]=!0,!this._updatedGeometry[e.__id]&&this._updatedGeometryArr.push(e),this._updatedGeometry[e.__id]=!0}createPolyVerticesBuffer(){let e=this._handler;e.gl.deleteBuffer(this._polyVerticesHighBufferMerc),this._polyVerticesHighBufferMerc=e.createArrayBuffer(new Float32Array(this._polyVerticesHighMerc),2,this._polyVerticesHighMerc.length/2),e.gl.deleteBuffer(this._polyVerticesLowBufferMerc),this._polyVerticesLowBufferMerc=e.createArrayBuffer(new Float32Array(this._polyVerticesLowMerc),2,this._polyVerticesLowMerc.length/2)}createPolyIndexesBuffer(){let e=this._handler;e.gl.deleteBuffer(this._polyIndexesBuffer),this._polyIndexesBuffer=e.createElementArrayBuffer(new Uint32Array(this._polyIndexes),1,this._polyIndexes.length)}createPolyColorsBuffer(){let e=this._handler;e.gl.deleteBuffer(this._polyColorsBuffer),this._polyColorsBuffer=e.createArrayBuffer(new Float32Array(this._polyColors),4,this._polyColors.length/4)}createPolyPickingColorsBuffer(){let e=this._handler;e.gl.deleteBuffer(this._polyPickingColorsBuffer),this._polyPickingColorsBuffer=e.createArrayBuffer(new Float32Array(this._polyPickingColors),4,this._polyPickingColors.length/4)}createLineVerticesBuffer(){let e=this._handler;e.gl.deleteBuffer(this._lineVerticesHighBufferMerc),this._lineVerticesHighBufferMerc=e.createArrayBuffer(new Float32Array(this._lineVerticesHighMerc),2,this._lineVerticesHighMerc.length/2),e.gl.deleteBuffer(this._lineVerticesLowBufferMerc),this._lineVerticesLowBufferMerc=e.createArrayBuffer(new Float32Array(this._lineVerticesLowMerc),2,this._lineVerticesLowMerc.length/2)}createLineIndexesBuffer(){let e=this._handler;e.gl.deleteBuffer(this._lineIndexesBuffer),this._lineIndexesBuffer=e.createElementArrayBuffer(new Uint32Array(this._lineIndexes),1,this._lineIndexes.length)}createLineOrdersBuffer(){let e=this._handler;e.gl.deleteBuffer(this._lineOrdersBuffer),this._lineOrdersBuffer=e.createArrayBuffer(new Float32Array(this._lineOrders),1,this._lineOrders.length/2)}createLineColorsBuffer(){let e=this._handler;e.gl.deleteBuffer(this._lineColorsBuffer),this._lineColorsBuffer=e.createArrayBuffer(new Float32Array(this._lineColors),4,this._lineColors.length/4)}createLinePickingColorsBuffer(){let e=this._handler;e.gl.deleteBuffer(this._linePickingColorsBuffer),this._linePickingColorsBuffer=e.createArrayBuffer(new Float32Array(this._linePickingColors),4,this._linePickingColors.length/4)}createLineThicknessBuffer(){let e=this._handler;e.gl.deleteBuffer(this._lineThicknessBuffer),this._lineThicknessBuffer=e.createArrayBuffer(new Float32Array(this._lineThickness),1,this._lineThickness.length)}createLineStrokesBuffer(){let e=this._handler;e.gl.deleteBuffer(this._lineStrokesBuffer),this._lineStrokesBuffer=e.createArrayBuffer(new Float32Array(this._lineStrokes),1,this._lineStrokes.length)}createLineStrokeColorsBuffer(){let e=this._handler;e.gl.deleteBuffer(this._lineStrokeColorsBuffer),this._lineStrokeColorsBuffer=e.createArrayBuffer(new Float32Array(this._lineStrokeColors),4,this._lineStrokeColors.length/4)}clear(){this._geometries=[],this._polyVerticesHighMerc=[],this._polyVerticesLowMerc=[],this._polyIndexes=[],this._polyColors=[],this._polyPickingColors=[],this._lineVerticesHighMerc=[],this._lineVerticesLowMerc=[],this._lineOrders=[],this._lineIndexes=[],this._lineColors=[],this._linePickingColors=[],this._lineThickness=[],this._lineStrokeColors=[],this._lineStrokes=[],this._deleteBuffers(),this._polyVerticesHighBufferMerc=null,this._polyVerticesLowBufferMerc=null,this._polyIndexesBuffer=null,this._polyColorsBuffer=null,this._polyPickingColorsBuffer=null,this._lineVerticesHighBufferMerc=null,this._lineVerticesLowBufferMerc=null,this._lineIndexesBuffer=null,this._lineOrdersBuffer=null,this._lineColorsBuffer=null,this._linePickingColorsBuffer=null,this._lineThicknessBuffer=null,this._lineStrokeColorsBuffer=null,this._lineStrokesBuffer=null,this._updatedGeometryArr=[],this._updatedGeometry={},this._removeGeometryExtentArr=[],this._removeGeometryExtents={},this.refresh()}_deleteBuffers(){if(this._layer._planet&&this._layer._planet.renderer){let e=this._layer._planet.renderer.handler,t=e.gl;t&&(t.deleteBuffer(this._polyVerticesHighBufferMerc),t.deleteBuffer(this._polyVerticesLowBufferMerc),t.deleteBuffer(this._polyIndexesBuffer),t.deleteBuffer(this._polyColorsBuffer),t.deleteBuffer(this._polyPickingColorsBuffer),t.deleteBuffer(this._lineVerticesHighBufferMerc),t.deleteBuffer(this._lineVerticesLowBufferMerc),t.deleteBuffer(this._lineIndexesBuffer),t.deleteBuffer(this._lineOrdersBuffer),t.deleteBuffer(this._lineColorsBuffer),t.deleteBuffer(this._linePickingColorsBuffer),t.deleteBuffer(this._lineThicknessBuffer),t.deleteBuffer(this._lineStrokeColorsBuffer),t.deleteBuffer(this._lineStrokesBuffer))}}}rt.__counter__=0;function Oo(h){let e=[];for(let t=0;t<h.length;t++){let i=h[t];i.instanceName==="Entity"?e.push(i):e.push(new Ei(i))}return e}class Uo extends Qe{constructor(e,t={}){super(e,t),this.events=this.events.registerNames(Vo),this.isVector=!0,this._hasImageryTiles=!1,this.scaleByDistance=t.scaleByDistance||[mt,mt,mt],this._useLighting=t.useLighting!==void 0?t.useLighting:!0;let i=new Float32Array([1,1,1]);t.pickingScale!==void 0&&(t.pickingScale instanceof Array?(i[0]=t.pickingScale[0]||i[0],i[1]=t.pickingScale[1]||i[1],i[2]=t.pickingScale[2]||i[2]):typeof t.pickingScale=="number"&&(i[0]=t.pickingScale,i[1]=t.pickingScale,i[2]=t.pickingScale)),this.pickingScale=i,this.async=t.async!==void 0?t.async:!0,this.clampToGround=t.clampToGround||!1,this.relativeToGround=t.relativeToGround||!1,this._entities=Oo(t.entities||[]),this._labelMaxLetters=t.labelMaxLetters||24,this._stripEntityCollection=new yt({pickingEnabled:this.pickingEnabled}),this._bindEventsDefault(this._stripEntityCollection),this._polylineEntityCollection=new yt({pickingEnabled:this.pickingEnabled}),this._bindEventsDefault(this._polylineEntityCollection),this._geoObjectEntityCollection=new yt({pickingEnabled:this.pickingEnabled,useLighting:this._useLighting}),this._bindEventsDefault(this._geoObjectEntityCollection),this._geometryHandler=new rt(this),this._nodeCapacity=t.nodeCapacity||60,this._entityCollectionsTreeStrategy=null,this.setEntities(this._entities),this.polygonOffsetUnits=t.polygonOffsetUnits!=null?t.polygonOffsetUnits:0,this.pickingEnabled=this._pickingEnabled}get useLighting(){return this._useLighting}set useLighting(e){e!==this._useLighting&&(this._geoObjectEntityCollection.useLighting=e,this._useLighting=e)}get labelMaxLetters(){return this._labelMaxLetters}get instanceName(){return"Vector"}_bindPicking(){this._pickingColor.clear()}addTo(e){this._planet||(this._assignPlanet(e),this._geometryHandler.assignHandler(e.renderer.handler),this._polylineEntityCollection.addTo(e,!0),this._stripEntityCollection.addTo(e,!0),this._geoObjectEntityCollection.addTo(e,!0),this.setEntities(this._entities))}remove(){return super.remove(),this._polylineEntityCollection.remove(),this._stripEntityCollection.remove(),this._geoObjectEntityCollection.remove(),this}getEntities(){return[].concat(this._entities)}add(e,t=!1){return e._layer||e._entityCollection||(e._layer=this,e._layerIndex=this._entities.length,this._entities.push(e),this._proceedEntity(e,t)),this}insert(e,t,i=!1){if(!(e._layer||e._entityCollection)){e._layer=this,e._layerIndex=t,this._entities.splice(t,0,e);for(let r=t+1,s=this._entities.length;r<s;r++)this._entities[r]._layerIndex=r;this._proceedEntity(e,i)}return this}_proceedEntity(e,t=!1){var s;let i=this._hasImageryTiles,r=!(e.strip||e.polyline||e.ray||e.geoObject||e.geometry);e.strip&&this._stripEntityCollection.add(e),(e.polyline||e.ray)&&this._polylineEntityCollection.add(e),(e.geoObject||r)&&this._geoObjectEntityCollection.add(e),e.geometry&&(this._hasImageryTiles=!0,this._planet&&(this._planet.renderer.assignPickingColor(e),this._geometryHandler.add(e.geometry))),this._planet&&((e.billboard||e.label||e.geoObject||r)&&(e._cartesian.isZero()&&!e._lonLat.isZero()?e._setCartesian3vSilent(this._planet.ellipsoid.lonLatToCartesian(e._lonLat)):(e._lonLat=this._planet.ellipsoid.cartesianToLonLat(e._cartesian),Math.abs(e._lonLat.lat)<se?e._lonLatMerc=e._lonLat.forwardMercator():e._lonLatMerc.lon=e._lonLatMerc.lat=e._lonLatMerc.height=0)),(e.billboard||e.label)&&((s=this._entityCollectionsTreeStrategy)==null||s.insertEntity(e))),this._planet&&this._hasImageryTiles!==i&&this._planet.updateVisibleLayers(),this.events.dispatch(this.events.entityadd,e)}addEntities(e,t=!1){let i=e.length;for(;i--;)this.add(e[i],t);return this}removeEntity(e){if(e._layer&&this.isEqual(e._layer)){if(this._entities.splice(e._layerIndex,1),this._reindexEntitiesArray(e._layerIndex),e._layer=null,e._layerIndex=-1,e._entityCollection){e._entityCollection._removeEntitySilent(e);let t=e._nodePtr;for(;t;)t.count--,t=t.parentNode;e._nodePtr&&e._nodePtr.count===0&&e._nodePtr.deferredEntities.length===0&&(e._nodePtr.entityCollection=null)}else if(e._nodePtr&&e._nodePtr.deferredEntities.length){let t=e._nodePtr.deferredEntities,i=t.length;for(;i--;)if(t[i].id===e.id){t.splice(i,1);let r=e._nodePtr;for(;r;)r.count--,r=r.parentNode;break}}this._planet&&e.geometry&&(this._geometryHandler.remove(e.geometry),this._planet.renderer.clearPickingColor(e)),e._nodePtr=void 0,this.events.dispatch(this.events.entityremove,e)}return this}set pickingEnabled(e){var t;this._pickingEnabled=e,this._stripEntityCollection.setPickingEnabled(e),this._polylineEntityCollection.setPickingEnabled(e),this._geoObjectEntityCollection.setPickingEnabled(e),(t=this._entityCollectionsTreeStrategy)==null||t.setPickingEnabled(e)}_reindexEntitiesArray(e){const t=this._entities;for(let i=e;i<t.length;i++)t[i]._layerIndex=i}removeEntities(e){let t=e.length;for(;t--;)this.removeEntity(e[t]);return this}clear(){var i;super.clear();let e=new Array(this._entities.length);for(let r=0;r<e.length;r++)e[r]=this._entities[r];let t=this._entities.length;for(;t--;)this._entities[t].remove();this._entities.length=0,this._entities=[];for(let r=0;r<e.length;r++)this._entities[r]=e[r];(i=this._entityCollectionsTreeStrategy)==null||i.dispose(),this._entityCollectionsTreeStrategy=null,this._geometryHandler.clear()}each(e){let t=this._entities,i=t.length;for(;i--;)e(t[i],i)}setEntities(e){let t=new Array(e.length);for(let r=0,s=e.length;r<s;r++)t[r]=e[r];this.clear(),this._entities=new Array(t.length);let i=[];for(let r=0;r<t.length;r++){let s=t[r];s._layer=this,s._layerIndex=r;let n=!(s.strip||s.polyline||s.ray||s.geoObject||s.billboard||s.label);s.strip?this._stripEntityCollection.add(s):s.polyline||s.ray?this._polylineEntityCollection.add(s):s.geoObject||n?this._geoObjectEntityCollection.add(s):(s.billboard||s.label)&&i.push(s),s.geometry&&(this._hasImageryTiles=!0,this._planet&&(this._planet.renderer.assignPickingColor(s),this._geometryHandler.add(s.geometry))),this._entities[r]=s}return this._createEntityCollectionsTree(i),this}_createEntityCollectionsTree(e){this._planet&&(this._entityCollectionsTreeStrategy=this._planet.quadTreeStrategy.createEntitiCollectionsTreeStrategy(this,this._nodeCapacity),this._entityCollectionsTreeStrategy.insertEntities(e))}_bindEventsDefault(e){let t=this.events;e.events.on("mousemove",i=>{t.dispatch(t.mousemove,i)}),e.events.on("mouseenter",i=>{t.dispatch(t.mouseenter,i)}),e.events.on("mouseleave",i=>{t.dispatch(t.mouseleave,i)}),e.events.on("lclick",i=>{t.dispatch(t.lclick,i)}),e.events.on("rclick",i=>{t.dispatch(t.rclick,i)}),e.events.on("mclick",i=>{t.dispatch(t.mclick,i)}),e.events.on("ldblclick",i=>{t.dispatch(t.ldblclick,i)}),e.events.on("rdblclick",i=>{t.dispatch(t.rdblclick,i)}),e.events.on("mdblclick",i=>{t.dispatch(t.mdblclick,i)}),e.events.on("lup",i=>{t.dispatch(t.lup,i)}),e.events.on("rup",i=>{t.dispatch(t.rup,i)}),e.events.on("mup",i=>{t.dispatch(t.mup,i)}),e.events.on("ldown",i=>{t.dispatch(t.ldown,i)}),e.events.on("rdown",i=>{t.dispatch(t.rdown,i)}),e.events.on("mdown",i=>{t.dispatch(t.mdown,i)}),e.events.on("lhold",i=>{t.dispatch(t.lhold,i)}),e.events.on("rhold",i=>{t.dispatch(t.rhold,i)}),e.events.on("mhold",i=>{t.dispatch(t.mhold,i)}),e.events.on("mousewheel",i=>{t.dispatch(t.mousewheel,i)}),e.events.on("touchmove",i=>{t.dispatch(t.touchmove,i)}),e.events.on("touchstart",i=>{t.dispatch(t.touchstart,i)}),e.events.on("touchend",i=>{t.dispatch(t.touchend,i)}),e.events.on("doubletouch",i=>{t.dispatch(t.doubletouch,i)}),e.events.on("touchleave",i=>{t.dispatch(t.touchleave,i)}),e.events.on("touchenter",i=>{t.dispatch(t.touchenter,i)})}_collectStripCollectionPASS(e){let t=this._stripEntityCollection;t._fadingOpacity=this._fadingOpacity,t.scaleByDistance=this.scaleByDistance,t.pickingScale=this.pickingScale,t.polygonOffsetUnits=this.polygonOffsetUnits,e.push(t)}_collectPolylineCollectionPASS(e){let t=this._polylineEntityCollection;if(t._fadingOpacity=this._fadingOpacity,t.scaleByDistance=this.scaleByDistance,t.pickingScale=this.pickingScale,t.polygonOffsetUnits=this.polygonOffsetUnits,e.push(t),this.clampToGround||this.relativeToGround){let i=Number(this.relativeToGround);const r=this._planet._renderedNodes,s=this._planet.getViewExtent();let n=t._entities,a=n.length,o=new m;for(;a--;){let l=n[a].polyline;if(l&&s.overlaps(l._extent)){let c=l._pathLonLatMerc,d=c.length;for(;d--;){let f=c[d].length;for(;f--;){let _=c[d][f],g=r.length;for(;g--;){let v=r[g].segment;if(v._extent.isInside(_)){let u=l._path3v[d][f];v.getTerrainPoint(u,_,o);let p=i&&l.altitude||0;if(p){let b=this._planet.ellipsoid.getSurfaceNormal3v(o);l.setPoint3v(o.addA(b.scale(p)),f,d,!0)}else l.setPoint3v(o,f,d,!0);break}}}}}}}}_collectGeoObjectCollectionPASS(e){let t=this._geoObjectEntityCollection;t._fadingOpacity=this._fadingOpacity,t.scaleByDistance=this.scaleByDistance,t.pickingScale=this.pickingScale,t.polygonOffsetUnits=this.polygonOffsetUnits,e.push(t)}collectVisibleCollections(e){let t=this._planet;(this._fading&&this._fadingOpacity>0||this.minZoom<=t.maxCurrZoom&&this.maxZoom>=t.maxCurrZoom)&&(this._collectStripCollectionPASS(e),this._collectPolylineCollectionPASS(e),this._collectGeoObjectCollectionPASS(e),this._entityCollectionsTreeStrategy&&this._entityCollectionsTreeStrategy.collectVisibleEntityCollections(e))}loadMaterial(e){const t=e.segment;this._isBaseLayer?e.texture=t._isNorth?t.planet.solidTextureOne:t.planet.solidTextureTwo:e.texture=t.planet.transparentTexture,this._planet.layerLock.isFree()&&(e.isReady=!1,e.isLoading=!0,this._planet._vectorTileCreator.add(e))}abortMaterialLoading(e){e.isLoading=!1,e.isReady=!1}applyMaterial(e,t=!1){if(e.isReady)return[0,0,1,1];{!e.isLoading&&this.loadMaterial(e);const i=e.segment;let r=i.node,s=!1,n=this.__id,a=e;for(;r.parentNode;){if(a&&a.isReady){s=!0;break}r=r.parentNode,a=r.segment.materials[n]}if(s){e.appliedNodeId=r.nodeId,e.texture=a.texture,e.pickingMask=a.pickingMask;const o=1/(2<<i.tileZoom-r.segment.tileZoom-1);return[i.tileX*o-r.segment.tileX,i.tileY*o-r.segment.tileY,o,o]}else return e.textureExists&&e._updateTexture?(e.texture=e._updateTexture,e.pickingMask=e._updatePickingMask):(e.texture=i.planet.transparentTexture,e.pickingMask=i.planet.transparentTexture),e.pickingReady=!0,[0,0,1,1]}}clearMaterial(e){if(e.isReady){const t=e.segment.handler.gl;e.isReady=!1,e.pickingReady=!1;let i=e.texture;e.texture=null,i&&!i.default&&t.deleteTexture(i),i=e.pickingMask,e.pickingMask=null,i&&!i.default&&t.deleteTexture(i),i=e._updateTexture,e._updateTexture=null,i&&!i.default&&t.deleteTexture(i),i=e._updatePickingMask,e._updatePickingMask=null,i&&!i.default&&t.deleteTexture(i)}this.abortMaterialLoading(e),e.isLoading=!1,e.textureExists=!1}update(){this._geometryHandler.update(),this.events.dispatch(this.events.draw,this)}}const Vo=["draw","entityadd","entityremove"];Z.createCylinder(1,1,2,20,1,!0,!1,0,-.5,0);const xn=0,yn=1,bn=2,Vt={ell:xn,msl:yn,gnd:bn},wn=1e3,Tn=1/wn,Tr=.3048,Go=1/Tr,An=3.6,qo=1/An,jo=3.28084,En=Tr*Tn,Yo=1/En,Ge=0,at=1,ot=2,Wo=3,Xo=4,wt=5,Rt=6,Cn=7,Zo="--",$o=["m","km","ft","s","h","m/s","km/h","ft/s"],Pn=[0,2,0,0,0,0,0,0];let ce=[];ce[Ge]=[];ce[Ge][Ge]=h=>h;ce[Ge][at]=h=>h*Tn;ce[Ge][ot]=h=>h*Go;ce[ot]=[];ce[ot][Ge]=h=>h*Tr;ce[ot][at]=h=>h*En;ce[ot][ot]=h=>h;ce[at]=[];ce[at][Ge]=h=>h*wn;ce[at][at]=h=>h;ce[at][ot]=h=>h*Yo;ce[wt]=[];ce[wt][wt]=h=>h;ce[wt][Rt]=h=>h*An;ce[wt][Cn]=h=>h*jo;ce[Rt]=[];ce[Rt][wt]=h=>h*qo;ce[Rt][Rt]=h=>h;function Ln(h,e,t){return ce[h][e](t)}function fr(h,e,t,i,r){return h?Ln(e,t,i).toFixed(r||Pn[t]):Zo}function Bn(h){return $o[h]}const ps=Object.freeze(Object.defineProperty({__proto__:null,ELL:xn,GND:bn,MSL:yn,_tenth:Pn,convert:Ln,convertExt:fr,ft:ot,fts:Cn,h:Xo,heightMode:Vt,km:at,kmh:Rt,m:Ge,ms:wt,s:Wo,toString:Bn},Symbol.toStringTag,{value:"Module"})),Ko=`<div class="og-lat-side"></div><div class="og-lat-val"></div>
    <div class="og-lon-side"></div><div class="og-lon-val"></div>
    <div class="og-height"></div>
    <div class="og-units-height"></div>`,Qo=`<div class="og-lat-side"></div><div class="og-lat-val"></div>
    <div class="og-lon-side"></div><div class="og-lon-val"></div>
    <div class="og-height"></div>
    <div class="og-units-height"></div>`,Jo='<svg width="12" height="12"><g><path stroke-width="1" stroke-opacity="1" d="M6 0L6 12M0 6L12 6" stroke="#337ab7"></path></g></svg>',el=[Ko,Qo];class tl extends Ie{constructor(e={}){super(e),this._type=e.type||0,this._TYPE_FUNC=[this._SHOW_DECIMAL,this._SHOW_DEGREE],this._showFn=null,this._el=null,this._latSideEl=null,this._lonSideEl=null,this._latValEl=null,this._lonValEl=null,this._heightEl=null,this._altUnitVal=e.altitudeUnit||"m",this._heightModeVal=e.heightMode||"ell",this._altUnit=ps[this._altUnitVal],this._heightMode=Vt[this._heightModeVal],this._lonLat=null,this._centerMode=e.centerMode!=null?e.centerMode:!0}_SHOW_DECIMAL(e){if(e){let t=e.lat,i=e.lon;t>=0?this._latSideEl.innerHTML="N":this._latSideEl.innerHTML="S",i>=0?this._lonSideEl.innerHTML="E":this._lonSideEl.innerHTML="W",this._latValEl.innerHTML=Math.abs(t).toFixed(7)+"°",this._lonValEl.innerHTML=Math.abs(i).toFixed(7)+"°"}}_SHOW_DEGREE(e){if(e){let t=e.lat,i=e.lon;t>=0?this._latSideEl.innerHTML="N":this._latSideEl.innerHTML="S",i>=0?this._lonSideEl.innerHTML="E":this._lonSideEl.innerHTML="W";let r=0,s=t<0?Math.ceil(t):Math.floor(t),n=Math.floor(r=Math.abs(t-s)*60),a=Math.floor((r-n)*6e3)/100;this._latValEl.innerHTML=Math.abs(s)+"°"+n+"'"+a.toFixed(0)+'"',s=i<0?Math.ceil(i):Math.floor(i),n=Math.floor(r=Math.abs(i-s)*60),a=Math.floor((r-n)*6e3)/100,this._lonValEl.innerHTML=Math.abs(s)+"°"+n+"'"+a.toFixed(0)+'"'}}_createCenterEl(){let e=document.createElement("div");return e.className="og-center-icon",e.innerHTML=Jo,e}_updateUnits(){this._heightMode=Vt[this._heightModeVal],this._altUnit=ps[this._altUnitVal],this._el.querySelector(".og-units-height").innerHTML=Bn(this._altUnit),this._showHeight()}_refreshCoordinates(){this._type>=this._TYPE_FUNC.length&&(this._type=0);let e=this._el;e.innerHTML=el[this._type],this._latSideEl=e.querySelector(".og-lat-side"),this._lonSideEl=e.querySelector(".og-lon-side"),this._latValEl=e.querySelector(".og-lat-val"),this._lonValEl=e.querySelector(".og-lon-val"),this._heightEl=e.querySelector(".og-height"),this._showFn=this._TYPE_FUNC[this._type],this._showFn(this._lonLat)}oninit(){this._el=document.createElement("div"),this._el.classList.add("og-coordinates"),this.renderer.div.appendChild(this._el),this._el.addEventListener("click",()=>{this._type++,this._refreshCoordinates(),this._updateUnits(),this._showHeight()}),this._centerMode?(this.renderer.div.appendChild(this._createCenterEl()),this.planet.camera.events.on("moveend",this._grabCoordinates,this),this.planet.camera.events.on("moveend",or(()=>this._showHeight(),400,!0),this)):(this.renderer.events.on("mousemove",this._grabCoordinates,this),this.renderer.events.on("mousestop",or(()=>this._showHeight(),400,!0),this)),this._refreshCoordinates(),this._updateUnits()}_grabCoordinates(e){let t=e.pos,i,r=this.renderer;this._centerMode?i=r.handler.getCenter():i=t,this._lonLat=this.planet.getLonLatFromPixelTerrain(i)||null,this._showFn(this._lonLat)}async _showHeight(){if(this._lonLat&&this.planet){let e=0;this._heightEl.style.opacity="0.7",this._heightMode===Vt.ell?(e=await this.planet.getHeightAboveELL(this._lonLat),e=Number(fr(!0,Ge,this._altUnit,e))):this._heightMode===Vt.msl&&(e=await this.planet.getHeightDefault(this._lonLat),e=Number(fr(!0,Ge,this._altUnit,e))),this._heightEl.style.opacity="1.0",this._heightEl.innerHTML=e.toString()}}}let vs=class{constructor(){this.x=0,this.y=0,this.prev_x=0,this.prev_y=0,this.grabbedPoint=new m,this.grabbedSpheroid=new nt}dX(){return this.x-this.prev_x}dY(){return this.y-this.prev_y}};class il extends Ie{constructor(e={}){super(e),this.grabbedPoint=new m,this.grabbedDir=new m,this.inertia=.007,this.grabbedSpheroid=new nt,this.planet=null,this._vRot=new N,this._hRot=new N,this._a=0,this.scaleRot=0,this.currState=0,this.positionState=[{h:17119745303455353e-9,max:.98,min:-.98},{h:6866011,max:.98,min:-.98},{h:3e6,max:.98,min:-.98},{h:1e6,max:.98,min:-.98},{h:5e5,max:.98,min:-.98}],this.touches=[new vs,new vs]}switchZoomState(e){this.stopRotation(),e>0?this.currState++:this.currState--,this.currState<=0&&(this.currState=0),this.currState>=this.positionState.length&&(this.currState=this.positionState.length-1),this.planet.stopFlying();const t=this.planet.camera._lonLat;this.planet.flyLonLat(new P(t.lon,t.lat,this.positionState[this.currState].h))}onMouseWheel(e){this.switchZoomState(e.wheelDelta)}oninit(){this.activate()}onactivate(){let e=this.renderer;e.events.on("mousewheel",this.onMouseWheel,this),e.events.on("lhold",this.onMouseLeftButtonDown,this),e.events.on("ldown",this.onMouseLeftButtonClick,this),e.events.on("lup",this.onMouseLeftButtonUp,this),e.events.on("touchstart",this.onTouchStart,this),e.events.on("touchend",this.onTouchEnd,this),e.events.on("touchmove",this.onTouchMove,this),e.events.on("draw",this.onDraw,this)}onTouchStart(e){if(e.sys.touches.length==1){const t=this.touches[0];t.x=e.sys.touches.item(0).pageX-e.sys.offsetLeft,t.y=e.sys.touches.item(0).pageY-e.sys.offsetTop,t.prev_x=e.sys.touches.item(0).pageX-e.sys.offsetLeft,t.prev_y=e.sys.touches.item(0).pageY-e.sys.offsetTop,t.grabbedPoint=this.planet.getCartesianFromPixelTerrain(new V(t.x,t.y))||null,t.grabbedPoint&&(t.grabbedSpheroid.radius=t.grabbedPoint.length(),this.stopRotation())}}onTouchEnd(e){e.sys.touches.length==0&&(this.scaleRot=1,Math.abs(this.touches[0].x-this.touches[0].prev_x)<3&&Math.abs(this.touches[0].y-this.touches[0].prev_y)<3&&this.stopRotation())}onTouchMove(e){if(e.sys.touches.length==1){let t=this.planet.camera,i=this.touches[0];if(i.prev_x=i.x,i.prev_y=i.y,i.x=e.sys.touches.item(0).pageX-e.sys.offsetLeft,i.y=e.sys.touches.item(0).pageY-e.sys.offsetTop,!i.grabbedPoint)return;let r=t.unproject(i.x,i.y),s=new re(t.eye,r).hitSphere(i.grabbedSpheroid);if(s){this._a=Math.acos(i.grabbedPoint.y/i.grabbedSpheroid.radius)-Math.acos(s.y/i.grabbedSpheroid.radius),this._vRot=N.axisAngleToQuat(t._u,this._a),this._hRot=N.getRotationBetweenVectors(new m(s.x,0,s.z).normal(),new m(i.grabbedPoint.x,0,i.grabbedPoint.z).normal());let n=this._hRot.mul(this._vRot),a=this.positionState[this.currState],o=n.mulVec3(t.eye).normal().dot(m.NORTH);(o>a.max||o<a.min)&&(n=N.yRotation(n.getYaw())),t.set(n.mulVec3(t.eye),m.ZERO,m.NORTH),t.update()}}}onMouseLeftButtonClick(e){this.renderer.handler.canvas.classList.add("ogGrabbingPoiner"),this.grabbedPoint=this.planet.getCartesianFromMouseTerrain()||null,this.grabbedDir.copy(e.direction),this.grabbedPoint&&(this.grabbedSpheroid.radius=this.grabbedPoint.length(),this.stopRotation())}stopRotation(){this.scaleRot=0,this._a=0,this._vRot.clear(),this._hRot.clear()}onMouseLeftButtonUp(e){this.scaleRot=1,this.renderer.handler.canvas.classList.remove("ogGrabbingPoiner"),Math.abs(e.x-e.prev_x)<3&&Math.abs(e.y-e.prev_y)<3&&this.stopRotation()}onMouseLeftButtonDown(e){let t=this.planet.camera;if(!(!this.grabbedPoint||t.isFlying()))if(this.renderer.events.mouseState.moving){let i=new re(t.eye,e.direction).hitSphere(this.grabbedSpheroid);if(i){this._a=Math.acos(this.grabbedPoint.y/this.grabbedSpheroid.radius)-Math.acos(i.y/this.grabbedSpheroid.radius);let r=this._vRot=N.axisAngleToQuat(t._u,this._a);t.set(r.mulVec3(t.eye),m.ZERO,r.mulVec3(t.getUp())),this._hRot=N.getRotationBetweenVectors(new m(i.x,0,i.z).normal(),new m(this.grabbedPoint.x,0,this.grabbedPoint.z).normal()),r=this._hRot,t.set(r.mulVec3(t.eye),m.ZERO,r.mulVec3(t.getUp())),t.update()}}else this.scaleRot=0}onDraw(){let e=this.renderer,t=this.planet.camera;if(!(e.events.mouseState.leftButtonDown||!this.scaleRot||t.isFlying()))if(this.scaleRot-=this.inertia,this.scaleRot<=0)this.scaleRot=0;else{this._vRot=N.axisAngleToQuat(t._u,this._a);let i=this._vRot.mul(this._hRot),r=i.mulVec3(t.eye).normal().dot(m.NORTH),s=this.positionState[this.currState];(r>s.max||r<s.min)&&(i=N.yRotation(i.getYaw())),e.controlsBag.scaleRot=this.scaleRot,i=i.slerp(N.IDENTITY,1-this.scaleRot*this.scaleRot*this.scaleRot).normalize(),i.x||i.y||i.z||(this.scaleRot=0),t.set(i.mulVec3(t.eye),m.ZERO,m.NORTH),t.update()}}}const ye={MB_LEFT:0,MB_RIGHT:2,MB_MIDDLE:1,KEY_CTRL:17,KEY_ALT:18,KEY_SHIFT:16,KEY_SPACE:32,KEY_PGUP:33,KEY_PGDN:34,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_PRINTSCREEN:44,KEY_EQUALS:61,KEY_A:65,KEY_C:67,KEY_D:68,KEY_E:69,KEY_F:70,KEY_H:72,KEY_I:73,KEY_K:75,KEY_L:76,KEY_N:78,KEY_O:79,KEY_P:80,KEY_Q:81,KEY_R:82,KEY_S:83,KEY_V:86,KEY_W:87,KEY_X:88,KEY_Z:90,KEY_PLUS:107,KEY_F1:112,KEY_MINUS:173,KEY_APOSTROPHE:192,KEY_BACK_SLASH:220,KEY_MORE:190,KEY_SLASH:191,KEY_LESS:188,KEY_LEFT_SQUARE_BRACKET:219,KEY_RIGHT_SQUARE_BRACKET:221,KEY_SINGLE_QUOTE:222};class ur{constructor(){this._lock=0}lock(e){this._lock|=1<<e.id}free(e){this._lock&=~(1<<e.id)}isFree(){return this._lock===0}isLocked(){return this._lock!==0}}class lt{constructor(){this.__id=lt.__counter__++}get id(){return this.__id}}lt.__counter__=0;class Ar extends Ie{constructor(e={}){super(e),this._deactivate=!1,this._shiftBusy=!1,this._name="mouseNavigation",this.grabbedPoint=new m,this._eye0=new m,this.pointOnEarth=new m,this.earthUp=new m,this.inertia=.007,this.grabbedSpheroid=new nt,this.qRot=new N,this.scaleRot=0,this.distDiff=.3,this.stepsCount=8,this.stepsForward=null,this.stepIndex=0,this._lmbDoubleClickActive=!0,this.minSlope=e.minSlope||.1,this._wheelDirection=1,this._keyLock=new lt}static getMovePointsFromPixelTerrain(e,t,i,r,s,n,a){const o=[];let l=e.eye.clone(),c=e._b.clone(),d=e._r.clone(),f=e._u.clone(),_=t.getCartesianFromPixelTerrain(s);if(_||(_=t.getCartesianFromPixelTerrain(t.renderer.handler.getCenter())),_){a||(a=m.sub(_,e.eye).normalize());let g=r*e.eye.distance(_)/i;n?g=-1.25*g:g*=2;const v=c.scaleTo(g);if(a.dot(e.eye.normal().negate())>=.1){const p=new nt;p.radius=_.length();let b=[],w=[],y=!1;for(let x=0;x<i;x++){l.addA(v);const T=new re(l,a).hitSphere(p);if(w[x]=l.clone(),T)b[x]=new ae().rotateBetweenVectors(_.normal(),T.normal());else{y=!0;break}}if(y){l=e.eye.clone();for(let x=0;x<i;x++)o[x]={eye:l.addA(v).clone(),v:f,u:d,n:c}}else for(let x=0;x<i;x++){let T=b[x];o[x]={eye:T.mulVec3(w[x]),v:T.mulVec3(f),u:T.mulVec3(d),n:T.mulVec3(c)}}}else for(let p=0;p<i;p++)o[p]={eye:l.addA(a.scaleTo(-g)).clone(),v:f,u:d,n:c};return o}}onactivate(){this.renderer&&(this.renderer.events.on("mousewheel",this.onMouseWheel,this),this.renderer.events.on("lhold",this.onMouseLeftButtonDown,this),this.renderer.events.on("rhold",this.onMouseRightButtonDown,this),this.renderer.events.on("ldown",this.onMouseLeftButtonClick,this),this.renderer.events.on("lup",this.onMouseLeftButtonUp,this),this.renderer.events.on("rdown",this.onMouseRightButtonClick,this),this.renderer.events.on("draw",this.onDraw,this,-1e3),this.renderer.events.on("mousemove",this.onMouseMove,this),this.renderer.events.on("mouseleave",this.onMouseLeave,this),this.renderer.events.on("mouseenter",this.onMouseEnter,this),this._lmbDoubleClickActive&&this.renderer.events.on("ldblclick",this.onMouseLeftButtonDoubleClick,this))}ondeactivate(){this.renderer&&(this.renderer.events.off("mousewheel",this.onMouseWheel),this.renderer.events.off("lhold",this.onMouseLeftButtonDown),this.renderer.events.off("rhold",this.onMouseRightButtonDown),this.renderer.events.off("ldown",this.onMouseLeftButtonClick),this.renderer.events.off("lup",this.onMouseLeftButtonUp),this.renderer.events.off("rdown",this.onMouseRightButtonClick),this.renderer.events.off("draw",this.onDraw),this.renderer.events.off("ldblclick",this.onMouseLeftButtonDoubleClick),this.renderer.events.off("mouseleave",this.onMouseLeave),this.renderer.events.off("mouseenter",this.onMouseEnter))}activateDoubleClickZoom(){this._lmbDoubleClickActive||(this._lmbDoubleClickActive=!0,this.renderer&&this.renderer.events.on("ldblclick",this.onMouseLeftButtonDoubleClick,this))}deactivateDoubleClickZoom(){this._lmbDoubleClickActive&&(this._lmbDoubleClickActive=!1,this.renderer&&this.renderer.events.off("ldblclick",this.onMouseLeftButtonDoubleClick))}onMouseEnter(e){const t=this.renderer.events;t.isKeyPressed(ye.KEY_ALT)&&t.releaseKeys(),t.updateButtonsStates(e.sys.buttons),t.mouseState.leftButtonDown?this.renderer.handler.canvas.classList.add("ogGrabbingPoiner"):this.renderer.handler.canvas.classList.remove("ogGrabbingPoiner")}onMouseLeave(){this.renderer.events.mouseState.leftButtonDown&&(this.scaleRot=0),this.renderer.handler.canvas.classList.remove("ogGrabbingPoiner")}onMouseWheel(e){this.stepIndex||(this.planet.stopFlying(),this.stopRotation(),this._deactivate=!0,this.lockPlanet(!0),this.stepsForward=Ar.getMovePointsFromPixelTerrain(this.planet.camera,this.planet,this.stepsCount,this.distDiff,e.pos,e.wheelDelta>0,e.direction)||null,this._wheelDirection=e.wheelDelta,this.stepsForward&&(this.stepIndex=this.stepsCount))}oninit(){this.activate(),this.renderer&&(this.renderer.events.on("keyfree",ye.KEY_ALT,this.onShiftFree,this),this.renderer.events.on("keyfree",ye.KEY_PRINTSCREEN,this.onShiftFree,this))}onMouseLeftButtonDoubleClick(e){this.planet.stopFlying(),this.stopRotation();const t=this.planet.getCartesianFromPixelTerrain(e.pos);if(t){const i=this.planet.camera;let r=i.maxAltitude+this.planet.ellipsoid.polarSize,s=i.minAltitude+this.planet.ellipsoid.polarSize;const n=i.eye.length(),a=this.planet.ellipsoid.cartesianToLonLat(t);if(n>r||n<s){this.planet.flyLonLat(new P(a.lon,a.lat));return}this.renderer.events.isKeyPressed(ye.KEY_ALT)?this.planet.flyLonLat(new P(a.lon,a.lat,i.eye.distance(t)*2)):this.planet.flyLonLat(new P(a.lon,a.lat,i.eye.distance(t)*.57))}}onMouseLeftButtonClick(){this._active&&(this.renderer.handler.canvas.classList.add("ogGrabbingPoiner"),this.grabbedPoint=this.planet.getCartesianFromMouseTerrain(),this.grabbedPoint&&(this._eye0.copy(this.planet.camera.eye),this.grabbedSpheroid.radius=this.grabbedPoint.length(),this.stopRotation()))}stopRotation(){this.qRot.clear(),this.freePlanet()}onMouseLeftButtonUp(e){this.renderer.handler.canvas.classList.remove("ogGrabbingPoiner"),e.x===e.prev_x&&e.y===e.prev_y&&(this.scaleRot=0)}onMouseLeftButtonDown(e){if(this._active){if(!this.grabbedPoint)return;if(this.planet.stopFlying(),e.moving){let t=this.planet.camera;if(t.slope>.2){const i=new re(t.eye,e.direction).hitSphere(this.grabbedSpheroid);if(i){this.scaleRot=1,this.qRot=N.getRotationBetweenVectors(i.normal(),this.grabbedPoint.normal());let r=this.qRot;t.eye=r.mulVec3(t.eye),t._u=r.mulVec3(t._u),t._r=r.mulVec3(t._r),t._b=r.mulVec3(t._b)}}else{let i=this.grabbedPoint,r=m.add(i,t._r),s=m.add(i,i.normal()),n=new m;new re(t.eye,e.direction).hitPlane(i,r,s,n)===re.INSIDE&&(t.eye=this._eye0.addA(n.subA(i).negate()))}}}}onMouseRightButtonClick(e){this.stopRotation(),this.planet.stopFlying(),this.pointOnEarth=this.planet.getCartesianFromPixelTerrain(e.pos),this.pointOnEarth&&(this.earthUp=this.pointOnEarth.normal())}onMouseRightButtonDown(e){const t=this.planet.camera;if(this.pointOnEarth&&e.moving){this.renderer.controlsBag.scaleRot=1;let i=.5/t.eye.distance(this.pointOnEarth)*t._lonLat.height*D;i>.007?i=.007:i<.003&&(i=.003),t.rotateHorizontal(i*(e.x-e.prev_x),!1,this.pointOnEarth,this.earthUp),t.rotateVertical(i*(e.y-e.prev_y),this.pointOnEarth,this.minSlope)}}onShiftFree(){this._shiftBusy=!1}onMouseMove(e){this._active&&this.renderer.events.isKeyPressed(ye.KEY_ALT)&&(this._shiftBusy||(this._shiftBusy=!0,this.onMouseRightButtonClick(e)),this.onMouseRightButtonDown(e))}onDraw(){if(this._active){const e=this.renderer,t=this.planet.camera;let i=t.eye.clone();if(this.stepIndex){e.controlsBag.scaleRot=1;const r=this.stepsForward[this.stepsCount-this.stepIndex--];t.eye=r.eye,t._u=r.v,t._r=r.u,t._b=r.n}else this._deactivate&&(this._deactivate=!1,this.freePlanet());if(e.events.mouseState.leftButtonDown||!this.scaleRot)return;if(this.scaleRot-=this.inertia,this.scaleRot<=0)this.scaleRot=0;else{e.controlsBag.scaleRot=this.scaleRot;let r=this.qRot.slerp(N.IDENTITY,1-this.scaleRot*this.scaleRot*this.scaleRot).normalize();r.x||r.y||r.z||(this.scaleRot=0),t.eye=r.mulVec3(t.eye),t._u=r.mulVec3(t._u),t._r=r.mulVec3(t._r),t._b=r.mulVec3(t._b)}t.eye.distance(i)/t.getAltitude()>.01?this.lockPlanet():this.freePlanet()}}lockPlanet(e){this.planet.layerLock.lock(this._keyLock),!e&&this.planet.terrainLock.lock(this._keyLock),this.planet._normalMapCreator.lock(this._keyLock)}freePlanet(){this.planet.layerLock.free(this._keyLock),this.planet.terrainLock.free(this._keyLock),this.planet._normalMapCreator.free(this._keyLock)}}Z.createCylinder(1.1,0,2.7,20,1,!0,!1,0,0,0);Z.createCylinder(1.1,0,2,6,1,!0,!0,0,0,0);const Gi=[1,2,3,5,10,20,30,50,100,200,300,500,1e3,2e3,3e3,5e3,1e4,2e4,3e4,5e4,1e5,2e5,3e5,5e5,1e6,2e6,3e6,5e6,1e7],rl=`<div class="og-scale-container">
      <div class="og-scale-label"></div>
      <div class="og-scale-ruler"></div>
    </div>`;class sl extends Ie{constructor(e={}){(!e.name||e.name==="")&&(e.name="scaleControl"),super(e),this._template=rl,this._minWidth=100,this._maxWidth=150,this._isCenter=e.isCenter!=null?e.isCenter:!0,this._mPx=0,this.currWidth=0,this._metersInMinSize=0,this.el=null,this._scaleLabelEl=null}_renderTemplate(){return Ws(this._template)[0]}oninit(){this.el=this._renderTemplate(),this._scaleLabelEl=this.el.querySelector(".og-scale-label"),this.renderer.div.appendChild(this.el),this._isCenter?(this.planet.camera.events.on("moveend",()=>{this._drawScreen(this.planet.renderer.handler.getCenter())}),!this.planet.terrain.isEmpty&&this.planet.terrain.events.on("loadend",()=>{this._drawScreen(this.planet.renderer.handler.getCenter())})):(this.renderer.events.on("mousemove",e=>{!e.leftButtonHold&&!e.rightButtonHold&&this._drawScreen(e.pos)}),this.planet.camera.events.on("moveend",()=>{let e=this.renderer.events.mouseState;!e.leftButtonHold&&!e.rightButtonHold&&this._drawScreen(e.pos)}))}_drawScreen(e){let t=this.planet.camera,i=e,r=this.planet.getDistanceFromPixel(i)||0;r===0&&(i=t.project(m.ZERO),r=this.planet.getDistanceFromPixel(i)||0);let s=t.getForward().scaleTo(r).addA(t.eye),n=r*Math.tan(t.viewAngle*D),a=s.add(t.getRight().scaleTo(n)),o=t.project(a);this._mPx=n/o.distance(i);let l=this._mPx*this._minWidth,c=mr(Gi,l,(g,v)=>g-v);c<0&&(c=~c);let d=Gi[c],f=Gi[c+1],_=(d-l)/(f-d);this.currWidth=this._minWidth+_*(this._maxWidth-this._minWidth),d>1e3?this._scaleLabelEl.innerText=`${d/1e3} km`:this._scaleLabelEl.innerText=`${d} m`,this._metersInMinSize=l,this.el.style.width=this.currWidth+"px"}}class nl extends Ie{constructor(e={}){super({name:"SimpleSkyBackground",...e}),this._colorOne=new Float32Array([128/255,223/255,255/255]),this._colorTwo=new Float32Array([10/255,15/255,56/255])}get colorOne(){let e=this._colorOne,t=[Math.round(e[0]*255),Math.round(e[1]*255),Math.round(e[2]*255)];return Nr(t)}get colorTwo(){let e=this._colorTwo,t=[Math.round(e[0]*255),Math.round(e[1]*255),Math.round(e[2]*255)];return Nr(t)}set colorOne(e){let t=nr(e);this._colorOne[0]=t.x,this._colorOne[1]=t.y,this._colorOne[2]=t.z}set colorTwo(e){let t=nr(e);this._colorTwo[0]=t.x,this._colorTwo[1]=t.y,this._colorTwo[2]=t.z}oninit(){this.renderer.handler.addProgram(al()),this.activate()}onactivate(){super.onactivate(),this.planet.events.on("draw",this._drawBackground,this)}ondeactivate(){super.ondeactivate(),this.planet.events.off("draw",this._drawBackground)}_drawBackground(){let e=this.renderer.handler,t=e.programs.simpleSkyBackground,i=t._program,r=i.uniforms,s=e.gl,n=this.planet.camera;s.disable(s.DEPTH_TEST),t.activate(),s.bindBuffer(s.ARRAY_BUFFER,this.renderer.screenFramePositionBuffer),s.vertexAttribPointer(i.attributes.corners,2,s.FLOAT,!1,0,0),s.uniform3fv(r.camPos,[n.eye.x,n.eye.y,n.eye.z]),s.uniform2fv(r.iResolution,[e.getWidth(),e.getHeight()]),s.uniform1f(r.fov,n.getViewAngle()),s.uniform1f(r.earthRadius,this.planet.ellipsoid.getPolarSize()+1),s.uniform3fv(r.colorOne,this._colorOne),s.uniform3fv(r.colorTwo,this._colorTwo),s.uniformMatrix4fv(r.viewMatrix,!1,n.getViewMatrix()),s.drawArrays(s.TRIANGLE_STRIP,0,4),s.enable(s.DEPTH_TEST)}}function al(){return new G("simpleSkyBackground",{uniforms:{iResolution:"vec2",fov:"float",camPos:"vec3",earthRadius:"float",viewMatrix:"mat4",colorOne:"vec3",colorTwo:"vec3"},attributes:{corners:"vec3"},vertexShader:`attribute vec2 corners;
                        
            varying vec2 tc;
            
            void main(void) {
                gl_Position = vec4(corners, 0.0, 1.0);
                tc = corners * 0.5 + 0.5;
            }`,fragmentShader:`precision highp float;
            
            #define MAX 10e10
            #define PI 3.14159265359
            #define rad(x) x * PI / 180.
            #define ZERO vec3(0.0)          
           
            #define RED vec4(1.0, 0.0, 0.0, 1.0)
            #define GREEN vec4(0.0, 1.0, 0.0, 1.0)         
            
            uniform vec3 camPos;            
            uniform vec2 iResolution;
            uniform float fov;
            uniform float earthRadius;
            uniform mat4 viewMatrix;
            
            uniform vec3 colorOne;
            uniform vec3 colorTwo;
                         
            varying vec2 tc;
                        
            // compute the view ray in the camera coordinate
            vec3 computeView(vec2 uv){
                float w_h_ratio = iResolution.x / iResolution.y;   
                float h = tan(rad(fov/2.));
                return normalize(vec3(-w_h_ratio * h, -h, -1.) + vec3(uv.x * 2. * h * w_h_ratio, uv.y*2.*h, 0.));
            }

            // sphere of size ra centered at point ce
            vec2 sphIntersect( in vec3 ro, in vec3 rd, in vec3 ce, float ra )
            {
                vec3 oc = ro - ce;
                float b = dot( oc, rd );
                float c = dot( oc, oc ) - ra * ra;
                float h = b * b - c;
                if( h < 0.0 ) return vec2(MAX); // no intersection
                h = sqrt( h );
                return vec2( -b-h, -b+h );
            }
            
            mat3 transpose(mat3 matrix) {
                vec3 row0 = matrix[0];
                vec3 row1 = matrix[1];
                vec3 row2 = matrix[2];
                mat3 result = mat3(
                    vec3(row0.x, row1.x, row2.x),
                    vec3(row0.y, row1.y, row2.y),
                    vec3(row0.z, row1.z, row2.z)
                );
                return result;
            }
            
            float det(mat2 matrix) {
                return matrix[0].x * matrix[1].y - matrix[0].y * matrix[1].x;
            }
            
            mat3 inverse(mat3 matrix) {
                vec3 row0 = matrix[0];
                vec3 row1 = matrix[1];
                vec3 row2 = matrix[2];
            
                vec3 minors0 = vec3(
                    det(mat2(row1.y, row1.z, row2.y, row2.z)),
                    det(mat2(row1.z, row1.x, row2.z, row2.x)),
                    det(mat2(row1.x, row1.y, row2.x, row2.y))
                );
                vec3 minors1 = vec3(
                    det(mat2(row2.y, row2.z, row0.y, row0.z)),
                    det(mat2(row2.z, row2.x, row0.z, row0.x)),
                    det(mat2(row2.x, row2.y, row0.x, row0.y))
                );
                vec3 minors2 = vec3(
                    det(mat2(row0.y, row0.z, row1.y, row1.z)),
                    det(mat2(row0.z, row0.x, row1.z, row1.x)),
                    det(mat2(row0.x, row0.y, row1.x, row1.y))
                );
            
                mat3 adj = transpose(mat3(minors0, minors1, minors2));
            
                return (1.0 / dot(row0, minors0)) * adj;
            }
            
            void main(void) {
            
                vec3 dir = computeView(tc);
                dir = inverse(mat3(viewMatrix)) * dir;
                
                vec2 ER = sphIntersect(camPos, dir, vec3(0.0), earthRadius);
                
                float bigRadius = earthRadius * 2.5;
                vec3 bigCenter = normalize(camPos) * bigRadius * 1.3;                
                               
                vec2 BIG = sphIntersect(camPos, dir, bigCenter, bigRadius);
                
                float Ix = distance(camPos + dir * BIG.y, ZERO);               
                
                float maxI = sqrt(bigRadius * bigRadius + bigRadius * bigRadius);
                                   
                gl_FragColor = vec4(mix(colorOne, colorTwo, Ix / maxI), 1.0);
            }`})}const ol=23.4392911,qi=14959787e4;function ji(h){var e=h-en,t=282.9404+470935e-10*e,i=.016709-1151e-12*e,r=kr(356.047+.9856002585*e),s=ol-3563e-10*e,n=r+me*i*Math.sin(r*D)*(1+i*Math.cos(r*D)),a=Math.cos(n*D)-i,o=Math.sin(n*D)*Math.sqrt(1-i*i),l=Math.sqrt(a*a+o*o),c=Math.atan2(o,a)*me,d=kr(c+t);a=l*Math.cos(d*D),o=l*Math.sin(d*D);var f=a,_=o*Math.cos(s*D),g=o*Math.sin(s*D),v=Ji*(e*24/23.9344694-259.853/360);return N.zRotation(-v).mulVec3(new m(-f*qi,-_*qi,g*qi))}class Mi{constructor(e,t){this._name=e||"light_"+Mi.__counter__++,this._renderNode=null,this._position=t.position||new m,this.directional=t.directional!=null?t.directional:!0,this._ambient=t.ambient||new m,this._diffuse=t.diffuse||new m(.8,.8,.8),this._specular=t.specular||new m(.18,.18,.18),this._shininess=t.shininess!=null?t.shininess:3.3,this._active=!0,this._tempAmbient=this._ambient.clone(),this._tempDiffuse=this._diffuse.clone(),this._tempSpecular=this._specular.clone(),this._tempShininess=this._shininess}clone(){}setActive(e){if(e&&!this._active){const t=this._renderNode;if(t){let i=t._lightsNames.indexOf(this._name);this._shininess=t._lightsParamsf[i]=this._tempShininess,i!=-1&&(i*=9,this._ambient.x=t._lightsParamsv[i]=this._tempAmbient.x,this._ambient.y=t._lightsParamsv[i+1]=this._tempAmbient.y,this._ambient.z=t._lightsParamsv[i+2]=this._tempAmbient.z,this._diffuse.x=t._lightsParamsv[i+3]=this._tempDiffuse.x,this._diffuse.y=t._lightsParamsv[i+4]=this._tempDiffuse.y,this._diffuse.z=t._lightsParamsv[i+5]=this._tempDiffuse.z,this._specular.x=t._lightsParamsv[i+6]=this._tempSpecular.x,this._specular.y=t._lightsParamsv[i+7]=this._tempSpecular.y,this._specular.z=t._lightsParamsv[i+8]=this._tempSpecular.z)}this._active=!0}else!e&&this._active&&(this._tempAmbient=this._ambient.clone(),this._tempDiffuse=this._diffuse.clone(),this._tempSpecular=this._specular.clone(),this._tempShininess=this._shininess,this.setBlack(),this._active=!1)}isActive(){return this._active}setPosition3v(e){this._position.x=e.x,this._position.y=e.y,this._position.z=e.z}setPosition(e,t,i){this._position.x=e,this._position.y=t,this._position.z=i}getPosition(){return this._position.clone()}setAmbient3v(e){this.setAmbient(e.x,e.y,e.z)}setDiffuse3v(e){this.setDiffuse(e.x,e.y,e.z)}setSpecular3v(e){this.setSpecular(e.x,e.y,e.z)}setAmbient(e,t,i){this._ambient.set(e,t,i);const r=this._renderNode;if(r){let s=9*r._lightsNames.indexOf(this._name);s!=-1&&(r._lightsParamsv[s]=e,r._lightsParamsv[s+1]=t,r._lightsParamsv[s+2]=i)}}setDiffuse(e,t,i){this._diffuse.set(e,t,i);const r=this._renderNode;if(r){let s=9*r._lightsNames.indexOf(this._name);s!=-1&&(r._lightsParamsv[s+3]=e,r._lightsParamsv[s+4]=t,r._lightsParamsv[s+5]=i)}}setSpecular(e,t,i){this._specular.set(e,t,i);const r=this._renderNode;if(r){let s=9*r._lightsNames.indexOf(this._name);s!=-1&&(r._lightsParamsv[s+6]=e,r._lightsParamsv[s+7]=t,r._lightsParamsv[s+8]=i)}}setShininess(e){this._shininess=e;const t=this._renderNode;if(t){let i=t._lightsNames.indexOf(this._name);i!=-1&&(t._lightsParamsf[i]=e)}}setBlack(){this._ambient.clear(),this._diffuse.clear(),this._specular.clear(),this._shininess=0;const e=this._renderNode;if(e){let t=9*e._lightsNames.indexOf(this._name);t!==-1&&(e._lightsParamsv[t]=e._lightsParamsv[t+1]=e._lightsParamsv[t+2]=e._lightsParamsv[t+3]=e._lightsParamsv[t+4]=e._lightsParamsv[t+5]=e._lightsParamsv[t+6]=e._lightsParamsv[t+7]=e._lightsParamsv[t+8]=0)}}addTo(e){this._renderNode=e,e._lights.push(this),e._lightsNames.push(this._name),e._lightsParamsf.push(this._shininess),e._lightsParamsv.push.apply(e._lightsParamsv,this._ambient.toArray()),e._lightsParamsv.push.apply(e._lightsParamsv,this._diffuse.toArray()),e._lightsParamsv.push.apply(e._lightsParamsv,this._specular.toArray()),e.transformLights()}remove(){this._renderNode,this._renderNode=null}}Mi.__counter__=0;class xs extends Ie{constructor(e={}){super({autoActivate:!0,...e}),this._name="sun",this.activationHeight=e.activationHeight||12079e3,this.offsetVertical=e.offsetVertical||-5e6,this.offsetHorizontal=e.offsetHorizontal||5e6,this.sunlight=new Mi("Sun",{ambient:new m(.15,.15,.25),diffuse:new m(.9,.9,.8),specular:new m(.1,.1,.06),shininess:110}),this._currDate=0,this._prevDate=0,this._clockPtr=null,this._lightOn=!1,this._f=0,this._k=0,this._stopped=e.stopped||!1}oninit(){this.planet.lightEnabled=!0,this.sunlight.addTo(this.planet),this.renderer.events.on("draw",this._draw,this),this._clockPtr||(this._clockPtr=this.renderer.handler.defaultClock)}stop(){this._stopped=!0,this.deactivate()}start(){this._stopped=!1,this.activate()}onactivate(){super.onactivate(),this._stopped=!1}bindClock(e){this._clockPtr=e}_draw(){if(this._clockPtr)if(this._currDate=this._clockPtr.currentDate,this._stopped)this.sunlight.setPosition3v(ji(this._currDate));else{let e=this.planet.camera;if(e.getHeight()<this.activationHeight||!this._active){this._lightOn=!0,this._f=1;let t=e.eye.normal(),i=e.getForward();i.scale(Math.sign(e._u.dot(t))),e.slope>.99&&(i=e._u);let r=m.proj_b_to_plane(i,t,i).normalize().scale(this.offsetVertical),s=m.proj_b_to_plane(e._r,t,e._r).normalize().scale(this.offsetHorizontal),n=r.add(s),a=e.eye.add(n);if(this._k>0){this._k-=.01;let l=N.getRotationBetweenVectors(this.sunlight._position.normal(),a.normal()).slerp(N.IDENTITY,this._k).normalize();this.sunlight.setPosition3v(l.mulVec3(this.sunlight._position))}else this.sunlight.setPosition3v(a)}else if(this._k=1,this._f>0){this._f-=.01;let i=N.getRotationBetweenVectors(this.sunlight._position.normal(),ji(this._currDate).normal()).slerp(N.IDENTITY,this._f).normalize();this.sunlight.setPosition3v(i.mulVec3(this.sunlight._position))}else(Math.abs(this._currDate-this._prevDate)>34e-5&&this._active||this._lightOn)&&(this._lightOn=!1,this._prevDate=this._currDate,this.sunlight.setPosition3v(ji(this._currDate)),this._f=0)}}}class ys{constructor(){this.x=0,this.y=0,this.prev_x=0,this.prev_y=0,this.grabbedPoint=null,this.grabbedSpheroid=new nt,this._vec=new V,this._vecPrev=new V}get dY(){return this.y-this.prev_y}get dX(){return this.x-this.prev_x}get vec(){return this._vec.set(this.x,this.y)}get vecPrev(){return this._vecPrev.set(this.prev_x,this.prev_y)}}class ll extends Ie{constructor(e={}){super(e),this._name="touchNavigation",this.grabbedPoint=new m,this.inertia=.007,this.grabbedSpheroid=new nt,this.planet=null,this.qRot=new N,this.scaleRot=0,this.rot=1,this._eye0=new m,this.pointOnEarth=null,this.earthUp=null,this.touches=[new ys,new ys],this._keyLock=new lt,this._touching=!1}oninit(){this.renderer&&(this.renderer.events.on("touchstart",this.onTouchStart,this),this.renderer.events.on("touchend",this.onTouchEnd,this),this.renderer.events.on("doubletouch",this.onDoubleTouch,this),this.renderer.events.on("touchcancel",this.onTouchCancel,this),this.renderer.events.on("touchmove",this.onTouchMove,this),this.renderer.events.on("draw",this.onDraw,this))}onTouchStart(e){const t=this.renderer.handler;if(this._touching=!0,e.sys.touches.length===2){const i=this.touches[0],r=this.touches[1];i.x=(e.sys.touches.item(0).clientX-e.sys.offsetLeft)*t.pixelRatio,i.y=(e.sys.touches.item(0).clientY-e.sys.offsetTop)*t.pixelRatio,i.prev_x=i.x,i.prev_y=i.y,i.grabbedPoint=this.planet.getCartesianFromPixelTerrain(new V(i.x,i.y))||null,r.x=(e.sys.touches.item(1).clientX-e.sys.offsetLeft)*t.pixelRatio,r.y=(e.sys.touches.item(1).clientY-e.sys.offsetTop)*t.pixelRatio,r.prev_x=r.x,r.prev_y=r.y,r.grabbedPoint=this.planet.getCartesianFromPixelTerrain(new V(r.x,r.y))||null,this.pointOnEarth=this.planet.getCartesianFromPixelTerrain(this.renderer.handler.getCenter())||null,this.pointOnEarth&&(this.earthUp=this.pointOnEarth.normal()),i.grabbedPoint&&r.grabbedPoint&&(i.grabbedSpheroid.radius=i.grabbedPoint.length(),r.grabbedSpheroid.radius=r.grabbedPoint.length(),this.stopRotation())}else e.sys.touches.length===1&&this._startTouchOne(e)}_startTouchOne(e){const t=this.touches[0],i=this.renderer.handler;t.x=(e.sys.touches.item(0).clientX-e.sys.offsetLeft)*i.pixelRatio,t.y=(e.sys.touches.item(0).clientY-e.sys.offsetTop)*i.pixelRatio,t.prev_x=t.x,t.prev_y=t.y,t.grabbedPoint=this.planet.getCartesianFromPixelTerrain(e)||null,this._eye0.copy(this.planet.camera.eye),t.grabbedPoint&&(t.grabbedSpheroid.radius=t.grabbedPoint.length(),this.stopRotation())}stopRotation(){this.qRot.clear(),this.planet.layerLock.free(this._keyLock),this.planet.terrainLock.free(this._keyLock),this.planet._normalMapCreator.free(this._keyLock)}onDoubleTouch(e){this.planet.stopFlying(),this.stopRotation();const t=this.planet.getCartesianFromPixelTerrain(e);if(t){const i=this.planet.ellipsoid.cartesianToLonLat(t);this.planet.flyLonLat(new P(i.lon,i.lat,this.planet.camera.eye.distance(t)*.57))}}onTouchEnd(e){e.sys.touches.length===0&&(this._touching=!1),e.sys.touches.length===1&&this._startTouchOne(e),Math.abs(this.touches[0].x-this.touches[0].prev_x)<3&&Math.abs(this.touches[0].y-this.touches[0].prev_y)<3&&(this.scaleRot=0)}onTouchCancel(e){}onTouchMove(e){let t=this.planet.camera;const i=this.renderer.handler;if(e.sys.touches.length===2){this.renderer.controlsBag.scaleRot=1;let s=this.touches[0],n=this.touches[1];if(!s.grabbedPoint||!n.grabbedPoint)return;this.planet.stopFlying(),s.prev_x=s.x,s.prev_y=s.y,s.x=(e.sys.touches.item(0).clientX-e.sys.offsetLeft)*i.pixelRatio,s.y=(e.sys.touches.item(0).clientY-e.sys.offsetTop)*i.pixelRatio,n.prev_x=n.x,n.prev_y=n.y,n.x=(e.sys.touches.item(1).clientX-e.sys.offsetLeft)*i.pixelRatio,n.y=(e.sys.touches.item(1).clientY-e.sys.offsetTop)*i.pixelRatio;const a=s.vec.add(n.vec).scale(.5),o=this.planet.getCartesianFromPixelTerrain(a);if(o){this.pointOnEarth=o;const l=Math.atan2(s.prev_y-n.prev_y,s.prev_x-n.prev_x),d=Math.atan2(s.y-n.y,s.x-n.x)-l,f=t.eye.distance(this.pointOnEarth),_=s.vec.sub(n.vec),g=s.vecPrev.sub(n.vecPrev),v=_.length()/g.length();let u=f*-(1-v);t.eye.addA(t.getForward().scale(u)),t.rotateAround(-d,!1,this.pointOnEarth,this.earthUp);const p=s.vec.add(n.vec).scale(.5),b=s.vecPrev.add(n.vecPrev).scale(.5),w=p.sub(b).scale(-1);var r=.5/f*t._lonLat.height*D;r>.003&&(r=.003),t.rotateHorizontal(r*-w.x,!1,this.pointOnEarth,this.earthUp),t.rotateVertical(r*-w.y,this.pointOnEarth),t.checkTerrainCollision(),t.update()}this.scaleRot=0}else if(e.sys.touches.length===1){let s=this.touches[0];if(s.prev_x=s.x,s.prev_y=s.y,s.x=(e.sys.touches.item(0).clientX-e.sys.offsetLeft)*i.pixelRatio,s.y=(e.sys.touches.item(0).clientY-e.sys.offsetTop)*i.pixelRatio,!s.grabbedPoint)return;this.planet.stopFlying();let n=e.direction,a=new re(t.eye,n).hitSphere(s.grabbedSpheroid);if(a)if(t.slope>.2){this.qRot=N.getRotationBetweenVectors(a.normal(),s.grabbedPoint.normal());let o=this.qRot;t.eye=o.mulVec3(t.eye),t._r=o.mulVec3(t._r),t._u=o.mulVec3(t._u),t._b=o.mulVec3(t._b),t.checkTerrainCollision(),t.update(),this.scaleRot=1}else{let o=s.grabbedPoint,l=m.add(o,t._u),c=m.add(o,o.normal()),d=t.unproject(s.x,s.y),f=new m;new re(t.eye,d).hitPlane(o,l,c,f)===re.INSIDE&&(t.eye=this._eye0.addA(f.subA(o).negate()),t.checkTerrainCollision(),t.update(),this.scaleRot=0)}}}onDraw(){const e=this.renderer;if(e.controlsBag.scaleRot=this.scaleRot,this._touching)return;let t=this.planet.camera,i=t.eye.clone();if(!(e.events.mouseState.leftButtonDown||!this.scaleRot)){if(this.scaleRot-=this.inertia,this.scaleRot<=0)this.scaleRot=0;else{e.controlsBag.scaleRot=this.scaleRot;let r=this.qRot.slerp(N.IDENTITY,1-this.scaleRot*this.scaleRot*this.scaleRot).normalize();r.x||r.y||r.z||(this.scaleRot=0),t.eye=r.mulVec3(t.eye),t._r=r.mulVec3(t._r),t._u=r.mulVec3(t._u),t._b=r.mulVec3(t._b),t.checkTerrainCollision(),t.update()}t.eye.distance(i)/t.getAltitude()>.01?(this.planet.layerLock.lock(this._keyLock),this.planet.terrainLock.lock(this._keyLock),this.planet._normalMapCreator.lock(this._keyLock)):(this.planet.layerLock.free(this._keyLock),this.planet.terrainLock.free(this._keyLock),this.planet._normalMapCreator.free(this._keyLock))}}}const hl='<?xml version="1.0"?><svg width=24 height=24 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">    <path d="M 11 5 L 11 11 L 5 11 L 5 13 L 11 13 L 11 19 L 13 19 L 13 13 L 19 13 L 19 11 L 13 11 L 13 5 L 11 5 z"/></svg>',cl='<?xml version="1.0"?><svg width=24 height=24 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">    <path d="M 5 11 L 5 13 L 19 13 L 19 11 L 5 11 z"/></svg>';class dl extends Ie{constructor(e={}){super(e),this._keyLock=new lt,this._move=0,this._targetPoint=null}oninit(){let e=new vi({classList:["og-map-button","og-zoomin-button"],icon:hl});e.appendTo(this.renderer.div);let t=new vi({classList:["og-map-button","og-zoomout-button"],icon:cl});t.appendTo(this.renderer.div),e.events.on("mousedown",()=>this.zoomIn()),e.events.on("mouseup",()=>this.stopZoom()),t.events.on("mousedown",()=>this.zoomOut()),t.events.on("mouseup",()=>this.stopZoom()),e.events.on("touchstart",()=>this.zoomIn()),e.events.on("touchend",()=>this.stopZoom()),e.events.on("touchcancel",()=>this.stopZoom()),t.events.on("touchstart",()=>this.zoomOut()),t.events.on("touchend",()=>this.stopZoom()),t.events.on("touchcancel",()=>this.stopZoom()),this.renderer.events.on("draw",this._draw,this)}zoomIn(){this.planet.layerLock.lock(this._keyLock),this.planet.terrainLock.lock(this._keyLock),this.planet._normalMapCreator.lock(this._keyLock),this._targetPoint=this.renderer.getCenter(),this._move=1}zoomOut(){this.planet.layerLock.lock(this._keyLock),this.planet.terrainLock.lock(this._keyLock),this.planet._normalMapCreator.lock(this._keyLock),this._targetPoint=this.renderer.getCenter(),this._move=-1}stopZoom(){this._move=0,this.planet.layerLock.free(this._keyLock),this.planet.terrainLock.free(this._keyLock),this.planet._normalMapCreator.free(this._keyLock)}_draw(e){const t=this.planet.camera;if(this._move!==0){const i=this.planet.getCartesianFromPixelTerrain(e.getCenter());if(i){let r=t.eye.distance(i)*.035;t.eye.addA(t.getForward().scale(this._move*r)),t.checkTerrainCollision(),t.update()}}}}class Yi{constructor(){this.resolve=()=>{},this.reject=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t}),Object.freeze(this)}}Z.createCylinder(.33,0,1,20,1,!0,!1,0,0,0);Z.createCylinder(.33,.33,1.1,20,1,!0,!0,0,-.55,0);function Ft(h){return new Uint32Array(h)}function fl(h){return new Uint32Array(h)}function ul(h){let e=[],t=1,i=1,r=1,s=1,n=0,a=0,o=0;for(let l=t;l<h-1-r;l++){for(let c=i;c<h-s;c++)n=l*h+c,o=(l+1)*h,a=o+c,e.push(n,a);e.push(a,o+i)}return e.push(e[e.length-1],h*h-h),Ft(e)}function _l(h,e){let t=[];const i=(h-1)/e,r=h*h-h;let s=0;for(let n=0;n<h-2;n++){n%i===0&&(s=n);let a=r-h*n-h+1,o=r-h*s;t.push(o,a)}return e===h-1&&(t.push(h),t.push(0)),Ft(t)}function gl(h,e){let t=[];const i=(h-1)/e;let r=0;for(let s=0;s<h-2;s++){s%i===0&&(r=s);let n=h+s+1,a=r;t.push(a,n)}return e===h-1&&(t.push(h-2),t.push(h-1)),Ft(t)}function ml(h,e){let t=[];const i=(h-1)/e;let r=0;for(let s=0;s<h-2;s++){s%i===0&&(r=s);let n=h*(s+1)+h-2,a=h+h*r-1;t.push(a,n)}return e===h-1&&(t.push(h*(h-1)-1),t.push(h*h-1)),Ft(t)}function pl(h,e){let t=[];const i=(h-1)/e;let r=0;const s=h*(h-1)-2,n=h*h-1;for(let a=0;a<h-2;a++){a%i===0&&(r=a);let o=s-a,l=n-r;t.push(l,o)}return e===h-1&&t.push(h*h-h+1),t.push(h*h-h),Ft(t)}function bs(h){let e=[[],[],[],[]];for(let t=0;t<=h;t++){let i=Math.pow(2,t),r=i+1;e[Q][t]=[],e[ie][t]=[],e[J][t]=[],e[te][t]=[];for(let s=0;s<=h;s++){let n=Math.pow(2,s);e[ie][t][s]=_l(r,n),e[Q][t][s]=gl(r,n),e[te][t][s]=ml(r,n),e[J][t][s]=pl(r,n)}}return e}function ws(h){let e=[];for(let t=0;t<=h;t++){const i=Math.pow(2,t);e[t]=ul(i+1)}return e}function vl(h){let e=new Uint16Array((h+1)*(h+1)*2),t=0;for(let i=0;i<=h;i++)for(let r=0;r<=h;r++)e[t++]=r/h*65535,e[t++]=i/h*65535;return e}class xl{constructor(e=0){this._maxGridSize=e,this.centerIndexesTable=ws(this._maxGridSize),this.skirtsIndexesTable=bs(this._maxGridSize)}get maxGridSize(){return this._maxGridSize}init(){this.centerIndexesTable=ws(this._maxGridSize),this.skirtsIndexesTable=bs(this._maxGridSize)}setMaxGridSize(e){this._maxGridSize=e,this.init()}createSegmentIndexes(e,t){if(e){let i=this.centerIndexesTable[e],r=this.skirtsIndexesTable[ie][e][t[ie]],s=this.skirtsIndexesTable[Q][e][t[Q]],n=this.skirtsIndexesTable[te][e][t[te]],a=this.skirtsIndexesTable[J][e][t[J]],o=fl(i.length+r.length+s.length+n.length+a.length);return o.set(i,0),o.set(r,i.length),o.set(s,i.length+r.length),o.set(n,i.length+r.length+s.length),o.set(a,i.length+r.length+s.length+n.length),o}else return Ft([0,2,1,3])}initTextureCoordsTable(e){let t=[];for(let i=0;i<=e;i++){const r=Math.pow(2,i);t[i]=vl(r)}return t}}let yl=new xl;function mi(){return yl}const Er=`
    float getLerpValue(in float min, in float max, in float between)
    {
        return (clamp(between, min, max) - min) / (max - min);
    }
    
    vec3 aces(vec3 color) 
    {
        float a = 2.51;
        float b = 0.03;
        float c = 2.43;
        float d = 0.59;
        float e = 0.14;
        return clamp((color * (a * color + b)) / (color * (c * color + d ) + e), 0.0, 1.0);
    }
     
    bool intersectSphere(vec3 rayOrigin, vec3 rayDirection, float radius, inout float t1, inout float t2) 
    {
        float b = dot(rayDirection, rayOrigin);
        float c = dot(rayOrigin, rayOrigin) - radius * radius;
        float d = b * b - c;
        if (d < 0.0) {
            return false;
        }
        t1 = -b - sqrt(d);
        t2 = -b + sqrt(d);
        return true;
    }
    
    bool intersectSphere(vec3 rayOrigin, vec3 rayDirection, float radius, inout float t) 
    {
        float b = dot(rayDirection, rayOrigin);
        float c = dot(rayOrigin, rayOrigin) - radius * radius;
        float d = b * b - c;
        if (d < 0.0) {
            return false;
        }
        t = -b - sqrt(d);
        return true;
    }
    
    bool intersectEllipsoid( in vec3 ro, in vec3 rd, in vec3 ra, inout float t )
    {
        vec3 ocn = ro/ra;
        vec3 rdn = rd/ra;
        float a = dot( rdn, rdn );
        float b = dot( ocn, rdn );
        float c = dot( ocn, ocn );
        float h = b*b - a*(c-1.0);
                       
        if (h < 0.0) 
        { 
            return false; 
        }
        
        t = (-b-sqrt(h))/a;
        
        return true;
    }
    
    bool intersectEllipsoid( in vec3 ro, in vec3 rd, in vec3 ra, inout float t1, inout float t2)
    {
        vec3 ocn = ro/ra;
        vec3 rdn = rd/ra;
        float a = dot( rdn, rdn );
        float b = dot( ocn, rdn );
        float c = dot( ocn, ocn );
        float h = b*b - a*(c-1.0);
                
        if (h < 0.0) 
        { 
            return false; 
        }
        
        h = sqrt(h);
        t1 = (-b-h)/a;
        t2 = (-b+h)/a;
        
        return true;
    }
    
    vec3 normalEllipsoid( in vec3 pos, in vec3 ra )
    {
        return normalize( pos/(ra*ra) );
    }
`,bl={ATMOS_HEIGHT:1e5,RAYLEIGH_SCALE:.08,MIE_SCALE:.012,GROUND_ALBEDO:.05,BOTTOM_RADIUS:6356752314245179e-9,rayleighScatteringCoefficient:[5.802,13.558,33.1],mieScatteringCoefficient:3.996,mieExtinctionCoefficient:4.44,ozoneAbsorptionCoefficient:[.65,1.881,.085],SUN_ANGULAR_RADIUS:.004685,SUN_INTENSITY:1,ozoneDensityHeight:25e3,ozoneDensityWide:15e3},Ii=(h=bl)=>`    
    ${Er}
    
    #define PI 3.1415926538
    #define ATMOS_HEIGHT ${h.ATMOS_HEIGHT.toFixed(2)}
    #define RAYLEIGH_SCALE ${h.RAYLEIGH_SCALE.toFixed(5)}
    #define MIE_SCALE ${h.MIE_SCALE.toFixed(5)}
    
    #define SAMPLE_COUNT 16
    #define SQRT_SAMPLE_COUNT 4
            
    const float GROUND_ALBEDO = ${h.GROUND_ALBEDO.toFixed(2)} / PI;

    // Sphere
    const float BOTTOM_RADIUS = ${h.BOTTOM_RADIUS.toFixed(10)};
    const float TOP_RADIUS = BOTTOM_RADIUS + ATMOS_HEIGHT;   
    const float EQUATORIAL_RADIUS = 6378137.0;
    
    // Ellipsoid
    const vec3 bottomRadii = vec3(EQUATORIAL_RADIUS, EQUATORIAL_RADIUS, BOTTOM_RADIUS);           
    const vec3 topRadii = bottomRadii + ATMOS_HEIGHT;
    
    const vec3 SPHERE_TO_ELLIPSOID_SCALE = vec3(BOTTOM_RADIUS) / bottomRadii;           
    
    const vec2 rayleighMieHeights = vec2(RAYLEIGH_SCALE, MIE_SCALE) * ATMOS_HEIGHT;
     
    const vec3 rayleighScatteringCoefficient = vec3(${h.rayleighScatteringCoefficient[0].toFixed(5)}, ${h.rayleighScatteringCoefficient[1].toFixed(5)}, ${h.rayleighScatteringCoefficient[2].toFixed(5)}) * 1e-6;
    
    const float mieScatteringCoefficient = ${h.mieScatteringCoefficient.toFixed(3)} * 1e-6;
    const float mieExtinctionCoefficient = ${h.mieExtinctionCoefficient.toFixed(3)} * 1e-6;
    const vec3 ozoneAbsorptionCoefficient = vec3(${h.ozoneAbsorptionCoefficient[0].toFixed(5)}, ${h.ozoneAbsorptionCoefficient[1].toFixed(5)}, ${h.ozoneAbsorptionCoefficient[2].toFixed(5)}) * 1e-6;
    
    const float SUN_ANGULAR_RADIUS = ${h.SUN_ANGULAR_RADIUS.toFixed(10)};
    const float SUN_INTENSITY = ${h.SUN_INTENSITY.toFixed(2)};        
    
    const float ozoneDensityHeight = ${h.ozoneDensityHeight.toFixed(1)};//25e3;
    const float ozoneDensityWide = ${h.ozoneDensityWide.toFixed(1)};//15e3;
    
    vec3 sunWithBloom(vec3 rayDir, vec3 sunDir) 
    {
        float minSunCosTheta = cos(SUN_ANGULAR_RADIUS);            
        float cosTheta = dot(rayDir, sunDir);
        if (cosTheta >= minSunCosTheta) return vec3(1.0);                
        float offset = minSunCosTheta - cosTheta;
        float gaussianBloom = exp(-offset*15000.0)*0.7;
        float invBloom = 1.0/(0.09 + offset*200.0)*0.01;
        return vec3(gaussianBloom + invBloom);
    }
    
    float rayleighPhase(float angle) 
    {
        return 3.0 / (16.0 * PI) * (1.0 + (angle * angle));
    }
    
    float miePhase(float angle) 
    {
        float g = 0.8;
        return 3.0 / (8.0 * PI) * ((1.0 - g * g) * (1.0 + angle * angle)) / ((2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * angle, 1.5));
    }
        
    vec3 opticalDepth(float height, float angle) 
    {
        vec3 rayOrigin = vec3(0.0, BOTTOM_RADIUS + height, 0.0);
        vec3 rayDirection = vec3(sqrt(1.0 - angle * angle), angle, 0.0);
        float t1, t2;
        intersectSphere(rayOrigin, rayDirection, TOP_RADIUS, t1, t2);
        float segmentLength = t2 / float(SAMPLE_COUNT);
        
        float t = segmentLength * 0.5;
        vec3 opticalDepth = vec3(0.0);
        
        for (int i = 0; i < SAMPLE_COUNT; i++) 
        {
            vec3 position = rayOrigin + t * rayDirection;
            float height = length(position) - BOTTOM_RADIUS;
            opticalDepth.xy += exp(-height / rayleighMieHeights) * segmentLength;
            opticalDepth.z += (1.0 - min(abs(height - ozoneDensityHeight) / ozoneDensityWide, 1.0)) * segmentLength;  
            t += segmentLength;
        }
        
        return opticalDepth;
    }
    
    vec3 transmittance(float height, float angle) 
    {
        vec3 opticalDepth = opticalDepth(height, angle);
        return exp(-(rayleighScatteringCoefficient * opticalDepth.x + mieExtinctionCoefficient * opticalDepth.y + ozoneAbsorptionCoefficient * opticalDepth.z));
    }`;function wl(h){return new G("transmittance",{uniforms:{iResolution:"vec2"},attributes:{a_position:"vec2"},vertexShader:`
            attribute vec2 a_position;
            
            void main(void) 
            {
                gl_Position = vec4(a_position, 0.0, 1.0);
            }`,fragmentShader:`
            precision highp float;
            
            ${Ii(h)}
                       
            uniform vec2 iResolution;
                        
            void main(void) 
            {
                vec2 uv = gl_FragCoord.xy / iResolution.xy;
                float height = uv.y * ATMOS_HEIGHT;
                float angle = uv.x * 2.0 - 1.0;
                gl_FragColor = vec4(transmittance(height, angle), 1.0);
            }`})}function Tl(h){return new G("scattering",{uniforms:{iResolution:"vec2",transmittanceTexture:"sampler2d"},attributes:{a_position:"vec2"},vertexShader:`            
            attribute vec2 a_position;  
                      
            void main(void) 
            {
                gl_Position = vec4(a_position, 0.0, 1.0);
            }`,fragmentShader:`            
            precision highp float;
            
            uniform sampler2D transmittanceTexture;
            uniform vec2 iResolution;
            
            ${Ii(h)}
            
            vec3 transmittanceFromTexture(float height, float angle) 
            {
                float u = (angle + 1.0) * 0.5;
                float v = height / ATMOS_HEIGHT;
                return texture2D(transmittanceTexture, vec2(u, v)).xyz;
            }
                                   
            void main(void) 
            {
                vec2 uv = gl_FragCoord.xy / iResolution.xy;
                
                float height = uv.y * ATMOS_HEIGHT;
                float angle = uv.x * 2.0 - 1.0;
                
                vec3 rayOrigin = vec3(0.0, BOTTOM_RADIUS + height, 0.0);
                vec3 up = rayOrigin / length(rayOrigin);
                vec3 lightDirection = vec3(sqrt(1.0 - angle * angle), angle, 0.0);
                                
                const float isotropicPhase = 1.0 / (4.0 * PI);
                
                vec3 light = vec3(0.0);
                vec3 lightTransferFactor = vec3(0.0);
                
                for (int i = 0; i < SQRT_SAMPLE_COUNT; i++)
                {
                    for (int j = 0; j < SQRT_SAMPLE_COUNT; j++)
                    {
                        float u = ((0.5 + float(i)) / float(SQRT_SAMPLE_COUNT)) * 2.0 - 1.0;
                        float v = (0.5 + float(j)) / float(SQRT_SAMPLE_COUNT);
                        float r = sqrt(1.0 - u * u);
                        float theta = 2.0 * PI * v;
                        vec3 rayDirection = vec3(cos(theta) * r, sin(theta) * r, u);
                                                
                        float rayAngle = dot(up, rayDirection);
                        bool cameraBelow = rayAngle < 0.0;
                        
                        vec3 transmittanceFromCameraToSpace = transmittanceFromTexture(height, cameraBelow ? -rayAngle : rayAngle);
                        
                        float offset = 0.0;
                        float distanceToSpace = 0.0;
                        
                        intersectSphere(rayOrigin, rayDirection, TOP_RADIUS, offset, distanceToSpace);
                        
                        float distanceToGround = 0.0;
                        bool hitGround = intersectSphere(rayOrigin, rayDirection, BOTTOM_RADIUS, distanceToGround) && distanceToGround > 0.0;                        
                        float segmentLength = (hitGround ? distanceToGround : distanceToSpace) / float(SAMPLE_COUNT);
                        float t = segmentLength * 0.5;
                        
                        vec3 transmittanceCamera;
                        vec3 transmittanceLight;
                         
                        for (int k = 0; k < SAMPLE_COUNT; k++) 
                        {
                            vec3 position = rayOrigin + t * rayDirection;
                            float height = length(position) - BOTTOM_RADIUS;
                            vec3 up = position / length(position);
                            float rayAngle = dot(up, rayDirection);
                            float lightAngle = dot(up, lightDirection);
                            
                            float distanceToGround;
                            float shadow = intersectSphere(position, lightDirection, BOTTOM_RADIUS, distanceToGround) && distanceToGround >= 0.0 ? 0.0 : 1.0;
                            vec3 transmittanceToSpace = transmittanceFromTexture(height, cameraBelow ? -rayAngle : rayAngle);
                            
                            transmittanceCamera = cameraBelow ? (transmittanceToSpace / transmittanceFromCameraToSpace) : (transmittanceFromCameraToSpace / transmittanceToSpace);
                            transmittanceLight = transmittanceFromTexture(height, lightAngle);
                            
                            vec2 opticalDensity = exp(-height / rayleighMieHeights);        
                            vec3 scatteredLight = transmittanceLight * (rayleighScatteringCoefficient * opticalDensity.x + mieScatteringCoefficient * opticalDensity.y) * isotropicPhase;
                            
                            light += shadow * transmittanceCamera * scatteredLight * segmentLength;
                            lightTransferFactor += transmittanceCamera * (rayleighScatteringCoefficient * opticalDensity.x + mieScatteringCoefficient * opticalDensity.y) * segmentLength;
                            
                            t += segmentLength;
                        }
                    
                        if (hitGround) 
                        {
                            vec3 hitPoint = rayOrigin + rayDirection * distanceToGround;
                            vec3 normal = normalize(hitPoint);
                            float diffuseAngle = max(dot(normal, lightDirection), 0.0); 
                            light += transmittanceCamera * transmittanceLight * GROUND_ALBEDO * diffuseAngle;
                        }
                    }
                }
                
                light /= float(SAMPLE_COUNT);
                lightTransferFactor /= float(SAMPLE_COUNT);
                vec3 color = light / (1.0 - lightTransferFactor);                 
                gl_FragColor = vec4(color, 1.0);
            }`})}const Cr="const vec3 nightStep = 10.0 * vec3(0.58, 0.48, 0.25);",Sn="#define blend(DEST, SAMPLER, OFFSET, OPACITY)                     src = texture( SAMPLER, OFFSET.xy + vTextureCoord.xy * OFFSET.zw );                    DEST = DEST * (1.0 - src.a * OPACITY) + src * OPACITY;",Rn="#define blend(DEST, SAMPLER, OFFSET, OPACITY)                             src = texture2D( SAMPLER, OFFSET.xy + vTextureCoord.xy * OFFSET.zw );                             DEST = DEST * (1.0 - src.a * OPACITY) + src * OPACITY;",Al="#define blendPicking(DEST, OFFSET, SAMPLER, MASK, COLOR, OPACITY)     tc = OFFSET.xy + vTextureCoord.xy * OFFSET.zw;     t = texture2D(SAMPLER, tc);     p = texture2D(MASK, tc);     DEST = mix(DEST, vec4(max(COLOR.rgb, p.rgb), OPACITY), (t.a == 0.0 ? 0.0 : 1.0) * COLOR.a);",ri=4;function El(){return new G("drawnode_screen_nl",{uniforms:{projectionMatrix:"mat4",viewMatrix:"mat4",eyePositionHigh:"vec3",eyePositionLow:"vec3",samplerCount:"int",tileOffsetArr:"vec4",layerOpacityArr:"float",samplerArr:"sampler2darray",defaultTexture:"sampler2d",height:"float"},attributes:{aVertexPositionHigh:"vec3",aVertexPositionLow:"vec3",aTextureCoord:"vec2"},vertexShader:`precision highp float;
            
            attribute vec3 aVertexPositionHigh;
            attribute vec3 aVertexPositionLow;
            attribute vec2 aTextureCoord;

            uniform mat4 projectionMatrix;
            uniform mat4 viewMatrix;
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;
            uniform float height;

            varying vec2 vTextureCoord;

            void main(void) {

                vTextureCoord = aTextureCoord;
                vec3 nh = height * normalize(aVertexPositionHigh + aVertexPositionLow);

                mat4 viewMatrixRTE = viewMatrix;
                viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);
                mat4 m = projectionMatrix * viewMatrixRTE;
        
                vec3 highDiff = aVertexPositionHigh - eyePositionHigh;
                vec3 lowDiff = aVertexPositionLow - eyePositionLow + nh;
                
                // This is works for Mac Chrome, prevent some weird optimization I suppose
                gl_Position =  m * vec4(highDiff * step(1.0, length(highDiff)) + lowDiff, 1.0);
            }`,fragmentShader:`precision highp float;
            #define SLICE_SIZE ${ri+1}
            uniform vec4 tileOffsetArr[SLICE_SIZE];
            uniform float layerOpacityArr[SLICE_SIZE];
            uniform sampler2D defaultTexture;
            uniform sampler2D samplerArr[SLICE_SIZE];
            uniform int samplerCount;
            varying vec2 vTextureCoord;

            ${Rn}

            void main(void) {
                gl_FragColor = texture2D( defaultTexture, vTextureCoord );
                if( samplerCount == 0 ) return;

                vec4 src;

                blend(gl_FragColor, samplerArr[0], tileOffsetArr[0], layerOpacityArr[0]);
                if( samplerCount == 1 ) return;

                blend(gl_FragColor, samplerArr[1], tileOffsetArr[1], layerOpacityArr[1]);
                if( samplerCount == 2 ) return;

                blend(gl_FragColor, samplerArr[2], tileOffsetArr[2], layerOpacityArr[2]);
                if( samplerCount == 3 ) return;

                blend(gl_FragColor, samplerArr[3], tileOffsetArr[3], layerOpacityArr[3]);
                if( samplerCount == 4 ) return;

                blend(gl_FragColor, samplerArr[4], tileOffsetArr[4], layerOpacityArr[4]);
            }`})}function Ts(){return new G("drawnode_screen_wl",{uniforms:{projectionMatrix:"mat4",viewMatrix:"mat4",eyePositionHigh:"vec3",eyePositionLow:"vec3",height:"float",uGlobalTextureCoord:"vec4",uNormalMapBias:"vec3",samplerCount:"int",tileOffsetArr:"vec4",layerOpacityArr:"float",samplerArr:"sampler2darray",defaultTexture:"sampler2d",uNormalMap:"sampler2d",nightTexture:"sampler2d",specularTexture:"sampler2d",lightsPositions:"vec3",diffuse:"vec3",ambient:"vec3",specular:"vec4",camHeight:"float",nightTextureCoefficient:"float"},attributes:{aVertexPositionHigh:"vec3",aVertexPositionLow:"vec3",aTextureCoord:"vec2"},vertexShader:`
            attribute vec3 aVertexPositionHigh;
            attribute vec3 aVertexPositionLow;
            attribute vec2 aTextureCoord;

            uniform mat4 projectionMatrix;
            uniform mat4 viewMatrix;
            uniform vec4 uGlobalTextureCoord;
            uniform vec3 uNormalMapBias;
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;
            uniform float height;

            varying vec4 vTextureCoord;
            varying vec3 v_vertex;
            varying vec3 cameraPosition;
            varying vec2 vGlobalTextureCoord;
            varying float v_height;

            void main(void) {

                vec3 aVertexPosition = aVertexPositionHigh + aVertexPositionLow;                
                vec3 nh = height * normalize(aVertexPosition);

                vTextureCoord.xy = aTextureCoord;
                vGlobalTextureCoord = uGlobalTextureCoord.xy + (uGlobalTextureCoord.zw - uGlobalTextureCoord.xy) * aTextureCoord;
                vTextureCoord.zw = uNormalMapBias.z * ( aTextureCoord + uNormalMapBias.xy );

                cameraPosition = eyePositionHigh + eyePositionLow;
                
                vec3 highDiff = aVertexPositionHigh - eyePositionHigh;
                vec3 lowDiff = aVertexPositionLow - eyePositionLow + nh;

                mat4 viewMatrixRTE = viewMatrix;
                viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                v_height = height;
                v_vertex = aVertexPosition + nh;
                            
                gl_Position = projectionMatrix * viewMatrixRTE * vec4(highDiff * step(1.0, length(highDiff)) + lowDiff, 1.0);
            }`,fragmentShader:`
            precision highp float;
            
            #define MAX_POINT_LIGHTS 1
            #define SLICE_SIZE ${ri+1}

            uniform vec4 specular;
            uniform vec3 diffuse;
            uniform vec3 ambient;

            uniform sampler2D uNormalMap;
            uniform sampler2D nightTexture;
            uniform sampler2D specularTexture;
            uniform sampler2D defaultTexture;
            uniform sampler2D samplerArr[SLICE_SIZE];

            uniform vec4 tileOffsetArr[SLICE_SIZE];
            uniform vec3 lightsPositions[MAX_POINT_LIGHTS];
            uniform float layerOpacityArr[SLICE_SIZE];

            uniform int samplerCount;
            uniform float nightTextureCoefficient;              
            uniform float camHeight;

            varying vec4 vTextureCoord;
            varying vec3 v_vertex;
            varying vec3 cameraPosition;
            varying vec2 vGlobalTextureCoord;
            varying float v_height;

            vec3 sunPos;

            ${Cr}

            ${Rn}
            
            ${Er}
                                               
            void main(void) {
            
                sunPos = lightsPositions[0];
                                
                vec3 texNormal = texture2D(uNormalMap, vTextureCoord.zw).rgb;
                vec3 normal = normalize((texNormal - 0.5) * 2.0);
                
                float minH = 1200000.0;
                float maxH = minH * 3.0;
                float nightCoef = getLerpValue(minH, maxH, camHeight) * nightTextureCoefficient;
                                
                // if(camHeight > 6000000.0)
                // {
                //     normal = normalize(v_vertex);
                // }
                                            
                vec3 lightDir = normalize(sunPos);
                vec3 viewDir = normalize(cameraPosition - v_vertex);
                                                
                float overGround = 1.0 - step(0.1, v_height);

                float shininess = texture2D( specularTexture, vGlobalTextureCoord.st ).r * 255.0 * overGround;
                vec3 reflectionDirection = reflect(-lightDir, normal);
                float reflection = max( dot(reflectionDirection, viewDir), 0.0);
                vec3 spec = specular.rgb * pow( reflection, specular.w) * shininess;                
                float diffuseLightWeighting = max(dot(normal, lightDir), 0.0);                
                vec4 nightImageColor = texture2D( nightTexture, vGlobalTextureCoord.st );
                vec3 night = nightStep * (.18 - diffuseLightWeighting * 3.0) * nightImageColor.rgb * nightCoef;
                night *= overGround * step(0.0, night);                
                vec4 lightWeighting = vec4(ambient + diffuse * diffuseLightWeighting + night, 1.0);
                
                gl_FragColor = texture2D( defaultTexture, vTextureCoord.xy );
                if( samplerCount == 0 ) {
                    gl_FragColor = gl_FragColor * lightWeighting + vec4(spec, 0.0);
                    return;
                }

                vec4 src;

                blend(gl_FragColor, samplerArr[0], tileOffsetArr[0], layerOpacityArr[0]);
                if( samplerCount == 1 ) {                
                    gl_FragColor = gl_FragColor * lightWeighting + vec4(spec, 0.0);
                    return;
                }

                blend(gl_FragColor, samplerArr[1], tileOffsetArr[1], layerOpacityArr[1]);
                if( samplerCount == 2 ) {
                    gl_FragColor = gl_FragColor * lightWeighting + vec4(spec, 0.0);
                    return;
                }

                blend(gl_FragColor, samplerArr[2], tileOffsetArr[2], layerOpacityArr[2]);
                if( samplerCount == 3 ) {
                    gl_FragColor = gl_FragColor * lightWeighting + vec4(spec, 0.0);
                    return;
                }

                blend(gl_FragColor, samplerArr[3], tileOffsetArr[3], layerOpacityArr[3]);
                if( samplerCount == 4 ) {
                    gl_FragColor = gl_FragColor * lightWeighting + vec4(spec, 0.0);
                    return;
                }

                blend(gl_FragColor, samplerArr[4], tileOffsetArr[4], layerOpacityArr[4]);
                gl_FragColor = gl_FragColor * lightWeighting + vec4(spec, 0.0);
            }`})}function Cl(){return new G("drawnode_screen_wl",{uniforms:{projectionMatrix:"mat4",viewMatrix:"mat4",eyePositionHigh:"vec3",eyePositionLow:"vec3",height:"float",uGlobalTextureCoord:"vec4",uNormalMapBias:"vec3",samplerCount:"int",tileOffsetArr:"vec4",layerOpacityArr:"float",samplerArr:"sampler2darray",defaultTexture:"sampler2d",uNormalMap:"sampler2d",nightTexture:"sampler2d",specularTexture:"sampler2d",lightsPositions:"vec3",diffuse:"vec3",ambient:"vec3",specular:"vec4",camHeight:"float",nightTextureCoefficient:"float",transitionOpacity:"float"},attributes:{aVertexPositionHigh:"vec3",aVertexPositionLow:"vec3",aTextureCoord:"vec2"},vertexShader:`#version 300 es

            precision highp float;

            in vec3 aVertexPositionHigh;
            in vec3 aVertexPositionLow;
            in vec2 aTextureCoord;

            uniform mat4 projectionMatrix;
            uniform mat4 viewMatrix;
            uniform vec4 uGlobalTextureCoord;
            uniform vec3 uNormalMapBias;
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;
            uniform float height;

            out vec4 vTextureCoord;
            out vec3 v_vertex;
            out vec3 cameraPosition;
            out vec2 vGlobalTextureCoord;
            out float v_height;

            void main(void) {

                vec3 aVertexPosition = aVertexPositionHigh + aVertexPositionLow;                
                vec3 nh = height * normalize(aVertexPosition);
                
                vTextureCoord.xy = aTextureCoord;
                vGlobalTextureCoord = uGlobalTextureCoord.xy + (uGlobalTextureCoord.zw - uGlobalTextureCoord.xy) * aTextureCoord;
                vTextureCoord.zw = uNormalMapBias.z * ( aTextureCoord + uNormalMapBias.xy );

                cameraPosition = eyePositionHigh + eyePositionLow;
                
                vec3 highDiff = aVertexPositionHigh - eyePositionHigh;
                vec3 lowDiff = aVertexPositionLow - eyePositionLow + nh;

                mat4 viewMatrixRTE = viewMatrix;
                viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                v_height = height;
                v_vertex = aVertexPosition + nh;
                            
                gl_Position = projectionMatrix * viewMatrixRTE * vec4(highDiff * step(1.0, length(highDiff)) + lowDiff, 1.0);
            }`,fragmentShader:`#version 300 es

            precision highp float;
            
            #define MAX_POINT_LIGHTS 1
            #define SLICE_SIZE ${ri+1}

            uniform vec4 specular;
            uniform vec3 diffuse;
            uniform vec3 ambient;  

            uniform sampler2D uNormalMap;
            uniform sampler2D nightTexture;
            uniform sampler2D specularTexture;
            uniform sampler2D defaultTexture;
            uniform sampler2D samplerArr[SLICE_SIZE];

            uniform vec4 tileOffsetArr[SLICE_SIZE];
            uniform vec3 lightsPositions[MAX_POINT_LIGHTS];
            uniform float layerOpacityArr[SLICE_SIZE];

            uniform int samplerCount;
            uniform float nightTextureCoefficient;
            
            uniform float transitionOpacity;
                
            uniform float camHeight;

            in vec4 vTextureCoord;
            in vec3 v_vertex;
            in vec3 cameraPosition;
            in vec2 vGlobalTextureCoord;
            in float v_height;

            vec3 sunPos;

            layout(location = 0) out vec4 diffuseColor;

            ${Cr}

            ${Sn}
            
            ${Er}
                                               
            void main(void) {
            
                sunPos = lightsPositions[0];
                                
                vec3 texNormal = texture(uNormalMap, vTextureCoord.zw).rgb;
                vec3 normal = normalize((texNormal - 0.5) * 2.0);
                
                float minH = 1200000.0;
                float maxH = minH * 3.0;
                float nightCoef = getLerpValue(minH, maxH, camHeight) * nightTextureCoefficient;
                                
                // if(camHeight > 6000000.0)
                // {
                //     normal = normalize(v_vertex);
                // }
                                            
                vec3 lightDir = normalize(sunPos);
                vec3 viewDir = normalize(cameraPosition - v_vertex);
                                                
                float overGround = 1.0 - step(0.1, v_height);

                float shininess = texture( specularTexture, vGlobalTextureCoord.st ).r * 255.0 * overGround;
                vec3 reflectionDirection = reflect(-lightDir, normal);
                float reflection = max( dot(reflectionDirection, viewDir), 0.0);
                vec3 spec = specular.rgb * pow( reflection, specular.w) * shininess;                
                float diffuseLightWeighting = max(dot(normal, lightDir), 0.0);                
                vec4 nightImageColor = texture( nightTexture, vGlobalTextureCoord.st );
                vec3 night = nightStep * (.18 - diffuseLightWeighting * 3.0) * nightImageColor.rgb * nightCoef;
                night *= overGround * step(0.0, night);                
                vec4 lightWeighting = vec4(ambient + diffuse * diffuseLightWeighting + night, 1.0);
                
                diffuseColor = texture( defaultTexture, vTextureCoord.xy );
                
                if( samplerCount == 0 ) {
                    diffuseColor = diffuseColor * lightWeighting + vec4(spec, 0.0);
                    diffuseColor *= transitionOpacity;
                    return;
                }

                vec4 src;

                blend(diffuseColor, samplerArr[0], tileOffsetArr[0], layerOpacityArr[0]);
                if( samplerCount == 1 ) {                
                    diffuseColor = diffuseColor * lightWeighting + vec4(spec, 0.0);
                    diffuseColor *= transitionOpacity;
                    return;
                }

                blend(diffuseColor, samplerArr[1], tileOffsetArr[1], layerOpacityArr[1]);
                if( samplerCount == 2 ) {
                    diffuseColor = diffuseColor * lightWeighting + vec4(spec, 0.0);
                    diffuseColor *= transitionOpacity;
                    return;
                }

                blend(diffuseColor, samplerArr[2], tileOffsetArr[2], layerOpacityArr[2]);
                if( samplerCount == 3 ) {
                    diffuseColor = diffuseColor * lightWeighting + vec4(spec, 0.0);
                    diffuseColor *= transitionOpacity;
                    return;
                }

                blend(diffuseColor, samplerArr[3], tileOffsetArr[3], layerOpacityArr[3]);
                if( samplerCount == 4 ) {
                    diffuseColor = diffuseColor * lightWeighting + vec4(spec, 0.0);
                    diffuseColor *= transitionOpacity;
                    return;
                }

                blend(diffuseColor, samplerArr[4], tileOffsetArr[4], layerOpacityArr[4]);
                diffuseColor = diffuseColor * lightWeighting + vec4(spec, 0.0);
                diffuseColor *= transitionOpacity;
            }`})}function As(h){return new G("drawnode_screen_wl",{uniforms:{projectionMatrix:"mat4",viewMatrix:"mat4",eyePositionHigh:"vec3",eyePositionLow:"vec3",height:"float",uGlobalTextureCoord:"vec4",uNormalMapBias:"vec3",samplerCount:"int",tileOffsetArr:"vec4",layerOpacityArr:"float",samplerArr:"sampler2darray",defaultTexture:"sampler2d",uNormalMap:"sampler2d",nightTexture:"sampler2d",specularTexture:"sampler2d",lightsPositions:"vec3",diffuse:"vec3",ambient:"vec3",specular:"vec4",transmittanceTexture:"sampler2D",scatteringTexture:"sampler2D",camHeight:"float",nightTextureCoefficient:"float",maxMinOpacity:"vec2",transitionOpacity:"float"},attributes:{aVertexPositionHigh:"vec3",aVertexPositionLow:"vec3",aTextureCoord:"vec2"},vertexShader:`#version 300 es

            precision highp float;

            in vec3 aVertexPositionHigh;
            in vec3 aVertexPositionLow;
            in vec2 aTextureCoord;

            uniform mat4 projectionMatrix;
            uniform mat4 viewMatrix;
            uniform vec4 uGlobalTextureCoord;
            uniform vec3 uNormalMapBias;
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;
            uniform float height;

            out vec4 vTextureCoord;
            out vec3 v_vertex;
            out vec3 cameraPosition;
            out vec2 vGlobalTextureCoord;
            out float v_height;

            void main(void) {

                vec3 aVertexPosition = aVertexPositionHigh + aVertexPositionLow;                
                vec3 nh = height * normalize(aVertexPosition);

                vTextureCoord.xy = aTextureCoord;
                vGlobalTextureCoord = uGlobalTextureCoord.xy + (uGlobalTextureCoord.zw - uGlobalTextureCoord.xy) * aTextureCoord;
                vTextureCoord.zw = uNormalMapBias.z * ( aTextureCoord + uNormalMapBias.xy );

                cameraPosition = eyePositionHigh + eyePositionLow;
                
                vec3 highDiff = aVertexPositionHigh - eyePositionHigh;
                vec3 lowDiff = aVertexPositionLow - eyePositionLow + nh;

                mat4 viewMatrixRTE = viewMatrix;
                viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                v_height = height;
                v_vertex = aVertexPosition + nh;
                            
                gl_Position = projectionMatrix * viewMatrixRTE * vec4(highDiff * step(1.0, length(highDiff)) + lowDiff, 1.0);
            }`,fragmentShader:`#version 300 es

            precision highp float;
            
            #define MAX_POINT_LIGHTS 1
            #define SLICE_SIZE ${ri+1}

            uniform vec4 specular;
            uniform vec3 diffuse;
            uniform vec3 ambient;

            uniform vec3 lightsPositions[MAX_POINT_LIGHTS];

            uniform sampler2D uNormalMap;
            uniform sampler2D nightTexture;
            uniform sampler2D specularTexture;
            uniform sampler2D transmittanceTexture;
            uniform sampler2D scatteringTexture;
            uniform sampler2D defaultTexture;
            uniform sampler2D samplerArr[SLICE_SIZE];

            uniform vec4 tileOffsetArr[SLICE_SIZE];
            uniform float layerOpacityArr[SLICE_SIZE];

            uniform int samplerCount;
            uniform float nightTextureCoefficient;
            
            uniform vec2 maxMinOpacity;                
            uniform float camHeight;
            
            uniform float transitionOpacity;

            in vec4 vTextureCoord;
            in vec3 v_vertex;
            in vec3 cameraPosition;
            in vec2 vGlobalTextureCoord;
            in float v_height;

            vec3 sunPos;

            layout(location = 0) out vec4 diffuseColor;

            ${Cr}

            ${Sn}
            
            ${Ii(h)}            
            
            vec3 transmittanceFromTexture(float height, float angle) 
            {
                float u = (angle + 1.0) * 0.5;
                float v = height / ATMOS_HEIGHT;
                return texture(transmittanceTexture, vec2(u, v)).xyz;
            }

            vec3 multipleScatteringContributionFromTexture(float height, float angle) 
            {
                float u = (angle + 1.0) * 0.5;
                float v = height / ATMOS_HEIGHT;
                return texture(scatteringTexture, vec2(u, v)).xyz;
            }
            
            void getSunIlluminance(in vec3 point, in vec3 lightDir, out vec3 sunIlluminance)
            {
                //     float r = length(point);
                //     float mu_s = dot(point, sun_direction) / r;
                //     float height = r - BOTTOM_RADIUS;
                
                float mu_s = dot(normalize(point), lightDir);
                float height = length(point) - BOTTOM_RADIUS;
                sunIlluminance = SUN_INTENSITY * transmittanceFromTexture(height, mu_s);
            }
           
            void atmosGroundColor(out vec4 fragColor, in vec3 normal)
            {      
                vec3 cameraPosition = cameraPosition;           
                
                if(length(cameraPosition * SPHERE_TO_ELLIPSOID_SCALE) < BOTTOM_RADIUS + 1.0){
                    cameraPosition = normalize(cameraPosition * SPHERE_TO_ELLIPSOID_SCALE) * (BOTTOM_RADIUS + 1.0) / SPHERE_TO_ELLIPSOID_SCALE;
                }             
                                                                                
                vec3 rayDirection = normalize(v_vertex - cameraPosition);
                vec3 lightDir = normalize(sunPos);
                
                rayDirection = normalize(rayDirection * SPHERE_TO_ELLIPSOID_SCALE);
                vec3 camPos = cameraPosition * SPHERE_TO_ELLIPSOID_SCALE;
                lightDir = normalize(lightDir * SPHERE_TO_ELLIPSOID_SCALE);
               

                vec3 light = vec3(0.0);
                vec3 transmittanceFromCameraToSpace = vec3(1.0);
                float offset = 0.0;
                float distanceToSpace = 0.0;
                
                intersectSphere(camPos, rayDirection, TOP_RADIUS, offset, distanceToSpace);
            
                vec3 rayOrigin = camPos;
                
                // above atmosphere
                if (offset > 0.0) 
                {
                    // intersection of camera ray with atmosphere
                    rayOrigin += rayDirection * offset;
                }
                
                float height = length(rayOrigin) - BOTTOM_RADIUS;
                float rayAngle = dot(rayOrigin, rayDirection) / length(rayOrigin);
                bool cameraBelow = rayAngle < 0.0;
                
                transmittanceFromCameraToSpace = transmittanceFromTexture(height, cameraBelow ? -rayAngle : rayAngle);
                
                float phaseAngle = dot(lightDir, rayDirection);
                float rayleighPhase = rayleighPhase(phaseAngle);
                float miePhase = miePhase(phaseAngle);
                
                float distanceToGround = 0.0;
                
                bool hitGround = intersectSphere(camPos, rayDirection, BOTTOM_RADIUS, distanceToGround) && distanceToGround > 0.0;                
                //intersectSphere(camPos, rayDirection, BOTTOM_RADIUS, distanceToGround);
               

                if(length(v_vertex * SPHERE_TO_ELLIPSOID_SCALE) > BOTTOM_RADIUS){
                    distanceToGround = distance(camPos, v_vertex * SPHERE_TO_ELLIPSOID_SCALE);
                }
                                                                
                float segmentLength = (distanceToGround - max(offset, 0.0)) / float(SAMPLE_COUNT);
                
                float t = segmentLength * 0.5;
                
                vec3 transmittanceCamera; 
                vec3 transmittanceLight; 
                
                for (int i = 0; i < SAMPLE_COUNT; i++) 
                {
                    vec3 position = rayOrigin + t * rayDirection;
                    float height = length(position) - BOTTOM_RADIUS;
                    vec3 up = position / length(position);
                    float rayAngle = dot(up, rayDirection);
                    float lightAngle = dot(up, lightDir);                                                 
                    vec3 transmittanceToSpace = transmittanceFromTexture(height, cameraBelow ? -rayAngle : rayAngle);
                    transmittanceCamera = cameraBelow ? (transmittanceToSpace / transmittanceFromCameraToSpace) : (transmittanceFromCameraToSpace / transmittanceToSpace);
                    transmittanceLight = transmittanceFromTexture(height, lightAngle);
                    vec2 opticalDensity = exp(-height / rayleighMieHeights);
                    vec3 scatteredLight = transmittanceLight * (rayleighScatteringCoefficient * opticalDensity.x * rayleighPhase + mieScatteringCoefficient * opticalDensity.y * miePhase);
                    scatteredLight += multipleScatteringContributionFromTexture(height, lightAngle) * (rayleighScatteringCoefficient * opticalDensity.x + mieScatteringCoefficient * opticalDensity.y);  
                    light += transmittanceCamera * scatteredLight * segmentLength;
                    t += segmentLength;
                }
                
                light *= SUN_INTENSITY;
        
                vec3 hitPoint = camPos + rayDirection * distanceToGround;
                vec3 up = normalize(hitPoint);
                float diffuseAngle = max(dot(up, lightDir), 0.0);                
                                
                float lightAngle = dot(normal, lightDir);
                vec3 tA = transmittanceCamera * GROUND_ALBEDO * SUN_INTENSITY;                                               
                vec3 scatteringLight = multipleScatteringContributionFromTexture(height, lightAngle);
                vec3 diffuseTransmittanceLight = transmittanceLight * diffuseAngle;                
                light += tA * (scatteringLight + diffuseTransmittanceLight);
                                                                
                fragColor = vec4(pow(light * 8.0, vec3(1.0 / 2.2)), 1.0);
            }

            void getAtmosFadingOpacity(out float opacity)
            {            
                float c = length(cameraPosition);
                float maxDist = sqrt(c * c - BOTTOM_RADIUS * BOTTOM_RADIUS);
                float minDist = c - BOTTOM_RADIUS;
                float vertDist = distance(cameraPosition, v_vertex);                    
                opacity = clamp(maxMinOpacity.y + ( maxMinOpacity.x -  maxMinOpacity.y) * getLerpValue(minDist, maxDist, vertDist), 0.0, 1.0);
            }

            void main(void) {
            
                sunPos = lightsPositions[0];
                                
                vec3 texNormal = texture(uNormalMap, vTextureCoord.zw).rgb;
                vec3 normal = normalize((texNormal - 0.5) * 2.0);
                
                float minH = 1200000.0;
                float maxH = minH * 3.0;
                float nightCoef = getLerpValue(minH, maxH, camHeight) * nightTextureCoefficient;
                                
                // if(camHeight > 6000000.0)
                // {
                //    normal = normalize(v_vertex);
                // }
                                            
                vec3 lightDir = normalize(sunPos);
                vec3 viewDir = normalize(cameraPosition - v_vertex);
                
                vec4 atmosColor;
                atmosGroundColor(atmosColor, normal);
                
                vec3 sunIlluminance;                
                getSunIlluminance(v_vertex * SPHERE_TO_ELLIPSOID_SCALE, lightDir * SPHERE_TO_ELLIPSOID_SCALE, sunIlluminance);
                
                float overGround = 1.0 - step(0.1, v_height);

                float shininess = texture( specularTexture, vGlobalTextureCoord.st ).r * 255.0 * overGround;
                vec3 reflectionDirection = reflect(-lightDir, normal);
                float reflection = max( dot(reflectionDirection, viewDir), 0.0);
                vec3 spec = sunIlluminance * specular.rgb * pow( reflection, specular.w) * shininess;                
                float diffuseLightWeighting = max(dot(normal, lightDir), 0.0);
                              
                vec4 nightImageColor = texture( nightTexture, vGlobalTextureCoord.st );
                vec3 night = nightStep * (.18 - diffuseLightWeighting * 3.0) * nightImageColor.rgb * nightCoef;
                night *= overGround * step(0.0, night);                
                vec4 lightWeighting = vec4(ambient + sunIlluminance * diffuse * diffuseLightWeighting + night, 1.0);
                
                float fadingOpacity;
                getAtmosFadingOpacity(fadingOpacity);
                
                getSunIlluminance(cameraPosition, viewDir * SPHERE_TO_ELLIPSOID_SCALE, sunIlluminance);
                
                spec *= sunIlluminance;

                diffuseColor = texture( defaultTexture, vTextureCoord.xy );
                if( samplerCount == 0 ) {
                    diffuseColor = mix(diffuseColor * lightWeighting, atmosColor, fadingOpacity) + vec4(spec, 0.0);
                    diffuseColor *= transitionOpacity;
                    return;
                }

                vec4 src;

                blend(diffuseColor, samplerArr[0], tileOffsetArr[0], layerOpacityArr[0]);
                if( samplerCount == 1 ) {                
                    diffuseColor = mix(diffuseColor * lightWeighting, atmosColor * diffuseColor.a, fadingOpacity) + vec4(spec, 0.0);
                    diffuseColor *= transitionOpacity;
                    return;
                }

                blend(diffuseColor, samplerArr[1], tileOffsetArr[1], layerOpacityArr[1]);
                if( samplerCount == 2 ) {
                    diffuseColor = mix(diffuseColor * lightWeighting, atmosColor * diffuseColor.a, fadingOpacity) + vec4(spec, 0.0);
                    diffuseColor *= transitionOpacity;
                    return;
                }

                blend(diffuseColor, samplerArr[2], tileOffsetArr[2], layerOpacityArr[2]);
                if( samplerCount == 3 ) {
                    diffuseColor = mix(diffuseColor * lightWeighting, atmosColor * diffuseColor.a, fadingOpacity) + vec4(spec, 0.0);
                    diffuseColor *= transitionOpacity;
                    return;
                }

                blend(diffuseColor, samplerArr[3], tileOffsetArr[3], layerOpacityArr[3]);
                if( samplerCount == 4 ) {
                    diffuseColor = mix(diffuseColor * lightWeighting, atmosColor * diffuseColor.a, fadingOpacity) + vec4(spec, 0.0);
                    diffuseColor *= transitionOpacity;
                    return;
                }

                blend(diffuseColor, samplerArr[4], tileOffsetArr[4], layerOpacityArr[4]);
                diffuseColor = mix(diffuseColor * lightWeighting, atmosColor * diffuseColor.a, fadingOpacity) + vec4(spec, 0.0);
                diffuseColor *= transitionOpacity;
            }`})}function Pl(){return new G("drawnode_colorPicking",{uniforms:{projectionMatrix:"mat4",viewMatrix:"mat4",eyePositionHigh:"vec3",eyePositionLow:"vec3",samplerCount:"int",tileOffsetArr:"vec4",samplerArr:"sampler2darray",pickingMaskArr:"sampler2darray",pickingColorArr:"vec4",height:"float"},attributes:{aVertexPositionHigh:"vec3",aVertexPositionLow:"vec3",aTextureCoord:"vec2"},vertexShader:`precision highp float;
            
            attribute vec3 aVertexPositionHigh;
            attribute vec3 aVertexPositionLow;
            attribute vec2 aTextureCoord;

            uniform mat4 projectionMatrix;
            uniform mat4 viewMatrix;
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;
            uniform float height;

            varying vec2 vTextureCoord;

            void main(void) {

                vTextureCoord = aTextureCoord;

                mat4 viewMatrixRTE = viewMatrix;
                viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                mat4 m = projectionMatrix * viewMatrixRTE;

                vec3 nh = height * normalize(aVertexPositionHigh + aVertexPositionLow);

                vec3 highDiff = aVertexPositionHigh - eyePositionHigh;
                vec3 lowDiff = aVertexPositionLow - eyePositionLow + nh;

                gl_Position = m * vec4(highDiff * step(1.0, length(highDiff)) + lowDiff, 1.0);
            }`,fragmentShader:`precision highp float;
            #define SLICE_SIZE ${ri+1}
            uniform vec4 tileOffsetArr[SLICE_SIZE];
            uniform vec4 pickingColorArr[SLICE_SIZE];
            uniform sampler2D samplerArr[SLICE_SIZE];
            uniform sampler2D pickingMaskArr[SLICE_SIZE];
            uniform int samplerCount;
            varying vec2 vTextureCoord;

            ${Al}

            void main(void) {
                gl_FragColor = vec4(0.0);
                if( samplerCount == 0 ) return;

                vec2 tc;
                vec4 t;
                vec4 p;

                blendPicking(gl_FragColor, tileOffsetArr[0], samplerArr[0], pickingMaskArr[0], pickingColorArr[0], 1.0);
                if( samplerCount == 1 ) return;

                blendPicking(gl_FragColor, tileOffsetArr[1], samplerArr[1], pickingMaskArr[1], pickingColorArr[1], 1.0);
                if( samplerCount == 2 ) return;

                blendPicking(gl_FragColor, tileOffsetArr[2], samplerArr[2], pickingMaskArr[2], pickingColorArr[2], 1.0);
                if( samplerCount == 3 ) return;

                blendPicking(gl_FragColor, tileOffsetArr[3], samplerArr[3], pickingMaskArr[3], pickingColorArr[3], 1.0);
                if( samplerCount == 4 ) return;

                blendPicking(gl_FragColor, tileOffsetArr[4], samplerArr[4], pickingMaskArr[4], pickingColorArr[4], 1.0);
            }`})}function Ll(){return new G("drawnode_heightPicking",{uniforms:{projectionMatrix:"mat4",viewMatrix:"mat4",height:"float",eyePositionHigh:"vec3",eyePositionLow:"vec3"},attributes:{aVertexPositionHigh:"vec3",aVertexPositionLow:"vec3"},vertexShader:`precision highp float;

            attribute vec3 aVertexPositionHigh;
            attribute vec3 aVertexPositionLow;

            uniform mat4 projectionMatrix;
            uniform mat4 viewMatrix;
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;
            uniform float height;

            varying vec3 eyePosition;
            varying vec3 vertexPosition;

            void main(void) {

                // This code is works for Mac Chrome and Safari
                // any other code probably will produce jittering

                mat4 viewMatrixRTE = viewMatrix;
                viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                mat4 m = projectionMatrix * viewMatrixRTE;

                vec3 nh = height * normalize(aVertexPositionHigh + aVertexPositionLow);

                eyePosition = eyePositionHigh + eyePositionLow;
                vertexPosition = aVertexPositionHigh + aVertexPositionLow;

                vec3 highDiff = aVertexPositionHigh - eyePositionHigh;
                vec3 lowDiff = aVertexPositionLow - eyePositionLow + nh;
                
                gl_Position =  m * vec4(highDiff * step(1.0, length(highDiff)) + lowDiff, 1.0);         
            }`,fragmentShader:`precision highp float;

            varying vec3 eyePosition;
            varying vec3 vertexPosition;

            vec3 encode24(highp float f) {
                float F = abs(f);
                float s = step( 0.0, -f );
                float e = floor( log2(F) );
                float m = exp2(- e) * F;
                e = floor( log2(F) + 127.0 ) + floor( log2(m) );
                return vec3(
                    ( 128.0 * s + floor( e * exp2(-1.0) ) ) / 255.0,
                    ( 128.0 * mod( e, 2.0 ) + mod( floor( m * 128.0 ), 128.0 ) ) / 255.0,
                    floor( mod( floor( m * exp2( 23.0 - 8.0) ), exp2(8.0) ) ) / 255.0);
            }

            void main(void) {
                float range = distance(eyePosition, vertexPosition);
                gl_FragColor = vec4(encode24(range), 1.0);
            }`})}function Bl(){return new G("drawnode_depth",{uniforms:{projectionMatrix:"mat4",viewMatrix:"mat4",height:"float",eyePositionHigh:"vec3",eyePositionLow:"vec3",frustumPickingColor:"vec3"},attributes:{aVertexPositionHigh:"vec3",aVertexPositionLow:"vec3"},vertexShader:`precision highp float;

            attribute vec3 aVertexPositionHigh;
            attribute vec3 aVertexPositionLow;

            uniform mat4 projectionMatrix;
            uniform mat4 viewMatrix;
            uniform vec3 eyePositionHigh;
            uniform vec3 eyePositionLow;
            uniform float height;

            void main(void) {

                // @hack
                // This code is works for Mac Chrome and Safari
                // any other code probably will produce jittering

                mat4 viewMatrixRTE = viewMatrix;
                viewMatrixRTE[3] = vec4(0.0, 0.0, 0.0, 1.0);

                mat4 m = projectionMatrix * viewMatrixRTE;

                vec3 nh = height * normalize(aVertexPositionHigh + aVertexPositionLow);

                vec3 eyePosition = eyePositionHigh + eyePositionLow;
                vec3 vertexPosition = aVertexPositionHigh + aVertexPositionLow;

                vec3 highDiff = aVertexPositionHigh - eyePositionHigh;
                vec3 lowDiff = aVertexPositionLow - eyePositionLow + nh;
                
                gl_Position =  m * vec4(highDiff * step(1.0, length(highDiff)) + lowDiff, 1.0);    
            }`,fragmentShader:`precision highp float;
            uniform vec3 frustumPickingColor;

            void main(void) {
                gl_FragColor = vec4(frustumPickingColor, 1.0);
            } `})}class Mn{constructor(e,t={}){this.handler=e,this._fbo=null,this._width=t.width||e.canvas.width,this._height=t.height||e.canvas.height,this._depthComponent=t.depthComponent!=null?t.depthComponent:"DEPTH_COMPONENT16",this._useDepth=t.useDepth!=null?t.useDepth:!0,this._active=!1,this._size=t.size||1,this._depthRenderbuffer=null,this._filter=t.filter||"NEAREST"}get width(){return this._width}get height(){return this._height}setSize(e,t,i=!1){this._width=e,this._height=t,this._active&&this.handler.gl.viewport(0,0,this._width,this._height),(this._useDepth||i)&&(this.destroy(),this.init())}init(){}destroy(){}isComplete(){let e=this.handler.gl;return e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE}checkStatus(){let e=this.handler.gl;return e.checkFramebufferStatus(e.FRAMEBUFFER)}activate(){let e=this.handler.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,this._fbo),e.viewport(0,0,this._width,this._height),this._active=!0;let t=this.handler.framebufferStack.current().data;return t&&(t._active=!1),this.handler.framebufferStack.push(this),this}deactivate(){let e=this.handler,t=e.gl;t.bindFramebuffer(t.FRAMEBUFFER,null),this._active=!1;let i=this.handler.framebufferStack.popPrev();i?(t.bindFramebuffer(t.FRAMEBUFFER,i._fbo),t.viewport(0,0,i._width,i._height)):t.viewport(0,0,e.canvas.width,e.canvas.height)}}class Wt{constructor(e=256,t=256){this._canvas=document.createElement("canvas"),this._canvas.width=e,this._canvas.height=t,this._context=this._canvas.getContext("2d",{willReadFrequently:!0})}getCanvas(){return this._canvas}getContext(){return this._context}fillEmpty(){let e=this._context.getImageData(0,0,this._canvas.width,this._canvas.height),t=e.data;for(let i=0,r=t.length;i<r;i+=4)t[i]=t[i+1]=t[i+2]=t[i+3]=0;this._context.putImageData(e,0,0)}fill(e){this._context.fillStyle=e,this._context.fill()}getData(){return this._context.getImageData(0,0,this._canvas.width,this._canvas.height).data}fillColor(e){this._context.fillStyle=e,this._context.fillRect(0,0,this._canvas.width,this._canvas.height)}setData(e){let t=this._context.createImageData(this._canvas.width,this._canvas.height);t.data.set(e),this._context.putImageData(t,0,0)}resize(e,t){this._canvas.width=e,this._canvas.height=t,this._context=this._canvas.getContext("2d")}drawImage(e,t,i,r,s){this._context.drawImage(e,t||0,i||0,r||e.width,s||e.height)}getImage(){let e=new Image;return e.width=this.getWidth(),e.height=this.getHeight(),e.src=this._canvas.toDataURL("image/png"),e}getTextWidth(e){let t=this._context.measureText(e);return Math.round(t.width)}drawText(e,t=0,i=14,r="normal 14px Verdana",s="black"){this._context.fillStyle=s,this._context.font=r,this._context.fillText(e,t,i)}getWidth(){return this._canvas.width}getHeight(){return this._canvas.height}load(e,t){let i=new Image,r=this;i.onload=function(){r.resize(i.width,i.height),r._context.drawImage(i,0,0,i.width,i.height),t&&t(i)},i.src=e}openImage(){let e=this.getImage(),t=e.src,i="<!DOCTYPE html>";i+="<html>",i+="<head><title>Print</title></head>",i+="<body>",i+='<img src="'+t+'">',i+="</body>",i+="</html>";let r=window.open("","","width="+e.width+"px ,height="+e.height+"px");r&&(r.document.open(),r.document.write(i),r.document.close(),r.focus())}destroy(){this._canvas.width=1,this._canvas.height=1,this._canvas=null,this._context=null}}class Re extends Mn{constructor(e,t={}){super(e,t),this._isBare=t.isBare||!1,this._internalFormatArr=t.internalFormat instanceof Array?t.internalFormat:[t.internalFormat||"RGBA"],this._formatArr=t.format instanceof Array?t.format:[t.format||"RGBA"],this._typeArr=t.type instanceof Array?t.type:[t.type||"UNSIGNED_BYTE"],t.attachment instanceof Array?this._attachmentArr=t.attachment.map((i,r)=>{let s=i.toUpperCase();return s==="COLOR_ATTACHMENT"?`${s}${r.toString()}`:s}):this._attachmentArr=[t.attachment||"COLOR_ATTACHMENT0"],this._renderbufferTarget=t.renderbufferTarget!=null?t.renderbufferTarget:"DEPTH_ATTACHMENT",this.textures=t.textures||new Array(this._size)}destroy(){let e=this.handler.gl;if(e){for(let t=0;t<this.textures.length;t++)e.deleteTexture(this.textures[t]);this.textures=new Array(this._size),e.deleteFramebuffer(this._fbo),e.deleteRenderbuffer(this._depthRenderbuffer),this._depthRenderbuffer=null,this._fbo=null,this._active=!1}}init(){let e=this.handler.gl;if(e){if(this._fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this._fbo),!this._isBare){let t=[];for(let i=0;i<this.textures.length;i++){let r=this.textures[i]||this.handler.createEmptyTexture2DExt(this._width,this._height,this._filter,this._internalFormatArr[i],this._formatArr[i],this._typeArr[i]),s=e[this._attachmentArr[i]];r&&(this.bindOutputTexture(r,s),this.textures[i]=r),this._attachmentArr[i]!="DEPTH_ATTACHMENT"&&t.push(s)}e.drawBuffers&&e.drawBuffers(t)}this._useDepth&&(this._depthRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,this._depthRenderbuffer),e.renderbufferStorage(e.RENDERBUFFER,e[this._depthComponent],this._width,this._height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e[this._renderbufferTarget],e.RENDERBUFFER,this._depthRenderbuffer),e.bindRenderbuffer(e.RENDERBUFFER,null)),e.bindFramebuffer(e.FRAMEBUFFER,null)}}bindOutputTexture(e,t){let i=this.handler.gl;i.bindTexture(i.TEXTURE_2D,e),i.framebufferTexture2D(i.FRAMEBUFFER,t||i.COLOR_ATTACHMENT0,i.TEXTURE_2D,e,0),i.bindTexture(i.TEXTURE_2D,null)}readPixels(e,t,i,r=0,s=1,n=1){let a=this.handler.gl;a.bindFramebuffer(a.FRAMEBUFFER,this._fbo),a.readBuffer&&a.readBuffer(a.COLOR_ATTACHMENT0+r||0),a.readPixels(t*this._width,i*this._height,s,n,a.RGBA,a[this._typeArr[r]],e),a.bindFramebuffer(a.FRAMEBUFFER,null)}readAllPixels(e,t=0){let i=this.handler.gl;i.bindFramebuffer(i.FRAMEBUFFER,this._fbo),i.readBuffer&&i.readBuffer(i.COLOR_ATTACHMENT0+t),i.readPixels(0,0,this._width,this._height,i.RGBA,i[this._typeArr[t]],e),i.bindFramebuffer(i.FRAMEBUFFER,null)}getImage(){let e=new Uint8Array(4*this._width*this._height);this.readAllPixels(e);let t=new Wt(this._width,this._height);return t.setData(e),t.getImage()}}class Sl extends Ie{constructor(e={}){super({name:"Atmosphere",...e}),this._transmittanceBuffer=null,this._scatteringBuffer=null,this.opacity=1,this._parameters={ATMOS_HEIGHT:e.height||1e5,RAYLEIGH_SCALE:e.rayleighScale||.08,MIE_SCALE:e.mieScale||.012,GROUND_ALBEDO:e.groundAlbedo||.05,BOTTOM_RADIUS:e.bottomRadius||6356752314245179e-9,rayleighScatteringCoefficient:e.rayleighScatteringCoefficient||[5.802,13.558,33.1],mieScatteringCoefficient:e.mieScatteringCoefficient||3.996,mieExtinctionCoefficient:e.mieExtinctionCoefficient||4.44,ozoneAbsorptionCoefficient:e.ozoneAbsorptionCoefficient||[.65,1.881,.085],SUN_ANGULAR_RADIUS:e.sunAngularRadius||.004685,SUN_INTENSITY:e.sunIntensity||1,ozoneDensityHeight:e.ozoneDensityHeight||25e3,ozoneDensityWide:e.ozoneDensityWide||15e3}}setParameters(e){this._parameters=JSON.parse(JSON.stringify(e)),this.initLookupTexturesShaders(),this.drawLookupTextures(),this.removeLookupTexturesShaders(),this.initPlanetAtmosphereShader()}get parameters(){return JSON.parse(JSON.stringify(this._parameters))}initPlanetAtmosphereShader(){var e;(e=this.planet)==null||e.initAtmosphereShader(this._parameters)}oninit(){this.renderer&&(this._initLookupTextures(),this.initLookupTexturesShaders(),this.drawLookupTextures(),this.removeLookupTexturesShaders(),this.initBackgroundShader(),this.activate())}initLookupTexturesShaders(){this.renderer&&(this.renderer.handler.addProgram(wl(this._parameters),!0),this.renderer.handler.addProgram(Tl(this._parameters),!0))}initBackgroundShader(){this.renderer&&this.renderer.handler.addProgram(Rl(this._parameters),!0)}removeBackgroundShader(){this.renderer&&this.renderer.handler.removeProgram("atmosphereBackground")}removeLookupTexturesShaders(){var e,t;if(this.renderer){let i=this.renderer.handler;(e=this._scatteringBuffer)!=null&&e.isComplete()&&i.removeProgram("scattering"),(t=this._transmittanceBuffer)!=null&&t.isComplete()&&i.removeProgram("transmittance")}}onactivate(){super.onactivate(),this.planet&&this.planet.events.on("draw",this._drawBackground,this)}ondeactivate(){super.ondeactivate(),this.planet&&this.planet.events.off("draw",this._drawBackground)}_initLookupTextures(){let e=1024,t=1024;this._transmittanceBuffer=new Re(this.renderer.handler,{width:e,height:t,useDepth:!1,filter:"LINEAR",type:"FLOAT",internalFormat:"RGBA16F"}),this._transmittanceBuffer.init(),this._scatteringBuffer=new Re(this.renderer.handler,{width:e,height:t,useDepth:!1,filter:"LINEAR",type:"FLOAT",internalFormat:"RGBA16F"}),this._scatteringBuffer.init()}_renderLookupTextures(){if(!this.renderer)return;let e=this.renderer.screenFramePositionBuffer,t=this.renderer.handler,i=t.gl;if(this._transmittanceBuffer){this._transmittanceBuffer.activate();let r=t.programs.transmittance,s=r._program.attributes,n=r._program.uniforms;r.activate(),i.clearColor(0,0,0,1),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),i.uniform2fv(n.iResolution,[this._transmittanceBuffer.width,this._transmittanceBuffer.height]),i.bindBuffer(i.ARRAY_BUFFER,e),i.vertexAttribPointer(s.a_position,e.itemSize,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLE_STRIP,0,e.numItems),this._transmittanceBuffer.deactivate()}if(this._scatteringBuffer&&this._transmittanceBuffer){this._scatteringBuffer.activate();let r=t.programs.scattering,s=r._program.attributes,n=r._program.uniforms;r.activate(),i.clearColor(0,0,0,1),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),i.uniform2fv(n.iResolution,[this._scatteringBuffer.width,this._scatteringBuffer.height]),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this._transmittanceBuffer.textures[0]),i.uniform1i(n.transmittanceTexture,0),i.bindBuffer(i.ARRAY_BUFFER,e),i.vertexAttribPointer(s.a_position,e.itemSize,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLE_STRIP,0,e.numItems),this._scatteringBuffer.deactivate()}}drawLookupTextures(){this._renderLookupTextures()}_drawBackground(){let e=this.renderer.handler,t=e.programs.atmosphereBackground,i=t._program,r=i.uniforms,s=e.gl,n=this.renderer,a=this.planet.camera;s.disable(s.DEPTH_TEST),t.activate(),s.bindBuffer(s.ARRAY_BUFFER,n.screenFramePositionBuffer),s.vertexAttribPointer(i.attributes.corners,2,s.FLOAT,!1,0,0),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,this._transmittanceBuffer.textures[0]),s.uniform1i(r.transmittanceTexture,0),s.activeTexture(s.TEXTURE1),s.bindTexture(s.TEXTURE_2D,this._scatteringBuffer.textures[0]),s.uniform1i(r.scatteringTexture,1),s.uniformMatrix4fv(r.viewMatrix,!1,a.getViewMatrix());let o=this.planet.sunPos;s.uniform3fv(r.sunPos,[o.x,o.y,o.z]),s.uniform3fv(r.camPos,[a.eye.x,a.eye.y,a.eye.z]),s.uniform2fv(r.iResolution,[n.sceneFramebuffer.width,n.sceneFramebuffer.height]),s.uniform1f(r.fov,a.getViewAngle()),s.uniform1f(r.opacity,this.opacity),s.drawArrays(s.TRIANGLE_STRIP,0,4),s.enable(s.DEPTH_TEST)}}function Rl(h){return new G("atmosphereBackground",{uniforms:{iResolution:"vec2",fov:"float",camPos:"vec3",viewMatrix:"mat4",transmittanceTexture:"sampler2D",scatteringTexture:"sampler2D",sunPos:"vec3",opacity:"float"},attributes:{corners:"vec3"},vertexShader:`            
            attribute vec2 corners;
            
            void main(void) {
                gl_Position = vec4(corners, 0.0, 1.0);
            }`,fragmentShader:`                                   
            precision lowp float;
            
            ${Ii(h)}
            
            uniform mat4 viewMatrix;
            uniform vec3 sunPos;
            uniform vec3 camPos;     
            uniform vec2 iResolution;
            uniform float fov;
            uniform float opacity;
                       
            uniform sampler2D transmittanceTexture;
            uniform sampler2D scatteringTexture;
                                                           
            vec3 transmittanceFromTexture(float height, float angle) 
            {
                float u = (angle + 1.0) * 0.5;
                float v = height / ATMOS_HEIGHT;
                return texture2D(transmittanceTexture, vec2(u, v)).xyz;
            }
            
            vec3 multipleScatteringContributionFromTexture(float height, float angle) 
            {
                float u = (angle + 1.0) * 0.5;
                float v = height / ATMOS_HEIGHT;
                return texture2D(scatteringTexture, vec2(u, v)).xyz; 
            }

            bool intersectEllipsoidToSphere(in vec3 ro, in vec3 rd, in vec3 ellRadii, in float sphereRadius, out float t1, out float t2) 
            {
                float offset = 0.0,
                      distanceToSpace = 0.0;
                                                        
                if(intersectEllipsoid(ro, rd, ellRadii, offset, distanceToSpace)){
                    vec3 hitEll = ro + rd * offset;
                    vec3 nEll = normalEllipsoid(hitEll, ellRadii);
                    float t = 0.0;
                    bool intersectsSphere = intersectSphere(hitEll, nEll, sphereRadius, t);
                    vec3 hitSphere = hitEll + nEll * t;
                    t1 = length(hitSphere - ro);
                    
                    hitEll = ro + rd * distanceToSpace;
                    nEll = normalEllipsoid(hitEll, ellRadii);
                    t = 0.0;
                    intersectsSphere = intersectSphere(hitEll, nEll, sphereRadius, t);
                    hitSphere = hitEll + nEll * t;
                    t2 = length(hitSphere - ro);
                    
                    return true; 
                }
                return false; 
            }
            
            mat4 transpose(in mat4 m) 
            {
                vec4 i0 = m[0];
                vec4 i1 = m[1];
                vec4 i2 = m[2];
                vec4 i3 = m[3];
            
                mat4 outMatrix = mat4(
                     vec4(i0.x, i1.x, i2.x, i3.x),
                     vec4(i0.y, i1.y, i2.y, i3.y),
                     vec4(i0.z, i1.z, i2.z, i3.z),
                     vec4(i0.w, i1.w, i2.w, i3.w)
                     );
                                 
                return outMatrix;
            }
                                                                     
            void mainImage(out vec4 fragColor) 
            {            
                vec3 cameraPosition = camPos;
                
                vec3 lightDirection = normalize(sunPos);               
                             
                vec2 uv = (2.0 * gl_FragCoord.xy - iResolution.xy) / iResolution.y;
                float fieldOfView = fov;
                float z = 1.0 / tan(fieldOfView * 0.5 * PI / 180.0);
                vec3 rayDirection = normalize(vec3(uv, -z));
                vec4 rd = transpose(viewMatrix) * vec4(rayDirection, 1.0);
                rayDirection = rd.xyz;               
                                          
                vec3 light = vec3(0.0);
                vec3 transmittanceFromCameraToSpace = vec3(1.0);
                float offset = 0.0;
                float distanceToSpace = 0.0;
                                                
                rayDirection = normalize(rayDirection * SPHERE_TO_ELLIPSOID_SCALE);
                cameraPosition *= SPHERE_TO_ELLIPSOID_SCALE;
                lightDirection = normalize(lightDirection * SPHERE_TO_ELLIPSOID_SCALE);
                
                if(length(cameraPosition) < BOTTOM_RADIUS + 100.0){
                    cameraPosition = normalize(cameraPosition) * (BOTTOM_RADIUS + 100.0); 
                }
                                                
                if (intersectSphere(cameraPosition, rayDirection, TOP_RADIUS, offset, distanceToSpace)) 
                {    
                    vec3 rayOrigin = cameraPosition;
                    
                    // above atmosphere                    
                    if (offset > 0.0) {
                        // intersection of camera ray with atmosphere
                        rayOrigin = cameraPosition + rayDirection * offset;
                    }                   
                    
                    float height = length(rayOrigin) - BOTTOM_RADIUS;
                    float rayAngle = dot(rayOrigin, rayDirection) / length(rayOrigin);
                    bool cameraBelow = rayAngle < 0.0;
                    
                    transmittanceFromCameraToSpace = transmittanceFromTexture(height, cameraBelow ? -rayAngle : rayAngle);
                    
                    float phaseAngle = dot(lightDirection, rayDirection);
                    float rayleighPhase = rayleighPhase(phaseAngle);
                    float miePhase = miePhase(phaseAngle);
                    
                    float distanceToGround = 0.0;
                    
                    bool hitGround = intersectSphere(cameraPosition, rayDirection, BOTTOM_RADIUS, distanceToGround) && distanceToGround > 0.0;
                    
                    if(intersectSphere(cameraPosition, rayDirection, BOTTOM_RADIUS - 100000.0, distanceToGround) && hitGround)
                    {
                        discard;
                    }
                    
                    float segmentLength = ((hitGround ? distanceToGround : distanceToSpace) - max(offset, 0.0)) / float(SAMPLE_COUNT);
                                                                    
                    float t = segmentLength * 0.5;
                    
                    vec3 transmittanceCamera; 
                    vec3 transmittanceLight; 
            
                    for (int i = 0; i < SAMPLE_COUNT; i++) 
                    {
                        vec3 position = rayOrigin + t * rayDirection;
                        float height = length(position) - BOTTOM_RADIUS; 
                        vec3 up = position / length(position);
                        float rayAngle = dot(up, rayDirection);
                        float lightAngle = dot(up, lightDirection);
                        vec3 transmittanceToSpace = transmittanceFromTexture(height, cameraBelow ? -rayAngle : rayAngle);
                        transmittanceCamera = cameraBelow ? (transmittanceToSpace / transmittanceFromCameraToSpace) : (transmittanceFromCameraToSpace / transmittanceToSpace);
                        transmittanceLight = transmittanceFromTexture(height, lightAngle);
                        vec2 opticalDensity = exp(-height / rayleighMieHeights);
                        vec3 scatteredLight = transmittanceLight * (rayleighScatteringCoefficient * opticalDensity.x * rayleighPhase + mieScatteringCoefficient * opticalDensity.y * miePhase);
                        scatteredLight += multipleScatteringContributionFromTexture(height, lightAngle) * (rayleighScatteringCoefficient * opticalDensity.x + mieScatteringCoefficient * opticalDensity.y);  
                        light += transmittanceCamera * scatteredLight * segmentLength;
                        t += segmentLength;
                    }
                    
                    light *= SUN_INTENSITY;
            
                    if (hitGround) 
                    {
                        vec3 hitPoint = cameraPosition + rayDirection * distanceToGround;
                        vec3 up = hitPoint / length(hitPoint);
                        float diffuseAngle = max(dot(up, lightDirection), 0.0);
                        float lightAngle = dot(up, lightDirection);
                        light += transmittanceCamera * GROUND_ALBEDO * multipleScatteringContributionFromTexture(height, lightAngle) * SUN_INTENSITY;
                        light += transmittanceCamera * transmittanceLight * GROUND_ALBEDO * diffuseAngle * SUN_INTENSITY;
                    }
                }
                                     
                // sun disk
                // float distanceToGround;
                // bool hitGround = intersectSphere(cameraPosition, rayDirection, BOTTOM_RADIUS, distanceToGround) && distanceToGround > 0.0;
                // if (!hitGround) {
                //    float angle = dot(rayDirection, lightDirection);
                //    if (angle > cos(SUN_ANGULAR_RADIUS)) {
                //       light = SUN_INTENSITY * transmittanceFromCameraToSpace;
                //    }
                // }
                
                float distanceToGround = 0.0;
                bool hitGround = intersectSphere(cameraPosition, rayDirection, BOTTOM_RADIUS, distanceToGround) && distanceToGround > 0.0;
                if(!hitGround)
                {
                    vec3 sunLum = sunWithBloom(rayDirection, lightDirection) * vec3(1.0,1.0,0.8);
                    // limit the bloom effect
                    sunLum = smoothstep(0.002, 1.0, sunLum);
                    light += sunLum * SUN_INTENSITY * transmittanceFromCameraToSpace;
                }
                            
                fragColor = vec4(pow(light * 8.0, vec3(1.0 / 2.2)), clamp(opacity, 0.0, 1.0));           
            }
                                    
            void main(void) 
            {                            
                mainImage(gl_FragColor);            
            }`})}const Pr={DEGREES:"degrees",FEET:"ft",METERS:"m",KILOMETERS:"km"};let Ml=0;class Lr{constructor(e){this.id=Ml++,this.code=e.code,this.units=e.units}equal(e){return e.id===this.id}}const Br=new Lr({code:"epsg:3857",units:Pr.METERS});class Il{constructor(e){this.segment=e,this.layers=[],this.tileOffsetArr=new Float32Array(e.planet.SLICE_SIZE_4),this.layerOpacityArr=new Float32Array(e.planet.SLICE_SIZE)}clear(){this.layers=null,this.tileOffsetArr=null,this.layerOpacityArr=null}append(e,t){let i=this.layers.length;this.layers.push(e),this.layerOpacityArr[i]=e.screenOpacity;let r=i*4,s=e.applyMaterial(t);this.tileOffsetArr[r]=s[0],this.tileOffsetArr[r+1]=s[1],this.tileOffsetArr[r+2]=s[2],this.tileOffsetArr[r+3]=s[3]}}function Me(h,e,t){return Math.floor(Math.abs(t-h)/e)}function _r(h,e,t,i){let r=1/(1<<t),s=i.getWidth(),n=i.getHeight(),a=s*r,o=n*r,l=i.southWest.lon+h*a,c=i.northEast.lat-e*o;return new U(new P(l,c-o),new P(l+a,c))}const We=0,Mt=20,It=300;function zl(h,e=se){return h>e?Mt:h<-e?It:We}let ut=new m,_t=new m,Wi=new m,Nt=new m,Dt=new m,Xi=new m,Ht=new re,ui=new re;const si=new Array(4);si[Q]=0;si[te]=1;si[J]=1;si[ie]=0;const ni=new Array(4);ni[Q]=!1;ni[te]=!0;ni[J]=!1;ni[ie]=!0;class In{constructor(e,t,i,r){this.isPole=!1,this._tileGroup=We,this._projection=Br,this.node=e,this.planet=t,this.handler=t.renderer.handler,this.bsphere=new nt,this._plainRadius=0,this.bbox=new xa,this._sw=new m,this._nw=new m,this._se=new m,this._ne=new m,this.centerNormal=new m,this._extent=this._extentMerc=r,this._extentLonLat=new U,this.gridSize=t.terrain.gridSizeByZoom[i],this.fileGridSize=0,this.tileZoom=i,this.powTileZoom=1<<i,this.tileX=0,this.tileXE=0,this.tileXW=0,this.tileYN=0,this.tileYS=0,this.tileY=0,this.tileIndex="",this.elevationData=null,this._assignTileIndexes(),this.materials=[],this.plainReady=!1,this.initialized=!1,this.normalMapReady=!1,this.terrainReady=!1,this.terrainIsLoading=!1,this.terrainExists=!1,this.passReady=!1,this.plainVertices=null,this.plainVerticesHigh=null,this.plainVerticesLow=null,this.plainNormals=null,this.terrainVertices=null,this.terrainVerticesHigh=null,this.terrainVerticesLow=null,this.noDataVertices=null,this.tempVertices=null,this.tempVerticesHigh=null,this.tempVerticesLow=null,this.normalMapTexture=null,this.normalMapTextureBias=new Float32Array(3),this.normalMapVertices=null,this.normalMapVerticesHigh=null,this.normalMapVerticesLow=null,this.normalMapNormals=null,this.vertexNormalBuffer=null,this.vertexPositionBuffer=null,this.vertexPositionBufferHigh=null,this.vertexPositionBufferLow=null,this.vertexTextureCoordBuffer=null,this._globalTextureCoordinates=new Float32Array(4),this._inTheQueue=!1,this._appliedNeighborsZoom=[0,0,0,0],this._slices=[],this._indexBuffer=null,this.readyToEngage=!1,this.plainProcessing=!1,this.normalMapTexturePtr=null,this._transitionOpacity=1,this._transitionTimestamp=0}checkZoom(){return this.tileZoom<this.planet.terrain._maxNodeZoom}getEntityTerrainPoint(e,t){return this.getTerrainPoint(e._cartesian,this.getInsideLonLat(e),t)}getInsideLonLat(e){return e._lonLatMerc}isEntityInside(e){return this._extentLonLat.isInside(e._lonLat)}getTerrainPoint(e,t,i){let r=this.tempVertices;if(r&&r.length){let s=this.planet.ellipsoid.getSurfaceNormal3v(e);Ht.set(e,s.negateTo());let n=this._extent.northEast,a=this._extent.southWest,o=Math.sqrt(r.length/3)-1,l=n.lon,c=n.lat,d=a.lon,f=a.lat,_=t.lon,g=t.lat,v=l-d,u=c-f,p=v/o,b=u/o,w=_-d,y=g-f,x=Math.floor(w/p),T=Math.floor(o-y/b),A=((o+1)*T+x)*3,E=((o+1)*(T+1)+x)*3;Wi.set(r[A],r[A+1],r[A+2]),Nt.set(r[A+3],r[A+4],r[A+5]),Dt.set(r[E],r[E+1],r[E+2]);let C=Ht.hitTriangle(Wi,Nt,Dt,i);return C===re.INSIDE?e.distance(i):C===re.AWAY&&(ui.set(e,s),ui.hitTriangle(Wi,Nt,Dt,i)===re.INSIDE)?-e.distance(i):(Xi.set(r[E+3],r[E+4],r[E+5]),C=Ht.hitTriangle(Nt,Xi,Dt,i),C===re.INSIDE?e.distance(i):C===re.AWAY&&(ui.set(e,s),ui.hitTriangle(Nt,Xi,Dt,i)===re.INSIDE)||C===re.AWAY?-e.distance(i):e.distance(i))}else return e.distance(this.planet.ellipsoid.hitRay(Ht.origin,Ht.direction))}projectNative(e){return e.forwardMercator()}loadTerrain(e=!1){this.tileZoom<this.planet.terrain.minZoom||this.planet.terrain.isEmpty?(this.terrainIsLoading=!0,this.elevationsNotExists(),this._inTheQueue||this.planet._normalMapCreator.queue(this)):this.tileZoom>this.planet.terrain.maxZoom?this.elevationsNotExists():!this.terrainIsLoading&&!this.terrainReady&&this.planet.terrain.loadTerrain(this,e)}elevationsExists(e){if(this.plainReady&&this.terrainIsLoading){let t=new Float32Array(e.length);t.set(e),this.elevationData=new Float32Array(e.length),this.elevationData.set(e),this.planet._terrainWorker.make({segment:this,elevations:t}),this.plainVerticesHigh=null,this.plainVerticesLow=null,this.normalMapVerticesHigh=null,this.normalMapVerticesLow=null,this.planet.terrain.equalizeVertices||(this.tempVerticesHigh=null,this.tempVerticesLow=null)}}elevationsNotExists(){if(this.planet&&this.tileZoom<=this.planet.terrain.maxNativeZoom){if(this.plainReady&&this.terrainIsLoading){this.terrainIsLoading=!1;let e=this.node;e.appliedTerrainNodeId=this.node.nodeId,e.equalizedSideWithNodeId[Q]=e.equalizedSideWithNodeId[te]=e.equalizedSideWithNodeId[J]=e.equalizedSideWithNodeId[ie]=e.appliedTerrainNodeId,this.planet.lightEnabled&&!this._inTheQueue&&this.planet._normalMapCreator.queue(this),this.readyToEngage=!0}this.terrainVertices=this.plainVertices,this.terrainVerticesHigh=this.plainVerticesHigh,this.terrainVerticesLow=this.plainVerticesLow,this.tempVertices=this.terrainVertices,this.tempVerticesHigh=this.terrainVerticesHigh,this.tempVerticesLow=this.terrainVerticesLow,this.noDataVertices=null,this.fileGridSize=Math.sqrt(this.terrainVertices.length/3)-1,this.gridSize=this.fileGridSize,this.terrainReady=!0,this.terrainExists=!1}else if(this.plainReady&&this.terrainIsLoading){this.terrainIsLoading=!1;let e=this.node;e.appliedTerrainNodeId=this.node.nodeId,e.equalizedSideWithNodeId[Q]=e.equalizedSideWithNodeId[te]=e.equalizedSideWithNodeId[J]=e.equalizedSideWithNodeId[ie]=e.appliedTerrainNodeId,this.readyToEngage=!0,this.terrainReady=!0,this.passReady=!0,this.terrainExists=!1}}_checkEqualization(e,t){return t&&t.segment&&this.tileZoom>=t.segment.tileZoom&&this.node.equalizedSideWithNodeId[e]!==t.equalizedSideWithNodeId[jt[e]]}equalize(){if(this.tileZoom<2||this.gridSize<2)return;this.readyToEngage=!0;let e=this.node.neighbors,t=this.tempVertices,i=this.tempVerticesHigh,r=this.tempVerticesLow,s=this.gridSize,n=s+1,a=e[Q][0];if(this._checkEqualization(Q,a)){this.node.equalizedSideWithNodeId[Q]=a.equalizedSideWithNodeId[J],this.readyToEngage=!0;let o=this.node.getOffsetOppositeNeighbourSide(a,Q),l=a.segment.tempVertices,c=a.segment.tempVerticesHigh,d=a.segment.tempVerticesLow,f=a.segment.gridSize,_=f+1,g=1/(1<<this.tileZoom-a.segment.tileZoom),v=Math.max(s/(f*g),1),u=Math.max(f*g/s,1),p=o*f;for(let b=0,w=p;b<n;b+=v,w+=u){const y=b*3,x=(_*f+w)*3;t[y]=l[x],t[y+1]=l[x+1],t[y+2]=l[x+2],i[y]=c[x],i[y+1]=c[x+1],i[y+2]=c[x+2],r[y]=d[x],r[y+1]=d[x+1],r[y+2]=d[x+2]}}if(a=e[te][0],this._checkEqualization(te,a)){this.node.equalizedSideWithNodeId[te]=a.equalizedSideWithNodeId[ie],this.readyToEngage=!0;let o=this.node.getOffsetOppositeNeighbourSide(a,te),l=a.segment.tempVertices,c=a.segment.tempVerticesHigh,d=a.segment.tempVerticesLow,f=a.segment.gridSize,_=f+1,g=1/(1<<this.tileZoom-a.segment.tileZoom),v=Math.max(s/(f*g),1),u=Math.max(f*g/s,1),p=o*f;for(let b=0,w=p;b<n;b+=v,w+=u){const y=(n*b+s)*3,x=_*w*3;t[y]=l[x],t[y+1]=l[x+1],t[y+2]=l[x+2],i[y]=c[x],i[y+1]=c[x+1],i[y+2]=c[x+2],r[y]=d[x],r[y+1]=d[x+1],r[y+2]=d[x+2]}}if(a=e[J][0],this._checkEqualization(J,a)){this.node.equalizedSideWithNodeId[J]=a.equalizedSideWithNodeId[Q],this.readyToEngage=!0;let o=this.node.getOffsetOppositeNeighbourSide(a,J),l=a.segment.tempVertices,c=a.segment.tempVerticesHigh,d=a.segment.tempVerticesLow,f=a.segment.gridSize,_=1/(1<<this.tileZoom-a.segment.tileZoom),g=Math.max(s/(f*_),1),v=Math.max(f*_/s,1),u=o*f;for(let p=0,b=u;p<n;p+=g,b+=v){const w=(n*s+p)*3,y=b*3;t[w]=l[y],t[w+1]=l[y+1],t[w+2]=l[y+2],i[w]=c[y],i[w+1]=c[y+1],i[w+2]=c[y+2],r[w]=d[y],r[w+1]=d[y+1],r[w+2]=d[y+2]}}if(a=e[ie][0],this._checkEqualization(ie,a)){this.node.equalizedSideWithNodeId[ie]=a.equalizedSideWithNodeId[te],this.readyToEngage=!0;let o=this.node.getOffsetOppositeNeighbourSide(a,ie),l=a.segment.tempVertices,c=a.segment.tempVerticesHigh,d=a.segment.tempVerticesLow,f=a.segment.gridSize,_=f+1,g=1/(1<<this.tileZoom-a.segment.tileZoom),v=Math.max(s/(f*g),1),u=Math.max(f*g/s,1),p=o*f;for(let b=0,w=p;b<n;b+=v,w+=u){const y=n*b*3,x=(_*w+f)*3;t[y]=l[x],t[y+1]=l[x+1],t[y+2]=l[x+2],i[y]=c[x],i[y+1]=c[x+1],i[y+2]=c[x+2],r[y]=d[x],r[y+1]=d[x+1],r[y+2]=d[x+2]}}}engage(){this.readyToEngage=!1,this.createCoordsBuffers(this.tempVerticesHigh,this.tempVerticesLow,this.gridSize)}_terrainWorkerCallback(e){if(this.plainReady){this.readyToEngage=!0,this.normalMapNormals=null,this.normalMapVertices=null,this.normalMapVerticesHigh=null,this.normalMapVerticesLow=null,this.terrainVertices=null,this.terrainVerticesHigh=null,this.terrainVerticesLow=null,this.noDataVertices=null,this.tempVertices=null,this.tempVerticesHigh=null,this.tempVerticesLow=null,this.normalMapNormals=e.normalMapNormals,this.normalMapVertices=e.normalMapVertices,this.normalMapVerticesHigh=e.normalMapVerticesHigh,this.normalMapVerticesLow=e.normalMapVerticesLow,this.terrainVertices=e.terrainVertices,this.terrainVerticesHigh=e.terrainVerticesHigh,this.terrainVerticesLow=e.terrainVerticesLow,this.noDataVertices=e.noDataVertices,this.tempVertices=this.terrainVertices,this.tempVerticesHigh=this.terrainVerticesHigh,this.tempVerticesLow=this.terrainVerticesLow,this.setBoundingVolumeArr(e.bounds),this.gridSize=Math.sqrt(this.terrainVertices.length/3)-1;let t=this.node;if(t.appliedTerrainNodeId=t.nodeId,t.equalizedSideWithNodeId[Q]=t.equalizedSideWithNodeId[te]=t.equalizedSideWithNodeId[J]=t.equalizedSideWithNodeId[ie]=t.appliedTerrainNodeId,this.terrainReady=!0,this.terrainIsLoading=!1,this.terrainExists=!0,!this.normalMapTexturePtr){const i=this.planet._normalMapCreator;this.normalMapTexturePtr=this.planet.renderer.handler.createEmptyTexture_l(i.width,i.height)}this.planet.lightEnabled&&this.planet._normalMapCreator.queue(this)}}_normalMapEdgeEqualize(e){let t=this.node.neighbors,i=t[e],r=i&&i[0],s=this.planet.terrain.maxZoom;this.tileZoom===s&&i&&!(t[0].length||t[1].length||t[2].length||t[3].length)&&(r=this.node.getEqualNeighbor(e));let n=r&&r.segment,a=this;if(r&&n&&n.terrainReady&&n.terrainExists&&n.tileZoom<=s&&a._appliedNeighborsZoom[e]!==n.tileZoom){a._appliedNeighborsZoom[e]=n.tileZoom;let o=a.normalMapNormals,l=n.normalMapNormals;if(!(o&&l))return;let c=a.normalMapNormals,d=n.normalMapNormals,f=Math.sqrt(o.length/3),_=f-1;const g=_*si[e];let v,u,p,b;if(a.tileZoom===n.tileZoom){const w=_-g;if(ni[e])for(let y=0;y<f;y++){let x=(y*f+g)*3,T=(y*f+w)*3;v=c[x]+d[T],u=c[x+1]+d[T+1],p=c[x+2]+d[T+2],b=1/Math.sqrt(v*v+u*u+p*p),l[T]=o[x]=v*b,l[T+1]=o[x+1]=u*b,l[T+2]=o[x+2]=p*b}else for(let y=0;y<f;y++){let x=(g*f+y)*3,T=(w*f+y)*3;v=c[x]+d[T],u=c[x+1]+d[T+1],p=c[x+2]+d[T+2],b=1/Math.sqrt(v*v+u*u+p*p),l[T]=o[x]=v*b,l[T+1]=o[x+1]=u*b,l[T+2]=o[x+2]=p*b}!n._inTheQueue&&n._appliedNeighborsZoom[jt[e]]!==a.tileZoom&&(n._appliedNeighborsZoom[jt[e]]=a.tileZoom,a.planet._normalMapCreator.queue(n))}}}applyTerrain(e){e?this.elevationsExists(e):this.elevationsNotExists()}deleteBuffers(){const e=this.handler.gl;e.deleteBuffer(this.vertexNormalBuffer),e.deleteBuffer(this.vertexPositionBuffer),e.deleteBuffer(this.vertexPositionBufferHigh),e.deleteBuffer(this.vertexPositionBufferLow),this.vertexNormalBuffer=null,this.vertexPositionBuffer=null,this.vertexPositionBufferHigh=null,this.vertexPositionBufferLow=null,this.vertexTextureCoordBuffer=null}deleteMaterials(){let e=this.materials;for(let t=0;t<e.length;t++){let i=e[t];i&&i.clear()}this.materials.length=0}deleteElevations(){this.terrainExists=!1,this.terrainReady=!1,this.terrainIsLoading=!1,this.normalMapVertices=null,this.normalMapVerticesHigh=null,this.normalMapVerticesLow=null,this.normalMapNormals=null,this.tempVertices=null,this.tempVerticesHigh=null,this.tempVerticesLow=null,this.terrainVertices=null,this.terrainVerticesHigh=null,this.terrainVerticesLow=null,this.noDataVertices=null,this.plainVertices=null,this.plainVerticesHigh=null,this.plainVerticesLow=null,this.plainNormals=null,this.normalMapReady&&(this.handler.gl.deleteTexture(this.normalMapTexture),this.normalMapReady=!1),this._appliedNeighborsZoom=[0,0,0,0],this.normalMapTextureBias[0]=0,this.normalMapTextureBias[1]=0,this.normalMapTextureBias[2]=1,this._inTheQueue=!1}clearSegment(){this.plainReady=!1,this.initialized=!1,this.deleteBuffers(),this.deleteMaterials(),this.deleteElevations()}childrenInitialized(){let e=this.node.nodes;return e.length===4&&e[0].segment.initialized&&e[1].segment.initialized&&e[2].segment.initialized&&e[3].segment.initialized}destroySegment(){this.clearSegment();let e=this._slices.length;for(;e--;)this._slices[e].clear();this._slices=null,this.node=null,this.planet=null,this.handler=null,this.bbox=null,this.bsphere=null,this._extent=null,this.materials=null,this.plainVertices=null,this.plainVerticesHigh=null,this.plainVerticesLow=null,this.plainNormals=null,this.terrainVertices=null,this.terrainVerticesHigh=null,this.terrainVerticesLow=null,this.noDataVertices=null,this.tempVertices=null,this.tempVerticesHigh=null,this.tempVerticesLow=null,this.normalMapTextureBias=null,this.normalMapTexture=null,this.normalMapVertices=null,this.normalMapVerticesHigh=null,this.normalMapVerticesLow=null,this.normalMapNormals=null,this.vertexNormalBuffer=null,this.vertexPositionBuffer=null,this.vertexPositionBufferHigh=null,this.vertexPositionBufferLow=null,this.vertexTextureCoordBuffer=null,this._projection=null,this._appliedNeighborsZoom=null,this._globalTextureCoordinates=null}_setExtentLonLat(){this._extentLonLat=this._extent.inverseMercator()}_createExtentNormals(){const e=this.planet.ellipsoid,t=this._extentLonLat,i=e.geodeticToCartesian(t.southWest.lon,t.southWest.lat),r=e.geodeticToCartesian(t.northEast.lon,t.northEast.lat),s=e.geodeticToCartesian(t.southWest.lon,t.northEast.lat),n=e.geodeticToCartesian(t.northEast.lon,t.southWest.lat);this._sw.copy(i),this._nw.copy(s),this._ne.copy(r),this._se.copy(n)}createBoundsByExtent(){this._createExtentNormals(),this.setBoundingVolume3v(this._sw,this._ne)}createBoundsByParent(){let e=this.node;for(;e.parentNode&&!e.segment.terrainReady;)e=e.parentNode;let t=1<<this.tileZoom-e.segment.tileZoom,i=this.tileX-e.segment.tileX*t,r=this.tileY-e.segment.tileY*t;if(e.segment.terrainReady&&e.segment.tileZoom>=this.planet.terrain.minZoom){let s=e.segment.gridSize/t;if(s>=1){this.bsphere.center.x=e.segment.bsphere.center.x,this.bsphere.center.y=e.segment.bsphere.center.y,this.bsphere.center.z=e.segment.bsphere.center.z,this.bsphere.radius=e.segment.bsphere.radius;let n=s*r,a=s*i,o=e.segment.gridSize+1,l=3*((n+s)*o+a),c=3*(n*o+a),d=3*(n*o+a+s),f=3*((n+s)*o+a+s),_=e.segment.tempVertices,g=new m(_[l],_[l+1],_[l+2]),v=new m(_[d],_[d+1],_[d+2]),u=new m(_[c],_[c+1],_[c+2]),p=new m(_[f],_[f+1],_[f+2]);this._sw.copy(g),this._nw.copy(u),this._ne.copy(v),this._se.copy(p)}else{let n=e.segment,a=Math.floor(s*r),o=Math.floor(s*i),l=1/s,c=r-l*a,d=i-l*o,f;n.gridSize===1?f=n.tempVertices:f=$s(n.tempVertices,n.gridSize,a,o,1);let _=new m(f[0],f[1],f[2]),g=new m(f[9],f[10],f[11]),v=new m(f[3]-f[0],f[4]-f[1],f[5]-f[2]),u=new m(f[6]-f[0],f[7]-f[1],f[8]-f[2]),p=new m(f[3]-f[9],f[4]-f[10],f[5]-f[11]),b=new m(f[6]-f[9],f[7]-f[10],f[8]-f[11]),w=c,y=d,x,T;w+y<l?x=m.add(v.scaleTo(y/l),u.scaleTo(w/l)).addA(_):x=m.add(b.scaleTo(1-y/l),p.scaleTo(1-w/l)).addA(g),w=c+1,y=d+1,w+y<l?T=m.add(v.scaleTo(y/l),u.scaleTo(w/l)).addA(_):T=m.add(b.scaleTo(1-y/l),p.scaleTo(1-w/l)).addA(g),this._createExtentNormals(),this.setBoundingVolume3v(x,T)}}else this.createBoundsByExtent()}setBoundingSphere(e,t,i,r){this.bsphere.center.x=e,this.bsphere.center.y=t,this.bsphere.center.z=i,this.bsphere.radius=this.bsphere.center.distance(r)}setBoundingVolume(e,t,i,r,s,n){this.bbox.setFromBoundsArr([e,t,i,r,s,n]);let a=e+(r-e)*.5,o=t+(s-t)*.5,l=i+(n-i)*.5;this.bsphere.center.set(a,o,l),this.bsphere.radius=this.bsphere.center.distance(new m(e,t,i))}setBoundingVolume3v(e,t){this.bbox.setFromBoundsArr([e.x,e.y,e.z,t.x,t.y,t.z]);let i=e.x+(t.x-e.x)*.5,r=e.y+(t.y-e.y)*.5,s=e.z+(t.z-e.z)*.5;this.bsphere.center.set(i,r,s),this.bsphere.radius=this.bsphere.center.distance(new m(e.x,e.y,e.z))}setBoundingVolumeArr(e){this.bbox.setFromBoundsArr(e);let t=e[0]+(e[3]-e[0])*.5,i=e[1]+(e[4]-e[1])*.5,r=e[2]+(e[5]-e[2])*.5;this.bsphere.center.set(t,i,r),this.bsphere.radius=this.bsphere.center.distance(new m(e[0],e[1],e[2]))}createCoordsBuffers(e,t,i){const r=(i+1)*(i+1),s=this.handler;this.vertexPositionBufferHigh&&this.vertexPositionBufferHigh.numItems===r?(s.setStreamArrayBuffer(this.vertexPositionBufferHigh,e),s.setStreamArrayBuffer(this.vertexPositionBufferLow,t)):(s.gl.deleteBuffer(this.vertexPositionBufferHigh),s.gl.deleteBuffer(this.vertexPositionBufferLow),this.vertexTextureCoordBuffer=this.planet._textureCoordsBufferCache[Math.log2(i)],this.vertexPositionBufferHigh=s.createArrayBuffer(e,3,r),this.vertexPositionBufferLow=s.createArrayBuffer(t,3,r))}_addViewExtent(){const e=this._extentLonLat;let t=this.planet._viewExtent;e.southWest.lon<t.southWest.lon&&(t.southWest.lon=e.southWest.lon),e.northEast.lon>t.northEast.lon&&(t.northEast.lon=e.northEast.lon),e.southWest.lat<t.southWest.lat&&(t.southWest.lat=e.southWest.lat),e.northEast.lat>t.northEast.lat&&(t.northEast.lat=e.northEast.lat)}_assignTileIndexes(){this._tileGroup=We;const e=this.tileZoom,t=this._extent,i=_e;this.tileX=Me(t.getCenter().lon,t.getWidth(),-2003750834e-2),this.tileY=Me(t.getCenter().lat,t.getHeight(),i);const r=this.powTileZoom;this.tileXE=(this.tileX+1)%r,this.tileXW=(r+this.tileX-1)%r,this.tileYN=this.tileY-1,this.tileYS=this.tileY+1,this.tileIndex=Qe.getTileIndex(this.tileX,this.tileY,e,this._tileGroup)}initialize(){const e=this.planet,t=this.node;if(this.gridSize=e.terrain.gridSizeByZoom[this.tileZoom]||e.terrain.plainGridSize,t.sideSizeLog2[0]=t.sideSizeLog2[1]=t.sideSizeLog2[2]=t.sideSizeLog2[3]=Math.log2(this.gridSize),this.tileZoom<=e.terrain.maxZoom){const i=this.planet._normalMapCreator;this.normalMapTexturePtr=e.renderer.handler.createEmptyTexture_l(i.width,i.height)}this.normalMapTexture=this.planet.transparentTexture,this._assignGlobalTextureCoordinates(),this.initialized=!0}_assignGlobalTextureCoordinates(){const e=this._extent;this._globalTextureCoordinates[0]=(e.southWest.lon+_e)*hi,this._globalTextureCoordinates[1]=(_e-e.northEast.lat)*hi,this._globalTextureCoordinates[2]=(e.northEast.lon+_e)*hi,this._globalTextureCoordinates[3]=(_e-e.southWest.lat)*hi}createPlainSegmentAsync(){let e=this.planet,t=e.terrain;t.isReady()&&!this.plainReady&&this.tileZoom<=t.maxZoom&&(this.plainProcessing=!0,e._plainSegmentWorker.make(this))}_plainSegmentWorkerCallback(e){this.plainProcessing=!1,this.initialized&&!this.terrainReady&&(this.plainReady=!0,this.plainVertices=e.plainVertices,this.plainVerticesHigh=e.plainVerticesHigh,this.plainVerticesLow=e.plainVerticesLow,this.plainNormals=e.plainNormals,this._plainRadius=e.plainRadius,this.normalMapNormals=e.normalMapNormals,this.normalMapVertices=e.normalMapVertices,this.normalMapVerticesHigh=e.normalMapVerticesHigh,this.normalMapVerticesLow=e.normalMapVerticesLow,this.fileGridSize=Math.sqrt(e.normalMapVertices.length/3)-1)}createPlainSegment(){this.initialize(),this._createPlainVertices(),this.readyToEngage=!0}_projToDeg(e,t){return P.inverseMercator(e,t)}_createPlainVertices(){const e=this.planet.terrain.gridSizeByZoom[this.tileZoom],t=this.planet.terrain.plainGridSize,i=Math.max(t,e),r=this._extent,s=r.getWidth(),n=r.getHeight(),a=s/i,o=n/i,l=r.southWest.lon,c=r.northEast.lat,d=Math.max(t/e,1),f=i+1,_=this.planet.ellipsoid._invRadii2,g=f*f,v=(e+1)*(e+1)*3;let u=0,p=0;this.plainNormals=new Float32Array(v),this.plainVertices=new Float64Array(v),this.plainVerticesHigh=new Float32Array(v),this.plainVerticesLow=new Float32Array(v),this.normalMapNormals=new Float32Array(g*3),this.normalMapVertices=new Float64Array(g*3),this.normalMapVerticesHigh=new Float32Array(g*3),this.normalMapVerticesLow=new Float32Array(g*3);let b=this.plainVertices,w=this.plainVerticesHigh,y=this.plainVerticesLow,x=this.plainNormals,T=this.normalMapVertices,A=this.normalMapVerticesHigh,E=this.normalMapVerticesLow,C=this.normalMapNormals;for(let B=0;B<g;B++){let F=B%f,k=~~(B/f),M=this.planet.ellipsoid.lonLatToCartesian(this._projToDeg(l+F*a,c-k*o)),L=M.x*_.x,I=M.y*_.y,z=M.z*_.z,R=1/Math.sqrt(L*L+I*I+z*z),S=L*R,q=I*R,Je=z*R;m.doubleToTwoFloats(M,ut,_t),T[p]=M.x,A[p]=ut.x,E[p]=_t.x,C[p++]=S,T[p]=M.y,A[p]=ut.y,E[p]=_t.y,C[p++]=q,T[p]=M.z,A[p]=ut.z,E[p]=_t.z,C[p++]=Je,k%d===0&&F%d===0&&(b[u]=M.x,w[u]=ut.x,y[u]=_t.x,x[u++]=S,b[u]=M.y,w[u]=ut.y,y[u]=_t.y,x[u++]=q,b[u]=M.z,w[u]=ut.z,y[u]=_t.z,x[u++]=Je)}this.terrainVertices=b,this.terrainVerticesHigh=w,this.terrainVerticesLow=y,this.plainReady=!0}getMaterialByLayer(e){return this.materials[e.__id]}_getLayerExtentOffset(e){const t=e._extentMerc,i=this._extent,r=t.northEast.lon-t.southWest.lon,s=t.northEast.lat-t.southWest.lat,n=(i.southWest.lon-t.southWest.lon)/r,a=(t.northEast.lat-i.northEast.lat)/s,o=(i.northEast.lon-i.southWest.lon)/r,l=(i.northEast.lat-i.southWest.lat)/s;return[n,a,o,l]}initSlice(e){let t=this._slices[e];return t?t.layers=[]:t=this._slices[e]=new Il(this),t}screenRendering(e,t,i,r,s=!1,n){const a=this.handler.gl,o=e.attributes,l=e.uniforms,c=this.materials,d=this.planet;let f,_;t&&t.length?(_=t[0],f=_._height):f=0,a.activeTexture(a.TEXTURE0+d.SLICE_SIZE+2),a.bindTexture(a.TEXTURE_2D,r||this.getDefaultTexture()),a.uniform1i(l.defaultTexture,d.SLICE_SIZE+2);let g=0,v=0,u=!1,p=this.initSlice(i);for(this._indexBuffer=this._getIndexBuffer();_;){if(this.layerOverlap(_)&&(_._fading&&_._fadingOpacity>0||(_.minZoom>=d.minCurrZoom||_.maxZoom>=d.minCurrZoom)&&(_.minZoom<=d.maxCurrZoom||_.maxZoom<=d.maxCurrZoom))){u=!0;let b=c[_.__id];b||(b=c[_.__id]=_.createMaterial(this)),b.isReady||(this.planet._renderCompleted=!1),p.append(_,b),d._samplerArr[g]=g,a.activeTexture(a.TEXTURE0+g),a.bindTexture(a.TEXTURE_2D,b.texture||d.transparentTexture),g++}v++,_=t[v]}(u||!s)&&(a.uniform1f(l.transitionOpacity,n||this._transitionOpacity>1?1:this._transitionOpacity),a.uniform1i(l.samplerCount,g),a.uniform1f(l.height,f),a.uniform1iv(l.samplerArr,d._samplerArr),a.uniform4fv(l.tileOffsetArr,p.tileOffsetArr),a.uniform1fv(l.layerOpacityArr,p.layerOpacityArr),d.lightEnabled&&(a.activeTexture(a.TEXTURE0+d.SLICE_SIZE+3),a.bindTexture(a.TEXTURE_2D,this.normalMapTexture||d.transparentTexture),a.uniform1i(l.uNormalMap,d.SLICE_SIZE+3),a.uniform3fv(l.uNormalMapBias,this.normalMapTextureBias),a.uniform4fv(l.uGlobalTextureCoord,this._globalTextureCoordinates)),a.bindBuffer(a.ARRAY_BUFFER,this.vertexPositionBufferHigh),a.vertexAttribPointer(o.aVertexPositionHigh,this.vertexPositionBufferHigh.itemSize,a.FLOAT,!1,0,0),a.bindBuffer(a.ARRAY_BUFFER,this.vertexPositionBufferLow),a.vertexAttribPointer(o.aVertexPositionLow,this.vertexPositionBufferLow.itemSize,a.FLOAT,!1,0,0),a.bindBuffer(a.ARRAY_BUFFER,this.vertexTextureCoordBuffer),a.vertexAttribPointer(o.aTextureCoord,2,a.UNSIGNED_SHORT,!0,0,0),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this._indexBuffer),a.drawElements(d.drawMode,this._indexBuffer.numItems,a.UNSIGNED_INT,0))}heightPickingRendering(e,t){const i=this.handler.gl,r=e.attributes,s=e.uniforms;let n;t&&t.length?n=t[0]._height:n=0,i.uniform1f(s.height,n),i.bindBuffer(i.ARRAY_BUFFER,this.vertexPositionBufferHigh),i.vertexAttribPointer(r.aVertexPositionHigh,this.vertexPositionBufferHigh.itemSize,i.FLOAT,!1,0,0),i.bindBuffer(i.ARRAY_BUFFER,this.vertexPositionBufferLow),i.vertexAttribPointer(r.aVertexPositionLow,this.vertexPositionBufferLow.itemSize,i.FLOAT,!1,0,0),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,this._indexBuffer),i.drawElements(i.TRIANGLE_STRIP,this._indexBuffer.numItems,i.UNSIGNED_INT,0)}increaseTransitionOpacity(){this._transitionOpacity+=(window.performance.now()-this._transitionTimestamp)/this.planet.transitionTime,this._transitionTimestamp=window.performance.now(),this._transitionOpacity>2&&(this._transitionOpacity=2);let e=this.node._fadingNodes.length;for(;e--;){let t=this.node._fadingNodes[e];if(t.segment)t.segment._transitionOpacity>0&&!this.planet._fadingNodes.has(t.__id)&&(this.planet._fadingNodes.set(t.__id,t),t.segment._transitionOpacity=2-this._transitionOpacity,t.segment._transitionOpacity===0&&this.node._fadingNodes.splice(e,1));else{this._transitionOpacity=1;break}}}fadingTransitionOpacity(){this._transitionOpacity-=.01,this._transitionTimestamp=window.performance.now(),this._transitionOpacity<0&&(this._transitionOpacity=0)}colorPickingRendering(e,t,i,r,s=!1){const n=this.handler.gl,a=e.attributes,o=e.uniforms;let l=this.materials,c=this.planet,d;t&&t.length?d=t[0]._height:d=0;let f=!1,_=this._slices[i],g=_.layers.length;for(let v=0;v<g;v++){f=!0;let u=_.layers[v],p=v*4;c._pickingColorArr[p]=u._pickingColor.x/255,c._pickingColorArr[p+1]=u._pickingColor.y/255,c._pickingColorArr[p+2]=u._pickingColor.z/255,c._pickingColorArr[p+3]=Number(u._pickingEnabled),c._samplerArr[v]=v,n.activeTexture(n.TEXTURE0+v),n.bindTexture(n.TEXTURE_2D,l[u.__id].texture||this.planet.transparentTexture),c._pickingMaskArr[v]=v+c.SLICE_SIZE,n.activeTexture(n.TEXTURE0+v+c.SLICE_SIZE),n.bindTexture(n.TEXTURE_2D,l[u.__id].pickingMask||this.planet.transparentTexture)}(f||!s)&&(n.uniform1i(o.samplerCount,g),n.uniform1f(o.height,d),n.uniform1iv(o.samplerArr,c._samplerArr),n.uniform1iv(o.pickingMaskArr,c._pickingMaskArr),n.uniform4fv(o.pickingColorArr,c._pickingColorArr),n.uniform4fv(o.tileOffsetArr,_.tileOffsetArr),n.uniform1fv(o.layerOpacityArr,_.layerOpacityArr),n.bindBuffer(n.ARRAY_BUFFER,this.vertexPositionBufferHigh),n.vertexAttribPointer(a.aVertexPositionHigh,this.vertexPositionBufferHigh.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this.vertexPositionBufferLow),n.vertexAttribPointer(a.aVertexPositionLow,this.vertexPositionBufferLow.itemSize,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this.vertexTextureCoordBuffer),n.vertexAttribPointer(a.aTextureCoord,2,n.UNSIGNED_SHORT,!0,0,0),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,this._indexBuffer),n.drawElements(n.TRIANGLE_STRIP,this._indexBuffer.numItems,n.UNSIGNED_INT,0))}depthRendering(e,t){const i=this.handler.gl,r=e.attributes,s=e.uniforms;var n;t&&t.length?n=t[0]._height:n=0,i.uniform1f(s.height,n),i.bindBuffer(i.ARRAY_BUFFER,this.vertexPositionBufferHigh),i.vertexAttribPointer(r.aVertexPositionHigh,this.vertexPositionBufferHigh.itemSize,i.FLOAT,!1,0,0),i.bindBuffer(i.ARRAY_BUFFER,this.vertexPositionBufferLow),i.vertexAttribPointer(r.aVertexPositionLow,this.vertexPositionBufferLow.itemSize,i.FLOAT,!1,0,0),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,this._indexBuffer),i.drawElements(i.TRIANGLE_STRIP,this._indexBuffer.numItems,i.UNSIGNED_INT,0)}_getIndexBuffer(){const e=this.node.sideSizeLog2;let t=this.planet._indexesCache[Math.log2(this.gridSize)][e[0]][e[1]][e[2]][e[3]];if(!t.buffer){let i=mi().createSegmentIndexes(Math.log2(this.gridSize),[e[0],e[1],e[2],e[3]]);t.buffer=this.planet.renderer.handler.createElementArrayBuffer(i,1),this.planet._indexesCacheToRemoveCounter++}return t.buffer}layerOverlap(e){return this._extent.overlaps(e._extentMerc)}getDefaultTexture(){return this.planet.solidTextureOne}getExtentLonLat(){return this._extentLonLat}getExtentMerc(){return this._extentMerc}getExtent(){return this._extent}getNeighborSide(e){if(this.tileY===e.tileY){if(this.tileX===e.tileXE)return ie;if(this.tileX===e.tileXW)return te}else if(this.tileX===e.tileX){if(this.tileY===e.tileYS)return Q;if(this.tileY===e.tileYN)return J}return-1}}let _i=new m,gi=new m;const gt=[new V(0,0),new V(1,0),new V(0,1),new V(1,1)],Fl=Math.sqrt(gt.length)-1;let Y={xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0},kl=0,Zi=class Gt{constructor(e,t,i,r,s,n){t._createdNodesCount++,this.__id=kl++,this.SegmentPrototype=e,this.planet=t,this.parentNode=r,this.partId=i,this.nodeId=i+(r?r.nodeId*4+1:0),this.state=null,this.prevState=null,this.appliedTerrainNodeId=-1,this.sideSizeLog2=[0,0,0,0],this.ready=!1,this.neighbors=[[],[],[],[]],this.equalizedSideWithNodeId=[this.nodeId,this.nodeId,this.nodeId,this.nodeId],this.nodes=[],this.segment=new e(this,t,s,n),this._cameraInside=!1,this.inFrustum=0,this._fadingNodes=[],this.createBounds()}createChildrenNodes(){this.ready=!0;const e=this.planet,t=this.segment,i=t._extent,r=t.tileZoom+1,s=i.getWidth()*.5,n=i.getHeight()*.5,a=i.northEast,o=i.southWest,l=new P(o.lon+s,o.lat+n),c=this.nodes;c[ne]=new Gt(this.SegmentPrototype,e,ne,this,r,new U(new P(o.lon,o.lat+n),new P(o.lon+s,a.lat))),c[de]=new Gt(this.SegmentPrototype,e,de,this,r,new U(l,new P(a.lon,a.lat))),c[fe]=new Gt(this.SegmentPrototype,e,fe,this,r,new U(new P(o.lon,o.lat),l)),c[ue]=new Gt(this.SegmentPrototype,e,ue,this,r,new U(new P(o.lon+s,o.lat),new P(a.lon,o.lat+n)))}createBounds(){let e=this.segment;e._setExtentLonLat(),e.tileZoom===0?e.setBoundingSphere(0,0,0,new m(0,0,e.planet.ellipsoid.equatorialSize)):e.tileZoom<e.planet.terrain.minZoom?e.createBoundsByExtent():e.createBoundsByParent();let t=e.bsphere.center.x,i=e.bsphere.center.y,r=e.bsphere.center.z,s=1/Math.sqrt(t*t+i*i+r*r);e.centerNormal.x=t*s,e.centerNormal.y=i*s,e.centerNormal.z=r*s}getState(){if(this.state===-1)return this.state;let e=this.parentNode;for(;e;){if(e.state!==Oi)return Ve;e=e.parentNode}return this.state}getEqualNeighbor(e){let t=this,i=Or[e][t.partId];if(i!==-1)return t.parentNode.nodes[i];{let r=[];for(;t.parentNode;)if(r.push(t.partId),i=Or[e][t.partId],t=t.parentNode,i!==-1){let s=r.length;for(e=jt[e];t&&s--;)i=Sa[e][r[s]],t=t.nodes[i];return t}}}traverseNodes(e,t,i,r,s){this.ready||this.createChildrenNodes();let n=this.nodes;n[0].renderTree(e,t,i,r,s),n[1].renderTree(e,t,i,r,s),n[2].renderTree(e,t,i,r,s),n[3].renderTree(e,t,i,r,s)}renderTree(e,t,i,r,s){if(this.planet._renderedNodes.length>=Ba)return;(!t||s&&this.segment.tileZoom>s.segment.tileZoom)&&(this.prevState=this.state),this.state=Oi,this.clearNeighbors();let n=this.segment,a=this.planet;if(this._cameraInside=!1,!this.parentNode||this.parentNode._cameraInside){let c;n._projection.id===Br.id?c=n._extent.isInside(e._lonLatMerc):c=n._extent.isInside(e._lonLat),c&&(e._insideSegment=n,this._cameraInside=!0)}this.inFrustum=0;let o=e.frustums,l=o.length;if(n.tileZoom<6)for(let c=0;c<l;c++)o[c].containsSphere(n.bsphere)&&(this.inFrustum|=1<<c);else for(let c=0;c<l;c++)n.terrainReady?o[c].containsBox(n.bbox)&&(this.inFrustum|=1<<c):o[c].containsSphere(n.bsphere)&&(this.inFrustum|=1<<c);if(this.inFrustum||this._cameraInside||n.tileZoom<3){let c=Math.abs(e._lonLat.height),d=e.eye.length2()-a.ellipsoid.polarSizeSqr;d=d<10687647287563281e-5*a._heightFactor?10687647287563281e-5*a._heightFactor:d;let f=n.tileZoom<2||n.tileZoom>19||n.tileZoom<6&&!n.terrainReady;f=f||e.eye.distance2(n._sw)<d||e.eye.distance2(n._nw)<d||e.eye.distance2(n._ne)<d||e.eye.distance2(n._se)<d,(this.inFrustum&&(f||c>1e4)||this._cameraInside)&&a.quadTreeStrategy.collectVisibleNode(this),n.tileZoom<2?this.traverseNodes(e,t,i,r,s):n.terrainReady&&(!t&&e.projectedSize(n.bsphere.center,n._plainRadius)<a.lodSize||t&&(n.tileZoom===t||!f))?f?(n.passReady=!0,this.renderNode(this.inFrustum,!this.inFrustum,i,r)):this.state=Ve:n.terrainReady&&n.checkZoom()&&(!t||e.projectedSize(n.bsphere.center,n.bsphere.radius)>this.planet._maxLodSize)?this.traverseNodes(e,t,n,r,s):f?(n.passReady=t?n.terrainReady:!1,this.renderNode(this.inFrustum,!this.inFrustum,i,r)):this.state=Ve}else this.state=Ve}renderNode(e,t,i,r){let s=this.segment;if(s.terrainReady||(s.initialized||s.initialize(),this.whileTerrainLoading(i),s.plainProcessing||s.createPlainSegmentAsync(),s.plainReady&&!r&&s.loadTerrain()),s.planet.lightEnabled&&!s.normalMapReady&&this.whileNormalMapCreating(),t){this.state=-1;return}!this._cameraInside&&s.tileZoom>this.planet.maxCurrZoom&&(this.planet.maxCurrZoom=s.tileZoom),s.tileZoom<this.planet.minCurrZoom&&(this.planet.minCurrZoom=s.tileZoom),s._addViewExtent(),this.addToRender(e)}childrenPrevStateEquals(e){let t=this.nodes;return t.length===4&&t[0].prevState===e&&t[1].prevState===e&&t[2].prevState===e&&t[3].prevState===e}isFading(){let e=this.nodes;return this.state===Oi&&this.segment._transitionOpacity>0&&e.length===4&&e[0].state===Te&&e[1].state===Te&&e[2].state===Te&&e[3].state===Te}_collectFadingNodes(){if(this.segment.tileZoom<3){this.segment._transitionOpacity=1;return}if(this.prevState!==Te){this.segment._transitionOpacity=0,this._fadingNodes=[];let e=window.performance.now();if(this.segment._transitionTimestamp=e,this.parentNode){if(this.parentNode.prevState===Te){let t=this.parentNode.parentNode;for(;t;){if(t.isFading()){for(let i=0;i<t.nodes.length;i++)t.nodes[i].segment._transitionOpacity=1,t.nodes[i]._fadingNodes=[];t.segment._transitionOpacity=0;break}t=t.parentNode}this.parentNode.whileTerrainLoading(),this._fadingNodes.push(this.parentNode),this.parentNode.segment._transitionOpacity=2,this.parentNode.segment._transitionTimestamp=e}else if(this.segment.childrenInitialized()&&this.childrenPrevStateEquals(Te))for(let t=0;t<this.nodes.length;t++){let i=this.nodes[t];i.whileTerrainLoading(),this._fadingNodes.push(i),i.segment._transitionOpacity=2,i.segment._transitionTimestamp=e,i.prevState=i.state,i.state=Ve}}}}clearNeighbors(){this.neighbors&&(this.neighbors[0]=this.neighbors[1]=this.neighbors[2]=this.neighbors[3]=null,this.neighbors[0]=[],this.neighbors[1]=[],this.neighbors[2]=[],this.neighbors[3]=[])}_refreshTransitionOpacity(){if(this._fadingNodes.length===0)this.segment._transitionOpacity=1;else if(this._fadingNodes.length===4&&!this.childrenPrevStateEquals(Te))this.segment._transitionOpacity=1,this._fadingNodes=[];else{for(let e=0;e<this._fadingNodes.length;e++)this.segment._transitionOpacity<1&&this._fadingNodes[e].segment._transitionOpacity===0&&(this._fadingNodes[e].segment._transitionOpacity=0,this.segment._transitionOpacity=1);this.segment.increaseTransitionOpacity()}}addToRender(e){this.state=Te;let t=this.planet._renderedNodes;this.planet._transitionOpacityEnabled?Zs(t,this,(s,n)=>s.segment.tileZoom-n.segment.tileZoom):(this.getRenderedNodesNeighbors(t),t.push(this)),this.segment.terrainReady||(this.planet._renderCompleted=!1,this.planet._terrainCompleted=!1);let i=0,r=this.planet._renderedNodesInFrustum;for(;e;)e&1&&r[i].push(this),i++,e>>=1}applyNeighbor(e,t){const i=jt[t];if(this.neighbors[t].length===0||e.neighbors[i].length===0){const r=this.segment,s=e.segment,n=r.gridSize/(s.gridSize*Math.pow(2,s.tileZoom-r.tileZoom));let a=r.gridSize,o=s.gridSize;n>1?(a=Math.ceil(r.gridSize/n),o=s.gridSize):n<1&&(a=r.gridSize,o=Math.ceil(s.gridSize*n)),this.sideSizeLog2[t]=Math.log2(a),e.sideSizeLog2[i]=Math.log2(o)}this.neighbors[t].push(e),e.neighbors[i].push(this)}getRenderedNodesNeighbors(e){for(let t=e.length-1;t>=0;--t){let i=e[t],r=this.getCommonSide(i);r!==-1&&this.applyNeighbor(i,r)}}getCommonSide(e){const t=this.segment,i=e.segment;if(t.tileZoom===i.tileZoom&&t._tileGroup===i._tileGroup)return t.getNeighborSide(i);{const r=t._extentLonLat,s=i._extentLonLat;let n=r.northEast,a=r.southWest,o=s.northEast,l=s.southWest,c=n.lon,d=n.lat,f=a.lon,_=a.lat,g=o.lon,v=o.lat,u=l.lon,p=l.lat;if(t._tileGroup===i._tileGroup){if(c===u&&(d<=v&&_>=p||d>=v&&_<=p))return te;if(f===g&&(d<=v&&_>=p||d>=v&&_<=p))return ie;if(d===p&&(f>=u&&c<=g||f<=u&&c>=g))return Q;if(_===v&&(f>=u&&c<=g||f<=u&&c>=g))return J;if(i.tileX===0&&u===-c&&(d<=v&&_>=p||d>=v&&_<=p))return te;if(t.tileX===0&&f===-g&&(d<=v&&_>=p||d>=v&&_<=p))return ie}if(t._tileGroup===We&&i._tileGroup===Mt&&t.tileY===0&&i.tileY===i.powTileZoom-1&&(f>=u&&c<=g||f<=u&&c>=g))return Q;if(t._tileGroup===We&&i._tileGroup===It&&t.tileY===t.powTileZoom-1&&i.tileY===0&&(f>=u&&c<=g||f<=u&&c>=g))return J;if(t._tileGroup===It&&i._tileGroup===We&&t.tileY===0&&i.tileY===i.powTileZoom-1&&(f>=u&&c<=g||f<=u&&c>=g))return Q;if(t._tileGroup===Mt&&i._tileGroup===We&&t.tileY===t.powTileZoom-1&&i.tileY===0&&(f>=u&&c<=g||f<=u&&c>=g))return J}return-1}whileNormalMapCreating(){const e=this.segment;!e.terrainIsLoading&&e.terrainExists&&!e._inTheQueue&&e.planet._normalMapCreator.queue(e);let t=this;for(;t.parentNode&&!t.segment.normalMapReady;)t=t.parentNode;const i=2<<e.tileZoom-t.segment.tileZoom-1;e.normalMapTexture=t.segment.normalMapTexture,e.normalMapTextureBias[0]=e.tileX-t.segment.tileX*i,e.normalMapTextureBias[1]=e.tileY-t.segment.tileY*i,e.normalMapTextureBias[2]=1/i}whileTerrainLoading(e){const t=this.segment;let i=this;if(e&&e.terrainReady)i=e.node;else for(;i.parentNode&&!i.segment.terrainReady;)i=i.parentNode;if(i.segment.terrainReady&&this.appliedTerrainNodeId!==i.nodeId){let r=2<<t.tileZoom-i.segment.tileZoom-1,s=t.tileX-i.segment.tileX*r,n=t.tileY-i.segment.tileY*r;const a=i.segment;let o,l,c,d;this.appliedTerrainNodeId=i.nodeId,this.equalizedSideWithNodeId[Q]=this.equalizedSideWithNodeId[te]=this.equalizedSideWithNodeId[J]=this.equalizedSideWithNodeId[ie]=this.appliedTerrainNodeId;let f=i.segment.gridSize/r,_=i.segment.fileGridSize/r;if(Y.xmin=pe,Y.xmax=ve,Y.ymin=pe,Y.ymax=ve,Y.zmin=pe,Y.zmax=ve,f>=1){t.gridSize=f;let g=(f+1)*(f+1)*3;o=new Float64Array(g),l=new Float32Array(g),c=new Float32Array(g),a.noDataVertices&&(d=new Uint8Array(g/3)),Dr(a.terrainVertices,a.terrainVerticesHigh,a.terrainVerticesLow,a.noDataVertices,a.gridSize,f*n,f*s,f,o,l,c,Y,d)}else if(_>=1&&i.segment.terrainExists){t.gridSize=_;let g=(_+1)*(_+1)*3;o=new Float64Array(g),l=new Float32Array(g),c=new Float32Array(g),a.noDataVertices&&(d=new Uint8Array(g/3)),Dr(a.normalMapVertices,a.normalMapVerticesHigh,a.normalMapVerticesLow,a.noDataVertices,i.segment.fileGridSize,_*n,_*s,_,o,l,c,Y,d)}else{t.gridSize=Fl;let g=Math.floor(f*n),v=Math.floor(f*s),u;a.gridSize===1?u=a.terrainVertices:u=$s(a.terrainVertices,a.gridSize,g,v,1);let p=1/f,b=n-p*g,w=s-p*v,y=new m(u[0],u[1],u[2]),x=new m(u[9],u[10],u[11]),T=new m(u[3]-u[0],u[4]-u[1],u[5]-u[2]),A=new m(u[6]-u[0],u[7]-u[1],u[8]-u[2]),E=new m(u[3]-u[9],u[4]-u[10],u[5]-u[11]),C=new m(u[6]-u[9],u[7]-u[10],u[8]-u[11]),B=new m;o=new Float64Array(3*gt.length),l=new Float32Array(3*gt.length),c=new Float32Array(3*gt.length);for(let F=0;F<gt.length;F++){let k=gt[F].y+b,M=gt[F].x+w,L=M*f,I=k*f;k+M<p?B=T.scaleTo(L).addA(A.scaleTo(I)).addA(y):B=C.scaleTo(1-L).addA(E.scaleTo(1-I)).addA(x),m.doubleToTwoFloats(B,_i,gi);let z=F*3;o[z]=B.x,o[z+1]=B.y,o[z+2]=B.z,l[z]=_i.x,l[z+1]=_i.y,l[z+2]=_i.z,c[z]=gi.x,c[z+1]=gi.y,c[z+2]=gi.z,B.x<Y.xmin&&(Y.xmin=B.x),B.x>Y.xmax&&(Y.xmax=B.x),B.y<Y.ymin&&(Y.ymin=B.y),B.y>Y.ymax&&(Y.ymax=B.y),B.z<Y.zmin&&(Y.zmin=B.z),B.z>Y.zmax&&(Y.zmax=B.z)}}if(t.readyToEngage=!0,t.terrainVertices=o,t.terrainVerticesHigh=l,t.terrainVerticesLow=c,t.tempVertices=o,t.tempVerticesHigh=l,t.tempVerticesLow=c,t.noDataVertices=d,t.setBoundingVolume(Y.xmin,Y.ymin,Y.zmin,Y.xmax,Y.ymax,Y.zmax),t.tileZoom>t.planet.terrain.maxZoom&&i.segment.tileZoom>=t.planet.terrain.maxZoom&&(t._plainRadius=i.segment._plainRadius/r,t.terrainReady=!0,t.terrainIsLoading=!1,t.terrainVertices=o,t.terrainVerticesHigh=l,t.terrainVerticesLow=c,t.passReady=!0,this.appliedTerrainNodeId=this.nodeId,this.equalizedSideWithNodeId[Q]=this.equalizedSideWithNodeId[te]=this.equalizedSideWithNodeId[J]=this.equalizedSideWithNodeId[ie]=this.appliedTerrainNodeId,i.segment.terrainExists)){t.normalMapVertices=o,t.fileGridSize=Math.sqrt(o.length/3)-1;let g=Math.sqrt(a.normalMapNormals.length/3)-1,v=g/r;g>1?t.normalMapNormals=aa(a.normalMapNormals,g,v*n,v*s,v):t.normalMapNormals=a.normalMapNormals}}}destroy(){this.prevState=this.state=Ve,this.segment.destroySegment();let e=this.neighbors;for(let t=0,i=e.length;t<i;t++){let r=e[t];if(r)for(let s=0;s<r.length;s++){let n=r[s];n&&n.neighbors&&n.clearNeighbors()}}this.neighbors=null,this.parentNode=null,this.sideSizeLog2=null,this.segment=null}clearTree(){const e=this.getState();if(e===Ve||e===Te)this.destroyBranches();else for(let t=0;t<this.nodes.length;t++)this.nodes[t]&&this.nodes[t].clearTree()}clearBranches(){for(let e=0;e<this.nodes.length;e++)this.nodes[e].clearBranches(),this.nodes[e].segment.deleteMaterials()}destroyBranches(){if(this.ready){let e=[],t;for(t=0;t<this.nodes.length;t++)e[t]=this.nodes[t];for(this.ready=!1,this.nodes=[],t=0;t<e.length;t++)e[t].destroyBranches(),e[t].destroy(),e[t]=null;e.length=0,e=null}}traverseTree(e){if(e(this),this.ready)for(let t=0;t<this.nodes.length;t++)this.nodes[t].traverseTree(e)}getOffsetOppositeNeighbourSide(e,t){let i=this,r=e.segment.tileZoom,s=0;for(;i.segment.tileZoom>r;)s+=Ra[i.partId][t]/(1<<i.segment.tileZoom-r),i=i.parentNode;return s}};class Sr{constructor(e=2048){this._size=e,this._array=new Array(this._size),this._popIndex=Math.floor(this._size*.5),this._shiftIndex=this._popIndex,this.length=0}reset(){this._popIndex=Math.floor(this._size*.5),this._shiftIndex=this._popIndex,this.length=0}clear(){this._array.length=0,this._array=new Array(this._size),this._popIndex=Math.floor(this._size*.5),this._shiftIndex=this._popIndex,this.length=0}push(e){this.length++,this._array[this._popIndex++]=e}pop(){if(this.length){this.length--;let e=this._array[--this._popIndex];return this._array[this._popIndex]=null,this._array[this._popIndex-1]||(this._popIndex=Math.floor(this._size*.5),this._shiftIndex=this._popIndex),e}}unshift(e){this.length++,this._array[--this._shiftIndex]=e}shift(){if(this.length){this.length--;let e=this._array[this._shiftIndex];return this._array[this._shiftIndex++]=null,this._array[this._shiftIndex]||(this._popIndex=Math.floor(this._size*.5),this._shiftIndex=this._popIndex),e}}forEach(e){for(let t=this._shiftIndex;t<this._popIndex;t++)e(this._array[t])}}class zn{constructor(e,t){this._layer=e,this._nodeCapacity=t,this._secondPASS=[],this._counter=0,this._deferredEntitiesPendingQueue=new Sr,this._renderingNodes={}}insertEntity(e,t=!1){}setPickingEnabled(e){}dispose(){}insertEntities(e){}collectVisibleEntityCollections(e){}_queueDeferredNode(e){this._layer.getVisibility()&&(e._inTheQueue=!0,this._counter>=1?this._deferredEntitiesPendingQueue.push(e):this._execDeferredNode(e))}_execDeferredNode(e){this._counter++,requestAnimationFrame(()=>{if(e.applyCollection(),this._counter--,this._deferredEntitiesPendingQueue.length&&this._counter<1)for(;this._deferredEntitiesPendingQueue.length;){let t=this._deferredEntitiesPendingQueue.pop();if(t._inTheQueue=!1,t.isVisible()){this._execDeferredNode(t);return}}})}}class Nl{constructor(e,t="",i=Br){this.name=t,this.projection=i,this._planet=e,this._quadTreeList=[],this._visibleNodes={}}createEntitiCollectionsTreeStrategy(e,t){return new zn(e,t)}destroyBranches(){for(let e=0,t=this._quadTreeList.length;e<t;e++)this._quadTreeList[e].destroyBranches()}clearLayerMaterial(e){let t=e.__id;for(let i=0,r=this._quadTreeList.length;i<r;i++)this._quadTreeList[i].traverseTree(function(s){let n=s.segment.materials;n[t]&&(n[t].clear(),n[t]=null)})}get planet(){return this._planet}init(){}preRender(){for(let e=0;e<this._quadTreeList.length;e++){let t=this._quadTreeList[e];t.createChildrenNodes(),t.segment.createPlainSegment();for(let i=0;i<t.nodes.length;i++)t.nodes[i].segment.createPlainSegment()}}preLoad(){for(let e=0;e<this._quadTreeList.length;e++){let t=this._quadTreeList[e];t.segment.passReady=!0,t.renderNode(1),this._planet.normalMapCreator.drawSingle(t.segment);for(let i=0;i<t.nodes.length;i++)t.nodes[i].segment.passReady=!0,t.nodes[i].renderNode(1),this._planet._normalMapCreator.drawSingle(t.nodes[i].segment)}}_clearVisibleNodes(){this._visibleNodes={}}collectRenderNodes(){this._clearVisibleNodes();for(let e=0;e<this._quadTreeList.length;e++)this._quadTreeList[e].renderTree(this._planet.camera,0,null)}clear(){for(let e=0;e<this._quadTreeList.length;e++)this._quadTreeList[e].clearTree()}get quadTreeList(){return this._quadTreeList}getTileXY(e,t){let i=t,r=-1,s=-1,n=1<<i;return r=Me(e.lon,360/n,-180),s=Me(e.lat,180/n,90),[r,s,i,We]}getLonLatTileOffset(e,t,i,r,s){let n=e,a=new U,o=U.createFromArray([-180,-90,180,90]);a=_r(t,i,r,o);let l=a.getWidth()/(s-1),c=a.getHeight()/(s-1),d=s-Math.ceil((n.lat-a.southWest.lat)/c)-1,f=Math.floor((n.lon-a.southWest.lon)/l);return[d,f]}collectVisibleNode(e){this._visibleNodes[e.nodeId]=e}}const Fn=new Lr({code:"epsg:4326",units:Pr.DEGREES}),Dl=7,Es=(90-se)/Math.pow(2,Dl);class Cs extends In{constructor(e,t,i,r){super(e,t,i,r),this._projection=Fn,this._extentLonLat=this._extent,this._extentMerc=new U(r.southWest.forwardMercatorEPS01(),r.northEast.forwardMercatorEPS01()),this._isNorth=this._extent.northEast.lat>0,this.isPole=!0}_setExtentLonLat(){this._extentLonLat=this._extent}projectNative(e){return e}getInsideLonLat(e){return e._lonLat}_getMaxZoom(){let e=0;if(this._isNorth){let t=Math.floor((90-this._extent.northEast.lat)/Es);e=Math.floor(t/16)+7}else{let t=Math.floor((Ne-this._extent.northEast.lat)/Es);e=12-Math.floor(t/16)}return e}checkZoom(){return super.checkZoom()&&this.tileZoom<=this._getMaxZoom()}_assignTileIndexes(){this._assignTileXIndexes(this._extent),this._assignTileYIndexes(this._extent),this.tileIndex=Qe.getTileIndex(this.tileX,this.tileY,this.tileZoom,this._tileGroup)}_assignTileXIndexes(e){this.tileX=Me(e.getCenter().lon,e.getWidth(),-180);let t=1<<this.tileZoom;this.tileXE=(this.tileX+1)%t,this.tileXW=(t+this.tileX-1)%t}_assignTileYIndexes(e){const t=e.getCenter().lat;t>0?(this._tileGroup=Mt,this.tileY=Me(t,e.getHeight(),90)):(this._tileGroup=It,this.tileY=Me(t,e.getHeight(),Ne)),this.tileYN=this.tileY-1,this.tileYS=this.tileY+1}_projToDeg(e,t){return new P(e,t)}_assignGlobalTextureCoordinates(){const e=this._extent;this._globalTextureCoordinates[0]=(e.southWest.lon+180)/360,this._globalTextureCoordinates[1]=(90-e.northEast.lat)/180,this._globalTextureCoordinates[2]=(e.northEast.lon+180)/360,this._globalTextureCoordinates[3]=(90-e.southWest.lat)/180}_getLayerExtentOffset(e){const t=e._extent,i=this._extent,r=t.northEast.lon-t.southWest.lon,s=t.northEast.lat-t.southWest.lat,n=(i.southWest.lon-t.southWest.lon)/r,a=(t.northEast.lat-i.northEast.lat)/s,o=(i.northEast.lon-i.southWest.lon)/r,l=(i.northEast.lat-i.southWest.lat)/s;return[n,a,o,l]}layerOverlap(e){return this._extent.overlaps(e._extent)}getDefaultTexture(){return this._isNorth?this.planet.solidTextureOne:this.planet.solidTextureTwo}getExtentLonLat(){return this._extent}}class vt{constructor(e,t,i,r,s,n){this.strategy=e,this.layer=e._layer,this.parentNode=i,this.childrenNodes=[],this.partId=t,this.nodeId=t+(i?i.nodeId*4+1:0),this.state=null,this.extent=r,this.count=0,this.deferredEntities=[],this.entityCollection=null,this.zoom=n,this._inTheQueue=!1,this.bsphere=new nt,s&&this._setExtentBounds()}insertEntity(e,t=!1){this.buildTree([e],t)}_addEntitiesToCollection(e,t=!1){if(e.length){const i=this.layer,r=i._planet;let s=this.entityCollection;s||(s=new yt({pickingEnabled:i._pickingEnabled,labelMaxLetters:i.labelMaxLetters}),s._layer=this.layer,s.addTo(r,!0),s._quadNode=this,i._bindEventsDefault(s),this.entityCollection=s),t||!i.async?this.entityCollection.addEntities(e):this.deferredEntities.push.apply(this.deferredEntities,e)}}_setExtentBounds(){this.nodeId?this.bsphere.setFromExtent(this.layer._planet.ellipsoid,this.extent.inverseMercator()):(this.bsphere.radius=this.layer._planet.ellipsoid.equatorialSize,this.bsphere.center=new m)}__setLonLat__(e){return e._lonLat.isZero()&&!e._cartesian.isZero()&&(e._lonLat=this.layer._planet.ellipsoid.cartesianToLonLat(e._cartesian)),Math.abs(e._lonLat.lat)<se?e._lonLatMerc=e._lonLat.forwardMercator():e._lonLatMerc=new P,e._lonLatMerc}buildTree(e,t=!1){if(this.count+=e.length,e.length>this.layer._nodeCapacity){const i=this.childrenNodes;i.length||this.createChildrenNodes();let r=[],s=[],n=[],a=[],o=e.length;for(;o--;){const l=e[o];i[ne].isInside(l)?(l._nodePtr=i[ne],r.push(l)):i[de].isInside(l)?(l._nodePtr=i[de],s.push(l)):i[fe].isInside(l)?(l._nodePtr=i[fe],n.push(l)):i[ue].isInside(l)&&(l._nodePtr=i[ue],a.push(l))}r.length&&i[ne].buildTree(r,t),s.length&&i[de].buildTree(s,t),n.length&&i[fe].buildTree(n,t),a.length&&i[ue].buildTree(a,t)}else this._addEntitiesToCollection(e,t)}isInside(e){return e._lonLatMerc?this.extent.isInside(e._lonLatMerc):!1}createChildrenNodes(){const e=this.strategy,t=this.extent,i=t.getWidth()*.5,r=t.getHeight()*.5,s=t.northEast,n=t.southWest,a=new P(n.lon+i,n.lat+r),o=this.childrenNodes,l=this.layer._planet,c=this.zoom+1;o[ne]=new vt(e,ne,this,new U(new P(n.lon,n.lat+r),new P(n.lon+i,s.lat)),l,c),o[de]=new vt(e,de,this,new U(a,new P(s.lon,s.lat)),l,c),o[fe]=new vt(e,fe,this,new U(new P(n.lon,n.lat),a),l,c),o[ue]=new vt(e,ue,this,new U(new P(n.lon+i,n.lat),new P(s.lon,n.lat+r)),l,c)}collectRenderCollectionsPASS1(e,t){const i=e[this.nodeId];if(i){const r=this.childrenNodes;this.entityCollection?this.renderCollection(t,e):r.length&&(i.state===Te?this.strategy._secondPASS.push(this):(r[ne].collectRenderCollectionsPASS1(e,t),r[de].collectRenderCollectionsPASS1(e,t),r[fe].collectRenderCollectionsPASS1(e,t),r[ue].collectRenderCollectionsPASS1(e,t)))}}collectRenderCollectionsPASS2(e,t,i){const s=this.layer._planet.camera,n=s.eye.distance(this.bsphere.center)-this.bsphere.radius<La*Math.sqrt(s._lonLat.height)||s._lonLat.height>1e4;if(this.count>0&&n&&s.containsSphere(this.bsphere)){const a=this.childrenNodes;this.entityCollection?this.renderCollection(t,e,i):a.length&&(a[ne].collectRenderCollectionsPASS2(e,t,i),a[de].collectRenderCollectionsPASS2(e,t,i),a[fe].collectRenderCollectionsPASS2(e,t,i),a[ue].collectRenderCollectionsPASS2(e,t,i))}}applyCollection(){this.entityCollection.addEntities(this.deferredEntities),this.deferredEntities.length=0,this.deferredEntities=[],this._inTheQueue=!1}traverseTree(e){const t=this.childrenNodes;this.entityCollection?e(this):t.length&&(t[ne].traverseTree(e),t[de].traverseTree(e),t[fe].traverseTree(e),t[ue].traverseTree(e))}renderCollection(e,t,i){const r=this.strategy;r._renderingNodes[this.nodeId]=!0,this.deferredEntities.length&&!this._inTheQueue&&(this.layer.async?r._queueDeferredNode(this):this.applyCollection());let s=this.entityCollection,n=this.layer;if(s._fadingOpacity=n._fadingOpacity,s.scaleByDistance=n.scaleByDistance,s.pickingScale=n.pickingScale,s.polygonOffsetUnits=n.polygonOffsetUnits,e.push(s),n.clampToGround||n.relativeToGround){const a=s._entities;let o=a.length;if(t[this.nodeId]&&t[this.nodeId].state===Te)for(;o--;){let l=a[o];this.alignEntityToTheGround(l,t[this.nodeId].segment)}else if(i)for(;o--;){let l=a[o];this.alignEntityToTheGround(l,t[i].segment)}else{const l=n._planet._renderedNodes;for(;o--;){let c=a[o],d=l.length;for(;d--;)if(l[d].segment.isEntityInside(c)){this.alignEntityToTheGround(c,l[d].segment);break}}}}}alignEntityToTheGround(e,t){let i=new m;t.getEntityTerrainPoint(e,i);let r=Number(this.layer.relativeToGround)&&e._altitude||0;if(r){let s=this.layer._planet.ellipsoid.getSurfaceNormal3v(i);e._setCartesian3vSilent(i.addA(s.scale(r)))}else e._setCartesian3vSilent(i)}isVisible(){return!!this.strategy._renderingNodes[this.nodeId]}}class xt extends vt{constructor(e,t,i,r,s,n){super(e,t,i,r,s,n),this.strategy=e,this.isNorth=!1}createChildrenNodes(){const e=this.strategy,t=this.extent,i=t.getWidth()*.5,r=t.getHeight()*.5,s=t.northEast,n=t.southWest,a=new P(n.lon+i,n.lat+r),o=this.childrenNodes,l=this.layer._planet,c=this.zoom+1;o[ne]=new xt(e,ne,this,new U(new P(n.lon,n.lat+r),new P(n.lon+i,s.lat)),l,c),o[de]=new xt(e,de,this,new U(a,new P(s.lon,s.lat)),l,c),o[fe]=new xt(e,fe,this,new U(new P(n.lon,n.lat),a),l,c),o[ue]=new xt(e,ue,this,new U(new P(n.lon+i,n.lat),new P(s.lon,n.lat+r)),l,c)}_setExtentBounds(){this.extent.northEast.lat>0&&(this.isNorth=!0),this.bsphere.setFromExtent(this.layer._planet.ellipsoid,this.extent)}__setLonLat__(e){return e._lonLat.isZero()&&(e._lonLat=this.layer._planet.ellipsoid.cartesianToLonLat(e._cartesian)),e._lonLat}isVisible(){return this.isNorth&&this.strategy._renderingNodesNorth[this.nodeId]?!0:!!this.strategy._renderingNodesSouth[this.nodeId]}isInside(e){return this.extent.isInside(e._lonLat)}renderCollection(e,t,i){this.isNorth?this.strategy._renderingNodesNorth[this.nodeId]=!0:this.strategy._renderingNodesSouth[this.nodeId]=!0,this.deferredEntities.length&&!this._inTheQueue&&(this.layer.async?this.strategy._queueDeferredNode(this):this.applyCollection());const r=this.entityCollection;r._fadingOpacity=this.layer._fadingOpacity,r.scaleByDistance=this.layer.scaleByDistance,r.pickingScale=this.layer.pickingScale,r.isEmpty()||e.push(r)}}class Hl extends zn{constructor(e,t){super(e,t);let i=e._planet;this._entityCollectionsTree=new vt(this,ne,null,U.createFromArray([-2003750834e-2,-2003750834e-2,2003750834e-2,2003750834e-2]),i,0),this._entityCollectionsTreeNorth=new xt(this,ne,null,U.createFromArray([-180,se,180,90]),i,0),this._entityCollectionsTreeSouth=new xt(this,ne,null,U.createFromArray([-180,-90,180,Ne]),i,0),this._renderingNodes={},this._renderingNodesNorth={},this._renderingNodesSouth={}}insertEntity(e,t=!1){e._lonLat.lat>se?(this._entityCollectionsTreeNorth.__setLonLat__(e),this._entityCollectionsTreeNorth.insertEntity(e,t)):e._lonLat.lat<Ne?(this._entityCollectionsTreeSouth.__setLonLat__(e),this._entityCollectionsTreeSouth.insertEntity(e,t)):(this._entityCollectionsTree.__setLonLat__(e),this._entityCollectionsTree.insertEntity(e,t))}setPickingEnabled(e){this._entityCollectionsTree&&this._entityCollectionsTree.traverseTree(t=>{t.entityCollection.setPickingEnabled(e)}),this._entityCollectionsTreeNorth&&this._entityCollectionsTreeNorth.traverseTree(t=>{t.entityCollection.setPickingEnabled(e)}),this._entityCollectionsTreeSouth&&this._entityCollectionsTreeSouth.traverseTree(t=>{t.entityCollection.setPickingEnabled(e)})}dispose(){this._entityCollectionsTree=null,this._entityCollectionsTreeNorth=null,this._entityCollectionsTreeSouth=null,this._renderingNodes={},this._renderingNodesNorth={},this._renderingNodesSouth={}}insertEntities(e){let t=[],i=[],r=[];for(let s=0,n=e.length;s<n;s++){let a=e[s];a._lonLat.lat>se?(t.push(a),this._entityCollectionsTreeNorth.__setLonLat__(a)):a._lonLat.lat<Ne?(i.push(a),this._entityCollectionsTreeSouth.__setLonLat__(a)):(r.push(a),this._entityCollectionsTree.__setLonLat__(a))}this._entityCollectionsTree.buildTree(r),this._entityCollectionsTreeNorth.buildTree(t),this._entityCollectionsTreeSouth.buildTree(i)}collectVisibleEntityCollections(e){this._renderingNodes={},this._renderingNodesNorth={},this._renderingNodesSouth={};let t=this._layer._planet.quadTreeStrategy;this._secondPASS=[],this._entityCollectionsTree.collectRenderCollectionsPASS1(t._visibleNodes,e);let i=this._secondPASS.length;for(;i--;)this._secondPASS[i].collectRenderCollectionsPASS2(t._visibleNodes,e,this._secondPASS[i].nodeId);for(this._secondPASS=[],this._entityCollectionsTreeNorth.collectRenderCollectionsPASS1(t._visibleNodesNorth,e),i=this._secondPASS.length;i--;)this._secondPASS[i].collectRenderCollectionsPASS2(t._visibleNodesNorth,e,this._secondPASS[i].nodeId);for(this._secondPASS=[],this._entityCollectionsTreeSouth.collectRenderCollectionsPASS1(t._visibleNodesSouth,e),i=this._secondPASS.length;i--;)this._secondPASS[i].collectRenderCollectionsPASS2(t._visibleNodesSouth,e,this._secondPASS[i].nodeId)}}class Ol extends Nl{constructor(e){super(e,"Earth"),this._visibleNodesNorth={},this._visibleNodesSouth={}}collectVisibleNode(e){let t=e.segment._tileGroup;t===Mt?this._visibleNodesNorth[e.nodeId]=e:t===It?this._visibleNodesSouth[e.nodeId]=e:this._visibleNodes[e.nodeId]=e}_clearVisibleNodes(){super._clearVisibleNodes(),this._visibleNodesNorth={},this._visibleNodesSouth={}}createEntitiCollectionsTreeStrategy(e,t){return new Hl(e,t)}init(){this._quadTreeList=[new Zi(In,this.planet,0,null,0,U.createFromArray([-2003750834e-2,-2003750834e-2,2003750834e-2,2003750834e-2])),new Zi(Cs,this.planet,0,null,0,U.createFromArray([-180,se,180,90])),new Zi(Cs,this.planet,0,null,0,U.createFromArray([-180,-90,180,Ne]))]}getTileXY(e,t){let i=zl(e.lat,se),r=t,s=-1,n=-1,a=1<<r;if(i===Mt)s=Me(e.lon,360/a,-180),n=Me(e.lat,(90-se)/a,90);else if(i===It)s=Me(e.lon,360/a,-180),n=Me(e.lat,(90-se)/a,Ne);else{let o=rr(e);s=Me(o.lon,tr/a,-2003750834e-2),n=Me(o.lat,tr/a,_e)}return[s,n,r,i]}getLonLatTileOffset(e,t,i,r,s){let n=e,a=new U;if(e.lat>se){let f=U.createFromArray([-180,se,180,90]);a=_r(t,i,r,f)}else if(e.lat<Ne){let f=U.createFromArray([-180,-90,180,Ne]);a=_r(t,i,r,f)}else n=rr(e),a=Gs(t,i,r);let o=a.getWidth()/(s-1),l=a.getHeight()/(s-1),c=s-Math.ceil((n.lat-a.southWest.lat)/l)-1,d=Math.floor((n.lon-a.southWest.lon)/o);return[c,d]}}/* This file is mostly a straight translation of
 * GeographicLib/src/Geoid.cpp from C++ to JavaScript
 * by Kim Vandry <vandry@TZoNE.ORG>
 *
 * @license
 *  **
 * * \file Geoid.cpp
 * * \brief Implementation for GeographicLib::Geoid class
 * *
 * * Copyright (c) Charles Karney (2009) <charles@karney.com>
 * * and licensed under the LGPL.  For more information, see
 * * http://geographiclib.sourceforge.net/
 * **********************************************************************
 *
 * Geoid height grade not supported
 * The files can be downloaded from here:
 * http://geographiclib.sourceforge.net/1.18/geoid.html
 */class kn{constructor(e={}){this.model=e.model||null,this.src=e.src||null,this._cached_ix=0,this._cached_iy=0,this._v00=0,this._v01=0,this._v10=0,this._v11=0,this._t=0}static loadModel(e){return e?fetch(e,{}).then(t=>{if(!t.ok)throw Error("Geoid model file: HTTP error "+t.status);return t.arrayBuffer()}).then(t=>{if(t)return new Uint8Array(t);throw Error("Geoid model file: no data from "+e)}).then(function(t){if(!(t[0]===80&&t[1]===53&&(t[2]===13&&t[3]===10||t[2]===10)))throw new Error("Geoid model file: no PGM header");var i=t[2]===13?4:3,r=null,s=null;function n(){let _=i;for(var g=i;;g++){if(g>=t.length)throw new Error("Geoid model file: missing newline in header");if(t[g]===10){i=g+1;break}}return g>_&&t[g-1]===13&&g--,String.fromCharCode.apply(null,t.slice(_,g))}for(var a,o;o=n(),o[0]==="#";)if(a=o.match(/^# Offset (.*)$/),a){if(r=parseInt(a[1],10),!isFinite(r))throw new Error("Geoid model file: bad offset "+a[1])}else if(a=o.match(/^# Scale (.*)$/),a&&(s=parseFloat(a[1]),!isFinite(s)))throw new Error("Geoid model file: bad scale "+a[1]);a=o.match(/^\s*(\d+)\s+(\d+)\s*$/);let l=0,c=0;if(a&&(l=parseInt(a[1],10),c=parseInt(a[2],10)),!(a&&l>=0&&c>=0))throw new Error("Geoid model file: bad PGM width&height line");if(parseInt(n())!=65535)throw new Error("Geoid model file: PGM file must have 65535 gray levels");if(r===null)throw new Error("Geoid model file: PGM file does not contain offset");if(s===null)throw new Error("Geoid model file: PGM file does not contain scale");if(l<2||c<2)throw new Error("Geoid model file: Raster size too small");if(t.length-i!==l*c*2)throw new Error("Geoid model file: File has the wrong length");return{scale:s,offset:r,width:l,height:c,rlonres:l/360,rlatres:(c-1)/180,i,rawfile:t}}):new Promise(t=>{t(null)})}setModel(e){this.model=e}_rawval(e,t){let i=this.model;t<0?(t=-t,e+=i.width/2):t>=i.height&&(t=2*(i.height-1)-t,e+=i.width/2),e<0?e+=i.width:e>=i.width&&(e-=i.width);let r=(t*i.width+e)*2+i.i;return i.rawfile[r]<<8|i.rawfile[r+1]}getHeightLonLat(e){return this.getHeight(e.lon,e.lat)}getHeight(e,t){if(!this.model)return 0;let i=this.model;e<0&&(e+=360);let r=(90-t)*i.rlatres,s=e*i.rlonres,n=Math.floor(r),a=Math.floor(s);s-=a,r-=n,n===i.height-1&&n--,(this._cached_ix!==a||this._cached_iy!==n)&&(this._cached_ix=a,this._cached_iy=n,this._v00=this._rawval(a,n),this._v01=this._rawval(a+1,n),this._v10=this._rawval(a,n+1),this._v11=this._rawval(a+1,n+1));let o=(1-s)*this._v00+s*this._v01,l=(1-s)*this._v10+s*this._v11,c=(1-r)*o+r*l;return i.offset+i.scale*c}}class Ul{constructor(e,t=5){this.MAX_FRAMES=t,this._gridSize=64,this._planet=e,this._framebuffer=null,this._framebufferMercProj=null,this._texCoordsBuffer=null,this._indexBuffer=null,this._currentFrame=0,this._queue=[],this._animate=[],this._quadTexCoordsBuffer=null,this._quadVertexBuffer=null}init(){this._initShaders(),this._initBuffers()}createGridBuffer(e,t=!1){let i=this._gridSize,r=new P((e[3].lon-e[0].lon)/i,(e[3].lat-e[0].lat)/i),s=new P((e[2].lon-e[1].lon)/i,(e[2].lat-e[1].lat)/i),n=new P((e[1].lon-e[0].lon)/i,(e[1].lat-e[0].lat)/i),a=new P((e[2].lon-e[3].lon)/i,(e[2].lat-e[3].lat)/i);const o=(i+1)*(i+1)*2,l=o/2;let c=new Float32Array(o),d=new Float32Array(o),f=new Array(l),_=0,g=0,v=0,u=new Float32Array(2);for(let p=0;p<=i;p++){let b=new P(e[0].lon+p*r.lon,e[0].lat+p*r.lat),w=new P(e[1].lon+p*s.lon,e[1].lat+p*s.lat);for(let y=0;y<=i;y++){let x=new P(e[0].lon+y*n.lon,e[0].lat+y*n.lat),T=new P(e[3].lon+y*a.lon,e[3].lat+y*a.lat),A=na(b,w,x,T);Lt(A.lon,u),c[_++]=u[0],d[g++]=u[1],Lt(A.lat,u),c[_++]=u[0],d[g++]=u[1],f[v++]=A}}if(t)for(let p=0;p<l;p++){let b=f[p].forwardMercator();Lt(b.lon,u),c[p*2]=u[0],d[p*2]=u[1],Lt(b.lat,u),c[p*2+1]=u[0],d[p*2+1]=u[1]}return[this._planet.renderer.handler.createArrayBuffer(c,2,l),this._planet.renderer.handler.createArrayBuffer(d,2,l)]}frame(){let e=this.MAX_FRAMES;for(;e--&&this._queue.length;){const t=this._queue.shift();t._isRendering=!1,t.rendering(),t.events.dispatch(t.events.loadend)}for(e=this._animate.length;e--;)this._animate[e].rendering()}add(e){e._isRendering||(e._isRendering=!0,e._animate?this._animate.push(e):this._queue.push(e))}remove(e){if(e._isRendering){e._creationProceeding=!1,e._isRendering=!1;let t;e._animate?t=this._animate:t=this._queue;for(let i=0;i<t.length;i++)if(t[i].isEqual(e)){t.splice(i,1);return}}}_initBuffers(){let e=this._planet.renderer.handler;this._framebuffer=new Re(e,{width:2,height:2,useDepth:!1}),this._framebuffer.init(),this._framebufferMercProj=new Re(e,{width:2,height:2,useDepth:!1}),this._framebufferMercProj.init();let t=Math.log2(this._gridSize);this._texCoordsBuffer=this._planet._textureCoordsBufferCache[t],this._indexBuffer=this._planet._indexesCache[t][t][t][t][t].buffer,this._quadTexCoordsBuffer=e.createArrayBuffer(new Float32Array([0,1,1,1,0,0,1,0]),2,4),this._quadVertexBuffer=e.createArrayBuffer(new Float32Array([-1,1,1,1,-1,-1,1,-1]),2,4)}_initShaders(){this._planet.renderer.handler.addProgram(new G("geoImageTransform",{uniforms:{sourceTexture:"sampler2d",extentParamsHigh:"vec4",extentParamsLow:"vec4",isFullExtent:"bool"},attributes:{cornersHigh:"vec2",cornersLow:"vec2",texCoords:"vec2"},vertexShader:`attribute vec2 cornersHigh; 
                     attribute vec2 cornersLow;
                      attribute vec2 texCoords; 
                      uniform vec4 extentParamsHigh; 
                      uniform vec4 extentParamsLow; 
                      varying vec2 v_texCoords;
                      void main() {                                                             
                          v_texCoords = texCoords; 
                          vec2 highDiff = cornersHigh - extentParamsHigh.xy;
                          vec2 lowDiff = cornersLow - extentParamsLow.xy;                                        
                          gl_Position = vec4((-1.0 + (highDiff * step(1.0, length(highDiff)) + lowDiff) * extentParamsHigh.zw) * vec2(1.0, -1.0), 0.0, 1.0); 
                      }`,fragmentShader:`precision highp float;
                        uniform sampler2D sourceTexture;
                        uniform bool isFullExtent;
                        varying vec2 v_texCoords;
                        void main () {
                            if(!isFullExtent && (v_texCoords.x <= 0.001 || v_texCoords.x >= 0.999 ||
                                v_texCoords.y <= 0.001 || v_texCoords.y >= 0.999)) {
                                discard;
                            }
                            gl_FragColor = texture2D(sourceTexture, v_texCoords);
                        }`}))}}const Vl=["loadend","layerloadend"];class Nn{constructor(e=24){this.MAX_REQUESTS=e,this.events=Ke(Vl),this._loading=0,this._queue=[],this._senderRequestCounter=[],this._promises={json:t=>t.json(),blob:t=>t.blob(),arrayBuffer:t=>t.arrayBuffer(),imageBitmap:t=>t.blob().then(i=>createImageBitmap(i,{premultiplyAlpha:"premultiply"})),text:t=>t.text()}}load(e,t){e.sender&&(this._senderRequestCounter[e.sender.__id]||(this._senderRequestCounter[e.sender.__id]={sender:e.sender,counter:0,__requestCounterFrame__:0}),this._senderRequestCounter[e.sender.__id].counter++),this._queue.push({params:e,callback:t}),this._exec()}fetch(e){return fetch(e.src,e.options||{}).then(t=>{if(!t.ok)throw Error(`Unable to load '${e.src}'`);return this._promises[e.type||"blob"](t)}).then(t=>({status:"ready",data:t})).catch(t=>({status:"error",msg:t.toString()}))}getRequestCounter(e){if(e){let t=this._senderRequestCounter[e.__id];if(t)return t.counter}return 0}isIdle(e){return e.isIdle}_checkLoadend(e,t){e.counter===0&&(!t._planet||t._planet._terrainCompletedActivated)?(t.events.dispatch(t.events.loadend,t),this.events.dispatch(this.events.layerloadend,t),e.__requestCounterFrame__=0):e.__requestCounterFrame__=requestAnimationFrame(()=>{this._checkLoadend(e,t)})}_handleResponse(e,t){e.callback(t);let i=e.params.sender;if(i&&(i.events.loadend.handlers.length||this.events.layerloadend.handlers.length)){let r=this._senderRequestCounter[i.__id];r&&r.counter>0&&(r.counter--,cancelAnimationFrame(r.__requestCounterFrame__),r.__requestCounterFrame__=requestAnimationFrame(()=>{this._checkLoadend(r,i)}))}this._exec()}_exec(){if(this._queue.length>0&&this._loading<this.MAX_REQUESTS){let e=this._queue.pop();if(!e)return;let t=e.params;if(!t.filter||t.filter(t))return this._loading++,fetch(t.src,t.options||{}).then(i=>{if(!i.ok)throw Error(`Unable to load '${t.src}'`);return this._promises[t.type||"blob"](i)}).then(i=>{this._loading--,this._handleResponse(e,{status:"ready",data:i})}).catch(i=>{this._loading--,this._handleResponse(e,{status:"error",msg:i.toString()})});this._handleResponse(e,{status:"abort"})}else this._loading===0&&this.events.dispatch(this.events.loadend)}abort(e){this._senderRequestCounter[e.__id]&&(this._senderRequestCounter[e.__id].counter=0,cancelAnimationFrame(this._senderRequestCounter[e.__id].__requestCounterFrame__),this._senderRequestCounter[e.__id].__requestCounterFrame__=0);for(let t=0,i=this._queue.length;t<i;t++){let r=this._queue[t];r&&r.params.sender&&e.isEqual(r.params.sender)&&(r.callback({status:"abort"}),this._queue[t]=null)}}abortAll(){for(let e=0,t=this._queue.length;e<t;e++){let i=this._queue[e];if(i){let r=i.params.sender;r&&this._senderRequestCounter[r.__id]&&(this._senderRequestCounter[r.__id].counter=0,cancelAnimationFrame(this._senderRequestCounter[r.__id].__requestCounterFrame__),this._senderRequestCounter[r.__id].__requestCounterFrame__=0),i.callback({status:"abort"}),this._queue[e]=null}}this._queue=[]}get loading(){return this._loading}get queue(){return this._queue}}class Gl{constructor(e,t={}){this._minTabelSize=t.minTableSize||1,this._maxTableSize=t.maxTableSize||8,this._planet=e,this._handler=null,this._verticesBufferArray=[],this._indexBufferArray=[],this._positionBuffer=null,this._framebuffer=null,this._normalMapVerticesTexture=null,this._width=t.width||128,this._height=t.height||128,this._queue=new Sr(1024),this._lock=new ur}get width(){return this._width}get height(){return this._height}init(){this._maxTableSize=this._planet.maxGridSize||8,this._handler=this._planet.renderer.handler;const e=new G("normalMapBlur",{attributes:{a_position:"vec2"},uniforms:{s_texture:"sampler2d"},vertexShader:`attribute vec2 a_position;
                       attribute vec2 a_texCoord;

                      varying vec2 blurCoordinates[5];

                      void main() {
                          vec2 vt = a_position * 0.5 + 0.5; 
                           
                          gl_Position = vec4(a_position, 0.0, 1.0);
                          blurCoordinates[0] = vt;
                          blurCoordinates[1] = vt + ${1/this._width*1.407333};
                          blurCoordinates[2] = vt - ${1/this._height*1.407333};
                          blurCoordinates[3] = vt + ${1/this._width*3.294215};
                          blurCoordinates[4] = vt - ${1/this._height*3.294215};
                }`,fragmentShader:`precision lowp float;
                        uniform sampler2D s_texture;                        
                        varying vec2 blurCoordinates[5];                        

                        void main() {
                            lowp vec4 sum = vec4(0.0);
                            //if(blurCoordinates[0].x <= 0.01 || blurCoordinates[0].x >= 0.99 ||
                            //    blurCoordinates[0].y <= 0.01 || blurCoordinates[0].y >= 0.99){
                            //    sum = texture2D(s_texture, blurCoordinates[0]);
                            //} else {
                                sum += texture2D(s_texture, blurCoordinates[0]) * 0.204164;
                                sum += texture2D(s_texture, blurCoordinates[1]) * 0.304005;
                                sum += texture2D(s_texture, blurCoordinates[2]) * 0.304005;
                                sum += texture2D(s_texture, blurCoordinates[3]) * 0.093913;
                                sum += texture2D(s_texture, blurCoordinates[4]) * 0.093913;
                            //}
                            gl_FragColor = sum;
                        }`}),t=new G("normalMap",{attributes:{a_position:"vec2",a_normal:"vec3"},uniforms:{},vertexShader:`attribute vec2 a_position;
                      attribute vec3 a_normal;
                      
                      varying vec3 v_color;
                      
                      void main() {
                          gl_Position = vec4(a_position, 0, 1);
                          v_color = normalize(a_normal) * 0.5 + 0.5;
                      }`,fragmentShader:`precision highp float;
                        
                        varying vec3 v_color;
                        
                        void main () {
                            gl_FragColor = vec4(v_color, 1.0);
                        }`});this._handler.addProgram(e),this._handler.addProgram(t),this._framebuffer=new Re(this._handler,{width:this._width,height:this._height,useDepth:!1}),this._framebuffer.init(),this._normalMapVerticesTexture=this._handler.createEmptyTexture_l(this._width,this._height);for(let r=this._minTabelSize;r<=this._maxTableSize;r++){const s=1<<r,n=s/2;let a=new Float32Array((s+1)*(s+1)*2);for(let o=0;o<=s;o++)for(let l=0;l<=s;l++){let c=(o*(s+1)+l)*2;a[c]=-1+l/n,a[c+1]=-1+o/n}this._verticesBufferArray[s]=this._handler.createArrayBuffer(a,2,a.length/2),this._indexBufferArray[s]=this._planet._indexesCache[Math.log2(s)][Math.log2(s)][Math.log2(s)][Math.log2(s)][Math.log2(s)].buffer}const i=new Float32Array([-1,-1,1,-1,-1,1,1,1]);this._positionBuffer=this._handler.createArrayBuffer(i,2,i.length/2)}_drawNormalMapBlur(e){let t=e.normalMapNormals;if(e.node&&e.node.getState()!==Ve&&t&&t.length){const i=t.length/3,r=Math.sqrt(i)-1;let s=this._verticesBufferArray[r];if(s){e.planet.terrain.equalizeNormals&&(e._normalMapEdgeEqualize(Q),e._normalMapEdgeEqualize(J),e._normalMapEdgeEqualize(ie),e._normalMapEdgeEqualize(te));let n=e.normalMapTexturePtr;const a=this._handler,o=a.gl;let l=a.createArrayBuffer(t,3,i,o.DYNAMIC_DRAW);const c=this._framebuffer;let d=a.programs.normalMap,f=d._program.attributes;return c.bindOutputTexture(this._normalMapVerticesTexture),d.activate(),o.bindBuffer(o.ARRAY_BUFFER,s),o.vertexAttribPointer(f.a_position,s.itemSize,o.FLOAT,!1,0,0),o.bindBuffer(o.ARRAY_BUFFER,l),o.vertexAttribPointer(f.a_normal,l.itemSize,o.FLOAT,!1,0,0),o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,this._indexBufferArray[r]),o.drawElements(o.TRIANGLE_STRIP,this._indexBufferArray[r].numItems,o.UNSIGNED_INT,0),o.deleteBuffer(l),c.bindOutputTexture(n),d=a.programs.normalMapBlur,d.activate(),o.bindBuffer(o.ARRAY_BUFFER,this._positionBuffer),o.vertexAttribPointer(d._program.attributes.a_position,this._positionBuffer.itemSize,o.FLOAT,!1,0,0),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,this._normalMapVerticesTexture),o.uniform1i(d._program.uniforms.s_texture,0),o.drawArrays(o.TRIANGLE_STRIP,0,this._positionBuffer.numItems),!0}else return!0}return!1}_drawNormalMapNoBlur(e){let t=e.normalMapNormals;if(e.node&&e.node.getState()!==Ve&&t&&t.length){const i=t.length/3,r=Math.sqrt(i)-1;let s=this._verticesBufferArray[r];if(s){e.planet.terrain.equalizeNormals&&(e._normalMapEdgeEqualize(Q),e._normalMapEdgeEqualize(J),e._normalMapEdgeEqualize(ie),e._normalMapEdgeEqualize(te));let n=e.normalMapTexturePtr;const a=this._handler,o=a.gl;let l=a.createArrayBuffer(t,3,i,o.DYNAMIC_DRAW);const c=this._framebuffer,d=a.programs.normalMap,f=d._program.attributes;return c.bindOutputTexture(n),d.activate(),o.bindBuffer(o.ARRAY_BUFFER,s),o.vertexAttribPointer(f.a_position,s.itemSize,o.FLOAT,!1,0,0),o.bindBuffer(o.ARRAY_BUFFER,l),o.vertexAttribPointer(f.a_normal,l.itemSize,o.FLOAT,!1,0,0),o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,this._indexBufferArray[r]),o.drawElements(o.TRIANGLE_STRIP,this._indexBufferArray[r].numItems,o.UNSIGNED_INT,0),o.deleteBuffer(l),!0}else return!0}return!1}_drawNormalMap(e){return e.planet.terrain.isBlur(e)?this._drawNormalMapBlur(e):this._drawNormalMapNoBlur(e)}drawSingle(e){const i=this._handler.gl;this._framebuffer.activate(),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.BLEND),e.terrainReady&&this._drawNormalMap(e)&&(e.normalMapReady=!0,e.normalMapTexture=e.normalMapTexturePtr,e.normalMapTextureBias[0]=0,e.normalMapTextureBias[1]=0,e.normalMapTextureBias[2]=1),e._inTheQueue=!1,i.enable(i.DEPTH_TEST),i.enable(i.CULL_FACE),i.enable(i.BLEND),this._framebuffer.deactivate()}frame(){if(this._queue.length){const t=this._handler.gl;this._framebuffer.activate(),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.BLEND);let i=0,r=window.performance.now();for(;this._lock.isFree()&&this._queue.length&&i<.25;){const s=this._queue.shift();s.terrainReady&&this._drawNormalMap(s)&&(s.normalMapReady=!0,s.normalMapTexture=s.normalMapTexturePtr,s.normalMapTextureBias[0]=0,s.normalMapTextureBias[1]=0,s.normalMapTextureBias[2]=1),s._inTheQueue=!1,i=window.performance.now()-r}t.enable(t.BLEND),t.enable(t.DEPTH_TEST),t.enable(t.CULL_FACE),this._framebuffer.deactivate()}}get queueSize(){return this._queue.length}queue(e){e._inTheQueue=!0,this._queue.push(e)}unshift(e){e._inTheQueue=!0,this._queue.unshift(e)}remove(e){}clear(){for(;this._queue.length;){let e=this._queue.pop();e._inTheQueue=!1}}lock(e){this._lock.lock(e)}free(e){this._lock.free(e)}}const ql=new Lr({code:"equi",units:Pr.DEGREES});class jl extends xr{constructor(e=2){super(e,Yl)}_onMessage(e){this._source.get(e.data.id)._plainSegmentWorkerCallback(e.data),e.data.plainVertices=null,e.data.plainVerticesHigh=null,e.data.plainVerticesLow=null,e.data.plainNormals=null,e.data.normalMapNormals=null,e.data.normalMapVertices=null,e.data.normalMapVerticesHigh=null,e.data.normalMapVerticesLow=null,this._source.delete(e.data.id)}setGeoid(e){if(e.model){let t=e.model,i={scale:t.scale,offset:t.offset,width:t.width,height:t.height,rlonres:t.rlonres,rlatres:t.rlatres,i:t.i};this._workerQueue.forEach(r=>{let s=new Uint8Array(t.rawfile.length);s.set(t.rawfile),r.postMessage({model:i,rawfile:s},[s.buffer])})}else this._workerQueue.forEach(t=>{t.postMessage({model:null})})}make(e){if(e.initialized)if(this._workerQueue.length){let t=this._workerQueue.pop();this._source.set(this._sourceId,e);let i=e._projection.id===Fn.id||e._projection.id===ql.id?1:0,r=new Float64Array([this._sourceId,i,e.planet.terrain.gridSizeByZoom[e.tileZoom],e.planet.terrain.plainGridSize,e._extent.southWest.lon,e._extent.southWest.lat,e._extent.northEast.lon,e._extent.northEast.lat,e.planet.ellipsoid._e2,e.planet.ellipsoid.equatorialSize,e.planet.ellipsoid._invRadii2.x,e.planet.ellipsoid._invRadii2.y,e.planet.ellipsoid._invRadii2.z,e.planet._heightFactor]);this._sourceId++,t.postMessage({params:r},[r.buffer])}else this._pendingQueue.push(e);else this.check()}}const Yl=`
    'use strict';
    
    let model = null;

    let cached_ix = null;
    let cached_iy = null;
    let v00 = null;
    let v01 = null;
    let v10 = null;
    let v11 = null;
    let t = null;

    function rawval(ix, iy) {

        if (iy < 0) {
            iy = -iy;
            ix += model.width / 2;
        } else if (iy >= model.height) {
            iy = 2 * (model.height - 1) - iy;
            ix += model.width / 2;
        }

        if (ix < 0) {
            ix += model.width;
        } else if (ix >= model.width) {
            ix -= model.width;
        }

        var k = (iy * model.width + ix) * 2 + model.i;

        return (model.rawfile[k] << 8) | model.rawfile[k + 1];
    };

    function getHeightMSL(lon, lat) {

        if (!model) return 0;

        if (lon < 0) lon += 360.0;

        var fy = (90 - lat) * model.rlatres;
        var fx = lon * model.rlonres;
        var iy = Math.floor(fy);
        var ix = Math.floor(fx);

        fx -= ix;
        fy -= iy;

        if (iy === (model.height - 1)) {
            iy--;
        }

        if ((cached_ix !== ix) || (cached_iy !== iy)) {

            cached_ix = ix;
            cached_iy = iy;

            v00 = rawval(ix, iy);
            v01 = rawval(ix + 1, iy);
            v10 = rawval(ix, iy + 1);
            v11 = rawval(ix + 1, iy + 1);
        }

        let h = null;

        var a = (1 - fx) * v00 + fx * v01;
        var b = (1 - fx) * v10 + fx * v11;

        h = (1 - fy) * a + fy * b;

        return model.offset + model.scale * h;
    };

    const HALF_PI = Math.PI * 0.5;
    const POLE = 20037508.34;
    const PI_BY_POLE = Math.PI / POLE;
    const INV_POLE_BY_180 = 180.0 / POLE;
    const INV_PI_BY_180 = 180.0 / Math.PI;
    const INV_PI_BY_180_HALF_PI = INV_PI_BY_180 * HALF_PI;
    const RADIANS = Math.PI / 180.0;
    const INV_PI_BY_360 = INV_PI_BY_180 * 2.0;

    let E2 = 0.0,
        A = 0.0;

    let _projFunc = null;

    const Vec3 = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    };

    var geodeticToCartesian = function (lon, lat, heightFactor, res) {

        let h = getHeightMSL(lon, lat) * heightFactor;

        let latrad = RADIANS * lat,
            lonrad = RADIANS * lon;

        let slt = Math.sin(latrad);

        let N = A / Math.sqrt(1.0 - E2 * slt * slt);
        let nc = (N + h) * Math.cos(latrad);       
           
        res.x = nc * Math.cos(lonrad);
        res.y = nc * Math.sin(lonrad);
        res.z = (N * (1 - E2) + h) * slt;
    };

    var geodeticToCartesianInverse = function (lon, lat, heightFactor, res){
        geodeticToCartesian(
            lon * INV_POLE_BY_180,
            INV_PI_BY_360 * Math.atan(Math.exp(lat * PI_BY_POLE)) - INV_PI_BY_180_HALF_PI,
            heightFactor,
            res);
    };

    var v = new Vec3(0.0, 0.0, 0.0);
    var _tempHigh = new Vec3(0.0, 0.0, 0.0);
    var _tempLow = new Vec3(0.0, 0.0, 0.0);

    var doubleToTwoFloats = function(v, high, low) {

        let x = v.x, y = v.y, z = v.z;
    
        if (x >= 0.0) {
            var doubleHigh = Math.floor(x / 65536.0) * 65536.0;
            high.x = Math.fround(doubleHigh);
            low.x = Math.fround(x - doubleHigh);
        } else {
            var doubleHigh = Math.floor(-x / 65536.0) * 65536.0;
            high.x = Math.fround(-doubleHigh);
            low.x = Math.fround(x + doubleHigh);
        }

        if (y >= 0.0) {
            var doubleHigh = Math.floor(y / 65536.0) * 65536.0;
            high.y = Math.fround(doubleHigh);
            low.y = Math.fround(y - doubleHigh);
        } else {
            var doubleHigh = Math.floor(-y / 65536.0) * 65536.0;
            high.y = Math.fround(-doubleHigh);
            low.y = Math.fround(y + doubleHigh);
        }

        if (z >= 0.0) {
            var doubleHigh = Math.floor(z / 65536.0) * 65536.0;
            high.z = Math.fround(doubleHigh);
            low.z = Math.fround(z - doubleHigh);
        } else {
            var doubleHigh = Math.floor(-z / 65536.0) * 65536.0;
            high.z = Math.fround(-doubleHigh);
            low.z = Math.fround(z + doubleHigh);
        }
    };

    self.onmessage = function (msg) {
        if(msg.data.model) {
            model = msg.data.model;
            model.rawfile = msg.data.rawfile;
        } else if(msg.data.params) {

            let xmin = 549755748352.0, xmax = -549755748352.0, 
                ymin = 549755748352.0, ymax = -549755748352.0, 
                zmin = 549755748352.0, zmax = -549755748352.0;

            E2 = msg.data.params[8];
            A = msg.data.params[9];

            let gridSize = msg.data.params[2],
                fgs = msg.data.params[3],
                r2_x = msg.data.params[10],
                r2_y = msg.data.params[11],
                r2_z = msg.data.params[12];

            let heightFactor =  msg.data.params[13];
        
            if(msg.data.params[1] === 0.0){
                _projFunc = geodeticToCartesianInverse;
            }else{
                _projFunc = geodeticToCartesian;
            }

            let maxFgs = Math.max(fgs, gridSize);
            let llStep = (msg.data.params[6] - msg.data.params[4]) / maxFgs;
            let ltStep = (msg.data.params[7] - msg.data.params[5]) / maxFgs;

            let esw_lon = msg.data.params[4],
                ene_lat = msg.data.params[7];

            let dg = Math.max(fgs / gridSize, 1.0),
                gs = maxFgs + 1;
            
            const gsgs = gs * gs;

            const gridSize3 = (gridSize + 1) * (gridSize + 1) * 3;

            let plainNormals = new Float32Array(gridSize3);

            let plainVertices = new Float64Array(gridSize3);
            let plainVerticesHigh = new Float32Array(gridSize3);
            let plainVerticesLow = new Float32Array(gridSize3);

            let normalMapNormals = new Float32Array(gsgs * 3);

            let normalMapVertices = new Float64Array(gsgs * 3);
            let normalMapVerticesHigh = new Float32Array(gsgs * 3);
            let normalMapVerticesLow = new Float32Array(gsgs * 3);

            let ind = 0,
                nmInd = 0;

            for (let k = 0; k < gsgs; k++) {

                let j = k % gs,
                    i = ~~(k / gs);

                _projFunc(esw_lon + j * llStep, ene_lat - i * ltStep, heightFactor, v);

                let nx = v.x * r2_x, ny = v.y * r2_y, nz = v.z * r2_z;
                let l = 1.0 / Math.sqrt(nx * nx + ny * ny + nz * nz);            
                let nxl = nx * l,
                    nyl = ny * l,
                    nzl = nz * l;

                doubleToTwoFloats(v, _tempHigh, _tempLow);

                normalMapVertices[nmInd] = v.x;
                normalMapVerticesHigh[nmInd] = _tempHigh.x;
                normalMapVerticesLow[nmInd] = _tempLow.x;
                normalMapNormals[nmInd++] = nxl;

                normalMapVertices[nmInd] = v.y;
                normalMapVerticesHigh[nmInd] = _tempHigh.y;
                normalMapVerticesLow[nmInd] = _tempLow.y;
                normalMapNormals[nmInd++] = nyl;

                normalMapVertices[nmInd] = v.z;
                normalMapVerticesHigh[nmInd] = _tempHigh.z;
                normalMapVerticesLow[nmInd] = _tempLow.z;
                normalMapNormals[nmInd++] = nzl;

                if (i % dg === 0 && j % dg === 0) {
                    plainVertices[ind] = v.x;
                    plainVerticesHigh[ind] = _tempHigh.x;
                    plainVerticesLow[ind] = _tempLow.x;
                    plainNormals[ind++] = nxl;

                    plainVertices[ind] = v.y;
                    plainVerticesHigh[ind] = _tempHigh.y;
                    plainVerticesLow[ind] = _tempLow.y;
                    plainNormals[ind++] = nyl;

                    plainVertices[ind] = v.z;
                    plainVerticesHigh[ind] = _tempHigh.z;
                    plainVerticesLow[ind] = _tempLow.z;
                    plainNormals[ind++] = nzl;

                    if (v.x < xmin) xmin = v.x; if (v.x > xmax) xmax = v.x;
                    if (v.y < ymin) ymin = v.y; if (v.y > ymax) ymax = v.y;
                    if (v.z < zmin) zmin = v.z; if (v.z > zmax) zmax = v.z;
                }
            }

            let x = (xmax - xmin) * 0.5,
                y = (ymax - ymin) * 0.5,
                z = (zmax - zmin) * 0.5;

            let plainRadius = Math.sqrt(x * x + y * y + z * z);

            self.postMessage({
                id: msg.data.params[0],
                plainVertices: plainVertices,
                plainVerticesHigh: plainVerticesHigh,
                plainVerticesLow: plainVerticesLow,
                plainNormals: plainNormals,
                normalMapNormals: normalMapNormals,
                normalMapVertices: normalMapVertices,
                normalMapVerticesHigh: normalMapVerticesHigh,
                normalMapVerticesLow: normalMapVerticesLow,
                plainRadius: plainRadius
             }, [
                plainVertices.buffer,
                plainVerticesHigh.buffer,
                plainVerticesLow.buffer,
                plainNormals.buffer,
                normalMapNormals.buffer,
                normalMapVertices.buffer,
                normalMapVerticesHigh.buffer,
                normalMapVerticesLow.buffer
            ]);
        }
    }`;function Ct(h){let e=1/Math.sqrt(h[0]*h[0]+h[1]*h[1]+h[2]*h[2]);h[0]*=e,h[1]*=e,h[2]*=e,h[3]*=e}class Ps{constructor(e={}){this._pickingColorU=new Float32Array([0,0,0]),this._f=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.projectionMatrix=new ae,this.inverseProjectionMatrix=new ae,this.projectionViewMatrix=new ae,this.inverseProjectionViewMatrix=new ae,this.left=0,this.right=0,this.bottom=0,this.top=0,this.near=0,this.far=0,this.cameraFrustumIndex=e.cameraFrustumIndex!=null?e.cameraFrustumIndex:-1,this.setProjectionMatrix(e.fov||30,e.aspect||1,e.near||1,e.far||1e3)}getRightPlane(){return this._f[0]}getLeftPlane(){return this._f[1]}getBottomPlane(){return this._f[2]}getTopPlane(){return this._f[3]}getBackwardPlane(){return this._f[4]}getForwardPlane(){return this._f[5]}getProjectionViewMatrix(){return this.projectionViewMatrix._m}getProjectionMatrix(){return this.projectionMatrix._m}getInverseProjectionMatrix(){return this.inverseProjectionMatrix._m}setProjectionMatrix(e,t,i,r){this.top=i*Math.tan(e*st),this.bottom=-this.top,this.right=this.top*t,this.left=-this.right,this.near=i,this.far=r,this.projectionMatrix.setPerspective(this.left,this.right,this.bottom,this.top,i,r),this.projectionMatrix.inverseTo(this.inverseProjectionMatrix)}setViewMatrix(e){this.projectionViewMatrix=this.projectionMatrix.mul(e),this.projectionViewMatrix.inverseTo(this.inverseProjectionViewMatrix);let t=this.projectionViewMatrix._m;this._f[0][0]=t[3]-t[0],this._f[0][1]=t[7]-t[4],this._f[0][2]=t[11]-t[8],this._f[0][3]=t[15]-t[12],Ct(this._f[0]),this._f[1][0]=t[3]+t[0],this._f[1][1]=t[7]+t[4],this._f[1][2]=t[11]+t[8],this._f[1][3]=t[15]+t[12],Ct(this._f[1]),this._f[2][0]=t[3]+t[1],this._f[2][1]=t[7]+t[5],this._f[2][2]=t[11]+t[9],this._f[2][3]=t[15]+t[13],Ct(this._f[2]),this._f[3][0]=t[3]-t[1],this._f[3][1]=t[7]-t[5],this._f[3][2]=t[11]-t[9],this._f[3][3]=t[15]-t[13],Ct(this._f[3]),this._f[4][0]=t[3]-t[2],this._f[4][1]=t[7]-t[6],this._f[4][2]=t[11]-t[10],this._f[4][3]=t[15]-t[14],Ct(this._f[4]),this._f[5][0]=t[3]+t[2],this._f[5][1]=t[7]+t[6],this._f[5][2]=t[11]+t[10],this._f[5][3]=t[15]+t[14],Ct(this._f[5])}containsPoint(e){for(let t=0;t<6;t++)if(e.dotArr(this._f[t])+this._f[t][3]<=0)return!1;return!0}containsSphereBottomExc(e){let t=-e.radius,i=this._f;return!(e.center.dotArr(i[0])+i[0][3]<=t||e.center.dotArr(i[1])+i[1][3]<=t||e.center.dotArr(i[3])+i[3][3]<=t||e.center.dotArr(i[4])+i[4][3]<=t||e.center.dotArr(i[5])+i[5][3]<=t)}containsSphereButtom(e){let t=-e.radius,i=this._f;return!(e.center.dotArr(i[2])+i[2][3]<=t)}containsSphere(e){let t=-e.radius,i=this._f;return!(e.center.dotArr(i[0])+i[0][3]<=t||e.center.dotArr(i[1])+i[1][3]<=t||e.center.dotArr(i[2])+i[2][3]<=t||e.center.dotArr(i[3])+i[3][3]<=t||e.center.dotArr(i[4])+i[4][3]<=t||e.center.dotArr(i[5])+i[5][3]<=t)}containsSphere2(e,t){let i=-t;return!(e.dotArr(this._f[0])+this._f[0][3]<=i||e.dotArr(this._f[1])+this._f[1][3]<=i||e.dotArr(this._f[2])+this._f[2][3]<=i||e.dotArr(this._f[3])+this._f[3][3]<=i||e.dotArr(this._f[4])+this._f[4][3]<=i||e.dotArr(this._f[5])+this._f[5][3]<=i)}containsBox(e){let t=!0,i,r;for(let s=0;s<6;s++){i=0,r=0;for(let n=0;n<8&&(r===0||i===0);n++)e.vertices[n].dotArr(this._f[s])+this._f[s][3]<0?i++:r++;if(r===0)return!1;i>0&&(t=!0)}return t}}const Wl=["viewchange","moveend"];class Dn{constructor(e,t={}){if(this.renderer=e,this.events=Ke(Wl,this),this.eye=t.eye||new m,this.eyeHigh=new Float32Array(3),this.eyeLow=new Float32Array(3),this._aspect=t.aspect||1,this._viewAngle=t.viewAngle||47,this._viewMatrix=new ae,this._normalMatrix=new bt,this._r=new m(1,0,0),this._u=new m(0,1,0),this._b=new m(0,0,1),this._pr=this._r.clone(),this._pu=this._u.clone(),this._pb=this._b.clone(),this._peye=this.eye.clone(),this.isMoving=!1,this._tanViewAngle_hrad=0,this._tanViewAngle_hradOneByHeight=0,this.frustums=[],this.frustumColors=[],t.frustums)for(let i=0,r=t.frustums.length;i<r;i++){let s=t.frustums[i],n=new Ps({fov:this._viewAngle,aspect:this._aspect,near:s[0],far:s[1]});n.cameraFrustumIndex=this.frustums.length,this.frustums.push(n),this.frustumColors.push(n._pickingColorU[0],n._pickingColorU[1],n._pickingColorU[2])}else{let i=1,r=1e4,s=new Ps({fov:this._viewAngle,aspect:this._aspect,near:i,far:r});s.cameraFrustumIndex=this.frustums.length,this.frustums.push(s),this.frustumColors.push(s._pickingColorU[0],s._pickingColorU[1],s._pickingColorU[2])}this.FARTHEST_FRUSTUM_INDEX=this.frustums.length-1,this.currentFrustumIndex=0,this.isFirstPass=!1,this._projSizeConst=0,this.set(t.eye||new m(0,0,1),t.look||new m,t.up||new m(0,1,0))}checkMoveEnd(){let e=this._r,t=this._u,i=this._b,r=this.eye;this._peye.equal(r)&&this._pr.equal(e)&&this._pu.equal(t)&&this._pb.equal(i)?(this.isMoving&&this.events.dispatch(this.events.moveend,this),this.isMoving=!1):this.isMoving=!0,this._pr.copy(e),this._pu.copy(t),this._pb.copy(i),this._peye.copy(r)}bindRenderer(e){this.renderer=e;for(let t=0;t<this.frustums.length;t++)this.renderer.assignPickingColor(this.frustums[t]);this._aspect=this.renderer.handler.getClientAspect(),this._setProj(this._viewAngle,this._aspect)}_init(e){this._setProj(this._viewAngle,this._aspect),this.set(e.eye||new m(0,0,1),e.look||new m,e.up||new m(0,1,0))}getUp(){return this._u.clone()}getDown(){return this._u.negateTo()}getRight(){return this._r.clone()}getLeft(){return this._r.negateTo()}getForward(){return this._b.negateTo()}getBackward(){return this._b.clone()}update(){let e=this._r,t=this._u,i=this._b,r=this.eye;m.doubleToTwoFloat32Array(r,this.eyeHigh,this.eyeLow),this._viewMatrix.set([e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,-r.dot(e),-r.dot(t),-r.dot(i),1]);for(let s=0,n=this.frustums.length;s<n;s++)this.frustums[s].setViewMatrix(this._viewMatrix);this.events.dispatch(this.events.viewchange,this)}refresh(){this._setProj(this._viewAngle,this._aspect),this.update()}setAspectRatio(e){this._aspect=e,this.refresh()}getAspectRatio(){return this._aspect}_setProj(e,t){this._viewAngle=e,this._aspect=t,this._tanViewAngle_hrad=Math.tan(e*st),this._tanViewAngle_hradOneByHeight=this._tanViewAngle_hrad*this.renderer.handler._oneByHeight;let i=this.renderer.handler.canvas;this._projSizeConst=Math.min(i.clientWidth<512?512:i.clientWidth,i.clientHeight<512?512:i.clientHeight)/(e*D);for(let r=0,s=this.frustums.length;r<s;r++)this.frustums[r].setProjectionMatrix(e,t,this.frustums[r].near,this.frustums[r].far)}setViewAngle(e){this._viewAngle=e,this.refresh()}getViewAngle(){return this._viewAngle}get viewAngle(){return this._viewAngle}set(e,t,i){return this.eye.x=e.x,this.eye.y=e.y,this.eye.z=e.z,t=t||this._b,i=i||this._u,this._b.x=e.x-t.x,this._b.y=e.y-t.y,this._b.z=e.z-t.z,this._r.copy(i.cross(this._b)),this._b.normalize(),this._r.normalize(),this._u.copy(this._b.cross(this._r)),this}look(e,t){this._b.set(this.eye.x-e.x,this.eye.y-e.y,this.eye.z-e.z),this._r.copy((t||this._u).cross(this._b)),this._b.normalize(),this._r.normalize(),this._u.copy(this._b.cross(this._r))}slide(e,t,i){this.eye.x+=e*this._r.x+t*this._u.x+i*this._b.x,this.eye.y+=e*this._r.y+t*this._u.y+i*this._b.y,this.eye.z+=e*this._r.z+t*this._u.z+i*this._b.z}roll(e){let t=Math.cos(D*e),i=Math.sin(D*e),r=this._r.clone();this._r.set(t*r.x-i*this._u.x,t*r.y-i*this._u.y,t*r.z-i*this._u.z),this._u.set(i*r.x+t*this._u.x,i*r.y+t*this._u.y,i*r.z+t*this._u.z)}pitch(e){let t=Math.cos(D*e),i=Math.sin(D*e),r=this._b.clone();this._b.set(t*r.x-i*this._u.x,t*r.y-i*this._u.y,t*r.z-i*this._u.z),this._u.set(i*r.x+t*this._u.x,i*r.y+t*this._u.y,i*r.z+t*this._u.z)}yaw(e){let t=Math.cos(D*e),i=Math.sin(D*e),r=this._r.clone();this._r.set(t*r.x-i*this._b.x,t*r.y-i*this._b.y,t*r.z-i*this._b.z),this._b.set(i*r.x+t*this._b.x,i*r.y+t*this._b.y,i*r.z+t*this._b.z)}unproject(e,t){let i=this.renderer.handler.canvas,r=i.width*.5,s=i.height*.5,n=(e-r)/r,a=-(t-s)/s,o=this.frustums[0].inverseProjectionViewMatrix.mulVec4(new ee(n,a,-1,1)).affinity();return this.frustums[0].inverseProjectionViewMatrix.mulVec4(new ee(n,a,0,1)).affinity().subA(o).toVec3().normalize()}project(e){let t=this.frustums[0].projectionViewMatrix.mulVec4(e.toVec4()),i=this.renderer.handler.canvas;return new V((1+t.x/t.w)*i.width*.5,(1-t.y/t.w)*i.height*.5)}rotateAround(e,t,i,r){i=i||m.ZERO,r=r||m.UP;let s=new ae().setRotation(t?this._u:r,e),n=new ae().setIdentity().translate(i),a=new ae().setIdentity().translate(i.negateTo()),o=n.mul(s).mul(a);this.eye=o.mulVec3(this.eye),this._u=s.mulVec3(this._u).normalize(),this._r=s.mulVec3(this._r).normalize(),this._b=s.mulVec3(this._b).normalize()}rotateHorizontal(e,t,i,r){this.rotateAround(e,t,i,r)}rotateVertical(e,t){this.rotateAround(e,!1,t,this._r)}projectedSize(e,t){return Math.atan(t/this.eye.distance(e))*this._projSizeConst}getViewMatrix(){return this._viewMatrix._m}getNormalMatrix(){return this._normalMatrix._m}setCurrentFrustum(e){this.currentFrustumIndex=e,this.isFirstPass=e===this.FARTHEST_FRUSTUM_INDEX}getCurrentFrustum(){return this.currentFrustumIndex}containsSphere(e){for(let t=0;t<this.frustums.length;t++)if(this.frustums[t].containsSphere(e))return!0;return!1}get frustum(){return this.frustums[this.currentFrustumIndex]}getProjectionMatrix(){return this.frustum.projectionMatrix._m}getProjectionViewMatrix(){return this.frustum.projectionViewMatrix._m}getInverseProjectionViewMatrix(){return this.frustum.inverseProjectionViewMatrix._m}getInverseProjectionMatrix(){return this.frustum.inverseProjectionMatrix._m}}class Xl extends Dn{constructor(e,t={}){super(e.renderer,{...t,frustums:t.frustums||[[1,100+.075],[100,1e3+.075],[1e3,101e4],[1e6,1e9]]}),this.planet=e,this.minAltitude=t.minAltitude||1,this.maxAltitude=t.maxAltitude||2e7,this._lonLat=this.planet.ellipsoid.cartesianToLonLat(this.eye),this._lonLatMerc=this._lonLat.forwardMercator(),this._terrainAltitude=this._lonLat.height,this._terrainPoint=new m,this._insideSegment=null,this.slope=0,this._keyLock=new lt,this._framesArr=[],this._framesCounter=0,this._numFrames=50,this._completeCallback=null,this._frameCallback=null,this._flying=!1,this._checkTerrainCollision=!0,this.eyeNorm=this.eye.getNormal()}setTerrainCollisionActivity(e){this._checkTerrainCollision=e}update(){this.events.stopPropagation();let e=this.maxAltitude+this.planet.ellipsoid.getEquatorialSize();this.eye.length()>e&&this.eye.copy(this.eye.getNormal().scale(e)),super.update(),this.updateGeodeticPosition(),this.eyeNorm=this.eye.getNormal(),this.slope=this._b.dot(this.eyeNorm),this.events.dispatch(this.events.viewchange,this)}updateGeodeticPosition(){this.planet.ellipsoid.cartesianToLonLatRes(this.eye,this._lonLat),Math.abs(this._lonLat.lat)<=se&&P.forwardMercatorRes(this._lonLat,this._lonLatMerc)}setAltitude(e){let t=this._terrainPoint,i=this.planet.ellipsoid.getSurfaceNormal3v(this.eye);this.eye.x=i.x*e+t.x,this.eye.y=i.y*e+t.y,this.eye.z=i.z*e+t.z,this._terrainAltitude=e}getAltitude(){return this._terrainAltitude}setLonLat(e,t,i){this.stopFlying(),this._lonLat.set(e.lon,e.lat,e.height||this._lonLat.height);let r=this.planet.ellipsoid,s=r.lonLatToCartesian(this._lonLat),n=t?r.lonLatToCartesian(t):m.ZERO;this.set(s,n,i||m.NORTH),this.update()}getLonLat(){return this._lonLat}getHeight(){return this._lonLat.height}getExtentPosition(e,t){t=t||0;let i=e.getNorth(),r=e.getSouth(),s=e.getEast(),n=e.getWest();n>s&&(s+=360);let a=this.planet.ellipsoid,o=new P(s,i),l=a.lonLatToCartesian(o);o.lat=r;let c=a.lonLatToCartesian(o);o.lon=n;let d=a.lonLatToCartesian(o);o.lat=i;let f=a.lonLatToCartesian(o),_=m.sub(l,d).scale(.5).addA(d),g=_.length();g<1e-6&&(o.lon=(s+n)*.5,o.lat=(i+r)*.5,_=a.lonLatToCartesian(o)),f.subA(_),c.subA(_),l.subA(_),d.subA(_);let v=_.getNormal(),u=v.cross(m.NORTH).normalize(),p=u.cross(v).normalize(),b=Math.max(Math.abs(p.dot(f)),Math.abs(p.dot(c)),Math.abs(p.dot(l)),Math.abs(p.dot(d))),w=Math.max(Math.abs(u.dot(f)),Math.abs(u.dot(c)),Math.abs(u.dot(l)),Math.abs(u.dot(d))),y=Math.tan(this._viewAngle*D*.5),x=this._aspect*y,T=Math.max(w/x,b/y);return _.normalize(),_.scale(g+T+t),_}viewExtent(e,t){this.stopFlying(),this.set(this.getExtentPosition(e,t),m.ZERO,m.NORTH),this.update()}flyExtent(e,t,i,r,s,n,a){this.flyCartesian(this.getExtentPosition(e,t),m.ZERO,i,r??1,s,n,a)}viewDistance(e,t=1e4){let i=this.eye.add(this.getForward().scaleTo(t)),r=N.getRotationBetweenVectors(i.getNormal(),e.getNormal());if(r.isZero()){let s=e.add(this.getBackward().scaleTo(t));this.set(s,e)}else{let s=e.add(r.mulVec3(this.getBackward()).scale(t)),n=r.mulVec3(this.getUp());this.set(s,e,n)}this.update()}flyDistance(e,t=1e4,i=0,r,s,n){let a=this.eye.add(this.getForward().scaleTo(t)),o=N.getRotationBetweenVectors(a.getNormal(),e.getNormal());if(o.isZero()){let l=e.add(this.getBackward().scaleTo(t));this.set(l,e)}else{let l=e.add(o.mulVec3(this.getBackward()).scale(t)),c=o.mulVec3(this.getUp());this.flyCartesian(l,e,c,i,r,s,n)}}flyCartesian(e,t=m.ZERO,i=m.NORTH,r=1,s=()=>{},n=()=>{},a=()=>{}){this.stopFlying(),t=t||m.ZERO,i=i||m.NORTH,this._completeCallback=s,this._frameCallback=a,n&&n.call(this),t instanceof P&&(t=this.planet.ellipsoid.lonLatToCartesian(t));let o=this.planet.ellipsoid.lonLatToCartesian(new P(this._lonLat.lon,this._lonLat.lat)),l=this._u,c=this._b,d=this.planet.ellipsoid.cartesianToLonLat(e),f=i,_=this.planet.ellipsoid.lonLatToCartesian(new P(d.lon,d.lat,0)),g=m.sub(e,t),v=f.cross(g);g.normalize(),v.normalize();let u=g.cross(v),p=o.getNormal(),b=_.getNormal(),w=1-p.dot(b),y=r*Gn*Math.sqrt(w>0?w:0),x=6639613,T=Math.max(this._lonLat.height,d.height);T>x&&(x=T);let A=T+2.5*y*(x-T),E=m.ZERO;for(let C=0;C<=this._numFrames;C++){let B=1-C/this._numFrames;B=B*B*(3-2*B),B*=B;let F=o.smerp(_,B).normalize(),k=this.planet.getRayIntersectionEllipsoid(new re(E,F)),M=1-B,L=this._lonLat.height*B*B*B+A*3*B*B*M+A*3*B*M*M+d.height*M*M*M,I=k.addA(F.scale(L)),z=l.smerp(u,B),R=m.add(I,c.smerp(g,B).negateTo()),S=new m(I.x-R.x,I.y-R.y,I.z-R.z),q=z.cross(S);S.normalize(),q.normalize();let Je=S.cross(q);this._framesArr[C]={eye:I,n:S,u:q,v:Je}}this._framesCounter=this._numFrames,this._flying=!0}flyLonLat(e,t,i,r,s,n,a){let o=new P(e.lon,e.lat,e.height||this._lonLat.height);this.flyCartesian(this.planet.ellipsoid.lonLatToCartesian(o),t,i,r,s,n,a)}stopFlying(){this.planet.layerLock.free(this._keyLock),this.planet.terrainLock.free(this._keyLock),this.planet.normalMapCreator.free(this._keyLock),this._flying=!1,this._framesArr.length=0,this._framesArr=[],this._framesCounter=-1,this._frameCallback=null}isFlying(){return this._flying}rotateLeft(e,t){this.rotateHorizontal(e*D,t!==!0,m.ZERO),this.update()}rotateRight(e,t){this.rotateHorizontal(-e*D,t!==!0,m.ZERO),this.update()}rotateUp(e){this.rotateVertical(e*D,m.ZERO),this.update()}rotateDown(e){this.rotateVertical(-e*D,m.ZERO),this.update()}rotateVertical(e,t,i=0){let r=new ae().setRotation(this._r,e),s=new ae().setIdentity().translate(t),n=new ae().setIdentity().translate(t.negateTo()),o=s.mul(r).mul(n).mulVec3(this.eye),l=r.mulVec3(this._u).normalize(),c=r.mulVec3(this._r).normalize(),d=r.mulVec3(this._b).normalize(),f=o.getNormal(),_=d.dot(f);if(i){let g=_-this.slope;if(_<i&&g<0)return;(_>.1&&l.dot(f)>0||this.slope<=.1||this._u.dot(this.eye.getNormal())<=0)&&(this.eye=o,this._u=l,this._r=c,this._b=d)}else this.eye=o,this._u=l,this._r=c,this._b=d}checkFly(){if(this._flying){let e=this._numFrames-this._framesCounter;this.planet.layerLock.lock(this._keyLock),this.planet.terrainLock.lock(this._keyLock),this.planet.normalMapCreator.lock(this._keyLock),this.eye=this._framesArr[e].eye,this._r=this._framesArr[e].u,this._u=this._framesArr[e].v,this._b=this._framesArr[e].n,this._frameCallback&&this._frameCallback(),this.update(),this._framesCounter--,this._framesCounter<0&&(this.stopFlying(),this._completeCallback&&(this._completeCallback(),this._completeCallback=null))}}checkTerrainCollision(){if(this._terrainAltitude=this._lonLat.height,this._insideSegment&&this._insideSegment.planet)return this._terrainAltitude=this._insideSegment.getTerrainPoint(this.eye,this._insideSegment.getInsideLonLat(this),this._terrainPoint),this._terrainAltitude<this.minAltitude&&this._checkTerrainCollision&&this.setAltitude(this.minAltitude),this._terrainPoint}getSurfaceVisibleDistance(e){let t=this.planet.ellipsoid.equatorialSize;return t*Math.acos(t/(t+this._lonLat.height+e))}getHeading(){let e=this.eye.getNormal(),t=m.proj_b_to_plane(this.slope>=.97?this.getUp():this.getForward(),e).normalize(),i=m.proj_b_to_plane(m.NORTH,e).normalize(),r=Math.sign(e.dot(t.cross(i)))*Math.acos(t.dot(i))*me;return r<0?360+r:r}isVisible(e){let t=this.eye.length();return this.eye.distance(e)<Math.sqrt(t*t-this.planet.ellipsoid.equatorialSizeSqr)}}class Zl extends xr{constructor(e=2){super(e,$l)}_onMessage(e){this._source.get(e.data.id).segment._terrainWorkerCallback(e.data),this._source.delete(e.data.id),e.data.normalMapNormals=null,e.data.normalMapVertices=null,e.data.normalMapVerticesHigh=null,e.data.normalMapVerticesLow=null,e.data.terrainVertices=null,e.data.terrainVerticesHigh=null,e.data.terrainVerticesLow=null}make(e){if(e.segment.plainReady&&e.segment.terrainIsLoading)if(this._workerQueue.length){const t=this._workerQueue.pop();this._source.set(this._sourceId,e);let i=e.segment;t.postMessage({elevations:e.elevations,this_plainVertices:i.plainVertices,this_plainNormals:i.plainNormals,this_normalMapVertices:i.normalMapVertices,this_normalMapNormals:i.normalMapNormals,heightFactor:i.planet._heightFactor,gridSize:i.planet.terrain.gridSizeByZoom[i.tileZoom],noDataValues:i.planet.terrain.noDataValues,id:this._sourceId},[e.elevations.buffer,i.plainVertices.buffer,i.plainNormals.buffer,i.normalMapVertices.buffer,i.normalMapNormals.buffer]),this._sourceId++}else this._pendingQueue.push(e);else this.check()}}const $l=`'use strict';
    //
    //Terrain worker
    //

    function binarySearchFast(arr, x) {
        let start = 0,
            end = arr.length - 1;
        while (start <= end) {
            let k = Math.floor((start + end) * 0.5); 
            if (Math.abs(arr[k] - x) < 1e-3)
                return k;
            else if (arr[k] < x)
                start = k + 1;
            else
                end = k - 1;
        }
        return -1;
    };

    function checkNoDataValue(noDataValues, value) {
        return binarySearchFast(noDataValues, value) !== -1;
    };


    var Vec3 = function(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    };

    var doubleToTwoFloats = function(v, high, low) {

        let x = v.x, y = v.y, z = v.z;
    
        if (x >= 0.0) {
            var doubleHigh = Math.floor(x / 65536.0) * 65536.0;
            high.x = Math.fround(doubleHigh);
            low.x = Math.fround(x - doubleHigh);
        } else {
            var doubleHigh = Math.floor(-x / 65536.0) * 65536.0;
            high.x = Math.fround(-doubleHigh);
            low.x = Math.fround(x + doubleHigh);
        }

        if (y >= 0.0) {
            var doubleHigh = Math.floor(y / 65536.0) * 65536.0;
            high.y = Math.fround(doubleHigh);
            low.y = Math.fround(y - doubleHigh);
        } else {
            var doubleHigh = Math.floor(-y / 65536.0) * 65536.0;
            high.y = Math.fround(-doubleHigh);
            low.y = Math.fround(y + doubleHigh);
        }

        if (z >= 0.0) {
            var doubleHigh = Math.floor(z / 65536.0) * 65536.0;
            high.z = Math.fround(doubleHigh);
            low.z = Math.fround(z - doubleHigh);
        } else {
            var doubleHigh = Math.floor(-z / 65536.0) * 65536.0;
            high.z = Math.fround(-doubleHigh);
            low.z = Math.fround(z + doubleHigh);
        }
    };

    Vec3.prototype.sub = function(v) {
        return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
    };

    Vec3.prototype.add = function(v) {
        return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
    };

    Vec3.prototype.cross = function(v) {
        return new Vec3(
            this.y * v.z - this.z * v.y,
            this.z * v.x - this.x * v.z,
            this.x * v.y - this.y * v.x
        );
    };

    Vec3.prototype.normalize = function(v) {
        var x = this.x, y = this.y, z = this.z;
        var length = 1.0 / Math.sqrt(x * x + y * y + z * z);
        this.x = x * length;
        this.y = y * length;
        this.z = z * length;
        return this;
    };

    Vec3.prototype.distance = function(v) {
        return this.sub(v).length();
    };

    Vec3.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };

    var blerp = function(x, y, fQ11, fQ21, fQ12, fQ22) {
        return (fQ11 * (1.0 - x) * (1.0 - y) + fQ21 * x * (1.0 - y) + fQ12 * (1.0 - x) * y + fQ22 * x * y);
    };
    
    var slice = function (t, h1, h0) {
      return t * (h1 - h0);
    };

    var _tempVec = new Vec3(0.0, 0.0, 0.0);

    var _tempHigh = new Vec3(0.0, 0.0, 0.0),
        _tempLow = new Vec3(0.0, 0.0, 0.0);

    self.onmessage = function (e) {
        var elevations = e.data.elevations,
            this_plainVertices = e.data.this_plainVertices,
            this_plainNormals = e.data.this_plainNormals,
            this_normalMapVertices = e.data.this_normalMapVertices,
            this_normalMapNormals = e.data.this_normalMapNormals,
            heightFactor =  e.data.heightFactor,
            gridSize = e.data.gridSize,
            noDataValues = e.data.noDataValues,
            id = e.data.id;
        
        var xmin = 549755748352.0, xmax = -549755748352.0, 
            ymin = 549755748352.0, ymax = -549755748352.0, 
            zmin = 549755748352.0, zmax = -549755748352.0;

        const fileGridSize = Math.sqrt(elevations.length) - 1;

        const fileGridSize_one = fileGridSize + 1;
        const fileGridSize_one_x2 = fileGridSize_one * fileGridSize_one;
        const tgs = gridSize;
        const dg = fileGridSize / tgs;
        const gs = tgs + 1;
        const hf = heightFactor;

        var nmvInd = 0,
            vInd = 0,
            noDataInd = 0;

        var gsgs3 = gs * gs * 3;

        var terrainVertices = new Float64Array(gsgs3),
            terrainVerticesHigh = new Float32Array(gsgs3),
            terrainVerticesLow = new Float32Array(gsgs3),
            noDataVertices = new Uint8Array(gs * gs);

        var normalMapNormals,
            normalMapVertices,
            normalMapVerticesHigh,
            normalMapVerticesLow;

        var nv = this_normalMapVertices,
            nn = this_normalMapNormals;

        if (fileGridSize >= tgs) {

            normalMapNormals = new Float32Array(fileGridSize_one_x2 * 3);
            normalMapVertices = new Float64Array(fileGridSize_one_x2 * 3);
            normalMapVerticesHigh = new Float32Array(fileGridSize_one_x2 * 3);
            normalMapVerticesLow = new Float32Array(fileGridSize_one_x2 * 3);

            for (let k = 0; k < fileGridSize_one_x2; k++) {

                var j = k % fileGridSize_one,
                    i = ~~(k / fileGridSize_one);

                //
                // V0
                //
                var hInd0 = k;
                var vInd0 = hInd0 * 3;
                var currElv = elevations[hInd0];
                if(checkNoDataValue(noDataValues, currElv)) {
                    currElv = 0.0;
                }
                var h0 = hf * currElv;
                var v0 = new Vec3(nv[vInd0] + h0 * nn[vInd0], nv[vInd0 + 1] + h0 * nn[vInd0 + 1], nv[vInd0 + 2] + h0 * nn[vInd0 + 2]);
                                
                doubleToTwoFloats(v0, _tempHigh, _tempLow);

                normalMapVertices[vInd0] = v0.x;
                normalMapVertices[vInd0 + 1] = v0.y;
                normalMapVertices[vInd0 + 2] = v0.z;

                normalMapVerticesHigh[vInd0] = _tempHigh.x;
                normalMapVerticesHigh[vInd0 + 1] = _tempHigh.y;
                normalMapVerticesHigh[vInd0 + 2] = _tempHigh.z;

                normalMapVerticesLow[vInd0] = _tempLow.x;
                normalMapVerticesLow[vInd0 + 1] = _tempLow.y;
                normalMapVerticesLow[vInd0 + 2] = _tempLow.z;

                //
                // The vertex goes into screen buffer
                if (i % dg === 0 && j % dg === 0) {

                    let currVert = new Vec3(nv[vInd0], nv[vInd0 + 1], nv[vInd0 + 2]);
                    let nextVert = new Vec3(nv[vInd0 + 3], nv[vInd0 + 4], nv[vInd0 + 5]);

                    let nextElv =  elevations[hInd0 + 1];
                    if(checkNoDataValue(noDataValues, nextElv)) {
                        nextElv = 0.0;
                    }
                    
                    let eps = false;
                    if(noDataValues.length === 0){
                        let step = currVert.distance(nextVert);
                        let deltaElv = Math.abs(currElv - nextElv);
                        eps = ((deltaElv / step) > 10.0) || (currElv < -5000);
                    }

                    if(eps){
                        noDataVertices[noDataInd] = 1;
                    } else {
                        noDataVertices[noDataInd] = 0;
                        if (v0.x < xmin) xmin = v0.x; if (v0.x > xmax) xmax = v0.x;
                        if (v0.y < ymin) ymin = v0.y; if (v0.y > ymax) ymax = v0.y;
                        if (v0.z < zmin) zmin = v0.z; if (v0.z > zmax) zmax = v0.z;
                    }

                    terrainVerticesHigh[vInd] = _tempHigh.x;
                    terrainVerticesLow[vInd] = _tempLow.x;
                    terrainVertices[vInd++] = v0.x;

                    terrainVerticesHigh[vInd] = _tempHigh.y;
                    terrainVerticesLow[vInd] = _tempLow.y;
                    terrainVertices[vInd++] = v0.y;

                    terrainVerticesHigh[vInd] = _tempHigh.z;
                    terrainVerticesLow[vInd] = _tempLow.z;
                    terrainVertices[vInd++] = v0.z;

                    noDataInd++;
                }

                if (i !== fileGridSize && j !== fileGridSize) {

                    //
                    //  V1
                    //
                    var hInd1 = k + 1;
                    var vInd1 = hInd1 * 3;
                    var elv = elevations[hInd1];
                    if(checkNoDataValue(noDataValues, elv)) {
                        elv = 0.0;
                    }
                    var h1 = hf * elv;
                    var v1 = new Vec3(nv[vInd1] + h1 * nn[vInd1], nv[vInd1 + 1] + h1 * nn[vInd1 + 1], nv[vInd1 + 2] + h1 * nn[vInd1 + 2]);

                    doubleToTwoFloats(v1, _tempHigh, _tempLow);

                    normalMapVertices[vInd1] = v1.x;
                    normalMapVertices[vInd1 + 1] = v1.y;
                    normalMapVertices[vInd1 + 2] = v1.z;

                    normalMapVerticesHigh[vInd1] = _tempHigh.x;
                    normalMapVerticesHigh[vInd1 + 1] = _tempHigh.y;
                    normalMapVerticesHigh[vInd1 + 2] = _tempHigh.z;

                    normalMapVerticesLow[vInd1] = _tempLow.x;
                    normalMapVerticesLow[vInd1 + 1] = _tempLow.y;
                    normalMapVerticesLow[vInd1 + 2] = _tempLow.z;

                    //
                    //  V2
                    //
                    var hInd2 = k + fileGridSize_one;
                    var vInd2 = hInd2 * 3;
                    var elv = elevations[hInd2];
                    if(checkNoDataValue(noDataValues, elv)) {
                        elv = 0.0;
                    }
                    var h2 = hf * elv;
                    var v2 = new Vec3(nv[vInd2] + h2 * nn[vInd2], nv[vInd2 + 1] + h2 * nn[vInd2 + 1], nv[vInd2 + 2] + h2 * nn[vInd2 + 2]);

                    doubleToTwoFloats(v2, _tempHigh, _tempLow);

                    normalMapVertices[vInd2] = v2.x;
                    normalMapVertices[vInd2 + 1] = v2.y;
                    normalMapVertices[vInd2 + 2] = v2.z;

                    normalMapVerticesHigh[vInd2] = _tempHigh.x;
                    normalMapVerticesHigh[vInd2 + 1] = _tempHigh.y;
                    normalMapVerticesHigh[vInd2 + 2] = _tempHigh.z;

                    normalMapVerticesLow[vInd2] = _tempLow.x;
                    normalMapVerticesLow[vInd2 + 1] = _tempLow.y;
                    normalMapVerticesLow[vInd2 + 2] = _tempLow.z;

                    //
                    //  V3
                    //
                    var hInd3 = k + fileGridSize_one + 1;
                    var vInd3 = hInd3 * 3;
                    var elv = elevations[hInd3];
                    if(checkNoDataValue(noDataValues, elv)) {
                        elv = 0.0;
                    }
                    var h3 = hf * elv;
                    var v3 = new Vec3(nv[vInd3] + h3 * nn[vInd3], nv[vInd3 + 1] + h3 * nn[vInd3 + 1], nv[vInd3 + 2] + h3 * nn[vInd3 + 2]);

                    doubleToTwoFloats(v3, _tempHigh, _tempLow);

                    normalMapVertices[vInd3] = v3.x;
                    normalMapVertices[vInd3 + 1] = v3.y;
                    normalMapVertices[vInd3 + 2] = v3.z;

                    normalMapVerticesHigh[vInd3] = _tempHigh.x;
                    normalMapVerticesHigh[vInd3 + 1] = _tempHigh.y;
                    normalMapVerticesHigh[vInd3 + 2] = _tempHigh.z;

                    normalMapVerticesLow[vInd3] = _tempLow.x;
                    normalMapVerticesLow[vInd3 + 1] = _tempLow.y;
                    normalMapVerticesLow[vInd3 + 2] = _tempLow.z;

                    //
                    // Normal
                    //
                    var e10 = v1.sub(v0),
                        e20 = v2.sub(v0),
                        e30 = v3.sub(v0);
                    var sw = e20.cross(e30).normalize();
                    var ne = e30.cross(e10).normalize();
                    var n0 = ne.add(sw).normalize();

                    normalMapNormals[vInd0] += n0.x;
                    normalMapNormals[vInd0 + 1] += n0.y;
                    normalMapNormals[vInd0 + 2] += n0.z;

                    normalMapNormals[vInd1] += ne.x;
                    normalMapNormals[vInd1 + 1] += ne.y;
                    normalMapNormals[vInd1 + 2] += ne.z;

                    normalMapNormals[vInd2] += sw.x;
                    normalMapNormals[vInd2 + 1] += sw.y;
                    normalMapNormals[vInd2 + 2] += sw.z;

                    normalMapNormals[vInd3] += n0.x;
                    normalMapNormals[vInd3 + 1] += n0.y;
                    normalMapNormals[vInd3 + 2] += n0.z;
                }
            }

        } else {

            normalMapNormals = new Float32Array(gsgs3);
            normalMapVertices = new Float64Array(gsgs3);
            normalMapVerticesHigh = new Float32Array(gsgs3);
            normalMapVerticesLow = new Float32Array(gsgs3);
            normalMapNormals = new Float32Array(gsgs3);

            var oneSize = tgs / fileGridSize;
            var h, inside_i, inside_j, v_i, v_j;
            var gsgs = gsgs3 / 3;
            var fgsOne = fileGridSize + 1;

            for(let i = 0; i < gsgs; i++) {
                let ii = Math.floor(i / gs),
                    ij = i % gs;
              
                let qii = ii % oneSize,
                    qij = ij % oneSize;

                let hlt_ind = Math.floor(ii / oneSize) * fgsOne + Math.floor(ij / oneSize);

                if (ij === tgs) {
                    hlt_ind -= 1;
                    qij = oneSize;
                }

                if (ii === tgs) {
                    hlt_ind -= fgsOne;
                    qii = oneSize;
                }

                let hrt_ind = hlt_ind + 1,
                    hlb_ind = hlt_ind + fgsOne,
                    hrb_ind = hlb_ind + 1;

                let h_lt = elevations[hlt_ind],
                    h_rt = elevations[hrt_ind],
                    h_lb = elevations[hlb_ind],
                    h_rb = elevations[hrb_ind];

                if(checkNoDataValue(noDataValues, h_lt)) {
                    h_lt = 0.0;
                }

                if(checkNoDataValue(noDataValues, h_rt)) {
                    h_rt = 0.0;
                }

                if(checkNoDataValue(noDataValues, h_lb)) {
                    h_lb = 0.0;
                }

                if(checkNoDataValue(noDataValues, h_rb)) {
                    h_rb = 0.0;
                }

                let hi = blerp(qij / oneSize, qii / oneSize, h_lt, h_rt, h_lb, h_rb);

                let i3 = i * 3;

                _tempVec.x = this_plainVertices[i3] + hi * this_plainNormals[i3],
                _tempVec.y = this_plainVertices[i3 + 1] + hi * this_plainNormals[i3 + 1],
                _tempVec.z = this_plainVertices[i3 + 2] + hi * this_plainNormals[i3 + 2];

                doubleToTwoFloats(_tempVec, _tempHigh, _tempLow);

                terrainVertices[i3] = _tempVec.x;
                terrainVertices[i3 + 1] = _tempVec.y;
                terrainVertices[i3 + 2] = _tempVec.z;

                terrainVerticesHigh[i3] = _tempHigh.x;
                terrainVerticesHigh[i3 + 1] = _tempHigh.y;
                terrainVerticesHigh[i3 + 2] = _tempHigh.z;

                terrainVerticesLow[i3] = _tempLow.x;
                terrainVerticesLow[i3 + 1] = _tempLow.y;
                terrainVerticesLow[i3 + 2] = _tempLow.z;

                if (_tempVec.x < xmin) xmin = _tempVec.x; if (_tempVec.x > xmax) xmax = _tempVec.x;
                if (_tempVec.y < ymin) ymin = _tempVec.y; if (_tempVec.y > ymax) ymax = _tempVec.y;
                if (_tempVec.z < zmin) zmin = _tempVec.z; if (_tempVec.z > zmax) zmax = _tempVec.z;
            }

            normalMapVertices.set(terrainVertices);
            normalMapVerticesHigh.set(terrainVerticesHigh);
            normalMapVerticesLow.set(terrainVerticesLow);

            for (let k = 0; k < gsgs; k++) {

                var j = k % gs,
                    i = ~~(k / gs);

                if (i !== tgs && j !== tgs) {
                    var v0ind = k * 3,
                        v1ind = v0ind + 3,
                        v2ind = v0ind + gs * 3,
                        v3ind = v2ind + 3;


                    var v0 = new Vec3(terrainVertices[v0ind], terrainVertices[v0ind + 1], terrainVertices[v0ind + 2]),
                        v1 = new Vec3(terrainVertices[v1ind], terrainVertices[v1ind + 1], terrainVertices[v1ind + 2]),
                        v2 = new Vec3(terrainVertices[v2ind], terrainVertices[v2ind + 1], terrainVertices[v2ind + 2]),
                        v3 = new Vec3(terrainVertices[v3ind], terrainVertices[v3ind + 1], terrainVertices[v3ind + 2]);

                    var e10 = v1.sub(v0).normalize(),
                        e20 = v2.sub(v0).normalize(),
                        e30 = v3.sub(v0).normalize();

                    var sw = e20.cross(e30).normalize();
                    var ne = e30.cross(e10).normalize();
                    var n0 = ne.add(sw).normalize();

                    normalMapNormals[v0ind] += n0.x;
                    normalMapNormals[v0ind + 1] += n0.y;
                    normalMapNormals[v0ind + 2] += n0.z;

                    normalMapNormals[v1ind] += ne.x;
                    normalMapNormals[v1ind + 1] += ne.y;
                    normalMapNormals[v1ind + 2] += ne.z;

                    normalMapNormals[v2ind] += sw.x;
                    normalMapNormals[v2ind + 1] += sw.y;
                    normalMapNormals[v2ind + 2] += sw.z;

                    normalMapNormals[v3ind] += n0.x;
                    normalMapNormals[v3ind + 1] += n0.y;
                    normalMapNormals[v3ind + 2] += n0.z;
                }
            }
        }

        self.postMessage({
                id: id,
                normalMapNormals: normalMapNormals,
                normalMapVertices: normalMapVertices,
                normalMapVerticesHigh: normalMapVerticesHigh,
                normalMapVerticesLow: normalMapVerticesLow,
                terrainVertices: terrainVertices,
                terrainVerticesHigh: terrainVerticesHigh,
                terrainVerticesLow: terrainVerticesLow,
                noDataVertices: noDataVertices,
                //bounds: [xmin, xmax, ymin, ymax, zmin, zmax]
                bounds: [xmin, ymin, zmin, xmax, ymax, zmax]
             }, [
                    normalMapNormals.buffer, 
                    normalMapVertices.buffer, 
                    normalMapVerticesHigh.buffer, 
                    normalMapVerticesLow.buffer, 
                    terrainVertices.buffer,
                    terrainVerticesHigh.buffer,
                    terrainVerticesLow.buffer,
                    noDataVertices.buffer
            ]);
    }`;let Pt=new Float32Array(2);const Kl=25;class Ql{constructor(e,t=512,i=512){this._width=t,this._height=i,this._planet=e,this._framebuffer=null,this._queue=[],this._handler=null}init(){this._handler=this._planet.renderer.handler,this._handler.programs.vectorTileLineRasterization||this._handler.addProgram(new G("vectorTileLineRasterization",{uniforms:{viewport:"vec2",thicknessOutline:"float",alpha:"float",extentParamsHigh:"vec4",extentParamsLow:"vec4"},attributes:{prevHigh:"vec2",currentHigh:"vec2",nextHigh:"vec2",prevLow:"vec2",currentLow:"vec2",nextLow:"vec2",order:"float",color:"vec4",thickness:"float"},vertexShader:`attribute vec2 prevHigh;
                attribute vec2 currentHigh;
                attribute vec2 nextHigh;

                attribute vec2 prevLow;
                attribute vec2 currentLow;
                attribute vec2 nextLow;

                attribute float order;
                attribute float thickness;
                attribute vec4 color;
                uniform float thicknessOutline;
                uniform vec2 viewport;
                uniform vec4 extentParamsHigh;
                uniform vec4 extentParamsLow;
                varying vec4 vColor;
                
                vec2 proj(vec2 coordHigh, vec2 coordLow) {
                    vec2 highDiff = coordHigh - extentParamsHigh.xy;
                    vec2 lowDiff = coordLow - extentParamsLow.xy;                    
                    return vec2(-1.0 + (highDiff * step(1.0, length(highDiff)) + lowDiff) * extentParamsHigh.zw) * vec2(1.0, -1.0);
                }
                
                void main(){
                    vColor = color;

                    vec2 vNext = proj(nextHigh, nextLow),
                         vCurrent = proj(currentHigh, currentLow),
                         vPrev = proj(prevHigh, prevLow);

                    vec2 _next = vNext;
                    vec2 _prev = vPrev;
                    vec2 _current = vCurrent;

                    if(_prev == _current){
                        if(_next == _current){
                            _next = _current + vec2(1.0, 0.0);
                            _prev = _current - _next;
                        }else{
                            _prev = _current + normalize(_current - _next);
                        }
                    }

                    if(_next == _current){
                        _next = _current + normalize(_current - _prev);
                    }

                    vec2 sNext = _next;
                    vec2 sCurrent = _current;
                    vec2 sPrev = _prev;
                    
                    vec2 dirNext = normalize(sNext - sCurrent);
                    vec2 dirPrev = normalize(sPrev - sCurrent);
                    float dotNP = dot(dirNext, dirPrev);
                    
                    vec2 normalNext = normalize(vec2(-dirNext.y, dirNext.x));
                    vec2 normalPrev = normalize(vec2(dirPrev.y, -dirPrev.x));
                    vec2 d = (thickness + thicknessOutline) * 0.5 * sign(order) / viewport;
                    
                    vec2 m;
                    if(dotNP >= 0.99991){
                        m = sCurrent - normalPrev * d;
                    }else{
                        vec2 dir = normalPrev + normalNext;
                        m = sCurrent + dir * d / (dirNext.x * dir.y - dirNext.y * dir.x);
                        
                        if( dotNP > 0.5 && dot(dirNext + dirPrev, m - sCurrent) < 0.0 ){
                            float occw = order * sign(dirNext.x * dirPrev.y - dirNext.y * dirPrev.x);
                            if(occw == -1.0){
                                m = sCurrent + normalPrev * d;
                            }else if(occw == 1.0){
                                m = sCurrent + normalNext * d;
                            }else if(occw == -2.0){
                                m = sCurrent + normalNext * d;
                            }else if(occw == 2.0){
                                m = sCurrent + normalPrev * d;
                            }
                        }else if(distance(sCurrent, m) > min(distance(sCurrent, sNext), distance(sCurrent, sPrev))){
                            m = sCurrent + normalNext * d;
                        }
                    }
                    gl_Position = vec4(m.x, m.y, 0.0, 1.0);
                }`,fragmentShader:`precision highp float;
                uniform float alpha;
                varying vec4 vColor;
                void main() {
                    gl_FragColor = vec4(vColor.rgb, alpha * vColor.a);
                }`})),this._handler.programs.vectorTilePolygonRasterization||this._handler.addProgram(new G("vectorTilePolygonRasterization",{uniforms:{extentParamsHigh:"vec4",extentParamsLow:"vec4"},attributes:{coordinatesHigh:"vec2",coordinatesLow:"vec2",colors:"vec4"},vertexShader:`attribute vec2 coordinatesHigh;
                attribute vec2 coordinatesLow; 
                attribute vec4 colors; 
                uniform vec4 extentParamsHigh; 
                uniform vec4 extentParamsLow; 
                varying vec4 color;

                vec2 proj(vec2 coordHigh, vec2 coordLow) {
                    vec2 highDiff = coordHigh - extentParamsHigh.xy;
                    vec2 lowDiff = coordLow - extentParamsLow.xy;
                    return vec2(-1.0 + (highDiff * step(1.0, length(highDiff)) + lowDiff) * extentParamsHigh.zw) * vec2(1.0, -1.0);
                }

                void main() { 
                    color = colors;
                    gl_Position = vec4(proj(coordinatesHigh, coordinatesLow), 0.0, 1.0); 
                }`,fragmentShader:`precision highp float;
                varying vec4 color;
                void main () {  
                    gl_FragColor = color; 
                }`})),this._framebuffer=new Re(this._handler,{width:this._width,height:this._height,useDepth:!1}),this._framebuffer.init()}frame(){if(this._planet.layerLock.isFree()&&this._queue.length){let e=this._handler,t=e.gl;t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST);let i=e.programs.vectorTileLineRasterization,r=e.programs.vectorTilePolygonRasterization,s=this._width,n=this._height,a=s,o=n,l=a<<1,c=o<<1,d=new Float32Array(4),f=new Float32Array(4),_=this._framebuffer.activate(),g=0,v=window.performance.now();for(;this._queue.length&&g<Kl;){let u=this._queue.shift();if(u.isLoading&&u.segment.node.getState()===Te){let p=u.layer._pickingEnabled;u.segment.tileZoom<4?(a=l,o=c):(a=s,o=n);let b=u._updateTexture||e.createEmptyTexture_l(a,o),w=p?u._updatePickingMask||e.createEmptyTexture_n(a,o):null;u.applyTexture(b,w),_.setSize(a,o),_.bindOutputTexture(b),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT);let y=u.segment.getExtentMerc();Lt(y.southWest.lon,Pt),d[0]=Pt[0],f[0]=Pt[1],Lt(y.southWest.lat,Pt),d[1]=Pt[0],f[1]=Pt[1],d[2]=2/y.getWidth(),d[3]=2/y.getHeight(),r.activate();let x=r._program,T=x.attributes,A=x.uniforms,E=u.layer._geometryHandler;t.uniform4fv(A.extentParamsHigh,d),t.uniform4fv(A.extentParamsLow,f),t.bindBuffer(t.ARRAY_BUFFER,E._polyVerticesHighBufferMerc),t.vertexAttribPointer(T.coordinatesHigh,E._polyVerticesHighBufferMerc.itemSize,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,E._polyVerticesLowBufferMerc),t.vertexAttribPointer(T.coordinatesLow,E._polyVerticesLowBufferMerc.itemSize,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,E._polyColorsBuffer),t.vertexAttribPointer(T.colors,E._polyColorsBuffer.itemSize,t.FLOAT,!1,0,0),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,E._polyIndexesBuffer),t.drawElements(t.TRIANGLES,E._polyIndexesBuffer.numItems,t.UNSIGNED_INT,0),p&&(_.bindOutputTexture(w),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.bindBuffer(t.ARRAY_BUFFER,E._polyPickingColorsBuffer),t.vertexAttribPointer(T.colors,E._polyPickingColorsBuffer.itemSize,t.FLOAT,!1,0,0),t.drawElements(t.TRIANGLES,E._polyIndexesBuffer.numItems,t.UNSIGNED_INT,0)),_.bindOutputTexture(b),i.activate(),x=i._program,T=x.attributes,A=x.uniforms,t.uniform2fv(A.viewport,[a,o]),t.uniform4fv(A.extentParamsHigh,d),t.uniform4fv(A.extentParamsLow,f);let C=E._lineVerticesHighBufferMerc;t.bindBuffer(t.ARRAY_BUFFER,C),t.vertexAttribPointer(T.prevHigh,C.itemSize,t.FLOAT,!1,8,0),t.vertexAttribPointer(T.currentHigh,C.itemSize,t.FLOAT,!1,8,32),t.vertexAttribPointer(T.nextHigh,C.itemSize,t.FLOAT,!1,8,64),C=E._lineVerticesLowBufferMerc,t.bindBuffer(t.ARRAY_BUFFER,C),t.vertexAttribPointer(T.prevLow,C.itemSize,t.FLOAT,!1,8,0),t.vertexAttribPointer(T.currentLow,C.itemSize,t.FLOAT,!1,8,32),t.vertexAttribPointer(T.nextLow,C.itemSize,t.FLOAT,!1,8,64),t.bindBuffer(t.ARRAY_BUFFER,E._lineOrdersBuffer),t.vertexAttribPointer(T.order,E._lineOrdersBuffer.itemSize,t.FLOAT,!1,4,0),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,E._lineIndexesBuffer),t.bindBuffer(t.ARRAY_BUFFER,E._lineStrokesBuffer),t.vertexAttribPointer(T.thickness,E._lineStrokesBuffer.itemSize,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,E._lineStrokeColorsBuffer),t.vertexAttribPointer(T.color,E._lineStrokeColorsBuffer.itemSize,t.FLOAT,!1,0,0),t.uniform1f(A.thicknessOutline,2),t.uniform1f(A.alpha,.54),t.drawElements(t.TRIANGLE_STRIP,E._lineIndexesBuffer.numItems,t.UNSIGNED_INT,0),t.uniform1f(A.thicknessOutline,1),t.uniform1f(A.alpha,1),t.drawElements(t.TRIANGLE_STRIP,E._lineIndexesBuffer.numItems,t.UNSIGNED_INT,0),t.bindBuffer(t.ARRAY_BUFFER,E._lineThicknessBuffer),t.vertexAttribPointer(T.thickness,E._lineThicknessBuffer.itemSize,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,E._lineColorsBuffer),t.vertexAttribPointer(T.color,E._lineColorsBuffer.itemSize,t.FLOAT,!1,0,0),t.uniform1f(A.thicknessOutline,2),t.uniform1f(A.alpha,.54),t.drawElements(t.TRIANGLE_STRIP,E._lineIndexesBuffer.numItems,t.UNSIGNED_INT,0),t.uniform1f(A.thicknessOutline,1),t.uniform1f(A.alpha,1),t.drawElements(t.TRIANGLE_STRIP,E._lineIndexesBuffer.numItems,t.UNSIGNED_INT,0),p&&(_.bindOutputTexture(w),t.uniform1f(A.thicknessOutline,8),t.bindBuffer(t.ARRAY_BUFFER,E._linePickingColorsBuffer),t.vertexAttribPointer(T.color,E._linePickingColorsBuffer.itemSize,t.FLOAT,!1,0,0),t.drawElements(t.TRIANGLE_STRIP,E._lineIndexesBuffer.numItems,t.UNSIGNED_INT,0))}else u.isLoading=!1;g=window.performance.now()-v}t.enable(t.DEPTH_TEST),t.enable(t.CULL_FACE),_.deactivate()}}add(e){this._queue.push(e)}remove(e){}get queueSize(){return this._queue.length}}class Rr{constructor(e=1,t=1){this._a=e,this._b=t,this._flattening=(e-t)/e,this._f=1/this._flattening,this._a2=e*e,this._b2=t*t;const i=Math.sqrt(this._a2-this._b2);this._e=i/e,this._e2=this._e*this._e,this._e22=this._e2*this._e2,this._k=i/t,this._k2=this._k*this._k,this._radii=new m(e,e,t),this._radii2=new m(this._a2,this._a2,this._b2),this._invRadii=new m(1/e,1/e,1/t),this._invRadii2=new m(1/this._a2,1/this._a2,1/this._b2)}rhumbDistanceTo(e,t){const i=e.lat*D,r=t.lat*D,s=r-i;let n=Math.abs(t.lon-e.lon)*D;Math.abs(n)>Math.PI&&(n=n>0?-(2*Math.PI-n):2*Math.PI+n);const a=Math.log(Math.tan(r/2+Math.PI/4)/Math.tan(i/2+Math.PI/4)),o=Math.abs(a)>1e-11?s/a:Math.cos(i);return Math.sqrt(s*s+o*o*n*n)*this._a}getIntermediatePointOnGreatCircle(e,t,i){if(i==0)return e.clone();if(i==1)return t.clone();const r=this.inverse(e,t),s=r.distance,n=r.initialAzimuth;return isNaN(n)?e:this.getGreatCircleDestination(e,n,s*i)}static getBearing(e,t){let i=e.lat*D,r=e.lon*D,s=t.lat*D,n=t.lon*D,a=Math.sin(n-r)*Math.cos(s),o=Math.cos(i)*Math.sin(s)-Math.sin(i)*Math.cos(s)*Math.cos(n-r);return Math.atan2(a,o)*me}getFlattening(){return this._flattening}getEquatorialSize(){return this._a}get equatorialSize(){return this._a}get equatorialSizeSqr(){return this._a2}getPolarSize(){return this._b}get polarSize(){return this._b}get polarSizeSqr(){return this._b2}lonLatToCartesian(e){return this.geodeticToCartesian(e.lon,e.lat,e.height)}lonLatToCartesianRes(e,t){return this.geodeticToCartesian(e.lon,e.lat,e.height,t)}geodeticToCartesian(e,t,i=0,r=new m){let s=D*t,n=D*e,a=Math.sin(s),o=this._a/Math.sqrt(1-this._e2*a*a),l=(o+i)*Math.cos(s);return r.x=l*Math.cos(n),r.y=l*Math.sin(n),r.z=(o*(1-this._e2)+i)*a,r}projToSurface(e){let t=e.x||0,i=e.y||0,r=e.z||0,s=Math.sqrt(t*t+i*i+r*r);if(s===0)return this.lonLatToCartesian(new P);let n=this._invRadii2.x,a=this._invRadii2.y,o=this._invRadii2.z,l=t*t*n,c=i*i*a,d=r*r*o,f=l+c+d,_=Math.sqrt(1/f),g=e.scaleTo(_);if(f<qn)return Number.isFinite(_)?g:new m;let v=(1-_)*s/g.mulA(this._invRadii2).length(),u=0,p=0,b=0;do{u=1/(1+v*n),p=1/(1+v*a),b=1/(1+v*o);let w=u*u,y=p*p,x=b*b,T=l*w+c*y+d*x-1;if(Math.abs(T)<Mr)break;let A=w*u,E=y*p,C=x*b;v+=.5*T/(l*A*n+c*E*a+d*C*o)}while(!0);return new m(t*u,i*p,r*b)}cartesianToLonLat(e){return this.cartesianToLonLatRes(e)}cartesianToLonLatRes(e,t=new P){let i=this.projToSurface(e),r=this.getSurfaceNormal3v(i),s=e.sub(i);return t.lon=Math.atan2(r.y,r.x)*me,t.lat=Math.asin(r.z)*me,t.height=Math.sign(s.dot(e))*s.length(),t}getSurfaceNormal3v(e){let t=this._invRadii2,i=e.x*t.x,r=e.y*t.y,s=e.z*t.z,n=1/Math.sqrt(i*i+r*r+s*s);return new m(i*n,r*n,s*n)}getGreatCircleDistance(e,t){return this.inverse(e,t).distance}getGreatCircleDestination(e,t,i){return this.direct(e,t,i).destination}inverse(e,t){let i=this._a,r=this._b,s=this._flattening;const n=e.lat*D,a=e.lon*D,o=t.lat*D,c=t.lon*D-a,d=(1-s)*Math.tan(n),f=1/Math.sqrt(1+d*d),_=d*f,g=(1-s)*Math.tan(o),v=1/Math.sqrt(1+g*g),u=g*v,p=Math.abs(c)>Math.PI/2||Math.abs(o-n)>Math.PI/2;let b=c,w=null,y=null,x=p?Math.PI:0,T=0,A=p?-1:1,E=null,C=1,B=1,F=null,k=0;do{if(w=Math.sin(b),y=Math.cos(b),E=(v*w)**2+(f*u-_*v*y)**2,Math.abs(E)<1e-24)break;T=Math.sqrt(E),A=_*u+f*v*y,x=Math.atan2(T,A);const Je=f*v*w/T;B=1-Je*Je,C=B!=0?A-2*_*u/B:0;const Fi=s/16*B*(4+s*(4-3*B));F=b,b=c+(1-Fi)*s*Je*(x+Fi*T*(C+Fi*A*(-1+2*C*C)))}while(Math.abs(b-F)>Mr&&++k<1e3);const M=B*(i*i-r*r)/(r*r),L=1+M/16384*(4096+M*(-768+M*(320-175*M))),I=M/1024*(256+M*(-128+M*(74-47*M))),z=I*T*(C+I/4*(A*(-1+2*C*C)-I/6*C*(-3+4*T*T)*(-3+4*C*C))),R=r*L*(x-z),S=Math.abs(E)<Number.EPSILON?0:Math.atan2(v*w,f*u-_*v*y),q=Math.abs(E)<Number.EPSILON?Math.PI:Math.atan2(f*w,-_*v+f*u*y);return{distance:R,initialAzimuth:Math.abs(R)<Number.EPSILON?NaN:zr(S)*me,finalAzimuth:Math.abs(R)<Number.EPSILON?NaN:zr(q)*me}}direct(e,t,i){let r=e.lon,s=e.lat,n=this._a,a=this._b,o=this._flattening,l=i,c=t*D,d=Math.sin(c),f=Math.cos(c),_=(1-o)*Math.tan(s*D),g=1/Math.sqrt(1+_*_),v=_*g,u=Math.atan2(_,f),p=g*d,b=1-p*p,w=b*(n*n-a*a)/(a*a),y=1+w/16384*(4096+w*(-768+w*(320-175*w))),x=w/1024*(256+w*(-128+w*(74-47*w))),T=l/(a*y),A=2*Math.PI,E=0,C=0,B=0,F=0;for(;Math.abs(T-A)>1e-12;)E=Math.cos(2*u+T),C=Math.sin(T),B=Math.cos(T),F=x*C*(E+x/4*(B*(-1+2*E*E)-x/6*E*(-3+4*C*C)*(-3+4*E*E))),A=T,T=l/(a*y)+F;let k=v*C-g*B*f,M=Math.atan2(v*B+g*C*f,(1-o)*Math.sqrt(p*p+k*k)),L=Math.atan2(C*d,g*B-v*C*f),I=o/16*b*(4+o*(4-3*b)),z=L-(1-I)*o*p*(T+I*C*(E+I*B*(-1+2*E*E))),R=Math.atan2(p,-k);return{destination:new P(r+z*me,M*me),finalAzimuth:R*me}}hitRay(e,t){let i=this._invRadii.mul(e),r=this._invRadii.mul(t),s=i.dot(i),n=i.dot(r),a,o,l,c,d;if(s>1){if(n>=0)return;var f=n*n;if(a=s-1,o=r.dot(r),l=o*a,Math.abs(f-l)>jn&&f<l)return;if(f>l){c=n*n-l,d=-n+Math.sqrt(c);var _=d/o,g=a/d;return _<g?e.add(t.scaleTo(_)):e.add(t.scaleTo(g))}else{var v=Math.sqrt(a/o);return e.add(t.scaleTo(v))}}else{if(s<1)return a=s-1,o=r.dot(r),l=o*a,c=n*n-l,d=-n+Math.sqrt(c),e.add(t.scaleTo(d/o));if(n<0)return o=r.dot(r),e.add(t.scaleTo(-n/o))}}getNorthFrameRotation(e){let t=this.getSurfaceNormal3v(e),i=m.proj_b_to_plane(m.NORTH,t);return N.getLookRotation(i,t)}getBearingDestination(e,t=0,i=0){t=t*D;var r=(e.lon+540)%360-180,s=e.lat*D,n=r*D,a=i/this._a,o=Math.asin(Math.sin(s)*Math.cos(a)+Math.cos(s)*Math.sin(a)*Math.cos(t));return new P((n+Math.atan2(Math.sin(t)*Math.sin(a)*Math.cos(s),Math.cos(a)-Math.sin(s)*Math.sin(o)))*me,o*me)}static getIntermediatePointOnGreatCircle(e,t,i){var r=e.lat*D,s=e.lon*D,n=t.lat*D,a=t.lon*D,o=Math.sin(r),l=Math.cos(r),c=Math.sin(s),d=Math.cos(s),f=Math.sin(n),_=Math.cos(n),g=Math.sin(a),v=Math.cos(a),u=n-r,p=a-s,b=Math.sin(u/2)*Math.sin(u/2)+Math.cos(r)*Math.cos(n)*Math.sin(p/2)*Math.sin(p/2),w=2*Math.atan2(Math.sqrt(b),Math.sqrt(1-b)),y=Math.sin((1-i)*w)/Math.sin(w),x=Math.sin(i*w)/Math.sin(w),T=y*l*d+x*_*v,A=y*l*c+x*_*g,E=y*o+x*f,C=Math.atan2(E,Math.sqrt(T*T+A*A)),B=Math.atan2(A,T);return new P((B*me+540)%360-180,C*me)}static getRhumbBearing(e,t){var i=(t.lon-e.lon)*D,r=Math.log(Math.tan(t.lat*D/2+Math.PI/4)/Math.tan(e.lat*D/2+Math.PI/4));return Math.abs(i)>Math.PI&&(i>0?i=(2*Math.PI-i)*-1:i=2*Math.PI+i),(Math.atan2(i,r)*me+360)%360}getLonLatVisibilitySimple(e,t,i){const r=this.lonLatToCartesian(t),s=t.height,n=this.polarSize+s,a=Math.max(e.length()-this.polarSize,0),o=r.sub(e);let l;return a>0?l=Math.sqrt((n+a)**2-n**2):l=n,l>o.length()&&(!i||i.dot(o.normalize())>0)}}const Jl=new Rr(6378137,6356752314245179e-9),Ls=250,eh=312,th=190;let et=new Uint8Array(4),Bs=new Uint8Array(4);const ih=11,rh=200,sh=.81;class nh extends Ya{constructor(e={}){super(e.name),this._renderingFadingNodes=(n,a,o,l,c,d)=>{let f=c===0,_=this.terrain.equalizeVertices;for(let g=0,v=o._fadingNodes.length;g<v;g++){let u=o._fadingNodes[g].segment;this._fadingNodes.has(o._fadingNodes[0].__id)&&!n.has(u.node.__id)&&(n.set(u.node.__id,!0),u._transitionOpacity<1?d.push(u):f?(_&&u.equalize(),u.readyToEngage&&u.engage(),u.screenRendering(a,l,c)):u.screenRendering(a,l,c,this.transparentTexture,!0))}},this._renderingFadingNodesNoDepth=(n,a,o,l,c)=>{let d=c===0,f=this.terrain.equalizeVertices,_=a.gl;_.disable(_.DEPTH_TEST);for(let g=0,v=o._fadingNodes.length;g<v;g++){let u=o._fadingNodes[g].segment;this._fadingNodes.has(o._fadingNodes[0].__id)&&!n.has(u.node.__id)&&(n.set(u.node.__id,!0),d?(f&&u.equalize(),u.readyToEngage&&u.engage(),u.screenRendering(a,l,c)):u.screenRendering(a,l,c,this.transparentTexture,!0))}_.enable(_.DEPTH_TEST)},this._atmosphere=new Sl(e.atmosphereParameters),this._prevNodes=new Map,this._currNodes=new Map,this.transitionTime=580,this.ellipsoid=e.ellipsoid||Jl,this.lightEnabled=!0,this._planetRadius2=(this.ellipsoid.getPolarSize()-1e4)*(this.ellipsoid.getPolarSize()-1e4),this._layers=[],this._updateLayer=!1,this.visibleTileLayers=[],this.visibleVectorLayers=[],this._visibleTileLayerSlices=[],this._frustumEntityCollections=[],this.baseLayer=null,this.terrain=null,this.camera=new Xl(this,{frustums:e.frustums,eye:new m(25e6,0,0),look:m.ZERO,up:m.NORTH,minAltitude:e.minAltitude,maxAltitude:e.maxAltitude}),this.maxEqualZoomAltitude=e.maxEqualZoomAltitude||15e6,this.minEqualZoomAltitude=e.minEqualZoomAltitude||1e4,this.minEqualZoomCameraSlope=e.minEqualZoomCameraSlope||.8,this.mousePositionOnEarth=new m,this.emptyTexture=null,this.transparentTexture=null,this.defaultTexture=null,this.minCurrZoom=pe,this.maxCurrZoom=ve,this._viewExtent=new U(new P(180,180),new P(-180,-180)),this._skipPreRender=!1,this._initialViewExtent=null,this._createdNodesCount=0,this._renderedNodes=[],this._renderedNodesInFrustum=[],this._fadingNodes=new Map,this._fadingNodesInFrustum=[],this.layerLock=new ur,this.terrainLock=new ur,this._heightFactor=1,this._indexesCache=[],this._indexesCacheToRemove=[],this._indexesCacheToRemoveCounter=0,this._textureCoordsBufferCache=[],this.quadTreeStrategy=e.quadTreeStrategyPrototype?new e.quadTreeStrategyPrototype(this):new Ol(this),this._nightTexture=null,this._specularTexture=null;let t=Fe(e.ambient,new m(.2,.2,.3)),i=Fe(e.diffuse,new m(1,1,1)),r=Fe(e.specular,new m(63e-5,55e-5,32e-5)),s=e.shininess||18;this._ambient=new Float32Array([t.x,t.y,t.z]),this._diffuse=new Float32Array([i.x,i.y,i.z]),this._specular=new Float32Array([r.x,r.y,r.z,s]),this._maxGridSize=Math.log2(e.maxGridSize||256),this.SLICE_SIZE=4,this.SLICE_SIZE_4=this.SLICE_SIZE*4,this.SLICE_SIZE_3=this.SLICE_SIZE*3,this._lodSize=Ls,this._curLodSize=Ls,this._minLodSize=eh,this._maxLodSize=th,this._pickingColorArr=new Float32Array(this.SLICE_SIZE_4),this._samplerArr=new Int32Array(this.SLICE_SIZE),this._pickingMaskArr=new Int32Array(this.SLICE_SIZE),this._geoImageCreator=new Ul(this),this._vectorTileCreator=new Ql(this),this._normalMapCreator=new Gl(this),this._terrainWorker=new Zl(3),this._plainSegmentWorker=new jl(3),this._tileLoader=new Nn(e.maxLoadingRequests||12),this._memKey=new lt,this.events=Ke(ah),this._distBeforeMemClear=0,this._prevCamEye=new m,this._initialized=!1,this.always=[],this._renderCompleted=!1,this._renderCompletedActivated=!1,this._terrainCompleted=!1,this._terrainCompletedActivated=!1,this._collectRenderNodesIsActive=!0,this.nightTextureCoefficient=2,this._renderScreenNodesPASS=this._renderScreenNodesPASSNoAtmos,this._renderScreenNodesWithHeightPASS=this._renderScreenNodesWithHeightPASSNoAtmos,this._atmosphereEnabled=e.atmosphereEnabled||!1,this._atmosphereMaxMinOpacity=new Float32Array([1,.41]),this.solidTextureOne=null,this.solidTextureTwo=null,this._nightTextureSrc=e.nightTextureSrc||null,this._specularTextureSrc=e.specularTextureSrc||null,this._transitionOpacityEnabled=e.transitionOpacityEnabled!=null?e.transitionOpacityEnabled:!0}get terrainReady(){return this._terrainCompleted&&this._terrainCompletedActivated}get maxGridSize(){return this._maxGridSize}getNorthFrameRotation(e){return this.ellipsoid.getNorthFrameRotation(e)}set atmosphereMaxOpacity(e){this._atmosphereMaxMinOpacity[0]=e}get atmosphereMaxOpacity(){return this._atmosphereMaxMinOpacity[0]}set atmosphereMinOpacity(e){this._atmosphereMaxMinOpacity[1]=e}get atmosphereMinOpacity(){return this._atmosphereMaxMinOpacity[1]}set atmosphereEnabled(e){e!=this._atmosphereEnabled&&(this._atmosphereEnabled=e,this._initializeAtmosphere())}get atmosphereEnabled(){return this._atmosphereEnabled}set diffuse(e){let t=Fe(e);this._diffuse=new Float32Array(t.toArray())}set ambient(e){let t=Fe(e);this._ambient=new Float32Array(t.toArray())}set specular(e){let t=Fe(e);this._specular=new Float32Array([t.x,t.y,t.y,this._specular[3]])}set shininess(e){this._specular[3]=e}get normalMapCreator(){return this._normalMapCreator}get layers(){return[...this._layers]}getLayers(){return this.layers}get sunPos(){return this.renderer.controls.sun.sunlight.getPosition()}addControl(e){e.planet=this,e.addTo(this.renderer)}get lodSize(){return this._lodSize}setLodSize(e,t,i){this._maxLodSize=i||this._maxLodSize,this._minLodSize=t||this._minLodSize,this._curLodSize=e,this._renderCompletedActivated=!1,this._terrainCompletedActivated=!1}addControls(e){for(let t=0;t<e.length;t++)this.addControl(e[t])}getLayerByName(e){for(let t=0,i=this._layers.length;t<i;t++)if(e===this._layers[t].name)return this._layers[t]}addLayer(e){e.addTo(this)}_onLayerVisibilityChanged(e){this.events.dispatch(this.events.layervisibilitychange,e)}addLayers(e){for(let t=0,i=e.length;t<i;t++)this.addLayer(e[t])}removeLayer(e){e.remove()}_clearLayerMaterial(e){this.quadTreeStrategy.clearLayerMaterial(e)}setBaseLayer(e){this.baseLayer?this.baseLayer.isEqual(e)||(this.baseLayer.setVisibility(!1),this.baseLayer=e,e.setVisibility(!0),this.events.dispatch(this.events.baselayerchange,e)):(this.baseLayer=e,this.baseLayer.setVisibility(!0),this.events.dispatch(this.events.baselayerchange,e))}setHeightFactor(e){this._renderCompletedActivated=!1,this._terrainCompletedActivated=!1,this._heightFactor!==e&&(this._heightFactor=e,this.quadTreeStrategy.destroyBranches(),this._clearRenderedNodeList(),this._clearRenderNodesInFrustum())}getHeightFactor(){return this._heightFactor}setTerrain(e){this._renderCompletedActivated=!1,this._terrainCompletedActivated=!1,this._initialized&&this.memClear(),this.terrain&&(this.terrain.abortLoading(),this.terrain.clearCache(),this.terrain._planet=null),this.terrain=e,this.terrain._planet=this,this.quadTreeStrategy.destroyBranches(),e._geoid.model?(this._plainSegmentWorker.setGeoid(e.getGeoid()),e._isReady=!0):kn.loadModel(e.geoid.src).then(t=>{e.geoid.setModel(t),this._plainSegmentWorker.setGeoid(e.getGeoid()),e._isReady=!0}).catch(t=>{console.warn(t)})}initAtmosphereShader(e){if(this.renderer&&this.renderer.handler&&this._atmosphereEnabled){let t=this.renderer.handler;t.isWebGl2()?(t.removeProgram("drawnode_screen_wl"),t.addProgram(As(e),!0)):console.warn("Atmosphere WebGL2 only")}}get atmosphereControl(){return this._atmosphere}_initializeAtmosphere(){if(!this.renderer)return;let e=this.renderer.handler;e.removeProgram("drawnode_screen_wl"),this._atmosphereEnabled?(this._renderScreenNodesPASS=this._renderScreenNodesPASSAtmos,this._renderScreenNodesWithHeightPASS=this._renderScreenNodesWithHeightPASSAtmos,this.renderer.controls.Atmosphere||this.addControl(this._atmosphere),this._atmosphere.activate(),e.isWebGl2()?e.addProgram(As(this._atmosphere.parameters),!0):e.addProgram(Ts(),!0),this.renderer.controls.SimpleSkyBackground&&this.renderer.controls.SimpleSkyBackground.deactivate()):(this._renderScreenNodesPASS=this._renderScreenNodesPASSNoAtmos,this._renderScreenNodesWithHeightPASS=this._renderScreenNodesWithHeightPASSNoAtmos,this._atmosphere.deactivate(),this.renderer.controls.SimpleSkyBackground?this.renderer.controls.SimpleSkyBackground.activate():this.addControl(new nl),e.isWebGl2()?e.addProgram(Cl(),!0):e.addProgram(Ts(),!0))}_initializeShaders(){let e=this.renderer.handler;e.addProgram(El(),!0),e.addProgram(Pl(),!0),e.addProgram(Bl(),!0),e.addProgram(Ll(),!0),this.renderer.addPickingCallback(this,this._renderColorPickingFramebufferPASS),this.renderer.addDepthCallback(this,this._renderDepthFramebufferPASS),this.renderer.addDistanceCallback(this,this._renderDistanceFramebufferPASS)}_onLayerLoadend(e){this.events.dispatch(this.events.layerloadend,e)}init(){this._tileLoader.events.on("layerloadend",this._onLayerLoadend,this),mi().setMaxGridSize(this._maxGridSize);const e=this._maxGridSize;let t=0;for(let r=0;r<=e;r++){!this._indexesCache[r]&&(this._indexesCache[r]=new Array(e));for(let s=0;s<=e;s++){!this._indexesCache[r][s]&&(this._indexesCache[r][s]=new Array(e));for(let n=0;n<=e;n++){!this._indexesCache[r][s][n]&&(this._indexesCache[r][s][n]=new Array(e));for(let a=0;a<=e;a++){!this._indexesCache[r][s][n][a]&&(this._indexesCache[r][s][n][a]=new Array(e));for(let o=0;o<=e;o++){let l={buffer:null};if(r>=1&&r===s&&r===n&&r===a&&r===o){let c=mi().createSegmentIndexes(r,[s,n,a,o]);l.buffer=this.renderer.handler.createElementArrayBuffer(c,1)}else this._indexesCacheToRemove[t++]=l;this._indexesCache[r][s][n][a][o]=l}}}}}this.renderer.events.on("resize",()=>{this._renderCompletedActivated=!1,this._terrainCompletedActivated=!1}),this.renderer.events.on("drawtransparent",()=>{this._renderScreenNodesWithHeightPASS()}),this._textureCoordsBufferCache=[];let i=mi().initTextureCoordsTable(e+1);for(let r=0;r<=e;r++)this._textureCoordsBufferCache[r]=this.renderer.handler.createArrayBuffer(i[r],2,((1<<r)+1)*((1<<r)+1));this.renderer.handler.createDefaultTexture(null,r=>{this.solidTextureOne=r,this.solidTextureTwo=r}),this.transparentTexture=this.renderer.handler.transparentTexture,this._renderedNodesInFrustum=new Array(this.camera.frustums.length);for(let r=0,s=this._renderedNodesInFrustum.length;r<s;r++)this._renderedNodesInFrustum[r]=[];if(this.quadTreeStrategy.init(),this.drawMode=this.renderer.handler.gl.TRIANGLE_STRIP,this._initializeShaders(),this._initializeAtmosphere(),this._updateVisibleLayers(),this.renderer.addPickingCallback(this,this._frustumEntityCollectionPickingCallback),this._nightTextureSrc){let r=new Image;r.crossOrigin="Anonymous",r.onload=()=>{this._nightTexture=this.renderer.handler.createTextureDefault(r),this._nightTexture.default=!0},r.src=this._nightTextureSrc}if(this._specularTextureSrc){let r=new Image;r.crossOrigin="Anonymous",r.onload=()=>{this._specularTexture=this.renderer.handler.createTextureDefault(r),this._specularTexture.default=!0},r.src=this._specularTextureSrc}this._geoImageCreator.init(),this._vectorTileCreator.init(),this._normalMapCreator.init(),this.renderer.events.on("draw",this._globalPreDraw,this,-100),this._preRender(),this.renderer.events.on("postdraw",()=>{this._checkRendercompleted()}),this.initLayers(),this._initialized=!0,this._initialViewExtent&&this.viewExtent(this._initialViewExtent),this.renderer.activeCamera=this.camera,this.camera.bindRenderer(this.renderer),this.camera.update()}initLayers(){let e=[...this._layers];for(let t=0;t<e.length;t++)this.removeLayer(e[t]),this.addLayer(e[t])}_clearIndexesCache(){this._indexesCacheToRemoveCounter=0;let e=this._indexesCacheToRemove,t=this.renderer.handler.gl;for(let i=0,r=e.length;i<r;i++){let s=e[i];t.deleteBuffer(s.buffer),s.buffer=null}}_preRender(){this.quadTreeStrategy.preRender(),this._preLoad()}_preLoad(){this._clearRenderedNodeList(),this._skipPreRender=!1,this.quadTreeStrategy.preLoad()}createDefaultTextures(e,t){this.renderer.handler.gl.deleteTexture(this.solidTextureOne),this.renderer.handler.gl.deleteTexture(this.solidTextureTwo),this.renderer.handler.createDefaultTexture(e,i=>{this.solidTextureOne=i}),this.renderer.handler.createDefaultTexture(t,i=>{this.solidTextureTwo=i})}_getLayerAttributionHTML(e){return`<div class="og-attribution__layer">${e.getAttribution()}</div>`}updateAttributionsList(){let e="";for(let t=0,i=this._layers.length;t<i;t++){let r=this._layers[t];r.getVisibility()&&r.getAttribution().length&&(e+=this._getLayerAttributionHTML(r))}this._applyAttribution(e)}updateVisibleLayers(){this._updateLayer=!0}_updateVisibleLayers(){this.visibleTileLayers=[],this.visibleTileLayers.length=0,this.visibleVectorLayers=[],this.visibleVectorLayers.length=0;let e="";for(let t=0,i=this._layers.length;t<i;t++){let r=this._layers[t];r.getVisibility()?(r.isBaseLayer()&&(this.createDefaultTextures(r._defaultTextures[0],r._defaultTextures[1]),this.baseLayer=r),r.hasImageryTiles()&&this.visibleTileLayers.push(r),r.isVector&&this.visibleVectorLayers.push(r),r.getAttribution().length&&(e+=this._getLayerAttributionHTML(r))):r._fading&&r._fadingOpacity>0&&(r.hasImageryTiles()&&this.visibleTileLayers.push(r),r.isVector&&this.visibleVectorLayers.push(r))}this._applyAttribution(e),this._sortLayers()}_applyAttribution(e){this.renderer&&this.renderer.div&&(e.length?this.renderer.div.attributions.innerHTML!==e&&(this.renderer.div.attributions.innerHTML=e):this.renderer.div.attributions.innerHTML="")}_sortLayers(){if(this.visibleVectorLayers.sort((e,t)=>e.getZIndex()-t.getZIndex()||e.getHeight()-t.getHeight()),this._visibleTileLayerSlices=[],this._visibleTileLayerSlices.length=0,this.visibleTileLayers.length){this.visibleTileLayers.sort((i,r)=>i.getHeight()-r.getHeight()||i.getZIndex()-r.getZIndex());let e=-1,t=this.visibleTileLayers[0].getHeight();for(let i=0,r=this.visibleTileLayers.length;i<r;i++)(i%this.SLICE_SIZE===0||this.visibleTileLayers[i].getHeight()!==t)&&(e++,this._visibleTileLayerSlices[e]=[],t=this.visibleTileLayers[i].getHeight()),this._visibleTileLayerSlices[e].push(this.visibleTileLayers[i])}}_clearRenderedNodeList(){this._renderedNodes.length=0,this._renderedNodes=[]}_clearRenderNodesInFrustum(){for(let e=0,t=this._renderedNodesInFrustum.length;e<t;e++)this._renderedNodesInFrustum[e].length=0,this._renderedNodesInFrustum[e]=[]}_collectRenderedNodesMaxZoom(e){if(e.slope>this.minEqualZoomCameraSlope&&e._lonLat.height<this.maxEqualZoomAltitude&&e._lonLat.height>this.minEqualZoomAltitude){this.minCurrZoom=this.maxCurrZoom;let t=this._renderedNodes,i=this._renderedNodesInFrustum,r=[];this._clearRenderNodesInFrustum(),this._renderedNodes=[];for(let s=0,n=t.length;s<n;s++){let a=t[s],o=a.segment.centerNormal.dot(e._b);if(a.segment.tileZoom===this.maxCurrZoom||o<sh){this._renderedNodes.push(a);let l=0,c=a.inFrustum;for(;c;)c&1&&i[l].push(a),l++,c>>=1}else r.push(a)}for(let s=0,n=r.length;s<n;s++)r[s].renderTree(e,this.maxCurrZoom,null,!1,r[s])}}set transitionOpacityEnabled(e){this._transitionOpacityEnabled=e}get transitionOpacityEnabled(){return this._transitionOpacityEnabled}_collectRenderNodes(e){if(this._lodSize=Wn(e.slope<0?0:e.slope,this._curLodSize,this._minLodSize),e._insideSegment=null,this._clearRenderedNodeList(),this._clearRenderNodesInFrustum(),this._viewExtent.southWest.set(180,180),this._viewExtent.northEast.set(-180,-180),this.minCurrZoom=pe,this.maxCurrZoom=ve,this.quadTreeStrategy.collectRenderNodes(),this._collectRenderedNodesMaxZoom(e),this._fadingNodes.clear(),this._transitionOpacityEnabled){let t=[];for(let i=0;i<this._renderedNodes.length;i++){let r=this._renderedNodes[i];if(r._collectFadingNodes(),r._refreshTransitionOpacity(),r.segment._transitionOpacity>=1)r.clearNeighbors(),r.getRenderedNodesNeighbors(t),t.push(r);else for(let s=0;s<r._fadingNodes.length;s++){let n=r._fadingNodes[s];n.segment&&n.segment._transitionOpacity>=1&&(n.clearNeighbors(),n.getRenderedNodesNeighbors(t),t.push(n))}}}}_renderScreenNodesPASSNoAtmos(){let e=this.renderer.activeCamera,t=this._setUniformsNoAtmos(e);this._renderingScreenNodes(t,e,this._renderedNodesInFrustum[e.currentFrustumIndex])}_renderScreenNodesPASSAtmos(){let e=this.renderer.activeCamera,t=this._setUniformsAtmos(e);this._renderingScreenNodes(t,e,this._renderedNodesInFrustum[e.currentFrustumIndex])}_renderScreenNodesWithHeightPASSNoAtmos(){let e=this.renderer.activeCamera,t=this._setUniformsNoAtmos(e);this._renderingScreenNodesWithHeight(t,e,this._renderedNodesInFrustum[e.currentFrustumIndex])}_renderScreenNodesWithHeightPASSAtmos(){let e=this.renderer.activeCamera,t=this._setUniformsAtmos(e);this._renderingScreenNodesWithHeight(t,e,this._renderedNodesInFrustum[e.currentFrustumIndex])}_globalPreDraw(){let e=this.camera;this.renderer.__useDistanceFramebuffer__=!this.terrain.isEmpty,this._distBeforeMemClear+=this._prevCamEye.distance(e.eye),this._prevCamEye.copy(e.eye),e.checkFly(),this._createdNodesCount>rh&&this._distBeforeMemClear>1e3&&(this.terrain.clearCache(),this.memClear()),this._indexesCacheToRemoveCounter>600&&this._clearIndexesCache()}preFrame(){this._updateLayer&&(this._updateLayer=!1,this._updateVisibleLayers()),this.camera.isFirstPass&&(this.camera.update(),this._skipPreRender&&this._collectRenderNodesIsActive&&this._collectRenderNodes(this.camera),this._skipPreRender=!0,this.transformLights(),this._normalMapCreator.frame(),this._geoImageCreator.frame(),this._vectorTileCreator.frame(),this.camera.checkTerrainCollision(),this.camera.update(),this.events.dispatch(this.events.draw,this),this._collectVectorLayerCollections()),this.drawEntityCollections(this._frustumEntityCollections)}frame(){this._renderScreenNodesPASS()}_checkRendercompleted(){this._renderCompleted?this._renderCompletedActivated||(this._renderCompletedActivated=!0,this.events.dispatch(this.events.rendercompleted,!0)):this._renderCompletedActivated=!1,this._renderCompleted=!0,this._terrainCompleted?this._terrainCompletedActivated||(this._terrainCompletedActivated=!0,this.events.dispatch(this.events.terraincompleted,!0)):this._terrainCompletedActivated=!1,this._terrainCompleted=!0}lockQuadTree(){this._collectRenderNodesIsActive=!1,this.camera.setTerrainCollisionActivity(!1)}unlockQuadTree(){this._collectRenderNodesIsActive=!0,this.camera.setTerrainCollisionActivity(!0)}_setUniformsNoAtmos(e){let t,i,r=this.renderer,s=r.handler,n=s.gl;return n.enable(n.CULL_FACE),r.enableBlendOneSrcAlpha(),this.lightEnabled?(s.programs.drawnode_screen_wl.activate(),t=s.programs.drawnode_screen_wl._program,i=t.uniforms,n.uniform3fv(i.lightsPositions,this._lightsPositions),n.uniformMatrix4fv(i.viewMatrix,!1,e.getViewMatrix()),n.uniformMatrix4fv(i.projectionMatrix,!1,e.getProjectionMatrix()),this.baseLayer?(n.uniform3fv(i.diffuse,this.baseLayer._diffuse||this._diffuse),n.uniform3fv(i.ambient,this.baseLayer._ambient||this._ambient),n.uniform4fv(i.specular,this.baseLayer._specular||this._specular),n.uniform1f(i.nightTextureCoefficient,this.baseLayer.nightTextureCoefficient||this.nightTextureCoefficient)):(n.uniform3fv(i.diffuse,this._diffuse),n.uniform3fv(i.ambient,this._ambient),n.uniform4fv(i.specular,this._specular),n.uniform1f(i.nightTextureCoefficient,this.nightTextureCoefficient)),n.activeTexture(n.TEXTURE0+this.SLICE_SIZE),n.bindTexture(n.TEXTURE_2D,this._nightTexture||this.transparentTexture),n.uniform1i(i.nightTexture,this.SLICE_SIZE),n.activeTexture(n.TEXTURE0+this.SLICE_SIZE+1),n.bindTexture(n.TEXTURE_2D,this._specularTexture||this.transparentTexture),n.uniform1i(i.specularTexture,this.SLICE_SIZE+1),n.uniform1f(i.camHeight,e.getHeight())):(s.programs.drawnode_screen_nl.activate(),t=s.programs.drawnode_screen_nl._program,i=t.uniforms,n.uniformMatrix4fv(i.viewMatrix,!1,e.getViewMatrix()),n.uniformMatrix4fv(i.projectionMatrix,!1,e.getProjectionMatrix())),n.uniform3fv(i.eyePositionHigh,e.eyeHigh),n.uniform3fv(i.eyePositionLow,e.eyeLow),t}_setUniformsAtmos(e){let t,i,r=this.renderer,s=r.handler,n=s.gl;return n.enable(n.CULL_FACE),r.enableBlendOneSrcAlpha(),this.lightEnabled?(s.programs.drawnode_screen_wl.activate(),t=s.programs.drawnode_screen_wl._program,i=t.uniforms,n.uniform3fv(i.lightsPositions,this._lightsPositions),n.uniformMatrix4fv(i.viewMatrix,!1,e.getViewMatrix()),n.uniformMatrix4fv(i.projectionMatrix,!1,e.getProjectionMatrix()),this.baseLayer?(n.uniform3fv(i.diffuse,this.baseLayer._diffuse||this._diffuse),n.uniform3fv(i.ambient,this.baseLayer._ambient||this._ambient),n.uniform4fv(i.specular,this.baseLayer._specular||this._specular),n.uniform1f(i.nightTextureCoefficient,this.baseLayer.nightTextureCoefficient||this.nightTextureCoefficient)):(n.uniform3fv(i.diffuse,this._diffuse),n.uniform3fv(i.ambient,this._ambient),n.uniform4fv(i.specular,this._specular),n.uniform1f(i.nightTextureCoefficient,this.nightTextureCoefficient)),n.uniform2fv(i.maxMinOpacity,this._atmosphereMaxMinOpacity),n.activeTexture(n.TEXTURE0+this.SLICE_SIZE),n.bindTexture(n.TEXTURE_2D,this._nightTexture||this.transparentTexture),n.uniform1i(i.nightTexture,this.SLICE_SIZE),n.activeTexture(n.TEXTURE0+this.SLICE_SIZE+1),n.bindTexture(n.TEXTURE_2D,this._specularTexture||this.transparentTexture),n.uniform1i(i.specularTexture,this.SLICE_SIZE+1),n.activeTexture(n.TEXTURE0+this.SLICE_SIZE+4),n.bindTexture(n.TEXTURE_2D,r.controls.Atmosphere._transmittanceBuffer.textures[0]),n.uniform1i(i.transmittanceTexture,this.SLICE_SIZE+4),n.activeTexture(n.TEXTURE0+this.SLICE_SIZE+5),n.bindTexture(n.TEXTURE_2D,r.controls.Atmosphere._scatteringBuffer.textures[0]),n.uniform1i(i.scatteringTexture,this.SLICE_SIZE+5),n.uniform1f(i.camHeight,e.getHeight())):(s.programs.drawnode_screen_nl.activate(),t=s.programs.drawnode_screen_nl._program,i=t.uniforms,n.uniformMatrix4fv(i.viewMatrix,!1,e.getViewMatrix()),n.uniformMatrix4fv(i.projectionMatrix,!1,e.getProjectionMatrix())),n.uniform3fv(i.eyePositionHigh,e.eyeHigh),n.uniform3fv(i.eyePositionLow,e.eyeLow),t}_renderingScreenNodes(e,t,i){let r=t.isFirstPass,s=this._visibleTileLayerSlices;if(s.length){let c=s[0];for(let d=c.length-1;d>=0;--d){let f=c[d];f._fading&&r&&f._refreshFadingOpacity()&&c.splice(d,1)}}let n=new Map,a=[],o=this.terrain.equalizeVertices,l=i.length;if(t.slope>.8||!this.terrain||this.terrain.isEmpty)for(;l--;){let c=i[l],d=c.segment;this._renderingFadingNodesNoDepth(n,e,c,s[0],0),o&&d.equalize(),d.readyToEngage&&d.engage(),d.screenRendering(e,s[0],0)}else{for(;l--;){let c=i[l],d=c.segment;this._renderingFadingNodes(n,e,c,s[0],0,a),d._transitionOpacity<1?a.push(d):(o&&d.equalize(),d.readyToEngage&&d.engage(),d.screenRendering(e,s[0],0))}for(let c=0;c<a.length;c++){let d=a[c];o&&d.equalize(),d.readyToEngage&&d.engage(),d.screenRendering(e,s[0],0)}}}_renderingScreenNodesWithHeight(e,t,i){let r=this.renderer.handler.gl,s=t.isFirstPass,n=this._visibleTileLayerSlices;r.enable(r.POLYGON_OFFSET_FILL),r.disable(r.CULL_FACE);let a=new Map,o=[];for(let l=1,c=n.length;l<c;l++){let d=n[l];for(let _=d.length-1;_>=0;--_){let g=d[_];g._fading&&s&&g._refreshFadingOpacity()&&d.splice(_,1)}r.polygonOffset(0,-l);let f=i.length;for(;f--;){let _=i[f];this._renderingFadingNodes(a,e,_,n[l],l,o),_.segment._transitionOpacity<1?_.segment.initSlice(l):_.segment.screenRendering(e,n[l],l,this.transparentTexture,!0)}}r.disable(r.POLYGON_OFFSET_FILL),r.enable(r.CULL_FACE)}_renderDistanceFramebufferPASS(){if(!this.terrain.isEmpty){let e,t=this.renderer,i=t.handler,r=i.gl,s=t.activeCamera;i.programs.drawnode_heightPicking.activate(),e=i.programs.drawnode_heightPicking._program;let n=e.uniforms;r.uniformMatrix4fv(n.viewMatrix,!1,s.getViewMatrix()),r.uniformMatrix4fv(n.projectionMatrix,!1,s.getProjectionMatrix()),r.uniform3fv(n.eyePositionHigh,s.eyeHigh),r.uniform3fv(n.eyePositionLow,s.eyeLow);let a=this._renderedNodesInFrustum[s.currentFrustumIndex],o=this._visibleTileLayerSlices,l=a.length;for(;l--;)a[l].segment.heightPickingRendering(e,o[0])}}_renderColorPickingFramebufferPASS(){let e,t=this.renderer,i=t.handler,r=i.gl;i.programs.drawnode_colorPicking.activate(),e=i.programs.drawnode_colorPicking._program;let s=e.uniforms,n=t.activeCamera;r.enable(r.CULL_FACE),r.uniformMatrix4fv(s.viewMatrix,!1,n.getViewMatrix()),r.uniformMatrix4fv(s.projectionMatrix,!1,n.getProjectionMatrix()),r.uniform3fv(s.eyePositionHigh,n.eyeHigh),r.uniform3fv(s.eyePositionLow,n.eyeLow);let a=this._renderedNodesInFrustum[n.getCurrentFrustum()],o=this._visibleTileLayerSlices,l=a.length;for(;l--;)a[l].segment.colorPickingRendering(e,o[0],0);t.enableBlendDefault(),r.enable(r.POLYGON_OFFSET_FILL);for(let c=1,d=o.length;c<d;c++)for(l=a.length,r.polygonOffset(0,-c);l--;)a[l].segment.colorPickingRendering(e,o[c],c,this.transparentTexture,!0);r.disable(r.POLYGON_OFFSET_FILL)}_renderDepthFramebufferPASS(){let e,t=this.renderer,i=t.handler,r=i.gl;i.programs.drawnode_depth.activate(),e=i.programs.drawnode_depth._program;let s=e.uniforms,n=t.activeCamera;r.disable(r.BLEND),r.disable(r.POLYGON_OFFSET_FILL),r.uniformMatrix4fv(s.viewMatrix,!1,n.getViewMatrix()),r.uniformMatrix4fv(s.projectionMatrix,!1,n.getProjectionMatrix()),r.uniform3fv(s.eyePositionHigh,n.eyeHigh),r.uniform3fv(s.eyePositionLow,n.eyeLow),r.uniform3fv(s.frustumPickingColor,n.frustum._pickingColorU);let a=this._renderedNodesInFrustum[n.getCurrentFrustum()],o=this._visibleTileLayerSlices,l=a.length;for(;l--;)a[l].segment.depthRendering(e,o[0]);r.enable(r.BLEND)}_collectVectorLayerCollections(){this._frustumEntityCollections.length=0,this._frustumEntityCollections=[];let e=this.visibleVectorLayers.length;for(;e--;){let t=this.visibleVectorLayers[e];t._fading&&t._refreshFadingOpacity()&&this.visibleVectorLayers.splice(e,1),t.collectVisibleCollections(this._frustumEntityCollections),t.update()}}_frustumEntityCollectionPickingCallback(){this.drawPickingEntityCollections(this._frustumEntityCollections)}memClear(){this._distBeforeMemClear=0,this.camera._insideSegment=null,this.layerLock.lock(this._memKey),this.terrainLock.lock(this._memKey),this._normalMapCreator.lock(this._memKey),this._normalMapCreator.clear(),this.terrain.abortLoading(),this._tileLoader.abortAll(),this.quadTreeStrategy.clear(),this.layerLock.free(this._memKey),this.terrainLock.free(this._memKey),this._normalMapCreator.free(this._memKey),this._createdNodesCount=0}getRayIntersectionEllipsoid(e){return this.ellipsoid.hitRay(e.origin,e.direction)}getCartesianFromPixelEllipsoid(e){let t=this.renderer.activeCamera;return this.ellipsoid.hitRay(t.eye,t.unproject(e.x,e.y))}getLonLatFromPixelEllipsoid(e){let t=this.getCartesianFromPixelEllipsoid(e);if(t)return this.ellipsoid.cartesianToLonLat(t)}getCartesianFromMouseTerrain(){let e=this.renderer.events.mouseState,t=this.getDistanceFromPixel(e);if(t)return e.direction.scaleTo(t).addA(this.renderer.activeCamera.eye)}getCartesianFromPixelTerrain(e){let t=this.getDistanceFromPixel(e);if(t)return(e.direction||this.renderer.activeCamera.unproject(e.x,e.y)).scaleTo(t).addA(this.renderer.activeCamera.eye)}getLonLatFromPixelTerrain(e){let t=this.getCartesianFromPixelTerrain(e);if(t)return this.ellipsoid.cartesianToLonLat(t)}getPixelFromCartesian(e){return this.renderer.activeCamera.project(e)}getPixelFromLonLat(e){let t=this.ellipsoid.lonLatToCartesian(e);if(t)return this.renderer.activeCamera.project(t)}getDistanceFromPixelEllipsoid(e){let t=this.getCartesianFromPixelEllipsoid(e);if(t)return t.distance(this.renderer.activeCamera.eye)}getDistanceFromPixel(e){if(this.terrain.isEmpty)return this.getDistanceFromPixelEllipsoid(e)||0;{let t=this.renderer,i=t.handler.canvas,r=e.x/i.width,s=(i.height-e.y)/i.height;et[0]=et[1]=et[2]=0;let n=0;if(t.readDistanceColor(r,s,et),n=yo(et),!(et[0]||et[1]||et[2]))n=this.getDistanceFromPixelEllipsoid(e)||0;else if(n<ih){t.screenDepthFramebuffer.activate(),t.screenDepthFramebuffer.readPixels(Bs,r,s);let a=new ee(r*2-1,s*2-1,Bs[0]/255*2-1,1*2-1),o=this.camera.frustums[0].inverseProjectionMatrix.mulVec4(a),l=e.direction||t.activeCamera.unproject(e.x,e.y);n=-(o.z/o.w)/l.dot(t.activeCamera.getForward()),t.screenDepthFramebuffer.deactivate()}return n}}viewExtent(e){this.camera?this.camera.viewExtent(e):this._initialViewExtent=e}viewExtentArr(e){this.viewExtent(new U(new P(e[0],e[1]),new P(e[2],e[3])))}getViewExtent(){return this._viewExtent}viewLonLat(e,t,i){this.camera.setLonLat(e,t,i)}flyExtent(e,t,i,r,s,n){this.camera.flyExtent(e,t,i,r,s,n)}flyCartesian(e,t,i,r,s,n,a){this.camera.flyCartesian(e,t,i,r,s,n,a)}flyLonLat(e,t,i,r,s,n,a){this.camera.flyLonLat(e,t,i,r,s,n,a)}stopFlying(){this.camera.stopFlying()}updateBillboardsTexCoords(){for(let t=0;t<this.entityCollections.length;t++)this.entityCollections[t].billboardHandler.refreshTexCoordsArr();let e={};for(let t=0;t<this._layers.length;t++){let i=this._layers[t];i instanceof Uo&&i.each(function(r){r._entityCollection&&!e[r._entityCollection.id]&&(r._entityCollection.billboardHandler.refreshTexCoordsArr(),e[r._entityCollection.id]=!0)})}}getEntityTerrainPoint(e,t){let i=this._renderedNodes,r=i.length;for(;r--;)if(i[r].segment.isEntityInside(e))return i[r].segment.getEntityTerrainPoint(e,t)}async getHeightDefault(e){return new Promise(t=>{this.terrain?this.terrain.getHeightAsync(e.clone(),i=>{t(i)}):t(0)})}async getHeightAboveELL(e){return new Promise(t=>{this.terrain?this.terrain.getHeightAsync(e.clone(),i=>{t(i+this.terrain.geoid.getHeightLonLat(e))}):t(0)})}onremove(){this.memClear(),this.quadTreeStrategy.destroyBranches(),this._renderedNodes=[]}}const ah=["draw","layeradd","baselayerchange","layerremove","layervisibilitychange","rendercompleted","terraincompleted","layerloadend"];class ai{constructor(e={}){this.__id=ai.__counter__++,this.equalizeVertices=e.equalizeVertices||!1,this.equalizeNormals=!1,this.isEmpty=!0,this.name=e.name||"empty",this.minZoom=e.minZoom||2,this.maxZoom=e.maxZoom||19,this.maxNativeZoom=e.maxNativeZoom||this.maxZoom,this.gridSizeByZoom=e.gridSizeByZoom||[64,32,16,8,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],this._maxNodeZoom=this.gridSizeByZoom.length-1,this.plainGridSize=2,this.noDataValues=[],this._planet=null,this._geoid=e.geoid||new kn({src:e.geoidSrc||null}),this._isReady=!1}setUrlRewriteCallback(e){}get isIdle(){return!0}isEqual(e){return e.__id===this.__id}static checkNoDataValue(e,t){return sa(e,t)!==-1}isBlur(e){return!1}set maxNodeZoom(e){e>this.gridSizeByZoom.length-1&&(e=this.gridSizeByZoom.length-1),this._maxNodeZoom=e}get maxNodeZoom(){return this._maxNodeZoom}set geoid(e){this._geoid=e}get geoid(){return this._geoid}getGeoid(){return this._geoid}handleSegmentTerrain(e){e.terrainIsLoading=!1,e.terrainReady=!0,e.terrainExists=!0}isReady(){return this._isReady}abortLoading(){}clearCache(){}getHeightAsync(e,t){return t(0),!0}loadTerrain(e,t=!1){}}ai.__counter__=0;class oh extends ai{constructor(e="",t={}){super({geoidSrc:"https://openglobus.org/geoid/egm84-30.pgm",maxNativeZoom:t.maxNativeZoom||14,...t}),this._s=t.subdomains||["a","b","c"],this.events=Ke(lh,this),this._requestCount=0,this._requestsPeerSubdomain=4,this.isEmpty=!1,this.equalizeNormals=!0,this.name=e||"openglobus",this.url=t.url||"https://{s}.srtm3.openglobus.org/{z}/{y}/{x}.ddm",this.gridSizeByZoom=t.gridSizeByZoom||[64,32,32,16,16,8,8,8,16,16,16,32,32,32,32,16,8,4,2,2,2,2,2,2],this._heightFactor=t.heightFactor!=null?t.heightFactor:1,this.noDataValues=t.noDataValues||[];for(let i=0;i<this.noDataValues.length;i++)this.noDataValues[i]*=this._heightFactor;this.plainGridSize=t.plainGridSize||32,this._extent=Xs(t.extent,new U(new P(-180,-90),new P(180,90))),this._dataType="arrayBuffer",this._maxNodeZoom=this.gridSizeByZoom.length-1,this._elevationCache={},this._fetchCache={},this._loader=new Nn,this._urlRewriteCallback=t.urlRewrite||null}get loader(){return this._loader}clearCache(){for(let e in this._elevationCache)this._elevationCache[e].heights=null,this._elevationCache[e].extent=null,delete this._elevationCache[e];this._elevationCache=null,this._elevationCache={};for(let e in this._fetchCache)this._fetchCache[e]=null,delete this._fetchCache[e];this._fetchCache=null,this._fetchCache={}}isBlur(e){return e.tileZoom>=6}setElevationCache(e,t){this._elevationCache[e]=t}getElevationCache(e){return this._elevationCache[e]}getHeightAsync(e,t,i,r){if(!e||e.lat>se||e.lat<Ne)return t(0),!0;r=r??!0;const[s,n,a,o]=this._planet.quadTreeStrategy.getTileXY(e,i||this.maxZoom);let l=Qe.getTileIndex(s,n,a,o),c=this.getElevationCache(l),d=rr(e);if(c)return c.heights?t(this._getGroundHeightMerc(d,c)):t(0),!0;{let f=this._fetchCache[l];f||(f=this._loader.fetch({src:this.buildURL(s,n,a,o),type:this._dataType}),this._fetchCache[l]=f),f.then(_=>{let g=Gs(s,n,a);if(_.status==="ready"){let v={heights:this._createHeights(_.data,null,o,s,n,a,g),extent:g};this.setElevationCache(l,v),t(this._getGroundHeightMerc(d,v))}else if(_.status==="error"){if(r&&a>this.maxNativeZoom){r=!1,this.getHeightAsync(e,t,this.maxNativeZoom,!1);return}this.setElevationCache(l,{heights:null,extent:g}),t(0)}else this._fetchCache[l]=null,delete this._fetchCache[l]})}return!1}_getGroundHeightMerc(e,t){if(!(t.extent&&t.heights))return 0;let i=t.extent.getWidth(),r=Math.sqrt(t.heights.length),s=i/(r-1),n=r-Math.ceil((e.lat-t.extent.southWest.lat)/s)-1,a=Math.floor((e.lon-t.extent.southWest.lon)/s),o=(n+1)*r+a,l=o+1,c=n*r+a,d=c+1,f=t.heights[o],_=t.heights[l],g=t.heights[c],v=t.heights[d],u=new m(t.extent.southWest.lon+s*a,f,t.extent.northEast.lat-s*n-s),p=new m(u.x+s,_,u.z),b=new m(u.x,g,u.z+s),w=new m(u.x+s,v,u.z+s),y=new m(e.lon,1e5,e.lat),x=new re(y,new m(0,-1,0)),T=new m,A=x.hitTriangle(u,p,b,T);return A===re.INSIDE||(A=x.hitTriangle(p,w,b,T),A===re.INSIDE)?T.y:0}abortLoading(){this._loader.abortAll()}setUrl(e){this.url=e}setName(e){this.name=e}isReadyToLoad(e){return e._tileGroup===We&&this._extent.overlaps(e.getExtentLonLat())}loadTerrain(e,t=!1){if(this._planet.terrainLock.isFree())if(e.terrainReady=!1,e.terrainIsLoading=!0,this.isReadyToLoad(e)){let i=this.getElevationCache(e.tileIndex);i?this._applyElevationsData(e,i.heights):this._loader.load({sender:this,src:this._getHTTPRequestString(e),segment:e,type:this._dataType,filter:()=>e.plainReady&&e.node.getState()!==Ve||t},r=>{if(r.status==="ready"){let s=this._createHeights(r.data,e,e._tileGroup,e.tileX,e.tileY,e.tileZoom,e.getExtent(),e.tileZoom===this.maxZoom);this.setElevationCache(e.tileIndex,{heights:s,extent:e.getExtent()}),this._applyElevationsData(e,s)}else r.status==="abort"?e.terrainIsLoading=!1:r.status==="error"?this._applyElevationsData(e,null):e.terrainIsLoading=!1})}else e.elevationsNotExists();else e.terrainIsLoading=!1}_getSubdomain(){return this._requestCount++,this._s[Math.floor(this._requestCount%(this._requestsPeerSubdomain*this._s.length)/this._requestsPeerSubdomain)]}buildURL(e,t,i,r){return zt(this.url,{s:this._getSubdomain(),x:e.toString(),y:t.toString(),z:i.toString()})}_createUrl(e){return this.buildURL(e.tileX,e.tileY,e.tileZoom,e._tileGroup)}_getHTTPRequestString(e){return this._urlRewriteCallback?this._urlRewriteCallback(e.tileX,e.tileY,e.tileZoom,e._tileGroup)||this._createUrl(e):this._createUrl(e)}setUrlRewriteCallback(e){this._urlRewriteCallback=e}_createHeights(e,t,i,r,s,n,a,o){if(this._heightFactor!==1){let l=new Float32Array(e);for(let c=0,d=l.length;c<d;c++)l[c]=l[c]*this._heightFactor;return l}return new Float32Array(e)}_applyElevationsData(e,t){if(e){let i=this.events.load;i.handlers.length&&this.events.dispatch(i,{elevations:t,segment:e}),e.applyTerrain(t)}}}const lh=["load","loadend"];class Ss extends Qe{constructor(e,t={}){super(e,t),this.events=this.events.registerNames(hh),this.url=t.url||"",this._s=t.subdomains||["a","b","c"],this.minNativeZoom=t.minNativeZoom||0,this.maxNativeZoom=t.maxNativeZoom||19,this._urlRewriteCallback=t.urlRewrite||null,this._requestsPeerSubdomains=4,this._requestCount=0}get isIdle(){return super.isIdle&&this._planet._tileLoader.getRequestCounter(this)===0}get instanceName(){return"XYZ"}abortLoading(){this._planet&&this._planet._tileLoader.abort(this)}setVisibility(e){e!==this._visibility&&(super.setVisibility(e),e||this.abortLoading())}remove(){return this.abortLoading(),super.remove(),this}setUrl(e){this.url=e}_checkSegment(e){return e._projection.id===this._planet.quadTreeStrategy.projection.id}loadMaterial(e,t=!1){let i=e.segment;this._isBaseLayer?e.texture=i.getDefaultTexture():e.texture=i.planet.transparentTexture,(this._planet.layerLock.isFree()||e.segment.tileZoom<2)&&(e.isReady=!1,e.isLoading=!0,this._checkSegment(i)?(e.loadingAttempts++,this._planet._tileLoader.load({sender:this,src:this._getHTTPRequestString(e.segment),type:"imageBitmap",filter:()=>i.initialized&&i.node.getState()===Te||t,options:{}},r=>{if(r.status==="ready"){if(e.isLoading){let s=this.events.load;s.handlers.length&&this.events.dispatch(s,e),e.applyImage(r.data),r.data=null}}else r.status==="abort"?e.isLoading=!1:r.status==="error"&&e.isLoading&&e.textureNotExists()})):e.textureNotExists())}_createUrl(e){return zt(this.url,{s:this._getSubdomain(),x:e.tileX.toString(),y:e.tileY.toString(),z:e.tileZoom.toString()})}_getSubdomain(){return this._requestCount++,this._s[Math.floor(this._requestCount%(this._requestsPeerSubdomains*this._s.length)/this._requestsPeerSubdomains)]}_getHTTPRequestString(e){return this._urlRewriteCallback?this._urlRewriteCallback(e,this.url):this._createUrl(e)}setUrlRewriteCallback(e){this._urlRewriteCallback=e}applyMaterial(e,t=!1){if(e.isReady)return e.texOffset;if(e.segment.tileZoom<this.minNativeZoom)e.textureNotExists();else{let i=e.segment,r=i.node,s=!1,n=this.__id,a=e;for(;r.parentNode;)if(r=r.parentNode,a=r.segment.materials[n],a&&a.textureExists){s=!0;break}if(i.passReady){let o=e.layer.maxNativeZoom;if(r.segment.tileZoom===o)e.textureNotExists();else if(e.segment.tileZoom<=o)!e.isLoading&&!e.isReady&&this.loadMaterial(e,t);else{let l=i.node;for(;l.segment.tileZoom>e.layer.maxNativeZoom;)l=l.parentNode;let c=l.segment.materials[e.layer.__id];c?!c.isLoading&&!c.isReady&&this.loadMaterial(c,!0):(c=l.segment.materials[e.layer.__id]=e.layer.createMaterial(l.segment),this.loadMaterial(c,!0))}}if(s){e.appliedNode=r,e.appliedNodeId=r.nodeId,e.texture=a.texture;let o=1/(2<<i.tileZoom-r.segment.tileZoom-1);e.texOffset[0]=i.tileX*o-r.segment.tileX,e.texOffset[1]=i.tileY*o-r.segment.tileY,e.texOffset[2]=o,e.texOffset[3]=o}else e.texture=i.planet.transparentTexture,e.texOffset[0]=0,e.texOffset[1]=0,e.texOffset[2]=1,e.texOffset[3]=1}return e.texOffset}clearMaterial(e){e.isReady&&e.textureExists&&(!e.texture.default&&e.segment.handler.gl.deleteTexture(e.texture),e.texture=null),e.isReady=!1,e.textureExists=!1,e.isLoading=!1}_correctFullExtent(){let e=this._extent,t=this._extentMerc,i=_e+5e4,r=_e+5e4;e.northEast.lat===90&&(t.northEast.lat=r),e.northEast.lon===180&&(t.northEast.lon=i),e.southWest.lat===-90&&(t.southWest.lat=-2008750834e-2),e.southWest.lon===-180&&(t.southWest.lon=-2008750834e-2)}}const hh=["load","loadend"],ch=["tick","end","start","stop"];class zi{constructor(e={}){this.__handler=null,this.active=!0,this.__id=zi.__counter__++,this.events=Ke(ch,this),this.name=e.name||"",this.startDate=e.startDate||0,this.endDate=e.endDate||0;let t=e.currentDate||Hr(new Date);e.startDate&&t<e.startDate&&(t=e.startDate),e.endDate&&t>e.endDate&&(t=e.endDate),this.currentDate=t,this._multiplier=e.multiplier!==void 0?e.multiplier:1,this._running=1,this.deltaTicks=0,this.active=!0,this._intervalDelay=0,this._intervalStart=0,this._intervalCallback=null}clearInterval(){this._intervalDelay=0,this._intervalStart=0,this._intervalCallback=null}setInterval(e,t){this._intervalStart=this.currentDate,this._intervalDelay=e*Js,this._intervalCallback=t}setDate(e){let t=Hr(e);this.startDate&&t<this.startDate&&(t=this.startDate),this.endDate&&t>this.endDate&&(t=this.endDate),this.currentDate=t}getDate(){return ma(this.currentDate)}reset(){this.startDate&&(this.currentDate=this.startDate)}tick(e){let t=this._multiplier*this._running;if(this.deltaTicks=e*t,this.active){let i=pa(this.currentDate,this.deltaTicks);t>0?this.endDate&&i>this.endDate?(this.currentDate=this.startDate,this.events.dispatch(this.events.end,this)):this.currentDate=i:this.startDate&&i<this.startDate?(this.currentDate=this.endDate,this.events.dispatch(this.events.end,this)):this.currentDate=i,this._intervalCallback&&this.currentDate-this._intervalStart>=this._intervalDelay&&(this._intervalStart=this.currentDate,this._intervalCallback(this)),this.events.dispatch(this.events.tick,this)}}isEqual(e){return this.__id===e.__id}start(){this._running===0&&(this._running=1,this.events.dispatch(this.events.start,this))}get multiplier(){return this._multiplier}set multiplier(e){this._multiplier=e}stop(){this._running===1&&(this._running=0,this.events.dispatch(this.events.stop,this))}}zi.__counter__=0;class dh{constructor(e,t){this._program=t,this._handler=e,this._activated=!1}initialize(){this._handler.gl&&this._program.createProgram(this._handler.gl)}getProgram(){return this._program}activate(){if(!this._activated){this._handler.activeProgram.deactivate(),this._handler.activeProgram=this;let e=this._program;this._activated=!0,e.enableAttribArrays(),e.use()}return this}remove(){let e=this._handler.programs;e[this._program.name]&&(this._activated&&this.deactivate(),this._program.delete(),delete e[this._program.name])}deactivate(){this._program.disableAttribArrays(),this._activated=!1}isActive(){return this._activated}set(e){return this.activate(),this._program.set(e),this}drawIndexBuffer(e,t){return this._program.drawIndexBuffer(e,t),this}drawArrays(e,t){return this._program.drawArrays(e,t),this}}class Rs{constructor(){this.next=null,this.prev=null,this.data=null}}class $i{constructor(e=256){this._current=new Rs,this._head=this._current;for(let t=0;t<e;t++){let i=new Rs;i.prev=this._current,this._current.next=i,this._current=i}this._current=this._head}current(){return this._current}push(e){this._current=this._current.next,this._current.data=e}pop(){let e=this._current.data;return this._current=this._current.prev,e}popPrev(){return this._current=this._current.prev,this._current.data}}const Ms=["","WEBKIT_","MOZ_"],Ki=["webgl2","webgl"],Is=2;class yi{constructor(e,t={}){this.framebufferStack=new $i,this._requestAnimationFrameId=0,this.drawFrame=()=>{let i=window.performance.now();this.deltaTime=i-this._lastAnimationFrameTime,this._lastAnimationFrameTime=i,this.defaultClock.tick(this.deltaTime);for(let s=0;s<this._clocks.length;s++)this._clocks[s].tick(this.deltaTime);let r=this.canvas;(Math.floor(r.clientWidth*this._params.pixelRatio)!==r.width||Math.floor(r.clientHeight*this._params.pixelRatio)!==r.height)&&(r.clientWidth===0||r.clientHeight===0?this.stop():document.hidden||(this.start(),this.setSize(r.clientWidth,r.clientHeight))),this._frameCallback()},this.events=Ke(["visibilitychange","resize"]),this._throttledDrawFrame=this.drawFrame,this.defaultClock=new zi,this._clocks=[],this.deltaTime=0,this.canvas=null,this.gl=null,this.programs={},this.activeProgram=null,this._canvasSize=[0,0],this._params={anisotropy:t.anisotropy||4,width:t.width||256,height:t.height||256,pixelRatio:la("og_dpi")||t.pixelRatio||1,extensions:t.extensions||[],context:t.context||{}},this._oneByHeight=1/(this._params.height*this._params.pixelRatio),this.extensions={},this._canvasTarget=e,this._lastAnimationFrameTime=0,this._initialized=!1,this._frameCallback=function(){},this.transparentTexture=null,this.defaultTexture=null,this.framebufferStack=new $i,this.createTexture_n=this.createTexture_n_webgl2.bind(this),this.createTexture_l=this.createTexture_l_webgl2.bind(this),this.createTexture_mm=this.createTexture_mm_webgl2.bind(this),this.createTexture_a=this.createTexture_a_webgl2.bind(this),this.createTexture={NEAREST:this.createTexture_n,LINEAR:this.createTexture_l,MIPMAP:this.createTexture_mm,ANISOTROPIC:this.createTexture_a},this.createTextureDefault=this.createTexture_n,this.ONCANVASRESIZE=null,this._createCanvas(),(t.autoActivate||Bt(t.autoActivate))&&this.initialize()}set frameDelay(e){e===0?this._throttledDrawFrame=this.drawFrame:this._throttledDrawFrame=or(this.drawFrame,e)}isInitialized(){return this._initialized}_createCanvas(){this._canvasTarget?this._canvasTarget instanceof HTMLElement?this.canvas=this._canvasTarget:this.canvas=document.getElementById(this._canvasTarget)||document.querySelector(this._canvasTarget):(this.canvas=document.createElement("canvas"),this.canvas.width=this._params.width,this.canvas.height=this._params.height)}static getExtension(e,t){if(!e)return;let i,r;for(i in Ms)if(r=e.getExtension(Ms[i]+t),r)return r}static getContext(e,t){let i=null;try{let s=new URLSearchParams(location.search).get("og_ver");if(s)i=e.getContext(s,t),i&&(i.type=s);else for(let n=0;n<Ki.length;n++)if(i=e.getContext(Ki[n],t),i){i.type=Ki[n];break}}catch{He.logErr("exception during the GL context initialization")}return i||He.logErr("could not initialise WebGL"),i}setFrameCallback(e){e&&(this._frameCallback=e)}createEmptyTexture2DExt(e=1,t=1,i="NEAREST",r="RGBA",s="RGBA",n="UNSIGNED_BYTE",a=0){let o=this.gl,l=o.createTexture();return o.bindTexture(o.TEXTURE_2D,l),o.texImage2D(o.TEXTURE_2D,a,o[r.toUpperCase()],e,t,0,o[s.toUpperCase()],o[n.toUpperCase()],null),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o[i.toUpperCase()]),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o[i.toUpperCase()]),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.bindTexture(o.TEXTURE_2D,null),l}createEmptyTexture_n(e,t,i){let r=this.gl,s=r.createTexture();return r.bindTexture(r.TEXTURE_2D,s),r.texImage2D(r.TEXTURE_2D,0,i||r.RGBA,e,t,0,r.RGBA,r.UNSIGNED_BYTE,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.bindTexture(r.TEXTURE_2D,null),s}createEmptyTexture_l(e,t,i){let r=this.gl,s=r.createTexture();return r.bindTexture(r.TEXTURE_2D,s),r.texImage2D(r.TEXTURE_2D,0,i||r.RGBA,e,t,0,r.RGBA,r.UNSIGNED_BYTE,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.bindTexture(r.TEXTURE_2D,null),s}createTexture_n_webgl1(e,t,i=null){let r=this.gl;return i=i||r.createTexture(),r.bindTexture(r.TEXTURE_2D,i),r.texImage2D(r.TEXTURE_2D,0,t||r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.bindTexture(r.TEXTURE_2D,null),i}createTexture_l_webgl1(e,t,i=null){let r=this.gl;return i=i||r.createTexture(),r.bindTexture(r.TEXTURE_2D,i),r.texImage2D(r.TEXTURE_2D,0,t||r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.bindTexture(r.TEXTURE_2D,null),i}createTexture_mm_webgl1(e,t,i=null){let r=this.gl;return i=i||r.createTexture(),r.bindTexture(r.TEXTURE_2D,i),r.texImage2D(r.TEXTURE_2D,0,t||r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e),r.generateMipmap(r.TEXTURE_2D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.bindTexture(r.TEXTURE_2D,null),i}createTexture_a_webgl1(e,t,i=null){let r=this.gl;return i=i||r.createTexture(),r.bindTexture(r.TEXTURE_2D,i),r.texImage2D(r.TEXTURE_2D,0,t||r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e),r.generateMipmap(r.TEXTURE_2D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.texParameterf(r.TEXTURE_2D,this.extensions.EXT_texture_filter_anisotropic.TEXTURE_MAX_ANISOTROPY_EXT,this._params.anisotropy),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.bindTexture(r.TEXTURE_2D,null),i}createTexture_n_webgl2(e,t,i=null){let r=this.gl;return i=i||r.createTexture(),r.bindTexture(r.TEXTURE_2D,i),r.texStorage2D(r.TEXTURE_2D,1,t||r.RGBA8,e.width,e.height),r.texSubImage2D(r.TEXTURE_2D,0,0,0,e.width,e.height,r.RGBA,r.UNSIGNED_BYTE,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.bindTexture(r.TEXTURE_2D,null),i}createTexture_l_webgl2(e,t,i=null){let r=this.gl;return i=i||r.createTexture(),r.bindTexture(r.TEXTURE_2D,i),r.texStorage2D(r.TEXTURE_2D,1,t||r.RGBA8,e.width,e.height),r.texSubImage2D(r.TEXTURE_2D,0,0,0,e.width,e.height,r.RGBA,r.UNSIGNED_BYTE,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.bindTexture(r.TEXTURE_2D,null),i}createTexture_mm_webgl2(e,t,i=null){let r=this.gl;return i=i||r.createTexture(),r.bindTexture(r.TEXTURE_2D,i),r.texStorage2D(r.TEXTURE_2D,Is,t||r.RGBA8,e.width,e.height),r.texSubImage2D(r.TEXTURE_2D,0,0,0,e.width,e.height,r.RGBA,r.UNSIGNED_BYTE,e),r.generateMipmap(r.TEXTURE_2D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.bindTexture(r.TEXTURE_2D,null),i}createTexture_a_webgl2(e,t,i=null){let r=this.gl;return i=i||r.createTexture(),r.bindTexture(r.TEXTURE_2D,i),r.texStorage2D(r.TEXTURE_2D,Is,t||r.RGBA8,e.width,e.height),r.texSubImage2D(r.TEXTURE_2D,0,0,0,e.width,e.height,r.RGBA,r.UNSIGNED_BYTE,e),r.generateMipmap(r.TEXTURE_2D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.texParameterf(r.TEXTURE_2D,this.extensions.EXT_texture_filter_anisotropic.TEXTURE_MAX_ANISOTROPY_EXT,this._params.anisotropy),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.bindTexture(r.TEXTURE_2D,null),i}loadCubeMapTexture(e){let t=this.gl,i=t.createTexture();t.bindTexture(t.TEXTURE_CUBE_MAP,i),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,t.LINEAR);let r=[[e.px,t.TEXTURE_CUBE_MAP_POSITIVE_X],[e.nx,t.TEXTURE_CUBE_MAP_NEGATIVE_X],[e.py,t.TEXTURE_CUBE_MAP_POSITIVE_Y],[e.ny,t.TEXTURE_CUBE_MAP_NEGATIVE_Y],[e.pz,t.TEXTURE_CUBE_MAP_POSITIVE_Z],[e.nz,t.TEXTURE_CUBE_MAP_NEGATIVE_Z]],s=new Wt;s.fillEmpty();let n=s.getImage();for(let a=0;a<r.length;a++){let o=r[a][1];t.bindTexture(t.TEXTURE_CUBE_MAP,i),t.texImage2D(o,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n)}for(let a=0;a<r.length;a++){let o=r[a][1],l=new Image;l.crossOrigin="",l.onload=function(c,d,f){return function(){t&&c&&(t.bindTexture(t.TEXTURE_CUBE_MAP,c),t.texImage2D(d,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,f))}}(i,o,l),l.src=r[a][0]}return i}addProgram(e,t=!1){if(this.programs[e.name])console.warn(`Shader program: "${e.name}" already exists.`);else{let i=new dh(this,e);this.programs[e.name]=i,this._initProgramController(i),t&&(i._activated=!1)}return e}removeProgram(e){this.programs[e]&&this.programs[e].remove()}addPrograms(e){for(let t=0;t<e.length;t++)this.addProgram(e[t])}_initProgramController(e){this._initialized&&(e.initialize(),this.activeProgram?(e.deactivate(),this.activeProgram._program.enableAttribArrays(),this.activeProgram._program.use()):(this.activeProgram=e,e.activate()))}_initPrograms(){for(let e in this.programs)this._initProgramController(this.programs[e])}initializeExtension(e,t=!1){if(!(this.extensions&&this.extensions[e])){let i=yi.getExtension(this.gl,e);i?this.extensions[e]=i:t&&console.warn("og.webgl.Handler: extension '"+e+"' doesn't initialize.")}return this.extensions&&this.extensions[e]}initialize(){if(this._initialized||!this.canvas||(this.gl=yi.getContext(this.canvas,this._params.context),!this.gl))return;this._initialized=!0,this._params.extensions.push("EXT_texture_filter_anisotropic"),this.gl.type==="webgl"?(this._params.extensions.push("OES_standard_derivatives"),this._params.extensions.push("OES_element_index_uint"),this._params.extensions.push("WEBGL_depth_texture"),this._params.extensions.push("ANGLE_instanced_arrays")):(this._params.extensions.push("EXT_color_buffer_float"),this._params.extensions.push("OES_texture_float_linear"));let e=this._params.extensions.length;for(;e--;)this.initializeExtension(this._params.extensions[e],!0);this.gl.type==="webgl"?(this.createTexture_n=this.createTexture_n_webgl1.bind(this),this.createTexture_l=this.createTexture_l_webgl1.bind(this),this.createTexture_mm=this.createTexture_mm_webgl1.bind(this),this.createTexture_a=this.createTexture_a_webgl1.bind(this)):(this.createTexture_n=this.createTexture_n_webgl2.bind(this),this.createTexture_l=this.createTexture_l_webgl2.bind(this),this.createTexture_mm=this.createTexture_mm_webgl2.bind(this),this.createTexture_a=this.createTexture_a_webgl2.bind(this)),this.createTexture.NEAREST=this.createTexture_n,this.createTexture.LINEAR=this.createTexture_l,this.createTexture.MIPMAP=this.createTexture_mm,this.createTexture.ANISOTROPIC=this.createTexture_a,this.extensions.EXT_texture_filter_anisotropic?this.createTextureDefault=this.createTexture_a:this.createTextureDefault=this.createTexture_mm,this._initPrograms(),this._setDefaults(),this.intersectionObserver=new IntersectionObserver(t=>{this._toggleVisibilityChange(t[t.length-1].isIntersecting)},{threshold:0}),this.intersectionObserver.observe(this.canvas),this.resizeObserver=new ResizeObserver(t=>{this._toggleVisibilityChange(t[0].contentRect.width!==0&&t[0].contentRect.height!==0)}),this.resizeObserver.observe(this.canvas),document.addEventListener("visibilitychange",()=>{this._toggleVisibilityChange(document.visibilityState==="visible")})}_toggleVisibilityChange(e){e?(this.start(),this.ONCANVASRESIZE&&this.ONCANVASRESIZE(),this.events.dispatch(this.events.visibilitychange,!0)):(this.events.dispatch(this.events.visibilitychange,!1),this.stop())}_setDefaults(){let e=this.gl;e&&this.canvas&&(e.depthFunc(e.LESS),e.enable(e.DEPTH_TEST),this.setSize(this.canvas.clientWidth||this._params.width,this.canvas.clientHeight||this._params.height),e.frontFace(e.CCW),e.cullFace(e.BACK),e.enable(e.CULL_FACE),e.disable(e.BLEND),this.createDefaultTexture({color:"rgba(0,0,0,0.0)"},t=>{this.transparentTexture=t}),this.createDefaultTexture({color:"rgba(255, 255, 255, 1.0)"},t=>{this.defaultTexture=t}))}getCanvasSize(){return this._canvasSize}createStreamArrayBuffer(e,t,i,r=4){let s=this.gl,n=s.createBuffer();return s.bindBuffer(s.ARRAY_BUFFER,n),s.bufferData(s.ARRAY_BUFFER,t*e*r,i||s.STREAM_DRAW),s.bindBuffer(s.ARRAY_BUFFER,null),n.itemSize=e,n.numItems=t,n}setStreamArrayBuffer(e,t,i=0){let r=this.gl;return r.bindBuffer(r.ARRAY_BUFFER,e),r.bufferSubData(r.ARRAY_BUFFER,i,t),r.bindBuffer(r.ARRAY_BUFFER,null),e}createArrayBuffer(e,t,i,r){let s=this.gl,n=s.createBuffer();return s.bindBuffer(s.ARRAY_BUFFER,n),s.bufferData(s.ARRAY_BUFFER,e,r||s.STATIC_DRAW),s.bindBuffer(s.ARRAY_BUFFER,null),n.itemSize=t,n.numItems=i,n}createArrayBufferLength(e,t){let i=this.gl,r=i.createBuffer();return i.bindBuffer(i.ARRAY_BUFFER,r),i.bufferData(i.ARRAY_BUFFER,e,t||i.STATIC_DRAW),i.bindBuffer(i.ARRAY_BUFFER,null),r.itemSize=1,r.numItems=e,r}createElementArrayBuffer(e,t,i,r){let s=this.gl,n=s.createBuffer();return s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,n),s.bufferData(s.ELEMENT_ARRAY_BUFFER,e,r||s.STATIC_DRAW),s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,null),n.itemSize=t,n.numItems=i||e.length,n}setSize(e,t){this._params.width=e,this._params.height=t,this.canvas&&(this.canvas.width=e*this._params.pixelRatio,this.canvas.height=t*this._params.pixelRatio,this._canvasSize[0]=this.canvas.width,this._canvasSize[1]=this.canvas.height,this._oneByHeight=1/this.canvas.height,this.gl&&this.gl.viewport(0,0,e,t),this.ONCANVASRESIZE&&this.ONCANVASRESIZE(this.canvas),this.events.dispatch(this.events.resize,this))}get pixelRatio(){return this._params.pixelRatio}set pixelRatio(e){this._params.pixelRatio=e,this.setSize(this._params.width,this._params.height)}getWidth(){return this.canvas?this.canvas.width:0}getHeight(){return this.canvas?this.canvas.height:0}getClientAspect(){return this.canvas?this.canvas.clientWidth/this.canvas.clientHeight:0}getCenter(){let e=this.canvas;return e?new V(Math.round(e.width*.5),Math.round(e.height*.5)):new V}clearFrame(){let e=this.gl;e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}start(){!this._requestAnimationFrameId&&this._initialized&&this._animationFrameCallback()}stop(){this._requestAnimationFrameId&&(window.cancelAnimationFrame(this._requestAnimationFrameId),this._requestAnimationFrameId=0)}isStopped(){return!this._requestAnimationFrameId}isWebGl2(){return this.gl?this.gl.type==="webgl2":!1}_animationFrameCallback(){this._requestAnimationFrameId=window.requestAnimationFrame(()=>{this._throttledDrawFrame(),this._requestAnimationFrameId&&this._animationFrameCallback()})}createDefaultTexture(e,t){let i,r;if(e&&e.color)i=new Wt(2,2),i.fillColor(e.color),r=this.createTexture_n(i.getCanvas()),r.default=!0,t(r);else if(e&&e.url){let s=new Image,n=this;s.onload=function(){r=n.createTextureDefault(s),r.default=!0,t(r)},s.src=e.url}else i=new Wt(2,2),i.fillColor("#C5C5C5"),r=this.createTexture_n(i.getCanvas()),r.default=!0,t(r)}deleteTexture(e){e&&!e.default&&this.gl.deleteTexture(e)}destroy(){var t,i;(t=this.resizeObserver)==null||t.disconnect(),(i=this.intersectionObserver)==null||i.disconnect(),this.stop();for(let r in this.programs)this.removeProgram(r);let e=this.gl;if(e){e.deleteTexture(this.transparentTexture),this.transparentTexture=null,e.deleteTexture(this.defaultTexture),this.defaultTexture=null,this.framebufferStack=new $i;let r=e.getParameter(e.MAX_VERTEX_ATTRIBS),s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s);for(let a=0;a<r;++a)e.disableVertexAttribArray(a),e.vertexAttribPointer(a,4,e.FLOAT,!1,0,0),e.vertexAttrib1f(a,0);e.deleteBuffer(s);let n=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);for(let a=0;a<n;++a)e.activeTexture(e.TEXTURE0+a),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.bindTexture(e.TEXTURE_2D,null);e.activeTexture(e.TEXTURE0),e.useProgram(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.DITHER),e.disable(e.SCISSOR_TEST),e.blendColor(0,0,0,0),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(-1)}this.canvas&&(this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.canvas.width=1,this.canvas.height=1,this.canvas=null),this.gl=null,this._initialized=!1}addClock(e){e.__handler||(e.__handler=this,this._clocks.push(e))}addClocks(e){for(let t=0;t<e.length;t++)this.addClock(e[t])}removeClock(e){if(e.__handler){let t=this._clocks,i=t.length;for(;i--;)if(t[i].isEqual(e)){e.__handler=null,t.splice(i,1);break}}}}class fh extends Mn{constructor(e,t={}){super(e,t),this._internalFormat=t.internalFormat?t.internalFormat.toUpperCase():"RGBA8",this._msaa=t.msaa!=null?t.msaa:4,this._glFilter=0,this.renderbuffers=new Array(this._size)}destroy(){let e=this.handler.gl;if(e){for(let t=0;t<this.renderbuffers.length;t++)e.deleteRenderbuffer(this.renderbuffers[t]);this.renderbuffers=new Array(this._size),e.deleteFramebuffer(this._fbo),e.deleteRenderbuffer(this._depthRenderbuffer),this._depthRenderbuffer=null,this._fbo=null,this._active=!1}}init(){let e=this.handler.gl;if(!e)return;this._glFilter=e[this._filter],this._fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this._fbo);let t=[];for(let i=0;i<this.renderbuffers.length;i++){let r=e.createRenderbuffer();e.bindRenderbuffer(e.RENDERBUFFER,r),this._msaa>0?e.renderbufferStorageMultisample(e.RENDERBUFFER,this._msaa,e[this._internalFormat],this._width,this._height):e.renderbufferStorage(e.RENDERBUFFER,e[this._internalFormat],this._width,this._height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+i,e.RENDERBUFFER,r),t.push(e.COLOR_ATTACHMENT0+i),this.renderbuffers[i]=r,e.bindRenderbuffer(e.RENDERBUFFER,null)}e.drawBuffers(t),this._useDepth&&(this._depthRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,this._depthRenderbuffer),e.renderbufferStorageMultisample(e.RENDERBUFFER,this._msaa,e[this._depthComponent],this._width,this._height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this._depthRenderbuffer),e.bindRenderbuffer(e.RENDERBUFFER,null)),e.bindFramebuffer(e.FRAMEBUFFER,null)}blitTo(e,t=0){let i=this.handler.gl;i.bindFramebuffer(i.READ_FRAMEBUFFER,this._fbo),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,e._fbo),i.readBuffer(i.COLOR_ATTACHMENT0+t),i.clearBufferfv(i.COLOR,0,[0,0,0,1]),i.blitFramebuffer(0,0,this._width,this._height,0,0,e._width,e._height,i.COLOR_BUFFER_BIT,this._glFilter),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null)}}const zs="_",Qi=function(h,e){return+(h.priority<e.priority)};class uh{constructor(){this._currentlyPressedKeys={},this._pressedKeysCallbacks={},this._unpressedKeysCallbacks={},this._charkeysCallbacks={},this._anykeyCallback=null,this._event=null,this._active=!0,this._stampCache={},document.onkeydown=e=>{this._event=e,this._active&&this.handleKeyDown()},document.onkeyup=e=>{this._event=e,this._active&&this.handleKeyUp()}}getcurrentlyPressedKeys(){return this._currentlyPressedKeys}getPressedKeysCallbacks(){return this._pressedKeysCallbacks}getUnpressedKeysCallbacks(){return this._unpressedKeysCallbacks}getCharkeysCallbacks(){return this._charkeysCallbacks}removeEvent(e,t,i){let r=this._getStamp(e,t,i._openglobus_id);i._openglobus_id&&this._stampCache[r]&&(delete this._stampCache[r],e==="keypress"?this._removeCallback(this._pressedKeysCallbacks[t],i):e==="keyfree"?this._removeCallback(this._unpressedKeysCallbacks[t],i):e==="charkeypress"&&this._removeCallback(this._charkeysCallbacks[t],i))}_removeCallback(e,t){for(let i=0;i<e.length;i++)e[i].callback._openglobus_id===t._openglobus_id&&e.splice(i,1)}_getStamp(e,t,i){return`${e}${zs}${t}${zs}${i}`}_stamp(e,t,i){const r=js(i),s=this._getStamp(e,t,r);return this._stampCache[s]?!1:(this._stampCache[s]=r,!0)}setActivity(e){this._active=e}releaseKeys(){this._currentlyPressedKeys={}}addEvent(e,t,i,r,s){if(this._stamp(e,t,i))switch(s===void 0&&(s=1600),e){case"keyfree":this._unpressedKeysCallbacks[t]||(this._unpressedKeysCallbacks[t]=[]),this._unpressedKeysCallbacks[t].push({callback:i,sender:r,priority:s}),this._unpressedKeysCallbacks[t].sort(Qi);break;case"keypress":t==null?this._anykeyCallback={callback:i,sender:r||this}:(this._pressedKeysCallbacks[t]||(this._pressedKeysCallbacks[t]=[]),this._pressedKeysCallbacks[t].push({callback:i,sender:r,priority:s}),this._pressedKeysCallbacks[t].sort(Qi));break;case"charkeypress":this._charkeysCallbacks[t]||(this._charkeysCallbacks[t]=[]),this._charkeysCallbacks[t].push({callback:i,sender:r,priority:s}),this._charkeysCallbacks[t].sort(Qi);break}}isKeyPressed(e){return this._currentlyPressedKeys[e]}handleKeyDown(){this._anykeyCallback&&this._anykeyCallback.callback.call(this._anykeyCallback.sender,this._event),this._currentlyPressedKeys[this._event.keyCode]=!0;for(let e in this._charkeysCallbacks)if(String.fromCharCode(this._event.keyCode)===String.fromCharCode(Number(e))){let t=this._charkeysCallbacks[e];for(let i=0;i<t.length;i++)t[i].callback.call(t[i].sender,this._event)}(this._event.keyCode==ye.KEY_ALT||this._event.keyCode==ye.KEY_SHIFT)&&this._event.preventDefault()}handleKeyUp(){if(this._currentlyPressedKeys[this._event.keyCode]||this._event.keyCode===ye.KEY_PRINTSCREEN){for(let e in this._unpressedKeysCallbacks)if(this._currentlyPressedKeys[e]||this._event.keyCode===ye.KEY_PRINTSCREEN&&Number(e)===ye.KEY_PRINTSCREEN){let t=this._unpressedKeysCallbacks[e];for(let i=0;i<t.length;i++)t[i].callback.call(t[i].sender,this._event)}}this._currentlyPressedKeys[this._event.keyCode]=!1}handleEvents(){for(let e in this._pressedKeysCallbacks)if(this._currentlyPressedKeys[e]){let t=this._pressedKeysCallbacks[e];for(let i=0;i<t.length;i++)t[i].callback.call(t[i].sender,this._event)}}}class _h{constructor(e){this._htmlObject=e}setEvent(e,t,i){switch(e){case"mousewheel":this._htmlObject.addEventListener("wheel",function(r){let s=r.deltaY||r.detail||r.wheelDelta||0;r.wheelDelta==null&&(r.wheelDelta=s*-120),i.call(t,r),r.preventDefault()},!1);break;case"mousedown":this._htmlObject.addEventListener("mousedown",function(r){let s=this.getBoundingClientRect();i.call(t,r,{button:r.button,clientX:r.clientX-s.left,clientY:r.clientY-s.top})}),this._htmlObject.addEventListener("contextmenu",function(r){return r.preventDefault(),!1});break;case"mouseup":this._htmlObject.addEventListener("mouseup",function(r){let s=this.getBoundingClientRect();i.call(t,r,{button:r.button,clientX:r.clientX-s.left,clientY:r.clientY-s.top})});break;case"mousemove":this._htmlObject.addEventListener("mousemove",function(r){let s=this.getBoundingClientRect();i.call(t,r,{clientX:r.clientX-s.left,clientY:r.clientY-s.top})});break;case"mouseleave":this._htmlObject.addEventListener("mouseleave",function(r){i.call(t,r)});break;case"mouseout":this._htmlObject.addEventListener("mouseout",function(r){i.call(t,r)});break;case"mouseover":this._htmlObject.addEventListener("mouseover",function(r){i.call(t,r)});break;case"mouseenter":this._htmlObject.addEventListener("mouseenter",function(r){i.call(t,r)});break}}}class gh{constructor(e){this._htmlObject=e}setEvent(e,t,i){switch(e){case"touchcancel":this._htmlObject.addEventListener("touchcancel",function(r){r.preventDefault();const s=this.getBoundingClientRect(),n=Object.assign(r,{offsetLeft:s.left,offsetTop:s.top});i.call(t,n)});break;case"touchstart":this._htmlObject.addEventListener("touchstart",function(r){r.preventDefault();const s=this.getBoundingClientRect(),n=Object.assign(r,{offsetLeft:s.left,offsetTop:s.top});i.call(t,n)});break;case"touchend":this._htmlObject.addEventListener("touchend",function(r){r.preventDefault();const s=this.getBoundingClientRect(),n=Object.assign(r,{offsetLeft:s.left,offsetTop:s.top});i.call(t,n)});break;case"touchmove":this._htmlObject.addEventListener("touchmove",function(r){r.preventDefault();const s=this.getBoundingClientRect(),n=Object.assign(r,{offsetLeft:s.left,offsetTop:s.top});i.call(t,n)});break}}}function mh(h){return new wh(h)}const ph=1,vh=2,xh=4,yh=h=>!(h[0]||h[1]||h[2]),bh=h=>!!(h[0]||h[1]||h[2]);let tt=new Uint8Array(4),Ot=new Uint8Array(4),Ut=new Uint8Array(4);class wh extends ei{constructor(e){super(Th),this.renderer=e,this._touchHandler=new gh(e.handler.canvas),this._mouseHandler=new _h(e.handler.canvas),this._keyboardHandler=new uh,this._active=!0,this.clickRadius=15,this.mouseState={clientX:0,clientY:0,pos:new V,x:0,y:0,nx:0,ny:0,prev_x:0,prev_y:0,direction:new m,leftButtonUp:!1,rightButtonUp:!1,middleButtonUp:!1,leftButtonDown:!1,rightButtonDown:!1,middleButtonDown:!1,leftButtonHold:!1,rightButtonHold:!1,middleButtonHold:!1,leftButtonDoubleClick:!1,rightButtonDoubleClick:!1,middleButtonDoubleClick:!1,leftButtonClick:!1,rightButtonClick:!1,middleButtonClick:!1,moving:!1,justStopped:!1,doubleClickDelay:500,clickDelay:200,wheelDelta:0,sys:null,pickingObject:null,renderer:e},this.touchState={moving:!1,touchEnd:!1,touchStart:!1,touchCancel:!1,doubleTouch:!1,doubleTouchDelay:550,doubleTouchRadius:10,clientX:0,clientY:0,pos:new V,x:0,y:0,nx:0,ny:0,prev_x:0,prev_y:0,direction:new m,sys:null,pickingObject:null,renderer:e},this._isMouseInside=!1,this._entityPickingEventsActive=!0,this._dblTchCoords=new V,this._oneTouchStart=!1,this._dblTchBegins=0,this._mousestopThread=null,this._ldblClkBegins=0,this._rdblClkBegins=0,this._mdblClkBegins=0,this._lClkBegins=0,this._rClkBegins=0,this._mClkBegins=0,this._lclickX=0,this._lclickY=0,this._rclickX=0,this._rclickY=0,this._mclickX=0,this._mclickY=0}pointerEvent(){let e=this.mouseState,t=this.touchState;return e.moving||e.justStopped||t.moving||t.touchStart||t.touchEnd||e.wheelDelta!==0}get active(){return this._active}set active(e){this._active=e,this._keyboardHandler.setActivity(e)}handleEvents(){this._active&&(this.mouseState.direction=this.renderer.activeCamera.unproject(this.mouseState.x,this.mouseState.y),this.touchState.direction=this.renderer.activeCamera.unproject(this.touchState.x,this.touchState.y),this._keyboardHandler.handleEvents(),this.handleMouseEvents(),this.handleTouchEvents(),this.entityPickingEvents())}on(e,t,i,r,s){e==="keypress"||e==="charkeypress"||e==="keyfree"?this._keyboardHandler.addEvent(e,t,i,r,s):super.on(e,t,i,r)}off(e,t,i){e==="keypress"||e==="charkeypress"||e==="keyfree"?this._keyboardHandler.removeEvent(e,t,i):super.off(e,t)}isKeyPressed(e){return this._keyboardHandler.isKeyPressed(e)}releaseKeys(){this._keyboardHandler.releaseKeys()}initialize(){this._mouseHandler.setEvent("mouseup",this,this.onMouseUp),this._mouseHandler.setEvent("mousemove",this,this.onMouseMove),this._mouseHandler.setEvent("mousedown",this,this.onMouseDown),this._mouseHandler.setEvent("mousewheel",this,this.onMouseWheel),this._mouseHandler.setEvent("mouseleave",this,this.onMouseLeave),this._mouseHandler.setEvent("mouseenter",this,this.onMouseEnter),this._touchHandler.setEvent("touchstart",this,this.onTouchStart),this._touchHandler.setEvent("touchend",this,this.onTouchEnd),this._touchHandler.setEvent("touchcancel",this,this.onTouchCancel),this._touchHandler.setEvent("touchmove",this,this.onTouchMove)}onMouseWheel(e){this.mouseState.sys=e,this.mouseState.wheelDelta=e.wheelDelta||0}updateButtonsStates(e){let t=this.mouseState;e&ph&&t.leftButtonDown?t.leftButtonDown=!0:(t.leftButtonHold=!1,t.leftButtonDown=!1),e&vh&&t.rightButtonDown?t.rightButtonDown=!0:(t.rightButtonHold=!1,t.rightButtonDown=!1),e&xh&&t.middleButtonDown?t.middleButtonDown=!0:(t.middleButtonHold=!1,t.middleButtonDown=!1)}onMouseMove(e,t){let i=this.mouseState;this.updateButtonsStates(e.buttons),i.sys=e;let r=t.clientX,s=t.clientY,n=this.clickRadius;if(Math.abs(this._lclickX-r)>=n&&Math.abs(this._lclickY-s)>=n&&(this._ldblClkBegins=0,this._lClkBegins=0),Math.abs(this._rclickX-r)>=n&&Math.abs(this._rclickY-s)>=n&&(this._rdblClkBegins=0,this._rClkBegins=0),Math.abs(this._mclickX-r)>=n&&Math.abs(this._mclickY-s)>=n&&(this._mdblClkBegins=0,this._mClkBegins=0),i.clientX===t.clientX&&i.clientY===t.clientY)return;i.clientX=t.clientX,i.clientY=t.clientY;let a=this.renderer.handler;i.pos.x=i.x=t.clientX*a.pixelRatio,i.pos.y=i.y=t.clientY*a.pixelRatio,i.nx=i.x/a.canvas.width,i.ny=i.y/a.canvas.height,i.moving=!0,clearTimeout(this._mousestopThread),this._mousestopThread=setTimeout(function(){i.justStopped=!0},100)}onMouseLeave(e){this._isMouseInside=!1,this.mouseState.sys=e,this.dispatch(this.mouseleave,this.mouseState)}onMouseEnter(e){this._isMouseInside=!0,this.mouseState.sys=e,this.dispatch(this.mouseenter,this.mouseState)}onMouseDown(e,t){t.button===ye.MB_LEFT?(this._lClkBegins=window.performance.now(),this._lclickX=t.clientX,this._lclickY=t.clientY,this.mouseState.sys=e,this.mouseState.leftButtonDown=!0):t.button===ye.MB_RIGHT?(this._rClkBegins=window.performance.now(),this._rclickX=t.clientX,this._rclickY=t.clientY,this.mouseState.sys=e,this.mouseState.rightButtonDown=!0):t.button===ye.MB_MIDDLE&&(this._mClkBegins=window.performance.now(),this._mclickX=t.clientX,this._mclickY=t.clientY,this.mouseState.sys=e,this.mouseState.middleButtonDown=!0)}onMouseUp(e,t){let i=this.mouseState;i.sys=e;let r=window.performance.now();t.button===ye.MB_LEFT?(i.leftButtonDown=!1,i.leftButtonUp=!0,Math.abs(this._lclickX-t.clientX)<this.clickRadius&&Math.abs(this._lclickY-t.clientY)<this.clickRadius&&r-this._lClkBegins<=i.clickDelay&&(this._ldblClkBegins?(window.performance.now()-this._ldblClkBegins<=i.doubleClickDelay&&(i.leftButtonDoubleClick=!0),this._ldblClkBegins=0):this._ldblClkBegins=window.performance.now(),i.leftButtonClick=!0,this._lClkBegins=0)):t.button===ye.MB_RIGHT?(i.rightButtonDown=!1,i.rightButtonUp=!0,Math.abs(this._rclickX-t.clientX)<this.clickRadius&&Math.abs(this._rclickY-t.clientY)<this.clickRadius&&r-this._rClkBegins<=i.clickDelay&&(this._rdblClkBegins?(window.performance.now()-this._rdblClkBegins<=i.doubleClickDelay&&(i.rightButtonDoubleClick=!0),this._rdblClkBegins=0):this._rdblClkBegins=window.performance.now(),i.rightButtonClick=!0,this._rClkBegins=0)):t.button===ye.MB_MIDDLE&&(i.middleButtonDown=!1,i.middleButtonUp=!0,Math.abs(this._mclickX-t.clientX)<this.clickRadius&&Math.abs(this._mclickY-t.clientY)<this.clickRadius&&r-this._mClkBegins<=i.clickDelay&&(this._mdblClkBegins?(window.performance.now()-this._mdblClkBegins<=i.doubleClickDelay&&(i.middleButtonDoubleClick=!0),this._mdblClkBegins=0):this._mdblClkBegins=window.performance.now(),i.middleButtonClick=!0,this._mClkBegins=0))}onTouchStart(e){let t=this.touchState;t.sys=e,t.clientX=e.touches.item(0).clientX-e.offsetLeft,t.clientY=e.touches.item(0).clientY-e.offsetTop;let i=this.renderer.handler;t.pos.x=t.x=t.clientX*i.pixelRatio,t.pos.y=t.y=t.clientY*i.pixelRatio,t.nx=t.x/i.canvas.width,t.ny=t.y/i.canvas.height,t.prev_x=t.x,t.prev_y=t.y,t.touchStart=!0,e.touches.length===1?(this._dblTchCoords.x=t.x,this._dblTchCoords.y=t.y,this._oneTouchStart=!0):this._oneTouchStart=!1}onTouchEnd(e){let t=this.touchState;t.sys=e,t.touchEnd=!0,e.touches.length===0&&(t.prev_x=t.x,t.prev_y=t.y,this._oneTouchStart&&(this._dblTchBegins&&(window.performance.now()-this._dblTchBegins<=t.doubleTouchDelay&&(t.doubleTouch=!0),this._dblTchBegins=0),this._dblTchBegins=window.performance.now(),this._oneTouchStart=!1))}onTouchCancel(e){let t=this.touchState;t.sys=e,t.touchCancel=!0}onTouchMove(e){let t=this.touchState;t.clientX=e.touches.item(0).clientX-e.offsetLeft,t.clientY=e.touches.item(0).clientY-e.offsetTop;let i=this.renderer.handler;t.x=t.clientX*i.pixelRatio,t.y=t.clientY*i.pixelRatio,t.nx=t.x/i.canvas.width,t.ny=t.y/i.canvas.height,t.sys=e,t.moving=!0;let r=t.x-t.prev_x,s=t.y-t.prev_y;(Math.abs(r)>9||Math.abs(s)>9)&&(this._dblTchBegins=0,this._oneTouchStart=!1)}entityPickingEvents(){let e=this.touchState,t=this.mouseState;if(this._isMouseInside!==this._entityPickingEventsActive&&(this._entityPickingEventsActive=this._isMouseInside,!this._entityPickingEventsActive)){let i=this.renderer,r=tt,s=i.getPickingObjectArr(r);if(s){let n=s.rendererEvents;t.pickingObject=s,n&&n.dispatch(n.mouseleave,t),e.pickingObject=s,n&&n.dispatch(n.touchleave,e)}tt[0]=tt[1]=tt[2]=tt[3]=Ut[0]=Ut[1]=Ut[2]=Ut[3]=Ot[0]=Ot[1]=Ot[2]=Ot[3]=0}if(this._isMouseInside&&!(t.leftButtonHold||t.rightButtonHold||t.middleButtonHold)){let i=this.renderer,r=tt,s=Ut,n=Ot;e.x||e.y?i.readPickingColor(e.nx,1-e.ny,n):i.readPickingColor(t.nx,1-t.ny,n),s[0]=r[0],s[1]=r[1],s[2]=r[2],r[0]=n[0],r[1]=n[1],r[2]=n[2],t.pickingObject=null,e.pickingObject=null;let a=i.getPickingObjectArr(r);if(t.pickingObject=a,e.pickingObject=a,r[0]!==s[0]||r[1]!==s[1]||r[2]!==s[2])if(yh(r)){let o=i.getPickingObjectArr(s);if(o){let l=o.rendererEvents;t.pickingObject=o,l&&l.dispatch(l.mouseleave,t),e.pickingObject=o,l&&l.dispatch(l.touchleave,e)}}else{if(bh(s)){let o=i.getPickingObjectArr(s);if(o){let l=o.rendererEvents;t.pickingObject=o,l&&l.dispatch(l.mouseleave,t),e.pickingObject=o,l&&l.dispatch(l.touchleave,e)}}if(a){let o=a.rendererEvents;t.pickingObject=a,o&&o.dispatch(o.mouseenter,t),e.pickingObject=a,o&&o.dispatch(o.touchenter,e)}}}}handleMouseEvents(){let e=this,t=this.mouseState,i=t.pickingObject,r=null;t.leftButtonClick&&(i&&(r=i.rendererEvents,r&&r.dispatch(r.lclick,t)),this.dispatch(e.lclick,t),t.leftButtonClick=!1),t.rightButtonClick&&(i&&(r=i.rendererEvents,r&&r.dispatch(r.rclick,t)),this.dispatch(e.rclick,t),t.rightButtonClick=!1),t.middleButtonClick&&(i&&(r=i.rendererEvents,r&&r.dispatch(r.mclick,t)),this.dispatch(e.mclick,t),t.middleButtonClick=!1),t.leftButtonDown&&(t.leftButtonHold?(i&&(r=i.rendererEvents,r&&r.dispatch(r.lhold,t)),this.dispatch(e.lhold,t)):(t.leftButtonHold=!0,i&&(r=i.rendererEvents,r&&r.dispatch(r.ldown,t)),this.dispatch(e.ldown,t))),t.rightButtonDown&&(t.rightButtonHold?(i&&(r=i.rendererEvents,r&&r.dispatch(r.rhold,t)),this.dispatch(e.rhold,t)):(t.rightButtonHold=!0,i&&(r=i.rendererEvents,r&&r.dispatch(r.rdown,t)),this.dispatch(e.rdown,t))),t.middleButtonDown&&(t.middleButtonHold?(i&&(r=i.rendererEvents,r&&r.dispatch(r.mhold,t)),this.dispatch(e.mhold,t)):(t.middleButtonHold=!0,i&&(r=i.rendererEvents,r&&r.dispatch(r.mdown,t)),this.dispatch(e.mdown,t))),t.leftButtonUp&&(i&&(r=i.rendererEvents,r&&r.dispatch(r.lup,t)),this.dispatch(e.lup,t),t.leftButtonUp=!1,t.leftButtonHold=!1),t.rightButtonUp&&(i&&(r=i.rendererEvents,r&&r.dispatch(r.rup,t)),this.dispatch(e.rup,t),t.rightButtonUp=!1,t.rightButtonHold=!1),t.middleButtonUp&&(i&&(r=i.rendererEvents,r&&r.dispatch(r.mup,t)),this.dispatch(e.mup,t),t.middleButtonUp=!1,t.middleButtonHold=!1),t.leftButtonDoubleClick&&(i&&(r=i.rendererEvents,r&&r.dispatch(r.ldblclick,t)),this.dispatch(e.ldblclick,t),t.leftButtonDoubleClick=!1),t.rightButtonDoubleClick&&(i&&(r=i.rendererEvents,r&&r.dispatch(r.rdblclick,t)),this.dispatch(e.rdblclick,t),t.rightButtonDoubleClick=!1),t.middleButtonDoubleClick&&(i&&(r=i.rendererEvents,r&&r.dispatch(r.mdblclick,t)),this.dispatch(e.mdblclick,t),t.middleButtonDoubleClick=!1),t.wheelDelta&&(i&&(r=i.rendererEvents,r&&r.dispatch(r.mousewheel,t)),this.dispatch(e.mousewheel,t)),t.moving&&(i&&(r=i.rendererEvents,r&&r.dispatch(r.mousemove,t)),this.dispatch(e.mousemove,t),t.prev_x=t.x,t.prev_y=t.y),t.justStopped&&this.dispatch(e.mousestop,t)}handleTouchEvents(){let e=this,t=this.touchState,i=t.pickingObject,r=null;if(t.touchCancel&&(this.dispatch(e.touchcancel,t),t.touchCancel=!1),t.touchStart){let s=this.renderer;s.readPickingColor(t.nx,1-t.ny,tt);let n=s.getPickingObjectArr(tt);i=t.pickingObject=n,i&&(r=i.rendererEvents,r&&r.dispatch(r.touchstart,t)),this.dispatch(e.touchstart,t),t.touchStart=!1}t.doubleTouch&&(i&&(r=i.rendererEvents,r&&r.dispatch(r.doubletouch,t)),this.dispatch(e.doubletouch,t),t.doubleTouch=!1),t.touchEnd&&(i&&(r=i.rendererEvents,r&&r.dispatch(r.touchend,t)),this.dispatch(e.touchend,t),t.x=0,t.y=0,t.touchEnd=!1),t.moving&&(i&&(r=i.rendererEvents,r&&r.dispatch(r.touchmove,t)),this.dispatch(e.touchmove,t),t.prev_x=t.x,t.prev_y=t.y)}}const Th=["draw","drawtransparent","postdraw","resize","resizeend","mouseenter","mouseleave","mousemove","mousestop","lclick","rclick","mclick","ldblclick","rdblclick","mdblclick","lup","rup","mup","ldown","rdown","mdown","lhold","rhold","mhold","mousewheel","touchstart","touchend","touchcancel","touchmove","doubletouch","touchleave","touchenter"];function Ah(){return new G("depth",{uniforms:{depthTexture:"sampler2d"},attributes:{corners:"vec2"},vertexShader:`#version 300 es
            
            in vec2 corners;
            
            out vec2 tc;

            void main(void) {
                gl_Position = vec4(corners, 0.0, 1.0);
                tc = corners * 0.5 + 0.5;
            }`,fragmentShader:`#version 300 es

            precision highp float;

            #define MAX_FRUSTUMS 4

            uniform sampler2D depthTexture;
           
            in vec2 tc;

            layout(location = 0) out vec4 fragColor;

            float LinearizeDepth(in vec2 uv)
            {
                float depth = texture(depthTexture, tc).x;
                return depth;//(2.0 * zNear) / (zFar + zNear - depth * (zFar - zNear));
            }
            
            void main(void) {
                float c = LinearizeDepth(tc);
                fragColor = vec4(c, c, c, 1.0);
            }`})}class oi{constructor(e=0,t=0,i=0,r=0){this.left=e,this.right=i,this.top=t,this.bottom=r}set(e=0,t=0,i=0,r=0){this.left=e,this.right=i,this.top=t,this.bottom=r}clone(){return new oi(this.left,this.top,this.right,this.bottom)}getWidth(){return Math.abs(this.right-this.left)}getHeight(){return Math.abs(this.bottom-this.top)}getSquare(){return this.getHeight()*this.getWidth()}getDiagonal(){let e=this.getWidth(),t=this.getHeight();return Math.sqrt(t*t+e*e)}fit(e,t){return this.getWidth()===e&&this.getHeight()===t}isInside(e,t){return e>=this.left&&e<=this.right&&t>=this.top&&t<=this.bottom}}class Eh{constructor(){this.imagesCache={},this._counter=0,this._pendingsQueue=new Sr,this._imageIndexCounter=0}load(e,t){if(this.imagesCache[e])t(this.imagesCache[e]);else{let i={src:e,success:t};this._counter>=1?this._pendingsQueue.unshift(i):this._exec(i)}}_exec(e){this._counter++;const t=this;let i=new Image;i.crossOrigin="",i.onload=function(){t.imagesCache[e.src]=i,i.__nodeIndex=t._imageIndexCounter++,e.success(i),t._dequeueRequest()},i.onerror=function(){t._dequeueRequest()},i.src=e.src}_dequeueRequest(){if(this._counter--,this._pendingsQueue.length&&this._counter<1)for(;this._pendingsQueue.length;){let e=this._pendingsQueue.pop();if(e)if(this.imagesCache[e.src])this._counter<=0?this._counter=0:this._counter--,e.success(this.imagesCache[e.src]);else{this._exec(e);break}}}}class gr{constructor(e=1024,t=1024){this.nodes=new Map,this.texture=null,this.canvas=new Wt(e,t),this.clearCanvas(),this._handler=null,this._images=[],this._btree=null,this._imagesCacheManager=new Eh,this.borderSize=4}getImage(){return this.canvas.getImage()}getCanvas(){return this.canvas.getCanvas()}clearCanvas(){this.canvas.fillEmpty()}assignHandler(e){this._handler=e,this.createTexture()}getDiagonal(e){let t=e.atlasWidth||e.width,i=e.atlasHeight||e.height;return Math.sqrt(t*t+i*i)}addImage(e,t=!1){if(e.width&&e.height&&(this._images.push(e),this._makeAtlas(t),e.__nodeIndex!=null))return this.get(e.__nodeIndex)}_completeNode(e,t){if(t){let i=this.canvas.getWidth(),r=this.canvas.getHeight(),s=t.image,n=t.rect,a=Math.round(this.borderSize*.5);this.canvas.drawImage(s,n.left+a,n.top+a,s.atlasWidth||0,s.atlasHeight||0);let o=t.texCoords;o[0]=(n.left+a)/i,o[1]=(n.top+a)/r,o[2]=(n.left+a)/i,o[3]=(n.bottom-a)/r,o[4]=(n.right-a)/i,o[5]=(n.bottom-a)/r,o[6]=(n.right-a)/i,o[7]=(n.bottom-a)/r,o[8]=(n.right-a)/i,o[9]=(n.top+a)/r,o[10]=(n.left+a)/i,o[11]=(n.top+a)/r,e.set(s.__nodeIndex,t)}}_makeAtlas(e=!1){if(e&&this._btree){let t=this._images[this._images.length-1];this._completeNode(this.nodes,this._btree.insert(t))}else{let t=this._images.slice(0);t.sort(function(r,s){return(s.atlasWidth||s.width)-(r.atlasWidth||r.width)||(s.atlasHeight||s.height)-(r.atlasHeight||r.height)}),this._btree=new Jt(new oi(0,0,this.canvas.getWidth(),this.canvas.getHeight())),this._btree.atlas=this,this.clearCanvas();let i=new Map;for(let r=0;r<t.length;r++)this._completeNode(i,this._btree.insert(t[r]));this.nodes=null,this.nodes=i}}get(e){return this.nodes.get(e)}set(e,t){this.nodes.set(e,t)}createTexture(e,t){this._handler&&(this._handler.gl.deleteTexture(this.texture),e&&(this.canvas.resize(e.width,e.height),this.canvas.drawImage(e,0,0,e.width,e.height)),this.texture=this._handler.createTexture_l(this.canvas.getCanvas(),t))}loadImage(e,t){this._imagesCacheManager.load(e,t)}getImageTexCoordinates(e){if(e.__nodeIndex!=null){let t=this.get(e.__nodeIndex);if(t)return t.texCoords}}}class Jt{constructor(e,t){this.childNodes=null,this.image=null,this.rect=e||new oi,this.texCoords=t||[],this.atlas=null}insert(e){if(this.childNodes){let t=this.childNodes[0].insert(e);return t||this.childNodes[1].insert(e)}else{if(this.image!=null)return;let t=this.rect;const i=(e.atlasWidth||e.width)+this.atlas.borderSize,r=(e.atlasHeight||e.height)+this.atlas.borderSize;if(i>t.getWidth()||r>t.getHeight())return;if(t.fit(i,r))return this.image=e,this;this.childNodes=new Array(2),this.childNodes[0]=new Jt,this.childNodes[0].atlas=this.atlas,this.childNodes[1]=new Jt,this.childNodes[1].atlas=this.atlas;const s=t.getWidth()-i,n=t.getHeight()-r;return s>n?(this.childNodes[0].rect.set(t.left,t.top,t.left+i,t.bottom),this.childNodes[1].rect.set(t.left+i,t.top,t.right,t.bottom)):(this.childNodes[0].rect.set(t.left,t.top,t.right,t.top+r),this.childNodes[1].rect.set(t.left,t.top+r,t.right,t.bottom)),this.childNodes[0].insert(e)}}}const Fs=11;class ks extends gr{constructor(e,t){super(e,t),this.width=0,this.height=0,this.gliphSize=0,this.distanceRange=0,this.nodes=new Map,this.kernings={}}get(e){return this.nodes.get(e)}}class Ch extends Jt{constructor(e,t){super(e,t),this.emptySize=1,this.metrics={id:0,char:"",width:0,height:0,x:0,y:0,chnl:0,index:0,page:0,xadvance:0,xoffset:0,yoffset:0,nChar:"",nCode:0,nWidth:0,nHeight:0,nAdvance:0,nXOffset:0,nYOffset:0}}}class Ph{constructor(e){this.atlasesArr=[],this.atlasIndexes={},this.atlasIndexesDeferred={},this.tokenImageSize=64,this.samplerArr=new Uint32Array(Fs),this.sdfParamsArr=new Float32Array(Fs*4),this._handler=null,this.catalogSrc=e||"./"}assignHandler(e){this._handler=e}getFontIndex(e){let t=this.getFullIndex(e);return this.atlasIndexes[t]||this.loadFont(e,this.catalogSrc,`${e}.json`),this.atlasIndexesDeferred[t]||(this.atlasIndexesDeferred[t]=new Yi),this.atlasIndexesDeferred[t].promise}getFullIndex(e){return e.trim().toLowerCase()}_applyFontDataToAtlas(e,t,i=0){let r=t.chars;e.height=t.common.scaleH,e.width=t.common.scaleW,e.gliphSize=t.info.size,e.distanceRange=t.distanceField.distanceRange;let s=e.width,n=e.height,a=e.gliphSize;this.sdfParamsArr[i*4]=s,this.sdfParamsArr[i*4+1]=n,this.sdfParamsArr[i*4+2]=a,this.sdfParamsArr[i*4+3]=e.distanceRange;let o={};for(let l=0;l<r.length;l++){let c=r[l],d=c.char;o[c.id]=d;let f=new oi(c.x,c.y,c.x+c.width,c.y+c.height),_=new Array(12);_[0]=f.left/s,_[1]=f.top/n,_[2]=f.left/s,_[3]=f.bottom/n,_[4]=f.right/s,_[5]=f.bottom/n,_[6]=f.right/s,_[7]=f.bottom/n,_[8]=f.right/s,_[9]=f.top/n,_[10]=f.left/s,_[11]=f.top/n;let g=new Ch(f,_),v=c.char.normalize("NFKC"),u=v.charCodeAt(0),p=g.metrics;p.id=c.id,p.char=c.char,p.width=c.width,p.height=c.height,p.x=c.x,p.y=c.y,p.chnl=c.chnl,p.index=c.index,p.page=c.page,p.xadvance=c.xadvance,p.xoffset=c.xoffset,p.yoffset=c.yoffset,p.nChar=v,p.nCode=u,p.nWidth=g.metrics.width/a,p.nHeight=g.metrics.height/a,p.nAdvance=g.metrics.xadvance/a,p.nXOffset=g.metrics.xoffset/a,p.nYOffset=1-g.metrics.yoffset/a,g.emptySize=1,e.nodes.set(v.charCodeAt(0),g)}e.kernings={};for(let l=0;l<t.kernings.length;l++){let c=t.kernings[l],d=c.first,f=c.second;e.kernings[d]||(e.kernings[d]={}),e.kernings[d][f]=c.amount/a}}initFont(e,t,i){let r=this.atlasesArr.length,s=this.getFullIndex(e);this.atlasIndexes[s]=r;let n=this.atlasIndexesDeferred[s];n||(n=this.atlasIndexesDeferred[s]=new Yi),this.samplerArr[this.atlasesArr.length]=r;let a=new ks;a.height=0,a.width=0,a.gliphSize=0,a.distanceRange=0,a.kernings={},a.assignHandler(this._handler),this.atlasesArr[r]=a,this._applyFontDataToAtlas(a,t,r);let o=new Image;o.onload=()=>{this._createTexture(a,o),n.resolve(r)},o.src=i}_createTexture(e,t){e.createTexture(t)}loadFont(e,t,i){let r=this.atlasesArr.length,s=this.getFullIndex(e);this.atlasIndexes[s]=r;let n=this.atlasIndexesDeferred[s];n||(n=this.atlasIndexesDeferred[s]=new Yi),this.samplerArr[this.atlasesArr.length]=r;let a=new ks;a.height=0,a.width=0,a.gliphSize=0,a.distanceRange=0,a.kernings={},a.assignHandler(this._handler),this.atlasesArr[r]=a,fetch(`${t}/${i}`).then(o=>{if(!o.ok)throw Error(`Unable to load "${t}/${i}"`);return o.json()}).then(o=>{this._applyFontDataToAtlas(a,o,r);let l=new Image;l.onload=()=>{this._createTexture(a,l),n.resolve(r)},l.src=`${t}/${o.pages[0]}`,l.crossOrigin="Anonymous"}).catch(o=>(n.reject(),{status:"error",msg:o.toString()}))}}function Lh(){return new G("screenFrame",{uniforms:{texture:"sampler2d"},attributes:{corners:"vec3"},vertexShader:`attribute vec2 corners;
            
            varying vec2 tc;
            void main(void) {
                gl_Position = vec4(corners, 0.0, 1.0);
                tc = corners * 0.5 + 0.5;
            }`,fragmentShader:`precision highp float;
            uniform sampler2D texture;
            
            varying vec2 tc;
            
            void main(void) {
                gl_FragColor = texture2D( texture, tc );
            }`})}function Bh(){return new G("toneMapping",{uniforms:{hdrBuffer:"sampler2d",exposure:"float",gamma:"float",whitepoint:"float"},attributes:{corners:"vec3"},vertexShader:`#version 300 es
            
            in vec2 corners;
            
            out vec2 tc;

            void main(void) {
                gl_Position = vec4(corners, 0.0, 1.0);
                tc = corners * 0.5 + 0.5;
            }`,fragmentShader:`#version 300 es

            precision highp float;

            #ifndef saturate
                #define saturate(a) clamp(a, 0.0, 1.0)
            #endif

            uniform sampler2D hdrBuffer;

            uniform float whitepoint;
            uniform float exposure;
            uniform float gamma;

            vec3 LinearToneMapping(vec3 color) {
                return exposure * color;
            }

            vec3 ReinhardToneMapping2(vec3 color) {
                return vec3(1.0) - exp(-color * exposure);
            }

            vec3 ReinhardToneMapping(vec3 color) {
                color *= exposure;
                return saturate(color / (vec3(1.0) + color));
            }

            #define Uncharted2Helper(x) max(((x * (0.15 * x + 0.10 * 0.50) + 0.20 * 0.02) / (x * (0.15 * x + 0.50) + 0.20 * 0.30)) - 0.02 / 0.30, vec3(0.0))

            vec3 Uncharted2ToneMapping(vec3 color) {
                color *= exposure;
                return saturate(Uncharted2Helper(color) / Uncharted2Helper(vec3(whitepoint)));
            }

            vec3 OptimizedCineonToneMapping(vec3 color) {
                color *= exposure;
                color = max(vec3(0.0), color - 0.004);
                return pow((color * (6.2 * color + 0.5)) / (color * (6.2 * color + 1.7) + 0.06), vec3(2.2));
            }

            vec3 ACESFilmicToneMapping(vec3 color) {
                color *= exposure;
                return saturate((color * (2.51 * color + 0.03)) / (color * (2.43 * color + 0.59) + 0.14));
            }

            in vec2 tc;

            layout(location = 0) out vec4 fragColor;
            
            void main(void) {
                vec4 hdrColor = texture(hdrBuffer, tc).rgba;
                
                float oneByGamma = gamma / gamma;
                float oneByWhitePoint = whitepoint / whitepoint;
                vec3 mapped = ReinhardToneMapping2(hdrColor.rgb) * oneByGamma * oneByWhitePoint;
                //vec3 mapped = ACESFilmicToneMapping(hdrColor.rgb) * oneByGamma * oneByWhitePoint;

                mapped = pow(mapped, vec3(1.0 / gamma));
        
                fragColor = vec4(mapped, hdrColor.a);
            }`})}const Sh=0;let Rh=0,Mh=0,Ih=0;function Ns(h,e,t){return new Promise((i,r)=>{function s(){const n=h.clientWaitSync(e,t,0);n==h.WAIT_FAILED?r():n==h.TIMEOUT_EXPIRED?requestAnimationFrame(s):i()}s()})}class zh{constructor(e,t={}){if(this._readPickingBuffer_webgl1=()=>{this.pickingFramebuffer.activate(),this.pickingFramebuffer.readAllPixels(this._tempPickingPix_),this.pickingFramebuffer.deactivate()},this._readPickingBuffer_webgl2=()=>{const s=this.handler.gl,n=this._pickingPixelBuffer;if(!this._skipPickingFrame){this._skipPickingFrame=!0;let a=this._tempPickingPix_,o=this.pickingFramebuffer.width,l=this.pickingFramebuffer.height;this.pickingFramebuffer.activate(),s.bindBuffer(s.PIXEL_PACK_BUFFER,n),s.bufferData(s.PIXEL_PACK_BUFFER,a.byteLength,s.STREAM_READ),s.readPixels(0,0,o,l,s.RGBA,s.UNSIGNED_BYTE,0),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),this.pickingFramebuffer.deactivate();const c=s.fenceSync(s.SYNC_GPU_COMMANDS_COMPLETE,0);s.flush(),Ns(s,c,0).then(()=>{this._skipPickingFrame=!1,s.deleteSync(c),s.bindBuffer(s.PIXEL_PACK_BUFFER,n),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,a),s.bindBuffer(s.PIXEL_PACK_BUFFER,null)})}},this._readDistanceBuffer_webgl1=()=>{this.distanceFramebuffer.activate(),this.distanceFramebuffer.readAllPixels(this._tempDistancePix_),this.distanceFramebuffer.deactivate()},this._readDistanceBuffer_webgl2=()=>{const s=this.handler.gl,n=this._distancePixelBuffer;if(!this._skipDistanceFrame){this._skipDistanceFrame=!0;let a=this._tempDistancePix_,o=this.distanceFramebuffer.width,l=this.distanceFramebuffer.height;this.distanceFramebuffer.activate(),s.bindBuffer(s.PIXEL_PACK_BUFFER,n),s.bufferData(s.PIXEL_PACK_BUFFER,a.byteLength,s.STREAM_READ),s.readPixels(0,0,o,l,s.RGBA,s.UNSIGNED_BYTE,0),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),this.distanceFramebuffer.deactivate();const c=s.fenceSync(s.SYNC_GPU_COMMANDS_COMPLETE,0);s.flush(),Ns(s,c,0).then(()=>{this._skipDistanceFrame=!1,s.deleteSync(c),s.bindBuffer(s.PIXEL_PACK_BUFFER,n),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,a),s.bindBuffer(s.PIXEL_PACK_BUFFER,null)})}},this.div=null,this.handler=e,this.exposure=t.exposure||3.01,this.gamma=t.gamma||.47,this.whitepoint=1,this.brightThreshold=.9,this._renderNodesArr=[],this.renderNodes={},this.activeCamera=null,this.events=mh(this),this.controls={},t.controls)for(let s in t.controls)this.controls[t.controls[s].name]=t.controls[s];this.controlsBag={},this.colorObjects=new Map,this._pickingCallbacks=[],this.pickingFramebuffer=null,this._tempPickingPix_=new Uint8Array([]),this.distanceFramebuffer=null,this._distanceCallbacks=[],this._tempDistancePix_=new Uint8Array([]),this._depthCallbacks=[],this.depthFramebuffer=null;let i=new URLSearchParams(location.search);i.get("og_msaa")?this._msaa=Number(i.get("og_msaa")):this._msaa=t.msaa!=null?t.msaa:Sh,this._internalFormat="RGBA16F",this._format="RGBA",this._type="FLOAT",this.sceneFramebuffer=null,this.blitFramebuffer=null,this.toneMappingFramebuffer=null,this._initialized=!1,this.billboardsTextureAtlas=new gr,this.geoObjectsTextureAtlas=new gr,this.fontAtlas=new Ph(t.fontsSrc),this._entityCollections=[],this._currentOutput="screen",this._fnScreenFrame=null,this.labelWorker=new Fa(4),this.__useDistanceFramebuffer__=!0,this.screenDepthFramebuffer=null,this.screenFramePositionBuffer=null,this.screenTexture={},this.outputTexture=null,this._skipDistanceFrame=!1,this._distancePixelBuffer=null,this._skipPickingFrame=!1,this._pickingPixelBuffer=null,this._readDistanceBuffer=this._readDistanceBuffer_webgl2,this._readPickingBuffer=this._readPickingBuffer_webgl2,(t.autoActivate||Bt(t.autoActivate))&&this.start()}enableBlendOneSrcAlpha(){let e=this.handler.gl;e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA)}enableBlendDefault(){let e=this.handler.gl;e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE)}setEventsActivity(e){this.events.active=e}addDepthCallback(e,t){let i=Mh++;return this._depthCallbacks.push({id:i,callback:t,sender:e}),i}removeDepthCallback(e){for(let t=0;t<this._depthCallbacks.length;t++)if(e===this._depthCallbacks[t].id){this._depthCallbacks.splice(t,1);break}}addDistanceCallback(e,t){let i=Ih++;return this._distanceCallbacks.push({id:i,callback:t,sender:e}),i}removeDistanceCallback(e){for(let t=0;t<this._distanceCallbacks.length;t++)if(e===this._distanceCallbacks[t].id){this._distanceCallbacks.splice(t,1);break}}addPickingCallback(e,t){let i=Rh++;return this._pickingCallbacks.push({id:i,callback:t,sender:e}),i}removePickingCallback(e){for(let t=0;t<this._pickingCallbacks.length;t++)if(e===this._pickingCallbacks[t].id){this._pickingCallbacks.splice(t,1);break}}getPickingObject(e,t,i){return this.colorObjects.get(`${e}_${t}_${i}`)}getPickingObjectArr(e){return this.colorObjects.get(`${e[0]}_${e[1]}_${e[2]}`)}getPickingObject3v(e){return this.colorObjects.get(`${e.x}_${e.y}_${e.z}`)}assignPickingColor(e){if(!e._pickingColor||e._pickingColor.isZero()){let t=0,i=0,r=0,s="0_0_0";for(;!(t||i||r)||this.colorObjects.has(s);)t=ki(1,255),i=ki(1,255),r=ki(1,255),s=`${t}_${i}_${r}`;e._pickingColor?e._pickingColor.set(t,i,r):e._pickingColor=new m(t,i,r),e._pickingColorU=new Float32Array([t/255,i/255,r/255]),this.colorObjects.set(s,e)}}clearPickingColor(e){if(e._pickingColor&&!e._pickingColor.isZero()){let t=e._pickingColor;t.isZero()||(this.colorObjects.delete(`${t.x}_${t.y}_${t.z}`),t.x=t.y=t.z=0)}}getWidth(){return this.handler.canvas.clientWidth}getHeight(){return this.handler.canvas.clientHeight}getCenter(){let e=this.handler.canvas;return new V(Math.round(e.width*.5),Math.round(e.height*.5))}getClientCenter(){let e=this.handler.canvas;return new V(Math.round(e.clientWidth*.5),Math.round(e.clientHeight*.5))}addControl(e){e.addTo(this)}addControls(e){for(let t=0;t<e.length;t++)e[t].addTo(this)}removeControl(e){e.remove()}isInitialized(){return this._initialized}initialize(){if(!this._initialized){if(this._initialized=!0,this.handler.initialize(),this.billboardsTextureAtlas.assignHandler(this.handler),this.geoObjectsTextureAtlas.assignHandler(this.handler),this.fontAtlas.assignHandler(this.handler),this.handler.setFrameCallback(()=>{this.draw()}),this.activeCamera=new Dn(this,{eye:new m(0,0,0),look:new m(0,0,-1),up:new m(0,1,0)}),this.events.initialize(),this.events.on("charkeypress",ye.KEY_APOSTROPHE,function(){He.setVisibility(!He.getVisibility())}),this.handler.addProgram(Lh()),this.pickingFramebuffer=new Re(this.handler,{width:640,height:480}),this.pickingFramebuffer.init(),this._tempPickingPix_=new Uint8Array(this.pickingFramebuffer.width*this.pickingFramebuffer.height*4),this.distanceFramebuffer=new Re(this.handler,{width:320,height:240}),this.distanceFramebuffer.init(),this._tempDistancePix_=new Uint8Array(this.distanceFramebuffer.width*this.distanceFramebuffer.height*4),this.depthFramebuffer=new Re(this.handler,{size:2,internalFormat:["RGBA","DEPTH_COMPONENT24"],format:["RGBA","DEPTH_COMPONENT"],type:["UNSIGNED_BYTE","UNSIGNED_INT"],attachment:["COLOR_ATTACHMENT","DEPTH_ATTACHMENT"],useDepth:!1}),this.depthFramebuffer.init(),this.screenDepthFramebuffer=new Re(this.handler,{useDepth:!1}),this.screenDepthFramebuffer.init(),this.handler.gl.type==="webgl")this._readDistanceBuffer=this._readDistanceBuffer_webgl1,this._readPickingBuffer=this._readPickingBuffer_webgl1,this.sceneFramebuffer=new Re(this.handler),this.sceneFramebuffer.init(),this._fnScreenFrame=this._screenFrameNoMSAA,this.screenTexture={screen:this.sceneFramebuffer.textures[0],picking:this.pickingFramebuffer.textures[0],distance:this.distanceFramebuffer.textures[0],depth:this.screenDepthFramebuffer.textures[0]};else{let e=this.getMaxMSAA(this._internalFormat);this._msaa>e&&(this._msaa=e),this.handler.addPrograms([Bh()]),this.handler.addPrograms([Ah()]),this.sceneFramebuffer=new fh(this.handler,{size:1,msaa:this._msaa,internalFormat:this._internalFormat,filter:"LINEAR"}),this.sceneFramebuffer.init(),this.blitFramebuffer=new Re(this.handler,{size:1,useDepth:!1,internalFormat:this._internalFormat,format:this._format,type:this._type,filter:"NEAREST"}),this.blitFramebuffer.init(),this.toneMappingFramebuffer=new Re(this.handler,{useDepth:!1}),this.toneMappingFramebuffer.init(),this._fnScreenFrame=this._screenFrameMSAA,this.screenTexture={screen:this.toneMappingFramebuffer.textures[0],picking:this.pickingFramebuffer.textures[0],distance:this.distanceFramebuffer.textures[0],depth:this.screenDepthFramebuffer.textures[0],frustum:this.depthFramebuffer.textures[0]},this._initReadPixelsBuffers()}this.handler.ONCANVASRESIZE=()=>{this._resizeStart(),this.events.dispatch(this.events.resize,this.handler.canvas),this._resizeEnd(),this.events.dispatch(this.events.resizeend,this.handler.canvas)},this.screenFramePositionBuffer=this.handler.createArrayBuffer(new Float32Array([1,1,-1,1,1,-1,-1,-1]),2,4),this.outputTexture=this.screenTexture.screen,this._initializeRenderNodes(),this._initializeControls()}}_initReadPixelsBuffers(){let e=this.handler.gl;this._distancePixelBuffer=e.createBuffer(),e.bindBuffer(e.PIXEL_PACK_BUFFER,this._distancePixelBuffer),e.bufferData(e.PIXEL_PACK_BUFFER,this.distanceFramebuffer.width*this.distanceFramebuffer.height*4,e.STREAM_READ),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),this._pickingPixelBuffer=e.createBuffer(),e.bindBuffer(e.PIXEL_PACK_BUFFER,this._pickingPixelBuffer),e.bufferData(e.PIXEL_PACK_BUFFER,this.pickingFramebuffer.width*this.pickingFramebuffer.height*4,e.STREAM_READ),e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}_initializeControls(){let e=this.controls;this.controls={};for(let t in e)this.addControl(e[t])}resize(){this._resizeEnd()}setCurrentScreen(e){this._currentOutput=e,this.screenTexture[e]&&(this.outputTexture=this.screenTexture[e])}_resizeStart(){let e=this.handler.canvas;this.activeCamera.setAspectRatio(e.width/e.height),this.sceneFramebuffer.setSize(e.width*.5,e.height*.5),this.blitFramebuffer&&this.blitFramebuffer.setSize(e.width*.5,e.height*.5,!0)}_resizeEnd(){let e=this.handler.canvas;this.activeCamera.setAspectRatio(e.width/e.height),this.sceneFramebuffer.setSize(e.width,e.height),this.blitFramebuffer&&this.blitFramebuffer.setSize(e.width,e.height,!0),this.toneMappingFramebuffer&&this.toneMappingFramebuffer.setSize(e.width,e.height,!0),this.depthFramebuffer&&this.depthFramebuffer.setSize(e.clientWidth,e.clientHeight,!0),this.screenDepthFramebuffer&&this.screenDepthFramebuffer.setSize(e.clientWidth,e.clientHeight,!0),this.handler.gl.type==="webgl"?(this.screenTexture.screen=this.sceneFramebuffer.textures[0],this.screenTexture.picking=this.pickingFramebuffer.textures[0],this.screenTexture.distance=this.distanceFramebuffer.textures[0],this.screenTexture.depth=this.screenDepthFramebuffer.textures[0],this.screenTexture.frustum=this.depthFramebuffer.textures[0]):(this.screenTexture.screen=this.toneMappingFramebuffer.textures[0],this.screenTexture.picking=this.pickingFramebuffer.textures[0],this.screenTexture.distance=this.distanceFramebuffer.textures[0],this.screenTexture.depth=this.screenDepthFramebuffer.textures[0],this.screenTexture.frustum=this.depthFramebuffer.textures[0]),this.setCurrentScreen(this._currentOutput)}removeNode(e){e.remove()}addNode(e){this.renderNodes[e.name]?He.logWrn(`Node name ${e.name} already exists.`):(e.assign(this),this._renderNodesArr.unshift(e),this.renderNodes[e.name]=e)}_initializeRenderNodes(){for(let e=0;e<this._renderNodesArr.length;e++)this._renderNodesArr[e].initialize()}addNodeBefore(e,t){if(this.renderNodes[e.name])He.logWrn(`Node name ${e.name} already exists.`);else{e.assign(this),this.renderNodes[e.name]=e;for(let i=0;i<this._renderNodesArr.length;i++)if(this._renderNodesArr[i].isEqual(t)){this._renderNodesArr.splice(i,0,e);break}this._renderNodesArr.unshift(e)}}addNodes(e){for(let t=0;t<e.length;t++)this.addNode(e[t])}getMaxMSAA(e){let t=this.handler.gl;return t.getInternalformatParameter(t.RENDERBUFFER,t[e],t.SAMPLES)[0]}getMSAA(){return this._msaa}enqueueEntityCollectionsToDraw(e){this._entityCollections.push.apply(this._entityCollections,e)}_drawOpaqueEntityCollections(){let e=this._entityCollections;if(e.length){this.enableBlendDefault();let t=e.length;for(;t--;)e[t]._fadingOpacity&&e[t].pointCloudHandler.draw()}}_drawTransparentEntityCollections(){let e=this._entityCollections;if(e.length){let t=this.handler.gl;this.enableBlendDefault();let i=e.length;for(;i--;){let s=e[i];e[i]._fadingOpacity&&(s.events.dispatch(s.events.draw,s),e[i].geoObjectHandler.draw())}for(t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.billboardsTextureAtlas.texture),i=e.length;i--;){let s=e[i];s._fadingOpacity&&s.billboardHandler.draw()}let r=this.fontAtlas.atlasesArr;for(i=0;i<r.length;i++)t.activeTexture(t.TEXTURE0+i),t.bindTexture(t.TEXTURE_2D,r[i].texture);for(i=e.length;i--;)e[i]._fadingOpacity&&e[i].labelHandler.draw();for(i=e.length;i--;)e[i]._fadingOpacity&&e[i].rayHandler.draw();for(i=e.length;i--;)e[i]._fadingOpacity&&e[i].polylineHandler.draw();for(i=e.length;i--;)e[i]._fadingOpacity&&e[i].stripHandler.draw()}}_clearEntityCollectionQueue(){this._entityCollections.length=0,this._entityCollections=[]}draw(){this.activeCamera.checkMoveEnd();let e=this.events;e.handleEvents();let t=this.sceneFramebuffer;t.activate();let i=this.handler,r=i.gl;r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),this.enableBlendDefault(),e.dispatch(e.draw,this);let s=this.activeCamera.frustums,n=e.pointerEvent(),a=e.mouseState.leftButtonDown||e.mouseState.rightButtonDown,o=this._renderNodesArr,l=s.length;for(;l--;){this.activeCamera.setCurrentFrustum(l),r.clear(r.DEPTH_BUFFER_BIT);let c=o.length;for(;c--;)o[c].preDrawNode();for(this._drawOpaqueEntityCollections(),c=o.length;c--;)this.enableBlendDefault(),o[c].drawNode();this._drawTransparentEntityCollections(),this._clearEntityCollectionQueue(),e.dispatch(e.drawtransparent,this),n&&!a&&this._drawPickingBuffer(),this.__useDistanceFramebuffer__&&this._drawDistanceBuffer()}t.deactivate(),this.blitFramebuffer&&t.blitTo(this.blitFramebuffer,0),n&&(i.isWebGl2()&&this._drawDepthBuffer(),this._readPickingBuffer()),this.__useDistanceFramebuffer__&&this._readDistanceBuffer(),this._fnScreenFrame(),e.dispatch(e.postdraw,this),e.mouseState.wheelDelta=0,e.mouseState.justStopped=!1,e.mouseState.moving=!1,e.touchState.moving=!1}getImageDataURL(e="image/png",t=1){return this.draw(),this.handler.canvas?this.handler.canvas.toDataURL(e,t):""}_screenFrameMSAA(){let e=this.handler,t=e.programs.toneMapping,i=t._program,r=e.gl;r.disable(r.DEPTH_TEST),r.bindBuffer(r.ARRAY_BUFFER,this.screenFramePositionBuffer),r.vertexAttribPointer(i.attributes.corners,2,r.FLOAT,!1,0,0),this.toneMappingFramebuffer.activate(),t.activate(),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.blitFramebuffer.textures[0]),r.uniform1i(i.uniforms.hdrBuffer,0),r.uniform1f(i.uniforms.gamma,this.gamma),r.uniform1f(i.uniforms.exposure,this.exposure),r.uniform1f(i.uniforms.whitepoint,this.whitepoint),r.drawArrays(r.TRIANGLE_STRIP,0,4),this.toneMappingFramebuffer.deactivate(),t=e.programs.screenFrame,i=t._program,t.activate(),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.outputTexture),r.uniform1i(i.uniforms.texture,0),r.drawArrays(r.TRIANGLE_STRIP,0,4),r.enable(r.DEPTH_TEST)}_screenFrameNoMSAA(){let e=this.handler,t=e.programs.screenFrame,i=t._program,r=e.gl;r.disable(r.DEPTH_TEST),t.activate(),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.outputTexture),r.uniform1i(i.uniforms.texture,0),r.bindBuffer(r.ARRAY_BUFFER,this.screenFramePositionBuffer),r.vertexAttribPointer(i.attributes.corners,2,r.FLOAT,!1,0,0),r.drawArrays(r.TRIANGLE_STRIP,0,4),r.enable(r.DEPTH_TEST)}_drawPickingBuffer(){this.pickingFramebuffer.activate();let t=this.handler.gl;this.activeCamera.isFirstPass?(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT)):t.clear(t.DEPTH_BUFFER_BIT);let i=this._pickingCallbacks;for(let r=0,s=i.length;r<s;r++)t.disable(t.BLEND),i[r].callback.call(i[r].sender),t.enable(t.BLEND);this.pickingFramebuffer.deactivate()}_drawDistanceBuffer(){this.distanceFramebuffer.activate();let t=this.handler.gl;this.activeCamera.isFirstPass?(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT)):t.clear(t.DEPTH_BUFFER_BIT),t.disable(t.BLEND);let i=this._distanceCallbacks,r=i.length;for(;r--;)i[r].callback.call(i[r].sender);t.enable(t.BLEND),this.distanceFramebuffer.deactivate()}_drawDepthBuffer(){this.depthFramebuffer.activate();let e=this.handler,t=e.gl;t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST);let i=this._depthCallbacks,r=i.length;for(;r--;)i[r].callback.call(i[r].sender);this.depthFramebuffer.deactivate(),this.screenDepthFramebuffer.activate();let s=e.programs.depth,n=s._program;t.bindBuffer(t.ARRAY_BUFFER,this.screenFramePositionBuffer),t.vertexAttribPointer(n.attributes.corners,2,t.FLOAT,!1,0,0),s.activate(),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.depthFramebuffer.textures[1]),t.uniform1i(n.uniforms.depthTexture,0),t.drawArrays(t.TRIANGLE_STRIP,0,4),this.screenDepthFramebuffer.deactivate()}readPickingColor(e,t,i){let r=this.pickingFramebuffer.width,s=this.pickingFramebuffer.height;e=Math.round(e*r),t=Math.round(t*s);let n=(t*r+e)*4;i[0]=this._tempPickingPix_[n],i[1]=this._tempPickingPix_[n+1],i[2]=this._tempPickingPix_[n+2]}readDistanceColor(e,t,i){let r=this.distanceFramebuffer.width,s=this.distanceFramebuffer.height;e=Math.round(e*r),t=Math.round(t*s);let n=(t*r+e)*4;i[0]=this._tempDistancePix_[n],i[1]=this._tempDistancePix_[n+1],i[2]=this._tempDistancePix_[n+2]}start(){this._initialized||this.initialize(),this.handler.start()}destroy(){for(let e in this.controls)this.controls[e].remove();for(let e=0;e<this._renderNodesArr.length;e++)this._renderNodesArr[e].remove();this.div=null,this._renderNodesArr=[],this.renderNodes={},this.activeCamera=null,this.controls={},this.controlsBag={},this.colorObjects.clear(),this.colorObjects=null,this._pickingCallbacks=[],this.pickingFramebuffer=null,this._tempPickingPix_=null,this.distanceFramebuffer=null,this._distanceCallbacks=[],this._tempDistancePix_=null,this._depthCallbacks=[],this.depthFramebuffer=null,this.sceneFramebuffer=null,this.blitFramebuffer=null,this.toneMappingFramebuffer=null,this._entityCollections=[],this.handler.ONCANVASRESIZE=null,this.handler.destroy(),this.handler=null,this._initialized=!1}}const Fh="/night.png",kh="/spec.png",Ds="/res",Nh="globus_planet_";let Hn=class pi{constructor(e){this.$target=null,this._instanceID=`__globus${pi.__counter__++?pi.__counter__:""}__`,window[this._instanceID]=this,this._canvas=document.createElement("canvas"),this._canvas.id=`canvas${this._instanceID}`,this._canvas.style.width="100%",this._canvas.style.height="100%",this._canvas.style.display="block",this._canvas.style.opacity="0.0",this._canvas.style.transition="opacity 150ms",this.$inner=document.createElement("div"),this.$inner.classList.add("og-inner"),this.$inner.appendChild(this._canvas),this.$inner.attributions=document.createElement("div"),e.attributionContainer?e.attributionContainer.appendChild(this.$inner.attributions):(this.$inner.attributions.classList.add("og-attribution"),this.$inner.appendChild(this.$inner.attributions)),e.target&&this.attachTo(e.target);const t=n=>{n.preventDefault()};this._canvas.onmouseenter=function(){document.addEventListener("mousewheel",t,{capture:!1,passive:!1})},this._canvas.onmouseleave=function(){document.removeEventListener("mousewheel",t)},this.renderer=new zh(new yi(this._canvas,{autoActivate:!1,pixelRatio:e.dpi||window.devicePixelRatio+.15,context:{antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1}}),{autoActivate:!1,msaa:e.msaa,fontsSrc:e.fontsSrc,gamma:e.gamma,exposure:e.exposure}),this.renderer.div=this.$inner,e.skybox&&this.renderer.addNode(e.skybox),this._planetName=e.name?e.name:Nh+pi.__counter__,this.planet=new nh({name:this._planetName,frustums:e.frustums,ellipsoid:e.ellipsoid,maxGridSize:e.maxGridSize,nightTextureSrc:e.nightTextureSrc===null?null:e.nightTextureSrc||`${e.resourcesSrc||Ds}${Fh}`,specularTextureSrc:e.specularTextureSrc===null?null:e.specularTextureSrc||`${e.resourcesSrc||Ds}${kh}`,minAltitude:e.minAltitude,maxAltitude:e.maxAltitude||15e6,maxEqualZoomAltitude:e.maxEqualZoomAltitude,minEqualZoomAltitude:e.minEqualZoomAltitude,minEqualZoomCameraSlope:e.minEqualZoomCameraSlope,quadTreeStrategyPrototype:e.quadTreeStrategyPrototype,maxLoadingRequests:e.maxLoadingRequests,atmosphereEnabled:e.atmosphereEnabled,transitionOpacityEnabled:e.transitionOpacityEnabled,atmosphereParameters:e.atmosphereParameters}),e.terrain?Array.isArray(e.terrain)?this.planet.setTerrain(e.terrain[0]):this.planet.setTerrain(e.terrain):this.planet.setTerrain(new ai),this.renderer.addNode(this.planet),e.controls?this.planet.addControls(e.controls):this.planet.addControls([new dl,e.useEarthNavigation?new il:new Ar({minSlope:e.minSlope}),new ll,new tl,new sl,new Aa]);const i=this.renderer.controls;let r;for(let n in i)if(i[n]instanceof xs){r=i[n];break}r?this.sun=r:(this.sun=new xs,this.planet.addControl(this.sun)),e.sun&&(e.sun.active!==void 0&&!e.sun.active&&this.sun.deactivate(),e.sun.stopped===!0&&this.sun.stop()),e.layers&&this.planet.addLayers(e.layers);let s=e.viewExtent;s&&(s instanceof Array?this.planet.viewExtentArr(s):this.planet.viewExtent(s)),(e.autoActivate||Bt(e.autoActivate))&&this.start()}start(){this.renderer.start(),this.fadeIn()}fadeIn(){this._canvas.style.opacity="1.0"}fadeOut(){this._canvas.style.opacity="0"}attachTo(e,t){this.detach();let i;e instanceof HTMLElement?i=e:i=document.getElementById(e)||document.querySelector(e),i&&(this.$target=i,t&&this.$target.firstChild?this.$target.insertBefore(this.$inner,this.$target.firstChild):i.appendChild(this.$inner))}detach(){this.$target&&(this.$target.removeChild(this.$inner),this.$target=null)}destroy(){this.detach(),this.planet.layers.forEach(e=>e.remove()),this.planet.destroy(),this.renderer.destroy(),window[this._instanceID]=null}};Hn.__counter__=0;new Rr(3396200,3389508);new Rr(1737400,1737400);const Dh=({children:h,onDraw:e,...t})=>{const i=De.useRef(null),{setGlobe:r}=Un(),[s,n]=De.useState(t),a=De.useRef(null);return De.useEffect(()=>{a&&a.current&&t.atmosphereEnabled!==void 0&&(a.current.planet.atmosphereEnabled=t.atmosphereEnabled)},[t.atmosphereEnabled]),De.useEffect(()=>{var o,l;a&&a.current&&t.sunActive!==void 0&&(t.sunActive?(o=a.current)==null||o.sun.activate():(l=a.current)==null||l.sun.deactivate())},[t.sunActive]),De.useEffect(()=>{if(a.current)i.current=a.current.$target;else{let o=function(d,f,_){for(var g="",v=_;v>0;v--){var u=0,p=1<<v-1;d&p&&u++,f&p&&(u+=2),g+=u.toString()}return g};const l=new Ss("OpenStreetMap",{isBaseLayer:!0,url:"//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",visibility:!0,attribution:"Data @ OpenStreetMap contributors, ODbL"}),c=new Ss("sat",{isBaseLayer:!0,subdomains:["t0","t1","t2","t3"],url:"https://ecn.{s}.tiles.virtualearth.net/tiles/a{quad}.jpeg?n=z&g=7146",visibility:!0,attribution:'<a href="http://www.bing.com" target="_blank"><img title="Bing Imagery" src="https://sandcastle.cesium.com/CesiumUnminified/Assets/Images/bing_maps_credit.png" alt="Bing"></a> © 2021 Microsoft Corporation',maxNativeZoom:19,defaultTextures:[{color:"#001522"},{color:"#E4E6F3"}],shininess:18,specular:[63e-5,55e-5,32e-5],ambient:"rgb(100,100,140)",diffuse:"rgb(450,450,450)",nightTextureCoefficient:2.7,urlRewrite:function(d,f){return zt(f,{s:this._getSubdomain(),quad:o(d.tileX,d.tileY,d.tileZoom)})}});a.current=new Hn({target:i.current,name:"Earth",terrain:new oh,layers:[l,c],autoActivate:!0,atmosphereEnabled:!0,...s}),e&&a.current.planet.events.on("draw",e)}return r(a.current),()=>{var o,l;e&&((o=a.current)==null||o.planet.events.off("draw",e)),(l=a.current)==null||l.destroy(),a.current=null}},[s]),De.createElement("div",{style:{width:"100%",height:"100%"},ref:i},h)};Dh.__docgenInfo={description:"",methods:[],displayName:"Globe",props:{children:{required:!1,tsType:{name:"union",raw:"LayerChildren | LayerChildren[]",elements:[{name:"ReactReactElement",raw:"React.ReactElement<{ type: typeof Layer | typeof Vector }>",elements:[{name:"signature",type:"object",raw:"{ type: typeof Layer | typeof Vector }",signature:{properties:[{key:"type",value:{name:"union",raw:"typeof Layer | typeof Vector",elements:[{name:"Layer"},{name:"Vector"}],required:!0}}]}}]},{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<{ type: typeof Layer | typeof Vector }>",elements:[{name:"signature",type:"object",raw:"{ type: typeof Layer | typeof Vector }",signature:{properties:[{key:"type",value:{name:"union",raw:"typeof Layer | typeof Vector",elements:[{name:"Layer"},{name:"Vector"}],required:!0}}]}}]}],raw:"LayerChildren[]"}]},description:""},atmosphereEnabled:{required:!1,tsType:{name:"boolean"},description:""},sunActive:{required:!1,tsType:{name:"boolean"},description:""},onDraw:{required:!1,tsType:{name:"EventCallback"},description:""}},composes:["IGlobeParams"]};export{Na as B,U as E,Dh as G,Qe as L,se as M,it as P,D as R,Ai as S,m as V,Ss as X,On as a,P as b,Ne as c,Lt as d,V as e,ee as f,Ga as g,$e as h,Ye as i,qa as j,Rr as k,Uh as l,Uo as m,Oh as n,Ei as o,zt as s,Un as u};
