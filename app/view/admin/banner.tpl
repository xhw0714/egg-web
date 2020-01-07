{% include '../header.tpl' %}
{% include './nav.tpl' %}

<!-- 内容主体区域 -->
<div style="padding: 15px;" class="admin">
  <a href="/admin/banner/0" class="layui-btn layui-btn-normal">添加幻灯片</a>
  <div class="category">
    <fieldset class="layui-elem-field layui-field-title">
      <legend>幻灯片管理</legend>
      <div class="layui-field-box">

        <div class="layui-row layui-col-space10">
          {% for item in banners %}
          <div class="layui-col-md4">
            <div class="layui-card">
              <div class="layui-card-header">{{item.title}}</div>
              <div class="layui-card-body">
                <a href="/admin/banner/{{item.id}}">
                <img src="{{item.image}}" alt="">
                </a>
                <div>
                <a href="/admin/banner/del/{{item.id}}" style="color:#f00">删除</a>
              </div>
              </div>
              
            </div>
          </div>
          {%endfor%}
          
          
        </div>
      </fieldset>
    </div>
  </div>

  {% include './adminFooter.tpl' %}
  {% include '../footer.tpl' %}