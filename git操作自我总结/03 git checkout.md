git checkout命令对三个不同的实体进行操作, 它们分别是**分支,文件和提交**。有时, 此命令可能很危险, 因为此命令上没有撤消选项。

#### 操作对象是分支

// 创建分支
```
git branch new_branchName old_branchName
```

// 切换分支
```javaScript
git checkout branch_name
```
// 创建分支并切换
```
git checkout -b branch_name
```
//远程分支有，本地没有 同时建立联系
```
git checkout --track origin/hlj0521
```

#### 操作对象是文件
// 丢弃 test文件工作区的修改，**此命令非常危险**，慎用
// 相对于最后一次添加（add）到暂存区之后所做的修改
// 但是此命令不会删除掉刚新建的文件。因为刚新建的文件还没已有加入到 git 的管理系统中。
```
git checkout --test.tx
```
// 撤销掉工作区的任何最新修改，**该命令更危险**
```
git checkout .
```

// 文件从暂存区退回到工作区
```
git reset HEAD test.txt
```

#### 操作对象是提交点时

// 切到了其他的提交，HEAD就处于游离的状态
```
git checkout a528625
```
// 在游离分支下可以提交，也可以切换分支，但修改的内容就会被暂时丢弃
// 要想留下改动，就要基于 a528625 这个提交点新建分支
```
git branch new_branchName a528625
```



