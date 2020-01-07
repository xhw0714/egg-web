  <div class="footer">
    <div class="container">
      <div class="layui-row">
        {% for item in nav %}
        <div class="layui-col-xs2 layui-col-sm2 layui-col-md2">
          <div class="title"><a href="{%if item.type == 2 %}/page/{{item.id}}{%elif item.type == 1 %}/category/{{item.id}}{%endif%}">{{item.title}}</a></div>
          {%if item.children%}
          <ul>
            {%for e in item.children %}
            <li><a href='{%if e.type == 2 %}/page/{{e.id}}{%elif e.type == 1 %}/category/{{e.id}}{%endif%}'>{{e.title}}</a></li>
            {%endfor%}
          </ul>
          {%endif%}
        </div>
        {%endfor%}
        <div class="layui-col-xs4 layui-col-sm4 layui-col-md4">
          <div class="title">联系方式</div>
          <p>联系人：李先生</p>
          <p>联系电话： 13824531999、13927774686</p>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-tip">
    版权所有 © 佛山市麟盾商贸有限公司 未经许可 严禁复制   
  </div>

</body>
</html>