+ trying to make my own version of harpoon (it is called Spear, a more native harpoon)
- somehow mark the file to be added to list
- be able to view the list quickly
- list must be easily editable like harpoon 


steps
+ mark a file with key command
    > get file location with :echo@%    
+ it gets added to a buffer, silently (doesn't show up)
    > put =expand('%:p') this adds the file to the current buffer, maybe that doesn't help though as I want it in another buffer
+ echo "file added"

when I want to view files
+ open buffer/list with key command
+ presented with an editable list
+ can easily select one 

:tabnew | r !echo #
>  this puts current file name into new tab 
tabnew gavin | r !echo #
>  this puts current file name into new tab called gavin 
> so now I need to name the buffer and make sure all file names are added to this same buffer

? create new buffer/file on vim load, using another function?

:new filename | r !echo #
> this created a new file called filename, and prints current file name into it
> this is the same as above except we now have a file to point to - but also have a file to delete later potentially?


+ currently working but now the SPEAR buffer is in my jump list..

harpoon lets me choose the file without jumping back to harpoon..
