{% include './header.tpl' %}
{% include './nav.tpl' %}
<div class="container" style="background:#fff;padding:10px;margin-top: 10px;margin-bottom:10px">
  <div>
    
    <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
      <div style="min-height:600px;padding:10px;padding-top:0px" class="article">
        <div class="title">{{article.title}}</div>
        <div class="info">
          创建时间：{{article.createTime}}
        </div>
        <div class="content">
        {{article.content | safe}}
        </div>
      </div>
    </div>
    
  </div>
</div>

{% include './footer.tpl' %}