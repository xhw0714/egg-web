{% include '../header.tpl' %}
{% include './nav.tpl' %}

<!-- 内容主体区域 -->
<div style="padding: 15px;width: 60%; margin: 0 auto" class="admin">
  <form class="layui-form" method="post" action="/admin/index/info/{{info.id}}">
    <div class="layui-form-item">
      <label class="layui-form-label">网站名称</label>
      <div class="layui-input-block">
        <input type="text" name="title" value="{{info.title}}" required lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
      </div>
    </div>
    <div class="layui-form-item layui-form-text">
      <label class="layui-form-label">网站关键字</label>
      <div class="layui-input-block">
        <textarea name="keyword" placeholder="请输入内容" class="layui-textarea">{{info.keyword}}</textarea>
      </div>
    </div>
    <div class="layui-form-item layui-form-text">
      <label class="layui-form-label">网站描述</label>
      <div class="layui-input-block">
        <textarea name="des" placeholder="请输入内容" class="layui-textarea">{{info.des}}</textarea>
      </div>
    </div>

    <div class="layui-form-item">
      <div class="layui-input-block">
        <button class="layui-btn" lay-submit lay-filter="formDemo">修改</button>
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


{% include './adminFooter.tpl' %}
{% include '../footer.tpl' %}