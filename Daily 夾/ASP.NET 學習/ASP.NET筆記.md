# ASP.NET筆記
- 安裝 Visual Studio 社群版 (Community)
- SQL Server (Express版)

# 01-1 影片 (基本上直接看筆記 不用看影片!)
```
  > https://www.youtube.com/watch?v=9spaHik87-A
  - 46:00 正式開始，前面 建立專案 + 廢話
  - 48:30 MVC觀念 (去看那張圖懂了就跳過)
  - 56:35 Controller 內容介紹
  - 1:05:40 建立 Controller
  - 1:21:30 Routing 路由 
  - 1:31:50 之後廢話
```

# 01-2 影片
> https://www.youtube.com/watch?v=BFkIFg1iFLo


# 注意事項
- 更改 Model / Controller 建立關閉瀏覽器重開
- 更改 View 可直接 F5 即可
- 使用別人專案，注意 namespace 專案名是否需要修改

# 建立專案 (Step 1)
1. 左上角檔案 / 新增 / 專案
2. 上面選擇 .Net Framework 4.7.1
3. 左邊選擇 Web
4. 選擇 ASP.NET Web 應用程式 (.NET Framework)
5. 名稱 WebApplication => 確定
6. 選擇 MVC => 確定
> 後面會教會員登入，之後才會需要變更驗證

# MVC 目錄架構
> 只會用到下列三個
- Models  寫類別的檔案
- Views   畫面
- Controllers  控制器

# MVC 流程講解 48:30 (看圖學習) (Step 2)
- 去看圖了解!!
```
  1. User 發 HTTP 請求
  2. HTTP 請求 經過 Routing 至 "Controller"
  3. Controller 發送要求資料給 Model
  4. Model 與 資料庫溝通 
  5. Model 取得資料後，回傳給 Controller
  6. Controller 將資料傳給 View
  7. View 產生 HTML 傳回給 User
```

# MVC 觀念講解 48:30 (Step 3)
Views / Home 於資料夾上 右鍵加入 "檢視"
檢視名稱 test ，取消版面配至頁的勾 => 加入
> 開始解釋 doctype 可跳過至 52:15
在檔案空白處右鍵 => 瀏覽器中檢視
* 會噴錯 => 因為 User 無法直接與 View 溝通
* User 只能發送請求給 Controller  (下有解釋)
```c#
  // 上面 建立一個 View 叫 test.cshtml
  // 於 HomeController 加上 此段 即可修正錯誤
  public ActionResult test(){
    return View()  // 下有解釋 Why 這樣寫
  }
```

# Controller 內容 (Step 4)
HomeController.cs 預設都會有
此 Controller 專屬的 View 都會在 View / Home 之下 !!
* ActionResult 代表動作
有一個動作就會對應一個 View
```c#
  // 動作: Index() 對應倒 Index.cshtml 檔案
  // 對應網址 localhost/Home/index
  public ActionResult Index(){
    return View()
  }
```

# 建立 Controller (Step 5)
> 1:05:40 建立 Controller
建立 MVC 5 控制器 - 空白
控制器名稱: *-Controller (Ex: TestController)
- Controller 必須為 後墜 & 大寫開頭
會自動幫你在 Views 建立 Test 資料夾
* 建立 View 步驟請看下面範例
```c#
  // Controller 檔案
  public class TestController: Controller
  {
    public ActionResult Index()
    {
      // 將 return 此行框起來
      // 新增 檢視，即可建立 View 檔案
      // 選擇範本: Empty (沒有模型)、其他都不勾
      return View()
    }
  }
```

# View 內容
- 前端使用 <script>
- 後端使用 @{} <% WebForm %>  <?php?>
```c#
  // View 檔案
  // 此程式碼稱為 Razor，不會被編譯到 HTML
  @ {
    Layout = null;
  }
```

# Routing 路由 1:21:30
* 路由設定都放在 App_Start (右側欄)
點選右側欄 WebApplication
加入 / 加入 ASP.NET 資料夾 / App_為首的資料夾列表
* APP_ 開頭的資料夾 皆是 "保留" 的系統目錄
> 不要自行取名使用
* App_Start / RouterConfig
```c#
  public class RouteConfig 
  {
    public static void RegisterRoutes(RouteCollection routes)
    {
      routes.IgnoreRoute("{resource}.axd/{*pathInfo}")

      routes.MapRoute(
        name: "Default",
        // 控制器名稱 Home 動作 index 導向 index View
        // {id} 指定資料用 Ex: post/1
        url: "{controller}/{action}/{id}"
        // {id} 為 Optional 為非必要
        defaults:new{controller="Home",action="Index",id=UrlParameter.Optional}
      )
    }
  }
```

# SEO Tips
於網頁加入文章名稱、產品名稱
https://~/book/123-ASP.NET專題實務