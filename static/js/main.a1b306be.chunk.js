(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,n){e.exports=n(402)},173:function(e,t,n){},191:function(e,t){},193:function(e,t){},225:function(e,t){},226:function(e,t){},291:function(e,t){},402:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(166),i=n.n(c),l=(n(173),n(24)),o=n(69),u=n(20),s=n(57);var m=function(e,t){switch(t.type){case"remove_food":return function(e,t,n){var a=Object.assign({},e),r=Object(l.a)(a[t]).filter(function(e){return e.id!==n});return a[t]=r,a}(e,t.category,t.id);case"add_food":return function(e,t,n){var a=Object.assign({},e),r=Object(l.a)(a[t]);return r.push({name:n,id:s()}),a[t]=r,a}(e,t.category,t.inputValue);case"load_foods":return t.defaultIngredients;default:throw new Error}},d=r.a.createContext(),f=n(176);function p(e){var t=e.children,n="f9d13820ecmsh57779ce326b1e0bp123922jsncda3e4072f4b",c={proteins:[{name:"Beef",id:"p1"},{name:"Chicken",id:"p2"},{name:"Pork",id:"p3"},{name:"Tofu",id:"p4"},{name:"Salmon",id:"p5"}],grains:[{name:"White Rice",id:"g1"},{name:"Brown Rice",id:"g2"},{name:"Quinoa",id:"g3"}],veggies:[{name:"Broccoli",id:"v1"},{name:"Spinach",id:"v2"},{name:"Lettuce",id:"v3"}],custom:[{name:"Peanuts",id:"c1"}]},i=window.localStorage.getItem("ingredientList"),s=JSON.parse(i),p=Object(a.useReducer)(m,s),g=Object(u.a)(p,2),E=g[0],b=g[1];s||(b({type:"load_foods",defaultIngredients:c}),window.localStorage.setItem("ingredientList",JSON.stringify(c))),Object(a.useEffect)(function(){return window.localStorage.setItem("ingredientList",JSON.stringify(E))},[E]);var h=Object(a.useState)({searchTerms:[],response:[]}),v=Object(u.a)(h,2),y=v[0],O=v[1],j=Object(a.useState)({}),C=Object(u.a)(j,2),k=C[0],w=C[1];return r.a.createElement(d.Provider,{value:{ingredients:E,removeFood:function(e,t){b({type:"remove_food",id:e,category:t})},addFood:function(e,t){b({type:"add_food",inputValue:e,category:t})},selectFood:function(e,t){if(document.querySelector('input[id="'.concat(e,'"]')).checked){var n={name:t,id:e};O(Object(o.a)({},y,{searchTerms:[].concat(Object(l.a)(y.searchTerms),[n])}))}else{var a=Object(l.a)(y.searchTerms).filter(function(t){return t.id!==e});O(Object(o.a)({},y,{searchTerms:Object(l.a)(a)}))}},sendAPIRequest:function(){var e=[],t=Object(l.a)(y.searchTerms);if(t.length){var a=[];t.forEach(function(e){return a.push(e.name)});var r=a.join().toLowerCase();f({method:"GET",url:"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",headers:{"x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com","x-rapidapi-key":n},qs:{number:"10",ranking:"1",ignorePantry:"false",ingredients:r}},function(t,n,a){if(t)throw new Error(t);var r=JSON.parse(a);return console.log("Parsed response: ",r),e=Object(l.a)(r),O(Object(o.a)({},y,{response:Object(l.a)(e)}))})}else alert("You must select at least one food to submit")},APIState:y,modifyAPI:O,recipeInfo:k,getRecipeByID:function(e){var t=n,a={method:"GET",url:"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/".concat(e,"/information"),headers:{"x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com","x-rapidapi-key":t}};f(a,function(e,t,n){if(e)throw new Error(e);var a=JSON.parse(n);return console.log("Parsed response: ",a),w(a)})},setRecipeInfo:w}},t)}function g(e){var t=e.category,n=e.handleClick,c=e.handleChange,i=e.handleBlur,l=Object(a.useContext)(d),o=Object(a.useRef)(null);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c({inputValue:""});var n=o.current.value;n.length?(o.current.value="",l.addFood(n,t)):alert("You cannot submit a blank food item")},name:"foodCardBottom"},r.a.createElement("input",{ref:o,onBlur:function(){return i(!1)},onChange:function(){return c({inputValue:o.current.value})},type:"text",autoFocus:!0,placeholder:"..."}),r.a.createElement("button",{type:"button",name:"cancelAdd",onClick:function(){return n(!1)}},r.a.createElement("i",{className:"fas fa-times"})))}function E(e){var t=e.handleClick;return r.a.createElement("form",{name:"foodCardBottom"},r.a.createElement("button",{type:"button",name:"Add",onClick:function(){return t(!0)}},r.a.createElement("i",{className:"fas fa-plus"})))}function b(e){var t=e.handleChange,n=e.category,c=Object(a.useState)(!1),i=Object(u.a)(c,2),l=i[0],o=i[1];return l?r.a.createElement(g,{handleClick:o,handleBlur:o,handleChange:t,category:n}):r.a.createElement(E,{handleClick:o})}function h(e){var t=e.id,n=e.category,c=Object(a.useContext)(d);return r.a.createElement("span",{onClick:function(){return c.removeFood(t,n)}},r.a.createElement("i",{className:"fas fa-times"}))}function v(e){var t=e.title,n=e.contents,c=e.icon,i=e.category,l=Object(a.useState)({inputValue:""}),o=Object(u.a)(l,2),s=(o[0],o[1]),m=Object(a.useContext)(d);var f=n.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement("input",{id:e.id,type:"checkbox",value:e.name,onClick:function(){return m.selectFood(e.id,e.name)}}),r.a.createElement("label",{onClick:function(){return t=e.id,void document.querySelector('label[for="'.concat(t,'"]')).classList.toggle("checked");var t},htmlFor:e.id},r.a.createElement("span",null,e.name),r.a.createElement(h,{id:e.id,category:i})))});return r.a.createElement("div",{className:"foodCard foodCard--".concat(t)},r.a.createElement("h3",null,t," ",r.a.createElement("i",{className:"fas fa-".concat(c)})),r.a.createElement("div",{className:"foodCard__container"},r.a.createElement("form",{name:"foodCardInputs"},f),r.a.createElement(b,{handleChange:s,category:i})))}var y=n(33);function O(){var e=Object(a.useContext)(d);return r.a.createElement(y.b,{to:"/results"},r.a.createElement("button",{className:"button--inverse",title:"Search for foods",onClick:e.sendAPIRequest,type:"submit"},r.a.createElement("i",{className:"fas fa-arrow-right"})))}function j(){var e=Object(a.useContext)(d),t=e.modifyAPI;return Object(a.useEffect)(function(){return t({searchTerms:[],response:[]})},[t]),r.a.createElement("div",{className:"builder"},r.a.createElement("h1",null,"Meal Builder"),r.a.createElement("details",null,r.a.createElement("summary",null,r.a.createElement("strong",null,"How to use:")),r.a.createElement("p",null,"1. Click ingredients to select them."),r.a.createElement("p",null,"2. Click the arrow button to search for meals containing your selected ingredients."),r.a.createElement("hr",null),r.a.createElement("p",null,"You can manage your ingredients by interacting with the ingredient cards."),r.a.createElement("p",null,"All of your ingredients will be saved to your browser's local storage for future access.")),r.a.createElement("br",null),r.a.createElement("div",{className:"builder__categories"},r.a.createElement(v,{title:"Protein",icon:"drumstick-bite",category:"proteins",contents:e.ingredients.proteins}),r.a.createElement(v,{title:"Grains",icon:"bread-slice",category:"grains",contents:e.ingredients.grains}),r.a.createElement(v,{title:"Veggies",icon:"carrot",category:"veggies",contents:e.ingredients.veggies}),r.a.createElement(v,{title:"Custom",icon:"utensils",category:"custom",contents:e.ingredients.custom}),r.a.createElement(O,null)))}function C(e){var t=e.title,n=e.img,c=e.id,i=Object(a.useContext)(d);return r.a.createElement(y.b,{to:"/recipe"},r.a.createElement("div",{className:"resultCard",onClick:function(){return i.getRecipeByID(c)}},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("div",{className:"resultCard__title"},r.a.createElement("h3",null,t))))}var k=n(384);function w(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{name:"circle",fadeIn:"none"}),r.a.createElement("h3",null,"Loading..."))}function I(){var e=Object(a.useContext)(d),t=e.APIState.response,n=Object(a.useState)([]),c=Object(u.a)(n,2),i=c[0],l=c[1],o=Object(a.useState)(!1),s=Object(u.a)(o,2),m=s[0],f=s[1];if(Object(a.useEffect)(function(){var t=[];e.APIState.searchTerms.forEach(function(e){return t.push(e.name)});var n=t.join(", ");return l(n)},[]),setTimeout(function(){return f(!0)},2e3),0===t.length&&!m)return r.a.createElement(w,null);var p=t.map(function(e){var t=e.title,n=e.image,a=e.id;return r.a.createElement(C,{id:a,title:t,img:n,alt:t})});return r.a.createElement("div",null,r.a.createElement("h1",null,"Results"),r.a.createElement("h3",null,"Found ",t.length," result",1===t.length?"":"s"," for meals including: ",i),r.a.createElement("div",{className:"resultsContainer"},p))}function N(){return r.a.createElement(y.b,{to:"/"},r.a.createElement("button",{className:"button--inverse",title:"Back to home page"},r.a.createElement("i",{class:"fas fa-home"})))}function S(e){var t=e.link;return r.a.createElement("a",{href:t,target:"_blank"},r.a.createElement("button",{className:"button--inverse",title:"Link to original recipe"},r.a.createElement("i",{class:"fas fa-link"})))}function _(){var e,t,n=Object(a.useContext)(d),c=n.recipeInfo,i=c.servings,l=c.extendedIngredients,o=c.title,u=c.readyInMinutes,s=c.image,m=c.instructions,f=c.analyzedInstructions,p=c.sourceUrl;f&&f.length>0?e=f[0].steps.map(function(e){return r.a.createElement("p",null,e.number,". ",e.step)}):e=m?r.a.createElement("p",null,m):r.a.createElement("p",null,"Instructions only available on original recipe (see below).");return Object(a.useEffect)(function(){return function(){return n.setRecipeInfo({})}},[]),t=l?l.map(function(e){return r.a.createElement("li",null,e.original)}):r.a.createElement("li",null,"Loading ingredients..."),0===Object.getOwnPropertyNames(n.recipeInfo).length?r.a.createElement(w,null):r.a.createElement("div",{className:"recipe"},r.a.createElement("h1",null,o),r.a.createElement("div",{className:"recipe__summary"},r.a.createElement("img",{src:s,alt:o}),r.a.createElement("div",{className:"recipe__ingredients"},r.a.createElement("h3",null,"Preparation time: "),r.a.createElement("p",null,u," minutes"),r.a.createElement("h3",null,"Number of servings: "),r.a.createElement("p",null,i),r.a.createElement("h3",null,"Ingredients:"),r.a.createElement("ul",null,t))),r.a.createElement("div",{className:"recipe__instructions"},r.a.createElement("h3",null,"Instructions:"),e),r.a.createElement("br",null),r.a.createElement("div",{className:"recipe__buttons"},r.a.createElement(N,null),r.a.createElement(S,{link:p})))}var x=n(8);var P=function(){return r.a.createElement(p,null,r.a.createElement(y.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x.a,{path:"/",component:j,exact:!0}),r.a.createElement(x.a,{path:"/results",component:I}),r.a.createElement(x.a,{path:"/recipe",component:_}))))};i.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.a1b306be.chunk.js.map