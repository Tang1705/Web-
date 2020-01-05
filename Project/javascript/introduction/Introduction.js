document.ready(
    function () {
        tocbot.init({
            tocSelector: '.tocbot-list',
            contentSelector: '.content',
            headingSelector: 'h1, h2, h3, h4, h5',
            collapseDepth: 1,
            orderedList: false,
            scrollSmooth: true,
        })
    }
)

function expand_toc() {
    var b = document.querySelector(".tocbot-toc-expand");
    tocbot.init({
        tocSelector: '.tocbot-list',
        contentSelector: '.content',
        headingSelector: 'h1, h2, h3, h4, h5',
        collapseDepth: 6,
        orderedList: false,
        scrollSmooth: true,
    });

    b.setAttribute("onclick", "collapse_toc()");
    b.innerHTML = "收起全部"
}

function collapse_toc() {
    var b = document.querySelector(".tocbot-toc-expand");
    tocbot.init({
        tocSelector: '.tocbot-list',
        contentSelector: '.content',
        headingSelector: 'h1, h2, h3, h4, h5',
        collapseDepth: 1,
        orderedList: false,
        scrollSmooth: true,
    });
    b.setAttribute("onclick", "expand_toc()");
    b.innerHTML = "展开全部"
}

function go_top() {
    window.scrollTo(0, 0);
}

function go_bottom() {
    window.scrollTo(0, document.body.scrollHeight);
}