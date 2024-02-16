## sync directories with external ignore file

```shell
rsync -av --exclude-from={'list.txt'} sourcedir/ destinationdir/
```

`list.txt`
```shell
testfile2.txt
*.txt
dir3
dir4
test*
*2*
```

[[Rsync over SSH]]

- `-a` (archive)
- `-v` (verbose)
- `-e` (endpoint over ssh)
- `-z` (compress zip)
- `-P` (partial & progress) "Resume partial transfers. Show transfer progress"
- `2>&1` at the end of the `rsync` command, this appends errors as well
- synchronize the source directory `/src` with the destination directory `/dst`

I use `TARGET` variable to make naming of logs and directory selector easy to change

## Examples

### Sync, Ignore, and Remove Unwanted

Trying to integrate this with my [Digital Gardening](📁developer/Digital%20Gardening.md) file management

```bash
#! /bin/bash

WORKDIR="/mnt/uasis5/gardens/my-notes"
DATE=`date +"%Y %b, %d [%H:%M]"`

SOURCE="/mnt/uasis5/notes/my-notes/vault"
IGNORE="ignore.md"
DESTIN="/mnt/uasis5/gardens/my-notes/published-vault"
## for a front page
INDEX="my-notes/index.md"

cd $WORKDIR

rsync -av --exclude-from="$SOURCE/$IGNORE" $SOURCE/ $DESTIN/
cp $SOURCE/$INDEX $DESTIN/index.md
rm $DESTIN/$IGNORE
```

---
is this working at all from milkywave? 
## Credits
- [How to use Rsync to exclude Files and Directories in Data Transfer (phoenixnap.com)](https://phoenixnap.com/kb/rsync-exclude-files-and-directories)
- [How to use rsync over ssh - Linux Tutorials - Learn Linux Configuration](https://linuxconfig.org/using-rsync-over-ssh-an-ultimate-backup-tool)

## Backlinks
- [[Linux]]