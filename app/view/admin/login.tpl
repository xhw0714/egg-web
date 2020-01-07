{% include '../header.tpl' %}

<div class="login-box">

<form class="layui-form" method="post" action="/admin/login">
  <div class="layui-form-item">
    <label class="layui-form-label">账号：</label>
    <div class="layui-input-inline">
      <input type="text" name="username" required  lay-verify="required" placeholder="请输入账号" autocomplete="off" class="layui-input">
    </div>
  </div>
  <div class="layui-form-item">
    <label class="layui-form-label">密码：</label>
    <div class="layui-input-inline">
      <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
    </div>
  </div>
  <div class="layui-form-item">
    <div class="layui-input-block">
      <button class="layui-btn" lay-submit lay-filter="formDemo">登录</button>
    </div>
  </div>
</form>
</div>

{% include '../footer.tpl' %}