# Hexo _config.yaml

//* default_layout: draft 
> 讓 hexo new test => test.md 產生於 draft folder

//* post_asset_folder: true [預設false]
> 打開使用圖片/影音等資源
> _post中產生一個文章資料夾存檔案用
//? 目前似乎只有圖片可放 待查

//! {% asset_img hexo.jpg Hexo Logo%}
//* {% asset_link hexo.jpg Hexo Logo%}
> 連到該圖片的位置
//* {% asset_path hexo.jpg Hexo Logo%}

