(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05e78d7d"],{"15c2":function(t,i,e){"use strict";var a=e("d530"),s=e.n(a);s.a},"3cc9":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"slide-enter-active",attrs:{id:"detailContrainer"}},[e("Header",{attrs:{title:"影片详情"}},[e("i",{staticClass:"iconfont icon-right",on:{touchstart:t.handleToBack}})]),t.isLoading?e("Loading"):e("div",{staticClass:"contentDetail",attrs:{id:"content"}},[e("div",{staticClass:"detail_list"},[e("div",{staticClass:"detail_list_bg",style:{"background-image":"url("+t.detailMovie.img.replace(/w\.h/,"148.208")+")"}}),e("div",{staticClass:"detail_list_filter"}),e("div",{staticClass:"detail_list_content"},[e("div",{staticClass:"detail_list_img"},[e("img",{attrs:{src:t._f("setWH")(t.detailMovie.img,"148.208"),alt:""}})]),e("div",{staticClass:"detail_list_info"},[e("h2",[t._v(t._s(t.detailMovie.nm))]),e("p",[t._v(t._s(t.detailMovie.enm))]),e("p",[t._v(t._s(t.detailMovie.sc))]),e("p",[t._v(t._s(t.detailMovie.cat))]),e("p",[t._v(t._s(t.detailMovie.src)+" / "+t._s(t.detailMovie.dur)+"分钟")]),e("p",[t._v(t._s(t.detailMovie.pubDesc))])])])]),e("div",{staticClass:"detail_intro"},[e("p",[t._v("\n                    "+t._s(t.detailMovie.dra)+"\n                ")])]),e("div",{ref:"detail_player",staticClass:"detail_player swiper-container"},[e("ul",{staticClass:"swiper-wrapper"},t._l(t.detailMovie.photos,function(i,a){return e("li",{key:a,staticClass:"swiper-slide"},[e("div",[e("img",{attrs:{src:t._f("setWH")(i,"140.127"),alt:""}})])])}),0)])])],1)},s=[],l=e("981c"),n={name:"Detail",data:function(){return{detailMovie:{},isLoading:!0}},components:{Header:l["a"]},props:["movieId"],methods:{handleToBack:function(){this.$router.back()}},mounted:function(){var t=this;this.axios.get("/api/detailmovie?movieId="+this.movieId).then(function(i){var e=i.data.msg;"ok"===e&&(t.isLoading=!1,t.detailMovie=i.data.data.detailMovie,t.$nextTick(function(){new Swiper(t.$refs.detail_player,{slidesPerView:"auto",freeMode:!0,freeModeSticky:!0})}))})}},d=n,o=(e("90e1"),e("2877")),r=Object(o["a"])(d,a,s,!1,null,"7f6c6266",null);i["default"]=r.exports},"90e1":function(t,i,e){"use strict";var a=e("d36b"),s=e.n(a);s.a},"981c":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("header",{attrs:{id:"header"}},[t._t("default"),e("h1",[t._v(t._s(t.title))])],2)},s=[],l={name:"Header",props:{title:{type:String,default:"喵喵电影"}}},n=l,d=(e("15c2"),e("2877")),o=Object(d["a"])(n,a,s,!1,null,"0c410288",null);i["a"]=o.exports},d36b:function(t,i,e){},d530:function(t,i,e){}}]);
//# sourceMappingURL=chunk-05e78d7d.394d3310.js.map