{% include './header.tpl' %}
{% include './nav.tpl' %}

<div id="slider">
  <ul class="slides">
    {% for item in banners%}
      <li>
        <a href="{{item.url}}" target="_blank">
          <img class="responsive" src="{{item.image}}"></a>
      </li>
      {%endfor%}
    </ul>
    <ul class="controls">
      <li><img src="/public/prev.png" alt="previous"></li>
      <li><img src="/public/next.png" alt="next"></li>
    </ul>
    <ul class="pagination">
      {% for item in banners%}
        <li></li>
        {%endfor%}
      </ul>
    </div>

    <div class="container">
    <div class="produce">
      <fieldset class="layui-elem-field layui-field-title">
        <legend style="text-align:center">新品推荐 <span style="color:#8a8a8a;font-size: 12px">New product recommendation</span></legend>
        <div class="layui-field-box">
        <div class="layui-row layui-col-space20">
          {% for item in newProduce%}
          <div class="layui-col-xs4 layui-col-sm4 layui-col-md4">
            <a href="/produce/{{item.id}}" target="_blank">
              <div class="layui-card layui-anim layui-anim-up">
                <div class="layui-card-body">
                  <img src="{{item.thumb}}" alt="{{item.title}}" srcset="">
                </div>
                <div class="layui-card-header">{{item.title}}</div>
              </div>
            </a>
          </div>
          {% endfor%}
        </div>
        </div>
      </fieldset>
    </div>
    <div class="about">
      <fieldset class="layui-elem-field layui-field-title">
        <legend style="text-align:center">关于我们 <span style="color:#8a8a8a;font-size: 12px">About us</span></legend>
        <div class="layui-field-box box">
        <p>佛山市麟盾商贸有限公司于2019年7月19日经佛山市工商行政管理局正式批准成立。公司位于佛山市南海区狮山镇长虹岭工业园国虹路23号综合楼2层103室，部、零售国产摩托车配件；摩托车维修。</p>
          <p>本公司自设有专门的售后服务点，各类维修设备齐全，有专业的售后服务人员。技术人员均经过多个厂家的专业培训，持证上岗，维修技术过硬。</p>
          <p>展望未来，公司始终坚持“用户至上，高质量主义，以人为本” 的经营方公司自创立以来得到社会各界的好评和认同。</p>
        </div>
      </fieldset>
    </div>
    </div>

    <link rel="stylesheet" type="text/css" href="/public/style.css">
    <script src="/public/easySlider.js"></script>
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
    <script>
      $(function () {
        $("#slider").easySlider({
          slideSpeed: 500,
          autoSlideSpeed: 5000,
          autoSlide: true,
          paginationSpacing: "15px",
          paginationDiameter: "10px",
          paginationPositionFromBottom: "20px",
          slidesClass: ".slides",
          controlsClass: ".controls",
          paginationClass: ".pagination"
        });
      });
    </script>

{% include './footer.tpl' %}