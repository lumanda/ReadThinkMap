
>git reset 分为三种：软 --soft，中 ---mixed，硬 --hard 对应着三种回滚的程度，程度越硬，回滚的越“狠” 

1. --soft 回退到 已 add，但尚未 commit 的状态。也就是说soft是撤销commit的提交，但工作区未提交的更改还是保留；

// 文件从已提交退回到暂存区
```
 git reset --soft f5163
 git reset --soft HEAD^
```


2. --mixed（git reset 的默认设定，可以省略不写），文件会回退到未 add（未暂存）的状态，也就是说，mixed是撤销暂存区的提交，工作区的更改同样也保留。

// 文件从暂存区退回到工作区
```
git reset HEAD
git reset HEAD test.txt
git reset --mixed HEAD test.txt
```

3. --hard 硬核，彻底，会彻底返回到回退前的版本状态，了无痕迹。就是hard是把工作区、暂存区、commit到仓库的三个版本都回滚了

回退上一个版本
```
git reset --hard HEAD^

git reset --hard HEAD~1
```
回退到某一个版本
```
git reset --hard commitId
```

reflog它会记录所有HEAD的历史，reset，checkout，commit，branch，merge等操作的时候，这些操作会被记录在reflog中。n是最近n条记录
```
git reflog -n
```
