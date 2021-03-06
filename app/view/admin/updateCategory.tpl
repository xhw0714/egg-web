{% include '../header.tpl' %}
{% include './nav.tpl' %}
<script src="/public/wangEditor.min.js"></script>

<!-- 内容主体区域 -->
<div style="padding: 15px;width: 60%; margin: 0 auto" class="admin">
  <form class="layui-form" method="post" action="/admin/category/update/{{menu.id}}">
    <div class="layui-form-item">
      <label class="layui-form-label">菜单名称：</label>
      <div class="layui-input-block">
        <input type="text" name="title" required value="{{menu.title}}" lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">页面类型</label>
      <div class="layui-input-block">
        <input type="radio" name="type" value="1" title="内容页" {% if menu.type == 1 %}
  checked
{% endif %}>
        <input type="radio" name="type" value="2" title="单页" {% if menu.type == 2 %}
  checked
{% endif %}>
      </div>
    </div>
    <div class="layui-form-item layui-form-text">
      <label class="layui-form-label">页面描述</label>
      <div class="layui-input-block">
        <textarea name="des" placeholder="请输入内容" class="layui-textarea">{{menu.des}}</textarea>
      </div>
    </div>
    <div class="layui-form-item layui-form-text">
      <label class="layui-form-label">单页内容：</label>
      <textarea id="content" name="content" style="width:0px; height:0px;border:none"></textarea>
      <div class="layui-input-block" id="editor">
        {{menu.content | safe}}
      </div>
    </div>

    <div class="layui-form-item">
      <div class="layui-input-block">
        <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
      </div>
    </div>
  </form>

</div>

<script>
  //Demo
  layui.use('form', function () {
    var form = layui.form;

    //监听提
  });
</script>

<script type="text/javascript">
  var E = window.wangEditor
  var editor = new E('#editor')
  // 或者 var editor = new E( document.getElementById('editor') )
  editor.customConfig.uploadImgShowBase64 = true
  editor.customConfig.uploadImgServer = '/upload'
  editor.customConfig.uploadImgHooks = {
    success: function (xhr, editor, result) {
      console.log(xhr, editor, result)
      // 图片上传并返回结果，图片插入成功之后触发
      // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
    },

    // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
    // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
    customInsert: function (insertImg, result, editor) {
      // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
      // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
      // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
      var url = result.data[0]
      insertImg(url)
      // result 必须是一个 JSON 格式字符串！！！否则报错
    }
  }

  var $text1 = $('#content')

  editor.customConfig.onchange = function (html) {
    // 监控变化，同步更新到 textarea
    $text1.val(html)
  }
  editor.create()
  // 初始化 textarea 的值
  $text1.val(editor.txt.html())
</script>

{% include './adminFooter.tpl' %}
{% include '../footer.tpl' %}