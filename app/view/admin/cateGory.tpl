{% include '../header.tpl' %}
{% include './nav.tpl' %}

{% macro renderlist(list) %}
  {% for item in list %}
    <div class="item" style="margin-left: 30px">
      <blockquote class="layui-elem-quote layui-quote-nm">
        <p>{{ item.title }}
          <a href="/admin/category/update/{{item.id}}">修改</a>
          <a href="/admin/category/add/{{item.id}}">添加子菜单</a>
          <a href="/admin/category/del/{{item.id}}" style="color: #F00">删除</a>
        </p>
      </blockquote>
      {% if item.children %}
        {{renderlist(item.children)}}
      {% endif %}
    </div>
  {% endfor %}
{% endmacro %}

<!-- 内容主体区域 -->
<div style="padding: 15px;" class="admin">
  <a href="/admin/category/add/0" class="layui-btn layui-btn-normal">添加菜单</a>
  <div class="category">
    <fieldset class="layui-elem-field layui-field-title">
      <legend>菜单管理</legend>
      <div class="layui-field-box">
        {{renderlist(categoryies)}}
      </div>
    </fieldset>

  </div>
</div>

{% include './adminFooter.tpl' %}
{% include '../footer.tpl' %}