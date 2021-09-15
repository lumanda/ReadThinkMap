回退上一个版本
```
git reset --hard HEAD^

git reset --hard HEAD~1
```
回退到某一个版本
```
git reset --hard commitId
```

// 文件从暂存区退回到工作区
```
git reset HEAD test.txt
```

reflog它会记录所有HEAD的历史，reset，checkout，commit，branch，merge等操作的时候，这些操作会被记录在reflog中。n是最近n条记录
```
git reflog -n
```