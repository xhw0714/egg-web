<div class=" header">
  
  <div class="main">
    <div class="logo"><a href="/"><img src="/public/logo.png" alt="{{webinfo.title}}"></a></div>
    <ul class="layui-nav nav" lay-filter="">
      <li class='layui-nav-item {%if thisUrl == "/" or thisUrl == "/index" %}layui-this{%endif%}'>
        <a href="/">首页</a>
      </li>
      {% for item in nav %}
      <li class="layui-nav-item {%if pid == item.id %}layui-this{%endif%}">
        <a href="{%if item.type == 2 %}/page/{{item.id}}{%elif item.type == 1 %}/category/{{item.id}}{%endif%}">{{item.title}}</a>
        {%if item.children%}
          <dl class="layui-nav-child">
          <!-- 二级菜单 -->
          {%for e in item.children %}
            <dd>
              <a href='{%if e.type == 2 %}/page/{{e.id}}{%elif e.type == 1 %}/category/{{e.id}}{%endif%}'>{{e.title}}</a>
            </dd>
          {%endfor%}
          </dl>
        {%endif%}
      </li>
      {%endfor%}
    </ul>
  </div>
</div>

<script>
  //注意：导航 依赖 element 模块，否则无法进行功能性操作
  layui.use('element', function () {
    var element = layui.element;

    //…
  });
</script>