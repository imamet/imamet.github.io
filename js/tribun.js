var tribun={getElements:function(t){return"object"==typeof t?[t]:document.querySelectorAll(t)},includeHTML:function(t){for(var e,n,r,i=document.getElementsByTagName("*"),u=0;u<i.length;u++)if(n=(e=i[u]).getAttribute("tribun-include-html"))return(r=new XMLHttpRequest).onreadystatechange=function(){4==this.readyState&&(200==this.status&&(e.innerHTML=this.responseText),404==this.status&&(e.innerHTML="Page not found."),e.removeAttribute("tribun-include-html"),tribun.includeHTML(t))},r.open("GET",n,!0),void r.send();t&&t()},getHttpData:function(t,e){tribun.http(t,function(){4==this.readyState&&200==this.status&&e(this.responseText)})},getHttpObject:function(t,e){tribun.http(t,function(){4==this.readyState&&200==this.status&&e(JSON.parse(this.responseText))})},displayHttp:function(t,e){tribun.http(e,function(){4==this.readyState&&200==this.status&&tribun.displayObject(t,JSON.parse(this.responseText))})},http:function(t,e,n,r){var i;r=r||"GET",window.XMLHttpRequest?i=new XMLHttpRequest:window.ActiveXObject&&(i=new ActiveXObject("Microsoft.XMLHTTP")),i&&(e&&(i.onreadystatechange=e),i.open(r,t,!0),i.send(n))},getElementsByAttribute:function(t,e){for(var n=[],r=-1,i=t.getElementsByTagName("*"),u=e.toUpperCase(),a=i.length,l=-1;l<a;l+=1)-1==l&&(i[l]=t),null!==i[l].getAttribute(u)&&(n[r+=1]=i[l]);return n},dataObject:{}};tribun.displayObject=function(t,f){for(var e,n,r,i,u,a,l,s,o=[],c="",b=document.getElementById(t),p=function(t,e){var n;if(n=e.cloneNode(!0),tribun.dataObject.hasOwnProperty(t))return tribun.dataObject[t];return tribun.dataObject[t]=n}(t,b).cloneNode(!0),d=(o=tribun.getElementsByAttribute(p,"tribun-repeat")).length-1;0<=d;--d)if(l=1==(a=o[d].getAttribute("tribun-repeat").split(" ")).length?a[0]:(c=a[0],a[2]),o[d].removeAttribute("tribun-repeat"),(s=f[l])&&"object"==typeof s&&"undefined"!=s.length)for(r in i=0,s){for(i+=1,e=(n=h(n=o[d],"element",c,s[r])).attributes,u=0;u<e.length;u+=1)e[u].value=h(e[u],"attribute",c,s[r]).value;i===s.length?o[d].parentNode.replaceChild(n,o[d]):o[d].parentNode.insertBefore(n,o[d])}else console.log("tribun-repeat must be an array. "+l+" is not an array.");function h(t,e,n,r){for(var i,u,a,l,s,o,c,b=[],p=t.cloneNode(!0),d=0;-1<d&&-1!==(d=(a="attribute"==e?p.value:p.innerHTML).indexOf("{{",d));){for(u=a.indexOf("}}",d+1),b=(l=a.substring(d+2,u)).split("||"),i=void 0,s=0;s<b.length&&(b[s]=b[s].replace(/^\s+|\s+$/gm,""),r&&(i=r[b[s]]),null==i&&f&&(i=f[b[s]]),null==i&&(o=b[s].split("."))[0]==n&&(i=r[o[1]]),null==i&&b[s]==n&&(i=r),null==i&&('"'==b[s].substr(0,1)?i=b[s].replace(/"/g,""):"'"==b[s].substr(0,1)&&(i=b[s].replace(/'/g,""))),null==i);s+=1);null!=i&&(c="{{"+l+"}}","attribute"==e?p.value=p.value.replace(c,i):function(t,e,n){var r,i,u,a;if(t.hasAttributes())for(r=t.attributes,i=r.length,u=0;u<i;u+=1)-1<r[u].value.indexOf(e)&&(r[u].value=r[u].value.replace(e,n));a=t.getElementsByTagName("*"),i=a.length,t.innerHTML=t.innerHTML.replace(e,n)}(p,c,i)),d+=1}return p}p=h(p,"element"),b.parentNode.replaceChild(p,b)};