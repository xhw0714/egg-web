{% include './header.tpl' %}
<div class="login-box" style="text-align: center">
  <p>{{message}}</p>
  <p style="margin-top: 20px">

    {% if urlTitle %}
      <a style="color:#1E9FFF" href="{{goTo}}">{{urlTitle}}</a>
    {% elif tired %}
      <a style="color:#1E9FFF" onclick="window.history.go(-1)">《返回上一页</a>
    {% endif %}
  </p>
</div>
{% include './footer.tpl' %}