// 查看分支
```
git branch
```
// 查看所有(本地和远程)分支
```
git branch -a
```
// 查看远程分支
```
git branch -r
```
// 查看本地分支和远程分支的关联关系
```
git branch -vv
```
//  同时还可以查看 最后一次提交的信息
```
git branch -av
```

// 新建分支
```
git branch new_branchName 分支名
git branch new_branchName CommitId
```
// 修改分支名称
```
git branch -m <oldBranchName> <newBranchName>
```
//删除本地分支（合并过的）-D就是强制删除，不做检验
```
git branch -D dev
```
//删除本地分支（没有合并过的）-d就是删除，会检验分支内容是不是都被合并到别的分支了，这样免得把修改内容弄丢了。
```
git branch -d dev
```

//删除远程分支
```
git push origin --delete dev
```

