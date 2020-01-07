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
      <div class="layui-tab-content" style="line-height:28px;min-height:600px">
      <div class="layui-field-box">
        <div class="layui-row layui-col-space20">
          {% for item in articles%}
          <div class="layui-col-xs4 layui-col-sm4 layui-col-md4">
            <a href="/produce/{{item.id}}" target="_blank">
              <div class="layui-card layui-anim layui-anim-up">
                
                <div class="layui-card-body">
                  <img src="{{item.thumb}}" style="height:207px" alt="{{item.title}}" srcset="">
                </div>
                <div class="layui-card-header">{{item.title}}</div>
              </div>
            </a>
          </div>
          {% endfor%}
        </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

<style type="text/css">
.layui-field-box {
    padding: 10px 0px;
}
.layui-card-header{
  border:none;
  height:auto;
  line-height:25px;
  padding-bottom:10px;
}
</style>

{% include './footer.tpl' %}