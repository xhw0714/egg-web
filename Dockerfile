#制定node镜像的版本
FROM node:latest
#安装依赖
RUN npm set registry https://registry.npm.taobao.org/
RUN npm install
#对外暴露的端口
EXPOSE 3000
#程序启动脚本
CMD ["npm", "start"]