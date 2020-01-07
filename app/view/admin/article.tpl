{% include '../header.tpl' %}
{% include './nav.tpl' %}

{% macro renderlist(list) %}
  {% for item in list %}
    <div class="item" style="margin-left: 15px">
      <p style="line-height: 30px">
        <a href="/admin/article/{{item.id}}">{{ item.title }}</a>
      </p>
      {% if item.children %}
        {{renderlist(item.children)}}
      {% endif %}
    </div>
  {% endfor %}
{% endmacro %}

<!-- 内容主体区域 -->
<div style="padding: 15px;" class="admin">
  <div class="layui-side">
    <div class="category">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>菜单</legend>
        <div class="layui-field-box">
          {{renderlist(categoryies)}}
        </div>
      </fieldset>
    </div>
  </div>

  <div class="layui-body">
    <!-- 内容主体区域 -->
    <div style="padding: 9px;">
      <fieldset class="layui-elem-field layui-field-title">
        {% if id == 0%}
          <legend>全部文章</legend>
          {%else%}
          <legend>{{categoryTitle}}</legend>
          {%endif%}
          {% if categoryType == 1 or categoryType == null %}
            <div class="layui-field-box">
              {% if id != 0%}
                <a href="/admin/article/add/{{id}}" class="layui-btn">添加文章</a>
              {% endif %}
              <table class="layui-table">
                <colgroup>
                  <col>
                  <col>
                  <col>
                  <col>
                  <col>
                </colgroup>
                <thead>
                  <tr>
                    <th>封面</th>
                    <th>标题</th>
                    <th>描述</th>
                    <th>所属菜单</th>
                    <th>创建时间</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {% for item in articles %}
                    <tr>
                      <td><img src="{{item.thumb}}" style="width: 50px;height: 50px" alt="" srcset=""></td>
                      <td>{{item.title}}</td>
                      <td>{{item.des}}</td>
                      <td>{{item.category}}</td>
                      <td>{{item.createTime}}</td>
                      <td>
                        <a href="/admin/article/update/{{item.id}}">修改</a>
                        <a href="/admin/article/del/{{item.id}}" style="color:#f00">删除</a>
                      </td>
                    </tr>
                  {% endfor %}

                </tbody>
              </table>
            </div>
            {% else%}
            <blockquote class="layui-elem-quote layui-quote-nm">
              此页面为单页，内容请在菜单管理中编辑
            </blockquote>
          {% endif %}
        </fieldset>
      </div>
    </div>
  </div>

  {% include './adminFooter.tpl' %}
  {% include '../footer.tpl' %}