// input focus & 離開
$('input').focus(() => {
    $(this).css('background', 'red')
})
$('input').blur(() => {
    $(this).css('background', '#fff')
})

// 取得input值並輸出
$('input').keyup((e) => {
    console.log(e.target.value)
})

// Select改變
$('select#gender').change((e) => {
    console.log(e.target.value)
})

// Submit Form //!注意 對象指定Form
$('#form').submit((e) => {  
    // 要防止他提交(會刷新頁面)，才能看到log
    e.preventDefult()
    const name = $('input').val()
    
    console.log(name)
})

// 取得滑鼠座標
$(document).on('mousemove', (e) => {
    // e.clientY e.clientX 取得滑鼠XY座標
})
