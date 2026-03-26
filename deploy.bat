# 一键部署脚本 (Windows)

@echo off
echo ========================================
echo   Perfect Home 一键部署脚本
echo ========================================
echo.

echo [1/4] 正在安装依赖...
call npm install
if errorlevel 1 (
    echo 安装依赖失败！
    pause
    exit /b 1
)

echo.
echo [2/4] 正在构建项目...
call npm run build
if errorlevel 1 (
    echo 构建失败！
    pause
    exit /b 1
)

echo.
echo [3/4] 正在部署到 GitHub Pages...
call npx gh-pages -d dist
if errorlevel 1 (
    echo 部署失败！请确保已安装 gh-pages 并配置好 GitHub 仓库
    pause
    exit /b 1
)

echo.
echo ========================================
echo   部署完成！
echo   请访问 GitHub Pages 查看
echo ========================================
pause