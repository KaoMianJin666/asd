/*******
  插件说明
********/
/*

数据格式

[{
  name : '',
  seen : false ****important
  data : [obj,obj] 递归下级数组对象
}]

Dom元素

<div id = 'treeDom'>
  <tree v-bind:dataall = 'data'></tree>
</div>


组件声明

var treeDom = new Vue({
      el : '#treeDom',
      data : {
          data : null
      },
      methods : {
        init : function(data){
          this.data = data;
        }
      }
    })

初始化方法

treeDom.init(data传入的数据);

*/

/*自定义组件*/
var treeMod = '';
treeMod += '<div class = "treeBody">';
treeMod += '<template v-for = "(n,index) in dataall">';
treeMod += '<div class = "treeList">';
treeMod += '<span v-on:click = "n.seen = !n.seen">';
treeMod += '<transition name = "treeBtn">';
treeMod += '<b v-if = "!n.seen">+</b>';
treeMod += '<b v-else>-</b>';
treeMod += '</transition>';
treeMod += '{{ n.name }}';
treeMod += '</span>';
treeMod += '</div>';
treeMod += '<transition name = "treeBody">';
treeMod += '<template v-if = "n.seen">';
treeMod += '<tree v-bind:dataall = "n.data"></tree>';
treeMod += '</template>';
treeMod += '</transition>'
treeMod += '</template>';
treeMod += '</div>';
Vue.component('tree',{
  props : ['dataall'],
  template : treeMod
})

