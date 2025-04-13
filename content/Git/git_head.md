# Git | HEAD
HEAD 是一個 reference，它指向目前所 checkout 的 commit，基本上，其實就是你目前所在的 commit。

在 commit tree 中，HEAD 總是指向最近的一次 commit。大部份 git 的指令如果要修改 commit tree 的狀態的話，都會先改變 HEAD 所指向的 commit。

HEAD 通常指向一個 branch 的名稱（比如 bugFix）。當你 commit 的時候，改變了 bugFix 的狀態，這一個變化可以從 HEAD 的改變中看到。