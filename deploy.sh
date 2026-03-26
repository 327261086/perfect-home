#!/bin/bash
# Perfect Home 一键部署脚本 (Linux/Mac)

echo "========================================"
echo "  Perfect Home 一键部署脚本"
echo "========================================"
echo ""

echo "[1/4] 正在安装依赖..."
npm install
if [ $? -ne 0 ]; then
    echo "安装依赖失败！"
    exit 1
fi

echo ""
echo "[2/4] 正在构建项目..."
npm run build
if [ $? -ne 0 ]; then
    echo "构建失败！"
    exit 1
fi

echo ""
echo "[3/4] 正在部署到 GitHub Pages..."
npx gh-pages -d dist
if [ $? -ne 0 ]; then
    echo "部署失败！请确保已安装 gh-pages 并配置好 GitHub 仓库"
    exit 1
fi

echo ""
echo "========================================"
echo "  部署完成！"
echo "  请访问 GitHub Pages 查看"
echo "========================================"