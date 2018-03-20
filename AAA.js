//? Revealing Module Pattern
let people = (function () {
    //* 使用此種方法 外部就無法對 name做更動!
    //* 不需要 init() 因為 IIFE會立即執行

    // cache DOM
    let main = $('main')
    let btn = main.find('button')

    // bind events
    btn.on('click', addPerson)
    main.delegate('delBtn', 'click', delPerson)    
    
    //* 通常不公開的 可以寫成前面加 _ (ESLint要調)
    render()

    function render() { /* render()*/ }
    function addPerson() { /* */ }
    function delPerson() { /* */ }

    //* 將想讓外部可以觸及的放在 return中
    return {
        addPerson,
        delPerson,
    }
}())


