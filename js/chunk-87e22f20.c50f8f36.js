(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87e22f20"],{"57b9":function(t,s,r){"use strict";var e=r("a247"),a=r.n(e);a.a},"5f4f":function(t,s,r){"use strict";var e=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",[r("div",{staticClass:"container mb-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-4"},[r("div",{staticClass:"border border-black px-2 py-4 text-center",class:{"alert alert-primary":"1"===t.progess}},[t._v("\n          1. 確認購買清單\n        ")])]),r("div",{staticClass:"col-4"},[r("div",{staticClass:"border border-black px-2 py-4 text-center",class:{"alert alert-primary":"2"===t.progess}},[t._v("\n         2. 填寫訂單資料\n        ")])]),r("div",{staticClass:"col-4"},[r("div",{staticClass:"border border-black px-2 py-4 text-center",class:{"alert alert-primary":"3"===t.progess}},[t._v("\n          3. 完成\n        ")])])])])])},a=[],c={props:["progess"]},i=c,n=r("2877"),o=Object(n["a"])(i,e,a,!1,null,null,null);s["a"]=o.exports},a247:function(t,s,r){},cdad:function(t,s,r){"use strict";r.r(s);var e=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",[r("BuyProgress",{attrs:{progess:t.step}}),r("div",{staticClass:"container"},[r("div",{staticClass:"my-5 row justify-content-center"},[r("form",{staticClass:"col-md-8",on:{submit:function(s){return s.preventDefault(),t.payOrder(s)}}},[t._m(0),r("table",{staticClass:"table"},[t._m(1),r("tbody",t._l(t.order.products,(function(s){return r("tr",{key:s.id},[r("td",{staticClass:"align-middle"},[t._v(t._s(s.product.title))]),r("td",{staticClass:"align-middle"},[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))]),r("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(s.final_total)))])])})),0),r("tfoot",[r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),r("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.order.total)))])])])]),t._m(2),r("table",{staticClass:"table"},[r("tbody",[r("tr",[r("th",{attrs:{width:"100"}},[t._v("Email")]),r("td",[t._v(t._s(t.order.user.email))])]),r("tr",[r("th",[t._v("姓名")]),r("td",[t._v(t._s(t.order.user.name))])]),r("tr",[r("th",[t._v("收件人電話")]),r("td",[t._v(t._s(t.order.user.tel))])]),r("tr",[r("th",[t._v("收件人地址")]),r("td",[t._v(t._s(t.order.user.address))])]),r("tr",[r("th",[t._v("付款狀態")]),r("td",[t.order.is_paid?r("span",{staticClass:"text-success"},[t._v("付款完成")]):r("span",[t._v("尚未付款")])])])])]),!0===t.order.is_paid?r("div",[r("router-link",{staticClass:"h5",attrs:{to:"/productList"}},[r("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v("繼續逛\n          ")])],1):t._e(),!1===t.order.is_paid?r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])])],1)},a=[function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("h5",{staticClass:"text-success"},[r("i",{staticClass:"fas fa-check"}),t._v(" 訂購成功")])},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("thead",[r("th",[t._v("品名")]),r("th",[t._v("數量")]),r("th",{staticClass:"text-right"},[t._v("單價")])])},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("h5",{staticClass:"text-success"},[r("i",{staticClass:"fas fa-user"}),t._v(" 訂購人資訊")])}],c=r("5f4f"),i={components:{BuyProgress:c["a"]},data:function(){return{step:"3",orderId:"",order:{user:{}}}},methods:{getOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("npcenthusiasm","/order/").concat(t.orderId);this.$http.get(s).then((function(s){s.data.success&&(t.order=s.data.order)}))},payOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("npcenthusiasm","/pay/").concat(t.orderId);t.$store.dispatch("updateLoading",!0),this.$http.post(s).then((function(s){s.data.success&&(t.$store.dispatch("cartsModules/getCart"),t.$store.dispatch("updateLoading",!1),t.getOrder())}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},n=i,o=(r("57b9"),r("2877")),d=Object(o["a"])(n,e,a,!1,null,"7f9fb78c",null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-87e22f20.c50f8f36.js.map