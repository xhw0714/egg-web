{% include '../header.tpl' %}
{% include './nav.tpl' %}

<script src="/public/wangEditor.min.js"></script>

<!-- 内容主体区域 -->
<div style="padding: 15px;width: 60%; margin: 0 auto" class="admin">
  <form class="layui-form" method="post" action="{{postUrl}}">
    <div class="layui-form-item">
      <label class="layui-form-label">封面：</label>
      <div class="layui-input-block">
        <button type="button" class="layui-btn" id="uploadBtn">
          <i class="layui-icon">&#xe67c;</i>上传图片
        </button>
        <img src="{{image}}" id="showthumb" style="width: 80px;{% if not image %}display:none{% endif %}" alt="" srcset="">
        <input type="text" name="image" value="{{image}}" id="image" style="display: none" autocomplete="off" class="layui-input">
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">标题：</label>
      <div class="layui-input-block">
        <input type="text" name="title" value="{{title}}" required lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
      </div>
    </div>
     <div class="layui-form-item">
      <label class="layui-form-label">链接：</label>
      <div class="layui-input-block">
        <input type="text" name="url" value="{{url}}" required lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
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
  layui.use([
    'form', 'upload'
  ], function () {
    var form = layui.form;
    var upload = layui.upload;

    //执行实例
    var uploadInst = upload.render({
      elem: '#uploadBtn', //绑定元素
      url: '/upload', //上传接口
      done: function (res) {
        var url = res.data[0]
        $('#image').val(url)
        $('#showthumb').show().attr({ 'src': url })
        //上传完毕回调
      },
      error: function () {
        //请求异常回调
      }
    });
    //监听提
  });
</script>

{% include './adminFooter.tpl' %}
{% include '../footer.tpl' %}