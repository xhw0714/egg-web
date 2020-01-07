{% include './header.tpl' %}
{% include './nav.tpl' %}
<div class="container" style="background:#fff;padding:10px;margin-top: 10px;margin-bottom:10px">
  <div>
    
    <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
    {%if subCategories%}
      <ul class="layui-tab-title">
        {%for item in subCategories%}
        <a style="color:#333" href="{%if item.type == 2 %}/page/{{item.id}}{%elif item.type == 1 %}/category/{{item.id}}{%endif%}">
        <li class="{%if pageContent.id == item.id %}layui-this{%endif%}">{{item.title}}</li>
        </a>
        {%endfor%}
      </ul>
      {%else%}
      <fieldset class="layui-elem-field layui-field-title">
  <legend>{{pageContent.title}}</legend>
</fieldset>
      {%endif%}
      <div class="layui-tab-content" style="{%if subCategories%}padding: 20px;{%else%}padding: 0px 10px;{%endif%}line-height:28px;min-height:600px">
      {{pageContent.content | safe}}
      </div>
    </div>
    
  </div>
</div>

{% include './footer.tpl' %}