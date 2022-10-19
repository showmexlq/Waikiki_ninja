 1.安装青龙
 安装2.10.13
 ```
 docker run -dit \
-v $PWD/ql/config:/ql/config \
-v $PWD/ql/log:/ql/log \
-v $PWD/ql/db:/ql/db \
-v $PWD/ql/scripts:/ql/scripts \
-v $PWD/ql/jbot:/ql/jbot \
-v $PWD/ql/repo:/ql/repo \
-v $PWD/ql/ninja:/ql/ninja \
-p 5701:5700 \
-p 5701:5701 \
-e ENABLE_HANGUP=true \
-e ENABLE_WEB_PANEL=true \
--name qinglong \
--hostname qinglong \
--privileged=true \
--restart always \
whyour/qinglong:2.10.13
 ```
 安装2.12.2
   ```
docker run -dit \
-v $PWD/ql:/ql/data \
-v $PWD/ql/ninja:/ql/ninja \
-p 5700:5700 \
-p 5701:5701 \
--name qinglong \
--hostname qinglong \
--restart always \
whyour/qinglong:2.12.2
   ```

2. 进容器内执行以下命令
   ```
   docker exec -it qinglong bash
   ```

   **进容器内执行以下命令**

   ```bash
   git clone https://github.com/Serendipper-1/ninja12.git /ql/ninja
   cd /ql/ninja/backend
   pnpm install
   cp .env.example .env # 如有需要, 修改.env
   pm2 start
   cp sendNotify.js /ql/data/scripts/sendNotify.js
   ```

3. 将以下内容粘贴到 `extra.sh`（重启后自动更新并启动 Ninja）

   ```bash
   cd /ql/ninja/backend
   git checkout .
   git pull
   pnpm install
   pm2 start
   cp sendNotify.js /ql/data/scripts/sendNotify.js
   ```

### Ninja 环境变量

- `SHOW_QR`：是否显示扫码卡片，默认不显示
- `SHOW_WSCK`：是否显示WSCK录入，默认不显示
- `SHOW_CK`：是否显示CK登录，默认不显示
- `ALLOW_WSCK_ADD`：是否允许添加WSCK账号 不允许添加时则只允许已有账号登录
- `ALLOW_WSCK_NUM`：允许添加WSCK账号的最大数量
- `ALLOW_ADD`: 是否允许添加账号 不允许添加时则只允许已有账号登录（默认 `true`）
- `ALLOW_NUM`: 允许添加账号的最大数量（默认 `45`）
- `NINJA_PORT`: Ninja 运行端口（默认 `5701`）
- `NINJA_NOTIFY`: 是否开启通知功能（默认 `true`）
- `NINJA_UA`: 自定义 UA，默认为随机

配置方式：

```bash
cd /ql/ninja/backend
cp .env.example .env
vi .env
pm2 start
```

**修改完成后需要 `pm2 start` 重启生效 ！！！**

### SendNotify 环境变量

**此环境变量在青龙中配置！！！**

- `NOTIFY_SKIP_LIST`: 通知黑名单，使用 `&` 分隔，例如 `东东乐园&东东萌宠`;

## 注意事项

- 重启后务必执行一次 `ql extra` 保证 Ninja 配置成功。

- 更新 Ninja 只需要在**容器**中 `ninja/backend` 目录执行 `git pull` 然后 `pm2 start`

- Qinglong 需要在登录状态（`auth.json` 中有 token）

## 如何更新Ninja

```bash
cd /ql/ninja
git checkout .
git pull
cd backend
pm2 start
```

## 如何删除Ninja

```bash
cd /ql/ninja
pm2 delete ninja
rm -rf *
rm -r ./.*
```
